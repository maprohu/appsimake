if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-buildenv'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-buildenv' was not found. Please, check whether 'appsimake-buildenv' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-commonui'.");
}
this['appsimake-commonui'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_domx, $module$appsimake_common, $module$kotlinx_coroutines_core, $module$appsimake_buildenv, $module$appsimake_fontawesome, $module$appsimake_bootstrap) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var KillsApiDomx = $module$appsimake_domx.domx.KillsApiDomx;
  var Api = $module$appsimake_commonshr.commonshr.Api;
  var CsApi = $module$appsimake_commonshr.commonshr.CsApi;
  var CsKillsApiCommon = $module$appsimake_common.common.CsKillsApiCommon;
  var CsKillsApi = $module$appsimake_commonshr.commonshr.CsKillsApi;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var buildenv = $module$appsimake_buildenv.buildenv;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Unit = Kotlin.kotlin.Unit;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var Var = $module$appsimake_commonshr.rx.Var;
  var killable = $module$appsimake_commonshr.killable;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_lqp1nt$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var get_video = $module$appsimake_domx.domx.get_video_asww5s$;
  var get_source = $module$appsimake_domx.domx.get_source_asww5s$;
  var base64 = $module$appsimake_domx.domx.base64_mf97a2$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var Random = Kotlin.kotlin.random.Random;
  var listen = $module$appsimake_common.common.listen_hgi4ad$;
  var listenOnce = $module$appsimake_common.common.listenOnce_hgi4ad$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var reportd = $module$appsimake_commonshr.commonshr.reportd_za3rmp$;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var Emitter = $module$appsimake_commonshr.common.Emitter;
  var throwCCE = Kotlin.throwCCE;
  var get_fn = $module$appsimake_commonshr.commonshr.get_fn_4b7k9i$;
  var get_connection = $module$appsimake_common.common.get_connection_yi0el1$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Any = Object;
  var get_input = $module$appsimake_domx.domx.get_input_asww5s$;
  var equals = Kotlin.equals;
  var HasKills = $module$appsimake_commonshr.commonshr.HasKills;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var rx = $module$appsimake_commonshr.rx.rx_m71pkk$;
  var add = $module$appsimake_commonshr.rx.add_2hqy4a$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var KillsApi = $module$appsimake_commonshr.commonshr.KillsApi;
  var copy = $module$appsimake_commonshr.commonshr.properties.copy_szlj5h$;
  var rxCompare = $module$appsimake_commonshr.commonshr.properties.rxCompare_kagv6q$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var Throwable = Error;
  var get_save = $module$appsimake_fontawesome.fontawesome.get_save_xml72e$;
  var get_textDanger = $module$appsimake_bootstrap.bootstrap.get_textDanger_kre7dp$;
  var get_trashAlt = $module$appsimake_fontawesome.fontawesome.get_trashAlt_xml72e$;
  var get_textSuccess = $module$appsimake_bootstrap.bootstrap.get_textSuccess_kre7dp$;
  var get_backspace = $module$appsimake_fontawesome.fontawesome.get_backspace_xml72e$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var get_p2 = $module$appsimake_bootstrap.bootstrap.get_p2_kre7dp$;
  var get_btnSuccess = $module$appsimake_bootstrap.bootstrap.get_btnSuccess_kre7dp$;
  var get_span = $module$appsimake_domx.domx.get_span_asww5s$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_fa = $module$appsimake_fontawesome.fontawesome.get_fa_kre7dp$;
  var get_fw = $module$appsimake_fontawesome.fontawesome.get_fw_xml72e$;
  var get_chevronLeft = $module$appsimake_fontawesome.fontawesome.get_chevronLeft_xml72e$;
  var InvokeApply = $module$appsimake_commonshr.commonshr.InvokeApply;
  var get_eye = $module$appsimake_fontawesome.fontawesome.get_eye_xml72e$;
  var get_btnSecondary = $module$appsimake_bootstrap.bootstrap.get_btnSecondary_kre7dp$;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var commonshr = $module$appsimake_commonshr.commonshr;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var dropLast = Kotlin.kotlin.collections.dropLast_yzln2o$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Pair = Kotlin.kotlin.Pair;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var drop = Kotlin.kotlin.text.drop_6ic1pp$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var on = $module$appsimake_domx.domx.on_ukchg8$;
  var insertAt = $module$appsimake_common.common.insertAt_y55kqv$;
  var ListEvent$Add = $module$appsimake_commonshr.commonshr.ListEvent.Add;
  var removeAt = $module$appsimake_common.common.removeAt_jeu5im$;
  var ListEvent$Move = $module$appsimake_commonshr.commonshr.ListEvent.Move;
  var ListEvent$Remove = $module$appsimake_commonshr.commonshr.ListEvent.Remove;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var column = $module$appsimake_bootstrap.bootstrap.column_kre7dp$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_kre7dp$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var get_textMuted = $module$appsimake_bootstrap.bootstrap.get_textMuted_kre7dp$;
  var rxText = $module$appsimake_bootstrap.bootstrap.rxText_uh949j$;
  var get_positionRelative = $module$appsimake_bootstrap.bootstrap.get_positionRelative_kre7dp$;
  var get_positionAbsolute = $module$appsimake_bootstrap.bootstrap.get_positionAbsolute_kre7dp$;
  var get_leftRightTopBottom0 = $module$appsimake_domx.styles.get_leftRightTopBottom0_kre7dp$;
  var get_img = $module$appsimake_domx.domx.get_img_asww5s$;
  var get_border = $module$appsimake_bootstrap.bootstrap.get_border_kre7dp$;
  var get_rounded = $module$appsimake_bootstrap.bootstrap.get_rounded_kre7dp$;
  var get_w100 = $module$appsimake_bootstrap.bootstrap.get_w100_kre7dp$;
  var get_h100 = $module$appsimake_bootstrap.bootstrap.get_h100_kre7dp$;
  var get_objectFitCover = $module$appsimake_domx.styles.get_objectFitCover_kre7dp$;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var HasKillKilledKills = $module$appsimake_commonshr.commonshr.HasKillKilledKills;
  var killables = $module$appsimake_commonshr.killable.killables_yzxo1x$;
  var HasKillKills = $module$appsimake_commonshr.commonshr.HasKillKills;
  var perform = $module$appsimake_commonshr.killable.perform_1gfkez$;
  var forEach = $module$appsimake_commonshr.rx.forEach_yaias7$;
  var get_badgePrimary = $module$appsimake_bootstrap.bootstrap.get_badgePrimary_kre7dp$;
  var get_badgeSecondary = $module$appsimake_bootstrap.bootstrap.get_badgeSecondary_kre7dp$;
  var get_badgeInfo = $module$appsimake_bootstrap.bootstrap.get_badgeInfo_kre7dp$;
  var get_badgeWarning = $module$appsimake_bootstrap.bootstrap.get_badgeWarning_kre7dp$;
  var get_badgePill = $module$appsimake_bootstrap.bootstrap.get_badgePill_kre7dp$;
  var get_badge = $module$appsimake_bootstrap.bootstrap.get_badge_kre7dp$;
  var get_a = $module$appsimake_domx.domx.get_a_asww5s$;
  var setupFullScreen = $module$appsimake_bootstrap.bootstrap.setupFullScreen;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwUPAE = Kotlin.throwUPAE;
  var rxEnabled = $module$appsimake_domx.domx.rxEnabled_3afqaq$;
  var get_button = $module$appsimake_domx.domx.get_button_asww5s$;
  var get_btn = $module$appsimake_bootstrap.bootstrap.get_btn_kre7dp$;
  var get_btnPrimary = $module$appsimake_bootstrap.bootstrap.get_btnPrimary_kre7dp$;
  var get_btnOutlineSecondary = $module$appsimake_bootstrap.bootstrap.get_btnOutlineSecondary_kre7dp$;
  var get_btnWarning = $module$appsimake_bootstrap.bootstrap.get_btnWarning_kre7dp$;
  var get_btnDanger = $module$appsimake_bootstrap.bootstrap.get_btnDanger_kre7dp$;
  var get_btnGroup = $module$appsimake_bootstrap.bootstrap.get_btnGroup_kre7dp$;
  var dataToggleDropdown = $module$appsimake_bootstrap.bootstrap.dataToggleDropdown_v3gdir$;
  var dataReferenceParent = $module$appsimake_bootstrap.bootstrap.dataReferenceParent_v3gdir$;
  var get_dropdownToggle = $module$appsimake_bootstrap.bootstrap.get_dropdownToggle_kre7dp$;
  var get_dropdownToggleSplit = $module$appsimake_bootstrap.bootstrap.get_dropdownToggleSplit_kre7dp$;
  var get_dropdownItem = $module$appsimake_bootstrap.bootstrap.get_dropdownItem_kre7dp$;
  var get_dropdownDivider = $module$appsimake_bootstrap.bootstrap.get_dropdownDivider_kre7dp$;
  var get_signOutAlt = $module$appsimake_fontawesome.fontawesome.get_signOutAlt_xml72e$;
  var get_dropdownMenu = $module$appsimake_bootstrap.bootstrap.get_dropdownMenu_kre7dp$;
  var get_dropdownMenuRight = $module$appsimake_bootstrap.bootstrap.get_dropdownMenuRight_kre7dp$;
  var get_dropdown = $module$appsimake_bootstrap.bootstrap.get_dropdown_kre7dp$;
  var get_bars = $module$appsimake_fontawesome.fontawesome.get_bars_xml72e$;
  var rx_0 = $module$appsimake_commonshr.rx.rx_drrr49$;
  var get_form = $module$appsimake_domx.domx.get_form_asww5s$;
  var get_formGroup = $module$appsimake_bootstrap.bootstrap.get_formGroup_kre7dp$;
  var get_label = $module$appsimake_domx.domx.get_label_asww5s$;
  var get_ref = $module$appsimake_domx.domx.get_ref_ejp6nk$;
  var get_gridTemplateColumnsAuto = $module$appsimake_domx.styles.get_gridTemplateColumnsAuto_kre7dp$;
  var get_dGrid = $module$appsimake_domx.styles.get_dGrid_kre7dp$;
  var get_justifyContentCenter = $module$appsimake_bootstrap.bootstrap.get_justifyContentCenter_kre7dp$;
  var get_alignContentCenter = $module$appsimake_domx.styles.get_alignContentCenter_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var onClick = $module$appsimake_domx.domx.onClick_g3txrx$;
  var get_spinnerBorder = $module$appsimake_bootstrap.bootstrap.get_spinnerBorder_kre7dp$;
  var Fa = $module$appsimake_fontawesome.fontawesome.Fa;
  var get_faBrands = $module$appsimake_fontawesome.fontawesome.get_faBrands_kre7dp$;
  var Listeners = $module$appsimake_commonshr.common.Listeners;
  var Cls = $module$appsimake_domx.domx.Cls;
  var get_isInvalid = $module$appsimake_bootstrap.bootstrap.get_isInvalid_kre7dp$;
  var rxClass = $module$appsimake_commonshr.rx.rxClass_9rzgmr$;
  var get_formControl = $module$appsimake_bootstrap.bootstrap.get_formControl_kre7dp$;
  var get_widthAuto = $module$appsimake_domx.styles.get_widthAuto_kre7dp$;
  var get_inputGroup = $module$appsimake_bootstrap.bootstrap.get_inputGroup_kre7dp$;
  var get_inputGroupAppend = $module$appsimake_bootstrap.bootstrap.get_inputGroupAppend_kre7dp$;
  var get_listGroup = $module$appsimake_bootstrap.bootstrap.get_listGroup_kre7dp$;
  var get_listGroupItem = $module$appsimake_bootstrap.bootstrap.get_listGroupItem_kre7dp$;
  var get_listGroupItemAction = $module$appsimake_bootstrap.bootstrap.get_listGroupItemAction_kre7dp$;
  var get_dFlex = $module$appsimake_bootstrap.bootstrap.get_dFlex_kre7dp$;
  var get_flexRow = $module$appsimake_bootstrap.bootstrap.get_flexRow_kre7dp$;
  var row = $module$appsimake_bootstrap.bootstrap.row_gnmiz0$;
  var get_alignSelfCenter = $module$appsimake_bootstrap.bootstrap.get_alignSelfCenter_kre7dp$;
  var Killables = $module$appsimake_commonshr.killable.Killables;
  var get_flexColumn = $module$appsimake_bootstrap.bootstrap.get_flexColumn_kre7dp$;
  var get_pointerEventsAll = $module$appsimake_domx.styles.get_pointerEventsAll_kre7dp$;
  var get_p0 = $module$appsimake_bootstrap.bootstrap.get_p0_kre7dp$;
  var get_pointerEventsNone = $module$appsimake_domx.styles.get_pointerEventsNone_kre7dp$;
  var get_zIndex1 = $module$appsimake_domx.styles.get_zIndex1_kre7dp$;
  var row_0 = $module$appsimake_bootstrap.bootstrap.row_kre7dp$;
  var common = $module$appsimake_commonshr.common;
  var Some = $module$appsimake_commonshr.common.Some;
  var plusAssign_0 = $module$appsimake_commonshr.commonshr.plusAssign_rmur43$;
  var addedTo = $module$appsimake_commonshr.killable.addedTo_tjw9ba$;
  var column_0 = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var get_height0 = $module$appsimake_domx.styles.get_height0_kre7dp$;
  var get_scrollVertical = $module$appsimake_domx.styles.get_scrollVertical_kre7dp$;
  var get_option = $module$appsimake_domx.domx.get_option_asww5s$;
  var get_select = $module$appsimake_domx.domx.get_select_asww5s$;
  var get_customSelect = $module$appsimake_bootstrap.bootstrap.get_customSelect_kre7dp$;
  var get_justifyContentEnd = $module$appsimake_bootstrap.bootstrap.get_justifyContentEnd_kre7dp$;
  var get_textarea = $module$appsimake_domx.domx.get_textarea_asww5s$;
  var get_alignItemsEnd = $module$appsimake_bootstrap.bootstrap.get_alignItemsEnd_kre7dp$;
  var get_justifyContentStart = $module$appsimake_bootstrap.bootstrap.get_justifyContentStart_kre7dp$;
  var get_alert = $module$appsimake_bootstrap.bootstrap.get_alert_kre7dp$;
  var get_textDecorationNone = $module$appsimake_domx.styles.get_textDecorationNone_kre7dp$;
  var get_hoverColorInherit = $module$appsimake_domx.styles.get_hoverColorInherit_kre7dp$;
  var removeFromParent = $module$appsimake_common.common.removeFromParent_asww5s$;
  var get_alertWarning = $module$appsimake_bootstrap.bootstrap.get_alertWarning_kre7dp$;
  var get_alertDanger = $module$appsimake_bootstrap.bootstrap.get_alertDanger_kre7dp$;
  var get_sm = $module$appsimake_fontawesome.fontawesome.get_sm_xml72e$;
  var get_times = $module$appsimake_fontawesome.fontawesome.get_times_xml72e$;
  var get_bgLight = $module$appsimake_bootstrap.bootstrap.get_bgLight_kre7dp$;
  var get_borderBottom = $module$appsimake_bootstrap.bootstrap.get_borderBottom_kre7dp$;
  var get_h5 = $module$appsimake_domx.domx.get_h5_asww5s$;
  var get_navTabs = $module$appsimake_bootstrap.bootstrap.get_navTabs_kre7dp$;
  var get_px1 = $module$appsimake_bootstrap.bootstrap.get_px1_kre7dp$;
  var get_mt1 = $module$appsimake_bootstrap.bootstrap.get_mt1_kre7dp$;
  var get_navItem = $module$appsimake_bootstrap.bootstrap.get_navItem_kre7dp$;
  var get_navLink = $module$appsimake_bootstrap.bootstrap.get_navLink_kre7dp$;
  var get_px2 = $module$appsimake_bootstrap.bootstrap.get_px2_kre7dp$;
  var get_active = $module$appsimake_bootstrap.bootstrap.get_active_kre7dp$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var insertAfter = $module$appsimake_common.common.insertAfter_5a54o3$;
  var replaceWith = $module$appsimake_common.common.replaceWith_fga9sf$;
  var rxClass_0 = $module$appsimake_commonshr.rx.rxClass_53u32h$;
  DefaultEditing.prototype = Object.create(DefaultBindings.prototype);
  DefaultEditing.prototype.constructor = DefaultEditing;
  RxCreating.prototype = Object.create(DefaultBindings.prototype);
  RxCreating.prototype.constructor = RxCreating;
  RxEditing.prototype = Object.create(DefaultEditing.prototype);
  RxEditing.prototype.constructor = RxEditing;
  CsKillsView.prototype = Object.create(CsKills.prototype);
  CsKillsView.prototype.constructor = CsKillsView;
  ErrorTC.prototype = Object.create(CsKillsView.prototype);
  ErrorTC.prototype.constructor = ErrorTC;
  HomeLinkPoint.prototype = Object.create(BaseLinkPoint.prototype);
  HomeLinkPoint.prototype.constructor = HomeLinkPoint;
  ChildLinkPoint.prototype = Object.create(BaseLinkPoint.prototype);
  ChildLinkPoint.prototype.constructor = ChildLinkPoint;
  SingleLinkPoint.prototype = Object.create(ChildLinkPoint.prototype);
  SingleLinkPoint.prototype.constructor = SingleLinkPoint;
  MultiLinkPoint.prototype = Object.create(ChildLinkPoint.prototype);
  MultiLinkPoint.prototype.constructor = MultiLinkPoint;
  Progress.prototype = Object.create(CsKillsView.prototype);
  Progress.prototype.constructor = Progress;
  ProgressTC.prototype = Object.create(CsKillsView.prototype);
  ProgressTC.prototype.constructor = ProgressTC;
  Bind.prototype = Object.create(InboxWrap.prototype);
  Bind.prototype.constructor = Bind;
  MultiView.prototype = Object.create(CsKills.prototype);
  MultiView.prototype.constructor = MultiView;
  ForwardView.prototype = Object.create(CsKillsView.prototype);
  ForwardView.prototype.constructor = ForwardView;
  ForwardBase.prototype = Object.create(ForwardView.prototype);
  ForwardBase.prototype.constructor = ForwardBase;
  AbstractBadge.prototype = Object.create(ScreenWrap.prototype);
  AbstractBadge.prototype.constructor = AbstractBadge;
  Badge.prototype = Object.create(AbstractBadge.prototype);
  Badge.prototype.constructor = Badge;
  BadgeAnchor.prototype = Object.create(AbstractBadge.prototype);
  BadgeAnchor.prototype.constructor = BadgeAnchor;
  Body.prototype = Object.create(CsKills.prototype);
  Body.prototype.constructor = Body;
  BodyTC.prototype = Object.create(CsKillsView.prototype);
  BodyTC.prototype.constructor = BodyTC;
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
  Grid.prototype = Object.create(ScreenWrap.prototype);
  Grid.prototype.constructor = Grid;
  Hourglass.prototype = Object.create(ScreenWrap.prototype);
  Hourglass.prototype.constructor = Hourglass;
  Icon.prototype = Object.create(ScreenWrap.prototype);
  Icon.prototype.constructor = Icon;
  AbstractInput.prototype = Object.create(ScreenWrap.prototype);
  AbstractInput.prototype.constructor = AbstractInput;
  Input.prototype = Object.create(AbstractInput.prototype);
  Input.prototype.constructor = Input;
  InputGroup.prototype = Object.create(ScreenWrap.prototype);
  InputGroup.prototype.constructor = InputGroup;
  ListGroup.prototype = Object.create(ScreenWrap.prototype);
  ListGroup.prototype.constructor = ListGroup;
  ListGroupButton.prototype = Object.create(ScreenWrap.prototype);
  ListGroupButton.prototype.constructor = ListGroupButton;
  NestedListButton.prototype = Object.create(ScreenWrap.prototype);
  NestedListButton.prototype.constructor = NestedListButton;
  Screen.prototype = Object.create(ScreenWrap.prototype);
  Screen.prototype.constructor = Screen;
  ScrollPane.prototype = Object.create(ScreenWrap.prototype);
  ScrollPane.prototype.constructor = ScrollPane;
  Select.prototype = Object.create(AbstractInput.prototype);
  Select.prototype.constructor = Select;
  Stack.prototype = Object.create(ScreenWrap.prototype);
  Stack.prototype.constructor = Stack;
  Status.prototype = Object.create(ScreenWrap.prototype);
  Status.prototype.constructor = Status;
  TextArea.prototype = Object.create(AbstractInput.prototype);
  TextArea.prototype.constructor = TextArea;
  Toasts.prototype = Object.create(ScreenWrap.prototype);
  Toasts.prototype.constructor = Toasts;
  Toast.prototype = Object.create(ScreenWrap.prototype);
  Toast.prototype.constructor = Toast;
  HourglassView.prototype = Object.create(CsKillsView.prototype);
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
  KillsApiCommonui.prototype.visibility_12lt6u$ = function ($receiver, fn) {
    return visibility($receiver, this, fn);
  };
  KillsApiCommonui.prototype.enabled_hlnvpg$ = function ($receiver, fn) {
    $receiver.enabled_bii2r3$(this, fn);
  };
  KillsApiCommonui.prototype.rxClass_9npl0m$ = function ($receiver, stl, fn) {
    rxClass_1($receiver, this, stl, fn);
  };
  KillsApiCommonui.prototype.rxClass_62ldac$ = function ($receiver, stl, fn) {
    rxClass_2($receiver, this, stl, fn);
  };
  KillsApiCommonui.prototype.visible_od9jl4$ = function ($receiver, fn) {
    visible($receiver, this, fn);
  };
  KillsApiCommonui.prototype.bind_zfaq6f$ = function ($receiver, prop) {
    bind_2($receiver, this, prop);
  };
  KillsApiCommonui.prototype.bindValue_xy1r9h$ = function ($receiver, prop) {
    bindValue($receiver, this, prop);
  };
  KillsApiCommonui.prototype.runView_fpu3uh$ = function ($receiver, hole) {
    runView($receiver, this, hole);
  };
  KillsApiCommonui.prototype.get_routing_lqv1tx$ = function ($receiver) {
    return routing($receiver, this);
  };
  KillsApiCommonui.prototype.addDirty_3529di$ = function ($receiver, fn) {
    addDirty($receiver, this, fn);
  };
  KillsApiCommonui.prototype.keepScreenAwake_ipfk82$ = function ($receiver) {
    keepScreenAwake($receiver, this);
  };
  KillsApiCommonui.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KillsApiCommonui',
    interfaces: [KillsApiDomx]
  };
  function KillsUixApi() {
  }
  KillsUixApi.prototype.click_ts68bh$ = function ($receiver, action) {
    click($receiver, this, action);
  };
  KillsUixApi.prototype.click_9375ex$ = function ($receiver, action) {
    click_1($receiver, this, action);
  };
  KillsUixApi.prototype.click_4eku4n$ = function ($receiver, action) {
    click_0($receiver, this, action);
  };
  KillsUixApi.prototype.click_512jbc$ = function ($receiver, action) {
    click_2($receiver, this, action);
  };
  KillsUixApi.prototype.click_3zaxtq$ = function ($receiver, action) {
    click_3($receiver, this, action);
  };
  KillsUixApi.prototype.signOut_tstgz9$ = function ($receiver, action) {
    return $receiver.signOut_jliuvt$(this, action);
  };
  KillsUixApi.prototype.get_clickActivate_tvm2vp$ = function ($receiver) {
    clickActivate($receiver, this);
  };
  KillsUixApi.prototype.get_clickToggle_tvm2vp$ = function ($receiver) {
    clickToggle($receiver, this);
  };
  KillsUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KillsUixApi',
    interfaces: [KillsApiCommonui, HasKillsUix, Api]
  };
  function BackApi() {
  }
  BackApi.prototype.backOnDelete_287e2$ = function () {
    return backOnDelete(this);
  };
  BackApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BackApi',
    interfaces: [HasBack, Api]
  };
  function BackKillsUixApi() {
  }
  BackKillsUixApi.prototype.get_backButton_ihoiae$ = function ($receiver) {
    return backButton($receiver, this);
  };
  BackKillsUixApi.prototype.get_backButton_tdhe4g$ = function ($receiver) {
    return backButton_0($receiver, this);
  };
  BackKillsUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BackKillsUixApi',
    interfaces: [KillsUixApi, HasBackKillsUix, BackApi, Api]
  };
  function CsApiCommonui() {
  }
  CsApiCommonui.prototype.list_u1uvxv$ = function ($receiver, nodes) {
    nodeList($receiver, this, nodes);
  };
  CsApiCommonui.prototype.list_qlxt6c$ = function ($receiver, nodes) {
    list($receiver, this, nodes);
  };
  CsApiCommonui.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsApiCommonui',
    interfaces: [CsApi]
  };
  function CsKillsApiCommonui() {
  }
  CsKillsApiCommonui.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsKillsApiCommonui',
    interfaces: [CsKillsApiCommon, KillsApiCommonui, CsApiCommonui]
  };
  function BindKillsApi() {
  }
  BindKillsApi.prototype.bind_8y93tj$ = function ($receiver, rxv) {
    return bind($receiver, this, rxv);
  };
  BindKillsApi.prototype.bind_igb9j9$ = function ($receiver, rxv) {
    return bind_0($receiver, this, rxv);
  };
  BindKillsApi.prototype.bind_4dd4yj$ = function ($receiver, modelValue, initial, extract) {
    return bind_1($receiver, this, modelValue, initial, extract);
  };
  BindKillsApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BindKillsApi',
    interfaces: [KillsApiCommonui, HasBindKills]
  };
  function EditKillsApi() {
  }
  EditKillsApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditKillsApi',
    interfaces: [HasEditKills, BindKillsApi]
  };
  function CreateKillsApi() {
  }
  CreateKillsApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CreateKillsApi',
    interfaces: [HasCreateKills, BindKillsApi]
  };
  function CreateKillsUixApi() {
  }
  CreateKillsUixApi.prototype.get_persistButton_tdhe4g$ = function ($receiver) {
    return persistButton($receiver, this);
  };
  CreateKillsUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CreateKillsUixApi',
    interfaces: [HasCreateKillsUix, CreateKillsApi]
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
  function BackEditKillsUixApi() {
  }
  BackEditKillsUixApi.prototype.get_backSaveDiscard_e1rmy3$ = function ($receiver) {
    return new BackSaveDiscard(this, $receiver);
  };
  BackEditKillsUixApi.prototype.get_saveDeleteButton_tdhe4g$ = function ($receiver) {
    return saveDeleteButton($receiver, this);
  };
  BackEditKillsUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BackEditKillsUixApi',
    interfaces: [HasBackEditKillsUix, EditKillsUixApi]
  };
  function BackCreateKillsUixApi() {
  }
  BackCreateKillsUixApi.prototype.get_backPersistDiscard_e1rmy3$ = function ($receiver) {
    return new BackPersistDiscard(this, $receiver);
  };
  BackCreateKillsUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BackCreateKillsUixApi',
    interfaces: [HasBackCreateKillsUix, CreateKillsUixApi]
  };
  function BindCsKillsUixApi() {
  }
  BindCsKillsUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BindCsKillsUixApi',
    interfaces: [CsApiCommonui, CsKillsApi, KillsUixApi, BindKillsApi]
  };
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
  var loadApp = defineInlineFunction('appsimake-commonui.commonui.loadApp_75qrqo$', wrapFunction(function () {
    var Loading_init = _.commonui.widget.Loading;
    var commonui = _.commonui;
    var Body_init = _.commonui.widget.Body;
    var CancellationException = _.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.CancellationException;
    var reportd = _.$$importsForInline$$['appsimake-commonshr'].commonshr.reportd_za3rmp$;
    return function (fn) {
      try {
        var loading = new Loading_init();
        commonui.APP.startRegisteringServiceWorker();
        var $receiver = new Body_init(loading.target);
        $receiver.hole.remAssign_looze4$(fn($receiver));
      }
       catch (e) {
        if (Kotlin.isType(e, CancellationException)) {
          throw e;
        }
         else {
          commonui.globalStatus.remAssign_11rb$('Error: ' + e.toString());
          reportd(e);
          throw e;
        }
      }
    };
  }));
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
  function keepAwakeVideo$lambda$lambda$lambda$lambda(this$) {
    return function (it) {
      if (this$.currentTime > 0.5) {
        this$.currentTime = Random.Default.nextDouble_14dthe$(0.25);
      }
      return Unit;
    };
  }
  function keepAwakeVideo$lambda$lambda$lambda(this$) {
    return function (it) {
      if (contains(this$.currentSrc, 'video/webm')) {
        this$.loop = true;
      }
       else {
        listen(this$, 'timeupdate', keepAwakeVideo$lambda$lambda$lambda$lambda(this$));
      }
      return Unit;
    };
  }
  function keepAwakeVideo$lambda$lambda$lambda_0(closure$cd, this$) {
    return function (it) {
      closure$cd.complete_11rb$(new KeepAwake(this$));
      return Unit;
    };
  }
  function keepAwakeVideo$lambda$lambda(closure$cd) {
    return function ($receiver) {
      $receiver.muted = true;
      $receiver.playsInline = true;
      $receiver.title = 'KeepAwake';
      base64(get_source($receiver), 'video/webm', 'GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4ECQoWBAhhTgGcBAAAAAAACsRFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsggKU7AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU2LjQwLjEwMVdBjUxhdmY1Ni40MC4xMDFzpJBa+D6CL3UWrC/5kCoA+CFiRImIQLOIAAAAAAAWVK5rAQAAAAAAAEOuAQAAAAAAADrXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEO5rKAOABAAAAAAAADrCBAbqBAVSwgQFUuoEBH0O2dQEAAAAAAAEJ54EAo8CBAACA8AIAnQEqAQABAABHCIWFiJmEiAICAnWqA/gD+gINTbYA/v+rWY//oHlgFvIt/9A8//6B5YBbyLf/QEQAo6+BA+gAsQEAARAQABgAMD/0DADCAP7/q1mP/6B5YBbyLf/QPP/+geWAW8i3/0BEAKOvgQfQALEBAAEQEAAYADA/9AwAwgD+/6tZj/+geWAW8i3/0Dz//oHlgFvIt/9ARACjr4ELuACxAQABEBAAGAAwP/QMAMIA/v+rWY//oHlgFvIt/9A8//6B5YBbyLf/QEQAo6+BD6AAsQEAARAQABgAMD/0DADCAP7/q1mP/6B5YBbyLf/QPP/+geWAW8i3/0BEABxTu2sBAAAAAAAAEbuPs4EAt4r3gQHxggF/8IED');
      base64(get_source($receiver), 'video/mp4', 'AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA=');
      listenOnce($receiver, 'loadedmetadata', keepAwakeVideo$lambda$lambda$lambda($receiver));
      listenOnce($receiver, 'canplay', keepAwakeVideo$lambda$lambda$lambda_0(closure$cd, $receiver));
      $receiver.load();
      return Unit;
    };
  }
  function keepAwakeVideo$lambda() {
    var cd = CompletableDeferred();
    invoke(get_video(document), keepAwakeVideo$lambda$lambda(cd));
    return cd;
  }
  var keepAwakeVideo;
  function get_keepAwakeVideo() {
    return keepAwakeVideo.value;
  }
  function KeepAwake(video) {
    this.video_8be2vx$ = video;
    this.keepAwakeCounter_8be2vx$ = 0;
  }
  KeepAwake.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeepAwake',
    interfaces: []
  };
  function keepScreenAwake$lambda(this$keepScreenAwake) {
    return function () {
      var tmp$;
      tmp$ = this$keepScreenAwake.keepAwakeCounter_8be2vx$;
      this$keepScreenAwake.keepAwakeCounter_8be2vx$ = tmp$ - 1 | 0;
      if (this$keepScreenAwake.keepAwakeCounter_8be2vx$ === 0) {
        try {
          this$keepScreenAwake.video_8be2vx$.pause();
        }
         catch (e) {
          reportd(e);
        }
      }
      return Unit;
    };
  }
  function keepScreenAwake($receiver, deps) {
    if ($receiver.keepAwakeCounter_8be2vx$ === 0) {
      var $receiver_0 = $receiver.video_8be2vx$;
      try {
        $receiver_0.currentTime = 0.0;
        $receiver_0.play();
      }
       catch (e) {
        reportd(e);
      }
    }
    $receiver.keepAwakeCounter_8be2vx$ = $receiver.keepAwakeCounter_8be2vx$ + 1 | 0;
    plusAssign(deps.kills, keepScreenAwake$lambda($receiver));
  }
  function keepAwake(continuation) {
    return get_keepAwakeVideo().await(continuation);
  }
  function popstates$lambda$lambda(closure$emitter) {
    return function (it) {
      var tmp$;
      closure$emitter.emit_11rb$(Kotlin.isType(tmp$ = it, PopStateEvent) ? tmp$ : throwCCE());
      return Unit;
    };
  }
  function popstates$lambda() {
    var emitter = new Emitter();
    window.addEventListener('popstate', popstates$lambda$lambda(emitter));
    return get_fn(emitter);
  }
  var popstates;
  function get_popstates() {
    return popstates.value;
  }
  function networkType$lambda$update(closure$connection, closure$rxv) {
    return function () {
      closure$rxv.now = closure$connection.type;
    };
  }
  function networkType$lambda$lambda(closure$update) {
    return function (it) {
      closure$update();
      return Unit;
    };
  }
  function Coroutine$networkType$lambda$lambda(closure$update_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$update = closure$update_0;
  }
  Coroutine$networkType$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$networkType$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$networkType$lambda$lambda.prototype.constructor = Coroutine$networkType$lambda$lambda;
  Coroutine$networkType$lambda$lambda.prototype.doResume = function () {
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
  function networkType$lambda$lambda_0(closure$update_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$networkType$lambda$lambda(closure$update_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function networkType$lambda() {
    var rxv = new Var('unknown');
    var connection = get_connection(window.navigator);
    var update = networkType$lambda$update(connection, rxv);
    connection.addEventListener('change', networkType$lambda$lambda(update));
    launch(coroutines.GlobalScope, void 0, void 0, networkType$lambda$lambda_0(update));
    return rxv;
  }
  var networkType;
  function get_networkType() {
    return networkType.value;
  }
  function networkEffectiveType$lambda$update(closure$connection, closure$rxv) {
    return function () {
      closure$rxv.now = closure$connection.effectiveType;
    };
  }
  function networkEffectiveType$lambda$lambda(closure$update) {
    return function (it) {
      closure$update();
      return Unit;
    };
  }
  function Coroutine$networkEffectiveType$lambda$lambda(closure$update_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$update = closure$update_0;
  }
  Coroutine$networkEffectiveType$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$networkEffectiveType$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$networkEffectiveType$lambda$lambda.prototype.constructor = Coroutine$networkEffectiveType$lambda$lambda;
  Coroutine$networkEffectiveType$lambda$lambda.prototype.doResume = function () {
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
  function networkEffectiveType$lambda$lambda_0(closure$update_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$networkEffectiveType$lambda$lambda(closure$update_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function networkEffectiveType$lambda() {
    var connection = get_connection(window.navigator);
    var rxv = new Var(connection.effectiveType);
    var update = networkEffectiveType$lambda$update(connection, rxv);
    connection.addEventListener('change', networkEffectiveType$lambda$lambda(update));
    launch(coroutines.GlobalScope, void 0, void 0, networkEffectiveType$lambda$lambda_0(update));
    return rxv;
  }
  var networkEffectiveType;
  function get_networkEffectiveType() {
    return networkEffectiveType.value;
  }
  function isServiceWorkerSupported$lambda() {
    var tmp$;
    return (Kotlin.isType(tmp$ = window.navigator.serviceWorker, Any) ? tmp$ : null) != null;
  }
  var isServiceWorkerSupported;
  function get_isServiceWorkerSupported() {
    return isServiceWorkerSupported.value;
  }
  function webkitdirectorySupported$lambda() {
    return equals(typeof get_input(document).webkitdirectory, 'boolean');
  }
  var webkitdirectorySupported;
  function get_webkitdirectorySupported() {
    return webkitdirectorySupported.value;
  }
  function backButton($receiver, deps) {
    return backButton_0($receiver.left, deps);
  }
  function backButton$lambda$lambda(closure$deps) {
    return function () {
      closure$deps.back();
      return Unit;
    };
  }
  function backButton_0($receiver, deps) {
    var $receiver_0 = $receiver.button;
    $receiver_0.back;
    click_1($receiver_0, deps, backButton$lambda$lambda(deps));
    return $receiver_0;
  }
  function HasHash() {
  }
  HasHash.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasHash',
    interfaces: []
  };
  function HasLinkage() {
  }
  HasLinkage.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasLinkage',
    interfaces: []
  };
  function HasHashKillsRedisplay() {
  }
  HasHashKillsRedisplay.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasHashKillsRedisplay',
    interfaces: [HasKillsRedisplay, HasHash]
  };
  function HasKillsLinkageRedisplay() {
  }
  HasKillsLinkageRedisplay.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKillsLinkageRedisplay',
    interfaces: [HasKillsRedisplay, HasLinkage]
  };
  function HasBind() {
  }
  HasBind.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasBind',
    interfaces: []
  };
  function HasEdit() {
  }
  Object.defineProperty(HasEdit.prototype, 'bindings', {
    get: function () {
      return this.editing;
    }
  });
  HasEdit.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasEdit',
    interfaces: [HasBind]
  };
  function HasCreate() {
  }
  Object.defineProperty(HasCreate.prototype, 'bindings', {
    get: function () {
      return this.creating;
    }
  });
  HasCreate.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasCreate',
    interfaces: [HasBind]
  };
  function HasRedisplay() {
  }
  HasRedisplay.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasRedisplay',
    interfaces: []
  };
  function HasRedisplayv() {
  }
  HasRedisplayv.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasRedisplayv',
    interfaces: [HasRedisplay]
  };
  function HasBackRedisplayv() {
  }
  HasBackRedisplayv.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasBackRedisplayv',
    interfaces: [HasRedisplayv, HasBack]
  };
  function HasKillsRedisplay() {
  }
  HasKillsRedisplay.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKillsRedisplay',
    interfaces: [HasRedisplay, HasKills]
  };
  function HasCsRedisplay() {
  }
  HasCsRedisplay.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasCsRedisplay',
    interfaces: [HasRedisplay, CoroutineScope]
  };
  function HasBindKills() {
  }
  HasBindKills.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasBindKills',
    interfaces: [HasKills, HasBind]
  };
  function HasEditKills() {
  }
  HasEditKills.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasEditKills',
    interfaces: [HasBindKills, HasKills, HasEdit]
  };
  function HasCreateKills() {
  }
  HasCreateKills.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasCreateKills',
    interfaces: [HasKills, HasCreate]
  };
  function BindKillsDeps(bindings, kills) {
    this.bindings_o0bg45$_0 = bindings;
    this.kills_tf5ryy$_0 = kills;
  }
  Object.defineProperty(BindKillsDeps.prototype, 'bindings', {
    get: function () {
      return this.bindings_o0bg45$_0;
    }
  });
  Object.defineProperty(BindKillsDeps.prototype, 'kills', {
    get: function () {
      return this.kills_tf5ryy$_0;
    }
  });
  BindKillsDeps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BindKillsDeps',
    interfaces: [HasBindKills]
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
  function RedisplayDeps(redisplay) {
    this.redisplay_itsdm3$_0 = redisplay;
  }
  Object.defineProperty(RedisplayDeps.prototype, 'redisplay', {
    get: function () {
      return this.redisplay_itsdm3$_0;
    }
  });
  RedisplayDeps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RedisplayDeps',
    interfaces: [HasRedisplay]
  };
  function plus_0($receiver, kills) {
    return new BindKillsDeps($receiver, kills);
  }
  function plus_1($receiver, kills) {
    return new EditKillsDeps($receiver, kills);
  }
  function HasBackEditKillsUix() {
  }
  HasBackEditKillsUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasBackEditKillsUix',
    interfaces: [HasEditKillsUix, HasBack]
  };
  function HasBackCreateKillsUix() {
  }
  HasBackCreateKillsUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasBackCreateKillsUix',
    interfaces: [HasCreateKillsUix, HasBack]
  };
  function HasBack() {
  }
  HasBack.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasBack',
    interfaces: []
  };
  function HasEditBack() {
  }
  HasEditBack.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasEditBack',
    interfaces: [HasBack, HasEdit]
  };
  function HasUix() {
  }
  HasUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasUix',
    interfaces: []
  };
  function HasBackUix() {
  }
  HasBackUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasBackUix',
    interfaces: [HasUix, HasBack]
  };
  function HasKillsUix() {
  }
  HasKillsUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKillsUix',
    interfaces: [HasUix, HasKills]
  };
  function HasBackKillsUix() {
  }
  HasBackKillsUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasBackKillsUix',
    interfaces: [HasKillsUix, HasBackUix]
  };
  function HasEditKillsUix() {
  }
  HasEditKillsUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasEditKillsUix',
    interfaces: [HasEditKills, HasKillsUix, HasUix, HasKills, HasEdit]
  };
  function HasCreateKillsUix() {
  }
  HasCreateKillsUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasCreateKillsUix',
    interfaces: [HasCreateKills, HasKillsUix, HasUix]
  };
  function Bindings() {
  }
  Bindings.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Bindings',
    interfaces: []
  };
  function addDirty($receiver, deps, fn) {
    $receiver.addDirty_fhhxk7$(deps, rx(deps, fn));
  }
  function DefaultBindings(kills) {
    this.kills_7tmzvt$_0 = kills;
    this.extraDirty = new Var(emptyList());
    this.validations = new Var(emptyList());
    this.canSave_3dlilr$_0 = this.rx_y6x17j$(DefaultBindings$canSave$lambda(this));
    this.dirty_4ifn4c$_0 = this.rx_y6x17j$(DefaultBindings$dirty$lambda(this));
  }
  Object.defineProperty(DefaultBindings.prototype, 'kills', {
    get: function () {
      return this.kills_7tmzvt$_0;
    }
  });
  Object.defineProperty(DefaultBindings.prototype, 'canSave', {
    get: function () {
      return this.canSave_3dlilr$_0;
    }
  });
  Object.defineProperty(DefaultBindings.prototype, 'dirty', {
    get: function () {
      return this.dirty_4ifn4c$_0;
    }
  });
  DefaultBindings.prototype.addValidation_fhhxk7$ = function (deps, rxv) {
    add(this.validations, deps, rxv);
  };
  DefaultBindings.prototype.addDirty_fhhxk7$ = function (deps, rxv) {
    add(this.extraDirty, deps, rxv);
  };
  var Collection = Kotlin.kotlin.collections.Collection;
  function DefaultBindings$canSave$lambda(this$DefaultBindings) {
    return function ($receiver) {
      var $receiver_0 = this$DefaultBindings.validations.invoke();
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
  function DefaultBindings$dirty$lambda(this$DefaultBindings) {
    return function ($receiver) {
      var $receiver_0 = this$DefaultBindings.extraDirty.invoke();
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
  DefaultBindings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultBindings',
    interfaces: [KillsApi, Bindings]
  };
  function Creating() {
  }
  Creating.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Creating',
    interfaces: [Bindings]
  };
  function Editing() {
  }
  Editing.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Editing',
    interfaces: [Bindings]
  };
  function DefaultEditing(kills) {
    DefaultBindings.call(this, kills);
  }
  DefaultEditing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultEditing',
    interfaces: [Editing, DefaultBindings]
  };
  function CreatingTriggers(persist, edit) {
    if (edit === void 0)
      edit = CreatingTriggers_init$lambda;
    this.persist = persist;
    this.edit = edit;
  }
  function CreatingTriggers_init$lambda() {
    return Unit;
  }
  CreatingTriggers.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreatingTriggers',
    interfaces: []
  };
  CreatingTriggers.prototype.component1 = function () {
    return this.persist;
  };
  CreatingTriggers.prototype.component2 = function () {
    return this.edit;
  };
  CreatingTriggers.prototype.copy_ucykgt$ = function (persist, edit) {
    return new CreatingTriggers(persist === void 0 ? this.persist : persist, edit === void 0 ? this.edit : edit);
  };
  CreatingTriggers.prototype.toString = function () {
    return 'CreatingTriggers(persist=' + Kotlin.toString(this.persist) + (', edit=' + Kotlin.toString(this.edit)) + ')';
  };
  CreatingTriggers.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.persist) | 0;
    result = result * 31 + Kotlin.hashCode(this.edit) | 0;
    return result;
  };
  CreatingTriggers.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.persist, other.persist) && Kotlin.equals(this.edit, other.edit)))));
  };
  function EditingTriggers(delete_0, save) {
    this.delete = delete_0;
    this.save = save;
  }
  EditingTriggers.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditingTriggers',
    interfaces: []
  };
  EditingTriggers.prototype.component1 = function () {
    return this.delete;
  };
  EditingTriggers.prototype.component2 = function () {
    return this.save;
  };
  EditingTriggers.prototype.copy_yrs701$ = function (delete_0, save) {
    return new EditingTriggers(delete_0 === void 0 ? this.delete : delete_0, save === void 0 ? this.save : save);
  };
  EditingTriggers.prototype.toString = function () {
    return 'EditingTriggers(delete=' + Kotlin.toString(this.delete) + (', save=' + Kotlin.toString(this.save)) + ')';
  };
  EditingTriggers.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.delete) | 0;
    result = result * 31 + Kotlin.hashCode(this.save) | 0;
    return result;
  };
  EditingTriggers.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.delete, other.delete) && Kotlin.equals(this.save, other.save)))));
  };
  function RxCreating(kills, initial, triggers) {
    DefaultBindings.call(this, kills);
    this.initial = initial;
    this.triggers = triggers;
    this.current = copy(this.initial.doc);
    this.extraDirty.transform_ru8m0w$(RxCreating_init$lambda(this));
    this.persist_gsrn3k$_0 = RxCreating$persist$lambda(this);
    this.edit_b306au$_0 = RxCreating$edit$lambda(this);
  }
  Object.defineProperty(RxCreating.prototype, 'persist', {
    get: function () {
      return this.persist_gsrn3k$_0;
    }
  });
  Object.defineProperty(RxCreating.prototype, 'edit', {
    get: function () {
      return this.edit_b306au$_0;
    }
  });
  function RxCreating_init$lambda$lambda(this$RxCreating) {
    return function ($receiver) {
      return !rxCompare(this$RxCreating.initial.doc, this$RxCreating.current);
    };
  }
  function RxCreating_init$lambda(this$RxCreating) {
    return function (it) {
      return plus(it, this$RxCreating.rx_y6x17j$(RxCreating_init$lambda$lambda(this$RxCreating)));
    };
  }
  function RxCreating$persist$lambda(this$RxCreating) {
    return function () {
      this$RxCreating.triggers.persist(this$RxCreating.current);
      return Unit;
    };
  }
  function RxCreating$edit$lambda(this$RxCreating) {
    return function () {
      this$RxCreating.triggers.edit();
      return Unit;
    };
  }
  RxCreating.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxCreating',
    interfaces: [Creating, DefaultBindings, KillsApi]
  };
  function onPersist$lambda$lambda(closure$tr, closure$fn) {
    return function (current) {
      closure$tr.persist(current);
      closure$fn();
      return Unit;
    };
  }
  function onPersist$lambda(closure$fn) {
    return function (tr) {
      return tr.copy_ucykgt$(onPersist$lambda$lambda(tr, closure$fn));
    };
  }
  function onPersist(fn) {
    return onPersist$lambda(fn);
  }
  function onEdit$lambda$lambda(closure$fn) {
    return function () {
      closure$fn();
      return Unit;
    };
  }
  function onEdit$lambda(closure$fn) {
    return function (tr) {
      return tr.copy_ucykgt$(void 0, onEdit$lambda$lambda(closure$fn));
    };
  }
  function onEdit(fn) {
    return onEdit$lambda(fn);
  }
  function RxEditing(kills, initial, triggers) {
    DefaultEditing.call(this, kills);
    this.initial = initial;
    this.triggers = triggers;
    this.current = copy(this.initial.rxv.now);
    this.delete_bq9drm$_0 = this.triggers.delete;
    this.extraDirty.transform_ru8m0w$(RxEditing_init$lambda(this));
    this.save_xplr5w$_0 = RxEditing$save$lambda(this);
  }
  Object.defineProperty(RxEditing.prototype, 'delete', {
    get: function () {
      return this.delete_bq9drm$_0;
    }
  });
  Object.defineProperty(RxEditing.prototype, 'save', {
    get: function () {
      return this.save_xplr5w$_0;
    }
  });
  function RxEditing_init$lambda$lambda(this$RxEditing) {
    return function ($receiver) {
      return !this$RxEditing.initial.id.state.invoke().exists || !rxCompare(this$RxEditing.initial.invoke(), this$RxEditing.current);
    };
  }
  function RxEditing_init$lambda(this$RxEditing) {
    return function (it) {
      return plus(it, this$RxEditing.rx_y6x17j$(RxEditing_init$lambda$lambda(this$RxEditing)));
    };
  }
  function RxEditing$save$lambda(this$RxEditing) {
    return function () {
      this$RxEditing.triggers.save(this$RxEditing.current);
      return Unit;
    };
  }
  RxEditing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxEditing',
    interfaces: [DefaultEditing, KillsApi]
  };
  function backOnDelete$lambda$lambda(closure$tr, closure$deps) {
    return function () {
      closure$tr.delete();
      closure$deps.back();
      return Unit;
    };
  }
  function backOnDelete$lambda(closure$deps) {
    return function (tr) {
      return tr.copy_yrs701$(backOnDelete$lambda$lambda(tr, closure$deps));
    };
  }
  function backOnDelete(deps) {
    return backOnDelete$lambda(deps);
  }
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
  function validate($receiver, fn) {
    add($receiver.validations, $receiver, $receiver.rx_y6x17j$(validate$lambda(fn)));
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
  function bind($receiver, deps, rxv) {
    return bind_0($receiver, deps, rxv.rxv);
  }
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  function bind$lambda(it) {
    var tmp$;
    return trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
  }
  function bind_0($receiver, deps, rxv) {
    return bind_1($receiver, deps, rxv, commonshr.Identity, bind$lambda);
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
  function bind$lambda$lambda_1(this$bind) {
    return function ($receiver, it) {
      this$bind.valid.remAssign_11rb$(it);
      return Unit;
    };
  }
  function bind_1($receiver, deps, modelValue, initial, extract) {
    $receiver.value = initial(modelValue.now);
    var extractValid = new Var(true);
    $receiver.rxv.forEach_aaomyj$(deps.kills, bind$lambda_0(modelValue, extract, extractValid));
    var $receiver_0 = new Binder($receiver.rxv, modelValue, deps.kills);
    $receiver_0.validations.transform_ru8m0w$(bind$lambda$lambda(extractValid));
    $receiver_0.dirties.transform_ru8m0w$(bind$lambda$lambda_0(deps, extractValid));
    deps.bindings.addValidation_fhhxk7$(deps, $receiver_0.valid);
    deps.bindings.addDirty_fhhxk7$(deps, $receiver_0.dirty);
    $receiver_0.valid.forEach_aaomyj$(deps.kills, bind$lambda$lambda_1($receiver));
    return $receiver_0;
  }
  function saveButton$lambda($receiver) {
    $receiver.m1;
    return Unit;
  }
  function saveButton$lambda$lambda(closure$deps) {
    return function ($receiver) {
      return closure$deps.editing.dirty.invoke() && closure$deps.editing.canSave.invoke();
    };
  }
  function saveButton$lambda$lambda_0(closure$deps) {
    return function () {
      closure$deps.editing.save();
      return Unit;
    };
  }
  function saveButton($receiver, deps, fn) {
    if (fn === void 0)
      fn = saveButton$lambda;
    var $receiver_0 = $receiver.button;
    $receiver_0.p2;
    $receiver_0.primary;
    get_save($receiver_0.fa);
    $receiver_0.enabled_bii2r3$(deps, saveButton$lambda$lambda(deps));
    click_1($receiver_0, deps, saveButton$lambda$lambda_0(deps));
    fn($receiver_0);
    return $receiver_0;
  }
  function persistButton$lambda($receiver) {
    $receiver.m1;
    return Unit;
  }
  function persistButton$lambda$lambda(closure$deps) {
    return function ($receiver) {
      return closure$deps.creating.canSave.invoke();
    };
  }
  function persistButton$lambda$lambda_0(closure$deps) {
    return function () {
      closure$deps.creating.persist();
      closure$deps.creating.edit();
      return Unit;
    };
  }
  function persistButton($receiver, deps, fn) {
    if (fn === void 0)
      fn = persistButton$lambda;
    var $receiver_0 = $receiver.button;
    $receiver_0.p2;
    $receiver_0.primary;
    get_save($receiver_0.fa);
    $receiver_0.enabled_bii2r3$(deps, persistButton$lambda$lambda(deps));
    click_1($receiver_0, deps, persistButton$lambda$lambda_0(deps));
    fn($receiver_0);
    return $receiver_0;
  }
  function saveDeleteButton$lambda$lambda($receiver) {
    return Unit;
  }
  function saveDeleteButton$lambda$lambda$lambda$lambda$lambda(closure$deps) {
    return function () {
      closure$deps.editing.delete();
      closure$deps.back();
      return Unit;
    };
  }
  function saveDeleteButton($receiver, deps) {
    var $receiver_0 = $receiver.buttonGroup;
    $receiver_0.m1;
    saveButton(get_insert_0($receiver_0.slots.buttons.slot), deps, saveDeleteButton$lambda$lambda);
    $receiver_0.dropdownSplit.primary;
    var $receiver_1 = $receiver_0.menu;
    $receiver_1.right;
    var $receiver_2 = $receiver_1.item;
    get_textDanger($receiver_2.cls);
    get_trashAlt($receiver_2.fa);
    $receiver_2.text.remAssign_61zpoe$('Delete');
    click_2($receiver_2, deps, saveDeleteButton$lambda$lambda$lambda$lambda$lambda(deps));
    return $receiver_0;
  }
  function BackPersistDiscard(deps, holes) {
    this.$delegate_67cuoa$_0 = deps;
    var $receiver = get_insert_0(holes.slot).button;
    this.visible_od9jl4$($receiver, BackPersistDiscard$discardButton$lambda$lambda(this));
    $receiver.m1p2;
    get_backspace($receiver.fa);
    $receiver.danger;
    this.click_9375ex$($receiver, BackPersistDiscard$discardButton$lambda$lambda_0(this));
    this.discardButton = $receiver;
    var $receiver_0 = get_insert_0(holes.slot).button;
    this.visible_od9jl4$($receiver_0, BackPersistDiscard$backButton$lambda$lambda(this));
    $receiver_0.back;
    this.click_9375ex$($receiver_0, BackPersistDiscard$backButton$lambda$lambda_0(this));
    this.backButton = $receiver_0;
    var $receiver_1 = get_insert_0(holes.slot).buttonGroup;
    this.visible_od9jl4$($receiver_1, BackPersistDiscard$saveButtonGroup$lambda$lambda(this));
    get_m1($receiver_1.cls);
    var $receiver_2 = $receiver_1.button;
    var $receiver_3 = $receiver_2.cls;
    get_p2($receiver_3);
    get_btnSuccess($receiver_3);
    invoke(get_span($receiver_2.node), BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda);
    invoke(get_span($receiver_2.node), BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda_0);
    this.click_9375ex$($receiver_2, BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda_1(this));
    get_btnSuccess($receiver_1.dropdownSplit.cls);
    var $receiver_4 = $receiver_1.menu;
    var $receiver_5 = $receiver_4.item;
    this.visible_od9jl4$($receiver_5, BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda$lambda(this));
    get_chevronLeft($receiver_5.fa);
    $receiver_5.text.remAssign_61zpoe$('Back');
    this.click_512jbc$($receiver_5, BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda$lambda_0(this));
    var $receiver_6 = $receiver_4.item;
    this.visible_od9jl4$($receiver_6, BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda$lambda_1(this));
    get_textDanger($receiver_6.cls);
    get_backspace($receiver_6.fa);
    $receiver_6.text.remAssign_61zpoe$('Discard');
    this.click_512jbc$($receiver_6, BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda$lambda_2(this));
    this.saveButtonGroup = $receiver_1;
  }
  function BackPersistDiscard$saveAndView$lambda$lambda(this$BackPersistDiscard, closure$view) {
    return function () {
      this$BackPersistDiscard.creating.persist();
      closure$view();
      return Unit;
    };
  }
  BackPersistDiscard.prototype.saveAndView_o14v8n$ = function (view) {
    var $receiver = this.saveButtonGroup.menu.item;
    get_textSuccess($receiver.cls);
    get_save($receiver.fa);
    $receiver.text.remAssign_61zpoe$('Save and View');
    this.click_512jbc$($receiver, BackPersistDiscard$saveAndView$lambda$lambda(this, view));
  };
  Object.defineProperty(BackPersistDiscard.prototype, 'back', {
    get: function () {
      return this.$delegate_67cuoa$_0.back;
    }
  });
  Object.defineProperty(BackPersistDiscard.prototype, 'bindings', {
    get: function () {
      return this.$delegate_67cuoa$_0.bindings;
    }
  });
  Object.defineProperty(BackPersistDiscard.prototype, 'creating', {
    get: function () {
      return this.$delegate_67cuoa$_0.creating;
    }
  });
  Object.defineProperty(BackPersistDiscard.prototype, 'kills', {
    get: function () {
      return this.$delegate_67cuoa$_0.kills;
    }
  });
  Object.defineProperty(BackPersistDiscard.prototype, 'uix', {
    get: function () {
      return this.$delegate_67cuoa$_0.uix;
    }
  });
  function BackPersistDiscard$discardButton$lambda$lambda(this$BackPersistDiscard) {
    return function ($receiver) {
      return this$BackPersistDiscard.creating.dirty.invoke() && !this$BackPersistDiscard.creating.canSave.invoke();
    };
  }
  function BackPersistDiscard$discardButton$lambda$lambda_0(this$BackPersistDiscard) {
    return function () {
      this$BackPersistDiscard.back();
      return Unit;
    };
  }
  function BackPersistDiscard$backButton$lambda$lambda(this$BackPersistDiscard) {
    return function ($receiver) {
      return !this$BackPersistDiscard.creating.dirty.invoke() && !this$BackPersistDiscard.creating.canSave.invoke();
    };
  }
  function BackPersistDiscard$backButton$lambda$lambda_0(this$BackPersistDiscard) {
    return function () {
      this$BackPersistDiscard.back();
      return Unit;
    };
  }
  function BackPersistDiscard$saveButtonGroup$lambda$lambda(this$BackPersistDiscard) {
    return function ($receiver) {
      return this$BackPersistDiscard.creating.canSave.invoke();
    };
  }
  function BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda($receiver) {
    var $receiver_0 = get_fa(get_cls($receiver));
    get_fw($receiver_0);
    get_chevronLeft($receiver_0);
    return Unit;
  }
  function BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda_0($receiver) {
    var $receiver_0 = get_fa(get_cls($receiver));
    get_fw($receiver_0);
    get_save($receiver_0);
    return Unit;
  }
  function BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda_1(this$BackPersistDiscard) {
    return function () {
      this$BackPersistDiscard.creating.persist();
      this$BackPersistDiscard.back();
      return Unit;
    };
  }
  function BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda$lambda(this$BackPersistDiscard) {
    return function ($receiver) {
      return !this$BackPersistDiscard.creating.dirty.invoke();
    };
  }
  function BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda$lambda_0(this$BackPersistDiscard) {
    return function () {
      this$BackPersistDiscard.back();
      return Unit;
    };
  }
  function BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda$lambda_1(this$BackPersistDiscard) {
    return function ($receiver) {
      return this$BackPersistDiscard.creating.dirty.invoke();
    };
  }
  function BackPersistDiscard$saveButtonGroup$lambda$lambda$lambda$lambda_2(this$BackPersistDiscard) {
    return function () {
      this$BackPersistDiscard.back();
      return Unit;
    };
  }
  BackPersistDiscard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackPersistDiscard',
    interfaces: [InvokeApply, KillsUixApi, KillsApiCommonui, HasBackCreateKillsUix]
  };
  function BackSaveDiscard(deps, holes) {
    this.$delegate_7uc9t7$_0 = deps;
    var $receiver = get_insert_0(holes.slot).button;
    this.visible_od9jl4$($receiver, BackSaveDiscard$discardButton$lambda$lambda(this));
    $receiver.m1p2;
    get_backspace($receiver.fa);
    $receiver.danger;
    this.click_9375ex$($receiver, BackSaveDiscard$discardButton$lambda$lambda_0(this));
    this.discardButton = $receiver;
    var $receiver_0 = get_insert_0(holes.slot).buttonGroup;
    this.visible_od9jl4$($receiver_0, BackSaveDiscard$backButton$lambda$lambda(this));
    get_m1($receiver_0.cls);
    var $receiver_1 = $receiver_0.button;
    var $receiver_2 = $receiver_1.cls;
    get_p2($receiver_2);
    get_btnSecondary($receiver_2);
    get_chevronLeft($receiver_1.fa);
    this.click_9375ex$($receiver_1, BackSaveDiscard$backButton$lambda$lambda$lambda(this));
    this.backButton = $receiver_0;
    this.backButtonDropdown_iej8s7$_0 = lazy(BackSaveDiscard$backButtonDropdown$lambda(this));
    var $receiver_3 = get_insert_0(holes.slot).buttonGroup;
    this.visible_od9jl4$($receiver_3, BackSaveDiscard$saveButtonGroup$lambda$lambda(this));
    get_m1($receiver_3.cls);
    var $receiver_4 = $receiver_3.button;
    var $receiver_5 = $receiver_4.cls;
    get_p2($receiver_5);
    get_btnSuccess($receiver_5);
    invoke(get_span($receiver_4.node), BackSaveDiscard$saveButtonGroup$lambda$lambda$lambda);
    invoke(get_span($receiver_4.node), BackSaveDiscard$saveButtonGroup$lambda$lambda$lambda_0);
    this.click_9375ex$($receiver_4, BackSaveDiscard$saveButtonGroup$lambda$lambda$lambda_1(this));
    get_btnSuccess($receiver_3.dropdownSplit.cls);
    var $receiver_6 = $receiver_3.menu.item;
    get_textDanger($receiver_6.cls);
    get_backspace($receiver_6.fa);
    $receiver_6.text.remAssign_61zpoe$('Discard');
    this.click_512jbc$($receiver_6, BackSaveDiscard$saveButtonGroup$lambda$lambda$lambda$lambda(this));
    this.saveButtonGroup = $receiver_3;
  }
  Object.defineProperty(BackSaveDiscard.prototype, 'backButtonDropdown', {
    get: function () {
      return this.backButtonDropdown_iej8s7$_0.value;
    }
  });
  function BackSaveDiscard$saveAndView$lambda$lambda(this$BackSaveDiscard, closure$view) {
    return function () {
      this$BackSaveDiscard.editing.save();
      closure$view();
      return Unit;
    };
  }
  function BackSaveDiscard$saveAndView$lambda$lambda_0(closure$view) {
    return function () {
      closure$view();
      return Unit;
    };
  }
  BackSaveDiscard.prototype.saveAndView_o14v8n$ = function (view) {
    var $receiver = this.saveButtonGroup.menu.item;
    get_textSuccess($receiver.cls);
    get_save($receiver.fa);
    $receiver.text.remAssign_61zpoe$('Save and View');
    this.click_512jbc$($receiver, BackSaveDiscard$saveAndView$lambda$lambda(this, view));
    var $receiver_0 = this.backButtonDropdown.item;
    get_eye($receiver_0.fa);
    $receiver_0.text.remAssign_61zpoe$('Close and View');
    this.click_512jbc$($receiver_0, BackSaveDiscard$saveAndView$lambda$lambda_0(view));
  };
  Object.defineProperty(BackSaveDiscard.prototype, 'back', {
    get: function () {
      return this.$delegate_7uc9t7$_0.back;
    }
  });
  Object.defineProperty(BackSaveDiscard.prototype, 'bindings', {
    get: function () {
      return this.$delegate_7uc9t7$_0.bindings;
    }
  });
  Object.defineProperty(BackSaveDiscard.prototype, 'editing', {
    get: function () {
      return this.$delegate_7uc9t7$_0.editing;
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
  function BackSaveDiscard$discardButton$lambda$lambda(this$BackSaveDiscard) {
    return function ($receiver) {
      return this$BackSaveDiscard.editing.dirty.invoke() && !this$BackSaveDiscard.editing.canSave.invoke();
    };
  }
  function BackSaveDiscard$discardButton$lambda$lambda_0(this$BackSaveDiscard) {
    return function () {
      this$BackSaveDiscard.back();
      return Unit;
    };
  }
  function BackSaveDiscard$backButton$lambda$lambda(this$BackSaveDiscard) {
    return function ($receiver) {
      return !this$BackSaveDiscard.editing.dirty.invoke();
    };
  }
  function BackSaveDiscard$backButton$lambda$lambda$lambda(this$BackSaveDiscard) {
    return function () {
      this$BackSaveDiscard.back();
      return Unit;
    };
  }
  function BackSaveDiscard$backButtonDropdown$lambda(this$BackSaveDiscard) {
    return function () {
      get_btnSecondary(this$BackSaveDiscard.backButton.dropdownSplit.cls);
      return this$BackSaveDiscard.backButton.menu;
    };
  }
  function BackSaveDiscard$saveButtonGroup$lambda$lambda(this$BackSaveDiscard) {
    return function ($receiver) {
      return this$BackSaveDiscard.editing.dirty.invoke() && this$BackSaveDiscard.editing.canSave.invoke();
    };
  }
  function BackSaveDiscard$saveButtonGroup$lambda$lambda$lambda($receiver) {
    var $receiver_0 = get_fa(get_cls($receiver));
    get_fw($receiver_0);
    get_chevronLeft($receiver_0);
    return Unit;
  }
  function BackSaveDiscard$saveButtonGroup$lambda$lambda$lambda_0($receiver) {
    var $receiver_0 = get_fa(get_cls($receiver));
    get_fw($receiver_0);
    get_save($receiver_0);
    return Unit;
  }
  function BackSaveDiscard$saveButtonGroup$lambda$lambda$lambda_1(this$BackSaveDiscard) {
    return function () {
      this$BackSaveDiscard.editing.save();
      this$BackSaveDiscard.back();
      return Unit;
    };
  }
  function BackSaveDiscard$saveButtonGroup$lambda$lambda$lambda$lambda(this$BackSaveDiscard) {
    return function () {
      this$BackSaveDiscard.back();
      return Unit;
    };
  }
  BackSaveDiscard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackSaveDiscard',
    interfaces: [InvokeApply, KillsUixApi, KillsApiCommonui, HasBackEditKillsUix]
  };
  function ErrorTC(parent, back, message) {
    CsKillsView.call(this, parent);
    this.back_lsr12x$_0 = back;
    this.message = message;
    var $receiver = factory.topbar;
    this.get_backButton_tdhe4g$($receiver.left);
    remAssign($receiver.title, 'Error');
    var tmp$ = $receiver.node;
    var $receiver_0 = factory.scrollPane;
    invoke($receiver_0.pane, ErrorTC$rawView$lambda$lambda($receiver_0, this));
    this.rawView_5l68d5$_0 = new TopAndContent(tmp$, $receiver_0.node);
  }
  Object.defineProperty(ErrorTC.prototype, 'back', {
    get: function () {
      return this.back_lsr12x$_0;
    }
  });
  Object.defineProperty(ErrorTC.prototype, 'rawView', {
    get: function () {
      return this.rawView_5l68d5$_0;
    }
  });
  function ErrorTC$rawView$lambda$lambda$lambda(this$, this$ErrorTC) {
    return function ($receiver) {
      get_m1(this$.cls);
      remAssign($receiver, this$ErrorTC.message.toString());
      return Unit;
    };
  }
  function ErrorTC$rawView$lambda$lambda(this$, this$ErrorTC) {
    return function ($receiver) {
      get_p1(this$.cls);
      invoke(get_span($receiver), ErrorTC$rawView$lambda$lambda$lambda(this$, this$ErrorTC));
      return Unit;
    };
  }
  ErrorTC.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ErrorTC',
    interfaces: [BackKillsUixApi, CsKillsView]
  };
  function Converter(serialize, deserialize) {
    this.serialize = serialize;
    this.deserialize = deserialize;
  }
  Converter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Converter',
    interfaces: []
  };
  var NullConverter;
  function URIEncoder$lambda(it) {
    return encodeURIComponent(it);
  }
  function Coroutine$URIEncoder$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$URIEncoder$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$URIEncoder$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$URIEncoder$lambda.prototype.constructor = Coroutine$URIEncoder$lambda;
  Coroutine$URIEncoder$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return decodeURIComponent(this.local$it);
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
  function URIEncoder$lambda_0(it_0, continuation_0, suspended) {
    var instance = new Coroutine$URIEncoder$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var URIEncoder;
  function JsonConverter$lambda(it) {
    return JSON.stringify(it);
  }
  function Coroutine$JsonConverter$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$JsonConverter$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsonConverter$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsonConverter$lambda.prototype.constructor = Coroutine$JsonConverter$lambda;
  Coroutine$JsonConverter$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return JSON.parse(this.local$it);
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
  function JsonConverter$lambda_0(it_0, continuation_0, suspended) {
    var instance = new Coroutine$JsonConverter$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var JsonConverter;
  var HashSerializer;
  function plus$lambda(closure$other, this$plus) {
    return function (it) {
      return closure$other.serialize(this$plus.serialize(it));
    };
  }
  function Coroutine$plus$lambda(this$plus_0, closure$other_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$plus = this$plus_0;
    this.local$closure$other = closure$other_0;
    this.local$tmp$ = void 0;
    this.local$it = it_0;
  }
  Coroutine$plus$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$plus$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$plus$lambda.prototype.constructor = Coroutine$plus$lambda;
  Coroutine$plus$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$plus.deserialize;
            this.state_0 = 2;
            this.result_0 = this.local$closure$other.deserialize(this.local$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$(this.result_0, this);
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
  function plus$lambda_0(this$plus_0, closure$other_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$plus$lambda(this$plus_0, closure$other_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function plus_2($receiver, other) {
    return new Converter(plus$lambda(other, $receiver), plus$lambda_0($receiver, other));
  }
  var jsonConverter = defineInlineFunction('appsimake-commonui.commonui.links.jsonConverter_287e2$', wrapFunction(function () {
    var links = _.commonui.links;
    return function () {
      return links.JsonConverter;
    };
  }));
  var toDynamic = defineInlineFunction('appsimake-commonui.commonui.links.toDynamic_9fvbtr$', function ($receiver) {
    return $receiver;
  });
  var nullConverter = defineInlineFunction('appsimake-commonui.commonui.links.nullConverter_q3lmfv$', wrapFunction(function () {
    var links = _.commonui.links;
    return function () {
      return links.NullConverter;
    };
  }));
  function UnitConverter$lambda(it) {
    return null;
  }
  function Coroutine$UnitConverter$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$UnitConverter$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$UnitConverter$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$UnitConverter$lambda.prototype.constructor = Coroutine$UnitConverter$lambda;
  Coroutine$UnitConverter$lambda.prototype.doResume = function () {
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
  function UnitConverter$lambda_0(it_0, continuation_0, suspended) {
    var instance = new Coroutine$UnitConverter$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var UnitConverter;
  var EmptyHashStruct;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function split_0($receiver) {
    if (!!$receiver.isEmpty()) {
      var message = 'Cannot split empty HashStruct.';
      throw IllegalArgumentException_init(message.toString());
    }
    return new SplitHash(last($receiver), dropLast($receiver, 1));
  }
  function NamedHashStruct(name, hash) {
    this.name = name;
    this.hash = hash;
  }
  NamedHashStruct.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamedHashStruct',
    interfaces: []
  };
  NamedHashStruct.prototype.component1 = function () {
    return this.name;
  };
  NamedHashStruct.prototype.component2 = function () {
    return this.hash;
  };
  NamedHashStruct.prototype.copy_kwv3np$ = function (name, hash) {
    return new NamedHashStruct(name === void 0 ? this.name : name, hash === void 0 ? this.hash : hash);
  };
  NamedHashStruct.prototype.toString = function () {
    return 'NamedHashStruct(name=' + Kotlin.toString(this.name) + (', hash=' + Kotlin.toString(this.hash)) + ')';
  };
  NamedHashStruct.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.hash) | 0;
    return result;
  };
  NamedHashStruct.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.hash, other.hash)))));
  };
  function get_toHashStruct($receiver) {
    return plus($receiver.hash, $receiver.name);
  }
  function get_toNamed($receiver) {
    return get_toNamed_0(split_0($receiver));
  }
  function get_toNamed_0($receiver) {
    return new NamedHashStruct($receiver.item, $receiver.struct);
  }
  function SplitHash(item, struct) {
    this.item = item;
    this.struct = struct;
  }
  SplitHash.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SplitHash',
    interfaces: []
  };
  SplitHash.prototype.component1 = function () {
    return this.item;
  };
  SplitHash.prototype.component2 = function () {
    return this.struct;
  };
  SplitHash.prototype.copy_kwv3np$ = function (item, struct) {
    return new SplitHash(item === void 0 ? this.item : item, struct === void 0 ? this.struct : struct);
  };
  SplitHash.prototype.toString = function () {
    return 'SplitHash(item=' + Kotlin.toString(this.item) + (', struct=' + Kotlin.toString(this.struct)) + ')';
  };
  SplitHash.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.item) | 0;
    result = result * 31 + Kotlin.hashCode(this.struct) | 0;
    return result;
  };
  SplitHash.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.item, other.item) && Kotlin.equals(this.struct, other.struct)))));
  };
  function singleHashTransformer$lambda(closure$converter) {
    return function (data, struct) {
      return plus(struct, closure$converter.serialize(data));
    };
  }
  function Coroutine$singleHashTransformer$lambda(closure$converter_0, struct_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$converter = closure$converter_0;
    this.local$split = void 0;
    this.local$struct = struct_0;
  }
  Coroutine$singleHashTransformer$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$singleHashTransformer$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$singleHashTransformer$lambda.prototype.constructor = Coroutine$singleHashTransformer$lambda;
  Coroutine$singleHashTransformer$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$split = split_0(this.local$struct);
            this.state_0 = 2;
            this.result_0 = this.local$closure$converter.deserialize(this.local$split.item, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new TransformerOutput(this.result_0, this.local$split.struct);
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
  function singleHashTransformer$lambda_0(closure$converter_0) {
    return function (struct_0, continuation_0, suspended) {
      var instance = new Coroutine$singleHashTransformer$lambda(closure$converter_0, struct_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function singleHashTransformer(converter) {
    return new Transformer(singleHashTransformer$lambda(converter), singleHashTransformer$lambda_0(converter));
  }
  var StringHasher;
  function plus$lambda_1(this$plus, closure$converter) {
    return function (data, serialized) {
      return this$plus.serialize(closure$converter.serialize(data), serialized);
    };
  }
  function Coroutine$plus$lambda_0(this$plus_0, closure$converter_0, serialized_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$plus = this$plus_0;
    this.local$closure$converter = closure$converter_0;
    this.local$$receiver = void 0;
    this.local$serialized = serialized_0;
  }
  Coroutine$plus$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$plus$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$plus$lambda_0.prototype.constructor = Coroutine$plus$lambda_0;
  Coroutine$plus$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$plus.deserialize(this.local$serialized, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$closure$converter.deserialize(this.local$$receiver.data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return new TransformerOutput(this.result_0, this.local$$receiver.serialized);
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
  function plus$lambda_2(this$plus_0, closure$converter_0) {
    return function (serialized_0, continuation_0, suspended) {
      var instance = new Coroutine$plus$lambda_0(this$plus_0, closure$converter_0, serialized_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function plus_3($receiver, converter) {
    return new Transformer(plus$lambda_1($receiver, converter), plus$lambda_2($receiver, converter));
  }
  function toHashItem($receiver) {
    return decodeURIComponent($receiver);
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function toHashStruct($receiver) {
    var $receiver_0 = toList(split($receiver, Kotlin.charArrayOf(47)));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(toHashItem(item));
    }
    return destination;
  }
  function toHashStringItem($receiver) {
    return encodeURIComponent($receiver);
  }
  function toHashString$lambda(it) {
    return toHashStringItem(it);
  }
  function toHashString($receiver) {
    return joinToString($receiver, '/', void 0, void 0, void 0, void 0, toHashString$lambda);
  }
  function LinkId(parent, id) {
    this.parent = parent;
    this.id = id;
  }
  LinkId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkId',
    interfaces: []
  };
  LinkId.prototype.component1 = function () {
    return this.parent;
  };
  LinkId.prototype.component2 = function () {
    return this.id;
  };
  LinkId.prototype.copy_xwzc9p$ = function (parent, id) {
    return new LinkId(parent === void 0 ? this.parent : parent, id === void 0 ? this.id : id);
  };
  LinkId.prototype.toString = function () {
    return 'LinkId(parent=' + Kotlin.toString(this.parent) + (', id=' + Kotlin.toString(this.id)) + ')';
  };
  LinkId.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.parent) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  LinkId.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.parent, other.parent) && Kotlin.equals(this.id, other.id)))));
  };
  function get_asChildLinkId($receiver) {
    return new LinkId(Unit, $receiver);
  }
  function TransformerOutput(data, serialized) {
    this.data = data;
    this.serialized = serialized;
  }
  TransformerOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransformerOutput',
    interfaces: []
  };
  TransformerOutput.prototype.component1 = function () {
    return this.data;
  };
  TransformerOutput.prototype.component2 = function () {
    return this.serialized;
  };
  TransformerOutput.prototype.copy_xwzc9p$ = function (data, serialized) {
    return new TransformerOutput(data === void 0 ? this.data : data, serialized === void 0 ? this.serialized : serialized);
  };
  TransformerOutput.prototype.toString = function () {
    return 'TransformerOutput(data=' + Kotlin.toString(this.data) + (', serialized=' + Kotlin.toString(this.serialized)) + ')';
  };
  TransformerOutput.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    result = result * 31 + Kotlin.hashCode(this.serialized) | 0;
    return result;
  };
  TransformerOutput.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.data, other.data) && Kotlin.equals(this.serialized, other.serialized)))));
  };
  function Transformer(serialize, deserialize) {
    this.serialize = serialize;
    this.deserialize = deserialize;
  }
  Transformer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transformer',
    interfaces: []
  };
  function constantTransformer$lambda(f, serialized) {
    return serialized;
  }
  function Coroutine$constantTransformer$lambda(closure$data_0, serialized_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$data = closure$data_0;
    this.local$serialized = serialized_0;
  }
  Coroutine$constantTransformer$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$constantTransformer$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$constantTransformer$lambda.prototype.constructor = Coroutine$constantTransformer$lambda;
  Coroutine$constantTransformer$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new TransformerOutput(this.local$closure$data, this.local$serialized);
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
  function constantTransformer$lambda_0(closure$data_0) {
    return function (serialized_0, continuation_0, suspended) {
      var instance = new Coroutine$constantTransformer$lambda(closure$data_0, serialized_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function constantTransformer(data) {
    return new Transformer(constantTransformer$lambda, constantTransformer$lambda_0(data));
  }
  var UnitTransformer;
  function unitTransformer() {
    return UnitTransformer;
  }
  var UnitHasher;
  function linkIdTransformer$lambda(closure$id, closure$parent) {
    return function (linkId, str) {
      return closure$id.serialize(linkId.id, closure$parent.serialize(linkId.parent, str));
    };
  }
  function Coroutine$linkIdTransformer$lambda(closure$parent_0, closure$id_0, lio_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$parent = closure$parent_0;
    this.local$closure$id = closure$id_0;
    this.local$dp = void 0;
    this.local$lio = lio_0;
  }
  Coroutine$linkIdTransformer$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$linkIdTransformer$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$linkIdTransformer$lambda.prototype.constructor = Coroutine$linkIdTransformer$lambda;
  Coroutine$linkIdTransformer$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$parent.deserialize(this.local$lio, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0;
            var closure$id = this.local$closure$id;
            this.local$dp = $receiver.component1(), this.local$sp = $receiver.component2();
            var sp = $receiver.component2();
            this.state_0 = 3;
            this.result_0 = closure$id.deserialize(sp, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var f = this.result_0;
            var di = f.component1()
            , si = f.component2();
            return new TransformerOutput(new LinkId(this.local$dp, di), si);
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
  function linkIdTransformer$lambda_0(closure$parent_0, closure$id_0) {
    return function (lio_0, continuation_0, suspended) {
      var instance = new Coroutine$linkIdTransformer$lambda(closure$parent_0, closure$id_0, lio_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function linkIdTransformer(parent, id) {
    return new Transformer(linkIdTransformer$lambda(id, parent), linkIdTransformer$lambda_0(parent, id));
  }
  function parentLinkIdTransformer(converter) {
    return linkIdTransformer(converter, unitTransformer());
  }
  function childLinkIdTransformer(converter) {
    return linkIdTransformer(unitTransformer(), converter);
  }
  function pairTransformer$lambda(closure$tb, closure$ta) {
    return function (pair, str) {
      return closure$tb.serialize(pair.second, closure$ta.serialize(pair.first, str));
    };
  }
  function Coroutine$pairTransformer$lambda(closure$ta_0, closure$tb_0, lio_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$ta = closure$ta_0;
    this.local$closure$tb = closure$tb_0;
    this.local$da = void 0;
    this.local$lio = lio_0;
  }
  Coroutine$pairTransformer$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$pairTransformer$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$pairTransformer$lambda.prototype.constructor = Coroutine$pairTransformer$lambda;
  Coroutine$pairTransformer$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$ta.deserialize(this.local$lio, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0;
            var closure$tb = this.local$closure$tb;
            this.local$da = $receiver.component1(), this.local$sa = $receiver.component2();
            var sa = $receiver.component2();
            this.state_0 = 3;
            this.result_0 = closure$tb.deserialize(sa, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var f = this.result_0;
            var db = f.component1()
            , sb = f.component2();
            return new TransformerOutput(new Pair(this.local$da, db), sb);
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
  function pairTransformer$lambda_0(closure$ta_0, closure$tb_0) {
    return function (lio_0, continuation_0, suspended) {
      var instance = new Coroutine$pairTransformer$lambda(closure$ta_0, closure$tb_0, lio_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function pairTransformer(ta, tb) {
    return new Transformer(pairTransformer$lambda(tb, ta), pairTransformer$lambda_0(ta, tb));
  }
  function listTransformer$lambda(closure$ts) {
    return function (list, str) {
      if (!(closure$ts.size === list.size)) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init(message.toString());
      }
      var tmp$;
      var accumulator = str;
      tmp$ = zip(closure$ts, list).iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        accumulator = element.first.serialize(element.second, accumulator);
      }
      return accumulator;
    };
  }
  function Coroutine$listTransformer$lambda(closure$ts_0, lio_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$ts = closure$ts_0;
    this.local$accumulator = void 0;
    this.local$iterator = void 0;
    this.local$o = void 0;
    this.local$lio = lio_0;
  }
  Coroutine$listTransformer$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$listTransformer$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$listTransformer$lambda.prototype.constructor = Coroutine$listTransformer$lambda;
  Coroutine$listTransformer$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$closure$ts;
            this.local$accumulator = new TransformerOutput(emptyList(), this.local$lio);
            if (!$receiver.isEmpty()) {
              this.local$iterator = $receiver.listIterator_za3lpa$($receiver.size);
              this.state_0 = 2;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$iterator.hasPrevious()) {
              this.state_0 = 4;
              continue;
            }

            this.local$o = this.local$accumulator;
            this.state_0 = 3;
            this.result_0 = this.local$iterator.previous().deserialize(this.local$o.serialized, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var to = this.result_0;
            this.local$accumulator = new TransformerOutput(plus(this.local$o.data, to.data), to.serialized);
            this.state_0 = 2;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            var o = this.local$accumulator;
            return new TransformerOutput(reversed(o.data), o.serialized);
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
  function listTransformer$lambda_0(closure$ts_0) {
    return function (lio_0, continuation_0, suspended) {
      var instance = new Coroutine$listTransformer$lambda(closure$ts_0, lio_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function listTransformer(ts) {
    return new Transformer(listTransformer$lambda(ts), listTransformer$lambda_0(ts));
  }
  function BaseTC() {
  }
  BaseTC.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BaseTC',
    interfaces: [HasCsForwardKillsRouting, HasLinkage, HasForward, HasKillsRouting, HasKillsRedisplay]
  };
  function LinksDeps(homeName, body) {
    this.homeName = homeName;
    this.body = body;
  }
  LinksDeps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinksDeps',
    interfaces: []
  };
  function LinksFactory(homeName) {
    LinksFactory$Companion_getInstance();
    if (homeName === void 0)
      homeName = 'home';
    this.homeName_296t0p$_0 = homeName;
    this.context = new LinksFactory$context$ObjectLiteral();
    this.map_qcts15$_0 = lazy(LinksFactory$map$lambda(this));
  }
  function LinksFactory$Companion() {
    LinksFactory$Companion_instance = this;
  }
  function Coroutine$LinksFactory$Companion$startTC$lambda(closure$fn_0, closure$homeName_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$homeName = closure$homeName_0;
    this.local$$receiver = void 0;
  }
  Coroutine$LinksFactory$Companion$startTC$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LinksFactory$Companion$startTC$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LinksFactory$Companion$startTC$lambda.prototype.constructor = Coroutine$LinksFactory$Companion$startTC$lambda;
  Coroutine$LinksFactory$Companion$startTC$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            APP_getInstance().startRegisteringServiceWorker();
            this.local$$receiver = new BodyTC();
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$closure$homeName, this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var links = this.result_0;
            runLinks(this.local$$receiver, new LinksHandle(links.map, links.home), popStateChannel(this.local$$receiver));
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
  function LinksFactory$Companion$startTC$lambda(closure$fn_0, closure$homeName_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LinksFactory$Companion$startTC$lambda(closure$fn_0, closure$homeName_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LinksFactory$Companion.prototype.startTC_ly7285$ = function (homeName, fn) {
    if (homeName === void 0)
      homeName = 'home';
    return launchGlobal(LinksFactory$Companion$startTC$lambda(fn, homeName));
  };
  function Coroutine$LinksFactory$Companion$start$lambda(closure$fn_0, closure$homeName_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$homeName = closure$homeName_0;
    this.local$$receiver = void 0;
  }
  Coroutine$LinksFactory$Companion$start$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LinksFactory$Companion$start$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LinksFactory$Companion$start$lambda.prototype.constructor = Coroutine$LinksFactory$Companion$start$lambda;
  Coroutine$LinksFactory$Companion$start$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            APP_getInstance().startRegisteringServiceWorker();
            this.local$$receiver = new Body();
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(new LinksDeps(this.local$closure$homeName, this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var links = this.result_0;
            runLinks(this.local$$receiver, new LinksHandle(links.map, links.home), popStateChannel(this.local$$receiver));
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
  function LinksFactory$Companion$start$lambda(closure$fn_0, closure$homeName_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LinksFactory$Companion$start$lambda(closure$fn_0, closure$homeName_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LinksFactory$Companion.prototype.start_pbkrle$ = function (homeName, fn) {
    if (homeName === void 0)
      homeName = 'home';
    return launchGlobal(LinksFactory$Companion$start$lambda(fn, homeName));
  };
  LinksFactory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LinksFactory$Companion_instance = null;
  function LinksFactory$Companion_getInstance() {
    if (LinksFactory$Companion_instance === null) {
      new LinksFactory$Companion();
    }
    return LinksFactory$Companion_instance;
  }
  LinksFactory.prototype.root_7o50g$ = function (fn) {
    return new HomeLinkPoint(this, this.homeName_296t0p$_0, fn);
  };
  Object.defineProperty(LinksFactory.prototype, 'map', {
    get: function () {
      return this.map_qcts15$_0.value;
    }
  });
  LinksFactory.prototype.base_sj7hg3$ = function () {
    return new LinksFactory$Base(this);
  };
  function LinksFactory$Base($outer) {
    this.$outer = $outer;
  }
  function Coroutine$LinksFactory$Base$child$lambda(closure$fn_0, base_0, f_0, link_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$base = base_0;
    this.local$link = link_0;
  }
  Coroutine$LinksFactory$Base$child$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LinksFactory$Base$child$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LinksFactory$Base$child$lambda.prototype.constructor = Coroutine$LinksFactory$Base$child$lambda;
  Coroutine$LinksFactory$Base$child$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$base, this.local$link, this);
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
  function LinksFactory$Base$child$lambda(closure$fn_0) {
    return function (base_0, f_0, link_0, continuation_0, suspended) {
      var instance = new Coroutine$LinksFactory$Base$child$lambda(closure$fn_0, base_0, f_0, link_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LinksFactory$Base.prototype.child_b2q6wh$ = function (fn) {
    return this.param_kchx42$(UnitHasher).child_jgcrpc$(LinksFactory$Base$child$lambda(fn));
  };
  LinksFactory$Base.prototype.param_kchx42$ = function (hasher) {
    return new LinksFactory$Base$Param(this, hasher);
  };
  function LinksFactory$Base$Param($outer, hasher) {
    this.$outer = $outer;
    this.hasher = hasher;
  }
  function LinksFactory$Base$Param$child$lambda(this$LinksFactory, this$Param, closure$fn) {
    return function (name) {
      return new MultiLinkPoint(this$LinksFactory, name, this$Param.hasher, closure$fn);
    };
  }
  LinksFactory$Base$Param.prototype.child_jgcrpc$ = function (fn) {
    return named(LinksFactory$Base$Param$child$lambda(this.$outer.$outer, this, fn));
  };
  LinksFactory$Base$Param.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Param',
    interfaces: []
  };
  LinksFactory$Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Base',
    interfaces: []
  };
  function LinksFactory$context$ObjectLiteral() {
  }
  LinksFactory$context$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function LinksFactory$map$lambda(this$LinksFactory) {
    return function () {
      var $receiver = LinkedHashMap_init();
      var this$LinksFactory_0 = this$LinksFactory;
      $receiver.put_xwzc9p$(this$LinksFactory_0.homeName_296t0p$_0, this$LinksFactory_0.home);
      return $receiver;
    };
  }
  LinksFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinksFactory',
    interfaces: []
  };
  function LinkForward() {
  }
  LinkForward.prototype.to_p1sd1w$ = function (link, param, replace, continuation, callback$default) {
    if (replace === void 0)
      replace = false;
    return callback$default ? callback$default(link, param, replace, continuation) : this.to_p1sd1w$$default(link, param, replace, continuation);
  };
  LinkForward.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinkForward',
    interfaces: []
  };
  function Linkage(back, forward) {
    this.back_25e3y2$_0 = back;
    this.forward = forward;
  }
  Object.defineProperty(Linkage.prototype, 'back', {
    get: function () {
      return this.back_25e3y2$_0;
    }
  });
  Linkage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Linkage',
    interfaces: [HasBack]
  };
  function HistoryBack$lambda() {
    window.history.back();
    return Unit;
  }
  var HistoryBack;
  function LinkApi() {
  }
  LinkApi.prototype.fwd_e1fa5e$$default = function ($receiver, param, replace, continuation) {
    return this.linkage.forward.to_p1sd1w$($receiver, param, replace, continuation);
  };
  LinkApi.prototype.fwd_e1fa5e$ = function ($receiver, param, replace, continuation, callback$default) {
    if (replace === void 0)
      replace = false;
    return callback$default ? callback$default($receiver, param, replace, continuation) : this.fwd_e1fa5e$$default($receiver, param, replace, continuation);
  };
  LinkApi.prototype.fwd_nnhkmr$$default = function ($receiver, replace, continuation) {
    return this.linkage.forward.to_p1sd1w$($receiver, Unit, replace, continuation);
  };
  LinkApi.prototype.fwd_nnhkmr$ = function ($receiver, replace, continuation, callback$default) {
    if (replace === void 0)
      replace = false;
    return callback$default ? callback$default($receiver, replace, continuation) : this.fwd_nnhkmr$$default($receiver, replace, continuation);
  };
  LinkApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinkApi',
    interfaces: [HasLinkage]
  };
  function BaseLinkPoint(factory, name, paramHasher) {
    this.factory = factory;
    this.name_z48k1q$_0 = name;
    this.paramHasher = paramHasher;
    var $receiver = this.factory.map;
    var key = this.name;
    $receiver.put_xwzc9p$(key, this);
    this.map = LinkedHashMap_init();
  }
  Object.defineProperty(BaseLinkPoint.prototype, 'name', {
    get: function () {
      return this.name_z48k1q$_0;
    }
  });
  function BaseLinkPoint$getOrPut$lambda$lambda(this$BaseLinkPoint, closure$hash) {
    return function () {
      this$BaseLinkPoint.map.remove_11rb$(closure$hash);
      return Unit;
    };
  }
  function Coroutine$getOrPut_u2vg58$($this, hash_0, view_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
    this.local$hash = hash_0;
    this.local$view = view_0;
  }
  Coroutine$getOrPut_u2vg58$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getOrPut_u2vg58$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getOrPut_u2vg58$.prototype.constructor = Coroutine$getOrPut_u2vg58$;
  Coroutine$getOrPut_u2vg58$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$_0 = this.$this.map.get_11rb$(this.local$hash);
            if (this.local$tmp$_0 == null) {
              this.state_0 = 2;
              this.result_0 = this.local$view(this);
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
            var tmp$_0;
            if ((tmp$ = this.result_0) != null) {
              this.$this.map.put_xwzc9p$(this.local$hash, tmp$);
              plusAssign(tmp$.kills, BaseLinkPoint$getOrPut$lambda$lambda(this.$this, this.local$hash));
              tmp$_0 = tmp$;
            }
             else
              tmp$_0 = null;
            this.local$tmp$_0 = tmp$_0;
            this.state_0 = 3;
            continue;
          case 3:
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
  BaseLinkPoint.prototype.getOrPut_u2vg58$ = function (hash_0, view_0, continuation_0, suspended) {
    var instance = new Coroutine$getOrPut_u2vg58$(this, hash_0, view_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$BaseLinkPoint$child$lambda(closure$fn_0, base_0, f_0, link_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$base = base_0;
    this.local$link = link_0;
  }
  Coroutine$BaseLinkPoint$child$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BaseLinkPoint$child$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BaseLinkPoint$child$lambda.prototype.constructor = Coroutine$BaseLinkPoint$child$lambda;
  Coroutine$BaseLinkPoint$child$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$base, this.local$link, this);
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
  function BaseLinkPoint$child$lambda(closure$fn_0) {
    return function (base_0, f_0, link_0, continuation_0, suspended) {
      var instance = new Coroutine$BaseLinkPoint$child$lambda(closure$fn_0, base_0, f_0, link_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BaseLinkPoint.prototype.child_b2q6wh$ = function (fn) {
    return this.param_kchx42$(UnitHasher).child_jgcrpc$(BaseLinkPoint$child$lambda(fn));
  };
  BaseLinkPoint.prototype.param_kchx42$ = function (hasher) {
    return new BaseLinkPoint$Param(this, hasher);
  };
  function BaseLinkPoint$Param($outer, hasher) {
    this.$outer = $outer;
    this.hasher = hasher;
  }
  function BaseLinkPoint$Param$child$lambda(this$BaseLinkPoint, this$Param, closure$fn) {
    return function (name) {
      return new SingleLinkPoint(this$BaseLinkPoint.factory, name, this$Param.hasher, closure$fn, this$BaseLinkPoint);
    };
  }
  BaseLinkPoint$Param.prototype.child_jgcrpc$ = function (fn) {
    return named(BaseLinkPoint$Param$child$lambda(this.$outer, this, fn));
  };
  BaseLinkPoint$Param.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Param',
    interfaces: []
  };
  BaseLinkPoint.prototype.namedHash_mhpeer$ = function (hash) {
    return new NamedHashStruct(this.name, hash);
  };
  function Coroutine$BaseLinkPoint$load$lambda(this$BaseLinkPoint_0, closure$hash_0, closure$depth_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$BaseLinkPoint = this$BaseLinkPoint_0;
    this.local$closure$hash = closure$hash_0;
    this.local$closure$depth = closure$depth_0;
  }
  Coroutine$BaseLinkPoint$load$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BaseLinkPoint$load$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BaseLinkPoint$load$lambda.prototype.constructor = Coroutine$BaseLinkPoint$load$lambda;
  Coroutine$BaseLinkPoint$load$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$BaseLinkPoint.paramHasher.deserialize(this.local$closure$hash, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var withParam = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$BaseLinkPoint.load_n43948$(this.local$closure$hash, withParam.data, withParam.serialized, this.local$closure$depth, this);
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
  function BaseLinkPoint$load$lambda(this$BaseLinkPoint_0, closure$hash_0, closure$depth_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BaseLinkPoint$load$lambda(this$BaseLinkPoint_0, closure$hash_0, closure$depth_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BaseLinkPoint.prototype.load_udy8vv$ = function (hash, depth, continuation) {
    return this.getOrPut_u2vg58$(hash, BaseLinkPoint$load$lambda(this, hash, depth), continuation);
  };
  BaseLinkPoint.prototype.createLinkage_uqvfk8$ = function (hash, depth, back) {
    return new Linkage(back, new LinkForwardImpl(this.namedHash_mhpeer$(hash), depth + 1 | 0));
  };
  BaseLinkPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseLinkPoint',
    interfaces: [LinkPoint]
  };
  function HomeLinkPoint(factory, name, fn) {
    BaseLinkPoint.call(this, factory, name, UnitHasher);
    this.fn_0 = fn;
  }
  HomeLinkPoint.prototype.load_n43948$ = function (hash, param, parentHash, depth, continuation) {
    if (!equals(EmptyHashStruct, parentHash)) {
      var message = 'home loaded with link parameters!';
      throw IllegalArgumentException_init(message.toString());
    }
    return this.fn_0(this.createLinkage_uqvfk8$(hash, depth, HistoryBack), continuation);
  };
  HomeLinkPoint.prototype.load = function (continuation) {
    return this.load_udy8vv$(EmptyHashStruct, 0, continuation);
  };
  HomeLinkPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HomeLinkPoint',
    interfaces: [BaseLinkPoint]
  };
  function ChildLinkPoint(factory, name, paramHasher, fn) {
    BaseLinkPoint.call(this, factory, name, paramHasher);
    this.fn = fn;
  }
  function ChildLinkPoint$load$lambda$lambda(closure$fromHash, closure$parent) {
    return function () {
      updateHistoryState(closure$fromHash, 0, true);
      closure$parent.redisplay();
      return Unit;
    };
  }
  function Coroutine$load_n43948$($this, hash_0, param_0, parentHash_0, depth_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$hash = hash_0;
    this.local$param = param_0;
    this.local$parentHash = parentHash_0;
    this.local$depth = depth_0;
  }
  Coroutine$load_n43948$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$load_n43948$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$load_n43948$.prototype.constructor = Coroutine$load_n43948$;
  Coroutine$load_n43948$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.loadParent_udy8vv$(this.local$parentHash, this.local$depth === 0 ? 0 : this.local$depth - 1 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.result_0) != null) {
              var tmp$_0, tmp$_1;
              tmp$_1 = this.$this.fn;
              if (this.local$depth > 0)
                tmp$_0 = HistoryBack;
              else {
                var fromHash = this.$this.parentLink_mhpeer$(this.local$parentHash);
                tmp$_0 = ChildLinkPoint$load$lambda$lambda(fromHash, tmp$);
              }
              this.state_0 = 3;
              this.result_0 = tmp$_1(tmp$, this.local$param, this.$this.createLinkage_uqvfk8$(this.local$hash, this.local$depth, tmp$_0), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$ = null;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.local$tmp$ = this.result_0;
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
  ChildLinkPoint.prototype.load_n43948$ = function (hash_0, param_0, parentHash_0, depth_0, continuation_0, suspended) {
    var instance = new Coroutine$load_n43948$(this, hash_0, param_0, parentHash_0, depth_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ChildLinkPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChildLinkPoint',
    interfaces: [BaseLinkPoint]
  };
  function updateHistoryState(linkHash, toDepth, replace) {
    if (replace === void 0)
      replace = false;
    var $receiver = {};
    $receiver.depth = toDepth;
    var data = $receiver;
    var stateData = '#' + toHashString(get_toHashStruct(linkHash));
    if (replace) {
      window.history.replaceState(data, '', stateData);
    }
     else {
      window.history.pushState(data, '', stateData);
    }
  }
  function LinkForwardImpl(hash, toDepth) {
    this.hash = hash;
    this.toDepth = toDepth;
  }
  function Coroutine$to_p1sd1w$$default($this, link_0, param_0, replace_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$link = link_0;
    this.local$param = param_0;
    this.local$replace = replace_0;
  }
  Coroutine$to_p1sd1w$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$to_p1sd1w$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$to_p1sd1w$$default.prototype.constructor = Coroutine$to_p1sd1w$$default;
  Coroutine$to_p1sd1w$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            var withParam = this.local$link.paramHasher.serialize(this.local$param, this.local$link.parentHash_veufdk$(this.$this.hash));
            updateHistoryState(new NamedHashStruct(this.local$link.name, withParam), this.$this.toDepth, this.local$replace);
            this.state_0 = 2;
            this.result_0 = this.local$link.load_udy8vv$(withParam, this.$this.toDepth, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            (tmp$_0 = (tmp$ = this.result_0) != null ? tmp$.redisplay : null) != null ? tmp$_0() : null;
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
  LinkForwardImpl.prototype.to_p1sd1w$$default = function (link_0, param_0, replace_0, continuation_0, suspended) {
    var instance = new Coroutine$to_p1sd1w$$default(this, link_0, param_0, replace_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  LinkForwardImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkForwardImpl',
    interfaces: [LinkForward]
  };
  function SingleLinkPoint(factory, name, paramHasher, fn, parentLink) {
    ChildLinkPoint.call(this, factory, name, paramHasher, fn);
    this.parentLink = parentLink;
  }
  SingleLinkPoint.prototype.loadParent_udy8vv$ = function (hash, parentDepth, continuation) {
    return this.parentLink.load_udy8vv$(hash, parentDepth, continuation);
  };
  SingleLinkPoint.prototype.parentHash_veufdk$ = function (hash) {
    return hash.hash;
  };
  SingleLinkPoint.prototype.parentLink_mhpeer$ = function (hash) {
    return new NamedHashStruct(this.parentLink.name, hash);
  };
  SingleLinkPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleLinkPoint',
    interfaces: [ChildLinkPoint]
  };
  function MultiLinkPoint(factory, name, paramHasher, fn) {
    ChildLinkPoint.call(this, factory, name, paramHasher, fn);
  }
  MultiLinkPoint.prototype.loadParent_udy8vv$ = function (hash, parentDepth, continuation) {
    var nhs = get_toNamed(hash);
    return getValue(this.factory.map, nhs.name).load_udy8vv$(nhs.hash, parentDepth, continuation);
  };
  MultiLinkPoint.prototype.parentHash_veufdk$ = function (hash) {
    return get_toHashStruct(hash);
  };
  MultiLinkPoint.prototype.parentLink_mhpeer$ = function (hash) {
    return get_toNamed(hash);
  };
  MultiLinkPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiLinkPoint',
    interfaces: [ChildLinkPoint]
  };
  function PopStateInfo(depth, hash) {
    this.depth = depth;
    this.hash = hash;
  }
  PopStateInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PopStateInfo',
    interfaces: []
  };
  function get_hashData() {
    return drop(window.location.hash, 1);
  }
  function popStateChannel$lambda(closure$states) {
    return function (e) {
      var tmp$, tmp$_0;
      closure$states.offer_11rb$(new PopStateInfo((tmp$_0 = (tmp$ = e.state) != null ? tmp$.depth : null) != null ? tmp$_0 : 0, get_hashData()));
      return Unit;
    };
  }
  function popStateChannel(deps) {
    var states = Channel(2147483647);
    on(window, deps, 'popstate', popStateChannel$lambda(states));
    return states;
  }
  function LinkPoint() {
  }
  LinkPoint.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinkPoint',
    interfaces: []
  };
  function LinksHandle(linkPointMap, home) {
    this.linkPointMap = linkPointMap;
    this.home = home;
  }
  LinksHandle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinksHandle',
    interfaces: []
  };
  function Coroutine$runLinks$lambda$process(this$_0, ps_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$this$ = this$_0;
    this.local$ps = ps_0;
  }
  Coroutine$runLinks$lambda$process.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runLinks$lambda$process.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runLinks$lambda$process.prototype.constructor = Coroutine$runLinks$lambda$process;
  Coroutine$runLinks$lambda$process.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2;
            this.exceptionState_0 = 2;
            var named = get_toNamed(toHashStruct(this.local$ps.hash));
            this.state_0 = 1;
            this.result_0 = getValue(this.local$this$.linkPointMap, named.name).load_udy8vv$(named.hash, this.local$ps.depth, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            (tmp$_0 = (tmp$ = this.result_0) != null ? tmp$.redisplay : null) != null ? tmp$_0() : null;
            this.exceptionState_0 = 5;
            this.state_0 = 4;
            continue;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$.home.load_udy8vv$(EmptyHashStruct, this.local$ps.depth, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            (tmp$_2 = (tmp$_1 = this.result_0) != null ? tmp$_1.redisplay : null) != null ? tmp$_2() : null;
            this.state_0 = 4;
            continue;
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
  function runLinks$lambda$process(this$_0) {
    return function (ps_0, continuation_0, suspended) {
      var instance = new Coroutine$runLinks$lambda$process(this$_0, ps_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$runLinks$lambda$lambda(closure$process_0, closure$states_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$process = closure$process_0;
    this.local$closure$states = closure$states_0;
    this.local$tmp$_2 = void 0;
  }
  Coroutine$runLinks$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runLinks$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runLinks$lambda$lambda.prototype.constructor = Coroutine$runLinks$lambda$lambda;
  Coroutine$runLinks$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            tmp$_1 = new PopStateInfo((tmp$_0 = (tmp$ = window.history.state) != null ? tmp$.depth : null) != null ? tmp$_0 : 0, get_hashData());
            this.state_0 = 2;
            this.result_0 = this.local$closure$process(tmp$_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_2 = this.local$closure$states.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$tmp$_2.hasNext(this);
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
            this.result_0 = this.local$tmp$_2.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var s = this.result_0;
            this.state_0 = 7;
            this.result_0 = this.local$closure$process(s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
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
  function runLinks$lambda$lambda(closure$process_0, closure$states_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$runLinks$lambda$lambda(closure$process_0, closure$states_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function runLinks($receiver, handle, states) {
    var process = runLinks$lambda$process(handle);
    launchReport($receiver, runLinks$lambda$lambda(process, states));
  }
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
  var get_none = defineInlineFunction('appsimake-commonui.mediasession.get_none_z4vyl3$', function ($receiver) {
    return 'none';
  });
  var get_paused = defineInlineFunction('appsimake-commonui.mediasession.get_paused_z4vyl3$', function ($receiver) {
    return 'paused';
  });
  var get_playing = defineInlineFunction('appsimake-commonui.mediasession.get_playing_z4vyl3$', function ($receiver) {
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
  function Progress(parent) {
    CsKillsView.call(this, parent);
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
    interfaces: [CsKillsView]
  };
  function ui($receiver) {
    return progressUI($receiver);
  }
  function progressUI($receiver) {
    return progressUI_0($receiver);
  }
  function progressUI$lambda$lambda($receiver) {
    flexCenter(get_cls($receiver));
    return Unit;
  }
  function progressUI$lambda$lambda$lambda($receiver) {
    return globalStatus.invoke();
  }
  function progressUI$lambda$lambda_0(closure$deps) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      flexFixedSize($receiver_0);
      get_m1($receiver_0);
      get_textMuted($receiver_0);
      rxText($receiver, closure$deps, progressUI$lambda$lambda$lambda);
      return Unit;
    };
  }
  function progressUI$lambda(closure$deps) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_flexGrow1($receiver_0);
      column($receiver_0);
      get_insert($receiver).hourglass;
      invoke(get_div(get_insert($receiver).wraps.div_iw61es$(progressUI$lambda$lambda).node), progressUI$lambda$lambda_0(closure$deps));
      return Unit;
    };
  }
  function progressUI_0(deps) {
    return factory.wraps.div_iw61es$(progressUI$lambda(deps)).node;
  }
  function globalStatus$lambda$lambda($receiver, msg) {
    if (!isBlank(msg))
      console.log(msg);
    return Unit;
  }
  var globalStatus;
  function launchGlobal(action) {
    return launchReport(coroutines.GlobalScope, action);
  }
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  function Coroutine$launchReport$lambda(closure$action_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 4;
    this.local$closure$action = closure$action_0;
  }
  Coroutine$launchReport$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$launchReport$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$launchReport$lambda.prototype.constructor = Coroutine$launchReport$lambda;
  Coroutine$launchReport$lambda.prototype.doResume = function () {
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
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, CancellationException)) {
              throw e_0;
            }
             else {
              package$commonui.globalStatus.remAssign_11rb$('Error: ' + e_0.toString());
              reportd(e_0);
              throw e_0;
            }

          case 3:
            return Unit;
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
  function launchReport$lambda(closure$action_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$launchReport$lambda(closure$action_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function launchReport($receiver, action) {
    return launch($receiver, void 0, void 0, launchReport$lambda(action));
  }
  var runReport = defineInlineFunction('appsimake-commonui.commonui.runReport_o14v8n$', wrapFunction(function () {
    var CancellationException = _.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.CancellationException;
    var commonui = _.commonui;
    var reportd = _.$$importsForInline$$['appsimake-commonshr'].commonshr.reportd_za3rmp$;
    return function (action) {
      try {
        action();
      }
       catch (e) {
        if (Kotlin.isType(e, CancellationException)) {
          throw e;
        }
         else {
          commonui.globalStatus.remAssign_11rb$('Error: ' + e.toString());
          reportd(e);
          throw e;
        }
      }
    };
  }));
  function ProgressTC(parent) {
    CsKillsView.call(this, parent);
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
    interfaces: [CsKillsView]
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
  function CsKills(killables) {
    this.$delegate_147p56$_0 = killables;
    var $receiver = Job();
    plusAssign(this.kills, CsKills$coroutineContext$lambda$lambda($receiver));
    this.coroutineContext_p2s1gr$_0 = $receiver;
  }
  Object.defineProperty(CsKills.prototype, 'coroutineContext', {
    get: function () {
      return this.coroutineContext_p2s1gr$_0;
    }
  });
  function Coroutine$killAndJoin($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$killAndJoin.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$killAndJoin.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$killAndJoin.prototype.constructor = Coroutine$killAndJoin;
  Coroutine$killAndJoin.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.kill();
            this.state_0 = 2;
            this.result_0 = this.$this.coroutineContext.join(this);
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
  CsKills.prototype.killAndJoin = function (continuation_0, suspended) {
    var instance = new Coroutine$killAndJoin(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Object.defineProperty(CsKills.prototype, 'kill', {
    get: function () {
      return this.$delegate_147p56$_0.kill;
    }
  });
  Object.defineProperty(CsKills.prototype, 'killed', {
    get: function () {
      return this.$delegate_147p56$_0.killed;
    }
  });
  Object.defineProperty(CsKills.prototype, 'kills', {
    get: function () {
      return this.$delegate_147p56$_0.kills;
    }
  });
  function CsKills$coroutineContext$lambda$lambda(this$) {
    return function () {
      this$.cancel();
      return Unit;
    };
  }
  CsKills.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CsKills',
    interfaces: [HasKillKilledKills, CsKillsApiCommonui]
  };
  function CsKills_init(parent, $this) {
    $this = $this || Object.create(CsKills.prototype);
    CsKills.call($this, killables(parent));
    return $this;
  }
  function CsKills_init_0(parent, $this) {
    $this = $this || Object.create(CsKills.prototype);
    CsKills_init(parent.kills, $this);
    return $this;
  }
  function ViewItem() {
  }
  ViewItem.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ViewItem',
    interfaces: []
  };
  function HasView() {
  }
  HasView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasView',
    interfaces: []
  };
  function SimpleViewItem(rawView) {
    this.rawView_0 = rawView;
    this.prepared_0 = false;
  }
  SimpleViewItem.prototype.prepared_qlkmfe$ = function (prepare) {
    var v = this.rawView_0;
    if (!this.prepared_0) {
      this.prepared_0 = true;
      prepare(v);
    }
    return v;
  };
  SimpleViewItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleViewItem',
    interfaces: [ViewItem]
  };
  function HasKillsView() {
  }
  HasKillsView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKillsView',
    interfaces: [HasView, HasKills]
  };
  function HasKillKillsView() {
  }
  HasKillKillsView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKillKillsView',
    interfaces: [HasKillKills, HasKillsView]
  };
  function CsKillsView(parent) {
    CsKills_init_0(parent, this);
    this.parent_xt2ixv$_0 = parent;
    this.selfViewItem_4o09vn$_zh71bu$_0 = lazy(CsKillsView$selfViewItem$lambda(this));
    this.isActiveView_4u3w42$_0 = lazy(CsKillsView$isActiveView$lambda(this));
    this.uix_ovajx3$_0 = CsKillsView$uix$lambda(this);
    this.redisplay_girxtq$_0 = CsKillsView$redisplay$lambda;
  }
  Object.defineProperty(CsKillsView.prototype, 'selfViewItem_4o09vn$_0', {
    get: function () {
      return this.selfViewItem_4o09vn$_zh71bu$_0.value;
    }
  });
  Object.defineProperty(CsKillsView.prototype, 'viewItem', {
    get: function () {
      return this.selfViewItem_4o09vn$_0;
    }
  });
  Object.defineProperty(CsKillsView.prototype, 'isActiveView', {
    get: function () {
      return this.isActiveView_4u3w42$_0.value;
    }
  });
  Object.defineProperty(CsKillsView.prototype, 'uix', {
    get: function () {
      return this.uix_ovajx3$_0;
    }
  });
  Object.defineProperty(CsKillsView.prototype, 'redisplay', {
    get: function () {
      return this.redisplay_girxtq$_0;
    }
  });
  Object.defineProperty(CsKillsView.prototype, 'activeView', {
    get: function () {
      return this.parent_xt2ixv$_0.activeView;
    }
  });
  function CsKillsView$selfViewItem$lambda(this$CsKillsView) {
    return function () {
      return new SimpleViewItem(this$CsKillsView.rawView);
    };
  }
  function CsKillsView$isActiveView$lambda$lambda(this$CsKillsView) {
    return function ($receiver) {
      return equals(this$CsKillsView.parent_xt2ixv$_0.activeView.invoke(), this$CsKillsView.selfViewItem_4o09vn$_0);
    };
  }
  function CsKillsView$isActiveView$lambda(this$CsKillsView) {
    return function () {
      return this$CsKillsView.rx_y6x17j$(CsKillsView$isActiveView$lambda$lambda(this$CsKillsView));
    };
  }
  function CsKillsView$uix$lambda$lambda(this$CsKillsView, closure$action) {
    return function () {
      if (this$CsKillsView.isActiveView.now) {
        closure$action();
      }
      return Unit;
    };
  }
  function CsKillsView$uix$lambda(this$CsKillsView) {
    return function (action) {
      perform(this$CsKillsView, CsKillsView$uix$lambda$lambda(this$CsKillsView, action));
      return Unit;
    };
  }
  function CsKillsView$redisplay$lambda() {
    return Unit;
  }
  CsKillsView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CsKillsView',
    interfaces: [HasKillsRouting, HasRouting, HasKillsRedisplay, KillsUixApi, HasKillKillsView, CsKills]
  };
  function MultiView(parent, initial) {
    CsKills_init_0(parent, this);
    this.current = this.get_oldKilled_vsdo34$(new Var(initial));
  }
  Object.defineProperty(MultiView.prototype, 'viewItem', {
    get: function () {
      return this.current.invoke().viewItem;
    }
  });
  MultiView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiView',
    interfaces: [HasKillKillsView, CsKills]
  };
  function runView$lambda(this$runView, closure$hole) {
    return function ($receiver) {
      return this$runView.invoke().prepared_qlkmfe$(closure$hole.prepareOrNull);
    };
  }
  function runView$lambda_0(closure$hole) {
    return function ($receiver, it) {
      closure$hole.remAssign_11rb$(it);
      return Unit;
    };
  }
  function runView($receiver, deps, hole) {
    forEach(rx(deps, runView$lambda($receiver, hole)), killable.HasNoKill, runView$lambda_0(hole));
  }
  function HasRouting() {
  }
  HasRouting.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasRouting',
    interfaces: []
  };
  function HasKillsRouting() {
  }
  HasKillsRouting.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKillsRouting',
    interfaces: [HasRouting, HasKills]
  };
  function HasForwardKillsRouting() {
  }
  HasForwardKillsRouting.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasForwardKillsRouting',
    interfaces: [HasForward, HasKillsRouting]
  };
  function HasCsForwardKillsRouting() {
  }
  HasCsForwardKillsRouting.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasCsForwardKillsRouting',
    interfaces: [CoroutineScope, HasForwardKillsRouting]
  };
  function HasForwardKillsRedisplayRouting() {
  }
  HasForwardKillsRedisplayRouting.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasForwardKillsRedisplayRouting',
    interfaces: [HasKillsRedisplay, HasForward, HasKillsRouting]
  };
  function RoutingHole(parent, initial) {
    this.$delegate_w8mzvt$_0 = parent;
    this.content = this.get_oldKilled_vsdo34$(new Var(initial(this)));
    this.activeView_lxyyg$_0 = this.rx_y6x17j$(RoutingHole$activeView$lambda(this));
  }
  Object.defineProperty(RoutingHole.prototype, 'activeView', {
    get: function () {
      return this.activeView_lxyyg$_0;
    }
  });
  RoutingHole.prototype.remAssign_looze4$ = function (n) {
    this.content.remAssign_11rb$(n);
  };
  Object.defineProperty(RoutingHole.prototype, 'kills', {
    get: function () {
      return this.$delegate_w8mzvt$_0.kills;
    }
  });
  function RoutingHole$activeView$lambda(this$RoutingHole) {
    return function ($receiver) {
      return this$RoutingHole.content.invoke().viewItem;
    };
  }
  RoutingHole.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RoutingHole',
    interfaces: [KillsApi, HasKillsRouting, HasKills]
  };
  function routingHole($receiver, initial) {
    return new RoutingHole($receiver, initial);
  }
  function routing($receiver, deps) {
    return new RoutingFactory(deps, $receiver);
  }
  function RoutingFactory(deps, hole) {
    this.deps = deps;
    this.hole = hole;
  }
  RoutingFactory.prototype.of_i6agvh$ = function (initial) {
    var $receiver = routingHole(this.deps, initial);
    runView($receiver.activeView, this.deps, this.hole);
    return $receiver;
  };
  RoutingFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RoutingFactory',
    interfaces: []
  };
  function hourglass($receiver) {
    $receiver.remAssign_looze4$(new ProgressTC($receiver));
  }
  function hourglass_0($receiver) {
    $receiver.remAssign_z26nd2$(new ProgressTC($receiver));
  }
  function hourglass_1($receiver) {
    remAssign_0($receiver, new ProgressTC($receiver));
  }
  function HasForward() {
  }
  HasForward.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasForward',
    interfaces: []
  };
  function ForwardView(parent) {
    CsKillsView.call(this, parent);
    this.status = this.get_oldKilledOpt_vsdo34$(new Var(null));
    this.redisplay_qlivlq$_0 = ForwardView$redisplay$lambda(this);
    this.fwd_dbh5mi$_0 = ForwardView$fwd$lambda(this);
  }
  Object.defineProperty(ForwardView.prototype, 'baseView_9hwdu7$_0', {
    get: function () {
      return Kotlin.callGetter(this, CsKillsView.prototype, 'viewItem');
    }
  });
  Object.defineProperty(ForwardView.prototype, 'viewItem', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.status.invoke()) != null ? tmp$.viewItem : null) != null ? tmp$_0 : this.baseView_9hwdu7$_0;
    }
  });
  ForwardView.prototype.forwardTo_z26nd2$ = function (fwd) {
    this.status.remAssign_11rb$(fwd);
  };
  ForwardView.prototype.remAssign_z26nd2$ = function (fwd) {
    this.forwardTo_z26nd2$(fwd);
  };
  ForwardView.prototype.returnToSelf = function () {
    this.status.remAssign_11rb$(null);
  };
  Object.defineProperty(ForwardView.prototype, 'redisplay', {
    get: function () {
      return this.redisplay_qlivlq$_0;
    },
    set: function (redisplay) {
      this.redisplay_qlivlq$_0 = redisplay;
    }
  });
  Object.defineProperty(ForwardView.prototype, 'fwd', {
    get: function () {
      return this.fwd_dbh5mi$_0;
    }
  });
  function ForwardView$redisplay$lambda(this$ForwardView) {
    return function () {
      this$ForwardView.returnToSelf();
      return Unit;
    };
  }
  function ForwardView$fwd$lambda(this$ForwardView) {
    return function (it) {
      this$ForwardView.forwardTo_z26nd2$(it);
      return Unit;
    };
  }
  ForwardView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ForwardView',
    interfaces: [HasCsForwardKillsRouting, HasRedisplayv, HasForward, CsKillsView, HasKillsRedisplay, HasUix]
  };
  function backOnRedisplay$lambda(this$backOnRedisplay) {
    return function () {
      this$backOnRedisplay.back();
      return Unit;
    };
  }
  function backOnRedisplay($receiver) {
    $receiver.redisplay = backOnRedisplay$lambda($receiver);
  }
  function remAssign_0($receiver, item) {
    $receiver.fwd(item);
  }
  function forwarding($receiver, view) {
    remAssign_0(view, $receiver);
    return $receiver;
  }
  function ForwardBase(parent) {
    ForwardView.call(this, parent);
  }
  ForwardBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ForwardBase',
    interfaces: [ForwardView]
  };
  function Coroutine$advance$lambda(closure$fn_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
  }
  Coroutine$advance$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$advance$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$advance$lambda.prototype.constructor = Coroutine$advance$lambda;
  Coroutine$advance$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this);
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
  function advance$lambda(closure$fn_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$advance$lambda(closure$fn_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function advance($receiver, fn) {
    globalStatus.remAssign_11rb$('Loading...');
    hourglass_1($receiver);
    launch($receiver, void 0, void 0, advance$lambda(fn));
  }
  function AbstractBadge() {
    ScreenWrap.call(this);
    this.primary_jzx3r4$_0 = lazy(AbstractBadge$primary$lambda(this));
    this.secondary_3f5uya$_0 = lazy(AbstractBadge$secondary$lambda(this));
    this.info_1h9ock$_0 = lazy(AbstractBadge$info$lambda(this));
    this.warning_nhczyy$_0 = lazy(AbstractBadge$warning$lambda(this));
    this.pill_1l15y1$_0 = lazy(AbstractBadge$pill$lambda(this));
  }
  Object.defineProperty(AbstractBadge.prototype, 'primary', {
    get: function () {
      return this.primary_jzx3r4$_0.value;
    }
  });
  Object.defineProperty(AbstractBadge.prototype, 'secondary', {
    get: function () {
      return this.secondary_3f5uya$_0.value;
    }
  });
  Object.defineProperty(AbstractBadge.prototype, 'info', {
    get: function () {
      return this.info_1h9ock$_0.value;
    }
  });
  Object.defineProperty(AbstractBadge.prototype, 'warning', {
    get: function () {
      return this.warning_nhczyy$_0.value;
    }
  });
  Object.defineProperty(AbstractBadge.prototype, 'pill', {
    get: function () {
      return this.pill_1l15y1$_0.value;
    }
  });
  function AbstractBadge$primary$lambda(this$AbstractBadge) {
    return function () {
      return get_badgePrimary(this$AbstractBadge.cls);
    };
  }
  function AbstractBadge$secondary$lambda(this$AbstractBadge) {
    return function () {
      return get_badgeSecondary(this$AbstractBadge.cls);
    };
  }
  function AbstractBadge$info$lambda(this$AbstractBadge) {
    return function () {
      return get_badgeInfo(this$AbstractBadge.cls);
    };
  }
  function AbstractBadge$warning$lambda(this$AbstractBadge) {
    return function () {
      return get_badgeWarning(this$AbstractBadge.cls);
    };
  }
  function AbstractBadge$pill$lambda(this$AbstractBadge) {
    return function () {
      return get_badgePill(this$AbstractBadge.cls);
    };
  }
  AbstractBadge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractBadge',
    interfaces: [ScreenWrap]
  };
  function Badge() {
    AbstractBadge.call(this);
    this.node_sa2hpu$_0 = invoke(get_span(document), Badge$node$lambda);
    this.text = this.node;
  }
  Object.defineProperty(Badge.prototype, 'node', {
    get: function () {
      return this.node_sa2hpu$_0;
    }
  });
  function Badge$node$lambda($receiver) {
    get_badge(get_cls($receiver));
    return Unit;
  }
  Badge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Badge',
    interfaces: [AbstractBadge]
  };
  function BadgeAnchor() {
    AbstractBadge.call(this);
    this.node_3v2rd$_0 = invoke(get_a(document), BadgeAnchor$node$lambda);
    this.text = this.node;
  }
  Object.defineProperty(BadgeAnchor.prototype, 'node', {
    get: function () {
      return this.node_3v2rd$_0;
    }
  });
  function BadgeAnchor$node$lambda($receiver) {
    get_badge(get_cls($receiver));
    $receiver.href = '#';
    return Unit;
  }
  BadgeAnchor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BadgeAnchor',
    interfaces: [AbstractBadge]
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
    CsKills_init(killable.NoKill, this);
    this.body_kitg49$_0 = this;
    this.hole = this.get_routing_lqv1tx$(slot).of_i6agvh$(Body$hole$lambda);
    this.activeView_l6d9nm$_0 = this.hole.activeView;
  }
  Object.defineProperty(Body.prototype, 'body', {
    get: function () {
      return this.body_kitg49$_0;
    }
  });
  Object.defineProperty(Body.prototype, 'activeView', {
    get: function () {
      return this.activeView_l6d9nm$_0;
    }
  });
  function Body$hole$lambda($receiver) {
    return new Progress($receiver);
  }
  Body.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Body',
    interfaces: [HasKillsRouting, BodyPath, CsKills]
  };
  function BodyTC(body) {
    if (body === void 0)
      body = new Body();
    CsKillsView.call(this, body);
    this.slts = new BodyTC$Slots();
    var $receiver = factory.screen;
    this.slts.top = $receiver.slots.top;
    this.slts.main = $receiver.toastSlots.content;
    this.slts.toasts = BodyTC$rawView$lambda$lambda$lambda$lambda($receiver.toastSlots.toasts);
    this.rawView_jjc73j$_0 = $receiver.node;
    this.contentHole = new HoleT(BodyTC$contentHole$lambda(this), BodyTC$contentHole$lambda_0(this));
    this.hole = this.get_routing_lqv1tx$(this.contentHole).of_i6agvh$(BodyTC$hole$lambda);
    body.hole.remAssign_looze4$(this);
  }
  function BodyTC$Slots() {
    this.top_8np83k$_0 = this.top_8np83k$_0;
    this.main_fttupm$_0 = this.main_fttupm$_0;
    this.toasts_rk7o4z$_0 = this.toasts_rk7o4z$_0;
  }
  Object.defineProperty(BodyTC$Slots.prototype, 'top', {
    get: function () {
      if (this.top_8np83k$_0 == null)
        return throwUPAE('top');
      return this.top_8np83k$_0;
    },
    set: function (top) {
      this.top_8np83k$_0 = top;
    }
  });
  Object.defineProperty(BodyTC$Slots.prototype, 'main', {
    get: function () {
      if (this.main_fttupm$_0 == null)
        return throwUPAE('main');
      return this.main_fttupm$_0;
    },
    set: function (main) {
      this.main_fttupm$_0 = main;
    }
  });
  Object.defineProperty(BodyTC$Slots.prototype, 'toasts', {
    get: function () {
      if (this.toasts_rk7o4z$_0 == null)
        return throwUPAE('toasts');
      return this.toasts_rk7o4z$_0;
    },
    set: function (toasts) {
      this.toasts_rk7o4z$_0 = toasts;
    }
  });
  BodyTC$Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: []
  };
  Object.defineProperty(BodyTC.prototype, 'rawView', {
    get: function () {
      return this.rawView_jjc73j$_0;
    }
  });
  function BodyTC$rawView$lambda$lambda$lambda$lambda(closure$tsts) {
    return function (fn) {
      fn(closure$tsts.toast);
      return Unit;
    };
  }
  function BodyTC$contentHole$lambda(this$BodyTC) {
    return function ($receiver) {
      var $receiver_0 = $receiver.topbar;
      this$BodyTC.slts.top.prepareOrNull($receiver_0);
      var $receiver_1 = $receiver.content;
      this$BodyTC.slts.main.prepareOrNull($receiver_1);
      return Unit;
    };
  }
  function BodyTC$contentHole$lambda_0(this$BodyTC) {
    return function (cv) {
      this$BodyTC.slts.top.remAssign_11rb$(cv != null ? cv.topbar : null);
      this$BodyTC.slts.main.remAssign_11rb$(cv != null ? cv.content : null);
      return Unit;
    };
  }
  function BodyTC$hole$lambda($receiver) {
    return new ProgressTC($receiver);
  }
  BodyTC.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BodyTC',
    interfaces: [CsKillsView]
  };
  function Button() {
    ScreenWrap.call(this);
    this.node_qgr1wp$_0 = invoke(get_button(document), Button$node$lambda);
    this.slots = new Button$Slots(this);
    this.p2_5qk2vr$_0 = lazy(Button$p2$lambda(this));
    this.m1_5qk0mt$_0 = lazy(Button$m1$lambda(this));
    this.m1p2_qie80d$_0 = lazy(Button$m1p2$lambda(this));
    this.primary_n49j47$_0 = lazy(Button$primary$lambda(this));
    this.outlineSecondary_muxu0p$_0 = lazy(Button$outlineSecondary$lambda(this));
    this.secondary_r3md15$_0 = lazy(Button$secondary$lambda(this));
    this.warning_4fkf4v$_0 = lazy(Button$warning$lambda(this));
    this.danger_fanju2$_0 = lazy(Button$danger$lambda(this));
    this.success_xczl08$_0 = lazy(Button$success$lambda(this));
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
  function Button$Slots($outer) {
    this.$outer = $outer;
    this.icon = this.$outer.slot;
    this.text = this.$outer.slot;
  }
  Button$Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: []
  };
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
  Object.defineProperty(Button.prototype, 'outlineSecondary', {
    get: function () {
      return this.outlineSecondary_muxu0p$_0.value;
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
  Object.defineProperty(Button.prototype, 'success', {
    get: function () {
      return this.success_xczl08$_0.value;
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
  Button.prototype.enabled_bii2r3$ = function (deps, fn) {
    rxEnabled(this.node, deps, fn);
  };
  function Button$node$lambda($receiver) {
    get_btn(get_cls($receiver));
    return Unit;
  }
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
  function Button$outlineSecondary$lambda(this$Button) {
    return function () {
      return get_btnOutlineSecondary(this$Button.cls);
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
  function Button$success$lambda(this$Button) {
    return function () {
      return get_btnSuccess(this$Button.cls);
    };
  }
  function Button$icon$lambda(this$Button) {
    return function () {
      return setTo_1(get_span(document), this$Button.slots.icon);
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
      return setTo_1(get_span(document), this$Button.slots.text);
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
  function DropdownMenuItem() {
    ScreenWrap.call(this);
    this.node_eadcrc$_0 = invoke(get_button(document), DropdownMenuItem$node$lambda);
    var $receiver = this.insert.icon;
    get_m1(get_cls($receiver.node));
    $receiver.fw;
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
      return this.get_append_fyb8v2$(new DropdownMenuItem());
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
  DropdownMenu.prototype.signOut_jliuvt$ = function (deps, action) {
    var $receiver = this.item;
    $receiver.text.remAssign_61zpoe$('Sign Out');
    get_signOutAlt($receiver.fa);
    click_2($receiver, deps, action);
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
    this.menu = this.get_append_fyb8v2$(new DropdownMenu());
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
  function Factory$withElement$lambda(this$Factory, closure$fn) {
    return function ($receiver) {
      this$Factory.after_0.element($receiver);
      if ($receiver != null)
        closure$fn($receiver);
      return Unit;
    };
  }
  Factory.prototype.withElement_9f50g3$ = function (fn) {
    return new Factory(this.after_0.withElement_lx79ro$(Factory$withElement$lambda(this, fn)));
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
  Object.defineProperty(Factory.prototype, 'icon', {
    get: function () {
      return this.get_applied_fyb8v2$(new Icon());
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
  Object.defineProperty(Factory.prototype, 'grid', {
    get: function () {
      return this.get_applied_fyb8v2$(new Grid());
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
  Object.defineProperty(Factory.prototype, 'badgeAnchor', {
    get: function () {
      return this.get_applied_fyb8v2$(new BadgeAnchor());
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
  Object.defineProperty(Factory.prototype, 'textArea', {
    get: function () {
      return this.get_applied_fyb8v2$(new TextArea());
    }
  });
  Object.defineProperty(Factory.prototype, 'select', {
    get: function () {
      return this.get_applied_fyb8v2$(new Select());
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
  Object.defineProperty(Factory.prototype, 'nestedListButton', {
    get: function () {
      return this.get_applied_fyb8v2$(new NestedListButton());
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
  ScreenWrap.prototype.get_append_fyb8v2$ = function ($receiver) {
    return setTo($receiver, get_widget(this.node));
  };
  ScreenWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenWrap',
    interfaces: [InvokeApply, HasHTMLElement]
  };
  function visible$lambda$lambda$lambda(closure$fn, this$, this$visible) {
    return function () {
      return closure$fn(this$) ? this$visible.node : null;
    };
  }
  function visible$lambda(this$visible, closure$fn) {
    return function ($receiver) {
      var tmp$;
      var tmp$_0;
      if ((tmp$ = this$visible.target.invoke()) != null) {
        rx_0(tmp$, $receiver, visible$lambda$lambda$lambda(closure$fn, $receiver, this$visible));
        tmp$_0 = Unit;
      }
       else
        tmp$_0 = null;
      return tmp$_0;
    };
  }
  function visible($receiver, deps, fn) {
    rx(deps, visible$lambda($receiver, fn));
  }
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
    this.inputEmitter_0 = new Var(null);
    this.label_5l31p0$_0 = lazy(FormGroup$label$lambda(this));
    this.input_4dcs3i$_0 = lazy(FormGroup$input$lambda(this));
    this.textArea_tuah4e$_0 = lazy(FormGroup$textArea$lambda(this));
    this.select_66dhjk$_0 = lazy(FormGroup$select$lambda(this));
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
  Object.defineProperty(FormGroup.prototype, 'textArea', {
    get: function () {
      return this.textArea_tuah4e$_0.value;
    }
  });
  Object.defineProperty(FormGroup.prototype, 'select', {
    get: function () {
      return this.select_66dhjk$_0.value;
    }
  });
  function FormGroup$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_formGroup($receiver_0);
    column($receiver_0);
    return Unit;
  }
  function FormGroup$label$lambda$lambda$lambda(this$) {
    return function ($receiver, it) {
      if (it != null) {
        this$.htmlFor = get_ref(it);
      }
      return Unit;
    };
  }
  function FormGroup$label$lambda$lambda(this$FormGroup) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      this$FormGroup.inputEmitter_0.forEach_aaomyj$(killable.NoKill, FormGroup$label$lambda$lambda$lambda($receiver));
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
      this$FormGroup_0.inputEmitter_0.remAssign_11rb$($receiver.node);
      return $receiver;
    };
  }
  function FormGroup$textArea$lambda(this$FormGroup) {
    return function () {
      var $receiver = get_insert_0(this$FormGroup.slots.input).textArea;
      var this$FormGroup_0 = this$FormGroup;
      get_m1($receiver.cls);
      this$FormGroup_0.inputEmitter_0.remAssign_11rb$($receiver.node);
      return $receiver;
    };
  }
  function FormGroup$select$lambda(this$FormGroup) {
    return function () {
      var $receiver = get_insert_0(this$FormGroup.slots.input).select;
      var this$FormGroup_0 = this$FormGroup;
      get_m1($receiver.cls);
      this$FormGroup_0.inputEmitter_0.remAssign_11rb$($receiver.node);
      return $receiver;
    };
  }
  FormGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormGroup',
    interfaces: [ScreenWrap]
  };
  function Grid() {
    ScreenWrap.call(this);
    this.node_69b79x$_0 = invoke(get_div(document), Grid$node$lambda);
    this.center_w9avc$_0 = lazy(Grid$center$lambda(this));
    this.alignItemsCenter_p0x5qb$_0 = lazy(Grid$alignItemsCenter$lambda(this));
  }
  Object.defineProperty(Grid.prototype, 'node', {
    get: function () {
      return this.node_69b79x$_0;
    }
  });
  Object.defineProperty(Grid.prototype, 'center', {
    get: function () {
      return this.center_w9avc$_0.value;
    }
  });
  Object.defineProperty(Grid.prototype, 'alignItemsCenter', {
    get: function () {
      return this.alignItemsCenter_p0x5qb$_0.value;
    }
  });
  Grid.prototype.get_columns_s8ev3n$ = function ($receiver) {
    this.columns_za3lpa$($receiver);
  };
  Grid.prototype.columns_za3lpa$ = function (count) {
    get_gridTemplateColumnsAuto(this.cls)(count);
  };
  function Grid$node$lambda($receiver) {
    get_dGrid(get_cls($receiver));
    return Unit;
  }
  function Grid$center$lambda(this$Grid) {
    return function () {
      var $receiver = this$Grid.cls;
      get_justifyContentCenter($receiver);
      get_alignContentCenter($receiver);
      return $receiver;
    };
  }
  function Grid$alignItemsCenter$lambda(this$Grid) {
    return function () {
      return get_alignItemsCenter(this$Grid.cls);
    };
  }
  Grid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Grid',
    interfaces: [ScreenWrap]
  };
  function click$lambda$lambda(closure$deps, closure$action) {
    return function () {
      closure$deps.uix(closure$action);
      return Unit;
    };
  }
  function click$lambda(closure$deps, closure$action) {
    return function (it) {
      it.preventDefault();
      window.setTimeout(click$lambda$lambda(closure$deps, closure$action), 0);
      return Unit;
    };
  }
  function click($receiver, deps, action) {
    onClick($receiver, deps, click$lambda(deps, action));
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
  function click_3($receiver, deps, action) {
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
  function Icon() {
    ScreenWrap.call(this);
    this.node_q05q5e$_0 = invoke(get_span(document), Icon$node$lambda);
    this.fafw_q4syss$_0 = lazy(Icon$fafw$lambda(this));
    this.fw_8p07vz$_0 = lazy(Icon$fw$lambda(this));
    this.fa_8p07d1$_0 = lazy(Icon$fa$lambda(this));
    this.faBrands_ne35uv$_0 = lazy(Icon$faBrands$lambda(this));
  }
  Object.defineProperty(Icon.prototype, 'node', {
    get: function () {
      return this.node_q05q5e$_0;
    }
  });
  Object.defineProperty(Icon.prototype, 'fafw', {
    get: function () {
      return this.fafw_q4syss$_0.value;
    }
  });
  Object.defineProperty(Icon.prototype, 'fw', {
    get: function () {
      return this.fw_8p07vz$_0.value;
    }
  });
  Object.defineProperty(Icon.prototype, 'fa', {
    get: function () {
      return this.fa_8p07d1$_0.value;
    }
  });
  Object.defineProperty(Icon.prototype, 'faBrands', {
    get: function () {
      return this.faBrands_ne35uv$_0.value;
    }
  });
  function Icon$node$lambda($receiver) {
    return Unit;
  }
  function Icon$fafw$lambda(this$Icon) {
    return function () {
      this$Icon.fa;
      this$Icon.fw;
      return Unit;
    };
  }
  var Classes_init = $module$appsimake_domx.domx.Classes;
  function Icon$fw$lambda(this$Icon) {
    return function () {
      (new Classes_init(this$Icon.node)).plusAssign_pdl1vj$(get_fw(Fa.Companion));
      return Unit;
    };
  }
  function Icon$fa$lambda(this$Icon) {
    return function () {
      return get_fa(this$Icon.cls);
    };
  }
  function Icon$faBrands$lambda(this$Icon) {
    return function () {
      return get_faBrands(this$Icon.cls);
    };
  }
  Icon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Icon',
    interfaces: [ScreenWrap]
  };
  function AbstractInput() {
    ScreenWrap.call(this);
    this.changeListeners_vawrmc$_0 = lazy(AbstractInput$changeListeners$lambda(this));
    this.rxv_axh705$_0 = lazy(AbstractInput$rxv$lambda(this));
    this.valid_ag20zj$_0 = lazy(AbstractInput$valid$lambda(this));
  }
  Object.defineProperty(AbstractInput.prototype, 'changeListeners', {
    get: function () {
      return this.changeListeners_vawrmc$_0.value;
    }
  });
  Object.defineProperty(AbstractInput.prototype, 'value', {
    get: function () {
      return this.nodeValue;
    },
    set: function (v) {
      this.nodeValue = v;
      this.changeListeners.fire();
    }
  });
  Object.defineProperty(AbstractInput.prototype, 'rxv', {
    get: function () {
      return this.rxv_axh705$_0.value;
    }
  });
  Object.defineProperty(AbstractInput.prototype, 'valid', {
    get: function () {
      return this.valid_ag20zj$_0.value;
    }
  });
  function AbstractInput$changeListeners$lambda$lambda$lambda(this$) {
    return function (it) {
      this$.fire();
      return Unit;
    };
  }
  function AbstractInput$changeListeners$lambda(this$AbstractInput) {
    return function () {
      var $receiver = new Listeners();
      listen(this$AbstractInput.node, 'input', AbstractInput$changeListeners$lambda$lambda$lambda($receiver));
      return $receiver;
    };
  }
  function AbstractInput$rxv$lambda$lambda(closure$rxv, this$AbstractInput) {
    return function () {
      closure$rxv.remAssign_11rb$(this$AbstractInput.value);
      return Unit;
    };
  }
  function AbstractInput$rxv$lambda(this$AbstractInput) {
    return function () {
      var rxv = new Var(this$AbstractInput.value);
      this$AbstractInput.changeListeners.plusAssign_o14v8n$(AbstractInput$rxv$lambda$lambda(rxv, this$AbstractInput));
      return rxv;
    };
  }
  function AbstractInput$valid$lambda$lambda$lambda(closure$v) {
    return function ($receiver) {
      return !closure$v.invoke();
    };
  }
  function AbstractInput$valid$lambda(this$AbstractInput) {
    return function () {
      var $receiver = new Var(true);
      rxClass(this$AbstractInput.node, killable.HasNoKill, get_isInvalid(Cls.Companion), AbstractInput$valid$lambda$lambda$lambda($receiver));
      return $receiver;
    };
  }
  AbstractInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractInput',
    interfaces: [ScreenWrap]
  };
  function bindValue$lambda(this$bindValue, closure$rxv) {
    return function () {
      closure$rxv.now = this$bindValue.value;
      return Unit;
    };
  }
  function bindValue($receiver, deps, rxv) {
    $receiver.value = rxv.now;
    plusAssign(deps.kills, $receiver.changeListeners.add_o14v8n$(bindValue$lambda($receiver, rxv)));
  }
  function Input() {
    AbstractInput.call(this);
    this.node_s1otlz$_0 = invoke(get_input(document), Input$node$lambda);
    this.required_7z3v50$_0 = lazy(Input$required$lambda(this));
  }
  Object.defineProperty(Input.prototype, 'node', {
    get: function () {
      return this.node_s1otlz$_0;
    }
  });
  Object.defineProperty(Input.prototype, 'nodeValue', {
    get: function () {
      return this.node.value;
    },
    set: function (v) {
      this.node.value = v;
    }
  });
  Object.defineProperty(Input.prototype, 'required', {
    get: function () {
      return this.required_7z3v50$_0.value;
    }
  });
  function Input$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_formControl($receiver_0);
    get_widthAuto($receiver_0);
    return Unit;
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
    interfaces: [AbstractInput]
  };
  function InputGroup() {
    ScreenWrap.call(this);
    this.node_3cyd8a$_0 = invoke(get_div(document), InputGroup$node$lambda);
    this.slots = new InputGroup$Slots(this);
    this.input = get_insert_0(this.slots.input).input;
    this.append_fnwlcu$_0 = lazy(InputGroup$append$lambda(this));
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
  Object.defineProperty(InputGroup.prototype, 'append', {
    get: function () {
      return this.append_fnwlcu$_0.value;
    }
  });
  Object.defineProperty(InputGroup.prototype, 'appendButton', {
    get: function () {
      return this.append.insert.button;
    }
  });
  function InputGroup$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_inputGroup($receiver_0);
    get_widthAuto($receiver_0);
    return Unit;
  }
  function InputGroup$append$lambda$lambda($receiver) {
    get_inputGroupAppend(get_cls($receiver));
    return Unit;
  }
  function InputGroup$append$lambda(this$InputGroup) {
    return function () {
      return get_insert_0(this$InputGroup.slots.append.slot).wraps.div_iw61es$(InputGroup$append$lambda$lambda);
    };
  }
  InputGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputGroup',
    interfaces: [ScreenWrap]
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
  function list($receiver, deps, nodes) {
    nodeList($receiver.node, deps, nodes);
  }
  function ListGroupButton() {
    ScreenWrap.call(this);
    this.node_lxudlu$_0 = invoke(get_button(document), ListGroupButton$node$lambda);
    this.slots_ru6qdh$_0 = lazy(ListGroupButton$slots$lambda(this));
    this.middle_t96mvl$_0 = lazy(ListGroupButton$middle$lambda(this));
    this.left_lwkge5$_0 = lazy(ListGroupButton$left$lambda(this));
    this.right_sd13bg$_0 = lazy(ListGroupButton$right$lambda(this));
    this.p1_ciifb7$_0 = lazy(ListGroupButton$p1$lambda(this));
    this.text_m0z6hj$_0 = lazy(ListGroupButton$text$lambda(this));
    this.leftIcon_yxn8cc$_0 = lazy(ListGroupButton$leftIcon$lambda(this));
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
  Object.defineProperty(ListGroupButton.prototype, 'p1', {
    get: function () {
      return this.p1_ciifb7$_0.value;
    }
  });
  Object.defineProperty(ListGroupButton.prototype, 'text', {
    get: function () {
      return this.text_m0z6hj$_0.value;
    }
  });
  Object.defineProperty(ListGroupButton.prototype, 'leftIcon', {
    get: function () {
      return this.leftIcon_yxn8cc$_0.value;
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
      return setTo_1(row(document, ListGroupButton$middle$lambda$lambda), this$ListGroupButton.slots.middle);
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
  function ListGroupButton$p1$lambda(this$ListGroupButton) {
    return function () {
      return get_p1(this$ListGroupButton.cls);
    };
  }
  function ListGroupButton$text$lambda$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_m1($receiver_0);
    get_alignSelfCenter($receiver_0);
    return Unit;
  }
  function ListGroupButton$text$lambda(this$ListGroupButton) {
    return function () {
      this$ListGroupButton.p1;
      return invoke(this$ListGroupButton.middle, ListGroupButton$text$lambda$lambda);
    };
  }
  function ListGroupButton$leftIcon$lambda(this$ListGroupButton) {
    return function () {
      this$ListGroupButton.p1;
      var $receiver = get_insert_0(this$ListGroupButton.left).icon;
      $receiver.fa;
      $receiver.fw;
      var $receiver_0 = $receiver.cls;
      get_m1($receiver_0);
      get_alignSelfCenter($receiver_0);
      return $receiver;
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
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function ProcOrElseList() {
    this.procs_0 = ArrayList_init_0();
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
  function NestedListButton() {
    ScreenWrap.call(this);
    this.node_r48f58$_0 = invoke(get_div(document), NestedListButton$node$lambda);
    this.anchor = invoke(get_a(this.node), NestedListButton$anchor$lambda);
    this.glassPane = invoke(get_div(this.node), NestedListButton$glassPane$lambda);
    this.glassRow_pn4eq8$_0 = lazy(NestedListButton$glassRow$lambda(this));
    this.glassP1_7p8qwn$_0 = lazy(NestedListButton$glassP1$lambda(this));
    this.slots_9ebimn$_0 = lazy(NestedListButton$slots$lambda(this));
    this.middle_pu7ekn$_0 = lazy(NestedListButton$middle$lambda(this));
    this.text_r7d80x$_0 = lazy(NestedListButton$text$lambda(this));
  }
  Object.defineProperty(NestedListButton.prototype, 'node', {
    get: function () {
      return this.node_r48f58$_0;
    }
  });
  Object.defineProperty(NestedListButton.prototype, 'glassRow', {
    get: function () {
      return this.glassRow_pn4eq8$_0.value;
    }
  });
  Object.defineProperty(NestedListButton.prototype, 'glassP1', {
    get: function () {
      return this.glassP1_7p8qwn$_0.value;
    }
  });
  function NestedListButton$Slots($outer) {
    this.$outer = $outer;
    this.left = get_slots(this.$outer.glassPane);
    this.middle = get_widget(this.$outer.glassPane);
    this.right = get_slots(this.$outer.glassPane);
  }
  NestedListButton$Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: []
  };
  Object.defineProperty(NestedListButton.prototype, 'slots', {
    get: function () {
      return this.slots_9ebimn$_0.value;
    }
  });
  Object.defineProperty(NestedListButton.prototype, 'middle', {
    get: function () {
      return this.middle_pu7ekn$_0.value;
    }
  });
  Object.defineProperty(NestedListButton.prototype, 'text', {
    get: function () {
      return this.text_r7d80x$_0.value;
    }
  });
  function NestedListButton$get_NestedListButton$solid$lambda($receiver) {
    get_pointerEventsAll(get_cls($receiver));
    return Unit;
  }
  NestedListButton.prototype.get_solid_tdhe4g$ = function ($receiver) {
    return $receiver.withElement_9f50g3$(NestedListButton$get_NestedListButton$solid$lambda);
  };
  Object.defineProperty(NestedListButton.prototype, 'left', {
    get: function () {
      return this.get_solid_tdhe4g$(get_insert_0(this.slots.left.slot));
    }
  });
  Object.defineProperty(NestedListButton.prototype, 'right', {
    get: function () {
      return this.get_solid_tdhe4g$(get_insert_0(this.slots.right.slot));
    }
  });
  function NestedListButton$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_listGroupItem($receiver_0);
    get_positionRelative($receiver_0);
    get_p0($receiver_0);
    return Unit;
  }
  function NestedListButton$anchor$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_positionAbsolute($receiver_0);
    get_leftRightTopBottom0($receiver_0);
    get_listGroupItemAction($receiver_0);
    $receiver.href = '#';
    return Unit;
  }
  function NestedListButton$glassPane$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_flexGrow1($receiver_0);
    get_positionRelative($receiver_0);
    get_pointerEventsNone($receiver_0);
    get_zIndex1($receiver_0);
    return Unit;
  }
  function NestedListButton$glassRow$lambda(this$NestedListButton) {
    return function () {
      var $receiver = get_cls(this$NestedListButton.glassPane);
      row_0($receiver);
      return $receiver;
    };
  }
  function NestedListButton$glassP1$lambda(this$NestedListButton) {
    return function () {
      this$NestedListButton.glassRow;
      var $receiver = get_cls(this$NestedListButton.glassPane);
      get_p1($receiver);
      return $receiver;
    };
  }
  function NestedListButton$slots$lambda(this$NestedListButton) {
    return function () {
      this$NestedListButton.glassRow;
      return new NestedListButton$Slots(this$NestedListButton);
    };
  }
  function NestedListButton$middle$lambda$lambda($receiver) {
    get_flexGrow1(get_cls($receiver));
    return Unit;
  }
  function NestedListButton$middle$lambda(this$NestedListButton) {
    return function () {
      return get_insert_0(this$NestedListButton.slots.middle).wraps.div_iw61es$(NestedListButton$middle$lambda$lambda);
    };
  }
  function NestedListButton$text$lambda(this$NestedListButton) {
    return function () {
      this$NestedListButton.glassP1;
      var $receiver = this$NestedListButton.middle;
      var $receiver_0 = $receiver.cls;
      get_m1($receiver_0);
      get_alignSelfCenter($receiver_0);
      return $receiver.node;
    };
  }
  NestedListButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NestedListButton',
    interfaces: [ScreenWrap]
  };
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
  function rx_1($receiver, ks, fnx, fn) {
    return rx_2($receiver, ks, Rx_init(ks, rx$lambda(fnx)), fn);
  }
  function rx$lambda_0(closure$procs, closure$ks, this$rx, closure$fn) {
    return function ($receiver, t) {
      processOnce(closure$procs.add, closure$ks, t, this$rx, closure$fn);
      return Unit;
    };
  }
  function rx_2($receiver, ks, ch, fn) {
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
  function Select() {
    AbstractInput.call(this);
    this.node_8f3bj3$_0 = invoke(get_select(document), Select$node$lambda);
    this.required_2te4d8$_0 = lazy(Select$required$lambda(this));
  }
  Object.defineProperty(Select.prototype, 'node', {
    get: function () {
      return this.node_8f3bj3$_0;
    }
  });
  Object.defineProperty(Select.prototype, 'nodeValue', {
    get: function () {
      return this.node.value;
    },
    set: function (v) {
      this.node.value = v;
    }
  });
  Object.defineProperty(Select.prototype, 'required', {
    get: function () {
      return this.required_2te4d8$_0.value;
    }
  });
  Object.defineProperty(Select.prototype, 'option', {
    get: function () {
      return get_option(this.node);
    }
  });
  function Select$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_customSelect($receiver_0);
    get_widthAuto($receiver_0);
    return Unit;
  }
  function Select$required$lambda(this$Select) {
    return function () {
      this$Select.node.required = true;
      return Unit;
    };
  }
  Select.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Select',
    interfaces: [AbstractInput]
  };
  function bind$lambda$lambda_2(closure$e) {
    return function ($receiver) {
      $receiver.value = closure$e.name;
      remAssign($receiver, closure$e.name);
      return Unit;
    };
  }
  function bind_2($receiver, deps, prop) {
    var tmp$;
    tmp$ = prop.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      invoke($receiver.option, bind$lambda$lambda_2(element));
    }
    bindValue($receiver, deps, prop.nameVar);
  }
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
  function TextArea() {
    AbstractInput.call(this);
    this.node_o93gg1$_0 = invoke(get_textarea(document), TextArea$node$lambda);
    this.required_mho132$_0 = lazy(TextArea$required$lambda(this));
  }
  Object.defineProperty(TextArea.prototype, 'node', {
    get: function () {
      return this.node_o93gg1$_0;
    }
  });
  Object.defineProperty(TextArea.prototype, 'nodeValue', {
    get: function () {
      return this.node.value;
    },
    set: function (v) {
      this.node.value = v;
    }
  });
  Object.defineProperty(TextArea.prototype, 'required', {
    get: function () {
      return this.required_mho132$_0.value;
    }
  });
  function TextArea$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_formControl($receiver_0);
    get_widthAuto($receiver_0);
    return Unit;
  }
  function TextArea$required$lambda(this$TextArea) {
    return function () {
      this$TextArea.node.required = true;
      return Unit;
    };
  }
  TextArea.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextArea',
    interfaces: [AbstractInput]
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
      return this.get_append_fyb8v2$(new Toast());
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
    onClick($receiver, killable.HasNoKill, Toast$node$lambda$lambda($receiver));
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
  TopAndContent$Companion.prototype.progress_94o6bb$ = function (deps) {
    return new TopAndContent(null, progressUI_0(deps));
  };
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
    CsKillsView.call(this, parent);
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
    interfaces: [CsKillsView]
  };
  function Topbar() {
    ScreenWrap.call(this);
    this.node_to2rjx$_0 = row(document, Topbar$node$lambda);
    this.beforeSlot_0 = this.slot;
    this.tabsSlot_0 = this.slot;
    this.afterSlot_0 = this.slot;
    this.before_0 = setTo_1(row(document, Topbar$before$lambda), this.beforeSlot_0);
    this.after_2m5zrh$_0 = lazy(Topbar$after$lambda(this));
    this.slots = new Topbar$Slots(this);
    this.left_tpcorm$_0 = lazy(Topbar$left$lambda(this));
    this.middle = setTo_1(row(document, Topbar$middle$lambda), this.slots.middle);
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
      return row(this$Topbar.node, Topbar$after$lambda$lambda);
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
    var $receiver = new Var(null);
    $receiver.forEach_aaomyj$(killable.NoKill, Tabs$active$lambda$lambda);
    this.active = $receiver;
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
    row_0($receiver_0);
    get_px1($receiver_0);
    return Unit;
  }
  function Tabs$active$lambda$lambda($receiver, it) {
    if (it != null) {
      it.onActivate.fire();
    }
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
    this.isActive = rx(killable.HasNoKill, Tab$isActive$lambda(this));
    this.onActivate = new Listeners();
    this.node_i3klb8$_0 = invoke(get_div(document), Tab$node$lambda);
    this.anchor = invoke(get_a(this.node), Tab$anchor$lambda(this));
    var $receiver = get_insert(this.anchor).icon;
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
  Tab.prototype.toggle = function () {
    this.owner.active.remAssign_11rb$(equals(this.owner.active.now, this) ? null : this);
  };
  Tab.prototype.click_jliuvt$ = function (deps, action) {
    click(this.anchor, deps, action);
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
      rxClass($receiver, killable.HasNoKill, get_active($receiver_0), Tab$anchor$lambda$lambda$lambda(this$Tab_0));
      $receiver.href = '#';
      return Unit;
    };
  }
  Tab.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tab',
    interfaces: [ScreenWrap]
  };
  function clickActivate$lambda(this$clickActivate) {
    return function () {
      this$clickActivate.activate();
      return Unit;
    };
  }
  function clickActivate($receiver, deps) {
    $receiver.click_jliuvt$(deps, clickActivate$lambda($receiver));
  }
  function clickToggle$lambda(this$clickToggle) {
    return function () {
      this$clickToggle.toggle();
      return Unit;
    };
  }
  function clickToggle($receiver, deps) {
    $receiver.click_jliuvt$(deps, clickToggle$lambda($receiver));
  }
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
    this.list_8be2vx$ = ArrayList_init_0();
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
    return (new Factory()).withElement_9f50g3$($receiver.prepare);
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
      return closure$fn($receiver);
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
  function rxClass_1($receiver, deps, style, fn) {
    rxClass($receiver.node, deps, style, fn);
  }
  function rxClass_2($receiver, deps, style, fn) {
    rxClass_0($receiver.node, deps, style, fn);
  }
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$commonui = _.commonui || (_.commonui = {});
  package$commonui.KillsApiCommonui = KillsApiCommonui;
  package$commonui.KillsUixApi = KillsUixApi;
  package$commonui.BackApi = BackApi;
  package$commonui.BackKillsUixApi = BackKillsUixApi;
  package$commonui.CsApiCommonui = CsApiCommonui;
  package$commonui.CsKillsApiCommonui = CsKillsApiCommonui;
  package$commonui.BindKillsApi = BindKillsApi;
  package$commonui.EditKillsApi = EditKillsApi;
  package$commonui.CreateKillsApi = CreateKillsApi;
  package$commonui.CreateKillsUixApi = CreateKillsUixApi;
  package$commonui.EditKillsUixApi = EditKillsUixApi;
  package$commonui.BackEditKillsUixApi = BackEditKillsUixApi;
  package$commonui.BackCreateKillsUixApi = BackCreateKillsUixApi;
  package$commonui.BindCsKillsUixApi = BindCsKillsUixApi;
  Object.defineProperty(package$commonui, 'APP', {
    get: APP_getInstance
  });
  $$importsForInline$$['appsimake-commonui'] = _;
  package$commonui.runReport_o14v8n$ = runReport;
  package$commonui.loadApp_75qrqo$ = loadApp;
  Object.defineProperty(package$commonui, 'browserVisible', {
    get: get_browserVisible
  });
  Object.defineProperty(package$commonui, 'windowHasFocus', {
    get: get_windowHasFocus
  });
  Object.defineProperty(package$commonui, 'windowActive', {
    get: get_windowActive
  });
  package$commonui.KeepAwake = KeepAwake;
  package$commonui.keepScreenAwake_944mgb$ = keepScreenAwake;
  package$commonui.keepAwake = keepAwake;
  Object.defineProperty(package$commonui, 'popstates', {
    get: get_popstates
  });
  $$importsForInline$$['appsimake-common'] = $module$appsimake_common;
  Object.defineProperty(package$commonui, 'networkType', {
    get: get_networkType
  });
  Object.defineProperty(package$commonui, 'networkEffectiveType', {
    get: get_networkEffectiveType
  });
  Object.defineProperty(package$commonui, 'isServiceWorkerSupported', {
    get: get_isServiceWorkerSupported
  });
  Object.defineProperty(package$commonui, 'webkitdirectorySupported', {
    get: get_webkitdirectorySupported
  });
  package$commonui.backButton_w2n6p5$ = backButton;
  package$commonui.backButton_10hldr$ = backButton_0;
  package$commonui.HasHash = HasHash;
  package$commonui.HasLinkage = HasLinkage;
  package$commonui.HasHashKillsRedisplay = HasHashKillsRedisplay;
  package$commonui.HasKillsLinkageRedisplay = HasKillsLinkageRedisplay;
  package$commonui.HasBind = HasBind;
  package$commonui.HasEdit = HasEdit;
  package$commonui.HasCreate = HasCreate;
  package$commonui.HasRedisplay = HasRedisplay;
  package$commonui.HasRedisplayv = HasRedisplayv;
  package$commonui.HasBackRedisplayv = HasBackRedisplayv;
  package$commonui.HasKillsRedisplay = HasKillsRedisplay;
  package$commonui.HasCsRedisplay = HasCsRedisplay;
  package$commonui.HasBindKills = HasBindKills;
  package$commonui.HasEditKills = HasEditKills;
  package$commonui.HasCreateKills = HasCreateKills;
  package$commonui.BindKillsDeps = BindKillsDeps;
  package$commonui.EditKillsDeps = EditKillsDeps;
  package$commonui.RedisplayDeps = RedisplayDeps;
  package$commonui.plus_4gjbuw$ = plus_0;
  package$commonui.plus_938iip$ = plus_1;
  package$commonui.HasBackEditKillsUix = HasBackEditKillsUix;
  package$commonui.HasBackCreateKillsUix = HasBackCreateKillsUix;
  package$commonui.HasBack = HasBack;
  package$commonui.HasEditBack = HasEditBack;
  package$commonui.HasUix = HasUix;
  package$commonui.HasBackUix = HasBackUix;
  package$commonui.HasKillsUix = HasKillsUix;
  package$commonui.HasBackKillsUix = HasBackKillsUix;
  package$commonui.HasEditKillsUix = HasEditKillsUix;
  package$commonui.HasCreateKillsUix = HasCreateKillsUix;
  var package$editing = package$commonui.editing || (package$commonui.editing = {});
  package$editing.Bindings = Bindings;
  package$editing.addDirty_6eronh$ = addDirty;
  package$editing.DefaultBindings = DefaultBindings;
  package$editing.Creating = Creating;
  package$editing.Editing = Editing;
  package$editing.DefaultEditing = DefaultEditing;
  package$editing.CreatingTriggers = CreatingTriggers;
  package$editing.EditingTriggers = EditingTriggers;
  package$editing.RxCreating = RxCreating;
  package$editing.onPersist_jf6dqp$ = onPersist;
  package$editing.onEdit_jf6dqp$ = onEdit;
  package$editing.RxEditing = RxEditing;
  package$editing.backOnDelete_e29scc$ = backOnDelete;
  package$editing.Binder = Binder;
  package$editing.validate_aw630o$ = validate;
  package$editing.raw_fr8638$ = raw;
  package$editing.parsed_q2cz2q$ = parsed;
  package$editing.required_dvq9sy$ = required;
  package$editing.bind_vxc1pk$ = bind;
  package$editing.bind_xr5ias$ = bind_0;
  package$editing.bind_ue5gqi$ = bind_1;
  package$editing.saveButton_vjdgji$ = saveButton;
  package$editing.persistButton_oa5hfw$ = persistButton;
  package$editing.saveDeleteButton_tpzicr$ = saveDeleteButton;
  package$editing.BackPersistDiscard = BackPersistDiscard;
  package$editing.BackSaveDiscard = BackSaveDiscard;
  var package$error = package$commonui.error || (package$commonui.error = {});
  package$error.ErrorTC = ErrorTC;
  var package$links = package$commonui.links || (package$commonui.links = {});
  package$links.Converter = Converter;
  Object.defineProperty(package$links, 'NullConverter', {
    get: function () {
      return NullConverter;
    }
  });
  Object.defineProperty(package$links, 'URIEncoder', {
    get: function () {
      return URIEncoder;
    }
  });
  Object.defineProperty(package$links, 'JsonConverter', {
    get: function () {
      return JsonConverter;
    }
  });
  Object.defineProperty(package$links, 'HashSerializer', {
    get: function () {
      return HashSerializer;
    }
  });
  package$links.plus_w4srwq$ = plus_2;
  package$links.jsonConverter_287e2$ = jsonConverter;
  package$links.toDynamic_9fvbtr$ = toDynamic;
  package$links.nullConverter_q3lmfv$ = nullConverter;
  Object.defineProperty(package$links, 'UnitConverter', {
    get: function () {
      return UnitConverter;
    }
  });
  Object.defineProperty(package$links, 'EmptyHashStruct', {
    get: function () {
      return EmptyHashStruct;
    }
  });
  package$links.split_d2950k$ = split_0;
  package$links.NamedHashStruct = NamedHashStruct;
  package$links.get_toHashStruct_kndiy1$ = get_toHashStruct;
  package$links.get_toNamed_d2950k$ = get_toNamed;
  package$links.get_toNamed_kgksb9$ = get_toNamed_0;
  package$links.SplitHash = SplitHash;
  package$links.singleHashTransformer_nqzx1s$ = singleHashTransformer;
  Object.defineProperty(package$links, 'StringHasher', {
    get: function () {
      return StringHasher;
    }
  });
  package$links.plus_y6mstq$ = plus_3;
  package$links.toHashItem_pdl1vz$ = toHashItem;
  package$links.toHashStruct_pdl1vz$ = toHashStruct;
  package$links.toHashStringItem_pdl1vz$ = toHashStringItem;
  package$links.toHashString_d2950k$ = toHashString;
  package$links.LinkId = LinkId;
  package$links.get_asChildLinkId_vvk9$ = get_asChildLinkId;
  package$links.TransformerOutput = TransformerOutput;
  package$links.Transformer = Transformer;
  package$links.constantTransformer_lk9rat$ = constantTransformer;
  Object.defineProperty(package$links, 'UnitTransformer', {
    get: function () {
      return UnitTransformer;
    }
  });
  package$links.unitTransformer_287e2$ = unitTransformer;
  Object.defineProperty(package$links, 'UnitHasher', {
    get: function () {
      return UnitHasher;
    }
  });
  package$links.linkIdTransformer_npmmfu$ = linkIdTransformer;
  package$links.parentLinkIdTransformer_h1lymv$ = parentLinkIdTransformer;
  package$links.childLinkIdTransformer_h1lymv$ = childLinkIdTransformer;
  package$links.pairTransformer_npmmfu$ = pairTransformer;
  package$links.listTransformer_bpfo32$ = listTransformer;
  package$links.BaseTC = BaseTC;
  package$links.LinksDeps = LinksDeps;
  Object.defineProperty(LinksFactory, 'Companion', {
    get: LinksFactory$Companion_getInstance
  });
  LinksFactory$Base.Param = LinksFactory$Base$Param;
  LinksFactory.Base = LinksFactory$Base;
  package$links.LinksFactory = LinksFactory;
  package$links.LinkForward = LinkForward;
  package$links.Linkage = Linkage;
  Object.defineProperty(package$links, 'HistoryBack', {
    get: function () {
      return HistoryBack;
    }
  });
  package$links.LinkApi = LinkApi;
  BaseLinkPoint.Param = BaseLinkPoint$Param;
  package$links.BaseLinkPoint = BaseLinkPoint;
  package$links.HomeLinkPoint = HomeLinkPoint;
  package$links.ChildLinkPoint = ChildLinkPoint;
  package$links.updateHistoryState_2hj429$ = updateHistoryState;
  package$links.LinkForwardImpl = LinkForwardImpl;
  package$links.SingleLinkPoint = SingleLinkPoint;
  package$links.MultiLinkPoint = MultiLinkPoint;
  package$links.PopStateInfo = PopStateInfo;
  Object.defineProperty(package$links, 'hashData', {
    get: get_hashData
  });
  package$links.popStateChannel_94o6bb$ = popStateChannel;
  package$links.LinkPoint = LinkPoint;
  package$links.LinksHandle = LinksHandle;
  package$links.runLinks_h2eir9$ = runLinks;
  var package$mediasession = _.mediasession || (_.mediasession = {});
  Object.defineProperty(package$mediasession, 'mediaSessionSupported', {
    get: get_mediaSessionSupported
  });
  package$mediasession.get_mediaSession_yi0el1$ = get_mediaSession;
  package$mediasession.get_none_z4vyl3$ = get_none;
  package$mediasession.get_paused_z4vyl3$ = get_paused;
  package$mediasession.get_playing_z4vyl3$ = get_playing;
  package$commonui.nodeList_5jbqdj$ = nodeList;
  package$commonui.currentOrAsk_iyaa7$ = currentOrAsk;
  package$commonui.isGrantedOrAsk_iyaa7$ = isGrantedOrAsk;
  package$commonui.isSupported_iyaa7$ = isSupported;
  package$commonui.notDenied_iyaa7$ = notDenied;
  package$commonui.notGranted_iyaa7$ = notGranted;
  package$commonui.shouldRequest_iyaa7$ = shouldRequest;
  var package$progress = package$commonui.progress || (package$commonui.progress = {});
  package$progress.Progress = Progress;
  package$progress.ui_juxths$ = ui;
  package$progress.progressUI_13ms4o$ = progressUI;
  package$progress.progressUI_94o6bb$ = progressUI_0;
  Object.defineProperty(package$commonui, 'globalStatus', {
    get: function () {
      return globalStatus;
    }
  });
  package$commonui.launchGlobal_g2bo5h$ = launchGlobal;
  package$commonui.launchReport_hilpzi$ = launchReport;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
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
  package$commonui.CsKills_init_evkg98$ = CsKills_init;
  package$commonui.CsKills_init_94o6bb$ = CsKills_init_0;
  package$commonui.CsKills = CsKills;
  package$commonui.ViewItem = ViewItem;
  package$commonui.HasView = HasView;
  package$commonui.SimpleViewItem = SimpleViewItem;
  package$commonui.HasKillsView = HasKillsView;
  package$commonui.HasKillKillsView = HasKillKillsView;
  package$commonui.CsKillsView = CsKillsView;
  package$commonui.MultiView = MultiView;
  package$commonui.runView_xcvfws$ = runView;
  package$commonui.HasRouting = HasRouting;
  package$commonui.HasKillsRouting = HasKillsRouting;
  package$commonui.HasForwardKillsRouting = HasForwardKillsRouting;
  package$commonui.HasCsForwardKillsRouting = HasCsForwardKillsRouting;
  package$commonui.HasForwardKillsRedisplayRouting = HasForwardKillsRedisplayRouting;
  package$commonui.RoutingHole = RoutingHole;
  package$commonui.routingHole_ueyw75$ = routingHole;
  package$commonui.routing_9f0yk2$ = routing;
  package$commonui.RoutingFactory = RoutingFactory;
  package$commonui.hourglass_add16b$ = hourglass;
  package$commonui.hourglass_60l9wo$ = hourglass_0;
  package$commonui.hourglass_mjoveg$ = hourglass_1;
  package$commonui.HasForward = HasForward;
  package$commonui.ForwardView = ForwardView;
  package$commonui.backOnRedisplay_hq6gga$ = backOnRedisplay;
  package$commonui.remAssign_5tr82p$ = remAssign_0;
  package$commonui.forwarding_34i6n3$ = forwarding;
  package$commonui.ForwardBase = ForwardBase;
  package$commonui.advance_i6d3n$ = advance;
  var package$widget = package$commonui.widget || (package$commonui.widget = {});
  package$widget.AbstractBadge = AbstractBadge;
  package$widget.Badge = Badge;
  package$widget.BadgeAnchor = BadgeAnchor;
  package$widget.BodyPath = BodyPath;
  package$widget.Body = Body;
  BodyTC.Slots = BodyTC$Slots;
  package$widget.BodyTC = BodyTC;
  Button.Slots = Button$Slots;
  package$widget.Button = Button;
  ButtonGroup.Slots = ButtonGroup$Slots;
  package$widget.ButtonGroup = ButtonGroup;
  package$widget.Text = Text;
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
  package$widget.visible_1sdldb$ = visible;
  package$widget.setTo_u8b85b$ = setTo;
  package$widget.Form = Form;
  FormGroup.Slots = FormGroup$Slots;
  package$widget.FormGroup = FormGroup;
  package$widget.Grid = Grid;
  package$widget.click_hwsysd$ = click;
  package$widget.click_gcoiex$ = click_0;
  package$widget.click_n7x5hz$ = click_1;
  package$widget.click_xgfbvs$ = click_2;
  package$widget.click_go019a$ = click_3;
  package$widget.Hourglass = Hourglass;
  $$importsForInline$$['appsimake-domx'] = $module$appsimake_domx;
  package$widget.Icon = Icon;
  package$widget.AbstractInput = AbstractInput;
  package$widget.bindValue_tl168a$ = bindValue;
  package$widget.Input = Input;
  InputGroup.Slots = InputGroup$Slots;
  package$widget.InputGroup = InputGroup;
  package$widget.ListGroup = ListGroup;
  package$widget.list_8ftsrk$ = list;
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
  NestedListButton.Slots = NestedListButton$Slots;
  package$widget.NestedListButton = NestedListButton;
  package$widget.rxProc_ll0nau$ = rxProc;
  package$widget.rxProcIf_acq064$ = rxProcIf;
  package$widget.AsyncHolder_init_mh5how$ = AsyncHolder_init;
  package$widget.AsyncHolder = AsyncHolder;
  package$widget.async_k2h1w8$ = async;
  package$widget.processedBy_bkei6v$ = processedBy;
  package$widget.processOnce_wfkocw$ = processOnce;
  package$widget.channel_x76zy$ = channel;
  package$widget.rx_2uuqvr$ = rx_1;
  package$widget.rx_2pjl1g$ = rx_2;
  Screen.Slots = Screen$Slots;
  Screen.ToastsSlots = Screen$ToastsSlots;
  package$widget.Screen = Screen;
  package$widget.ScrollPane = ScrollPane;
  package$widget.Select = Select;
  package$widget.bind_i54mxu$ = bind_2;
  package$widget.Stack = Stack;
  package$widget.Status = Status;
  package$widget.TextArea = TextArea;
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
  package$widget.clickActivate_na2fxt$ = clickActivate;
  package$widget.clickToggle_na2fxt$ = clickToggle;
  package$widget.HasInbox = HasInbox;
  package$widget.InboxWrap = InboxWrap;
  package$widget.Msg = Msg;
  package$widget.Envelope = Envelope;
  package$widget.wrap_hj1l2p$ = wrap;
  package$widget.invoke_hj1l2p$ = invoke_0;
  package$widget.get_slotholes_asww5s$ = get_slotholes;
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
  package$widget.visibility_bzmvhr$ = visibility;
  package$widget.rxClass_w1jfcb$ = rxClass_1;
  package$widget.rxClass_snt1rf$ = rxClass_2;
  KillsApiCommonui.prototype.rxClass_c5yvvx$ = KillsApiDomx.prototype.rxClass_c5yvvx$;
  KillsApiCommonui.prototype.rxClass_6sflyw$ = KillsApiDomx.prototype.rxClass_6sflyw$;
  KillsApiCommonui.prototype.get_oldKilled_vsdo34$ = KillsApiDomx.prototype.get_oldKilled_vsdo34$;
  KillsApiCommonui.prototype.get_oldKilledOpt_vsdo34$ = KillsApiDomx.prototype.get_oldKilledOpt_vsdo34$;
  KillsApiCommonui.prototype.rx_y6x17j$ = KillsApiDomx.prototype.rx_y6x17j$;
  KillsApiCommonui.prototype.rx_46ic4w$ = KillsApiDomx.prototype.rx_46ic4w$;
  KillsApiCommonui.prototype.rx_wgabca$ = KillsApiDomx.prototype.rx_wgabca$;
  KillsApiCommonui.prototype.rx_djv61p$ = KillsApiDomx.prototype.rx_djv61p$;
  KillsApiCommonui.prototype.containsRx_1w65cx$ = KillsApiDomx.prototype.containsRx_1w65cx$;
  KillsApiCommonui.prototype.feedTo_9o5f67$ = KillsApiDomx.prototype.feedTo_9o5f67$;
  KillsApiCommonui.prototype.filtered_tnde95$ = KillsApiDomx.prototype.filtered_tnde95$;
  KillsApiCommonui.prototype.forEach_xwzbbo$ = KillsApiDomx.prototype.forEach_xwzbbo$;
  KillsApiCommonui.prototype.forEach_35q7bt$ = KillsApiDomx.prototype.forEach_35q7bt$;
  KillsApiCommonui.prototype.forEachLater_xwzbbo$ = KillsApiDomx.prototype.forEachLater_xwzbbo$;
  KillsApiCommonui.prototype.incremented_eoy9qo$ = KillsApiDomx.prototype.incremented_eoy9qo$;
  KillsApiCommonui.prototype.linked_n1nom7$ = KillsApiDomx.prototype.linked_n1nom7$;
  KillsApiCommonui.prototype.listen_ubid8w$ = KillsApiDomx.prototype.listen_ubid8w$;
  KillsApiCommonui.prototype.map_jtxi0h$ = KillsApiDomx.prototype.map_jtxi0h$;
  KillsApiCommonui.prototype.mapLive_1mq1ue$ = KillsApiDomx.prototype.mapLive_1mq1ue$;
  KillsApiCommonui.prototype.on_2stdkb$ = KillsApiDomx.prototype.on_2stdkb$;
  KillsApiCommonui.prototype.on_hgi4ad$ = KillsApiDomx.prototype.on_hgi4ad$;
  KillsApiCommonui.prototype.onChange_oeam7t$ = KillsApiDomx.prototype.onChange_oeam7t$;
  KillsApiCommonui.prototype.onChange_rlu5c6$ = KillsApiDomx.prototype.onChange_rlu5c6$;
  KillsApiCommonui.prototype.onClick_pofl4w$ = KillsApiDomx.prototype.onClick_pofl4w$;
  KillsApiCommonui.prototype.onInput_clfw57$ = KillsApiDomx.prototype.onInput_clfw57$;
  KillsApiCommonui.prototype.plusAssign_ubid8w$ = KillsApiDomx.prototype.plusAssign_ubid8w$;
  KillsApiCommonui.prototype.process_7xi3v7$ = KillsApiDomx.prototype.process_7xi3v7$;
  KillsApiCommonui.prototype.remAssign_wgabca$ = KillsApiDomx.prototype.remAssign_wgabca$;
  KillsApiCommonui.prototype.remAssign_djv61p$ = KillsApiDomx.prototype.remAssign_djv61p$;
  KillsApiCommonui.prototype.remAssign_7fncnf$ = KillsApiDomx.prototype.remAssign_7fncnf$;
  KillsApiCommonui.prototype.toChannelLater_z5dyp2$ = KillsApiDomx.prototype.toChannelLater_z5dyp2$;
  KillsApiCommonui.prototype.toRxSet_jr4bl4$ = KillsApiDomx.prototype.toRxSet_jr4bl4$;
  KillsUixApi.prototype.visibility_12lt6u$ = KillsApiCommonui.prototype.visibility_12lt6u$;
  KillsUixApi.prototype.enabled_hlnvpg$ = KillsApiCommonui.prototype.enabled_hlnvpg$;
  KillsUixApi.prototype.rxClass_9npl0m$ = KillsApiCommonui.prototype.rxClass_9npl0m$;
  KillsUixApi.prototype.rxClass_62ldac$ = KillsApiCommonui.prototype.rxClass_62ldac$;
  KillsUixApi.prototype.rxClass_c5yvvx$ = KillsApiCommonui.prototype.rxClass_c5yvvx$;
  KillsUixApi.prototype.rxClass_6sflyw$ = KillsApiCommonui.prototype.rxClass_6sflyw$;
  KillsUixApi.prototype.visible_od9jl4$ = KillsApiCommonui.prototype.visible_od9jl4$;
  KillsUixApi.prototype.bind_zfaq6f$ = KillsApiCommonui.prototype.bind_zfaq6f$;
  KillsUixApi.prototype.bindValue_xy1r9h$ = KillsApiCommonui.prototype.bindValue_xy1r9h$;
  KillsUixApi.prototype.runView_fpu3uh$ = KillsApiCommonui.prototype.runView_fpu3uh$;
  KillsUixApi.prototype.get_routing_lqv1tx$ = KillsApiCommonui.prototype.get_routing_lqv1tx$;
  KillsUixApi.prototype.addDirty_3529di$ = KillsApiCommonui.prototype.addDirty_3529di$;
  KillsUixApi.prototype.keepScreenAwake_ipfk82$ = KillsApiCommonui.prototype.keepScreenAwake_ipfk82$;
  KillsUixApi.prototype.get_oldKilled_vsdo34$ = KillsApiCommonui.prototype.get_oldKilled_vsdo34$;
  KillsUixApi.prototype.get_oldKilledOpt_vsdo34$ = KillsApiCommonui.prototype.get_oldKilledOpt_vsdo34$;
  KillsUixApi.prototype.rx_y6x17j$ = KillsApiCommonui.prototype.rx_y6x17j$;
  KillsUixApi.prototype.rx_46ic4w$ = KillsApiCommonui.prototype.rx_46ic4w$;
  KillsUixApi.prototype.rx_wgabca$ = KillsApiCommonui.prototype.rx_wgabca$;
  KillsUixApi.prototype.rx_djv61p$ = KillsApiCommonui.prototype.rx_djv61p$;
  KillsUixApi.prototype.containsRx_1w65cx$ = KillsApiCommonui.prototype.containsRx_1w65cx$;
  KillsUixApi.prototype.feedTo_9o5f67$ = KillsApiCommonui.prototype.feedTo_9o5f67$;
  KillsUixApi.prototype.filtered_tnde95$ = KillsApiCommonui.prototype.filtered_tnde95$;
  KillsUixApi.prototype.forEach_xwzbbo$ = KillsApiCommonui.prototype.forEach_xwzbbo$;
  KillsUixApi.prototype.forEach_35q7bt$ = KillsApiCommonui.prototype.forEach_35q7bt$;
  KillsUixApi.prototype.forEachLater_xwzbbo$ = KillsApiCommonui.prototype.forEachLater_xwzbbo$;
  KillsUixApi.prototype.incremented_eoy9qo$ = KillsApiCommonui.prototype.incremented_eoy9qo$;
  KillsUixApi.prototype.linked_n1nom7$ = KillsApiCommonui.prototype.linked_n1nom7$;
  KillsUixApi.prototype.listen_ubid8w$ = KillsApiCommonui.prototype.listen_ubid8w$;
  KillsUixApi.prototype.map_jtxi0h$ = KillsApiCommonui.prototype.map_jtxi0h$;
  KillsUixApi.prototype.mapLive_1mq1ue$ = KillsApiCommonui.prototype.mapLive_1mq1ue$;
  KillsUixApi.prototype.on_2stdkb$ = KillsApiCommonui.prototype.on_2stdkb$;
  KillsUixApi.prototype.on_hgi4ad$ = KillsApiCommonui.prototype.on_hgi4ad$;
  KillsUixApi.prototype.onChange_oeam7t$ = KillsApiCommonui.prototype.onChange_oeam7t$;
  KillsUixApi.prototype.onChange_rlu5c6$ = KillsApiCommonui.prototype.onChange_rlu5c6$;
  KillsUixApi.prototype.onClick_pofl4w$ = KillsApiCommonui.prototype.onClick_pofl4w$;
  KillsUixApi.prototype.onInput_clfw57$ = KillsApiCommonui.prototype.onInput_clfw57$;
  KillsUixApi.prototype.plusAssign_ubid8w$ = KillsApiCommonui.prototype.plusAssign_ubid8w$;
  KillsUixApi.prototype.process_7xi3v7$ = KillsApiCommonui.prototype.process_7xi3v7$;
  KillsUixApi.prototype.remAssign_wgabca$ = KillsApiCommonui.prototype.remAssign_wgabca$;
  KillsUixApi.prototype.remAssign_djv61p$ = KillsApiCommonui.prototype.remAssign_djv61p$;
  KillsUixApi.prototype.remAssign_7fncnf$ = KillsApiCommonui.prototype.remAssign_7fncnf$;
  KillsUixApi.prototype.toChannelLater_z5dyp2$ = KillsApiCommonui.prototype.toChannelLater_z5dyp2$;
  KillsUixApi.prototype.toRxSet_jr4bl4$ = KillsApiCommonui.prototype.toRxSet_jr4bl4$;
  BackKillsUixApi.prototype.backOnDelete_287e2$ = BackApi.prototype.backOnDelete_287e2$;
  BackKillsUixApi.prototype.click_ts68bh$ = KillsUixApi.prototype.click_ts68bh$;
  BackKillsUixApi.prototype.click_9375ex$ = KillsUixApi.prototype.click_9375ex$;
  BackKillsUixApi.prototype.click_4eku4n$ = KillsUixApi.prototype.click_4eku4n$;
  BackKillsUixApi.prototype.click_512jbc$ = KillsUixApi.prototype.click_512jbc$;
  BackKillsUixApi.prototype.click_3zaxtq$ = KillsUixApi.prototype.click_3zaxtq$;
  BackKillsUixApi.prototype.signOut_tstgz9$ = KillsUixApi.prototype.signOut_tstgz9$;
  BackKillsUixApi.prototype.get_clickActivate_tvm2vp$ = KillsUixApi.prototype.get_clickActivate_tvm2vp$;
  BackKillsUixApi.prototype.get_clickToggle_tvm2vp$ = KillsUixApi.prototype.get_clickToggle_tvm2vp$;
  BackKillsUixApi.prototype.visibility_12lt6u$ = KillsUixApi.prototype.visibility_12lt6u$;
  BackKillsUixApi.prototype.enabled_hlnvpg$ = KillsUixApi.prototype.enabled_hlnvpg$;
  BackKillsUixApi.prototype.rxClass_9npl0m$ = KillsUixApi.prototype.rxClass_9npl0m$;
  BackKillsUixApi.prototype.rxClass_62ldac$ = KillsUixApi.prototype.rxClass_62ldac$;
  BackKillsUixApi.prototype.rxClass_c5yvvx$ = KillsUixApi.prototype.rxClass_c5yvvx$;
  BackKillsUixApi.prototype.rxClass_6sflyw$ = KillsUixApi.prototype.rxClass_6sflyw$;
  BackKillsUixApi.prototype.visible_od9jl4$ = KillsUixApi.prototype.visible_od9jl4$;
  BackKillsUixApi.prototype.bind_zfaq6f$ = KillsUixApi.prototype.bind_zfaq6f$;
  BackKillsUixApi.prototype.bindValue_xy1r9h$ = KillsUixApi.prototype.bindValue_xy1r9h$;
  BackKillsUixApi.prototype.runView_fpu3uh$ = KillsUixApi.prototype.runView_fpu3uh$;
  BackKillsUixApi.prototype.get_routing_lqv1tx$ = KillsUixApi.prototype.get_routing_lqv1tx$;
  BackKillsUixApi.prototype.addDirty_3529di$ = KillsUixApi.prototype.addDirty_3529di$;
  BackKillsUixApi.prototype.keepScreenAwake_ipfk82$ = KillsUixApi.prototype.keepScreenAwake_ipfk82$;
  BackKillsUixApi.prototype.get_oldKilled_vsdo34$ = KillsUixApi.prototype.get_oldKilled_vsdo34$;
  BackKillsUixApi.prototype.get_oldKilledOpt_vsdo34$ = KillsUixApi.prototype.get_oldKilledOpt_vsdo34$;
  BackKillsUixApi.prototype.rx_y6x17j$ = KillsUixApi.prototype.rx_y6x17j$;
  BackKillsUixApi.prototype.rx_46ic4w$ = KillsUixApi.prototype.rx_46ic4w$;
  BackKillsUixApi.prototype.rx_wgabca$ = KillsUixApi.prototype.rx_wgabca$;
  BackKillsUixApi.prototype.rx_djv61p$ = KillsUixApi.prototype.rx_djv61p$;
  BackKillsUixApi.prototype.containsRx_1w65cx$ = KillsUixApi.prototype.containsRx_1w65cx$;
  BackKillsUixApi.prototype.feedTo_9o5f67$ = KillsUixApi.prototype.feedTo_9o5f67$;
  BackKillsUixApi.prototype.filtered_tnde95$ = KillsUixApi.prototype.filtered_tnde95$;
  BackKillsUixApi.prototype.forEach_xwzbbo$ = KillsUixApi.prototype.forEach_xwzbbo$;
  BackKillsUixApi.prototype.forEach_35q7bt$ = KillsUixApi.prototype.forEach_35q7bt$;
  BackKillsUixApi.prototype.forEachLater_xwzbbo$ = KillsUixApi.prototype.forEachLater_xwzbbo$;
  BackKillsUixApi.prototype.incremented_eoy9qo$ = KillsUixApi.prototype.incremented_eoy9qo$;
  BackKillsUixApi.prototype.linked_n1nom7$ = KillsUixApi.prototype.linked_n1nom7$;
  BackKillsUixApi.prototype.listen_ubid8w$ = KillsUixApi.prototype.listen_ubid8w$;
  BackKillsUixApi.prototype.map_jtxi0h$ = KillsUixApi.prototype.map_jtxi0h$;
  BackKillsUixApi.prototype.mapLive_1mq1ue$ = KillsUixApi.prototype.mapLive_1mq1ue$;
  BackKillsUixApi.prototype.on_2stdkb$ = KillsUixApi.prototype.on_2stdkb$;
  BackKillsUixApi.prototype.on_hgi4ad$ = KillsUixApi.prototype.on_hgi4ad$;
  BackKillsUixApi.prototype.onChange_oeam7t$ = KillsUixApi.prototype.onChange_oeam7t$;
  BackKillsUixApi.prototype.onChange_rlu5c6$ = KillsUixApi.prototype.onChange_rlu5c6$;
  BackKillsUixApi.prototype.onClick_pofl4w$ = KillsUixApi.prototype.onClick_pofl4w$;
  BackKillsUixApi.prototype.onInput_clfw57$ = KillsUixApi.prototype.onInput_clfw57$;
  BackKillsUixApi.prototype.plusAssign_ubid8w$ = KillsUixApi.prototype.plusAssign_ubid8w$;
  BackKillsUixApi.prototype.process_7xi3v7$ = KillsUixApi.prototype.process_7xi3v7$;
  BackKillsUixApi.prototype.remAssign_wgabca$ = KillsUixApi.prototype.remAssign_wgabca$;
  BackKillsUixApi.prototype.remAssign_djv61p$ = KillsUixApi.prototype.remAssign_djv61p$;
  BackKillsUixApi.prototype.remAssign_7fncnf$ = KillsUixApi.prototype.remAssign_7fncnf$;
  BackKillsUixApi.prototype.toChannelLater_z5dyp2$ = KillsUixApi.prototype.toChannelLater_z5dyp2$;
  BackKillsUixApi.prototype.toRxSet_jr4bl4$ = KillsUixApi.prototype.toRxSet_jr4bl4$;
  CsApiCommonui.prototype.toRx_on0lyu$ = CsApi.prototype.toRx_on0lyu$;
  CsKillsApiCommonui.prototype.list_u1uvxv$ = CsApiCommonui.prototype.list_u1uvxv$;
  CsKillsApiCommonui.prototype.list_qlxt6c$ = CsApiCommonui.prototype.list_qlxt6c$;
  CsKillsApiCommonui.prototype.toRx_on0lyu$ = CsApiCommonui.prototype.toRx_on0lyu$;
  CsKillsApiCommonui.prototype.visibility_12lt6u$ = KillsApiCommonui.prototype.visibility_12lt6u$;
  CsKillsApiCommonui.prototype.enabled_hlnvpg$ = KillsApiCommonui.prototype.enabled_hlnvpg$;
  CsKillsApiCommonui.prototype.rxClass_9npl0m$ = KillsApiCommonui.prototype.rxClass_9npl0m$;
  CsKillsApiCommonui.prototype.rxClass_62ldac$ = KillsApiCommonui.prototype.rxClass_62ldac$;
  CsKillsApiCommonui.prototype.rxClass_c5yvvx$ = KillsApiCommonui.prototype.rxClass_c5yvvx$;
  CsKillsApiCommonui.prototype.rxClass_6sflyw$ = KillsApiCommonui.prototype.rxClass_6sflyw$;
  CsKillsApiCommonui.prototype.visible_od9jl4$ = KillsApiCommonui.prototype.visible_od9jl4$;
  CsKillsApiCommonui.prototype.bind_zfaq6f$ = KillsApiCommonui.prototype.bind_zfaq6f$;
  CsKillsApiCommonui.prototype.bindValue_xy1r9h$ = KillsApiCommonui.prototype.bindValue_xy1r9h$;
  CsKillsApiCommonui.prototype.runView_fpu3uh$ = KillsApiCommonui.prototype.runView_fpu3uh$;
  CsKillsApiCommonui.prototype.get_routing_lqv1tx$ = KillsApiCommonui.prototype.get_routing_lqv1tx$;
  CsKillsApiCommonui.prototype.addDirty_3529di$ = KillsApiCommonui.prototype.addDirty_3529di$;
  CsKillsApiCommonui.prototype.keepScreenAwake_ipfk82$ = KillsApiCommonui.prototype.keepScreenAwake_ipfk82$;
  CsKillsApiCommonui.prototype.get_oldKilled_vsdo34$ = KillsApiCommonui.prototype.get_oldKilled_vsdo34$;
  CsKillsApiCommonui.prototype.get_oldKilledOpt_vsdo34$ = KillsApiCommonui.prototype.get_oldKilledOpt_vsdo34$;
  CsKillsApiCommonui.prototype.rx_y6x17j$ = KillsApiCommonui.prototype.rx_y6x17j$;
  CsKillsApiCommonui.prototype.rx_46ic4w$ = KillsApiCommonui.prototype.rx_46ic4w$;
  CsKillsApiCommonui.prototype.rx_wgabca$ = KillsApiCommonui.prototype.rx_wgabca$;
  CsKillsApiCommonui.prototype.rx_djv61p$ = KillsApiCommonui.prototype.rx_djv61p$;
  CsKillsApiCommonui.prototype.containsRx_1w65cx$ = KillsApiCommonui.prototype.containsRx_1w65cx$;
  CsKillsApiCommonui.prototype.feedTo_9o5f67$ = KillsApiCommonui.prototype.feedTo_9o5f67$;
  CsKillsApiCommonui.prototype.filtered_tnde95$ = KillsApiCommonui.prototype.filtered_tnde95$;
  CsKillsApiCommonui.prototype.forEach_xwzbbo$ = KillsApiCommonui.prototype.forEach_xwzbbo$;
  CsKillsApiCommonui.prototype.forEach_35q7bt$ = KillsApiCommonui.prototype.forEach_35q7bt$;
  CsKillsApiCommonui.prototype.forEachLater_xwzbbo$ = KillsApiCommonui.prototype.forEachLater_xwzbbo$;
  CsKillsApiCommonui.prototype.incremented_eoy9qo$ = KillsApiCommonui.prototype.incremented_eoy9qo$;
  CsKillsApiCommonui.prototype.linked_n1nom7$ = KillsApiCommonui.prototype.linked_n1nom7$;
  CsKillsApiCommonui.prototype.listen_ubid8w$ = KillsApiCommonui.prototype.listen_ubid8w$;
  CsKillsApiCommonui.prototype.map_jtxi0h$ = KillsApiCommonui.prototype.map_jtxi0h$;
  CsKillsApiCommonui.prototype.mapLive_1mq1ue$ = KillsApiCommonui.prototype.mapLive_1mq1ue$;
  CsKillsApiCommonui.prototype.on_2stdkb$ = KillsApiCommonui.prototype.on_2stdkb$;
  CsKillsApiCommonui.prototype.on_hgi4ad$ = KillsApiCommonui.prototype.on_hgi4ad$;
  CsKillsApiCommonui.prototype.onChange_oeam7t$ = KillsApiCommonui.prototype.onChange_oeam7t$;
  CsKillsApiCommonui.prototype.onChange_rlu5c6$ = KillsApiCommonui.prototype.onChange_rlu5c6$;
  CsKillsApiCommonui.prototype.onClick_pofl4w$ = KillsApiCommonui.prototype.onClick_pofl4w$;
  CsKillsApiCommonui.prototype.onInput_clfw57$ = KillsApiCommonui.prototype.onInput_clfw57$;
  CsKillsApiCommonui.prototype.plusAssign_ubid8w$ = KillsApiCommonui.prototype.plusAssign_ubid8w$;
  CsKillsApiCommonui.prototype.process_7xi3v7$ = KillsApiCommonui.prototype.process_7xi3v7$;
  CsKillsApiCommonui.prototype.process_y3juat$ = CsKillsApiCommon.prototype.process_y3juat$;
  CsKillsApiCommonui.prototype.remAssign_wgabca$ = KillsApiCommonui.prototype.remAssign_wgabca$;
  CsKillsApiCommonui.prototype.remAssign_djv61p$ = KillsApiCommonui.prototype.remAssign_djv61p$;
  CsKillsApiCommonui.prototype.remAssign_7fncnf$ = KillsApiCommonui.prototype.remAssign_7fncnf$;
  CsKillsApiCommonui.prototype.toChannelLater_z5dyp2$ = KillsApiCommonui.prototype.toChannelLater_z5dyp2$;
  CsKillsApiCommonui.prototype.toRxSet_jr4bl4$ = KillsApiCommonui.prototype.toRxSet_jr4bl4$;
  CsKillsApiCommonui.prototype.get_ids_qko62t$ = CsKillsApiCommon.prototype.get_ids_qko62t$;
  CsKillsApiCommonui.prototype.events_9k4h2$ = CsKillsApiCommon.prototype.events_9k4h2$;
  CsKillsApiCommonui.prototype.filter_hu0si9$ = CsKillsApiCommon.prototype.filter_hu0si9$;
  BindKillsApi.prototype.bind_zfaq6f$ = KillsApiCommonui.prototype.bind_zfaq6f$;
  BindKillsApi.prototype.visibility_12lt6u$ = KillsApiCommonui.prototype.visibility_12lt6u$;
  BindKillsApi.prototype.enabled_hlnvpg$ = KillsApiCommonui.prototype.enabled_hlnvpg$;
  BindKillsApi.prototype.rxClass_9npl0m$ = KillsApiCommonui.prototype.rxClass_9npl0m$;
  BindKillsApi.prototype.rxClass_62ldac$ = KillsApiCommonui.prototype.rxClass_62ldac$;
  BindKillsApi.prototype.rxClass_c5yvvx$ = KillsApiCommonui.prototype.rxClass_c5yvvx$;
  BindKillsApi.prototype.rxClass_6sflyw$ = KillsApiCommonui.prototype.rxClass_6sflyw$;
  BindKillsApi.prototype.visible_od9jl4$ = KillsApiCommonui.prototype.visible_od9jl4$;
  BindKillsApi.prototype.bindValue_xy1r9h$ = KillsApiCommonui.prototype.bindValue_xy1r9h$;
  BindKillsApi.prototype.runView_fpu3uh$ = KillsApiCommonui.prototype.runView_fpu3uh$;
  BindKillsApi.prototype.get_routing_lqv1tx$ = KillsApiCommonui.prototype.get_routing_lqv1tx$;
  BindKillsApi.prototype.addDirty_3529di$ = KillsApiCommonui.prototype.addDirty_3529di$;
  BindKillsApi.prototype.keepScreenAwake_ipfk82$ = KillsApiCommonui.prototype.keepScreenAwake_ipfk82$;
  BindKillsApi.prototype.get_oldKilled_vsdo34$ = KillsApiCommonui.prototype.get_oldKilled_vsdo34$;
  BindKillsApi.prototype.get_oldKilledOpt_vsdo34$ = KillsApiCommonui.prototype.get_oldKilledOpt_vsdo34$;
  BindKillsApi.prototype.rx_y6x17j$ = KillsApiCommonui.prototype.rx_y6x17j$;
  BindKillsApi.prototype.rx_46ic4w$ = KillsApiCommonui.prototype.rx_46ic4w$;
  BindKillsApi.prototype.rx_wgabca$ = KillsApiCommonui.prototype.rx_wgabca$;
  BindKillsApi.prototype.rx_djv61p$ = KillsApiCommonui.prototype.rx_djv61p$;
  BindKillsApi.prototype.containsRx_1w65cx$ = KillsApiCommonui.prototype.containsRx_1w65cx$;
  BindKillsApi.prototype.feedTo_9o5f67$ = KillsApiCommonui.prototype.feedTo_9o5f67$;
  BindKillsApi.prototype.filtered_tnde95$ = KillsApiCommonui.prototype.filtered_tnde95$;
  BindKillsApi.prototype.forEach_xwzbbo$ = KillsApiCommonui.prototype.forEach_xwzbbo$;
  BindKillsApi.prototype.forEach_35q7bt$ = KillsApiCommonui.prototype.forEach_35q7bt$;
  BindKillsApi.prototype.forEachLater_xwzbbo$ = KillsApiCommonui.prototype.forEachLater_xwzbbo$;
  BindKillsApi.prototype.incremented_eoy9qo$ = KillsApiCommonui.prototype.incremented_eoy9qo$;
  BindKillsApi.prototype.linked_n1nom7$ = KillsApiCommonui.prototype.linked_n1nom7$;
  BindKillsApi.prototype.listen_ubid8w$ = KillsApiCommonui.prototype.listen_ubid8w$;
  BindKillsApi.prototype.map_jtxi0h$ = KillsApiCommonui.prototype.map_jtxi0h$;
  BindKillsApi.prototype.mapLive_1mq1ue$ = KillsApiCommonui.prototype.mapLive_1mq1ue$;
  BindKillsApi.prototype.on_2stdkb$ = KillsApiCommonui.prototype.on_2stdkb$;
  BindKillsApi.prototype.on_hgi4ad$ = KillsApiCommonui.prototype.on_hgi4ad$;
  BindKillsApi.prototype.onChange_oeam7t$ = KillsApiCommonui.prototype.onChange_oeam7t$;
  BindKillsApi.prototype.onChange_rlu5c6$ = KillsApiCommonui.prototype.onChange_rlu5c6$;
  BindKillsApi.prototype.onClick_pofl4w$ = KillsApiCommonui.prototype.onClick_pofl4w$;
  BindKillsApi.prototype.onInput_clfw57$ = KillsApiCommonui.prototype.onInput_clfw57$;
  BindKillsApi.prototype.plusAssign_ubid8w$ = KillsApiCommonui.prototype.plusAssign_ubid8w$;
  BindKillsApi.prototype.process_7xi3v7$ = KillsApiCommonui.prototype.process_7xi3v7$;
  BindKillsApi.prototype.remAssign_wgabca$ = KillsApiCommonui.prototype.remAssign_wgabca$;
  BindKillsApi.prototype.remAssign_djv61p$ = KillsApiCommonui.prototype.remAssign_djv61p$;
  BindKillsApi.prototype.remAssign_7fncnf$ = KillsApiCommonui.prototype.remAssign_7fncnf$;
  BindKillsApi.prototype.toChannelLater_z5dyp2$ = KillsApiCommonui.prototype.toChannelLater_z5dyp2$;
  BindKillsApi.prototype.toRxSet_jr4bl4$ = KillsApiCommonui.prototype.toRxSet_jr4bl4$;
  Object.defineProperty(HasEditKills.prototype, 'bindings', Object.getOwnPropertyDescriptor(HasEdit.prototype, 'bindings'));
  EditKillsApi.prototype.bind_8y93tj$ = BindKillsApi.prototype.bind_8y93tj$;
  EditKillsApi.prototype.bind_igb9j9$ = BindKillsApi.prototype.bind_igb9j9$;
  EditKillsApi.prototype.bind_4dd4yj$ = BindKillsApi.prototype.bind_4dd4yj$;
  EditKillsApi.prototype.bind_zfaq6f$ = BindKillsApi.prototype.bind_zfaq6f$;
  Object.defineProperty(EditKillsApi.prototype, 'bindings', Object.getOwnPropertyDescriptor(HasEditKills.prototype, 'bindings'));
  EditKillsApi.prototype.visibility_12lt6u$ = BindKillsApi.prototype.visibility_12lt6u$;
  EditKillsApi.prototype.enabled_hlnvpg$ = BindKillsApi.prototype.enabled_hlnvpg$;
  EditKillsApi.prototype.rxClass_9npl0m$ = BindKillsApi.prototype.rxClass_9npl0m$;
  EditKillsApi.prototype.rxClass_62ldac$ = BindKillsApi.prototype.rxClass_62ldac$;
  EditKillsApi.prototype.rxClass_c5yvvx$ = BindKillsApi.prototype.rxClass_c5yvvx$;
  EditKillsApi.prototype.rxClass_6sflyw$ = BindKillsApi.prototype.rxClass_6sflyw$;
  EditKillsApi.prototype.visible_od9jl4$ = BindKillsApi.prototype.visible_od9jl4$;
  EditKillsApi.prototype.bindValue_xy1r9h$ = BindKillsApi.prototype.bindValue_xy1r9h$;
  EditKillsApi.prototype.runView_fpu3uh$ = BindKillsApi.prototype.runView_fpu3uh$;
  EditKillsApi.prototype.get_routing_lqv1tx$ = BindKillsApi.prototype.get_routing_lqv1tx$;
  EditKillsApi.prototype.addDirty_3529di$ = BindKillsApi.prototype.addDirty_3529di$;
  EditKillsApi.prototype.keepScreenAwake_ipfk82$ = BindKillsApi.prototype.keepScreenAwake_ipfk82$;
  EditKillsApi.prototype.get_oldKilled_vsdo34$ = BindKillsApi.prototype.get_oldKilled_vsdo34$;
  EditKillsApi.prototype.get_oldKilledOpt_vsdo34$ = BindKillsApi.prototype.get_oldKilledOpt_vsdo34$;
  EditKillsApi.prototype.rx_y6x17j$ = BindKillsApi.prototype.rx_y6x17j$;
  EditKillsApi.prototype.rx_46ic4w$ = BindKillsApi.prototype.rx_46ic4w$;
  EditKillsApi.prototype.rx_wgabca$ = BindKillsApi.prototype.rx_wgabca$;
  EditKillsApi.prototype.rx_djv61p$ = BindKillsApi.prototype.rx_djv61p$;
  EditKillsApi.prototype.containsRx_1w65cx$ = BindKillsApi.prototype.containsRx_1w65cx$;
  EditKillsApi.prototype.feedTo_9o5f67$ = BindKillsApi.prototype.feedTo_9o5f67$;
  EditKillsApi.prototype.filtered_tnde95$ = BindKillsApi.prototype.filtered_tnde95$;
  EditKillsApi.prototype.forEach_xwzbbo$ = BindKillsApi.prototype.forEach_xwzbbo$;
  EditKillsApi.prototype.forEach_35q7bt$ = BindKillsApi.prototype.forEach_35q7bt$;
  EditKillsApi.prototype.forEachLater_xwzbbo$ = BindKillsApi.prototype.forEachLater_xwzbbo$;
  EditKillsApi.prototype.incremented_eoy9qo$ = BindKillsApi.prototype.incremented_eoy9qo$;
  EditKillsApi.prototype.linked_n1nom7$ = BindKillsApi.prototype.linked_n1nom7$;
  EditKillsApi.prototype.listen_ubid8w$ = BindKillsApi.prototype.listen_ubid8w$;
  EditKillsApi.prototype.map_jtxi0h$ = BindKillsApi.prototype.map_jtxi0h$;
  EditKillsApi.prototype.mapLive_1mq1ue$ = BindKillsApi.prototype.mapLive_1mq1ue$;
  EditKillsApi.prototype.on_2stdkb$ = BindKillsApi.prototype.on_2stdkb$;
  EditKillsApi.prototype.on_hgi4ad$ = BindKillsApi.prototype.on_hgi4ad$;
  EditKillsApi.prototype.onChange_oeam7t$ = BindKillsApi.prototype.onChange_oeam7t$;
  EditKillsApi.prototype.onChange_rlu5c6$ = BindKillsApi.prototype.onChange_rlu5c6$;
  EditKillsApi.prototype.onClick_pofl4w$ = BindKillsApi.prototype.onClick_pofl4w$;
  EditKillsApi.prototype.onInput_clfw57$ = BindKillsApi.prototype.onInput_clfw57$;
  EditKillsApi.prototype.plusAssign_ubid8w$ = BindKillsApi.prototype.plusAssign_ubid8w$;
  EditKillsApi.prototype.process_7xi3v7$ = BindKillsApi.prototype.process_7xi3v7$;
  EditKillsApi.prototype.remAssign_wgabca$ = BindKillsApi.prototype.remAssign_wgabca$;
  EditKillsApi.prototype.remAssign_djv61p$ = BindKillsApi.prototype.remAssign_djv61p$;
  EditKillsApi.prototype.remAssign_7fncnf$ = BindKillsApi.prototype.remAssign_7fncnf$;
  EditKillsApi.prototype.toChannelLater_z5dyp2$ = BindKillsApi.prototype.toChannelLater_z5dyp2$;
  EditKillsApi.prototype.toRxSet_jr4bl4$ = BindKillsApi.prototype.toRxSet_jr4bl4$;
  Object.defineProperty(HasCreateKills.prototype, 'bindings', Object.getOwnPropertyDescriptor(HasCreate.prototype, 'bindings'));
  CreateKillsApi.prototype.bind_8y93tj$ = BindKillsApi.prototype.bind_8y93tj$;
  CreateKillsApi.prototype.bind_igb9j9$ = BindKillsApi.prototype.bind_igb9j9$;
  CreateKillsApi.prototype.bind_4dd4yj$ = BindKillsApi.prototype.bind_4dd4yj$;
  CreateKillsApi.prototype.bind_zfaq6f$ = BindKillsApi.prototype.bind_zfaq6f$;
  Object.defineProperty(CreateKillsApi.prototype, 'bindings', Object.getOwnPropertyDescriptor(HasCreateKills.prototype, 'bindings'));
  CreateKillsApi.prototype.visibility_12lt6u$ = BindKillsApi.prototype.visibility_12lt6u$;
  CreateKillsApi.prototype.enabled_hlnvpg$ = BindKillsApi.prototype.enabled_hlnvpg$;
  CreateKillsApi.prototype.rxClass_9npl0m$ = BindKillsApi.prototype.rxClass_9npl0m$;
  CreateKillsApi.prototype.rxClass_62ldac$ = BindKillsApi.prototype.rxClass_62ldac$;
  CreateKillsApi.prototype.rxClass_c5yvvx$ = BindKillsApi.prototype.rxClass_c5yvvx$;
  CreateKillsApi.prototype.rxClass_6sflyw$ = BindKillsApi.prototype.rxClass_6sflyw$;
  CreateKillsApi.prototype.visible_od9jl4$ = BindKillsApi.prototype.visible_od9jl4$;
  CreateKillsApi.prototype.bindValue_xy1r9h$ = BindKillsApi.prototype.bindValue_xy1r9h$;
  CreateKillsApi.prototype.runView_fpu3uh$ = BindKillsApi.prototype.runView_fpu3uh$;
  CreateKillsApi.prototype.get_routing_lqv1tx$ = BindKillsApi.prototype.get_routing_lqv1tx$;
  CreateKillsApi.prototype.addDirty_3529di$ = BindKillsApi.prototype.addDirty_3529di$;
  CreateKillsApi.prototype.keepScreenAwake_ipfk82$ = BindKillsApi.prototype.keepScreenAwake_ipfk82$;
  CreateKillsApi.prototype.get_oldKilled_vsdo34$ = BindKillsApi.prototype.get_oldKilled_vsdo34$;
  CreateKillsApi.prototype.get_oldKilledOpt_vsdo34$ = BindKillsApi.prototype.get_oldKilledOpt_vsdo34$;
  CreateKillsApi.prototype.rx_y6x17j$ = BindKillsApi.prototype.rx_y6x17j$;
  CreateKillsApi.prototype.rx_46ic4w$ = BindKillsApi.prototype.rx_46ic4w$;
  CreateKillsApi.prototype.rx_wgabca$ = BindKillsApi.prototype.rx_wgabca$;
  CreateKillsApi.prototype.rx_djv61p$ = BindKillsApi.prototype.rx_djv61p$;
  CreateKillsApi.prototype.containsRx_1w65cx$ = BindKillsApi.prototype.containsRx_1w65cx$;
  CreateKillsApi.prototype.feedTo_9o5f67$ = BindKillsApi.prototype.feedTo_9o5f67$;
  CreateKillsApi.prototype.filtered_tnde95$ = BindKillsApi.prototype.filtered_tnde95$;
  CreateKillsApi.prototype.forEach_xwzbbo$ = BindKillsApi.prototype.forEach_xwzbbo$;
  CreateKillsApi.prototype.forEach_35q7bt$ = BindKillsApi.prototype.forEach_35q7bt$;
  CreateKillsApi.prototype.forEachLater_xwzbbo$ = BindKillsApi.prototype.forEachLater_xwzbbo$;
  CreateKillsApi.prototype.incremented_eoy9qo$ = BindKillsApi.prototype.incremented_eoy9qo$;
  CreateKillsApi.prototype.linked_n1nom7$ = BindKillsApi.prototype.linked_n1nom7$;
  CreateKillsApi.prototype.listen_ubid8w$ = BindKillsApi.prototype.listen_ubid8w$;
  CreateKillsApi.prototype.map_jtxi0h$ = BindKillsApi.prototype.map_jtxi0h$;
  CreateKillsApi.prototype.mapLive_1mq1ue$ = BindKillsApi.prototype.mapLive_1mq1ue$;
  CreateKillsApi.prototype.on_2stdkb$ = BindKillsApi.prototype.on_2stdkb$;
  CreateKillsApi.prototype.on_hgi4ad$ = BindKillsApi.prototype.on_hgi4ad$;
  CreateKillsApi.prototype.onChange_oeam7t$ = BindKillsApi.prototype.onChange_oeam7t$;
  CreateKillsApi.prototype.onChange_rlu5c6$ = BindKillsApi.prototype.onChange_rlu5c6$;
  CreateKillsApi.prototype.onClick_pofl4w$ = BindKillsApi.prototype.onClick_pofl4w$;
  CreateKillsApi.prototype.onInput_clfw57$ = BindKillsApi.prototype.onInput_clfw57$;
  CreateKillsApi.prototype.plusAssign_ubid8w$ = BindKillsApi.prototype.plusAssign_ubid8w$;
  CreateKillsApi.prototype.process_7xi3v7$ = BindKillsApi.prototype.process_7xi3v7$;
  CreateKillsApi.prototype.remAssign_wgabca$ = BindKillsApi.prototype.remAssign_wgabca$;
  CreateKillsApi.prototype.remAssign_djv61p$ = BindKillsApi.prototype.remAssign_djv61p$;
  CreateKillsApi.prototype.remAssign_7fncnf$ = BindKillsApi.prototype.remAssign_7fncnf$;
  CreateKillsApi.prototype.toChannelLater_z5dyp2$ = BindKillsApi.prototype.toChannelLater_z5dyp2$;
  CreateKillsApi.prototype.toRxSet_jr4bl4$ = BindKillsApi.prototype.toRxSet_jr4bl4$;
  Object.defineProperty(HasCreateKillsUix.prototype, 'bindings', Object.getOwnPropertyDescriptor(HasCreateKills.prototype, 'bindings'));
  CreateKillsUixApi.prototype.bind_8y93tj$ = CreateKillsApi.prototype.bind_8y93tj$;
  CreateKillsUixApi.prototype.bind_igb9j9$ = CreateKillsApi.prototype.bind_igb9j9$;
  CreateKillsUixApi.prototype.bind_4dd4yj$ = CreateKillsApi.prototype.bind_4dd4yj$;
  CreateKillsUixApi.prototype.bind_zfaq6f$ = CreateKillsApi.prototype.bind_zfaq6f$;
  Object.defineProperty(CreateKillsUixApi.prototype, 'bindings', Object.getOwnPropertyDescriptor(CreateKillsApi.prototype, 'bindings'));
  CreateKillsUixApi.prototype.visibility_12lt6u$ = CreateKillsApi.prototype.visibility_12lt6u$;
  CreateKillsUixApi.prototype.enabled_hlnvpg$ = CreateKillsApi.prototype.enabled_hlnvpg$;
  CreateKillsUixApi.prototype.rxClass_9npl0m$ = CreateKillsApi.prototype.rxClass_9npl0m$;
  CreateKillsUixApi.prototype.rxClass_62ldac$ = CreateKillsApi.prototype.rxClass_62ldac$;
  CreateKillsUixApi.prototype.rxClass_c5yvvx$ = CreateKillsApi.prototype.rxClass_c5yvvx$;
  CreateKillsUixApi.prototype.rxClass_6sflyw$ = CreateKillsApi.prototype.rxClass_6sflyw$;
  CreateKillsUixApi.prototype.visible_od9jl4$ = CreateKillsApi.prototype.visible_od9jl4$;
  CreateKillsUixApi.prototype.bindValue_xy1r9h$ = CreateKillsApi.prototype.bindValue_xy1r9h$;
  CreateKillsUixApi.prototype.runView_fpu3uh$ = CreateKillsApi.prototype.runView_fpu3uh$;
  CreateKillsUixApi.prototype.get_routing_lqv1tx$ = CreateKillsApi.prototype.get_routing_lqv1tx$;
  CreateKillsUixApi.prototype.addDirty_3529di$ = CreateKillsApi.prototype.addDirty_3529di$;
  CreateKillsUixApi.prototype.keepScreenAwake_ipfk82$ = CreateKillsApi.prototype.keepScreenAwake_ipfk82$;
  CreateKillsUixApi.prototype.get_oldKilled_vsdo34$ = CreateKillsApi.prototype.get_oldKilled_vsdo34$;
  CreateKillsUixApi.prototype.get_oldKilledOpt_vsdo34$ = CreateKillsApi.prototype.get_oldKilledOpt_vsdo34$;
  CreateKillsUixApi.prototype.rx_y6x17j$ = CreateKillsApi.prototype.rx_y6x17j$;
  CreateKillsUixApi.prototype.rx_46ic4w$ = CreateKillsApi.prototype.rx_46ic4w$;
  CreateKillsUixApi.prototype.rx_wgabca$ = CreateKillsApi.prototype.rx_wgabca$;
  CreateKillsUixApi.prototype.rx_djv61p$ = CreateKillsApi.prototype.rx_djv61p$;
  CreateKillsUixApi.prototype.containsRx_1w65cx$ = CreateKillsApi.prototype.containsRx_1w65cx$;
  CreateKillsUixApi.prototype.feedTo_9o5f67$ = CreateKillsApi.prototype.feedTo_9o5f67$;
  CreateKillsUixApi.prototype.filtered_tnde95$ = CreateKillsApi.prototype.filtered_tnde95$;
  CreateKillsUixApi.prototype.forEach_xwzbbo$ = CreateKillsApi.prototype.forEach_xwzbbo$;
  CreateKillsUixApi.prototype.forEach_35q7bt$ = CreateKillsApi.prototype.forEach_35q7bt$;
  CreateKillsUixApi.prototype.forEachLater_xwzbbo$ = CreateKillsApi.prototype.forEachLater_xwzbbo$;
  CreateKillsUixApi.prototype.incremented_eoy9qo$ = CreateKillsApi.prototype.incremented_eoy9qo$;
  CreateKillsUixApi.prototype.linked_n1nom7$ = CreateKillsApi.prototype.linked_n1nom7$;
  CreateKillsUixApi.prototype.listen_ubid8w$ = CreateKillsApi.prototype.listen_ubid8w$;
  CreateKillsUixApi.prototype.map_jtxi0h$ = CreateKillsApi.prototype.map_jtxi0h$;
  CreateKillsUixApi.prototype.mapLive_1mq1ue$ = CreateKillsApi.prototype.mapLive_1mq1ue$;
  CreateKillsUixApi.prototype.on_2stdkb$ = CreateKillsApi.prototype.on_2stdkb$;
  CreateKillsUixApi.prototype.on_hgi4ad$ = CreateKillsApi.prototype.on_hgi4ad$;
  CreateKillsUixApi.prototype.onChange_oeam7t$ = CreateKillsApi.prototype.onChange_oeam7t$;
  CreateKillsUixApi.prototype.onChange_rlu5c6$ = CreateKillsApi.prototype.onChange_rlu5c6$;
  CreateKillsUixApi.prototype.onClick_pofl4w$ = CreateKillsApi.prototype.onClick_pofl4w$;
  CreateKillsUixApi.prototype.onInput_clfw57$ = CreateKillsApi.prototype.onInput_clfw57$;
  CreateKillsUixApi.prototype.plusAssign_ubid8w$ = CreateKillsApi.prototype.plusAssign_ubid8w$;
  CreateKillsUixApi.prototype.process_7xi3v7$ = CreateKillsApi.prototype.process_7xi3v7$;
  CreateKillsUixApi.prototype.remAssign_wgabca$ = CreateKillsApi.prototype.remAssign_wgabca$;
  CreateKillsUixApi.prototype.remAssign_djv61p$ = CreateKillsApi.prototype.remAssign_djv61p$;
  CreateKillsUixApi.prototype.remAssign_7fncnf$ = CreateKillsApi.prototype.remAssign_7fncnf$;
  CreateKillsUixApi.prototype.toChannelLater_z5dyp2$ = CreateKillsApi.prototype.toChannelLater_z5dyp2$;
  CreateKillsUixApi.prototype.toRxSet_jr4bl4$ = CreateKillsApi.prototype.toRxSet_jr4bl4$;
  Object.defineProperty(HasEditKillsUix.prototype, 'bindings', Object.getOwnPropertyDescriptor(HasEdit.prototype, 'bindings'));
  EditKillsUixApi.prototype.bind_8y93tj$ = EditKillsApi.prototype.bind_8y93tj$;
  EditKillsUixApi.prototype.bind_igb9j9$ = EditKillsApi.prototype.bind_igb9j9$;
  EditKillsUixApi.prototype.bind_4dd4yj$ = EditKillsApi.prototype.bind_4dd4yj$;
  EditKillsUixApi.prototype.bind_zfaq6f$ = EditKillsApi.prototype.bind_zfaq6f$;
  Object.defineProperty(EditKillsUixApi.prototype, 'bindings', Object.getOwnPropertyDescriptor(EditKillsApi.prototype, 'bindings'));
  EditKillsUixApi.prototype.visibility_12lt6u$ = EditKillsApi.prototype.visibility_12lt6u$;
  EditKillsUixApi.prototype.enabled_hlnvpg$ = EditKillsApi.prototype.enabled_hlnvpg$;
  EditKillsUixApi.prototype.rxClass_9npl0m$ = EditKillsApi.prototype.rxClass_9npl0m$;
  EditKillsUixApi.prototype.rxClass_62ldac$ = EditKillsApi.prototype.rxClass_62ldac$;
  EditKillsUixApi.prototype.rxClass_c5yvvx$ = EditKillsApi.prototype.rxClass_c5yvvx$;
  EditKillsUixApi.prototype.rxClass_6sflyw$ = EditKillsApi.prototype.rxClass_6sflyw$;
  EditKillsUixApi.prototype.visible_od9jl4$ = EditKillsApi.prototype.visible_od9jl4$;
  EditKillsUixApi.prototype.bindValue_xy1r9h$ = EditKillsApi.prototype.bindValue_xy1r9h$;
  EditKillsUixApi.prototype.runView_fpu3uh$ = EditKillsApi.prototype.runView_fpu3uh$;
  EditKillsUixApi.prototype.get_routing_lqv1tx$ = EditKillsApi.prototype.get_routing_lqv1tx$;
  EditKillsUixApi.prototype.addDirty_3529di$ = EditKillsApi.prototype.addDirty_3529di$;
  EditKillsUixApi.prototype.keepScreenAwake_ipfk82$ = EditKillsApi.prototype.keepScreenAwake_ipfk82$;
  EditKillsUixApi.prototype.get_oldKilled_vsdo34$ = EditKillsApi.prototype.get_oldKilled_vsdo34$;
  EditKillsUixApi.prototype.get_oldKilledOpt_vsdo34$ = EditKillsApi.prototype.get_oldKilledOpt_vsdo34$;
  EditKillsUixApi.prototype.rx_y6x17j$ = EditKillsApi.prototype.rx_y6x17j$;
  EditKillsUixApi.prototype.rx_46ic4w$ = EditKillsApi.prototype.rx_46ic4w$;
  EditKillsUixApi.prototype.rx_wgabca$ = EditKillsApi.prototype.rx_wgabca$;
  EditKillsUixApi.prototype.rx_djv61p$ = EditKillsApi.prototype.rx_djv61p$;
  EditKillsUixApi.prototype.containsRx_1w65cx$ = EditKillsApi.prototype.containsRx_1w65cx$;
  EditKillsUixApi.prototype.feedTo_9o5f67$ = EditKillsApi.prototype.feedTo_9o5f67$;
  EditKillsUixApi.prototype.filtered_tnde95$ = EditKillsApi.prototype.filtered_tnde95$;
  EditKillsUixApi.prototype.forEach_xwzbbo$ = EditKillsApi.prototype.forEach_xwzbbo$;
  EditKillsUixApi.prototype.forEach_35q7bt$ = EditKillsApi.prototype.forEach_35q7bt$;
  EditKillsUixApi.prototype.forEachLater_xwzbbo$ = EditKillsApi.prototype.forEachLater_xwzbbo$;
  EditKillsUixApi.prototype.incremented_eoy9qo$ = EditKillsApi.prototype.incremented_eoy9qo$;
  EditKillsUixApi.prototype.linked_n1nom7$ = EditKillsApi.prototype.linked_n1nom7$;
  EditKillsUixApi.prototype.listen_ubid8w$ = EditKillsApi.prototype.listen_ubid8w$;
  EditKillsUixApi.prototype.map_jtxi0h$ = EditKillsApi.prototype.map_jtxi0h$;
  EditKillsUixApi.prototype.mapLive_1mq1ue$ = EditKillsApi.prototype.mapLive_1mq1ue$;
  EditKillsUixApi.prototype.on_2stdkb$ = EditKillsApi.prototype.on_2stdkb$;
  EditKillsUixApi.prototype.on_hgi4ad$ = EditKillsApi.prototype.on_hgi4ad$;
  EditKillsUixApi.prototype.onChange_oeam7t$ = EditKillsApi.prototype.onChange_oeam7t$;
  EditKillsUixApi.prototype.onChange_rlu5c6$ = EditKillsApi.prototype.onChange_rlu5c6$;
  EditKillsUixApi.prototype.onClick_pofl4w$ = EditKillsApi.prototype.onClick_pofl4w$;
  EditKillsUixApi.prototype.onInput_clfw57$ = EditKillsApi.prototype.onInput_clfw57$;
  EditKillsUixApi.prototype.plusAssign_ubid8w$ = EditKillsApi.prototype.plusAssign_ubid8w$;
  EditKillsUixApi.prototype.process_7xi3v7$ = EditKillsApi.prototype.process_7xi3v7$;
  EditKillsUixApi.prototype.remAssign_wgabca$ = EditKillsApi.prototype.remAssign_wgabca$;
  EditKillsUixApi.prototype.remAssign_djv61p$ = EditKillsApi.prototype.remAssign_djv61p$;
  EditKillsUixApi.prototype.remAssign_7fncnf$ = EditKillsApi.prototype.remAssign_7fncnf$;
  EditKillsUixApi.prototype.toChannelLater_z5dyp2$ = EditKillsApi.prototype.toChannelLater_z5dyp2$;
  EditKillsUixApi.prototype.toRxSet_jr4bl4$ = EditKillsApi.prototype.toRxSet_jr4bl4$;
  Object.defineProperty(HasBackEditKillsUix.prototype, 'bindings', Object.getOwnPropertyDescriptor(HasEditKillsUix.prototype, 'bindings'));
  BackEditKillsUixApi.prototype.get_saveButton_tdhe4g$ = EditKillsUixApi.prototype.get_saveButton_tdhe4g$;
  BackEditKillsUixApi.prototype.bind_8y93tj$ = EditKillsUixApi.prototype.bind_8y93tj$;
  BackEditKillsUixApi.prototype.bind_igb9j9$ = EditKillsUixApi.prototype.bind_igb9j9$;
  BackEditKillsUixApi.prototype.bind_4dd4yj$ = EditKillsUixApi.prototype.bind_4dd4yj$;
  BackEditKillsUixApi.prototype.bind_zfaq6f$ = EditKillsUixApi.prototype.bind_zfaq6f$;
  Object.defineProperty(BackEditKillsUixApi.prototype, 'bindings', Object.getOwnPropertyDescriptor(EditKillsUixApi.prototype, 'bindings'));
  BackEditKillsUixApi.prototype.visibility_12lt6u$ = EditKillsUixApi.prototype.visibility_12lt6u$;
  BackEditKillsUixApi.prototype.enabled_hlnvpg$ = EditKillsUixApi.prototype.enabled_hlnvpg$;
  BackEditKillsUixApi.prototype.rxClass_9npl0m$ = EditKillsUixApi.prototype.rxClass_9npl0m$;
  BackEditKillsUixApi.prototype.rxClass_62ldac$ = EditKillsUixApi.prototype.rxClass_62ldac$;
  BackEditKillsUixApi.prototype.rxClass_c5yvvx$ = EditKillsUixApi.prototype.rxClass_c5yvvx$;
  BackEditKillsUixApi.prototype.rxClass_6sflyw$ = EditKillsUixApi.prototype.rxClass_6sflyw$;
  BackEditKillsUixApi.prototype.visible_od9jl4$ = EditKillsUixApi.prototype.visible_od9jl4$;
  BackEditKillsUixApi.prototype.bindValue_xy1r9h$ = EditKillsUixApi.prototype.bindValue_xy1r9h$;
  BackEditKillsUixApi.prototype.runView_fpu3uh$ = EditKillsUixApi.prototype.runView_fpu3uh$;
  BackEditKillsUixApi.prototype.get_routing_lqv1tx$ = EditKillsUixApi.prototype.get_routing_lqv1tx$;
  BackEditKillsUixApi.prototype.addDirty_3529di$ = EditKillsUixApi.prototype.addDirty_3529di$;
  BackEditKillsUixApi.prototype.keepScreenAwake_ipfk82$ = EditKillsUixApi.prototype.keepScreenAwake_ipfk82$;
  BackEditKillsUixApi.prototype.get_oldKilled_vsdo34$ = EditKillsUixApi.prototype.get_oldKilled_vsdo34$;
  BackEditKillsUixApi.prototype.get_oldKilledOpt_vsdo34$ = EditKillsUixApi.prototype.get_oldKilledOpt_vsdo34$;
  BackEditKillsUixApi.prototype.rx_y6x17j$ = EditKillsUixApi.prototype.rx_y6x17j$;
  BackEditKillsUixApi.prototype.rx_46ic4w$ = EditKillsUixApi.prototype.rx_46ic4w$;
  BackEditKillsUixApi.prototype.rx_wgabca$ = EditKillsUixApi.prototype.rx_wgabca$;
  BackEditKillsUixApi.prototype.rx_djv61p$ = EditKillsUixApi.prototype.rx_djv61p$;
  BackEditKillsUixApi.prototype.containsRx_1w65cx$ = EditKillsUixApi.prototype.containsRx_1w65cx$;
  BackEditKillsUixApi.prototype.feedTo_9o5f67$ = EditKillsUixApi.prototype.feedTo_9o5f67$;
  BackEditKillsUixApi.prototype.filtered_tnde95$ = EditKillsUixApi.prototype.filtered_tnde95$;
  BackEditKillsUixApi.prototype.forEach_xwzbbo$ = EditKillsUixApi.prototype.forEach_xwzbbo$;
  BackEditKillsUixApi.prototype.forEach_35q7bt$ = EditKillsUixApi.prototype.forEach_35q7bt$;
  BackEditKillsUixApi.prototype.forEachLater_xwzbbo$ = EditKillsUixApi.prototype.forEachLater_xwzbbo$;
  BackEditKillsUixApi.prototype.incremented_eoy9qo$ = EditKillsUixApi.prototype.incremented_eoy9qo$;
  BackEditKillsUixApi.prototype.linked_n1nom7$ = EditKillsUixApi.prototype.linked_n1nom7$;
  BackEditKillsUixApi.prototype.listen_ubid8w$ = EditKillsUixApi.prototype.listen_ubid8w$;
  BackEditKillsUixApi.prototype.map_jtxi0h$ = EditKillsUixApi.prototype.map_jtxi0h$;
  BackEditKillsUixApi.prototype.mapLive_1mq1ue$ = EditKillsUixApi.prototype.mapLive_1mq1ue$;
  BackEditKillsUixApi.prototype.on_2stdkb$ = EditKillsUixApi.prototype.on_2stdkb$;
  BackEditKillsUixApi.prototype.on_hgi4ad$ = EditKillsUixApi.prototype.on_hgi4ad$;
  BackEditKillsUixApi.prototype.onChange_oeam7t$ = EditKillsUixApi.prototype.onChange_oeam7t$;
  BackEditKillsUixApi.prototype.onChange_rlu5c6$ = EditKillsUixApi.prototype.onChange_rlu5c6$;
  BackEditKillsUixApi.prototype.onClick_pofl4w$ = EditKillsUixApi.prototype.onClick_pofl4w$;
  BackEditKillsUixApi.prototype.onInput_clfw57$ = EditKillsUixApi.prototype.onInput_clfw57$;
  BackEditKillsUixApi.prototype.plusAssign_ubid8w$ = EditKillsUixApi.prototype.plusAssign_ubid8w$;
  BackEditKillsUixApi.prototype.process_7xi3v7$ = EditKillsUixApi.prototype.process_7xi3v7$;
  BackEditKillsUixApi.prototype.remAssign_wgabca$ = EditKillsUixApi.prototype.remAssign_wgabca$;
  BackEditKillsUixApi.prototype.remAssign_djv61p$ = EditKillsUixApi.prototype.remAssign_djv61p$;
  BackEditKillsUixApi.prototype.remAssign_7fncnf$ = EditKillsUixApi.prototype.remAssign_7fncnf$;
  BackEditKillsUixApi.prototype.toChannelLater_z5dyp2$ = EditKillsUixApi.prototype.toChannelLater_z5dyp2$;
  BackEditKillsUixApi.prototype.toRxSet_jr4bl4$ = EditKillsUixApi.prototype.toRxSet_jr4bl4$;
  Object.defineProperty(HasBackCreateKillsUix.prototype, 'bindings', Object.getOwnPropertyDescriptor(HasCreateKillsUix.prototype, 'bindings'));
  BackCreateKillsUixApi.prototype.get_persistButton_tdhe4g$ = CreateKillsUixApi.prototype.get_persistButton_tdhe4g$;
  BackCreateKillsUixApi.prototype.bind_8y93tj$ = CreateKillsUixApi.prototype.bind_8y93tj$;
  BackCreateKillsUixApi.prototype.bind_igb9j9$ = CreateKillsUixApi.prototype.bind_igb9j9$;
  BackCreateKillsUixApi.prototype.bind_4dd4yj$ = CreateKillsUixApi.prototype.bind_4dd4yj$;
  BackCreateKillsUixApi.prototype.bind_zfaq6f$ = CreateKillsUixApi.prototype.bind_zfaq6f$;
  Object.defineProperty(BackCreateKillsUixApi.prototype, 'bindings', Object.getOwnPropertyDescriptor(CreateKillsUixApi.prototype, 'bindings'));
  BackCreateKillsUixApi.prototype.visibility_12lt6u$ = CreateKillsUixApi.prototype.visibility_12lt6u$;
  BackCreateKillsUixApi.prototype.enabled_hlnvpg$ = CreateKillsUixApi.prototype.enabled_hlnvpg$;
  BackCreateKillsUixApi.prototype.rxClass_9npl0m$ = CreateKillsUixApi.prototype.rxClass_9npl0m$;
  BackCreateKillsUixApi.prototype.rxClass_62ldac$ = CreateKillsUixApi.prototype.rxClass_62ldac$;
  BackCreateKillsUixApi.prototype.rxClass_c5yvvx$ = CreateKillsUixApi.prototype.rxClass_c5yvvx$;
  BackCreateKillsUixApi.prototype.rxClass_6sflyw$ = CreateKillsUixApi.prototype.rxClass_6sflyw$;
  BackCreateKillsUixApi.prototype.visible_od9jl4$ = CreateKillsUixApi.prototype.visible_od9jl4$;
  BackCreateKillsUixApi.prototype.bindValue_xy1r9h$ = CreateKillsUixApi.prototype.bindValue_xy1r9h$;
  BackCreateKillsUixApi.prototype.runView_fpu3uh$ = CreateKillsUixApi.prototype.runView_fpu3uh$;
  BackCreateKillsUixApi.prototype.get_routing_lqv1tx$ = CreateKillsUixApi.prototype.get_routing_lqv1tx$;
  BackCreateKillsUixApi.prototype.addDirty_3529di$ = CreateKillsUixApi.prototype.addDirty_3529di$;
  BackCreateKillsUixApi.prototype.keepScreenAwake_ipfk82$ = CreateKillsUixApi.prototype.keepScreenAwake_ipfk82$;
  BackCreateKillsUixApi.prototype.get_oldKilled_vsdo34$ = CreateKillsUixApi.prototype.get_oldKilled_vsdo34$;
  BackCreateKillsUixApi.prototype.get_oldKilledOpt_vsdo34$ = CreateKillsUixApi.prototype.get_oldKilledOpt_vsdo34$;
  BackCreateKillsUixApi.prototype.rx_y6x17j$ = CreateKillsUixApi.prototype.rx_y6x17j$;
  BackCreateKillsUixApi.prototype.rx_46ic4w$ = CreateKillsUixApi.prototype.rx_46ic4w$;
  BackCreateKillsUixApi.prototype.rx_wgabca$ = CreateKillsUixApi.prototype.rx_wgabca$;
  BackCreateKillsUixApi.prototype.rx_djv61p$ = CreateKillsUixApi.prototype.rx_djv61p$;
  BackCreateKillsUixApi.prototype.containsRx_1w65cx$ = CreateKillsUixApi.prototype.containsRx_1w65cx$;
  BackCreateKillsUixApi.prototype.feedTo_9o5f67$ = CreateKillsUixApi.prototype.feedTo_9o5f67$;
  BackCreateKillsUixApi.prototype.filtered_tnde95$ = CreateKillsUixApi.prototype.filtered_tnde95$;
  BackCreateKillsUixApi.prototype.forEach_xwzbbo$ = CreateKillsUixApi.prototype.forEach_xwzbbo$;
  BackCreateKillsUixApi.prototype.forEach_35q7bt$ = CreateKillsUixApi.prototype.forEach_35q7bt$;
  BackCreateKillsUixApi.prototype.forEachLater_xwzbbo$ = CreateKillsUixApi.prototype.forEachLater_xwzbbo$;
  BackCreateKillsUixApi.prototype.incremented_eoy9qo$ = CreateKillsUixApi.prototype.incremented_eoy9qo$;
  BackCreateKillsUixApi.prototype.linked_n1nom7$ = CreateKillsUixApi.prototype.linked_n1nom7$;
  BackCreateKillsUixApi.prototype.listen_ubid8w$ = CreateKillsUixApi.prototype.listen_ubid8w$;
  BackCreateKillsUixApi.prototype.map_jtxi0h$ = CreateKillsUixApi.prototype.map_jtxi0h$;
  BackCreateKillsUixApi.prototype.mapLive_1mq1ue$ = CreateKillsUixApi.prototype.mapLive_1mq1ue$;
  BackCreateKillsUixApi.prototype.on_2stdkb$ = CreateKillsUixApi.prototype.on_2stdkb$;
  BackCreateKillsUixApi.prototype.on_hgi4ad$ = CreateKillsUixApi.prototype.on_hgi4ad$;
  BackCreateKillsUixApi.prototype.onChange_oeam7t$ = CreateKillsUixApi.prototype.onChange_oeam7t$;
  BackCreateKillsUixApi.prototype.onChange_rlu5c6$ = CreateKillsUixApi.prototype.onChange_rlu5c6$;
  BackCreateKillsUixApi.prototype.onClick_pofl4w$ = CreateKillsUixApi.prototype.onClick_pofl4w$;
  BackCreateKillsUixApi.prototype.onInput_clfw57$ = CreateKillsUixApi.prototype.onInput_clfw57$;
  BackCreateKillsUixApi.prototype.plusAssign_ubid8w$ = CreateKillsUixApi.prototype.plusAssign_ubid8w$;
  BackCreateKillsUixApi.prototype.process_7xi3v7$ = CreateKillsUixApi.prototype.process_7xi3v7$;
  BackCreateKillsUixApi.prototype.remAssign_wgabca$ = CreateKillsUixApi.prototype.remAssign_wgabca$;
  BackCreateKillsUixApi.prototype.remAssign_djv61p$ = CreateKillsUixApi.prototype.remAssign_djv61p$;
  BackCreateKillsUixApi.prototype.remAssign_7fncnf$ = CreateKillsUixApi.prototype.remAssign_7fncnf$;
  BackCreateKillsUixApi.prototype.toChannelLater_z5dyp2$ = CreateKillsUixApi.prototype.toChannelLater_z5dyp2$;
  BackCreateKillsUixApi.prototype.toRxSet_jr4bl4$ = CreateKillsUixApi.prototype.toRxSet_jr4bl4$;
  BindCsKillsUixApi.prototype.bind_8y93tj$ = BindKillsApi.prototype.bind_8y93tj$;
  BindCsKillsUixApi.prototype.bind_igb9j9$ = BindKillsApi.prototype.bind_igb9j9$;
  BindCsKillsUixApi.prototype.bind_4dd4yj$ = BindKillsApi.prototype.bind_4dd4yj$;
  BindCsKillsUixApi.prototype.bind_zfaq6f$ = BindKillsApi.prototype.bind_zfaq6f$;
  BindCsKillsUixApi.prototype.visibility_12lt6u$ = BindKillsApi.prototype.visibility_12lt6u$;
  BindCsKillsUixApi.prototype.enabled_hlnvpg$ = BindKillsApi.prototype.enabled_hlnvpg$;
  BindCsKillsUixApi.prototype.rxClass_9npl0m$ = BindKillsApi.prototype.rxClass_9npl0m$;
  BindCsKillsUixApi.prototype.rxClass_62ldac$ = BindKillsApi.prototype.rxClass_62ldac$;
  BindCsKillsUixApi.prototype.rxClass_c5yvvx$ = BindKillsApi.prototype.rxClass_c5yvvx$;
  BindCsKillsUixApi.prototype.rxClass_6sflyw$ = BindKillsApi.prototype.rxClass_6sflyw$;
  BindCsKillsUixApi.prototype.visible_od9jl4$ = BindKillsApi.prototype.visible_od9jl4$;
  BindCsKillsUixApi.prototype.bindValue_xy1r9h$ = BindKillsApi.prototype.bindValue_xy1r9h$;
  BindCsKillsUixApi.prototype.runView_fpu3uh$ = BindKillsApi.prototype.runView_fpu3uh$;
  BindCsKillsUixApi.prototype.get_routing_lqv1tx$ = BindKillsApi.prototype.get_routing_lqv1tx$;
  BindCsKillsUixApi.prototype.addDirty_3529di$ = BindKillsApi.prototype.addDirty_3529di$;
  BindCsKillsUixApi.prototype.keepScreenAwake_ipfk82$ = BindKillsApi.prototype.keepScreenAwake_ipfk82$;
  BindCsKillsUixApi.prototype.get_oldKilled_vsdo34$ = BindKillsApi.prototype.get_oldKilled_vsdo34$;
  BindCsKillsUixApi.prototype.get_oldKilledOpt_vsdo34$ = BindKillsApi.prototype.get_oldKilledOpt_vsdo34$;
  BindCsKillsUixApi.prototype.rx_y6x17j$ = BindKillsApi.prototype.rx_y6x17j$;
  BindCsKillsUixApi.prototype.rx_46ic4w$ = BindKillsApi.prototype.rx_46ic4w$;
  BindCsKillsUixApi.prototype.rx_wgabca$ = BindKillsApi.prototype.rx_wgabca$;
  BindCsKillsUixApi.prototype.rx_djv61p$ = BindKillsApi.prototype.rx_djv61p$;
  BindCsKillsUixApi.prototype.containsRx_1w65cx$ = BindKillsApi.prototype.containsRx_1w65cx$;
  BindCsKillsUixApi.prototype.feedTo_9o5f67$ = BindKillsApi.prototype.feedTo_9o5f67$;
  BindCsKillsUixApi.prototype.filtered_tnde95$ = BindKillsApi.prototype.filtered_tnde95$;
  BindCsKillsUixApi.prototype.forEach_xwzbbo$ = BindKillsApi.prototype.forEach_xwzbbo$;
  BindCsKillsUixApi.prototype.forEach_35q7bt$ = BindKillsApi.prototype.forEach_35q7bt$;
  BindCsKillsUixApi.prototype.forEachLater_xwzbbo$ = BindKillsApi.prototype.forEachLater_xwzbbo$;
  BindCsKillsUixApi.prototype.incremented_eoy9qo$ = BindKillsApi.prototype.incremented_eoy9qo$;
  BindCsKillsUixApi.prototype.linked_n1nom7$ = BindKillsApi.prototype.linked_n1nom7$;
  BindCsKillsUixApi.prototype.listen_ubid8w$ = BindKillsApi.prototype.listen_ubid8w$;
  BindCsKillsUixApi.prototype.map_jtxi0h$ = BindKillsApi.prototype.map_jtxi0h$;
  BindCsKillsUixApi.prototype.mapLive_1mq1ue$ = BindKillsApi.prototype.mapLive_1mq1ue$;
  BindCsKillsUixApi.prototype.on_2stdkb$ = BindKillsApi.prototype.on_2stdkb$;
  BindCsKillsUixApi.prototype.on_hgi4ad$ = BindKillsApi.prototype.on_hgi4ad$;
  BindCsKillsUixApi.prototype.onChange_oeam7t$ = BindKillsApi.prototype.onChange_oeam7t$;
  BindCsKillsUixApi.prototype.onChange_rlu5c6$ = BindKillsApi.prototype.onChange_rlu5c6$;
  BindCsKillsUixApi.prototype.onClick_pofl4w$ = BindKillsApi.prototype.onClick_pofl4w$;
  BindCsKillsUixApi.prototype.onInput_clfw57$ = BindKillsApi.prototype.onInput_clfw57$;
  BindCsKillsUixApi.prototype.plusAssign_ubid8w$ = BindKillsApi.prototype.plusAssign_ubid8w$;
  BindCsKillsUixApi.prototype.process_7xi3v7$ = BindKillsApi.prototype.process_7xi3v7$;
  BindCsKillsUixApi.prototype.process_y3juat$ = CsKillsApi.prototype.process_y3juat$;
  BindCsKillsUixApi.prototype.remAssign_wgabca$ = BindKillsApi.prototype.remAssign_wgabca$;
  BindCsKillsUixApi.prototype.remAssign_djv61p$ = BindKillsApi.prototype.remAssign_djv61p$;
  BindCsKillsUixApi.prototype.remAssign_7fncnf$ = BindKillsApi.prototype.remAssign_7fncnf$;
  BindCsKillsUixApi.prototype.toChannelLater_z5dyp2$ = BindKillsApi.prototype.toChannelLater_z5dyp2$;
  BindCsKillsUixApi.prototype.toRxSet_jr4bl4$ = BindKillsApi.prototype.toRxSet_jr4bl4$;
  BindCsKillsUixApi.prototype.click_ts68bh$ = KillsUixApi.prototype.click_ts68bh$;
  BindCsKillsUixApi.prototype.click_9375ex$ = KillsUixApi.prototype.click_9375ex$;
  BindCsKillsUixApi.prototype.click_4eku4n$ = KillsUixApi.prototype.click_4eku4n$;
  BindCsKillsUixApi.prototype.click_512jbc$ = KillsUixApi.prototype.click_512jbc$;
  BindCsKillsUixApi.prototype.click_3zaxtq$ = KillsUixApi.prototype.click_3zaxtq$;
  BindCsKillsUixApi.prototype.signOut_tstgz9$ = KillsUixApi.prototype.signOut_tstgz9$;
  BindCsKillsUixApi.prototype.get_clickActivate_tvm2vp$ = KillsUixApi.prototype.get_clickActivate_tvm2vp$;
  BindCsKillsUixApi.prototype.get_clickToggle_tvm2vp$ = KillsUixApi.prototype.get_clickToggle_tvm2vp$;
  BindCsKillsUixApi.prototype.get_ids_qko62t$ = CsKillsApi.prototype.get_ids_qko62t$;
  BindCsKillsUixApi.prototype.events_9k4h2$ = CsKillsApi.prototype.events_9k4h2$;
  BindCsKillsUixApi.prototype.filter_hu0si9$ = CsKillsApi.prototype.filter_hu0si9$;
  BindCsKillsUixApi.prototype.toRx_on0lyu$ = CsKillsApi.prototype.toRx_on0lyu$;
  BindCsKillsUixApi.prototype.list_u1uvxv$ = CsApiCommonui.prototype.list_u1uvxv$;
  BindCsKillsUixApi.prototype.list_qlxt6c$ = CsApiCommonui.prototype.list_qlxt6c$;
  Object.defineProperty(EditKillsDeps.prototype, 'bindings', Object.getOwnPropertyDescriptor(HasEditKills.prototype, 'bindings'));
  Object.defineProperty(HasEditBack.prototype, 'bindings', Object.getOwnPropertyDescriptor(HasEdit.prototype, 'bindings'));
  DefaultBindings.prototype.get_oldKilled_vsdo34$ = KillsApi.prototype.get_oldKilled_vsdo34$;
  DefaultBindings.prototype.get_oldKilledOpt_vsdo34$ = KillsApi.prototype.get_oldKilledOpt_vsdo34$;
  DefaultBindings.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  DefaultBindings.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  DefaultBindings.prototype.rx_wgabca$ = KillsApi.prototype.rx_wgabca$;
  DefaultBindings.prototype.rx_djv61p$ = KillsApi.prototype.rx_djv61p$;
  DefaultBindings.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  DefaultBindings.prototype.feedTo_9o5f67$ = KillsApi.prototype.feedTo_9o5f67$;
  DefaultBindings.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  DefaultBindings.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  DefaultBindings.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  DefaultBindings.prototype.forEachLater_xwzbbo$ = KillsApi.prototype.forEachLater_xwzbbo$;
  DefaultBindings.prototype.incremented_eoy9qo$ = KillsApi.prototype.incremented_eoy9qo$;
  DefaultBindings.prototype.linked_n1nom7$ = KillsApi.prototype.linked_n1nom7$;
  DefaultBindings.prototype.listen_ubid8w$ = KillsApi.prototype.listen_ubid8w$;
  DefaultBindings.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  DefaultBindings.prototype.mapLive_1mq1ue$ = KillsApi.prototype.mapLive_1mq1ue$;
  DefaultBindings.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  DefaultBindings.prototype.plusAssign_ubid8w$ = KillsApi.prototype.plusAssign_ubid8w$;
  DefaultBindings.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  DefaultBindings.prototype.remAssign_wgabca$ = KillsApi.prototype.remAssign_wgabca$;
  DefaultBindings.prototype.remAssign_djv61p$ = KillsApi.prototype.remAssign_djv61p$;
  DefaultBindings.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  DefaultBindings.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  DefaultBindings.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  DefaultBindings.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  DefaultBindings.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  Binder.prototype.get_oldKilled_vsdo34$ = KillsApi.prototype.get_oldKilled_vsdo34$;
  Binder.prototype.get_oldKilledOpt_vsdo34$ = KillsApi.prototype.get_oldKilledOpt_vsdo34$;
  Binder.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  Binder.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  Binder.prototype.rx_wgabca$ = KillsApi.prototype.rx_wgabca$;
  Binder.prototype.rx_djv61p$ = KillsApi.prototype.rx_djv61p$;
  Binder.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  Binder.prototype.feedTo_9o5f67$ = KillsApi.prototype.feedTo_9o5f67$;
  Binder.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  Binder.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  Binder.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  Binder.prototype.forEachLater_xwzbbo$ = KillsApi.prototype.forEachLater_xwzbbo$;
  Binder.prototype.incremented_eoy9qo$ = KillsApi.prototype.incremented_eoy9qo$;
  Binder.prototype.linked_n1nom7$ = KillsApi.prototype.linked_n1nom7$;
  Binder.prototype.listen_ubid8w$ = KillsApi.prototype.listen_ubid8w$;
  Binder.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  Binder.prototype.mapLive_1mq1ue$ = KillsApi.prototype.mapLive_1mq1ue$;
  Binder.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  Binder.prototype.plusAssign_ubid8w$ = KillsApi.prototype.plusAssign_ubid8w$;
  Binder.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  Binder.prototype.remAssign_wgabca$ = KillsApi.prototype.remAssign_wgabca$;
  Binder.prototype.remAssign_djv61p$ = KillsApi.prototype.remAssign_djv61p$;
  Binder.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  Binder.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  Binder.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  Binder.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  Binder.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  BackPersistDiscard.prototype.visibility_12lt6u$ = KillsApiCommonui.prototype.visibility_12lt6u$;
  BackPersistDiscard.prototype.enabled_hlnvpg$ = KillsApiCommonui.prototype.enabled_hlnvpg$;
  BackPersistDiscard.prototype.rxClass_9npl0m$ = KillsApiCommonui.prototype.rxClass_9npl0m$;
  BackPersistDiscard.prototype.rxClass_62ldac$ = KillsApiCommonui.prototype.rxClass_62ldac$;
  BackPersistDiscard.prototype.rxClass_c5yvvx$ = KillsApiCommonui.prototype.rxClass_c5yvvx$;
  BackPersistDiscard.prototype.rxClass_6sflyw$ = KillsApiCommonui.prototype.rxClass_6sflyw$;
  BackPersistDiscard.prototype.visible_od9jl4$ = KillsApiCommonui.prototype.visible_od9jl4$;
  BackPersistDiscard.prototype.bind_zfaq6f$ = KillsApiCommonui.prototype.bind_zfaq6f$;
  BackPersistDiscard.prototype.bindValue_xy1r9h$ = KillsApiCommonui.prototype.bindValue_xy1r9h$;
  BackPersistDiscard.prototype.runView_fpu3uh$ = KillsApiCommonui.prototype.runView_fpu3uh$;
  BackPersistDiscard.prototype.get_routing_lqv1tx$ = KillsApiCommonui.prototype.get_routing_lqv1tx$;
  BackPersistDiscard.prototype.addDirty_3529di$ = KillsApiCommonui.prototype.addDirty_3529di$;
  BackPersistDiscard.prototype.keepScreenAwake_ipfk82$ = KillsApiCommonui.prototype.keepScreenAwake_ipfk82$;
  BackPersistDiscard.prototype.get_oldKilled_vsdo34$ = KillsApiCommonui.prototype.get_oldKilled_vsdo34$;
  BackPersistDiscard.prototype.get_oldKilledOpt_vsdo34$ = KillsApiCommonui.prototype.get_oldKilledOpt_vsdo34$;
  BackPersistDiscard.prototype.rx_y6x17j$ = KillsApiCommonui.prototype.rx_y6x17j$;
  BackPersistDiscard.prototype.rx_46ic4w$ = KillsApiCommonui.prototype.rx_46ic4w$;
  BackPersistDiscard.prototype.rx_wgabca$ = KillsApiCommonui.prototype.rx_wgabca$;
  BackPersistDiscard.prototype.rx_djv61p$ = KillsApiCommonui.prototype.rx_djv61p$;
  BackPersistDiscard.prototype.containsRx_1w65cx$ = KillsApiCommonui.prototype.containsRx_1w65cx$;
  BackPersistDiscard.prototype.feedTo_9o5f67$ = KillsApiCommonui.prototype.feedTo_9o5f67$;
  BackPersistDiscard.prototype.filtered_tnde95$ = KillsApiCommonui.prototype.filtered_tnde95$;
  BackPersistDiscard.prototype.forEach_xwzbbo$ = KillsApiCommonui.prototype.forEach_xwzbbo$;
  BackPersistDiscard.prototype.forEach_35q7bt$ = KillsApiCommonui.prototype.forEach_35q7bt$;
  BackPersistDiscard.prototype.forEachLater_xwzbbo$ = KillsApiCommonui.prototype.forEachLater_xwzbbo$;
  BackPersistDiscard.prototype.incremented_eoy9qo$ = KillsApiCommonui.prototype.incremented_eoy9qo$;
  BackPersistDiscard.prototype.linked_n1nom7$ = KillsApiCommonui.prototype.linked_n1nom7$;
  BackPersistDiscard.prototype.listen_ubid8w$ = KillsApiCommonui.prototype.listen_ubid8w$;
  BackPersistDiscard.prototype.map_jtxi0h$ = KillsApiCommonui.prototype.map_jtxi0h$;
  BackPersistDiscard.prototype.mapLive_1mq1ue$ = KillsApiCommonui.prototype.mapLive_1mq1ue$;
  BackPersistDiscard.prototype.on_2stdkb$ = KillsApiCommonui.prototype.on_2stdkb$;
  BackPersistDiscard.prototype.on_hgi4ad$ = KillsApiCommonui.prototype.on_hgi4ad$;
  BackPersistDiscard.prototype.onChange_oeam7t$ = KillsApiCommonui.prototype.onChange_oeam7t$;
  BackPersistDiscard.prototype.onChange_rlu5c6$ = KillsApiCommonui.prototype.onChange_rlu5c6$;
  BackPersistDiscard.prototype.onClick_pofl4w$ = KillsApiCommonui.prototype.onClick_pofl4w$;
  BackPersistDiscard.prototype.onInput_clfw57$ = KillsApiCommonui.prototype.onInput_clfw57$;
  BackPersistDiscard.prototype.plusAssign_ubid8w$ = KillsApiCommonui.prototype.plusAssign_ubid8w$;
  BackPersistDiscard.prototype.process_7xi3v7$ = KillsApiCommonui.prototype.process_7xi3v7$;
  BackPersistDiscard.prototype.remAssign_wgabca$ = KillsApiCommonui.prototype.remAssign_wgabca$;
  BackPersistDiscard.prototype.remAssign_djv61p$ = KillsApiCommonui.prototype.remAssign_djv61p$;
  BackPersistDiscard.prototype.remAssign_7fncnf$ = KillsApiCommonui.prototype.remAssign_7fncnf$;
  BackPersistDiscard.prototype.toChannelLater_z5dyp2$ = KillsApiCommonui.prototype.toChannelLater_z5dyp2$;
  BackPersistDiscard.prototype.toRxSet_jr4bl4$ = KillsApiCommonui.prototype.toRxSet_jr4bl4$;
  BackPersistDiscard.prototype.click_ts68bh$ = KillsUixApi.prototype.click_ts68bh$;
  BackPersistDiscard.prototype.click_9375ex$ = KillsUixApi.prototype.click_9375ex$;
  BackPersistDiscard.prototype.click_4eku4n$ = KillsUixApi.prototype.click_4eku4n$;
  BackPersistDiscard.prototype.click_512jbc$ = KillsUixApi.prototype.click_512jbc$;
  BackPersistDiscard.prototype.click_3zaxtq$ = KillsUixApi.prototype.click_3zaxtq$;
  BackPersistDiscard.prototype.signOut_tstgz9$ = KillsUixApi.prototype.signOut_tstgz9$;
  BackPersistDiscard.prototype.get_clickActivate_tvm2vp$ = KillsUixApi.prototype.get_clickActivate_tvm2vp$;
  BackPersistDiscard.prototype.get_clickToggle_tvm2vp$ = KillsUixApi.prototype.get_clickToggle_tvm2vp$;
  BackSaveDiscard.prototype.visibility_12lt6u$ = KillsApiCommonui.prototype.visibility_12lt6u$;
  BackSaveDiscard.prototype.enabled_hlnvpg$ = KillsApiCommonui.prototype.enabled_hlnvpg$;
  BackSaveDiscard.prototype.rxClass_9npl0m$ = KillsApiCommonui.prototype.rxClass_9npl0m$;
  BackSaveDiscard.prototype.rxClass_62ldac$ = KillsApiCommonui.prototype.rxClass_62ldac$;
  BackSaveDiscard.prototype.rxClass_c5yvvx$ = KillsApiCommonui.prototype.rxClass_c5yvvx$;
  BackSaveDiscard.prototype.rxClass_6sflyw$ = KillsApiCommonui.prototype.rxClass_6sflyw$;
  BackSaveDiscard.prototype.visible_od9jl4$ = KillsApiCommonui.prototype.visible_od9jl4$;
  BackSaveDiscard.prototype.bind_zfaq6f$ = KillsApiCommonui.prototype.bind_zfaq6f$;
  BackSaveDiscard.prototype.bindValue_xy1r9h$ = KillsApiCommonui.prototype.bindValue_xy1r9h$;
  BackSaveDiscard.prototype.runView_fpu3uh$ = KillsApiCommonui.prototype.runView_fpu3uh$;
  BackSaveDiscard.prototype.get_routing_lqv1tx$ = KillsApiCommonui.prototype.get_routing_lqv1tx$;
  BackSaveDiscard.prototype.addDirty_3529di$ = KillsApiCommonui.prototype.addDirty_3529di$;
  BackSaveDiscard.prototype.keepScreenAwake_ipfk82$ = KillsApiCommonui.prototype.keepScreenAwake_ipfk82$;
  BackSaveDiscard.prototype.get_oldKilled_vsdo34$ = KillsApiCommonui.prototype.get_oldKilled_vsdo34$;
  BackSaveDiscard.prototype.get_oldKilledOpt_vsdo34$ = KillsApiCommonui.prototype.get_oldKilledOpt_vsdo34$;
  BackSaveDiscard.prototype.rx_y6x17j$ = KillsApiCommonui.prototype.rx_y6x17j$;
  BackSaveDiscard.prototype.rx_46ic4w$ = KillsApiCommonui.prototype.rx_46ic4w$;
  BackSaveDiscard.prototype.rx_wgabca$ = KillsApiCommonui.prototype.rx_wgabca$;
  BackSaveDiscard.prototype.rx_djv61p$ = KillsApiCommonui.prototype.rx_djv61p$;
  BackSaveDiscard.prototype.containsRx_1w65cx$ = KillsApiCommonui.prototype.containsRx_1w65cx$;
  BackSaveDiscard.prototype.feedTo_9o5f67$ = KillsApiCommonui.prototype.feedTo_9o5f67$;
  BackSaveDiscard.prototype.filtered_tnde95$ = KillsApiCommonui.prototype.filtered_tnde95$;
  BackSaveDiscard.prototype.forEach_xwzbbo$ = KillsApiCommonui.prototype.forEach_xwzbbo$;
  BackSaveDiscard.prototype.forEach_35q7bt$ = KillsApiCommonui.prototype.forEach_35q7bt$;
  BackSaveDiscard.prototype.forEachLater_xwzbbo$ = KillsApiCommonui.prototype.forEachLater_xwzbbo$;
  BackSaveDiscard.prototype.incremented_eoy9qo$ = KillsApiCommonui.prototype.incremented_eoy9qo$;
  BackSaveDiscard.prototype.linked_n1nom7$ = KillsApiCommonui.prototype.linked_n1nom7$;
  BackSaveDiscard.prototype.listen_ubid8w$ = KillsApiCommonui.prototype.listen_ubid8w$;
  BackSaveDiscard.prototype.map_jtxi0h$ = KillsApiCommonui.prototype.map_jtxi0h$;
  BackSaveDiscard.prototype.mapLive_1mq1ue$ = KillsApiCommonui.prototype.mapLive_1mq1ue$;
  BackSaveDiscard.prototype.on_2stdkb$ = KillsApiCommonui.prototype.on_2stdkb$;
  BackSaveDiscard.prototype.on_hgi4ad$ = KillsApiCommonui.prototype.on_hgi4ad$;
  BackSaveDiscard.prototype.onChange_oeam7t$ = KillsApiCommonui.prototype.onChange_oeam7t$;
  BackSaveDiscard.prototype.onChange_rlu5c6$ = KillsApiCommonui.prototype.onChange_rlu5c6$;
  BackSaveDiscard.prototype.onClick_pofl4w$ = KillsApiCommonui.prototype.onClick_pofl4w$;
  BackSaveDiscard.prototype.onInput_clfw57$ = KillsApiCommonui.prototype.onInput_clfw57$;
  BackSaveDiscard.prototype.plusAssign_ubid8w$ = KillsApiCommonui.prototype.plusAssign_ubid8w$;
  BackSaveDiscard.prototype.process_7xi3v7$ = KillsApiCommonui.prototype.process_7xi3v7$;
  BackSaveDiscard.prototype.remAssign_wgabca$ = KillsApiCommonui.prototype.remAssign_wgabca$;
  BackSaveDiscard.prototype.remAssign_djv61p$ = KillsApiCommonui.prototype.remAssign_djv61p$;
  BackSaveDiscard.prototype.remAssign_7fncnf$ = KillsApiCommonui.prototype.remAssign_7fncnf$;
  BackSaveDiscard.prototype.toChannelLater_z5dyp2$ = KillsApiCommonui.prototype.toChannelLater_z5dyp2$;
  BackSaveDiscard.prototype.toRxSet_jr4bl4$ = KillsApiCommonui.prototype.toRxSet_jr4bl4$;
  BackSaveDiscard.prototype.click_ts68bh$ = KillsUixApi.prototype.click_ts68bh$;
  BackSaveDiscard.prototype.click_9375ex$ = KillsUixApi.prototype.click_9375ex$;
  BackSaveDiscard.prototype.click_4eku4n$ = KillsUixApi.prototype.click_4eku4n$;
  BackSaveDiscard.prototype.click_512jbc$ = KillsUixApi.prototype.click_512jbc$;
  BackSaveDiscard.prototype.click_3zaxtq$ = KillsUixApi.prototype.click_3zaxtq$;
  BackSaveDiscard.prototype.signOut_tstgz9$ = KillsUixApi.prototype.signOut_tstgz9$;
  BackSaveDiscard.prototype.get_clickActivate_tvm2vp$ = KillsUixApi.prototype.get_clickActivate_tvm2vp$;
  BackSaveDiscard.prototype.get_clickToggle_tvm2vp$ = KillsUixApi.prototype.get_clickToggle_tvm2vp$;
  CsKills.prototype.list_u1uvxv$ = CsKillsApiCommonui.prototype.list_u1uvxv$;
  CsKills.prototype.list_qlxt6c$ = CsKillsApiCommonui.prototype.list_qlxt6c$;
  CsKills.prototype.toRx_on0lyu$ = CsKillsApiCommonui.prototype.toRx_on0lyu$;
  CsKills.prototype.visibility_12lt6u$ = CsKillsApiCommonui.prototype.visibility_12lt6u$;
  CsKills.prototype.enabled_hlnvpg$ = CsKillsApiCommonui.prototype.enabled_hlnvpg$;
  CsKills.prototype.rxClass_9npl0m$ = CsKillsApiCommonui.prototype.rxClass_9npl0m$;
  CsKills.prototype.rxClass_62ldac$ = CsKillsApiCommonui.prototype.rxClass_62ldac$;
  CsKills.prototype.rxClass_c5yvvx$ = CsKillsApiCommonui.prototype.rxClass_c5yvvx$;
  CsKills.prototype.rxClass_6sflyw$ = CsKillsApiCommonui.prototype.rxClass_6sflyw$;
  CsKills.prototype.visible_od9jl4$ = CsKillsApiCommonui.prototype.visible_od9jl4$;
  CsKills.prototype.bind_zfaq6f$ = CsKillsApiCommonui.prototype.bind_zfaq6f$;
  CsKills.prototype.bindValue_xy1r9h$ = CsKillsApiCommonui.prototype.bindValue_xy1r9h$;
  CsKills.prototype.runView_fpu3uh$ = CsKillsApiCommonui.prototype.runView_fpu3uh$;
  CsKills.prototype.get_routing_lqv1tx$ = CsKillsApiCommonui.prototype.get_routing_lqv1tx$;
  CsKills.prototype.addDirty_3529di$ = CsKillsApiCommonui.prototype.addDirty_3529di$;
  CsKills.prototype.keepScreenAwake_ipfk82$ = CsKillsApiCommonui.prototype.keepScreenAwake_ipfk82$;
  CsKills.prototype.get_oldKilled_vsdo34$ = CsKillsApiCommonui.prototype.get_oldKilled_vsdo34$;
  CsKills.prototype.get_oldKilledOpt_vsdo34$ = CsKillsApiCommonui.prototype.get_oldKilledOpt_vsdo34$;
  CsKills.prototype.rx_y6x17j$ = CsKillsApiCommonui.prototype.rx_y6x17j$;
  CsKills.prototype.rx_46ic4w$ = CsKillsApiCommonui.prototype.rx_46ic4w$;
  CsKills.prototype.rx_wgabca$ = CsKillsApiCommonui.prototype.rx_wgabca$;
  CsKills.prototype.rx_djv61p$ = CsKillsApiCommonui.prototype.rx_djv61p$;
  CsKills.prototype.containsRx_1w65cx$ = CsKillsApiCommonui.prototype.containsRx_1w65cx$;
  CsKills.prototype.feedTo_9o5f67$ = CsKillsApiCommonui.prototype.feedTo_9o5f67$;
  CsKills.prototype.filtered_tnde95$ = CsKillsApiCommonui.prototype.filtered_tnde95$;
  CsKills.prototype.forEach_xwzbbo$ = CsKillsApiCommonui.prototype.forEach_xwzbbo$;
  CsKills.prototype.forEach_35q7bt$ = CsKillsApiCommonui.prototype.forEach_35q7bt$;
  CsKills.prototype.forEachLater_xwzbbo$ = CsKillsApiCommonui.prototype.forEachLater_xwzbbo$;
  CsKills.prototype.incremented_eoy9qo$ = CsKillsApiCommonui.prototype.incremented_eoy9qo$;
  CsKills.prototype.linked_n1nom7$ = CsKillsApiCommonui.prototype.linked_n1nom7$;
  CsKills.prototype.listen_ubid8w$ = CsKillsApiCommonui.prototype.listen_ubid8w$;
  CsKills.prototype.map_jtxi0h$ = CsKillsApiCommonui.prototype.map_jtxi0h$;
  CsKills.prototype.mapLive_1mq1ue$ = CsKillsApiCommonui.prototype.mapLive_1mq1ue$;
  CsKills.prototype.on_2stdkb$ = CsKillsApiCommonui.prototype.on_2stdkb$;
  CsKills.prototype.on_hgi4ad$ = CsKillsApiCommonui.prototype.on_hgi4ad$;
  CsKills.prototype.onChange_oeam7t$ = CsKillsApiCommonui.prototype.onChange_oeam7t$;
  CsKills.prototype.onChange_rlu5c6$ = CsKillsApiCommonui.prototype.onChange_rlu5c6$;
  CsKills.prototype.onClick_pofl4w$ = CsKillsApiCommonui.prototype.onClick_pofl4w$;
  CsKills.prototype.onInput_clfw57$ = CsKillsApiCommonui.prototype.onInput_clfw57$;
  CsKills.prototype.plusAssign_ubid8w$ = CsKillsApiCommonui.prototype.plusAssign_ubid8w$;
  CsKills.prototype.process_7xi3v7$ = CsKillsApiCommonui.prototype.process_7xi3v7$;
  CsKills.prototype.process_y3juat$ = CsKillsApiCommonui.prototype.process_y3juat$;
  CsKills.prototype.remAssign_wgabca$ = CsKillsApiCommonui.prototype.remAssign_wgabca$;
  CsKills.prototype.remAssign_djv61p$ = CsKillsApiCommonui.prototype.remAssign_djv61p$;
  CsKills.prototype.remAssign_7fncnf$ = CsKillsApiCommonui.prototype.remAssign_7fncnf$;
  CsKills.prototype.toChannelLater_z5dyp2$ = CsKillsApiCommonui.prototype.toChannelLater_z5dyp2$;
  CsKills.prototype.toRxSet_jr4bl4$ = CsKillsApiCommonui.prototype.toRxSet_jr4bl4$;
  CsKills.prototype.get_ids_qko62t$ = CsKillsApiCommonui.prototype.get_ids_qko62t$;
  CsKills.prototype.events_9k4h2$ = CsKillsApiCommonui.prototype.events_9k4h2$;
  CsKills.prototype.filter_hu0si9$ = CsKillsApiCommonui.prototype.filter_hu0si9$;
  CsKillsView.prototype.click_ts68bh$ = KillsUixApi.prototype.click_ts68bh$;
  CsKillsView.prototype.click_9375ex$ = KillsUixApi.prototype.click_9375ex$;
  CsKillsView.prototype.click_4eku4n$ = KillsUixApi.prototype.click_4eku4n$;
  CsKillsView.prototype.click_512jbc$ = KillsUixApi.prototype.click_512jbc$;
  CsKillsView.prototype.click_3zaxtq$ = KillsUixApi.prototype.click_3zaxtq$;
  CsKillsView.prototype.signOut_tstgz9$ = KillsUixApi.prototype.signOut_tstgz9$;
  CsKillsView.prototype.get_clickActivate_tvm2vp$ = KillsUixApi.prototype.get_clickActivate_tvm2vp$;
  CsKillsView.prototype.get_clickToggle_tvm2vp$ = KillsUixApi.prototype.get_clickToggle_tvm2vp$;
  ErrorTC.prototype.get_backButton_ihoiae$ = BackKillsUixApi.prototype.get_backButton_ihoiae$;
  ErrorTC.prototype.get_backButton_tdhe4g$ = BackKillsUixApi.prototype.get_backButton_tdhe4g$;
  ErrorTC.prototype.backOnDelete_287e2$ = BackKillsUixApi.prototype.backOnDelete_287e2$;
  LinkForwardImpl.prototype.to_p1sd1w$ = LinkForward.prototype.to_p1sd1w$;
  RoutingHole.prototype.remAssign_wgabca$ = KillsApi.prototype.remAssign_wgabca$;
  RoutingHole.prototype.remAssign_djv61p$ = KillsApi.prototype.remAssign_djv61p$;
  RoutingHole.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  RoutingHole.prototype.get_oldKilled_vsdo34$ = KillsApi.prototype.get_oldKilled_vsdo34$;
  RoutingHole.prototype.get_oldKilledOpt_vsdo34$ = KillsApi.prototype.get_oldKilledOpt_vsdo34$;
  RoutingHole.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  RoutingHole.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  RoutingHole.prototype.rx_wgabca$ = KillsApi.prototype.rx_wgabca$;
  RoutingHole.prototype.rx_djv61p$ = KillsApi.prototype.rx_djv61p$;
  RoutingHole.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  RoutingHole.prototype.feedTo_9o5f67$ = KillsApi.prototype.feedTo_9o5f67$;
  RoutingHole.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  RoutingHole.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  RoutingHole.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  RoutingHole.prototype.forEachLater_xwzbbo$ = KillsApi.prototype.forEachLater_xwzbbo$;
  RoutingHole.prototype.incremented_eoy9qo$ = KillsApi.prototype.incremented_eoy9qo$;
  RoutingHole.prototype.linked_n1nom7$ = KillsApi.prototype.linked_n1nom7$;
  RoutingHole.prototype.listen_ubid8w$ = KillsApi.prototype.listen_ubid8w$;
  RoutingHole.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  RoutingHole.prototype.mapLive_1mq1ue$ = KillsApi.prototype.mapLive_1mq1ue$;
  RoutingHole.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  RoutingHole.prototype.plusAssign_ubid8w$ = KillsApi.prototype.plusAssign_ubid8w$;
  RoutingHole.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  RoutingHole.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  RoutingHole.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  RoutingHole.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  RoutingHole.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
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
  Object.defineProperty(NodeWrap.prototype, 'slot', Object.getOwnPropertyDescriptor(HasNode.prototype, 'slot'));
  Object.defineProperty(NodeWrap.prototype, 'hole', Object.getOwnPropertyDescriptor(HasNode.prototype, 'hole'));
  Object.defineProperty(NodeWrap.prototype, 'insert', Object.getOwnPropertyDescriptor(HasNode.prototype, 'insert'));
  browserVisible = lazy(browserVisible$lambda);
  windowHasFocus = lazy(windowHasFocus$lambda);
  windowActive = lazy(windowActive$lambda);
  keepAwakeVideo = lazy(keepAwakeVideo$lambda);
  popstates = lazy(popstates$lambda);
  networkType = lazy(networkType$lambda);
  networkEffectiveType = lazy(networkEffectiveType$lambda);
  isServiceWorkerSupported = lazy(isServiceWorkerSupported$lambda);
  webkitdirectorySupported = lazy(webkitdirectorySupported$lambda);
  NullConverter = new Converter(commonshr.Identity, commonshr.SuspendIdentity);
  URIEncoder = new Converter(URIEncoder$lambda, URIEncoder$lambda_0);
  JsonConverter = new Converter(JsonConverter$lambda, JsonConverter$lambda_0);
  HashSerializer = plus_2(JsonConverter, URIEncoder);
  UnitConverter = new Converter(UnitConverter$lambda, UnitConverter$lambda_0);
  EmptyHashStruct = emptyList();
  StringHasher = singleHashTransformer(package$links.NullConverter);
  UnitTransformer = constantTransformer(Unit);
  UnitHasher = unitTransformer();
  HistoryBack = HistoryBack$lambda;
  mediaSessionSupported = lazy(mediaSessionSupported$lambda);
  var $receiver = new Var('Please wait...');
  $receiver.forEach_aaomyj$(killable.NoKill, globalStatus$lambda$lambda);
  globalStatus = $receiver;
  UnknownUserSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAz1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZY6YEAAAARHRSTlMAAQIEBQcKCwwODxITGBkkLzM1OEpLTFJXXWJnaGlrfH6IiYuMjo+Xo6Wtr7Cyur7Aw8XHyMrM0dPc4uTo6e/x8/n7/fpxHuUAAAFVSURBVBgZ5cHpMgNBFAbQj2kSy5CNIIIIEVsS+zZNTH/v/0xUSaXouXGv387BP+aqnaH3w07V4S+SVs6JvJXALM34TZbCqBL4Q16BSRoYyVMYJBkLsgS6XQpaULlAQe6gqVFUheaQog40I4qG0HiKPDSeIg/NiKIhNF2KOtDUKKpC4wIFuYOqTUELusSzIEtgsBYYCSlMKoE/hAqM1jy/yVLoFprnvjePpB04EXYTzPf8WXMBv2gEfrpaBFytO/J+dFhzQOman0IDMx3xS2g7TLm9wC9dzLDDqfeT+pID3FL95J1TOxCtUrUCSZ+qPgRlGpRRtEWDLRTd0+AOBY4mDrF1mqwjtkmTDcQOaLKP2ClN+ojd0uQGsReaPCP2RpNXxHKa5Ii90OQZsUuaXCC2TZNtxJZpsoyCHg2OUeSeqHpyEJQeqXhYhGiuMRhzpvGgMYf/5QNf4mAOhjK3vQAAAABJRU5ErkJggg==';
  factory = new Factory();
  SlotsAttribute = 'appsimakeSlots';
  Kotlin.defineModule('appsimake-commonui', _);
  return _;
}(typeof this['appsimake-commonui'] === 'undefined' ? {} : this['appsimake-commonui'], kotlin, this['appsimake-commonshr'], this['appsimake-domx'], this['appsimake-common'], this['kotlinx-coroutines-core'], this['appsimake-buildenv'], this['appsimake-fontawesome'], this['appsimake-bootstrap']);

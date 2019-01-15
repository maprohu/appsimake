if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-taskslib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-taskslib' was not found. Please, check whether 'appsimake-taskslib' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-commonlib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonlib' was not found. Please, check whether 'appsimake-commonlib' is loaded prior to 'appsimake-tasks'.");
}
this['appsimake-tasks'] = function (_, Kotlin, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_commonfb, $module$appsimake_taskslib, $module$appsimake_commonshr, $module$appsimake_firebase, $module$appsimake_fontawesome, $module$appsimake_commonui, $module$kotlinx_coroutines_core, $module$appsimake_common, $module$appsimake_commonlib) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var get_input = $module$appsimake_domx.domx.get_input_asww5s$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_formControl = $module$appsimake_bootstrap.bootstrap.get_formControl_kre7dp$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var get_widthAuto = $module$appsimake_domx.styles.get_widthAuto_kre7dp$;
  var Unit = Kotlin.kotlin.Unit;
  var textProp = $module$appsimake_commonfb.commonfb.textProp_kk2tdu$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var formGroup = $module$appsimake_commonfb.commonfb.formGroup_9svwsq$;
  var scrollForm = $module$appsimake_commonfb.commonfb.scrollForm_q3s9yp$;
  var FormConfig = $module$appsimake_commonfb.commonfb.FormConfig;
  var EditScreenConfig = $module$appsimake_commonfb.commonfb.EditScreenConfig;
  var build = $module$appsimake_commonfb.commonfb.build_mgj0h9$;
  var Tag = $module$appsimake_taskslib.taskslib.Tag;
  var getCallableRef = Kotlin.getCallableRef;
  var orEmpty = $module$appsimake_commonshr.common.orEmpty_rw3ye5$;
  var FilterConfig = $module$appsimake_commonfb.commonfb.FilterConfig;
  var query = $module$appsimake_firebase.firebase.firestore.query_vhmfed$;
  var ListScreenConfig = $module$appsimake_commonfb.commonfb.ListScreenConfig;
  var build_0 = $module$appsimake_commonfb.commonfb.build_f01wra$;
  var orEmpty_0 = $module$appsimake_commonshr.common.orEmpty_m2768g$;
  var Var = $module$appsimake_commonshr.rx.Var;
  var Some = $module$appsimake_commonshr.common.Some;
  var get_btnGroup = $module$appsimake_bootstrap.bootstrap.get_btnGroup_kre7dp$;
  var Fa = $module$appsimake_fontawesome.fontawesome.Fa;
  var get_check = $module$appsimake_fontawesome.fontawesome.get_check_xml72e$;
  var get_btnSuccess = $module$appsimake_bootstrap.bootstrap.get_btnSuccess_kre7dp$;
  var clickEvent = $module$appsimake_domx.domx.clickEvent_bvfv80$;
  var faButton = $module$appsimake_commonui.commonui.faButton_jous2b$;
  var get_times = $module$appsimake_fontawesome.fontawesome.get_times_xml72e$;
  var get_btnDanger = $module$appsimake_bootstrap.bootstrap.get_btnDanger_kre7dp$;
  var screenLayout = $module$appsimake_commonui.commonui.screenLayout_yc4v25$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var get_dFlex = $module$appsimake_bootstrap.bootstrap.get_dFlex_kre7dp$;
  var get_flexColumn = $module$appsimake_bootstrap.bootstrap.get_flexColumn_kre7dp$;
  var Listeners = $module$appsimake_commonshr.common.Listeners;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_klfg04$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var get_borderBottom = $module$appsimake_bootstrap.bootstrap.get_borderBottom_kre7dp$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var get_inputGroup = $module$appsimake_bootstrap.bootstrap.get_inputGroup_kre7dp$;
  var Cls = $module$appsimake_domx.domx.Cls;
  var get_borderWarning = $module$appsimake_bootstrap.bootstrap.get_borderWarning_kre7dp$;
  var rxClass = $module$appsimake_commonshr.rx.rxClass_3s5dpe$;
  var inputEvent = $module$appsimake_domx.domx.inputEvent_oyfk7p$;
  var get_inputGroupAppend = $module$appsimake_bootstrap.bootstrap.get_inputGroupAppend_kre7dp$;
  var get_button = $module$appsimake_domx.domx.get_button_asww5s$;
  var get_btn = $module$appsimake_bootstrap.bootstrap.get_btn_kre7dp$;
  var get_btnOutlineSecondary = $module$appsimake_bootstrap.bootstrap.get_btnOutlineSecondary_kre7dp$;
  var get_fa = $module$appsimake_fontawesome.fontawesome.get_fa_kre7dp$;
  var get_eraser = $module$appsimake_fontawesome.fontawesome.get_eraser_xml72e$;
  var invoke_0 = $module$appsimake_fontawesome.fontawesome.invoke_fv3gfs$;
  var rxEnabled = $module$appsimake_domx.domx.rxEnabled_v5m6ih$;
  var get_span = $module$appsimake_domx.domx.get_span_asww5s$;
  var get_spinnerBorder = $module$appsimake_bootstrap.bootstrap.get_spinnerBorder_kre7dp$;
  var get_spinnerBorderSm = $module$appsimake_bootstrap.bootstrap.get_spinnerBorderSm_kre7dp$;
  var rxDisplayed = $module$appsimake_domx.domx.rxDisplayed_29v9re$;
  var get_plus = $module$appsimake_fontawesome.fontawesome.get_plus_xml72e$;
  var rxDisplayed_0 = $module$appsimake_domx.domx.rxDisplayed_ux9tev$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var get_scrollVertical = $module$appsimake_domx.styles.get_scrollVertical_kre7dp$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var minus = Kotlin.kotlin.collections.minus_xfiyik$;
  var get_a = $module$appsimake_domx.domx.get_a_asww5s$;
  var get_listGroupItem = $module$appsimake_bootstrap.bootstrap.get_listGroupItem_kre7dp$;
  var get_listGroupItemAction = $module$appsimake_bootstrap.bootstrap.get_listGroupItemAction_kre7dp$;
  var get_flexRow = $module$appsimake_bootstrap.bootstrap.get_flexRow_kre7dp$;
  var get_py1 = $module$appsimake_bootstrap.bootstrap.get_py1_kre7dp$;
  var get_px2 = $module$appsimake_bootstrap.bootstrap.get_px2_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_fw = $module$appsimake_fontawesome.fontawesome.get_fw_xml72e$;
  var rxText = $module$appsimake_bootstrap.bootstrap.rxText_btzx6a$;
  var get_btnSecondary = $module$appsimake_bootstrap.bootstrap.get_btnSecondary_kre7dp$;
  var get_minus = $module$appsimake_fontawesome.fontawesome.get_minus_xml72e$;
  var rxClass_0 = $module$appsimake_commonshr.rx.rxClass_z8puye$;
  var MappedListenableListConfig = $module$appsimake_common.common.MappedListenableListConfig;
  var SortedListenableListConfig = $module$appsimake_common.common.SortedListenableListConfig;
  var FilteredListenableListConfig = $module$appsimake_common.common.FilteredListenableListConfig;
  var get_listGroup = $module$appsimake_bootstrap.bootstrap.get_listGroup_kre7dp$;
  var get_listGroupFlush = $module$appsimake_bootstrap.bootstrap.get_listGroupFlush_kre7dp$;
  var listenableList = $module$appsimake_domx.domx.listenableList_yfrdg0$;
  var set = $module$appsimake_commonshr.rx.set_atqor6$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var SetDiff = $module$appsimake_commonshr.commonshr.SetDiff;
  var ListenableList$Listener = $module$appsimake_common.common.ListenableList.Listener;
  var common = $module$appsimake_commonshr.common;
  var Killables = $module$appsimake_commonshr.killable.Killables;
  var Killable = $module$appsimake_commonshr.killable.Killable;
  var collectionRef = $module$appsimake_firebase.firebase.firestore.collectionRef_nabv8k$;
  var ListenableMutableList = $module$appsimake_common.common.ListenableMutableList;
  var ListenConfig = $module$appsimake_firebase.firebase.firestore.ListenConfig;
  var listen = $module$appsimake_firebase.firebase.firestore.listen_wkiigx$;
  var minus_0 = Kotlin.kotlin.collections.minus_khz7k3$;
  var plus_0 = Kotlin.kotlin.collections.plus_khz7k3$;
  var RxIface = $module$appsimake_commonshr.rx.RxIface;
  var throwCCE = Kotlin.throwCCE;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var get_dl = $module$appsimake_domx.domx.get_dl_asww5s$;
  var get_dt = $module$appsimake_domx.domx.get_dt_asww5s$;
  var get_dd = $module$appsimake_domx.domx.get_dd_asww5s$;
  var rxTextOrEmpty = $module$appsimake_bootstrap.bootstrap.rxTextOrEmpty_elhwo1$;
  var ViewScreenConfig = $module$appsimake_commonfb.commonfb.ViewScreenConfig;
  var build_1 = $module$appsimake_commonfb.commonfb.build_8wja18$;
  var get_list = $module$appsimake_fontawesome.fontawesome.get_list_xml72e$;
  var get_textarea = $module$appsimake_domx.domx.get_textarea_asww5s$;
  var textProp_0 = $module$appsimake_commonfb.commonfb.textProp_7aqtlq$;
  var get_select = $module$appsimake_domx.domx.get_select_asww5s$;
  var get_customSelect = $module$appsimake_bootstrap.bootstrap.get_customSelect_kre7dp$;
  var TaskStatus = $module$appsimake_taskslib.taskslib.TaskStatus;
  var TabConfig = $module$appsimake_commonfb.commonfb.TabConfig;
  var get_tags = $module$appsimake_fontawesome.fontawesome.get_tags_xml72e$;
  var get_comments = $module$appsimake_fontawesome.fontawesome.get_comments_xml72e$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var tabsConfig = $module$appsimake_commonfb.commonfb.tabsConfig_yye9s2$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var TaskStatus$values = $module$appsimake_taskslib.taskslib.TaskStatus.values;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var flatten = Kotlin.kotlin.collections.flatten_u0ad8z$;
  var Task = $module$appsimake_taskslib.taskslib.Task;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  var get_multiTags = $module$appsimake_taskslib.taskslib.get_multiTags_d2950k$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var get_p2 = $module$appsimake_bootstrap.bootstrap.get_p2_kre7dp$;
  var get_border = $module$appsimake_bootstrap.bootstrap.get_border_kre7dp$;
  var get_rounded = $module$appsimake_bootstrap.bootstrap.get_rounded_kre7dp$;
  var get_bgLight = $module$appsimake_bootstrap.bootstrap.get_bgLight_kre7dp$;
  var get_dGrid = $module$appsimake_domx.styles.get_dGrid_kre7dp$;
  var get_alignContentCenter = $module$appsimake_domx.styles.get_alignContentCenter_kre7dp$;
  var get_justifyContentCenter = $module$appsimake_bootstrap.bootstrap.get_justifyContentCenter_kre7dp$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var get_justifySelfEnd = $module$appsimake_domx.styles.get_justifySelfEnd_kre7dp$;
  var get_justifySelfStart = $module$appsimake_domx.styles.get_justifySelfStart_kre7dp$;
  var get_option = $module$appsimake_domx.domx.get_option_asww5s$;
  var changeEvent = $module$appsimake_domx.domx.changeEvent_e6qnhl$;
  var RootPanel = $module$appsimake_commonui.commonui.RootPanel;
  var get_flexWrap = $module$appsimake_bootstrap.bootstrap.get_flexWrap_kre7dp$;
  var minus_1 = Kotlin.kotlin.collections.minus_2ws7j4$;
  var get_ml1 = $module$appsimake_bootstrap.bootstrap.get_ml1_kre7dp$;
  var get_btnPrimary = $module$appsimake_bootstrap.bootstrap.get_btnPrimary_kre7dp$;
  var get_ellipsisH = $module$appsimake_fontawesome.fontawesome.get_ellipsisH_xml72e$;
  var showClosable = $module$appsimake_commonui.commonui.showClosable_l02s0b$;
  var clickEventSeq = $module$appsimake_domx.domx.clickEventSeq_er8ueh$;
  var taskslib = $module$appsimake_taskslib.taskslib;
  var LoggingInCtx_init = $module$appsimake_commonfb.commonfb.LoggingInCtx_init_nruni5$;
  var LoggingInCtx = $module$appsimake_commonfb.commonfb.LoggingInCtx;
  var get_search = $module$appsimake_fontawesome.fontawesome.get_search_xml72e$;
  var get_dropdownMenuRight = $module$appsimake_bootstrap.bootstrap.get_dropdownMenuRight_kre7dp$;
  var dropdownItemAnchor = $module$appsimake_bootstrap.bootstrap.dropdownItemAnchor_fahyz6$;
  var dropdownGroup = $module$appsimake_bootstrap.bootstrap.dropdownGroup_ju7q0d$;
  var get_card = $module$appsimake_bootstrap.bootstrap.get_card_kre7dp$;
  var get_cardHeader = $module$appsimake_bootstrap.bootstrap.get_cardHeader_kre7dp$;
  var LoggedInCtx = $module$appsimake_commonfb.commonfb.LoggedInCtx;
  var get_private = $module$appsimake_commonlib.commonlib.get_private_qw85iv$;
  var get_tasks = $module$appsimake_taskslib.taskslib.get_tasks_kpytd$;
  var get_usertags = $module$appsimake_taskslib.taskslib.get_usertags_kpytd$;
  var HasDB = $module$appsimake_commonfb.commonfb.HasDB;
  var keepAlive = $module$appsimake_commonfb.commonfb.keepAlive_r9y676$;
  var get_cardBody = $module$appsimake_bootstrap.bootstrap.get_cardBody_kre7dp$;
  var stringListClick = $module$appsimake_commonfb.commonfb.stringListClick_cvv88r$;
  var ListUIConfig = $module$appsimake_commonfb.commonfb.ListUIConfig;
  var showClosableList = $module$appsimake_commonfb.commonfb.showClosableList_uv07cr$;
  var viewTextField = $module$appsimake_commonfb.commonfb.viewTextField_5hmubo$;
  var viewFieldLabel = $module$appsimake_commonfb.commonfb.viewFieldLabel_uy78um$;
  var diffs = $module$appsimake_commonshr.rx.diffs_614g0z$;
  var scrollPanel = $module$appsimake_commonfb.commonfb.scrollPanel_kohbvw$;
  var get_badge = $module$appsimake_bootstrap.bootstrap.get_badge_kre7dp$;
  var get_badgePill = $module$appsimake_bootstrap.bootstrap.get_badgePill_kre7dp$;
  var get_badgeSecondary = $module$appsimake_bootstrap.bootstrap.get_badgeSecondary_kre7dp$;
  var get_fontSize100 = $module$appsimake_domx.styles.get_fontSize100_kre7dp$;
  var rxText_0 = $module$appsimake_bootstrap.bootstrap.rxText_7fncnf$;
  StatusFilter$All.prototype = Object.create(StatusFilter.prototype);
  StatusFilter$All.prototype.constructor = StatusFilter$All;
  StatusFilter$Single.prototype = Object.create(StatusFilter.prototype);
  StatusFilter$Single.prototype.constructor = StatusFilter$Single;
  StatusFilter$Completed.prototype = Object.create(StatusFilter.prototype);
  StatusFilter$Completed.prototype.constructor = StatusFilter$Completed;
  TasksMain.prototype = Object.create(LoggingInCtx.prototype);
  TasksMain.prototype.constructor = TasksMain;
  function editTag$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_formControl($receiver);
    get_m1($receiver);
    get_widthAuto($receiver);
    return Unit;
  }
  function editTag$lambda$lambda$lambda$lambda$lambda(closure$lbl, closure$eks, closure$item) {
    return function ($receiver) {
      closure$lbl($receiver);
      get_cls($receiver).invoke_cr52h1$(editTag$lambda$lambda$lambda$lambda$lambda$lambda);
      $receiver.type = 'text';
      closure$eks.plusAssign_wii6vi$(textProp($receiver, closure$item.name));
      return Unit;
    };
  }
  function editTag$lambda$lambda$lambda$lambda(closure$eks, closure$item) {
    return function ($receiver, lbl) {
      invoke(get_input($receiver), editTag$lambda$lambda$lambda$lambda$lambda(lbl, closure$eks, closure$item));
      return Unit;
    };
  }
  function editTag$lambda$lambda$lambda(closure$eks, closure$item) {
    return function ($receiver) {
      formGroup($receiver, 'Tag Name', editTag$lambda$lambda$lambda$lambda(closure$eks, closure$item));
      return Unit;
    };
  }
  function editTag$lambda$lambda(closure$eks, closure$item) {
    return function ($receiver) {
      scrollForm($receiver, editTag$lambda$lambda$lambda(closure$eks, closure$item));
      return Unit;
    };
  }
  function editTag$lambda(item, eks) {
    return new FormConfig(void 0, editTag$lambda$lambda(eks, item));
  }
  function editTag($receiver, killables, panel, tag, close) {
    return build(new EditScreenConfig('Tag', editTag$lambda), killables, panel, tag, close, $receiver.userTags, $receiver.db);
  }
  function listTags$lambda() {
    return new Tag();
  }
  function listTags$lambda_0(it) {
    return orEmpty(it.name.initial.invoke());
  }
  function listTags$lambda_1($receiver) {
    $receiver.asc_tixzdw$(Tag.Companion.name);
    return Unit;
  }
  function listTags($receiver, killables, panel, after) {
    build_0(new ListScreenConfig('Tags', listTags$lambda, $receiver.userTags, getCallableRef('editTag', function ($receiver, killables, panel, tag, close) {
      return editTag($receiver, killables, panel, tag, close), Unit;
    }.bind(null, $receiver)), getCallableRef('editTag', function ($receiver, killables, panel, tag, close) {
      return editTag($receiver, killables, panel, tag, close), Unit;
    }.bind(null, $receiver)), listTags$lambda_0, FilterConfig.Companion.of_nrtlcr$(query($receiver.userTags, $receiver.db, listTags$lambda_1))), killables, panel, $receiver.db, after);
  }
  function tagsEditor$lambda(closure$item) {
    return function (it) {
      closure$item.tags.current.now = new Some(it);
      return Unit;
    };
  }
  function tagsEditor($receiver, item, killables) {
    var tagsRx = new Var(orEmpty_0(item.tags.current.now));
    tagsRx.forEachLater_qlkmfe$(tagsEditor$lambda(item));
    return tagsSelector($receiver, killables, tagsRx, true);
  }
  function selectTags$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_m1($receiver);
    get_btnGroup($receiver);
    return Unit;
  }
  function selectTags$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_btnSuccess($receiver);
    return Unit;
  }
  function selectTags$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$close) {
    return function (it) {
      closure$close(true);
      return Unit;
    };
  }
  function selectTags$lambda$lambda$lambda$lambda$lambda_0(closure$close) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(selectTags$lambda$lambda$lambda$lambda$lambda$lambda);
      clickEvent($receiver, selectTags$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$close));
      return Unit;
    };
  }
  function selectTags$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    get_btnDanger($receiver);
    return Unit;
  }
  function selectTags$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$close) {
    return function (it) {
      closure$close(false);
      return Unit;
    };
  }
  function selectTags$lambda$lambda$lambda$lambda$lambda_1(closure$close) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(selectTags$lambda$lambda$lambda$lambda$lambda$lambda_1);
      clickEvent($receiver, selectTags$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$close));
      return Unit;
    };
  }
  function selectTags$lambda$lambda$lambda$lambda(closure$close) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(selectTags$lambda$lambda$lambda$lambda$lambda);
      faButton($receiver, get_check(Fa.Companion), selectTags$lambda$lambda$lambda$lambda$lambda_0(closure$close));
      faButton($receiver, get_times(Fa.Companion), selectTags$lambda$lambda$lambda$lambda$lambda_1(closure$close));
      return Unit;
    };
  }
  function selectTags$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.innerText = 'Select Tags';
    return Unit;
  }
  function selectTags$lambda$lambda$lambda(closure$close) {
    return function ($receiver) {
      $receiver.left.invoke_gk6m2q$(selectTags$lambda$lambda$lambda$lambda(closure$close));
      $receiver.middleTitle_9f50g3$(selectTags$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function selectTags$lambda$lambda$lambda_0(closure$killables, closure$tags, this$selectTags) {
    return function ($receiver) {
      $receiver.appendChild(tagsSelector(this$selectTags, closure$killables, closure$tags, false));
      return Unit;
    };
  }
  function selectTags$lambda$lambda(closure$close, closure$killables, closure$tags, this$selectTags) {
    return function ($receiver) {
      $receiver.top_vesf63$(selectTags$lambda$lambda$lambda(closure$close));
      $receiver.main_iw61es$(selectTags$lambda$lambda$lambda_0(closure$killables, closure$tags, this$selectTags));
      return Unit;
    };
  }
  function selectTags$lambda(closure$killables, closure$close, closure$tags, this$selectTags) {
    return function ($receiver) {
      screenLayout($receiver, closure$killables, selectTags$lambda$lambda(closure$close, closure$killables, closure$tags, this$selectTags));
      return Unit;
    };
  }
  function selectTags($receiver, killables, panel, tags, close) {
    panel.newRoot_iw61es$(selectTags$lambda(killables, close, tags, $receiver));
  }
  function tagsSelector$lambda$lambda($receiver) {
    get_flexGrow1($receiver);
    get_dFlex($receiver);
    get_flexColumn($receiver);
    return Unit;
  }
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function tagsSelector$lambda$lambda_0(closure$filterTextOutward) {
    return function () {
      return !isBlank(closure$filterTextOutward.invoke());
    };
  }
  function tagsSelector$lambda$lambda_1(closure$isFiltered, closure$tagNameSet, closure$filterTextOutward) {
    return function () {
      return closure$isFiltered.invoke() && !closure$tagNameSet.invoke().contains_11rb$(closure$filterTextOutward.invoke());
    };
  }
  function tagsSelector$lambda$lambda_2(closure$isBusy, closure$isNewTag) {
    return function () {
      return !closure$isBusy.invoke() && closure$isNewTag.invoke();
    };
  }
  function tagsSelector$lambda$lambda$lambda($receiver) {
    get_p1($receiver);
    get_borderBottom($receiver);
    flexFixedSize($receiver);
    return Unit;
  }
  function tagsSelector$lambda$lambda$lambda$lambda($receiver) {
    get_inputGroup($receiver);
    get_widthAuto($receiver);
    return Unit;
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda(closure$create, this$) {
    return function ($receiver) {
      get_formControl($receiver);
      get_widthAuto($receiver);
      this$.placeholder = closure$create ? 'filter or create tag...' : 'filter tags...';
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$extract(this$, closure$filterTextOutward) {
    return function () {
      closure$filterTextOutward.now = this$.value;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda_0(this$, closure$extract) {
    return function () {
      this$.value = '';
      closure$extract();
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda_1(closure$extract) {
    return function (it) {
      closure$extract();
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda_0(closure$create, closure$isFiltered, closure$filterTextOutward, closure$clearFilter) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda$lambda$lambda(closure$create, $receiver));
      $receiver.type = 'text';
      rxClass($receiver, get_borderWarning(Cls.Companion), closure$isFiltered);
      var extract = tagsSelector$lambda$lambda$lambda$lambda$extract($receiver, closure$filterTextOutward);
      closure$clearFilter.plusAssign_o14v8n$(tagsSelector$lambda$lambda$lambda$lambda$lambda_0($receiver, extract));
      inputEvent($receiver, tagsSelector$lambda$lambda$lambda$lambda$lambda_1(extract));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_eraser($receiver);
    return Unit;
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_btn($receiver);
    get_btnOutlineSecondary($receiver);
    invoke_0(get_fa($receiver), tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$clearFilter) {
    return function (it) {
      closure$clearFilter.fire();
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda_2(closure$isFiltered, closure$clearFilter) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda);
      rxEnabled($receiver, closure$isFiltered);
      clickEvent($receiver, tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$clearFilter));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    get_btn($receiver);
    get_btnOutlineSecondary($receiver);
    return Unit;
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    get_spinnerBorder($receiver);
    get_spinnerBorderSm($receiver);
    return Unit;
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$isBusy) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      rxDisplayed($receiver, closure$isBusy);
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_plus($receiver);
    return Unit;
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    invoke_0(get_fa($receiver), tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$isBusy) {
    return function () {
      return !closure$isBusy.invoke();
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$isBusy) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      rxDisplayed_0($receiver, tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$isBusy));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$tv) {
    return function (ts) {
      return plus(ts, closure$tv.now.props.idOrFail);
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$tagsSelector_0, closure$v_0, closure$tags_0, closure$isBusy_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$tagsSelector_0, closure$v_0, closure$tags_0, closure$isBusy_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$tagsSelector_0, closure$v_0, closure$tags_0, closure$isBusy_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$tagsSelector = this$tagsSelector_0;
    this.local$closure$v = closure$v_0;
    this.local$closure$tags = closure$tags_0;
    this.local$closure$isBusy = closure$isBusy_0;
  }
  Coroutine$tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$tagsSelector.tagSource.byName_61zpoe$(this.local$closure$v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tv = this.result_0;
            this.local$closure$tags.transform_ru8m0w$(tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(tv));
            return this.local$closure$isBusy.now = false, Unit;
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
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$addTagEnabled, closure$isBusy, closure$filterTextOutward, closure$clearFilter, this$tagsSelector, closure$tags) {
    return function (it) {
      if (closure$addTagEnabled.now) {
        closure$isBusy.now = true;
        var v = closure$filterTextOutward.now;
        closure$clearFilter.fire();
        launch(coroutines.GlobalScope, void 0, void 0, tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$tagsSelector, v, closure$tags, closure$isBusy));
      }
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda_3(closure$isBusy, closure$addTagEnabled, closure$filterTextOutward, closure$clearFilter, this$tagsSelector, closure$tags) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_1);
      invoke(get_span($receiver), tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$isBusy));
      invoke(get_span($receiver), tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$isBusy));
      rxEnabled($receiver, closure$addTagEnabled);
      clickEvent($receiver, tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$addTagEnabled, closure$isBusy, closure$filterTextOutward, closure$clearFilter, this$tagsSelector, closure$tags));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda_1(closure$isFiltered, closure$clearFilter, closure$create, closure$isBusy, closure$addTagEnabled, closure$filterTextOutward, this$tagsSelector, closure$tags) {
    return function ($receiver) {
      get_inputGroupAppend(get_cls($receiver));
      invoke(get_button($receiver), tagsSelector$lambda$lambda$lambda$lambda$lambda_2(closure$isFiltered, closure$clearFilter));
      if (closure$create) {
        invoke(get_button($receiver), tagsSelector$lambda$lambda$lambda$lambda$lambda_3(closure$isBusy, closure$addTagEnabled, closure$filterTextOutward, closure$clearFilter, this$tagsSelector, closure$tags));
      }
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda_0(closure$create, closure$isFiltered, closure$filterTextOutward, closure$clearFilter, closure$isBusy, closure$addTagEnabled, this$tagsSelector, closure$tags) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda$lambda);
      invoke(get_input($receiver), tagsSelector$lambda$lambda$lambda$lambda_0(closure$create, closure$isFiltered, closure$filterTextOutward, closure$clearFilter));
      invoke(get_div($receiver), tagsSelector$lambda$lambda$lambda$lambda_1(closure$isFiltered, closure$clearFilter, closure$create, closure$isBusy, closure$addTagEnabled, closure$filterTextOutward, this$tagsSelector, closure$tags));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda_3(closure$create, closure$isFiltered, closure$filterTextOutward, closure$clearFilter, closure$isBusy, closure$addTagEnabled, this$tagsSelector, closure$tags) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda);
      invoke(get_div($receiver), tagsSelector$lambda$lambda$lambda_0(closure$create, closure$isFiltered, closure$filterTextOutward, closure$clearFilter, closure$isBusy, closure$addTagEnabled, this$tagsSelector, closure$tags));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda_1($receiver) {
    get_flexGrow1($receiver);
    get_scrollVertical($receiver);
    return Unit;
  }
  function tagsSelector$lambda$lambda$TagNode(tag, nrx, selected, node) {
    this.tag = tag;
    this.nrx = nrx;
    this.selected = selected;
    this.node = node;
  }
  tagsSelector$lambda$lambda$TagNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagNode',
    interfaces: []
  };
  function tagsSelector$lambda$lambda$filterTag(name, filter) {
    return contains(name, filter, true);
  }
  function tagsSelector$lambda$lambda$lambda$lambda_2(closure$tag) {
    return function () {
      return orEmpty(closure$tag.name.initial.invoke());
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda_3(closure$tags, closure$tagId) {
    return function () {
      return closure$tags.invoke().contains_11rb$(closure$tagId);
    };
  }
  function tagsSelector$lambda$lambda$lambda$click$lambda(closure$tagId) {
    return function (s) {
      return minus(s, closure$tagId);
    };
  }
  function tagsSelector$lambda$lambda$lambda$click$lambda_0(closure$tagId) {
    return function (s) {
      return plus(s, closure$tagId);
    };
  }
  function tagsSelector$lambda$lambda$lambda$click(closure$selected, closure$tags, closure$tagId) {
    return function () {
      if (closure$selected.now)
        closure$tags.transform_ru8m0w$(tagsSelector$lambda$lambda$lambda$click$lambda(closure$tagId));
      else
        closure$tags.transform_ru8m0w$(tagsSelector$lambda$lambda$lambda$click$lambda_0(closure$tagId));
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    get_listGroupItem($receiver);
    get_listGroupItemAction($receiver);
    get_dFlex($receiver);
    get_flexRow($receiver);
    get_py1($receiver);
    get_px2($receiver);
    get_alignItemsCenter($receiver);
    return Unit;
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda_5(closure$click) {
    return function (it) {
      closure$click();
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    get_dFlex($receiver);
    get_flexRow($receiver);
    get_alignItemsCenter($receiver);
    get_flexGrow1($receiver);
    return Unit;
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$selected, this$) {
    return function ($receiver) {
      get_fw($receiver);
      rxClass(this$, get_check(Fa.Companion), closure$selected);
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$selected, this$) {
    return function ($receiver) {
      get_m1($receiver);
      invoke_0(get_fa($receiver), tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$selected, this$));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$selected) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$selected, $receiver));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$ks, closure$nrx) {
    return function ($receiver) {
      closure$ks.plusAssign_wii6vi$(rxText($receiver, closure$nrx));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda_6(closure$selected, closure$ks, closure$nrx) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_5);
      invoke(get_span($receiver), tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$selected));
      invoke(get_span($receiver), tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$ks, closure$nrx));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$selected) {
    return function () {
      return closure$selected.invoke() ? get_minus(Fa.Companion) : get_plus(Fa.Companion);
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$selected, this$) {
    return function ($receiver) {
      get_fw($receiver);
      rxClass_0(this$, tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$selected));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$selected, this$) {
    return function ($receiver) {
      invoke_0(get_fa($receiver), tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$selected, this$));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$selected) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$selected, $receiver));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_8(this$, closure$selected) {
    return function ($receiver) {
      get_btn($receiver);
      get_btnSecondary($receiver);
      get_p1($receiver);
      flexFixedSize($receiver);
      invoke(get_span(this$), tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$selected));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_9(it) {
    return Unit;
  }
  function tagsSelector$lambda$lambda$lambda$lambda$lambda_7(closure$selected) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_8($receiver, closure$selected));
      clickEvent($receiver, tagsSelector$lambda$lambda$lambda$lambda$lambda$lambda_9);
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda_4(closure$click, closure$selected, closure$ks, closure$nrx) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda$lambda$lambda_4);
      $receiver.href = '#';
      clickEvent($receiver, tagsSelector$lambda$lambda$lambda$lambda$lambda_5(closure$click));
      invoke(get_div($receiver), tagsSelector$lambda$lambda$lambda$lambda$lambda_6(closure$selected, closure$ks, closure$nrx));
      invoke(get_button($receiver), tagsSelector$lambda$lambda$lambda$lambda$lambda_7(closure$selected));
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda$lambda_2(closure$tags) {
    return function (tag, ks) {
      var tagId = tag.props.idOrFail;
      var $receiver = Rx_init(tagsSelector$lambda$lambda$lambda$lambda_2(tag));
      ks.plusAssign_wii6vi$($receiver);
      var nrx = $receiver;
      var $receiver_0 = Rx_init(tagsSelector$lambda$lambda$lambda$lambda_3(closure$tags, tagId));
      ks.plusAssign_wii6vi$($receiver_0);
      var selected = $receiver_0;
      var click = tagsSelector$lambda$lambda$lambda$click(selected, closure$tags, tagId);
      return new tagsSelector$lambda$lambda$TagNode(tag, nrx, selected, invoke(get_a(document), tagsSelector$lambda$lambda$lambda$lambda_4(click, selected, ks, nrx)));
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda_5(item, f) {
    return item.nrx;
  }
  function tagsSelector$lambda$lambda$lambda$lambda_6(item, f) {
    return item.nrx;
  }
  function tagsSelector$lambda$lambda$lambda$lambda_7(closure$filterTag) {
    return function (name, filter) {
      return closure$filterTag(name, filter);
    };
  }
  function tagsSelector$lambda$lambda$lambda$lambda_8($receiver) {
    get_listGroup($receiver);
    get_listGroupFlush($receiver);
    get_borderBottom($receiver);
    return Unit;
  }
  function tagsSelector$lambda$lambda$lambda$lambda_9(t, f) {
    return t.node;
  }
  function tagsSelector$lambda$lambda$lambda_3(closure$list, closure$killables) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda$lambda_8);
      listenableList($receiver, closure$list, closure$killables, tagsSelector$lambda$lambda$lambda$lambda_9);
      return Unit;
    };
  }
  function tagsSelector$lambda$lambda_4(this$tagsSelector, closure$killables, closure$tags, closure$filterTextOutward) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda$lambda_1);
      var filterTag = tagsSelector$lambda$lambda$filterTag;
      var $receiver_0 = (new MappedListenableListConfig(this$tagsSelector.tagSource.listenableList, closure$killables, tagsSelector$lambda$lambda$lambda_2(closure$tags))).build();
      var $receiver_1 = (new SortedListenableListConfig($receiver_0, closure$killables, tagsSelector$lambda$lambda$lambda$lambda_5)).build();
      var list = (new FilteredListenableListConfig($receiver_1, closure$killables, tagsSelector$lambda$lambda$lambda$lambda_6, closure$filterTextOutward, tagsSelector$lambda$lambda$lambda$lambda_7(filterTag))).build();
      invoke(get_div($receiver), tagsSelector$lambda$lambda$lambda_3(list, closure$killables));
      return Unit;
    };
  }
  function tagsSelector$lambda(this$tagsSelector, closure$killables, closure$create, closure$tags) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsSelector$lambda$lambda);
      var clearFilter = new Listeners();
      var filterTextOutward = new Var('');
      var isFiltered = Rx_init(tagsSelector$lambda$lambda_0(filterTextOutward));
      var tagNameSet = this$tagsSelector.tagSource.tagNameSet.get_di35k5$(closure$killables);
      var isNewTag = Rx_init(tagsSelector$lambda$lambda_1(isFiltered, tagNameSet, filterTextOutward));
      var isBusy = new Var(false);
      var addTagEnabled = Rx_init(tagsSelector$lambda$lambda_2(isBusy, isNewTag));
      invoke(get_div($receiver), tagsSelector$lambda$lambda_3(closure$create, isFiltered, filterTextOutward, clearFilter, isBusy, addTagEnabled, this$tagsSelector, closure$tags));
      invoke(get_div($receiver), tagsSelector$lambda$lambda_4(this$tagsSelector, closure$killables, closure$tags, filterTextOutward));
      return Unit;
    };
  }
  function tagsSelector($receiver, killables, tags, create) {
    return invoke(get_div(document), tagsSelector$lambda($receiver, killables, create, tags));
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function TagSource(wrap, db) {
    this.tagsRef_0 = collectionRef(wrap, db);
    this.killables_0 = new Killables();
    this.map_0 = LinkedHashMap_init();
    this.nameMap_0 = LinkedHashMap_init();
    this.list_0 = new ListenableMutableList();
    this.list_0.addListener_ednqrc$(new ListenableList$Listener(TagSource_init$lambda(this), TagSource_init$lambda_0(this)));
    var c = ListenConfig.Companion.hasProps_5sp7du$(this.list_0, TagSource_init$lambda_1);
    listen(query(wrap, db).query, this.killables_0, c);
    this.tagSet = new TagSource$Counted(TagSource$tagSet$lambda(this));
    this.tagNameSet = new TagSource$Counted(TagSource$tagNameSet$lambda(this));
  }
  TagSource.prototype.kill = function () {
    this.killables_0.kill();
  };
  function TagSource$tagv$lambda$lambda(closure$rxv) {
    return function () {
      return closure$rxv.invoke().name.initial.invoke();
    };
  }
  function TagSource$tagv$lambda$lambda$lambda(this$TagSource, closure$rxv) {
    return function (id) {
      var tmp$, tmp$_0;
      var $receiver = this$TagSource.nameMap_0;
      var value = (tmp$_0 = (tmp$ = this$TagSource.nameMap_0.get_11rb$(id)) != null ? plus(tmp$, closure$rxv) : null) != null ? tmp$_0 : setOf(closure$rxv);
      $receiver.put_xwzc9p$(id, value);
      return Unit;
    };
  }
  function TagSource$tagv$lambda$lambda_0(this$TagSource, closure$rxv) {
    return function (it) {
      it.forEach_qlkmfe$(TagSource$tagv$lambda$lambda$lambda(this$TagSource, closure$rxv));
      return Unit;
    };
  }
  function TagSource$tagv$lambda$lambda$lambda_0(this$TagSource, closure$rxv) {
    return function (id) {
      var tmp$;
      if ((tmp$ = this$TagSource.nameMap_0.get_11rb$(id)) != null) {
        var closure$rxv_0 = closure$rxv;
        var this$TagSource_0 = this$TagSource;
        var v2 = minus(tmp$, closure$rxv_0);
        if (v2.isEmpty()) {
          this$TagSource_0.nameMap_0.remove_11rb$(id);
        }
         else {
          this$TagSource_0.nameMap_0.put_xwzc9p$(id, v2);
        }
      }
      return Unit;
    };
  }
  function TagSource$tagv$lambda$lambda_1(this$TagSource, closure$rxv) {
    return function (it) {
      it.forEach_qlkmfe$(TagSource$tagv$lambda$lambda$lambda_0(this$TagSource, closure$rxv));
      return Unit;
    };
  }
  TagSource.prototype.tagv_0 = function (id) {
    var $receiver = this.map_0;
    var tmp$;
    var value = $receiver.get_11rb$(id);
    if (value == null) {
      var $receiver_0 = new Tag();
      $receiver_0.props.persisted_11rc$(id);
      set($receiver_0.name.initial, id);
      var rxv = new Var($receiver_0);
      Rx_init(TagSource$tagv$lambda$lambda(rxv)).onOff_uc1utc$(TagSource$tagv$lambda$lambda_0(this, rxv), TagSource$tagv$lambda$lambda_1(this, rxv));
      var answer = rxv;
      $receiver.put_xwzc9p$(id, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  Object.defineProperty(TagSource.prototype, 'listenableList', {
    get: function () {
      return this.list_0;
    }
  });
  TagSource.prototype.tag_61zpoe$ = function (id) {
    return this.tagv_0(id);
  };
  TagSource.prototype.byName_61zpoe$ = function (name_0, continuation_0, suspended) {
    var instance = new Coroutine$byName_61zpoe$(this, name_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$byName_61zpoe$($this, name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$name = name_0;
  }
  Coroutine$byName_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$byName_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$byName_61zpoe$.prototype.constructor = Coroutine$byName_61zpoe$;
  Coroutine$byName_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var c = this.$this.nameMap_0.get_11rb$(this.local$name);
            if (c != null) {
              this.local$tmp$ = first(c);
              this.state_0 = 3;
              continue;
            }
             else {
              var t = new Tag();
              set(t.name.current, this.local$name);
              this.state_0 = 2;
              this.result_0 = await_0(this.$this.tagsRef_0.add(t.props.write()), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var tref = this.result_0;
            this.local$tmp$ = this.$this.tagv_0(tref.id);
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
  function TagSource$listen$lambda(closure$fn) {
    return function (f, item) {
      closure$fn(new SetDiff(void 0, setOf(item)));
      return Unit;
    };
  }
  function TagSource$listen$lambda_0(closure$fn) {
    return function (f, item) {
      closure$fn(new SetDiff(setOf(item)));
      return Unit;
    };
  }
  TagSource.prototype.listen_okrql5$ = function (fn) {
    return this.list_0.addListener_ednqrc$(new ListenableList$Listener(TagSource$listen$lambda(fn), TagSource$listen$lambda_0(fn)));
  };
  function TagSource$Counted(create) {
    this.create_0 = create;
    this.current_0 = common.None;
  }
  function TagSource$Counted$Holder($outer, value, killable) {
    this.$outer = $outer;
    this.value = value;
    this.killable = killable;
    this.count = 0;
  }
  TagSource$Counted$Holder.prototype.release = function () {
    this.count = this.count - 1 | 0;
    if (this.count <= 0) {
      this.$outer.current_0 = common.None;
      this.killable.kill();
    }
  };
  TagSource$Counted$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: []
  };
  function TagSource$Counted$get$lambda(this$Counted) {
    return function () {
      var k = new Killables();
      var $receiver = new TagSource$Counted$Holder(this$Counted, this$Counted.create_0(k), k);
      this$Counted.current_0 = new Some($receiver);
      return $receiver;
    };
  }
  function TagSource$Counted$get$lambda$lambda(closure$holder) {
    return function () {
      closure$holder.release();
      return Unit;
    };
  }
  TagSource$Counted.prototype.get_di35k5$ = function (ks) {
    var holder = this.current_0.getOrElse_skz6lt$(TagSource$Counted$get$lambda(this));
    holder.count = holder.count + 1 | 0;
    ks.plusAssign_wii6vi$(Killable.Companion.once_o14v8n$(TagSource$Counted$get$lambda$lambda(holder)));
    return holder.value;
  };
  TagSource$Counted.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Counted',
    interfaces: []
  };
  function TagSource_init$lambda(this$TagSource) {
    return function (f, t) {
      this$TagSource.tagv_0(t.props.idOrFail).now = t;
      return Unit;
    };
  }
  function TagSource_init$lambda_0(this$TagSource) {
    return function (f, t) {
      var $receiver = this$TagSource.map_0;
      var key = t.props.idOrFail;
      $receiver.remove_11rb$(key);
      return Unit;
    };
  }
  function TagSource_init$lambda_1() {
    return new Tag();
  }
  function TagSource$tagSet$lambda$lambda$lambda(closure$diff) {
    return function (s) {
      return plus_0(minus_0(s, closure$diff.removed), closure$diff.added);
    };
  }
  function TagSource$tagSet$lambda$lambda(closure$rxv) {
    return function (diff) {
      closure$rxv.transform_ru8m0w$(TagSource$tagSet$lambda$lambda$lambda(diff));
      return Unit;
    };
  }
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  function TagSource$tagSet$lambda(this$TagSource) {
    return function (ks) {
      var tmp$;
      var rxv = new Var(emptySet());
      ks.plusAssign_wii6vi$(this$TagSource.listen_okrql5$(TagSource$tagSet$lambda$lambda(rxv)));
      return Kotlin.isType(tmp$ = rxv, RxIface) ? tmp$ : throwCCE();
    };
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function TagSource$tagNameSet$lambda$lambda$lambda(closure$ts) {
    return function () {
      var $receiver = closure$ts.invoke();
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(orEmpty(item.name.initial.invoke()));
      }
      return toSet(destination);
    };
  }
  function TagSource$tagNameSet$lambda(this$TagSource) {
    return function (ks) {
      var $receiver = Rx_init(TagSource$tagNameSet$lambda$lambda$lambda(this$TagSource.tagSet.get_di35k5$(ks)));
      ks.plusAssign_wii6vi$($receiver);
      return $receiver;
    };
  }
  TagSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagSource',
    interfaces: [Killable]
  };
  function viewTag$lambda$lambda($receiver) {
    get_flexColumn($receiver);
    get_scrollVertical($receiver);
    return Unit;
  }
  function viewTag$lambda$lambda$lambda($receiver) {
    get_p1($receiver);
    return Unit;
  }
  function viewTag$lambda$lambda$lambda$lambda($receiver) {
    get_m1($receiver);
    return Unit;
  }
  function viewTag$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.innerText = 'Name';
    return Unit;
  }
  function viewTag$lambda$lambda$lambda$lambda$lambda(closure$item) {
    return function () {
      return closure$item.name.initial.invoke();
    };
  }
  function viewTag$lambda$lambda$lambda$lambda_1(closure$vks, closure$item) {
    return function ($receiver) {
      closure$vks.plusAssign_wii6vi$(rxTextOrEmpty($receiver, viewTag$lambda$lambda$lambda$lambda$lambda(closure$item)));
      return Unit;
    };
  }
  function viewTag$lambda$lambda$lambda_0(closure$vks, closure$item) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(viewTag$lambda$lambda$lambda$lambda);
      invoke(get_dt($receiver), viewTag$lambda$lambda$lambda$lambda_0);
      invoke(get_dd($receiver), viewTag$lambda$lambda$lambda$lambda_1(closure$vks, closure$item));
      return Unit;
    };
  }
  function viewTag$lambda$lambda_0(closure$vks, closure$item) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(viewTag$lambda$lambda$lambda);
      invoke(get_dl($receiver), viewTag$lambda$lambda$lambda_0(closure$vks, closure$item));
      return Unit;
    };
  }
  function viewTag$lambda($receiver, vks, item) {
    get_cls($receiver).invoke_cr52h1$(viewTag$lambda$lambda);
    invoke(get_div($receiver), viewTag$lambda$lambda_0(vks, item));
    return Unit;
  }
  function viewTag($receiver, killables, panel, tag, close) {
    build_1(new ViewScreenConfig('Tag', getCallableRef('editTag', function ($receiver, killables, panel, tag, close) {
      return editTag($receiver, killables, panel, tag, close), Unit;
    }.bind(null, $receiver)), viewTag$lambda), killables, panel, tag, close);
  }
  function editTask$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_dFlex($receiver);
    get_flexColumn($receiver);
    return Unit;
  }
  function editTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    flexFixedSize($receiver);
    get_m1($receiver);
    get_formControl($receiver);
    get_widthAuto($receiver);
    return Unit;
  }
  function editTask$lambda$lambda$lambda$lambda$lambda$lambda(closure$labelFor, closure$eks, closure$item) {
    return function ($receiver) {
      closure$labelFor($receiver);
      get_cls($receiver).invoke_cr52h1$(editTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      $receiver.type = 'text';
      closure$eks.plusAssign_wii6vi$(textProp($receiver, closure$item.title));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda_0(closure$eks, closure$item) {
    return function ($receiver, labelFor) {
      invoke(get_input($receiver), editTask$lambda$lambda$lambda$lambda$lambda$lambda(labelFor, closure$eks, closure$item));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    flexFixedSize($receiver);
    get_m1($receiver);
    get_formControl($receiver);
    get_widthAuto($receiver);
    return Unit;
  }
  function editTask$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$lf, closure$eks, closure$item) {
    return function ($receiver) {
      closure$lf($receiver);
      get_cls($receiver).invoke_cr52h1$(editTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      $receiver.rows = 5;
      closure$eks.plusAssign_wii6vi$(textProp_0($receiver, closure$item.text));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda_1(closure$eks, closure$item) {
    return function ($receiver, lf) {
      invoke(get_textarea($receiver), editTask$lambda$lambda$lambda$lambda$lambda$lambda_0(lf, closure$eks, closure$item));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    get_m1($receiver);
    get_customSelect($receiver);
    get_widthAuto($receiver);
    return Unit;
  }
  var get_option_0 = $module$appsimake_commonfb.$$importsForInline$$['appsimake-domx'].domx.get_option_asww5s$;
  var wrapFunction = Kotlin.wrapFunction;
  var invoke_1 = $module$appsimake_commonfb.$$importsForInline$$['appsimake-domx'].domx.invoke_inodcj$;
  var orEmpty_1 = $module$appsimake_commonfb.$$importsForInline$$['appsimake-commonshr'].common.orEmpty_rw3ye5$;
  var common_0 = $module$appsimake_commonfb.$$importsForInline$$['appsimake-commonshr'].common;
  var Some_init = $module$appsimake_commonfb.$$importsForInline$$['appsimake-commonshr'].common.Some;
  var changeEvent_0 = $module$appsimake_commonfb.$$importsForInline$$['appsimake-domx'].domx.changeEvent_e6qnhl$;
  var validProp = $module$appsimake_commonfb.commonfb.validProp_zh45ff$;
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
        tmp$.now = $receiver == null || isBlank($receiver) ? common_0.None : new Some_init(typeClosure$E.valueOf_61zpoe$(this$enumProp.value));
        return Unit;
      };
    };
  });
  function editTask$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$lf, closure$eks, closure$item) {
    return function ($receiver) {
      closure$lf($receiver);
      get_cls($receiver).invoke_cr52h1$(editTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      var tmp$ = closure$eks;
      var prop = closure$item.status;
      invoke_1(get_option_0($receiver), enumProp$lambda);
      var $receiver_0 = TaskStatus.values();
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var element = $receiver_0[tmp$_0];
        invoke_1(get_option_0($receiver), enumProp$lambda$lambda(element));
      }
      $receiver.value = orEmpty_1(prop.current.now.map_2o04qz$(enumProp$lambda_0));
      changeEvent_0($receiver, enumProp$lambda_1($receiver, TaskStatus, Kotlin.isInstanceOf(TaskStatus), prop));
      tmp$.plusAssign_wii6vi$(validProp($receiver, prop));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda_2(closure$eks, closure$item) {
    return function ($receiver, lf) {
      invoke(get_select($receiver), editTask$lambda$lambda$lambda$lambda$lambda$lambda_1(lf, closure$eks, closure$item));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda(closure$eks, closure$item) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(editTask$lambda$lambda$lambda$lambda$lambda);
      formGroup($receiver, 'Title', editTask$lambda$lambda$lambda$lambda$lambda_0(closure$eks, closure$item));
      formGroup($receiver, 'Text', editTask$lambda$lambda$lambda$lambda$lambda_1(closure$eks, closure$item));
      formGroup($receiver, 'Status', editTask$lambda$lambda$lambda$lambda$lambda_2(closure$eks, closure$item));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda(closure$eks, closure$item) {
    return function ($receiver) {
      get_flexGrow1(get_cls($receiver));
      scrollForm($receiver, editTask$lambda$lambda$lambda$lambda(closure$eks, closure$item));
      return Unit;
    };
  }
  function editTask$lambda$lambda(closure$eks, closure$item) {
    return function (it) {
      return invoke(get_div(document), editTask$lambda$lambda$lambda(closure$eks, closure$item));
    };
  }
  function editTask$lambda$lambda_0(closure$item, this$editTask) {
    return function (ks) {
      return tagsEditor(this$editTask, closure$item, ks);
    };
  }
  function editTask$lambda$lambda_1(it) {
    return get_div(document);
  }
  function editTask$lambda(this$editTask) {
    return function (item, eks) {
      return tabsConfig(eks, listOf([new TabConfig(get_list(Fa.Companion), editTask$lambda$lambda(eks, item)), new TabConfig(get_tags(Fa.Companion), editTask$lambda$lambda_0(item, this$editTask)), new TabConfig(get_comments(Fa.Companion), editTask$lambda$lambda_1)]));
    };
  }
  function editTask($receiver, killables, panel, task, close) {
    build(new EditScreenConfig('Task', editTask$lambda($receiver)), killables, panel, task, close, $receiver.userTasks, $receiver.db);
  }
  function StatusFilter() {
    StatusFilter$Companion_getInstance();
  }
  function StatusFilter$All() {
    StatusFilter$All_instance = this;
    StatusFilter.call(this);
    this.key_2fnpbg$_0 = 'all';
    this.label_3mi8uh$_0 = 'All';
  }
  Object.defineProperty(StatusFilter$All.prototype, 'key', {
    get: function () {
      return this.key_2fnpbg$_0;
    }
  });
  Object.defineProperty(StatusFilter$All.prototype, 'label', {
    get: function () {
      return this.label_3mi8uh$_0;
    }
  });
  StatusFilter$All.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'All',
    interfaces: [StatusFilter]
  };
  var StatusFilter$All_instance = null;
  function StatusFilter$All_getInstance() {
    if (StatusFilter$All_instance === null) {
      new StatusFilter$All();
    }
    return StatusFilter$All_instance;
  }
  function StatusFilter$Single(status) {
    StatusFilter$Single$Companion_getInstance();
    StatusFilter.call(this);
    this.status = status;
    this.label_jtpn4o$_0 = this.status.name;
    this.key_n9f6l9$_0 = this.status.name;
  }
  Object.defineProperty(StatusFilter$Single.prototype, 'label', {
    get: function () {
      return this.label_jtpn4o$_0;
    }
  });
  Object.defineProperty(StatusFilter$Single.prototype, 'key', {
    get: function () {
      return this.key_n9f6l9$_0;
    }
  });
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  function StatusFilter$Single$Companion() {
    StatusFilter$Single$Companion_instance = this;
    var $receiver = TaskStatus$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(new StatusFilter$Single(item));
    }
    this.values = destination;
    var $receiver_0 = this.values;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_0, 10)), 16);
    var destination_0 = LinkedHashMap_init_0(capacity);
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      destination_0.put_xwzc9p$(element.status, element);
    }
    this.byEnum = destination_0;
  }
  StatusFilter$Single$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StatusFilter$Single$Companion_instance = null;
  function StatusFilter$Single$Companion_getInstance() {
    if (StatusFilter$Single$Companion_instance === null) {
      new StatusFilter$Single$Companion();
    }
    return StatusFilter$Single$Companion_instance;
  }
  StatusFilter$Single.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Single',
    interfaces: [StatusFilter]
  };
  StatusFilter$Single.prototype.component1 = function () {
    return this.status;
  };
  StatusFilter$Single.prototype.copy_496xhq$ = function (status) {
    return new StatusFilter$Single(status === void 0 ? this.status : status);
  };
  StatusFilter$Single.prototype.toString = function () {
    return 'Single(status=' + Kotlin.toString(this.status) + ')';
  };
  StatusFilter$Single.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    return result;
  };
  StatusFilter$Single.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.status, other.status))));
  };
  function StatusFilter$Completed(value) {
    StatusFilter$Completed$Companion_getInstance();
    StatusFilter.call(this);
    this.value = value;
    var list = getValue(TaskStatus.Companion.byCompleted, this.value);
    this.label_b1zl0z$_0 = (this.value ? 'Finished' : 'Not Finished') + ' (' + joinToString(list, ', ', void 0, void 0, void 0, void 0, StatusFilter$Completed$label$lambda$lambda) + ')';
    this.key_j1zsu$_0 = this.value.toString();
  }
  Object.defineProperty(StatusFilter$Completed.prototype, 'label', {
    get: function () {
      return this.label_b1zl0z$_0;
    }
  });
  Object.defineProperty(StatusFilter$Completed.prototype, 'key', {
    get: function () {
      return this.key_j1zsu$_0;
    }
  });
  function StatusFilter$Completed$Companion() {
    StatusFilter$Completed$Companion_instance = this;
    var $receiver = sorted(TaskStatus.Companion.byCompleted.keys);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new StatusFilter$Completed(item));
    }
    this.values = destination;
    var $receiver_0 = this.values;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_0, 10)), 16);
    var destination_0 = LinkedHashMap_init_0(capacity);
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      destination_0.put_xwzc9p$(element.value, element);
    }
    this.byValue = destination_0;
  }
  StatusFilter$Completed$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StatusFilter$Completed$Companion_instance = null;
  function StatusFilter$Completed$Companion_getInstance() {
    if (StatusFilter$Completed$Companion_instance === null) {
      new StatusFilter$Completed$Companion();
    }
    return StatusFilter$Completed$Companion_instance;
  }
  function StatusFilter$Completed$label$lambda$lambda(s) {
    return s.name;
  }
  StatusFilter$Completed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Completed',
    interfaces: [StatusFilter]
  };
  StatusFilter$Completed.prototype.component1 = function () {
    return this.value;
  };
  StatusFilter$Completed.prototype.copy_6taknv$ = function (value) {
    return new StatusFilter$Completed(value === void 0 ? this.value : value);
  };
  StatusFilter$Completed.prototype.toString = function () {
    return 'Completed(value=' + Kotlin.toString(this.value) + ')';
  };
  StatusFilter$Completed.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  StatusFilter$Completed.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function StatusFilter$Companion() {
    StatusFilter$Companion_instance = this;
    this.values = flatten(listOf([listOf_0(StatusFilter$All_getInstance()), StatusFilter$Single$Companion_getInstance().values, StatusFilter$Completed$Companion_getInstance().values]));
    var $receiver = this.values;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      destination.put_xwzc9p$(element.key, element);
    }
    this.byKey = destination;
  }
  StatusFilter$Companion.prototype.valueOf_61zpoe$ = function (key) {
    return getValue(this.byKey, key);
  };
  StatusFilter$Companion.prototype.completedOf_6taknv$ = function (v) {
    return getValue(StatusFilter$Completed$Companion_getInstance().byValue, v);
  };
  StatusFilter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StatusFilter$Companion_instance = null;
  function StatusFilter$Companion_getInstance() {
    if (StatusFilter$Companion_instance === null) {
      new StatusFilter$Companion();
    }
    return StatusFilter$Companion_instance;
  }
  StatusFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StatusFilter',
    interfaces: []
  };
  function FilterValues(status, tags) {
    this.status = status;
    this.tags = tags;
  }
  FilterValues.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterValues',
    interfaces: []
  };
  FilterValues.prototype.component1 = function () {
    return this.status;
  };
  FilterValues.prototype.component2 = function () {
    return this.tags;
  };
  FilterValues.prototype.copy_80ws9d$ = function (status, tags) {
    return new FilterValues(status === void 0 ? this.status : status, tags === void 0 ? this.tags : tags);
  };
  FilterValues.prototype.toString = function () {
    return 'FilterValues(status=' + Kotlin.toString(this.status) + (', tags=' + Kotlin.toString(this.tags)) + ')';
  };
  FilterValues.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    result = result * 31 + Kotlin.hashCode(this.tags) | 0;
    return result;
  };
  FilterValues.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.status, other.status) && Kotlin.equals(this.tags, other.tags)))));
  };
  function setup($receiver, fv) {
    var tmp$;
    tmp$ = fv.status;
    if (Kotlin.isType(tmp$, StatusFilter$Single))
      $receiver.eq_5h2n3e$(Task.Companion.status, fv.status.status);
    else if (Kotlin.isType(tmp$, StatusFilter$Completed))
      $receiver.eq_5h2n3e$(Task.Companion.completed, fv.status.value);
    if (!fv.tags.isEmpty()) {
      if (fv.tags.size === 1) {
        $receiver.arrayContains_1h0ukf$(Task.Companion.tags, first_0(fv.tags));
      }
       else {
        $receiver.arrayContains_1h0ukf$(Task.Companion.tagsx, get_multiTags(fv.tags));
      }
    }
  }
  function listTasks$lambda() {
    return new Task();
  }
  function listTasks$lambda_0(it) {
    return orEmpty(it.title.initial.invoke());
  }
  function listTasks$lambda$lambda(closure$status, closure$tags) {
    return function () {
      return new FilterValues(closure$status.invoke(), closure$tags.invoke());
    };
  }
  function listTasks$lambda$lambda$lambda(closure$filterValue) {
    return function ($receiver) {
      setup($receiver, closure$filterValue.invoke());
      $receiver.asc_tixzdw$(Task.Companion.title);
      return Unit;
    };
  }
  function listTasks$lambda$lambda_0(this$listTasks, closure$filterValue) {
    return function () {
      return query(this$listTasks.userTasks, this$listTasks.db, listTasks$lambda$lambda$lambda(closure$filterValue));
    };
  }
  function listTasks$lambda$lambda$lambda_0($receiver) {
    get_p2($receiver);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda($receiver) {
    get_border($receiver);
    get_rounded($receiver);
    get_bgLight($receiver);
    get_dGrid($receiver);
    get_alignContentCenter($receiver);
    get_justifyContentCenter($receiver);
    get_alignItemsCenter($receiver);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_m1($receiver);
    get_justifySelfEnd($receiver);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda_0($receiver) {
    get_cls($receiver).invoke_cr52h1$(listTasks$lambda$lambda$lambda$lambda$lambda);
    $receiver.innerText = 'Status';
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    get_m1($receiver);
    get_justifySelfStart($receiver);
    get_customSelect($receiver);
    get_widthAuto($receiver);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.value = closure$it.key;
      $receiver.innerText = closure$it.label;
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda_1(this$, closure$status) {
    return function (it) {
      closure$status.now = StatusFilter$Companion_getInstance().valueOf_61zpoe$(this$.value);
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda_1(closure$status) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(listTasks$lambda$lambda$lambda$lambda$lambda_0);
      var tmp$;
      tmp$ = StatusFilter$Companion_getInstance().values.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        invoke(get_option($receiver), listTasks$lambda$lambda$lambda$lambda$lambda$lambda(element));
      }
      changeEvent($receiver, listTasks$lambda$lambda$lambda$lambda$lambda_1($receiver, closure$status));
      $receiver.value = closure$status.now.key;
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    get_m1($receiver);
    get_justifySelfEnd($receiver);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda_2($receiver) {
    get_cls($receiver).invoke_cr52h1$(listTasks$lambda$lambda$lambda$lambda$lambda_2);
    $receiver.innerText = 'Tags';
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    get_m1($receiver);
    get_justifySelfStart($receiver);
    get_dFlex($receiver);
    get_flexRow($receiver);
    get_alignItemsCenter($receiver);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_dFlex($receiver);
    get_flexWrap($receiver);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$tagId) {
    return function (s) {
      return minus_1(s, closure$tagId);
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$tags, closure$tagId) {
    return function (it) {
      closure$tags.transform_ru8m0w$(listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$tagId));
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$tks, closure$tagId, this$listTasks, closure$tags) {
    return function ($receiver) {
      tagBadge($receiver, closure$tks, closure$tagId, this$listTasks.tagSource);
      $receiver.href = '#';
      clickEvent($receiver, listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$tags, closure$tagId));
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$tgs, closure$tks, this$listTasks, closure$tags) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      var $receiver_0 = closure$tgs;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$tks_0 = closure$tks;
        var this$listTasks_0 = this$listTasks;
        var closure$tags_0 = closure$tags;
        invoke(get_a($receiver), listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$tks_0, element, this$listTasks_0, closure$tags_0));
      }
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$lks, this$listTasks, closure$tags, closure$tagsRoot) {
    return function (old, tgs) {
      old.kill();
      var tks = closure$lks.killables();
      var $receiver = invoke(get_div(document), listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda(tgs, tks, this$listTasks, closure$tags));
      closure$tagsRoot.setRoot_b3w3xb$($receiver);
      return tks;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda_4(closure$tags, closure$lks, this$listTasks) {
    return function ($receiver) {
      var tagsRoot = new RootPanel($receiver);
      closure$tags.fold_b8xf17$(Killable.Companion.empty, listTasks$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$lks, this$listTasks, closure$tags, tagsRoot));
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    get_ml1($receiver);
    get_p1($receiver);
    get_btn($receiver);
    get_btnPrimary($receiver);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    get_fw($receiver);
    get_ellipsisH($receiver);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    invoke_0(get_fa($receiver), listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    get_cls($receiver).invoke_cr52h1$(listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$tgs, closure$tags, closure$close) {
    return function (submit) {
      if (submit) {
        closure$tags.now = sorted(closure$tgs.now);
      }
      closure$close();
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$tags, this$listTasks) {
    return function (pks, close) {
      var tgs = new Var(toSet(closure$tags.now));
      selectTags(this$listTasks, pks, this$listTasks.root.sub(), tgs, listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(tgs, closure$tags, close));
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$tags, this$listTasks, closure$redisplay) {
    return function (ks, f) {
      showClosable(ks, listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$tags, this$listTasks), closure$redisplay);
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda_5(closure$lks, closure$tags, this$listTasks, closure$redisplay) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(listTasks$lambda$lambda$lambda$lambda$lambda$lambda_1);
      invoke(get_span($receiver), listTasks$lambda$lambda$lambda$lambda$lambda$lambda_2);
      closure$lks.plusAssign_wii6vi$(clickEventSeq($receiver, listTasks$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$tags, this$listTasks, closure$redisplay)));
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda_3(closure$tags, closure$lks, this$listTasks, closure$redisplay) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(listTasks$lambda$lambda$lambda$lambda$lambda_3);
      invoke(get_div($receiver), listTasks$lambda$lambda$lambda$lambda$lambda_4(closure$tags, closure$lks, this$listTasks));
      invoke(get_button($receiver), listTasks$lambda$lambda$lambda$lambda$lambda_5(closure$lks, closure$tags, this$listTasks, closure$redisplay));
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda_1(closure$status, closure$tags, closure$lks, this$listTasks, closure$redisplay) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(listTasks$lambda$lambda$lambda$lambda);
      $receiver.style.cssText = trimIndent('\n                        grid-template-columns: auto auto;\n                    ');
      invoke(get_div($receiver), listTasks$lambda$lambda$lambda$lambda_0);
      invoke(get_select($receiver), listTasks$lambda$lambda$lambda$lambda_1(closure$status));
      invoke(get_div($receiver), listTasks$lambda$lambda$lambda$lambda_2);
      invoke(get_div($receiver), listTasks$lambda$lambda$lambda$lambda_3(closure$tags, closure$lks, this$listTasks, closure$redisplay));
      return Unit;
    };
  }
  function listTasks$lambda$lambda_1(closure$status, closure$tags, closure$lks, this$listTasks, closure$redisplay) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(listTasks$lambda$lambda$lambda_0);
      invoke(get_div($receiver), listTasks$lambda$lambda$lambda_1(closure$status, closure$tags, closure$lks, this$listTasks, closure$redisplay));
      return Unit;
    };
  }
  function listTasks$lambda_1(this$listTasks) {
    return function (lks, redisplay) {
      var status = new Var(StatusFilter$Companion_getInstance().completedOf_6taknv$(false));
      var tags = new Var(emptyList());
      var filterValue = Rx_init(listTasks$lambda$lambda(status, tags));
      var query = Rx_init(listTasks$lambda$lambda_0(this$listTasks, filterValue));
      return new FilterConfig(query, void 0, listTasks$lambda$lambda_1(status, tags, lks, this$listTasks, redisplay));
    };
  }
  function listTasks($receiver, killables, panel, after) {
    build_0(new ListScreenConfig('Task List', listTasks$lambda, $receiver.userTasks, getCallableRef('viewTask', function ($receiver, killables, panel, task, close) {
      return viewTask($receiver, killables, panel, task, close), Unit;
    }.bind(null, $receiver)), getCallableRef('editTask', function ($receiver, killables, panel, task, close) {
      return editTask($receiver, killables, panel, task, close), Unit;
    }.bind(null, $receiver)), listTasks$lambda_0, listTasks$lambda_1($receiver)), killables, panel, $receiver.db, after);
  }
  function main$lambda$lambda(closure$tm_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda(closure$tm_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda(closure$tm_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$tm = closure$tm_0;
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
            this.result_0 = await_0(this.local$closure$tm.fbCtx.db.enablePersistence(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$tm.start(), Unit;
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
  function main(args) {
    var tm = new TasksMain();
    launch(coroutines.GlobalScope, void 0, void 0, main$lambda$lambda(tm));
  }
  function TasksMain() {
    LoggingInCtx_init(taskslib.tasks, 'Tasks', this);
    this.appCtx.registerServiceWorker();
  }
  TasksMain.prototype.loggedIn_v1eir6$ = function (user) {
    return (new LoggedIn(this, user)).main();
  };
  TasksMain.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TasksMain',
    interfaces: [LoggingInCtx]
  };
  function LoggedIn(base, user) {
    this.base = base;
    this.user = user;
    this.$delegate_jgd70n$_0 = base.fbCtx;
    this.loggedInCtx = new LoggedInCtx(this.base.fbCtx, this.user);
    this.fbCtx = this.loggedInCtx.fbCtx;
    this.root = this.base.appCtx.root;
    this.userPrivate = get_private(taskslib.tasks.app).doc_61zpoe$(this.user.uid);
    this.userTasks = get_tasks(this.userPrivate);
    this.userTags = get_usertags(this.userPrivate);
    this.userTasksRef = this.get_ref_lg3h4r$(this.userTasks);
    this.killables = new Killables();
    var $receiver = new TagSource(this.userTags, this.db);
    this.killables.plusAssign_wii6vi$($receiver);
    this.tagSource = $receiver;
  }
  function LoggedIn$main$lambda$showHome(closure$homeActive, this$LoggedIn, this$) {
    return function () {
      closure$homeActive.now = true;
      this$LoggedIn.root.setRoot_b3w3xb$(this$);
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda(this$LoggedIn) {
    return function ($receiver) {
      $receiver.innerText = this$LoggedIn.loggedInCtx.appCtx.title;
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_m1($receiver);
    get_btnGroup($receiver);
    return Unit;
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$LoggedIn) {
    return function (pks, close) {
      editTask(this$LoggedIn, pks, this$LoggedIn.root.sub(), new Task(), close);
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$LoggedIn, closure$showHome) {
    return function (ks, f) {
      showClosable(ks, LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$LoggedIn), getCallableRef('showHome', function () {
        return closure$showHome(), Unit;
      }));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda_0(this$LoggedIn, closure$showHome) {
    return function ($receiver) {
      get_btnPrimary(get_cls($receiver));
      this$LoggedIn.killables.plusAssign_wii6vi$(clickEventSeq($receiver, LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$LoggedIn, closure$showHome)));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$LoggedIn) {
    return function (pks, close) {
      listTasks(this$LoggedIn, pks, this$LoggedIn.root.sub(), close);
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$homeActive, this$LoggedIn, closure$showHome) {
    return function (ks, f) {
      closure$homeActive.now = false;
      showClosable(ks, LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$LoggedIn), getCallableRef('showHome', function () {
        return closure$showHome(), Unit;
      }));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda_1(this$LoggedIn, closure$homeActive, closure$showHome) {
    return function ($receiver) {
      get_btnPrimary(get_cls($receiver));
      this$LoggedIn.killables.plusAssign_wii6vi$(clickEventSeq($receiver, LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$homeActive, this$LoggedIn, closure$showHome)));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$LoggedIn) {
    return function (pks, c) {
      listTags(this$LoggedIn, pks, this$LoggedIn.root.sub(), c);
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$LoggedIn, closure$showHome) {
    return function (ks, f) {
      showClosable(ks, LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$LoggedIn), getCallableRef('showHome', function () {
        return closure$showHome(), Unit;
      }));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$LoggedIn, closure$showHome) {
    return function ($receiver) {
      get_tags(get_fa(get_cls($receiver.icon)));
      $receiver.text.innerText = 'Tags';
      this$LoggedIn.killables.plusAssign_wii6vi$(clickEventSeq($receiver.anchor, LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$LoggedIn, closure$showHome)));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$LoggedIn, closure$showHome) {
    return function ($receiver) {
      get_dropdownMenuRight(get_cls($receiver));
      dropdownItemAnchor($receiver, LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$LoggedIn, closure$showHome));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda_2(this$LoggedIn, closure$showHome) {
    return function ($receiver) {
      invoke($receiver.menu, LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$LoggedIn, closure$showHome));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda(this$LoggedIn, closure$showHome, closure$homeActive) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda);
      faButton($receiver, get_plus(Fa.Companion), LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda_0(this$LoggedIn, closure$showHome));
      faButton($receiver, get_search(Fa.Companion), LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda_1(this$LoggedIn, closure$homeActive, closure$showHome));
      dropdownGroup($receiver, get_btnPrimary(Cls.Companion), LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda_2(this$LoggedIn, closure$showHome));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda_0(this$LoggedIn, closure$showHome, closure$homeActive) {
    return function ($receiver) {
      invoke(get_div($receiver), LoggedIn$main$lambda$lambda$lambda$lambda$lambda(this$LoggedIn, closure$showHome, closure$homeActive));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda(this$LoggedIn, closure$showHome, closure$homeActive) {
    return function ($receiver) {
      $receiver.middleTitle_9f50g3$(LoggedIn$main$lambda$lambda$lambda$lambda(this$LoggedIn));
      $receiver.right.invoke_gk6m2q$(LoggedIn$main$lambda$lambda$lambda$lambda_0(this$LoggedIn, closure$showHome, closure$homeActive));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda_1($receiver) {
    get_flexColumn($receiver);
    get_scrollVertical($receiver);
    return Unit;
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    get_p2($receiver);
    return Unit;
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    get_cardHeader(get_cls($receiver));
    $receiver.innerText = 'Recent';
    return Unit;
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$showHome, closure$root, closure$recentSeq, this$LoggedIn) {
    return function (ha) {
      if (ha) {
        recent(this$LoggedIn, getCallableRef('showHome', function () {
          return closure$showHome(), Unit;
        }), closure$root, closure$recentSeq.killables());
      }
       else {
        closure$recentSeq.clear();
      }
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda_1(this$LoggedIn, closure$homeActive, closure$showHome) {
    return function ($receiver) {
      get_card(get_cls($receiver));
      invoke(get_div($receiver), LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda_3);
      var root = new RootPanel($receiver);
      var recentSeq = this$LoggedIn.killables.seq();
      closure$homeActive.forEach_qlkmfe$(LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$showHome, root, recentSeq, this$LoggedIn));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda_2(this$LoggedIn, closure$homeActive, closure$showHome) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(LoggedIn$main$lambda$lambda$lambda$lambda$lambda_0);
      invoke(get_div($receiver), LoggedIn$main$lambda$lambda$lambda$lambda$lambda_1(this$LoggedIn, closure$homeActive, closure$showHome));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda_0(this$LoggedIn, closure$homeActive, closure$showHome) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(LoggedIn$main$lambda$lambda$lambda$lambda_1);
      invoke(get_div($receiver), LoggedIn$main$lambda$lambda$lambda$lambda_2(this$LoggedIn, closure$homeActive, closure$showHome));
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda(this$LoggedIn, closure$showHome, closure$homeActive) {
    return function ($receiver) {
      $receiver.top_vesf63$(LoggedIn$main$lambda$lambda$lambda(this$LoggedIn, closure$showHome, closure$homeActive));
      $receiver.main_iw61es$(LoggedIn$main$lambda$lambda$lambda_0(this$LoggedIn, closure$homeActive, closure$showHome));
      return Unit;
    };
  }
  function LoggedIn$main$lambda(this$LoggedIn) {
    return function ($receiver) {
      var homeActive = new Var(true);
      var showHome = LoggedIn$main$lambda$showHome(homeActive, this$LoggedIn, $receiver);
      screenLayout($receiver, this$LoggedIn.killables, LoggedIn$main$lambda$lambda(this$LoggedIn, showHome, homeActive));
      return Unit;
    };
  }
  function LoggedIn$main$lambda_0(this$LoggedIn) {
    return function () {
      this$LoggedIn.killables.kill();
      this$LoggedIn.loggedInCtx.killables.kill();
      return Unit;
    };
  }
  LoggedIn.prototype.main = function () {
    this.root.newRoot_iw61es$(LoggedIn$main$lambda(this));
    return LoggedIn$main$lambda_0(this);
  };
  Object.defineProperty(LoggedIn.prototype, 'db', {
    get: function () {
      return this.$delegate_jgd70n$_0.db;
    }
  });
  LoggedIn.prototype.get_ref_lg3h4r$ = function ($receiver) {
    return this.$delegate_jgd70n$_0.get_ref_lg3h4r$($receiver);
  };
  LoggedIn.prototype.get_ref_t13jsb$ = function ($receiver) {
    return this.$delegate_jgd70n$_0.get_ref_t13jsb$($receiver);
  };
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [HasDB]
  };
  function recent$lambda(this$recent) {
    return function (ks, dit, close) {
      keepAlive(dit, ks, this$recent.userTasks, this$recent.db);
      viewTask(this$recent, ks, this$recent.root.sub(), dit, close);
      return Unit;
    };
  }
  function recent$lambda$lambda($receiver) {
    $receiver.eq_5h2n3e$(Task.Companion.completed, false);
    $receiver.desc_tixzdw$(Task.Companion.ts);
    return Unit;
  }
  function recent$lambda$lambda_0() {
    return new Task();
  }
  function recent$lambda$lambda_1($receiver) {
    get_cardBody(get_cls($receiver));
    return Unit;
  }
  function recent$lambda$lambda_2($receiver) {
    get_cardBody(get_cls($receiver));
    return Unit;
  }
  function recent$lambda$lambda_3($receiver) {
    return Unit;
  }
  function recent$lambda$lambda_4($receiver) {
    get_listGroupFlush(get_cls($receiver));
    return Unit;
  }
  function recent$lambda$lambda_5(it) {
    return orEmpty(it.title.initial.invoke());
  }
  function recent$lambda_0(closure$panel, this$recent) {
    return function (onClick) {
      return new ListUIConfig(closure$panel, new Var(query(this$recent.userTasks, this$recent.db, recent$lambda$lambda)), recent$lambda$lambda_0, recent$lambda$lambda_1, recent$lambda$lambda_2, recent$lambda$lambda_3, recent$lambda$lambda_4, stringListClick(recent$lambda$lambda_5, onClick));
    };
  }
  function recent($receiver, redisplay, panel, killables) {
    showClosableList(killables, redisplay, recent$lambda($receiver), recent$lambda_0(panel, $receiver));
  }
  function viewTask$lambda$lambda$lambda($receiver) {
    get_dFlex($receiver);
    get_flexColumn($receiver);
    return Unit;
  }
  function viewTask$lambda$lambda$lambda_0(closure$item) {
    return function () {
      return closure$item.title.initial.invoke();
    };
  }
  function viewTask$lambda$lambda$lambda_1(closure$item) {
    return function () {
      return closure$item.text.initial.invoke();
    };
  }
  function viewTask$lambda$lambda$lambda$lambda(it) {
    return it.name;
  }
  function viewTask$lambda$lambda$lambda_2(closure$item) {
    return function () {
      return closure$item.status.initial.invoke().map_2o04qz$(viewTask$lambda$lambda$lambda$lambda);
    };
  }
  function viewTask$lambda$lambda$lambda$lambda_0(closure$list) {
    return function (diff) {
      var $receiver = diff.removed;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        closure$list.remove_11rb$(element);
      }
      var $receiver_0 = diff.added;
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        closure$list.add_11rb$(element_0);
      }
      return Unit;
    };
  }
  function viewTask$lambda$lambda$lambda$lambda$lambda(closure$ks, closure$id, this$viewTask) {
    return function ($receiver) {
      tagBadge($receiver, closure$ks, closure$id, this$viewTask.tagSource);
      return Unit;
    };
  }
  function viewTask$lambda$lambda$lambda$lambda_1(this$, this$viewTask) {
    return function (id, ks) {
      return invoke(get_span(this$), viewTask$lambda$lambda$lambda$lambda$lambda(ks, id, this$viewTask));
    };
  }
  function viewTask$lambda$lambda$lambda_3(closure$item, closure$vks, this$viewTask) {
    return function ($receiver) {
      var list = new ListenableMutableList();
      diffs(closure$item.tags.initial, viewTask$lambda$lambda$lambda$lambda_0(list));
      listenableList($receiver, list, closure$vks, viewTask$lambda$lambda$lambda$lambda_1($receiver, this$viewTask));
      return Unit;
    };
  }
  function viewTask$lambda$lambda(closure$vks, closure$item, this$viewTask) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(viewTask$lambda$lambda$lambda);
      closure$vks.plusAssign_wii6vi$(viewTextField($receiver, 'Title', viewTask$lambda$lambda$lambda_0(closure$item)));
      closure$vks.plusAssign_wii6vi$(viewTextField($receiver, 'Text', viewTask$lambda$lambda$lambda_1(closure$item)));
      closure$vks.plusAssign_wii6vi$(viewTextField($receiver, 'Status', viewTask$lambda$lambda$lambda_2(closure$item)));
      viewFieldLabel($receiver, 'Tags');
      invoke(get_div($receiver), viewTask$lambda$lambda$lambda_3(closure$item, closure$vks, this$viewTask));
      return Unit;
    };
  }
  function viewTask$lambda(this$viewTask) {
    return function ($receiver, vks, item) {
      scrollPanel($receiver, viewTask$lambda$lambda(vks, item, this$viewTask));
      return Unit;
    };
  }
  function viewTask($receiver, killables, panel, task, close) {
    build_1(new ViewScreenConfig('Task', getCallableRef('editTask', function ($receiver, killables, panel, task, close) {
      return editTask($receiver, killables, panel, task, close), Unit;
    }.bind(null, $receiver)), viewTask$lambda($receiver)), killables, panel, task, close);
  }
  function tagBadge$lambda($receiver) {
    get_m1($receiver);
    get_badge($receiver);
    get_badgePill($receiver);
    get_badgeSecondary($receiver);
    get_fontSize100($receiver);
    return Unit;
  }
  function tagBadge$lambda$lambda(closure$tagId) {
    return function () {
      return closure$tagId;
    };
  }
  function tagBadge$lambda_0(closure$tagSource, closure$tagId) {
    return function () {
      return closure$tagSource.tag_61zpoe$(closure$tagId).invoke().name.initial.invoke().getOrElse_skz6lt$(tagBadge$lambda$lambda(closure$tagId));
    };
  }
  function tagBadge($receiver, ks, tagId, tagSource) {
    get_cls($receiver).invoke_cr52h1$(tagBadge$lambda);
    ks.plusAssign_wii6vi$(rxText_0($receiver, tagBadge$lambda_0(tagSource, tagId)));
  }
  var package$tasks = _.tasks || (_.tasks = {});
  package$tasks.editTag_g7i0ru$ = editTag;
  package$tasks.listTags_q5nmo1$ = listTags;
  package$tasks.tagsEditor_l6gkyr$ = tagsEditor;
  package$tasks.selectTags_jz3fwg$ = selectTags;
  package$tasks.tagsSelector_hqtoge$ = tagsSelector;
  TagSource.Counted = TagSource$Counted;
  package$tasks.TagSource = TagSource;
  package$tasks.viewTag_g7i0ru$ = viewTag;
  $$importsForInline$$['appsimake-commonfb'] = $module$appsimake_commonfb;
  package$tasks.editTask_fbq1xr$ = editTask;
  Object.defineProperty(StatusFilter, 'All', {
    get: StatusFilter$All_getInstance
  });
  Object.defineProperty(StatusFilter$Single, 'Companion', {
    get: StatusFilter$Single$Companion_getInstance
  });
  StatusFilter.Single = StatusFilter$Single;
  Object.defineProperty(StatusFilter$Completed, 'Companion', {
    get: StatusFilter$Completed$Companion_getInstance
  });
  StatusFilter.Completed = StatusFilter$Completed;
  Object.defineProperty(StatusFilter, 'Companion', {
    get: StatusFilter$Companion_getInstance
  });
  package$tasks.StatusFilter = StatusFilter;
  package$tasks.FilterValues = FilterValues;
  package$tasks.setup_f0wm0$ = setup;
  package$tasks.listTasks_q5nmo1$ = listTasks;
  package$tasks.main_kand9s$ = main;
  package$tasks.TasksMain = TasksMain;
  package$tasks.LoggedIn = LoggedIn;
  package$tasks.recent_g4tcld$ = recent;
  package$tasks.viewTask_fbq1xr$ = viewTask;
  package$tasks.tagBadge_6okgwr$ = tagBadge;
  main([]);
  Kotlin.defineModule('appsimake-tasks', _);
  return _;
}(typeof this['appsimake-tasks'] === 'undefined' ? {} : this['appsimake-tasks'], kotlin, this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-commonfb'], this['appsimake-taskslib'], this['appsimake-commonshr'], this['appsimake-firebase'], this['appsimake-fontawesome'], this['appsimake-commonui'], this['kotlinx-coroutines-core'], this['appsimake-common'], this['appsimake-commonlib']);

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
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-commonlib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonlib' was not found. Please, check whether 'appsimake-commonlib' is loaded prior to 'appsimake-tasks'.");
}
this['appsimake-tasks'] = function (_, Kotlin, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_commonfb, $module$appsimake_taskslib, $module$appsimake_firebase, $module$appsimake_commonshr, $module$appsimake_fontawesome, $module$kotlinx_coroutines_core, $module$appsimake_common, $module$appsimake_commonui, $module$appsimake_commonlib) {
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
  var build = $module$appsimake_commonfb.commonfb.build_ybnza8$;
  var Tag = $module$appsimake_taskslib.taskslib.Tag;
  var getCallableRef = Kotlin.getCallableRef;
  var query = $module$appsimake_firebase.firebase.firestore.query_vhmfed$;
  var orEmpty = $module$appsimake_commonshr.common.orEmpty_rw3ye5$;
  var ListScreenConfig = $module$appsimake_commonfb.commonfb.ListScreenConfig;
  var build_0 = $module$appsimake_commonfb.commonfb.build_mawxd6$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var get_dFlex = $module$appsimake_bootstrap.bootstrap.get_dFlex_kre7dp$;
  var get_flexColumn = $module$appsimake_bootstrap.bootstrap.get_flexColumn_kre7dp$;
  var Listeners = $module$appsimake_commonshr.common.Listeners;
  var Var = $module$appsimake_commonshr.rx.Var;
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
  var clickEvent = $module$appsimake_domx.domx.clickEvent_bvfv80$;
  var get_span = $module$appsimake_domx.domx.get_span_asww5s$;
  var get_spinnerBorder = $module$appsimake_bootstrap.bootstrap.get_spinnerBorder_kre7dp$;
  var get_spinnerBorderSm = $module$appsimake_bootstrap.bootstrap.get_spinnerBorderSm_kre7dp$;
  var rxDisplayed = $module$appsimake_domx.domx.rxDisplayed_29v9re$;
  var get_plus = $module$appsimake_fontawesome.fontawesome.get_plus_xml72e$;
  var rxDisplayed_0 = $module$appsimake_domx.domx.rxDisplayed_ux9tev$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var add = $module$appsimake_commonshr.rx.add_gcz0w7$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var get_scrollVertical = $module$appsimake_domx.styles.get_scrollVertical_kre7dp$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var orEmpty_0 = $module$appsimake_commonshr.common.orEmpty_r4li7g$;
  var get_flexRow = $module$appsimake_bootstrap.bootstrap.get_flexRow_kre7dp$;
  var get_py1 = $module$appsimake_bootstrap.bootstrap.get_py1_kre7dp$;
  var get_px2 = $module$appsimake_bootstrap.bootstrap.get_px2_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_fw = $module$appsimake_fontawesome.fontawesome.get_fw_xml72e$;
  var Fa = $module$appsimake_fontawesome.fontawesome.Fa;
  var get_check = $module$appsimake_fontawesome.fontawesome.get_check_xml72e$;
  var rxText = $module$appsimake_bootstrap.bootstrap.rxText_btzx6a$;
  var get_btnSecondary = $module$appsimake_bootstrap.bootstrap.get_btnSecondary_kre7dp$;
  var get_minus = $module$appsimake_fontawesome.fontawesome.get_minus_xml72e$;
  var rxClass_0 = $module$appsimake_commonshr.rx.rxClass_z8puye$;
  var remove = $module$appsimake_commonshr.rx.remove_gcz0w7$;
  var listGroupItem = $module$appsimake_bootstrap.bootstrap.listGroupItem_8ixz9m$;
  var MappedListenableListConfig = $module$appsimake_common.common.MappedListenableListConfig;
  var SortedListenableListConfig = $module$appsimake_common.common.SortedListenableListConfig;
  var FilteredListenableListConfig = $module$appsimake_common.common.FilteredListenableListConfig;
  var get_listGroupFlush = $module$appsimake_bootstrap.bootstrap.get_listGroupFlush_kre7dp$;
  var listenableList = $module$appsimake_domx.domx.listenableList_yfrdg0$;
  var listGroup = $module$appsimake_bootstrap.bootstrap.listGroup_t7sdcm$;
  var set = $module$appsimake_commonshr.rx.set_atqor6$;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var minus = Kotlin.kotlin.collections.minus_xfiyik$;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var SetDiff = $module$appsimake_commonshr.commonshr.SetDiff;
  var ListenableList$Listener = $module$appsimake_common.common.ListenableList.Listener;
  var common = $module$appsimake_commonshr.common;
  var Killables = $module$appsimake_commonshr.killable.Killables;
  var Some = $module$appsimake_commonshr.common.Some;
  var Killable = $module$appsimake_commonshr.killable.Killable;
  var collectionRef = $module$appsimake_firebase.firebase.firestore.collectionRef_nabv8k$;
  var ListenableMutableList = $module$appsimake_common.common.ListenableMutableList;
  var ListenConfig = $module$appsimake_firebase.firebase.firestore.ListenConfig;
  var listen = $module$appsimake_firebase.firebase.firestore.listen_a0qr30$;
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
  var build_1 = $module$appsimake_commonfb.commonfb.build_c9itbd$;
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
  var Task = $module$appsimake_taskslib.taskslib.Task;
  var taskslib = $module$appsimake_taskslib.taskslib;
  var LoggingInCtx_init = $module$appsimake_commonfb.commonfb.LoggingInCtx_init_nruni5$;
  var LoggingInCtx = $module$appsimake_commonfb.commonfb.LoggingInCtx;
  var get_btnGroup = $module$appsimake_bootstrap.bootstrap.get_btnGroup_kre7dp$;
  var get_btnPrimary = $module$appsimake_bootstrap.bootstrap.get_btnPrimary_kre7dp$;
  var showClosable = $module$appsimake_commonui.commonui.showClosable_nozcv4$;
  var clickEventSeq = $module$appsimake_domx.domx.clickEventSeq_xa4vqr$;
  var faButton = $module$appsimake_commonui.commonui.faButton_jous2b$;
  var get_search = $module$appsimake_fontawesome.fontawesome.get_search_xml72e$;
  var get_dropdownMenuRight = $module$appsimake_bootstrap.bootstrap.get_dropdownMenuRight_kre7dp$;
  var dropdownItemAnchor = $module$appsimake_bootstrap.bootstrap.dropdownItemAnchor_fahyz6$;
  var dropdownGroup = $module$appsimake_bootstrap.bootstrap.dropdownGroup_ju7q0d$;
  var get_p2 = $module$appsimake_bootstrap.bootstrap.get_p2_kre7dp$;
  var get_card = $module$appsimake_bootstrap.bootstrap.get_card_kre7dp$;
  var get_cardHeader = $module$appsimake_bootstrap.bootstrap.get_cardHeader_kre7dp$;
  var RootPanel = $module$appsimake_commonui.commonui.RootPanel;
  var screenLayout = $module$appsimake_commonui.commonui.screenLayout_yc4v25$;
  var LoggedInCtx = $module$appsimake_commonfb.commonfb.LoggedInCtx;
  var get_private = $module$appsimake_commonlib.commonlib.get_private_qw85iv$;
  var get_tasks = $module$appsimake_taskslib.taskslib.get_tasks_kpytd$;
  var get_usertags = $module$appsimake_taskslib.taskslib.get_usertags_kpytd$;
  var HasDB = $module$appsimake_commonfb.commonfb.HasDB;
  var get_cardBody = $module$appsimake_bootstrap.bootstrap.get_cardBody_kre7dp$;
  var stringListClick = $module$appsimake_commonfb.commonfb.stringListClick_cvv88r$;
  var ListUIConfig = $module$appsimake_commonfb.commonfb.ListUIConfig;
  var showClosableList = $module$appsimake_commonfb.commonfb.showClosableList_drk7y0$;
  var viewTextField = $module$appsimake_commonfb.commonfb.viewTextField_5hmubo$;
  var viewFieldLabel = $module$appsimake_commonfb.commonfb.viewFieldLabel_uy78um$;
  var diffs = $module$appsimake_commonshr.rx.diffs_614g0z$;
  var get_badge = $module$appsimake_bootstrap.bootstrap.get_badge_kre7dp$;
  var get_badgeSecondary = $module$appsimake_bootstrap.bootstrap.get_badgeSecondary_kre7dp$;
  var get_fontSize100 = $module$appsimake_domx.styles.get_fontSize100_kre7dp$;
  var rxText_0 = $module$appsimake_bootstrap.bootstrap.rxText_7fncnf$;
  var scrollPanel = $module$appsimake_commonfb.commonfb.scrollPanel_kohbvw$;
  TasksMain.prototype = Object.create(LoggingInCtx.prototype);
  TasksMain.prototype.constructor = TasksMain;
  function editTag$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_formControl($receiver);
    get_m1($receiver);
    get_widthAuto($receiver);
    return Unit;
  }
  function editTag$lambda$lambda$lambda$lambda$lambda(closure$lbl, closure$killables, closure$item) {
    return function ($receiver) {
      closure$lbl($receiver);
      get_cls($receiver).invoke_cr52h1$(editTag$lambda$lambda$lambda$lambda$lambda$lambda);
      $receiver.type = 'text';
      closure$killables.plusAssign_wii6vi$(textProp($receiver, closure$item.name));
      return Unit;
    };
  }
  function editTag$lambda$lambda$lambda$lambda(closure$killables, closure$item) {
    return function ($receiver, lbl) {
      invoke(get_input($receiver), editTag$lambda$lambda$lambda$lambda$lambda(lbl, closure$killables, closure$item));
      return Unit;
    };
  }
  function editTag$lambda$lambda$lambda(closure$killables, closure$item) {
    return function ($receiver) {
      formGroup($receiver, 'Tag Name', editTag$lambda$lambda$lambda$lambda(closure$killables, closure$item));
      return Unit;
    };
  }
  function editTag$lambda$lambda(closure$killables, closure$item) {
    return function ($receiver) {
      scrollForm($receiver, editTag$lambda$lambda$lambda(closure$killables, closure$item));
      return Unit;
    };
  }
  function editTag$lambda(item, killables) {
    return new FormConfig(void 0, editTag$lambda$lambda(killables, item));
  }
  function editTag($receiver, panel, tag, close) {
    return build(new EditScreenConfig('Tag', editTag$lambda), panel, tag, close, $receiver.userTags, $receiver.db);
  }
  function listTags$lambda() {
    return new Tag();
  }
  function listTags$lambda_0($receiver) {
    $receiver.asc_tixzdw$(Tag.Companion.name);
    return Unit;
  }
  function listTags$lambda_1(it) {
    return orEmpty(it.name.initial.invoke());
  }
  function listTags($receiver, panel, after) {
    return build_0(new ListScreenConfig('Tags', listTags$lambda, getCallableRef('viewTag', function ($receiver, panel, item, close) {
      return viewTag($receiver, panel, item, close);
    }.bind(null, $receiver)), getCallableRef('editTag', function ($receiver, panel, tag, close) {
      return editTag($receiver, panel, tag, close);
    }.bind(null, $receiver)), query($receiver.userTags, $receiver.db, listTags$lambda_0), listTags$lambda_1), panel, after);
  }
  function tagsEditor$lambda$lambda($receiver) {
    get_flexGrow1($receiver);
    get_dFlex($receiver);
    get_flexColumn($receiver);
    return Unit;
  }
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function tagsEditor$lambda$lambda_0(closure$filterInput) {
    return function () {
      return !isBlank(closure$filterInput.invoke());
    };
  }
  function tagsEditor$lambda$lambda_1(closure$isFiltered, closure$tagNameSet, closure$filterInput) {
    return function () {
      return closure$isFiltered.invoke() && !closure$tagNameSet.invoke().contains_11rb$(closure$filterInput.invoke());
    };
  }
  function tagsEditor$lambda$lambda_2(closure$isBusy, closure$isNewTag) {
    return function () {
      return !closure$isBusy.invoke() && closure$isNewTag.invoke();
    };
  }
  function tagsEditor$lambda$lambda$lambda($receiver) {
    get_p1($receiver);
    get_borderBottom($receiver);
    flexFixedSize($receiver);
    return Unit;
  }
  function tagsEditor$lambda$lambda$lambda$lambda($receiver) {
    get_inputGroup($receiver);
    get_widthAuto($receiver);
    return Unit;
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      get_formControl($receiver);
      get_widthAuto($receiver);
      this$.placeholder = 'filter or create tag...';
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$extract(this$, closure$filterInput) {
    return function () {
      closure$filterInput.now = this$.value;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda_0(this$, closure$extract) {
    return function () {
      this$.value = '';
      closure$extract();
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda_1(closure$extract) {
    return function (it) {
      closure$extract();
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda_0(closure$isFiltered, closure$filterInput, closure$clearFilter) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda$lambda$lambda($receiver));
      $receiver.type = 'text';
      rxClass($receiver, get_borderWarning(Cls.Companion), closure$isFiltered);
      var extract = tagsEditor$lambda$lambda$lambda$lambda$extract($receiver, closure$filterInput);
      closure$clearFilter.plusAssign_o14v8n$(tagsEditor$lambda$lambda$lambda$lambda$lambda_0($receiver, extract));
      inputEvent($receiver, tagsEditor$lambda$lambda$lambda$lambda$lambda_1(extract));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_eraser($receiver);
    return Unit;
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_btn($receiver);
    get_btnOutlineSecondary($receiver);
    invoke_0(get_fa($receiver), tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$clearFilter) {
    return function (it) {
      closure$clearFilter.fire();
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda_2(closure$isFiltered, closure$clearFilter) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda);
      rxEnabled($receiver, closure$isFiltered);
      clickEvent($receiver, tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$clearFilter));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    get_btn($receiver);
    get_btnOutlineSecondary($receiver);
    return Unit;
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    get_spinnerBorder($receiver);
    get_spinnerBorderSm($receiver);
    return Unit;
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$isBusy) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      rxDisplayed($receiver, closure$isBusy);
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_plus($receiver);
    return Unit;
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    invoke_0(get_fa($receiver), tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$isBusy) {
    return function () {
      return !closure$isBusy.invoke();
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$isBusy) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      rxDisplayed_0($receiver, tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$isBusy));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$tagsEditor_0, closure$v_0, closure$item_0, closure$isBusy_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$tagsEditor_0, closure$v_0, closure$item_0, closure$isBusy_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$tagsEditor_0, closure$v_0, closure$item_0, closure$isBusy_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$tagsEditor = this$tagsEditor_0;
    this.local$closure$v = closure$v_0;
    this.local$closure$item = closure$item_0;
    this.local$closure$isBusy = closure$isBusy_0;
  }
  Coroutine$tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$tagsEditor.tagSource.byName_61zpoe$(this.local$closure$v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tv = this.result_0;
            add(this.local$closure$item.tags.current, tv.now.props.idOrFail);
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
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$addTagEnabled, closure$isBusy, closure$tag, this$tagsEditor, closure$item) {
    return function (it) {
      if (closure$addTagEnabled.now) {
        closure$isBusy.now = true;
        var v = closure$tag.value;
        closure$tag.value = '';
        launch(coroutines.GlobalScope, void 0, void 0, tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$tagsEditor, v, closure$item, closure$isBusy));
      }
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda_3(closure$isBusy, closure$addTagEnabled, closure$tag, this$tagsEditor, closure$item) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_1);
      invoke(get_span($receiver), tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$isBusy));
      invoke(get_span($receiver), tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$isBusy));
      rxEnabled($receiver, closure$addTagEnabled);
      clickEvent($receiver, tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$addTagEnabled, closure$isBusy, closure$tag, this$tagsEditor, closure$item));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda_1(closure$isFiltered, closure$clearFilter, closure$isBusy, closure$addTagEnabled, closure$tag, this$tagsEditor, closure$item) {
    return function ($receiver) {
      get_inputGroupAppend(get_cls($receiver));
      invoke(get_button($receiver), tagsEditor$lambda$lambda$lambda$lambda$lambda_2(closure$isFiltered, closure$clearFilter));
      invoke(get_button($receiver), tagsEditor$lambda$lambda$lambda$lambda$lambda_3(closure$isBusy, closure$addTagEnabled, closure$tag, this$tagsEditor, closure$item));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda_0(closure$isFiltered, closure$filterInput, closure$clearFilter, closure$isBusy, closure$addTagEnabled, this$tagsEditor, closure$item) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda$lambda);
      var tag = invoke(get_input($receiver), tagsEditor$lambda$lambda$lambda$lambda_0(closure$isFiltered, closure$filterInput, closure$clearFilter));
      invoke(get_div($receiver), tagsEditor$lambda$lambda$lambda$lambda_1(closure$isFiltered, closure$clearFilter, closure$isBusy, closure$addTagEnabled, tag, this$tagsEditor, closure$item));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda_3(closure$isFiltered, closure$filterInput, closure$clearFilter, closure$isBusy, closure$addTagEnabled, this$tagsEditor, closure$item) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda);
      invoke(get_div($receiver), tagsEditor$lambda$lambda$lambda_0(closure$isFiltered, closure$filterInput, closure$clearFilter, closure$isBusy, closure$addTagEnabled, this$tagsEditor, closure$item));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda_1($receiver) {
    get_flexGrow1($receiver);
    get_scrollVertical($receiver);
    return Unit;
  }
  function tagsEditor$lambda$lambda$TagNode(tag, nrx, selected, node) {
    this.tag = tag;
    this.nrx = nrx;
    this.selected = selected;
    this.node = node;
  }
  tagsEditor$lambda$lambda$TagNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagNode',
    interfaces: []
  };
  function tagsEditor$lambda$lambda$filterTag(name, filter) {
    return contains(name, filter, true);
  }
  function tagsEditor$lambda$lambda$lambda$lambda_2(closure$tag) {
    return function () {
      return orEmpty(closure$tag.name.initial.invoke());
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda_3(closure$item, closure$tagId) {
    return function () {
      return orEmpty_0(closure$item.tags.current.invoke()).contains_11rb$(closure$tagId);
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    get_dFlex($receiver);
    get_flexRow($receiver);
    get_py1($receiver);
    get_px2($receiver);
    get_alignItemsCenter($receiver);
    return Unit;
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    get_dFlex($receiver);
    get_flexRow($receiver);
    get_alignItemsCenter($receiver);
    get_flexGrow1($receiver);
    return Unit;
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$selected, this$) {
    return function ($receiver) {
      get_fw($receiver);
      rxClass(this$, get_check(Fa.Companion), closure$selected);
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$selected, this$) {
    return function ($receiver) {
      get_m1($receiver);
      invoke_0(get_fa($receiver), tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$selected, this$));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$selected) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$selected, $receiver));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$ks, closure$nrx) {
    return function ($receiver) {
      closure$ks.plusAssign_wii6vi$(rxText($receiver, closure$nrx));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda_5(closure$selected, closure$ks, closure$nrx) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_5);
      invoke(get_span($receiver), tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$selected));
      invoke(get_span($receiver), tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$ks, closure$nrx));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$selected) {
    return function () {
      return closure$selected.invoke() ? get_minus(Fa.Companion) : get_plus(Fa.Companion);
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$selected, this$) {
    return function ($receiver) {
      get_fw($receiver);
      rxClass_0(this$, tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$selected));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$selected, this$) {
    return function ($receiver) {
      invoke_0(get_fa($receiver), tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$selected, this$));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$selected) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$selected, $receiver));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_8(this$, closure$selected) {
    return function ($receiver) {
      get_btn($receiver);
      get_btnSecondary($receiver);
      get_p1($receiver);
      flexFixedSize($receiver);
      invoke(get_span(this$), tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$selected));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$selected, closure$item, closure$tagId) {
    return function (it) {
      if (closure$selected.now)
        remove(closure$item.tags.current, closure$tagId);
      else
        add(closure$item.tags.current, closure$tagId);
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda$lambda_6(closure$selected, closure$item, closure$tagId) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_8($receiver, closure$selected));
      clickEvent($receiver, tagsEditor$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$selected, closure$item, closure$tagId));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda_4(closure$selected, closure$ks, closure$nrx, closure$item, closure$tagId) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda$lambda$lambda_4);
      invoke(get_div($receiver), tagsEditor$lambda$lambda$lambda$lambda$lambda_5(closure$selected, closure$ks, closure$nrx));
      invoke(get_button($receiver), tagsEditor$lambda$lambda$lambda$lambda$lambda_6(closure$selected, closure$item, closure$tagId));
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda$lambda_2(closure$item) {
    return function (tag, ks) {
      var tagId = tag.props.idOrFail;
      var $receiver = Rx_init(tagsEditor$lambda$lambda$lambda$lambda_2(tag));
      ks.plusAssign_wii6vi$($receiver);
      var nrx = $receiver;
      var $receiver_0 = Rx_init(tagsEditor$lambda$lambda$lambda$lambda_3(closure$item, tagId));
      ks.plusAssign_wii6vi$($receiver_0);
      var selected = $receiver_0;
      return new tagsEditor$lambda$lambda$TagNode(tag, nrx, selected, listGroupItem(document, tagsEditor$lambda$lambda$lambda$lambda_4(selected, ks, nrx, closure$item, tagId)));
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda_5(item, f) {
    return item.nrx;
  }
  function tagsEditor$lambda$lambda$lambda$lambda_6(item, f) {
    return item.nrx;
  }
  function tagsEditor$lambda$lambda$lambda$lambda_7(closure$filterTag) {
    return function (name, filter) {
      return closure$filterTag(name, filter);
    };
  }
  function tagsEditor$lambda$lambda$lambda$lambda_8($receiver) {
    get_listGroupFlush($receiver);
    get_borderBottom($receiver);
    return Unit;
  }
  function tagsEditor$lambda$lambda$lambda$lambda_9(t, f) {
    return t.node;
  }
  function tagsEditor$lambda$lambda$lambda_3(closure$list, closure$killables) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda$lambda_8);
      listenableList($receiver, closure$list, closure$killables, tagsEditor$lambda$lambda$lambda$lambda_9);
      return Unit;
    };
  }
  function tagsEditor$lambda$lambda_4(this$tagsEditor, closure$killables, closure$item, closure$filterInput) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda$lambda_1);
      var filterTag = tagsEditor$lambda$lambda$filterTag;
      var $receiver_0 = (new MappedListenableListConfig(this$tagsEditor.tagSource.listenableList, closure$killables, tagsEditor$lambda$lambda$lambda_2(closure$item))).build();
      var $receiver_1 = (new SortedListenableListConfig($receiver_0, closure$killables, tagsEditor$lambda$lambda$lambda$lambda_5)).build();
      var list = (new FilteredListenableListConfig($receiver_1, closure$killables, tagsEditor$lambda$lambda$lambda$lambda_6, closure$filterInput, tagsEditor$lambda$lambda$lambda$lambda_7(filterTag))).build();
      listGroup($receiver, tagsEditor$lambda$lambda$lambda_3(list, closure$killables));
      return Unit;
    };
  }
  function tagsEditor$lambda(this$tagsEditor, closure$killables, closure$item) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(tagsEditor$lambda$lambda);
      var clearFilter = new Listeners();
      var filterInput = new Var('');
      var isFiltered = Rx_init(tagsEditor$lambda$lambda_0(filterInput));
      var tagNameSet = this$tagsEditor.tagSource.tagNameSet.get_di35k5$(closure$killables);
      var isNewTag = Rx_init(tagsEditor$lambda$lambda_1(isFiltered, tagNameSet, filterInput));
      var isBusy = new Var(false);
      var addTagEnabled = Rx_init(tagsEditor$lambda$lambda_2(isBusy, isNewTag));
      invoke(get_div($receiver), tagsEditor$lambda$lambda_3(isFiltered, filterInput, clearFilter, isBusy, addTagEnabled, this$tagsEditor, closure$item));
      invoke(get_div($receiver), tagsEditor$lambda$lambda_4(this$tagsEditor, closure$killables, closure$item, filterInput));
      return Unit;
    };
  }
  function tagsEditor($receiver, item, killables) {
    return invoke(get_div(document), tagsEditor$lambda($receiver, killables, item));
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function TagSource(wrap, db) {
    this.tagsRef_0 = collectionRef(wrap, db);
    this.killables_0 = new Killables();
    this.map_0 = LinkedHashMap_init();
    this.nameMap_0 = LinkedHashMap_init();
    this.list_0 = new ListenableMutableList();
    this.list_0.addListener_ednqrc$(new ListenableList$Listener(TagSource_init$lambda(this), TagSource_init$lambda_0(this)));
    var tmp$ = this.killables_0;
    var c = ListenConfig.Companion.hasProps_5sp7du$(this.list_0, TagSource_init$lambda_1);
    tmp$.plusAssign_o14v8n$(listen(query(wrap, db).query, c));
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
  function viewTag$lambda$lambda$lambda$lambda_1(closure$killables, closure$item) {
    return function ($receiver) {
      closure$killables.plusAssign_wii6vi$(rxTextOrEmpty($receiver, viewTag$lambda$lambda$lambda$lambda$lambda(closure$item)));
      return Unit;
    };
  }
  function viewTag$lambda$lambda$lambda_0(closure$killables, closure$item) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(viewTag$lambda$lambda$lambda$lambda);
      invoke(get_dt($receiver), viewTag$lambda$lambda$lambda$lambda_0);
      invoke(get_dd($receiver), viewTag$lambda$lambda$lambda$lambda_1(closure$killables, closure$item));
      return Unit;
    };
  }
  function viewTag$lambda$lambda_0(closure$killables, closure$item) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(viewTag$lambda$lambda$lambda);
      invoke(get_dl($receiver), viewTag$lambda$lambda$lambda_0(closure$killables, closure$item));
      return Unit;
    };
  }
  function viewTag$lambda(closure$item) {
    return function ($receiver, it) {
      var killables = new Killables();
      get_cls($receiver).invoke_cr52h1$(viewTag$lambda$lambda);
      invoke(get_div($receiver), viewTag$lambda$lambda_0(killables, closure$item));
      return killables;
    };
  }
  function viewTag($receiver, panel, item, close) {
    return build_1(new ViewScreenConfig('Tag', getCallableRef('editTag', function ($receiver, panel, tag, close) {
      return editTag($receiver, panel, tag, close);
    }.bind(null, $receiver)), viewTag$lambda(item)), panel, item, close);
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
  function editTask$lambda$lambda$lambda$lambda$lambda$lambda(closure$labelFor, closure$killables, closure$item) {
    return function ($receiver) {
      closure$labelFor($receiver);
      get_cls($receiver).invoke_cr52h1$(editTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      $receiver.type = 'text';
      closure$killables.plusAssign_wii6vi$(textProp($receiver, closure$item.title));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda_0(closure$killables, closure$item) {
    return function ($receiver, labelFor) {
      invoke(get_input($receiver), editTask$lambda$lambda$lambda$lambda$lambda$lambda(labelFor, closure$killables, closure$item));
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
  function editTask$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$lf, closure$killables, closure$item) {
    return function ($receiver) {
      closure$lf($receiver);
      get_cls($receiver).invoke_cr52h1$(editTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      $receiver.rows = 5;
      closure$killables.plusAssign_wii6vi$(textProp_0($receiver, closure$item.text));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda_1(closure$killables, closure$item) {
    return function ($receiver, lf) {
      invoke(get_textarea($receiver), editTask$lambda$lambda$lambda$lambda$lambda$lambda_0(lf, closure$killables, closure$item));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    get_m1($receiver);
    get_customSelect($receiver);
    get_widthAuto($receiver);
    return Unit;
  }
  var get_option = $module$appsimake_commonfb.$$importsForInline$$['appsimake-domx'].domx.get_option_asww5s$;
  var wrapFunction = Kotlin.wrapFunction;
  var invoke_1 = $module$appsimake_commonfb.$$importsForInline$$['appsimake-domx'].domx.invoke_inodcj$;
  var orEmpty_1 = $module$appsimake_commonfb.$$importsForInline$$['appsimake-commonshr'].common.orEmpty_rw3ye5$;
  var common_0 = $module$appsimake_commonfb.$$importsForInline$$['appsimake-commonshr'].common;
  var Some_init = $module$appsimake_commonfb.$$importsForInline$$['appsimake-commonshr'].common.Some;
  var changeEvent = $module$appsimake_commonfb.$$importsForInline$$['appsimake-domx'].domx.changeEvent_e6qnhl$;
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
  function editTask$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$lf, closure$killables, closure$item) {
    return function ($receiver) {
      closure$lf($receiver);
      get_cls($receiver).invoke_cr52h1$(editTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      var tmp$ = closure$killables;
      var prop = closure$item.status;
      invoke_1(get_option($receiver), enumProp$lambda);
      var $receiver_0 = TaskStatus.values();
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var element = $receiver_0[tmp$_0];
        invoke_1(get_option($receiver), enumProp$lambda$lambda(element));
      }
      $receiver.value = orEmpty_1(prop.current.now.map_2o04qz$(enumProp$lambda_0));
      changeEvent($receiver, enumProp$lambda_1($receiver, TaskStatus, Kotlin.isInstanceOf(TaskStatus), prop));
      tmp$.plusAssign_wii6vi$(validProp($receiver, prop));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda_2(closure$killables, closure$item) {
    return function ($receiver, lf) {
      invoke(get_select($receiver), editTask$lambda$lambda$lambda$lambda$lambda$lambda_1(lf, closure$killables, closure$item));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda(closure$killables, closure$item) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(editTask$lambda$lambda$lambda$lambda$lambda);
      formGroup($receiver, 'Title', editTask$lambda$lambda$lambda$lambda$lambda_0(closure$killables, closure$item));
      formGroup($receiver, 'Text', editTask$lambda$lambda$lambda$lambda$lambda_1(closure$killables, closure$item));
      formGroup($receiver, 'Status', editTask$lambda$lambda$lambda$lambda$lambda_2(closure$killables, closure$item));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda(closure$killables, closure$item) {
    return function ($receiver) {
      get_flexGrow1(get_cls($receiver));
      scrollForm($receiver, editTask$lambda$lambda$lambda$lambda(closure$killables, closure$item));
      return Unit;
    };
  }
  function editTask$lambda$lambda(closure$killables, closure$item) {
    return function (it) {
      return invoke(get_div(document), editTask$lambda$lambda$lambda(closure$killables, closure$item));
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
    return function (item, killables) {
      return tabsConfig(killables, listOf([new TabConfig(get_list(Fa.Companion), editTask$lambda$lambda(killables, item)), new TabConfig(get_tags(Fa.Companion), editTask$lambda$lambda_0(item, this$editTask)), new TabConfig(get_comments(Fa.Companion), editTask$lambda$lambda_1)]));
    };
  }
  function editTask($receiver, panel, task, close) {
    return build(new EditScreenConfig('Task', editTask$lambda($receiver)), panel, task, close, $receiver.userTasks, $receiver.db);
  }
  function listTasks$lambda() {
    return new Task();
  }
  function listTasks$lambda_0($receiver) {
    $receiver.asc_tixzdw$(Task.Companion.title);
    return Unit;
  }
  function listTasks$lambda_1(it) {
    return orEmpty(it.title.initial.invoke());
  }
  function listTasks($receiver, panel, after) {
    return build_0(new ListScreenConfig('Task List', listTasks$lambda, getCallableRef('viewTask', function ($receiver, panel, task, close) {
      return viewTask($receiver, panel, task, close);
    }.bind(null, $receiver)), getCallableRef('editTask', function ($receiver, panel, task, close) {
      return editTask($receiver, panel, task, close);
    }.bind(null, $receiver)), query($receiver.userTasks, $receiver.db, listTasks$lambda_0), listTasks$lambda_1), panel, after);
  }
  function main(args) {
    (new TasksMain()).start();
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
    return function (close) {
      return editTask(this$LoggedIn, this$LoggedIn.root.sub(), new Task(), close);
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$LoggedIn, closure$showHome) {
    return function (it) {
      return showClosable(LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$LoggedIn), getCallableRef('showHome', function () {
        return closure$showHome(), Unit;
      }));
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
    return function (close) {
      return listTasks(this$LoggedIn, this$LoggedIn.root.sub(), close);
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$homeActive, this$LoggedIn, closure$showHome) {
    return function (it) {
      closure$homeActive.now = false;
      return showClosable(LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$LoggedIn), getCallableRef('showHome', function () {
        return closure$showHome(), Unit;
      }));
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
    return function (c) {
      return listTags(this$LoggedIn, this$LoggedIn.root.sub(), c);
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$LoggedIn, closure$showHome) {
    return function (it) {
      return showClosable(LoggedIn$main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$LoggedIn), getCallableRef('showHome', function () {
        return closure$showHome(), Unit;
      }));
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
    get_p2($receiver);
    get_scrollVertical($receiver);
    return Unit;
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    get_cardHeader(get_cls($receiver));
    $receiver.innerText = 'Recent';
    return Unit;
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda$lambda_1(closure$recentSeq, closure$showHome, closure$root, this$LoggedIn) {
    return function (ha) {
      if (ha) {
        closure$recentSeq.plusAssign_o14v8n$(recent(this$LoggedIn, getCallableRef('showHome', function () {
          return closure$showHome(), Unit;
        }), closure$root));
      }
       else {
        closure$recentSeq.clear();
      }
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda$lambda_2(this$LoggedIn, closure$homeActive, closure$showHome) {
    return function ($receiver) {
      get_card(get_cls($receiver));
      invoke(get_div($receiver), LoggedIn$main$lambda$lambda$lambda$lambda$lambda_0);
      var root = new RootPanel($receiver);
      var recentSeq = this$LoggedIn.killables.seq();
      closure$homeActive.forEach_qlkmfe$(LoggedIn$main$lambda$lambda$lambda$lambda$lambda_1(recentSeq, closure$showHome, root, this$LoggedIn));
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
  function recent$lambda($receiver) {
    $receiver.eq_5h2n3e$(Task.Companion.completed, false);
    $receiver.desc_tixzdw$(Task.Companion.ts);
    return Unit;
  }
  function recent$lambda$lambda(this$recent, closure$dit) {
    return function (close) {
      return viewTask(this$recent, this$recent.root.sub(), closure$dit, close);
    };
  }
  function recent$lambda_0(this$recent) {
    return function (dit) {
      return recent$lambda$lambda(this$recent, dit);
    };
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
  function recent$lambda_1(closure$panel) {
    return function (onClick) {
      return new ListUIConfig(closure$panel, recent$lambda$lambda_0, recent$lambda$lambda_1, recent$lambda$lambda_2, recent$lambda$lambda_3, recent$lambda$lambda_4, stringListClick(recent$lambda$lambda_5, onClick));
    };
  }
  function recent($receiver, redisplay, panel) {
    return showClosableList(query($receiver.userTasks, $receiver.db, recent$lambda), redisplay, recent$lambda_0($receiver), recent$lambda_1(panel));
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
  function viewTask$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_m1($receiver);
    get_badge($receiver);
    get_badgeSecondary($receiver);
    get_fontSize100($receiver);
    return Unit;
  }
  function viewTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$id) {
    return function () {
      return closure$id;
    };
  }
  function viewTask$lambda$lambda$lambda$lambda$lambda$lambda_0(this$viewTask, closure$id) {
    return function () {
      return this$viewTask.tagSource.tag_61zpoe$(closure$id).invoke().name.initial.invoke().getOrElse_skz6lt$(viewTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$id));
    };
  }
  function viewTask$lambda$lambda$lambda$lambda$lambda(closure$ks, this$viewTask, closure$id) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(viewTask$lambda$lambda$lambda$lambda$lambda$lambda);
      closure$ks.plusAssign_wii6vi$(rxText_0($receiver, viewTask$lambda$lambda$lambda$lambda$lambda$lambda_0(this$viewTask, closure$id)));
      return Unit;
    };
  }
  function viewTask$lambda$lambda$lambda$lambda_1(this$, this$viewTask) {
    return function (id, ks) {
      return invoke(get_span(this$), viewTask$lambda$lambda$lambda$lambda$lambda(ks, this$viewTask, id));
    };
  }
  function viewTask$lambda$lambda$lambda_3(closure$item, closure$killables, this$viewTask) {
    return function ($receiver) {
      var list = new ListenableMutableList();
      diffs(closure$item.tags.initial, viewTask$lambda$lambda$lambda$lambda_0(list));
      listenableList($receiver, list, closure$killables, viewTask$lambda$lambda$lambda$lambda_1($receiver, this$viewTask));
      return Unit;
    };
  }
  function viewTask$lambda$lambda(closure$killables, closure$item, this$viewTask) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(viewTask$lambda$lambda$lambda);
      closure$killables.plusAssign_wii6vi$(viewTextField($receiver, 'Title', viewTask$lambda$lambda$lambda_0(closure$item)));
      closure$killables.plusAssign_wii6vi$(viewTextField($receiver, 'Text', viewTask$lambda$lambda$lambda_1(closure$item)));
      closure$killables.plusAssign_wii6vi$(viewTextField($receiver, 'Status', viewTask$lambda$lambda$lambda_2(closure$item)));
      viewFieldLabel($receiver, 'Tags');
      invoke(get_div($receiver), viewTask$lambda$lambda$lambda_3(closure$item, closure$killables, this$viewTask));
      return Unit;
    };
  }
  function viewTask$lambda(this$viewTask) {
    return function ($receiver, item) {
      var killables = new Killables();
      scrollPanel($receiver, viewTask$lambda$lambda(killables, item, this$viewTask));
      return killables;
    };
  }
  function viewTask($receiver, panel, task, close) {
    return build_1(new ViewScreenConfig('Task', getCallableRef('editTask', function ($receiver, panel, task, close) {
      return editTask($receiver, panel, task, close);
    }.bind(null, $receiver)), viewTask$lambda($receiver)), panel, task, close);
  }
  var package$tasks = _.tasks || (_.tasks = {});
  package$tasks.editTag_y5pe2n$ = editTag;
  package$tasks.listTags_xhsb94$ = listTags;
  package$tasks.tagsEditor_l6gkyr$ = tagsEditor;
  TagSource.Counted = TagSource$Counted;
  package$tasks.TagSource = TagSource;
  package$tasks.viewTag_y5pe2n$ = viewTag;
  $$importsForInline$$['appsimake-commonfb'] = $module$appsimake_commonfb;
  package$tasks.editTask_gmth5k$ = editTask;
  package$tasks.listTasks_xhsb94$ = listTasks;
  package$tasks.main_kand9s$ = main;
  package$tasks.TasksMain = TasksMain;
  package$tasks.LoggedIn = LoggedIn;
  package$tasks.recent_x2x8gg$ = recent;
  package$tasks.viewTask_gmth5k$ = viewTask;
  main([]);
  Kotlin.defineModule('appsimake-tasks', _);
  return _;
}(typeof this['appsimake-tasks'] === 'undefined' ? {} : this['appsimake-tasks'], kotlin, this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-commonfb'], this['appsimake-taskslib'], this['appsimake-firebase'], this['appsimake-commonshr'], this['appsimake-fontawesome'], this['kotlinx-coroutines-core'], this['appsimake-common'], this['appsimake-commonui'], this['appsimake-commonlib']);

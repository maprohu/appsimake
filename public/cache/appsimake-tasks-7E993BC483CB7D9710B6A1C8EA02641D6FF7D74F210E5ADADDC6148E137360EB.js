if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-tasks'.");
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
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-tasks'.");
}
this['appsimake-tasks'] = function (_, Kotlin, $module$appsimake_taskslib, $module$appsimake_firebase, $module$appsimake_commonshr, $module$appsimake_commonui, $module$appsimake_commonfb, $module$appsimake_domx, $module$appsimake_bootstrap, $module$kotlinx_coroutines_core, $module$appsimake_fontawesome) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Tag = $module$appsimake_taskslib.taskslib.Tag;
  var Unit = Kotlin.kotlin.Unit;
  var fsLookup = $module$appsimake_firebase.firebase.firestore.fsLookup_rg6jg5$;
  var toList = $module$appsimake_firebase.firebase.firestore.toList_wamwi5$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var get_docWrap = $module$appsimake_commonshr.commonshr.get_docWrap_2s00w$;
  var get_notes = $module$appsimake_taskslib.taskslib.get_notes_yrnr6e$;
  var collectionRef = $module$appsimake_firebase.firebase.firestore.collectionRef_biyy30$;
  var delete_0 = $module$appsimake_firebase.firebase.firestore.delete_u0r02q$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ForwardBase_init = $module$appsimake_commonui.commonui.widget.ForwardBase_init_rq3hmi$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ForwardBase = $module$appsimake_commonui.commonui.widget.ForwardBase;
  var FBApi = $module$appsimake_commonfb.commonfb.FBApi;
  var EditExitFromKillsUixApi = $module$appsimake_commonui.commonui.EditExitFromKillsUixApi;
  var widget = $module$appsimake_commonui.commonui.widget;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_leftRightTopBottom0 = $module$appsimake_domx.styles.get_leftRightTopBottom0_kre7dp$;
  var get_widget = $module$appsimake_commonui.commonui.widget.get_widget_asww5s$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_im8gow$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var column = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var get_insert_0 = $module$appsimake_commonui.commonui.widget.get_insert_asww5s$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var Var = $module$appsimake_commonshr.rx.Var;
  var Listeners = $module$appsimake_commonshr.common.Listeners;
  var get_idOrFail = $module$appsimake_commonshr.commonshr.get_idOrFail_2s00w$;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var get_borderBottom = $module$appsimake_bootstrap.bootstrap.get_borderBottom_kre7dp$;
  var get_eraser = $module$appsimake_fontawesome.fontawesome.get_eraser_xml72e$;
  var get_plus = $module$appsimake_fontawesome.fontawesome.get_plus_xml72e$;
  var get_bgLight = $module$appsimake_bootstrap.bootstrap.get_bgLight_kre7dp$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var get_alignSelfCenter = $module$appsimake_bootstrap.bootstrap.get_alignSelfCenter_kre7dp$;
  var get_fa = $module$appsimake_fontawesome.fontawesome.get_fa_kre7dp$;
  var get_fw = $module$appsimake_fontawesome.fontawesome.get_fw_xml72e$;
  var Fa = $module$appsimake_fontawesome.fontawesome.Fa;
  var get_check = $module$appsimake_fontawesome.fontawesome.get_check_xml72e$;
  var minus = Kotlin.kotlin.collections.minus_xfiyik$;
  var get_list = $module$appsimake_fontawesome.fontawesome.get_list_xml72e$;
  var get_tags = $module$appsimake_fontawesome.fontawesome.get_tags_xml72e$;
  var BodyPath = $module$appsimake_commonui.commonui.widget.BodyPath;
  var LoginOnly = $module$appsimake_commonfb.commonfb.loginbase.LoginOnly;
  var commonfb = $module$appsimake_commonfb.commonfb;
  var enablePersistenceAndWait = $module$appsimake_commonfb.commonfb.loginbase.enablePersistenceAndWait_gwf93m$;
  var FBFromApi = $module$appsimake_commonfb.commonfb.FBFromApi;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var TaskStatus = $module$appsimake_taskslib.taskslib.TaskStatus;
  var TaskStatus$values = $module$appsimake_taskslib.taskslib.TaskStatus.values;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var flatten = Kotlin.kotlin.collections.flatten_u0ad8z$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Task = $module$appsimake_taskslib.taskslib.Task;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var get_multiTags = $module$appsimake_taskslib.taskslib.get_multiTags_d2950k$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var get_border = $module$appsimake_bootstrap.bootstrap.get_border_kre7dp$;
  var get_rounded = $module$appsimake_bootstrap.bootstrap.get_rounded_kre7dp$;
  var get_justifySelfEnd = $module$appsimake_domx.styles.get_justifySelfEnd_kre7dp$;
  var get_justifySelfStart = $module$appsimake_domx.styles.get_justifySelfStart_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_dFlex = $module$appsimake_bootstrap.bootstrap.get_dFlex_kre7dp$;
  var get_flexWrap = $module$appsimake_bootstrap.bootstrap.get_flexWrap_kre7dp$;
  var get_fontSize100 = $module$appsimake_domx.styles.get_fontSize100_kre7dp$;
  var minus_0 = Kotlin.kotlin.collections.minus_2ws7j4$;
  var get_ml1 = $module$appsimake_bootstrap.bootstrap.get_ml1_kre7dp$;
  var get_ellipsisH = $module$appsimake_fontawesome.fontawesome.get_ellipsisH_xml72e$;
  var row = $module$appsimake_bootstrap.bootstrap.row_gnmiz0$;
  var get_filter = $module$appsimake_fontawesome.fontawesome.get_filter_xml72e$;
  var get_bgWhite = $module$appsimake_bootstrap.bootstrap.get_bgWhite_kre7dp$;
  var HasDb = $module$appsimake_firebase.firebase.HasDb;
  var get_new = $module$appsimake_firebase.firebase.firestore.get_new_bmgwz6$;
  var UserState$LoggedIn = $module$appsimake_commonfb.commonfb.UserState.LoggedIn;
  var taskslib = $module$appsimake_taskslib.taskslib;
  var get_private = $module$appsimake_commonshr.commonshr.get_private_py8usb$;
  var get_tasks = $module$appsimake_taskslib.taskslib.get_tasks_x4imip$;
  var get_hiddenTasks = $module$appsimake_taskslib.taskslib.get_hiddenTasks_x4imip$;
  var get_usertags = $module$appsimake_taskslib.taskslib.get_usertags_x4imip$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var get_readOnly = $module$appsimake_commonshr.rx.get_readOnly_hw0zcq$;
  var UserStateView = $module$appsimake_commonfb.commonfb.loginbase.UserStateView;
  var get_eye = $module$appsimake_fontawesome.fontawesome.get_eye_xml72e$;
  var get_btnInfo = $module$appsimake_bootstrap.bootstrap.get_btnInfo_kre7dp$;
  var get_search = $module$appsimake_fontawesome.fontawesome.get_search_xml72e$;
  var get_eyeSlash = $module$appsimake_fontawesome.fontawesome.get_eyeSlash_xml72e$;
  var get_times = $module$appsimake_fontawesome.fontawesome.get_times_xml72e$;
  var plus_0 = Kotlin.kotlin.collections.plus_qloxvw$;
  var Loading = $module$appsimake_commonui.commonui.widget.Loading;
  var commonui = $module$appsimake_commonui.commonui;
  var Body = $module$appsimake_commonui.commonui.widget.Body;
  var switchToView = $module$appsimake_commonui.commonui.widget.switchToView_pgpq8v$;
  var launchGlobal = $module$appsimake_commonui.commonui.launchGlobal_g2bo5h$;
  var HasExec = $module$appsimake_commonshr.commonshr.HasExec;
  var HasForward = $module$appsimake_commonui.commonui.widget.HasForward;
  var get_comment = $module$appsimake_fontawesome.fontawesome.get_comment_xml72e$;
  var get_pen = $module$appsimake_fontawesome.fontawesome.get_pen_xml72e$;
  var get_clipboardCheck = $module$appsimake_fontawesome.fontawesome.get_clipboardCheck_xml72e$;
  var get_dl = $module$appsimake_domx.domx.get_dl_asww5s$;
  var get_dt = $module$appsimake_domx.domx.get_dt_asww5s$;
  var get_dd = $module$appsimake_domx.domx.get_dd_asww5s$;
  var Note = $module$appsimake_taskslib.taskslib.Note;
  var copy = $module$appsimake_commonshr.commonshr.properties.copy_szlj5h$;
  var toFsDoc = $module$appsimake_commonshr.commonshr.toFsDoc_ved7zl$;
  EditNote.prototype = Object.create(ForwardBase.prototype);
  EditNote.prototype.constructor = EditNote;
  EditTag.prototype = Object.create(ForwardBase.prototype);
  EditTag.prototype.constructor = EditTag;
  EditTask.prototype = Object.create(ForwardBase.prototype);
  EditTask.prototype.constructor = EditTask;
  Home.prototype = Object.create(LoginOnly.prototype);
  Home.prototype.constructor = Home;
  ListTags.prototype = Object.create(ForwardBase.prototype);
  ListTags.prototype.constructor = ListTags;
  StatusFilter$All.prototype = Object.create(StatusFilter.prototype);
  StatusFilter$All.prototype.constructor = StatusFilter$All;
  StatusFilter$Single.prototype = Object.create(StatusFilter.prototype);
  StatusFilter$Single.prototype.constructor = StatusFilter$Single;
  StatusFilter$Completed.prototype = Object.create(StatusFilter.prototype);
  StatusFilter$Completed.prototype.constructor = StatusFilter$Completed;
  ListTasks.prototype = Object.create(ForwardBase.prototype);
  ListTasks.prototype.constructor = ListTasks;
  LoggedIn.prototype = Object.create(ForwardBase.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  SelectTags.prototype = Object.create(ForwardBase.prototype);
  SelectTags.prototype.constructor = SelectTags;
  ViewTask.prototype = Object.create(ForwardBase.prototype);
  ViewTask.prototype.constructor = ViewTask;
  function tagsLookup$lambda(id) {
    var $receiver = new Tag();
    $receiver.name.remAssign_11rc$(id);
    return $receiver;
  }
  function tagsLookup(deps, coll) {
    return fsLookup(deps, coll, tagsLookup$lambda);
  }
  function tagsList(deps, coll) {
    return toList(coll, deps);
  }
  var FsBatch_init = $module$appsimake_firebase.firebase.firestore.FsBatch;
  function Coroutine$deleteCollections($receiver_0, deps_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$deps = deps_0;
  }
  Coroutine$deleteCollections.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deleteCollections.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deleteCollections.prototype.constructor = Coroutine$deleteCollections;
  Coroutine$deleteCollections.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver_0 = new FsBatch_init(this.local$deps.db, 500);
            console.dir(this.local$$receiver_0);
            this.state_0 = 2;
            this.result_0 = deleteCollections_0(this.local$$receiver, this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver_0.commit();
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
  function deleteCollections($receiver_0, deps_0, continuation_0, suspended) {
    var instance = new Coroutine$deleteCollections($receiver_0, deps_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$deleteCollections_0($receiver_0, batch_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$batch = batch_0;
  }
  Coroutine$deleteCollections_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deleteCollections_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deleteCollections_0.prototype.constructor = Coroutine$deleteCollections_0;
  Coroutine$deleteCollections_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delete_0(this.local$batch, collectionRef(get_notes(get_docWrap(this.local$$receiver)), this.local$batch), void 0, this);
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
  function deleteCollections_0($receiver_0, batch_0, continuation_0, suspended) {
    var instance = new Coroutine$deleteCollections_0($receiver_0, batch_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function EditNotePath() {
  }
  EditNotePath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditNotePath',
    interfaces: [ViewTaskPath]
  };
  function EditNote(from, item) {
    ForwardBase_init(from, this);
    this.from_3hx1m8$_0 = from;
    this.item = item;
    this.editNote_flswci$_0 = this;
    this.editing_pp09a6$_0 = this.rxEditing_3yjaz6$(this.item);
    this.rawView_r0ljd9$_0 = ui(this);
  }
  Object.defineProperty(EditNote.prototype, 'from', {
    get: function () {
      return this.from_3hx1m8$_0;
    }
  });
  Object.defineProperty(EditNote.prototype, 'editNote', {
    get: function () {
      return this.editNote_flswci$_0;
    }
  });
  Object.defineProperty(EditNote.prototype, 'editing', {
    get: function () {
      return this.editing_pp09a6$_0;
    }
  });
  Object.defineProperty(EditNote.prototype, 'rawView', {
    get: function () {
      return this.rawView_r0ljd9$_0;
    }
  });
  Object.defineProperty(EditNote.prototype, 'body', {
    get: function () {
      return this.from.body;
    }
  });
  Object.defineProperty(EditNote.prototype, 'db', {
    get: function () {
      return this.from.db;
    }
  });
  Object.defineProperty(EditNote.prototype, 'home', {
    get: function () {
      return this.from.home;
    }
  });
  Object.defineProperty(EditNote.prototype, 'loggedIn', {
    get: function () {
      return this.from.loggedIn;
    }
  });
  Object.defineProperty(EditNote.prototype, 'viewTask', {
    get: function () {
      return this.from.viewTask;
    }
  });
  EditNote.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditNote',
    interfaces: [EditExitFromKillsUixApi, FBApi, EditNotePath, ViewTaskPath, ForwardBase]
  };
  function ui$lambda(this$ui) {
    return function ($receiver) {
      get_leftRightTopBottom0(get_cls($receiver));
      var $receiver_0 = get_insert(get_widget($receiver)).textArea;
      var this$ui_0 = this$ui;
      var $receiver_1 = $receiver_0.cls;
      get_m1($receiver_1);
      get_flexGrow1($receiver_1);
      this$ui_0.bind_igb9j9$($receiver_0, this$ui_0.editing.current.text.rxv);
      return Unit;
    };
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backSaveDiscard_e1rmy3$($receiver_0.slots.left);
    remAssign($receiver_0.title, 'Note');
    $receiver.get_saveDeleteButton_tdhe4g$($receiver_0.right);
    return new TopAndContent($receiver_0.node, column(document, ui$lambda($receiver)));
  }
  function EditTagPath() {
  }
  EditTagPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditTagPath',
    interfaces: [ListTagsPath]
  };
  function EditTag(from, item) {
    ForwardBase_init(from, this);
    this.from_e779x0$_0 = from;
    this.item = item;
    this.editTag_ky5s2u$_0 = this;
    this.editing_kyjgfy$_0 = this.rxEditing_3yjaz6$(this.item);
    this.rawView_2n1749$_0 = ui_0(this);
  }
  Object.defineProperty(EditTag.prototype, 'from', {
    get: function () {
      return this.from_e779x0$_0;
    }
  });
  Object.defineProperty(EditTag.prototype, 'editTag', {
    get: function () {
      return this.editTag_ky5s2u$_0;
    }
  });
  Object.defineProperty(EditTag.prototype, 'editing', {
    get: function () {
      return this.editing_kyjgfy$_0;
    }
  });
  Object.defineProperty(EditTag.prototype, 'rawView', {
    get: function () {
      return this.rawView_2n1749$_0;
    }
  });
  Object.defineProperty(EditTag.prototype, 'body', {
    get: function () {
      return this.from.body;
    }
  });
  Object.defineProperty(EditTag.prototype, 'db', {
    get: function () {
      return this.from.db;
    }
  });
  Object.defineProperty(EditTag.prototype, 'home', {
    get: function () {
      return this.from.home;
    }
  });
  Object.defineProperty(EditTag.prototype, 'listTags', {
    get: function () {
      return this.from.listTags;
    }
  });
  Object.defineProperty(EditTag.prototype, 'loggedIn', {
    get: function () {
      return this.from.loggedIn;
    }
  });
  EditTag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditTag',
    interfaces: [EditExitFromKillsUixApi, FBApi, EditTagPath, ListTagsPath, ForwardBase]
  };
  function ui$lambda_0(this$ui) {
    return function ($receiver) {
      get_leftRightTopBottom0(get_cls($receiver));
      var $receiver_0 = get_insert(get_widget($receiver)).input;
      var this$ui_0 = this$ui;
      get_m1($receiver_0.cls);
      this$ui_0.bind_8y93tj$($receiver_0, this$ui_0.editing.current.name);
      return Unit;
    };
  }
  function ui_0($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backSaveDiscard_e1rmy3$($receiver_0.slots.left);
    remAssign($receiver_0.title, 'Edit Tag');
    $receiver.get_saveDeleteButton_tdhe4g$($receiver_0.right);
    return new TopAndContent($receiver_0.node, column(document, ui$lambda_0($receiver)));
  }
  function EditTaskPath() {
  }
  EditTaskPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditTaskPath',
    interfaces: [ViewTaskPath]
  };
  function EditTask(from) {
    ForwardBase_init(from, this);
    this.from_whykvk$_0 = from;
    this.editTask_hzbl2j$_0 = this;
    this.exit_wientw$_0 = this.viewTask.from;
    this.editing_ni4wbm$_0 = this.rxEditing_3yjaz6$(this.viewTask.item, EditTask$editing$lambda(this));
    this.rawView_56mmzx$_0 = ui_1(this);
  }
  Object.defineProperty(EditTask.prototype, 'from', {
    get: function () {
      return this.from_whykvk$_0;
    }
  });
  Object.defineProperty(EditTask.prototype, 'editTask', {
    get: function () {
      return this.editTask_hzbl2j$_0;
    }
  });
  Object.defineProperty(EditTask.prototype, 'exit', {
    get: function () {
      return this.exit_wientw$_0;
    }
  });
  Object.defineProperty(EditTask.prototype, 'editing', {
    get: function () {
      return this.editing_ni4wbm$_0;
    }
  });
  Object.defineProperty(EditTask.prototype, 'rawView', {
    get: function () {
      return this.rawView_56mmzx$_0;
    }
  });
  Object.defineProperty(EditTask.prototype, 'body', {
    get: function () {
      return this.from.body;
    }
  });
  Object.defineProperty(EditTask.prototype, 'db', {
    get: function () {
      return this.from.db;
    }
  });
  Object.defineProperty(EditTask.prototype, 'home', {
    get: function () {
      return this.from.home;
    }
  });
  Object.defineProperty(EditTask.prototype, 'loggedIn', {
    get: function () {
      return this.from.loggedIn;
    }
  });
  Object.defineProperty(EditTask.prototype, 'viewTask', {
    get: function () {
      return this.from.viewTask;
    }
  });
  function Coroutine$EditTask$editing$lambda$lambda(this$EditTask_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$EditTask = this$EditTask_0;
  }
  Coroutine$EditTask$editing$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$EditTask$editing$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$EditTask$editing$lambda$lambda.prototype.constructor = Coroutine$EditTask$editing$lambda$lambda;
  Coroutine$EditTask$editing$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = deleteCollections(this.local$this$EditTask.viewTask.item, this.local$this$EditTask, this);
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
  function EditTask$editing$lambda$lambda(this$EditTask_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$EditTask$editing$lambda$lambda(this$EditTask_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$EditTask$editing$lambda(this$EditTask_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$EditTask = this$EditTask_0;
  }
  Coroutine$EditTask$editing$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$EditTask$editing$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$EditTask$editing$lambda.prototype.constructor = Coroutine$EditTask$editing$lambda;
  Coroutine$EditTask$editing$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$EditTask.delete_73z9b6$(this.local$this$EditTask.viewTask.item);
            return launch(this.local$this$EditTask.loggedIn, void 0, void 0, EditTask$editing$lambda$lambda(this.local$this$EditTask));
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
  function EditTask$editing$lambda(this$EditTask_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$EditTask$editing$lambda(this$EditTask_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  EditTask.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditTask',
    interfaces: [EditExitFromKillsUixApi, FBApi, EditTaskPath, ViewTaskPath, ForwardBase]
  };
  function ui$lambda$lambda(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).formGroup;
      var this$ui_0 = this$ui;
      remAssign($receiver_0.label, 'Title');
      this$ui_0.bind_8y93tj$($receiver_0.input, this$ui_0.editing.current.title);
      var $receiver_1 = get_insert_0($receiver).formGroup;
      var this$ui_1 = this$ui;
      remAssign($receiver_1.label, 'Text');
      var $receiver_2 = $receiver_1.textArea;
      $receiver_2.node.rows = 5;
      this$ui_1.bind_8y93tj$($receiver_2, this$ui_1.editing.current.text);
      var $receiver_3 = get_insert_0($receiver).formGroup;
      var this$ui_2 = this$ui;
      remAssign($receiver_3.label, 'Status');
      this$ui_2.bind_zfaq6f$($receiver_3.select, this$ui_2.editing.current.status);
      return Unit;
    };
  }
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function ui$lambda$lambda_0(closure$filter, this$ui) {
    return function ($receiver) {
      return !isBlank(closure$filter.invoke()) && !this$ui.loggedIn.tagNameSet.invoke().contains_11rb$(closure$filter.invoke());
    };
  }
  function ui$lambda$create$lambda$lambda(closure$id) {
    return function (it) {
      return plus(it, closure$id);
    };
  }
  function ui$lambda$create(closure$canCreate, this$ui, closure$filter, closure$clearFilter) {
    return function () {
      if (closure$canCreate.now) {
        var $receiver = get_idOrFail(this$ui.loggedIn.createTag_61zpoe$(closure$filter.now));
        this$ui.editing.current.tags.rxv.transform_ru8m0w$(ui$lambda$create$lambda$lambda($receiver));
        closure$clearFilter.fire();
      }
    };
  }
  function ui$lambda$lambda$lambda(closure$create) {
    return function (it) {
      closure$create();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.placeholder = 'filter or create tag...';
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda_0(this$, closure$filter) {
    return function () {
      this$.value = '';
      closure$filter.remAssign_11rb$('');
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_1(closure$filter) {
    return function ($receiver) {
      return !isBlank(closure$filter.invoke());
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda(closure$clearFilter_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$clearFilter = closure$clearFilter_0;
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
            return this.local$closure$clearFilter.fire(), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_2(closure$clearFilter_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda(closure$clearFilter_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_3(closure$canCreate) {
    return function ($receiver) {
      return closure$canCreate.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0(closure$create_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$create = closure$create_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$create(), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_4(closure$create_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0(closure$create_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_5(closure$filter) {
    return function ($receiver, it) {
      return startsWith(it.invoke().name.invoke(), closure$filter.invoke());
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda(this$ui, closure$id) {
    return function ($receiver) {
      return this$ui.editing.current.tags.invoke().contains_11rb$(closure$id);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$contains) {
    return function ($receiver) {
      return closure$contains.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$contains, this$) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      var closure$contains_0 = closure$contains;
      var this$_0 = this$;
      get_alignSelfCenter($receiver_0);
      get_m1($receiver_0);
      get_fw(get_fa($receiver_0));
      this$_0.rxClass_6sflyw$($receiver, get_check(Fa.Companion), ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$contains_0));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$e) {
    return function () {
      return closure$e.invoke().name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$id) {
    return function (it) {
      return minus(it, closure$id);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$id) {
    return function (it) {
      return plus(it, closure$id);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$contains_0, this$ui_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$contains = closure$contains_0;
    this.local$this$ui = this$ui_0;
    this.local$closure$id = closure$id_0;
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
            if (this.local$closure$contains.now) {
              return this.local$this$ui.editing.current.tags.rxv.transform_ru8m0w$(ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this.local$closure$id)), Unit;
            }
             else {
              return this.local$this$ui.editing.current.tags.rxv.transform_ru8m0w$(ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$closure$id)), Unit;
            }

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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$contains_0, this$ui_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$contains_0, this$ui_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1(closure$visibleCount_0, this$ui_0, $receiver_0, e_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$visibleCount = closure$visibleCount_0;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$e = e_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver.incremented_eoy9qo$(this.local$closure$visibleCount);
            var id = get_idOrFail(this.local$e);
            var contains = this.local$$receiver.rx_y6x17j$(ui$lambda$lambda$lambda$lambda$lambda$lambda(this.local$this$ui, id));
            var $receiver = widget.factory.listGroupButton;
            var this$ui = this.local$this$ui;
            get_insert($receiver.left).wraps.div_iw61es$(ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(contains, this.local$$receiver));
            this.local$$receiver.remAssign_7fncnf$($receiver.text, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$e));
            this$ui.click_b0jn9q$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(contains, this$ui, id));
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
  function ui$lambda$lambda$lambda$lambda$lambda_6(closure$visibleCount_0, this$ui_0) {
    return function ($receiver_0, e_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1(closure$visibleCount_0, this$ui_0, $receiver_0, e_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_0(this$ui, closure$filter, closure$visibleCount) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).listGroup;
      var this$ui_0 = this$ui;
      var closure$filter_0 = closure$filter;
      var closure$visibleCount_0 = closure$visibleCount;
      this$ui_0.list_qlxt6c$($receiver_0, this$ui_0.mapLive_1mq1ue$(this$ui_0.filter_hu0si9$(this$ui_0.events_9k4h2$(this$ui_0.loggedIn.tags.list), ui$lambda$lambda$lambda$lambda$lambda_5(closure$filter_0)), ui$lambda$lambda$lambda$lambda$lambda_6(closure$visibleCount_0, this$ui_0)));
      return Unit;
    };
  }
  function ui$lambda_1(this$ui) {
    return function ($receiver) {
      var filter = new Var('');
      var visibleCount = new Var(0);
      var clearFilter = new Listeners();
      var canCreate = this$ui.rx_y6x17j$(ui$lambda$lambda_0(filter, this$ui));
      var create = ui$lambda$create(canCreate, this$ui, filter, clearFilter);
      get_flexGrow1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).form;
      var this$ui_0 = this$ui;
      $receiver_0.onsubmit_gbr1zf$(ui$lambda$lambda$lambda(create));
      var $receiver_1 = $receiver_0.cls;
      get_p1($receiver_1);
      get_borderBottom($receiver_1);
      var $receiver_2 = $receiver_0.insert.inputGroup;
      var $receiver_3 = $receiver_2.input;
      invoke($receiver_3.node, ui$lambda$lambda$lambda$lambda$lambda);
      this$ui_0.bind_igb9j9$($receiver_3, filter);
      clearFilter.plusAssign_o14v8n$(ui$lambda$lambda$lambda$lambda$lambda_0($receiver_3, filter));
      var $receiver_4 = $receiver_2.appendButton;
      $receiver_4.outlineSecondary;
      get_eraser($receiver_4.fa);
      this$ui_0.enabled_hlnvpg$($receiver_4, ui$lambda$lambda$lambda$lambda$lambda_1(filter));
      this$ui_0.click_3xepc3$($receiver_4, ui$lambda$lambda$lambda$lambda$lambda_2(clearFilter));
      var $receiver_5 = $receiver_2.appendButton;
      $receiver_5.outlineSecondary;
      get_plus($receiver_5.fa);
      this$ui_0.enabled_hlnvpg$($receiver_5, ui$lambda$lambda$lambda$lambda$lambda_3(canCreate));
      this$ui_0.click_3xepc3$($receiver_5, ui$lambda$lambda$lambda$lambda$lambda_4(create));
      var $receiver_6 = get_insert_0($receiver).scrollPane;
      var this$ui_1 = this$ui;
      get_bgLight($receiver_6.cls);
      invoke($receiver_6.pane, ui$lambda$lambda$lambda_0(this$ui_1, filter, visibleCount));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda(closure$active, closure$mainPage) {
    return function () {
      closure$active.remAssign_11rb$(closure$mainPage);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_0(closure$active, closure$tagsPage) {
    return function () {
      closure$active.remAssign_11rb$(closure$tagsPage);
      return Unit;
    };
  }
  function ui$lambda$lambda_1(closure$active) {
    return function () {
      return closure$active.invoke();
    };
  }
  function ui$lambda_2(closure$active, this$ui) {
    return function ($receiver) {
      get_leftRightTopBottom0(get_cls($receiver));
      this$ui.remAssign_wgabca$(get_widget($receiver), ui$lambda$lambda_1(closure$active));
      return Unit;
    };
  }
  function ui_1($receiver) {
    var $receiver_0 = widget.factory.scrollPane;
    invoke($receiver_0.pane, ui$lambda$lambda($receiver));
    var mainPage = $receiver_0.node;
    var tagsPage = column(document, ui$lambda_1($receiver));
    var active = new Var(mainPage);
    var $receiver_1 = widget.factory.topbar;
    $receiver.get_backSaveDiscard_e1rmy3$($receiver_1.slots.left);
    remAssign($receiver_1.title, 'Edit Task');
    $receiver.get_saveDeleteButton_tdhe4g$($receiver_1.right);
    var $receiver_2 = $receiver_1.tabs;
    var $receiver_3 = $receiver_2.tab;
    $receiver.get_clickActivate_tvm2vp$($receiver_3);
    get_list($receiver_3.icon.fa);
    $receiver_3.activate();
    $receiver_3.onActivate.plusAssign_o14v8n$(ui$lambda$lambda$lambda$lambda(active, mainPage));
    var $receiver_4 = $receiver_2.tab;
    $receiver.get_clickActivate_tvm2vp$($receiver_4);
    get_tags($receiver_4.icon.fa);
    $receiver_4.onActivate.plusAssign_o14v8n$(ui$lambda$lambda$lambda$lambda_0(active, tagsPage));
    return new TopAndContent($receiver_1.node, column(document, ui$lambda_2(active, $receiver)));
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
    this.$delegate_5jys36$_0 = body;
    this.home_61f1h$_0 = this;
    var app = commonfb.FB.app;
    launch(this, void 0, void 0, Home_init$lambda(app, this));
  }
  Object.defineProperty(Home.prototype, 'home', {
    get: function () {
      return this.home_61f1h$_0;
    }
  });
  Object.defineProperty(Home.prototype, 'body', {
    get: function () {
      return this.$delegate_5jys36$_0.body;
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
  function ListTagsPath() {
  }
  ListTagsPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ListTagsPath',
    interfaces: [LoggedInPath]
  };
  function ListTags(from) {
    ForwardBase_init(from, this);
    this.from_8pihio$_0 = from;
    this.listTags_94cxx9$_0 = this;
    this.rawView_7hlzpv$_0 = ui_2(this);
  }
  Object.defineProperty(ListTags.prototype, 'from', {
    get: function () {
      return this.from_8pihio$_0;
    }
  });
  Object.defineProperty(ListTags.prototype, 'listTags', {
    get: function () {
      return this.listTags_94cxx9$_0;
    }
  });
  function Coroutine$ListTags$newTag$lambda$lambda(this$ListTags_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ListTags = this$ListTags_0;
  }
  Coroutine$ListTags$newTag$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ListTags$newTag$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ListTags$newTag$lambda$lambda.prototype.constructor = Coroutine$ListTags$newTag$lambda$lambda;
  Coroutine$ListTags$newTag$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new EditTag(this.local$this$ListTags, this.local$this$ListTags.toRandomFsDoc_xc7wmg$(new Tag(), this.local$this$ListTags.loggedIn.userTags));
            $receiver.get_live_73z9b6$($receiver.item);
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
  function ListTags$newTag$lambda$lambda(this$ListTags_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ListTags$newTag$lambda$lambda(this$ListTags_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ListTags$newTag$lambda(this$ListTags_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ListTags = this$ListTags_0;
  }
  Coroutine$ListTags$newTag$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ListTags$newTag$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ListTags$newTag$lambda.prototype.constructor = Coroutine$ListTags$newTag$lambda;
  Coroutine$ListTags$newTag$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ListTags.forward.switchTo_cbny1b$(ListTags$newTag$lambda$lambda(this.local$this$ListTags), this);
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
  function ListTags$newTag$lambda(this$ListTags_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ListTags$newTag$lambda(this$ListTags_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ListTags.prototype.newTag = function () {
    this.exec(ListTags$newTag$lambda(this));
  };
  function Coroutine$ListTags$edit$lambda$lambda(this$ListTags_0, this$edit_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ListTags = this$ListTags_0;
    this.local$this$edit = this$edit_0;
  }
  Coroutine$ListTags$edit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ListTags$edit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ListTags$edit$lambda$lambda.prototype.constructor = Coroutine$ListTags$edit$lambda$lambda;
  Coroutine$ListTags$edit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new EditTag(this.local$this$ListTags, this.local$this$edit);
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
  function ListTags$edit$lambda$lambda(this$ListTags_0, this$edit_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ListTags$edit$lambda$lambda(this$ListTags_0, this$edit_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ListTags$edit$lambda(this$ListTags_0, this$edit_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ListTags = this$ListTags_0;
    this.local$this$edit = this$edit_0;
  }
  Coroutine$ListTags$edit$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ListTags$edit$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ListTags$edit$lambda.prototype.constructor = Coroutine$ListTags$edit$lambda;
  Coroutine$ListTags$edit$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ListTags.forward.switchTo_cbny1b$(ListTags$edit$lambda$lambda(this.local$this$ListTags, this.local$this$edit), this);
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
  function ListTags$edit$lambda(this$ListTags_0, this$edit_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ListTags$edit$lambda(this$ListTags_0, this$edit_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ListTags.prototype.edit_uey29u$ = function ($receiver) {
    this.exec(ListTags$edit$lambda(this, $receiver));
  };
  Object.defineProperty(ListTags.prototype, 'rawView', {
    get: function () {
      return this.rawView_7hlzpv$_0;
    }
  });
  Object.defineProperty(ListTags.prototype, 'body', {
    get: function () {
      return this.from.body;
    }
  });
  Object.defineProperty(ListTags.prototype, 'db', {
    get: function () {
      return this.from.db;
    }
  });
  Object.defineProperty(ListTags.prototype, 'home', {
    get: function () {
      return this.from.home;
    }
  });
  Object.defineProperty(ListTags.prototype, 'loggedIn', {
    get: function () {
      return this.from.loggedIn;
    }
  });
  ListTags.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListTags',
    interfaces: [FBFromApi, ListTagsPath, LoggedInPath, ForwardBase]
  };
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
            return this.local$this$ui.newTag(), Unit;
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
  function ui$lambda$lambda$lambda_1(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$tag) {
    return function () {
      return closure$tag.invoke().name.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda(closure$tag_0, this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$tag = closure$tag_0;
    this.local$this$ui = this$ui_0;
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
            return this.local$this$ui.edit_uey29u$(this.local$closure$tag), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$tag_0, this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda(closure$tag_0, this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda(this$ui_0, $receiver_0, tag_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$tag = tag_0;
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
            this.local$$receiver.remAssign_7fncnf$($receiver.text, ui$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$tag));
            this$ui.click_b0jn9q$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_1(this.local$tag, this$ui));
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
    return function ($receiver_0, tag_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda(this$ui_0, $receiver_0, tag_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda_2(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).listGroup;
      var this$ui_0 = this$ui;
      this$ui_0.list_qlxt6c$($receiver_0, this$ui_0.mapLive_1mq1ue$(this$ui_0.events_9k4h2$(this$ui_0.loggedIn.tags.list), ui$lambda$lambda$lambda$lambda_1(this$ui_0)));
      return Unit;
    };
  }
  function ui_2($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backButton_ihoiae$($receiver_0);
    remAssign($receiver_0.title, 'Tags');
    var $receiver_1 = $receiver_0.right.button;
    $receiver_1.m1p2;
    $receiver_1.primary;
    get_plus($receiver_1.fa);
    $receiver.click_3xepc3$($receiver_1, ui$lambda$lambda$lambda_1($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_2 = widget.factory.scrollPane;
    invoke($receiver_2.pane, ui$lambda$lambda_2($receiver));
    return new TopAndContent(tmp$, $receiver_2.node);
  }
  function StatusFilter() {
    StatusFilter$Companion_getInstance();
  }
  function StatusFilter$All() {
    StatusFilter$All_instance = this;
    StatusFilter.call(this);
    this.key_yi8pua$_0 = 'all';
    this.label_avcj21$_0 = 'All';
  }
  Object.defineProperty(StatusFilter$All.prototype, 'key', {
    get: function () {
      return this.key_yi8pua$_0;
    }
  });
  Object.defineProperty(StatusFilter$All.prototype, 'label', {
    get: function () {
      return this.label_avcj21$_0;
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
    this.label_wot4me$_0 = this.status.name;
    this.key_okv691$_0 = this.status.name;
  }
  Object.defineProperty(StatusFilter$Single.prototype, 'label', {
    get: function () {
      return this.label_wot4me$_0;
    }
  });
  Object.defineProperty(StatusFilter$Single.prototype, 'key', {
    get: function () {
      return this.key_okv691$_0;
    }
  });
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
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
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function StatusFilter$Completed(value) {
    StatusFilter$Completed$Companion_getInstance();
    StatusFilter.call(this);
    this.value = value;
    var $receiver = TaskStatus$values();
    var destination = ArrayList_init_0();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      if (element.completed === this.value)
        destination.add_11rb$(element);
    }
    var list = destination;
    this.label_7scwz5$_0 = (this.value ? 'Finished' : 'Not Finished') + ' (' + joinToString(list, ', ', void 0, void 0, void 0, void 0, StatusFilter$Completed$label$lambda$lambda) + ')';
    this.key_6ahcxo$_0 = this.value.toString();
  }
  Object.defineProperty(StatusFilter$Completed.prototype, 'label', {
    get: function () {
      return this.label_7scwz5$_0;
    }
  });
  Object.defineProperty(StatusFilter$Completed.prototype, 'key', {
    get: function () {
      return this.key_6ahcxo$_0;
    }
  });
  function StatusFilter$Completed$Companion() {
    StatusFilter$Completed$Companion_instance = this;
    this.values = listOf([new StatusFilter$Completed(true), new StatusFilter$Completed(false)]);
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
    this.values_qeu4uo$_0 = lazy(StatusFilter$Companion$values$lambda);
    this.byKey_62fvve$_0 = lazy(StatusFilter$Companion$byKey$lambda(this));
  }
  Object.defineProperty(StatusFilter$Companion.prototype, 'values', {
    get: function () {
      return this.values_qeu4uo$_0.value;
    }
  });
  Object.defineProperty(StatusFilter$Companion.prototype, 'byKey_0', {
    get: function () {
      return this.byKey_62fvve$_0.value;
    }
  });
  StatusFilter$Companion.prototype.valueOf_61zpoe$ = function (key) {
    return getValue(this.byKey_0, key);
  };
  function StatusFilter$Companion$values$lambda() {
    return flatten(listOf([listOf_0(StatusFilter$All_getInstance()), StatusFilter$Single$Companion_getInstance().values, StatusFilter$Completed$Companion_getInstance().values]));
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  function StatusFilter$Companion$byKey$lambda(this$StatusFilter$) {
    return function () {
      var $receiver = this$StatusFilter$.values;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
      var destination = LinkedHashMap_init(capacity);
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        destination.put_xwzc9p$(element.key, element);
      }
      return destination;
    };
  }
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
  FilterValues.prototype.copy_ke2r9r$ = function (status, tags) {
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
      $receiver.eq_bo9m63$(Task.Companion.status, fv.status.status);
    else if (Kotlin.isType(tmp$, StatusFilter$Completed))
      $receiver.eq_bo9m63$(Task.Companion.completed, fv.status.value);
    if (!fv.tags.isEmpty()) {
      if (fv.tags.size === 1) {
        $receiver.arrayContains_s44rpz$(Task.Companion.tags, first(fv.tags));
      }
       else {
        $receiver.arrayContains_s44rpz$(Task.Companion.tagsx, get_multiTags(fv.tags));
      }
    }
  }
  function ListTasksPath() {
  }
  ListTasksPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ListTasksPath',
    interfaces: [LoggedInPath]
  };
  function ListTasks(from) {
    ForwardBase_init(from, this);
    this.from_krzzrg$_0 = from;
    this.listTasks_o3qwue$_0 = this;
    this.tags = new Var(emptyList());
    this.rawView_1h7hft$_0 = ui_3(this);
  }
  Object.defineProperty(ListTasks.prototype, 'from', {
    get: function () {
      return this.from_krzzrg$_0;
    }
  });
  Object.defineProperty(ListTasks.prototype, 'listTasks', {
    get: function () {
      return this.listTasks_o3qwue$_0;
    }
  });
  function Coroutine$ListTasks$selectTags$lambda$lambda(this$ListTasks_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ListTasks = this$ListTasks_0;
  }
  Coroutine$ListTasks$selectTags$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ListTasks$selectTags$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ListTasks$selectTags$lambda$lambda.prototype.constructor = Coroutine$ListTasks$selectTags$lambda$lambda;
  Coroutine$ListTasks$selectTags$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new SelectTags(this.local$this$ListTasks, this.local$this$ListTasks.tags);
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
  function ListTasks$selectTags$lambda$lambda(this$ListTasks_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ListTasks$selectTags$lambda$lambda(this$ListTasks_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ListTasks$selectTags$lambda(this$ListTasks_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ListTasks = this$ListTasks_0;
  }
  Coroutine$ListTasks$selectTags$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ListTasks$selectTags$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ListTasks$selectTags$lambda.prototype.constructor = Coroutine$ListTasks$selectTags$lambda;
  Coroutine$ListTasks$selectTags$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ListTasks.forward.switchTo_cbny1b$(ListTasks$selectTags$lambda$lambda(this.local$this$ListTasks), this);
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
  function ListTasks$selectTags$lambda(this$ListTasks_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ListTasks$selectTags$lambda(this$ListTasks_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ListTasks.prototype.selectTags = function () {
    this.exec(ListTasks$selectTags$lambda(this));
  };
  Object.defineProperty(ListTasks.prototype, 'rawView', {
    get: function () {
      return this.rawView_1h7hft$_0;
    }
  });
  Object.defineProperty(ListTasks.prototype, 'body', {
    get: function () {
      return this.from.body;
    }
  });
  Object.defineProperty(ListTasks.prototype, 'db', {
    get: function () {
      return this.from.db;
    }
  });
  Object.defineProperty(ListTasks.prototype, 'home', {
    get: function () {
      return this.from.home;
    }
  });
  Object.defineProperty(ListTasks.prototype, 'loggedIn', {
    get: function () {
      return this.from.loggedIn;
    }
  });
  ListTasks.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListTasks',
    interfaces: [ViewTaskApi, FBFromApi, ListTasksPath, LoggedInPath, ForwardBase]
  };
  function ui$lambda$lambda$lambda$lambda_2($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_m1($receiver_0);
    get_justifySelfEnd($receiver_0);
    remAssign($receiver, 'Status');
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$f) {
    return function ($receiver) {
      $receiver.value = closure$f.key;
      remAssign($receiver, closure$f.label);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_7(it) {
    return it.key;
  }
  function ui$lambda$lambda$lambda$lambda$lambda_8(it) {
    return StatusFilter$Companion_getInstance().valueOf_61zpoe$(it);
  }
  function ui$lambda$lambda$lambda$lambda_3($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_m1($receiver_0);
    get_justifySelfEnd($receiver_0);
    remAssign($receiver, 'Tags');
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui, closure$id) {
    return function () {
      return this$ui.loggedIn.tags.lookup.get_11rb$(closure$id).invoke().name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$id) {
    return function (it) {
      return minus_0(it, closure$id);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$closure$id = closure$id_0;
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
            return this.local$this$ui.tags.transform_ru8m0w$(ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this.local$closure$id)), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ui) {
    return function ($receiver) {
      var $receiver_0 = this$ui.tags.invoke();
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$ui_0 = this$ui;
        var $receiver_1 = get_insert_0($receiver).badgeAnchor;
        var $receiver_2 = $receiver_1.cls;
        get_m1($receiver_2);
        get_fontSize100($receiver_2);
        $receiver_1.pill;
        $receiver_1.secondary;
        this$ui_0.remAssign_7fncnf$($receiver_1.text, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, element));
        this$ui_0.click_qob2x9$($receiver_1, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, element));
      }
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_3(this$ui) {
    return function () {
      return invoke(get_div(document), ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ui));
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_9(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_dFlex($receiver_0);
      get_flexWrap($receiver_0);
      this$ui.remAssign_wgabca$(get_widget($receiver), ui$lambda$lambda$lambda$lambda$lambda$lambda_3(this$ui));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
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
            return this.local$this$ui.selectTags(), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_4(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_4(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_justifySelfStart($receiver_0);
      get_alignItemsCenter($receiver_0);
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda$lambda_9(this$ui));
      var $receiver_1 = get_insert_0($receiver).button;
      var this$ui_0 = this$ui;
      var $receiver_2 = $receiver_1.cls;
      get_p1($receiver_2);
      get_ml1($receiver_2);
      $receiver_1.primary;
      get_ellipsisH($receiver_1.fa);
      this$ui_0.click_3xepc3$($receiver_1, ui$lambda$lambda$lambda$lambda$lambda$lambda_4(this$ui_0));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_2(closure$statusFilter, this$ui) {
    return function ($receiver) {
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda_2);
      var $receiver_0 = get_insert_0($receiver).select;
      var closure$statusFilter_0 = closure$statusFilter;
      var this$ui_0 = this$ui;
      var $receiver_1 = $receiver_0.cls;
      get_m1($receiver_1);
      get_justifySelfStart($receiver_1);
      var tmp$;
      tmp$ = StatusFilter$Companion_getInstance().values.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        invoke($receiver_0.option, ui$lambda$lambda$lambda$lambda$lambda$lambda_2(element));
      }
      this$ui_0.bind_xy1r9h$($receiver_0, this$ui_0.linked_n1nom7$(closure$statusFilter_0, ui$lambda$lambda$lambda$lambda$lambda_7, ui$lambda$lambda$lambda$lambda$lambda_8));
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda_3);
      row($receiver, ui$lambda$lambda$lambda$lambda_4(this$ui));
      return Unit;
    };
  }
  function ui$lambda_3(closure$statusFilter, this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_borderBottom($receiver_0);
      flexFixedSize($receiver_0);
      get_p1($receiver_0);
      var $receiver_1 = get_insert_0($receiver).grid;
      var closure$statusFilter_0 = closure$statusFilter;
      var this$ui_0 = this$ui;
      var $receiver_2 = $receiver_1.cls;
      get_bgLight($receiver_2);
      get_border($receiver_2);
      get_rounded($receiver_2);
      $receiver_1.center;
      $receiver_1.alignItemsCenter;
      $receiver_1.get_columns_s8ev3n$(2);
      invoke($receiver_1.node, ui$lambda$lambda$lambda_2(closure$statusFilter_0, this$ui_0));
      return Unit;
    };
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
            return this.local$this$ui.newTask(), Unit;
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
  function ui$lambda$lambda$lambda_3(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda_0(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda_3(closure$filterVisible, closure$filter) {
    return function () {
      return closure$filterVisible.invoke() ? closure$filter : null;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$statusFilter, this$ui) {
    return function ($receiver) {
      setup($receiver, new FilterValues(closure$statusFilter.invoke(), this$ui.tags.invoke()));
      $receiver.get_asc_5eq60p$(Task.Companion.title);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$t) {
    return function () {
      return closure$t.invoke().title.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$t_0, this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$t = closure$t_0;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.view_50dwps$(this.local$closure$t), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$t_0, this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$t_0, this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui_0, $receiver_0, t_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$t = t_0;
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
            var $receiver = widget.factory.listGroupButton;
            var this$ui = this.local$this$ui;
            this.local$$receiver.remAssign_7fncnf$($receiver.text, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this.local$t));
            this$ui.click_b0jn9q$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this.local$t, this$ui));
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_6(this$ui_0) {
    return function ($receiver_0, t_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui_0, $receiver_0, t_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_5(this$ui, closure$statusFilter) {
    return function ($receiver) {
      var $receiver_0 = widget.factory.listGroup;
      var this$ui_0 = this$ui;
      var closure$statusFilter_0 = closure$statusFilter;
      get_bgWhite($receiver_0.cls);
      this$ui_0.list_qlxt6c$($receiver_0, $receiver.mapLive_1mq1ue$(this$ui_0.listEvents_pujjsl$(this$ui_0.loggedIn.tasksCollection, ui$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$statusFilter_0, this$ui_0)), ui$lambda$lambda$lambda$lambda$lambda$lambda_6(this$ui_0)));
      return $receiver_0.node;
    };
  }
  function ui$lambda$lambda$lambda_4(this$ui, closure$statusFilter) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      this$ui.remAssign_djv61p$(get_widget($receiver), this$ui.rx_y6x17j$(ui$lambda$lambda$lambda$lambda_5(this$ui, closure$statusFilter)));
      return Unit;
    };
  }
  function ui$lambda_4(closure$filterVisible, closure$filter, this$ui, closure$statusFilter) {
    return function ($receiver) {
      get_leftRightTopBottom0(get_cls($receiver));
      this$ui.remAssign_wgabca$(get_widget($receiver), ui$lambda$lambda_3(closure$filterVisible, closure$filter));
      var $receiver_0 = get_insert_0($receiver).scrollPane;
      var this$ui_0 = this$ui;
      var closure$statusFilter_0 = closure$statusFilter;
      get_bgLight($receiver_0.cls);
      invoke($receiver_0.pane, ui$lambda$lambda$lambda_4(this$ui_0, closure$statusFilter_0));
      $receiver_0.node;
      return Unit;
    };
  }
  function ui_3($receiver) {
    var statusFilter = new Var(new StatusFilter$Completed(true));
    var filter = invoke(get_div(document), ui$lambda_3(statusFilter, $receiver));
    var filterVisible = new Var(false);
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backButton_ihoiae$($receiver_0);
    remAssign($receiver_0.title, 'Tags');
    var $receiver_1 = $receiver_0.tabs.tab;
    get_filter($receiver_1.icon.fa);
    $receiver.get_clickToggle_tvm2vp$($receiver_1);
    $receiver.feedTo_9o5f67$($receiver_1.isActive, filterVisible);
    var $receiver_2 = $receiver_0.right.button;
    $receiver_2.m1p2;
    $receiver_2.primary;
    get_plus($receiver_2.fa);
    $receiver.click_3xepc3$($receiver_2, ui$lambda$lambda$lambda_3($receiver));
    return new TopAndContent($receiver_0.node, column(document, ui$lambda_4(filterVisible, filter, $receiver, statusFilter)));
  }
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
    this.db_8bjtz0$_0 = db;
    this.$delegate_6gm236$_0 = home;
    this.userState_pmv4wc$_0 = new UserState$LoggedIn(user);
    this.loggedIn_nsz177$_0 = this;
    this.private = get_private(taskslib.tasksLib.app).doc_61zpoe$(user.uid);
    this.tasksCollection = get_tasks(this.private);
    this.hiddenTasks = get_hiddenTasks(this.private);
    this.userTags = get_usertags(this.private);
    this.hiddenList = this.toList_pujjsl$(this.hiddenTasks);
    this.hiddenIds = this.get_ids_qko62t$(this.hiddenList);
    this.tags = this.fsCache_aujjp8$(this.listEvents_pujjsl$(this.userTags, LoggedIn$tags$lambda), LoggedIn$tags$lambda_0);
    var $receiver = new Var(emptySet());
    this.forEach_xwzbbo$(this.rx_y6x17j$(LoggedIn$tagNameSet$lambda$lambda(this)), LoggedIn$tagNameSet$lambda$lambda_0($receiver));
    this.tagNameSet = get_readOnly($receiver);
    this.rawView_farok3$_0 = ui_4(this);
  }
  Object.defineProperty(LoggedIn.prototype, 'db', {
    get: function () {
      return this.db_8bjtz0$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'userState', {
    get: function () {
      return this.userState_pmv4wc$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'loggedIn', {
    get: function () {
      return this.loggedIn_nsz177$_0;
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
  function Coroutine$LoggedIn$listTasks$lambda$lambda(this$LoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$listTasks$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$listTasks$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$listTasks$lambda$lambda.prototype.constructor = Coroutine$LoggedIn$listTasks$lambda$lambda;
  Coroutine$LoggedIn$listTasks$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new ListTasks(this.local$this$LoggedIn);
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
  function LoggedIn$listTasks$lambda$lambda(this$LoggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$listTasks$lambda$lambda(this$LoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$LoggedIn$listTasks$lambda(this$LoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$listTasks$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$listTasks$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$listTasks$lambda.prototype.constructor = Coroutine$LoggedIn$listTasks$lambda;
  Coroutine$LoggedIn$listTasks$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.forward.switchTo_cbny1b$(LoggedIn$listTasks$lambda$lambda(this.local$this$LoggedIn), this);
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
  function LoggedIn$listTasks$lambda(this$LoggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$listTasks$lambda(this$LoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.listTasks = function () {
    this.exec(LoggedIn$listTasks$lambda(this));
  };
  LoggedIn.prototype.hide_50dwps$ = function ($receiver) {
    this.save_73z9b6$(get_new(this.hiddenTasks.doc_61zpoe$(get_idOrFail($receiver))));
  };
  LoggedIn.prototype.unhideAll = function () {
    var tmp$;
    tmp$ = this.hiddenList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.delete_73z9b6$(element);
    }
  };
  LoggedIn.prototype.createTag_61zpoe$ = function (name) {
    var $receiver = new Tag();
    $receiver.name.remAssign_11rc$(name);
    var $receiver_0 = this.toRandomFsDoc_xc7wmg$($receiver, this.userTags);
    this.save_73z9b6$($receiver_0);
    return $receiver_0;
  };
  function Coroutine$LoggedIn$listTags$lambda$lambda(this$LoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$listTags$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$listTags$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$listTags$lambda$lambda.prototype.constructor = Coroutine$LoggedIn$listTags$lambda$lambda;
  Coroutine$LoggedIn$listTags$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new ListTags(this.local$this$LoggedIn);
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
  function LoggedIn$listTags$lambda$lambda(this$LoggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$listTags$lambda$lambda(this$LoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$LoggedIn$listTags$lambda(this$LoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$listTags$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$listTags$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$listTags$lambda.prototype.constructor = Coroutine$LoggedIn$listTags$lambda;
  Coroutine$LoggedIn$listTags$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.forward.switchTo_cbny1b$(LoggedIn$listTags$lambda$lambda(this.local$this$LoggedIn), this);
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
  function LoggedIn$listTags$lambda(this$LoggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$listTags$lambda(this$LoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.listTags = function () {
    this.exec(LoggedIn$listTags$lambda(this));
  };
  Object.defineProperty(LoggedIn.prototype, 'rawView', {
    get: function () {
      return this.rawView_farok3$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'body', {
    get: function () {
      return this.$delegate_6gm236$_0.body;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'home', {
    get: function () {
      return this.$delegate_6gm236$_0.home;
    }
  });
  function LoggedIn$tags$lambda($receiver) {
    $receiver.get_asc_5eq60p$(Tag.Companion.name);
    return Unit;
  }
  function LoggedIn$tags$lambda_0(id) {
    var $receiver = new Tag();
    $receiver.name.remAssign_11rc$(id);
    return $receiver;
  }
  function LoggedIn$tagNameSet$lambda$lambda(this$LoggedIn) {
    return function ($receiver) {
      var $receiver_0 = this$LoggedIn.tags.list.allRx.invoke();
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.invoke().name.invoke());
      }
      return toSet(destination);
    };
  }
  function LoggedIn$tagNameSet$lambda$lambda_0(this$) {
    return function ($receiver, it) {
      this$.remAssign_11rb$(it);
      return Unit;
    };
  }
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [ViewTaskApi, FBApi, LoggedInPath, HomePath, UserStateView, ForwardBase]
  };
  function Coroutine$ui$lambda$lambda$lambda$lambda_0(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
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
  function ui$lambda$lambda$lambda$lambda_6(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_0(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_7(this$ui) {
    return function () {
      return this$ui.hiddenList.sizeRx.invoke().toString();
    };
  }
  function ui$lambda$lambda$lambda_5(this$ui) {
    return function ($receiver) {
      return !this$ui.hiddenList.isEmptyRx.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda_1(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda_1.prototype.constructor = Coroutine$ui$lambda$lambda$lambda_1;
  Coroutine$ui$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.unhideAll(), Unit;
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
  function ui$lambda$lambda$lambda_6(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda_1(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
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
            return this.local$this$ui.newTask(), Unit;
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
  function ui$lambda$lambda$lambda$lambda_8(this$ui_0) {
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
            return this.local$this$ui.listTasks(), Unit;
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
  function ui$lambda$lambda$lambda$lambda_9(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_2(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.listTags(), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_10(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.get_desc_5eq60p$(Task.Companion.ts);
    $receiver.eq_bo9m63$(Task.Companion.completed, false);
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda_11(this$ui) {
    return function ($receiver, t) {
      return !$receiver.containsRx_1w65cx$(this$ui.hiddenIds, get_idOrFail(t)).invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$cl) {
    return function () {
      return closure$cl.rxv.invoke().title.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$cl_0, this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$cl = closure$cl_0;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.view_50dwps$(this.local$closure$cl), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$cl_0, this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$cl_0, this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cl_0, this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$cl = closure$cl_0;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.hide_50dwps$(this.local$closure$cl), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$cl_0, this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cl_0, this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_3(this$ui_0, $receiver_0, cl_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$cl = cl_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda_3.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda_3;
  Coroutine$ui$lambda$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = widget.factory.nestedListButton;
            var this$ui = this.local$this$ui;
            this.local$$receiver.remAssign_7fncnf$($receiver.text, ui$lambda$lambda$lambda$lambda$lambda$lambda_7(this.local$cl));
            this$ui.click_htd9kn$($receiver.anchor, ui$lambda$lambda$lambda$lambda$lambda$lambda_8(this.local$cl, this$ui));
            var $receiver_0 = $receiver.right.button;
            $receiver_0.p2;
            $receiver_0.secondary;
            get_eyeSlash($receiver_0.fa);
            this$ui.click_3xepc3$($receiver_0, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this.local$cl, this$ui));
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
  function ui$lambda$lambda$lambda$lambda_12(this$ui_0) {
    return function ($receiver_0, cl_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_3(this$ui_0, $receiver_0, cl_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda_4(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).listGroup;
      var this$ui_0 = this$ui;
      get_m1($receiver_0.cls);
      this$ui_0.list_u1uvxv$($receiver_0.node, this$ui_0.mapLive_1mq1ue$(this$ui_0.filter_hu0si9$(this$ui_0.listEvents_pujjsl$(this$ui_0.tasksCollection, ui$lambda$lambda$lambda$lambda_10), ui$lambda$lambda$lambda$lambda_11(this$ui_0)), ui$lambda$lambda$lambda$lambda_12(this$ui_0)));
      return Unit;
    };
  }
  function ui_4($receiver) {
    var $receiver_0 = widget.factory.topbar;
    remAssign($receiver_0.title, 'Tasks');
    var $receiver_1 = $receiver_0.left.dropdown;
    $receiver_1.bars;
    $receiver.signOut_7wq8x$($receiver_1.menu, ui$lambda$lambda$lambda$lambda_6($receiver));
    var $receiver_2 = $receiver_0.right.button;
    $receiver_2.m1p2;
    get_eye($receiver_2.fa);
    get_btnInfo($receiver_2.cls);
    var $receiver_3 = $receiver_2.insert.badge;
    get_m1($receiver_3.cls);
    $receiver_3.warning;
    $receiver_3.pill;
    $receiver.remAssign_7fncnf$($receiver_3.node, ui$lambda$lambda$lambda$lambda_7($receiver));
    $receiver.visible_od9jl4$($receiver_2, ui$lambda$lambda$lambda_5($receiver));
    $receiver.click_3xepc3$($receiver_2, ui$lambda$lambda$lambda_6($receiver));
    var $receiver_4 = $receiver_0.right.buttonGroup;
    get_m1($receiver_4.cls);
    var $receiver_5 = $receiver_4.button;
    $receiver_5.p2;
    get_plus($receiver_5.fa);
    $receiver_5.primary;
    $receiver.click_3xepc3$($receiver_5, ui$lambda$lambda$lambda$lambda_8($receiver));
    var $receiver_6 = $receiver_4.button;
    $receiver_6.p2;
    get_search($receiver_6.fa);
    $receiver_6.primary;
    $receiver.click_3xepc3$($receiver_6, ui$lambda$lambda$lambda$lambda_9($receiver));
    $receiver_4.dropdownSplit.primary;
    var $receiver_7 = $receiver_4.menu;
    $receiver_7.right;
    var $receiver_8 = $receiver_7.item;
    get_tags($receiver_8.fa);
    $receiver_8.text.remAssign_61zpoe$('Tags');
    $receiver.click_ka8ib0$($receiver_8, ui$lambda$lambda$lambda$lambda$lambda_10($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_9 = widget.factory.scrollPane;
    invoke($receiver_9.pane, ui$lambda$lambda_4($receiver));
    return new TopAndContent(tmp$, $receiver_9.node);
  }
  function SelectTagsPath() {
  }
  SelectTagsPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SelectTagsPath',
    interfaces: [ListTasksPath]
  };
  function SelectTags(from, result) {
    ForwardBase_init(from, this);
    this.from_7js1g0$_0 = from;
    this.result = result;
    this.selectTags_5falzv$_0 = this;
    this.current = new Var(this.result.now);
    this.rawView_lihrpv$_0 = ui_5(this);
  }
  Object.defineProperty(SelectTags.prototype, 'from', {
    get: function () {
      return this.from_7js1g0$_0;
    }
  });
  Object.defineProperty(SelectTags.prototype, 'selectTags', {
    get: function () {
      return this.selectTags_5falzv$_0;
    }
  });
  SelectTags.prototype.cancel = function () {
    this.from.redisplay();
  };
  SelectTags.prototype.submit = function () {
    this.result.remAssign_11rb$(this.current.now);
    this.from.redisplay();
  };
  Object.defineProperty(SelectTags.prototype, 'rawView', {
    get: function () {
      return this.rawView_lihrpv$_0;
    }
  });
  Object.defineProperty(SelectTags.prototype, 'body', {
    get: function () {
      return this.from.body;
    }
  });
  Object.defineProperty(SelectTags.prototype, 'db', {
    get: function () {
      return this.from.db;
    }
  });
  Object.defineProperty(SelectTags.prototype, 'home', {
    get: function () {
      return this.from.home;
    }
  });
  Object.defineProperty(SelectTags.prototype, 'listTasks', {
    get: function () {
      return this.from.listTasks;
    }
  });
  Object.defineProperty(SelectTags.prototype, 'loggedIn', {
    get: function () {
      return this.from.loggedIn;
    }
  });
  SelectTags.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelectTags',
    interfaces: [FBFromApi, SelectTagsPath, ListTasksPath, ForwardBase]
  };
  function Coroutine$ui$lambda$lambda$lambda_2(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda_2.prototype.constructor = Coroutine$ui$lambda$lambda$lambda_2;
  Coroutine$ui$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.cancel(), Unit;
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
  function ui$lambda$lambda$lambda_7(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda_2(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda_3(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda_3.prototype.constructor = Coroutine$ui$lambda$lambda$lambda_3;
  Coroutine$ui$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.submit(), Unit;
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
  function ui$lambda$lambda$lambda_8(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda_3(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_9(this$ui, closure$id) {
    return function ($receiver) {
      return this$ui.current.invoke().contains_11rb$(closure$id);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$tag) {
    return function () {
      return closure$tag.invoke().name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$id) {
    return function (it) {
      return minus_0(it, closure$id);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$id) {
    return function (it) {
      return plus_0(it, closure$id);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$selected_0, this$ui_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$selected = closure$selected_0;
    this.local$this$ui = this$ui_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$closure$selected.now) {
              return this.local$this$ui.current.transform_ru8m0w$(ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this.local$closure$id)), Unit;
            }
             else {
              return this.local$this$ui.current.transform_ru8m0w$(ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this.local$closure$id)), Unit;
            }

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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_11(closure$selected_0, this$ui_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$selected_0, this$ui_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_4(this$ui_0, $receiver_0, tag_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$tag = tag_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda_4.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda_4;
  Coroutine$ui$lambda$lambda$lambda$lambda_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = widget.factory.listGroupButton;
            var this$ui = this.local$this$ui;
            var id = get_idOrFail(this.local$tag);
            var selected = this.local$$receiver.rx_y6x17j$(ui$lambda$lambda$lambda$lambda$lambda$lambda_9(this$ui, id));
            var $receiver_0 = $receiver.leftIcon;
            $receiver_0.fafw;
            this$ui.rxClass_62ldac$($receiver_0, get_check(Fa.Companion), selected);
            this.local$$receiver.remAssign_7fncnf$($receiver.text, ui$lambda$lambda$lambda$lambda$lambda$lambda_10(this.local$tag));
            this$ui.click_b0jn9q$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_11(selected, this$ui, id));
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
  function ui$lambda$lambda$lambda$lambda_13(this$ui_0) {
    return function ($receiver_0, tag_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_4(this$ui_0, $receiver_0, tag_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda_5(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).listGroup;
      var this$ui_0 = this$ui;
      this$ui_0.list_qlxt6c$($receiver_0, this$ui_0.mapLive_1mq1ue$(this$ui_0.events_9k4h2$(this$ui_0.loggedIn.tags.list), ui$lambda$lambda$lambda$lambda_13(this$ui_0)));
      return Unit;
    };
  }
  function ui_5($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backButton_ihoiae$($receiver_0);
    remAssign($receiver_0.title, 'Filter Tags');
    var $receiver_1 = $receiver_0.left.button;
    $receiver_1.m1p2;
    $receiver_1.secondary;
    get_times($receiver_1.fa);
    $receiver.click_3xepc3$($receiver_1, ui$lambda$lambda$lambda_7($receiver));
    var $receiver_2 = $receiver_0.right.button;
    $receiver_2.m1p2;
    $receiver_2.success;
    get_check($receiver_2.fa);
    $receiver.click_3xepc3$($receiver_2, ui$lambda$lambda$lambda_8($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_3 = widget.factory.scrollPane;
    invoke($receiver_3.pane, ui$lambda$lambda_5($receiver));
    return new TopAndContent(tmp$, $receiver_3.node);
  }
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
    if (commonui.isServiceWorkerSupported) {
      commonui.APP.startRegisteringServiceWorker();
    }
    launchGlobal(main$lambda$lambda(new Body(loading.target)));
  }
  function ViewTaskApi() {
  }
  function Coroutine$ViewTaskApi$newTask$lambda$lambda$lambda$lambda$lambda(this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$ViewTaskApi$newTask$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewTaskApi$newTask$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewTaskApi$newTask$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ViewTaskApi$newTask$lambda$lambda$lambda$lambda$lambda;
  Coroutine$ViewTaskApi$newTask$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new EditTask(this.local$this$);
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
  function ViewTaskApi$newTask$lambda$lambda$lambda$lambda$lambda(this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewTaskApi$newTask$lambda$lambda$lambda$lambda$lambda(this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewTaskApi$newTask$lambda$lambda(this$ViewTaskApi_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewTaskApi = this$ViewTaskApi_0;
    this.local$$receiver = void 0;
  }
  Coroutine$ViewTaskApi$newTask$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewTaskApi$newTask$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewTaskApi$newTask$lambda$lambda.prototype.constructor = Coroutine$ViewTaskApi$newTask$lambda$lambda;
  Coroutine$ViewTaskApi$newTask$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$this$ViewTaskApi.toRandomFsDoc_xc7wmg$(new Task(), this.local$this$ViewTaskApi.loggedIn.tasksCollection);
            var this$ViewTaskApi = this.local$this$ViewTaskApi;
            this.local$$receiver = new ViewTask(this$ViewTaskApi.loggedIn, this$ViewTaskApi, $receiver);
            this.local$$receiver.get_live_73z9b6$(this.local$$receiver.item);
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.forward.switchTo_cbny1b$(ViewTaskApi$newTask$lambda$lambda$lambda$lambda$lambda(this.local$$receiver), this);
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
  function ViewTaskApi$newTask$lambda$lambda(this$ViewTaskApi_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewTaskApi$newTask$lambda$lambda(this$ViewTaskApi_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewTaskApi$newTask$lambda(this$ViewTaskApi_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewTaskApi = this$ViewTaskApi_0;
  }
  Coroutine$ViewTaskApi$newTask$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewTaskApi$newTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewTaskApi$newTask$lambda.prototype.constructor = Coroutine$ViewTaskApi$newTask$lambda;
  Coroutine$ViewTaskApi$newTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ViewTaskApi.forward.switchTo_cbny1b$(ViewTaskApi$newTask$lambda$lambda(this.local$this$ViewTaskApi), this);
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
  function ViewTaskApi$newTask$lambda(this$ViewTaskApi_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewTaskApi$newTask$lambda(this$ViewTaskApi_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ViewTaskApi.prototype.newTask = function () {
    this.exec(ViewTaskApi$newTask$lambda(this));
  };
  function Coroutine$ViewTaskApi$view$lambda$lambda(this$ViewTaskApi_0, this$view_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewTaskApi = this$ViewTaskApi_0;
    this.local$this$view = this$view_0;
  }
  Coroutine$ViewTaskApi$view$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewTaskApi$view$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewTaskApi$view$lambda$lambda.prototype.constructor = Coroutine$ViewTaskApi$view$lambda$lambda;
  Coroutine$ViewTaskApi$view$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new ViewTask(this.local$this$ViewTaskApi.loggedIn, this.local$this$ViewTaskApi, this.local$this$view);
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
  function ViewTaskApi$view$lambda$lambda(this$ViewTaskApi_0, this$view_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewTaskApi$view$lambda$lambda(this$ViewTaskApi_0, this$view_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewTaskApi$view$lambda(this$ViewTaskApi_0, this$view_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewTaskApi = this$ViewTaskApi_0;
    this.local$this$view = this$view_0;
  }
  Coroutine$ViewTaskApi$view$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewTaskApi$view$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewTaskApi$view$lambda.prototype.constructor = Coroutine$ViewTaskApi$view$lambda;
  Coroutine$ViewTaskApi$view$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ViewTaskApi.forward.switchTo_cbny1b$(ViewTaskApi$view$lambda$lambda(this.local$this$ViewTaskApi, this.local$this$view), this);
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
  function ViewTaskApi$view$lambda(this$ViewTaskApi_0, this$view_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewTaskApi$view$lambda(this$ViewTaskApi_0, this$view_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ViewTaskApi.prototype.view_50dwps$ = function ($receiver) {
    this.exec(ViewTaskApi$view$lambda(this, $receiver));
  };
  ViewTaskApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ViewTaskApi',
    interfaces: [FBApi, HasForward, HasExec, LoggedInPath]
  };
  function Coroutine$ui$lambda$lambda$lambda_4(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda_4.prototype.constructor = Coroutine$ui$lambda$lambda$lambda_4;
  Coroutine$ui$lambda$lambda$lambda_4.prototype.doResume = function () {
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
  function ui$lambda$lambda$lambda_9(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda_4(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_5(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda_5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda_5.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda_5;
  Coroutine$ui$lambda$lambda$lambda$lambda_5.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.newComment(), Unit;
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
  function ui$lambda$lambda$lambda$lambda_14(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_5(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_6(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda_6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda_6.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda_6;
  Coroutine$ui$lambda$lambda$lambda$lambda_6.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.edit(), Unit;
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
  function ui$lambda$lambda$lambda$lambda_15(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_6(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.markAsCompleted(), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_11(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_12(this$ui) {
    return function () {
      return this$ui.item.invoke().title.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_13(this$ui) {
    return function () {
      return this$ui.item.invoke().text.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_14(this$ui) {
    return function () {
      return this$ui.item.invoke().status.invoke().name;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui, closure$id) {
    return function () {
      return this$ui.loggedIn.tags.lookup.get_11rb$(closure$id).invoke().name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$ui) {
    return function ($receiver) {
      var $receiver_0 = this$ui.item.invoke().tags.invoke();
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$ui_0 = this$ui;
        var $receiver_1 = get_insert_0($receiver).badge;
        var $receiver_2 = $receiver_1.cls;
        get_m1($receiver_2);
        get_fontSize100($receiver_2);
        $receiver_1.pill;
        $receiver_1.secondary;
        this$ui_0.remAssign_7fncnf$($receiver_1.text, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui_0, element));
      }
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_12(this$ui) {
    return function () {
      return invoke(get_div(document), ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$ui));
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_15(this$ui) {
    return function ($receiver) {
      this$ui.remAssign_wgabca$(get_widget($receiver), ui$lambda$lambda$lambda$lambda$lambda$lambda_12(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_16(this$ui) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      remAssign(get_dt($receiver), 'Title');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$lambda$lambda$lambda_12(this$ui));
      remAssign(get_dt($receiver), 'Text');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$lambda$lambda$lambda_13(this$ui));
      remAssign(get_dt($receiver), 'Status');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$lambda$lambda$lambda_14(this$ui));
      remAssign(get_dt($receiver), 'Tags');
      invoke(get_dd($receiver), ui$lambda$lambda$lambda$lambda$lambda_15(this$ui));
      remAssign(get_dt($receiver), 'Notes');
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_13($receiver) {
    $receiver.get_desc_5eq60p$(Note.Companion.ts);
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$n) {
    return function () {
      return closure$n.invoke().text.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$n_0, this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$n = closure$n_0;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.edit_s9t1a8$(this.local$closure$n), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$n_0, this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$n_0, this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4(this$ui_0, $receiver_0, n_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$n = n_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = widget.factory.listGroupButton;
            var this$ui = this.local$this$ui;
            this.local$$receiver.remAssign_7fncnf$($receiver.text, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this.local$n));
            this$ui.click_b0jn9q$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this.local$n, this$ui));
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_14(this$ui_0) {
    return function ($receiver_0, n_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4(this$ui_0, $receiver_0, n_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_17(this$ui) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).listGroup;
      var this$ui_0 = this$ui;
      this$ui_0.list_qlxt6c$($receiver_0, this$ui_0.mapLive_1mq1ue$(this$ui_0.listEvents_pujjsl$(this$ui_0.notes, ui$lambda$lambda$lambda$lambda$lambda$lambda_13), ui$lambda$lambda$lambda$lambda$lambda$lambda_14(this$ui_0)));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_10(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_p1($receiver_0);
      get_bgWhite($receiver_0);
      get_borderBottom($receiver_0);
      invoke(get_dl($receiver), ui$lambda$lambda$lambda$lambda_16(this$ui));
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda_17(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda_6(this$ui) {
    return function ($receiver) {
      get_bgLight(get_cls($receiver));
      invoke(get_div($receiver), ui$lambda$lambda$lambda_10(this$ui));
      return Unit;
    };
  }
  function ui_6($receiver) {
    var $receiver_0 = widget.factory.topbar;
    var $receiver_1 = $receiver_0.left.button;
    $receiver_1.back;
    $receiver.click_3xepc3$($receiver_1, ui$lambda$lambda$lambda_9($receiver));
    remAssign($receiver_0.title, 'Task');
    var $receiver_2 = $receiver_0.right.buttonGroup;
    $receiver_2.m1;
    var $receiver_3 = $receiver_2.button;
    $receiver_3.p2;
    $receiver_3.primary;
    get_comment($receiver_3.fa);
    $receiver.click_3xepc3$($receiver_3, ui$lambda$lambda$lambda$lambda_14($receiver));
    var $receiver_4 = $receiver_2.button;
    $receiver_4.p2;
    $receiver_4.primary;
    get_pen($receiver_4.fa);
    $receiver.click_3xepc3$($receiver_4, ui$lambda$lambda$lambda$lambda_15($receiver));
    $receiver_2.dropdownSplit.primary;
    var $receiver_5 = $receiver_2.menu;
    $receiver_5.right;
    var $receiver_6 = $receiver_5.item;
    get_clipboardCheck($receiver_6.fa);
    $receiver_6.text.remAssign_61zpoe$('Mark as Completed');
    $receiver.click_ka8ib0$($receiver_6, ui$lambda$lambda$lambda$lambda$lambda_11($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_7 = widget.factory.scrollPane;
    invoke($receiver_7.pane, ui$lambda$lambda_6($receiver));
    return new TopAndContent(tmp$, $receiver_7.node);
  }
  function ViewTaskPath() {
  }
  ViewTaskPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ViewTaskPath',
    interfaces: [LoggedInPath]
  };
  function ViewTask(loggedIn, from, item) {
    ForwardBase_init(from, this);
    this.from_7cy2fk$_0 = from;
    this.item = item;
    this.$delegate_brp2nm$_0 = loggedIn;
    this.viewTask_etzbbk$_0 = this;
    this.notes = get_notes(get_docWrap(this.item));
    this.rawView_ka0m7n$_0 = ui_6(this);
  }
  Object.defineProperty(ViewTask.prototype, 'from', {
    get: function () {
      return this.from_7cy2fk$_0;
    }
  });
  Object.defineProperty(ViewTask.prototype, 'viewTask', {
    get: function () {
      return this.viewTask_etzbbk$_0;
    }
  });
  function Coroutine$ViewTask$edit$lambda$lambda(this$ViewTask_0, this$edit_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewTask = this$ViewTask_0;
    this.local$this$edit = this$edit_0;
  }
  Coroutine$ViewTask$edit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewTask$edit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewTask$edit$lambda$lambda.prototype.constructor = Coroutine$ViewTask$edit$lambda$lambda;
  Coroutine$ViewTask$edit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new EditNote(this.local$this$ViewTask, this.local$this$edit);
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
  function ViewTask$edit$lambda$lambda(this$ViewTask_0, this$edit_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewTask$edit$lambda$lambda(this$ViewTask_0, this$edit_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewTask$edit$lambda(this$ViewTask_0, this$edit_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewTask = this$ViewTask_0;
    this.local$this$edit = this$edit_0;
  }
  Coroutine$ViewTask$edit$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewTask$edit$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewTask$edit$lambda.prototype.constructor = Coroutine$ViewTask$edit$lambda;
  Coroutine$ViewTask$edit$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ViewTask.forward.switchTo_cbny1b$(ViewTask$edit$lambda$lambda(this.local$this$ViewTask, this.local$this$edit), this);
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
  function ViewTask$edit$lambda(this$ViewTask_0, this$edit_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewTask$edit$lambda(this$ViewTask_0, this$edit_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ViewTask.prototype.edit_s9t1a8$ = function ($receiver) {
    this.exec(ViewTask$edit$lambda(this, $receiver));
  };
  function Coroutine$ViewTask$edit$lambda$lambda_0(this$ViewTask_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewTask = this$ViewTask_0;
  }
  Coroutine$ViewTask$edit$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewTask$edit$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewTask$edit$lambda$lambda_0.prototype.constructor = Coroutine$ViewTask$edit$lambda$lambda_0;
  Coroutine$ViewTask$edit$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new EditTask(this.local$this$ViewTask);
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
  function ViewTask$edit$lambda$lambda_0(this$ViewTask_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewTask$edit$lambda$lambda_0(this$ViewTask_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewTask$edit$lambda_0(this$ViewTask_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewTask = this$ViewTask_0;
  }
  Coroutine$ViewTask$edit$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewTask$edit$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewTask$edit$lambda_0.prototype.constructor = Coroutine$ViewTask$edit$lambda_0;
  Coroutine$ViewTask$edit$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ViewTask.forward.switchTo_cbny1b$(ViewTask$edit$lambda$lambda_0(this.local$this$ViewTask), this);
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
  function ViewTask$edit$lambda_0(this$ViewTask_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewTask$edit$lambda_0(this$ViewTask_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ViewTask.prototype.edit = function () {
    this.exec(ViewTask$edit$lambda_0(this));
  };
  function Coroutine$ViewTask$newComment$lambda$lambda(this$ViewTask_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewTask = this$ViewTask_0;
  }
  Coroutine$ViewTask$newComment$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewTask$newComment$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewTask$newComment$lambda$lambda.prototype.constructor = Coroutine$ViewTask$newComment$lambda$lambda;
  Coroutine$ViewTask$newComment$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new EditNote(this.local$this$ViewTask, this.local$this$ViewTask.toRandomFsDoc_xc7wmg$(new Note(), this.local$this$ViewTask.notes));
            $receiver.get_live_73z9b6$($receiver.item);
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
  function ViewTask$newComment$lambda$lambda(this$ViewTask_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewTask$newComment$lambda$lambda(this$ViewTask_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewTask$newComment$lambda(this$ViewTask_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewTask = this$ViewTask_0;
  }
  Coroutine$ViewTask$newComment$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewTask$newComment$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewTask$newComment$lambda.prototype.constructor = Coroutine$ViewTask$newComment$lambda;
  Coroutine$ViewTask$newComment$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ViewTask.forward.switchTo_cbny1b$(ViewTask$newComment$lambda$lambda(this.local$this$ViewTask), this);
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
  function ViewTask$newComment$lambda(this$ViewTask_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewTask$newComment$lambda(this$ViewTask_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ViewTask.prototype.newComment = function () {
    this.exec(ViewTask$newComment$lambda(this));
  };
  ViewTask.prototype.markAsCompleted = function () {
    var $receiver = copy(this.item.rxv.now);
    $receiver.status.remAssign_11rc$(TaskStatus.Completed);
    this.save_73z9b6$(toFsDoc($receiver, this.item.id));
    this.from.redisplay();
  };
  Object.defineProperty(ViewTask.prototype, 'rawView', {
    get: function () {
      return this.rawView_ka0m7n$_0;
    }
  });
  Object.defineProperty(ViewTask.prototype, 'body', {
    get: function () {
      return this.$delegate_brp2nm$_0.body;
    }
  });
  Object.defineProperty(ViewTask.prototype, 'db', {
    get: function () {
      return this.$delegate_brp2nm$_0.db;
    }
  });
  Object.defineProperty(ViewTask.prototype, 'home', {
    get: function () {
      return this.$delegate_brp2nm$_0.home;
    }
  });
  Object.defineProperty(ViewTask.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_brp2nm$_0.loggedIn;
    }
  });
  ViewTask.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewTask',
    interfaces: [FBFromApi, ViewTaskPath, LoggedInPath, ForwardBase]
  };
  var package$tasks = _.tasks || (_.tasks = {});
  var package$data = package$tasks.data || (package$tasks.data = {});
  package$data.tagsLookup_jd3t2k$ = tagsLookup;
  package$data.tagsList_jd3t2k$ = tagsList;
  $$importsForInline$$['appsimake-firebase'] = $module$appsimake_firebase;
  package$data.deleteCollections_hob8pd$ = deleteCollections;
  package$data.deleteCollections_ny0b5v$ = deleteCollections_0;
  var package$editnote = package$tasks.editnote || (package$tasks.editnote = {});
  package$editnote.EditNotePath = EditNotePath;
  package$editnote.EditNote = EditNote;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$editnote.ui_56vc7z$ = ui;
  var package$edittag = package$tasks.edittag || (package$tasks.edittag = {});
  package$edittag.EditTagPath = EditTagPath;
  package$edittag.EditTag = EditTag;
  package$edittag.ui_ue6en7$ = ui_0;
  var package$edittask = package$tasks.edittask || (package$tasks.edittask = {});
  package$edittask.EditTaskPath = EditTaskPath;
  package$edittask.EditTask = EditTask;
  package$edittask.ui_ppzri7$ = ui_1;
  var package$home = package$tasks.home || (package$tasks.home = {});
  package$home.HomePath = HomePath;
  package$home.Home = Home;
  var package$listtags = package$tasks.listtags || (package$tasks.listtags = {});
  package$listtags.ListTagsPath = ListTagsPath;
  package$listtags.ListTags = ListTags;
  package$listtags.ui_b9pvcv$ = ui_2;
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
  var package$listtasks = package$tasks.listtasks || (package$tasks.listtasks = {});
  package$listtasks.StatusFilter = StatusFilter;
  package$listtasks.FilterValues = FilterValues;
  package$listtasks.setup_elz8hv$ = setup;
  package$listtasks.ListTasksPath = ListTasksPath;
  package$listtasks.ListTasks = ListTasks;
  package$listtasks.ui_4dwctf$ = ui_3;
  var package$loggedin = package$tasks.loggedin || (package$tasks.loggedin = {});
  package$loggedin.LoggedInPath = LoggedInPath;
  package$loggedin.LoggedIn = LoggedIn;
  package$loggedin.ui_cscd8h$ = ui_4;
  var package$selecttags = package$tasks.selecttags || (package$tasks.selecttags = {});
  package$selecttags.SelectTagsPath = SelectTagsPath;
  package$selecttags.SelectTags = SelectTags;
  package$selecttags.ui_r75qip$ = ui_5;
  package$tasks.main = main;
  var package$viewtask = package$tasks.viewtask || (package$tasks.viewtask = {});
  package$viewtask.ViewTaskApi = ViewTaskApi;
  package$viewtask.ui_9p10f3$ = ui_6;
  package$viewtask.ViewTaskPath = ViewTaskPath;
  package$viewtask.ViewTask = ViewTask;
  EditNote.prototype.process_y3juat$ = FBApi.prototype.process_y3juat$;
  EditNote.prototype.rxClass_9npl0m$ = FBApi.prototype.rxClass_9npl0m$;
  EditNote.prototype.rxClass_62ldac$ = FBApi.prototype.rxClass_62ldac$;
  EditNote.prototype.get_clickActivate_tvm2vp$ = FBApi.prototype.get_clickActivate_tvm2vp$;
  EditNote.prototype.get_clickToggle_tvm2vp$ = FBApi.prototype.get_clickToggle_tvm2vp$;
  EditNote.prototype.get_ids_qko62t$ = FBApi.prototype.get_ids_qko62t$;
  EditNote.prototype.get_live_73z9b6$ = FBApi.prototype.get_live_73z9b6$;
  EditNote.prototype.get_randomDoc_sj9vaa$ = FBApi.prototype.get_randomDoc_sj9vaa$;
  EditNote.prototype.get_ref_sj9vaa$ = FBApi.prototype.get_ref_sj9vaa$;
  EditNote.prototype.get_ref_aqty80$ = FBApi.prototype.get_ref_aqty80$;
  EditNote.prototype.get_snapshots_79y88y$ = FBApi.prototype.get_snapshots_79y88y$;
  EditNote.prototype.rxEditing_3yjaz6$$default = FBApi.prototype.rxEditing_3yjaz6$$default;
  EditNote.prototype.bind_zfaq6f$ = FBApi.prototype.bind_zfaq6f$;
  EditNote.prototype.bind_xy1r9h$ = FBApi.prototype.bind_xy1r9h$;
  EditNote.prototype.bind_8y93tj$ = EditExitFromKillsUixApi.prototype.bind_8y93tj$;
  EditNote.prototype.bind_4dd4yj$ = EditExitFromKillsUixApi.prototype.bind_4dd4yj$;
  EditNote.prototype.bind_igb9j9$ = EditExitFromKillsUixApi.prototype.bind_igb9j9$;
  EditNote.prototype.click_qob2x9$ = FBApi.prototype.click_qob2x9$;
  EditNote.prototype.click_3xepc3$ = FBApi.prototype.click_3xepc3$;
  EditNote.prototype.click_ka8ib0$ = FBApi.prototype.click_ka8ib0$;
  EditNote.prototype.click_b0jn9q$ = FBApi.prototype.click_b0jn9q$;
  EditNote.prototype.click_htd9kn$ = FBApi.prototype.click_htd9kn$;
  EditNote.prototype.delete_73z9b6$ = FBApi.prototype.delete_73z9b6$;
  EditNote.prototype.docs_prxdpg$ = FBApi.prototype.docs_prxdpg$;
  EditNote.prototype.documentChanges_z2kgpb$ = FBApi.prototype.documentChanges_z2kgpb$;
  EditNote.prototype.enabled_hlnvpg$ = FBApi.prototype.enabled_hlnvpg$;
  EditNote.prototype.events_9k4h2$ = FBApi.prototype.events_9k4h2$;
  EditNote.prototype.filter_hu0si9$ = FBApi.prototype.filter_hu0si9$;
  EditNote.prototype.fsCache_sj6zb3$$default = FBApi.prototype.fsCache_sj6zb3$$default;
  EditNote.prototype.fsCache_aujjp8$ = FBApi.prototype.fsCache_aujjp8$;
  EditNote.prototype.list_qlxt6c$ = FBApi.prototype.list_qlxt6c$;
  EditNote.prototype.list_u1uvxv$ = FBApi.prototype.list_u1uvxv$;
  EditNote.prototype.listEvents_pujjsl$$default = FBApi.prototype.listEvents_pujjsl$$default;
  EditNote.prototype.listEvents_ghesau$ = FBApi.prototype.listEvents_ghesau$;
  EditNote.prototype.listEvents_f2awki$ = FBApi.prototype.listEvents_f2awki$;
  EditNote.prototype.on_2stdkb$ = FBApi.prototype.on_2stdkb$;
  EditNote.prototype.on_hgi4ad$ = FBApi.prototype.on_hgi4ad$;
  EditNote.prototype.query_wzkv1r$$default = FBApi.prototype.query_wzkv1r$$default;
  EditNote.prototype.save_73z9b6$ = FBApi.prototype.save_73z9b6$;
  EditNote.prototype.signOut_7wq8x$ = FBApi.prototype.signOut_7wq8x$;
  EditNote.prototype.toList_pujjsl$$default = FBApi.prototype.toList_pujjsl$$default;
  EditNote.prototype.toRandomFsDoc_xc7wmg$ = FBApi.prototype.toRandomFsDoc_xc7wmg$;
  EditNote.prototype.toRx_on0lyu$ = FBApi.prototype.toRx_on0lyu$;
  EditNote.prototype.toSnapshotEvents_ecp0ut$ = FBApi.prototype.toSnapshotEvents_ecp0ut$;
  EditNote.prototype.visibility_12lt6u$ = FBApi.prototype.visibility_12lt6u$;
  EditNote.prototype.visible_od9jl4$ = FBApi.prototype.visible_od9jl4$;
  Object.defineProperty(EditNote.prototype, 'exit', Object.getOwnPropertyDescriptor(EditExitFromKillsUixApi.prototype, 'exit'));
  EditNote.prototype.get_backSaveDiscard_e1rmy3$ = EditExitFromKillsUixApi.prototype.get_backSaveDiscard_e1rmy3$;
  EditNote.prototype.get_saveButton_tdhe4g$ = EditExitFromKillsUixApi.prototype.get_saveButton_tdhe4g$;
  EditNote.prototype.get_saveDeleteButton_tdhe4g$ = EditExitFromKillsUixApi.prototype.get_saveDeleteButton_tdhe4g$;
  EditNote.prototype.rxEditing_3yjaz6$ = FBApi.prototype.rxEditing_3yjaz6$;
  EditNote.prototype.fsCache_sj6zb3$ = FBApi.prototype.fsCache_sj6zb3$;
  EditNote.prototype.listEvents_pujjsl$ = FBApi.prototype.listEvents_pujjsl$;
  EditNote.prototype.query_wzkv1r$ = FBApi.prototype.query_wzkv1r$;
  EditNote.prototype.toList_pujjsl$ = FBApi.prototype.toList_pujjsl$;
  EditTag.prototype.process_y3juat$ = FBApi.prototype.process_y3juat$;
  EditTag.prototype.rxClass_9npl0m$ = FBApi.prototype.rxClass_9npl0m$;
  EditTag.prototype.rxClass_62ldac$ = FBApi.prototype.rxClass_62ldac$;
  EditTag.prototype.get_clickActivate_tvm2vp$ = FBApi.prototype.get_clickActivate_tvm2vp$;
  EditTag.prototype.get_clickToggle_tvm2vp$ = FBApi.prototype.get_clickToggle_tvm2vp$;
  EditTag.prototype.get_ids_qko62t$ = FBApi.prototype.get_ids_qko62t$;
  EditTag.prototype.get_live_73z9b6$ = FBApi.prototype.get_live_73z9b6$;
  EditTag.prototype.get_randomDoc_sj9vaa$ = FBApi.prototype.get_randomDoc_sj9vaa$;
  EditTag.prototype.get_ref_sj9vaa$ = FBApi.prototype.get_ref_sj9vaa$;
  EditTag.prototype.get_ref_aqty80$ = FBApi.prototype.get_ref_aqty80$;
  EditTag.prototype.get_snapshots_79y88y$ = FBApi.prototype.get_snapshots_79y88y$;
  EditTag.prototype.rxEditing_3yjaz6$$default = FBApi.prototype.rxEditing_3yjaz6$$default;
  EditTag.prototype.bind_zfaq6f$ = FBApi.prototype.bind_zfaq6f$;
  EditTag.prototype.bind_xy1r9h$ = FBApi.prototype.bind_xy1r9h$;
  EditTag.prototype.bind_8y93tj$ = EditExitFromKillsUixApi.prototype.bind_8y93tj$;
  EditTag.prototype.bind_4dd4yj$ = EditExitFromKillsUixApi.prototype.bind_4dd4yj$;
  EditTag.prototype.bind_igb9j9$ = EditExitFromKillsUixApi.prototype.bind_igb9j9$;
  EditTag.prototype.click_qob2x9$ = FBApi.prototype.click_qob2x9$;
  EditTag.prototype.click_3xepc3$ = FBApi.prototype.click_3xepc3$;
  EditTag.prototype.click_ka8ib0$ = FBApi.prototype.click_ka8ib0$;
  EditTag.prototype.click_b0jn9q$ = FBApi.prototype.click_b0jn9q$;
  EditTag.prototype.click_htd9kn$ = FBApi.prototype.click_htd9kn$;
  EditTag.prototype.delete_73z9b6$ = FBApi.prototype.delete_73z9b6$;
  EditTag.prototype.docs_prxdpg$ = FBApi.prototype.docs_prxdpg$;
  EditTag.prototype.documentChanges_z2kgpb$ = FBApi.prototype.documentChanges_z2kgpb$;
  EditTag.prototype.enabled_hlnvpg$ = FBApi.prototype.enabled_hlnvpg$;
  EditTag.prototype.events_9k4h2$ = FBApi.prototype.events_9k4h2$;
  EditTag.prototype.filter_hu0si9$ = FBApi.prototype.filter_hu0si9$;
  EditTag.prototype.fsCache_sj6zb3$$default = FBApi.prototype.fsCache_sj6zb3$$default;
  EditTag.prototype.fsCache_aujjp8$ = FBApi.prototype.fsCache_aujjp8$;
  EditTag.prototype.list_qlxt6c$ = FBApi.prototype.list_qlxt6c$;
  EditTag.prototype.list_u1uvxv$ = FBApi.prototype.list_u1uvxv$;
  EditTag.prototype.listEvents_pujjsl$$default = FBApi.prototype.listEvents_pujjsl$$default;
  EditTag.prototype.listEvents_ghesau$ = FBApi.prototype.listEvents_ghesau$;
  EditTag.prototype.listEvents_f2awki$ = FBApi.prototype.listEvents_f2awki$;
  EditTag.prototype.on_2stdkb$ = FBApi.prototype.on_2stdkb$;
  EditTag.prototype.on_hgi4ad$ = FBApi.prototype.on_hgi4ad$;
  EditTag.prototype.query_wzkv1r$$default = FBApi.prototype.query_wzkv1r$$default;
  EditTag.prototype.save_73z9b6$ = FBApi.prototype.save_73z9b6$;
  EditTag.prototype.signOut_7wq8x$ = FBApi.prototype.signOut_7wq8x$;
  EditTag.prototype.toList_pujjsl$$default = FBApi.prototype.toList_pujjsl$$default;
  EditTag.prototype.toRandomFsDoc_xc7wmg$ = FBApi.prototype.toRandomFsDoc_xc7wmg$;
  EditTag.prototype.toRx_on0lyu$ = FBApi.prototype.toRx_on0lyu$;
  EditTag.prototype.toSnapshotEvents_ecp0ut$ = FBApi.prototype.toSnapshotEvents_ecp0ut$;
  EditTag.prototype.visibility_12lt6u$ = FBApi.prototype.visibility_12lt6u$;
  EditTag.prototype.visible_od9jl4$ = FBApi.prototype.visible_od9jl4$;
  Object.defineProperty(EditTag.prototype, 'exit', Object.getOwnPropertyDescriptor(EditExitFromKillsUixApi.prototype, 'exit'));
  EditTag.prototype.get_backSaveDiscard_e1rmy3$ = EditExitFromKillsUixApi.prototype.get_backSaveDiscard_e1rmy3$;
  EditTag.prototype.get_saveButton_tdhe4g$ = EditExitFromKillsUixApi.prototype.get_saveButton_tdhe4g$;
  EditTag.prototype.get_saveDeleteButton_tdhe4g$ = EditExitFromKillsUixApi.prototype.get_saveDeleteButton_tdhe4g$;
  EditTag.prototype.rxEditing_3yjaz6$ = FBApi.prototype.rxEditing_3yjaz6$;
  EditTag.prototype.fsCache_sj6zb3$ = FBApi.prototype.fsCache_sj6zb3$;
  EditTag.prototype.listEvents_pujjsl$ = FBApi.prototype.listEvents_pujjsl$;
  EditTag.prototype.query_wzkv1r$ = FBApi.prototype.query_wzkv1r$;
  EditTag.prototype.toList_pujjsl$ = FBApi.prototype.toList_pujjsl$;
  EditTask.prototype.process_y3juat$ = FBApi.prototype.process_y3juat$;
  EditTask.prototype.rxClass_9npl0m$ = FBApi.prototype.rxClass_9npl0m$;
  EditTask.prototype.rxClass_62ldac$ = FBApi.prototype.rxClass_62ldac$;
  EditTask.prototype.get_clickActivate_tvm2vp$ = FBApi.prototype.get_clickActivate_tvm2vp$;
  EditTask.prototype.get_clickToggle_tvm2vp$ = FBApi.prototype.get_clickToggle_tvm2vp$;
  EditTask.prototype.get_ids_qko62t$ = FBApi.prototype.get_ids_qko62t$;
  EditTask.prototype.get_live_73z9b6$ = FBApi.prototype.get_live_73z9b6$;
  EditTask.prototype.get_randomDoc_sj9vaa$ = FBApi.prototype.get_randomDoc_sj9vaa$;
  EditTask.prototype.get_ref_sj9vaa$ = FBApi.prototype.get_ref_sj9vaa$;
  EditTask.prototype.get_ref_aqty80$ = FBApi.prototype.get_ref_aqty80$;
  EditTask.prototype.get_snapshots_79y88y$ = FBApi.prototype.get_snapshots_79y88y$;
  EditTask.prototype.rxEditing_3yjaz6$$default = FBApi.prototype.rxEditing_3yjaz6$$default;
  EditTask.prototype.bind_zfaq6f$ = FBApi.prototype.bind_zfaq6f$;
  EditTask.prototype.bind_xy1r9h$ = FBApi.prototype.bind_xy1r9h$;
  EditTask.prototype.bind_8y93tj$ = EditExitFromKillsUixApi.prototype.bind_8y93tj$;
  EditTask.prototype.bind_4dd4yj$ = EditExitFromKillsUixApi.prototype.bind_4dd4yj$;
  EditTask.prototype.bind_igb9j9$ = EditExitFromKillsUixApi.prototype.bind_igb9j9$;
  EditTask.prototype.click_qob2x9$ = FBApi.prototype.click_qob2x9$;
  EditTask.prototype.click_3xepc3$ = FBApi.prototype.click_3xepc3$;
  EditTask.prototype.click_ka8ib0$ = FBApi.prototype.click_ka8ib0$;
  EditTask.prototype.click_b0jn9q$ = FBApi.prototype.click_b0jn9q$;
  EditTask.prototype.click_htd9kn$ = FBApi.prototype.click_htd9kn$;
  EditTask.prototype.delete_73z9b6$ = FBApi.prototype.delete_73z9b6$;
  EditTask.prototype.docs_prxdpg$ = FBApi.prototype.docs_prxdpg$;
  EditTask.prototype.documentChanges_z2kgpb$ = FBApi.prototype.documentChanges_z2kgpb$;
  EditTask.prototype.enabled_hlnvpg$ = FBApi.prototype.enabled_hlnvpg$;
  EditTask.prototype.events_9k4h2$ = FBApi.prototype.events_9k4h2$;
  EditTask.prototype.filter_hu0si9$ = FBApi.prototype.filter_hu0si9$;
  EditTask.prototype.fsCache_sj6zb3$$default = FBApi.prototype.fsCache_sj6zb3$$default;
  EditTask.prototype.fsCache_aujjp8$ = FBApi.prototype.fsCache_aujjp8$;
  EditTask.prototype.list_qlxt6c$ = FBApi.prototype.list_qlxt6c$;
  EditTask.prototype.list_u1uvxv$ = FBApi.prototype.list_u1uvxv$;
  EditTask.prototype.listEvents_pujjsl$$default = FBApi.prototype.listEvents_pujjsl$$default;
  EditTask.prototype.listEvents_ghesau$ = FBApi.prototype.listEvents_ghesau$;
  EditTask.prototype.listEvents_f2awki$ = FBApi.prototype.listEvents_f2awki$;
  EditTask.prototype.on_2stdkb$ = FBApi.prototype.on_2stdkb$;
  EditTask.prototype.on_hgi4ad$ = FBApi.prototype.on_hgi4ad$;
  EditTask.prototype.query_wzkv1r$$default = FBApi.prototype.query_wzkv1r$$default;
  EditTask.prototype.save_73z9b6$ = FBApi.prototype.save_73z9b6$;
  EditTask.prototype.signOut_7wq8x$ = FBApi.prototype.signOut_7wq8x$;
  EditTask.prototype.toList_pujjsl$$default = FBApi.prototype.toList_pujjsl$$default;
  EditTask.prototype.toRandomFsDoc_xc7wmg$ = FBApi.prototype.toRandomFsDoc_xc7wmg$;
  EditTask.prototype.toRx_on0lyu$ = FBApi.prototype.toRx_on0lyu$;
  EditTask.prototype.toSnapshotEvents_ecp0ut$ = FBApi.prototype.toSnapshotEvents_ecp0ut$;
  EditTask.prototype.visibility_12lt6u$ = FBApi.prototype.visibility_12lt6u$;
  EditTask.prototype.visible_od9jl4$ = FBApi.prototype.visible_od9jl4$;
  EditTask.prototype.get_backSaveDiscard_e1rmy3$ = EditExitFromKillsUixApi.prototype.get_backSaveDiscard_e1rmy3$;
  EditTask.prototype.get_saveButton_tdhe4g$ = EditExitFromKillsUixApi.prototype.get_saveButton_tdhe4g$;
  EditTask.prototype.get_saveDeleteButton_tdhe4g$ = EditExitFromKillsUixApi.prototype.get_saveDeleteButton_tdhe4g$;
  EditTask.prototype.rxEditing_3yjaz6$ = FBApi.prototype.rxEditing_3yjaz6$;
  EditTask.prototype.fsCache_sj6zb3$ = FBApi.prototype.fsCache_sj6zb3$;
  EditTask.prototype.listEvents_pujjsl$ = FBApi.prototype.listEvents_pujjsl$;
  EditTask.prototype.query_wzkv1r$ = FBApi.prototype.query_wzkv1r$;
  EditTask.prototype.toList_pujjsl$ = FBApi.prototype.toList_pujjsl$;
  ListTags.prototype.process_y3juat$ = FBFromApi.prototype.process_y3juat$;
  ListTags.prototype.rxClass_9npl0m$ = FBFromApi.prototype.rxClass_9npl0m$;
  ListTags.prototype.rxClass_62ldac$ = FBFromApi.prototype.rxClass_62ldac$;
  ListTags.prototype.get_backButton_tdhe4g$ = FBFromApi.prototype.get_backButton_tdhe4g$;
  ListTags.prototype.get_backButton_ihoiae$ = FBFromApi.prototype.get_backButton_ihoiae$;
  ListTags.prototype.get_clickActivate_tvm2vp$ = FBFromApi.prototype.get_clickActivate_tvm2vp$;
  ListTags.prototype.get_clickToggle_tvm2vp$ = FBFromApi.prototype.get_clickToggle_tvm2vp$;
  ListTags.prototype.get_ids_qko62t$ = FBFromApi.prototype.get_ids_qko62t$;
  ListTags.prototype.get_live_73z9b6$ = FBFromApi.prototype.get_live_73z9b6$;
  ListTags.prototype.get_randomDoc_sj9vaa$ = FBFromApi.prototype.get_randomDoc_sj9vaa$;
  ListTags.prototype.get_ref_sj9vaa$ = FBFromApi.prototype.get_ref_sj9vaa$;
  ListTags.prototype.get_ref_aqty80$ = FBFromApi.prototype.get_ref_aqty80$;
  ListTags.prototype.get_snapshots_79y88y$ = FBFromApi.prototype.get_snapshots_79y88y$;
  ListTags.prototype.rxEditing_3yjaz6$$default = FBFromApi.prototype.rxEditing_3yjaz6$$default;
  ListTags.prototype.bind_zfaq6f$ = FBFromApi.prototype.bind_zfaq6f$;
  ListTags.prototype.bind_xy1r9h$ = FBFromApi.prototype.bind_xy1r9h$;
  ListTags.prototype.click_qob2x9$ = FBFromApi.prototype.click_qob2x9$;
  ListTags.prototype.click_3xepc3$ = FBFromApi.prototype.click_3xepc3$;
  ListTags.prototype.click_ka8ib0$ = FBFromApi.prototype.click_ka8ib0$;
  ListTags.prototype.click_b0jn9q$ = FBFromApi.prototype.click_b0jn9q$;
  ListTags.prototype.click_htd9kn$ = FBFromApi.prototype.click_htd9kn$;
  ListTags.prototype.delete_73z9b6$ = FBFromApi.prototype.delete_73z9b6$;
  ListTags.prototype.docs_prxdpg$ = FBFromApi.prototype.docs_prxdpg$;
  ListTags.prototype.documentChanges_z2kgpb$ = FBFromApi.prototype.documentChanges_z2kgpb$;
  ListTags.prototype.enabled_hlnvpg$ = FBFromApi.prototype.enabled_hlnvpg$;
  ListTags.prototype.events_9k4h2$ = FBFromApi.prototype.events_9k4h2$;
  ListTags.prototype.filter_hu0si9$ = FBFromApi.prototype.filter_hu0si9$;
  ListTags.prototype.fsCache_sj6zb3$$default = FBFromApi.prototype.fsCache_sj6zb3$$default;
  ListTags.prototype.fsCache_aujjp8$ = FBFromApi.prototype.fsCache_aujjp8$;
  ListTags.prototype.list_qlxt6c$ = FBFromApi.prototype.list_qlxt6c$;
  ListTags.prototype.list_u1uvxv$ = FBFromApi.prototype.list_u1uvxv$;
  ListTags.prototype.listEvents_pujjsl$$default = FBFromApi.prototype.listEvents_pujjsl$$default;
  ListTags.prototype.listEvents_ghesau$ = FBFromApi.prototype.listEvents_ghesau$;
  ListTags.prototype.listEvents_f2awki$ = FBFromApi.prototype.listEvents_f2awki$;
  ListTags.prototype.on_2stdkb$ = FBFromApi.prototype.on_2stdkb$;
  ListTags.prototype.on_hgi4ad$ = FBFromApi.prototype.on_hgi4ad$;
  ListTags.prototype.query_wzkv1r$$default = FBFromApi.prototype.query_wzkv1r$$default;
  ListTags.prototype.save_73z9b6$ = FBFromApi.prototype.save_73z9b6$;
  ListTags.prototype.signOut_7wq8x$ = FBFromApi.prototype.signOut_7wq8x$;
  ListTags.prototype.toList_pujjsl$$default = FBFromApi.prototype.toList_pujjsl$$default;
  ListTags.prototype.toRandomFsDoc_xc7wmg$ = FBFromApi.prototype.toRandomFsDoc_xc7wmg$;
  ListTags.prototype.toRx_on0lyu$ = FBFromApi.prototype.toRx_on0lyu$;
  ListTags.prototype.toSnapshotEvents_ecp0ut$ = FBFromApi.prototype.toSnapshotEvents_ecp0ut$;
  ListTags.prototype.visibility_12lt6u$ = FBFromApi.prototype.visibility_12lt6u$;
  ListTags.prototype.visible_od9jl4$ = FBFromApi.prototype.visible_od9jl4$;
  ListTags.prototype.rxEditing_3yjaz6$ = FBFromApi.prototype.rxEditing_3yjaz6$;
  ListTags.prototype.fsCache_sj6zb3$ = FBFromApi.prototype.fsCache_sj6zb3$;
  ListTags.prototype.listEvents_pujjsl$ = FBFromApi.prototype.listEvents_pujjsl$;
  ListTags.prototype.query_wzkv1r$ = FBFromApi.prototype.query_wzkv1r$;
  ListTags.prototype.toList_pujjsl$ = FBFromApi.prototype.toList_pujjsl$;
  ViewTaskApi.prototype.get_clickActivate_tvm2vp$ = FBApi.prototype.get_clickActivate_tvm2vp$;
  ViewTaskApi.prototype.get_clickToggle_tvm2vp$ = FBApi.prototype.get_clickToggle_tvm2vp$;
  ViewTaskApi.prototype.get_ids_qko62t$ = FBApi.prototype.get_ids_qko62t$;
  ViewTaskApi.prototype.get_live_73z9b6$ = FBApi.prototype.get_live_73z9b6$;
  ViewTaskApi.prototype.get_randomDoc_sj9vaa$ = FBApi.prototype.get_randomDoc_sj9vaa$;
  ViewTaskApi.prototype.get_ref_sj9vaa$ = FBApi.prototype.get_ref_sj9vaa$;
  ViewTaskApi.prototype.get_ref_aqty80$ = FBApi.prototype.get_ref_aqty80$;
  ViewTaskApi.prototype.get_snapshots_79y88y$ = FBApi.prototype.get_snapshots_79y88y$;
  ViewTaskApi.prototype.rx_y6x17j$ = FBApi.prototype.rx_y6x17j$;
  ViewTaskApi.prototype.rx_46ic4w$ = FBApi.prototype.rx_46ic4w$;
  ViewTaskApi.prototype.rx_wgabca$ = FBApi.prototype.rx_wgabca$;
  ViewTaskApi.prototype.rx_djv61p$ = FBApi.prototype.rx_djv61p$;
  ViewTaskApi.prototype.rxEditing_3yjaz6$$default = FBApi.prototype.rxEditing_3yjaz6$$default;
  ViewTaskApi.prototype.bind_zfaq6f$ = FBApi.prototype.bind_zfaq6f$;
  ViewTaskApi.prototype.bind_xy1r9h$ = FBApi.prototype.bind_xy1r9h$;
  ViewTaskApi.prototype.click_qob2x9$ = FBApi.prototype.click_qob2x9$;
  ViewTaskApi.prototype.click_3xepc3$ = FBApi.prototype.click_3xepc3$;
  ViewTaskApi.prototype.click_ka8ib0$ = FBApi.prototype.click_ka8ib0$;
  ViewTaskApi.prototype.click_b0jn9q$ = FBApi.prototype.click_b0jn9q$;
  ViewTaskApi.prototype.click_htd9kn$ = FBApi.prototype.click_htd9kn$;
  ViewTaskApi.prototype.containsRx_1w65cx$ = FBApi.prototype.containsRx_1w65cx$;
  ViewTaskApi.prototype.delete_73z9b6$ = FBApi.prototype.delete_73z9b6$;
  ViewTaskApi.prototype.docs_prxdpg$ = FBApi.prototype.docs_prxdpg$;
  ViewTaskApi.prototype.documentChanges_z2kgpb$ = FBApi.prototype.documentChanges_z2kgpb$;
  ViewTaskApi.prototype.enabled_hlnvpg$ = FBApi.prototype.enabled_hlnvpg$;
  ViewTaskApi.prototype.events_9k4h2$ = FBApi.prototype.events_9k4h2$;
  ViewTaskApi.prototype.feedTo_9o5f67$ = FBApi.prototype.feedTo_9o5f67$;
  ViewTaskApi.prototype.filter_hu0si9$ = FBApi.prototype.filter_hu0si9$;
  ViewTaskApi.prototype.filtered_tnde95$ = FBApi.prototype.filtered_tnde95$;
  ViewTaskApi.prototype.forEach_xwzbbo$ = FBApi.prototype.forEach_xwzbbo$;
  ViewTaskApi.prototype.forEach_35q7bt$ = FBApi.prototype.forEach_35q7bt$;
  ViewTaskApi.prototype.forEachLater_xwzbbo$ = FBApi.prototype.forEachLater_xwzbbo$;
  ViewTaskApi.prototype.fsCache_sj6zb3$$default = FBApi.prototype.fsCache_sj6zb3$$default;
  ViewTaskApi.prototype.fsCache_aujjp8$ = FBApi.prototype.fsCache_aujjp8$;
  ViewTaskApi.prototype.incremented_eoy9qo$ = FBApi.prototype.incremented_eoy9qo$;
  ViewTaskApi.prototype.linked_n1nom7$ = FBApi.prototype.linked_n1nom7$;
  ViewTaskApi.prototype.list_qlxt6c$ = FBApi.prototype.list_qlxt6c$;
  ViewTaskApi.prototype.list_u1uvxv$ = FBApi.prototype.list_u1uvxv$;
  ViewTaskApi.prototype.listEvents_pujjsl$$default = FBApi.prototype.listEvents_pujjsl$$default;
  ViewTaskApi.prototype.listEvents_ghesau$ = FBApi.prototype.listEvents_ghesau$;
  ViewTaskApi.prototype.listEvents_f2awki$ = FBApi.prototype.listEvents_f2awki$;
  ViewTaskApi.prototype.listen_ubid8w$ = FBApi.prototype.listen_ubid8w$;
  ViewTaskApi.prototype.map_jtxi0h$ = FBApi.prototype.map_jtxi0h$;
  ViewTaskApi.prototype.mapLive_1mq1ue$ = FBApi.prototype.mapLive_1mq1ue$;
  ViewTaskApi.prototype.on_2stdkb$ = FBApi.prototype.on_2stdkb$;
  ViewTaskApi.prototype.on_hgi4ad$ = FBApi.prototype.on_hgi4ad$;
  ViewTaskApi.prototype.onChange_rlu5c6$ = FBApi.prototype.onChange_rlu5c6$;
  ViewTaskApi.prototype.plusAssign_ubid8w$ = FBApi.prototype.plusAssign_ubid8w$;
  ViewTaskApi.prototype.process_y3juat$ = FBApi.prototype.process_y3juat$;
  ViewTaskApi.prototype.process_7xi3v7$ = FBApi.prototype.process_7xi3v7$;
  ViewTaskApi.prototype.query_wzkv1r$$default = FBApi.prototype.query_wzkv1r$$default;
  ViewTaskApi.prototype.remAssign_wgabca$ = FBApi.prototype.remAssign_wgabca$;
  ViewTaskApi.prototype.remAssign_djv61p$ = FBApi.prototype.remAssign_djv61p$;
  ViewTaskApi.prototype.remAssign_7fncnf$ = FBApi.prototype.remAssign_7fncnf$;
  ViewTaskApi.prototype.rxClass_c5yvvx$ = FBApi.prototype.rxClass_c5yvvx$;
  ViewTaskApi.prototype.rxClass_6sflyw$ = FBApi.prototype.rxClass_6sflyw$;
  ViewTaskApi.prototype.rxClass_9npl0m$ = FBApi.prototype.rxClass_9npl0m$;
  ViewTaskApi.prototype.rxClass_62ldac$ = FBApi.prototype.rxClass_62ldac$;
  ViewTaskApi.prototype.save_73z9b6$ = FBApi.prototype.save_73z9b6$;
  ViewTaskApi.prototype.signOut_7wq8x$ = FBApi.prototype.signOut_7wq8x$;
  ViewTaskApi.prototype.toChannelLater_z5dyp2$ = FBApi.prototype.toChannelLater_z5dyp2$;
  ViewTaskApi.prototype.toList_pujjsl$$default = FBApi.prototype.toList_pujjsl$$default;
  ViewTaskApi.prototype.toRandomFsDoc_xc7wmg$ = FBApi.prototype.toRandomFsDoc_xc7wmg$;
  ViewTaskApi.prototype.toRx_on0lyu$ = FBApi.prototype.toRx_on0lyu$;
  ViewTaskApi.prototype.toRxSet_jr4bl4$ = FBApi.prototype.toRxSet_jr4bl4$;
  ViewTaskApi.prototype.toSnapshotEvents_ecp0ut$ = FBApi.prototype.toSnapshotEvents_ecp0ut$;
  ViewTaskApi.prototype.visibility_12lt6u$ = FBApi.prototype.visibility_12lt6u$;
  ViewTaskApi.prototype.visible_od9jl4$ = FBApi.prototype.visible_od9jl4$;
  ViewTaskApi.prototype.rxEditing_3yjaz6$ = FBApi.prototype.rxEditing_3yjaz6$;
  ViewTaskApi.prototype.fsCache_sj6zb3$ = FBApi.prototype.fsCache_sj6zb3$;
  ViewTaskApi.prototype.listEvents_pujjsl$ = FBApi.prototype.listEvents_pujjsl$;
  ViewTaskApi.prototype.query_wzkv1r$ = FBApi.prototype.query_wzkv1r$;
  ViewTaskApi.prototype.toList_pujjsl$ = FBApi.prototype.toList_pujjsl$;
  ListTasks.prototype.view_50dwps$ = ViewTaskApi.prototype.view_50dwps$;
  ListTasks.prototype.process_y3juat$ = FBFromApi.prototype.process_y3juat$;
  ListTasks.prototype.rxClass_9npl0m$ = FBFromApi.prototype.rxClass_9npl0m$;
  ListTasks.prototype.rxClass_62ldac$ = FBFromApi.prototype.rxClass_62ldac$;
  ListTasks.prototype.get_backButton_tdhe4g$ = FBFromApi.prototype.get_backButton_tdhe4g$;
  ListTasks.prototype.get_backButton_ihoiae$ = FBFromApi.prototype.get_backButton_ihoiae$;
  ListTasks.prototype.get_clickActivate_tvm2vp$ = FBFromApi.prototype.get_clickActivate_tvm2vp$;
  ListTasks.prototype.get_clickToggle_tvm2vp$ = FBFromApi.prototype.get_clickToggle_tvm2vp$;
  ListTasks.prototype.get_ids_qko62t$ = FBFromApi.prototype.get_ids_qko62t$;
  ListTasks.prototype.get_live_73z9b6$ = FBFromApi.prototype.get_live_73z9b6$;
  ListTasks.prototype.get_randomDoc_sj9vaa$ = FBFromApi.prototype.get_randomDoc_sj9vaa$;
  ListTasks.prototype.get_ref_sj9vaa$ = FBFromApi.prototype.get_ref_sj9vaa$;
  ListTasks.prototype.get_ref_aqty80$ = FBFromApi.prototype.get_ref_aqty80$;
  ListTasks.prototype.get_snapshots_79y88y$ = FBFromApi.prototype.get_snapshots_79y88y$;
  ListTasks.prototype.rxEditing_3yjaz6$$default = FBFromApi.prototype.rxEditing_3yjaz6$$default;
  ListTasks.prototype.bind_zfaq6f$ = FBFromApi.prototype.bind_zfaq6f$;
  ListTasks.prototype.bind_xy1r9h$ = FBFromApi.prototype.bind_xy1r9h$;
  ListTasks.prototype.click_qob2x9$ = FBFromApi.prototype.click_qob2x9$;
  ListTasks.prototype.click_3xepc3$ = FBFromApi.prototype.click_3xepc3$;
  ListTasks.prototype.click_ka8ib0$ = FBFromApi.prototype.click_ka8ib0$;
  ListTasks.prototype.click_b0jn9q$ = FBFromApi.prototype.click_b0jn9q$;
  ListTasks.prototype.click_htd9kn$ = FBFromApi.prototype.click_htd9kn$;
  ListTasks.prototype.delete_73z9b6$ = FBFromApi.prototype.delete_73z9b6$;
  ListTasks.prototype.docs_prxdpg$ = FBFromApi.prototype.docs_prxdpg$;
  ListTasks.prototype.documentChanges_z2kgpb$ = FBFromApi.prototype.documentChanges_z2kgpb$;
  ListTasks.prototype.enabled_hlnvpg$ = FBFromApi.prototype.enabled_hlnvpg$;
  ListTasks.prototype.events_9k4h2$ = FBFromApi.prototype.events_9k4h2$;
  ListTasks.prototype.filter_hu0si9$ = FBFromApi.prototype.filter_hu0si9$;
  ListTasks.prototype.fsCache_sj6zb3$$default = FBFromApi.prototype.fsCache_sj6zb3$$default;
  ListTasks.prototype.fsCache_aujjp8$ = FBFromApi.prototype.fsCache_aujjp8$;
  ListTasks.prototype.list_qlxt6c$ = FBFromApi.prototype.list_qlxt6c$;
  ListTasks.prototype.list_u1uvxv$ = FBFromApi.prototype.list_u1uvxv$;
  ListTasks.prototype.listEvents_pujjsl$$default = FBFromApi.prototype.listEvents_pujjsl$$default;
  ListTasks.prototype.listEvents_ghesau$ = FBFromApi.prototype.listEvents_ghesau$;
  ListTasks.prototype.listEvents_f2awki$ = FBFromApi.prototype.listEvents_f2awki$;
  ListTasks.prototype.on_2stdkb$ = FBFromApi.prototype.on_2stdkb$;
  ListTasks.prototype.on_hgi4ad$ = FBFromApi.prototype.on_hgi4ad$;
  ListTasks.prototype.query_wzkv1r$$default = FBFromApi.prototype.query_wzkv1r$$default;
  ListTasks.prototype.save_73z9b6$ = FBFromApi.prototype.save_73z9b6$;
  ListTasks.prototype.signOut_7wq8x$ = FBFromApi.prototype.signOut_7wq8x$;
  ListTasks.prototype.toList_pujjsl$$default = FBFromApi.prototype.toList_pujjsl$$default;
  ListTasks.prototype.toRandomFsDoc_xc7wmg$ = FBFromApi.prototype.toRandomFsDoc_xc7wmg$;
  ListTasks.prototype.toRx_on0lyu$ = FBFromApi.prototype.toRx_on0lyu$;
  ListTasks.prototype.toSnapshotEvents_ecp0ut$ = FBFromApi.prototype.toSnapshotEvents_ecp0ut$;
  ListTasks.prototype.visibility_12lt6u$ = FBFromApi.prototype.visibility_12lt6u$;
  ListTasks.prototype.visible_od9jl4$ = FBFromApi.prototype.visible_od9jl4$;
  ListTasks.prototype.newTask = ViewTaskApi.prototype.newTask;
  ListTasks.prototype.rxEditing_3yjaz6$ = FBFromApi.prototype.rxEditing_3yjaz6$;
  ListTasks.prototype.fsCache_sj6zb3$ = FBFromApi.prototype.fsCache_sj6zb3$;
  ListTasks.prototype.listEvents_pujjsl$ = FBFromApi.prototype.listEvents_pujjsl$;
  ListTasks.prototype.query_wzkv1r$ = FBFromApi.prototype.query_wzkv1r$;
  ListTasks.prototype.toList_pujjsl$ = FBFromApi.prototype.toList_pujjsl$;
  LoggedIn.prototype.signOut_7wq8x$ = FBApi.prototype.signOut_7wq8x$;
  LoggedIn.prototype.view_50dwps$ = ViewTaskApi.prototype.view_50dwps$;
  LoggedIn.prototype.process_y3juat$ = FBApi.prototype.process_y3juat$;
  LoggedIn.prototype.rxClass_9npl0m$ = FBApi.prototype.rxClass_9npl0m$;
  LoggedIn.prototype.rxClass_62ldac$ = FBApi.prototype.rxClass_62ldac$;
  LoggedIn.prototype.get_clickActivate_tvm2vp$ = FBApi.prototype.get_clickActivate_tvm2vp$;
  LoggedIn.prototype.get_clickToggle_tvm2vp$ = FBApi.prototype.get_clickToggle_tvm2vp$;
  LoggedIn.prototype.get_ids_qko62t$ = FBApi.prototype.get_ids_qko62t$;
  LoggedIn.prototype.get_live_73z9b6$ = FBApi.prototype.get_live_73z9b6$;
  LoggedIn.prototype.get_randomDoc_sj9vaa$ = FBApi.prototype.get_randomDoc_sj9vaa$;
  LoggedIn.prototype.get_ref_sj9vaa$ = FBApi.prototype.get_ref_sj9vaa$;
  LoggedIn.prototype.get_ref_aqty80$ = FBApi.prototype.get_ref_aqty80$;
  LoggedIn.prototype.get_snapshots_79y88y$ = FBApi.prototype.get_snapshots_79y88y$;
  LoggedIn.prototype.rxEditing_3yjaz6$$default = FBApi.prototype.rxEditing_3yjaz6$$default;
  LoggedIn.prototype.bind_zfaq6f$ = FBApi.prototype.bind_zfaq6f$;
  LoggedIn.prototype.bind_xy1r9h$ = FBApi.prototype.bind_xy1r9h$;
  LoggedIn.prototype.click_qob2x9$ = FBApi.prototype.click_qob2x9$;
  LoggedIn.prototype.click_3xepc3$ = FBApi.prototype.click_3xepc3$;
  LoggedIn.prototype.click_ka8ib0$ = FBApi.prototype.click_ka8ib0$;
  LoggedIn.prototype.click_b0jn9q$ = FBApi.prototype.click_b0jn9q$;
  LoggedIn.prototype.click_htd9kn$ = FBApi.prototype.click_htd9kn$;
  LoggedIn.prototype.delete_73z9b6$ = FBApi.prototype.delete_73z9b6$;
  LoggedIn.prototype.docs_prxdpg$ = FBApi.prototype.docs_prxdpg$;
  LoggedIn.prototype.documentChanges_z2kgpb$ = FBApi.prototype.documentChanges_z2kgpb$;
  LoggedIn.prototype.enabled_hlnvpg$ = FBApi.prototype.enabled_hlnvpg$;
  LoggedIn.prototype.events_9k4h2$ = FBApi.prototype.events_9k4h2$;
  LoggedIn.prototype.filter_hu0si9$ = FBApi.prototype.filter_hu0si9$;
  LoggedIn.prototype.fsCache_sj6zb3$$default = FBApi.prototype.fsCache_sj6zb3$$default;
  LoggedIn.prototype.fsCache_aujjp8$ = FBApi.prototype.fsCache_aujjp8$;
  LoggedIn.prototype.list_qlxt6c$ = FBApi.prototype.list_qlxt6c$;
  LoggedIn.prototype.list_u1uvxv$ = FBApi.prototype.list_u1uvxv$;
  LoggedIn.prototype.listEvents_pujjsl$$default = FBApi.prototype.listEvents_pujjsl$$default;
  LoggedIn.prototype.listEvents_ghesau$ = FBApi.prototype.listEvents_ghesau$;
  LoggedIn.prototype.listEvents_f2awki$ = FBApi.prototype.listEvents_f2awki$;
  LoggedIn.prototype.on_2stdkb$ = FBApi.prototype.on_2stdkb$;
  LoggedIn.prototype.on_hgi4ad$ = FBApi.prototype.on_hgi4ad$;
  LoggedIn.prototype.query_wzkv1r$$default = FBApi.prototype.query_wzkv1r$$default;
  LoggedIn.prototype.save_73z9b6$ = FBApi.prototype.save_73z9b6$;
  LoggedIn.prototype.toList_pujjsl$$default = FBApi.prototype.toList_pujjsl$$default;
  LoggedIn.prototype.toRandomFsDoc_xc7wmg$ = FBApi.prototype.toRandomFsDoc_xc7wmg$;
  LoggedIn.prototype.toRx_on0lyu$ = FBApi.prototype.toRx_on0lyu$;
  LoggedIn.prototype.toSnapshotEvents_ecp0ut$ = FBApi.prototype.toSnapshotEvents_ecp0ut$;
  LoggedIn.prototype.visibility_12lt6u$ = FBApi.prototype.visibility_12lt6u$;
  LoggedIn.prototype.visible_od9jl4$ = FBApi.prototype.visible_od9jl4$;
  LoggedIn.prototype.newTask = ViewTaskApi.prototype.newTask;
  LoggedIn.prototype.rxEditing_3yjaz6$ = FBApi.prototype.rxEditing_3yjaz6$;
  LoggedIn.prototype.fsCache_sj6zb3$ = FBApi.prototype.fsCache_sj6zb3$;
  LoggedIn.prototype.listEvents_pujjsl$ = FBApi.prototype.listEvents_pujjsl$;
  LoggedIn.prototype.query_wzkv1r$ = FBApi.prototype.query_wzkv1r$;
  LoggedIn.prototype.toList_pujjsl$ = FBApi.prototype.toList_pujjsl$;
  SelectTags.prototype.process_y3juat$ = FBFromApi.prototype.process_y3juat$;
  SelectTags.prototype.rxClass_9npl0m$ = FBFromApi.prototype.rxClass_9npl0m$;
  SelectTags.prototype.rxClass_62ldac$ = FBFromApi.prototype.rxClass_62ldac$;
  SelectTags.prototype.get_backButton_tdhe4g$ = FBFromApi.prototype.get_backButton_tdhe4g$;
  SelectTags.prototype.get_backButton_ihoiae$ = FBFromApi.prototype.get_backButton_ihoiae$;
  SelectTags.prototype.get_clickActivate_tvm2vp$ = FBFromApi.prototype.get_clickActivate_tvm2vp$;
  SelectTags.prototype.get_clickToggle_tvm2vp$ = FBFromApi.prototype.get_clickToggle_tvm2vp$;
  SelectTags.prototype.get_ids_qko62t$ = FBFromApi.prototype.get_ids_qko62t$;
  SelectTags.prototype.get_live_73z9b6$ = FBFromApi.prototype.get_live_73z9b6$;
  SelectTags.prototype.get_randomDoc_sj9vaa$ = FBFromApi.prototype.get_randomDoc_sj9vaa$;
  SelectTags.prototype.get_ref_sj9vaa$ = FBFromApi.prototype.get_ref_sj9vaa$;
  SelectTags.prototype.get_ref_aqty80$ = FBFromApi.prototype.get_ref_aqty80$;
  SelectTags.prototype.get_snapshots_79y88y$ = FBFromApi.prototype.get_snapshots_79y88y$;
  SelectTags.prototype.rxEditing_3yjaz6$$default = FBFromApi.prototype.rxEditing_3yjaz6$$default;
  SelectTags.prototype.bind_zfaq6f$ = FBFromApi.prototype.bind_zfaq6f$;
  SelectTags.prototype.bind_xy1r9h$ = FBFromApi.prototype.bind_xy1r9h$;
  SelectTags.prototype.click_qob2x9$ = FBFromApi.prototype.click_qob2x9$;
  SelectTags.prototype.click_3xepc3$ = FBFromApi.prototype.click_3xepc3$;
  SelectTags.prototype.click_ka8ib0$ = FBFromApi.prototype.click_ka8ib0$;
  SelectTags.prototype.click_b0jn9q$ = FBFromApi.prototype.click_b0jn9q$;
  SelectTags.prototype.click_htd9kn$ = FBFromApi.prototype.click_htd9kn$;
  SelectTags.prototype.delete_73z9b6$ = FBFromApi.prototype.delete_73z9b6$;
  SelectTags.prototype.docs_prxdpg$ = FBFromApi.prototype.docs_prxdpg$;
  SelectTags.prototype.documentChanges_z2kgpb$ = FBFromApi.prototype.documentChanges_z2kgpb$;
  SelectTags.prototype.enabled_hlnvpg$ = FBFromApi.prototype.enabled_hlnvpg$;
  SelectTags.prototype.events_9k4h2$ = FBFromApi.prototype.events_9k4h2$;
  SelectTags.prototype.filter_hu0si9$ = FBFromApi.prototype.filter_hu0si9$;
  SelectTags.prototype.fsCache_sj6zb3$$default = FBFromApi.prototype.fsCache_sj6zb3$$default;
  SelectTags.prototype.fsCache_aujjp8$ = FBFromApi.prototype.fsCache_aujjp8$;
  SelectTags.prototype.list_qlxt6c$ = FBFromApi.prototype.list_qlxt6c$;
  SelectTags.prototype.list_u1uvxv$ = FBFromApi.prototype.list_u1uvxv$;
  SelectTags.prototype.listEvents_pujjsl$$default = FBFromApi.prototype.listEvents_pujjsl$$default;
  SelectTags.prototype.listEvents_ghesau$ = FBFromApi.prototype.listEvents_ghesau$;
  SelectTags.prototype.listEvents_f2awki$ = FBFromApi.prototype.listEvents_f2awki$;
  SelectTags.prototype.on_2stdkb$ = FBFromApi.prototype.on_2stdkb$;
  SelectTags.prototype.on_hgi4ad$ = FBFromApi.prototype.on_hgi4ad$;
  SelectTags.prototype.query_wzkv1r$$default = FBFromApi.prototype.query_wzkv1r$$default;
  SelectTags.prototype.save_73z9b6$ = FBFromApi.prototype.save_73z9b6$;
  SelectTags.prototype.signOut_7wq8x$ = FBFromApi.prototype.signOut_7wq8x$;
  SelectTags.prototype.toList_pujjsl$$default = FBFromApi.prototype.toList_pujjsl$$default;
  SelectTags.prototype.toRandomFsDoc_xc7wmg$ = FBFromApi.prototype.toRandomFsDoc_xc7wmg$;
  SelectTags.prototype.toRx_on0lyu$ = FBFromApi.prototype.toRx_on0lyu$;
  SelectTags.prototype.toSnapshotEvents_ecp0ut$ = FBFromApi.prototype.toSnapshotEvents_ecp0ut$;
  SelectTags.prototype.visibility_12lt6u$ = FBFromApi.prototype.visibility_12lt6u$;
  SelectTags.prototype.visible_od9jl4$ = FBFromApi.prototype.visible_od9jl4$;
  SelectTags.prototype.rxEditing_3yjaz6$ = FBFromApi.prototype.rxEditing_3yjaz6$;
  SelectTags.prototype.fsCache_sj6zb3$ = FBFromApi.prototype.fsCache_sj6zb3$;
  SelectTags.prototype.listEvents_pujjsl$ = FBFromApi.prototype.listEvents_pujjsl$;
  SelectTags.prototype.query_wzkv1r$ = FBFromApi.prototype.query_wzkv1r$;
  SelectTags.prototype.toList_pujjsl$ = FBFromApi.prototype.toList_pujjsl$;
  ViewTask.prototype.process_y3juat$ = FBFromApi.prototype.process_y3juat$;
  ViewTask.prototype.rxClass_9npl0m$ = FBFromApi.prototype.rxClass_9npl0m$;
  ViewTask.prototype.rxClass_62ldac$ = FBFromApi.prototype.rxClass_62ldac$;
  ViewTask.prototype.get_backButton_tdhe4g$ = FBFromApi.prototype.get_backButton_tdhe4g$;
  ViewTask.prototype.get_backButton_ihoiae$ = FBFromApi.prototype.get_backButton_ihoiae$;
  ViewTask.prototype.get_clickActivate_tvm2vp$ = FBFromApi.prototype.get_clickActivate_tvm2vp$;
  ViewTask.prototype.get_clickToggle_tvm2vp$ = FBFromApi.prototype.get_clickToggle_tvm2vp$;
  ViewTask.prototype.get_ids_qko62t$ = FBFromApi.prototype.get_ids_qko62t$;
  ViewTask.prototype.get_live_73z9b6$ = FBFromApi.prototype.get_live_73z9b6$;
  ViewTask.prototype.get_randomDoc_sj9vaa$ = FBFromApi.prototype.get_randomDoc_sj9vaa$;
  ViewTask.prototype.get_ref_sj9vaa$ = FBFromApi.prototype.get_ref_sj9vaa$;
  ViewTask.prototype.get_ref_aqty80$ = FBFromApi.prototype.get_ref_aqty80$;
  ViewTask.prototype.get_snapshots_79y88y$ = FBFromApi.prototype.get_snapshots_79y88y$;
  ViewTask.prototype.rxEditing_3yjaz6$$default = FBFromApi.prototype.rxEditing_3yjaz6$$default;
  ViewTask.prototype.bind_zfaq6f$ = FBFromApi.prototype.bind_zfaq6f$;
  ViewTask.prototype.bind_xy1r9h$ = FBFromApi.prototype.bind_xy1r9h$;
  ViewTask.prototype.click_qob2x9$ = FBFromApi.prototype.click_qob2x9$;
  ViewTask.prototype.click_3xepc3$ = FBFromApi.prototype.click_3xepc3$;
  ViewTask.prototype.click_ka8ib0$ = FBFromApi.prototype.click_ka8ib0$;
  ViewTask.prototype.click_b0jn9q$ = FBFromApi.prototype.click_b0jn9q$;
  ViewTask.prototype.click_htd9kn$ = FBFromApi.prototype.click_htd9kn$;
  ViewTask.prototype.delete_73z9b6$ = FBFromApi.prototype.delete_73z9b6$;
  ViewTask.prototype.docs_prxdpg$ = FBFromApi.prototype.docs_prxdpg$;
  ViewTask.prototype.documentChanges_z2kgpb$ = FBFromApi.prototype.documentChanges_z2kgpb$;
  ViewTask.prototype.enabled_hlnvpg$ = FBFromApi.prototype.enabled_hlnvpg$;
  ViewTask.prototype.events_9k4h2$ = FBFromApi.prototype.events_9k4h2$;
  ViewTask.prototype.filter_hu0si9$ = FBFromApi.prototype.filter_hu0si9$;
  ViewTask.prototype.fsCache_sj6zb3$$default = FBFromApi.prototype.fsCache_sj6zb3$$default;
  ViewTask.prototype.fsCache_aujjp8$ = FBFromApi.prototype.fsCache_aujjp8$;
  ViewTask.prototype.list_qlxt6c$ = FBFromApi.prototype.list_qlxt6c$;
  ViewTask.prototype.list_u1uvxv$ = FBFromApi.prototype.list_u1uvxv$;
  ViewTask.prototype.listEvents_pujjsl$$default = FBFromApi.prototype.listEvents_pujjsl$$default;
  ViewTask.prototype.listEvents_ghesau$ = FBFromApi.prototype.listEvents_ghesau$;
  ViewTask.prototype.listEvents_f2awki$ = FBFromApi.prototype.listEvents_f2awki$;
  ViewTask.prototype.on_2stdkb$ = FBFromApi.prototype.on_2stdkb$;
  ViewTask.prototype.on_hgi4ad$ = FBFromApi.prototype.on_hgi4ad$;
  ViewTask.prototype.query_wzkv1r$$default = FBFromApi.prototype.query_wzkv1r$$default;
  ViewTask.prototype.save_73z9b6$ = FBFromApi.prototype.save_73z9b6$;
  ViewTask.prototype.signOut_7wq8x$ = FBFromApi.prototype.signOut_7wq8x$;
  ViewTask.prototype.toList_pujjsl$$default = FBFromApi.prototype.toList_pujjsl$$default;
  ViewTask.prototype.toRandomFsDoc_xc7wmg$ = FBFromApi.prototype.toRandomFsDoc_xc7wmg$;
  ViewTask.prototype.toRx_on0lyu$ = FBFromApi.prototype.toRx_on0lyu$;
  ViewTask.prototype.toSnapshotEvents_ecp0ut$ = FBFromApi.prototype.toSnapshotEvents_ecp0ut$;
  ViewTask.prototype.visibility_12lt6u$ = FBFromApi.prototype.visibility_12lt6u$;
  ViewTask.prototype.visible_od9jl4$ = FBFromApi.prototype.visible_od9jl4$;
  ViewTask.prototype.rxEditing_3yjaz6$ = FBFromApi.prototype.rxEditing_3yjaz6$;
  ViewTask.prototype.fsCache_sj6zb3$ = FBFromApi.prototype.fsCache_sj6zb3$;
  ViewTask.prototype.listEvents_pujjsl$ = FBFromApi.prototype.listEvents_pujjsl$;
  ViewTask.prototype.query_wzkv1r$ = FBFromApi.prototype.query_wzkv1r$;
  ViewTask.prototype.toList_pujjsl$ = FBFromApi.prototype.toList_pujjsl$;
  main();
  Kotlin.defineModule('appsimake-tasks', _);
  return _;
}(typeof this['appsimake-tasks'] === 'undefined' ? {} : this['appsimake-tasks'], kotlin, this['appsimake-taskslib'], this['appsimake-firebase'], this['appsimake-commonshr'], this['appsimake-commonui'], this['appsimake-commonfb'], this['appsimake-domx'], this['appsimake-bootstrap'], this['kotlinx-coroutines-core'], this['appsimake-fontawesome']);

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-taskslib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-taskslib' was not found. Please, check whether 'appsimake-taskslib' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-tasks'.");
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
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-tasks'.");
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
this['appsimake-tasks'] = function (_, Kotlin, $module$appsimake_taskslib, $module$appsimake_firebase, $module$appsimake_commonui, $module$appsimake_commonfb, $module$appsimake_domx, $module$appsimake_commonshr, $module$appsimake_bootstrap, $module$kotlinx_coroutines_core, $module$appsimake_fontawesome) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Tag = $module$appsimake_taskslib.taskslib.Tag;
  var Unit = Kotlin.kotlin.Unit;
  var fsLookup = $module$appsimake_firebase.firebase.firestore.fsLookup_rg6jg5$;
  var toList = $module$appsimake_firebase.firebase.firestore.toList_wamwi5$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var get_notes = $module$appsimake_taskslib.taskslib.get_notes_yrnr6e$;
  var collectionRef = $module$appsimake_firebase.firebase.firestore.collectionRef_biyy30$;
  var delete_0 = $module$appsimake_firebase.firebase.firestore.delete_u0r02q$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ForwardBase = $module$appsimake_commonui.commonui.ForwardBase;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var FBBackApi = $module$appsimake_commonfb.commonfb.FBBackApi;
  var BackEditKillsUixApi = $module$appsimake_commonui.commonui.BackEditKillsUixApi;
  var HasBack = $module$appsimake_commonui.commonui.HasBack;
  var widget = $module$appsimake_commonui.commonui.widget;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_leftRightTopBottom0 = $module$appsimake_domx.styles.get_leftRightTopBottom0_kre7dp$;
  var get_widget = $module$appsimake_commonui.commonui.widget.get_widget_asww5s$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_im8gow$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var required = $module$appsimake_commonui.commonui.editing.required_dvq9sy$;
  var column = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var BindCsKillsUixApi = $module$appsimake_commonui.commonui.BindCsKillsUixApi;
  var advance = $module$appsimake_commonui.commonui.advance_i6d3n$;
  var killable = $module$appsimake_commonshr.killable;
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
  var DbApi = $module$appsimake_firebase.firebase.DbApi;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var FbLinksFactory = $module$appsimake_commonfb.commonfb.FbLinksFactory;
  var forwarding = $module$appsimake_commonui.commonui.forwarding_34i6n3$;
  var links = $module$appsimake_commonui.commonui.links;
  var toFsEditable = $module$appsimake_commonshr.commonshr.toFsEditable_fvyl56$;
  var backOnRedisplay = $module$appsimake_commonui.commonui.backOnRedisplay_hq6gga$;
  var LinkApi = $module$appsimake_commonui.commonui.links.LinkApi;
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
  var BaseTC = $module$appsimake_commonui.commonui.links.BaseTC;
  var get_new = $module$appsimake_firebase.firebase.firestore.get_new_bmgwz6$;
  var taskslib = $module$appsimake_taskslib.taskslib;
  var get_private = $module$appsimake_commonshr.commonshr.get_private_py8usb$;
  var get_tasks = $module$appsimake_taskslib.taskslib.get_tasks_x4imip$;
  var get_hiddenTasks = $module$appsimake_taskslib.taskslib.get_hiddenTasks_x4imip$;
  var get_usertags = $module$appsimake_taskslib.taskslib.get_usertags_x4imip$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var get_readOnly = $module$appsimake_commonshr.rx.get_readOnly_hw0zcq$;
  var FBApi = $module$appsimake_commonfb.commonfb.FBApi;
  var get_eye = $module$appsimake_fontawesome.fontawesome.get_eye_xml72e$;
  var get_span = $module$appsimake_domx.domx.get_span_asww5s$;
  var get_search = $module$appsimake_fontawesome.fontawesome.get_search_xml72e$;
  var get_eyeSlash = $module$appsimake_fontawesome.fontawesome.get_eyeSlash_xml72e$;
  var onPersist = $module$appsimake_commonui.commonui.editing.onPersist_jf6dqp$;
  var BackCreateKillsUixApi = $module$appsimake_commonui.commonui.BackCreateKillsUixApi;
  var onEdit = $module$appsimake_commonui.commonui.editing.onEdit_jf6dqp$;
  var get_times = $module$appsimake_fontawesome.fontawesome.get_times_xml72e$;
  var plus_0 = Kotlin.kotlin.collections.plus_qloxvw$;
  var get_comment = $module$appsimake_fontawesome.fontawesome.get_comment_xml72e$;
  var get_pen = $module$appsimake_fontawesome.fontawesome.get_pen_xml72e$;
  var get_clipboardCheck = $module$appsimake_fontawesome.fontawesome.get_clipboardCheck_xml72e$;
  var get_dl = $module$appsimake_domx.domx.get_dl_asww5s$;
  var get_dt = $module$appsimake_domx.domx.get_dt_asww5s$;
  var get_dd = $module$appsimake_domx.domx.get_dd_asww5s$;
  var Note = $module$appsimake_taskslib.taskslib.Note;
  var copy = $module$appsimake_commonshr.commonshr.properties.copy_szlj5h$;
  var toFsDoc = $module$appsimake_commonshr.commonshr.toFsDoc_ved7zl$;
  var toFsDoc_0 = $module$appsimake_commonshr.commonshr.toFsDoc_ihdkly$;
  EditNote.prototype = Object.create(ForwardBase.prototype);
  EditNote.prototype.constructor = EditNote;
  EditTag.prototype = Object.create(ForwardBase.prototype);
  EditTag.prototype.constructor = EditTag;
  EditTask.prototype = Object.create(ForwardBase.prototype);
  EditTask.prototype.constructor = EditTask;
  Links.prototype = Object.create(FbLinksFactory.prototype);
  Links.prototype.constructor = Links;
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
  NewNote.prototype = Object.create(ForwardBase.prototype);
  NewNote.prototype.constructor = NewNote;
  NewTag.prototype = Object.create(ForwardBase.prototype);
  NewTag.prototype.constructor = NewTag;
  NewTask.prototype = Object.create(ForwardBase.prototype);
  NewTask.prototype.constructor = NewTask;
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
            this.result_0 = delete_0(this.local$batch, collectionRef(get_notes(this.local$$receiver), this.local$batch), void 0, this);
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
  function EditNote(from, linkage, item) {
    ForwardBase.call(this, from);
    this.$delegate_rnvm2a$_0 = from;
    this.$delegate_rnvm2a$_1 = linkage;
    this.editNote_flswci$_0 = this;
    this.editing_pp09a6$_0 = this.rxEditing_6l8l9j$(item);
    this.rawView_r0ljd9$_0 = ui(this);
  }
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
  Object.defineProperty(EditNote.prototype, 'db', {
    get: function () {
      return this.$delegate_rnvm2a$_0.db;
    }
  });
  Object.defineProperty(EditNote.prototype, 'links', {
    get: function () {
      return this.$delegate_rnvm2a$_0.links;
    }
  });
  Object.defineProperty(EditNote.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_rnvm2a$_0.loggedIn;
    }
  });
  Object.defineProperty(EditNote.prototype, 'viewTask', {
    get: function () {
      return this.$delegate_rnvm2a$_0.viewTask;
    }
  });
  EditNote.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_rnvm2a$_0.get_randomDoc_sj9vaa$($receiver);
  };
  EditNote.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_rnvm2a$_0.get_ref_sj9vaa$($receiver);
  };
  EditNote.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_rnvm2a$_0.get_ref_aqty80$($receiver);
  };
  EditNote.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_rnvm2a$_0.delete_73z9b6$($receiver);
  };
  EditNote.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_rnvm2a$_0.delete_ihdkly$($receiver);
  };
  EditNote.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_rnvm2a$_0.get_prxdpg$($receiver, continuation);
  };
  EditNote.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_rnvm2a$_0.query_wzkv1r$$default($receiver, query);
  };
  EditNote.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_rnvm2a$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  EditNote.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_rnvm2a$_0.save_73z9b6$($receiver);
  };
  EditNote.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_rnvm2a$_0.save_biv66q$($receiver);
  };
  EditNote.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_rnvm2a$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(EditNote.prototype, 'back', {
    get: function () {
      return this.$delegate_rnvm2a$_1.back;
    }
  });
  EditNote.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditNote',
    interfaces: [BackEditKillsUixApi, FBBackApi, HasBack, EditNotePath, ViewTaskPath, ForwardBase]
  };
  function ui$lambda(this$ui) {
    return function ($receiver) {
      get_leftRightTopBottom0(get_cls($receiver));
      var $receiver_0 = get_insert(get_widget($receiver)).textArea;
      var this$ui_0 = this$ui;
      var $receiver_1 = $receiver_0.cls;
      get_m1($receiver_1);
      get_flexGrow1($receiver_1);
      required(this$ui_0.bind_igb9j9$($receiver_0, this$ui_0.editing.current.text.rxv));
      return Unit;
    };
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backSaveDiscard_e1rmy3$($receiver_0.slots.left);
    remAssign($receiver_0.title, 'Edit Note');
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
  function EditTag(from, linkage, item) {
    ForwardBase.call(this, from);
    this.$delegate_5w5zpu$_0 = from;
    this.$delegate_5w5zpu$_1 = linkage;
    this.editTag_ky5s2u$_0 = this;
    this.editing_kyjgfy$_0 = this.rxEditing_6l8l9j$(item);
    this.rawView_2n1749$_0 = ui_0(this);
  }
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
  Object.defineProperty(EditTag.prototype, 'db', {
    get: function () {
      return this.$delegate_5w5zpu$_0.db;
    }
  });
  Object.defineProperty(EditTag.prototype, 'links', {
    get: function () {
      return this.$delegate_5w5zpu$_0.links;
    }
  });
  Object.defineProperty(EditTag.prototype, 'listTags', {
    get: function () {
      return this.$delegate_5w5zpu$_0.listTags;
    }
  });
  Object.defineProperty(EditTag.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_5w5zpu$_0.loggedIn;
    }
  });
  EditTag.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_5w5zpu$_0.get_randomDoc_sj9vaa$($receiver);
  };
  EditTag.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_5w5zpu$_0.get_ref_sj9vaa$($receiver);
  };
  EditTag.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_5w5zpu$_0.get_ref_aqty80$($receiver);
  };
  EditTag.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_5w5zpu$_0.delete_73z9b6$($receiver);
  };
  EditTag.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_5w5zpu$_0.delete_ihdkly$($receiver);
  };
  EditTag.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_5w5zpu$_0.get_prxdpg$($receiver, continuation);
  };
  EditTag.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_5w5zpu$_0.query_wzkv1r$$default($receiver, query);
  };
  EditTag.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_5w5zpu$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  EditTag.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_5w5zpu$_0.save_73z9b6$($receiver);
  };
  EditTag.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_5w5zpu$_0.save_biv66q$($receiver);
  };
  EditTag.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_5w5zpu$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(EditTag.prototype, 'back', {
    get: function () {
      return this.$delegate_5w5zpu$_1.back;
    }
  });
  EditTag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditTag',
    interfaces: [BackEditKillsUixApi, FBBackApi, HasBack, EditTagPath, ListTagsPath, ForwardBase]
  };
  function ui$lambda_0(this$ui) {
    return function ($receiver) {
      get_leftRightTopBottom0(get_cls($receiver));
      var $receiver_0 = get_insert(get_widget($receiver)).input;
      var this$ui_0 = this$ui;
      get_m1($receiver_0.cls);
      required(this$ui_0.bind_8y93tj$($receiver_0, this$ui_0.editing.current.name));
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
    interfaces: [LoggedInPath]
  };
  function EditTaskLike() {
  }
  EditTaskLike.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditTaskLike',
    interfaces: [LoggedInPath, BindCsKillsUixApi]
  };
  function EditTask(from, linkage, item, deleteTrigger, fromView) {
    if (deleteTrigger === void 0)
      deleteTrigger = killable.Noop;
    if (fromView === void 0)
      fromView = false;
    ForwardBase.call(this, from);
    this.from = from;
    this.item = item;
    this.fromView = fromView;
    this.$delegate_5eug42$_0 = linkage;
    this.editTask_hzbl2j$_0 = this;
    this.editing_ni4wbm$_0 = this.rxEditing_6l8l9j$(this.item, EditTask$editing$lambda(this, deleteTrigger));
    this.rawView_56mmzx$_0 = ui_1(this);
  }
  Object.defineProperty(EditTask.prototype, 'editTask', {
    get: function () {
      return this.editTask_hzbl2j$_0;
    }
  });
  Object.defineProperty(EditTask.prototype, 'editing', {
    get: function () {
      return this.editing_ni4wbm$_0;
    }
  });
  function Coroutine$EditTask$viewTask$lambda$lambda(this$_0, this$EditTask_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$this$EditTask = this$EditTask_0;
  }
  Coroutine$EditTask$viewTask$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$EditTask$viewTask$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$EditTask$viewTask$lambda$lambda.prototype.constructor = Coroutine$EditTask$viewTask$lambda$lambda;
  Coroutine$EditTask$viewTask$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.fwd_e1fa5e$(this.local$this$.links.viewTask, this.local$this$EditTask.item.id.id, true, this);
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
  function EditTask$viewTask$lambda$lambda(this$_0, this$EditTask_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$EditTask$viewTask$lambda$lambda(this$_0, this$EditTask_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  EditTask.prototype.viewTask = function () {
    var $receiver = this.from;
    advance($receiver, EditTask$viewTask$lambda$lambda($receiver, this));
  };
  Object.defineProperty(EditTask.prototype, 'rawView', {
    get: function () {
      return this.rawView_56mmzx$_0;
    }
  });
  Object.defineProperty(EditTask.prototype, 'db', {
    get: function () {
      return this.from.db;
    }
  });
  Object.defineProperty(EditTask.prototype, 'links', {
    get: function () {
      return this.from.links;
    }
  });
  Object.defineProperty(EditTask.prototype, 'loggedIn', {
    get: function () {
      return this.from.loggedIn;
    }
  });
  EditTask.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.from.get_randomDoc_sj9vaa$($receiver);
  };
  EditTask.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.from.get_ref_sj9vaa$($receiver);
  };
  EditTask.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.from.get_ref_aqty80$($receiver);
  };
  EditTask.prototype.delete_73z9b6$ = function ($receiver) {
    return this.from.delete_73z9b6$($receiver);
  };
  EditTask.prototype.delete_ihdkly$ = function ($receiver) {
    return this.from.delete_ihdkly$($receiver);
  };
  EditTask.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.from.get_prxdpg$($receiver, continuation);
  };
  EditTask.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.from.query_wzkv1r$$default($receiver, query);
  };
  EditTask.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.from.randomEditable_mx4g9l$$default($receiver, d);
  };
  EditTask.prototype.save_73z9b6$ = function ($receiver) {
    return this.from.save_73z9b6$($receiver);
  };
  EditTask.prototype.save_biv66q$ = function ($receiver) {
    return this.from.save_biv66q$($receiver);
  };
  EditTask.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.from.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(EditTask.prototype, 'back', {
    get: function () {
      return this.$delegate_5eug42$_0.back;
    }
  });
  function Coroutine$EditTask$editing$lambda$lambda$lambda(this$EditTask_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$EditTask = this$EditTask_0;
  }
  Coroutine$EditTask$editing$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$EditTask$editing$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$EditTask$editing$lambda$lambda$lambda.prototype.constructor = Coroutine$EditTask$editing$lambda$lambda$lambda;
  Coroutine$EditTask$editing$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = deleteCollections(this.local$this$EditTask.item.id, this.local$this$EditTask, this);
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
  function EditTask$editing$lambda$lambda$lambda(this$EditTask_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$EditTask$editing$lambda$lambda$lambda(this$EditTask_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function EditTask$editing$lambda$lambda(this$EditTask, closure$deleteTrigger) {
    return function () {
      this$EditTask.delete_ihdkly$(this$EditTask.item);
      launch(this$EditTask.loggedIn, void 0, void 0, EditTask$editing$lambda$lambda$lambda(this$EditTask));
      closure$deleteTrigger();
      return Unit;
    };
  }
  function EditTask$editing$lambda(this$EditTask, closure$deleteTrigger) {
    return function (tr) {
      return tr.copy_yrs701$(EditTask$editing$lambda$lambda(this$EditTask, closure$deleteTrigger));
    };
  }
  EditTask.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditTask',
    interfaces: [BackEditKillsUixApi, FBBackApi, HasBack, EditTaskPath, EditTaskLike, LoggedInPath, ForwardBase]
  };
  function ui$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.viewTask();
      return Unit;
    };
  }
  function ui$lambda_1(this$ui) {
    return function ($receiver) {
      var $receiver_0 = this$ui.get_backSaveDiscard_e1rmy3$($receiver.slots.left);
      var this$ui_0 = this$ui;
      if (!this$ui_0.fromView) {
        $receiver_0.saveAndView_o14v8n$(ui$lambda$lambda$lambda(this$ui_0));
      }
      remAssign($receiver.title, 'Edit Task');
      this$ui.get_saveDeleteButton_tdhe4g$($receiver.right);
      return Unit;
    };
  }
  function ui_1($receiver) {
    return editTaskUi($receiver, $receiver.editing.current, ui$lambda_1($receiver));
  }
  function editTaskUi$lambda$lambda(closure$item, this$editTaskUi) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).formGroup;
      var closure$item_0 = closure$item;
      var this$editTaskUi_0 = this$editTaskUi;
      remAssign($receiver_0.label, 'Title');
      required(this$editTaskUi_0.bind_8y93tj$($receiver_0.input, closure$item_0.title));
      var $receiver_1 = get_insert_0($receiver).formGroup;
      var closure$item_1 = closure$item;
      var this$editTaskUi_1 = this$editTaskUi;
      remAssign($receiver_1.label, 'Text');
      var $receiver_2 = $receiver_1.textArea;
      $receiver_2.node.rows = 5;
      this$editTaskUi_1.bind_8y93tj$($receiver_2, closure$item_1.text);
      var $receiver_3 = get_insert_0($receiver).formGroup;
      var closure$item_2 = closure$item;
      var this$editTaskUi_2 = this$editTaskUi;
      remAssign($receiver_3.label, 'Status');
      this$editTaskUi_2.bind_zfaq6f$($receiver_3.select, closure$item_2.status);
      return Unit;
    };
  }
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function editTaskUi$lambda$lambda_0(closure$filter, this$editTaskUi) {
    return function ($receiver) {
      return !isBlank(closure$filter.invoke()) && !this$editTaskUi.loggedIn.tagNameSet.invoke().contains_11rb$(closure$filter.invoke());
    };
  }
  function editTaskUi$lambda$create$lambda$lambda(closure$id) {
    return function (it) {
      return plus(it, closure$id);
    };
  }
  function editTaskUi$lambda$create(closure$canCreate, this$editTaskUi, closure$filter, closure$item, closure$clearFilter) {
    return function () {
      if (closure$canCreate.now) {
        var $receiver = get_idOrFail(this$editTaskUi.loggedIn.createTag_61zpoe$(closure$filter.now));
        closure$item.tags.rxv.transform_ru8m0w$(editTaskUi$lambda$create$lambda$lambda($receiver));
        closure$clearFilter.fire();
      }
    };
  }
  function editTaskUi$lambda$lambda$lambda(closure$create) {
    return function (it) {
      closure$create();
      return Unit;
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.placeholder = 'filter or create tag...';
    return Unit;
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda_0(this$, closure$filter) {
    return function () {
      this$.value = '';
      closure$filter.remAssign_11rb$('');
      return Unit;
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda_1(closure$filter) {
    return function ($receiver) {
      return !isBlank(closure$filter.invoke());
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda_2(closure$clearFilter) {
    return function () {
      closure$clearFilter.fire();
      return Unit;
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda_3(closure$canCreate) {
    return function ($receiver) {
      return closure$canCreate.invoke();
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda_4(closure$create) {
    return function () {
      closure$create();
      return Unit;
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda_5(closure$filter) {
    return function ($receiver, it) {
      return startsWith(it.invoke().name.invoke(), closure$filter.invoke());
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda(closure$item, closure$id) {
    return function ($receiver) {
      return closure$item.tags.invoke().contains_11rb$(closure$id);
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$contains) {
    return function ($receiver) {
      return closure$contains.invoke();
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$contains, this$) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      var closure$contains_0 = closure$contains;
      var this$_0 = this$;
      get_alignSelfCenter($receiver_0);
      get_m1($receiver_0);
      get_fw(get_fa($receiver_0));
      this$_0.rxClass_6sflyw$($receiver, get_check(Fa.Companion), editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$contains_0));
      return Unit;
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$e) {
    return function () {
      return closure$e.invoke().name.invoke();
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$id) {
    return function (it) {
      return minus(it, closure$id);
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$id) {
    return function (it) {
      return plus(it, closure$id);
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$contains, closure$item, closure$id) {
    return function () {
      if (closure$contains.now) {
        closure$item.tags.rxv.transform_ru8m0w$(editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$id));
      }
       else {
        closure$item.tags.rxv.transform_ru8m0w$(editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$id));
      }
      return Unit;
    };
  }
  function Coroutine$editTaskUi$lambda$lambda$lambda$lambda$lambda(closure$visibleCount_0, closure$item_0, this$editTaskUi_0, $receiver_0, e_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$visibleCount = closure$visibleCount_0;
    this.local$closure$item = closure$item_0;
    this.local$this$editTaskUi = this$editTaskUi_0;
    this.local$$receiver = $receiver_0;
    this.local$e = e_0;
  }
  Coroutine$editTaskUi$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$editTaskUi$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$editTaskUi$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$editTaskUi$lambda$lambda$lambda$lambda$lambda;
  Coroutine$editTaskUi$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver.incremented_eoy9qo$(this.local$closure$visibleCount);
            var id = get_idOrFail(this.local$e);
            var contains = this.local$$receiver.rx_y6x17j$(editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda(this.local$closure$item, id));
            var $receiver = widget.factory.listGroupButton;
            var closure$item = this.local$closure$item;
            var this$editTaskUi = this.local$this$editTaskUi;
            get_insert($receiver.left).wraps.div_iw61es$(editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda(contains, this.local$$receiver));
            this.local$$receiver.remAssign_7fncnf$($receiver.text, editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$e));
            this$editTaskUi.click_3zaxtq$($receiver, editTaskUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(contains, closure$item, id));
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
  function editTaskUi$lambda$lambda$lambda$lambda$lambda_6(closure$visibleCount_0, closure$item_0, this$editTaskUi_0) {
    return function ($receiver_0, e_0, continuation_0, suspended) {
      var instance = new Coroutine$editTaskUi$lambda$lambda$lambda$lambda$lambda(closure$visibleCount_0, closure$item_0, this$editTaskUi_0, $receiver_0, e_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function editTaskUi$lambda$lambda$lambda_0(this$editTaskUi, closure$filter, closure$visibleCount, closure$item) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).listGroup;
      var this$editTaskUi_0 = this$editTaskUi;
      var closure$filter_0 = closure$filter;
      var closure$visibleCount_0 = closure$visibleCount;
      var closure$item_0 = closure$item;
      this$editTaskUi_0.list_qlxt6c$($receiver_0, this$editTaskUi_0.mapLive_1mq1ue$(this$editTaskUi_0.filter_hu0si9$(this$editTaskUi_0.events_9k4h2$(this$editTaskUi_0.loggedIn.tags.list), editTaskUi$lambda$lambda$lambda$lambda$lambda_5(closure$filter_0)), editTaskUi$lambda$lambda$lambda$lambda$lambda_6(closure$visibleCount_0, closure$item_0, this$editTaskUi_0)));
      return Unit;
    };
  }
  function editTaskUi$lambda(this$editTaskUi, closure$item) {
    return function ($receiver) {
      var filter = new Var('');
      var visibleCount = new Var(0);
      var clearFilter = new Listeners();
      var canCreate = this$editTaskUi.rx_y6x17j$(editTaskUi$lambda$lambda_0(filter, this$editTaskUi));
      var create = editTaskUi$lambda$create(canCreate, this$editTaskUi, filter, closure$item, clearFilter);
      get_flexGrow1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).form;
      var this$editTaskUi_0 = this$editTaskUi;
      $receiver_0.onsubmit_gbr1zf$(editTaskUi$lambda$lambda$lambda(create));
      var $receiver_1 = $receiver_0.cls;
      get_p1($receiver_1);
      get_borderBottom($receiver_1);
      var $receiver_2 = $receiver_0.insert.inputGroup;
      var $receiver_3 = $receiver_2.input;
      invoke($receiver_3.node, editTaskUi$lambda$lambda$lambda$lambda$lambda);
      this$editTaskUi_0.bind_igb9j9$($receiver_3, filter);
      clearFilter.plusAssign_o14v8n$(editTaskUi$lambda$lambda$lambda$lambda$lambda_0($receiver_3, filter));
      var $receiver_4 = $receiver_2.appendButton;
      $receiver_4.outlineSecondary;
      get_eraser($receiver_4.fa);
      this$editTaskUi_0.enabled_hlnvpg$($receiver_4, editTaskUi$lambda$lambda$lambda$lambda$lambda_1(filter));
      this$editTaskUi_0.click_9375ex$($receiver_4, editTaskUi$lambda$lambda$lambda$lambda$lambda_2(clearFilter));
      var $receiver_5 = $receiver_2.appendButton;
      $receiver_5.outlineSecondary;
      get_plus($receiver_5.fa);
      this$editTaskUi_0.enabled_hlnvpg$($receiver_5, editTaskUi$lambda$lambda$lambda$lambda$lambda_3(canCreate));
      this$editTaskUi_0.click_9375ex$($receiver_5, editTaskUi$lambda$lambda$lambda$lambda$lambda_4(create));
      var $receiver_6 = get_insert_0($receiver).scrollPane;
      var this$editTaskUi_1 = this$editTaskUi;
      var closure$item_0 = closure$item;
      get_bgLight($receiver_6.cls);
      invoke($receiver_6.pane, editTaskUi$lambda$lambda$lambda_0(this$editTaskUi_1, filter, visibleCount, closure$item_0));
      return Unit;
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda(closure$active, closure$mainPage) {
    return function () {
      closure$active.remAssign_11rb$(closure$mainPage);
      return Unit;
    };
  }
  function editTaskUi$lambda$lambda$lambda$lambda_0(closure$active, closure$tagsPage) {
    return function () {
      closure$active.remAssign_11rb$(closure$tagsPage);
      return Unit;
    };
  }
  function editTaskUi$lambda$lambda_1(closure$active) {
    return function () {
      return closure$active.invoke();
    };
  }
  function editTaskUi$lambda_0(closure$active, this$editTaskUi) {
    return function ($receiver) {
      get_leftRightTopBottom0(get_cls($receiver));
      this$editTaskUi.remAssign_wgabca$(get_widget($receiver), editTaskUi$lambda$lambda_1(closure$active));
      return Unit;
    };
  }
  function editTaskUi($receiver, item, topbarCustomizer) {
    var $receiver_0 = widget.factory.scrollPane;
    invoke($receiver_0.pane, editTaskUi$lambda$lambda(item, $receiver));
    var mainPage = $receiver_0.node;
    var tagsPage = column(document, editTaskUi$lambda($receiver, item));
    var active = new Var(mainPage);
    var $receiver_1 = widget.factory.topbar;
    topbarCustomizer($receiver_1);
    var $receiver_2 = $receiver_1.tabs;
    var $receiver_3 = $receiver_2.tab;
    $receiver.get_clickActivate_tvm2vp$($receiver_3);
    get_list($receiver_3.icon.fa);
    $receiver_3.activate();
    $receiver_3.onActivate.plusAssign_o14v8n$(editTaskUi$lambda$lambda$lambda$lambda(active, mainPage));
    var $receiver_4 = $receiver_2.tab;
    $receiver.get_clickActivate_tvm2vp$($receiver_4);
    get_tags($receiver_4.icon.fa);
    $receiver_4.onActivate.plusAssign_o14v8n$(editTaskUi$lambda$lambda$lambda$lambda_0(active, tagsPage));
    return new TopAndContent($receiver_1.node, column(document, editTaskUi$lambda_0(active, $receiver)));
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
    this.links_3fmcxi$_0 = this;
    this.home_4j2wu2$_0 = this.root_7o50g$(Links$home$lambda(this, deps));
    this.listTags_ljmtou$_0 = this.home.child_b2q6wh$(Links$listTags$lambda).provideDelegate_n5byny$(this, Links$listTags_metadata);
    this.listTasks_smulxb$_0 = this.home.child_b2q6wh$(Links$listTasks$lambda).provideDelegate_n5byny$(this, Links$listTasks_metadata);
    this.selectTags_c2s80g$_0 = this.listTasks.child_b2q6wh$(Links$selectTags$lambda).provideDelegate_n5byny$(this, Links$selectTags_metadata);
    this.editTag_vq4t0h$_0 = this.listTags.param_kchx42$(links.StringHasher).child_jgcrpc$(Links$editTag$lambda(this)).provideDelegate_n5byny$(this, Links$editTag_metadata);
    this.newTag_80trth$_0 = this.listTags.child_b2q6wh$(Links$newTag$lambda).provideDelegate_n5byny$(this, Links$newTag_metadata);
    this.viewTask_frw4e3$_0 = this.base_sj7hg3$().param_kchx42$(links.StringHasher).child_jgcrpc$(Links$viewTask$lambda(this)).provideDelegate_n5byny$(this, Links$viewTask_metadata);
    this.editViewTask_h2sh0v$_0 = this.viewTask.child_b2q6wh$(Links$editViewTask$lambda).provideDelegate_n5byny$(this, Links$editViewTask_metadata);
    this.editNote_aue97t$_0 = this.viewTask.param_kchx42$(links.StringHasher).child_jgcrpc$(Links$editNote$lambda(this)).provideDelegate_n5byny$(this, Links$editNote_metadata);
    this.newNote_zbrqhp$_0 = this.viewTask.child_b2q6wh$(Links$newNote$lambda).provideDelegate_n5byny$(this, Links$newNote_metadata);
    this.editTask_axg2d2$_0 = this.base_sj7hg3$().param_kchx42$(links.StringHasher).child_jgcrpc$(Links$editTask$lambda(this)).provideDelegate_n5byny$(this, Links$editTask_metadata);
    this.newTask_zetjmy$_0 = this.base_sj7hg3$().child_b2q6wh$(Links$newTask$lambda).provideDelegate_n5byny$(this, Links$newTask_metadata);
  }
  Object.defineProperty(Links.prototype, 'links', {
    get: function () {
      return this.links_3fmcxi$_0;
    }
  });
  Object.defineProperty(Links.prototype, 'home', {
    get: function () {
      return this.home_4j2wu2$_0;
    }
  });
  var Links$listTags_metadata = new PropertyMetadata('listTags');
  Object.defineProperty(Links.prototype, 'listTags', {
    get: function () {
      return this.listTags_ljmtou$_0.getValue_lrcp0p$(this, Links$listTags_metadata);
    }
  });
  var Links$listTasks_metadata = new PropertyMetadata('listTasks');
  Object.defineProperty(Links.prototype, 'listTasks', {
    get: function () {
      return this.listTasks_smulxb$_0.getValue_lrcp0p$(this, Links$listTasks_metadata);
    }
  });
  var Links$selectTags_metadata = new PropertyMetadata('selectTags');
  Object.defineProperty(Links.prototype, 'selectTags', {
    get: function () {
      return this.selectTags_c2s80g$_0.getValue_lrcp0p$(this, Links$selectTags_metadata);
    }
  });
  var Links$editTag_metadata = new PropertyMetadata('editTag');
  Object.defineProperty(Links.prototype, 'editTag', {
    get: function () {
      return this.editTag_vq4t0h$_0.getValue_lrcp0p$(this, Links$editTag_metadata);
    }
  });
  var Links$newTag_metadata = new PropertyMetadata('newTag');
  Object.defineProperty(Links.prototype, 'newTag', {
    get: function () {
      return this.newTag_80trth$_0.getValue_lrcp0p$(this, Links$newTag_metadata);
    }
  });
  var Links$viewTask_metadata = new PropertyMetadata('viewTask');
  Object.defineProperty(Links.prototype, 'viewTask', {
    get: function () {
      return this.viewTask_frw4e3$_0.getValue_lrcp0p$(this, Links$viewTask_metadata);
    }
  });
  var Links$editViewTask_metadata = new PropertyMetadata('editViewTask');
  Object.defineProperty(Links.prototype, 'editViewTask', {
    get: function () {
      return this.editViewTask_h2sh0v$_0.getValue_lrcp0p$(this, Links$editViewTask_metadata);
    }
  });
  var Links$editNote_metadata = new PropertyMetadata('editNote');
  Object.defineProperty(Links.prototype, 'editNote', {
    get: function () {
      return this.editNote_aue97t$_0.getValue_lrcp0p$(this, Links$editNote_metadata);
    }
  });
  var Links$newNote_metadata = new PropertyMetadata('newNote');
  Object.defineProperty(Links.prototype, 'newNote', {
    get: function () {
      return this.newNote_zbrqhp$_0.getValue_lrcp0p$(this, Links$newNote_metadata);
    }
  });
  var Links$editTask_metadata = new PropertyMetadata('editTask');
  Object.defineProperty(Links.prototype, 'editTask', {
    get: function () {
      return this.editTask_axg2d2$_0.getValue_lrcp0p$(this, Links$editTask_metadata);
    }
  });
  var Links$newTask_metadata = new PropertyMetadata('newTask');
  Object.defineProperty(Links.prototype, 'newTask', {
    get: function () {
      return this.newTask_zetjmy$_0.getValue_lrcp0p$(this, Links$newTask_metadata);
    }
  });
  function Coroutine$Links$home$lambda(this$Links_0, closure$deps_0, link_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$closure$deps = closure$deps_0;
    this.local$tmp$ = void 0;
    this.local$link = link_0;
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
            var $receiver = new LoggedIn(this.local$this$Links, this.local$link, this.local$tmp$, tmp$);
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
    return function (link_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$home$lambda(this$Links_0, closure$deps_0, link_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Links$listTags$lambda(li_0, link_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$li = li_0;
    this.local$link = link_0;
  }
  Coroutine$Links$listTags$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$listTags$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$listTags$lambda.prototype.constructor = Coroutine$Links$listTags$lambda;
  Coroutine$Links$listTags$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return forwarding(new ListTags(this.local$li, this.local$link), this.local$li);
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
  function Links$listTags$lambda(li_0, link_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$listTags$lambda(li_0, link_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Links$listTasks$lambda(li_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$li = li_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$listTasks$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$listTasks$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$listTasks$lambda.prototype.constructor = Coroutine$Links$listTasks$lambda;
  Coroutine$Links$listTasks$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return forwarding(new ListTasks(this.local$li, this.local$lnk), this.local$li);
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
  function Links$listTasks$lambda(li_0, lnk_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$listTasks$lambda(li_0, lnk_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Links$selectTags$lambda(l_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$l = l_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$selectTags$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$selectTags$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$selectTags$lambda.prototype.constructor = Coroutine$Links$selectTags$lambda;
  Coroutine$Links$selectTags$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return forwarding(new SelectTags(this.local$l, this.local$lnk), this.local$l);
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
  function Links$selectTags$lambda(l_0, lnk_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$selectTags$lambda(l_0, lnk_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Links$editTag$lambda(this$Links_0, lt_0, tid_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$lt = lt_0;
    this.local$tid = tid_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$editTag$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$editTag$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$editTag$lambda.prototype.constructor = Coroutine$Links$editTag$lambda;
  Coroutine$Links$editTag$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.get_prxdpg$(this.local$lt.loggedIn.userTags.doc_61zpoe$(this.local$tid), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return forwarding(new EditTag(this.local$lt, this.local$lnk, this.result_0), this.local$lt);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Links$editTag$lambda(this$Links_0) {
    return function (lt_0, tid_0, lnk_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$editTag$lambda(this$Links_0, lt_0, tid_0, lnk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Links$newTag$lambda(lt_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$lt = lt_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$newTag$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$newTag$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$newTag$lambda.prototype.constructor = Coroutine$Links$newTag$lambda;
  Coroutine$Links$newTag$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return forwarding(new NewTag(this.local$lt, this.local$lnk), this.local$lt);
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
  function Links$newTag$lambda(lt_0, lnk_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$newTag$lambda(lt_0, lnk_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Links$viewTask$lambda(this$Links_0, parent_0, tid_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$parent = parent_0;
    this.local$tid = tid_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$viewTask$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$viewTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$viewTask$lambda.prototype.constructor = Coroutine$Links$viewTask$lambda;
  Coroutine$Links$viewTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.get_prxdpg$(this.local$parent.loggedIn.tasksCollection.doc_61zpoe$(this.local$tid), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return forwarding(new ViewTask(this.local$parent, this.local$lnk, this.result_0), this.local$parent);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Links$viewTask$lambda(this$Links_0) {
    return function (parent_0, tid_0, lnk_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$viewTask$lambda(this$Links_0, parent_0, tid_0, lnk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Links$editViewTask$lambda$lambda(closure$vt) {
    return function () {
      backOnRedisplay(closure$vt);
      return Unit;
    };
  }
  function Coroutine$Links$editViewTask$lambda(vt_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$vt = vt_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$editViewTask$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$editViewTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$editViewTask$lambda.prototype.constructor = Coroutine$Links$editViewTask$lambda;
  Coroutine$Links$editViewTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return forwarding(new EditTask(this.local$vt, this.local$lnk, toFsEditable(this.local$vt.fsDoc), Links$editViewTask$lambda$lambda(this.local$vt), true), this.local$vt);
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
  function Links$editViewTask$lambda(vt_0, lnk_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$editViewTask$lambda(vt_0, lnk_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Links$editNote$lambda(this$Links_0, vt_0, nid_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$vt = vt_0;
    this.local$nid = nid_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$editNote$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$editNote$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$editNote$lambda.prototype.constructor = Coroutine$Links$editNote$lambda;
  Coroutine$Links$editNote$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.get_prxdpg$(this.local$vt.notes.doc_61zpoe$(this.local$nid), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return forwarding(new EditNote(this.local$vt, this.local$lnk, this.result_0), this.local$vt);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Links$editNote$lambda(this$Links_0) {
    return function (vt_0, nid_0, lnk_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$editNote$lambda(this$Links_0, vt_0, nid_0, lnk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Links$newNote$lambda(vt_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$vt = vt_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$newNote$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$newNote$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$newNote$lambda.prototype.constructor = Coroutine$Links$newNote$lambda;
  Coroutine$Links$newNote$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return forwarding(new NewNote(this.local$vt, this.local$lnk), this.local$vt);
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
  function Links$newNote$lambda(vt_0, lnk_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$newNote$lambda(vt_0, lnk_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Links$editTask$lambda(this$Links_0, parent_0, tid_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$parent = parent_0;
    this.local$tid = tid_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$editTask$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$editTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$editTask$lambda.prototype.constructor = Coroutine$Links$editTask$lambda;
  Coroutine$Links$editTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.get_prxdpg$(this.local$parent.loggedIn.tasksCollection.doc_61zpoe$(this.local$tid), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return forwarding(new EditTask(this.local$parent, this.local$lnk, this.result_0), this.local$parent);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Links$editTask$lambda(this$Links_0) {
    return function (parent_0, tid_0, lnk_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$editTask$lambda(this$Links_0, parent_0, tid_0, lnk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Links$newTask$lambda(parent_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$parent = parent_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$newTask$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$newTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$newTask$lambda.prototype.constructor = Coroutine$Links$newTask$lambda;
  Coroutine$Links$newTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return forwarding(new NewTask(this.local$parent, this.local$lnk), this.local$parent);
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
  function Links$newTask$lambda(parent_0, lnk_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$newTask$lambda(parent_0, lnk_0, continuation_0);
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
  function ListTagsPath() {
  }
  ListTagsPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ListTagsPath',
    interfaces: [LoggedInPath]
  };
  function ListTags(from, linkage) {
    ForwardBase.call(this, from);
    this.linkage_42xhqt$_0 = linkage;
    this.$delegate_pkg7iq$_0 = from;
    this.listTags_94cxx9$_0 = this;
    this.rawView_7hlzpv$_0 = ui_2(this);
  }
  Object.defineProperty(ListTags.prototype, 'linkage', {
    get: function () {
      return this.linkage_42xhqt$_0;
    }
  });
  Object.defineProperty(ListTags.prototype, 'listTags', {
    get: function () {
      return this.listTags_94cxx9$_0;
    }
  });
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
            this.result_0 = this.local$this$ListTags.fwd_nnhkmr$(this.local$this$ListTags.links.newTag, void 0, this);
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
    advance(this, ListTags$newTag$lambda(this));
  };
  ListTags.prototype.edit_uey29u$ = function ($receiver) {
    this.editTag_ivxn3r$(get_idOrFail($receiver));
  };
  function Coroutine$ListTags$editTag$lambda(this$ListTags_0, closure$id_0, closure$replace_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ListTags = this$ListTags_0;
    this.local$closure$id = closure$id_0;
    this.local$closure$replace = closure$replace_0;
  }
  Coroutine$ListTags$editTag$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ListTags$editTag$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ListTags$editTag$lambda.prototype.constructor = Coroutine$ListTags$editTag$lambda;
  Coroutine$ListTags$editTag$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ListTags.fwd_e1fa5e$(this.local$this$ListTags.links.editTag, this.local$closure$id, this.local$closure$replace, this);
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
  function ListTags$editTag$lambda(this$ListTags_0, closure$id_0, closure$replace_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ListTags$editTag$lambda(this$ListTags_0, closure$id_0, closure$replace_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ListTags.prototype.editTag_ivxn3r$ = function (id, replace) {
    if (replace === void 0)
      replace = false;
    advance(this, ListTags$editTag$lambda(this, id, replace));
  };
  Object.defineProperty(ListTags.prototype, 'rawView', {
    get: function () {
      return this.rawView_7hlzpv$_0;
    }
  });
  Object.defineProperty(ListTags.prototype, 'db', {
    get: function () {
      return this.$delegate_pkg7iq$_0.db;
    }
  });
  Object.defineProperty(ListTags.prototype, 'links', {
    get: function () {
      return this.$delegate_pkg7iq$_0.links;
    }
  });
  Object.defineProperty(ListTags.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_pkg7iq$_0.loggedIn;
    }
  });
  ListTags.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_pkg7iq$_0.get_randomDoc_sj9vaa$($receiver);
  };
  ListTags.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_pkg7iq$_0.get_ref_sj9vaa$($receiver);
  };
  ListTags.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_pkg7iq$_0.get_ref_aqty80$($receiver);
  };
  ListTags.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_pkg7iq$_0.delete_73z9b6$($receiver);
  };
  ListTags.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_pkg7iq$_0.delete_ihdkly$($receiver);
  };
  ListTags.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_pkg7iq$_0.get_prxdpg$($receiver, continuation);
  };
  ListTags.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_pkg7iq$_0.query_wzkv1r$$default($receiver, query);
  };
  ListTags.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_pkg7iq$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  ListTags.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_pkg7iq$_0.save_73z9b6$($receiver);
  };
  ListTags.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_pkg7iq$_0.save_biv66q$($receiver);
  };
  ListTags.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_pkg7iq$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(ListTags.prototype, 'back', {
    get: function () {
      return this.linkage.back;
    }
  });
  ListTags.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListTags',
    interfaces: [LinkApi, FBBackApi, HasBack, ListTagsPath, LoggedInPath, ForwardBase]
  };
  function ui$lambda$lambda$lambda_0(this$ui) {
    return function () {
      this$ui.newTag();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda(closure$tag) {
    return function () {
      return closure$tag.invoke().name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$tag, this$ui) {
    return function () {
      this$ui.edit_uey29u$(closure$tag);
      return Unit;
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
            this.local$$receiver.remAssign_7fncnf$($receiver.text, ui$lambda$lambda$lambda$lambda$lambda$lambda(this.local$tag));
            this$ui.click_3zaxtq$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$tag, this$ui));
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
  function ui$lambda$lambda$lambda$lambda(this$ui_0) {
    return function ($receiver_0, tag_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda(this$ui_0, $receiver_0, tag_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).listGroup;
      var this$ui_0 = this$ui;
      this$ui_0.list_qlxt6c$($receiver_0, this$ui_0.mapLive_1mq1ue$(this$ui_0.events_9k4h2$(this$ui_0.loggedIn.tags.list), ui$lambda$lambda$lambda$lambda(this$ui_0)));
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
    $receiver.click_9375ex$($receiver_1, ui$lambda$lambda$lambda_0($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_2 = widget.factory.scrollPane;
    invoke($receiver_2.pane, ui$lambda$lambda($receiver));
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
  function ListTasks(from, linkage) {
    ForwardBase.call(this, from);
    this.linkage_d1qywh$_0 = linkage;
    this.$delegate_n1yv8u$_0 = from;
    this.listTasks_o3qwue$_0 = this;
    this.tags = new Var(emptyList());
    this.rawView_1h7hft$_0 = ui_3(this);
  }
  Object.defineProperty(ListTasks.prototype, 'linkage', {
    get: function () {
      return this.linkage_d1qywh$_0;
    }
  });
  Object.defineProperty(ListTasks.prototype, 'listTasks', {
    get: function () {
      return this.listTasks_o3qwue$_0;
    }
  });
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
            this.result_0 = this.local$this$ListTasks.fwd_nnhkmr$(this.local$this$ListTasks.links.selectTags, void 0, this);
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
    advance(this, ListTasks$selectTags$lambda(this));
  };
  function Coroutine$ListTasks$newTask$lambda(this$ListTasks_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ListTasks = this$ListTasks_0;
  }
  Coroutine$ListTasks$newTask$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ListTasks$newTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ListTasks$newTask$lambda.prototype.constructor = Coroutine$ListTasks$newTask$lambda;
  Coroutine$ListTasks$newTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ListTasks.fwd_nnhkmr$(this.local$this$ListTasks.links.newTask, void 0, this);
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
  function ListTasks$newTask$lambda(this$ListTasks_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ListTasks$newTask$lambda(this$ListTasks_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ListTasks.prototype.newTask = function () {
    advance(this, ListTasks$newTask$lambda(this));
  };
  function Coroutine$ListTasks$view$lambda(this$ListTasks_0, this$view_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ListTasks = this$ListTasks_0;
    this.local$this$view = this$view_0;
  }
  Coroutine$ListTasks$view$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ListTasks$view$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ListTasks$view$lambda.prototype.constructor = Coroutine$ListTasks$view$lambda;
  Coroutine$ListTasks$view$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ListTasks.fwd_e1fa5e$(this.local$this$ListTasks.links.viewTask, get_idOrFail(this.local$this$view), void 0, this);
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
  function ListTasks$view$lambda(this$ListTasks_0, this$view_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ListTasks$view$lambda(this$ListTasks_0, this$view_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ListTasks.prototype.view_50dwps$ = function ($receiver) {
    advance(this, ListTasks$view$lambda(this, $receiver));
  };
  Object.defineProperty(ListTasks.prototype, 'rawView', {
    get: function () {
      return this.rawView_1h7hft$_0;
    }
  });
  Object.defineProperty(ListTasks.prototype, 'db', {
    get: function () {
      return this.$delegate_n1yv8u$_0.db;
    }
  });
  Object.defineProperty(ListTasks.prototype, 'links', {
    get: function () {
      return this.$delegate_n1yv8u$_0.links;
    }
  });
  Object.defineProperty(ListTasks.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_n1yv8u$_0.loggedIn;
    }
  });
  ListTasks.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_n1yv8u$_0.get_randomDoc_sj9vaa$($receiver);
  };
  ListTasks.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_n1yv8u$_0.get_ref_sj9vaa$($receiver);
  };
  ListTasks.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_n1yv8u$_0.get_ref_aqty80$($receiver);
  };
  ListTasks.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_n1yv8u$_0.delete_73z9b6$($receiver);
  };
  ListTasks.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_n1yv8u$_0.delete_ihdkly$($receiver);
  };
  ListTasks.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_n1yv8u$_0.get_prxdpg$($receiver, continuation);
  };
  ListTasks.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_n1yv8u$_0.query_wzkv1r$$default($receiver, query);
  };
  ListTasks.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_n1yv8u$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  ListTasks.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_n1yv8u$_0.save_73z9b6$($receiver);
  };
  ListTasks.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_n1yv8u$_0.save_biv66q$($receiver);
  };
  ListTasks.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_n1yv8u$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(ListTasks.prototype, 'back', {
    get: function () {
      return this.linkage.back;
    }
  });
  ListTasks.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListTasks',
    interfaces: [FBBackApi, HasBack, ListTasksPath, LoggedInTC, LoggedInPath, ForwardBase]
  };
  function ui$lambda$lambda$lambda$lambda_0($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_m1($receiver_0);
    get_justifySelfEnd($receiver_0);
    remAssign($receiver, 'Status');
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$f) {
    return function ($receiver) {
      $receiver.value = closure$f.key;
      remAssign($receiver, closure$f.label);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda(it) {
    return it.key;
  }
  function ui$lambda$lambda$lambda$lambda$lambda_0(it) {
    return StatusFilter$Companion_getInstance().valueOf_61zpoe$(it);
  }
  function ui$lambda$lambda$lambda$lambda_1($receiver) {
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui, closure$id) {
    return function () {
      this$ui.tags.transform_ru8m0w$(ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$id));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui) {
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
        this$ui_0.click_4eku4n$($receiver_1, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, element));
      }
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ui) {
    return function () {
      return invoke(get_div(document), ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui));
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_1(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_dFlex($receiver_0);
      get_flexWrap($receiver_0);
      this$ui.remAssign_wgabca$(get_widget($receiver), ui$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_3(this$ui) {
    return function () {
      this$ui.selectTags();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_2(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_justifySelfStart($receiver_0);
      get_alignItemsCenter($receiver_0);
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda$lambda_1(this$ui));
      var $receiver_1 = get_insert_0($receiver).button;
      var this$ui_0 = this$ui;
      var $receiver_2 = $receiver_1.cls;
      get_p1($receiver_2);
      get_ml1($receiver_2);
      $receiver_1.primary;
      get_ellipsisH($receiver_1.fa);
      this$ui_0.click_9375ex$($receiver_1, ui$lambda$lambda$lambda$lambda$lambda$lambda_3(this$ui_0));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_1(closure$statusFilter, this$ui) {
    return function ($receiver) {
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda_0);
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
        invoke($receiver_0.option, ui$lambda$lambda$lambda$lambda$lambda$lambda_1(element));
      }
      this$ui_0.bindValue_xy1r9h$($receiver_0, this$ui_0.linked_n1nom7$(closure$statusFilter_0, ui$lambda$lambda$lambda$lambda$lambda, ui$lambda$lambda$lambda$lambda$lambda_0));
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda_1);
      row($receiver, ui$lambda$lambda$lambda$lambda_2(this$ui));
      return Unit;
    };
  }
  function ui$lambda_2(closure$statusFilter, this$ui) {
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
      invoke($receiver_1.node, ui$lambda$lambda$lambda_1(closure$statusFilter_0, this$ui_0));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_2(this$ui) {
    return function () {
      this$ui.newTask();
      return Unit;
    };
  }
  function ui$lambda$lambda_0(closure$filterVisible, closure$filter) {
    return function () {
      return closure$filterVisible.invoke() ? closure$filter : null;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$statusFilter, this$ui) {
    return function ($receiver) {
      setup($receiver, new FilterValues(closure$statusFilter.invoke(), this$ui.tags.invoke()));
      $receiver.get_asc_5eq60p$(Task.Companion.title);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$t) {
    return function () {
      return closure$t.invoke().title.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$t, this$ui) {
    return function () {
      this$ui.view_50dwps$(closure$t);
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, $receiver_0, t_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$t = t_0;
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
            var $receiver = widget.factory.listGroupButton;
            var this$ui = this.local$this$ui;
            this.local$$receiver.remAssign_7fncnf$($receiver.text, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this.local$t));
            this$ui.click_3zaxtq$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$t, this$ui));
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_5(this$ui_0) {
    return function ($receiver_0, t_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, $receiver_0, t_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_3(this$ui, closure$statusFilter) {
    return function ($receiver) {
      var $receiver_0 = widget.factory.listGroup;
      var this$ui_0 = this$ui;
      var closure$statusFilter_0 = closure$statusFilter;
      get_bgWhite($receiver_0.cls);
      this$ui_0.list_qlxt6c$($receiver_0, $receiver.mapLive_1mq1ue$(this$ui_0.listEvents_pujjsl$(this$ui_0.loggedIn.tasksCollection, ui$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$statusFilter_0, this$ui_0)), ui$lambda$lambda$lambda$lambda$lambda$lambda_5(this$ui_0)));
      return $receiver_0.node;
    };
  }
  function ui$lambda$lambda$lambda_3(this$ui, closure$statusFilter) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      this$ui.remAssign_djv61p$(get_widget($receiver), this$ui.rx_y6x17j$(ui$lambda$lambda$lambda$lambda_3(this$ui, closure$statusFilter)));
      return Unit;
    };
  }
  function ui$lambda_3(closure$filterVisible, closure$filter, this$ui, closure$statusFilter) {
    return function ($receiver) {
      get_leftRightTopBottom0(get_cls($receiver));
      this$ui.remAssign_wgabca$(get_widget($receiver), ui$lambda$lambda_0(closure$filterVisible, closure$filter));
      var $receiver_0 = get_insert_0($receiver).scrollPane;
      var this$ui_0 = this$ui;
      var closure$statusFilter_0 = closure$statusFilter;
      get_bgLight($receiver_0.cls);
      invoke($receiver_0.pane, ui$lambda$lambda$lambda_3(this$ui_0, closure$statusFilter_0));
      $receiver_0.node;
      return Unit;
    };
  }
  function ui_3($receiver) {
    var statusFilter = new Var(new StatusFilter$Completed(false));
    var filter = invoke(get_div(document), ui$lambda_2(statusFilter, $receiver));
    var filterVisible = new Var(false);
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backButton_ihoiae$($receiver_0);
    remAssign($receiver_0.title, 'Search Task');
    var $receiver_1 = $receiver_0.tabs.tab;
    get_filter($receiver_1.icon.fa);
    $receiver.get_clickToggle_tvm2vp$($receiver_1);
    $receiver.feedTo_9o5f67$($receiver_1.isActive, filterVisible);
    var $receiver_2 = $receiver_0.right.button;
    $receiver_2.m1p2;
    $receiver_2.primary;
    get_plus($receiver_2.fa);
    $receiver.click_9375ex$($receiver_2, ui$lambda$lambda$lambda_2($receiver));
    return new TopAndContent($receiver_0.node, column(document, ui$lambda_3(filterVisible, filter, $receiver, statusFilter)));
  }
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
    this.linkage_3q873f$_0 = linkage;
    this.$delegate_6gm236$_0 = links;
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
  Object.defineProperty(LoggedIn.prototype, 'linkage', {
    get: function () {
      return this.linkage_3q873f$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'loggedIn', {
    get: function () {
      return this.loggedIn_nsz177$_0;
    }
  });
  function Coroutine$LoggedIn$signOut$lambda(this$LoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
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
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$signOut$lambda(this$LoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.signOut = function () {
    advance(this, LoggedIn$signOut$lambda(this));
  };
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
            this.result_0 = this.local$this$LoggedIn.fwd_nnhkmr$(this.local$this$LoggedIn.links.listTasks, void 0, this);
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
    advance(this, LoggedIn$listTasks$lambda(this));
  };
  LoggedIn.prototype.hide_50dwps$ = function ($receiver) {
    this.save_biv66q$(get_new(this.hiddenTasks.doc_61zpoe$(get_idOrFail($receiver))));
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
            this.result_0 = this.local$this$LoggedIn.fwd_nnhkmr$(this.local$this$LoggedIn.links.listTags, void 0, this);
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
    advance(this, LoggedIn$listTags$lambda(this));
  };
  function Coroutine$LoggedIn$newTask$lambda(this$LoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$newTask$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$newTask$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$newTask$lambda.prototype.constructor = Coroutine$LoggedIn$newTask$lambda;
  Coroutine$LoggedIn$newTask$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.fwd_nnhkmr$(this.local$this$LoggedIn.links.newTask, void 0, this);
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
  function LoggedIn$newTask$lambda(this$LoggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$newTask$lambda(this$LoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.newTask = function () {
    advance(this, LoggedIn$newTask$lambda(this));
  };
  function Coroutine$LoggedIn$view$lambda(this$LoggedIn_0, this$view_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
    this.local$this$view = this$view_0;
  }
  Coroutine$LoggedIn$view$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$view$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$view$lambda.prototype.constructor = Coroutine$LoggedIn$view$lambda;
  Coroutine$LoggedIn$view$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.fwd_e1fa5e$(this.local$this$LoggedIn.links.viewTask, get_idOrFail(this.local$this$view), void 0, this);
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
  function LoggedIn$view$lambda(this$LoggedIn_0, this$view_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$view$lambda(this$LoggedIn_0, this$view_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.view_50dwps$ = function ($receiver) {
    advance(this, LoggedIn$view$lambda(this, $receiver));
  };
  Object.defineProperty(LoggedIn.prototype, 'rawView', {
    get: function () {
      return this.rawView_farok3$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'db', {
    get: function () {
      return this.$delegate_6gm236$_0.db;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'links', {
    get: function () {
      return this.$delegate_6gm236$_0.links;
    }
  });
  LoggedIn.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_6gm236$_0.get_randomDoc_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_6gm236$_0.get_ref_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_6gm236$_0.get_ref_aqty80$($receiver);
  };
  LoggedIn.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_6gm236$_0.delete_73z9b6$($receiver);
  };
  LoggedIn.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_6gm236$_0.delete_ihdkly$($receiver);
  };
  LoggedIn.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_6gm236$_0.get_prxdpg$($receiver, continuation);
  };
  LoggedIn.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_6gm236$_0.query_wzkv1r$$default($receiver, query);
  };
  LoggedIn.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_6gm236$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  LoggedIn.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_6gm236$_0.save_73z9b6$($receiver);
  };
  LoggedIn.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_6gm236$_0.save_biv66q$($receiver);
  };
  LoggedIn.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_6gm236$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
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
    interfaces: [FBApi, LoggedInTC, LinksPath, ForwardBase]
  };
  function ui$lambda$lambda$lambda$lambda_4(this$ui) {
    return function () {
      this$ui.signOut();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_5(this$ui) {
    return function () {
      return this$ui.hiddenList.sizeRx.invoke().toString();
    };
  }
  function ui$lambda$lambda$lambda_4(this$ui) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      this$ui.remAssign_7fncnf$($receiver, ui$lambda$lambda$lambda$lambda_5(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_5(this$ui) {
    return function ($receiver) {
      return !this$ui.hiddenList.isEmptyRx.invoke();
    };
  }
  function ui$lambda$lambda$lambda_6(this$ui) {
    return function () {
      this$ui.unhideAll();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_6(this$ui) {
    return function () {
      this$ui.newTask();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_7(this$ui) {
    return function () {
      this$ui.listTasks();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_2(this$ui) {
    return function () {
      this$ui.listTags();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.get_desc_5eq60p$(Task.Companion.ts);
    $receiver.eq_bo9m63$(Task.Companion.completed, false);
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda_9(this$ui) {
    return function ($receiver, t) {
      return !$receiver.containsRx_1w65cx$(this$ui.hiddenIds, get_idOrFail(t)).invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$cl) {
    return function () {
      return closure$cl.rxv.invoke().title.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$cl, this$ui) {
    return function () {
      this$ui.view_50dwps$(closure$cl);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cl, this$ui) {
    return function () {
      this$ui.hide_50dwps$(closure$cl);
      return Unit;
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
            var $receiver = widget.factory.nestedListButton;
            var this$ui = this.local$this$ui;
            this.local$$receiver.remAssign_7fncnf$($receiver.text, ui$lambda$lambda$lambda$lambda$lambda$lambda_6(this.local$cl));
            this$ui.click_ts68bh$($receiver.anchor, ui$lambda$lambda$lambda$lambda$lambda$lambda_7(this.local$cl, this$ui));
            var $receiver_0 = $receiver.right.button;
            $receiver_0.p2;
            $receiver_0.secondary;
            get_eyeSlash($receiver_0.fa);
            this$ui.click_9375ex$($receiver_0, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$cl, this$ui));
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
  function ui$lambda$lambda$lambda$lambda_10(this$ui_0) {
    return function ($receiver_0, cl_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_0(this$ui_0, $receiver_0, cl_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda_1(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).listGroup;
      var this$ui_0 = this$ui;
      get_m1($receiver_0.cls);
      this$ui_0.list_u1uvxv$($receiver_0.node, this$ui_0.mapLive_1mq1ue$(this$ui_0.filter_hu0si9$(this$ui_0.listEvents_pujjsl$(this$ui_0.tasksCollection, ui$lambda$lambda$lambda$lambda_8), ui$lambda$lambda$lambda$lambda_9(this$ui_0)), ui$lambda$lambda$lambda$lambda_10(this$ui_0)));
      return Unit;
    };
  }
  function ui_4($receiver) {
    var $receiver_0 = widget.factory.topbar;
    remAssign($receiver_0.title, 'Tasks');
    var $receiver_1 = $receiver_0.left.dropdown;
    $receiver_1.bars;
    $receiver.signOut_tstgz9$($receiver_1.menu, ui$lambda$lambda$lambda$lambda_4($receiver));
    var $receiver_2 = $receiver_0.right.badgeAnchor;
    get_alignSelfCenter($receiver_2.cls);
    $receiver_2.info;
    $receiver_2.pill;
    var $receiver_3 = $receiver_2.insert.icon;
    get_m1($receiver_3.cls);
    get_eye($receiver_3.fa);
    invoke(get_span($receiver_2.node), ui$lambda$lambda$lambda_4($receiver));
    $receiver.visible_od9jl4$($receiver_2, ui$lambda$lambda$lambda_5($receiver));
    $receiver.click_4eku4n$($receiver_2, ui$lambda$lambda$lambda_6($receiver));
    var $receiver_4 = $receiver_0.right.buttonGroup;
    get_m1($receiver_4.cls);
    var $receiver_5 = $receiver_4.button;
    $receiver_5.p2;
    get_plus($receiver_5.fa);
    $receiver_5.primary;
    $receiver.click_9375ex$($receiver_5, ui$lambda$lambda$lambda$lambda_6($receiver));
    var $receiver_6 = $receiver_4.button;
    $receiver_6.p2;
    get_search($receiver_6.fa);
    $receiver_6.primary;
    $receiver.click_9375ex$($receiver_6, ui$lambda$lambda$lambda$lambda_7($receiver));
    $receiver_4.dropdownSplit.primary;
    var $receiver_7 = $receiver_4.menu;
    $receiver_7.right;
    var $receiver_8 = $receiver_7.item;
    get_tags($receiver_8.fa);
    $receiver_8.text.remAssign_61zpoe$('Tags');
    $receiver.click_512jbc$($receiver_8, ui$lambda$lambda$lambda$lambda$lambda_2($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_9 = widget.factory.scrollPane;
    invoke($receiver_9.pane, ui$lambda$lambda_1($receiver));
    return new TopAndContent(tmp$, $receiver_9.node);
  }
  function NewNotePath() {
  }
  NewNotePath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NewNotePath',
    interfaces: [ViewTaskPath]
  };
  function NewNote(from, linkage) {
    ForwardBase.call(this, from);
    this.from = from;
    this.$delegate_5lzz1m$_0 = linkage;
    this.newNote_bknp5s$_0 = this;
    this.item = this.randomEditable_mx4g9l$(this.from.notes);
    this.creating_ik3jwp$_0 = this.rxCreating_8ctbwl$(this.item, onPersist(NewNote$creating$lambda(this)));
    this.rawView_pwkrnf$_0 = ui_5(this);
  }
  Object.defineProperty(NewNote.prototype, 'newNote', {
    get: function () {
      return this.newNote_bknp5s$_0;
    }
  });
  Object.defineProperty(NewNote.prototype, 'creating', {
    get: function () {
      return this.creating_ik3jwp$_0;
    }
  });
  Object.defineProperty(NewNote.prototype, 'rawView', {
    get: function () {
      return this.rawView_pwkrnf$_0;
    }
  });
  Object.defineProperty(NewNote.prototype, 'db', {
    get: function () {
      return this.from.db;
    }
  });
  Object.defineProperty(NewNote.prototype, 'links', {
    get: function () {
      return this.from.links;
    }
  });
  Object.defineProperty(NewNote.prototype, 'loggedIn', {
    get: function () {
      return this.from.loggedIn;
    }
  });
  Object.defineProperty(NewNote.prototype, 'viewTask', {
    get: function () {
      return this.from.viewTask;
    }
  });
  NewNote.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.from.get_randomDoc_sj9vaa$($receiver);
  };
  NewNote.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.from.get_ref_sj9vaa$($receiver);
  };
  NewNote.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.from.get_ref_aqty80$($receiver);
  };
  NewNote.prototype.delete_73z9b6$ = function ($receiver) {
    return this.from.delete_73z9b6$($receiver);
  };
  NewNote.prototype.delete_ihdkly$ = function ($receiver) {
    return this.from.delete_ihdkly$($receiver);
  };
  NewNote.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.from.get_prxdpg$($receiver, continuation);
  };
  NewNote.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.from.query_wzkv1r$$default($receiver, query);
  };
  NewNote.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.from.randomEditable_mx4g9l$$default($receiver, d);
  };
  NewNote.prototype.save_73z9b6$ = function ($receiver) {
    return this.from.save_73z9b6$($receiver);
  };
  NewNote.prototype.save_biv66q$ = function ($receiver) {
    return this.from.save_biv66q$($receiver);
  };
  NewNote.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.from.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(NewNote.prototype, 'back', {
    get: function () {
      return this.$delegate_5lzz1m$_0.back;
    }
  });
  function NewNote$creating$lambda(this$NewNote) {
    return function () {
      this$NewNote.from.editNote_ivxn3r$(this$NewNote.item.id.id, true);
      return Unit;
    };
  }
  NewNote.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NewNote',
    interfaces: [BackCreateKillsUixApi, FBBackApi, HasBack, NewNotePath, ViewTaskPath, ForwardBase]
  };
  function ui$lambda_4(this$ui) {
    return function ($receiver) {
      get_leftRightTopBottom0(get_cls($receiver));
      var $receiver_0 = get_insert(get_widget($receiver)).textArea;
      var this$ui_0 = this$ui;
      var $receiver_1 = $receiver_0.cls;
      get_m1($receiver_1);
      get_flexGrow1($receiver_1);
      required(this$ui_0.bind_igb9j9$($receiver_0, this$ui_0.creating.current.text.rxv));
      return Unit;
    };
  }
  function ui_5($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backPersistDiscard_e1rmy3$($receiver_0.slots.left);
    remAssign($receiver_0.title, 'New Note');
    $receiver.get_persistButton_tdhe4g$($receiver_0.right);
    return new TopAndContent($receiver_0.node, column(document, ui$lambda_4($receiver)));
  }
  function NewTagPath() {
  }
  NewTagPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NewTagPath',
    interfaces: [ListTagsPath]
  };
  function NewTag(from, linkage) {
    ForwardBase.call(this, from);
    this.$delegate_t5l6nm$_0 = from;
    this.$delegate_t5l6nm$_1 = linkage;
    this.newTag_ymh5ts$_0 = this;
    this.item = this.randomEditable_mx4g9l$(this.loggedIn.userTags);
    this.creating_jx2mgv$_0 = this.rxCreating_8ctbwl$(this.item, onEdit(NewTag$creating$lambda(from, this)));
    this.rawView_6iveib$_0 = ui_6(this);
  }
  Object.defineProperty(NewTag.prototype, 'newTag', {
    get: function () {
      return this.newTag_ymh5ts$_0;
    }
  });
  Object.defineProperty(NewTag.prototype, 'creating', {
    get: function () {
      return this.creating_jx2mgv$_0;
    }
  });
  Object.defineProperty(NewTag.prototype, 'rawView', {
    get: function () {
      return this.rawView_6iveib$_0;
    }
  });
  Object.defineProperty(NewTag.prototype, 'db', {
    get: function () {
      return this.$delegate_t5l6nm$_0.db;
    }
  });
  Object.defineProperty(NewTag.prototype, 'links', {
    get: function () {
      return this.$delegate_t5l6nm$_0.links;
    }
  });
  Object.defineProperty(NewTag.prototype, 'listTags', {
    get: function () {
      return this.$delegate_t5l6nm$_0.listTags;
    }
  });
  Object.defineProperty(NewTag.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_t5l6nm$_0.loggedIn;
    }
  });
  NewTag.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_t5l6nm$_0.get_randomDoc_sj9vaa$($receiver);
  };
  NewTag.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_t5l6nm$_0.get_ref_sj9vaa$($receiver);
  };
  NewTag.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_t5l6nm$_0.get_ref_aqty80$($receiver);
  };
  NewTag.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_t5l6nm$_0.delete_73z9b6$($receiver);
  };
  NewTag.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_t5l6nm$_0.delete_ihdkly$($receiver);
  };
  NewTag.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_t5l6nm$_0.get_prxdpg$($receiver, continuation);
  };
  NewTag.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_t5l6nm$_0.query_wzkv1r$$default($receiver, query);
  };
  NewTag.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_t5l6nm$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  NewTag.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_t5l6nm$_0.save_73z9b6$($receiver);
  };
  NewTag.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_t5l6nm$_0.save_biv66q$($receiver);
  };
  NewTag.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_t5l6nm$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(NewTag.prototype, 'back', {
    get: function () {
      return this.$delegate_t5l6nm$_1.back;
    }
  });
  function NewTag$creating$lambda(closure$from, this$NewTag) {
    return function () {
      closure$from.editTag_ivxn3r$(this$NewTag.item.id.id, true);
      return Unit;
    };
  }
  NewTag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NewTag',
    interfaces: [BackCreateKillsUixApi, FBBackApi, HasBack, NewTagPath, ListTagsPath, ForwardBase]
  };
  function ui$lambda_5(this$ui) {
    return function ($receiver) {
      get_leftRightTopBottom0(get_cls($receiver));
      var $receiver_0 = get_insert(get_widget($receiver)).input;
      var this$ui_0 = this$ui;
      get_m1($receiver_0.cls);
      required(this$ui_0.bind_8y93tj$($receiver_0, this$ui_0.creating.current.name));
      return Unit;
    };
  }
  function ui_6($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backPersistDiscard_e1rmy3$($receiver_0.slots.left);
    remAssign($receiver_0.title, 'New Tag');
    $receiver.get_persistButton_tdhe4g$($receiver_0.right);
    return new TopAndContent($receiver_0.node, column(document, ui$lambda_5($receiver)));
  }
  function NewTaskPath() {
  }
  NewTaskPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NewTaskPath',
    interfaces: [LoggedInPath]
  };
  function NewTask(from, linkage) {
    ForwardBase.call(this, from);
    this.from = from;
    this.$delegate_y281do$_0 = linkage;
    this.newTask_tm5h2x$_0 = this;
    this.item = this.randomEditable_mx4g9l$(this.loggedIn.tasksCollection);
    this.creating_ow4unj$_0 = this.rxCreating_8ctbwl$(this.item, NewTask$creating$lambda(this));
    this.rawView_qzzp9b$_0 = ui_7(this);
  }
  Object.defineProperty(NewTask.prototype, 'newTask', {
    get: function () {
      return this.newTask_tm5h2x$_0;
    }
  });
  Object.defineProperty(NewTask.prototype, 'creating', {
    get: function () {
      return this.creating_ow4unj$_0;
    }
  });
  function Coroutine$NewTask$viewTask$lambda$lambda(this$_0, this$NewTask_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$this$NewTask = this$NewTask_0;
  }
  Coroutine$NewTask$viewTask$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NewTask$viewTask$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NewTask$viewTask$lambda$lambda.prototype.constructor = Coroutine$NewTask$viewTask$lambda$lambda;
  Coroutine$NewTask$viewTask$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.fwd_e1fa5e$(this.local$this$.links.viewTask, this.local$this$NewTask.item.id.id, true, this);
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
  function NewTask$viewTask$lambda$lambda(this$_0, this$NewTask_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$NewTask$viewTask$lambda$lambda(this$_0, this$NewTask_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  NewTask.prototype.viewTask = function () {
    var $receiver = this.from;
    advance($receiver, NewTask$viewTask$lambda$lambda($receiver, this));
  };
  Object.defineProperty(NewTask.prototype, 'rawView', {
    get: function () {
      return this.rawView_qzzp9b$_0;
    }
  });
  Object.defineProperty(NewTask.prototype, 'db', {
    get: function () {
      return this.from.db;
    }
  });
  Object.defineProperty(NewTask.prototype, 'links', {
    get: function () {
      return this.from.links;
    }
  });
  Object.defineProperty(NewTask.prototype, 'loggedIn', {
    get: function () {
      return this.from.loggedIn;
    }
  });
  NewTask.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.from.get_randomDoc_sj9vaa$($receiver);
  };
  NewTask.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.from.get_ref_sj9vaa$($receiver);
  };
  NewTask.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.from.get_ref_aqty80$($receiver);
  };
  NewTask.prototype.delete_73z9b6$ = function ($receiver) {
    return this.from.delete_73z9b6$($receiver);
  };
  NewTask.prototype.delete_ihdkly$ = function ($receiver) {
    return this.from.delete_ihdkly$($receiver);
  };
  NewTask.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.from.get_prxdpg$($receiver, continuation);
  };
  NewTask.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.from.query_wzkv1r$$default($receiver, query);
  };
  NewTask.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.from.randomEditable_mx4g9l$$default($receiver, d);
  };
  NewTask.prototype.save_73z9b6$ = function ($receiver) {
    return this.from.save_73z9b6$($receiver);
  };
  NewTask.prototype.save_biv66q$ = function ($receiver) {
    return this.from.save_biv66q$($receiver);
  };
  NewTask.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.from.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(NewTask.prototype, 'back', {
    get: function () {
      return this.$delegate_y281do$_0.back;
    }
  });
  function Coroutine$NewTask$creating$lambda$lambda$lambda$lambda(this$_0, this$NewTask_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$this$NewTask = this$NewTask_0;
  }
  Coroutine$NewTask$creating$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NewTask$creating$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NewTask$creating$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$NewTask$creating$lambda$lambda$lambda$lambda;
  Coroutine$NewTask$creating$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.fwd_e1fa5e$(this.local$this$.links.editTask, this.local$this$NewTask.item.id.id, true, this);
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
  function NewTask$creating$lambda$lambda$lambda$lambda(this$_0, this$NewTask_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$NewTask$creating$lambda$lambda$lambda$lambda(this$_0, this$NewTask_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function NewTask$creating$lambda$lambda(this$NewTask) {
    return function () {
      var receiver = this$NewTask.from;
      advance(receiver, NewTask$creating$lambda$lambda$lambda$lambda(receiver, this$NewTask));
      return Unit;
    };
  }
  function NewTask$creating$lambda(this$NewTask) {
    return function (tr) {
      return tr.copy_ucykgt$(void 0, NewTask$creating$lambda$lambda(this$NewTask));
    };
  }
  NewTask.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NewTask',
    interfaces: [BackCreateKillsUixApi, FBBackApi, HasBack, NewTaskPath, EditTaskLike, LoggedInPath, ForwardBase]
  };
  function ui$lambda$lambda_2(this$ui) {
    return function () {
      this$ui.viewTask();
      return Unit;
    };
  }
  function ui$lambda_6(this$ui) {
    return function ($receiver) {
      this$ui.get_backPersistDiscard_e1rmy3$($receiver.slots.left).saveAndView_o14v8n$(ui$lambda$lambda_2(this$ui));
      remAssign($receiver.title, 'New Task');
      this$ui.get_persistButton_tdhe4g$($receiver.right);
      return Unit;
    };
  }
  function ui_7($receiver) {
    return editTaskUi($receiver, $receiver.creating.current, ui$lambda_6($receiver));
  }
  function SelectTagsPath() {
  }
  SelectTagsPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SelectTagsPath',
    interfaces: [ListTasksPath]
  };
  function SelectTags(from, linkage) {
    ForwardBase.call(this, from);
    this.$delegate_emie0e$_0 = from;
    this.$delegate_emie0e$_1 = linkage;
    this.selectTags_5falzv$_0 = this;
    this.current = new Var(this.listTasks.tags.now);
    this.rawView_lihrpv$_0 = ui_8(this);
  }
  Object.defineProperty(SelectTags.prototype, 'selectTags', {
    get: function () {
      return this.selectTags_5falzv$_0;
    }
  });
  SelectTags.prototype.cancel = function () {
    this.back();
  };
  SelectTags.prototype.submit = function () {
    this.listTasks.tags.remAssign_11rb$(this.current.now);
    this.back();
  };
  Object.defineProperty(SelectTags.prototype, 'rawView', {
    get: function () {
      return this.rawView_lihrpv$_0;
    }
  });
  Object.defineProperty(SelectTags.prototype, 'db', {
    get: function () {
      return this.$delegate_emie0e$_0.db;
    }
  });
  Object.defineProperty(SelectTags.prototype, 'links', {
    get: function () {
      return this.$delegate_emie0e$_0.links;
    }
  });
  Object.defineProperty(SelectTags.prototype, 'listTasks', {
    get: function () {
      return this.$delegate_emie0e$_0.listTasks;
    }
  });
  Object.defineProperty(SelectTags.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_emie0e$_0.loggedIn;
    }
  });
  SelectTags.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_emie0e$_0.get_randomDoc_sj9vaa$($receiver);
  };
  SelectTags.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_emie0e$_0.get_ref_sj9vaa$($receiver);
  };
  SelectTags.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_emie0e$_0.get_ref_aqty80$($receiver);
  };
  SelectTags.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_emie0e$_0.delete_73z9b6$($receiver);
  };
  SelectTags.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_emie0e$_0.delete_ihdkly$($receiver);
  };
  SelectTags.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_emie0e$_0.get_prxdpg$($receiver, continuation);
  };
  SelectTags.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_emie0e$_0.query_wzkv1r$$default($receiver, query);
  };
  SelectTags.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_emie0e$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  SelectTags.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_emie0e$_0.save_73z9b6$($receiver);
  };
  SelectTags.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_emie0e$_0.save_biv66q$($receiver);
  };
  SelectTags.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_emie0e$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(SelectTags.prototype, 'back', {
    get: function () {
      return this.$delegate_emie0e$_1.back;
    }
  });
  SelectTags.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelectTags',
    interfaces: [FBBackApi, HasBack, SelectTagsPath, ListTasksPath, ForwardBase]
  };
  function ui$lambda$lambda$lambda_7(this$ui) {
    return function () {
      this$ui.cancel();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_8(this$ui) {
    return function () {
      this$ui.submit();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_8(this$ui, closure$id) {
    return function ($receiver) {
      return this$ui.current.invoke().contains_11rb$(closure$id);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$tag) {
    return function () {
      return closure$tag.invoke().name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$id) {
    return function (it) {
      return minus_0(it, closure$id);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$id) {
    return function (it) {
      return plus_0(it, closure$id);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$selected, this$ui, closure$id) {
    return function () {
      if (closure$selected.now) {
        this$ui.current.transform_ru8m0w$(ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$id));
      }
       else {
        this$ui.current.transform_ru8m0w$(ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$id));
      }
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_1(this$ui_0, $receiver_0, tag_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$tag = tag_0;
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
            var $receiver = widget.factory.listGroupButton;
            var this$ui = this.local$this$ui;
            var id = get_idOrFail(this.local$tag);
            var selected = this.local$$receiver.rx_y6x17j$(ui$lambda$lambda$lambda$lambda$lambda$lambda_8(this$ui, id));
            var $receiver_0 = $receiver.leftIcon;
            $receiver_0.fafw;
            this$ui.rxClass_62ldac$($receiver_0, get_check(Fa.Companion), selected);
            this.local$$receiver.remAssign_7fncnf$($receiver.text, ui$lambda$lambda$lambda$lambda$lambda$lambda_9(this.local$tag));
            this$ui.click_3zaxtq$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_10(selected, this$ui, id));
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
  function ui$lambda$lambda$lambda$lambda_11(this$ui_0) {
    return function ($receiver_0, tag_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_1(this$ui_0, $receiver_0, tag_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda_3(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).listGroup;
      var this$ui_0 = this$ui;
      this$ui_0.list_qlxt6c$($receiver_0, this$ui_0.mapLive_1mq1ue$(this$ui_0.events_9k4h2$(this$ui_0.loggedIn.tags.list), ui$lambda$lambda$lambda$lambda_11(this$ui_0)));
      return Unit;
    };
  }
  function ui_8($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backButton_ihoiae$($receiver_0);
    remAssign($receiver_0.title, 'Filter Tags');
    var $receiver_1 = $receiver_0.left.button;
    $receiver_1.m1p2;
    $receiver_1.secondary;
    get_times($receiver_1.fa);
    $receiver.click_9375ex$($receiver_1, ui$lambda$lambda$lambda_7($receiver));
    var $receiver_2 = $receiver_0.right.button;
    $receiver_2.m1p2;
    $receiver_2.success;
    get_check($receiver_2.fa);
    $receiver.click_9375ex$($receiver_2, ui$lambda$lambda$lambda_8($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_3 = widget.factory.scrollPane;
    invoke($receiver_3.pane, ui$lambda$lambda_3($receiver));
    return new TopAndContent(tmp$, $receiver_3.node);
  }
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
  function ui$lambda$lambda$lambda$lambda_12(this$ui) {
    return function () {
      this$ui.newComment();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_13(this$ui) {
    return function () {
      this$ui.edit();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_3(this$ui) {
    return function () {
      this$ui.markAsCompleted();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_4(this$ui) {
    return function () {
      return this$ui.fsDoc.invoke().title.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_5(this$ui) {
    return function () {
      return this$ui.fsDoc.invoke().text.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_6(this$ui) {
    return function () {
      return this$ui.fsDoc.invoke().status.invoke().name;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui, closure$id) {
    return function () {
      return this$ui.loggedIn.tags.lookup.get_11rb$(closure$id).invoke().name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$ui) {
    return function ($receiver) {
      var $receiver_0 = this$ui.fsDoc.invoke().tags.invoke();
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_11(this$ui) {
    return function () {
      return invoke(get_div(document), ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$ui));
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_7(this$ui) {
    return function ($receiver) {
      this$ui.remAssign_wgabca$(get_widget($receiver), ui$lambda$lambda$lambda$lambda$lambda$lambda_11(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_14(this$ui) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      remAssign(get_dt($receiver), 'Title');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$lambda$lambda$lambda_4(this$ui));
      remAssign(get_dt($receiver), 'Text');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$lambda$lambda$lambda_5(this$ui));
      remAssign(get_dt($receiver), 'Status');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$lambda$lambda$lambda_6(this$ui));
      remAssign(get_dt($receiver), 'Tags');
      invoke(get_dd($receiver), ui$lambda$lambda$lambda$lambda$lambda_7(this$ui));
      remAssign(get_dt($receiver), 'Notes');
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    $receiver.get_desc_5eq60p$(Note.Companion.ts);
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$n) {
    return function () {
      return closure$n.invoke().text.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$n, this$ui) {
    return function () {
      this$ui.edit_s9t1a8$(closure$n);
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, $receiver_0, n_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$n = n_0;
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
            var $receiver = widget.factory.listGroupButton;
            var this$ui = this.local$this$ui;
            this.local$$receiver.remAssign_7fncnf$($receiver.text, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this.local$n));
            this$ui.click_3zaxtq$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this.local$n, this$ui));
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_13(this$ui_0) {
    return function ($receiver_0, n_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, $receiver_0, n_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_15(this$ui) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      var $receiver_0 = get_insert_0($receiver).listGroup;
      var this$ui_0 = this$ui;
      this$ui_0.list_qlxt6c$($receiver_0, this$ui_0.mapLive_1mq1ue$(this$ui_0.listEvents_pujjsl$(this$ui_0.notes, ui$lambda$lambda$lambda$lambda$lambda$lambda_12), ui$lambda$lambda$lambda$lambda$lambda$lambda_13(this$ui_0)));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_9(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_p1($receiver_0);
      get_bgWhite($receiver_0);
      get_borderBottom($receiver_0);
      invoke(get_dl($receiver), ui$lambda$lambda$lambda$lambda_14(this$ui));
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda_15(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda_4(this$ui) {
    return function ($receiver) {
      get_bgLight(get_cls($receiver));
      invoke(get_div($receiver), ui$lambda$lambda$lambda_9(this$ui));
      return Unit;
    };
  }
  function ui_9($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backButton_ihoiae$($receiver_0);
    remAssign($receiver_0.title, 'Task');
    var $receiver_1 = $receiver_0.right.buttonGroup;
    $receiver_1.m1;
    var $receiver_2 = $receiver_1.button;
    $receiver_2.p2;
    $receiver_2.primary;
    get_comment($receiver_2.fa);
    $receiver.click_9375ex$($receiver_2, ui$lambda$lambda$lambda$lambda_12($receiver));
    var $receiver_3 = $receiver_1.button;
    $receiver_3.p2;
    $receiver_3.primary;
    get_pen($receiver_3.fa);
    $receiver.click_9375ex$($receiver_3, ui$lambda$lambda$lambda$lambda_13($receiver));
    $receiver_1.dropdownSplit.primary;
    var $receiver_4 = $receiver_1.menu;
    $receiver_4.right;
    var $receiver_5 = $receiver_4.item;
    get_clipboardCheck($receiver_5.fa);
    $receiver_5.text.remAssign_61zpoe$('Mark as Completed');
    $receiver.click_512jbc$($receiver_5, ui$lambda$lambda$lambda$lambda$lambda_3($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_6 = widget.factory.scrollPane;
    invoke($receiver_6.pane, ui$lambda$lambda_4($receiver));
    return new TopAndContent(tmp$, $receiver_6.node);
  }
  function ViewTaskPath() {
  }
  ViewTaskPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ViewTaskPath',
    interfaces: [LoggedInPath]
  };
  function ViewTask(loggedIn, linkage, editable) {
    ForwardBase.call(this, loggedIn);
    this.linkage_8ph4qz$_0 = linkage;
    this.$delegate_brp2nm$_0 = loggedIn;
    this.viewTask_etzbbk$_0 = this;
    this.notes = get_notes(editable.id);
    this.fsDoc = this.get_live_73z9b6$(toFsDoc_0(editable));
    this.rawView_ka0m7n$_0 = ui_9(this);
  }
  Object.defineProperty(ViewTask.prototype, 'linkage', {
    get: function () {
      return this.linkage_8ph4qz$_0;
    }
  });
  Object.defineProperty(ViewTask.prototype, 'viewTask', {
    get: function () {
      return this.viewTask_etzbbk$_0;
    }
  });
  ViewTask.prototype.edit_s9t1a8$ = function ($receiver) {
    this.editNote_ivxn3r$(get_idOrFail($receiver));
  };
  function Coroutine$ViewTask$editNote$lambda(this$ViewTask_0, closure$id_0, closure$replace_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewTask = this$ViewTask_0;
    this.local$closure$id = closure$id_0;
    this.local$closure$replace = closure$replace_0;
  }
  Coroutine$ViewTask$editNote$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewTask$editNote$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewTask$editNote$lambda.prototype.constructor = Coroutine$ViewTask$editNote$lambda;
  Coroutine$ViewTask$editNote$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ViewTask.fwd_e1fa5e$(this.local$this$ViewTask.links.editNote, this.local$closure$id, this.local$closure$replace, this);
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
  function ViewTask$editNote$lambda(this$ViewTask_0, closure$id_0, closure$replace_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewTask$editNote$lambda(this$ViewTask_0, closure$id_0, closure$replace_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ViewTask.prototype.editNote_ivxn3r$ = function (id, replace) {
    if (replace === void 0)
      replace = false;
    advance(this, ViewTask$editNote$lambda(this, id, replace));
  };
  function Coroutine$ViewTask$edit$lambda(this$ViewTask_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewTask = this$ViewTask_0;
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
            this.result_0 = this.local$this$ViewTask.fwd_nnhkmr$(this.local$this$ViewTask.links.editViewTask, void 0, this);
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
  function ViewTask$edit$lambda(this$ViewTask_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewTask$edit$lambda(this$ViewTask_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ViewTask.prototype.edit = function () {
    advance(this, ViewTask$edit$lambda(this));
  };
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
            this.result_0 = this.local$this$ViewTask.fwd_nnhkmr$(this.local$this$ViewTask.links.newNote, void 0, this);
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
    advance(this, ViewTask$newComment$lambda(this));
  };
  ViewTask.prototype.markAsCompleted = function () {
    var $receiver = copy(this.fsDoc.rxv.now);
    $receiver.status.remAssign_11rc$(TaskStatus.Completed);
    this.save_73z9b6$(toFsDoc($receiver, this.fsDoc.id));
    this.back();
  };
  Object.defineProperty(ViewTask.prototype, 'rawView', {
    get: function () {
      return this.rawView_ka0m7n$_0;
    }
  });
  Object.defineProperty(ViewTask.prototype, 'db', {
    get: function () {
      return this.$delegate_brp2nm$_0.db;
    }
  });
  Object.defineProperty(ViewTask.prototype, 'links', {
    get: function () {
      return this.$delegate_brp2nm$_0.links;
    }
  });
  Object.defineProperty(ViewTask.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_brp2nm$_0.loggedIn;
    }
  });
  ViewTask.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_brp2nm$_0.get_randomDoc_sj9vaa$($receiver);
  };
  ViewTask.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_brp2nm$_0.get_ref_sj9vaa$($receiver);
  };
  ViewTask.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_brp2nm$_0.get_ref_aqty80$($receiver);
  };
  ViewTask.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_brp2nm$_0.delete_73z9b6$($receiver);
  };
  ViewTask.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_brp2nm$_0.delete_ihdkly$($receiver);
  };
  ViewTask.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_brp2nm$_0.get_prxdpg$($receiver, continuation);
  };
  ViewTask.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_brp2nm$_0.query_wzkv1r$$default($receiver, query);
  };
  ViewTask.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_brp2nm$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  ViewTask.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_brp2nm$_0.save_73z9b6$($receiver);
  };
  ViewTask.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_brp2nm$_0.save_biv66q$($receiver);
  };
  ViewTask.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_brp2nm$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(ViewTask.prototype, 'back', {
    get: function () {
      return this.linkage.back;
    }
  });
  ViewTask.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewTask',
    interfaces: [FBBackApi, HasBack, ViewTaskPath, LoggedInTC, LoggedInPath, ForwardBase]
  };
  var package$tasks = _.tasks || (_.tasks = {});
  var package$data = package$tasks.data || (package$tasks.data = {});
  package$data.tagsLookup_jd3t2k$ = tagsLookup;
  package$data.tagsList_jd3t2k$ = tagsList;
  $$importsForInline$$['appsimake-firebase'] = $module$appsimake_firebase;
  package$data.deleteCollections_ilfidj$ = deleteCollections;
  package$data.deleteCollections_wx5shl$ = deleteCollections_0;
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
  package$edittask.EditTaskLike = EditTaskLike;
  package$edittask.EditTask = EditTask;
  package$edittask.ui_ppzri7$ = ui_1;
  package$edittask.editTaskUi_352zb0$ = editTaskUi;
  package$tasks.LinksPath = LinksPath;
  package$tasks.Links = Links;
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
  package$loggedin.LoggedInTC = LoggedInTC;
  package$loggedin.LoggedInPath = LoggedInPath;
  package$loggedin.LoggedIn = LoggedIn;
  package$loggedin.ui_cscd8h$ = ui_4;
  var package$newnote = package$tasks.newnote || (package$tasks.newnote = {});
  package$newnote.NewNotePath = NewNotePath;
  package$newnote.NewNote = NewNote;
  package$newnote.ui_vvr2ef$ = ui_5;
  var package$newtag = package$tasks.newtag || (package$tasks.newtag = {});
  package$newtag.NewTagPath = NewTagPath;
  package$newtag.NewTag = NewTag;
  package$newtag.ui_jl7zdt$ = ui_6;
  var package$newtask = package$tasks.newtask || (package$tasks.newtask = {});
  package$newtask.NewTaskPath = NewTaskPath;
  package$newtask.NewTask = NewTask;
  package$newtask.ui_9jrmtp$ = ui_7;
  var package$selecttags = package$tasks.selecttags || (package$tasks.selecttags = {});
  package$selecttags.SelectTagsPath = SelectTagsPath;
  package$selecttags.SelectTags = SelectTags;
  package$selecttags.ui_r75qip$ = ui_8;
  package$tasks.main = main;
  var package$viewtask = package$tasks.viewtask || (package$tasks.viewtask = {});
  package$viewtask.ui_9p10f3$ = ui_9;
  package$viewtask.ViewTaskPath = ViewTaskPath;
  package$viewtask.ViewTask = ViewTask;
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
  ViewTaskPath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  ViewTaskPath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  ViewTaskPath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  ViewTaskPath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  ViewTaskPath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  ViewTaskPath.prototype.get_prxdpg$ = LoggedInPath.prototype.get_prxdpg$;
  ViewTaskPath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  ViewTaskPath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  ViewTaskPath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  ViewTaskPath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  ViewTaskPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  ViewTaskPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  ViewTaskPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  EditNotePath.prototype.get_randomDoc_sj9vaa$ = ViewTaskPath.prototype.get_randomDoc_sj9vaa$;
  EditNotePath.prototype.get_ref_sj9vaa$ = ViewTaskPath.prototype.get_ref_sj9vaa$;
  EditNotePath.prototype.get_ref_aqty80$ = ViewTaskPath.prototype.get_ref_aqty80$;
  EditNotePath.prototype.delete_73z9b6$ = ViewTaskPath.prototype.delete_73z9b6$;
  EditNotePath.prototype.delete_ihdkly$ = ViewTaskPath.prototype.delete_ihdkly$;
  EditNotePath.prototype.get_prxdpg$ = ViewTaskPath.prototype.get_prxdpg$;
  EditNotePath.prototype.query_wzkv1r$$default = ViewTaskPath.prototype.query_wzkv1r$$default;
  EditNotePath.prototype.randomEditable_mx4g9l$$default = ViewTaskPath.prototype.randomEditable_mx4g9l$$default;
  EditNotePath.prototype.save_73z9b6$ = ViewTaskPath.prototype.save_73z9b6$;
  EditNotePath.prototype.save_biv66q$ = ViewTaskPath.prototype.save_biv66q$;
  EditNotePath.prototype.toRandomFsDoc_xc7wmg$ = ViewTaskPath.prototype.toRandomFsDoc_xc7wmg$;
  EditNotePath.prototype.query_wzkv1r$ = ViewTaskPath.prototype.query_wzkv1r$;
  EditNotePath.prototype.randomEditable_mx4g9l$ = ViewTaskPath.prototype.randomEditable_mx4g9l$;
  EditNote.prototype.bind_8y93tj$ = BackEditKillsUixApi.prototype.bind_8y93tj$;
  EditNote.prototype.bind_4dd4yj$ = BackEditKillsUixApi.prototype.bind_4dd4yj$;
  EditNote.prototype.bind_igb9j9$ = BackEditKillsUixApi.prototype.bind_igb9j9$;
  EditNote.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  EditNote.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  EditNote.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  EditNote.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  EditNote.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  EditNote.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  EditNote.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  EditNote.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  EditNote.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  EditNote.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  EditNote.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  EditNote.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  EditNote.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  EditNote.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  EditNote.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  Object.defineProperty(EditNote.prototype, 'bindings', Object.getOwnPropertyDescriptor(BackEditKillsUixApi.prototype, 'bindings'));
  EditNote.prototype.get_backSaveDiscard_e1rmy3$ = BackEditKillsUixApi.prototype.get_backSaveDiscard_e1rmy3$;
  EditNote.prototype.get_saveButton_tdhe4g$ = BackEditKillsUixApi.prototype.get_saveButton_tdhe4g$;
  EditNote.prototype.get_saveDeleteButton_tdhe4g$ = BackEditKillsUixApi.prototype.get_saveDeleteButton_tdhe4g$;
  EditNote.prototype.query_wzkv1r$ = EditNotePath.prototype.query_wzkv1r$;
  EditNote.prototype.randomEditable_mx4g9l$ = EditNotePath.prototype.randomEditable_mx4g9l$;
  EditNote.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  EditNote.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  EditNote.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  EditNote.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  EditNote.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  ListTagsPath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  ListTagsPath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  ListTagsPath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  ListTagsPath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  ListTagsPath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  ListTagsPath.prototype.get_prxdpg$ = LoggedInPath.prototype.get_prxdpg$;
  ListTagsPath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  ListTagsPath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  ListTagsPath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  ListTagsPath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  ListTagsPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  ListTagsPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  ListTagsPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  EditTagPath.prototype.get_randomDoc_sj9vaa$ = ListTagsPath.prototype.get_randomDoc_sj9vaa$;
  EditTagPath.prototype.get_ref_sj9vaa$ = ListTagsPath.prototype.get_ref_sj9vaa$;
  EditTagPath.prototype.get_ref_aqty80$ = ListTagsPath.prototype.get_ref_aqty80$;
  EditTagPath.prototype.delete_73z9b6$ = ListTagsPath.prototype.delete_73z9b6$;
  EditTagPath.prototype.delete_ihdkly$ = ListTagsPath.prototype.delete_ihdkly$;
  EditTagPath.prototype.get_prxdpg$ = ListTagsPath.prototype.get_prxdpg$;
  EditTagPath.prototype.query_wzkv1r$$default = ListTagsPath.prototype.query_wzkv1r$$default;
  EditTagPath.prototype.randomEditable_mx4g9l$$default = ListTagsPath.prototype.randomEditable_mx4g9l$$default;
  EditTagPath.prototype.save_73z9b6$ = ListTagsPath.prototype.save_73z9b6$;
  EditTagPath.prototype.save_biv66q$ = ListTagsPath.prototype.save_biv66q$;
  EditTagPath.prototype.toRandomFsDoc_xc7wmg$ = ListTagsPath.prototype.toRandomFsDoc_xc7wmg$;
  EditTagPath.prototype.query_wzkv1r$ = ListTagsPath.prototype.query_wzkv1r$;
  EditTagPath.prototype.randomEditable_mx4g9l$ = ListTagsPath.prototype.randomEditable_mx4g9l$;
  EditTag.prototype.bind_8y93tj$ = BackEditKillsUixApi.prototype.bind_8y93tj$;
  EditTag.prototype.bind_4dd4yj$ = BackEditKillsUixApi.prototype.bind_4dd4yj$;
  EditTag.prototype.bind_igb9j9$ = BackEditKillsUixApi.prototype.bind_igb9j9$;
  EditTag.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  EditTag.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  EditTag.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  EditTag.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  EditTag.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  EditTag.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  EditTag.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  EditTag.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  EditTag.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  EditTag.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  EditTag.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  EditTag.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  EditTag.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  EditTag.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  EditTag.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  Object.defineProperty(EditTag.prototype, 'bindings', Object.getOwnPropertyDescriptor(BackEditKillsUixApi.prototype, 'bindings'));
  EditTag.prototype.get_backSaveDiscard_e1rmy3$ = BackEditKillsUixApi.prototype.get_backSaveDiscard_e1rmy3$;
  EditTag.prototype.get_saveButton_tdhe4g$ = BackEditKillsUixApi.prototype.get_saveButton_tdhe4g$;
  EditTag.prototype.get_saveDeleteButton_tdhe4g$ = BackEditKillsUixApi.prototype.get_saveDeleteButton_tdhe4g$;
  EditTag.prototype.query_wzkv1r$ = EditTagPath.prototype.query_wzkv1r$;
  EditTag.prototype.randomEditable_mx4g9l$ = EditTagPath.prototype.randomEditable_mx4g9l$;
  EditTag.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  EditTag.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  EditTag.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  EditTag.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  EditTag.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  EditTaskPath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  EditTaskPath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  EditTaskPath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  EditTaskPath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  EditTaskPath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  EditTaskPath.prototype.get_prxdpg$ = LoggedInPath.prototype.get_prxdpg$;
  EditTaskPath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  EditTaskPath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  EditTaskPath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  EditTaskPath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  EditTaskPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  EditTaskPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  EditTaskPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  EditTaskLike.prototype.get_clickActivate_tvm2vp$ = BindCsKillsUixApi.prototype.get_clickActivate_tvm2vp$;
  EditTaskLike.prototype.get_clickToggle_tvm2vp$ = BindCsKillsUixApi.prototype.get_clickToggle_tvm2vp$;
  EditTaskLike.prototype.get_ids_qko62t$ = BindCsKillsUixApi.prototype.get_ids_qko62t$;
  EditTaskLike.prototype.get_oldKilled_vsdo34$ = BindCsKillsUixApi.prototype.get_oldKilled_vsdo34$;
  EditTaskLike.prototype.get_oldKilledOpt_vsdo34$ = BindCsKillsUixApi.prototype.get_oldKilledOpt_vsdo34$;
  EditTaskLike.prototype.get_routing_lqv1tx$ = BindCsKillsUixApi.prototype.get_routing_lqv1tx$;
  EditTaskLike.prototype.rx_y6x17j$ = BindCsKillsUixApi.prototype.rx_y6x17j$;
  EditTaskLike.prototype.rx_46ic4w$ = BindCsKillsUixApi.prototype.rx_46ic4w$;
  EditTaskLike.prototype.rx_wgabca$ = BindCsKillsUixApi.prototype.rx_wgabca$;
  EditTaskLike.prototype.rx_djv61p$ = BindCsKillsUixApi.prototype.rx_djv61p$;
  EditTaskLike.prototype.addDirty_3529di$ = BindCsKillsUixApi.prototype.addDirty_3529di$;
  EditTaskLike.prototype.bind_8y93tj$ = BindCsKillsUixApi.prototype.bind_8y93tj$;
  EditTaskLike.prototype.bind_4dd4yj$ = BindCsKillsUixApi.prototype.bind_4dd4yj$;
  EditTaskLike.prototype.bind_igb9j9$ = BindCsKillsUixApi.prototype.bind_igb9j9$;
  EditTaskLike.prototype.bind_zfaq6f$ = BindCsKillsUixApi.prototype.bind_zfaq6f$;
  EditTaskLike.prototype.bindValue_xy1r9h$ = BindCsKillsUixApi.prototype.bindValue_xy1r9h$;
  EditTaskLike.prototype.click_4eku4n$ = BindCsKillsUixApi.prototype.click_4eku4n$;
  EditTaskLike.prototype.click_9375ex$ = BindCsKillsUixApi.prototype.click_9375ex$;
  EditTaskLike.prototype.click_512jbc$ = BindCsKillsUixApi.prototype.click_512jbc$;
  EditTaskLike.prototype.click_3zaxtq$ = BindCsKillsUixApi.prototype.click_3zaxtq$;
  EditTaskLike.prototype.click_ts68bh$ = BindCsKillsUixApi.prototype.click_ts68bh$;
  EditTaskLike.prototype.containsRx_1w65cx$ = BindCsKillsUixApi.prototype.containsRx_1w65cx$;
  EditTaskLike.prototype.enabled_hlnvpg$ = BindCsKillsUixApi.prototype.enabled_hlnvpg$;
  EditTaskLike.prototype.events_9k4h2$ = BindCsKillsUixApi.prototype.events_9k4h2$;
  EditTaskLike.prototype.feedTo_9o5f67$ = BindCsKillsUixApi.prototype.feedTo_9o5f67$;
  EditTaskLike.prototype.filter_hu0si9$ = BindCsKillsUixApi.prototype.filter_hu0si9$;
  EditTaskLike.prototype.filtered_tnde95$ = BindCsKillsUixApi.prototype.filtered_tnde95$;
  EditTaskLike.prototype.forEach_xwzbbo$ = BindCsKillsUixApi.prototype.forEach_xwzbbo$;
  EditTaskLike.prototype.forEach_35q7bt$ = BindCsKillsUixApi.prototype.forEach_35q7bt$;
  EditTaskLike.prototype.forEachLater_xwzbbo$ = BindCsKillsUixApi.prototype.forEachLater_xwzbbo$;
  EditTaskLike.prototype.incremented_eoy9qo$ = BindCsKillsUixApi.prototype.incremented_eoy9qo$;
  EditTaskLike.prototype.linked_n1nom7$ = BindCsKillsUixApi.prototype.linked_n1nom7$;
  EditTaskLike.prototype.list_qlxt6c$ = BindCsKillsUixApi.prototype.list_qlxt6c$;
  EditTaskLike.prototype.list_u1uvxv$ = BindCsKillsUixApi.prototype.list_u1uvxv$;
  EditTaskLike.prototype.listen_ubid8w$ = BindCsKillsUixApi.prototype.listen_ubid8w$;
  EditTaskLike.prototype.map_jtxi0h$ = BindCsKillsUixApi.prototype.map_jtxi0h$;
  EditTaskLike.prototype.mapLive_1mq1ue$ = BindCsKillsUixApi.prototype.mapLive_1mq1ue$;
  EditTaskLike.prototype.on_2stdkb$ = BindCsKillsUixApi.prototype.on_2stdkb$;
  EditTaskLike.prototype.on_hgi4ad$ = BindCsKillsUixApi.prototype.on_hgi4ad$;
  EditTaskLike.prototype.onChange_oeam7t$ = BindCsKillsUixApi.prototype.onChange_oeam7t$;
  EditTaskLike.prototype.onChange_rlu5c6$ = BindCsKillsUixApi.prototype.onChange_rlu5c6$;
  EditTaskLike.prototype.onClick_pofl4w$ = BindCsKillsUixApi.prototype.onClick_pofl4w$;
  EditTaskLike.prototype.onInput_clfw57$ = BindCsKillsUixApi.prototype.onInput_clfw57$;
  EditTaskLike.prototype.plusAssign_ubid8w$ = BindCsKillsUixApi.prototype.plusAssign_ubid8w$;
  EditTaskLike.prototype.process_7xi3v7$ = BindCsKillsUixApi.prototype.process_7xi3v7$;
  EditTaskLike.prototype.process_y3juat$ = BindCsKillsUixApi.prototype.process_y3juat$;
  EditTaskLike.prototype.remAssign_wgabca$ = BindCsKillsUixApi.prototype.remAssign_wgabca$;
  EditTaskLike.prototype.remAssign_djv61p$ = BindCsKillsUixApi.prototype.remAssign_djv61p$;
  EditTaskLike.prototype.remAssign_7fncnf$ = BindCsKillsUixApi.prototype.remAssign_7fncnf$;
  EditTaskLike.prototype.runView_fpu3uh$ = BindCsKillsUixApi.prototype.runView_fpu3uh$;
  EditTaskLike.prototype.rxClass_9npl0m$ = BindCsKillsUixApi.prototype.rxClass_9npl0m$;
  EditTaskLike.prototype.rxClass_62ldac$ = BindCsKillsUixApi.prototype.rxClass_62ldac$;
  EditTaskLike.prototype.rxClass_c5yvvx$ = BindCsKillsUixApi.prototype.rxClass_c5yvvx$;
  EditTaskLike.prototype.rxClass_6sflyw$ = BindCsKillsUixApi.prototype.rxClass_6sflyw$;
  EditTaskLike.prototype.signOut_tstgz9$ = BindCsKillsUixApi.prototype.signOut_tstgz9$;
  EditTaskLike.prototype.toChannelLater_z5dyp2$ = BindCsKillsUixApi.prototype.toChannelLater_z5dyp2$;
  EditTaskLike.prototype.toRx_on0lyu$ = BindCsKillsUixApi.prototype.toRx_on0lyu$;
  EditTaskLike.prototype.toRxSet_jr4bl4$ = BindCsKillsUixApi.prototype.toRxSet_jr4bl4$;
  EditTaskLike.prototype.visibility_12lt6u$ = BindCsKillsUixApi.prototype.visibility_12lt6u$;
  EditTaskLike.prototype.visible_od9jl4$ = BindCsKillsUixApi.prototype.visible_od9jl4$;
  EditTaskLike.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  EditTaskLike.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  EditTaskLike.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  EditTaskLike.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  EditTaskLike.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  EditTaskLike.prototype.get_prxdpg$ = LoggedInPath.prototype.get_prxdpg$;
  EditTaskLike.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  EditTaskLike.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  EditTaskLike.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  EditTaskLike.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  EditTaskLike.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  EditTaskLike.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  EditTaskLike.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  EditTask.prototype.bind_8y93tj$ = EditTaskLike.prototype.bind_8y93tj$;
  EditTask.prototype.bind_4dd4yj$ = EditTaskLike.prototype.bind_4dd4yj$;
  EditTask.prototype.bind_igb9j9$ = EditTaskLike.prototype.bind_igb9j9$;
  Object.defineProperty(EditTask.prototype, 'bindings', Object.getOwnPropertyDescriptor(BackEditKillsUixApi.prototype, 'bindings'));
  EditTask.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  EditTask.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  EditTask.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  EditTask.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  EditTask.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  EditTask.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  EditTask.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  EditTask.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  EditTask.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  EditTask.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  EditTask.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  EditTask.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  EditTask.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  EditTask.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  EditTask.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  EditTask.prototype.get_backSaveDiscard_e1rmy3$ = BackEditKillsUixApi.prototype.get_backSaveDiscard_e1rmy3$;
  EditTask.prototype.get_saveButton_tdhe4g$ = BackEditKillsUixApi.prototype.get_saveButton_tdhe4g$;
  EditTask.prototype.get_saveDeleteButton_tdhe4g$ = BackEditKillsUixApi.prototype.get_saveDeleteButton_tdhe4g$;
  EditTask.prototype.query_wzkv1r$ = EditTaskLike.prototype.query_wzkv1r$;
  EditTask.prototype.randomEditable_mx4g9l$ = EditTaskLike.prototype.randomEditable_mx4g9l$;
  EditTask.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  EditTask.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  EditTask.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  EditTask.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  EditTask.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
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
  ListTags.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  ListTags.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  ListTags.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  ListTags.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  ListTags.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  ListTags.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  ListTags.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  ListTags.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  ListTags.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  ListTags.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  ListTags.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  ListTags.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  ListTags.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  ListTags.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  ListTags.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  ListTags.prototype.fwd_e1fa5e$$default = LinkApi.prototype.fwd_e1fa5e$$default;
  ListTags.prototype.fwd_nnhkmr$$default = LinkApi.prototype.fwd_nnhkmr$$default;
  ListTags.prototype.query_wzkv1r$ = ListTagsPath.prototype.query_wzkv1r$;
  ListTags.prototype.randomEditable_mx4g9l$ = ListTagsPath.prototype.randomEditable_mx4g9l$;
  ListTags.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  ListTags.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  ListTags.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  ListTags.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  ListTags.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  ListTags.prototype.fwd_e1fa5e$ = LinkApi.prototype.fwd_e1fa5e$;
  ListTags.prototype.fwd_nnhkmr$ = LinkApi.prototype.fwd_nnhkmr$;
  ListTasksPath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  ListTasksPath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  ListTasksPath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  ListTasksPath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  ListTasksPath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  ListTasksPath.prototype.get_prxdpg$ = LoggedInPath.prototype.get_prxdpg$;
  ListTasksPath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  ListTasksPath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  ListTasksPath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  ListTasksPath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  ListTasksPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  ListTasksPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  ListTasksPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
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
  ListTasks.prototype.fwd_e1fa5e$$default = LoggedInTC.prototype.fwd_e1fa5e$$default;
  ListTasks.prototype.fwd_nnhkmr$$default = LoggedInTC.prototype.fwd_nnhkmr$$default;
  ListTasks.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  ListTasks.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  ListTasks.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  ListTasks.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  ListTasks.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  ListTasks.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  ListTasks.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  ListTasks.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  ListTasks.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  ListTasks.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  ListTasks.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  ListTasks.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  ListTasks.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  ListTasks.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  ListTasks.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  ListTasks.prototype.query_wzkv1r$ = LoggedInTC.prototype.query_wzkv1r$;
  ListTasks.prototype.randomEditable_mx4g9l$ = LoggedInTC.prototype.randomEditable_mx4g9l$;
  ListTasks.prototype.fwd_e1fa5e$ = LoggedInTC.prototype.fwd_e1fa5e$;
  ListTasks.prototype.fwd_nnhkmr$ = LoggedInTC.prototype.fwd_nnhkmr$;
  ListTasks.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  ListTasks.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  ListTasks.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  ListTasks.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  ListTasks.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
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
  NewNotePath.prototype.get_randomDoc_sj9vaa$ = ViewTaskPath.prototype.get_randomDoc_sj9vaa$;
  NewNotePath.prototype.get_ref_sj9vaa$ = ViewTaskPath.prototype.get_ref_sj9vaa$;
  NewNotePath.prototype.get_ref_aqty80$ = ViewTaskPath.prototype.get_ref_aqty80$;
  NewNotePath.prototype.delete_73z9b6$ = ViewTaskPath.prototype.delete_73z9b6$;
  NewNotePath.prototype.delete_ihdkly$ = ViewTaskPath.prototype.delete_ihdkly$;
  NewNotePath.prototype.get_prxdpg$ = ViewTaskPath.prototype.get_prxdpg$;
  NewNotePath.prototype.query_wzkv1r$$default = ViewTaskPath.prototype.query_wzkv1r$$default;
  NewNotePath.prototype.randomEditable_mx4g9l$$default = ViewTaskPath.prototype.randomEditable_mx4g9l$$default;
  NewNotePath.prototype.save_73z9b6$ = ViewTaskPath.prototype.save_73z9b6$;
  NewNotePath.prototype.save_biv66q$ = ViewTaskPath.prototype.save_biv66q$;
  NewNotePath.prototype.toRandomFsDoc_xc7wmg$ = ViewTaskPath.prototype.toRandomFsDoc_xc7wmg$;
  NewNotePath.prototype.query_wzkv1r$ = ViewTaskPath.prototype.query_wzkv1r$;
  NewNotePath.prototype.randomEditable_mx4g9l$ = ViewTaskPath.prototype.randomEditable_mx4g9l$;
  NewNote.prototype.bind_8y93tj$ = BackCreateKillsUixApi.prototype.bind_8y93tj$;
  NewNote.prototype.bind_4dd4yj$ = BackCreateKillsUixApi.prototype.bind_4dd4yj$;
  NewNote.prototype.bind_igb9j9$ = BackCreateKillsUixApi.prototype.bind_igb9j9$;
  NewNote.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  NewNote.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  NewNote.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  NewNote.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  NewNote.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  NewNote.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  NewNote.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  NewNote.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  NewNote.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  NewNote.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  NewNote.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  NewNote.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  NewNote.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  NewNote.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  NewNote.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  Object.defineProperty(NewNote.prototype, 'bindings', Object.getOwnPropertyDescriptor(BackCreateKillsUixApi.prototype, 'bindings'));
  NewNote.prototype.get_backPersistDiscard_e1rmy3$ = BackCreateKillsUixApi.prototype.get_backPersistDiscard_e1rmy3$;
  NewNote.prototype.get_persistButton_tdhe4g$ = BackCreateKillsUixApi.prototype.get_persistButton_tdhe4g$;
  NewNote.prototype.query_wzkv1r$ = NewNotePath.prototype.query_wzkv1r$;
  NewNote.prototype.randomEditable_mx4g9l$ = NewNotePath.prototype.randomEditable_mx4g9l$;
  NewNote.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  NewNote.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  NewNote.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  NewNote.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  NewNote.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  NewTagPath.prototype.get_randomDoc_sj9vaa$ = ListTagsPath.prototype.get_randomDoc_sj9vaa$;
  NewTagPath.prototype.get_ref_sj9vaa$ = ListTagsPath.prototype.get_ref_sj9vaa$;
  NewTagPath.prototype.get_ref_aqty80$ = ListTagsPath.prototype.get_ref_aqty80$;
  NewTagPath.prototype.delete_73z9b6$ = ListTagsPath.prototype.delete_73z9b6$;
  NewTagPath.prototype.delete_ihdkly$ = ListTagsPath.prototype.delete_ihdkly$;
  NewTagPath.prototype.get_prxdpg$ = ListTagsPath.prototype.get_prxdpg$;
  NewTagPath.prototype.query_wzkv1r$$default = ListTagsPath.prototype.query_wzkv1r$$default;
  NewTagPath.prototype.randomEditable_mx4g9l$$default = ListTagsPath.prototype.randomEditable_mx4g9l$$default;
  NewTagPath.prototype.save_73z9b6$ = ListTagsPath.prototype.save_73z9b6$;
  NewTagPath.prototype.save_biv66q$ = ListTagsPath.prototype.save_biv66q$;
  NewTagPath.prototype.toRandomFsDoc_xc7wmg$ = ListTagsPath.prototype.toRandomFsDoc_xc7wmg$;
  NewTagPath.prototype.query_wzkv1r$ = ListTagsPath.prototype.query_wzkv1r$;
  NewTagPath.prototype.randomEditable_mx4g9l$ = ListTagsPath.prototype.randomEditable_mx4g9l$;
  NewTag.prototype.bind_8y93tj$ = BackCreateKillsUixApi.prototype.bind_8y93tj$;
  NewTag.prototype.bind_4dd4yj$ = BackCreateKillsUixApi.prototype.bind_4dd4yj$;
  NewTag.prototype.bind_igb9j9$ = BackCreateKillsUixApi.prototype.bind_igb9j9$;
  NewTag.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  NewTag.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  NewTag.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  NewTag.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  NewTag.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  NewTag.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  NewTag.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  NewTag.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  NewTag.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  NewTag.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  NewTag.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  NewTag.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  NewTag.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  NewTag.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  NewTag.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  Object.defineProperty(NewTag.prototype, 'bindings', Object.getOwnPropertyDescriptor(BackCreateKillsUixApi.prototype, 'bindings'));
  NewTag.prototype.get_backPersistDiscard_e1rmy3$ = BackCreateKillsUixApi.prototype.get_backPersistDiscard_e1rmy3$;
  NewTag.prototype.get_persistButton_tdhe4g$ = BackCreateKillsUixApi.prototype.get_persistButton_tdhe4g$;
  NewTag.prototype.query_wzkv1r$ = NewTagPath.prototype.query_wzkv1r$;
  NewTag.prototype.randomEditable_mx4g9l$ = NewTagPath.prototype.randomEditable_mx4g9l$;
  NewTag.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  NewTag.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  NewTag.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  NewTag.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  NewTag.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  NewTaskPath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  NewTaskPath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  NewTaskPath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  NewTaskPath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  NewTaskPath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  NewTaskPath.prototype.get_prxdpg$ = LoggedInPath.prototype.get_prxdpg$;
  NewTaskPath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  NewTaskPath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  NewTaskPath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  NewTaskPath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  NewTaskPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  NewTaskPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  NewTaskPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  NewTask.prototype.bind_8y93tj$ = EditTaskLike.prototype.bind_8y93tj$;
  NewTask.prototype.bind_4dd4yj$ = EditTaskLike.prototype.bind_4dd4yj$;
  NewTask.prototype.bind_igb9j9$ = EditTaskLike.prototype.bind_igb9j9$;
  Object.defineProperty(NewTask.prototype, 'bindings', Object.getOwnPropertyDescriptor(BackCreateKillsUixApi.prototype, 'bindings'));
  NewTask.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  NewTask.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  NewTask.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  NewTask.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  NewTask.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  NewTask.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  NewTask.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  NewTask.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  NewTask.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  NewTask.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  NewTask.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  NewTask.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  NewTask.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  NewTask.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  NewTask.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  NewTask.prototype.get_backPersistDiscard_e1rmy3$ = BackCreateKillsUixApi.prototype.get_backPersistDiscard_e1rmy3$;
  NewTask.prototype.get_persistButton_tdhe4g$ = BackCreateKillsUixApi.prototype.get_persistButton_tdhe4g$;
  NewTask.prototype.query_wzkv1r$ = EditTaskLike.prototype.query_wzkv1r$;
  NewTask.prototype.randomEditable_mx4g9l$ = EditTaskLike.prototype.randomEditable_mx4g9l$;
  NewTask.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  NewTask.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  NewTask.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  NewTask.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  NewTask.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  SelectTagsPath.prototype.get_randomDoc_sj9vaa$ = ListTasksPath.prototype.get_randomDoc_sj9vaa$;
  SelectTagsPath.prototype.get_ref_sj9vaa$ = ListTasksPath.prototype.get_ref_sj9vaa$;
  SelectTagsPath.prototype.get_ref_aqty80$ = ListTasksPath.prototype.get_ref_aqty80$;
  SelectTagsPath.prototype.delete_73z9b6$ = ListTasksPath.prototype.delete_73z9b6$;
  SelectTagsPath.prototype.delete_ihdkly$ = ListTasksPath.prototype.delete_ihdkly$;
  SelectTagsPath.prototype.get_prxdpg$ = ListTasksPath.prototype.get_prxdpg$;
  SelectTagsPath.prototype.query_wzkv1r$$default = ListTasksPath.prototype.query_wzkv1r$$default;
  SelectTagsPath.prototype.randomEditable_mx4g9l$$default = ListTasksPath.prototype.randomEditable_mx4g9l$$default;
  SelectTagsPath.prototype.save_73z9b6$ = ListTasksPath.prototype.save_73z9b6$;
  SelectTagsPath.prototype.save_biv66q$ = ListTasksPath.prototype.save_biv66q$;
  SelectTagsPath.prototype.toRandomFsDoc_xc7wmg$ = ListTasksPath.prototype.toRandomFsDoc_xc7wmg$;
  SelectTagsPath.prototype.query_wzkv1r$ = ListTasksPath.prototype.query_wzkv1r$;
  SelectTagsPath.prototype.randomEditable_mx4g9l$ = ListTasksPath.prototype.randomEditable_mx4g9l$;
  SelectTags.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  SelectTags.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  SelectTags.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  SelectTags.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  SelectTags.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  SelectTags.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  SelectTags.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  SelectTags.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  SelectTags.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  SelectTags.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  SelectTags.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  SelectTags.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  SelectTags.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  SelectTags.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  SelectTags.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  SelectTags.prototype.query_wzkv1r$ = SelectTagsPath.prototype.query_wzkv1r$;
  SelectTags.prototype.randomEditable_mx4g9l$ = SelectTagsPath.prototype.randomEditable_mx4g9l$;
  SelectTags.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  SelectTags.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  SelectTags.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  SelectTags.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  SelectTags.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  ViewTask.prototype.fwd_e1fa5e$$default = LoggedInTC.prototype.fwd_e1fa5e$$default;
  ViewTask.prototype.fwd_nnhkmr$$default = LoggedInTC.prototype.fwd_nnhkmr$$default;
  ViewTask.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  ViewTask.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  ViewTask.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  ViewTask.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  ViewTask.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  ViewTask.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  ViewTask.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  ViewTask.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  ViewTask.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  ViewTask.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  ViewTask.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  ViewTask.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  ViewTask.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  ViewTask.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  ViewTask.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  ViewTask.prototype.query_wzkv1r$ = LoggedInTC.prototype.query_wzkv1r$;
  ViewTask.prototype.randomEditable_mx4g9l$ = LoggedInTC.prototype.randomEditable_mx4g9l$;
  ViewTask.prototype.fwd_e1fa5e$ = LoggedInTC.prototype.fwd_e1fa5e$;
  ViewTask.prototype.fwd_nnhkmr$ = LoggedInTC.prototype.fwd_nnhkmr$;
  ViewTask.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  ViewTask.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  ViewTask.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  ViewTask.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  ViewTask.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  main();
  Kotlin.defineModule('appsimake-tasks', _);
  return _;
}(typeof this['appsimake-tasks'] === 'undefined' ? {} : this['appsimake-tasks'], kotlin, this['appsimake-taskslib'], this['appsimake-firebase'], this['appsimake-commonui'], this['appsimake-commonfb'], this['appsimake-domx'], this['appsimake-commonshr'], this['appsimake-bootstrap'], this['kotlinx-coroutines-core'], this['appsimake-fontawesome']);

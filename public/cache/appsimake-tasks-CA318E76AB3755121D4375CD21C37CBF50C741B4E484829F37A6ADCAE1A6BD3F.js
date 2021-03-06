if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-commonlib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonlib' was not found. Please, check whether 'appsimake-commonlib' is loaded prior to 'appsimake-tasks'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tasks'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-tasks'.");
}
this['appsimake-tasks'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_common, $module$appsimake_bootstrap, $module$appsimake_domx, $module$appsimake_fontawesome, $module$appsimake_commonui, $module$appsimake_firebase, $module$appsimake_commonlib, $module$appsimake_commonfb) {
  'use strict';
  var obj = $module$appsimake_commonshr.common.obj_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Var = $module$appsimake_common.rx.Var;
  var Rx_init = $module$appsimake_common.rx.Rx_init_klfg04$;
  var equals = Kotlin.equals;
  var Killables = $module$appsimake_common.killable.Killables;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_ejp6nk$;
  var padding2 = $module$appsimake_bootstrap.bootstrap.padding2_ejp6nk$;
  var borderBottom = $module$appsimake_bootstrap.bootstrap.borderBottom_ejp6nk$;
  var bgLight = $module$appsimake_bootstrap.bootstrap.bgLight_ejp6nk$;
  var btnSecondary = $module$appsimake_bootstrap.bootstrap.btnSecondary_ejp6nk$;
  var rxText = $module$appsimake_bootstrap.bootstrap.rxText_7fncnf$;
  var clickEvent = $module$appsimake_domx.domx.clickEvent_bvfv80$;
  var btnButton = $module$appsimake_bootstrap.bootstrap.btnButton_9ztatb$;
  var flexGrow1 = $module$appsimake_bootstrap.bootstrap.flexGrow1_ejp6nk$;
  var div = $module$appsimake_domx.domx.div_gnmiz0$;
  var rxDisplay = $module$appsimake_bootstrap.bootstrap.rxDisplay_86pnez$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_ejp6nk$;
  var spinner = $module$appsimake_fontawesome.fontawesome.spinner_asww5s$;
  var btnGroup = $module$appsimake_bootstrap.bootstrap.btnGroup_ejp6nk$;
  var btnPrimary = $module$appsimake_bootstrap.bootstrap.btnPrimary_ejp6nk$;
  var rxEnabled = $module$appsimake_domx.domx.rxEnabled_v5m6ih$;
  var dropdownToggleButton = $module$appsimake_bootstrap.bootstrap.dropdownToggleButton_9ztatb$;
  var dropdownMenu = $module$appsimake_bootstrap.bootstrap.dropdownMenu_ejp6nk$;
  var rxAnchorClick = $module$appsimake_bootstrap.bootstrap.rxAnchorClick_qit41n$;
  var dropdownItemAnchor = $module$appsimake_bootstrap.bootstrap.dropdownItemAnchor_6t02fy$;
  var row = $module$appsimake_bootstrap.bootstrap.row_gnmiz0$;
  var get_classes = $module$appsimake_domx.domx.get_classes_ejp6nk$;
  var styles = $module$appsimake_domx.styles;
  var formGroup = $module$appsimake_bootstrap.bootstrap.formGroup_ejp6nk$;
  var label = $module$appsimake_domx.domx.label_faa409$;
  var formControl = $module$appsimake_bootstrap.bootstrap.formControl_ejp6nk$;
  var rxInput = $module$appsimake_domx.domx.rxInput_oyq3so$;
  var input = $module$appsimake_domx.domx.input_xh1a31$;
  var rxInput_0 = $module$appsimake_domx.domx.rxInput_his5zs$;
  var textarea = $module$appsimake_domx.domx.textarea_vbubjb$;
  var column = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var flexColumn = $module$appsimake_bootstrap.bootstrap.flexColumn_ejp6nk$;
  var flexRow = $module$appsimake_bootstrap.bootstrap.flexRow_ejp6nk$;
  var RootPanel = $module$appsimake_commonui.commonui.RootPanel;
  var ListenableMutableList = $module$appsimake_common.common.ListenableMutableList;
  var span = $module$appsimake_domx.domx.span_c7xqcp$;
  var listAction = $module$appsimake_bootstrap.bootstrap.listAction_6t02fy$;
  var listenableList = $module$appsimake_domx.domx.listenableList_fgftfw$;
  var listGroup = $module$appsimake_bootstrap.bootstrap.listGroup_t7sdcm$;
  var docItems = $module$appsimake_firebase.firebase.firestore.docItems_uc6rg3$;
  var Lib = $module$appsimake_commonlib.commonlib.Lib;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var LoggingInCtx_init = $module$appsimake_commonfb.commonfb.LoggingInCtx_init_nruni5$;
  var LoggingInCtx = $module$appsimake_commonfb.commonfb.LoggingInCtx;
  var commandButton = $module$appsimake_bootstrap.bootstrap.commandButton_t3i1hh$;
  var LoggedInCtx = $module$appsimake_commonfb.commonfb.LoggedInCtx;
  TasksMain.prototype = Object.create(LoggingInCtx.prototype);
  TasksMain.prototype.constructor = TasksMain;
  function TaskData(title, text) {
    if (title === void 0)
      title = '';
    if (text === void 0)
      text = '';
    this.title = title;
    this.text = text;
  }
  TaskData.prototype.toTask = function () {
    var $receiver = obj();
    $receiver.title = this.title;
    $receiver.text = this.text;
    return $receiver;
  };
  TaskData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TaskData',
    interfaces: []
  };
  function TaskData_init(task, $this) {
    $this = $this || Object.create(TaskData.prototype);
    TaskData.call($this, task.title, task.text);
    return $this;
  }
  TaskData.prototype.component1 = function () {
    return this.title;
  };
  TaskData.prototype.component2 = function () {
    return this.text;
  };
  TaskData.prototype.copy_puj7f4$ = function (title, text) {
    return new TaskData(title === void 0 ? this.title : title, text === void 0 ? this.text : text);
  };
  TaskData.prototype.toString = function () {
    return 'TaskData(title=' + Kotlin.toString(this.title) + (', text=' + Kotlin.toString(this.text)) + ')';
  };
  TaskData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  TaskData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.text, other.text)))));
  };
  function editTask$lambda(this$editTask) {
    return function () {
      this$editTask.main();
      return Unit;
    };
  }
  function editTask$lambda_0(closure$title, closure$text) {
    return function () {
      return new TaskData(closure$title.invoke(), closure$text.invoke());
    };
  }
  function editTask$lambda_1(closure$editingData, closure$savedData) {
    return function () {
      return equals(closure$editingData.invoke(), closure$savedData.invoke());
    };
  }
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function editTask$lambda_2(closure$isSaved, closure$isSaving, closure$editingData) {
    return function () {
      var tmp$ = !closure$isSaved.invoke() && !closure$isSaving.invoke();
      if (tmp$) {
        tmp$ = !isBlank(closure$editingData.invoke().title);
      }
      return tmp$;
    };
  }
  function editTask$lambda_3(closure$savedData, closure$isSaving) {
    return function () {
      return closure$savedData.invoke() != null && !closure$isSaving.invoke();
    };
  }
  function editTask$setupSavedState$lambda$lambda(closure$toSave, closure$savedData) {
    return function (it) {
      closure$savedData.now = closure$toSave;
      return Unit;
    };
  }
  function editTask$setupSavedState$lambda(closure$editingData, closure$ref, closure$savedData) {
    return function () {
      var toSave = closure$editingData.now;
      return closure$ref.set(toSave.toTask()).then(editTask$setupSavedState$lambda$lambda(toSave, closure$savedData));
    };
  }
  function editTask$setupSavedState$lambda_0(closure$ref) {
    return function () {
      return closure$ref.delete();
    };
  }
  function editTask$setupSavedState(closure$editingData, closure$savedData, closure$savePromise, closure$deletePromise) {
    return function (ref) {
      closure$savePromise.v = editTask$setupSavedState$lambda(closure$editingData, ref, closure$savedData);
      closure$deletePromise.v = editTask$setupSavedState$lambda_0(ref);
    };
  }
  function editTask$save$lambda(closure$isSaving) {
    return function (it) {
      closure$isSaving.now = false;
      return Unit;
    };
  }
  function editTask$save(closure$canSave, closure$isSaving, closure$savePromise) {
    return function () {
      if (closure$canSave.now) {
        closure$isSaving.now = true;
        closure$savePromise.v().then(editTask$save$lambda(closure$isSaving));
      }
    };
  }
  function editTask$saveNew$lambda$lambda(closure$savedData) {
    return function (d) {
      if (d.exists) {
        var $receiver = d.data();
        closure$savedData.now = TaskData_init($receiver);
      }
       else {
        closure$savedData.now = null;
      }
      return Unit;
    };
  }
  function editTask$saveNew$lambda(closure$toSave, closure$savedData, closure$killables, closure$setupSavedState) {
    return function (docRef) {
      closure$savedData.now = closure$toSave;
      closure$killables.plusAssign_o14v8n$(docRef.onSnapshot(editTask$saveNew$lambda$lambda(closure$savedData)));
      closure$setupSavedState(docRef);
      return Unit;
    };
  }
  function editTask$saveNew(closure$editingData, this$editTask, closure$savedData, closure$killables, closure$setupSavedState) {
    return function () {
      var toSave = closure$editingData.now;
      return this$editTask.userTasksRef.add(toSave.toTask()).then(editTask$saveNew$lambda(toSave, closure$savedData, closure$killables, closure$setupSavedState));
    };
  }
  function editTask$lambda_4(closure$saveNew) {
    return function () {
      return closure$saveNew();
    };
  }
  function editTask$lambda_5(closure$savedData) {
    return function (it) {
      closure$savedData.now = toTaskData(it);
      return Unit;
    };
  }
  function editTask$back(closure$killables, closure$onBack) {
    return function () {
      closure$killables.kill();
      closure$onBack();
    };
  }
  function editTask$delete$lambda(closure$isSaving, closure$back) {
    return function (it) {
      closure$isSaving.now = false;
      closure$back();
      return Unit;
    };
  }
  function editTask$delete(closure$isSaving, closure$deletePromise, closure$back) {
    return function () {
      closure$isSaving.now = true;
      closure$deletePromise.v().then(editTask$delete$lambda(closure$isSaving, closure$back));
    };
  }
  function editTask$lambda$lambda$lambda$lambda(closure$isSaved) {
    return function () {
      return closure$isSaved.invoke() ? 'Close' : 'Cancel';
    };
  }
  function editTask$lambda$lambda$lambda$lambda_0(closure$back) {
    return function (it) {
      closure$back();
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda(closure$isSaved, closure$back) {
    return function ($receiver) {
      flexFixedSize($receiver);
      btnSecondary($receiver);
      rxText($receiver, editTask$lambda$lambda$lambda$lambda(closure$isSaved));
      clickEvent($receiver, editTask$lambda$lambda$lambda$lambda_0(closure$back));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda_0($receiver) {
    flexGrow1($receiver);
    return Unit;
  }
  function editTask$lambda$lambda$lambda_1(closure$isSaving) {
    return function ($receiver) {
      rxDisplay($receiver, closure$isSaving);
      flexCenter($receiver);
      padding2($receiver);
      spinner($receiver);
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda(closure$isSaving, closure$isSaved) {
    return function () {
      if (closure$isSaving.invoke())
        return 'Saving...';
      else if (closure$isSaved.invoke())
        return 'Saved';
      else
        return 'Save';
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda_0(closure$save) {
    return function (it) {
      closure$save();
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda_1(closure$isSaving, closure$isSaved, closure$canSave, closure$save) {
    return function ($receiver) {
      btnPrimary($receiver);
      rxText($receiver, editTask$lambda$lambda$lambda$lambda$lambda(closure$isSaving, closure$isSaved));
      rxEnabled($receiver, closure$canSave);
      clickEvent($receiver, editTask$lambda$lambda$lambda$lambda$lambda_0(closure$save));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    btnPrimary($receiver);
    return Unit;
  }
  function editTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$delete) {
    return function (it) {
      closure$delete();
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda$lambda(closure$canDelete, closure$delete) {
    return function ($receiver) {
      $receiver.innerText = 'Delete';
      rxAnchorClick($receiver, closure$canDelete, editTask$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$delete));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda$lambda_2(closure$canDelete, closure$delete) {
    return function ($receiver) {
      dropdownMenu($receiver);
      dropdownItemAnchor($receiver, editTask$lambda$lambda$lambda$lambda$lambda$lambda(closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda_2(closure$canDelete, closure$delete) {
    return function ($receiver) {
      btnGroup($receiver);
      dropdownToggleButton($receiver, editTask$lambda$lambda$lambda$lambda$lambda_1);
      div($receiver, editTask$lambda$lambda$lambda$lambda$lambda_2(closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda_2(closure$isSaving, closure$isSaved, closure$canSave, closure$save, closure$canDelete, closure$delete) {
    return function ($receiver) {
      flexFixedSize($receiver);
      btnGroup($receiver);
      btnButton($receiver, editTask$lambda$lambda$lambda$lambda_1(closure$isSaving, closure$isSaved, closure$canSave, closure$save));
      div($receiver, editTask$lambda$lambda$lambda$lambda_2(closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function editTask$lambda$lambda(closure$isSaved, closure$back, closure$isSaving, closure$canSave, closure$save, closure$canDelete, closure$delete) {
    return function ($receiver) {
      flexFixedSize($receiver);
      padding2($receiver);
      borderBottom($receiver);
      bgLight($receiver);
      btnButton($receiver, editTask$lambda$lambda$lambda(closure$isSaved, closure$back));
      div($receiver, editTask$lambda$lambda$lambda_0);
      div($receiver, editTask$lambda$lambda$lambda_1(closure$isSaving));
      div($receiver, editTask$lambda$lambda$lambda_2(closure$isSaving, closure$isSaved, closure$canSave, closure$save, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.innerText = 'Title';
    return Unit;
  }
  function editTask$lambda$lambda$lambda$lambda_4(closure$title) {
    return function ($receiver) {
      $receiver.type = 'text';
      $receiver.value = closure$title.now;
      formControl($receiver);
      rxInput($receiver, closure$title);
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda_3(closure$title) {
    return function ($receiver) {
      formGroup($receiver);
      flexFixedSize($receiver);
      label($receiver, editTask$lambda$lambda$lambda$lambda_3);
      input($receiver, editTask$lambda$lambda$lambda$lambda_4(closure$title));
      return Unit;
    };
  }
  function editTask$lambda$lambda$lambda_4($receiver) {
    flexFixedSize($receiver);
    $receiver.innerText = 'Text';
    return Unit;
  }
  function editTask$lambda$lambda$lambda_5(closure$text) {
    return function ($receiver) {
      flexGrow1($receiver);
      formControl($receiver);
      $receiver.value = closure$text.now;
      rxInput_0($receiver, closure$text);
      return Unit;
    };
  }
  function editTask$lambda$lambda_0(closure$title, closure$text) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$(styles.scrollVertical);
      flexGrow1($receiver);
      padding2($receiver);
      div($receiver, editTask$lambda$lambda$lambda_3(closure$title));
      label($receiver, editTask$lambda$lambda$lambda_4);
      textarea($receiver, editTask$lambda$lambda$lambda_5(closure$text));
      return Unit;
    };
  }
  function editTask$lambda_6(closure$isSaved, closure$back, closure$isSaving, closure$canSave, closure$save, closure$canDelete, closure$delete, closure$title, closure$text) {
    return function ($receiver) {
      row($receiver, editTask$lambda$lambda(closure$isSaved, closure$back, closure$isSaving, closure$canSave, closure$save, closure$canDelete, closure$delete));
      column($receiver, editTask$lambda$lambda_0(closure$title, closure$text));
      return Unit;
    };
  }
  function editTask($receiver, item, onBack) {
    if (item === void 0)
      item = null;
    if (onBack === void 0)
      onBack = editTask$lambda($receiver);
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var savedData = new Var(item != null ? toTaskData(item.data.now) : null);
    var title = new Var((tmp$_0 = (tmp$ = savedData.now) != null ? tmp$.title : null) != null ? tmp$_0 : '');
    var text = new Var((tmp$_2 = (tmp$_1 = savedData.now) != null ? tmp$_1.text : null) != null ? tmp$_2 : '');
    var isSaving = new Var(false);
    var editingData = Rx_init(editTask$lambda_0(title, text));
    var isSaved = Rx_init(editTask$lambda_1(editingData, savedData));
    var canSave = Rx_init(editTask$lambda_2(isSaved, isSaving, editingData));
    var canDelete = Rx_init(editTask$lambda_3(savedData, isSaving));
    var killables = new Killables();
    var savePromise = {v: null};
    var deletePromise = {v: null};
    var setupSavedState = editTask$setupSavedState(editingData, savedData, savePromise, deletePromise);
    var save = editTask$save(canSave, isSaving, savePromise);
    var saveNew = editTask$saveNew(editingData, $receiver, savedData, killables, setupSavedState);
    if (item == null) {
      savePromise.v = editTask$lambda_4(saveNew);
    }
     else {
      killables.plusAssign_wii6vi$(item.data.forEach_qlkmfe$(editTask$lambda_5(savedData)));
      setupSavedState($receiver.userTasksRef.doc(item.id));
    }
    var back = editTask$back(killables, onBack);
    var delete_0 = editTask$delete(isSaving, deletePromise, back);
    $receiver.root.newRoot_iw61es$(editTask$lambda_6(isSaved, back, isSaving, canSave, save, canDelete, delete_0, title, text));
  }
  function listTasks$lambda$displayList(this$listTasks, this$) {
    return function () {
      this$listTasks.root.setRoot_b3w3xb$(this$);
    };
  }
  function listTasks$lambda$lambda$lambda$lambda(closure$killables, this$listTasks) {
    return function (it) {
      closure$killables.kill();
      this$listTasks.main();
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda(closure$killables, this$listTasks) {
    return function ($receiver) {
      flexFixedSize($receiver);
      btnSecondary($receiver);
      $receiver.innerText = 'Back';
      clickEvent($receiver, listTasks$lambda$lambda$lambda$lambda(closure$killables, this$listTasks));
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda_0($receiver) {
    flexGrow1($receiver);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda_1(closure$isBusy) {
    return function ($receiver) {
      rxDisplay($receiver, closure$isBusy);
      flexCenter($receiver);
      padding2($receiver);
      spinner($receiver);
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda(closure$displayList) {
    return function () {
      closure$displayList();
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda_0(closure$displayList, this$listTasks) {
    return function (it) {
      editTask(this$listTasks, void 0, listTasks$lambda$lambda$lambda$lambda$lambda(closure$displayList));
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda_2(closure$displayList, this$listTasks) {
    return function ($receiver) {
      flexFixedSize($receiver);
      btnPrimary($receiver);
      $receiver.innerText = 'New';
      clickEvent($receiver, listTasks$lambda$lambda$lambda$lambda_0(closure$displayList, this$listTasks));
      return Unit;
    };
  }
  function listTasks$lambda$lambda(closure$killables, this$listTasks, closure$isBusy, closure$displayList) {
    return function ($receiver) {
      flexFixedSize($receiver);
      flexRow($receiver);
      padding2($receiver);
      borderBottom($receiver);
      bgLight($receiver);
      btnButton($receiver, listTasks$lambda$lambda$lambda(closure$killables, this$listTasks));
      div($receiver, listTasks$lambda$lambda$lambda_0);
      div($receiver, listTasks$lambda$lambda$lambda_1(closure$isBusy));
      btnButton($receiver, listTasks$lambda$lambda$lambda_2(closure$displayList, this$listTasks));
      return Unit;
    };
  }
  function listTasks$lambda$lambda_0($receiver) {
    flexGrow1($receiver);
    padding2($receiver);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda_3($receiver) {
    flexGrow1($receiver);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.innerText = 'The list is empty';
    return Unit;
  }
  function listTasks$lambda$lambda$lambda_4($receiver) {
    flexCenter($receiver);
    flexGrow1($receiver);
    span($receiver, listTasks$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$item) {
    return function () {
      return closure$item.data.invoke().title;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$displayList) {
    return function () {
      closure$displayList();
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$item, closure$displayList, this$listTasks) {
    return function (it) {
      editTask(this$listTasks, closure$item, listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$displayList));
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda$lambda(closure$item, closure$displayList, this$listTasks) {
    return function ($receiver) {
      rxText($receiver, listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$item));
      clickEvent($receiver, listTasks$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$item, closure$displayList, this$listTasks));
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda$lambda$lambda_0(closure$displayList, this$listTasks) {
    return function (item) {
      return listAction(document, listTasks$lambda$lambda$lambda$lambda$lambda$lambda(item, closure$displayList, this$listTasks));
    };
  }
  function listTasks$lambda$lambda$lambda$lambda_2(closure$list, closure$displayList, this$listTasks) {
    return function ($receiver) {
      listenableList($receiver, closure$list, listTasks$lambda$lambda$lambda$lambda$lambda_0(closure$displayList, this$listTasks));
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda_5(closure$list, closure$displayList, this$listTasks) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$(styles.scrollVertical);
      flexGrow1($receiver);
      listGroup($receiver, listTasks$lambda$lambda$lambda$lambda_2(closure$list, closure$displayList, this$listTasks));
      return Unit;
    };
  }
  function listTasks$lambda$lambda$lambda_6(closure$listOrEmptyRoot, closure$emptyDiv, closure$listDiv) {
    return function (empty) {
      closure$listOrEmptyRoot.setRoot_b3w3xb$(empty ? closure$emptyDiv : closure$listDiv);
      return Unit;
    };
  }
  function listTasks$lambda$lambda_1(closure$list, closure$displayList, this$listTasks) {
    return function ($receiver) {
      flexGrow1($receiver);
      var listOrEmptyRoot = new RootPanel(column($receiver, listTasks$lambda$lambda$lambda_3));
      var emptyDiv = column(document, listTasks$lambda$lambda$lambda_4);
      var listDiv = column(document, listTasks$lambda$lambda$lambda_5(closure$list, closure$displayList, this$listTasks));
      closure$list.isEmptyRx.forEach_qlkmfe$(listTasks$lambda$lambda$lambda_6(listOrEmptyRoot, emptyDiv, listDiv));
      return Unit;
    };
  }
  function listTasks$lambda$lambda_2(closure$listOrHourglassRoot, closure$listOrEmptyDiv) {
    return function () {
      closure$listOrHourglassRoot.setRoot_b3w3xb$(closure$listOrEmptyDiv);
      return Unit;
    };
  }
  function listTasks$lambda(this$listTasks, closure$killables, closure$isBusy) {
    return function ($receiver) {
      var displayList = listTasks$lambda$displayList(this$listTasks, $receiver);
      flexColumn($receiver);
      div($receiver, listTasks$lambda$lambda(closure$killables, this$listTasks, closure$isBusy, displayList));
      var listOrHourglassRoot = new RootPanel(column($receiver, listTasks$lambda$lambda_0));
      listOrHourglassRoot.setHourglass();
      var list = new ListenableMutableList();
      var listOrEmptyDiv = column(document, listTasks$lambda$lambda_1(list, displayList, this$listTasks));
      closure$killables.plusAssign_o14v8n$(docItems(this$listTasks.userTasksRef, list, void 0, listTasks$lambda$lambda_2(listOrHourglassRoot, listOrEmptyDiv)));
      return Unit;
    };
  }
  function listTasks($receiver) {
    var isBusy = new Var(false);
    var killables = new Killables();
    $receiver.root.newRoot_iw61es$(listTasks$lambda($receiver, killables, isBusy));
  }
  function main(args) {
    (new TasksMain()).start();
  }
  function tasks$lambda(it) {
    return new Lib(it);
  }
  var tasks_metadata = new PropertyMetadata('tasks');
  var tasks;
  function get_tasks() {
    return tasks.getValue_lrcp0p$(this, tasks_metadata);
  }
  function TasksMain() {
    LoggingInCtx_init(get_tasks(), 'Tasks', this);
  }
  TasksMain.prototype.loggedIn_v1eir6$ = function (user) {
    return (new LoggedIn(this, user)).main();
  };
  TasksMain.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TasksMain',
    interfaces: [LoggingInCtx]
  };
  function toTaskData($receiver) {
    return TaskData_init($receiver);
  }
  function LoggedIn(base, user) {
    this.base = base;
    this.user = user;
    this.loggedInCtx = new LoggedInCtx(this.base.fbCtx, this.user);
    this.privateRef = this.loggedInCtx.privateRef;
    this.userTasksRef = this.privateRef.collection('tasks');
    this.root = this.base.appCtx.root;
  }
  function LoggedIn$main$lambda$lambda$lambda(this$LoggedIn) {
    return function () {
      editTask(this$LoggedIn);
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda_0(this$LoggedIn) {
    return function () {
      listTasks(this$LoggedIn);
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda_1(this$LoggedIn) {
    return function () {
      taskGraph(this$LoggedIn);
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda_2(this$LoggedIn) {
    return function () {
      this$LoggedIn.base.fbCtx.signOut();
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda(this$LoggedIn) {
    return function ($receiver) {
      padding2($receiver);
      commandButton($receiver, 'New Task', LoggedIn$main$lambda$lambda$lambda(this$LoggedIn));
      commandButton($receiver, 'List Tasks', LoggedIn$main$lambda$lambda$lambda_0(this$LoggedIn));
      commandButton($receiver, 'Task Graph', LoggedIn$main$lambda$lambda$lambda_1(this$LoggedIn));
      commandButton($receiver, 'Sign Out', LoggedIn$main$lambda$lambda$lambda_2(this$LoggedIn));
      return Unit;
    };
  }
  function LoggedIn$main$lambda(this$LoggedIn) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$(styles.scrollVertical);
      listGroup($receiver, LoggedIn$main$lambda$lambda(this$LoggedIn));
      return Unit;
    };
  }
  function LoggedIn$main$lambda_0(this$LoggedIn) {
    return function () {
      this$LoggedIn.loggedInCtx.killables.kill();
      return Unit;
    };
  }
  LoggedIn.prototype.main = function () {
    this.root.newRoot_iw61es$(LoggedIn$main$lambda(this));
    return LoggedIn$main$lambda_0(this);
  };
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: []
  };
  function taskGraph($receiver) {
  }
  var package$tasks = _.tasks || (_.tasks = {});
  package$tasks.TaskData_init_u3y6f9$ = TaskData_init;
  package$tasks.TaskData = TaskData;
  package$tasks.editTask_ny51za$ = editTask;
  package$tasks.listTasks_yugls8$ = listTasks;
  package$tasks.main_kand9s$ = main;
  Object.defineProperty(package$tasks, 'tasks', {
    get: get_tasks
  });
  package$tasks.TasksMain = TasksMain;
  package$tasks.toTaskData_9zythm$ = toTaskData;
  package$tasks.LoggedIn = LoggedIn;
  package$tasks.taskGraph_yugls8$ = taskGraph;
  tasks = named(tasks$lambda).provideDelegate_d6mtq7$(this, tasks_metadata);
  main([]);
  Kotlin.defineModule('appsimake-tasks', _);
  return _;
}(typeof this['appsimake-tasks'] === 'undefined' ? {} : this['appsimake-tasks'], kotlin, this['appsimake-commonshr'], this['appsimake-common'], this['appsimake-bootstrap'], this['appsimake-domx'], this['appsimake-fontawesome'], this['appsimake-commonui'], this['appsimake-firebase'], this['appsimake-commonlib'], this['appsimake-commonfb']);

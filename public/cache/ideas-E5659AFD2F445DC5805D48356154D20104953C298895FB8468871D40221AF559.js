if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ideas'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ideas'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'ideas'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'ideas'.");
}
if (typeof bootstrap === 'undefined') {
  throw new Error("Error loading module 'ideas'. Its dependency 'bootstrap' was not found. Please, check whether 'bootstrap' is loaded prior to 'ideas'.");
}
if (typeof domx === 'undefined') {
  throw new Error("Error loading module 'ideas'. Its dependency 'domx' was not found. Please, check whether 'domx' is loaded prior to 'ideas'.");
}
if (typeof fontawesome === 'undefined') {
  throw new Error("Error loading module 'ideas'. Its dependency 'fontawesome' was not found. Please, check whether 'fontawesome' is loaded prior to 'ideas'.");
}
if (typeof commonfb === 'undefined') {
  throw new Error("Error loading module 'ideas'. Its dependency 'commonfb' was not found. Please, check whether 'commonfb' is loaded prior to 'ideas'.");
}
if (typeof firebase === 'undefined') {
  throw new Error("Error loading module 'ideas'. Its dependency 'firebase' was not found. Please, check whether 'firebase' is loaded prior to 'ideas'.");
}
var ideas = function (_, Kotlin, $module$common, $module$bootstrap, $module$domx, $module$fontawesome, $module$commonfb, $module$firebase) {
  'use strict';
  var obj = $module$common.common.obj_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Var = $module$common.rx.Var;
  var Rx_init = $module$common.rx.Rx_init_klfg04$;
  var equals = Kotlin.equals;
  var Killables = $module$common.killable.Killables;
  var flexFixedSize = $module$bootstrap.bootstrap.flexFixedSize_ejp6nk$;
  var padding2 = $module$bootstrap.bootstrap.padding2_ejp6nk$;
  var borderBottom = $module$bootstrap.bootstrap.borderBottom_ejp6nk$;
  var bgLigth = $module$bootstrap.bootstrap.bgLigth_ejp6nk$;
  var btnSecondary = $module$bootstrap.bootstrap.btnSecondary_ejp6nk$;
  var rxText = $module$bootstrap.bootstrap.rxText_7fncnf$;
  var clickEvent = $module$domx.domx.clickEvent_bvfv80$;
  var btnButton = $module$bootstrap.bootstrap.btnButton_9ztatb$;
  var flexGrow1 = $module$bootstrap.bootstrap.flexGrow1_ejp6nk$;
  var div = $module$domx.domx.div_gnmiz0$;
  var rxDisplay = $module$bootstrap.bootstrap.rxDisplay_86pnez$;
  var flexCenter = $module$bootstrap.bootstrap.flexCenter_ejp6nk$;
  var spinner = $module$fontawesome.fontawesome.spinner_asww5s$;
  var btnGroup = $module$bootstrap.bootstrap.btnGroup_ejp6nk$;
  var btnPrimary = $module$bootstrap.bootstrap.btnPrimary_ejp6nk$;
  var rxEnabled = $module$domx.domx.rxEnabled_v5m6ih$;
  var dropdownToggleButton = $module$bootstrap.bootstrap.dropdownToggleButton_9ztatb$;
  var dropdownMenu = $module$bootstrap.bootstrap.dropdownMenu_ejp6nk$;
  var rxAnchorClick = $module$bootstrap.bootstrap.rxAnchorClick_qit41n$;
  var dropdownItemAnchor = $module$bootstrap.bootstrap.dropdownItemAnchor_6t02fy$;
  var row = $module$bootstrap.bootstrap.row_gnmiz0$;
  var get_classes = $module$domx.domx.get_classes_ejp6nk$;
  var styles = $module$domx.styles;
  var formGroup = $module$bootstrap.bootstrap.formGroup_ejp6nk$;
  var label = $module$domx.domx.label_faa409$;
  var formControl = $module$bootstrap.bootstrap.formControl_ejp6nk$;
  var rxInput = $module$domx.domx.rxInput_oyq3so$;
  var input = $module$domx.domx.input_xh1a31$;
  var rxInput_0 = $module$domx.domx.rxInput_his5zs$;
  var textarea = $module$domx.domx.textarea_vbubjb$;
  var column = $module$bootstrap.bootstrap.column_gnmiz0$;
  var flexColumn = $module$bootstrap.bootstrap.flexColumn_ejp6nk$;
  var flexRow = $module$bootstrap.bootstrap.flexRow_ejp6nk$;
  var RootPanel = $module$commonfb.commonfb.RootPanel;
  var ListenableMutableList = $module$common.common.ListenableMutableList;
  var span = $module$domx.domx.span_c7xqcp$;
  var listAction = $module$bootstrap.bootstrap.listAction_6t02fy$;
  var listenableList = $module$domx.domx.listenableList_fgftfw$;
  var listGroup = $module$bootstrap.bootstrap.listGroup_t7sdcm$;
  var setToRoot = $module$commonfb.commonfb.setToRoot_kkdnud$;
  var docItems = $module$firebase.firebase.firestore.docItems_uc6rg3$;
  var CommonApp = $module$commonfb.commonui.CommonApp;
  var commandButton = $module$bootstrap.bootstrap.commandButton_t3i1hh$;
  Ideas.prototype = Object.create(CommonApp.prototype);
  Ideas.prototype.constructor = Ideas;
  function IdeaData(title, text) {
    if (title === void 0)
      title = '';
    if (text === void 0)
      text = '';
    this.title = title;
    this.text = text;
  }
  IdeaData.prototype.toIdea = function () {
    var $receiver = obj();
    $receiver.title = this.title;
    $receiver.text = this.text;
    return $receiver;
  };
  IdeaData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdeaData',
    interfaces: []
  };
  function IdeaData_init(idea, $this) {
    $this = $this || Object.create(IdeaData.prototype);
    IdeaData.call($this, idea.title, idea.text);
    return $this;
  }
  IdeaData.prototype.component1 = function () {
    return this.title;
  };
  IdeaData.prototype.component2 = function () {
    return this.text;
  };
  IdeaData.prototype.copy_puj7f4$ = function (title, text) {
    return new IdeaData(title === void 0 ? this.title : title, text === void 0 ? this.text : text);
  };
  IdeaData.prototype.toString = function () {
    return 'IdeaData(title=' + Kotlin.toString(this.title) + (', text=' + Kotlin.toString(this.text)) + ')';
  };
  IdeaData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  IdeaData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.text, other.text)))));
  };
  function editIdea$lambda(this$editIdea) {
    return function () {
      this$editIdea.main();
      return Unit;
    };
  }
  function editIdea$lambda_0(closure$title, closure$text) {
    return function () {
      return new IdeaData(closure$title.invoke(), closure$text.invoke());
    };
  }
  function editIdea$lambda_1(closure$editingData, closure$savedData) {
    return function () {
      return equals(closure$editingData.invoke(), closure$savedData.invoke());
    };
  }
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function editIdea$lambda_2(closure$isSaved, closure$isSaving, closure$editingData) {
    return function () {
      var tmp$ = !closure$isSaved.invoke() && !closure$isSaving.invoke();
      if (tmp$) {
        tmp$ = !isBlank(closure$editingData.invoke().title);
      }
      return tmp$;
    };
  }
  function editIdea$lambda_3(closure$savedData, closure$isSaving) {
    return function () {
      return closure$savedData.invoke() != null && !closure$isSaving.invoke();
    };
  }
  function editIdea$setupSavedState$lambda$lambda(closure$toSave, closure$savedData) {
    return function (it) {
      closure$savedData.now = closure$toSave;
      return Unit;
    };
  }
  function editIdea$setupSavedState$lambda(closure$ref, closure$toSave, closure$savedData) {
    return function () {
      return closure$ref.set(closure$toSave.toIdea()).then(editIdea$setupSavedState$lambda$lambda(closure$toSave, closure$savedData));
    };
  }
  function editIdea$setupSavedState$lambda_0(closure$ref) {
    return function () {
      return closure$ref.delete();
    };
  }
  function editIdea$setupSavedState(this$editIdea, closure$editingData, closure$savedData, closure$savePromise, closure$deletePromise) {
    return function (id) {
      var ref = this$editIdea.userIdeasRef.doc(id);
      var toSave = closure$editingData.now;
      closure$savePromise.v = editIdea$setupSavedState$lambda(ref, toSave, closure$savedData);
      closure$deletePromise.v = editIdea$setupSavedState$lambda_0(ref);
    };
  }
  function editIdea$save$lambda(closure$isSaving) {
    return function (it) {
      closure$isSaving.now = false;
      return Unit;
    };
  }
  function editIdea$save(closure$canSave, closure$isSaving, closure$savePromise) {
    return function () {
      if (closure$canSave.now) {
        closure$isSaving.now = true;
        closure$savePromise.v().then(editIdea$save$lambda(closure$isSaving));
      }
    };
  }
  function editIdea$saveNew$lambda$lambda(closure$savedData) {
    return function (d) {
      if (d.exists) {
        var $receiver = d.data();
        closure$savedData.now = IdeaData_init($receiver);
      }
       else {
        closure$savedData.now = null;
      }
      return Unit;
    };
  }
  function editIdea$saveNew$lambda(closure$toSave, closure$savedData, closure$killables, closure$setupSavedState) {
    return function (docRef) {
      closure$savedData.now = closure$toSave;
      closure$killables.plusAssign_o14v8n$(docRef.onSnapshot(editIdea$saveNew$lambda$lambda(closure$savedData)));
      closure$setupSavedState(docRef.id);
      return Unit;
    };
  }
  function editIdea$saveNew(closure$editingData, this$editIdea, closure$savedData, closure$killables, closure$setupSavedState) {
    return function () {
      var toSave = closure$editingData.now;
      return this$editIdea.userIdeasRef.add(toSave.toIdea()).then(editIdea$saveNew$lambda(toSave, closure$savedData, closure$killables, closure$setupSavedState));
    };
  }
  function editIdea$lambda_4(closure$saveNew) {
    return function () {
      return closure$saveNew();
    };
  }
  function editIdea$lambda_5(closure$savedData) {
    return function (it) {
      closure$savedData.now = toIdeaData(it);
      return Unit;
    };
  }
  function editIdea$back(closure$killables, closure$onBack) {
    return function () {
      closure$killables.kill();
      closure$onBack();
    };
  }
  function editIdea$delete$lambda(closure$isSaving, closure$back) {
    return function (it) {
      closure$isSaving.now = false;
      closure$back();
      return Unit;
    };
  }
  function editIdea$delete(closure$isSaving, closure$deletePromise, closure$back) {
    return function () {
      closure$isSaving.now = true;
      closure$deletePromise.v().then(editIdea$delete$lambda(closure$isSaving, closure$back));
    };
  }
  function editIdea$lambda$lambda$lambda$lambda(closure$isSaved) {
    return function () {
      return closure$isSaved.invoke() ? 'Close' : 'Cancel';
    };
  }
  function editIdea$lambda$lambda$lambda$lambda_0(closure$back) {
    return function (it) {
      closure$back();
      return Unit;
    };
  }
  function editIdea$lambda$lambda$lambda(closure$isSaved, closure$back) {
    return function ($receiver) {
      flexFixedSize($receiver);
      btnSecondary($receiver);
      rxText($receiver, editIdea$lambda$lambda$lambda$lambda(closure$isSaved));
      clickEvent($receiver, editIdea$lambda$lambda$lambda$lambda_0(closure$back));
      return Unit;
    };
  }
  function editIdea$lambda$lambda$lambda_0($receiver) {
    flexGrow1($receiver);
    return Unit;
  }
  function editIdea$lambda$lambda$lambda_1(closure$isSaving) {
    return function ($receiver) {
      rxDisplay($receiver, closure$isSaving);
      flexCenter($receiver);
      padding2($receiver);
      spinner($receiver);
      return Unit;
    };
  }
  function editIdea$lambda$lambda$lambda$lambda$lambda(closure$isSaving, closure$isSaved) {
    return function () {
      if (closure$isSaving.invoke())
        return 'Saving...';
      else if (closure$isSaved.invoke())
        return 'Saved';
      else
        return 'Save';
    };
  }
  function editIdea$lambda$lambda$lambda$lambda$lambda_0(closure$save) {
    return function (it) {
      closure$save();
      return Unit;
    };
  }
  function editIdea$lambda$lambda$lambda$lambda_1(closure$isSaving, closure$isSaved, closure$canSave, closure$save) {
    return function ($receiver) {
      btnPrimary($receiver);
      rxText($receiver, editIdea$lambda$lambda$lambda$lambda$lambda(closure$isSaving, closure$isSaved));
      rxEnabled($receiver, closure$canSave);
      clickEvent($receiver, editIdea$lambda$lambda$lambda$lambda$lambda_0(closure$save));
      return Unit;
    };
  }
  function editIdea$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    btnPrimary($receiver);
    return Unit;
  }
  function editIdea$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$delete) {
    return function (it) {
      closure$delete();
      return Unit;
    };
  }
  function editIdea$lambda$lambda$lambda$lambda$lambda$lambda(closure$canDelete, closure$delete) {
    return function ($receiver) {
      $receiver.innerText = 'Delete';
      rxAnchorClick($receiver, closure$canDelete, editIdea$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$delete));
      return Unit;
    };
  }
  function editIdea$lambda$lambda$lambda$lambda$lambda_2(closure$canDelete, closure$delete) {
    return function ($receiver) {
      dropdownMenu($receiver);
      dropdownItemAnchor($receiver, editIdea$lambda$lambda$lambda$lambda$lambda$lambda(closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function editIdea$lambda$lambda$lambda$lambda_2(closure$canDelete, closure$delete) {
    return function ($receiver) {
      btnGroup($receiver);
      dropdownToggleButton($receiver, editIdea$lambda$lambda$lambda$lambda$lambda_1);
      div($receiver, editIdea$lambda$lambda$lambda$lambda$lambda_2(closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function editIdea$lambda$lambda$lambda_2(closure$isSaving, closure$isSaved, closure$canSave, closure$save, closure$canDelete, closure$delete) {
    return function ($receiver) {
      flexFixedSize($receiver);
      btnGroup($receiver);
      btnButton($receiver, editIdea$lambda$lambda$lambda$lambda_1(closure$isSaving, closure$isSaved, closure$canSave, closure$save));
      div($receiver, editIdea$lambda$lambda$lambda$lambda_2(closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function editIdea$lambda$lambda(closure$isSaved, closure$back, closure$isSaving, closure$canSave, closure$save, closure$canDelete, closure$delete) {
    return function ($receiver) {
      flexFixedSize($receiver);
      padding2($receiver);
      borderBottom($receiver);
      bgLigth($receiver);
      btnButton($receiver, editIdea$lambda$lambda$lambda(closure$isSaved, closure$back));
      div($receiver, editIdea$lambda$lambda$lambda_0);
      div($receiver, editIdea$lambda$lambda$lambda_1(closure$isSaving));
      div($receiver, editIdea$lambda$lambda$lambda_2(closure$isSaving, closure$isSaved, closure$canSave, closure$save, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function editIdea$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.innerText = 'Title';
    return Unit;
  }
  function editIdea$lambda$lambda$lambda$lambda_4(closure$title) {
    return function ($receiver) {
      $receiver.type = 'text';
      $receiver.value = closure$title.now;
      formControl($receiver);
      rxInput($receiver, closure$title);
      return Unit;
    };
  }
  function editIdea$lambda$lambda$lambda_3(closure$title) {
    return function ($receiver) {
      formGroup($receiver);
      flexFixedSize($receiver);
      label($receiver, editIdea$lambda$lambda$lambda$lambda_3);
      input($receiver, editIdea$lambda$lambda$lambda$lambda_4(closure$title));
      return Unit;
    };
  }
  function editIdea$lambda$lambda$lambda_4($receiver) {
    flexFixedSize($receiver);
    $receiver.innerText = 'Text';
    return Unit;
  }
  function editIdea$lambda$lambda$lambda_5(closure$text) {
    return function ($receiver) {
      flexGrow1($receiver);
      formControl($receiver);
      $receiver.value = closure$text.now;
      rxInput_0($receiver, closure$text);
      return Unit;
    };
  }
  function editIdea$lambda$lambda_0(closure$title, closure$text) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$(styles.scrollVertical);
      flexGrow1($receiver);
      padding2($receiver);
      div($receiver, editIdea$lambda$lambda$lambda_3(closure$title));
      label($receiver, editIdea$lambda$lambda$lambda_4);
      textarea($receiver, editIdea$lambda$lambda$lambda_5(closure$text));
      return Unit;
    };
  }
  function editIdea$lambda_6(closure$isSaved, closure$back, closure$isSaving, closure$canSave, closure$save, closure$canDelete, closure$delete, closure$title, closure$text) {
    return function ($receiver) {
      row($receiver, editIdea$lambda$lambda(closure$isSaved, closure$back, closure$isSaving, closure$canSave, closure$save, closure$canDelete, closure$delete));
      column($receiver, editIdea$lambda$lambda_0(closure$title, closure$text));
      return Unit;
    };
  }
  function editIdea($receiver, item, onBack) {
    if (item === void 0)
      item = null;
    if (onBack === void 0)
      onBack = editIdea$lambda($receiver);
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var savedData = new Var(item != null ? toIdeaData(item.data.now) : null);
    var title = new Var((tmp$_0 = (tmp$ = savedData.now) != null ? tmp$.title : null) != null ? tmp$_0 : '');
    var text = new Var((tmp$_2 = (tmp$_1 = savedData.now) != null ? tmp$_1.text : null) != null ? tmp$_2 : '');
    var isSaving = new Var(false);
    var editingData = Rx_init(editIdea$lambda_0(title, text));
    var isSaved = Rx_init(editIdea$lambda_1(editingData, savedData));
    var canSave = Rx_init(editIdea$lambda_2(isSaved, isSaving, editingData));
    var canDelete = Rx_init(editIdea$lambda_3(savedData, isSaving));
    var killables = new Killables();
    var savePromise = {v: null};
    var deletePromise = {v: null};
    var setupSavedState = editIdea$setupSavedState($receiver, editingData, savedData, savePromise, deletePromise);
    var save = editIdea$save(canSave, isSaving, savePromise);
    var saveNew = editIdea$saveNew(editingData, $receiver, savedData, killables, setupSavedState);
    if (item == null) {
      savePromise.v = editIdea$lambda_4(saveNew);
    }
     else {
      killables.plusAssign_wii6vi$(item.data.forEach_qlkmfe$(editIdea$lambda_5(savedData)));
      setupSavedState(item.id);
    }
    var back = editIdea$back(killables, onBack);
    var delete_0 = editIdea$delete(isSaving, deletePromise, back);
    $receiver.base.newRoot(editIdea$lambda_6(isSaved, back, isSaving, canSave, save, canDelete, delete_0, title, text));
  }
  function listIdeas$lambda$displayList(this$listIdeas, this$) {
    return function () {
      this$listIdeas.base.root.setRoot_b3w3xb$(this$);
    };
  }
  function listIdeas$lambda$lambda$lambda$lambda(closure$killables, this$listIdeas) {
    return function (it) {
      closure$killables.kill();
      this$listIdeas.main();
      return Unit;
    };
  }
  function listIdeas$lambda$lambda$lambda(closure$killables, this$listIdeas) {
    return function ($receiver) {
      flexFixedSize($receiver);
      btnSecondary($receiver);
      $receiver.innerText = 'Back';
      clickEvent($receiver, listIdeas$lambda$lambda$lambda$lambda(closure$killables, this$listIdeas));
      return Unit;
    };
  }
  function listIdeas$lambda$lambda$lambda_0($receiver) {
    flexGrow1($receiver);
    return Unit;
  }
  function listIdeas$lambda$lambda$lambda_1(closure$isBusy) {
    return function ($receiver) {
      rxDisplay($receiver, closure$isBusy);
      flexCenter($receiver);
      padding2($receiver);
      spinner($receiver);
      return Unit;
    };
  }
  function listIdeas$lambda$lambda$lambda$lambda$lambda(closure$displayList) {
    return function () {
      closure$displayList();
      return Unit;
    };
  }
  function listIdeas$lambda$lambda$lambda$lambda_0(closure$displayList, this$listIdeas) {
    return function (it) {
      editIdea(this$listIdeas, void 0, listIdeas$lambda$lambda$lambda$lambda$lambda(closure$displayList));
      return Unit;
    };
  }
  function listIdeas$lambda$lambda$lambda_2(closure$displayList, this$listIdeas) {
    return function ($receiver) {
      flexFixedSize($receiver);
      btnPrimary($receiver);
      $receiver.innerText = 'New';
      clickEvent($receiver, listIdeas$lambda$lambda$lambda$lambda_0(closure$displayList, this$listIdeas));
      return Unit;
    };
  }
  function listIdeas$lambda$lambda(closure$killables, this$listIdeas, closure$isBusy, closure$displayList) {
    return function ($receiver) {
      flexFixedSize($receiver);
      flexRow($receiver);
      padding2($receiver);
      borderBottom($receiver);
      bgLigth($receiver);
      btnButton($receiver, listIdeas$lambda$lambda$lambda(closure$killables, this$listIdeas));
      div($receiver, listIdeas$lambda$lambda$lambda_0);
      div($receiver, listIdeas$lambda$lambda$lambda_1(closure$isBusy));
      btnButton($receiver, listIdeas$lambda$lambda$lambda_2(closure$displayList, this$listIdeas));
      return Unit;
    };
  }
  function listIdeas$lambda$lambda_0($receiver) {
    flexGrow1($receiver);
    padding2($receiver);
    return Unit;
  }
  function listIdeas$lambda$lambda$lambda_3($receiver) {
    flexGrow1($receiver);
    return Unit;
  }
  function listIdeas$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.innerText = 'The list is empty';
    return Unit;
  }
  function listIdeas$lambda$lambda$lambda_4($receiver) {
    flexCenter($receiver);
    flexGrow1($receiver);
    span($receiver, listIdeas$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function listIdeas$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$item) {
    return function () {
      return closure$item.data.invoke().title;
    };
  }
  function listIdeas$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$displayList) {
    return function () {
      closure$displayList();
      return Unit;
    };
  }
  function listIdeas$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$item, closure$displayList, this$listIdeas) {
    return function (it) {
      editIdea(this$listIdeas, closure$item, listIdeas$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$displayList));
      return Unit;
    };
  }
  function listIdeas$lambda$lambda$lambda$lambda$lambda$lambda(closure$item, closure$displayList, this$listIdeas) {
    return function ($receiver) {
      rxText($receiver, listIdeas$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$item));
      clickEvent($receiver, listIdeas$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$item, closure$displayList, this$listIdeas));
      return Unit;
    };
  }
  function listIdeas$lambda$lambda$lambda$lambda$lambda_0(closure$displayList, this$listIdeas) {
    return function (item) {
      return listAction(document, listIdeas$lambda$lambda$lambda$lambda$lambda$lambda(item, closure$displayList, this$listIdeas));
    };
  }
  function listIdeas$lambda$lambda$lambda$lambda_2(closure$list, closure$displayList, this$listIdeas) {
    return function ($receiver) {
      listenableList($receiver, closure$list, listIdeas$lambda$lambda$lambda$lambda$lambda_0(closure$displayList, this$listIdeas));
      return Unit;
    };
  }
  function listIdeas$lambda$lambda$lambda_5(closure$list, closure$displayList, this$listIdeas) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$(styles.scrollVertical);
      flexGrow1($receiver);
      listGroup($receiver, listIdeas$lambda$lambda$lambda$lambda_2(closure$list, closure$displayList, this$listIdeas));
      return Unit;
    };
  }
  function listIdeas$lambda$lambda$lambda_6(closure$listOrEmptyRoot, closure$emptyDiv, closure$listDiv) {
    return function (empty) {
      closure$listOrEmptyRoot.setRoot_b3w3xb$(empty ? closure$emptyDiv : closure$listDiv);
      return Unit;
    };
  }
  function listIdeas$lambda$lambda_1(closure$list, closure$displayList, this$listIdeas) {
    return function ($receiver) {
      flexGrow1($receiver);
      var listOrEmptyRoot = new RootPanel(column($receiver, listIdeas$lambda$lambda$lambda_3));
      var emptyDiv = column(document, listIdeas$lambda$lambda$lambda_4);
      var listDiv = column(document, listIdeas$lambda$lambda$lambda_5(closure$list, closure$displayList, this$listIdeas));
      closure$list.isEmptyRx.forEach_qlkmfe$(listIdeas$lambda$lambda$lambda_6(listOrEmptyRoot, emptyDiv, listDiv));
      return Unit;
    };
  }
  function listIdeas$lambda$lambda_2(closure$listOrEmptyDiv, closure$listOrHourglassRoot) {
    return function () {
      setToRoot(closure$listOrEmptyDiv, closure$listOrHourglassRoot);
      return Unit;
    };
  }
  function listIdeas$lambda(this$listIdeas, closure$killables, closure$isBusy) {
    return function ($receiver) {
      var displayList = listIdeas$lambda$displayList(this$listIdeas, $receiver);
      flexColumn($receiver);
      div($receiver, listIdeas$lambda$lambda(closure$killables, this$listIdeas, closure$isBusy, displayList));
      var listOrHourglassRoot = new RootPanel(column($receiver, listIdeas$lambda$lambda_0));
      listOrHourglassRoot.setHourglass();
      var list = new ListenableMutableList();
      var listOrEmptyDiv = column(document, listIdeas$lambda$lambda_1(list, displayList, this$listIdeas));
      closure$killables.plusAssign_o14v8n$(docItems(this$listIdeas.userIdeasRef, list, void 0, listIdeas$lambda$lambda_2(listOrEmptyDiv, listOrHourglassRoot)));
      return Unit;
    };
  }
  function listIdeas($receiver) {
    var isBusy = new Var(false);
    var killables = new Killables();
    $receiver.base.newRoot(listIdeas$lambda($receiver, killables, isBusy));
  }
  function main(args) {
    (new Ideas()).start();
  }
  function Ideas() {
    CommonApp.call(this, 'ideas');
    this.usersRef = this.baseRef.collection('users');
  }
  Ideas.prototype.loggedIn_v1eir6$ = function (user) {
    (new LoggedIn(this, user)).main();
  };
  Ideas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ideas',
    interfaces: [CommonApp]
  };
  function toIdeaData($receiver) {
    return IdeaData_init($receiver);
  }
  function LoggedIn(base, user) {
    this.base = base;
    this.user = user;
    this.userRef = this.base.usersRef.doc(this.user.uid);
    this.userIdeasRef = this.userRef.collection('ideas');
  }
  function LoggedIn$main$lambda$lambda$lambda(this$LoggedIn) {
    return function () {
      editIdea(this$LoggedIn);
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda_0(this$LoggedIn) {
    return function () {
      listIdeas(this$LoggedIn);
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda_1(this$LoggedIn) {
    return function () {
      ideaGraph(this$LoggedIn);
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda$lambda_2(this$LoggedIn) {
    return function () {
      this$LoggedIn.base.signOut();
      return Unit;
    };
  }
  function LoggedIn$main$lambda$lambda(this$LoggedIn) {
    return function ($receiver) {
      padding2($receiver);
      commandButton($receiver, 'New Idea', LoggedIn$main$lambda$lambda$lambda(this$LoggedIn));
      commandButton($receiver, 'List Ideas', LoggedIn$main$lambda$lambda$lambda_0(this$LoggedIn));
      commandButton($receiver, 'Idea Graph', LoggedIn$main$lambda$lambda$lambda_1(this$LoggedIn));
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
  LoggedIn.prototype.main = function () {
    this.base.newRoot(LoggedIn$main$lambda(this));
  };
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: []
  };
  function ideaGraph($receiver) {
  }
  var package$ideas = _.ideas || (_.ideas = {});
  package$ideas.IdeaData_init_5ve9hz$ = IdeaData_init;
  package$ideas.IdeaData = IdeaData;
  package$ideas.editIdea_j281pg$ = editIdea;
  package$ideas.listIdeas_4t9h7u$ = listIdeas;
  package$ideas.main_kand9s$ = main;
  package$ideas.Ideas = Ideas;
  package$ideas.toIdeaData_v21zhi$ = toIdeaData;
  package$ideas.LoggedIn = LoggedIn;
  package$ideas.ideaGraph_4t9h7u$ = ideaGraph;
  main([]);
  Kotlin.defineModule('ideas', _);
  return _;
}(typeof ideas === 'undefined' ? {} : ideas, kotlin, common, bootstrap, domx, fontawesome, commonfb, firebase);

//# sourceMappingURL=ideas.js.map

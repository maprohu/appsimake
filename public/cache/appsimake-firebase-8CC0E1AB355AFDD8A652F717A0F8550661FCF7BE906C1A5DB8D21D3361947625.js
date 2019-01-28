if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['appsimake-firebaseshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'appsimake-firebaseshr' was not found. Please, check whether 'appsimake-firebaseshr' is loaded prior to 'appsimake-firebase'.");
}
this['appsimake-firebase'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_common, $module$kotlinx_coroutines_core, $module$appsimake_firebaseshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var firestore = firebase.firestore;
  var Unit = Kotlin.kotlin.Unit;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var insertAt = $module$appsimake_common.common.insertAt_tevjyx$;
  var removeAt = $module$appsimake_common.common.removeAt_poj3bi$;
  var replaceAt = $module$appsimake_common.common.replaceAt_l17iyt$;
  var ListenableMutableList = $module$appsimake_common.common.ListenableMutableList;
  var Var = $module$appsimake_commonshr.rx.Var;
  var Killable = $module$appsimake_commonshr.killable.Killable;
  var SetDiff = $module$appsimake_commonshr.commonshr.SetDiff;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var asPromise = $module$kotlinx_coroutines_core.kotlinx.coroutines.asPromise_ge6odz$;
  var asDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.asDeferred_t11jrl$;
  var Try = $module$appsimake_commonshr.common.Try;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var FieldValue$Companion = firebase.firestore.FieldValue;
  var PropOps = $module$appsimake_firebaseshr.firebaseshr.PropOps;
  var initBinder = $module$appsimake_firebaseshr.firebaseshr.initBinder_frfi3t$;
  var common = $module$appsimake_commonshr.common;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var plus_0 = Kotlin.kotlin.collections.plus_e8164j$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var ListenableList$Listener = $module$appsimake_common.common.ListenableList.Listener;
  var map = $module$appsimake_commonshr.common.map_x7fpzi$;
  var GoogleAuthProvider$Companion = firebase.auth.GoogleAuthProvider;
  var EmailAuthProvider$Companion = firebase.auth.EmailAuthProvider;
  var AnonymousAuthProvider$Companion = firebaseui.auth.AnonymousAuthProvider;
  var AuthUI = firebaseui.auth.AuthUI;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  DocumentChangeType.prototype = Object.create(Enum.prototype);
  DocumentChangeType.prototype.constructor = DocumentChangeType;
  RollbackException.prototype = Object.create(Exception.prototype);
  RollbackException.prototype.constructor = RollbackException;
  function firestore_0($receiver) {
    return firestore($receiver);
  }
  function AppOptions() {
    return {};
  }
  function setOptionsMerge() {
    var $receiver = {};
    $receiver.merge = true;
    return $receiver;
  }
  function Settings() {
    return {};
  }
  function DocumentChangeType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DocumentChangeType_initFields() {
    DocumentChangeType_initFields = function () {
    };
    DocumentChangeType$added_instance = new DocumentChangeType('added', 0);
    DocumentChangeType$modified_instance = new DocumentChangeType('modified', 1);
    DocumentChangeType$removed_instance = new DocumentChangeType('removed', 2);
  }
  var DocumentChangeType$added_instance;
  function DocumentChangeType$added_getInstance() {
    DocumentChangeType_initFields();
    return DocumentChangeType$added_instance;
  }
  var DocumentChangeType$modified_instance;
  function DocumentChangeType$modified_getInstance() {
    DocumentChangeType_initFields();
    return DocumentChangeType$modified_instance;
  }
  var DocumentChangeType$removed_instance;
  function DocumentChangeType$removed_getInstance() {
    DocumentChangeType_initFields();
    return DocumentChangeType$removed_instance;
  }
  DocumentChangeType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DocumentChangeType',
    interfaces: [Enum]
  };
  function DocumentChangeType$values() {
    return [DocumentChangeType$added_getInstance(), DocumentChangeType$modified_getInstance(), DocumentChangeType$removed_getInstance()];
  }
  DocumentChangeType.values = DocumentChangeType$values;
  function DocumentChangeType$valueOf(name) {
    switch (name) {
      case 'added':
        return DocumentChangeType$added_getInstance();
      case 'modified':
        return DocumentChangeType$modified_getInstance();
      case 'removed':
        return DocumentChangeType$removed_getInstance();
      default:throwISE('No enum constant firebase.firestore.DocumentChangeType.' + name);
    }
  }
  DocumentChangeType.valueOf_61zpoe$ = DocumentChangeType$valueOf;
  function get_typeEnum($receiver) {
    return DocumentChangeType$valueOf($receiver.type);
  }
  function queryUi$lambda(closure$callback, closure$element, closure$item) {
    return function (qs) {
      var tmp$;
      (tmp$ = closure$callback != null ? closure$callback.onNext : null) != null ? tmp$(qs) : null;
      var $receiver = qs.docChanges();
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var element = $receiver[tmp$_0];
        var closure$element_0 = closure$element;
        var closure$item_0 = closure$item;
        switch (get_typeEnum(element).name) {
          case 'added':
            insertAt(closure$element_0, element.newIndex, closure$item_0(element.doc.data()));
            break;
          case 'removed':
            removeAt(closure$element_0, element.oldIndex);
            break;
          case 'modified':
            var ie = closure$item_0(element.doc.data());
            if (element.newIndex === element.oldIndex)
              replaceAt(closure$element_0, element.oldIndex, ie);
            else {
              removeAt(closure$element_0, element.oldIndex);
              insertAt(closure$element_0, element.newIndex, ie);
            }

            break;
          default:Kotlin.noWhenBranchMatched();
            break;
        }
      }
      return Unit;
    };
  }
  function queryUi$lambda_0(closure$callback) {
    return function (error) {
      var tmp$;
      (tmp$ = closure$callback != null ? closure$callback.onError : null) != null ? tmp$(error) : null;
      console.dir(error);
      return Unit;
    };
  }
  function queryUi(query, element, callback, item) {
    if (callback === void 0)
      callback = null;
    return query.onSnapshot(queryUi$lambda(callback, element, item), queryUi$lambda_0(callback));
  }
  function OnSnapshot(onNext, onError) {
    this.onNext = onNext;
    this.onError = onError;
  }
  OnSnapshot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnSnapshot',
    interfaces: []
  };
  function OnSnapshot_init(onNext, $this) {
    $this = $this || Object.create(OnSnapshot.prototype);
    OnSnapshot.call($this, onNext, OnSnapshot_init$lambda);
    return $this;
  }
  OnSnapshot.prototype.component1 = function () {
    return this.onNext;
  };
  OnSnapshot.prototype.component2 = function () {
    return this.onError;
  };
  OnSnapshot.prototype.copy_1gcwyk$ = function (onNext, onError) {
    return new OnSnapshot(onNext === void 0 ? this.onNext : onNext, onError === void 0 ? this.onError : onError);
  };
  OnSnapshot.prototype.toString = function () {
    return 'OnSnapshot(onNext=' + Kotlin.toString(this.onNext) + (', onError=' + Kotlin.toString(this.onError)) + ')';
  };
  OnSnapshot.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.onNext) | 0;
    result = result * 31 + Kotlin.hashCode(this.onError) | 0;
    return result;
  };
  OnSnapshot.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.onNext, other.onNext) && Kotlin.equals(this.onError, other.onError)))));
  };
  function OnSnapshot_init$lambda(it) {
    return Unit;
  }
  function listen$lambda() {
    return Unit;
  }
  function listen$lambda_0(it) {
    console.dir(it);
    return Unit;
  }
  function listen$lambda_1(closure$first, closure$onFirst, closure$list) {
    return function (qs) {
      if (closure$first.v) {
        closure$first.v = false;
        closure$onFirst();
      }
      var $receiver = qs.docChanges();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var closure$list_0 = closure$list;
        switch (get_typeEnum(element).name) {
          case 'added':
            closure$list_0.add_wxm5ur$(element.newIndex, new Var(element.doc.data()));
            break;
          case 'removed':
            closure$list_0.removeAt_za3lpa$(element.oldIndex);
            break;
          case 'modified':
            closure$list_0.get_za3lpa$(element.oldIndex).now = element.doc.data();
            if (element.newIndex !== element.oldIndex) {
              closure$list_0.move_vux9f0$(element.oldIndex, element.newIndex);
            }

            break;
          default:Kotlin.noWhenBranchMatched();
            break;
        }
      }
      return Unit;
    };
  }
  function listen($receiver, killables, onFirst, onError) {
    if (onFirst === void 0)
      onFirst = listen$lambda;
    if (onError === void 0)
      onError = listen$lambda_0;
    var first = {v: true};
    var list = new ListenableMutableList();
    killables.plusAssign_o14v8n$($receiver.query.onSnapshot(listen$lambda_1(first, onFirst, list), onError));
    return list;
  }
  function withDefaultSettings($receiver) {
    $receiver.settings(Settings());
    return $receiver;
  }
  function onSnapshotNext$lambda(it) {
    console.dir(it);
    return Unit;
  }
  function onSnapshotNext($receiver, onNext) {
    var it = $receiver.onSnapshot(onNext, onSnapshotNext$lambda);
    return Killable.Companion.once_o14v8n$(it);
  }
  function idDiffs$lambda(closure$fn) {
    return function (qs) {
      var $receiver = qs.docChanges();
      var tmp$;
      var accumulator = new SetDiff();
      loop_label: for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var d = accumulator;
        var operation$result;
        operation$break: do {
          switch (get_typeEnum(element).name) {
            case 'added':
              operation$result = d.copy_zfdv1o$(void 0, plus(d.added, element.doc.id));
              break operation$break;
            case 'removed':
              operation$result = d.copy_zfdv1o$(plus(d.removed, element.doc.id));
              break operation$break;
            default:operation$result = d;
              break operation$break;
          }
        }
         while (false);
        accumulator = operation$result;
      }
      var $receiver_0 = accumulator;
      closure$fn($receiver_0);
      return Unit;
    };
  }
  function idDiffs($receiver, fn) {
    return onSnapshotNext($receiver, idDiffs$lambda(fn));
  }
  function ListenConfig(list, create, update, remove, onFirst, onError) {
    ListenConfig$Companion_getInstance();
    if (onFirst === void 0)
      onFirst = ListenConfig_init$lambda;
    if (onError === void 0)
      onError = ListenConfig_init$lambda_0;
    this.list = list;
    this.create = create;
    this.update = update;
    this.remove = remove;
    this.onFirst = onFirst;
    this.onError = onError;
  }
  function ListenConfig$Companion() {
    ListenConfig$Companion_instance = this;
  }
  function ListenConfig$Companion$hasProps$lambda(closure$create, closure$collectionWrap) {
    return function (id, d) {
      var $receiver = closure$create();
      var closure$collectionWrap_0 = closure$collectionWrap;
      var $receiver_0 = $receiver.props;
      $receiver_0.collection = closure$collectionWrap_0;
      $receiver_0.persistedFB_61zpoe$(id);
      $receiver_0.extractInitial_za3rmp$(d);
      $receiver_0.live.now = true;
      return $receiver;
    };
  }
  function ListenConfig$Companion$hasProps$lambda_0($receiver, d) {
    $receiver.props.extractInitial_za3rmp$(d);
    return Unit;
  }
  function ListenConfig$Companion$hasProps$lambda_1(t) {
    t.props.live.now = false;
    return Unit;
  }
  ListenConfig$Companion.prototype.hasProps_4r7uln$ = function (list, collectionWrap, create) {
    return new ListenConfig(list, ListenConfig$Companion$hasProps$lambda(create, collectionWrap), ListenConfig$Companion$hasProps$lambda_0, ListenConfig$Companion$hasProps$lambda_1);
  };
  ListenConfig$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ListenConfig$Companion_instance = null;
  function ListenConfig$Companion_getInstance() {
    if (ListenConfig$Companion_instance === null) {
      new ListenConfig$Companion();
    }
    return ListenConfig$Companion_instance;
  }
  function ListenConfig_init$lambda() {
    return Unit;
  }
  function ListenConfig_init$lambda_0(it) {
    console.dir(it);
    return Unit;
  }
  ListenConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListenConfig',
    interfaces: []
  };
  ListenConfig.prototype.component1 = function () {
    return this.list;
  };
  ListenConfig.prototype.component2 = function () {
    return this.create;
  };
  ListenConfig.prototype.component3 = function () {
    return this.update;
  };
  ListenConfig.prototype.component4 = function () {
    return this.remove;
  };
  ListenConfig.prototype.component5 = function () {
    return this.onFirst;
  };
  ListenConfig.prototype.component6 = function () {
    return this.onError;
  };
  ListenConfig.prototype.copy_4cbyqc$ = function (list, create, update, remove, onFirst, onError) {
    return new ListenConfig(list === void 0 ? this.list : list, create === void 0 ? this.create : create, update === void 0 ? this.update : update, remove === void 0 ? this.remove : remove, onFirst === void 0 ? this.onFirst : onFirst, onError === void 0 ? this.onError : onError);
  };
  ListenConfig.prototype.toString = function () {
    return 'ListenConfig(list=' + Kotlin.toString(this.list) + (', create=' + Kotlin.toString(this.create)) + (', update=' + Kotlin.toString(this.update)) + (', remove=' + Kotlin.toString(this.remove)) + (', onFirst=' + Kotlin.toString(this.onFirst)) + (', onError=' + Kotlin.toString(this.onError)) + ')';
  };
  ListenConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.list) | 0;
    result = result * 31 + Kotlin.hashCode(this.create) | 0;
    result = result * 31 + Kotlin.hashCode(this.update) | 0;
    result = result * 31 + Kotlin.hashCode(this.remove) | 0;
    result = result * 31 + Kotlin.hashCode(this.onFirst) | 0;
    result = result * 31 + Kotlin.hashCode(this.onError) | 0;
    return result;
  };
  ListenConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.list, other.list) && Kotlin.equals(this.create, other.create) && Kotlin.equals(this.update, other.update) && Kotlin.equals(this.remove, other.remove) && Kotlin.equals(this.onFirst, other.onFirst) && Kotlin.equals(this.onError, other.onError)))));
  };
  function listen_0($receiver, killables, config) {
    listen_1($receiver.query, killables, config);
  }
  function listen$lambda$lambda(this$) {
    return function (qs) {
      var $receiver = qs.docChanges();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var this$_0 = this$;
        switch (get_typeEnum(element).name) {
          case 'added':
            this$_0.list.add_wxm5ur$(element.newIndex, this$_0.create(element.doc.id, element.doc.data()));
            break;
          case 'removed':
            this$_0.remove(this$_0.list.removeAt_za3lpa$(element.oldIndex));
            break;
          case 'modified':
            this$_0.update(this$_0.list.get_za3lpa$(element.oldIndex), element.doc.data());
            if (element.newIndex !== element.oldIndex) {
              this$_0.list.move_vux9f0$(element.oldIndex, element.newIndex);
            }

            break;
        }
      }
      return Unit;
    };
  }
  function listen$lambda$lambda_0(this$, closure$onEach, closure$onNext) {
    return function (it) {
      this$.onFirst();
      closure$onNext.v = closure$onEach;
      closure$onNext.v(it);
      return Unit;
    };
  }
  function listen$lambda$lambda_1(closure$onNext) {
    return function (qs) {
      closure$onNext.v(qs);
      return Unit;
    };
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function listen_1($receiver, killables, config) {
    if (!config.list.isEmpty()) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    var onNext = {v: null};
    var onEach = listen$lambda$lambda(config);
    onNext.v = listen$lambda$lambda_0(config, onEach, onNext);
    killables.plusAssign_o14v8n$($receiver.onSnapshot(listen$lambda$lambda_1(onNext), config.onError));
  }
  function orderBy($receiver, prop) {
    return $receiver.orderBy(prop.callableName);
  }
  function txDefer$lambda$lambda(closure$fn_0, closure$it_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$txDefer$lambda$lambda(closure$fn_0, closure$it_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$txDefer$lambda$lambda(closure$fn_0, closure$it_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$txDefer$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$txDefer$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$txDefer$lambda$lambda.prototype.constructor = Coroutine$txDefer$lambda$lambda;
  Coroutine$txDefer$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$closure$it, this);
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
  function txDefer$lambda(closure$fn) {
    return function (it) {
      return asPromise(async(coroutines.GlobalScope, void 0, void 0, txDefer$lambda$lambda(closure$fn, it)));
    };
  }
  function txDefer($receiver, fn) {
    return asDeferred($receiver.runTransaction(txDefer$lambda(fn)));
  }
  function tx($receiver, fn, continuation) {
    return txDefer($receiver, fn).await(continuation);
  }
  function txTry$lambda(closure$fn_0, this$txTry_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$txTry$lambda(closure$fn_0, this$txTry_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$txTry$lambda(closure$fn_0, this$txTry_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$this$txTry = this$txTry_0;
  }
  Coroutine$txTry$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$txTry$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$txTry$lambda.prototype.constructor = Coroutine$txTry$lambda;
  Coroutine$txTry$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = tx(this.local$this$txTry, this.local$closure$fn, this);
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
  function txTry($receiver, fn, continuation) {
    return Try.Companion.invoke_lnyleu$(txTry$lambda(fn, $receiver), continuation);
  }
  function onRollback$lambda(closure$fn) {
    return function (it) {
      if (Kotlin.isType(it, RollbackException))
        return closure$fn();
      else
        throw it;
    };
  }
  function onRollback$lambda_0(it) {
    return it;
  }
  function onRollback($receiver, fn) {
    return $receiver.fold_wsjhie$(onRollback$lambda(fn), onRollback$lambda_0);
  }
  function RollbackException() {
    Exception_init(this);
    this.name = 'RollbackException';
  }
  RollbackException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RollbackException',
    interfaces: [Exception]
  };
  function rollback() {
    throw new RollbackException();
  }
  function launch$lambda(closure$fn_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$launch$lambda(closure$fn_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$launch$lambda(closure$fn_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 5;
    this.local$closure$fn = closure$fn_0;
  }
  Coroutine$launch$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$launch$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$launch$lambda.prototype.constructor = Coroutine$launch$lambda;
  Coroutine$launch$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$closure$fn(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, RollbackException)) {
              return Unit;
            }
             else {
              throw e;
            }

          case 3:
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
  function launch_0(fn) {
    launch(coroutines.GlobalScope, void 0, void 0, launch$lambda(fn));
  }
  function QueryBuilder(query) {
    this.query = query;
  }
  QueryBuilder.prototype.arrayContains_1h0ukf$ = function ($receiver, v) {
    this.query = this.query.where($receiver.name, 'array-contains', first($receiver.write_11rc$(setOf(v))));
  };
  QueryBuilder.prototype.eq_5h2n3e$ = function ($receiver, v) {
    this.query = this.query.where($receiver.name, '==', $receiver.write_11rc$(v));
  };
  QueryBuilder.prototype.asc_pslpm2$ = function ($receiver) {
    this.query = this.query.orderBy($receiver.name);
  };
  QueryBuilder.prototype.desc_tixzdw$ = function ($receiver) {
    this.query = this.query.orderBy($receiver.name, 'desc');
  };
  QueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QueryBuilder',
    interfaces: []
  };
  function query$lambda($receiver) {
    return Unit;
  }
  function query($receiver, db, fn) {
    if (fn === void 0)
      fn = query$lambda;
    var $receiver_0 = new QueryBuilder(db.collection($receiver.path));
    fn($receiver_0);
    return wrap($receiver_0);
  }
  function wrap($receiver) {
    return wrap_0($receiver.query);
  }
  function wrap_0($receiver) {
    return new QueryWrap($receiver);
  }
  function QueryWrap(query) {
    this.query = query;
  }
  QueryWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QueryWrap',
    interfaces: []
  };
  function onSnapshot($receiver, d) {
    if (d.exists) {
      var data = d.data();
      $receiver.props.extractInitial_za3rmp$(data);
    }
     else {
      $receiver.props.deleted();
    }
  }
  function listen$lambda_2(closure$target) {
    return function (d) {
      onSnapshot(closure$target, d);
      return Unit;
    };
  }
  function listen$lambda_3(closure$killSnapshot, closure$target) {
    return function () {
      closure$killSnapshot();
      closure$target.props.live.now = false;
      return Unit;
    };
  }
  function listen_2($receiver, target) {
    if (!!target.props.live.now) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    target.props.live.now = true;
    var killSnapshot = $receiver.onSnapshot(listen$lambda_2(target));
    return Killable.Companion.once_o14v8n$(listen$lambda_3(killSnapshot, target));
  }
  function docRef($receiver, db) {
    if (db === void 0)
      db = firestore();
    return db.doc($receiver.path);
  }
  function collectionRef($receiver, db) {
    if (db === void 0)
      db = firestore();
    return db.collection($receiver.path);
  }
  var MaxBatchSize;
  function deleteCollection$lambda$step$lambda(closure$c_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$deleteCollection$lambda$step$lambda(closure$c_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$deleteCollection$lambda$step$lambda(closure$c_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$c = closure$c_0;
  }
  Coroutine$deleteCollection$lambda$step$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deleteCollection$lambda$step$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deleteCollection$lambda$step$lambda.prototype.constructor = Coroutine$deleteCollection$lambda$step$lambda;
  Coroutine$deleteCollection$lambda$step$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$closure$c, this);
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
  function deleteCollection$lambda$step(closure$ref_0, closure$db_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$deleteCollection$lambda$step(closure$ref_0, closure$db_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$deleteCollection$lambda$step(closure$ref_0, closure$db_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$ref = closure$ref_0;
    this.local$closure$db = closure$db_0;
    this.local$this$ = this$_0;
  }
  Coroutine$deleteCollection$lambda$step.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deleteCollection$lambda$step.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deleteCollection$lambda$step.prototype.constructor = Coroutine$deleteCollection$lambda$step;
  Coroutine$deleteCollection$lambda$step.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = await_0(this.local$closure$ref.limit(500).get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var qs = this.result_0;
            var batch = this.local$closure$db.batch();
            tmp$ = qs.docs;
            for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
              var doc = tmp$[tmp$_0];
              batch.delete(doc.ref);
            }

            var c = batch.commit();
            launch(this.local$this$, void 0, void 0, deleteCollection$lambda$step$lambda(c));
            return qs.size === 500;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function deleteCollection$lambda(closure$ref_0, closure$db_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$deleteCollection$lambda(closure$ref_0, closure$db_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$deleteCollection$lambda(closure$ref_0, closure$db_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$ref = closure$ref_0;
    this.local$closure$db = closure$db_0;
    this.local$step = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$deleteCollection$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deleteCollection$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deleteCollection$lambda.prototype.constructor = Coroutine$deleteCollection$lambda;
  Coroutine$deleteCollection$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$step = deleteCollection$lambda$step(this.local$closure$ref, this.local$closure$db, this.local$$receiver);
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$step(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 2;
            continue;
          case 5:
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
  function deleteCollection(ref, db) {
    return async(coroutines.GlobalScope, void 0, void 0, deleteCollection$lambda(ref, db));
  }
  function initBinder$lambda() {
    return FieldValue$Companion.delete();
  }
  function initBinder$lambda_0() {
    return FieldValue$Companion.serverTimestamp();
  }
  function initBinder$lambda_1(closure$db) {
    return function (cw) {
      return deleteCollection(collectionRef(cw, closure$db), closure$db);
    };
  }
  function initBinder$lambda_2(closure$db) {
    return function (it) {
      return collectionRef(it, closure$db).doc().id;
    };
  }
  function initBinder$lambda_3(closure$db) {
    return function (w, d) {
      return asDeferred(docRef(w, closure$db).set(d));
    };
  }
  function initBinder$lambda_4(closure$db) {
    return function (w, d) {
      return asDeferred(docRef(w, closure$db).set(d, setOptionsMerge()));
    };
  }
  function initBinder$lambda_5(vs) {
    var tmp$;
    return (tmp$ = FieldValue$Companion).arrayUnion.apply(tmp$, vs);
  }
  function initBinder$lambda_6(vs) {
    var tmp$;
    return (tmp$ = FieldValue$Companion).arrayRemove.apply(tmp$, vs);
  }
  function initBinder_0(db) {
    initBinder(new PropOps(initBinder$lambda, initBinder$lambda_0, initBinder$lambda_1(db), initBinder$lambda_2(db), initBinder$lambda_3(db), initBinder$lambda_4(db), initBinder$lambda_5, initBinder$lambda_6));
  }
  function exists($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$exists($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$exists($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$exists.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$exists.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$exists.prototype.constructor = Coroutine$exists;
  Coroutine$exists.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$$receiver.get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.exists;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function WriteData(data, merge) {
    this.data = data;
    this.merge = merge;
  }
  WriteData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WriteData',
    interfaces: []
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function QueryCache(collectionReference, write, extractId, listenConfig, killables) {
    QueryCache$Companion_getInstance();
    this.collectionReference_0 = collectionReference;
    this.write_0 = write;
    this.extractId_0 = extractId;
    this.listenConfig_0 = listenConfig;
    this.map_0 = LinkedHashMap_init();
    this.rxMap_0 = new Var(emptyMap());
    this.list_0 = new ListenableMutableList();
    this.list_0.addListener_ednqrc$(new ListenableList$Listener(QueryCache_init$lambda(this), QueryCache_init$lambda_0(this)));
    listen_1(this.collectionReference_0, killables, this.listenConfig_0(this.list_0));
  }
  function QueryCache$getVar$lambda$lambda(closure$id, closure$v) {
    return function (m) {
      return plus_0(m, to(closure$id, closure$v));
    };
  }
  QueryCache.prototype.getVar_0 = function (id) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.rxMap_0.now.get_11rb$(id)) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = new Var(common.None);
      this.rxMap_0.transform_ru8m0w$(QueryCache$getVar$lambda$lambda(id, $receiver));
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  };
  Object.defineProperty(QueryCache.prototype, 'emitter', {
    get: function () {
      return this.list_0.emitter;
    }
  });
  QueryCache.prototype.placeholder_61zpoe$ = function (id) {
    var $receiver = this.map_0;
    var tmp$;
    var value = $receiver.get_11rb$(id);
    if (value == null) {
      var answer = CompletableDeferred();
      $receiver.put_xwzc9p$(id, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  QueryCache.prototype.getAll = function (continuation_0, suspended) {
    var instance = new Coroutine$getAll(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getAll($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$list = void 0;
  }
  Coroutine$getAll.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getAll.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getAll.prototype.constructor = Coroutine$getAll;
  Coroutine$getAll.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.$this.collectionReference_0.get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var qs = this.result_0;
            this.local$list = ArrayList_init();
            this.local$tmp$ = qs.docs;
            this.local$tmp$_0 = 0;
            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$tmp$_0 === this.local$tmp$.length) {
              this.state_0 = 6;
              continue;
            }

            var qds = this.local$tmp$[this.local$tmp$_0];
            this.state_0 = 4;
            this.result_0 = this.$this.placeholder_61zpoe$(qds.id).await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$list.add_11rb$(this.result_0);
            this.state_0 = 5;
            continue;
          case 5:
            ++this.local$tmp$_0;
            this.state_0 = 3;
            continue;
          case 6:
            return this.local$list;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  QueryCache.prototype.get_pfsz8f$ = function (id_0, create_0, continuation_0, suspended) {
    var instance = new Coroutine$get_pfsz8f$(this, id_0, create_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$get_pfsz8f$($this, id_0, create_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$def = void 0;
    this.local$id = id_0;
    this.local$create = create_0;
  }
  Coroutine$get_pfsz8f$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_pfsz8f$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_pfsz8f$.prototype.constructor = Coroutine$get_pfsz8f$;
  Coroutine$get_pfsz8f$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var current = this.$this.map_0.get_11rb$(this.local$id);
            if (current == null) {
              this.local$def = CompletableDeferred();
              this.$this.map_0.put_xwzc9p$(this.local$id, this.local$def);
              this.local$tmp$ = this.$this.write_0;
              this.state_0 = 3;
              this.result_0 = this.local$create(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = current.await(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 5;
            continue;
          case 3:
            var writeData = this.local$tmp$(this.result_0);
            var tmp$ = this.$this.collectionReference_0.doc(this.local$id);
            var tmp$_0 = writeData.data;
            var $receiver = {};
            $receiver.merge = writeData.merge;
            tmp$.set(tmp$_0, $receiver);
            this.state_0 = 4;
            this.result_0 = this.local$def.await(this);
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
  function QueryCache$Companion() {
    QueryCache$Companion_instance = this;
  }
  function QueryCache$Companion$hasProps$lambda(t) {
    return new WriteData(t.props.write(), true);
  }
  function QueryCache$Companion$hasProps$lambda_0(t) {
    return t.props.idOrFail;
  }
  function QueryCache$Companion$hasProps$lambda_1(closure$collectionWrap, closure$create) {
    return function (list) {
      return ListenConfig$Companion_getInstance().hasProps_4r7uln$(list, closure$collectionWrap, closure$create);
    };
  }
  QueryCache$Companion.prototype.hasProps_1iowje$ = function (db, collectionWrap, create, killables) {
    return new QueryCache(collectionRef(collectionWrap, db), QueryCache$Companion$hasProps$lambda, QueryCache$Companion$hasProps$lambda_0, QueryCache$Companion$hasProps$lambda_1(collectionWrap, create), killables);
  };
  QueryCache$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var QueryCache$Companion_instance = null;
  function QueryCache$Companion_getInstance() {
    if (QueryCache$Companion_instance === null) {
      new QueryCache$Companion();
    }
    return QueryCache$Companion_instance;
  }
  function QueryCache_init$lambda(this$QueryCache) {
    return function (f, t) {
      this$QueryCache.placeholder_61zpoe$(this$QueryCache.extractId_0(t)).complete_11rb$(t);
      return Unit;
    };
  }
  function QueryCache_init$lambda_0(this$QueryCache) {
    return function (f, t) {
      var $receiver = this$QueryCache.map_0;
      var key = this$QueryCache.extractId_0(t);
      $receiver.remove_11rb$(key);
      return Unit;
    };
  }
  QueryCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QueryCache',
    interfaces: []
  };
  function get_ids$lambda$lambda(v) {
    return v.props.idOrFail;
  }
  function get_ids$lambda(m) {
    return m.map_2o04qz$(get_ids$lambda$lambda);
  }
  function get_ids($receiver) {
    return map($receiver, get_ids$lambda);
  }
  function get_ids_0($receiver) {
    return get_ids($receiver.emitter);
  }
  function Config() {
    return {};
  }
  function Callbacks() {
    return {};
  }
  function Login(app) {
    this.ui_yh7gb6$_0 = lazy(Login$ui$lambda(app));
  }
  Object.defineProperty(Login.prototype, 'ui_0', {
    get: function () {
      return this.ui_yh7gb6$_0.value;
    }
  });
  function Login$loginUi$lambda$lambda() {
    window.alert('Terms of Service...');
    return Unit;
  }
  function Login$loginUi$lambda$lambda_0() {
    window.alert('Privacy Policy...');
    return Unit;
  }
  function Login$loginUi$lambda$lambda$lambda(f, f_0) {
    return false;
  }
  Login.prototype.loginUi_2rdptt$ = function (authElement) {
    var $receiver = Config();
    $receiver.signInFlow = 'redirect';
    $receiver.signInOptions = [GoogleAuthProvider$Companion.PROVIDER_ID, EmailAuthProvider$Companion.PROVIDER_ID, AnonymousAuthProvider$Companion.PROVIDER_ID];
    $receiver.tosUrl = Login$loginUi$lambda$lambda;
    $receiver.privacyPolicyUrl = Login$loginUi$lambda$lambda_0;
    var $receiver_0 = Callbacks();
    $receiver_0.signInSuccessWithAuthResult = Login$loginUi$lambda$lambda$lambda;
    $receiver.callbacks = $receiver_0;
    var config = $receiver;
    this.ui_0.start(authElement, config);
  };
  function Login$ui$lambda(closure$app) {
    return function () {
      return new AuthUI(closure$app.auth());
    };
  }
  Login.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Login',
    interfaces: []
  };
  var package$firebase = _.firebase || (_.firebase = {});
  var package$app = package$firebase.app || (package$firebase.app = {});
  package$app.firestore_c7ogsi$ = firestore_0;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$firebase.AppOptions = AppOptions;
  var package$firestore = package$firebase.firestore || (package$firebase.firestore = {});
  package$firestore.setOptionsMerge = setOptionsMerge;
  package$firestore.Settings = Settings;
  Object.defineProperty(DocumentChangeType, 'added', {
    get: DocumentChangeType$added_getInstance
  });
  Object.defineProperty(DocumentChangeType, 'modified', {
    get: DocumentChangeType$modified_getInstance
  });
  Object.defineProperty(DocumentChangeType, 'removed', {
    get: DocumentChangeType$removed_getInstance
  });
  package$firestore.DocumentChangeType = DocumentChangeType;
  package$firestore.get_typeEnum_samrru$ = get_typeEnum;
  package$firestore.queryUi_m7qy8e$ = queryUi;
  package$firestore.OnSnapshot_init_ydux9x$ = OnSnapshot_init;
  package$firestore.OnSnapshot = OnSnapshot;
  package$firestore.listen_fh37ef$ = listen;
  package$firestore.withDefaultSettings_gwf93m$ = withDefaultSettings;
  package$firestore.onSnapshotNext_o3477o$ = onSnapshotNext;
  package$firestore.idDiffs_d0m7p1$ = idDiffs;
  Object.defineProperty(ListenConfig, 'Companion', {
    get: ListenConfig$Companion_getInstance
  });
  package$firestore.ListenConfig = ListenConfig;
  package$firestore.listen_3m6zjo$ = listen_0;
  package$firestore.listen_wkiigx$ = listen_1;
  package$firestore.orderBy_pn31r1$ = orderBy;
  package$firestore.txDefer_81x6o2$ = txDefer;
  package$firestore.tx_81x6o2$ = tx;
  package$firestore.txTry_81x6o2$ = txTry;
  package$firestore.onRollback_61ytec$ = onRollback;
  package$firestore.RollbackException = RollbackException;
  package$firestore.rollback = rollback;
  package$firestore.launch_g2bo5h$ = launch_0;
  package$firestore.QueryBuilder = QueryBuilder;
  package$firestore.query_vhmfed$ = query;
  package$firestore.wrap_aaxyke$ = wrap;
  package$firestore.wrap_p7ac2t$ = wrap_0;
  package$firestore.QueryWrap = QueryWrap;
  package$firestore.onSnapshot_685y8m$ = onSnapshot;
  package$firestore.listen_p3kk2v$ = listen_2;
  package$firestore.docRef_bi4pki$ = docRef;
  package$firestore.collectionRef_nabv8k$ = collectionRef;
  Object.defineProperty(package$firestore, 'MaxBatchSize', {
    get: function () {
      return MaxBatchSize;
    }
  });
  package$firestore.deleteCollection_whao2e$ = deleteCollection;
  package$firestore.initBinder_8mbn6p$ = initBinder_0;
  package$firestore.exists_a3uf2h$ = exists;
  package$firebase.WriteData = WriteData;
  Object.defineProperty(QueryCache, 'Companion', {
    get: QueryCache$Companion_getInstance
  });
  package$firebase.QueryCache = QueryCache;
  package$firebase.get_ids_5nqag1$ = get_ids;
  package$firebase.get_ids_p3eydb$ = get_ids_0;
  var package$firebaseui = _.firebaseui || (_.firebaseui = {});
  var package$auth = package$firebaseui.auth || (package$firebaseui.auth = {});
  package$auth.Config = Config;
  package$auth.Callbacks = Callbacks;
  package$firebaseui.Login = Login;
  MaxBatchSize = 500;
  Kotlin.defineModule('appsimake-firebase', _);
  return _;
}(typeof this['appsimake-firebase'] === 'undefined' ? {} : this['appsimake-firebase'], kotlin, this['appsimake-commonshr'], this['appsimake-common'], this['kotlinx-coroutines-core'], this['appsimake-firebaseshr']);

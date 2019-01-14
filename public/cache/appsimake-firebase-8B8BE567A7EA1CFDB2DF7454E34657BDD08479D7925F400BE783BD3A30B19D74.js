if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['appsimake-firebaseshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'appsimake-firebaseshr' was not found. Please, check whether 'appsimake-firebaseshr' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-firebase'.");
}
this['appsimake-firebase'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_firebaseshr, $module$appsimake_common, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var firestore = firebase.firestore;
  var FieldValue$Companion = firebase.firestore.FieldValue;
  var PropOps = $module$appsimake_firebaseshr.firebaseshr.PropOps;
  var initBinder = $module$appsimake_firebaseshr.firebaseshr.initBinder_frfi3t$;
  var Unit = Kotlin.kotlin.Unit;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var insertAt = $module$appsimake_common.common.insertAt_tevjyx$;
  var removeAt = $module$appsimake_common.common.removeAt_poj3bi$;
  var replaceAt = $module$appsimake_common.common.replaceAt_l17iyt$;
  var ListenableMutableList = $module$appsimake_common.common.ListenableMutableList;
  var Var = $module$appsimake_commonshr.rx.Var;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Killables = $module$appsimake_commonshr.killable.Killables;
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
  var Killable = $module$appsimake_commonshr.killable.Killable;
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
  function main$lambda() {
    return FieldValue$Companion.delete();
  }
  function main$lambda_0() {
    return FieldValue$Companion.serverTimestamp();
  }
  function main(args) {
    initBinder(new PropOps(main$lambda, main$lambda_0));
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
    return function (it) {
      var tmp$;
      (tmp$ = closure$callback != null ? closure$callback.onNext : null) != null ? tmp$(it) : null;
      var $receiver = it.docChanges();
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
    if (killables === void 0)
      killables = null;
    if (onFirst === void 0)
      onFirst = listen$lambda;
    if (onError === void 0)
      onError = listen$lambda_0;
    var first = {v: true};
    var list = new ListenableMutableList();
    var $receiver_0 = $receiver.query.onSnapshot(listen$lambda_1(first, onFirst, list), onError);
    killables != null ? killables.add_o14v8n$($receiver_0) : null;
    return list;
  }
  function withDefaultSettings($receiver) {
    var $receiver_0 = Settings();
    $receiver_0.timestampsInSnapshots = true;
    $receiver.settings($receiver_0);
    return $receiver;
  }
  function onSnapshotNext$lambda(it) {
    console.dir(it);
    return Unit;
  }
  function onSnapshotNext($receiver, onNext) {
    return $receiver.onSnapshot(onNext, onSnapshotNext$lambda);
  }
  function ListenConfig(list, create, update, delete_0, onFirst, onError) {
    ListenConfig$Companion_getInstance();
    if (onFirst === void 0)
      onFirst = ListenConfig_init$lambda;
    if (onError === void 0)
      onError = ListenConfig_init$lambda_0;
    this.list = list;
    this.create = create;
    this.update = update;
    this.delete = delete_0;
    this.onFirst = onFirst;
    this.onError = onError;
  }
  function ListenConfig$Companion() {
    ListenConfig$Companion_instance = this;
  }
  function ListenConfig$Companion$hasProps$lambda(closure$create) {
    return function (id, d) {
      var $receiver = closure$create();
      $receiver.props.persisted_11rc$(id);
      $receiver.props.extractInitial_za3rmp$(d);
      return $receiver;
    };
  }
  function ListenConfig$Companion$hasProps$lambda_0($receiver, d) {
    $receiver.props.extractInitial_za3rmp$(d);
    return Unit;
  }
  function ListenConfig$Companion$hasProps$lambda_1(t) {
    t.props.deleted();
    return Unit;
  }
  ListenConfig$Companion.prototype.hasProps_5sp7du$ = function (list, create) {
    return new ListenConfig(list, ListenConfig$Companion$hasProps$lambda(create), ListenConfig$Companion$hasProps$lambda_0, ListenConfig$Companion$hasProps$lambda_1);
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
    return this.delete;
  };
  ListenConfig.prototype.component5 = function () {
    return this.onFirst;
  };
  ListenConfig.prototype.component6 = function () {
    return this.onError;
  };
  ListenConfig.prototype.copy_4cbyqc$ = function (list, create, update, delete_0, onFirst, onError) {
    return new ListenConfig(list === void 0 ? this.list : list, create === void 0 ? this.create : create, update === void 0 ? this.update : update, delete_0 === void 0 ? this.delete : delete_0, onFirst === void 0 ? this.onFirst : onFirst, onError === void 0 ? this.onError : onError);
  };
  ListenConfig.prototype.toString = function () {
    return 'ListenConfig(list=' + Kotlin.toString(this.list) + (', create=' + Kotlin.toString(this.create)) + (', update=' + Kotlin.toString(this.update)) + (', delete=' + Kotlin.toString(this.delete)) + (', onFirst=' + Kotlin.toString(this.onFirst)) + (', onError=' + Kotlin.toString(this.onError)) + ')';
  };
  ListenConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.list) | 0;
    result = result * 31 + Kotlin.hashCode(this.create) | 0;
    result = result * 31 + Kotlin.hashCode(this.update) | 0;
    result = result * 31 + Kotlin.hashCode(this.delete) | 0;
    result = result * 31 + Kotlin.hashCode(this.onFirst) | 0;
    result = result * 31 + Kotlin.hashCode(this.onError) | 0;
    return result;
  };
  ListenConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.list, other.list) && Kotlin.equals(this.create, other.create) && Kotlin.equals(this.update, other.update) && Kotlin.equals(this.delete, other.delete) && Kotlin.equals(this.onFirst, other.onFirst) && Kotlin.equals(this.onError, other.onError)))));
  };
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
            this$_0.delete(this$_0.list.removeAt_za3lpa$(element.oldIndex));
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
  function listen$lambda$lambda_2(closure$killables) {
    return function () {
      closure$killables.kill();
      return Unit;
    };
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function listen_0($receiver, config) {
    if (!config.list.isEmpty()) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    var onNext = {v: null};
    var onEach = listen$lambda$lambda(config);
    onNext.v = listen$lambda$lambda_0(config, onEach, onNext);
    var killables = new Killables();
    killables.plusAssign_o14v8n$($receiver.onSnapshot(listen$lambda$lambda_1(onNext), config.onError));
    return listen$lambda$lambda_2(killables);
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
  QueryBuilder.prototype.eq_5h2n3e$ = function ($receiver, v) {
    this.query = this.query.where($receiver.name, '==', v);
  };
  QueryBuilder.prototype.asc_tixzdw$ = function ($receiver) {
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
    return wrap($receiver_0.query);
  }
  function wrap($receiver) {
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
  function listen$lambda_2(closure$target) {
    return function (d) {
      if (d.exists) {
        var data = d.data();
        closure$target.props.extractInitial_za3rmp$(data);
      }
       else {
        closure$target.props.deleted();
      }
      return Unit;
    };
  }
  function listen_1($receiver, target) {
    return Killable.Companion.once_o14v8n$($receiver.onSnapshot(listen$lambda_2(target)));
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
  package$firebase.main_kand9s$ = main;
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
  package$firestore.listen_eb9nj2$ = listen;
  package$firestore.withDefaultSettings_gwf93m$ = withDefaultSettings;
  package$firestore.onSnapshotNext_o3477o$ = onSnapshotNext;
  Object.defineProperty(ListenConfig, 'Companion', {
    get: ListenConfig$Companion_getInstance
  });
  package$firestore.ListenConfig = ListenConfig;
  package$firestore.listen_a0qr30$ = listen_0;
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
  package$firestore.wrap_p7ac2t$ = wrap;
  package$firestore.QueryWrap = QueryWrap;
  package$firestore.listen_stdvzp$ = listen_1;
  package$firestore.docRef_qngcj8$ = docRef;
  package$firestore.collectionRef_nabv8k$ = collectionRef;
  var package$firebaseui = _.firebaseui || (_.firebaseui = {});
  var package$auth = package$firebaseui.auth || (package$firebaseui.auth = {});
  package$auth.Config = Config;
  package$auth.Callbacks = Callbacks;
  package$firebaseui.Login = Login;
  main([]);
  Kotlin.defineModule('appsimake-firebase', _);
  return _;
}(typeof this['appsimake-firebase'] === 'undefined' ? {} : this['appsimake-firebase'], kotlin, this['appsimake-commonshr'], this['appsimake-firebaseshr'], this['appsimake-common'], this['kotlinx-coroutines-core']);

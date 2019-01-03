if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'firebase'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'firebase'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'firebase'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'firebase'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'firebase'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'firebase'.");
}
var firebase = function (_, Kotlin, $module$common, $module$kotlinx_coroutines_core) {
  'use strict';
  var firestore = firebase.firestore;
  var obj = $module$common.common.obj_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var obj_0 = $module$common.common.obj_7qq44f$;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var insertAt = $module$common.common.insertAt_tevjyx$;
  var removeAt = $module$common.common.removeAt_poj3bi$;
  var replaceAt = $module$common.common.replaceAt_l17iyt$;
  var ListenableMutableList = $module$common.common.ListenableMutableList;
  var Var = $module$common.rx.Var;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var asPromise = $module$kotlinx_coroutines_core.kotlinx.coroutines.asPromise_ge6odz$;
  var asDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.asDeferred_t11jrl$;
  var Try = $module$common.common.Try;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
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
    return obj();
  }
  function setOptionsMerge$lambda($receiver) {
    $receiver.merge = true;
    return Unit;
  }
  function setOptionsMerge() {
    return obj_0(setOptionsMerge$lambda);
  }
  function Settings() {
    return obj();
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
    var $receiver_0 = $receiver.onSnapshot(listen$lambda_1(first, onFirst, list), onError);
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
  function listen$lambda_2() {
    return Unit;
  }
  function listen$lambda_3(it) {
    console.dir(it);
    return Unit;
  }
  function listen$lambda_4(closure$list, closure$create, closure$update) {
    return function (qs) {
      var $receiver = qs.docChanges();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var closure$list_0 = closure$list;
        var closure$create_0 = closure$create;
        var closure$update_0 = closure$update;
        switch (get_typeEnum(element).name) {
          case 'added':
            closure$list_0.add_wxm5ur$(element.newIndex, closure$create_0(element.doc));
            break;
          case 'removed':
            closure$list_0.removeAt_za3lpa$(element.oldIndex);
            break;
          case 'modified':
            closure$update_0(closure$list_0.get_za3lpa$(element.oldIndex), element.doc);
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
  function listen$lambda_5(closure$onFirst, closure$onEach, closure$onNext) {
    return function (it) {
      closure$onFirst();
      closure$onNext.v = closure$onEach;
      closure$onNext.v(it);
      return Unit;
    };
  }
  function listen$lambda_6(closure$onNext) {
    return function (qs) {
      closure$onNext.v(qs);
      return Unit;
    };
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function listen_0($receiver, list, create, update, onFirst, onError) {
    if (onFirst === void 0)
      onFirst = listen$lambda_2;
    if (onError === void 0)
      onError = listen$lambda_3;
    if (!list.isEmpty()) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    var onNext = {v: null};
    var onEach = listen$lambda_4(list, create, update);
    onNext.v = listen$lambda_5(onFirst, onEach, onNext);
    return $receiver.onSnapshot(listen$lambda_6(onNext), onError);
  }
  function DocItem(id, data) {
    this.id = id;
    this.data = data;
  }
  DocItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DocItem',
    interfaces: []
  };
  function docItems$lambda(it) {
    return it.data();
  }
  function docItems$lambda_0() {
    return Unit;
  }
  function docItems$lambda_1(it) {
    console.dir(it);
    return Unit;
  }
  function docItems$lambda_2(closure$extract) {
    return function (it) {
      return new DocItem(it.id, new Var(closure$extract(it)));
    };
  }
  function docItems$lambda_3(closure$extract) {
    return function (di, qs) {
      di.data.now = closure$extract(qs);
      return Unit;
    };
  }
  function docItems($receiver, list, extract, onFirst, onError) {
    if (extract === void 0)
      extract = docItems$lambda;
    if (onFirst === void 0)
      onFirst = docItems$lambda_0;
    if (onError === void 0)
      onError = docItems$lambda_1;
    return listen_0($receiver, list, docItems$lambda_2(extract), docItems$lambda_3(extract), onFirst, onError);
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
  function Config() {
    return obj();
  }
  function Callbacks() {
    return obj();
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
  package$firestore.listen_ulnrpt$ = listen;
  package$firestore.withDefaultSettings_gwf93m$ = withDefaultSettings;
  package$firestore.onSnapshotNext_o3477o$ = onSnapshotNext;
  package$firestore.listen_ofyeca$ = listen_0;
  package$firestore.DocItem = DocItem;
  package$firestore.docItems_uc6rg3$ = docItems;
  package$firestore.orderBy_pn31r1$ = orderBy;
  package$firestore.txDefer_81x6o2$ = txDefer;
  package$firestore.tx_81x6o2$ = tx;
  package$firestore.txTry_81x6o2$ = txTry;
  package$firestore.onRollback_61ytec$ = onRollback;
  package$firestore.RollbackException = RollbackException;
  package$firestore.rollback = rollback;
  package$firestore.launch_g2bo5h$ = launch_0;
  var package$firebaseui = _.firebaseui || (_.firebaseui = {});
  var package$auth = package$firebaseui.auth || (package$firebaseui.auth = {});
  package$auth.Config = Config;
  package$auth.Callbacks = Callbacks;
  package$firebaseui.Login = Login;
  Kotlin.defineModule('firebase', _);
  return _;
}(typeof firebase === 'undefined' ? {} : firebase, kotlin, common, this['kotlinx-coroutines-core']);

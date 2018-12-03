if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'firebase'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'firebase'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'firebase'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'firebase'.");
}
var firebase = function (_, Kotlin, $module$common) {
  'use strict';
  var firestore = firebase.firestore;
  var obj = $module$common.common.obj_287e2$;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var insertAt = $module$common.common.insertAt_tevjyx$;
  var Unit = Kotlin.kotlin.Unit;
  var removeAt = $module$common.common.removeAt_poj3bi$;
  var replaceAt = $module$common.common.replaceAt_l17iyt$;
  var ListenableMutableList = $module$common.common.ListenableMutableList;
  var Var = $module$common.rx.Var;
  var GoogleAuthProvider$Companion = firebase.auth.GoogleAuthProvider;
  var EmailAuthProvider$Companion = firebase.auth.EmailAuthProvider;
  var auth = firebase.auth;
  var AuthUI = firebaseui.auth.AuthUI;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  DocumentChangeType.prototype = Object.create(Enum.prototype);
  DocumentChangeType.prototype.constructor = DocumentChangeType;
  function firestore_0($receiver) {
    return firestore($receiver);
  }
  function AppOptions() {
    return obj();
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
    return function (it) {
      if (closure$first.v) {
        closure$first.v = false;
        closure$onFirst();
      }
      var $receiver = it.docChanges();
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
  function Config() {
    return obj();
  }
  function Callbacks() {
    return obj();
  }
  function Login() {
    this.ui_yh7gb6$_0 = lazy(Login$ui$lambda);
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
    $receiver.signInOptions = [GoogleAuthProvider$Companion.PROVIDER_ID, EmailAuthProvider$Companion.PROVIDER_ID];
    $receiver.tosUrl = Login$loginUi$lambda$lambda;
    $receiver.privacyPolicyUrl = Login$loginUi$lambda$lambda_0;
    var $receiver_0 = Callbacks();
    $receiver_0.signInSuccessWithAuthResult = Login$loginUi$lambda$lambda$lambda;
    $receiver.callbacks = $receiver_0;
    var config = $receiver;
    this.ui_0.start(authElement, config);
  };
  function Login$ui$lambda() {
    return new AuthUI(auth());
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
  package$firestore.listen_h20tb0$ = listen;
  package$firestore.withDefaultSettings_gwf93m$ = withDefaultSettings;
  var package$firebaseui = _.firebaseui || (_.firebaseui = {});
  var package$auth = package$firebaseui.auth || (package$firebaseui.auth = {});
  package$auth.Config = Config;
  package$auth.Callbacks = Callbacks;
  package$firebaseui.Login = Login;
  Kotlin.defineModule('firebase', _);
  return _;
}(typeof firebase === 'undefined' ? {} : firebase, kotlin, common);

//# sourceMappingURL=firebase.js.map

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonlib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonlib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonlib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-commonlib'.");
}
this['appsimake-commonlib'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  apps.prototype = Object.create(CollectionWrap.prototype);
  apps.prototype.constructor = apps;
  function Lib(name) {
    this.name = name;
    this.app = apps_getInstance().doc_61zpoe$(this.name);
  }
  function Lib$function$lambda(this$Lib) {
    return function (it) {
      return new Function(this$Lib, it);
    };
  }
  Lib.prototype.function_q3lmfv$ = function () {
    return named(Lib$function$lambda(this));
  };
  Lib.prototype.qualified_61zpoe$ = function (simpleName) {
    return this.name + '_' + simpleName;
  };
  Lib.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lib',
    interfaces: []
  };
  function Function(lib, name) {
    this.lib = lib;
    this.name = name;
    this.qualifiedName = this.lib.qualified_61zpoe$(this.name);
  }
  Function.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Function',
    interfaces: []
  };
  function DocWrap(id, parent) {
    this.id = id;
    var tmp$;
    this.path_nhxtzp$_0 = ((tmp$ = parent != null ? parent.path : null) != null ? tmp$ : '') + '/' + this.id;
  }
  Object.defineProperty(DocWrap.prototype, 'path', {
    get: function () {
      return this.path_nhxtzp$_0;
    }
  });
  DocWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DocWrap',
    interfaces: [HasPath]
  };
  function coll$ObjectLiteral() {
  }
  coll$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return new CollectionWrap(property.callableName, thisRef);
  };
  coll$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadOnlyProperty]
  };
  function coll() {
    return new coll$ObjectLiteral();
  }
  function HasPath() {
  }
  HasPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasPath',
    interfaces: []
  };
  function CollectionWrap(id, parent) {
    this.id = id;
    var tmp$;
    this.path_66n57n$_0 = ((tmp$ = parent != null ? parent.path : null) != null ? tmp$ : '') + '/' + this.id;
  }
  Object.defineProperty(CollectionWrap.prototype, 'path', {
    get: function () {
      return this.path_66n57n$_0;
    }
  });
  CollectionWrap.prototype.docdc_fdni84$ = function (id) {
    return new DocWrap(id, this);
  };
  CollectionWrap.prototype.docc_ytbaoo$ = function (id) {
    return this.docdc_fdni84$(id);
  };
  CollectionWrap.prototype.docd_3c47r3$ = function (id) {
    return this.docdc_fdni84$(id);
  };
  CollectionWrap.prototype.doc_61zpoe$ = function (id) {
    return this.docdc_fdni84$(id);
  };
  CollectionWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CollectionWrap',
    interfaces: [HasPath]
  };
  function doc$ObjectLiteral() {
  }
  doc$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return new DocWrap(property.callableName, thisRef);
  };
  doc$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadOnlyProperty]
  };
  function doc() {
    return new doc$ObjectLiteral();
  }
  function docn() {
    return doc();
  }
  function apps() {
    apps_instance = this;
    CollectionWrap.call(this, 'apps', null);
  }
  apps.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'apps',
    interfaces: [CollectionWrap]
  };
  var apps_instance = null;
  function apps_getInstance() {
    if (apps_instance === null) {
      new apps();
    }
    return apps_instance;
  }
  function AppDoc() {
  }
  AppDoc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AppDoc',
    interfaces: []
  };
  var private_0;
  var private_metadata = new PropertyMetadata('private');
  function get_private($receiver) {
    return private_0.getValue_lrcp0p$($receiver, private_metadata);
  }
  var singletons;
  var singletons_metadata = new PropertyMetadata('singletons');
  function get_singletons($receiver) {
    return singletons.getValue_lrcp0p$($receiver, singletons_metadata);
  }
  function Singleton() {
  }
  Singleton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Singleton',
    interfaces: []
  };
  function Private() {
  }
  Private.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Private',
    interfaces: []
  };
  var fcmtokens;
  var fcmtokens_metadata = new PropertyMetadata('fcmtokens');
  function get_fcmtokens($receiver) {
    return fcmtokens.getValue_lrcp0p$($receiver, fcmtokens_metadata);
  }
  function FcmToken() {
  }
  FcmToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FcmToken',
    interfaces: []
  };
  var package$commonlib = _.commonlib || (_.commonlib = {});
  package$commonlib.Lib = Lib;
  package$commonlib.Function = Function;
  package$commonlib.DocWrap = DocWrap;
  package$commonlib.coll_287e2$ = coll;
  package$commonlib.HasPath = HasPath;
  package$commonlib.CollectionWrap = CollectionWrap;
  package$commonlib.doc_q3lmfv$ = doc;
  package$commonlib.docn_287e2$ = docn;
  Object.defineProperty(package$commonlib, 'apps', {
    get: apps_getInstance
  });
  package$commonlib.AppDoc = AppDoc;
  package$commonlib.get_private_qw85iv$ = get_private;
  package$commonlib.get_singletons_qw85iv$ = get_singletons;
  package$commonlib.Singleton = Singleton;
  package$commonlib.Private = Private;
  package$commonlib.get_fcmtokens_qk2byp$ = get_fcmtokens;
  package$commonlib.FcmToken = FcmToken;
  private_0 = coll();
  singletons = coll();
  fcmtokens = coll();
  Kotlin.defineModule('appsimake-commonlib', _);
  return _;
}(typeof this['appsimake-commonlib'] === 'undefined' ? {} : this['appsimake-commonlib'], kotlin, this['appsimake-commonshr']);

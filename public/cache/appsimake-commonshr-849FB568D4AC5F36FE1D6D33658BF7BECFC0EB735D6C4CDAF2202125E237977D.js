if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonshr'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonshr'.");
}
this['appsimake-commonshr'] = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  function obj() {
    return {};
  }
  function obj_0(fn) {
    var $receiver = obj();
    fn($receiver);
    return $receiver;
  }
  function NamedDelegate(init) {
    this.init_0 = init;
  }
  function NamedDelegate$provideDelegate$ObjectLiteral(closure$value) {
    this.closure$value = closure$value;
  }
  NamedDelegate$provideDelegate$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.closure$value;
  };
  NamedDelegate$provideDelegate$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadOnlyProperty]
  };
  NamedDelegate.prototype.provideDelegate_d6mtq7$ = function (thisRef, prop) {
    var value = this.init_0(prop.callableName);
    return new NamedDelegate$provideDelegate$ObjectLiteral(value);
  };
  NamedDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamedDelegate',
    interfaces: []
  };
  function named(fn) {
    return new NamedDelegate(fn);
  }
  var package$common = _.common || (_.common = {});
  package$common.obj_287e2$ = obj;
  package$common.obj_7qq44f$ = obj_0;
  package$common.NamedDelegate = NamedDelegate;
  package$common.named_cq6yhu$ = named;
  Kotlin.defineModule('appsimake-commonshr', _);
  return _;
}(typeof this['appsimake-commonshr'] === 'undefined' ? {} : this['appsimake-commonshr'], kotlin);

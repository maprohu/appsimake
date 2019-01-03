if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonshr'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonshr'.");
}
this['appsimake-commonshr'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var Unit = Kotlin.kotlin.Unit;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var ensureNotNull = Kotlin.ensureNotNull;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
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
  function Dyn(o) {
    this.o_0 = o;
  }
  Dyn.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    this.o_0[property.callableName] = value;
  };
  Dyn.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    return (tmp$ = this.o_0[property.callableName]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  Dyn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dyn',
    interfaces: [ReadWriteProperty]
  };
  function Binder(o, init) {
    this.o_0 = o;
    this.init_0 = init;
  }
  Binder.prototype.provideDelegate_t0xcdd$ = function (thisRef, prop) {
    this.init_0(prop.callableName);
    return new Dyn(this.o_0);
  };
  Binder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Binder',
    interfaces: []
  };
  function Wrap(o) {
    this.wrapped = o != null ? o : obj();
    var tmp$;
    if (o != null) {
      tmp$ = Wrap$propInit$lambda;
    }
     else {
      tmp$ = Wrap$propInit$lambda_0(this);
    }
    this.propInit_pwzh46$_0 = tmp$;
    this.type_f38uap$_0 = this.dyn_mh5how$(ensureNotNull(Kotlin.getKClassFromExpression(this).simpleName)).provideDelegate_t0xcdd$(this, Wrap$type_metadata);
  }
  Wrap.prototype.dyn_287e2$ = function () {
    return new Dyn(this.wrapped);
  };
  function Wrap$dyn$lambda(this$Wrap, closure$v) {
    return function (it) {
      this$Wrap.propInit_pwzh46$_0(it, closure$v);
      return Unit;
    };
  }
  Wrap.prototype.dyn_mh5how$ = function (v) {
    return new Binder(this.wrapped, Wrap$dyn$lambda(this, v));
  };
  var Wrap$type_metadata = new PropertyMetadata('type');
  Object.defineProperty(Wrap.prototype, 'type', {
    get: function () {
      return this.type_f38uap$_0.getValue_lrcp0p$(this, Wrap$type_metadata);
    }
  });
  function Wrap$propInit$lambda(f, f_0) {
    return Unit;
  }
  function Wrap$propInit$lambda_0(this$Wrap) {
    return function (n, v) {
      this$Wrap.wrapped[n] = v;
      return Unit;
    };
  }
  Wrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Wrap',
    interfaces: []
  };
  var jsNew = defineInlineFunction('appsimake-commonshr.common.jsNew_8jhc6t$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (constr, param) {
      var tmp$;
      return Kotlin.isType(tmp$ = new constr(param), Any) ? tmp$ : throwCCE();
    };
  }));
  function wrapper$lambda(closure$typeMap) {
    return function (d) {
      var tmp$;
      var tmp$_0;
      var tmp$_1;
      return (tmp$_0 = Kotlin.isType(tmp$_1 = new (getValue(closure$typeMap, typeof (tmp$ = d.type) === 'string' ? tmp$ : throwCCE()))(d), Any) ? tmp$_1 : throwCCE()) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function wrapper(classes) {
    var destination = ArrayList_init(classes.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== classes.length; ++tmp$) {
      var item = classes[tmp$];
      destination.add_11rb$(to(ensureNotNull(item.simpleName), get_js(item)));
    }
    var typeMap = toMap(destination);
    return wrapper$lambda(typeMap);
  }
  var package$common = _.common || (_.common = {});
  package$common.obj_287e2$ = obj;
  package$common.obj_7qq44f$ = obj_0;
  package$common.NamedDelegate = NamedDelegate;
  package$common.named_cq6yhu$ = named;
  package$common.Dyn = Dyn;
  package$common.Binder = Binder;
  package$common.Wrap = Wrap;
  package$common.jsNew_8jhc6t$ = jsNew;
  $$importsForInline$$['appsimake-commonshr'] = _;
  package$common.wrapper_giuhum$ = wrapper;
  Kotlin.defineModule('appsimake-commonshr', _);
  return _;
}(typeof this['appsimake-commonshr'] === 'undefined' ? {} : this['appsimake-commonshr'], kotlin);

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebaseshr'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-firebaseshr'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebaseshr'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-firebaseshr'.");
}
this['appsimake-firebaseshr'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Some = $module$appsimake_commonshr.common.Some;
  var common = $module$appsimake_commonshr.common;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_khz7k3$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var equals = Kotlin.equals;
  var Var = $module$appsimake_commonshr.rx.Var;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_klfg04$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var sortedArray = Kotlin.kotlin.collections.sortedArray_j2hqw1$;
  var Listeners = $module$appsimake_commonshr.common.Listeners;
  var plus_0 = Kotlin.kotlin.collections.plus_qloxvw$;
  function hasOwnProperty(d, prop) {
    return d.hasOwnProperty(prop);
  }
  function opt(d, name) {
    return hasOwnProperty(d, name) ? new Some(d[name]) : common.None;
  }
  function PropOps(delete_0, serverTimestamp) {
    if (delete_0 === void 0)
      delete_0 = PropOps_init$lambda;
    if (serverTimestamp === void 0)
      serverTimestamp = PropOps_init$lambda_0;
    this.delete = delete_0;
    this.serverTimestamp = serverTimestamp;
  }
  function PropOps_init$lambda() {
    throw IllegalStateException_init();
  }
  function PropOps_init$lambda_0() {
    throw IllegalStateException_init();
  }
  PropOps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropOps',
    interfaces: []
  };
  PropOps.prototype.component1 = function () {
    return this.delete;
  };
  PropOps.prototype.component2 = function () {
    return this.serverTimestamp;
  };
  PropOps.prototype.copy_c6ox6k$ = function (delete_0, serverTimestamp) {
    return new PropOps(delete_0 === void 0 ? this.delete : delete_0, serverTimestamp === void 0 ? this.serverTimestamp : serverTimestamp);
  };
  PropOps.prototype.toString = function () {
    return 'PropOps(delete=' + Kotlin.toString(this.delete) + (', serverTimestamp=' + Kotlin.toString(this.serverTimestamp)) + ')';
  };
  PropOps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.delete) | 0;
    result = result * 31 + Kotlin.hashCode(this.serverTimestamp) | 0;
    return result;
  };
  PropOps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.delete, other.delete) && Kotlin.equals(this.serverTimestamp, other.serverTimestamp)))));
  };
  var propOps;
  function get_ops() {
    return propOps;
  }
  function initBinder(ops) {
    propOps = ops;
  }
  function ValidationError(message) {
    ValidationError$Companion_getInstance();
    this.message = message;
  }
  function ValidationError$Companion() {
    ValidationError$Companion_instance = this;
    this.emptyValidator = ValidationError$Companion$emptyValidator$lambda;
    this.mandatory = new ValidationError('Field is mandatory.');
  }
  function ValidationError$Companion$emptyValidator$lambda(it) {
    return emptySet();
  }
  ValidationError$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ValidationError$Companion_instance = null;
  function ValidationError$Companion_getInstance() {
    if (ValidationError$Companion_instance === null) {
      new ValidationError$Companion();
    }
    return ValidationError$Companion_instance;
  }
  ValidationError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValidationError',
    interfaces: []
  };
  ValidationError.prototype.component1 = function () {
    return this.message;
  };
  ValidationError.prototype.copy_61zpoe$ = function (message) {
    return new ValidationError(message === void 0 ? this.message : message);
  };
  ValidationError.prototype.toString = function () {
    return 'ValidationError(message=' + Kotlin.toString(this.message) + ')';
  };
  ValidationError.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  ValidationError.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.message, other.message))));
  };
  function PropTasks() {
  }
  PropTasks.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PropTasks',
    interfaces: []
  };
  function Prop() {
  }
  Prop.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Prop',
    interfaces: [PropTasks]
  };
  function fireWith($receiver, v) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(v);
    }
  }
  function PropRegsitry() {
  }
  PropRegsitry.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PropRegsitry',
    interfaces: []
  };
  function ScalarProp(name, ops) {
    this.name_h4ebuw$_0 = name;
    this.ops_t8fdu9$_0 = ops;
    this.ignoreDirty = this.ops_t8fdu9$_0.ignoreDirty;
    this.ops_t8fdu9$_0.registry.register_anotdv$(this);
    this.initial = new Var(this.ops_t8fdu9$_0.defaultValue());
    this.current = new Var(this.initial.now);
    this.dirty_syli6n$_0 = this.calculated ? Rx_init(ScalarProp$dirty$lambda) : Rx_init(ScalarProp$dirty$lambda_0(this));
    this.validationErrors_hk2cup$_0 = lazy(ScalarProp$validationErrors$lambda(this));
    this.isValid_jccvbl$_0 = lazy(ScalarProp$isValid$lambda(this));
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = this.ops_t8fdu9$_0.calculate) != null) {
      var calc = Rx_init(ScalarProp$beforeWrite$lambda$lambda(tmp$, this));
      tmp$_1 = ScalarProp$beforeWrite$lambda$lambda_0(calc, this);
    }
     else
      tmp$_1 = null;
    this.beforeWrite = (tmp$_0 = tmp$_1) != null ? tmp$_0 : ScalarProp$beforeWrite$lambda;
  }
  Object.defineProperty(ScalarProp.prototype, 'name', {
    get: function () {
      return this.name_h4ebuw$_0;
    }
  });
  function ScalarProp$Ops(registry, ignoreDirty, read, write, merge, calculate, defaultValue, validate) {
    ScalarProp$Ops$Companion_getInstance();
    if (ignoreDirty === void 0)
      ignoreDirty = false;
    if (read === void 0)
      read = ScalarProp$ScalarProp$Ops_init$lambda;
    if (write === void 0)
      write = ScalarProp$ScalarProp$Ops_init$lambda_0;
    if (merge === void 0)
      merge = null;
    if (calculate === void 0)
      calculate = null;
    if (defaultValue === void 0)
      defaultValue = ScalarProp$ScalarProp$Ops_init$lambda_1;
    if (validate === void 0)
      validate = ValidationError$Companion_getInstance().emptyValidator;
    this.registry = registry;
    this.ignoreDirty = ignoreDirty;
    this.read = read;
    this.write = write;
    this.merge = merge;
    this.calculate = calculate;
    this.defaultValue = defaultValue;
    this.validate = validate;
  }
  function ScalarProp$Ops$prop$lambda(closure$fn, this$Ops) {
    return function (it) {
      return closure$fn(it, this$Ops);
    };
  }
  ScalarProp$Ops.prototype.prop_2nq2ks$ = function (fn) {
    if (fn === void 0)
      fn = getCallableRef('ScalarProp', function (name, ops) {
        return new ScalarProp(name, ops);
      });
    return named(ScalarProp$Ops$prop$lambda(fn, this));
  };
  function ScalarProp$Ops$withDefault$lambda(closure$v) {
    return function () {
      return new Some(closure$v());
    };
  }
  ScalarProp$Ops.prototype.withDefault_skz6mo$ = function (v) {
    return this.copy_sxzkdt$(void 0, void 0, void 0, void 0, void 0, void 0, ScalarProp$Ops$withDefault$lambda(v));
  };
  function ScalarProp$Ops$withDefault$lambda_0(closure$v) {
    return function () {
      return new Some(closure$v);
    };
  }
  ScalarProp$Ops.prototype.withDefault_11rc$ = function (v) {
    return this.copy_sxzkdt$(void 0, void 0, void 0, void 0, void 0, void 0, ScalarProp$Ops$withDefault$lambda_0(v));
  };
  ScalarProp$Ops.prototype.withIgnoreDirty_6taknv$ = function (v) {
    if (v === void 0)
      v = true;
    return this.copy_sxzkdt$(void 0, v);
  };
  ScalarProp$Ops.prototype.calculated_bc07mh$ = function (fn) {
    return this.copy_sxzkdt$(void 0, void 0, void 0, void 0, void 0, fn);
  };
  function ScalarProp$Ops$mandatory$lambda(it) {
    return it.isEmpty();
  }
  ScalarProp$Ops.prototype.mandatory = function () {
    return this.validated_bfsf1q$(ValidationError$Companion_getInstance().mandatory, ScalarProp$Ops$mandatory$lambda);
  };
  function ScalarProp$Ops$ifPresent$lambda(closure$invalid) {
    return function (vo) {
      return vo.map_2o04qz$(closure$invalid).getOrDefault_11rb$(false);
    };
  }
  ScalarProp$Ops.prototype.ifPresent_bhjbse$ = function (err, invalid) {
    return this.validated_bfsf1q$(err, ScalarProp$Ops$ifPresent$lambda(invalid));
  };
  function ScalarProp$Ops$validated$lambda(closure$invalid, closure$err) {
    return function (v) {
      return closure$invalid(v) ? setOf(closure$err) : emptySet();
    };
  }
  ScalarProp$Ops.prototype.validated_bfsf1q$ = function (err, invalid) {
    return this.validated_uapkce$(ScalarProp$Ops$validated$lambda(invalid, err));
  };
  function ScalarProp$Ops$validated$lambda_0(this$Ops, closure$fn) {
    return function (v) {
      return plus(this$Ops.validate(v), closure$fn(v));
    };
  }
  ScalarProp$Ops.prototype.validated_uapkce$ = function (fn) {
    return this.copy_sxzkdt$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, ScalarProp$Ops$validated$lambda_0(this, fn));
  };
  function ScalarProp$Ops$map$lambda(closure$r, this$Ops) {
    return function (it) {
      return closure$r(this$Ops.read(it));
    };
  }
  function ScalarProp$Ops$map$lambda_0(this$Ops, closure$w) {
    return function (it) {
      return this$Ops.write(closure$w(it));
    };
  }
  function ScalarProp$Ops$map$lambda_1(this$Ops, closure$r) {
    return function () {
      return this$Ops.defaultValue().map_2o04qz$(closure$r);
    };
  }
  ScalarProp$Ops.prototype.map_4zme6a$ = function (r, w) {
    return new ScalarProp$Ops(this.registry, this.ignoreDirty, ScalarProp$Ops$map$lambda(r, this), ScalarProp$Ops$map$lambda_0(this, w), void 0, void 0, ScalarProp$Ops$map$lambda_1(this, r));
  };
  function ScalarProp$Ops$Companion() {
    ScalarProp$Ops$Companion_instance = this;
  }
  ScalarProp$Ops$Companion.prototype.array_rqm35y$ = defineInlineFunction('appsimake-firebaseshr.firebaseshr.ScalarProp.Ops.Companion.array_rqm35y$', wrapFunction(function () {
    var ScalarProp$ScalarProp$Ops_init = _.firebaseshr.ScalarProp.Ops;
    var Some_init = _.$$importsForInline$$['appsimake-commonshr'].common.Some;
    function ScalarProp$Ops$Companion$array$lambda() {
      return new Some_init([]);
    }
    return function (regsitry) {
      return (new ScalarProp$ScalarProp$Ops_init(regsitry)).copy_sxzkdt$(void 0, void 0, void 0, void 0, void 0, void 0, ScalarProp$Ops$Companion$array$lambda);
    };
  }));
  ScalarProp$Ops$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScalarProp$Ops$Companion_instance = null;
  function ScalarProp$Ops$Companion_getInstance() {
    if (ScalarProp$Ops$Companion_instance === null) {
      new ScalarProp$Ops$Companion();
    }
    return ScalarProp$Ops$Companion_instance;
  }
  function ScalarProp$ScalarProp$Ops_init$lambda(it) {
    return it;
  }
  function ScalarProp$ScalarProp$Ops_init$lambda_0(it) {
    return it;
  }
  function ScalarProp$ScalarProp$Ops_init$lambda_1() {
    return common.None;
  }
  ScalarProp$Ops.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ops',
    interfaces: []
  };
  ScalarProp$Ops.prototype.component1 = function () {
    return this.registry;
  };
  ScalarProp$Ops.prototype.component2 = function () {
    return this.ignoreDirty;
  };
  ScalarProp$Ops.prototype.component3 = function () {
    return this.read;
  };
  ScalarProp$Ops.prototype.component4 = function () {
    return this.write;
  };
  ScalarProp$Ops.prototype.component5 = function () {
    return this.merge;
  };
  ScalarProp$Ops.prototype.component6 = function () {
    return this.calculate;
  };
  ScalarProp$Ops.prototype.component7 = function () {
    return this.defaultValue;
  };
  ScalarProp$Ops.prototype.component8 = function () {
    return this.validate;
  };
  ScalarProp$Ops.prototype.copy_sxzkdt$ = function (registry, ignoreDirty, read, write, merge, calculate, defaultValue, validate) {
    return new ScalarProp$Ops(registry === void 0 ? this.registry : registry, ignoreDirty === void 0 ? this.ignoreDirty : ignoreDirty, read === void 0 ? this.read : read, write === void 0 ? this.write : write, merge === void 0 ? this.merge : merge, calculate === void 0 ? this.calculate : calculate, defaultValue === void 0 ? this.defaultValue : defaultValue, validate === void 0 ? this.validate : validate);
  };
  ScalarProp$Ops.prototype.toString = function () {
    return 'Ops(registry=' + Kotlin.toString(this.registry) + (', ignoreDirty=' + Kotlin.toString(this.ignoreDirty)) + (', read=' + Kotlin.toString(this.read)) + (', write=' + Kotlin.toString(this.write)) + (', merge=' + Kotlin.toString(this.merge)) + (', calculate=' + Kotlin.toString(this.calculate)) + (', defaultValue=' + Kotlin.toString(this.defaultValue)) + (', validate=' + Kotlin.toString(this.validate)) + ')';
  };
  ScalarProp$Ops.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.registry) | 0;
    result = result * 31 + Kotlin.hashCode(this.ignoreDirty) | 0;
    result = result * 31 + Kotlin.hashCode(this.read) | 0;
    result = result * 31 + Kotlin.hashCode(this.write) | 0;
    result = result * 31 + Kotlin.hashCode(this.merge) | 0;
    result = result * 31 + Kotlin.hashCode(this.calculate) | 0;
    result = result * 31 + Kotlin.hashCode(this.defaultValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.validate) | 0;
    return result;
  };
  ScalarProp$Ops.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.registry, other.registry) && Kotlin.equals(this.ignoreDirty, other.ignoreDirty) && Kotlin.equals(this.read, other.read) && Kotlin.equals(this.write, other.write) && Kotlin.equals(this.merge, other.merge) && Kotlin.equals(this.calculate, other.calculate) && Kotlin.equals(this.defaultValue, other.defaultValue) && Kotlin.equals(this.validate, other.validate)))));
  };
  Object.defineProperty(ScalarProp.prototype, 'calculated', {
    get: function () {
      return this.ops_t8fdu9$_0.calculate != null;
    }
  });
  Object.defineProperty(ScalarProp.prototype, 'dirty', {
    get: function () {
      return this.dirty_syli6n$_0;
    }
  });
  Object.defineProperty(ScalarProp.prototype, 'validationErrors', {
    get: function () {
      return this.validationErrors_hk2cup$_0.value;
    }
  });
  Object.defineProperty(ScalarProp.prototype, 'isValid', {
    get: function () {
      return this.isValid_jccvbl$_0.value;
    }
  });
  ScalarProp.prototype.extractInitial_za3rmp$ = function (o) {
    this.initial.now = opt(o, this.name).map_2o04qz$(this.ops_t8fdu9$_0.read);
  };
  ScalarProp.prototype.resetInitial = function () {
    this.initial.now = this.ops_t8fdu9$_0.defaultValue();
  };
  function ScalarProp$writeTo$lambda(this$ScalarProp, closure$o) {
    return function (it) {
      closure$o[this$ScalarProp.name] = this$ScalarProp.ops_t8fdu9$_0.write(it);
      return Unit;
    };
  }
  ScalarProp.prototype.writeTo_za3rmp$ = function (o) {
    this.beforeWrite();
    this.current.now.forEach_qlkmfe$(ScalarProp$writeTo$lambda(this, o));
  };
  function ScalarProp$mergeTo$lambda$lambda(this$ScalarProp, closure$c) {
    return function (p) {
      var $receiver = this$ScalarProp.ops_t8fdu9$_0.merge;
      var closure$c_0 = closure$c;
      var this$ScalarProp_0 = this$ScalarProp;
      var block$result;
      if ($receiver != null) {
        block$result = $receiver(p, closure$c_0);
      }
       else {
        block$result = this$ScalarProp_0.ops_t8fdu9$_0.write(closure$c_0);
      }
      return block$result;
    };
  }
  function ScalarProp$mergeTo$lambda$lambda_0(this$ScalarProp, closure$c) {
    return function () {
      return this$ScalarProp.ops_t8fdu9$_0.write(closure$c);
    };
  }
  function ScalarProp$mergeTo$lambda(this$ScalarProp) {
    return function (c) {
      return this$ScalarProp.initial.now.map_2o04qz$(ScalarProp$mergeTo$lambda$lambda(this$ScalarProp, c)).getOrElse_skz6lt$(ScalarProp$mergeTo$lambda$lambda_0(this$ScalarProp, c));
    };
  }
  ScalarProp.prototype.mergeTo_za3rmp$ = function (o) {
    this.beforeWrite();
    if (!equals(this.initial.now, this.current.now)) {
      o[this.name] = this.current.now.map_2o04qz$(ScalarProp$mergeTo$lambda(this)).getOrElse_skz6lt$(propOps.delete);
    }
  };
  ScalarProp.prototype.clearDirty = function () {
    this.initial.now = this.current.now;
  };
  ScalarProp.prototype.rollback = function () {
    this.current.now = this.initial.now;
  };
  function ScalarProp$dirty$lambda() {
    return false;
  }
  function ScalarProp$dirty$lambda_0(this$ScalarProp) {
    return function () {
      return this$ScalarProp.ignoreDirty ? false : !equals(this$ScalarProp.initial.invoke(), this$ScalarProp.current.invoke());
    };
  }
  function ScalarProp$validationErrors$lambda$lambda(this$ScalarProp) {
    return function () {
      return this$ScalarProp.ops_t8fdu9$_0.validate(this$ScalarProp.current.invoke());
    };
  }
  function ScalarProp$validationErrors$lambda(this$ScalarProp) {
    return function () {
      return Rx_init(ScalarProp$validationErrors$lambda$lambda(this$ScalarProp));
    };
  }
  function ScalarProp$isValid$lambda$lambda(this$ScalarProp) {
    return function () {
      return this$ScalarProp.validationErrors.invoke().isEmpty();
    };
  }
  function ScalarProp$isValid$lambda(this$ScalarProp) {
    return function () {
      return Rx_init(ScalarProp$isValid$lambda$lambda(this$ScalarProp));
    };
  }
  function ScalarProp$beforeWrite$lambda$lambda(closure$c, this$ScalarProp) {
    return function () {
      return closure$c(this$ScalarProp);
    };
  }
  function ScalarProp$beforeWrite$lambda$lambda_0(closure$calc, this$ScalarProp) {
    return function () {
      this$ScalarProp.current.now = closure$calc.now.value;
      return Unit;
    };
  }
  function ScalarProp$beforeWrite$lambda() {
    return Unit;
  }
  ScalarProp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScalarProp',
    interfaces: [Prop]
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function arrayOf$lambda(this$arrayOf) {
    return function (it) {
      var transform = this$arrayOf.read;
      var destination = ArrayList_init(it.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== it.length; ++tmp$) {
        var item = it[tmp$];
        destination.add_11rb$(transform(item));
      }
      return copyToArray(destination);
    };
  }
  function arrayOf$lambda_0(this$arrayOf) {
    return function (it) {
      var transform = this$arrayOf.write;
      var destination = ArrayList_init(it.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== it.length; ++tmp$) {
        var item = it[tmp$];
        destination.add_11rb$(transform(item));
      }
      return copyToArray(destination);
    };
  }
  function ScalarProp$Ops$Companion$array$lambda() {
    return new Some([]);
  }
  function arrayOf($receiver) {
    return (new ScalarProp$Ops($receiver.registry)).copy_sxzkdt$(void 0, void 0, void 0, void 0, void 0, void 0, ScalarProp$Ops$Companion$array$lambda).map_4zme6a$(arrayOf$lambda($receiver), arrayOf$lambda_0($receiver));
  }
  function toSet$lambda(it) {
    return toSet(it);
  }
  function toSet$lambda_0(it) {
    return copyToArray(it);
  }
  function toSet_0($receiver) {
    return $receiver.map_4zme6a$(toSet$lambda, toSet$lambda_0);
  }
  function toList$lambda(it) {
    return toList(it);
  }
  function toList$lambda_0(it) {
    return copyToArray(it);
  }
  function toList_0($receiver) {
    return $receiver.map_4zme6a$(toList$lambda, toList$lambda_0);
  }
  function sorted$lambda(it) {
    return it;
  }
  function sorted$lambda_0(it) {
    return sortedArray(it);
  }
  function sorted($receiver) {
    return $receiver.map_4zme6a$(sorted$lambda, sorted$lambda_0);
  }
  function IdState(id, exists) {
    if (exists === void 0)
      exists = true;
    this.id = id;
    this.exists = exists;
  }
  IdState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdState',
    interfaces: []
  };
  IdState.prototype.component1 = function () {
    return this.id;
  };
  IdState.prototype.component2 = function () {
    return this.exists;
  };
  IdState.prototype.copy_iuyhfk$ = function (id, exists) {
    return new IdState(id === void 0 ? this.id : id, exists === void 0 ? this.exists : exists);
  };
  IdState.prototype.toString = function () {
    return 'IdState(id=' + Kotlin.toString(this.id) + (', exists=' + Kotlin.toString(this.exists)) + ')';
  };
  IdState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.exists) | 0;
    return result;
  };
  IdState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.exists, other.exists)))));
  };
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function Props() {
    this.id = new Var(common.None);
    this.list_8be2vx$ = emptyList();
    this.isPersisted_sjw2uf$_0 = lazy(Props$isPersisted$lambda(this));
    this.isDeleted_446zy9$_0 = lazy(Props$isDeleted$lambda(this));
    this.isValid_e2ztvi$_0 = lazy(Props$isValid$lambda(this));
    this.onDeleted_7zgssq$_0 = lazy(Props$onDeleted$lambda(this));
    this.dirty_51pztq$_0 = lazy(Props$dirty$lambda(this));
  }
  Object.defineProperty(Props.prototype, 'isPersisted', {
    get: function () {
      return this.isPersisted_sjw2uf$_0.value;
    }
  });
  Object.defineProperty(Props.prototype, 'isDeleted', {
    get: function () {
      return this.isDeleted_446zy9$_0.value;
    }
  });
  Object.defineProperty(Props.prototype, 'isValid', {
    get: function () {
      return this.isValid_e2ztvi$_0.value;
    }
  });
  Object.defineProperty(Props.prototype, 'onDeleted', {
    get: function () {
      return this.onDeleted_7zgssq$_0.value;
    }
  });
  Object.defineProperty(Props.prototype, 'idOrFail', {
    get: function () {
      return this.id.now.get().id;
    }
  });
  Props.prototype.persisted_11rc$ = function (idv) {
    this.id.now = new Some(new IdState(idv));
  };
  function Props$deleted$lambda$lambda(s) {
    return s.copy_iuyhfk$(void 0, false);
  }
  function Props$deleted$lambda(i) {
    return i.map_2o04qz$(Props$deleted$lambda$lambda);
  }
  Props.prototype.deleted = function () {
    this.id.transform_ru8m0w$(Props$deleted$lambda);
  };
  Props.prototype.extractInitial_za3rmp$ = function (o) {
    var tmp$;
    tmp$ = this.list_8be2vx$.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.extractInitial_za3rmp$(o);
    }
  };
  Props.prototype.resetInitial = function () {
    var tmp$;
    tmp$ = this.list_8be2vx$.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.resetInitial();
    }
  };
  Props.prototype.rollback = function () {
    var tmp$;
    tmp$ = this.list_8be2vx$.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.rollback();
    }
  };
  Props.prototype.writeTo_za3rmp$ = function (o) {
    var tmp$;
    tmp$ = this.list_8be2vx$.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.writeTo_za3rmp$(o);
    }
  };
  Props.prototype.mergeTo_za3rmp$ = function (o) {
    if (this.id.now.isEmpty()) {
      this.writeTo_za3rmp$(o);
    }
     else {
      var tmp$;
      tmp$ = this.list_8be2vx$.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.mergeTo_za3rmp$(o);
      }
    }
  };
  Object.defineProperty(Props.prototype, 'dirty', {
    get: function () {
      return this.dirty_51pztq$_0.value;
    }
  });
  Props.prototype.clearDirty = function () {
    var tmp$;
    tmp$ = this.list_8be2vx$.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.clearDirty();
    }
  };
  Props.prototype.write = function () {
    var $receiver = {};
    getCallableRef('writeTo', function ($receiver, o) {
      return $receiver.writeTo_za3rmp$(o), Unit;
    }.bind(null, this))($receiver);
    return $receiver;
  };
  Props.prototype.merge = function () {
    var $receiver = {};
    getCallableRef('mergeTo', function ($receiver, o) {
      return $receiver.mergeTo_za3rmp$(o), Unit;
    }.bind(null, this))($receiver);
    return $receiver;
  };
  function Props$isPersisted$lambda$lambda(this$Props) {
    return function () {
      return !equals(this$Props.id.invoke(), common.None);
    };
  }
  function Props$isPersisted$lambda(this$Props) {
    return function () {
      return Rx_init(Props$isPersisted$lambda$lambda(this$Props));
    };
  }
  function Props$isDeleted$lambda$lambda$lambda(s) {
    return !s.exists;
  }
  function Props$isDeleted$lambda$lambda(this$Props) {
    return function () {
      return this$Props.id.invoke().map_2o04qz$(Props$isDeleted$lambda$lambda$lambda).getOrDefault_11rb$(false);
    };
  }
  function Props$isDeleted$lambda(this$Props) {
    return function () {
      return Rx_init(Props$isDeleted$lambda$lambda(this$Props));
    };
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  function Props$isValid$lambda$lambda(this$Props) {
    return function () {
      var $receiver = this$Props.list_8be2vx$;
      var all$result;
      all$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!element.isValid.invoke()) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      return all$result;
    };
  }
  function Props$isValid$lambda(this$Props) {
    return function () {
      return Rx_init(Props$isValid$lambda$lambda(this$Props));
    };
  }
  function Props$onDeleted$lambda$lambda(closure$l) {
    return function (it) {
      if (it)
        closure$l.fire();
      return Unit;
    };
  }
  function Props$onDeleted$lambda(this$Props) {
    return function () {
      var l = new Listeners();
      this$Props.isDeleted.forEach_qlkmfe$(Props$onDeleted$lambda$lambda(l));
      return l;
    };
  }
  function Props$dirty$lambda$lambda(this$Props) {
    return function () {
      var $receiver = this$Props.list_8be2vx$;
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.dirty.invoke()) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }
  function Props$dirty$lambda(this$Props) {
    return function () {
      return Rx_init(Props$dirty$lambda$lambda(this$Props));
    };
  }
  Props.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Props',
    interfaces: [PropTasks]
  };
  function HasProps() {
  }
  HasProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasProps',
    interfaces: []
  };
  function Base(o) {
    if (o === void 0)
      o = new PropFactory();
    this.o = o;
  }
  Object.defineProperty(Base.prototype, 'props', {
    get: function () {
      return this.o.props;
    }
  });
  Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Base',
    interfaces: [HasProps]
  };
  function PropFactory() {
    this.props_pa0kyx$_0 = new Props();
    this.registry_0 = new PropFactory$registry$ObjectLiteral(this);
  }
  Object.defineProperty(PropFactory.prototype, 'props', {
    get: function () {
      return this.props_pa0kyx$_0;
    }
  });
  PropFactory.prototype.scalar_287e2$ = function () {
    return new ScalarProp$Ops(this.registry_0);
  };
  PropFactory.prototype.array_287e2$ = function () {
    return (new ScalarProp$Ops(this.registry_0)).copy_sxzkdt$(void 0, void 0, void 0, void 0, void 0, void 0, ScalarProp$Ops$Companion$array$lambda);
  };
  PropFactory.prototype.enum_nxd2ia$ = defineInlineFunction('appsimake-firebaseshr.firebaseshr.PropFactory.enum_nxd2ia$', wrapFunction(function () {
    function PropFactory$enum$lambda(it) {
      return it.name;
    }
    function PropFactory$enum$lambda_0(typeClosure$E, isE) {
      return function (it) {
        return typeClosure$E.valueOf_61zpoe$(it);
      };
    }
    return function (E_0, isE) {
      return this.scalar_287e2$().map_4zme6a$(PropFactory$enum$lambda_0(E_0, isE), PropFactory$enum$lambda);
    };
  }));
  function PropFactory$registry$ObjectLiteral(this$PropFactory) {
    this.this$PropFactory = this$PropFactory;
  }
  PropFactory$registry$ObjectLiteral.prototype.register_anotdv$ = function (prop) {
    var tmp$;
    tmp$ = this.this$PropFactory.props;
    tmp$.list_8be2vx$ = plus_0(tmp$.list_8be2vx$, prop);
  };
  PropFactory$registry$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [PropRegsitry]
  };
  PropFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropFactory',
    interfaces: [HasProps]
  };
  var package$firebaseshr = _.firebaseshr || (_.firebaseshr = {});
  package$firebaseshr.hasOwnProperty_hwpqgh$ = hasOwnProperty;
  package$firebaseshr.opt_h8phid$ = opt;
  package$firebaseshr.PropOps = PropOps;
  Object.defineProperty(package$firebaseshr, 'propOps_8be2vx$', {
    get: function () {
      return propOps;
    },
    set: function (value) {
      propOps = value;
    }
  });
  Object.defineProperty(package$firebaseshr, 'ops', {
    get: get_ops
  });
  package$firebaseshr.initBinder_frfi3t$ = initBinder;
  Object.defineProperty(ValidationError, 'Companion', {
    get: ValidationError$Companion_getInstance
  });
  package$firebaseshr.ValidationError = ValidationError;
  package$firebaseshr.PropTasks = PropTasks;
  package$firebaseshr.Prop = Prop;
  package$firebaseshr.fireWith_1sw9jx$ = fireWith;
  package$firebaseshr.PropRegsitry = PropRegsitry;
  package$firebaseshr.ScalarProp = ScalarProp;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  Object.defineProperty(ScalarProp$Ops, 'Companion', {
    get: ScalarProp$Ops$Companion_getInstance
  });
  ScalarProp.Ops = ScalarProp$Ops;
  $$importsForInline$$['appsimake-firebaseshr'] = _;
  package$firebaseshr.arrayOf_ahbeth$ = arrayOf;
  package$firebaseshr.toSet_2rzz9h$ = toSet_0;
  package$firebaseshr.toList_2rzz9h$ = toList_0;
  package$firebaseshr.sorted_e9zktm$ = sorted;
  package$firebaseshr.IdState = IdState;
  package$firebaseshr.Props = Props;
  package$firebaseshr.HasProps = HasProps;
  package$firebaseshr.Base = Base;
  package$firebaseshr.PropFactory = PropFactory;
  propOps = new PropOps();
  Kotlin.defineModule('appsimake-firebaseshr', _);
  return _;
}(typeof this['appsimake-firebaseshr'] === 'undefined' ? {} : this['appsimake-firebaseshr'], kotlin, this['appsimake-commonshr']);

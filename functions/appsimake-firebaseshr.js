function define(args, fn) {
    fn(
        ...args.map(function(a) {
            if (a == 'exports') {
                return module.exports;
            } else if (a.startsWith('appsimake-')) {
                return require('./' + a);
            } else {
                return require(a);
            }
        })
    );
}

define(['exports', 'kotlin', 'appsimake-commonshr'], function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var Some = $module$appsimake_commonshr.common.Some;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var common = $module$appsimake_commonshr.common;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var getCallableRef = Kotlin.getCallableRef;
  var namedThis = $module$appsimake_commonshr.common.namedThis_5cxx4g$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_khz7k3$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var get_0 = $module$appsimake_commonshr.rx.get_kw0pia$;
  var set_0 = $module$appsimake_commonshr.rx.set_atqor6$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Var = $module$appsimake_commonshr.rx.Var;
  var killable = $module$appsimake_commonshr.killable;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_3k3t3o$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var lazyOf = Kotlin.kotlin.lazyOf_mh5how$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var SetDiff = $module$appsimake_commonshr.commonshr.SetDiff;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var sortedArray = Kotlin.kotlin.collections.sortedArray_j2hqw1$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var Listeners = $module$appsimake_commonshr.common.Listeners;
  var CollectionWrap = $module$appsimake_commonshr.commonlib.CollectionWrap;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var plus_0 = Kotlin.kotlin.collections.plus_qloxvw$;
  var map = $module$appsimake_commonshr.common.map_2x290v$;
  BaseValProp.prototype = Object.create(ScalarPropBase.prototype);
  BaseValProp.prototype.constructor = BaseValProp;
  ScalarProp.prototype = Object.create(ScalarPropBase.prototype);
  ScalarProp.prototype.constructor = ScalarProp;
  IdState$New.prototype = Object.create(IdState.prototype);
  IdState$New.prototype.constructor = IdState$New;
  IdState$Persisted.prototype = Object.create(IdState.prototype);
  IdState$Persisted.prototype.constructor = IdState$Persisted;
  FBProps.prototype = Object.create(Props.prototype);
  FBProps.prototype.constructor = FBProps;
  Base.prototype = Object.create(BaseVal.prototype);
  Base.prototype.constructor = Base;
  BaseRootVal.prototype = Object.create(BaseVal.prototype);
  BaseRootVal.prototype.constructor = BaseRootVal;
  BaseRoot.prototype = Object.create(Base.prototype);
  BaseRoot.prototype.constructor = BaseRoot;
  BaseRootCheck.prototype = Object.create(BaseRootVal.prototype);
  BaseRootCheck.prototype.constructor = BaseRootCheck;
  FBPropFactory.prototype = Object.create(BasePropFactory.prototype);
  FBPropFactory.prototype.constructor = FBPropFactory;
  PropFactory.prototype = Object.create(BasePropFactory.prototype);
  PropFactory.prototype.constructor = PropFactory;
  function BaseValProp(name, ops, wrapper) {
    ScalarPropBase.call(this, name, ops);
    this.wrapper_0 = wrapper;
  }
  function BaseValProp$extractInitial$lambda$initNew(closure$new, closure$pv) {
    return function () {
      closure$new.props.extractInitial_za3rmp$(closure$pv);
      return closure$new;
    };
  }
  function BaseValProp$extractInitial$lambda$lambda(closure$new, closure$pv, closure$initNew) {
    return function (i) {
      var tmp$;
      if ((tmp$ = Kotlin.getKClassFromExpression(i)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(closure$new)) : null) {
        i.props.extractInitial_za3rmp$(closure$pv);
        return i;
      }
       else {
        return closure$initNew();
      }
    };
  }
  function BaseValProp$extractInitial$lambda$lambda_0(closure$initNew) {
    return function () {
      return closure$initNew();
    };
  }
  function BaseValProp$extractInitial$lambda(this$BaseValProp, closure$o) {
    return function (pv) {
      var new_0 = this$BaseValProp.wrapper_0(closure$o);
      var initNew = BaseValProp$extractInitial$lambda$initNew(new_0, pv);
      return this$BaseValProp.initial.now.map_2o04qz$(BaseValProp$extractInitial$lambda$lambda(new_0, pv, initNew)).getOrElse_skz6lt$(BaseValProp$extractInitial$lambda$lambda_0(initNew));
    };
  }
  BaseValProp.prototype.extractInitial_za3rmp$ = function (o) {
    var propValueOpt = this.extractPropValue_za3rmp$(o);
    this.initial.now = propValueOpt.map_2o04qz$(BaseValProp$extractInitial$lambda(this, o));
  };
  function BaseValProp$rollback$lambda(it) {
    it.props.rollback();
    return Unit;
  }
  BaseValProp.prototype.rollback = function () {
    ScalarPropBase.prototype.rollback.call(this);
    this.current.now.forEach_qlkmfe$(BaseValProp$rollback$lambda);
  };
  BaseValProp.prototype.mergeTo_za3rmp$ = function (o) {
    var tmp$, tmp$_0;
    this.beforeWrite();
    var i = this.initial.now;
    var c = this.current.now;
    if (Kotlin.isType(i, Some) && Kotlin.isType(c, Some)) {
      tmp$_0 = this.name;
      if (equals(i.value, c.value)) {
        tmp$ = c.value.props.merge();
      }
       else {
        var d = {};
        i.value.props.deleteTo_za3rmp$(d);
        c.value.props.writeTo_za3rmp$(d);
        tmp$ = d;
      }
      o[tmp$_0] = tmp$;
    }
     else if (Kotlin.isType(i, Some))
      o[this.name] = get_binderOps().delete();
    else if (Kotlin.isType(c, Some))
      o[this.name] = c.value.props.write();
  };
  BaseValProp.prototype.calculateDirty = function () {
    var tmp$;
    var i = this.initial.invoke();
    var c = this.current.invoke();
    if (Kotlin.isType(i, Some) && Kotlin.isType(c, Some))
      if (equals(i.value, c.value)) {
        tmp$ = c.value.props.dirty.invoke();
      }
       else {
        tmp$ = true;
      }
     else
      tmp$ = equals(i, c);
    return tmp$;
  };
  function BaseValProp$clearDirty$lambda(i) {
    i.props.clearDirty();
    return Unit;
  }
  BaseValProp.prototype.clearDirty = function () {
    ScalarPropBase.prototype.clearDirty.call(this);
    this.initial.now.forEach_qlkmfe$(BaseValProp$clearDirty$lambda);
  };
  function BaseValProp$calculateIsValid$lambda(c) {
    return c.props.isValid.invoke();
  }
  BaseValProp.prototype.calculateIsValid = function () {
    return ScalarPropBase.prototype.calculateIsValid.call(this) && this.current.invoke().map_2o04qz$(BaseValProp$calculateIsValid$lambda).getOrDefault_11rb$(true);
  };
  BaseValProp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseValProp',
    interfaces: [ScalarPropBase]
  };
  function hasOwnProperty(d, prop) {
    return d.hasOwnProperty(prop);
  }
  function opt(d, name) {
    return hasOwnProperty(d, name) ? new Some(d[name]) : common.None;
  }
  function PropOps(delete_0, serverTimestamp, deleteCollection, createId, write, merge, arrayUnion, arrayRemove) {
    PropOps$Companion_getInstance();
    this.delete = delete_0;
    this.serverTimestamp = serverTimestamp;
    this.deleteCollection = deleteCollection;
    this.createId = createId;
    this.write = write;
    this.merge = merge;
    this.arrayUnion = arrayUnion;
    this.arrayRemove = arrayRemove;
  }
  function PropOps$Companion() {
    PropOps$Companion_instance = this;
  }
  PropOps$Companion.prototype.notInitialized = function () {
    throw IllegalStateException_init('Firebase binderOps not initialized!');
  };
  PropOps$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PropOps$Companion_instance = null;
  function PropOps$Companion_getInstance() {
    if (PropOps$Companion_instance === null) {
      new PropOps$Companion();
    }
    return PropOps$Companion_instance;
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
  PropOps.prototype.component3 = function () {
    return this.deleteCollection;
  };
  PropOps.prototype.component4 = function () {
    return this.createId;
  };
  PropOps.prototype.component5 = function () {
    return this.write;
  };
  PropOps.prototype.component6 = function () {
    return this.merge;
  };
  PropOps.prototype.component7 = function () {
    return this.arrayUnion;
  };
  PropOps.prototype.component8 = function () {
    return this.arrayRemove;
  };
  PropOps.prototype.copy_eiw8pb$ = function (delete_0, serverTimestamp, deleteCollection, createId, write, merge, arrayUnion, arrayRemove) {
    return new PropOps(delete_0 === void 0 ? this.delete : delete_0, serverTimestamp === void 0 ? this.serverTimestamp : serverTimestamp, deleteCollection === void 0 ? this.deleteCollection : deleteCollection, createId === void 0 ? this.createId : createId, write === void 0 ? this.write : write, merge === void 0 ? this.merge : merge, arrayUnion === void 0 ? this.arrayUnion : arrayUnion, arrayRemove === void 0 ? this.arrayRemove : arrayRemove);
  };
  PropOps.prototype.toString = function () {
    return 'PropOps(delete=' + Kotlin.toString(this.delete) + (', serverTimestamp=' + Kotlin.toString(this.serverTimestamp)) + (', deleteCollection=' + Kotlin.toString(this.deleteCollection)) + (', createId=' + Kotlin.toString(this.createId)) + (', write=' + Kotlin.toString(this.write)) + (', merge=' + Kotlin.toString(this.merge)) + (', arrayUnion=' + Kotlin.toString(this.arrayUnion)) + (', arrayRemove=' + Kotlin.toString(this.arrayRemove)) + ')';
  };
  PropOps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.delete) | 0;
    result = result * 31 + Kotlin.hashCode(this.serverTimestamp) | 0;
    result = result * 31 + Kotlin.hashCode(this.deleteCollection) | 0;
    result = result * 31 + Kotlin.hashCode(this.createId) | 0;
    result = result * 31 + Kotlin.hashCode(this.write) | 0;
    result = result * 31 + Kotlin.hashCode(this.merge) | 0;
    result = result * 31 + Kotlin.hashCode(this.arrayUnion) | 0;
    result = result * 31 + Kotlin.hashCode(this.arrayRemove) | 0;
    return result;
  };
  PropOps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.delete, other.delete) && Kotlin.equals(this.serverTimestamp, other.serverTimestamp) && Kotlin.equals(this.deleteCollection, other.deleteCollection) && Kotlin.equals(this.createId, other.createId) && Kotlin.equals(this.write, other.write) && Kotlin.equals(this.merge, other.merge) && Kotlin.equals(this.arrayUnion, other.arrayUnion) && Kotlin.equals(this.arrayRemove, other.arrayRemove)))));
  };
  var binderOpsInternal;
  function get_binderOps() {
    return binderOpsInternal != null ? binderOpsInternal : PropOps$Companion_getInstance().notInitialized();
  }
  function initBinder(ops) {
    binderOpsInternal = ops;
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
  function ScalarProp(thisRef, name, ops) {
    ScalarPropBase.call(this, name, ops);
    this.thisRef = thisRef;
  }
  ScalarProp.prototype.extractInitial_za3rmp$ = function (o) {
    this.initial.now = this.extractPropValue_za3rmp$(o).map_2o04qz$(this.ops.read);
  };
  function ScalarProp$mergeTo$lambda$lambda(this$ScalarProp, closure$c) {
    return function (p) {
      var $receiver = this$ScalarProp.ops.merge;
      var closure$c_0 = closure$c;
      var this$ScalarProp_0 = this$ScalarProp;
      var block$result;
      if ($receiver != null) {
        block$result = $receiver(p, closure$c_0);
      }
       else {
        block$result = this$ScalarProp_0.ops.write(closure$c_0);
      }
      return block$result;
    };
  }
  function ScalarProp$mergeTo$lambda$lambda_0(this$ScalarProp, closure$c) {
    return function () {
      return this$ScalarProp.ops.write(closure$c);
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
      o[this.name] = this.current.now.map_2o04qz$(ScalarProp$mergeTo$lambda(this)).getOrElse_skz6lt$(get_binderOps().delete);
    }
  };
  ScalarProp.prototype.calculateDirty = function () {
    return !equals(this.initial.invoke(), this.current.invoke());
  };
  ScalarProp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScalarProp',
    interfaces: [ScalarPropBase]
  };
  function ScalarPropBase(name, ops) {
    this.name_gd7q9z$_0 = name;
    this.ops = ops;
    this.ignoreDirty = this.ops.ignoreDirty;
    this.ops.registry.register_anotdv$(this);
    this.initial = new Var(this.ops.defaultValue());
    this.current = new Var(this.initial.now);
    this.dirty_ertkci$_0 = this.calculated ? Rx_init(killable.NoKill, ScalarPropBase$dirty$lambda) : Rx_init(killable.NoKill, ScalarPropBase$dirty$lambda_0(this));
    this.validationErrors_2t0eqo$_0 = lazy(ScalarPropBase$validationErrors$lambda(this));
    this.isValid_2q115q$_0 = lazy(ScalarPropBase$isValid$lambda(this));
    this.calculationActive = this.ops.calculate != null;
    this.calced = new Var(lazyOf(common.None));
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = this.ops.calculate) != null) {
      Rx_init(killable.NoKill, ScalarPropBase$beforeWrite$lambda$lambda(tmp$)).forEach_yk5nc8$(killable.NoKill, ScalarPropBase$beforeWrite$lambda$lambda_0(this));
      tmp$_1 = ScalarPropBase$beforeWrite$lambda$lambda_1(this);
    }
     else
      tmp$_1 = null;
    this.beforeWrite = (tmp$_0 = tmp$_1) != null ? tmp$_0 : ScalarPropBase$beforeWrite$lambda;
  }
  Object.defineProperty(ScalarPropBase.prototype, 'name', {
    get: function () {
      return this.name_gd7q9z$_0;
    }
  });
  ScalarPropBase.prototype.extractPropValue_za3rmp$ = function (o) {
    return opt(o, this.name);
  };
  ScalarPropBase.prototype.write_11rc$ = function (v) {
    return this.ops.write(v);
  };
  ScalarPropBase.prototype.deleteTo_za3rmp$ = function (o) {
    if (!this.initial.now.isEmpty()) {
      o[this.name] = get_binderOps().delete();
    }
  };
  function ScalarPropBase$Ops(registry, ignoreDirty, read, write, merge, calculate, defaultValue, validate) {
    ScalarPropBase$Ops$Companion_getInstance();
    if (ignoreDirty === void 0)
      ignoreDirty = false;
    if (read === void 0)
      read = ScalarPropBase$ScalarPropBase$Ops_init$lambda;
    if (write === void 0)
      write = ScalarPropBase$ScalarPropBase$Ops_init$lambda_0;
    if (merge === void 0)
      merge = null;
    if (calculate === void 0)
      calculate = null;
    if (defaultValue === void 0)
      defaultValue = ScalarPropBase$ScalarPropBase$Ops_init$lambda_1;
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
  function ScalarPropBase$Ops$prop$lambda(closure$fn, this$Ops) {
    return function (tr, n) {
      return closure$fn(tr, n, this$Ops);
    };
  }
  ScalarPropBase$Ops.prototype.prop_aspey6$ = function (fn) {
    if (fn === void 0)
      fn = getCallableRef('ScalarProp', function (thisRef, name, ops) {
        return new ScalarProp(thisRef, name, ops);
      });
    return namedThis(ScalarPropBase$Ops$prop$lambda(fn, this));
  };
  function ScalarPropBase$Ops$withDefault$lambda(closure$v) {
    return function () {
      return new Some(closure$v());
    };
  }
  ScalarPropBase$Ops.prototype.withDefault_skz6mo$ = function (v) {
    return this.copy_zemo5g$(void 0, void 0, void 0, void 0, void 0, void 0, ScalarPropBase$Ops$withDefault$lambda(v));
  };
  function ScalarPropBase$Ops$withDefault$lambda_0(closure$v) {
    return function () {
      return new Some(closure$v);
    };
  }
  ScalarPropBase$Ops.prototype.withDefault_11rc$ = function (v) {
    return this.copy_zemo5g$(void 0, void 0, void 0, void 0, void 0, void 0, ScalarPropBase$Ops$withDefault$lambda_0(v));
  };
  ScalarPropBase$Ops.prototype.withIgnoreDirty_6taknv$ = function (v) {
    if (v === void 0)
      v = true;
    return this.copy_zemo5g$(void 0, v);
  };
  ScalarPropBase$Ops.prototype.calculated_j50y3y$ = function (fn) {
    return this.copy_zemo5g$(void 0, void 0, void 0, void 0, void 0, fn);
  };
  function ScalarPropBase$Ops$mandatory$lambda(it) {
    return it.isEmpty();
  }
  ScalarPropBase$Ops.prototype.mandatory = function () {
    return this.validated_bfsf1q$(ValidationError$Companion_getInstance().mandatory, ScalarPropBase$Ops$mandatory$lambda);
  };
  function ScalarPropBase$Ops$ifPresent$lambda(closure$invalid) {
    return function (vo) {
      return vo.map_2o04qz$(closure$invalid).getOrDefault_11rb$(false);
    };
  }
  ScalarPropBase$Ops.prototype.ifPresent_bhjbse$ = function (err, invalid) {
    return this.validated_bfsf1q$(err, ScalarPropBase$Ops$ifPresent$lambda(invalid));
  };
  function ScalarPropBase$Ops$validated$lambda(closure$invalid, closure$err) {
    return function (v) {
      return closure$invalid(v) ? setOf(closure$err) : emptySet();
    };
  }
  ScalarPropBase$Ops.prototype.validated_bfsf1q$ = function (err, invalid) {
    return this.validated_uapkce$(ScalarPropBase$Ops$validated$lambda(invalid, err));
  };
  function ScalarPropBase$Ops$validated$lambda_0(this$Ops, closure$fn) {
    return function (v) {
      return plus(this$Ops.validate(v), closure$fn(v));
    };
  }
  ScalarPropBase$Ops.prototype.validated_uapkce$ = function (fn) {
    return this.copy_zemo5g$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, ScalarPropBase$Ops$validated$lambda_0(this, fn));
  };
  function ScalarPropBase$Ops$map$lambda(closure$r, this$Ops) {
    return function (it) {
      return closure$r(this$Ops.read(it));
    };
  }
  function ScalarPropBase$Ops$map$lambda_0(this$Ops, closure$w) {
    return function (it) {
      return this$Ops.write(closure$w(it));
    };
  }
  function ScalarPropBase$Ops$map$lambda_1(this$Ops, closure$r) {
    return function () {
      return this$Ops.defaultValue().map_2o04qz$(closure$r);
    };
  }
  ScalarPropBase$Ops.prototype.map_4zme6a$ = function (r, w) {
    return new ScalarPropBase$Ops(this.registry, this.ignoreDirty, ScalarPropBase$Ops$map$lambda(r, this), ScalarPropBase$Ops$map$lambda_0(this, w), void 0, void 0, ScalarPropBase$Ops$map$lambda_1(this, r));
  };
  function ScalarPropBase$Ops$Companion() {
    ScalarPropBase$Ops$Companion_instance = this;
  }
  ScalarPropBase$Ops$Companion.prototype.array_rqm35y$ = defineInlineFunction('appsimake-firebaseshr.firebaseshr.ScalarPropBase.Ops.Companion.array_rqm35y$', wrapFunction(function () {
    var ScalarPropBase$ScalarPropBase$Ops_init = _.firebaseshr.ScalarPropBase.Ops;
    var Some_init = _.$$importsForInline$$['appsimake-commonshr'].common.Some;
    function ScalarPropBase$Ops$Companion$array$lambda() {
      return new Some_init([]);
    }
    return function (regsitry) {
      return (new ScalarPropBase$ScalarPropBase$Ops_init(regsitry)).copy_zemo5g$(void 0, void 0, void 0, void 0, void 0, void 0, ScalarPropBase$Ops$Companion$array$lambda);
    };
  }));
  ScalarPropBase$Ops$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScalarPropBase$Ops$Companion_instance = null;
  function ScalarPropBase$Ops$Companion_getInstance() {
    if (ScalarPropBase$Ops$Companion_instance === null) {
      new ScalarPropBase$Ops$Companion();
    }
    return ScalarPropBase$Ops$Companion_instance;
  }
  function ScalarPropBase$ScalarPropBase$Ops_init$lambda(it) {
    return it;
  }
  function ScalarPropBase$ScalarPropBase$Ops_init$lambda_0(it) {
    return it;
  }
  function ScalarPropBase$ScalarPropBase$Ops_init$lambda_1() {
    return common.None;
  }
  ScalarPropBase$Ops.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ops',
    interfaces: []
  };
  ScalarPropBase$Ops.prototype.component1 = function () {
    return this.registry;
  };
  ScalarPropBase$Ops.prototype.component2 = function () {
    return this.ignoreDirty;
  };
  ScalarPropBase$Ops.prototype.component3 = function () {
    return this.read;
  };
  ScalarPropBase$Ops.prototype.component4 = function () {
    return this.write;
  };
  ScalarPropBase$Ops.prototype.component5 = function () {
    return this.merge;
  };
  ScalarPropBase$Ops.prototype.component6 = function () {
    return this.calculate;
  };
  ScalarPropBase$Ops.prototype.component7 = function () {
    return this.defaultValue;
  };
  ScalarPropBase$Ops.prototype.component8 = function () {
    return this.validate;
  };
  ScalarPropBase$Ops.prototype.copy_zemo5g$ = function (registry, ignoreDirty, read, write, merge, calculate, defaultValue, validate) {
    return new ScalarPropBase$Ops(registry === void 0 ? this.registry : registry, ignoreDirty === void 0 ? this.ignoreDirty : ignoreDirty, read === void 0 ? this.read : read, write === void 0 ? this.write : write, merge === void 0 ? this.merge : merge, calculate === void 0 ? this.calculate : calculate, defaultValue === void 0 ? this.defaultValue : defaultValue, validate === void 0 ? this.validate : validate);
  };
  ScalarPropBase$Ops.prototype.toString = function () {
    return 'Ops(registry=' + Kotlin.toString(this.registry) + (', ignoreDirty=' + Kotlin.toString(this.ignoreDirty)) + (', read=' + Kotlin.toString(this.read)) + (', write=' + Kotlin.toString(this.write)) + (', merge=' + Kotlin.toString(this.merge)) + (', calculate=' + Kotlin.toString(this.calculate)) + (', defaultValue=' + Kotlin.toString(this.defaultValue)) + (', validate=' + Kotlin.toString(this.validate)) + ')';
  };
  ScalarPropBase$Ops.prototype.hashCode = function () {
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
  ScalarPropBase$Ops.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.registry, other.registry) && Kotlin.equals(this.ignoreDirty, other.ignoreDirty) && Kotlin.equals(this.read, other.read) && Kotlin.equals(this.write, other.write) && Kotlin.equals(this.merge, other.merge) && Kotlin.equals(this.calculate, other.calculate) && Kotlin.equals(this.defaultValue, other.defaultValue) && Kotlin.equals(this.validate, other.validate)))));
  };
  Object.defineProperty(ScalarPropBase.prototype, 'iv', {
    get: function () {
      return get_0(this.initial);
    }
  });
  Object.defineProperty(ScalarPropBase.prototype, 'cv', {
    get: function () {
      return get_0(this.current);
    },
    set: function (v) {
      set_0(this.current, v);
    }
  });
  Object.defineProperty(ScalarPropBase.prototype, 'calculated', {
    get: function () {
      return this.ops.calculate != null;
    }
  });
  Object.defineProperty(ScalarPropBase.prototype, 'dirty', {
    get: function () {
      return this.dirty_ertkci$_0;
    }
  });
  Object.defineProperty(ScalarPropBase.prototype, 'validationErrors', {
    get: function () {
      return this.validationErrors_2t0eqo$_0.value;
    }
  });
  ScalarPropBase.prototype.calculateIsValid = function () {
    return this.validationErrors.invoke().isEmpty();
  };
  Object.defineProperty(ScalarPropBase.prototype, 'isValid', {
    get: function () {
      return this.isValid_2q115q$_0.value;
    }
  });
  ScalarPropBase.prototype.resetInitial = function () {
    this.initial.now = this.ops.defaultValue();
  };
  function ScalarPropBase$writeTo$lambda(this$ScalarPropBase, closure$o) {
    return function (it) {
      closure$o[this$ScalarPropBase.name] = this$ScalarPropBase.ops.write(it);
      return Unit;
    };
  }
  ScalarPropBase.prototype.writeTo_za3rmp$ = function (o) {
    this.beforeWrite();
    this.current.now.forEach_qlkmfe$(ScalarPropBase$writeTo$lambda(this, o));
  };
  ScalarPropBase.prototype.clearDirty = function () {
    this.initial.now = this.current.now;
  };
  ScalarPropBase.prototype.rollback = function () {
    this.current.now = this.initial.now;
  };
  function ScalarPropBase$dirty$lambda($receiver) {
    return false;
  }
  function ScalarPropBase$dirty$lambda_0(this$ScalarPropBase) {
    return function ($receiver) {
      if (this$ScalarPropBase.ignoreDirty)
        return false;
      else {
        return this$ScalarPropBase.calculateDirty();
      }
    };
  }
  function ScalarPropBase$validationErrors$lambda$lambda(this$ScalarPropBase) {
    return function ($receiver) {
      return this$ScalarPropBase.ops.validate(this$ScalarPropBase.current.invoke());
    };
  }
  function ScalarPropBase$validationErrors$lambda(this$ScalarPropBase) {
    return function () {
      return Rx_init(killable.NoKill, ScalarPropBase$validationErrors$lambda$lambda(this$ScalarPropBase));
    };
  }
  function ScalarPropBase$isValid$lambda$lambda(this$ScalarPropBase) {
    return function ($receiver) {
      return this$ScalarPropBase.calculateIsValid();
    };
  }
  function ScalarPropBase$isValid$lambda(this$ScalarPropBase) {
    return function () {
      return Rx_init(killable.NoKill, ScalarPropBase$isValid$lambda$lambda(this$ScalarPropBase));
    };
  }
  function ScalarPropBase$beforeWrite$lambda$lambda(closure$c) {
    return function ($receiver) {
      return closure$c();
    };
  }
  function ScalarPropBase$beforeWrite$lambda$lambda_0(this$ScalarPropBase) {
    return function ($receiver, it) {
      this$ScalarPropBase.calced.now = it;
      return Unit;
    };
  }
  function ScalarPropBase$beforeWrite$lambda$lambda_1(this$ScalarPropBase) {
    return function () {
      if (this$ScalarPropBase.calculationActive) {
        this$ScalarPropBase.current.now = this$ScalarPropBase.calced.now.value;
      }
      return Unit;
    };
  }
  function ScalarPropBase$beforeWrite$lambda() {
    return Unit;
  }
  ScalarPropBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScalarPropBase',
    interfaces: [Prop]
  };
  function baseProp$lambda$lambda(closure$wrapper) {
    return function (d) {
      var $receiver = closure$wrapper(d);
      $receiver.props.extractInitial_za3rmp$(d);
      return $receiver;
    };
  }
  function baseProp$lambda$lambda_0(t) {
    return t.props.write();
  }
  function baseProp$lambda$lambda_1(f, f_0) {
    throw Error_init('merge should not be called for BaseValProp');
  }
  function baseProp$lambda(this$baseProp, closure$wrapper) {
    return function (n) {
      return new BaseValProp(n, this$baseProp.copy_zemo5g$(void 0, void 0, baseProp$lambda$lambda(closure$wrapper), baseProp$lambda$lambda_0, baseProp$lambda$lambda_1), closure$wrapper);
    };
  }
  function baseProp($receiver, wrapper) {
    return named(baseProp$lambda($receiver, wrapper));
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function dontCalculate(ps, fn) {
    var destination = ArrayList_init(ps.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== ps.length; ++tmp$) {
      var item = ps[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var saved = item.calculationActive;
      item.calculationActive = false;
      tmp$_0.call(destination, to(item, saved));
    }
    var st = destination;
    try {
      return fn();
    }
    finally {
      var tmp$_1;
      tmp$_1 = st.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        element.first.calculationActive = element.second;
      }
    }
  }
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
  function ScalarPropBase$Ops$Companion$array$lambda() {
    return new Some([]);
  }
  function arrayOf($receiver) {
    return (new ScalarPropBase$Ops($receiver.registry)).copy_zemo5g$(void 0, void 0, void 0, void 0, void 0, void 0, ScalarPropBase$Ops$Companion$array$lambda).map_4zme6a$(arrayOf$lambda($receiver), arrayOf$lambda_0($receiver));
  }
  function toSet$lambda(it) {
    return toSet(it);
  }
  function toSet$lambda_0(it) {
    return copyToArray(it);
  }
  function toSet$lambda$lambda(this$toSet, closure$mapped) {
    return function (old, new_0) {
      var receiver = SetDiff.Companion.of_lk58qy$(old, new_0);
      var this$toSet_0 = this$toSet;
      var closure$mapped_0 = closure$mapped;
      var block$result;
      if (receiver.added.isEmpty()) {
        block$result = get_binderOps().arrayRemove(this$toSet_0.write(copyToArray(receiver.removed)));
      }
       else if (receiver.removed.isEmpty()) {
        block$result = get_binderOps().arrayUnion(this$toSet_0.write(copyToArray(receiver.added)));
      }
       else {
        block$result = closure$mapped_0.write(new_0);
      }
      return block$result;
    };
  }
  function toSet_0($receiver) {
    var mapped = $receiver.map_4zme6a$(toSet$lambda, toSet$lambda_0);
    return mapped.copy_zemo5g$(void 0, void 0, void 0, void 0, toSet$lambda$lambda($receiver, mapped));
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
  function IdState() {
  }
  function IdState$New(id) {
    IdState.call(this);
    this.id = id;
    this.deleted_a7d36n$_0 = false;
  }
  Object.defineProperty(IdState$New.prototype, 'deleted', {
    get: function () {
      return this.deleted_a7d36n$_0;
    }
  });
  IdState$New.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'New',
    interfaces: [IdState]
  };
  function IdState$Persisted(id, deleted) {
    if (deleted === void 0)
      deleted = false;
    IdState.call(this);
    this.id = id;
    this.deleted_bghjos$_0 = deleted;
  }
  Object.defineProperty(IdState$Persisted.prototype, 'deleted', {
    get: function () {
      return this.deleted_bghjos$_0;
    }
  });
  IdState$Persisted.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Persisted',
    interfaces: [IdState]
  };
  IdState$Persisted.prototype.component1 = function () {
    return this.id;
  };
  IdState$Persisted.prototype.component2 = function () {
    return this.deleted;
  };
  IdState$Persisted.prototype.copy_iuyhfk$ = function (id, deleted) {
    return new IdState$Persisted(id === void 0 ? this.id : id, deleted === void 0 ? this.deleted : deleted);
  };
  IdState$Persisted.prototype.toString = function () {
    return 'Persisted(id=' + Kotlin.toString(this.id) + (', deleted=' + Kotlin.toString(this.deleted)) + ')';
  };
  IdState$Persisted.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.deleted) | 0;
    return result;
  };
  IdState$Persisted.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.deleted, other.deleted)))));
  };
  IdState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdState',
    interfaces: []
  };
  function FBProps(initial) {
    Props.call(this, initial);
  }
  function FBProps$set_FBProps$collection$lambda(closure$v) {
    return function (st) {
      if (Kotlin.isType(st, IdState$New))
        return new IdState$New(closure$v);
      else if (Kotlin.isType(st, IdState$Persisted))
        return st.copy_iuyhfk$(closure$v.doc_61zpoe$(st.id.id));
      else
        return Kotlin.noWhenBranchMatched();
    };
  }
  Object.defineProperty(FBProps.prototype, 'collection', {
    get: function () {
      var st = this.id.now;
      var block$result;
      if (Kotlin.isType(st, IdState$New)) {
        block$result = st.id;
      }
       else if (Kotlin.isType(st, IdState$Persisted)) {
        block$result = ensureNotNull(st.id.parent);
      }
       else {
        block$result = Kotlin.noWhenBranchMatched();
      }
      return block$result;
    },
    set: function (v) {
      this.id.transform_ru8m0w$(FBProps$set_FBProps$collection$lambda(v));
    }
  });
  function FBProps$persistedFB$lambda(closure$id) {
    return function (i) {
      var tmp$;
      return new IdState$Persisted((Kotlin.isType(tmp$ = i, IdState$New) ? tmp$ : throwCCE()).id.doc_61zpoe$(closure$id));
    };
  }
  FBProps.prototype.persistedFB_61zpoe$ = function (id) {
    this.id.transform_ru8m0w$(FBProps$persistedFB$lambda(id));
  };
  Object.defineProperty(FBProps.prototype, 'docWrapOrFail', {
    get: function () {
      var tmp$;
      return (Kotlin.isType(tmp$ = this.id.now, IdState$Persisted) ? tmp$ : throwCCE()).id;
    }
  });
  Object.defineProperty(FBProps.prototype, 'idOrFail', {
    get: function () {
      return this.docWrapOrFail.id;
    }
  });
  function FBProps$save$lambda$lambda(closure$dw) {
    return function (it) {
      return new IdState$Persisted(closure$dw);
    };
  }
  FBProps.prototype.save = function () {
    var ids = this.id.now;
    var block$result;
    if (Kotlin.isType(ids, IdState$New)) {
      var did = get_binderOps().createId(ids.id);
      var dw = ids.id.doc_61zpoe$(did);
      var r = get_binderOps().write(dw, this.write());
      this.id.transform_ru8m0w$(FBProps$save$lambda$lambda(dw));
      block$result = r;
    }
     else if (Kotlin.isType(ids, IdState$Persisted)) {
      block$result = get_binderOps().merge(ids.id, this.merge());
    }
     else {
      block$result = Kotlin.noWhenBranchMatched();
    }
    return block$result;
  };
  FBProps.prototype.saveIfDirty = function () {
    if (this.dirty.now) {
      this.save();
    }
  };
  FBProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FBProps',
    interfaces: [Props]
  };
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function Props(initial) {
    this.id = new Var(new IdState$New(initial));
    this.list_8be2vx$ = emptyList();
    this.isPersisted_sjw2uf$_0 = lazy(Props$isPersisted$lambda(this));
    this.isDeleted_446zy9$_0 = lazy(Props$isDeleted$lambda(this));
    this.isValid_e2ztvi$_0 = lazy(Props$isValid$lambda(this));
    this.onDeleted_7zgssq$_0 = lazy(Props$onDeleted$lambda(this));
    this.live = new Var(false);
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
  Props.prototype.persisted_11rd$ = function (idv) {
    this.id.now = new IdState$Persisted(idv);
  };
  function Props$set_Props$deleted$lambda(closure$v) {
    return function (s) {
      if (Kotlin.isType(s, IdState$Persisted))
        return s.copy_iuyhfk$(void 0, closure$v);
      else
        return s;
    };
  }
  Object.defineProperty(Props.prototype, 'deleted', {
    get: function () {
      return this.id.now.deleted;
    },
    set: function (v) {
      this.id.transform_ru8m0w$(Props$set_Props$deleted$lambda(v));
    }
  });
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
    if (!this.isPersisted.now) {
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
  Props.prototype.deleteTo_za3rmp$ = function (o) {
    var tmp$;
    tmp$ = this.list_8be2vx$.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.deleteTo_za3rmp$(o);
    }
  };
  function Props$isPersisted$lambda$lambda(this$Props) {
    return function ($receiver) {
      return Kotlin.isType(this$Props.id.invoke(), IdState$Persisted);
    };
  }
  function Props$isPersisted$lambda(this$Props) {
    return function () {
      return Rx_init(killable.NoKill, Props$isPersisted$lambda$lambda(this$Props));
    };
  }
  function Props$isDeleted$lambda$lambda(this$Props) {
    return function ($receiver) {
      return this$Props.id.invoke().deleted;
    };
  }
  function Props$isDeleted$lambda(this$Props) {
    return function () {
      return Rx_init(killable.NoKill, Props$isDeleted$lambda$lambda(this$Props));
    };
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  function Props$isValid$lambda$lambda(this$Props) {
    return function ($receiver) {
      var $receiver_0 = this$Props.list_8be2vx$;
      var all$result;
      all$break: do {
        var tmp$;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$ = $receiver_0.iterator();
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
      return Rx_init(killable.NoKill, Props$isValid$lambda$lambda(this$Props));
    };
  }
  function Props$onDeleted$lambda$lambda(closure$l) {
    return function ($receiver, it) {
      if (it)
        closure$l.fire();
      return Unit;
    };
  }
  function Props$onDeleted$lambda(this$Props) {
    return function () {
      var l = new Listeners();
      this$Props.isDeleted.forEach_yk5nc8$(killable.NoKill, Props$onDeleted$lambda$lambda(l));
      return l;
    };
  }
  function Props$dirty$lambda$lambda(this$Props) {
    return function ($receiver) {
      var $receiver_0 = this$Props.list_8be2vx$;
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver_0.iterator();
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
      return Rx_init(killable.NoKill, Props$dirty$lambda$lambda(this$Props));
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
  function HasFBProps() {
  }
  HasFBProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasFBProps',
    interfaces: [HasProps]
  };
  function saveIfDirty($receiver) {
    $receiver.props.saveIfDirty();
  }
  function SetAndSaveProp() {
  }
  SetAndSaveProp.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SetAndSaveProp',
    interfaces: []
  };
  function get_saved$ObjectLiteral(this$saved) {
    this.this$saved = this$saved;
  }
  get_saved$ObjectLiteral.prototype.remAssign_11rb$ = function (v) {
    this.this$saved.cv = v;
    var $receiver = this.this$saved.thisRef.props;
    $receiver.saveIfDirty();
    $receiver.clearDirty();
  };
  get_saved$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SetAndSaveProp]
  };
  function get_saved($receiver) {
    return new get_saved$ObjectLiteral($receiver);
  }
  function BaseVal(o) {
    this.o = o;
  }
  Object.defineProperty(BaseVal.prototype, 'props', {
    get: function () {
      return this.o.props;
    }
  });
  BaseVal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseVal',
    interfaces: [HasProps]
  };
  function Base(o) {
    if (o === void 0)
      o = new FBPropFactory(new CollectionWrap(''));
    BaseVal.call(this, o);
    this.$delegate_4ouut3$_0 = o;
  }
  Object.defineProperty(Base.prototype, 'props', {
    get: function () {
      return this.$delegate_4ouut3$_0.props;
    }
  });
  Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Base',
    interfaces: [HasFBProps, BaseVal]
  };
  function BaseRootVal() {
    BaseVal.call(this, new PropFactory(Unit));
    this.type_dn9lyg$_0 = this.o.scalar_287e2$().withDefault_skz6mo$(BaseRootVal$type$lambda(this)).prop_aspey6$().provideDelegate_lrcp0p$(this, BaseRootVal$type_metadata);
  }
  var BaseRootVal$type_metadata = new PropertyMetadata('type');
  Object.defineProperty(BaseRootVal.prototype, 'type', {
    get: function () {
      return this.type_dn9lyg$_0.getValue_lrcp0p$(this, BaseRootVal$type_metadata);
    }
  });
  function BaseRootVal$type$lambda(this$BaseRootVal) {
    return function () {
      return get_js(Kotlin.getKClassFromExpression(this$BaseRootVal)).name;
    };
  }
  BaseRootVal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseRootVal',
    interfaces: [BaseVal]
  };
  function BaseRoot() {
    Base.call(this);
    this.type_isyvtp$_0 = this.o.scalar_287e2$().withDefault_skz6mo$(BaseRoot$type$lambda(this)).prop_aspey6$().provideDelegate_lrcp0p$(this, BaseRoot$type_metadata);
  }
  var BaseRoot$type_metadata = new PropertyMetadata('type');
  Object.defineProperty(BaseRoot.prototype, 'type', {
    get: function () {
      return this.type_isyvtp$_0.getValue_lrcp0p$(this, BaseRoot$type_metadata);
    }
  });
  function BaseRoot$type$lambda(this$BaseRoot) {
    return function () {
      return get_js(Kotlin.getKClassFromExpression(this$BaseRoot)).name;
    };
  }
  BaseRoot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseRoot',
    interfaces: [Base]
  };
  function BaseRootCheck() {
    BaseRootVal.call(this);
  }
  BaseRootCheck.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseRootCheck',
    interfaces: [BaseRootVal]
  };
  function currentFrom($receiver, d) {
    initFrom($receiver, d);
    $receiver.props.rollback();
    return $receiver;
  }
  function initFrom($receiver, d) {
    $receiver.props.extractInitial_za3rmp$(d);
    return $receiver;
  }
  function wrapper$lambda(closure$typeMap) {
    return function (d) {
      var $receiver = new BaseRootCheck();
      $receiver.props.extractInitial_za3rmp$(d);
      return getValue(closure$typeMap, $receiver.type.initial.now.get())();
    };
  }
  function wrapper(classes) {
    var destination = ArrayList_init(classes.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== classes.length; ++tmp$) {
      var item = classes[tmp$];
      destination.add_11rb$(to(ensureNotNull(Kotlin.getKClassFromExpression(item()).simpleName), item));
    }
    var typeMap = toMap(destination);
    return wrapper$lambda(typeMap);
  }
  function withCollection($receiver, c) {
    $receiver.props.collection = c;
    return $receiver;
  }
  function FBPropFactory(initial) {
    BasePropFactory.call(this, new FBProps(initial));
  }
  FBPropFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FBPropFactory',
    interfaces: [HasFBProps, BasePropFactory]
  };
  function PropFactory(initial) {
    BasePropFactory.call(this, new Props(initial));
  }
  PropFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropFactory',
    interfaces: [BasePropFactory]
  };
  function BasePropFactory(props) {
    this.props_ndmcrq$_0 = props;
    this.registry_6dehl9$_0 = new BasePropFactory$registry$ObjectLiteral(this);
  }
  Object.defineProperty(BasePropFactory.prototype, 'props', {
    get: function () {
      return this.props_ndmcrq$_0;
    }
  });
  BasePropFactory.prototype.scalar_287e2$ = function () {
    return new ScalarPropBase$Ops(this.registry_6dehl9$_0);
  };
  BasePropFactory.prototype.array_287e2$ = function () {
    return (new ScalarPropBase$Ops(this.registry_6dehl9$_0)).copy_zemo5g$(void 0, void 0, void 0, void 0, void 0, void 0, ScalarPropBase$Ops$Companion$array$lambda);
  };
  BasePropFactory.prototype.enum_nxd2ia$ = defineInlineFunction('appsimake-firebaseshr.firebaseshr.BasePropFactory.enum_nxd2ia$', wrapFunction(function () {
    function BasePropFactory$enum$lambda(it) {
      return it.name;
    }
    function BasePropFactory$enum$lambda_0(typeClosure$E, isE) {
      return function (it) {
        return typeClosure$E.valueOf_61zpoe$(it);
      };
    }
    return function (E_0, isE) {
      return this.scalar_287e2$().map_4zme6a$(BasePropFactory$enum$lambda_0(E_0, isE), BasePropFactory$enum$lambda);
    };
  }));
  function BasePropFactory$registry$ObjectLiteral(this$BasePropFactory) {
    this.this$BasePropFactory = this$BasePropFactory;
  }
  BasePropFactory$registry$ObjectLiteral.prototype.register_anotdv$ = function (prop) {
    var tmp$;
    tmp$ = this.this$BasePropFactory.props;
    tmp$.list_8be2vx$ = plus_0(tmp$.list_8be2vx$, prop);
  };
  BasePropFactory$registry$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [PropRegsitry]
  };
  BasePropFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasePropFactory',
    interfaces: [HasProps]
  };
  function get_ids$lambda(it) {
    return it.props.idOrFail;
  }
  function get_ids($receiver) {
    return map($receiver, get_ids$lambda);
  }
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$firebaseshr = _.firebaseshr || (_.firebaseshr = {});
  package$firebaseshr.BaseValProp = BaseValProp;
  package$firebaseshr.hasOwnProperty_hwpqgh$ = hasOwnProperty;
  package$firebaseshr.opt_h8phid$ = opt;
  Object.defineProperty(PropOps, 'Companion', {
    get: PropOps$Companion_getInstance
  });
  package$firebaseshr.PropOps = PropOps;
  Object.defineProperty(package$firebaseshr, 'binderOpsInternal_8be2vx$', {
    get: function () {
      return binderOpsInternal;
    },
    set: function (value) {
      binderOpsInternal = value;
    }
  });
  Object.defineProperty(package$firebaseshr, 'binderOps', {
    get: get_binderOps
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
  package$firebaseshr.ScalarPropBase = ScalarPropBase;
  Object.defineProperty(ScalarPropBase$Ops, 'Companion', {
    get: ScalarPropBase$Ops$Companion_getInstance
  });
  ScalarPropBase.Ops = ScalarPropBase$Ops;
  package$firebaseshr.baseProp_k7618i$ = baseProp;
  package$firebaseshr.dontCalculate_ge869c$ = dontCalculate;
  $$importsForInline$$['appsimake-firebaseshr'] = _;
  package$firebaseshr.arrayOf_pzd6ei$ = arrayOf;
  package$firebaseshr.toSet_c652p6$ = toSet_0;
  package$firebaseshr.toList_c652p6$ = toList_0;
  package$firebaseshr.sorted_huqnbb$ = sorted;
  IdState.New = IdState$New;
  IdState.Persisted = IdState$Persisted;
  package$firebaseshr.IdState = IdState;
  package$firebaseshr.FBProps = FBProps;
  package$firebaseshr.Props = Props;
  package$firebaseshr.HasProps = HasProps;
  package$firebaseshr.HasFBProps = HasFBProps;
  package$firebaseshr.saveIfDirty_4zsub3$ = saveIfDirty;
  package$firebaseshr.SetAndSaveProp = SetAndSaveProp;
  package$firebaseshr.get_saved_2xbzbx$ = get_saved;
  package$firebaseshr.BaseVal = BaseVal;
  package$firebaseshr.Base = Base;
  package$firebaseshr.BaseRootVal = BaseRootVal;
  package$firebaseshr.BaseRoot = BaseRoot;
  package$firebaseshr.BaseRootCheck = BaseRootCheck;
  package$firebaseshr.currentFrom_d5knkn$ = currentFrom;
  package$firebaseshr.initFrom_bruz9y$ = initFrom;
  package$firebaseshr.wrapper_c00y0o$ = wrapper;
  package$firebaseshr.withCollection_qmn23v$ = withCollection;
  package$firebaseshr.FBPropFactory = FBPropFactory;
  package$firebaseshr.PropFactory = PropFactory;
  package$firebaseshr.BasePropFactory = BasePropFactory;
  package$firebaseshr.get_ids_oai7g8$ = get_ids;
  binderOpsInternal = null;
  Kotlin.defineModule('appsimake-firebaseshr', _);
  return _;
});

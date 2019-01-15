if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonshr'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonshr'.");
}
this['appsimake-commonshr'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Any = Object;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var ensureNotNull = Kotlin.ensureNotNull;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var throwCCE = Kotlin.throwCCE;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var minus = Kotlin.kotlin.collections.minus_2ws7j4$;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Exception = Kotlin.kotlin.Exception;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var plus_0 = Kotlin.kotlin.collections.plus_xfiyik$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var minus_0 = Kotlin.kotlin.collections.minus_khz7k3$;
  var lazyOf = Kotlin.kotlin.lazyOf_mh5how$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var equals = Kotlin.equals;
  var throwUPAE = Kotlin.throwUPAE;
  var minus_1 = Kotlin.kotlin.collections.minus_xfiyik$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  Success.prototype = Object.create(Try.prototype);
  Success.prototype.constructor = Success;
  Failure.prototype = Object.create(Try.prototype);
  Failure.prototype.constructor = Failure;
  Some.prototype = Object.create(Optional.prototype);
  Some.prototype.constructor = Some;
  None.prototype = Object.create(Optional.prototype);
  None.prototype.constructor = None;
  RxCalc.prototype = Object.create(RxChild.prototype);
  RxCalc.prototype.constructor = RxCalc;
  RxVal.prototype = Object.create(RxParent.prototype);
  RxVal.prototype.constructor = RxVal;
  Var.prototype = Object.create(RxVal.prototype);
  Var.prototype.constructor = Var;
  RxIface$folded$ObjectLiteral.prototype = Object.create(Var.prototype);
  RxIface$folded$ObjectLiteral.prototype.constructor = RxIface$folded$ObjectLiteral;
  Rx.prototype = Object.create(RxVal.prototype);
  Rx.prototype.constructor = Rx;
  var dyn = defineInlineFunction('appsimake-commonshr.common.dyn', function () {
    return {};
  });
  var obj = defineInlineFunction('appsimake-commonshr.common.obj_287e2$', function () {
    return {};
  });
  var dyn_0 = defineInlineFunction('appsimake-commonshr.common.dyn_5ij4lk$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (fn) {
      var tmp$;
      var $receiver = (tmp$ = {}) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
      fn($receiver);
      return $receiver;
    };
  }));
  var obj_0 = defineInlineFunction('appsimake-commonshr.common.obj_7qq44f$', function (fn) {
    var $receiver = {};
    fn($receiver);
    return $receiver;
  });
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
  NamedDelegate.prototype.provideDelegate_n5byny$ = function (thisRef, prop) {
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
  function Listeners() {
    this.listeners = emptyList();
  }
  Listeners.prototype.plusAssign_o14v8n$ = function (listener) {
    this.add_o14v8n$(listener);
  };
  function Listeners$add$lambda(this$Listeners, closure$listener) {
    return function () {
      this$Listeners.listeners = minus(this$Listeners.listeners, closure$listener);
      return Unit;
    };
  }
  Listeners.prototype.add_o14v8n$ = function (listener) {
    this.listeners = plus(this.listeners, listener);
    return Listeners$add$lambda(this, listener);
  };
  Listeners.prototype.fire = function () {
    var tmp$;
    tmp$ = this.listeners.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element();
    }
  };
  Listeners.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Listeners',
    interfaces: []
  };
  function Emitter() {
    this.listeners = emptyList();
  }
  Emitter.prototype.plusAssign_qlkmfe$ = function (listener) {
    this.add_qlkmfe$(listener);
  };
  function Emitter$add$lambda(this$Emitter, closure$listener) {
    return function () {
      this$Emitter.listeners = minus(this$Emitter.listeners, closure$listener);
      return Unit;
    };
  }
  Emitter.prototype.add_qlkmfe$ = function (listener) {
    this.listeners = plus(this.listeners, listener);
    return Killable$Companion_getInstance().once_o14v8n$(Emitter$add$lambda(this, listener));
  };
  Emitter.prototype.fire_11rb$ = function (t) {
    var tmp$;
    tmp$ = this.listeners.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(t);
    }
  };
  Emitter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Emitter',
    interfaces: []
  };
  function Try() {
    Try$Companion_getInstance();
  }
  function Try$Companion() {
    Try$Companion_instance = this;
  }
  Try$Companion.prototype.invoke_lnyleu$ = function (body_0, continuation_0, suspended) {
    var instance = new Coroutine$invoke_lnyleu$(this, body_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$invoke_lnyleu$($this, body_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$body = body_0;
  }
  Coroutine$invoke_lnyleu$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$invoke_lnyleu$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$invoke_lnyleu$.prototype.constructor = Coroutine$invoke_lnyleu$;
  Coroutine$invoke_lnyleu$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$body(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$tmp$ = new Success(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            if (Kotlin.isType(e, Exception)) {
              this.local$tmp$ = new Failure(e);
            }
             else
              throw e;
            this.state_0 = 3;
            continue;
          case 3:
            return this.local$tmp$;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
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
  Try$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Try$Companion_instance = null;
  function Try$Companion_getInstance() {
    if (Try$Companion_instance === null) {
      new Try$Companion();
    }
    return Try$Companion_instance;
  }
  function Try$map$lambda(closure$f_0, this$Try_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Try$map$lambda(closure$f_0, this$Try_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Try$map$lambda(closure$f_0, this$Try_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$f = closure$f_0;
    this.local$this$Try = this$Try_0;
  }
  Coroutine$Try$map$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Try$map$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Try$map$lambda.prototype.constructor = Coroutine$Try$map$lambda;
  Coroutine$Try$map$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$f(this.local$this$Try.value, this);
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
  Try.prototype.map_v7st1v$ = function (f_0, continuation_0, suspended) {
    var instance = new Coroutine$map_v7st1v$(this, f_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$map_v7st1v$($this, f_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
    this.local$f = f_0;
  }
  Coroutine$map_v7st1v$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$map_v7st1v$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$map_v7st1v$.prototype.constructor = Coroutine$map_v7st1v$;
  Coroutine$map_v7st1v$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (Kotlin.isType(this.$this, Success)) {
              this.state_0 = 2;
              this.result_0 = Try$Companion_getInstance().invoke_lnyleu$(Try$map$lambda(this.local$f, this.$this), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(this.$this, Failure))
                this.local$tmp$_0 = Kotlin.isType(tmp$ = this.$this, Failure) ? tmp$ : throwCCE();
              else
                this.local$tmp$_0 = Kotlin.noWhenBranchMatched();
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 3;
            continue;
          case 3:
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
  Try.prototype.flatMap_fzayo0$ = function (f) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(this, Success))
      tmp$_0 = f(this.value);
    else if (Kotlin.isType(this, Failure))
      tmp$_0 = Kotlin.isType(tmp$ = this, Failure) ? tmp$ : throwCCE();
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    return tmp$_0;
  };
  Try.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Try',
    interfaces: []
  };
  function Success(value) {
    Try.call(this);
    this.value = value;
  }
  Success.prototype.toOptional = function () {
    return new Some(this.value);
  };
  Success.prototype.isSuccess = function () {
    return true;
  };
  Success.prototype.isFailure = function () {
    return false;
  };
  Success.prototype.getOrElse_11rb$ = function (default_0) {
    return this.value;
  };
  Success.prototype.get = function () {
    return this.value;
  };
  Success.prototype.orElse_vt7qim$ = function (default_0) {
    return this;
  };
  Success.prototype.fold_wsjhie$ = function (fa, fb) {
    try {
      return fb(this.value);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        return fa(e);
      }
       else
        throw e;
    }
  };
  Success.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Success',
    interfaces: [Try]
  };
  Success.prototype.component1 = function () {
    return this.value;
  };
  Success.prototype.copy_11rb$ = function (value) {
    return new Success(value === void 0 ? this.value : value);
  };
  Success.prototype.toString = function () {
    return 'Success(value=' + Kotlin.toString(this.value) + ')';
  };
  Success.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Success.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Failure(e) {
    Try.call(this);
    this.e = e;
  }
  Failure.prototype.toOptional = function () {
    return None_getInstance();
  };
  Failure.prototype.isSuccess = function () {
    return false;
  };
  Failure.prototype.isFailure = function () {
    return true;
  };
  Failure.prototype.getOrElse_11rb$ = function (default_0) {
    return default_0;
  };
  Failure.prototype.get = function () {
    throw this.e;
  };
  Failure.prototype.orElse_vt7qim$ = function (default_0) {
    return default_0;
  };
  Failure.prototype.fold_wsjhie$ = function (fa, fb) {
    return fa(this.e);
  };
  Failure.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Failure',
    interfaces: [Try]
  };
  Failure.prototype.component1 = function () {
    return this.e;
  };
  Failure.prototype.copy_tcv7n7$ = function (e) {
    return new Failure(e === void 0 ? this.e : e);
  };
  Failure.prototype.toString = function () {
    return 'Failure(e=' + Kotlin.toString(this.e) + ')';
  };
  Failure.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.e) | 0;
    return result;
  };
  Failure.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.e, other.e))));
  };
  function Optional() {
    Optional$Companion_getInstance();
  }
  function Optional$Companion() {
    Optional$Companion_instance = this;
  }
  Optional$Companion.prototype.toOptional_issdgt$ = function (value) {
    return value == null ? None_getInstance() : new Some(value);
  };
  Optional$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Optional$Companion_instance = null;
  function Optional$Companion_getInstance() {
    if (Optional$Companion_instance === null) {
      new Optional$Companion();
    }
    return Optional$Companion_instance;
  }
  Optional.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Optional',
    interfaces: []
  };
  function Some(value) {
    Optional.call(this);
    this.value = value;
  }
  Some.prototype.isEmpty = function () {
    return false;
  };
  Some.prototype.toString = function () {
    return 'Some(' + this.value + ')';
  };
  Some.prototype.get = function () {
    return this.value;
  };
  Some.prototype.orElse_isaiq7$ = function (default_0) {
    return this;
  };
  Some.prototype.map_2o04qz$ = function (fn) {
    return new Some(fn(this.value));
  };
  Some.prototype.any_ucl7l2$ = function (fn) {
    return fn(this.value);
  };
  Some.prototype.forEach_qlkmfe$ = function (fn) {
    fn(this.value);
  };
  Some.prototype.getOrElse_skz6lt$ = function (default_0) {
    return this.value;
  };
  Some.prototype.getOrDefault_11rb$ = function (default_0) {
    return this.value;
  };
  Some.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Some',
    interfaces: [Optional]
  };
  Some.prototype.component1 = function () {
    return this.value;
  };
  Some.prototype.copy_11rb$ = function (value) {
    return new Some(value === void 0 ? this.value : value);
  };
  Some.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Some.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function None() {
    None_instance = this;
    Optional.call(this);
  }
  None.prototype.isEmpty = function () {
    return true;
  };
  None.prototype.toString = function () {
    return 'None';
  };
  None.prototype.get = function () {
    throw NoSuchElementException_init();
  };
  None.prototype.orElse_isaiq7$ = function (default_0) {
    return default_0();
  };
  None.prototype.map_2o04qz$ = function (fn) {
    return None_getInstance();
  };
  None.prototype.any_ucl7l2$ = function (fn) {
    return false;
  };
  None.prototype.forEach_qlkmfe$ = function (fn) {
  };
  None.prototype.getOrElse_skz6lt$ = function (default_0) {
    return default_0();
  };
  None.prototype.getOrDefault_11rb$ = function (default_0) {
    return default_0;
  };
  None.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'None',
    interfaces: [Optional]
  };
  var None_instance = null;
  function None_getInstance() {
    if (None_instance === null) {
      new None();
    }
    return None_instance;
  }
  function toOptional($receiver) {
    return $receiver == null ? None_getInstance() : new Some($receiver);
  }
  function orEmpty($receiver) {
    return $receiver.getOrDefault_11rb$('');
  }
  function plus$lambda(closure$item) {
    return function (it) {
      return plus_0(it, closure$item);
    };
  }
  function plus$lambda_0(closure$item) {
    return function () {
      return new Some(setOf(closure$item));
    };
  }
  function plus_1($receiver, item) {
    return $receiver.map_2o04qz$(plus$lambda(item)).orElse_isaiq7$(plus$lambda_0(item));
  }
  function orEmpty_0($receiver) {
    return $receiver.getOrDefault_11rb$(emptySet());
  }
  function orEmpty_1($receiver) {
    return $receiver.getOrDefault_11rb$(emptyList());
  }
  function SetDiff(removed, added) {
    SetDiff$Companion_getInstance();
    if (removed === void 0) {
      removed = emptySet();
    }
    if (added === void 0) {
      added = emptySet();
    }
    this.removed = removed;
    this.added = added;
  }
  function SetDiff$Companion() {
    SetDiff$Companion_instance = this;
  }
  function SetDiff$Companion$of$lambda$lambda(closure$o) {
    return function (n) {
      return minus_0(closure$o, n);
    };
  }
  function SetDiff$Companion$of$lambda$lambda_0(closure$o) {
    return function () {
      return closure$o;
    };
  }
  function SetDiff$Companion$of$lambda(closure$new) {
    return function (o) {
      return closure$new.map_2o04qz$(SetDiff$Companion$of$lambda$lambda(o)).getOrElse_skz6lt$(SetDiff$Companion$of$lambda$lambda_0(o));
    };
  }
  function SetDiff$Companion$of$lambda_0() {
    return emptySet();
  }
  function SetDiff$Companion$of$lambda$lambda_1(closure$n) {
    return function (o) {
      return minus_0(closure$n, o);
    };
  }
  function SetDiff$Companion$of$lambda$lambda_2(closure$n) {
    return function () {
      return closure$n;
    };
  }
  function SetDiff$Companion$of$lambda_1(closure$old) {
    return function (n) {
      return closure$old.map_2o04qz$(SetDiff$Companion$of$lambda$lambda_1(n)).getOrElse_skz6lt$(SetDiff$Companion$of$lambda$lambda_2(n));
    };
  }
  function SetDiff$Companion$of$lambda_2() {
    return emptySet();
  }
  SetDiff$Companion.prototype.of_2xberu$ = function (old, new_0) {
    return new SetDiff(old.map_2o04qz$(SetDiff$Companion$of$lambda(new_0)).getOrElse_skz6lt$(SetDiff$Companion$of$lambda_0), new_0.map_2o04qz$(SetDiff$Companion$of$lambda_1(old)).getOrElse_skz6lt$(SetDiff$Companion$of$lambda_2));
  };
  SetDiff$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SetDiff$Companion_instance = null;
  function SetDiff$Companion_getInstance() {
    if (SetDiff$Companion_instance === null) {
      new SetDiff$Companion();
    }
    return SetDiff$Companion_instance;
  }
  SetDiff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SetDiff',
    interfaces: []
  };
  SetDiff.prototype.component1 = function () {
    return this.removed;
  };
  SetDiff.prototype.component2 = function () {
    return this.added;
  };
  SetDiff.prototype.copy_zfdv1o$ = function (removed, added) {
    return new SetDiff(removed === void 0 ? this.removed : removed, added === void 0 ? this.added : added);
  };
  SetDiff.prototype.toString = function () {
    return 'SetDiff(removed=' + Kotlin.toString(this.removed) + (', added=' + Kotlin.toString(this.added)) + ')';
  };
  SetDiff.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.removed) | 0;
    result = result * 31 + Kotlin.hashCode(this.added) | 0;
    return result;
  };
  SetDiff.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.removed, other.removed) && Kotlin.equals(this.added, other.added)))));
  };
  function toLazy($receiver) {
    return lazyOf($receiver);
  }
  function Killable() {
    Killable$Companion_getInstance();
  }
  function Killable$Companion() {
    Killable$Companion_instance = this;
    this.empty = new Killable$Companion$empty$ObjectLiteral();
  }
  Killable$Companion.prototype.once_o14v8n$ = function (fn) {
    return new OnceKillable(fn);
  };
  function Killable$Companion$of$ObjectLiteral(closure$fn) {
    this.closure$fn = closure$fn;
  }
  Killable$Companion$of$ObjectLiteral.prototype.kill = function () {
    this.closure$fn();
  };
  Killable$Companion$of$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Killable]
  };
  Killable$Companion.prototype.of_o14v8n$ = function (fn) {
    return new Killable$Companion$of$ObjectLiteral(fn);
  };
  function Killable$Companion$empty$ObjectLiteral() {
  }
  Killable$Companion$empty$ObjectLiteral.prototype.kill = function () {
  };
  Killable$Companion$empty$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Killable]
  };
  Killable$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Killable$Companion_instance = null;
  function Killable$Companion_getInstance() {
    if (Killable$Companion_instance === null) {
      new Killable$Companion();
    }
    return Killable$Companion_instance;
  }
  Killable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Killable',
    interfaces: []
  };
  function addedTo($receiver, killables) {
    killables.add_wii6vi$($receiver);
    return $receiver;
  }
  function OnceKillable(fn) {
    this.fn_0 = fn;
    this.killed_0 = false;
  }
  OnceKillable.prototype.kill = function () {
    if (!this.killed_0) {
      this.killed_0 = true;
      this.fn_0();
    }
  };
  OnceKillable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnceKillable',
    interfaces: [Killable]
  };
  function invoke($receiver) {
    $receiver.kill();
  }
  function add$lambda(closure$killable) {
    return function () {
      closure$killable.kill();
      return Unit;
    };
  }
  function add($receiver, killable) {
    return $receiver.add_o14v8n$(add$lambda(killable));
  }
  function KillableValue(value, killable) {
    this.value = value;
    this.killable = killable;
  }
  KillableValue.prototype.kill = function () {
    return this.killable.kill();
  };
  KillableValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillableValue',
    interfaces: [Killable]
  };
  function KillableValue_init(value, fn, $this) {
    $this = $this || Object.create(KillableValue.prototype);
    KillableValue.call($this, value, Killable$Companion_getInstance().once_o14v8n$(fn));
    return $this;
  }
  function Killables() {
    this.list_0 = emptyList();
    this.killed_0 = false;
  }
  Killables.prototype.plusAssign_o14v8n$ = function (listener) {
    this.add_o14v8n$(listener);
  };
  Killables.prototype.add_o14v8n$ = function (fn) {
    return this.add_wii6vi$(Killable$Companion_getInstance().once_o14v8n$(fn));
  };
  function Killables$add$lambda(this$Killables, closure$listener) {
    return function () {
      this$Killables.list_0 = minus(this$Killables.list_0, closure$listener);
      return Unit;
    };
  }
  Killables.prototype.add_wii6vi$ = function (listener) {
    var tmp$;
    if (equals(listener, Killable$Companion_getInstance().empty)) {
      return Killable$Companion_getInstance().empty;
    }
    if (!this.killed_0) {
      this.list_0 = plus(this.list_0, listener);
      tmp$ = Killable$Companion_getInstance().once_o14v8n$(Killables$add$lambda(this, listener));
    }
     else {
      listener.kill();
      tmp$ = Killable$Companion_getInstance().empty;
    }
    return tmp$;
  };
  Killables.prototype.kill = function () {
    if (!this.killed_0) {
      this.killed_0 = true;
      var l = this.list_0;
      this.list_0 = emptyList();
      var tmp$;
      tmp$ = l.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.kill();
      }
    }
  };
  Killables.prototype.plusAssign_wii6vi$ = function (killable) {
    this.add_wii6vi$(killable);
  };
  Killables.prototype.killables = function () {
    var $receiver = new Killables();
    $receiver.plusAssign_wii6vi$(this.add_wii6vi$($receiver));
    return $receiver;
  };
  Killables.prototype.seq = function () {
    var $receiver = KillableSeq_init();
    $receiver.onKill_8be2vx$.plusAssign_wii6vi$(this.add_wii6vi$($receiver));
    return $receiver;
  };
  Killables.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Killables',
    interfaces: [Killable]
  };
  function KillableSeq(current, onKill) {
    if (current === void 0)
      current = Killable$Companion_getInstance().empty;
    this.current_0 = current;
    this.onKill_8be2vx$ = onKill;
    this.killed_0 = false;
    this.onKill_8be2vx$.plusAssign_o14v8n$(KillableSeq_init$lambda(this));
  }
  KillableSeq.prototype.set_wii6vi$ = function (k) {
    if (this.killed_0) {
      k.kill();
    }
     else {
      invoke(this.current_0);
      this.current_0 = k;
    }
  };
  KillableSeq.prototype.set_o14v8n$ = function (fn) {
    this.set_wii6vi$(Killable$Companion_getInstance().once_o14v8n$(fn));
  };
  KillableSeq.prototype.plusAssign_o14v8n$ = function (fn) {
    this.set_o14v8n$(fn);
  };
  KillableSeq.prototype.plusAssign_wii6vi$ = function (fn) {
    this.set_wii6vi$(fn);
  };
  KillableSeq.prototype.clear = function () {
    this.set_wii6vi$(Killable$Companion_getInstance().empty);
  };
  KillableSeq.prototype.killables = function () {
    var $receiver = new Killables();
    this.set_wii6vi$($receiver);
    return $receiver;
  };
  KillableSeq.prototype.seq = function () {
    var $receiver = KillableSeq_init();
    this.set_wii6vi$($receiver);
    return $receiver;
  };
  KillableSeq.prototype.kill = function () {
    return this.onKill_8be2vx$.kill();
  };
  function KillableSeq_init$lambda(this$KillableSeq) {
    return function () {
      this$KillableSeq.killed_0 = true;
      invoke(this$KillableSeq.current_0);
      this$KillableSeq.current_0 = Killable$Companion_getInstance().empty;
      return Unit;
    };
  }
  KillableSeq.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillableSeq',
    interfaces: [Killable]
  };
  function KillableSeq_init(initial, $this) {
    if (initial === void 0)
      initial = Killable$Companion_getInstance().empty;
    $this = $this || Object.create(KillableSeq.prototype);
    KillableSeq.call($this, initial, new Killables());
    return $this;
  }
  var currentChild;
  var affected;
  function RxChild() {
    this.parents = emptyList();
  }
  RxChild.prototype.disconnectAll = function () {
    var tmp$;
    tmp$ = this.parents.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.children = minus(element.children, this);
    }
    this.parents = emptyList();
  };
  RxChild.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxChild',
    interfaces: []
  };
  function RxCalc(fn) {
    RxChild.call(this);
    this.fn_0 = fn;
    this.rx_kwbhe1$_0 = this.rx_kwbhe1$_0;
  }
  Object.defineProperty(RxCalc.prototype, 'rx', {
    get: function () {
      if (this.rx_kwbhe1$_0 == null)
        return throwUPAE('rx');
      return this.rx_kwbhe1$_0;
    },
    set: function (rx) {
      this.rx_kwbhe1$_0 = rx;
    }
  });
  RxCalc.prototype.recalc = function () {
    this.rx.setCurrentValue_1c3m6u$(this.recalcValue());
  };
  RxCalc.prototype.recalcValue = function () {
    this.disconnectAll();
    var savedCurrent = currentChild;
    currentChild = this;
    try {
      return this.fn_0();
    }
    finally {
      currentChild = savedCurrent;
    }
  };
  RxCalc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxCalc',
    interfaces: [RxChild]
  };
  function RxParent() {
    this.children = emptyList();
  }
  RxParent.prototype.recalcChildren = function () {
    var tmp$;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.recalc();
    }
  };
  RxParent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxParent',
    interfaces: []
  };
  function connect(parent, child) {
    if (!parent.children.contains_11rb$(child)) {
      parent.children = plus(parent.children, child);
      child.parents = plus(child.parents, parent);
    }
  }
  function Obs(parent, fn) {
    this.parent_0 = parent;
    this.fn_0 = fn;
  }
  Obs.prototype.kill = function () {
    this.parent_0.observers_8be2vx$.remove_11rb$(this);
  };
  Obs.prototype.fire = function () {
    this.fn_0(this.parent_0.now);
  };
  Obs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Obs',
    interfaces: [Killable]
  };
  function RxIface() {
  }
  RxIface.prototype.forEach_qlkmfe$ = function (fn) {
    fn(this.now);
    return this.forEachLater_qlkmfe$(fn);
  };
  function RxIface$fold$lambda(closure$fn, closure$z) {
    return function (it) {
      closure$z.v = closure$fn(closure$z.v, it);
      return Unit;
    };
  }
  RxIface.prototype.fold_b8xf17$ = function (z0, fn) {
    var z = {v: z0};
    return this.forEach_qlkmfe$(RxIface$fold$lambda(fn, z));
  };
  function RxIface$folded$ObjectLiteral(this$RxIface, closure$fn, v_0) {
    Var.call(this, v_0);
    this.killable = this$RxIface.forEach_qlkmfe$(RxIface$folded$ObjectLiteral$killable$lambda(closure$fn, this));
  }
  RxIface$folded$ObjectLiteral.prototype.kill = function () {
    this.killable.kill();
  };
  function RxIface$folded$ObjectLiteral$killable$lambda(closure$fn, this$) {
    return function (it) {
      this$.now = closure$fn(this$.now, it);
      return Unit;
    };
  }
  RxIface$folded$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [RxIfaceKillable, Var]
  };
  RxIface.prototype.folded_b8xf17$ = function (z0, fn) {
    return new RxIface$folded$ObjectLiteral(this, fn, z0);
  };
  function RxIface$foldLater$lambda(closure$fn, closure$z) {
    return function (it) {
      closure$z.v = closure$fn(closure$z.v, it);
      return Unit;
    };
  }
  RxIface.prototype.foldLater_b8xf17$ = function (z0, fn) {
    var z = {v: z0};
    return this.forEachLater_qlkmfe$(RxIface$foldLater$lambda(fn, z));
  };
  function RxIface$onChange$lambda(closure$fn) {
    return function (old, new_0) {
      closure$fn(old, new_0);
      return new_0;
    };
  }
  RxIface.prototype.onChange_nrmh93$ = function (fn) {
    return this.foldLater_b8xf17$(this.now, RxIface$onChange$lambda(fn));
  };
  function RxIface$onOff$lambda(closure$off, closure$on) {
    return function (old, new_0) {
      closure$off(old);
      closure$on(new_0);
      return Unit;
    };
  }
  RxIface.prototype.onOff_uc1utc$ = function (on, off) {
    on(this.now);
    return this.onChange_nrmh93$(RxIface$onOff$lambda(off, on));
  };
  function RxIface$off$lambda(closure$offFn) {
    return function (old, f) {
      closure$offFn(old);
      return Unit;
    };
  }
  RxIface.prototype.off_qlkmfe$ = function (offFn) {
    return this.onChange_nrmh93$(RxIface$off$lambda(offFn));
  };
  RxIface.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RxIface',
    interfaces: []
  };
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function RxVal(currentValue) {
    RxParent.call(this);
    this.currentValue = currentValue;
    this.oldValue_ofkn4b$_0 = this.currentValue;
    this.observers_8be2vx$ = ArrayList_init_0();
  }
  Object.defineProperty(RxVal.prototype, 'now', {
    get: function () {
      return this.currentValue;
    }
  });
  RxVal.prototype.invoke = function () {
    connect(this, ensureNotNull(currentChild));
    return this.currentValue;
  };
  RxVal.prototype.setCurrentValue_1c3m6u$ = function (v) {
    if (!equals(this.oldValue_ofkn4b$_0, v)) {
      affected.add_11rb$(this);
    }
     else {
      affected.remove_11rb$(this);
    }
    if (!equals(this.currentValue, v)) {
      this.currentValue = v;
      this.recalcChildren();
    }
  };
  RxVal.prototype.clearDirty_8be2vx$ = function () {
    this.oldValue_ofkn4b$_0 = this.currentValue;
  };
  RxVal.prototype.forEachLater_qlkmfe$ = function (fn) {
    var obs = new Obs(this, fn);
    this.observers_8be2vx$.add_11rb$(obs);
    return obs;
  };
  RxVal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxVal',
    interfaces: [RxIface, RxParent]
  };
  function killOld$lambda(it) {
    it.kill();
    return Unit;
  }
  function killOld($receiver) {
    return $receiver.off_qlkmfe$(killOld$lambda);
  }
  function add$lambda$lambda(closure$v) {
    return function (it) {
      return plus_0(it, closure$v);
    };
  }
  function add$lambda$lambda_0(closure$v) {
    return function () {
      return new Some(setOf(closure$v));
    };
  }
  function add$lambda_0(closure$v) {
    return function (c) {
      return c.map_2o04qz$(add$lambda$lambda(closure$v)).orElse_isaiq7$(add$lambda$lambda_0(closure$v));
    };
  }
  function add_0($receiver, v) {
    $receiver.transform_ru8m0w$(add$lambda_0(v));
  }
  function remove$lambda$lambda(closure$v) {
    return function (it) {
      return minus_1(it, closure$v);
    };
  }
  function remove$lambda(closure$v) {
    return function (c) {
      return c.map_2o04qz$(remove$lambda$lambda(closure$v));
    };
  }
  function remove($receiver, v) {
    $receiver.transform_ru8m0w$(remove$lambda(v));
  }
  function diffs$lambda(closure$fn) {
    return function (old, new_0) {
      closure$fn(SetDiff$Companion_getInstance().of_2xberu$(old, new_0));
      return Unit;
    };
  }
  function diffs($receiver, fn) {
    fn(SetDiff$Companion_getInstance().of_2xberu$(None_getInstance(), $receiver.now));
    return $receiver.onChange_nrmh93$(diffs$lambda(fn));
  }
  function RxIfaceKillable() {
  }
  RxIfaceKillable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RxIfaceKillable',
    interfaces: [Killable, RxIface]
  };
  function Rx(currentValue, calc) {
    RxVal.call(this, currentValue);
    this.calc_0 = calc;
    this.calc_0.rx = this;
  }
  Rx.prototype.kill = function () {
    this.calc_0.disconnectAll();
  };
  Rx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rx',
    interfaces: [RxIfaceKillable, RxVal]
  };
  function Rx_init(calc, $this) {
    $this = $this || Object.create(Rx.prototype);
    Rx.call($this, calc.recalcValue(), calc);
    return $this;
  }
  function Rx_init_0(fn, $this) {
    $this = $this || Object.create(Rx.prototype);
    Rx_init(new RxCalc(fn), $this);
    return $this;
  }
  function Var(v_0) {
    RxVal.call(this, v_0);
  }
  Var.prototype.setValue_11rb$ = function (value) {
    this.setCurrentValue_1c3m6u$(value);
    var observers = ArrayList_init_0();
    var tmp$;
    tmp$ = affected.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = element.observers_8be2vx$.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (!observers.contains_11rb$(element_0)) {
          observers.add_11rb$(element_0);
        }
      }
      element.clearDirty_8be2vx$();
    }
    affected.clear();
    var tmp$_1;
    tmp$_1 = observers.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      element_1.fire();
    }
  };
  Object.defineProperty(Var.prototype, 'now', {
    get: function () {
      return Kotlin.callGetter(this, RxVal.prototype, 'now');
    },
    set: function (value) {
      this.setValue_11rb$(value);
    }
  });
  Var.prototype.transform_ru8m0w$ = function (fn) {
    this.now = fn(this.now);
  };
  Var.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Var',
    interfaces: [RxVal]
  };
  function set($receiver, v) {
    $receiver.now = new Some(v);
  }
  function rxClass($receiver, style) {
    var rxv = Rx_init_0(style);
    rxClass_0($receiver, rxv);
    return rxv;
  }
  function rxClass$lambda(this$rxClass) {
    return function (it) {
      addClass(this$rxClass, [it]);
      return Unit;
    };
  }
  function rxClass$lambda_0(this$rxClass) {
    return function (it) {
      removeClass(this$rxClass, [it]);
      return Unit;
    };
  }
  function rxClass_0($receiver, style) {
    return style.onOff_uc1utc$(rxClass$lambda($receiver), rxClass$lambda_0($receiver));
  }
  function rxHover$lambda(closure$rx) {
    return function (it) {
      closure$rx.now = true;
      return null;
    };
  }
  function rxHover$lambda_0(closure$rx) {
    return function (it) {
      closure$rx.now = false;
      return null;
    };
  }
  function rxHover($receiver, rx) {
    $receiver.onmouseenter = rxHover$lambda(rx);
    $receiver.onmouseleave = rxHover$lambda_0(rx);
  }
  function rxClass$lambda_1(closure$style, this$rxClass) {
    return function (it) {
      if (it)
        addClass(this$rxClass, [closure$style]);
      else
        removeClass(this$rxClass, [closure$style]);
      return Unit;
    };
  }
  function rxClass_1($receiver, style, fn) {
    return fn.forEach_qlkmfe$(rxClass$lambda_1(style, $receiver));
  }
  function rxClass$lambda_2(closure$fn) {
    return function () {
      return closure$fn();
    };
  }
  function rxClass_2($receiver, style, fn) {
    var rxv = Rx_init_0(rxClass$lambda_2(fn));
    rxClass_1($receiver, style, rxv);
    return rxv;
  }
  function rxClassOpt$lambda(this$rxClassOpt) {
    return function (it) {
      if (it != null) {
        addClass(this$rxClassOpt, [it]);
      }
      return Unit;
    };
  }
  function rxClassOpt$lambda_0(this$rxClassOpt) {
    return function (it) {
      if (it != null) {
        removeClass(this$rxClassOpt, [it]);
      }
      return Unit;
    };
  }
  function rxClassOpt($receiver, style) {
    return style.onOff_uc1utc$(rxClassOpt$lambda($receiver), rxClassOpt$lambda_0($receiver));
  }
  function toRx($receiver) {
    return Rx_init_0($receiver);
  }
  function rxClasses($receiver, style) {
    return rxClasses_0($receiver, toRx(style));
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function rxClasses$lambda(this$rxClasses) {
    return function (it) {
      addClass(this$rxClasses, copyToArray(it).slice());
      return Unit;
    };
  }
  function rxClasses$lambda_0(this$rxClasses) {
    return function (it) {
      removeClass(this$rxClasses, copyToArray(it).slice());
      return Unit;
    };
  }
  function rxClasses_0($receiver, style) {
    return style.onOff_uc1utc$(rxClasses$lambda($receiver), rxClasses$lambda_0($receiver));
  }
  var package$common = _.common || (_.common = {});
  package$common.dyn = dyn;
  $$importsForInline$$['appsimake-commonshr'] = _;
  package$common.obj_287e2$ = obj;
  package$common.dyn_5ij4lk$ = dyn_0;
  package$common.obj_7qq44f$ = obj_0;
  package$common.NamedDelegate = NamedDelegate;
  package$common.named_cq6yhu$ = named;
  package$common.jsNew_8jhc6t$ = jsNew;
  package$common.wrapper_giuhum$ = wrapper;
  package$common.Listeners = Listeners;
  package$common.Emitter = Emitter;
  Object.defineProperty(Try, 'Companion', {
    get: Try$Companion_getInstance
  });
  package$common.Try = Try;
  package$common.Success = Success;
  package$common.Failure = Failure;
  Object.defineProperty(Optional, 'Companion', {
    get: Optional$Companion_getInstance
  });
  package$common.Optional = Optional;
  package$common.Some = Some;
  Object.defineProperty(package$common, 'None', {
    get: None_getInstance
  });
  package$common.toOptional_irb06o$ = toOptional;
  package$common.orEmpty_rw3ye5$ = orEmpty;
  package$common.plus_idxhrq$ = plus_1;
  package$common.orEmpty_m2768g$ = orEmpty_0;
  package$common.orEmpty_r4li7g$ = orEmpty_1;
  Object.defineProperty(SetDiff, 'Companion', {
    get: SetDiff$Companion_getInstance
  });
  var package$commonshr = _.commonshr || (_.commonshr = {});
  package$commonshr.SetDiff = SetDiff;
  package$commonshr.toLazy_eoe559$ = toLazy;
  Object.defineProperty(Killable, 'Companion', {
    get: Killable$Companion_getInstance
  });
  var package$killable = _.killable || (_.killable = {});
  package$killable.Killable = Killable;
  package$killable.addedTo_60he60$ = addedTo;
  package$killable.OnceKillable = OnceKillable;
  package$killable.invoke_di35i9$ = invoke;
  package$killable.add_8dof8l$ = add;
  package$killable.KillableValue_init_vsvlef$ = KillableValue_init;
  package$killable.KillableValue = KillableValue;
  package$killable.Killables = Killables;
  package$killable.KillableSeq_init_wii6vi$ = KillableSeq_init;
  package$killable.KillableSeq = KillableSeq;
  var package$rx = _.rx || (_.rx = {});
  package$rx.RxChild = RxChild;
  package$rx.RxCalc = RxCalc;
  package$rx.RxParent = RxParent;
  package$rx.connect_xonuym$ = connect;
  package$rx.Obs = Obs;
  package$rx.RxIface = RxIface;
  package$rx.RxVal = RxVal;
  package$rx.killOld_o6kpy0$ = killOld;
  package$rx.add_gcz0w7$ = add_0;
  package$rx.remove_gcz0w7$ = remove;
  package$rx.diffs_614g0z$ = diffs;
  package$rx.RxIfaceKillable = RxIfaceKillable;
  package$rx.Rx_init_ky6tb9$ = Rx_init;
  package$rx.Rx_init_klfg04$ = Rx_init_0;
  package$rx.Rx = Rx;
  package$rx.Var = Var;
  package$rx.set_atqor6$ = set;
  package$rx.rxClass_z8puye$ = rxClass;
  package$rx.rxClass_jgfmsn$ = rxClass_0;
  package$rx.rxHover_st2z1u$ = rxHover;
  package$rx.rxClass_3s5dpe$ = rxClass_1;
  package$rx.rxClass_4ic22z$ = rxClass_2;
  package$rx.rxClassOpt_ywk6sc$ = rxClassOpt;
  package$rx.toRx_ba455$ = toRx;
  package$rx.rxClasses_dk0vnv$ = rxClasses;
  package$rx.rxClasses_cv5l32$ = rxClasses_0;
  RxVal.prototype.forEach_qlkmfe$ = RxIface.prototype.forEach_qlkmfe$;
  RxVal.prototype.fold_b8xf17$ = RxIface.prototype.fold_b8xf17$;
  RxVal.prototype.folded_b8xf17$ = RxIface.prototype.folded_b8xf17$;
  RxVal.prototype.foldLater_b8xf17$ = RxIface.prototype.foldLater_b8xf17$;
  RxVal.prototype.onChange_nrmh93$ = RxIface.prototype.onChange_nrmh93$;
  RxVal.prototype.onOff_uc1utc$ = RxIface.prototype.onOff_uc1utc$;
  RxVal.prototype.off_qlkmfe$ = RxIface.prototype.off_qlkmfe$;
  RxIfaceKillable.prototype.forEach_qlkmfe$ = RxIface.prototype.forEach_qlkmfe$;
  RxIfaceKillable.prototype.fold_b8xf17$ = RxIface.prototype.fold_b8xf17$;
  RxIfaceKillable.prototype.folded_b8xf17$ = RxIface.prototype.folded_b8xf17$;
  RxIfaceKillable.prototype.foldLater_b8xf17$ = RxIface.prototype.foldLater_b8xf17$;
  RxIfaceKillable.prototype.onChange_nrmh93$ = RxIface.prototype.onChange_nrmh93$;
  RxIfaceKillable.prototype.onOff_uc1utc$ = RxIface.prototype.onOff_uc1utc$;
  RxIfaceKillable.prototype.off_qlkmfe$ = RxIface.prototype.off_qlkmfe$;
  currentChild = null;
  affected = ArrayList_init_0();
  Kotlin.defineModule('appsimake-commonshr', _);
  return _;
}(typeof this['appsimake-commonshr'] === 'undefined' ? {} : this['appsimake-commonshr'], kotlin);

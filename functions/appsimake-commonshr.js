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

define(['exports', 'kotlin', 'kotlinx-coroutines-core'], function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var minus = Kotlin.kotlin.collections.minus_2ws7j4$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var getCallableRef = Kotlin.getCallableRef;
  var Pair = Kotlin.kotlin.Pair;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals = Kotlin.equals;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var minus_0 = Kotlin.kotlin.collections.minus_khz7k3$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var plus_0 = Kotlin.kotlin.collections.plus_xfiyik$;
  var minus_1 = Kotlin.kotlin.collections.minus_xfiyik$;
  var Exception = Kotlin.kotlin.Exception;
  var throwCCE = Kotlin.throwCCE;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var setOf_0 = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var lazyOf = Kotlin.kotlin.lazyOf_mh5how$;
  var ClosedSendChannelException = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.ClosedSendChannelException;
  var withContext = $module$kotlinx_coroutines_core.kotlinx.coroutines.withContext_i5cbzn$;
  var toList_0 = Kotlin.kotlin.text.toList_gw00vp$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var toCharArray = Kotlin.kotlin.collections.toCharArray_rr68x$;
  var String_0 = Kotlin.kotlin.text.String_4hbowm$;
  var chunked = Kotlin.kotlin.collections.chunked_oqjilr$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var numberToInt = Kotlin.numberToInt;
  var throwUPAE = Kotlin.throwUPAE;
  var L0 = Kotlin.Long.ZERO;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var Set = Kotlin.kotlin.collections.Set;
  var AbstractMutableSet = Kotlin.kotlin.collections.AbstractMutableSet;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  Success.prototype = Object.create(Try.prototype);
  Success.prototype.constructor = Success;
  Failure.prototype = Object.create(Try.prototype);
  Failure.prototype.constructor = Failure;
  Some.prototype = Object.create(Optional.prototype);
  Some.prototype.constructor = Some;
  None.prototype = Object.create(Optional.prototype);
  None.prototype.constructor = None;
  Either$Left.prototype = Object.create(Either.prototype);
  Either$Left.prototype.constructor = Either$Left;
  Either$Right.prototype = Object.create(Either.prototype);
  Either$Right.prototype.constructor = Either$Right;
  apps.prototype = Object.create(CollectionWrap.prototype);
  apps.prototype.constructor = apps;
  SetAdded.prototype = Object.create(SetMove.prototype);
  SetAdded.prototype.constructor = SetAdded;
  SetRemoved.prototype = Object.create(SetMove.prototype);
  SetRemoved.prototype.constructor = SetRemoved;
  RxCalc.prototype = Object.create(RxChild.prototype);
  RxCalc.prototype.constructor = RxCalc;
  RxVal.prototype = Object.create(RxParent.prototype);
  RxVal.prototype.constructor = RxVal;
  Rx.prototype = Object.create(RxVal.prototype);
  Rx.prototype.constructor = Rx;
  Var.prototype = Object.create(RxVal.prototype);
  Var.prototype.constructor = Var;
  RxMutableSet.prototype = Object.create(AbstractMutableSet.prototype);
  RxMutableSet.prototype.constructor = RxMutableSet;
  var dyn = defineInlineFunction('appsimake-commonshr.common.dyn', function () {
    return {};
  });
  var obj = defineInlineFunction('appsimake-commonshr.common.obj_287e2$', function () {
    return {};
  });
  var dyn_0 = defineInlineFunction('appsimake-commonshr.common.dyn_5ij4lk$', function (fn) {
    var $receiver = {};
    fn($receiver);
    return $receiver;
  });
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
  function NamedThisDelegate(init) {
    this.init_0 = init;
  }
  function NamedThisDelegate$provideDelegate$ObjectLiteral(closure$value) {
    this.closure$value = closure$value;
  }
  NamedThisDelegate$provideDelegate$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.closure$value;
  };
  NamedThisDelegate$provideDelegate$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadOnlyProperty]
  };
  NamedThisDelegate.prototype.provideDelegate_lrcp0p$ = function (thisRef, prop) {
    var value = this.init_0(thisRef, prop.callableName);
    return new NamedThisDelegate$provideDelegate$ObjectLiteral(value);
  };
  NamedThisDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamedThisDelegate',
    interfaces: []
  };
  function named(fn) {
    return new NamedDelegate(fn);
  }
  function namedThis(fn) {
    return new NamedThisDelegate(fn);
  }
  var jsNew = defineInlineFunction('appsimake-commonshr.common.jsNew_x7e9z0$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (constr) {
      var tmp$;
      return Kotlin.isType(tmp$ = new constr(), Any) ? tmp$ : throwCCE();
    };
  }));
  var jsNew_0 = defineInlineFunction('appsimake-commonshr.common.jsNew_8jhc6t$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (constr, param) {
      var tmp$;
      return Kotlin.isType(tmp$ = new constr(param), Any) ? tmp$ : throwCCE();
    };
  }));
  function Listeners() {
    this.trigger = Listeners$trigger$lambda(this);
    this.listeners = emptyList();
  }
  Listeners.prototype.invoke_o14v8n$ = function (listener) {
    this.add_o14v8n$(listener);
  };
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
  function Listeners$trigger$lambda(this$Listeners) {
    return function () {
      this$Listeners.fire();
      return Unit;
    };
  }
  Listeners.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Listeners',
    interfaces: []
  };
  function EmitterIface() {
  }
  EmitterIface.prototype.plusAssign_qlkmfe$ = function (listener) {
    this.add_qlkmfe$(listener);
  };
  EmitterIface.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EmitterIface',
    interfaces: []
  };
  function withInitial$lambda(closure$initial) {
    return function () {
      return toList(closure$initial);
    };
  }
  function withInitial($receiver, initial) {
    return withInitial_0($receiver, withInitial$lambda(initial));
  }
  function withInitial$ObjectLiteral(closure$initial, this$withInitial) {
    this.closure$initial = closure$initial;
    this.this$withInitial = this$withInitial;
  }
  withInitial$ObjectLiteral.prototype.add_qlkmfe$ = function (listener) {
    var tmp$;
    tmp$ = this.closure$initial().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      listener(element);
    }
    return this.this$withInitial.add_qlkmfe$(listener);
  };
  withInitial$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [EmitterIface]
  };
  function withInitial_0($receiver, initial) {
    return new withInitial$ObjectLiteral(initial, $receiver);
  }
  function AsyncEmitter() {
  }
  AsyncEmitter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AsyncEmitter',
    interfaces: []
  };
  function emptyAsyncEmitter$ObjectLiteral() {
  }
  emptyAsyncEmitter$ObjectLiteral.prototype.poll = function () {
    return null;
  };
  emptyAsyncEmitter$ObjectLiteral.prototype.receive = function (continuation) {
    return CompletableDeferred().await(continuation);
  };
  emptyAsyncEmitter$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AsyncEmitter]
  };
  function emptyAsyncEmitter() {
    return new emptyAsyncEmitter$ObjectLiteral();
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function DynamicAsyncEmitter(ks, initial) {
    this.cds_0 = ArrayList_init();
    this.kseq = seq(ks);
    this.current_0 = initial;
    plusAssign_0(ks, DynamicAsyncEmitter_init$lambda(this));
  }
  DynamicAsyncEmitter.prototype.poll = function () {
    return this.current_0.poll();
  };
  function Coroutine$DynamicAsyncEmitter$listen$lambda(closure$c_0, closure$cd_0, this$DynamicAsyncEmitter_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$c = closure$c_0;
    this.local$closure$cd = closure$cd_0;
    this.local$this$DynamicAsyncEmitter = this$DynamicAsyncEmitter_0;
  }
  Coroutine$DynamicAsyncEmitter$listen$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DynamicAsyncEmitter$listen$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DynamicAsyncEmitter$listen$lambda.prototype.constructor = Coroutine$DynamicAsyncEmitter$listen$lambda;
  Coroutine$DynamicAsyncEmitter$listen$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$c.receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var p = this.result_0;
            if (!this.local$closure$cd.isCompleted) {
              this.local$closure$cd.complete_11rb$(p);
            }

            var $receiver = this.local$this$DynamicAsyncEmitter.cds_0;
            var element = this.local$closure$cd;
            $receiver.remove_11rb$(element);
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
  function DynamicAsyncEmitter$listen$lambda(closure$c_0, closure$cd_0, this$DynamicAsyncEmitter_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DynamicAsyncEmitter$listen$lambda(closure$c_0, closure$cd_0, this$DynamicAsyncEmitter_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  DynamicAsyncEmitter.prototype.listen_0 = function ($receiver) {
    var cd = $receiver;
    var c = this.current_0;
    launch(coroutines.GlobalScope, void 0, void 0, DynamicAsyncEmitter$listen$lambda(c, cd, this));
  };
  DynamicAsyncEmitter.prototype.receive = function (continuation) {
    var cd = CompletableDeferred();
    this.cds_0.add_11rb$(cd);
    this.listen_0(cd);
    return cd.await(continuation);
  };
  DynamicAsyncEmitter.prototype.setCurrent_wgbzmz$ = function (c, kill) {
    this.kseq.remAssign_o14v8n$(kill);
    this.current_0 = c;
    var tmp$;
    tmp$ = this.cds_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.listen_0(element);
    }
  };
  function DynamicAsyncEmitter_init$lambda(this$DynamicAsyncEmitter) {
    return function () {
      this$DynamicAsyncEmitter.current_0 = emptyAsyncEmitter();
      return Unit;
    };
  }
  DynamicAsyncEmitter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicAsyncEmitter',
    interfaces: [AsyncEmitter]
  };
  function Emitter(first) {
    if (first === void 0)
      first = getCallableRef('emptyList', function () {
        return emptyList();
      });
    this.first = first;
    this.listeners = emptyList();
  }
  function Emitter$add$lambda(this$Emitter, closure$listener) {
    return function () {
      this$Emitter.listeners = minus(this$Emitter.listeners, closure$listener);
      return Unit;
    };
  }
  Emitter.prototype.add_qlkmfe$ = function (listener) {
    var tmp$;
    tmp$ = this.first().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      listener(element);
    }
    this.listeners = plus(this.listeners, listener);
    return Emitter$add$lambda(this, listener);
  };
  Emitter.prototype.emit_11rb$ = function (t) {
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
    interfaces: [EmitterIface]
  };
  function toSetSource$ObjectLiteral(closure$sfn, this$toSetSource) {
    this.closure$sfn = closure$sfn;
    this.this$toSetSource = this$toSetSource;
  }
  Object.defineProperty(toSetSource$ObjectLiteral.prototype, 'current', {
    get: function () {
      return this.closure$sfn();
    }
  });
  toSetSource$ObjectLiteral.prototype.listen_cp6tho$ = function (ks, fn) {
    plusAssign_0(ks, this.this$toSetSource.add_qlkmfe$(fn));
    return this.closure$sfn();
  };
  toSetSource$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SetSource]
  };
  function toSetSource($receiver, sfn) {
    return new toSetSource$ObjectLiteral(sfn, $receiver);
  }
  function MappedEmitter(emitter, fn) {
    this.emitter_0 = emitter;
    this.fn_0 = fn;
  }
  function MappedEmitter$add$lambda(closure$listener, this$MappedEmitter) {
    return function (t) {
      closure$listener(this$MappedEmitter.fn_0(t));
      return Unit;
    };
  }
  MappedEmitter.prototype.add_qlkmfe$ = function (listener) {
    return this.emitter_0.add_qlkmfe$(MappedEmitter$add$lambda(listener, this));
  };
  MappedEmitter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MappedEmitter',
    interfaces: [EmitterIface]
  };
  function map($receiver, fn) {
    return new MappedEmitter($receiver, fn);
  }
  function feedTo$lambda(closure$set) {
    return function (m) {
      m.applyTo_wgjnv3$(closure$set);
      return Unit;
    };
  }
  function feedTo($receiver, set) {
    return $receiver.add_qlkmfe$(feedTo$lambda(set));
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function filtered$lambda(closure$current) {
    return function () {
      var $receiver = closure$current;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(new SetAdded(item));
      }
      return destination;
    };
  }
  function filtered$add(closure$current, closure$f) {
    return function (v) {
      closure$current.add_11rb$(v);
      closure$f.emit_11rb$(new SetAdded(v));
    };
  }
  function filtered$remove(closure$current, closure$f) {
    return function (v) {
      closure$current.remove_11rb$(v);
      closure$f.emit_11rb$(new SetRemoved(v));
    };
  }
  function filtered$lambda$lambda(closure$rxfn, closure$v) {
    return function ($receiver) {
      return closure$rxfn(closure$v);
    };
  }
  function filtered$lambda$lambda_0(closure$v, closure$add, closure$remove) {
    return function ($receiver, fv) {
      if (fv)
        closure$add(closure$v);
      else
        closure$remove(closure$v);
      return Unit;
    };
  }
  function filtered$lambda_0(closure$ks, closure$rxfn, closure$kills, closure$add, closure$remove, closure$current) {
    return function (m) {
      var tmp$;
      var v = m.value;
      if (Kotlin.isType(m, SetAdded)) {
        var vks = closure$ks.killables();
        var rxv = Rx_init_0(vks.killSet, filtered$lambda$lambda(closure$rxfn, v));
        var $receiver = closure$kills;
        var value = vks.kill;
        $receiver.put_xwzc9p$(v, value);
        rxv.forEach_yk5nc8$(vks.killSet, filtered$lambda$lambda_0(v, closure$add, closure$remove));
      }
       else if (Kotlin.isType(m, SetRemoved)) {
        (tmp$ = closure$kills.remove_11rb$(v)) != null ? tmp$() : null;
        if (closure$current.contains_11rb$(v)) {
          closure$remove(v);
        }
      }
      return Unit;
    };
  }
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function filtered($receiver, ks, rxfn) {
    var current = LinkedHashSet_init();
    var kills = LinkedHashMap_init();
    var f = new Emitter(filtered$lambda(current));
    var add = filtered$add(current, f);
    var remove = filtered$remove(current, f);
    ks.plusAssign_o14v8n$($receiver.add_qlkmfe$(filtered$lambda_0(ks, rxfn, kills, add, remove, current)));
    return f;
  }
  function combineAnd(ks, e1, e2) {
    return combine_0(ks, e1, e2, getCallableRef('and', function ($receiver, other) {
      return $receiver & other;
    }));
  }
  function combineN$lambda(closure$result) {
    return function () {
      var $receiver = closure$result;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(new SetAdded(item));
      }
      return destination;
    };
  }
  function combineN$connect$lambda(closure$result, closure$thisSet, closure$fn, closure$out) {
    return function (m) {
      var id = m.value;
      var before = closure$result.contains_11rb$(m.value);
      m.applyTo_wgjnv3$(closure$thisSet);
      var after = closure$fn(id);
      if (before && !after) {
        closure$result.remove_11rb$(id);
        closure$out.emit_11rb$(new SetRemoved(id));
      }
       else if (!before && after) {
        closure$result.add_11rb$(id);
        closure$out.emit_11rb$(new SetAdded(id));
      }
      return Unit;
    };
  }
  function combineN$connect(closure$lks, closure$result, closure$fn, closure$out) {
    return function (emitter, thisSet) {
      closure$lks.plusAssign_o14v8n$(emitter.add_qlkmfe$(combineN$connect$lambda(closure$result, thisSet, closure$fn, closure$out)));
    };
  }
  function combineN(ks, pairs, fn) {
    var lks = ks.killables();
    var result = LinkedHashSet_init();
    var out = new Emitter(combineN$lambda(result));
    var connect = combineN$connect(lks, result, fn, out);
    var tmp$;
    tmp$ = pairs.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var em = element.component1()
      , set = element.component2();
      connect(em, set);
    }
    return out;
  }
  function combine$lambda(closure$set1, closure$set2, closure$set3, closure$fn) {
    return function (id) {
      var v1 = closure$set1.contains_11rb$(id);
      var v2 = closure$set2.contains_11rb$(id);
      var v3 = closure$set3.contains_11rb$(id);
      return closure$fn(v1, v2, v3);
    };
  }
  function combine(ks, e1, e2, e3, fn) {
    var set1 = LinkedHashSet_init();
    var set2 = LinkedHashSet_init();
    var set3 = LinkedHashSet_init();
    var after = combine$lambda(set1, set2, set3, fn);
    return combineN(ks, listOf([new Pair(e1, set1), new Pair(e2, set2), new Pair(e3, set3)]), after);
  }
  function combine$lambda_0(closure$set1, closure$set2, closure$fn) {
    return function (id) {
      var v1 = closure$set1.contains_11rb$(id);
      var v2 = closure$set2.contains_11rb$(id);
      return closure$fn(v1, v2);
    };
  }
  function combine_0(ks, e1, e2, fn) {
    var set1 = LinkedHashSet_init();
    var set2 = LinkedHashSet_init();
    var after = combine$lambda_0(set1, set2, fn);
    return combineN(ks, listOf([new Pair(e1, set1), new Pair(e2, set2)]), after);
  }
  function andIn($receiver, other, ks) {
    return combineAnd(ks, $receiver, other);
  }
  function feedTo$lambda_0(closure$list) {
    return function (m) {
      m.applyTo_ufm9l7$(closure$list);
      return Unit;
    };
  }
  function feedTo_0($receiver, list) {
    return $receiver.add_qlkmfe$(feedTo$lambda_0(list));
  }
  function SetSource() {
  }
  SetSource.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SetSource',
    interfaces: []
  };
  function toRx$process(closure$items) {
    return function (m) {
      m.applyTo_w79gfz$(closure$items);
    };
  }
  function toRx$lambda(closure$process) {
    return function (it) {
      closure$process(it);
      return Unit;
    };
  }
  function toRx($receiver, ks) {
    var items = new Var(emptySet());
    var process = toRx$process(items);
    var tmp$;
    tmp$ = $receiver.listen_cp6tho$(ks, toRx$lambda(process)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      process(new SetAdded(element));
    }
    return items;
  }
  function CircularList() {
    this.map_0 = LinkedHashMap_init();
    this.head_0 = null;
  }
  function CircularList$Holder(item, next, prev) {
    if (next === void 0)
      next = null;
    if (prev === void 0)
      prev = null;
    this.item = item;
    this.next = next;
    this.prev = prev;
  }
  CircularList$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: []
  };
  Object.defineProperty(CircularList.prototype, 'next', {
    get: function () {
      var h = ensureNotNull(this.head_0);
      this.head_0 = h.next;
      return h.item;
    }
  });
  CircularList.prototype.removeNohead_0 = function ($receiver) {
    var n = ensureNotNull($receiver.next);
    var p = ensureNotNull($receiver.prev);
    n.prev = p;
    p.next = n;
    $receiver.next = null;
    $receiver.prev = null;
  };
  CircularList.prototype.remove_0 = function ($receiver) {
    if (equals(this.head_0, $receiver)) {
      var pr = ensureNotNull($receiver.prev);
      this.removeNohead_0($receiver);
      this.head_0 = pr.next;
    }
     else {
      this.removeNohead_0($receiver);
    }
  };
  CircularList.prototype.remove_11rb$ = function (item) {
    this.remove_0(getValue(this.map_0, item));
  };
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.collections.random_iscd7z$;
  function CircularList$insertItem$lambda(it) {
    return random(it, Random.Default);
  }
  CircularList.prototype.insertItem_h6hr7q$ = function (item, after) {
    if (after === void 0)
      after = CircularList$insertItem$lambda;
    var holder = new CircularList$Holder(item);
    if (this.head_0 == null) {
      this.head_0 = holder;
      holder.next = holder;
      holder.prev = holder;
    }
     else {
      var afterId = after(this.map_0.keys);
      var prev = getValue(this.map_0, afterId);
      var next = ensureNotNull(prev.next);
      holder.prev = prev;
      holder.next = next;
      prev.next = holder;
      next.prev = holder;
    }
    this.map_0.put_xwzc9p$(item, holder);
  };
  function CircularList$moveHead$lambda(it) {
    return random(it, Random.Default);
  }
  CircularList.prototype.moveHead_gney3$ = function (fn) {
    if (fn === void 0)
      fn = CircularList$moveHead$lambda;
    if (!this.map_0.keys.isEmpty()) {
      this.head_0 = getValue(this.map_0, fn(this.map_0.keys));
    }
  };
  CircularList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CircularList',
    interfaces: []
  };
  function RandomSource(available, next) {
    RandomSource$Companion_getInstance();
    this.available = available;
    this.next = next;
  }
  function RandomSource$Companion() {
    RandomSource$Companion_instance = this;
  }
  function RandomSource$Companion$invoke$Holder(item, next, prev) {
    if (next === void 0)
      next = null;
    if (prev === void 0)
      prev = null;
    this.item = item;
    this.next = next;
    this.prev = prev;
  }
  RandomSource$Companion$invoke$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: []
  };
  function RandomSource$Companion$invoke$removeNohead($receiver) {
    var n = ensureNotNull($receiver.next);
    var p = ensureNotNull($receiver.prev);
    n.prev = p;
    p.next = n;
    $receiver.next = null;
    $receiver.prev = null;
  }
  function RandomSource$Companion$invoke$remove(closure$head, closure$removeNohead) {
    return function ($receiver) {
      if (equals(closure$head.v, $receiver)) {
        var pr = ensureNotNull($receiver.prev);
        closure$removeNohead($receiver);
        closure$head.v = pr.next;
      }
       else {
        closure$removeNohead($receiver);
      }
    };
  }
  function RandomSource$Companion$invoke$remove_0(closure$map, closure$remove) {
    return function (item) {
      closure$remove(getValue(closure$map, item));
    };
  }
  function RandomSource$Companion$invoke$insert(closure$map, closure$head) {
    return function (item) {
      var holder = new RandomSource$Companion$invoke$Holder(item);
      closure$map.put_xwzc9p$(item, holder);
      if (closure$head.v == null) {
        closure$head.v = holder;
        holder.next = holder;
        holder.prev = holder;
      }
       else {
        var prev = random(closure$map.values, Random.Default);
        var next = ensureNotNull(prev.next);
        holder.prev = prev;
        holder.next = next;
        prev.next = holder;
        next.prev = holder;
      }
    };
  }
  function RandomSource$Companion$invoke$updateTotal(closure$map, closure$total) {
    return function () {
      closure$total.now = toSet(closure$map.keys);
    };
  }
  function RandomSource$Companion$invoke$lambda(closure$remove, closure$insert, closure$updateTotal) {
    return function (m) {
      var v = m.value;
      if (Kotlin.isType(m, SetRemoved))
        closure$remove(v);
      else if (Kotlin.isType(m, SetAdded))
        closure$insert(v);
      closure$updateTotal();
      return Unit;
    };
  }
  function RandomSource$Companion$invoke$lambda_0(closure$total, closure$exclude) {
    return function ($receiver) {
      var tot = closure$total.invoke();
      var ex = closure$exclude.invoke();
      var av = minus_0(tot, ex);
      if (av.isEmpty()) {
        return tot;
      }
       else {
        return av;
      }
    };
  }
  function RandomSource$Companion$invoke$lambda_1(closure$available) {
    return function ($receiver) {
      return !closure$available.invoke().isEmpty();
    };
  }
  function RandomSource$Companion$invoke$lambda_2(closure$head, closure$available) {
    return function () {
      var h = ensureNotNull(closure$head.v);
      do {
        h = ensureNotNull(h.next);
      }
       while (!closure$available.now.contains_11rb$(h.item));
      closure$head.v = h;
      return h.item;
    };
  }
  RandomSource$Companion.prototype.invoke_yiwcrw$ = function (ks, source, exclude) {
    var map = LinkedHashMap_init();
    var head = {v: null};
    var removeNohead = RandomSource$Companion$invoke$removeNohead;
    var remove = RandomSource$Companion$invoke$remove(head, removeNohead);
    var remove_0 = RandomSource$Companion$invoke$remove_0(map, remove);
    var insert = RandomSource$Companion$invoke$insert(map, head);
    var total = new Var(emptySet());
    var updateTotal = RandomSource$Companion$invoke$updateTotal(map, total);
    var tmp$;
    tmp$ = source.listen_cp6tho$(ks, RandomSource$Companion$invoke$lambda(remove_0, insert, updateTotal)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      insert(element);
    }
    var available = Rx_init_0(ks, RandomSource$Companion$invoke$lambda_0(total, exclude));
    return new RandomSource(Rx_init_0(ks, RandomSource$Companion$invoke$lambda_1(available)), RandomSource$Companion$invoke$lambda_2(head, available));
  };
  RandomSource$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RandomSource$Companion_instance = null;
  function RandomSource$Companion_getInstance() {
    if (RandomSource$Companion_instance === null) {
      new RandomSource$Companion();
    }
    return RandomSource$Companion_instance;
  }
  RandomSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RandomSource',
    interfaces: []
  };
  function random$lambda(closure$channel) {
    return function () {
      closure$channel.close_dbl4no$();
      return Unit;
    };
  }
  function random$lambda_0(closure$total, closure$exclude, closure$globalExclude, closure$cd) {
    return function (m) {
      var tmp$;
      var v = m.value;
      if (Kotlin.isType(m, SetRemoved)) {
        closure$total.remove_11rb$(v);
      }
       else if (Kotlin.isType(m, SetAdded)) {
        closure$total.add_11rb$(v);
        if (!closure$exclude.contains_11rb$(v) && !closure$globalExclude.contains_11rb$(v)) {
          if ((tmp$ = closure$cd.v) != null) {
            var closure$cd_0 = closure$cd;
            tmp$.complete_11rb$(v);
            closure$cd_0.v = null;
          }
        }
      }
      return Unit;
    };
  }
  function Coroutine$random$lambda$wait(closure$cd_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$cd = closure$cd_0;
  }
  Coroutine$random$lambda$wait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$random$lambda$wait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$random$lambda$wait.prototype.constructor = Coroutine$random$lambda$wait;
  Coroutine$random$lambda$wait.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = CompletableDeferred();
            this.local$closure$cd.v = $receiver;
            this.state_0 = 2;
            this.result_0 = $receiver.await(this);
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
  function random$lambda$wait(closure$cd_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$random$lambda$wait(closure$cd_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$random$lambda(closure$cd_0, closure$total_0, closure$exclude_0, closure$globalExclude_0, closure$channel_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$cd = closure$cd_0;
    this.local$closure$total = closure$total_0;
    this.local$closure$exclude = closure$exclude_0;
    this.local$closure$globalExclude = closure$globalExclude_0;
    this.local$closure$channel = closure$channel_0;
    this.local$tmp$ = void 0;
    this.local$wait = void 0;
  }
  Coroutine$random$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$random$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$random$lambda.prototype.constructor = Coroutine$random$lambda;
  Coroutine$random$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$wait = random$lambda$wait(this.local$closure$cd);
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var available = minus_0(minus_0(this.local$closure$total, this.local$closure$exclude), this.local$closure$globalExclude);
            if (available.isEmpty()) {
              var restart = minus_0(this.local$closure$total, this.local$closure$globalExclude);
              if (!restart.isEmpty()) {
                this.local$closure$exclude.clear();
                this.local$tmp$ = random(restart, Random.Default);
                this.state_0 = 4;
                continue;
              }
               else {
                this.state_0 = 3;
                this.result_0 = this.local$wait(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }
             else {
              this.local$tmp$ = random(available, Random.Default);
              this.state_0 = 5;
              continue;
            }

          case 3:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            var next = this.local$tmp$;
            this.local$closure$exclude.add_11rb$(next);
            this.state_0 = 6;
            this.result_0 = this.local$closure$channel.send_11rb$(next, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 2;
            continue;
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
  function random$lambda_1(closure$cd_0, closure$total_0, closure$exclude_0, closure$globalExclude_0, closure$channel_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$random$lambda(closure$cd_0, closure$total_0, closure$exclude_0, closure$globalExclude_0, closure$channel_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  function random_0($receiver, ks, globalExclude) {
    var channel = Channel(0);
    plusAssign_0(ks, random$lambda(channel));
    var total = LinkedHashSet_init();
    var exclude = LinkedHashSet_init();
    var cd = {v: null};
    addAll(total, $receiver.listen_cp6tho$(ks, random$lambda_0(total, exclude, globalExclude, cd)));
    addedTo(launch(coroutines.GlobalScope, void 0, void 0, random$lambda_1(cd, total, exclude, globalExclude, channel)), ks);
    return channel;
  }
  function SetSourceWithKey() {
  }
  SetSourceWithKey.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SetSourceWithKey',
    interfaces: [SetSource]
  };
  function map$ObjectLiteral(this$map, closure$mfn) {
    this.this$map = this$map;
    this.closure$mfn = closure$mfn;
  }
  Object.defineProperty(map$ObjectLiteral.prototype, 'current', {
    get: function () {
      var $receiver = this.this$map.current;
      var transform = this.closure$mfn;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(transform(item));
      }
      return toSet(destination);
    }
  });
  function map$ObjectLiteral$listen$lambda(closure$fn, closure$mfn) {
    return function (m) {
      closure$fn(m.map_2o04qz$(closure$mfn));
      return Unit;
    };
  }
  map$ObjectLiteral.prototype.listen_cp6tho$ = function (ks, fn) {
    var $receiver = this.this$map.listen_cp6tho$(ks, map$ObjectLiteral$listen$lambda(fn, this.closure$mfn));
    var transform = this.closure$mfn;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(transform(item));
    }
    return toSet(destination);
  };
  map$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SetSource]
  };
  function map_0($receiver, mfn) {
    return new map$ObjectLiteral($receiver, mfn);
  }
  function filtered$add_0(closure$curr, closure$f) {
    return function (v) {
      closure$curr.v = plus_0(closure$curr.v, v);
      closure$f.emit_11rb$(new SetAdded(v));
    };
  }
  function filtered$remove_0(closure$curr, closure$f) {
    return function (v) {
      closure$curr.v = minus_1(closure$curr.v, v);
      closure$f.emit_11rb$(new SetRemoved(v));
    };
  }
  function filtered$process$lambda(closure$rxfn, closure$v) {
    return function ($receiver) {
      return closure$rxfn(closure$v);
    };
  }
  function filtered$process$lambda_0(closure$v, closure$add, closure$remove) {
    return function ($receiver, fv) {
      if (fv)
        closure$add(closure$v);
      else
        closure$remove(closure$v);
      return Unit;
    };
  }
  function filtered$process(closure$ks, closure$rxfn, closure$kills, closure$add, closure$remove, closure$curr) {
    return function (m) {
      var tmp$;
      var v = m.value;
      if (Kotlin.isType(m, SetAdded)) {
        var vks = killables(closure$ks);
        var rxv = Rx_init_0(vks.killSet, filtered$process$lambda(closure$rxfn, v));
        var $receiver = closure$kills;
        var value = vks.kill;
        $receiver.put_xwzc9p$(v, value);
        rxv.forEach_yk5nc8$(vks.killSet, filtered$process$lambda_0(v, closure$add, closure$remove));
      }
       else if (Kotlin.isType(m, SetRemoved)) {
        (tmp$ = closure$kills.remove_11rb$(v)) != null ? tmp$() : null;
        if (closure$curr.v.contains_11rb$(v)) {
          closure$remove(v);
        }
      }
    };
  }
  function filtered$lambda_1(closure$curr) {
    return function () {
      return closure$curr.v;
    };
  }
  function filtered_0($receiver, ks, rxfn) {
    var curr = {v: emptySet()};
    var kills = LinkedHashMap_init();
    var f = new Emitter();
    var add = filtered$add_0(curr, f);
    var remove = filtered$remove_0(curr, f);
    var process = filtered$process(ks, rxfn, kills, add, remove, curr);
    var $receiver_0 = $receiver.listen_cp6tho$(ks, getCallableRef('process', function (m) {
      return process(m), Unit;
    }));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new SetAdded(item));
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      process(element);
    }
    return toSetSource(f, filtered$lambda_1(curr));
  }
  function combineN$connect$process(closure$result, closure$thisSet, closure$fn, closure$out) {
    return function (m) {
      var id = m.value;
      var before = closure$result.v.contains_11rb$(m.value);
      m.applyTo_wgjnv3$(closure$thisSet);
      var after = closure$fn(id);
      if (before && !after) {
        closure$result.v = minus_1(closure$result.v, id);
        closure$out.emit_11rb$(new SetRemoved(id));
      }
       else if (!before && after) {
        closure$result.v = plus_0(closure$result.v, id);
        closure$out.emit_11rb$(new SetAdded(id));
      }
    };
  }
  function combineN$connect_0(closure$result, closure$fn, closure$out, closure$ks) {
    return function (emitter, thisSet) {
      var process = combineN$connect$process(closure$result, thisSet, closure$fn, closure$out);
      var $receiver = emitter.listen_cp6tho$(closure$ks, getCallableRef('process', function (m) {
        return process(m), Unit;
      }));
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(new SetAdded(item));
      }
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        process(element);
      }
    };
  }
  function combineN$lambda_0(closure$result) {
    return function () {
      return closure$result.v;
    };
  }
  function combineN_0(ks, pairs, fn) {
    var result = {v: emptySet()};
    var out = new Emitter();
    var connect = combineN$connect_0(result, fn, out, ks);
    var tmp$;
    tmp$ = pairs.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var em = element.component1()
      , set = element.component2();
      connect(em, set);
    }
    return toSetSource(out, combineN$lambda_0(result));
  }
  function combine$lambda_1(closure$set1, closure$set2, closure$set3, closure$fn) {
    return function (id) {
      var v1 = closure$set1.contains_11rb$(id);
      var v2 = closure$set2.contains_11rb$(id);
      var v3 = closure$set3.contains_11rb$(id);
      return closure$fn(v1, v2, v3);
    };
  }
  function combine_1(ks, e1, e2, e3, fn) {
    var set1 = LinkedHashSet_init();
    var set2 = LinkedHashSet_init();
    var set3 = LinkedHashSet_init();
    var after = combine$lambda_1(set1, set2, set3, fn);
    return combineN_0(ks, listOf([new Pair(e1, set1), new Pair(e2, set2), new Pair(e3, set3)]), after);
  }
  function combine$lambda_2(closure$set1, closure$set2, closure$fn) {
    return function (id) {
      var v1 = closure$set1.contains_11rb$(id);
      var v2 = closure$set2.contains_11rb$(id);
      return closure$fn(v1, v2);
    };
  }
  function combine_2(ks, e1, e2, fn) {
    var set1 = LinkedHashSet_init();
    var set2 = LinkedHashSet_init();
    var after = combine$lambda_2(set1, set2, fn);
    return combineN_0(ks, listOf([new Pair(e1, set1), new Pair(e2, set2)]), after);
  }
  function toEmitter$ObjectLiteral(this$toEmitter) {
    this.this$toEmitter = this$toEmitter;
  }
  toEmitter$ObjectLiteral.prototype.add_qlkmfe$ = function (listener) {
    var ks = new Killables();
    var $receiver = this.this$toEmitter.listen_cp6tho$(ks.killSet, listener);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new SetAdded(item));
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      listener(element);
    }
    return ks.kill;
  };
  toEmitter$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [EmitterIface]
  };
  function toEmitter($receiver) {
    return new toEmitter$ObjectLiteral($receiver);
  }
  function combineAnd_0(ks, e1, e2) {
    return combine_2(ks, e1, e2, getCallableRef('and', function ($receiver, other) {
      return $receiver & other;
    }));
  }
  function Try() {
    Try$Companion_getInstance();
  }
  function Try$Companion() {
    Try$Companion_instance = this;
  }
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
  Try$Companion.prototype.invoke_lnyleu$ = function (body_0, continuation_0, suspended) {
    var instance = new Coroutine$invoke_lnyleu$(this, body_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
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
  function Try$map$lambda(closure$f_0, this$Try_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Try$map$lambda(closure$f_0, this$Try_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
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
  Try.prototype.map_v7st1v$ = function (f_0, continuation_0, suspended) {
    var instance = new Coroutine$map_v7st1v$(this, f_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Try.prototype.flatMap_fzayo0$ = function (f) {
    var tmp$;
    if (Kotlin.isType(this, Success))
      tmp$ = f(this.value);
    else if (Kotlin.isType(this, Failure)) {
      tmp$ = this;
    }
     else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
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
  function getOrNull($receiver) {
    if (equals($receiver, None_getInstance()))
      return null;
    else if (Kotlin.isType($receiver, Some))
      return $receiver.value;
    else
      return Kotlin.noWhenBranchMatched();
  }
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
  Some.prototype.flatMap_30i4av$ = function (fn) {
    return fn(this.value);
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
  None.prototype.flatMap_30i4av$ = function (fn) {
    return None_getInstance();
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
  function Either() {
  }
  function Either$Left(value) {
    Either.call(this);
    this.value = value;
  }
  Either$Left.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Left',
    interfaces: [Either]
  };
  function Either$Right(value) {
    Either.call(this);
    this.value = value;
  }
  Either$Right.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Right',
    interfaces: [Either]
  };
  Either.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Either',
    interfaces: []
  };
  function lib$lambda(it) {
    return new Lib(it);
  }
  function lib() {
    return named(lib$lambda);
  }
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
    this.parent = parent;
    var tmp$, tmp$_0;
    this.path_nhxtzp$_0 = ((tmp$_0 = (tmp$ = this.parent) != null ? tmp$.path : null) != null ? tmp$_0 : '') + '/' + this.id;
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
    if (parent === void 0)
      parent = null;
    this.id = id;
    var tmp$;
    this.path_66n57n$_0 = ((tmp$ = parent != null ? parent.path : null) != null ? tmp$ : '') + '/' + this.id;
  }
  Object.defineProperty(CollectionWrap.prototype, 'path', {
    get: function () {
      return this.path_66n57n$_0;
    }
  });
  CollectionWrap.prototype.docd_3c47r3$ = function (id) {
    return new DocWrap(id, this);
  };
  CollectionWrap.prototype.doc_61zpoe$ = function (id) {
    return this.docd_3c47r3$(id);
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
  var admin;
  var admin_metadata = new PropertyMetadata('admin');
  function get_admin($receiver) {
    return admin.getValue_lrcp0p$($receiver, admin_metadata);
  }
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
  function AdminDoc() {
  }
  AdminDoc.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AdminDoc',
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
  SetDiff$Companion.prototype.of_lk58qy$ = function (old, new_0) {
    return new SetDiff(minus_0(old, new_0), minus_0(new_0, old));
  };
  SetDiff$Companion.prototype.added_i5x0yv$ = function (e) {
    return new SetDiff(void 0, setOf_0(e.slice()));
  };
  SetDiff$Companion.prototype.removed_i5x0yv$ = function (e) {
    return new SetDiff(void 0, setOf_0(e.slice()));
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
  function SetMove() {
  }
  SetMove.prototype.map_2o04qz$ = function (fn) {
    if (Kotlin.isType(this, SetAdded))
      return new SetAdded(fn(this.value));
    else if (Kotlin.isType(this, SetRemoved))
      return new SetRemoved(fn(this.value));
    else
      return Kotlin.noWhenBranchMatched();
  };
  SetMove.prototype.applyTo_wgjnv3$ = function (set) {
    if (Kotlin.isType(this, SetAdded)) {
      var element = this.value;
      set.add_11rb$(element);
    }
     else if (Kotlin.isType(this, SetRemoved)) {
      var element_0 = this.value;
      set.remove_11rb$(element_0);
    }
     else
      Kotlin.noWhenBranchMatched();
  };
  SetMove.prototype.applyTo_ufm9l7$ = function (set) {
    if (Kotlin.isType(this, SetAdded)) {
      var element = this.value;
      set.add_11rb$(element);
    }
     else if (Kotlin.isType(this, SetRemoved)) {
      var element_0 = this.value;
      set.remove_11rb$(element_0);
    }
     else
      Kotlin.noWhenBranchMatched();
  };
  function SetMove$applyTo$lambda(this$SetMove) {
    return function (it) {
      return plus_0(it, this$SetMove.value);
    };
  }
  function SetMove$applyTo$lambda_0(this$SetMove) {
    return function (it) {
      return minus_1(it, this$SetMove.value);
    };
  }
  SetMove.prototype.applyTo_w79gfz$ = function (set) {
    if (Kotlin.isType(this, SetAdded))
      set.transform_ru8m0w$(SetMove$applyTo$lambda(this));
    else if (Kotlin.isType(this, SetRemoved))
      set.transform_ru8m0w$(SetMove$applyTo$lambda_0(this));
    else
      Kotlin.noWhenBranchMatched();
  };
  SetMove.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SetMove',
    interfaces: []
  };
  function SetAdded(value) {
    SetMove.call(this);
    this.value_doewhp$_0 = value;
  }
  Object.defineProperty(SetAdded.prototype, 'value', {
    get: function () {
      return this.value_doewhp$_0;
    }
  });
  SetAdded.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SetAdded',
    interfaces: [SetMove]
  };
  SetAdded.prototype.component1 = function () {
    return this.value;
  };
  SetAdded.prototype.copy_11rb$ = function (value) {
    return new SetAdded(value === void 0 ? this.value : value);
  };
  SetAdded.prototype.toString = function () {
    return 'SetAdded(value=' + Kotlin.toString(this.value) + ')';
  };
  SetAdded.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  SetAdded.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function SetRemoved(value) {
    SetMove.call(this);
    this.value_n0uxwd$_0 = value;
  }
  Object.defineProperty(SetRemoved.prototype, 'value', {
    get: function () {
      return this.value_n0uxwd$_0;
    }
  });
  SetRemoved.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SetRemoved',
    interfaces: [SetMove]
  };
  SetRemoved.prototype.component1 = function () {
    return this.value;
  };
  SetRemoved.prototype.copy_11rb$ = function (value) {
    return new SetRemoved(value === void 0 ? this.value : value);
  };
  SetRemoved.prototype.toString = function () {
    return 'SetRemoved(value=' + Kotlin.toString(this.value) + ')';
  };
  SetRemoved.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  SetRemoved.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function InvokeApply() {
  }
  InvokeApply.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InvokeApply',
    interfaces: []
  };
  function invoke($receiver, fn) {
    fn($receiver);
    return $receiver;
  }
  function toMoves$ObjectLiteral(this$toMoves) {
    this.this$toMoves = this$toMoves;
  }
  function toMoves$ObjectLiteral$add$lambda(closure$listener) {
    return function (diff) {
      var $receiver = diff.removed;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        closure$listener(new SetRemoved(element));
      }
      var $receiver_0 = diff.added;
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        closure$listener(new SetAdded(element_0));
      }
      return Unit;
    };
  }
  toMoves$ObjectLiteral.prototype.add_qlkmfe$ = function (listener) {
    return this.this$toMoves.add_qlkmfe$(toMoves$ObjectLiteral$add$lambda(listener));
  };
  toMoves$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [EmitterIface]
  };
  function toMoves($receiver) {
    return new toMoves$ObjectLiteral($receiver);
  }
  function process($receiver, ks, fn) {
    toMap($receiver, ks, fn);
  }
  function toMap$lambda(closure$map) {
    return function () {
      var tmp$;
      tmp$ = closure$map.values.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.second();
      }
      closure$map.clear();
      return Unit;
    };
  }
  function toMap$lambda_0(closure$fn, closure$map) {
    return function (m) {
      var tmp$;
      var v = m.value;
      if (Kotlin.isType(m, SetAdded)) {
        var vks = new Killables();
        var $receiver = closure$map;
        var value = new Pair(closure$fn(v, vks.killSet), vks.kill);
        $receiver.put_xwzc9p$(v, value);
      }
       else if (Kotlin.isType(m, SetRemoved)) {
        if ((tmp$ = closure$map.remove_11rb$(v)) != null) {
          tmp$.second();
        }
      }
       else
        Kotlin.noWhenBranchMatched();
      return Unit;
    };
  }
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  function toMap($receiver, ks, fn) {
    var map = LinkedHashMap_init();
    plusAssign_0(ks, toMap$lambda(map));
    $receiver.add_qlkmfe$(toMap$lambda_0(fn, map));
    var destination = LinkedHashMap_init_0(mapCapacity(map.size));
    var tmp$;
    tmp$ = map.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      destination.put_xwzc9p$(element.key, element.value.first);
    }
    return destination;
  }
  function plusAssign($receiver, msg) {
    $receiver.offer_11rb$(msg);
  }
  function HasExec() {
  }
  HasExec.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasExec',
    interfaces: []
  };
  function Coroutine$discardExecutor$lambda(closure$channel_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$channel = closure$channel_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$discardExecutor$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$discardExecutor$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$discardExecutor$lambda.prototype.constructor = Coroutine$discardExecutor$lambda;
  Coroutine$discardExecutor$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$channel.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 7;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var action = this.result_0;
            this.state_0 = 6;
            this.result_0 = action(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 2;
            continue;
          case 7:
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
  function discardExecutor$lambda(closure$channel_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$discardExecutor$lambda(closure$channel_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function discardExecutor$lambda_0(closure$channel) {
    return function (action) {
      try {
        plusAssign(closure$channel, action);
      }
       catch (e) {
        if (!Kotlin.isType(e, ClosedSendChannelException))
          throw e;
      }
      return Unit;
    };
  }
  function discardExecutor($receiver) {
    var channel = Channel(2147483647);
    launch($receiver, void 0, void 0, discardExecutor$lambda(channel));
    return discardExecutor$lambda_0(channel);
  }
  function Coroutine$executor$lambda(closure$channel_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$channel = closure$channel_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$executor$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$executor$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$executor$lambda.prototype.constructor = Coroutine$executor$lambda;
  Coroutine$executor$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$channel.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 7;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var action = this.result_0;
            this.state_0 = 6;
            this.result_0 = action(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 2;
            continue;
          case 7:
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
  function executor$lambda(closure$channel_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$executor$lambda(closure$channel_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$executor$lambda$lambda(closure$channel_0, closure$job_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$job = closure$job_0;
  }
  Coroutine$executor$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$executor$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$executor$lambda$lambda.prototype.constructor = Coroutine$executor$lambda$lambda;
  Coroutine$executor$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$channel.close_dbl4no$();
            this.state_0 = 2;
            this.result_0 = this.local$closure$job.join(this);
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
  function executor$lambda$lambda(closure$channel_0, closure$job_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$executor$lambda$lambda(closure$channel_0, closure$job_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$executor$lambda_0(closure$channel_0, closure$job_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 7;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$job = closure$job_0;
  }
  Coroutine$executor$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$executor$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$executor$lambda_0.prototype.constructor = Coroutine$executor$lambda_0;
  Coroutine$executor$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = CompletableDeferred().await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 7;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            return;
          case 4:
            this.finallyPath_0 = [7];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 7;
            this.state_0 = 6;
            this.result_0 = withContext(coroutines.NonCancellable, executor$lambda$lambda(this.local$closure$channel, this.local$closure$job), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 7:
            throw this.exception_0;
          default:this.state_0 = 7;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 7) {
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
  function executor$lambda_0(closure$channel_0, closure$job_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$executor$lambda_0(closure$channel_0, closure$job_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function executor$lambda_1(closure$channel) {
    return function (action) {
      try {
        plusAssign(closure$channel, action);
      }
       catch (e) {
        if (!Kotlin.isType(e, ClosedSendChannelException))
          throw e;
      }
      return Unit;
    };
  }
  function executor($receiver) {
    var channel = Channel(2147483647);
    var job = launch(coroutines.GlobalScope, void 0, void 0, executor$lambda(channel));
    launch($receiver, void 0, void 0, executor$lambda_0(channel, job));
    return executor$lambda_1(channel);
  }
  function Counted(create) {
    this.create_0 = create;
    this.current_0 = None_getInstance();
  }
  function Counted$Holder($outer, value, killable) {
    this.$outer = $outer;
    this.value = value;
    this.killable = killable;
    this.count = 0;
  }
  Counted$Holder.prototype.release = function () {
    this.count = this.count - 1 | 0;
    if (this.count <= 0) {
      this.$outer.current_0 = None_getInstance();
      this.killable();
    }
  };
  Counted$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: []
  };
  function Counted$get$lambda(this$Counted) {
    return function () {
      var k = new Killables();
      var $receiver = new Counted$Holder(this$Counted, this$Counted.create_0(k), k.kill);
      this$Counted.current_0 = new Some($receiver);
      return $receiver;
    };
  }
  function Counted$get$lambda$lambda(closure$holder) {
    return function () {
      closure$holder.release();
      return Unit;
    };
  }
  Counted.prototype.get_di35k5$ = function (ks) {
    var holder = this.current_0.getOrElse_skz6lt$(Counted$get$lambda(this));
    holder.count = holder.count + 1 | 0;
    ks.plusAssign_o14v8n$(once(Counted$get$lambda$lambda(holder)));
    return holder.value;
  };
  Counted.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Counted',
    interfaces: []
  };
  function reportd(error) {
    report(error);
  }
  function report(error) {
    console.error(error);
  }
  var remAssign = defineInlineFunction('appsimake-commonshr.commonshr.remAssign_t3h96y$', function ($receiver, value) {
    $receiver(value);
  });
  function Coroutine$remAssign($receiver_0, v_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$v = v_0;
  }
  Coroutine$remAssign.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$remAssign.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$remAssign.prototype.constructor = Coroutine$remAssign;
  Coroutine$remAssign.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver(this.local$v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  function remAssign_0($receiver_0, v_0, continuation_0, suspended) {
    var instance = new Coroutine$remAssign($receiver_0, v_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Funs() {
  }
  Funs.prototype.ignore1_287e2$ = defineInlineFunction('appsimake-commonshr.commonshr.Funs.ignore1_287e2$', wrapFunction(function () {
    function Funs$ignore1$lambda(this$Funs) {
      return function (f) {
        return this$Funs;
      };
    }
    return function () {
      return Funs$ignore1$lambda(this);
    };
  }));
  Funs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Funs',
    interfaces: []
  };
  var get_funs = defineInlineFunction('appsimake-commonshr.commonshr.get_funs_vvk9$', function ($receiver) {
    return $receiver;
  });
  var get_value = defineInlineFunction('appsimake-commonshr.commonshr.get_value_8dahcb$', function ($receiver) {
    return $receiver;
  });
  var get_constant = defineInlineFunction('appsimake-commonshr.commonshr.get_constant_8dahcb$', wrapFunction(function () {
    function get_constant$lambda(this$constant) {
      return function () {
        return this$constant;
      };
    }
    return function ($receiver) {
      return get_constant$lambda($receiver);
    };
  }));
  var get_ignoreThis = defineInlineFunction('appsimake-commonshr.commonshr.get_ignoreThis_xoe8il$', wrapFunction(function () {
    function get_ignoreThis$lambda(this$ignoreThis) {
      return function ($receiver) {
        return this$ignoreThis();
      };
    }
    return function ($receiver) {
      return get_ignoreThis$lambda($receiver);
    };
  }));
  var get_ignoreThis_0 = defineInlineFunction('appsimake-commonshr.commonshr.get_ignoreThis_dwii1c$', wrapFunction(function () {
    function get_ignoreThis$lambda(this$ignoreThis) {
      return function ($receiver, i) {
        return this$ignoreThis(i);
      };
    }
    return function ($receiver) {
      return get_ignoreThis$lambda($receiver);
    };
  }));
  function once$lambda(closure$triggered, this$once) {
    return function () {
      if (!closure$triggered.v) {
        closure$triggered.v = true;
        this$once();
      }
      return Unit;
    };
  }
  function once($receiver) {
    var triggered = {v: false};
    return once$lambda(triggered, $receiver);
  }
  function first$lambda(closure$trigger, this$first) {
    return function (t) {
      closure$trigger();
      this$first(t);
      return Unit;
    };
  }
  function first($receiver, trigger) {
    return first$lambda(trigger, $receiver);
  }
  function with$lambda(this$with, closure$trigger) {
    return function () {
      this$with();
      closure$trigger();
      return Unit;
    };
  }
  function with_0($receiver, trigger) {
    return with$lambda($receiver, trigger);
  }
  function plusAssign_0($receiver, trigger) {
    $receiver(trigger);
  }
  function groups$lambda(it) {
    return String_0(toCharArray(reversed(it)));
  }
  function groups($receiver, size, separator) {
    if (size === void 0)
      size = 3;
    if (separator === void 0)
      separator = ',';
    return joinToString(reversed(chunked(reversed(toList_0($receiver)), size, groups$lambda)), separator);
  }
  function get_groupThousands($receiver) {
    return groups($receiver.toString(), 3);
  }
  var Math_0 = Math;
  function get_formatSecs($receiver) {
    var mins = $receiver / 60.0;
    var minPart = Math_0.floor(mins);
    var secPart = mins - minPart;
    var secString = (numberToInt(secPart * 60) + 100 | 0).toString().substring(1);
    var minString = numberToInt(minPart).toString();
    return minString + ':' + secString;
  }
  function asyncKills$State(value, kill) {
    this.value = value;
    this.kill = kill;
  }
  asyncKills$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function Coroutine$asyncKills$state(closure$ks_0, closure$fn_0, v_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$ks = closure$ks_0;
    this.local$closure$fn = closure$fn_0;
    this.local$vks = void 0;
    this.local$v = v_0;
  }
  Coroutine$asyncKills$state.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$asyncKills$state.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$asyncKills$state.prototype.constructor = Coroutine$asyncKills$state;
  Coroutine$asyncKills$state.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$vks = killables(this.local$closure$ks);
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$vks.plusAssign_o14v8n$(this.result_0);
            return new asyncKills$State(this.local$v, this.local$vks.kill);
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
  function asyncKills$state(closure$ks_0, closure$fn_0) {
    return function (v_0, continuation_0, suspended) {
      var instance = new Coroutine$asyncKills$state(closure$ks_0, closure$fn_0, v_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$asyncKills$lambda(closure$current_0, closure$state_0, v_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$current = closure$current_0;
    this.local$closure$state = closure$state_0;
    this.local$v = v_0;
  }
  Coroutine$asyncKills$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$asyncKills$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$asyncKills$lambda.prototype.constructor = Coroutine$asyncKills$lambda;
  Coroutine$asyncKills$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!equals(this.local$v, this.local$closure$current.v.value)) {
              this.local$closure$current.v.kill();
              this.state_0 = 2;
              this.result_0 = this.local$closure$state(this.local$v, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$current.v = this.result_0, Unit;
          case 3:
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
  function asyncKills$lambda(closure$current_0, closure$state_0) {
    return function (v_0, continuation_0, suspended) {
      var instance = new Coroutine$asyncKills$lambda(closure$current_0, closure$state_0, v_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$asyncKills(ks_0, initial_0, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$state = void 0;
    this.local$ks = ks_0;
    this.local$initial = initial_0;
    this.local$fn = fn_0;
  }
  Coroutine$asyncKills.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$asyncKills.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$asyncKills.prototype.constructor = Coroutine$asyncKills;
  Coroutine$asyncKills.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$state = asyncKills$state(this.local$ks, this.local$fn);
            this.state_0 = 2;
            this.result_0 = this.local$state(this.local$initial, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var current = {v: this.result_0};
            return asyncKills$lambda(current, this.local$state);
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
  function asyncKills(ks_0, initial_0, fn_0, continuation_0, suspended) {
    var instance = new Coroutine$asyncKills(ks_0, initial_0, fn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function KillableValue(value, kill) {
    this.value = value;
    this.kill = kill;
  }
  KillableValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillableValue',
    interfaces: []
  };
  function Noop$lambda() {
    return Unit;
  }
  var Noop;
  function NoKill$lambda(it) {
    return Noop;
  }
  var NoKill;
  function addedTo$lambda(this$addedTo) {
    return function () {
      this$addedTo.cancel();
      return Unit;
    };
  }
  function addedTo$lambda_0(closure$remove) {
    return function (it) {
      closure$remove();
      return Unit;
    };
  }
  function addedTo($receiver, ks) {
    var remove = add(ks, addedTo$lambda($receiver));
    $receiver.invokeOnCompletion_f05bi3$(addedTo$lambda_0(remove));
    return $receiver;
  }
  function add($receiver, killable) {
    return $receiver(killable);
  }
  function killables($receiver) {
    var $receiver_0 = new Killables();
    $receiver_0.plusAssign_o14v8n$(add($receiver, $receiver_0.kill));
    return $receiver_0;
  }
  function seq($receiver) {
    var $receiver_0 = KillableSeq_init();
    $receiver_0.onKill_8be2vx$.plusAssign_o14v8n$(add($receiver, $receiver_0.kill));
    return $receiver_0;
  }
  function addedTo_0($receiver, ks) {
    plusAssign_0(ks, $receiver);
    return $receiver;
  }
  function Killables() {
    this.killSet = getCallableRef('add', function ($receiver, listener) {
      return $receiver.add_o14v8n$(listener);
    }.bind(null, this));
    this.list_0 = emptyList();
    this.killed_0 = false;
    this.kill = Killables$kill$lambda(this);
  }
  Killables.prototype.toKillSet = defineInlineFunction('appsimake-commonshr.killable.Killables.toKillSet', function () {
    return this.killSet;
  });
  Killables.prototype.plusAssign_o14v8n$ = function (listener) {
    this.add_o14v8n$(listener);
  };
  function Killables$add$lambda(this$Killables, closure$listener) {
    return function () {
      this$Killables.list_0 = minus(this$Killables.list_0, closure$listener);
      return Unit;
    };
  }
  Killables.prototype.add_o14v8n$ = function (listener) {
    var tmp$;
    if (equals(listener, Noop)) {
      return Noop;
    }
    if (!this.killed_0) {
      this.list_0 = plus(this.list_0, listener);
      tmp$ = once(Killables$add$lambda(this, listener));
    }
     else {
      listener();
      tmp$ = Noop;
    }
    return tmp$;
  };
  Killables.prototype.killables = function () {
    return killables(this.killSet);
  };
  Killables.prototype.seq = function () {
    var $receiver = KillableSeq_init();
    $receiver.onKill_8be2vx$.plusAssign_o14v8n$(this.add_o14v8n$($receiver.kill));
    return $receiver;
  };
  function Killables$kill$lambda(this$Killables) {
    return function () {
      if (!this$Killables.killed_0) {
        this$Killables.killed_0 = true;
        var l = this$Killables.list_0;
        this$Killables.list_0 = emptyList();
        var tmp$;
        tmp$ = l.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          element();
        }
      }
      return Unit;
    };
  }
  Killables.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Killables',
    interfaces: []
  };
  function HasKillSet() {
  }
  HasKillSet.prototype.rx_pn7ch0$ = function (fn) {
    return Rx_init_0(this.kills, fn);
  };
  HasKillSet.prototype.forEach_5mel8p$ = function ($receiver, fn) {
    $receiver.forEach_yk5nc8$(this.kills, fn);
  };
  HasKillSet.prototype.map_i8ud5a$ = function ($receiver, fn) {
    return $receiver.map_tx8wzh$(this.kills, fn);
  };
  HasKillSet.prototype.rxClass_wqb4ha$ = function ($receiver, fn) {
    rxClass($receiver, this.kills, fn);
  };
  function HasKillSet$remAssign$lambda(closure$fn) {
    return function ($receiver) {
      return closure$fn();
    };
  }
  function HasKillSet$remAssign$lambda_0(this$remAssign) {
    return function ($receiver, it) {
      this$remAssign.innerText = it;
      return Unit;
    };
  }
  HasKillSet.prototype.remAssign_7fncnf$ = function ($receiver, fn) {
    this.forEach_5mel8p$(this.rx_pn7ch0$(HasKillSet$remAssign$lambda(fn)), HasKillSet$remAssign$lambda_0($receiver));
  };
  HasKillSet.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKillSet',
    interfaces: []
  };
  function WrapKillSet(kills) {
    this.kills_poin75$_0 = kills;
  }
  Object.defineProperty(WrapKillSet.prototype, 'kills', {
    get: function () {
      return this.kills_poin75$_0;
    }
  });
  WrapKillSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WrapKillSet',
    interfaces: [HasKillSet]
  };
  function get_wrap($receiver) {
    return new WrapKillSet($receiver);
  }
  function KillableSeq(current, onKill) {
    if (current === void 0)
      current = Noop;
    this.current_0 = current;
    this.onKill_8be2vx$ = onKill;
    this.killed_0 = false;
    this.kill = KillableSeq$kill$lambda(this);
    this.assign = KillableSeq$assign$lambda(this);
  }
  KillableSeq.prototype.set_o14v8n$ = function (k) {
    if (this.killed_0) {
      k();
    }
     else {
      this.current_0();
      this.current_0 = k;
    }
  };
  KillableSeq.prototype.remAssign_o14v8n$ = function (fn) {
    this.set_o14v8n$(fn);
  };
  KillableSeq.prototype.plusAssign_o14v8n$ = function (fn) {
    this.set_o14v8n$(fn);
  };
  KillableSeq.prototype.clear = function () {
    this.set_o14v8n$(Noop);
  };
  KillableSeq.prototype.killables = function () {
    var $receiver = new Killables();
    this.set_o14v8n$($receiver.kill);
    return $receiver;
  };
  KillableSeq.prototype.seq = function () {
    var $receiver = KillableSeq_init();
    this.set_o14v8n$($receiver.kill);
    return $receiver;
  };
  KillableSeq.prototype.killSet = function () {
    return this.killables().killSet;
  };
  function KillableSeq$kill$lambda(this$KillableSeq) {
    return function () {
      if (!this$KillableSeq.killed_0) {
        this$KillableSeq.killed_0 = true;
        this$KillableSeq.current_0();
        this$KillableSeq.current_0 = Noop;
        this$KillableSeq.onKill_8be2vx$.kill();
      }
      return Unit;
    };
  }
  function KillableSeq$assign$lambda(this$KillableSeq) {
    return function (t) {
      this$KillableSeq.set_o14v8n$(t);
      return Unit;
    };
  }
  KillableSeq.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillableSeq',
    interfaces: []
  };
  function KillableSeq_init(initial, $this) {
    if (initial === void 0)
      initial = Noop;
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
  function RxCalc(ks, fn) {
    RxChild.call(this);
    this.fn_0 = fn;
    this.rx_kwbhe1$_0 = this.rx_kwbhe1$_0;
    this.kseq_0 = seq(ks);
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
      return this.fn_0(get_wrap(this.kseq_0.killSet()));
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
  function Obs(ks, parent, fn) {
    this.parent_0 = parent;
    this.fn_0 = fn;
    plusAssign_0(ks, Obs_init$lambda(this));
  }
  Obs.prototype.fire = function () {
    this.fn_0(this.parent_0.now);
  };
  function Obs_init$lambda(this$Obs) {
    return function () {
      this$Obs.parent_0.observers_8be2vx$.remove_11rb$(this$Obs);
      return Unit;
    };
  }
  Obs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Obs',
    interfaces: []
  };
  function RxIface() {
  }
  function RxIface$map$lambda(closure$fn, this$RxIface) {
    return function ($receiver) {
      return closure$fn($receiver, this$RxIface.invoke());
    };
  }
  RxIface.prototype.map_tx8wzh$ = function (ks, fn) {
    return Rx_init_0(ks, RxIface$map$lambda(fn, this));
  };
  function RxIface$forEach$lambda(closure$kseq, closure$fn) {
    return function (it) {
      closure$fn(get_wrap(closure$kseq.killSet()), it);
      return Unit;
    };
  }
  RxIface.prototype.forEach_yk5nc8$ = function (ks, fn) {
    var kseq = seq(ks);
    fn(get_wrap(kseq.killSet()), this.now);
    return this.forEachLater_sysl1e$(ks, RxIface$forEach$lambda(kseq, fn));
  };
  function RxIface$fold$lambda(closure$fn, closure$z) {
    return function ($receiver, it) {
      closure$z.v = closure$fn(closure$z.v, it);
      return Unit;
    };
  }
  RxIface.prototype.fold_h2yxzx$ = function (ks, z0, fn) {
    var z = {v: z0};
    return this.forEach_yk5nc8$(ks, RxIface$fold$lambda(fn, z));
  };
  function RxIface$foldKillsTrigger$lambda() {
    return Unit;
  }
  function RxIface$foldKillsTrigger$lambda_0(closure$z, closure$fn) {
    return function ($receiver, it) {
      closure$z.v();
      closure$z.v = closure$fn(it);
      return Unit;
    };
  }
  function RxIface$foldKillsTrigger$lambda_1(closure$z) {
    return function () {
      closure$z.v();
      return Unit;
    };
  }
  RxIface.prototype.foldKillsTrigger_ooixq2$ = function (ks, fn) {
    var z = {v: RxIface$foldKillsTrigger$lambda};
    this.forEach_yk5nc8$(ks, RxIface$foldKillsTrigger$lambda_0(z, fn));
    plusAssign_0(ks, RxIface$foldKillsTrigger$lambda_1(z));
  };
  function RxIface$foldKills$lambda(closure$z, closure$fn) {
    return function ($receiver, it) {
      closure$z.v();
      closure$z.v = closure$fn(it);
      return Unit;
    };
  }
  function RxIface$foldKills$lambda_0(closure$z) {
    return function () {
      closure$z.v();
      return Unit;
    };
  }
  RxIface.prototype.foldKills_ooixq2$ = function (ks, fn) {
    var z = {v: Noop};
    this.forEach_yk5nc8$(ks, RxIface$foldKills$lambda(z, fn));
    plusAssign_0(ks, RxIface$foldKills$lambda_0(z));
  };
  function RxIface$foldKills$lambda_1(closure$fn, closure$z) {
    return function ($receiver, it) {
      closure$z.v = closure$fn(closure$z.v, it);
      return Unit;
    };
  }
  function RxIface$foldKills$lambda_2(closure$z) {
    return function () {
      closure$z.v.kill();
      return Unit;
    };
  }
  RxIface.prototype.foldKills_h4yiec$ = function (ks, z0, fn) {
    var z = {v: z0};
    this.forEach_yk5nc8$(ks, RxIface$foldKills$lambda_1(fn, z));
    plusAssign_0(ks, RxIface$foldKills$lambda_2(z));
  };
  function RxIface$foldLater$lambda(closure$fn, closure$z) {
    return function (it) {
      closure$z.v = closure$fn(closure$z.v, it);
      return Unit;
    };
  }
  RxIface.prototype.foldLater_h2yxzx$ = function (ks, z0, fn) {
    var z = {v: z0};
    this.forEachLater_sysl1e$(ks, RxIface$foldLater$lambda(fn, z));
  };
  function RxIface$onChange$lambda(closure$fn) {
    return function (old, new_0) {
      closure$fn(old, new_0);
      return new_0;
    };
  }
  RxIface.prototype.onChange_4k9vs1$ = function (ks, fn) {
    return this.foldLater_h2yxzx$(ks, this.now, RxIface$onChange$lambda(fn));
  };
  function RxIface$onOff$lambda(closure$off, closure$on) {
    return function (old, new_0) {
      closure$off(old);
      closure$on(new_0);
      return Unit;
    };
  }
  RxIface.prototype.onOff_nf0d6g$ = function (ks, on, off) {
    on(this.now);
    this.onChange_4k9vs1$(ks, RxIface$onOff$lambda(off, on));
  };
  function RxIface$off$lambda(closure$offFn) {
    return function (old, f) {
      closure$offFn(old);
      return Unit;
    };
  }
  RxIface.prototype.off_sysl1e$ = function (ks, offFn) {
    this.onChange_4k9vs1$(ks, RxIface$off$lambda(offFn));
  };
  RxIface.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RxIface',
    interfaces: []
  };
  function feedTo$lambda_1(closure$target) {
    return function ($receiver, it) {
      closure$target.now = it;
      return Unit;
    };
  }
  function feedTo_1($receiver, ks, target) {
    $receiver.forEach_yk5nc8$(ks, feedTo$lambda_1(target));
  }
  function feedTo$lambda$lambda(closure$new, closure$old) {
    return function (it) {
      return it + closure$new - closure$old | 0;
    };
  }
  function feedTo$lambda_2(closure$rxv) {
    return function (old, new_0) {
      closure$rxv.transform_ru8m0w$(feedTo$lambda$lambda(new_0, old));
      return new_0;
    };
  }
  function feedTo$lambda$lambda_0(this$feedTo) {
    return function (it) {
      return it - this$feedTo.now | 0;
    };
  }
  function feedTo$lambda_3(closure$rxv, this$feedTo) {
    return function () {
      closure$rxv.transform_ru8m0w$(feedTo$lambda$lambda_0(this$feedTo));
      return Unit;
    };
  }
  function feedTo_2($receiver, ks, rxv) {
    $receiver.fold_h2yxzx$(ks, 0, feedTo$lambda_2(rxv));
    plusAssign_0(ks, feedTo$lambda_3(rxv, $receiver));
  }
  function feedTo$lambda$lambda_1(closure$new, closure$old) {
    return function (it) {
      return it.add(Kotlin.Long.fromInt(closure$new)).subtract(Kotlin.Long.fromInt(closure$old));
    };
  }
  function feedTo$lambda_4(closure$rxv) {
    return function (old, new_0) {
      closure$rxv.transform_ru8m0w$(feedTo$lambda$lambda_1(new_0, old));
      return new_0;
    };
  }
  function feedTo$lambda$lambda_2(this$feedTo) {
    return function (it) {
      return it.subtract(Kotlin.Long.fromInt(this$feedTo.now));
    };
  }
  function feedTo$lambda_5(closure$rxv, this$feedTo) {
    return function () {
      closure$rxv.transform_ru8m0w$(feedTo$lambda$lambda_2(this$feedTo));
      return Unit;
    };
  }
  function feedTo_3($receiver, ks, rxv) {
    $receiver.fold_h2yxzx$(ks, 0, feedTo$lambda_4(rxv));
    plusAssign_0(ks, feedTo$lambda_5(rxv, $receiver));
  }
  function feedTo$lambda$lambda_3(closure$new, closure$old) {
    return function (it) {
      return it.add(closure$new).subtract(closure$old);
    };
  }
  function feedTo$lambda_6(closure$rxv) {
    return function (old, new_0) {
      closure$rxv.transform_ru8m0w$(feedTo$lambda$lambda_3(new_0, old));
      return new_0;
    };
  }
  function feedTo$lambda$lambda_4(this$feedTo) {
    return function (it) {
      return it.subtract(this$feedTo.now);
    };
  }
  function feedTo$lambda_7(closure$rxv, this$feedTo) {
    return function () {
      closure$rxv.transform_ru8m0w$(feedTo$lambda$lambda_4(this$feedTo));
      return Unit;
    };
  }
  function feedTo_4($receiver, ks, rxv) {
    $receiver.fold_h2yxzx$(ks, L0, feedTo$lambda_6(rxv));
    plusAssign_0(ks, feedTo$lambda_7(rxv, $receiver));
  }
  function feedTo$lambda$lambda_5(closure$new, closure$old) {
    return function (it) {
      return it + closure$new - closure$old;
    };
  }
  function feedTo$lambda_8(closure$rxv) {
    return function (old, new_0) {
      closure$rxv.transform_ru8m0w$(feedTo$lambda$lambda_5(new_0, old));
      return new_0;
    };
  }
  function feedTo$lambda$lambda_6(this$feedTo) {
    return function (it) {
      return it - this$feedTo.now;
    };
  }
  function feedTo$lambda_9(closure$rxv, this$feedTo) {
    return function () {
      closure$rxv.transform_ru8m0w$(feedTo$lambda$lambda_6(this$feedTo));
      return Unit;
    };
  }
  function feedTo_5($receiver, ks, rxv) {
    $receiver.fold_h2yxzx$(ks, 0.0, feedTo$lambda_8(rxv));
    plusAssign_0(ks, feedTo$lambda_9(rxv, $receiver));
  }
  function orDefault$lambda(this$orDefault, closure$v) {
    return function ($receiver) {
      return this$orDefault.invoke().getOrDefault_11rb$(closure$v);
    };
  }
  function orDefault($receiver, ks, v) {
    return Rx_init_0(ks, orDefault$lambda($receiver, v));
  }
  function incremented$lambda(it) {
    return it + 1 | 0;
  }
  function incremented$lambda$lambda(it) {
    return it - 1 | 0;
  }
  function incremented$lambda_0(this$incremented) {
    return function () {
      this$incremented.transform_ru8m0w$(incremented$lambda$lambda);
      return Unit;
    };
  }
  function incremented($receiver) {
    $receiver.transform_ru8m0w$(incremented$lambda);
    return once(incremented$lambda_0($receiver));
  }
  function RxVal(currentValue) {
    RxParent.call(this);
    this.currentValue = currentValue;
    this.oldValue_ofkn4b$_0 = this.currentValue;
    this.observers_8be2vx$ = ArrayList_init();
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
  RxVal.prototype.forEachLater_sysl1e$ = function (ks, fn) {
    var obs = new Obs(ks, this, fn);
    this.observers_8be2vx$.add_11rb$(obs);
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
  function killOld($receiver, ks) {
    return $receiver.off_sysl1e$(ks, killOld$lambda);
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
  function add$lambda(closure$v) {
    return function (c) {
      return c.map_2o04qz$(add$lambda$lambda(closure$v)).orElse_isaiq7$(add$lambda$lambda_0(closure$v));
    };
  }
  function add_0($receiver, v) {
    $receiver.transform_ru8m0w$(add$lambda(v));
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
  function diffs($receiver, ks, fn) {
    fn(SetDiff$Companion_getInstance().of_2xberu$(None_getInstance(), $receiver.now));
    return $receiver.onChange_4k9vs1$(ks, diffs$lambda(fn));
  }
  function Rx(ks, currentValue, calc) {
    RxVal.call(this, currentValue);
    this.calc_0 = calc;
    this.calc_0.rx = this;
    plusAssign_0(ks, Rx_init$lambda(this));
  }
  function Rx_init$lambda(this$Rx) {
    return function () {
      this$Rx.calc_0.disconnectAll();
      return Unit;
    };
  }
  Rx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rx',
    interfaces: [RxVal, RxIface]
  };
  function Rx_init(ks, calc, $this) {
    $this = $this || Object.create(Rx.prototype);
    Rx.call($this, ks, calc.recalcValue(), calc);
    return $this;
  }
  function Rx_init_0(ks, fn, $this) {
    $this = $this || Object.create(Rx.prototype);
    Rx_init(ks, new RxCalc(ks, fn), $this);
    return $this;
  }
  function Var(v) {
    RxVal.call(this, v);
  }
  Var.prototype.setValue_11rb$ = function (value) {
    this.setCurrentValue_1c3m6u$(value);
    var observers = ArrayList_init();
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
  function increase$lambda(it) {
    return it + 1 | 0;
  }
  function increase($receiver) {
    $receiver.transform_ru8m0w$(increase$lambda);
  }
  function decrease$lambda(it) {
    return it - 1 | 0;
  }
  function decrease($receiver) {
    $receiver.transform_ru8m0w$(decrease$lambda);
  }
  function get_0($receiver) {
    return $receiver.now.get();
  }
  function set($receiver, v) {
    $receiver.now = new Some(v);
  }
  function rxClass($receiver, ks, style) {
    var rxv = Rx_init_0(ks, style);
    rxClass_0($receiver, ks, rxv);
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
  function rxClass_0($receiver, ks, style) {
    return style.onOff_nf0d6g$(ks, rxClass$lambda($receiver), rxClass$lambda_0($receiver));
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
    return function ($receiver, it) {
      if (it)
        addClass(this$rxClass, [closure$style]);
      else
        removeClass(this$rxClass, [closure$style]);
      return Unit;
    };
  }
  function rxClass_1($receiver, ks, style, fn) {
    fn.forEach_yk5nc8$(ks, rxClass$lambda_1(style, $receiver));
  }
  function rxClass$lambda_2(closure$fn) {
    return function ($receiver) {
      return closure$fn();
    };
  }
  function rxClass_2($receiver, ks, style, fn) {
    var rxv = Rx_init_0(ks, rxClass$lambda_2(fn));
    rxClass_1($receiver, ks, style, rxv);
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
  function rxClassOpt($receiver, ks, style) {
    style.onOff_nf0d6g$(ks, rxClassOpt$lambda($receiver), rxClassOpt$lambda_0($receiver));
  }
  function toRx_0($receiver, ks) {
    return Rx_init_0(ks, $receiver);
  }
  function rxClasses($receiver, ks, style) {
    rxClasses_0($receiver, ks, toRx_0(style, ks));
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
  function rxClasses_0($receiver, ks, style) {
    style.onOff_nf0d6g$(ks, rxClasses$lambda($receiver), rxClasses$lambda_0($receiver));
  }
  function toChannel$lambda(closure$ch) {
    return function () {
      closure$ch.close_dbl4no$();
      return Unit;
    };
  }
  function toChannel$lambda_0(closure$ch) {
    return function ($receiver, t) {
      closure$ch.offer_11rb$(t);
      return Unit;
    };
  }
  function toChannel($receiver, ks) {
    var ch = Channel(2147483647);
    plusAssign_0(ks, toChannel$lambda(ch));
    $receiver.forEach_yk5nc8$(ks, toChannel$lambda_0(ch));
    return ch;
  }
  function toChannelLater$lambda(closure$ch) {
    return function () {
      closure$ch.close_dbl4no$();
      return Unit;
    };
  }
  function toChannelLater$lambda_0(closure$ch) {
    return function (t) {
      closure$ch.offer_11rb$(t);
      return Unit;
    };
  }
  function toChannelLater($receiver, ks) {
    var ch = Channel(2147483647);
    plusAssign_0(ks, toChannelLater$lambda(ch));
    $receiver.forEachLater_sysl1e$(ks, toChannelLater$lambda_0(ch));
    return ch;
  }
  function Coroutine$mapAsync$calc(closure$fn_0, closure$kseq_0, t_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$kseq = closure$kseq_0;
    this.local$t = t_0;
  }
  Coroutine$mapAsync$calc.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapAsync$calc.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapAsync$calc.prototype.constructor = Coroutine$mapAsync$calc;
  Coroutine$mapAsync$calc.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$t, this.local$closure$kseq.killSet(), this);
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
  function mapAsync$calc(closure$fn_0, closure$kseq_0) {
    return function (t_0, continuation_0, suspended) {
      var instance = new Coroutine$mapAsync$calc(closure$fn_0, closure$kseq_0, t_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$mapAsync$lambda(closure$ch_0, closure$calc_0, closure$rxv_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$ch = closure$ch_0;
    this.local$closure$calc = closure$calc_0;
    this.local$closure$rxv = closure$rxv_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$mapAsync$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapAsync$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapAsync$lambda.prototype.constructor = Coroutine$mapAsync$lambda;
  Coroutine$mapAsync$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$ch.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 7;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var t = this.result_0;
            this.local$tmp$_0 = this.local$closure$rxv;
            this.state_0 = 6;
            this.result_0 = this.local$closure$calc(t, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$_0.now = this.result_0;
            this.state_0 = 2;
            continue;
          case 7:
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
  function mapAsync$lambda(closure$ch_0, closure$calc_0, closure$rxv_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mapAsync$lambda(closure$ch_0, closure$calc_0, closure$rxv_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$mapAsync($receiver_0, ks_0, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$calc = void 0;
    this.local$$receiver = $receiver_0;
    this.local$ks = ks_0;
    this.local$fn = fn_0;
  }
  Coroutine$mapAsync.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapAsync.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapAsync.prototype.constructor = Coroutine$mapAsync;
  Coroutine$mapAsync.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var kseq = seq(this.local$ks);
            this.local$calc = mapAsync$calc(this.local$fn, kseq);
            this.state_0 = 2;
            this.result_0 = this.local$calc(this.local$$receiver.now, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var rxv = new Var(this.result_0);
            var ch = toChannelLater(this.local$$receiver, this.local$ks);
            addedTo(launch(coroutines.GlobalScope, void 0, void 0, mapAsync$lambda(ch, this.local$calc, rxv)), this.local$ks);
            return rxv;
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
  function mapAsync($receiver_0, ks_0, fn_0, continuation_0, suspended) {
    var instance = new Coroutine$mapAsync($receiver_0, ks_0, fn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function rx($receiver, fn) {
    return Rx_init_0($receiver, fn);
  }
  function toVar($receiver) {
    return new Var($receiver);
  }
  function RxSet() {
  }
  RxSet.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RxSet',
    interfaces: [Set]
  };
  function RxMutableSet(delegate) {
    if (delegate === void 0) {
      delegate = LinkedHashSet_init();
    }
    AbstractMutableSet.call(this);
    this.delegate_0 = delegate;
    this.iteratorRemoveImpl_0 = chain_0(RxMutableSet$iteratorRemoveImpl$lambda);
    this.addImpl_0 = chain_0(getCallableRef('add', function ($receiver, element) {
      return $receiver.add_11rb$(element);
    }.bind(null, this.delegate_0)));
    this.addAllImpl_0 = chain_0(getCallableRef('addAll', function ($receiver, elements) {
      return $receiver.addAll_brywnq$(elements);
    }.bind(null, this.delegate_0)));
    this.removeImpl_0 = chain_0(getCallableRef('remove', function ($receiver, element) {
      return $receiver.remove_11rb$(element);
    }.bind(null, this.delegate_0)));
    this.removeAllImpl_0 = chain_0(getCallableRef('removeAll', function ($receiver, elements) {
      return $receiver.removeAll_brywnq$(elements);
    }.bind(null, this.delegate_0)));
    this.retainAllImpl_0 = chain_0(getCallableRef('retainAll', function ($receiver, elements) {
      return $receiver.retainAll_brywnq$(elements);
    }.bind(null, this.delegate_0)));
    this.clearChain_0 = chain(getCallableRef('clear', function ($receiver) {
      return $receiver.clear(), Unit;
    }.bind(null, this.delegate_0)));
    this.diffs_ppk7yo$_0 = lazy(RxMutableSet$diffs$lambda(this));
    this.updated_c2agcj$_0 = lazy(RxMutableSet$updated$lambda(this));
    this.sizeRx_n1qyhb$_0 = lazy(RxMutableSet$sizeRx$lambda(this));
    this.isEmptyRx_qqgpud$_0 = lazy(RxMutableSet$isEmptyRx$lambda(this));
    this.isNotEmptyRx_44lz1o$_0 = lazy(RxMutableSet$isNotEmptyRx$lambda(this));
  }
  RxMutableSet.prototype.contains_11rb$ = function (element) {
    return this.delegate_0.contains_11rb$(element);
  };
  RxMutableSet.prototype.containsAll_brywnq$ = function (elements) {
    return this.delegate_0.containsAll_brywnq$(elements);
  };
  RxMutableSet.prototype.isEmpty = function () {
    return this.delegate_0.isEmpty();
  };
  function RxMutableSet$iterator$lambda(this$RxMutableSet) {
    return function (it) {
      this$RxMutableSet.iteratorRemoveImpl_0.invoke_11rb$(it);
      return Unit;
    };
  }
  RxMutableSet.prototype.iterator = function () {
    return new RxMutableIterator(this.delegate_0.iterator(), RxMutableSet$iterator$lambda(this));
  };
  RxMutableSet.prototype.add_11rb$ = function (element) {
    return this.addImpl_0.invoke_11rb$(element);
  };
  RxMutableSet.prototype.addAll_brywnq$ = function (elements) {
    return this.addAllImpl_0.invoke_11rb$(elements);
  };
  RxMutableSet.prototype.remove_11rb$ = function (element) {
    return this.removeImpl_0.invoke_11rb$(element);
  };
  RxMutableSet.prototype.removeAll_brywnq$ = function (elements) {
    return this.removeAllImpl_0.invoke_11rb$(elements);
  };
  RxMutableSet.prototype.retainAll_brywnq$ = function (elements) {
    return this.retainAllImpl_0.invoke_11rb$(elements);
  };
  RxMutableSet.prototype.clear = function () {
    this.clearChain_0.invoke();
  };
  Object.defineProperty(RxMutableSet.prototype, 'diffs', {
    get: function () {
      return this.diffs_ppk7yo$_0.value;
    }
  });
  Object.defineProperty(RxMutableSet.prototype, 'updated_0', {
    get: function () {
      return this.updated_c2agcj$_0.value;
    }
  });
  function RxMutableSet$rxProperty$lambda(fn, rxv) {
    return function () {
      var closure$fn = fn;
      rxv.now = closure$fn();
      return Unit;
    };
  }
  RxMutableSet.prototype.rxProperty_0 = function (fn) {
    var rxv = new Var(fn());
    this.updated_0.add_o14v8n$(RxMutableSet$rxProperty$lambda(fn, rxv));
    return rxv;
  };
  Object.defineProperty(RxMutableSet.prototype, 'sizeRx', {
    get: function () {
      return this.sizeRx_n1qyhb$_0.value;
    }
  });
  Object.defineProperty(RxMutableSet.prototype, 'isEmptyRx', {
    get: function () {
      return this.isEmptyRx_qqgpud$_0.value;
    }
  });
  Object.defineProperty(RxMutableSet.prototype, 'isNotEmptyRx', {
    get: function () {
      return this.isNotEmptyRx_44lz1o$_0.value;
    }
  });
  Object.defineProperty(RxMutableSet.prototype, 'size', {
    get: function () {
      return this.delegate_0.size;
    }
  });
  function RxMutableSet$iteratorRemoveImpl$lambda(f) {
    return Unit;
  }
  function RxMutableSet$diffs$lambda$emit(closure$emitter) {
    return function ($receiver) {
      closure$emitter.emit_11rb$($receiver);
    };
  }
  function RxMutableSet$diffs$lambda$added(closure$emitter) {
    return function (e) {
      closure$emitter.emit_11rb$(SetDiff$Companion_getInstance().added_i5x0yv$(e.slice()));
    };
  }
  function RxMutableSet$diffs$lambda$removed(closure$emitter) {
    return function (e) {
      closure$emitter.emit_11rb$(SetDiff$Companion_getInstance().removed_i5x0yv$(e.slice()));
    };
  }
  function RxMutableSet$diffs$lambda$compare$lambda$lambda(this$RxMutableSet, closure$fn, closure$cmp, closure$emit) {
    return function (es) {
      var before = toSet(this$RxMutableSet);
      var $receiver = closure$fn(es);
      var closure$cmp_0 = closure$cmp;
      var closure$emit_0 = closure$emit;
      if ($receiver) {
        closure$emit_0(closure$cmp_0(before));
      }
      return $receiver;
    };
  }
  function RxMutableSet$diffs$lambda$compare$lambda(this$RxMutableSet, closure$cmp, closure$emit) {
    return function (fn) {
      return RxMutableSet$diffs$lambda$compare$lambda$lambda(this$RxMutableSet, fn, closure$cmp, closure$emit);
    };
  }
  function RxMutableSet$diffs$lambda$compare(this$RxMutableSet, closure$emit) {
    return function ($receiver, cmp) {
      $receiver.plusAssign_vfdp4w$(RxMutableSet$diffs$lambda$compare$lambda(this$RxMutableSet, cmp, closure$emit));
    };
  }
  function RxMutableSet$diffs$lambda$lambda(closure$added) {
    return function (it) {
      closure$added([it]);
      return Unit;
    };
  }
  function RxMutableSet$diffs$lambda$lambda_0(closure$added) {
    return function (e, b) {
      if (b)
        closure$added([e]);
      return Unit;
    };
  }
  function RxMutableSet$diffs$lambda$lambda_1(closure$removed) {
    return function (e, b) {
      if (b)
        closure$removed([e]);
      return Unit;
    };
  }
  function RxMutableSet$diffs$lambda$lambda_2(this$RxMutableSet) {
    return function (before) {
      return new SetDiff(void 0, minus_0(this$RxMutableSet, before));
    };
  }
  function RxMutableSet$diffs$lambda$lambda_3(this$RxMutableSet) {
    return function (before) {
      return new SetDiff(minus_0(before, this$RxMutableSet));
    };
  }
  function RxMutableSet$diffs$lambda$lambda_4(this$RxMutableSet) {
    return function (before) {
      return new SetDiff(minus_0(before, this$RxMutableSet));
    };
  }
  function RxMutableSet$diffs$lambda$lambda$lambda(this$RxMutableSet, closure$fn, closure$emit) {
    return function () {
      var diff = new SetDiff(toSet(this$RxMutableSet));
      closure$fn();
      closure$emit(diff);
      return Unit;
    };
  }
  function RxMutableSet$diffs$lambda$lambda_5(this$RxMutableSet, closure$emit) {
    return function (fn) {
      return RxMutableSet$diffs$lambda$lambda$lambda(this$RxMutableSet, fn, closure$emit);
    };
  }
  function RxMutableSet$diffs$lambda(this$RxMutableSet) {
    return function () {
      var emitter = new Emitter();
      var emit = RxMutableSet$diffs$lambda$emit(emitter);
      var added = RxMutableSet$diffs$lambda$added(emitter);
      var removed = RxMutableSet$diffs$lambda$removed(emitter);
      var compare = RxMutableSet$diffs$lambda$compare(this$RxMutableSet, emit);
      this$RxMutableSet.iteratorRemoveImpl_0.thenIn_qlkmfe$(RxMutableSet$diffs$lambda$lambda(added));
      this$RxMutableSet.addImpl_0.thenInOut_15xl62$(RxMutableSet$diffs$lambda$lambda_0(added));
      this$RxMutableSet.removeImpl_0.thenInOut_15xl62$(RxMutableSet$diffs$lambda$lambda_1(removed));
      compare(this$RxMutableSet.addAllImpl_0, RxMutableSet$diffs$lambda$lambda_2(this$RxMutableSet));
      compare(this$RxMutableSet.removeAllImpl_0, RxMutableSet$diffs$lambda$lambda_3(this$RxMutableSet));
      compare(this$RxMutableSet.retainAllImpl_0, RxMutableSet$diffs$lambda$lambda_4(this$RxMutableSet));
      this$RxMutableSet.clearChain_0.plusAssign_h93c0$(RxMutableSet$diffs$lambda$lambda_5(this$RxMutableSet, emit));
      return emitter;
    };
  }
  function RxMutableSet$updated$lambda$updated$lambda(closure$ls) {
    return function (it) {
      closure$ls.fire();
      return Unit;
    };
  }
  function RxMutableSet$updated$lambda$updated(closure$ls) {
    return function ($receiver) {
      $receiver.then_qlkmfe$(RxMutableSet$updated$lambda$updated$lambda(closure$ls));
    };
  }
  function RxMutableSet$updated$lambda$updated$lambda_0(closure$ls) {
    return function (it) {
      var closure$ls_0 = closure$ls;
      if (it)
        closure$ls_0.fire();
      return Unit;
    };
  }
  function RxMutableSet$updated$lambda$updated_0(closure$ls) {
    return function ($receiver) {
      $receiver.then_1o0k09$(RxMutableSet$updated$lambda$updated$lambda_0(closure$ls));
    };
  }
  function RxMutableSet$updated$lambda$updated$lambda_1(closure$ls) {
    return function (it) {
      closure$ls.fire();
      return Unit;
    };
  }
  function RxMutableSet$updated$lambda$updated_1(closure$ls) {
    return function ($receiver) {
      $receiver.then_1o0k09$(RxMutableSet$updated$lambda$updated$lambda_1(closure$ls));
    };
  }
  function RxMutableSet$updated$lambda(this$RxMutableSet) {
    return function () {
      var ls = new Listeners();
      var updated = RxMutableSet$updated$lambda$updated(ls);
      var updated_0 = RxMutableSet$updated$lambda$updated_0(ls);
      var updated_1 = RxMutableSet$updated$lambda$updated_1(ls);
      updated_1(this$RxMutableSet.iteratorRemoveImpl_0);
      updated_0(this$RxMutableSet.addAllImpl_0);
      updated_0(this$RxMutableSet.addImpl_0);
      updated_0(this$RxMutableSet.removeImpl_0);
      updated_0(this$RxMutableSet.removeAllImpl_0);
      updated_0(this$RxMutableSet.retainAllImpl_0);
      updated(this$RxMutableSet.clearChain_0);
      return ls;
    };
  }
  function RxMutableSet$sizeRx$lambda$lambda(this$RxMutableSet) {
    return function () {
      return this$RxMutableSet.size;
    };
  }
  function RxMutableSet$sizeRx$lambda(this$RxMutableSet) {
    return function () {
      return this$RxMutableSet.rxProperty_0(RxMutableSet$sizeRx$lambda$lambda(this$RxMutableSet));
    };
  }
  function RxMutableSet$isEmptyRx$lambda$lambda(this$RxMutableSet) {
    return function () {
      return this$RxMutableSet.isEmpty();
    };
  }
  function RxMutableSet$isEmptyRx$lambda(this$RxMutableSet) {
    return function () {
      return this$RxMutableSet.rxProperty_0(RxMutableSet$isEmptyRx$lambda$lambda(this$RxMutableSet));
    };
  }
  function RxMutableSet$isNotEmptyRx$lambda$lambda(this$RxMutableSet) {
    return function () {
      return !this$RxMutableSet.isEmpty();
    };
  }
  function RxMutableSet$isNotEmptyRx$lambda(this$RxMutableSet) {
    return function () {
      return this$RxMutableSet.rxProperty_0(RxMutableSet$isNotEmptyRx$lambda$lambda(this$RxMutableSet));
    };
  }
  RxMutableSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxMutableSet',
    interfaces: [RxSet, AbstractMutableSet, MutableSet]
  };
  function RxMutableIterator(delegate, removed) {
    this.delegate_0 = delegate;
    this.removed_0 = removed;
    this.latest_0 = None_getInstance();
  }
  RxMutableIterator.prototype.next = function () {
    var $receiver = this.delegate_0.next();
    this.latest_0 = new Some($receiver);
    return $receiver;
  };
  RxMutableIterator.prototype.remove = function () {
    this.delegate_0.remove();
    this.latest_0.forEach_qlkmfe$(this.removed_0);
  };
  RxMutableIterator.prototype.hasNext = function () {
    return this.delegate_0.hasNext();
  };
  RxMutableIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxMutableIterator',
    interfaces: [MutableIterator]
  };
  function FunChain0(delegate) {
    this.delegate_0 = delegate;
    this.fns_0 = ArrayList_init();
  }
  FunChain0.prototype.add_h93c0$ = function (fn) {
    this.fns_0.add_11rb$(fn);
  };
  FunChain0.prototype.invoke = function () {
    var tmp$;
    var accumulator = this.delegate_0;
    tmp$ = this.fns_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element(accumulator);
    }
    return accumulator();
  };
  FunChain0.prototype.plusAssign_h93c0$ = function (fn) {
    this.add_h93c0$(fn);
  };
  function FunChain0$then$lambda$lambda(closure$d, closure$fn) {
    return function () {
      var $receiver = closure$d();
      closure$fn($receiver);
      return $receiver;
    };
  }
  function FunChain0$then$lambda(closure$fn) {
    return function (d) {
      return FunChain0$then$lambda$lambda(d, closure$fn);
    };
  }
  FunChain0.prototype.then_qlkmfe$ = function (fn) {
    this.add_h93c0$(FunChain0$then$lambda(fn));
  };
  FunChain0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunChain0',
    interfaces: []
  };
  function chain(delegate) {
    return new FunChain0(delegate);
  }
  function FunChain1(delegate) {
    this.delegate_0 = delegate;
    this.fns_0 = ArrayList_init();
  }
  FunChain1.prototype.add_vfdp4w$ = function (fn) {
    this.fns_0.add_11rb$(fn);
  };
  FunChain1.prototype.invoke_11rb$ = function (p1) {
    var tmp$;
    var accumulator = this.delegate_0;
    tmp$ = this.fns_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element(accumulator);
    }
    return accumulator(p1);
  };
  FunChain1.prototype.plusAssign_vfdp4w$ = function (fn) {
    this.add_vfdp4w$(fn);
  };
  function FunChain1$then$lambda$lambda(closure$d, closure$fn) {
    return function (p1) {
      var $receiver = closure$d(p1);
      closure$fn($receiver);
      return $receiver;
    };
  }
  function FunChain1$then$lambda(closure$fn) {
    return function (d) {
      return FunChain1$then$lambda$lambda(d, closure$fn);
    };
  }
  FunChain1.prototype.then_1o0k09$ = function (fn) {
    this.add_vfdp4w$(FunChain1$then$lambda(fn));
  };
  function FunChain1$thenIn$lambda$lambda(closure$d, closure$fn) {
    return function (p1) {
      var $receiver = closure$d(p1);
      closure$fn(p1);
      return $receiver;
    };
  }
  function FunChain1$thenIn$lambda(closure$fn) {
    return function (d) {
      return FunChain1$thenIn$lambda$lambda(d, closure$fn);
    };
  }
  FunChain1.prototype.thenIn_qlkmfe$ = function (fn) {
    this.add_vfdp4w$(FunChain1$thenIn$lambda(fn));
  };
  function FunChain1$thenInOut$lambda$lambda(closure$d, closure$fn) {
    return function (p1) {
      var $receiver = closure$d(p1);
      closure$fn(p1, $receiver);
      return $receiver;
    };
  }
  function FunChain1$thenInOut$lambda(closure$fn) {
    return function (d) {
      return FunChain1$thenInOut$lambda$lambda(d, closure$fn);
    };
  }
  FunChain1.prototype.thenInOut_15xl62$ = function (fn) {
    this.add_vfdp4w$(FunChain1$thenInOut$lambda(fn));
  };
  FunChain1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunChain1',
    interfaces: []
  };
  function chain_0(delegate) {
    return new FunChain1(delegate);
  }
  function toMap_0($receiver, ks, fn) {
    return toMap(toMoves(withInitial($receiver.diffs, [new SetDiff(void 0, toSet($receiver))])), ks, fn);
  }
  function process_0($receiver, ks, fn) {
    toMap_0($receiver, ks, fn);
  }
  var package$common = _.common || (_.common = {});
  package$common.dyn = dyn;
  $$importsForInline$$['appsimake-commonshr'] = _;
  package$common.obj_287e2$ = obj;
  package$common.dyn_5ij4lk$ = dyn_0;
  package$common.obj_7qq44f$ = obj_0;
  package$common.NamedDelegate = NamedDelegate;
  package$common.NamedThisDelegate = NamedThisDelegate;
  package$common.named_cq6yhu$ = named;
  package$common.namedThis_5cxx4g$ = namedThis;
  package$common.jsNew_x7e9z0$ = jsNew;
  package$common.jsNew_8jhc6t$ = jsNew_0;
  package$common.Listeners = Listeners;
  package$common.EmitterIface = EmitterIface;
  package$common.withInitial_fcphpr$ = withInitial;
  package$common.withInitial_6ft3if$ = withInitial_0;
  package$common.AsyncEmitter = AsyncEmitter;
  package$common.emptyAsyncEmitter_287e2$ = emptyAsyncEmitter;
  package$common.DynamicAsyncEmitter = DynamicAsyncEmitter;
  package$common.Emitter = Emitter;
  package$common.toSetSource_9p620j$ = toSetSource;
  package$common.MappedEmitter = MappedEmitter;
  package$common.map_x7fpzi$ = map;
  package$common.feedTo_cenaja$ = feedTo;
  package$common.filtered_duf482$ = filtered;
  package$common.combineAnd_6vwu35$ = combineAnd;
  package$common.combineN_pti7h3$ = combineN;
  package$common.combine_kujoqw$ = combine;
  package$common.combine_bust2m$ = combine_0;
  package$common.andIn_7i9aus$ = andIn;
  package$common.feedTo_7nd12m$ = feedTo_0;
  package$common.SetSource = SetSource;
  package$common.toRx_lwypm1$ = toRx;
  package$common.CircularList = CircularList;
  Object.defineProperty(RandomSource, 'Companion', {
    get: RandomSource$Companion_getInstance
  });
  package$common.RandomSource = RandomSource;
  package$common.random_txoh8m$ = random_0;
  package$common.SetSourceWithKey = SetSourceWithKey;
  package$common.map_2x290v$ = map_0;
  package$common.filtered_tu02nm$ = filtered_0;
  package$common.combineN_oy6zd9$ = combineN_0;
  package$common.combine_eiygni$ = combine_1;
  package$common.combine_vdrza5$ = combine_2;
  package$common.toEmitter_i3kjy7$ = toEmitter;
  package$common.combineAnd_8nturq$ = combineAnd_0;
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
  package$common.getOrNull_qg7gok$ = getOrNull;
  package$common.Some = Some;
  Object.defineProperty(package$common, 'None', {
    get: None_getInstance
  });
  package$common.toOptional_irb06o$ = toOptional;
  package$common.orEmpty_rw3ye5$ = orEmpty;
  package$common.plus_idxhrq$ = plus_1;
  package$common.orEmpty_m2768g$ = orEmpty_0;
  package$common.orEmpty_r4li7g$ = orEmpty_1;
  Either.Left = Either$Left;
  Either.Right = Either$Right;
  package$common.Either = Either;
  var package$commonlib = _.commonlib || (_.commonlib = {});
  package$commonlib.lib = lib;
  package$commonlib.Lib = Lib;
  package$commonlib.Function = Function;
  package$commonlib.DocWrap = DocWrap;
  package$commonlib.coll_287e2$ = coll;
  package$commonlib.HasPath = HasPath;
  package$commonlib.CollectionWrap = CollectionWrap;
  package$commonlib.doc_287e2$ = doc;
  package$commonlib.docn_287e2$ = docn;
  Object.defineProperty(package$commonlib, 'apps', {
    get: apps_getInstance
  });
  package$commonlib.AppDoc = AppDoc;
  package$commonlib.get_admin_6l3wi3$ = get_admin;
  package$commonlib.get_private_6l3wi3$ = get_private;
  package$commonlib.get_singletons_6l3wi3$ = get_singletons;
  package$commonlib.Singleton = Singleton;
  package$commonlib.Private = Private;
  package$commonlib.AdminDoc = AdminDoc;
  package$commonlib.get_fcmtokens_z8qup$ = get_fcmtokens;
  package$commonlib.FcmToken = FcmToken;
  Object.defineProperty(SetDiff, 'Companion', {
    get: SetDiff$Companion_getInstance
  });
  var package$commonshr = _.commonshr || (_.commonshr = {});
  package$commonshr.SetDiff = SetDiff;
  package$commonshr.toLazy_eoe559$ = toLazy;
  package$commonshr.SetMove = SetMove;
  package$commonshr.SetAdded = SetAdded;
  package$commonshr.SetRemoved = SetRemoved;
  package$commonshr.InvokeApply = InvokeApply;
  package$commonshr.invoke_fiuc92$ = invoke;
  package$commonshr.toMoves_k2zy3$ = toMoves;
  package$commonshr.process_7c27tl$ = process;
  package$commonshr.toMap_wmk844$ = toMap;
  package$commonshr.plusAssign_rmur43$ = plusAssign;
  package$commonshr.HasExec = HasExec;
  package$commonshr.discardExecutor_e9pf1l$ = discardExecutor;
  package$commonshr.executor_e9pf1l$ = executor;
  package$commonshr.Counted = Counted;
  package$commonshr.reportd_za3rmp$ = reportd;
  package$commonshr.report_s8jyv4$ = report;
  package$commonshr.remAssign_t3h96y$ = remAssign;
  package$commonshr.remAssign_cslpg8$ = remAssign_0;
  package$commonshr.get_value_8dahcb$ = get_value;
  package$commonshr.Funs = Funs;
  package$commonshr.get_funs_vvk9$ = get_funs;
  package$commonshr.get_constant_8dahcb$ = get_constant;
  package$commonshr.get_ignoreThis_xoe8il$ = get_ignoreThis;
  package$commonshr.get_ignoreThis_dwii1c$ = get_ignoreThis_0;
  package$commonshr.once_yo2cq0$ = once;
  package$commonshr.first_4s9a7f$ = first;
  package$commonshr.with_qs7ci7$ = with_0;
  package$commonshr.plusAssign_aeyq4w$ = plusAssign_0;
  package$commonshr.groups_eu8zx7$ = groups;
  package$commonshr.get_groupThousands_s8ev3n$ = get_groupThousands;
  package$commonshr.get_formatSecs_s8ev3n$ = get_formatSecs;
  var package$killable = _.killable || (_.killable = {});
  package$killable.asyncKills_9scqh$ = asyncKills;
  package$killable.KillableValue = KillableValue;
  Object.defineProperty(package$killable, 'Noop', {
    get: function () {
      return Noop;
    }
  });
  Object.defineProperty(package$killable, 'NoKill', {
    get: function () {
      return NoKill;
    }
  });
  package$killable.addedTo_tjw9ba$ = addedTo;
  package$killable.add_1wvaoy$ = add;
  package$killable.killables_yzxo1x$ = killables;
  package$killable.seq_yzxo1x$ = seq;
  package$killable.addedTo_wvpfik$ = addedTo_0;
  package$killable.Killables = Killables;
  package$killable.HasKillSet = HasKillSet;
  package$killable.WrapKillSet = WrapKillSet;
  package$killable.get_wrap_yzxo1x$ = get_wrap;
  package$killable.KillableSeq_init_o14v8n$ = KillableSeq_init;
  package$killable.KillableSeq = KillableSeq;
  var package$rx = _.rx || (_.rx = {});
  package$rx.RxChild = RxChild;
  package$rx.RxCalc = RxCalc;
  package$rx.RxParent = RxParent;
  package$rx.connect_xonuym$ = connect;
  package$rx.Obs = Obs;
  package$rx.RxIface = RxIface;
  package$rx.feedTo_v090q1$ = feedTo_1;
  package$rx.feedTo_uiixe9$ = feedTo_2;
  package$rx.feedTo_mlhyxs$ = feedTo_3;
  package$rx.feedTo_pp0vfr$ = feedTo_4;
  package$rx.feedTo_i9r8cj$ = feedTo_5;
  package$rx.orDefault_t83rac$ = orDefault;
  package$rx.incremented_eoy9qo$ = incremented;
  package$rx.RxVal = RxVal;
  package$rx.killOld_mkuk0r$ = killOld;
  package$rx.add_gcz0w7$ = add_0;
  package$rx.remove_gcz0w7$ = remove;
  package$rx.diffs_x22hzp$ = diffs;
  package$rx.Rx_init_y3u4fh$ = Rx_init;
  package$rx.Rx_init_3k3t3o$ = Rx_init_0;
  package$rx.Rx = Rx;
  package$rx.Var = Var;
  package$rx.increase_eoy9qo$ = increase;
  package$rx.decrease_eoy9qo$ = decrease;
  package$rx.get_kw0pia$ = get_0;
  package$rx.set_atqor6$ = set;
  package$rx.rxClass_qqij52$ = rxClass;
  package$rx.rxClass_xqwy5d$ = rxClass_0;
  package$rx.rxHover_st2z1u$ = rxHover;
  package$rx.rxClass_4zvhqy$ = rxClass_1;
  package$rx.rxClass_f3mx65$ = rxClass_2;
  package$rx.rxClassOpt_jabexw$ = rxClassOpt;
  package$rx.toRx_hxpdmx$ = toRx_0;
  package$rx.rxClasses_g0rwsb$ = rxClasses;
  package$rx.rxClasses_pxolx6$ = rxClasses_0;
  package$rx.toChannel_tgu8ha$ = toChannel;
  package$rx.toChannelLater_tgu8ha$ = toChannelLater;
  package$rx.mapAsync_wvb2ro$ = mapAsync;
  package$rx.rx_qhfek7$ = rx;
  package$rx.toVar_eoe559$ = toVar;
  package$rx.RxSet = RxSet;
  package$rx.RxMutableSet = RxMutableSet;
  package$rx.RxMutableIterator = RxMutableIterator;
  package$rx.FunChain0 = FunChain0;
  package$rx.chain_klfg04$ = chain;
  package$rx.FunChain1 = FunChain1;
  package$rx.chain_7h29gk$ = chain_0;
  package$rx.toMap_xgvqzy$ = toMap_0;
  package$rx.process_w2h46r$ = process_0;
  withInitial$ObjectLiteral.prototype.plusAssign_qlkmfe$ = EmitterIface.prototype.plusAssign_qlkmfe$;
  Emitter.prototype.plusAssign_qlkmfe$ = EmitterIface.prototype.plusAssign_qlkmfe$;
  MappedEmitter.prototype.plusAssign_qlkmfe$ = EmitterIface.prototype.plusAssign_qlkmfe$;
  toEmitter$ObjectLiteral.prototype.plusAssign_qlkmfe$ = EmitterIface.prototype.plusAssign_qlkmfe$;
  toMoves$ObjectLiteral.prototype.plusAssign_qlkmfe$ = EmitterIface.prototype.plusAssign_qlkmfe$;
  WrapKillSet.prototype.rx_pn7ch0$ = HasKillSet.prototype.rx_pn7ch0$;
  WrapKillSet.prototype.forEach_5mel8p$ = HasKillSet.prototype.forEach_5mel8p$;
  WrapKillSet.prototype.map_i8ud5a$ = HasKillSet.prototype.map_i8ud5a$;
  WrapKillSet.prototype.rxClass_wqb4ha$ = HasKillSet.prototype.rxClass_wqb4ha$;
  WrapKillSet.prototype.remAssign_7fncnf$ = HasKillSet.prototype.remAssign_7fncnf$;
  RxVal.prototype.map_tx8wzh$ = RxIface.prototype.map_tx8wzh$;
  RxVal.prototype.forEach_yk5nc8$ = RxIface.prototype.forEach_yk5nc8$;
  RxVal.prototype.fold_h2yxzx$ = RxIface.prototype.fold_h2yxzx$;
  RxVal.prototype.foldKillsTrigger_ooixq2$ = RxIface.prototype.foldKillsTrigger_ooixq2$;
  RxVal.prototype.foldKills_ooixq2$ = RxIface.prototype.foldKills_ooixq2$;
  RxVal.prototype.foldKills_h4yiec$ = RxIface.prototype.foldKills_h4yiec$;
  RxVal.prototype.foldLater_h2yxzx$ = RxIface.prototype.foldLater_h2yxzx$;
  RxVal.prototype.onChange_4k9vs1$ = RxIface.prototype.onChange_4k9vs1$;
  RxVal.prototype.onOff_nf0d6g$ = RxIface.prototype.onOff_nf0d6g$;
  RxVal.prototype.off_sysl1e$ = RxIface.prototype.off_sysl1e$;
  admin = coll();
  private_0 = coll();
  singletons = coll();
  fcmtokens = coll();
  Noop = Noop$lambda;
  NoKill = NoKill$lambda;
  currentChild = null;
  affected = ArrayList_init();
  Kotlin.defineModule('appsimake-commonshr', _);
  return _;
});

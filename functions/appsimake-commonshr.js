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
  var lazyOf = Kotlin.kotlin.lazyOf_mh5how$;
  var throwUPAE = Kotlin.throwUPAE;
  var L0 = Kotlin.Long.ZERO;
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
  function AsyncEmitter() {
  }
  AsyncEmitter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AsyncEmitter',
    interfaces: [Killable]
  };
  function emptyAsyncEmitter$ObjectLiteral() {
  }
  emptyAsyncEmitter$ObjectLiteral.prototype.poll = function () {
    return null;
  };
  emptyAsyncEmitter$ObjectLiteral.prototype.receive = function (continuation) {
    return CompletableDeferred().await(continuation);
  };
  emptyAsyncEmitter$ObjectLiteral.prototype.kill = function () {
  };
  emptyAsyncEmitter$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AsyncEmitter]
  };
  function emptyAsyncEmitter() {
    return new emptyAsyncEmitter$ObjectLiteral();
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function DynamicAsyncEmitter(initial) {
    this.cds_0 = ArrayList_init();
    this.current_0 = initial;
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
  DynamicAsyncEmitter.prototype.kill = function () {
    this.current_0.kill();
    this.current_0 = emptyAsyncEmitter();
  };
  DynamicAsyncEmitter.prototype.setCurrent_xhsh8i$ = function (c) {
    this.current_0.kill();
    this.current_0 = c;
    var tmp$;
    tmp$ = this.cds_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.listen_0(element);
    }
  };
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
    plusAssign(ks, this.this$toSetSource.add_qlkmfe$(fn));
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
    return function () {
      return closure$rxfn(closure$v);
    };
  }
  function filtered$lambda$lambda_0(closure$v, closure$add, closure$remove) {
    return function (fv) {
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
        var rxv = addedTo_0(Rx_init_0(filtered$lambda$lambda(closure$rxfn, v)), vks);
        closure$kills.put_xwzc9p$(v, rxv);
        rxv.forEach_qlkmfe$(filtered$lambda$lambda_0(v, closure$add, closure$remove));
      }
       else if (Kotlin.isType(m, SetRemoved)) {
        (tmp$ = closure$kills.remove_11rb$(v)) != null ? (tmp$.kill(), Unit) : null;
        if (closure$current.contains_11rb$(v)) {
          closure$remove(v);
        }
      }
       else
        Kotlin.noWhenBranchMatched();
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
    return function () {
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
    return function () {
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
    var available = addedTo(Rx_init_0(RandomSource$Companion$invoke$lambda_0(total, exclude)), ks);
    return new RandomSource(addedTo(Rx_init_0(RandomSource$Companion$invoke$lambda_1(available)), ks), RandomSource$Companion$invoke$lambda_2(head, available));
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
    plusAssign(ks, random$lambda(channel));
    var total = LinkedHashSet_init();
    var exclude = LinkedHashSet_init();
    var cd = {v: null};
    addAll(total, $receiver.listen_cp6tho$(ks, random$lambda_0(total, exclude, globalExclude, cd)));
    addedTo_1(launch(coroutines.GlobalScope, void 0, void 0, random$lambda_1(cd, total, exclude, globalExclude, channel)), ks);
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
    return function () {
      return closure$rxfn(closure$v);
    };
  }
  function filtered$process$lambda_0(closure$v, closure$add, closure$remove) {
    return function (fv) {
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
        var rxv = addedTo_0(Rx_init_0(filtered$process$lambda(closure$rxfn, v)), vks);
        closure$kills.put_xwzc9p$(v, rxv);
        rxv.forEach_qlkmfe$(filtered$process$lambda_0(v, closure$add, closure$remove));
      }
       else if (Kotlin.isType(m, SetRemoved)) {
        (tmp$ = closure$kills.remove_11rb$(v)) != null ? (tmp$.kill(), Unit) : null;
        if (closure$curr.v.contains_11rb$(v)) {
          closure$remove(v);
        }
      }
       else
        Kotlin.noWhenBranchMatched();
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
  function toTrigger$lambda(this$toTrigger) {
    return function () {
      this$toTrigger.kill();
      return Unit;
    };
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
    return toTrigger$lambda(ks);
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
      this.killable.kill();
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
      var $receiver = new Counted$Holder(this$Counted, this$Counted.create_0(k), k);
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
    ks.plusAssign_wii6vi$(Killable$Companion_getInstance().once_o14v8n$(Counted$get$lambda$lambda(holder)));
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
  function Killable$plus$lambda(this$Killable, closure$k) {
    return function () {
      this$Killable.kill();
      closure$k.kill();
      return Unit;
    };
  }
  Killable.prototype.plus_wii6vi$ = function (k) {
    return Killable$Companion_getInstance().of_o14v8n$(Killable$plus$lambda(this, k));
  };
  Killable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Killable',
    interfaces: []
  };
  var toTrigger = defineInlineFunction('appsimake-commonshr.killable.toTrigger_di35i9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function toTrigger$lambda(this$toTrigger) {
      return function () {
        this$toTrigger.kill();
        return Unit;
      };
    }
    return function ($receiver) {
      return toTrigger$lambda($receiver);
    };
  }));
  function addedTo($receiver, killables) {
    add_0(killables, $receiver);
    return $receiver;
  }
  function addedTo_0($receiver, killables) {
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
  KillableValue.prototype.plus_wii6vi$ = function (k) {
    return this.killable.plus_wii6vi$(k);
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
  var remAssign = defineInlineFunction('appsimake-commonshr.killable.remAssign_t3h96y$', function ($receiver, value) {
    $receiver(value);
  });
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
  function addedTo_1($receiver, ks) {
    var remove = add_1(ks, addedTo$lambda($receiver));
    $receiver.invokeOnCompletion_f05bi3$(addedTo$lambda_0(remove));
    return $receiver;
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
  function plusAssign($receiver, trigger) {
    $receiver(trigger);
  }
  function add_0($receiver, killable) {
    return $receiver(getCallableRef('kill', function ($receiver) {
      return $receiver.kill(), Unit;
    }.bind(null, killable)));
  }
  function plusAssign_0($receiver, killable) {
    add_0($receiver, killable);
  }
  function add_1($receiver, killable) {
    return $receiver(killable);
  }
  function killables($receiver) {
    var $receiver_0 = new Killables();
    $receiver_0.plusAssign_o14v8n$(add_0($receiver, $receiver_0));
    return $receiver_0;
  }
  function seq($receiver) {
    var $receiver_0 = KillableSeq_init();
    $receiver_0.onKill_8be2vx$.plusAssign_o14v8n$(add_0($receiver, $receiver_0));
    return $receiver_0;
  }
  function addedTo_2($receiver, ks) {
    plusAssign(ks, $receiver);
    return $receiver;
  }
  function Killables() {
    this.killSet = Killables$killSet$lambda(this);
    this.list_0 = emptyList();
    this.killed_0 = false;
  }
  Killables.prototype.toKillSet = defineInlineFunction('appsimake-commonshr.killable.Killables.toKillSet', function () {
    return this.killSet;
  });
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
    return killables(this.killSet);
  };
  Killables.prototype.seq = function () {
    var $receiver = KillableSeq_init();
    $receiver.onKill_8be2vx$.plusAssign_wii6vi$(this.add_wii6vi$($receiver));
    return $receiver;
  };
  function toTrigger$lambda_0(this$toTrigger) {
    return function () {
      this$toTrigger.kill();
      return Unit;
    };
  }
  function Killables$killSet$lambda(this$Killables) {
    return function (k) {
      return toTrigger$lambda_0(this$Killables.add_o14v8n$(k));
    };
  }
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
    this.assign = KillableSeq$assign$lambda(this);
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
  KillableSeq.prototype.remAssign_o14v8n$ = function (fn) {
    this.set_o14v8n$(fn);
  };
  KillableSeq.prototype.remAssign_wii6vi$ = function (fn) {
    this.set_wii6vi$(fn);
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
  KillableSeq.prototype.killSet = function () {
    var $receiver = new Killables();
    this.set_wii6vi$($receiver);
    return $receiver.killSet;
  };
  KillableSeq.prototype.kill = function () {
    return this.onKill_8be2vx$.kill();
  };
  KillableSeq.prototype.plus_wii6vi$ = function (k) {
    return this.onKill_8be2vx$.plus_wii6vi$(k);
  };
  function KillableSeq_init$lambda(this$KillableSeq) {
    return function () {
      this$KillableSeq.killed_0 = true;
      invoke(this$KillableSeq.current_0);
      this$KillableSeq.current_0 = Killable$Companion_getInstance().empty;
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
  function RxIface$foldKillsTrigger$lambda() {
    return Unit;
  }
  function RxIface$foldKillsTrigger$lambda_0(closure$z, closure$fn) {
    return function (it) {
      closure$z.v();
      closure$z.v = closure$fn(it);
      return Unit;
    };
  }
  function RxIface$foldKillsTrigger$lambda_1(closure$fe, closure$z) {
    return function () {
      invoke(closure$fe);
      closure$z.v();
      return Unit;
    };
  }
  RxIface.prototype.foldKillsTrigger_zb41xq$ = function (fn) {
    var z = {v: RxIface$foldKillsTrigger$lambda};
    var fe = this.forEach_qlkmfe$(RxIface$foldKillsTrigger$lambda_0(z, fn));
    return RxIface$foldKillsTrigger$lambda_1(fe, z);
  };
  function RxIface$foldKills$lambda(closure$z, closure$fn) {
    return function (it) {
      closure$z.v.kill();
      closure$z.v = closure$fn(it);
      return Unit;
    };
  }
  function RxIface$foldKills$lambda_0(closure$fe, closure$z) {
    return function () {
      closure$fe.kill();
      closure$z.v.kill();
      return Unit;
    };
  }
  RxIface.prototype.foldKills_xg9c3r$ = function (fn) {
    var z = {v: Killable$Companion_getInstance().empty};
    var fe = this.forEach_qlkmfe$(RxIface$foldKills$lambda(z, fn));
    return Killable$Companion_getInstance().once_o14v8n$(RxIface$foldKills$lambda_0(fe, z));
  };
  function RxIface$foldKills$lambda_1(closure$fn, closure$z) {
    return function (it) {
      closure$z.v = closure$fn(closure$z.v, it);
      return Unit;
    };
  }
  function RxIface$foldKills$lambda_2(closure$fe, closure$z) {
    return function () {
      closure$fe.kill();
      closure$z.v.kill();
      return Unit;
    };
  }
  RxIface.prototype.foldKills_3mus6t$ = function (z0, fn) {
    var z = {v: z0};
    var fe = this.forEach_qlkmfe$(RxIface$foldKills$lambda_1(fn, z));
    return Killable$Companion_getInstance().once_o14v8n$(RxIface$foldKills$lambda_2(fe, z));
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
  function feedTo$lambda$lambda(closure$new, closure$old) {
    return function (it) {
      return it + closure$new - closure$old | 0;
    };
  }
  function feedTo$lambda_1(closure$rxv) {
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
  function feedTo$lambda_2(closure$rxv, this$feedTo) {
    return function () {
      closure$rxv.transform_ru8m0w$(feedTo$lambda$lambda_0(this$feedTo));
      return Unit;
    };
  }
  function feedTo_1($receiver, rxv) {
    return $receiver.fold_b8xf17$(0, feedTo$lambda_1(rxv)).plus_wii6vi$(Killable$Companion_getInstance().once_o14v8n$(feedTo$lambda_2(rxv, $receiver)));
  }
  function feedTo$lambda$lambda_1(closure$new, closure$old) {
    return function (it) {
      return it.add(Kotlin.Long.fromInt(closure$new)).subtract(Kotlin.Long.fromInt(closure$old));
    };
  }
  function feedTo$lambda_3(closure$rxv) {
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
  function feedTo$lambda_4(closure$rxv, this$feedTo) {
    return function () {
      closure$rxv.transform_ru8m0w$(feedTo$lambda$lambda_2(this$feedTo));
      return Unit;
    };
  }
  function feedTo_2($receiver, rxv) {
    return $receiver.fold_b8xf17$(0, feedTo$lambda_3(rxv)).plus_wii6vi$(Killable$Companion_getInstance().once_o14v8n$(feedTo$lambda_4(rxv, $receiver)));
  }
  function feedTo$lambda$lambda_3(closure$new, closure$old) {
    return function (it) {
      return it.add(closure$new).subtract(closure$old);
    };
  }
  function feedTo$lambda_5(closure$rxv) {
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
  function feedTo$lambda_6(closure$rxv, this$feedTo) {
    return function () {
      closure$rxv.transform_ru8m0w$(feedTo$lambda$lambda_4(this$feedTo));
      return Unit;
    };
  }
  function feedTo_3($receiver, rxv) {
    return $receiver.fold_b8xf17$(L0, feedTo$lambda_5(rxv)).plus_wii6vi$(Killable$Companion_getInstance().once_o14v8n$(feedTo$lambda_6(rxv, $receiver)));
  }
  function feedTo$lambda$lambda_5(closure$new, closure$old) {
    return function (it) {
      return it + closure$new - closure$old;
    };
  }
  function feedTo$lambda_7(closure$rxv) {
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
  function feedTo$lambda_8(closure$rxv, this$feedTo) {
    return function () {
      closure$rxv.transform_ru8m0w$(feedTo$lambda$lambda_6(this$feedTo));
      return Unit;
    };
  }
  function feedTo_4($receiver, rxv) {
    return $receiver.fold_b8xf17$(0.0, feedTo$lambda_7(rxv)).plus_wii6vi$(Killable$Companion_getInstance().once_o14v8n$(feedTo$lambda_8(rxv, $receiver)));
  }
  function orDefault$lambda(this$orDefault, closure$v) {
    return function () {
      return this$orDefault.invoke().getOrDefault_11rb$(closure$v);
    };
  }
  function orDefault($receiver, v) {
    return Rx_init_0(orDefault$lambda($receiver, v));
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
    return Killable$Companion_getInstance().once_o14v8n$(incremented$lambda_0($receiver));
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
  function add_2($receiver, v) {
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
  function toRx_0($receiver) {
    return Rx_init_0($receiver);
  }
  function rxClasses($receiver, style) {
    return rxClasses_0($receiver, toRx_0(style));
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
  function toChannel$lambda(closure$ch) {
    return function () {
      closure$ch.close_dbl4no$();
      return Unit;
    };
  }
  function toChannel$lambda_0(closure$ch) {
    return function (t) {
      closure$ch.offer_11rb$(t);
      return Unit;
    };
  }
  function toChannel($receiver, ks) {
    var ch = Channel(2147483647);
    plusAssign(ks, toChannel$lambda(ch));
    addedTo($receiver.forEach_qlkmfe$(toChannel$lambda_0(ch)), ks);
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
    plusAssign(ks, toChannelLater$lambda(ch));
    addedTo($receiver.forEachLater_qlkmfe$(toChannelLater$lambda_0(ch)), ks);
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
            addedTo_1(launch(coroutines.GlobalScope, void 0, void 0, mapAsync$lambda(ch, this.local$calc, rxv)), this.local$ks);
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
    return addedTo(Rx_init_0(fn), $receiver);
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
  package$commonshr.Counted = Counted;
  package$commonshr.reportd_za3rmp$ = reportd;
  package$commonshr.report_s8jyv4$ = report;
  Object.defineProperty(Killable, 'Companion', {
    get: Killable$Companion_getInstance
  });
  var package$killable = _.killable || (_.killable = {});
  package$killable.Killable = Killable;
  package$killable.toTrigger_di35i9$ = toTrigger;
  package$killable.addedTo_8nlz5n$ = addedTo;
  package$killable.addedTo_60he60$ = addedTo_0;
  package$killable.OnceKillable = OnceKillable;
  package$killable.invoke_di35i9$ = invoke;
  package$killable.add_8dof8l$ = add;
  package$killable.KillableValue_init_vsvlef$ = KillableValue_init;
  package$killable.KillableValue = KillableValue;
  package$killable.remAssign_t3h96y$ = remAssign;
  package$killable.once_yo2cq0$ = once;
  package$killable.addedTo_tjw9ba$ = addedTo_1;
  package$killable.with_qs7ci7$ = with_0;
  package$killable.plusAssign_aeyq4w$ = plusAssign;
  package$killable.add_ep5os3$ = add_0;
  package$killable.plusAssign_ep5os3$ = plusAssign_0;
  package$killable.add_1wvaoy$ = add_1;
  package$killable.killables_yzxo1x$ = killables;
  package$killable.seq_yzxo1x$ = seq;
  package$killable.addedTo_wvpfik$ = addedTo_2;
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
  package$rx.feedTo_s4tckn$ = feedTo_1;
  package$rx.feedTo_jq98q0$ = feedTo_2;
  package$rx.feedTo_ghlndt$ = feedTo_3;
  package$rx.feedTo_tqwc97$ = feedTo_4;
  package$rx.orDefault_a7fhzw$ = orDefault;
  package$rx.incremented_eoy9qo$ = incremented;
  package$rx.RxVal = RxVal;
  package$rx.killOld_o6kpy0$ = killOld;
  package$rx.add_gcz0w7$ = add_2;
  package$rx.remove_gcz0w7$ = remove;
  package$rx.diffs_614g0z$ = diffs;
  package$rx.RxIfaceKillable = RxIfaceKillable;
  package$rx.Rx_init_ky6tb9$ = Rx_init;
  package$rx.Rx_init_klfg04$ = Rx_init_0;
  package$rx.Rx = Rx;
  package$rx.Var = Var;
  package$rx.increase_eoy9qo$ = increase;
  package$rx.decrease_eoy9qo$ = decrease;
  package$rx.get_kw0pia$ = get_0;
  package$rx.set_atqor6$ = set;
  package$rx.rxClass_z8puye$ = rxClass;
  package$rx.rxClass_jgfmsn$ = rxClass_0;
  package$rx.rxHover_st2z1u$ = rxHover;
  package$rx.rxClass_3s5dpe$ = rxClass_1;
  package$rx.rxClass_4ic22z$ = rxClass_2;
  package$rx.rxClassOpt_ywk6sc$ = rxClassOpt;
  package$rx.toRx_ba455$ = toRx_0;
  package$rx.rxClasses_dk0vnv$ = rxClasses;
  package$rx.rxClasses_cv5l32$ = rxClasses_0;
  package$rx.toChannel_tgu8ha$ = toChannel;
  package$rx.toChannelLater_tgu8ha$ = toChannelLater;
  package$rx.mapAsync_wvb2ro$ = mapAsync;
  package$rx.rx_qoyk5l$ = rx;
  AsyncEmitter.prototype.plus_wii6vi$ = Killable.prototype.plus_wii6vi$;
  emptyAsyncEmitter$ObjectLiteral.prototype.plus_wii6vi$ = AsyncEmitter.prototype.plus_wii6vi$;
  DynamicAsyncEmitter.prototype.plus_wii6vi$ = AsyncEmitter.prototype.plus_wii6vi$;
  Emitter.prototype.plusAssign_qlkmfe$ = EmitterIface.prototype.plusAssign_qlkmfe$;
  MappedEmitter.prototype.plusAssign_qlkmfe$ = EmitterIface.prototype.plusAssign_qlkmfe$;
  toEmitter$ObjectLiteral.prototype.plusAssign_qlkmfe$ = EmitterIface.prototype.plusAssign_qlkmfe$;
  Killable$Companion$of$ObjectLiteral.prototype.plus_wii6vi$ = Killable.prototype.plus_wii6vi$;
  Killable$Companion$empty$ObjectLiteral.prototype.plus_wii6vi$ = Killable.prototype.plus_wii6vi$;
  OnceKillable.prototype.plus_wii6vi$ = Killable.prototype.plus_wii6vi$;
  Killables.prototype.plus_wii6vi$ = Killable.prototype.plus_wii6vi$;
  Obs.prototype.plus_wii6vi$ = Killable.prototype.plus_wii6vi$;
  RxVal.prototype.forEach_qlkmfe$ = RxIface.prototype.forEach_qlkmfe$;
  RxVal.prototype.fold_b8xf17$ = RxIface.prototype.fold_b8xf17$;
  RxVal.prototype.foldKillsTrigger_zb41xq$ = RxIface.prototype.foldKillsTrigger_zb41xq$;
  RxVal.prototype.foldKills_xg9c3r$ = RxIface.prototype.foldKills_xg9c3r$;
  RxVal.prototype.foldKills_3mus6t$ = RxIface.prototype.foldKills_3mus6t$;
  RxVal.prototype.folded_b8xf17$ = RxIface.prototype.folded_b8xf17$;
  RxVal.prototype.foldLater_b8xf17$ = RxIface.prototype.foldLater_b8xf17$;
  RxVal.prototype.onChange_nrmh93$ = RxIface.prototype.onChange_nrmh93$;
  RxVal.prototype.onOff_uc1utc$ = RxIface.prototype.onOff_uc1utc$;
  RxVal.prototype.off_qlkmfe$ = RxIface.prototype.off_qlkmfe$;
  RxIfaceKillable.prototype.forEach_qlkmfe$ = RxIface.prototype.forEach_qlkmfe$;
  RxIfaceKillable.prototype.fold_b8xf17$ = RxIface.prototype.fold_b8xf17$;
  RxIfaceKillable.prototype.foldKillsTrigger_zb41xq$ = RxIface.prototype.foldKillsTrigger_zb41xq$;
  RxIfaceKillable.prototype.foldKills_xg9c3r$ = RxIface.prototype.foldKills_xg9c3r$;
  RxIfaceKillable.prototype.foldKills_3mus6t$ = RxIface.prototype.foldKills_3mus6t$;
  RxIfaceKillable.prototype.folded_b8xf17$ = RxIface.prototype.folded_b8xf17$;
  RxIfaceKillable.prototype.foldLater_b8xf17$ = RxIface.prototype.foldLater_b8xf17$;
  RxIfaceKillable.prototype.onChange_nrmh93$ = RxIface.prototype.onChange_nrmh93$;
  RxIfaceKillable.prototype.onOff_uc1utc$ = RxIface.prototype.onOff_uc1utc$;
  RxIfaceKillable.prototype.off_qlkmfe$ = RxIface.prototype.off_qlkmfe$;
  RxIfaceKillable.prototype.plus_wii6vi$ = Killable.prototype.plus_wii6vi$;
  RxIface$folded$ObjectLiteral.prototype.plus_wii6vi$ = RxIfaceKillable.prototype.plus_wii6vi$;
  Rx.prototype.plus_wii6vi$ = RxIfaceKillable.prototype.plus_wii6vi$;
  admin = coll();
  private_0 = coll();
  singletons = coll();
  fcmtokens = coll();
  currentChild = null;
  affected = ArrayList_init();
  Kotlin.defineModule('appsimake-commonshr', _);
  return _;
});

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonshr'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonshr'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonshr'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-commonshr'.");
}
this['appsimake-commonshr'] = function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var minus = Kotlin.kotlin.collections.minus_2ws7j4$;
  var Unit = Kotlin.kotlin.Unit;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var getCallableRef = Kotlin.getCallableRef;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals = Kotlin.equals;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var minus_0 = Kotlin.kotlin.collections.minus_khz7k3$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Exception = Kotlin.kotlin.Exception;
  var throwCCE = Kotlin.throwCCE;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var plus_0 = Kotlin.kotlin.collections.plus_xfiyik$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var setOf_0 = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var lazyOf = Kotlin.kotlin.lazyOf_mh5how$;
  var minus_1 = Kotlin.kotlin.collections.minus_xfiyik$;
  var Pair = Kotlin.kotlin.Pair;
  var AbstractMap = Kotlin.kotlin.collections.AbstractMap;
  var ClosedSendChannelException = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.ClosedSendChannelException;
  var withContext = $module$kotlinx_coroutines_core.kotlinx.coroutines.withContext_i5cbzn$;
  var toList_0 = Kotlin.kotlin.text.toList_gw00vp$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var toCharArray = Kotlin.kotlin.collections.toCharArray_rr68x$;
  var String_0 = Kotlin.kotlin.text.String_4hbowm$;
  var chunked = Kotlin.kotlin.collections.chunked_oqjilr$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var numberToInt = Kotlin.numberToInt;
  var map = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.map_610k8f$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var produce = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.produce_f6xzli$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var zip = Kotlin.kotlin.sequences.zip_r7q3s9$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var toSet_0 = Kotlin.kotlin.collections.toSet_us0mfu$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var throwUPAE = Kotlin.throwUPAE;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var List = Kotlin.kotlin.collections.List;
  var AbstractMutableList = Kotlin.kotlin.collections.AbstractMutableList;
  var toList_1 = Kotlin.kotlin.collections.toList_7wnvza$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var Set = Kotlin.kotlin.collections.Set;
  var AbstractMutableSet = Kotlin.kotlin.collections.AbstractMutableSet;
  var Iterable = Kotlin.kotlin.collections.Iterable;
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
  CollectionSource.prototype = Object.create(CollectionWrap.prototype);
  CollectionSource.prototype.constructor = CollectionSource;
  apps.prototype = Object.create(CollectionWrap.prototype);
  apps.prototype.constructor = apps;
  SetAdded.prototype = Object.create(SetMove.prototype);
  SetAdded.prototype.constructor = SetAdded;
  SetRemoved.prototype = Object.create(SetMove.prototype);
  SetRemoved.prototype.constructor = SetRemoved;
  toMap$ObjectLiteral.prototype = Object.create(AbstractMap.prototype);
  toMap$ObjectLiteral.prototype.constructor = toMap$ObjectLiteral;
  ListEvent$Add.prototype = Object.create(ListEvent.prototype);
  ListEvent$Add.prototype.constructor = ListEvent$Add;
  ListEvent$Move.prototype = Object.create(ListEvent.prototype);
  ListEvent$Move.prototype.constructor = ListEvent$Move;
  ListEvent$Remove.prototype = Object.create(ListEvent.prototype);
  ListEvent$Remove.prototype.constructor = ListEvent$Remove;
  filter$lambda$ObjectLiteral.prototype = Object.create(filter$lambda$Previous.prototype);
  filter$lambda$ObjectLiteral.prototype.constructor = filter$lambda$ObjectLiteral;
  filter$lambda$Item.prototype = Object.create(filter$lambda$Previous.prototype);
  filter$lambda$Item.prototype.constructor = filter$lambda$Item;
  filter$lambda$Holder.prototype = Object.create(filter$lambda$Item.prototype);
  filter$lambda$Holder.prototype.constructor = filter$lambda$Holder;
  RWProp.prototype = Object.create(ROProp.prototype);
  RWProp.prototype.constructor = RWProp;
  EnumProp.prototype = Object.create(RWProp.prototype);
  EnumProp.prototype.constructor = EnumProp;
  ROArrayProp.prototype = Object.create(ROProp.prototype);
  ROArrayProp.prototype.constructor = ROArrayProp;
  RWArrayProp.prototype = Object.create(RWProp.prototype);
  RWArrayProp.prototype.constructor = RWArrayProp;
  RxRoot.prototype = Object.create(RxBase.prototype);
  RxRoot.prototype.constructor = RxRoot;
  RxRoot$Companion.prototype = Object.create(RxRoot.prototype);
  RxRoot$Companion.prototype.constructor = RxRoot$Companion;
  SnapshotEvent$Added.prototype = Object.create(SnapshotEvent.prototype);
  SnapshotEvent$Added.prototype.constructor = SnapshotEvent$Added;
  SnapshotEvent$Modified.prototype = Object.create(SnapshotEvent.prototype);
  SnapshotEvent$Modified.prototype.constructor = SnapshotEvent$Modified;
  SnapshotEvent$Moved.prototype = Object.create(SnapshotEvent.prototype);
  SnapshotEvent$Moved.prototype.constructor = SnapshotEvent$Moved;
  SnapshotEvent$Removed.prototype = Object.create(SnapshotEvent.prototype);
  SnapshotEvent$Removed.prototype.constructor = SnapshotEvent$Removed;
  TS$Value.prototype = Object.create(TS.prototype);
  TS$Value.prototype.constructor = TS$Value;
  TS$Server.prototype = Object.create(TS.prototype);
  TS$Server.prototype.constructor = TS$Server;
  FsIdState$NoId.prototype = Object.create(FsIdState.prototype);
  FsIdState$NoId.prototype.constructor = FsIdState$NoId;
  FsIdState$HasId.prototype = Object.create(FsIdState.prototype);
  FsIdState$HasId.prototype.constructor = FsIdState$HasId;
  RxCalc.prototype = Object.create(RxChild.prototype);
  RxCalc.prototype.constructor = RxCalc;
  RxVal.prototype = Object.create(RxParent.prototype);
  RxVal.prototype.constructor = RxVal;
  Rx.prototype = Object.create(RxVal.prototype);
  Rx.prototype.constructor = Rx;
  Var.prototype = Object.create(RxVal.prototype);
  Var.prototype.constructor = Var;
  RxMutableList.prototype = Object.create(AbstractMutableList.prototype);
  RxMutableList.prototype.constructor = RxMutableList;
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
  function Listeners$get_Listeners$first$lambda(closure$cd, closure$ks) {
    return function () {
      closure$cd.complete_11rb$(Unit);
      closure$ks.kill();
      return Unit;
    };
  }
  Object.defineProperty(Listeners.prototype, 'first', {
    get: function () {
      var cd = CompletableDeferred();
      var ks = new Killables();
      ks.plusAssign_o14v8n$(this.add_o14v8n$(Listeners$get_Listeners$first$lambda(cd, ks)));
      return cd;
    }
  });
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
  function MappedEmitter(emitter, map) {
    this.emitter_0 = emitter;
    this.map_0 = map;
  }
  function MappedEmitter$add$lambda(closure$listener, this$MappedEmitter) {
    return function (t) {
      closure$listener(this$MappedEmitter.map_0(t));
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
  function map_0($receiver, fn) {
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
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function filtered$lambda(closure$current) {
    return function () {
      var $receiver = closure$current;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
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
        rxv.forEach_aaomyj$(vks.killSet, filtered$lambda$lambda_0(v, closure$add, closure$remove));
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
  function feedTo$lambda_0(closure$list) {
    return function (m) {
      m.applyTo_wgjnv3$(closure$list);
      return Unit;
    };
  }
  function feedTo_0($receiver, ks, list) {
    plusAssign_0(ks, $receiver.add_qlkmfe$(feedTo$lambda_0(list)));
  }
  function toRxSet($receiver, ks) {
    var set = new RxMutableSet();
    feedTo_0($receiver, ks, set);
    return set;
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
  function Api() {
  }
  Api.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Api',
    interfaces: []
  };
  var get_api = defineInlineFunction('appsimake-commonshr.commonshr.get_api_41sgpf$', function ($receiver) {
    return $receiver;
  });
  function KillsApi() {
  }
  KillsApi.prototype.rx_y6x17j$ = function (fn) {
    return Rx_init_0(this.kills, fn);
  };
  KillsApi.prototype.rx_46ic4w$ = function (killFirst, fn) {
    return Rx_init_1(this.kills, killFirst, fn);
  };
  KillsApi.prototype.forEach_xwzbbo$ = function ($receiver, fn) {
    $receiver.forEach_aaomyj$(this.kills, fn);
  };
  KillsApi.prototype.forEachLater_xwzbbo$ = function ($receiver, fn) {
    $receiver.forEachLater_aaomyj$(this.kills, fn);
  };
  KillsApi.prototype.forEach_35q7bt$ = function ($receiver, killOrder, fn) {
    $receiver.forEach_vlp88o$(this.kills, killOrder, fn);
  };
  KillsApi.prototype.map_jtxi0h$ = function ($receiver, fn) {
    return $receiver.map_492dlc$(this.kills, fn);
  };
  KillsApi.prototype.onChange_rlu5c6$ = function ($receiver, fn) {
    $receiver.onChange_naxq84$(this.kills, fn);
  };
  KillsApi.prototype.rxClass_c5yvvx$ = function ($receiver, fn) {
    rxClass($receiver, this.kills, fn);
  };
  KillsApi.prototype.rxClass_6sflyw$ = function ($receiver, stl, fn) {
    rxClass_2($receiver, this, stl, fn);
  };
  KillsApi.prototype.filtered_tnde95$ = function ($receiver, fn) {
    return $receiver.filtered_760dx1$(this.kills, fn);
  };
  KillsApi.prototype.incremented_eoy9qo$ = function ($receiver) {
    incremented($receiver, this);
  };
  KillsApi.prototype.feedTo_9o5f67$ = function ($receiver, target) {
    feedTo_1($receiver, this, target);
  };
  KillsApi.prototype.rx_wgabca$ = function ($receiver, fn) {
    rx_1($receiver, this, fn);
  };
  KillsApi.prototype.remAssign_wgabca$ = function ($receiver, fn) {
    this.rx_wgabca$($receiver, fn);
  };
  KillsApi.prototype.rx_djv61p$ = function ($receiver, fn) {
    rx_2($receiver, this, fn);
  };
  KillsApi.prototype.remAssign_djv61p$ = function ($receiver, fn) {
    this.rx_djv61p$($receiver, fn);
  };
  KillsApi.prototype.get_oldKilled_vsdo34$ = function ($receiver) {
    return oldKilled($receiver, this);
  };
  KillsApi.prototype.get_oldKilledOpt_vsdo34$ = function ($receiver) {
    return oldKilledOpt($receiver, this);
  };
  KillsApi.prototype.linked_n1nom7$ = function ($receiver, read, write) {
    return linked($receiver, this, read, write);
  };
  function KillsApi$remAssign$lambda(closure$fn) {
    return function ($receiver) {
      return closure$fn();
    };
  }
  function KillsApi$remAssign$lambda_0(this$remAssign) {
    return function ($receiver, it) {
      this$remAssign.innerText = it;
      return Unit;
    };
  }
  KillsApi.prototype.remAssign_7fncnf$ = function ($receiver, fn) {
    this.forEach_xwzbbo$(this.rx_y6x17j$(KillsApi$remAssign$lambda(fn)), KillsApi$remAssign$lambda_0($receiver));
  };
  KillsApi.prototype.containsRx_1w65cx$ = function ($receiver, value) {
    return $receiver.containsRx_va0u9b$(this.kills, value);
  };
  KillsApi.prototype.process_7xi3v7$ = function ($receiver, fn) {
    process_1($receiver, this.kills, fn);
  };
  KillsApi.prototype.toRxSet_jr4bl4$ = function ($receiver) {
    return toRxSet($receiver, this.kills);
  };
  KillsApi.prototype.toChannelLater_z5dyp2$ = function ($receiver) {
    return toChannelLater($receiver, this);
  };
  KillsApi.prototype.mapLive_1mq1ue$ = function ($receiver, fn) {
    return mapLive($receiver, this, fn);
  };
  KillsApi.prototype.listen_ubid8w$ = function ($receiver, callback) {
    listen($receiver, this, callback);
  };
  KillsApi.prototype.plusAssign_ubid8w$ = function ($receiver, fn) {
    this.listen_ubid8w$($receiver, fn);
  };
  KillsApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KillsApi',
    interfaces: [HasKills, Api]
  };
  function CsApi() {
  }
  CsApi.prototype.toRx_on0lyu$ = function ($receiver, initial) {
    return toRx_0($receiver, this, initial);
  };
  CsApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsApi',
    interfaces: [CoroutineScope, Api]
  };
  function CsKillsApi() {
  }
  CsKillsApi.prototype.events_9k4h2$ = function ($receiver) {
    return events($receiver, this);
  };
  CsKillsApi.prototype.get_ids_qko62t$ = function ($receiver) {
    return ids($receiver, this);
  };
  CsKillsApi.prototype.filter_hu0si9$ = function ($receiver, fn) {
    return filter($receiver, this, fn);
  };
  CsKillsApi.prototype.process_y3juat$ = function ($receiver, fn) {
    process_0($receiver, this, fn);
  };
  CsKillsApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsKillsApi',
    interfaces: [KillsApi, CsApi, HasCsKills]
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
  function DocWrap() {
  }
  DocWrap.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DocWrap',
    interfaces: [HasPath]
  };
  function DocWrapImpl(id, parent) {
    this.id_hli9nb$_0 = id;
    this.parent_vwa060$_0 = parent;
    var tmp$, tmp$_0;
    this.path_5vodql$_0 = ((tmp$_0 = (tmp$ = this.parent) != null ? tmp$.path : null) != null ? tmp$_0 : '') + '/' + this.id;
  }
  Object.defineProperty(DocWrapImpl.prototype, 'id', {
    get: function () {
      return this.id_hli9nb$_0;
    }
  });
  Object.defineProperty(DocWrapImpl.prototype, 'parent', {
    get: function () {
      return this.parent_vwa060$_0;
    }
  });
  Object.defineProperty(DocWrapImpl.prototype, 'path', {
    get: function () {
      return this.path_5vodql$_0;
    }
  });
  DocWrapImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DocWrapImpl',
    interfaces: [DocWrap]
  };
  function DocSource(id, parent) {
    this.id_so7c0o$_0 = id;
    this.parent_62eqt5$_0 = parent;
    this.path_5zrdcu$_0 = this.parent.path + '/' + this.id;
  }
  Object.defineProperty(DocSource.prototype, 'id', {
    get: function () {
      return this.id_so7c0o$_0;
    }
  });
  Object.defineProperty(DocSource.prototype, 'parent', {
    get: function () {
      return this.parent_62eqt5$_0;
    }
  });
  Object.defineProperty(DocSource.prototype, 'path', {
    get: function () {
      return this.path_5zrdcu$_0;
    }
  });
  DocSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DocSource',
    interfaces: [DocWrap]
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
  function coll$ObjectLiteral_0(closure$fn) {
    this.closure$fn = closure$fn;
  }
  function coll$ObjectLiteral$getValue$lambda(closure$fn) {
    return function (d, ops) {
      var $receiver = closure$fn();
      readDynamic($receiver, d, ops);
      return $receiver;
    };
  }
  coll$ObjectLiteral_0.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return new CollectionSource(property.callableName, thisRef, coll$ObjectLiteral$getValue$lambda(this.closure$fn));
  };
  coll$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadOnlyProperty]
  };
  function coll_0(fn) {
    return new coll$ObjectLiteral_0(fn);
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
    this.path_6soqnf$_0 = ((tmp$ = parent != null ? parent.path : null) != null ? tmp$ : '') + '/' + this.id;
  }
  Object.defineProperty(CollectionWrap.prototype, 'path', {
    get: function () {
      return this.path_6soqnf$_0;
    }
  });
  CollectionWrap.prototype.doc_61zpoe$ = function (id) {
    return new DocWrapImpl(id, this);
  };
  CollectionWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CollectionWrap',
    interfaces: [HasPath]
  };
  function CollectionSource(id, parent, factory) {
    if (parent === void 0)
      parent = null;
    CollectionWrap.call(this, id, parent);
    this.factory = factory;
  }
  CollectionSource.prototype.doc_61zpoe$ = function (id) {
    return new DocSource(id, this);
  };
  CollectionSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CollectionSource',
    interfaces: [CollectionWrap]
  };
  function doc$ObjectLiteral() {
  }
  doc$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return new DocWrapImpl(property.callableName, thisRef);
  };
  doc$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadOnlyProperty]
  };
  function doc() {
    return new doc$ObjectLiteral();
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
  function hasOwnProperty(d, prop) {
    return d.hasOwnProperty(prop);
  }
  function opt(d, name) {
    return hasOwnProperty(d, name) ? new Some(d[name]) : None_getInstance();
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
  SetDiff$Companion.prototype.of_lk58qy$ = function (old, new_0) {
    return new SetDiff(minus_0(old, new_0), minus_0(new_0, old));
  };
  SetDiff$Companion.prototype.added_i5x0yv$ = function (e) {
    return new SetDiff(void 0, setOf_0(e.slice()));
  };
  SetDiff$Companion.prototype.removed_i5x0yv$ = function (e) {
    return new SetDiff(setOf_0(e.slice()));
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
  var invoke = defineInlineFunction('appsimake-commonshr.commonshr.invoke_fiuc92$', function ($receiver, fn) {
    fn($receiver);
    return $receiver;
  });
  function InvokeWith() {
  }
  InvokeWith.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InvokeWith',
    interfaces: []
  };
  var invoke_0 = defineInlineFunction('appsimake-commonshr.commonshr.invoke_3lzs1f$', function ($receiver, fn) {
    return fn($receiver);
  });
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
  function process$lambda(closure$map) {
    return function () {
      var tmp$;
      tmp$ = closure$map.values.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element();
      }
      closure$map.clear();
      return Unit;
    };
  }
  function process$lambda$lambda$lambda(closure$map, closure$v) {
    return function () {
      var $receiver = closure$map;
      var key = closure$v;
      $receiver.remove_11rb$(key);
      return Unit;
    };
  }
  function process$lambda_0(closure$ks, closure$map, closure$fn) {
    return function (m) {
      var v = m.value;
      if (Kotlin.isType(m, SetAdded)) {
        var $receiver = killables(closure$ks);
        $receiver.plusAssign_o14v8n$(process$lambda$lambda$lambda(closure$map, v));
        var vks = $receiver;
        closure$fn(vks, v);
        var $receiver_0 = closure$map;
        var value = vks.kill;
        $receiver_0.put_xwzc9p$(v, value);
      }
       else if (Kotlin.isType(m, SetRemoved))
        getValue(closure$map, v)();
      return Unit;
    };
  }
  function process($receiver, ks, fn) {
    var map = LinkedHashMap_init();
    plusAssign_0(ks, process$lambda(map));
    plusAssign_0(ks, $receiver.add_qlkmfe$(process$lambda_0(ks, map, fn)));
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
  function toMap$lambda$lambda$lambda(closure$map, closure$v) {
    return function () {
      var $receiver = closure$map;
      var key = closure$v;
      $receiver.remove_11rb$(key);
      return Unit;
    };
  }
  function toMap$lambda_0(closure$ks, closure$map, closure$fn) {
    return function (m) {
      var v = m.value;
      if (Kotlin.isType(m, SetAdded)) {
        var $receiver = killables(closure$ks);
        $receiver.plusAssign_o14v8n$(toMap$lambda$lambda$lambda(closure$map, v));
        var vks = $receiver;
        var $receiver_0 = closure$map;
        var value = new Pair(closure$fn(vks, v), vks.kill);
        $receiver_0.put_xwzc9p$(v, value);
      }
       else if (Kotlin.isType(m, SetRemoved))
        getValue(closure$map, v).second();
      return Unit;
    };
  }
  function toMap$ObjectLiteral(closure$map) {
    this.closure$map = closure$map;
    AbstractMap.call(this);
  }
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  Object.defineProperty(toMap$ObjectLiteral.prototype, 'entries', {
    get: function () {
      var $receiver = this.closure$map;
      var destination = LinkedHashMap_init_0(mapCapacity($receiver.size));
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        destination.put_xwzc9p$(element.key, element.value.first);
      }
      return destination.entries;
    }
  });
  toMap$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AbstractMap]
  };
  function toMap_0($receiver, ks, fn) {
    var map = LinkedHashMap_init();
    plusAssign_0(ks, toMap$lambda(map));
    $receiver.add_qlkmfe$(toMap$lambda_0(ks, map, fn));
    return new toMap$ObjectLiteral(map);
  }
  function plusAssign($receiver, msg) {
    $receiver.offer_11rb$(msg);
  }
  function Coroutine$timesAssign($receiver_0, msg_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$msg = msg_0;
  }
  Coroutine$timesAssign.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$timesAssign.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$timesAssign.prototype.constructor = Coroutine$timesAssign;
  Coroutine$timesAssign.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.send_11rb$(this.local$msg, this);
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
  function timesAssign($receiver_0, msg_0, continuation_0, suspended) {
    var instance = new Coroutine$timesAssign($receiver_0, msg_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function HasExec() {
  }
  HasExec.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasExec',
    interfaces: []
  };
  function RxExec(pending, exec) {
    this.pending = pending;
    this.exec = exec;
  }
  RxExec.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxExec',
    interfaces: []
  };
  function get_withCounter$lambda$lambda(it) {
    return it + 1 | 0;
  }
  function get_withCounter$lambda$lambda$lambda(it) {
    return it - 1 | 0;
  }
  function Coroutine$get_withCounter$lambda$lambda(closure$action_0, closure$pending_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$closure$action = closure$action_0;
    this.local$closure$pending = closure$pending_0;
  }
  Coroutine$get_withCounter$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_withCounter$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_withCounter$lambda$lambda.prototype.constructor = Coroutine$get_withCounter$lambda$lambda;
  Coroutine$get_withCounter$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = this.local$closure$action(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            return;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            this.local$closure$pending.transform_ru8m0w$(get_withCounter$lambda$lambda$lambda);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  function get_withCounter$lambda$lambda_0(closure$action_0, closure$pending_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$get_withCounter$lambda$lambda(closure$action_0, closure$pending_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function get_withCounter$lambda(closure$pending, this$withCounter) {
    return function (action) {
      closure$pending.transform_ru8m0w$(get_withCounter$lambda$lambda);
      this$withCounter(get_withCounter$lambda$lambda_0(action, closure$pending));
      return Unit;
    };
  }
  function get_withCounter($receiver) {
    var pending = new Var(0);
    return new RxExec(pending, get_withCounter$lambda(pending, $receiver));
  }
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
  function Coroutine$launchNonCancellable$lambda(closure$fn_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
  }
  Coroutine$launchNonCancellable$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$launchNonCancellable$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$launchNonCancellable$lambda.prototype.constructor = Coroutine$launchNonCancellable$lambda;
  Coroutine$launchNonCancellable$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this);
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
  function launchNonCancellable$lambda(closure$fn_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$launchNonCancellable$lambda(closure$fn_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function launchNonCancellable($receiver, fn) {
    return launch($receiver, coroutines.NonCancellable, void 0, launchNonCancellable$lambda(fn));
  }
  function RefCountMap(create) {
    this.create = create;
    this.map_0 = LinkedHashMap_init();
  }
  function RefCountMap$get$lambda$lambda(this$RefCountMap, closure$key) {
    return function () {
      var $receiver = this$RefCountMap.map_0;
      var key = closure$key;
      $receiver.remove_11rb$(key);
      return Unit;
    };
  }
  function RefCountMap$get$lambda$lambda_0(this$) {
    return function () {
      this$.count = this$.count - 1 | 0;
      if (this$.count === 0) {
        this$.kill();
      }
      return Unit;
    };
  }
  RefCountMap.prototype.get_va0u9b$ = function (gks, key) {
    var $receiver = this.map_0;
    var tmp$;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var iks = new Killables();
      iks.plusAssign_o14v8n$(RefCountMap$get$lambda$lambda(this, key));
      var item = this.create(iks, key);
      var answer = new RefCount(item, iks.kill);
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    var $receiver_0 = tmp$;
    $receiver_0.count = $receiver_0.count + 1 | 0;
    plusAssign_0(gks, RefCountMap$get$lambda$lambda_0($receiver_0));
    return $receiver_0.value;
  };
  RefCountMap.prototype.applyTo_bpsgc2$ = function (key, fn) {
    var tmp$;
    if ((tmp$ = this.map_0.get_11rb$(key)) != null) {
      fn(tmp$.value);
    }
  };
  RefCountMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RefCountMap',
    interfaces: []
  };
  function RefCount(value, kill) {
    this.value = value;
    this.kill = kill;
    this.count = 0;
  }
  RefCount.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RefCount',
    interfaces: []
  };
  function HasKill() {
  }
  HasKill.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKill',
    interfaces: []
  };
  function HasKilled() {
  }
  HasKilled.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKilled',
    interfaces: []
  };
  function HasKills() {
  }
  HasKills.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKills',
    interfaces: []
  };
  function HasKillKills() {
  }
  HasKillKills.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKillKills',
    interfaces: [HasKills, HasKill]
  };
  function HasKillKilledKills() {
  }
  HasKillKilledKills.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKillKilledKills',
    interfaces: [HasKilled, HasKillKills]
  };
  function KillsDeps(kills) {
    this.kills_ln6p9y$_0 = kills;
  }
  Object.defineProperty(KillsDeps.prototype, 'kills', {
    get: function () {
      return this.kills_ln6p9y$_0;
    }
  });
  KillsDeps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillsDeps',
    interfaces: [HasKills]
  };
  KillsDeps.prototype.component1 = function () {
    return this.kills;
  };
  KillsDeps.prototype.copy_evkg98$ = function (kills) {
    return new KillsDeps(kills === void 0 ? this.kills : kills);
  };
  KillsDeps.prototype.toString = function () {
    return 'KillsDeps(kills=' + Kotlin.toString(this.kills) + ')';
  };
  KillsDeps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kills) | 0;
    return result;
  };
  KillsDeps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.kills, other.kills))));
  };
  function HasCsKills() {
  }
  HasCsKills.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasCsKills',
    interfaces: [CoroutineScope, HasKills]
  };
  function CsKillsDeps(kills, coroutineContext) {
    this.kills_wkv9iy$_0 = kills;
    this.coroutineContext_z4cfum$_0 = coroutineContext;
  }
  Object.defineProperty(CsKillsDeps.prototype, 'kills', {
    get: function () {
      return this.kills_wkv9iy$_0;
    }
  });
  Object.defineProperty(CsKillsDeps.prototype, 'coroutineContext', {
    get: function () {
      return this.coroutineContext_z4cfum$_0;
    }
  });
  CsKillsDeps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CsKillsDeps',
    interfaces: [HasCsKills]
  };
  CsKillsDeps.prototype.component1 = function () {
    return this.kills;
  };
  CsKillsDeps.prototype.component2 = function () {
    return this.coroutineContext;
  };
  CsKillsDeps.prototype.copy_heilp1$ = function (kills, coroutineContext) {
    return new CsKillsDeps(kills === void 0 ? this.kills : kills, coroutineContext === void 0 ? this.coroutineContext : coroutineContext);
  };
  CsKillsDeps.prototype.toString = function () {
    return 'CsKillsDeps(kills=' + Kotlin.toString(this.kills) + (', coroutineContext=' + Kotlin.toString(this.coroutineContext)) + ')';
  };
  CsKillsDeps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kills) | 0;
    result = result * 31 + Kotlin.hashCode(this.coroutineContext) | 0;
    return result;
  };
  CsKillsDeps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kills, other.kills) && Kotlin.equals(this.coroutineContext, other.coroutineContext)))));
  };
  function get_fn($receiver) {
    return getCallableRef('add', function ($receiver, listener) {
      return $receiver.add_qlkmfe$(listener);
    }.bind(null, $receiver));
  }
  function listen($receiver, deps, callback) {
    plusAssign_0(deps.kills, $receiver(callback));
  }
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
  function get_groupThousands_0($receiver) {
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
  function ListEvent(item) {
    this.item = item;
  }
  function ListEvent$Add(index, item) {
    ListEvent.call(this, item);
    this.index = index;
  }
  ListEvent$Add.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Add',
    interfaces: [ListEvent]
  };
  function ListEvent$Move(from, to, item) {
    ListEvent.call(this, item);
    this.from = from;
    this.to = to;
  }
  ListEvent$Move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Move',
    interfaces: [ListEvent]
  };
  function ListEvent$Remove(index, item) {
    ListEvent.call(this, item);
    this.index = index;
  }
  ListEvent$Remove.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Remove',
    interfaces: [ListEvent]
  };
  ListEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListEvent',
    interfaces: []
  };
  function map_1($receiver, fn) {
    if (Kotlin.isType($receiver, ListEvent$Add))
      return new ListEvent$Add($receiver.index, fn($receiver.item));
    else if (Kotlin.isType($receiver, ListEvent$Move))
      return new ListEvent$Move($receiver.from, $receiver.to, fn($receiver.item));
    else if (Kotlin.isType($receiver, ListEvent$Remove))
      return new ListEvent$Remove($receiver.index, fn($receiver.item));
    else
      return Kotlin.noWhenBranchMatched();
  }
  function Coroutine$mapEvents$lambda(closure$fn_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$it = it_0;
  }
  Coroutine$mapEvents$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapEvents$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapEvents$lambda.prototype.constructor = Coroutine$mapEvents$lambda;
  Coroutine$mapEvents$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return map_1(this.local$it, this.local$closure$fn);
          case 1:
            throw this.exception_0;
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
  function mapEvents$lambda(closure$fn_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$mapEvents$lambda(closure$fn_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function mapEvents($receiver, fn) {
    return map($receiver, void 0, mapEvents$lambda(fn));
  }
  function mapLive$Holder(item, kill) {
    this.item = item;
    this.kill = kill;
  }
  mapLive$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: []
  };
  function Coroutine$mapLive$lambda(closure$deps_0, closure$fn_0, closure$itemKills_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$deps = closure$deps_0;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$itemKills = closure$itemKills_0;
    this.local$ks = void 0;
    this.local$e = e_0;
  }
  Coroutine$mapLive$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapLive$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapLive$lambda.prototype.constructor = Coroutine$mapLive$lambda;
  Coroutine$mapLive$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$e, ListEvent$Add)) {
              this.local$ks = killables(this.local$closure$deps.kills);
              this.state_0 = 4;
              this.result_0 = this.local$closure$fn(this.local$ks, this.local$e.item, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(this.local$e, ListEvent$Move)) {
                var holder = this.local$closure$itemKills.removeAt_za3lpa$(this.local$e.from);
                this.local$closure$itemKills.add_wxm5ur$(this.local$e.to, holder);
                return new ListEvent$Move(this.local$e.from, this.local$e.to, holder.item);
              }
               else {
                if (Kotlin.isType(this.local$e, ListEvent$Remove)) {
                  var holder_0 = this.local$closure$itemKills.removeAt_za3lpa$(this.local$e.index);
                  holder_0.kill;
                  return new ListEvent$Remove(this.local$e.index, holder_0.item);
                }
                 else {
                  return Kotlin.noWhenBranchMatched();
                }
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 5;
            continue;
          case 4:
            var mapped = this.result_0;
            this.local$closure$itemKills.add_wxm5ur$(this.local$e.index, new mapLive$Holder(mapped, this.local$ks.kill));
            return new ListEvent$Add(this.local$e.index, mapped);
          case 5:
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
  function mapLive$lambda(closure$deps_0, closure$fn_0, closure$itemKills_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$mapLive$lambda(closure$deps_0, closure$fn_0, closure$itemKills_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function mapLive($receiver, deps, fn) {
    var itemKills = ArrayList_init_0();
    return map($receiver, void 0, mapLive$lambda(deps, fn, itemKills));
  }
  function Coroutine$listEventProcessor$lambda(closure$deps_0, closure$fn_0, closure$itemKills_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$deps = closure$deps_0;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$itemKills = closure$itemKills_0;
    this.local$$receiver_0 = void 0;
    this.local$closure$itemKills_0 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$listEventProcessor$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$listEventProcessor$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$listEventProcessor$lambda.prototype.constructor = Coroutine$listEventProcessor$lambda;
  Coroutine$listEventProcessor$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$$receiver, ListEvent$Add)) {
              this.local$$receiver_0 = killables(this.local$closure$deps.kills);
              var closure$fn = this.local$closure$fn;
              this.local$closure$itemKills_0 = this.local$closure$itemKills;
              this.state_0 = 4;
              this.result_0 = closure$fn(this.local$$receiver_0, this.local$$receiver.item, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(this.local$$receiver, ListEvent$Move)) {
                return this.local$closure$itemKills.add_wxm5ur$(this.local$$receiver.to, this.local$closure$itemKills.removeAt_za3lpa$(this.local$$receiver.from)), Unit;
              }
               else {
                if (Kotlin.isType(this.local$$receiver, ListEvent$Remove)) {
                  return this.local$closure$itemKills.removeAt_za3lpa$(this.local$$receiver.index)();
                }
                 else {
                  return Kotlin.noWhenBranchMatched();
                }
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 5;
            continue;
          case 4:
            this.local$closure$itemKills_0.add_wxm5ur$(this.local$$receiver.index, this.local$$receiver_0.kill);
            return this.local$$receiver_0;
          case 5:
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
  function listEventProcessor$lambda(closure$deps_0, closure$fn_0, closure$itemKills_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$listEventProcessor$lambda(closure$deps_0, closure$fn_0, closure$itemKills_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function listEventProcessor(deps, fn) {
    var itemKills = ArrayList_init_0();
    return listEventProcessor$lambda(deps, fn, itemKills);
  }
  function Coroutine$process$lambda(this$process_0, closure$processor_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$process = this$process_0;
    this.local$closure$processor = closure$processor_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$process$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$process$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$process$lambda.prototype.constructor = Coroutine$process$lambda;
  Coroutine$process$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$process.iterator();
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
            var e_0 = this.result_0;
            this.state_0 = 6;
            this.result_0 = this.local$closure$processor(e_0, this);
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
  function process$lambda_1(this$process_0, closure$processor_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$process$lambda(this$process_0, closure$processor_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function process_0($receiver, deps, fn) {
    var processor = listEventProcessor(deps, fn);
    launch(deps, void 0, void 0, process$lambda_1($receiver, processor));
  }
  function applyTo($receiver, set) {
    if (Kotlin.isType($receiver, ListEvent$Add)) {
      var element = $receiver.item;
      set.add_11rb$(element);
    }
     else if (Kotlin.isType($receiver, ListEvent$Remove)) {
      var element_0 = $receiver.item;
      set.remove_11rb$(element_0);
    }
     else
      Kotlin.isType($receiver, ListEvent$Move);
  }
  function Coroutine$applyTo$lambda(this$applyTo_0, closure$set_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$applyTo = this$applyTo_0;
    this.local$closure$set = closure$set_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$applyTo$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$applyTo$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$applyTo$lambda.prototype.constructor = Coroutine$applyTo$lambda;
  Coroutine$applyTo$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$applyTo.iterator();
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
              this.state_0 = 6;
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
            var e_0 = this.result_0;
            applyTo(e_0, this.local$closure$set);
            this.state_0 = 2;
            continue;
          case 6:
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
  function applyTo$lambda(this$applyTo_0, closure$set_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$applyTo$lambda(this$applyTo_0, closure$set_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function applyTo_0($receiver, deps, set) {
    launch(deps, void 0, void 0, applyTo$lambda($receiver, set));
  }
  function filter$lambda$Previous() {
  }
  filter$lambda$Previous.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Previous',
    interfaces: []
  };
  function filter$lambda$ObjectLiteral() {
    filter$lambda$Previous.call(this);
    this.filteredIndexAfter_8uwai9$_0 = new Var(0);
  }
  Object.defineProperty(filter$lambda$ObjectLiteral.prototype, 'filteredIndexAfter', {
    get: function () {
      return this.filteredIndexAfter_8uwai9$_0;
    }
  });
  filter$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [filter$lambda$Previous]
  };
  function filter$lambda$Item(closure$deps, initialIndex, initialPrevious) {
    filter$lambda$Previous.call(this);
    this.ks = killables(closure$deps.kills);
    this.kills_n36f6t$_0 = this.ks.kills;
    this.index = new Var(initialIndex);
    this.previous = new Var(initialPrevious);
    this.filteredIndex_dndpmp$_0 = lazy(filter$lambda$Item$filteredIndex$lambda(this));
    this.filteredIndexAfter_aetvvr$_0 = lazy(filter$lambda$Item$filteredIndexAfter$lambda(this));
  }
  Object.defineProperty(filter$lambda$Item.prototype, 'kills', {
    get: function () {
      return this.kills_n36f6t$_0;
    }
  });
  Object.defineProperty(filter$lambda$Item.prototype, 'filteredIndex', {
    get: function () {
      return this.filteredIndex_dndpmp$_0.value;
    }
  });
  Object.defineProperty(filter$lambda$Item.prototype, 'filteredIndexAfter', {
    get: function () {
      return this.filteredIndexAfter_aetvvr$_0.value;
    }
  });
  function filter$lambda$Item$filteredIndex$lambda$lambda(this$Item) {
    return function ($receiver) {
      return this$Item.previous.invoke().filteredIndexAfter.invoke();
    };
  }
  function filter$lambda$Item$filteredIndex$lambda(this$Item) {
    return function () {
      return this$Item.rx_y6x17j$(filter$lambda$Item$filteredIndex$lambda$lambda(this$Item));
    };
  }
  function filter$lambda$Item$filteredIndexAfter$lambda$lambda(this$Item) {
    return function ($receiver) {
      var $receiver_0 = this$Item.filteredIndex.invoke();
      return this$Item.visible.invoke() ? $receiver_0 + 1 | 0 : $receiver_0;
    };
  }
  function filter$lambda$Item$filteredIndexAfter$lambda(this$Item) {
    return function () {
      return this$Item.rx_y6x17j$(filter$lambda$Item$filteredIndexAfter$lambda$lambda(this$Item));
    };
  }
  filter$lambda$Item.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Item',
    interfaces: [KillsApi, filter$lambda$Previous]
  };
  function filter$lambda$Holder(closure$items, closure$First, this$, closure$deps, closure$fn, item, initialIndex) {
    this.closure$items = closure$items;
    this.closure$First = closure$First;
    this.this$ = this$;
    filter$lambda$Item.call(this, closure$deps, initialIndex, initialIndex === 0 ? closure$First : closure$items.get_za3lpa$(initialIndex - 1 | 0));
    this.item = item;
    this.alive = new Var(true);
    this.visible_4j9w7l$_0 = this.rx_y6x17j$(filter$lambda$Holder$visible$lambda(this, closure$fn));
    this.rxFilteredIndex = this.rx_y6x17j$(filter$lambda$Holder$rxFilteredIndex$lambda(this));
    closure$items.add_wxm5ur$(this.index.now, this);
    var tmp$;
    tmp$ = drop(closure$items, this.index.now + 1 | 0).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      increase(element.index);
    }
    this.next_q7cg24$(filter$lambda$filter$lambda$Holder_init$lambda);
    var add = filter$lambda$filter$lambda$Holder_init$add(this);
    if (this.visible.now) {
      plusAssign(this$.channel, add());
    }
    this.forEachLater_xwzbbo$(this.visible, filter$lambda$filter$lambda$Holder_init$lambda_0(this$, add, this));
  }
  Object.defineProperty(filter$lambda$Holder.prototype, 'visible', {
    get: function () {
      return this.visible_4j9w7l$_0;
    }
  });
  filter$lambda$Holder.prototype.next_q7cg24$ = function (fn) {
    if (this.index.now < get_lastIndex(this.closure$items)) {
      fn(this.closure$items.get_za3lpa$(this.index.now + 1 | 0));
    }
  };
  filter$lambda$Holder.prototype.updatePrevious = function () {
    this.previous.remAssign_11rb$(this.index.now === 0 ? this.closure$First : this.closure$items.get_za3lpa$(this.index.now - 1 | 0));
  };
  function filter$lambda$Holder$moveTo$lambda($receiver) {
    $receiver.updatePrevious();
    return Unit;
  }
  function filter$lambda$Holder$moveTo$lambda_0($receiver) {
    $receiver.updatePrevious();
    return Unit;
  }
  filter$lambda$Holder.prototype.moveTo_za3lpa$ = function (to) {
    var from = this.index.now;
    var fromFiltered = this.rxFilteredIndex.now;
    if (from !== to) {
      this.closure$items.add_wxm5ur$(to, this.closure$items.removeAt_za3lpa$(from));
      this.index.remAssign_11rb$(to);
      this.previous.remAssign_11rb$(this.closure$First);
      if (from < to) {
        var tmp$;
        tmp$ = this.closure$items.subList_vux9f0$(from, to).iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          decrease(element.index);
        }
        this.closure$items.get_za3lpa$(from).updatePrevious();
      }
       else {
        var tmp$_0;
        tmp$_0 = this.closure$items.subList_vux9f0$(to + 1 | 0, from + 1 | 0).iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          increase(element_0.index);
        }
        this.closure$items.get_za3lpa$(from).next_q7cg24$(filter$lambda$Holder$moveTo$lambda);
      }
      this.next_q7cg24$(filter$lambda$Holder$moveTo$lambda_0);
      this.updatePrevious();
      if (this.visible.now) {
        var toFiltered = this.rxFilteredIndex.now;
        if (fromFiltered !== toFiltered) {
          plusAssign(this.this$.channel, new ListEvent$Move(fromFiltered, toFiltered, this.item));
        }
      }
    }
  };
  function filter$lambda$Holder$remove$lambda(this$Holder) {
    return function ($receiver) {
      $receiver.previous.remAssign_11rb$(this$Holder.previous.now);
      return Unit;
    };
  }
  filter$lambda$Holder.prototype.remove = function () {
    this.alive.remAssign_11rb$(false);
    this.next_q7cg24$(filter$lambda$Holder$remove$lambda(this));
    this.closure$items.removeAt_za3lpa$(this.index.now);
    var tmp$;
    tmp$ = drop(this.closure$items, this.index.now).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      decrease(element.index);
    }
    this.ks.kill();
  };
  function filter$lambda$Holder$visible$lambda(this$Holder, closure$fn) {
    return function ($receiver) {
      return this$Holder.alive.invoke() && closure$fn($receiver, this$Holder.item);
    };
  }
  function filter$lambda$Holder$rxFilteredIndex$lambda(this$Holder) {
    return function ($receiver) {
      return this$Holder.filteredIndex.invoke();
    };
  }
  function filter$lambda$filter$lambda$Holder_init$lambda($receiver) {
    $receiver.updatePrevious();
    return Unit;
  }
  function filter$lambda$filter$lambda$Holder_init$add(this$Holder) {
    return function () {
      return new ListEvent$Add(this$Holder.rxFilteredIndex.now, this$Holder.item);
    };
  }
  function filter$lambda$filter$lambda$Holder_init$lambda_0(this$, closure$add, this$Holder) {
    return function ($receiver, v) {
      var tmp$;
      tmp$ = this$.channel;
      var tmp$_0;
      if (v) {
        tmp$_0 = closure$add();
      }
       else {
        tmp$_0 = new ListEvent$Remove(this$Holder.rxFilteredIndex.now, this$Holder.item);
      }
      plusAssign(tmp$, tmp$_0);
      return Unit;
    };
  }
  filter$lambda$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: [filter$lambda$Item]
  };
  function Coroutine$filter$lambda(closure$deps_0, closure$fn_0, this$filter_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$deps = closure$deps_0;
    this.local$closure$fn = closure$fn_0;
    this.local$this$filter = this$filter_0;
    this.local$tmp$ = void 0;
    this.local$First = void 0;
    this.local$items = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$filter$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$filter$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$filter$lambda.prototype.constructor = Coroutine$filter$lambda;
  Coroutine$filter$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$First = new filter$lambda$ObjectLiteral();
            this.local$items = ArrayList_init_0();
            this.local$tmp$ = this.local$this$filter.iterator();
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
              this.state_0 = 6;
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
            var e_0 = this.result_0;
            if (Kotlin.isType(e_0, ListEvent$Add))
              new filter$lambda$Holder(this.local$items, this.local$First, this.local$$receiver, this.local$closure$deps, this.local$closure$fn, e_0.item, e_0.index);
            else if (Kotlin.isType(e_0, ListEvent$Move))
              this.local$items.get_za3lpa$(e_0.from).moveTo_za3lpa$(e_0.to);
            else if (Kotlin.isType(e_0, ListEvent$Remove))
              this.local$items.get_za3lpa$(e_0.index).remove();
            else
              Kotlin.noWhenBranchMatched();
            this.state_0 = 2;
            continue;
          case 6:
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
  function filter$lambda(closure$deps_0, closure$fn_0, this$filter_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$filter$lambda(closure$deps_0, closure$fn_0, this$filter_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function filter($receiver, deps, fn) {
    return produce(deps, void 0, 2147483647, filter$lambda(deps, fn, $receiver));
  }
  function DynamicOps() {
  }
  DynamicOps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DynamicOps',
    interfaces: []
  };
  function NoDynamicOps() {
    NoDynamicOps_instance = this;
  }
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  NoDynamicOps.prototype.writeTimestamp_frv8pu$ = function (ts) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  NoDynamicOps.prototype.readTimestamp_za3rmp$ = function (d) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  NoDynamicOps.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NoDynamicOps',
    interfaces: [DynamicOps]
  };
  var NoDynamicOps_instance = null;
  function NoDynamicOps_getInstance() {
    if (NoDynamicOps_instance === null) {
      new NoDynamicOps();
    }
    return NoDynamicOps_instance;
  }
  function Identity$lambda(it) {
    return it;
  }
  var Identity;
  function CompareEquals$lambda(a, b) {
    return equals(a, b);
  }
  var CompareEquals;
  function IdentityWriteDynamic$lambda(t, f) {
    return t;
  }
  var IdentityWriteDynamic;
  function IdentityReadDynamic$lambda(t, f) {
    return t;
  }
  var IdentityReadDynamic;
  var identityCopier = defineInlineFunction('appsimake-commonshr.commonshr.properties.identityCopier_287e2$', wrapFunction(function () {
    var properties = _.commonshr.properties;
    return function () {
      return properties.Identity;
    };
  }));
  var identityWriteDynamic = defineInlineFunction('appsimake-commonshr.commonshr.properties.identityWriteDynamic_287e2$', wrapFunction(function () {
    var properties = _.commonshr.properties;
    return function () {
      return properties.IdentityWriteDynamic;
    };
  }));
  var identityReadDynamic = defineInlineFunction('appsimake-commonshr.commonshr.properties.identityReadDynamic_287e2$', wrapFunction(function () {
    var properties = _.commonshr.properties;
    return function () {
      return properties.IdentityReadDynamic;
    };
  }));
  var compareEquals = defineInlineFunction('appsimake-commonshr.commonshr.properties.compareEquals_287e2$', wrapFunction(function () {
    var properties = _.commonshr.properties;
    return function () {
      return properties.CompareEquals;
    };
  }));
  function ReadWrite() {
  }
  ReadWrite.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ReadWrite',
    interfaces: []
  };
  function PropertyType(copier, compare, writeDynamic, readDynamic) {
    if (copier === void 0) {
      copier = package$properties.Identity;
    }
    if (compare === void 0) {
      compare = package$properties.CompareEquals;
    }
    if (writeDynamic === void 0) {
      writeDynamic = package$properties.IdentityWriteDynamic;
    }
    if (readDynamic === void 0) {
      readDynamic = package$properties.IdentityReadDynamic;
    }
    this.copier = copier;
    this.compare = compare;
    this.writeDynamic_qq5p46$_0 = writeDynamic;
    this.readDynamic_t2sno1$_0 = readDynamic;
  }
  Object.defineProperty(PropertyType.prototype, 'writeDynamic', {
    get: function () {
      return this.writeDynamic_qq5p46$_0;
    }
  });
  Object.defineProperty(PropertyType.prototype, 'readDynamic', {
    get: function () {
      return this.readDynamic_t2sno1$_0;
    }
  });
  PropertyType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropertyType',
    interfaces: [ReadWrite]
  };
  var IdentityType;
  var identityType = defineInlineFunction('appsimake-commonshr.commonshr.properties.identityType_287e2$', wrapFunction(function () {
    var properties = _.commonshr.properties;
    return function () {
      return properties.IdentityType;
    };
  }));
  function ROProp(name, rxv, write) {
    this.name = name;
    this.rxv_b9riih$_0 = rxv;
    this.write = write;
  }
  Object.defineProperty(ROProp.prototype, 'rxv', {
    get: function () {
      return this.rxv_b9riih$_0;
    }
  });
  Object.defineProperty(ROProp.prototype, 'now', {
    get: function () {
      return this.rxv.now;
    }
  });
  ROProp.prototype.fold_h2yxzx$ = function (ks, z0, fn) {
    return this.rxv.fold_h2yxzx$(ks, z0, fn);
  };
  ROProp.prototype.foldKills_ooixq2$ = function (ks, fn) {
    return this.rxv.foldKills_ooixq2$(ks, fn);
  };
  ROProp.prototype.foldKills_h4yiec$ = function (ks, z0, fn) {
    return this.rxv.foldKills_h4yiec$(ks, z0, fn);
  };
  ROProp.prototype.foldKillsTrigger_ooixq2$ = function (ks, fn) {
    return this.rxv.foldKillsTrigger_ooixq2$(ks, fn);
  };
  ROProp.prototype.foldLater_94stmo$ = function (ks, z0, fn) {
    return this.rxv.foldLater_94stmo$(ks, z0, fn);
  };
  ROProp.prototype.forEach_aaomyj$ = function (ks, fn) {
    return this.rxv.forEach_aaomyj$(ks, fn);
  };
  ROProp.prototype.forEach_vlp88o$ = function (ks, killOrder, fn) {
    return this.rxv.forEach_vlp88o$(ks, killOrder, fn);
  };
  ROProp.prototype.forEachLater_aaomyj$ = function (ks, fn) {
    return this.rxv.forEachLater_aaomyj$(ks, fn);
  };
  ROProp.prototype.forEachLater_cksb0z$$default = function (ks, killStart, killOrder, fn) {
    return this.rxv.forEachLater_cksb0z$$default(ks, killStart, killOrder, fn);
  };
  ROProp.prototype.invoke = function () {
    return this.rxv.invoke();
  };
  ROProp.prototype.map_492dlc$ = function (ks, fn) {
    return this.rxv.map_492dlc$(ks, fn);
  };
  ROProp.prototype.off_sysl1e$ = function (ks, offFn) {
    return this.rxv.off_sysl1e$(ks, offFn);
  };
  ROProp.prototype.onChange_naxq84$ = function (ks, fn) {
    return this.rxv.onChange_naxq84$(ks, fn);
  };
  ROProp.prototype.onOff_nf0d6g$ = function (ks, on, off) {
    return this.rxv.onOff_nf0d6g$(ks, on, off);
  };
  ROProp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ROProp',
    interfaces: [HasRx, RxIface]
  };
  function RWProp(name, rxv, write) {
    ROProp.call(this, name, rxv, write);
    this.rxv_eq87tb$_0 = rxv;
  }
  Object.defineProperty(RWProp.prototype, 'rxv', {
    get: function () {
      return this.rxv_eq87tb$_0;
    }
  });
  Object.defineProperty(RWProp.prototype, 'now', {
    get: function () {
      return this.rxv.now;
    },
    set: function (v) {
      this.rxv.now = v;
    }
  });
  RWProp.prototype.remAssign_11rc$ = function (v) {
    this.rxv.remAssign_11rb$(v);
  };
  RWProp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RWProp',
    interfaces: [HasVar, ROProp]
  };
  function EnumProp(name, rxv, write, nameVar, values) {
    RWProp.call(this, name, rxv, write);
    this.nameVar = nameVar;
    this.values = values;
  }
  EnumProp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumProp',
    interfaces: [RWProp]
  };
  function ScalarArrayProp() {
  }
  ScalarArrayProp.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ScalarArrayProp',
    interfaces: []
  };
  function ROArrayProp(name, rxv, write, writeElement) {
    ROProp.call(this, name, rxv, write);
    this.writeElement_n8qofj$_0 = writeElement;
  }
  Object.defineProperty(ROArrayProp.prototype, 'writeElement', {
    get: function () {
      return this.writeElement_n8qofj$_0;
    }
  });
  ROArrayProp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ROArrayProp',
    interfaces: [ScalarArrayProp, ROProp]
  };
  function RWArrayProp(name, rxv, write, writeElement) {
    RWProp.call(this, name, rxv, write);
    this.writeElement_edl6hz$_0 = writeElement;
  }
  Object.defineProperty(RWArrayProp.prototype, 'writeElement', {
    get: function () {
      return this.writeElement_edl6hz$_0;
    }
  });
  RWArrayProp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RWArrayProp',
    interfaces: [ScalarArrayProp, RWProp]
  };
  function PropertyListItem(name, write, read, get, copy, set, reset, compare) {
    this.name = name;
    this.write = write;
    this.read = read;
    this.get = get;
    this.copy = copy;
    this.set = set;
    this.reset = reset;
    this.compare = compare;
  }
  PropertyListItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropertyListItem',
    interfaces: []
  };
  function PropertyList() {
    this.items = ArrayList_init_0();
  }
  PropertyList.prototype.readOnlyProp_z4bjo6$ = function (value, type) {
    if (type === void 0) {
      type = package$properties.IdentityType;
    }
    return this.prop_z4bjo6$(value, type);
  };
  function PropertyList$addProperty$lambda(closure$type, closure$rxv) {
    return function (ops) {
      return closure$type.writeDynamic(closure$rxv.now, ops);
    };
  }
  function PropertyList$addProperty$lambda_0(closure$rxv, closure$type) {
    return function (d, ops) {
      closure$rxv.remAssign_11rb$(closure$type.readDynamic(d, ops));
      return Unit;
    };
  }
  function PropertyList$addProperty$lambda_1(closure$rxv) {
    return function () {
      return closure$rxv.invoke();
    };
  }
  function PropertyList$addProperty$lambda_2(closure$type, closure$rxv) {
    return function () {
      return closure$type.copier(closure$rxv.now);
    };
  }
  function PropertyList$addProperty$lambda_3(closure$rxv) {
    return function (v) {
      closure$rxv.remAssign_11rb$(v);
      return Unit;
    };
  }
  function PropertyList$addProperty$lambda_4(closure$rxv, closure$value) {
    return function () {
      closure$rxv.remAssign_11rb$(closure$value);
      return Unit;
    };
  }
  function PropertyList$addProperty$lambda_5(closure$type, closure$rxv) {
    return function (v) {
      return closure$type.compare(closure$rxv.invoke(), v);
    };
  }
  PropertyList.prototype.addProperty_5wvcos$ = function (name, value, type) {
    var rxv = new Var(value);
    var $receiver = this.items;
    var element = new PropertyListItem(name, PropertyList$addProperty$lambda(type, rxv), PropertyList$addProperty$lambda_0(rxv, type), PropertyList$addProperty$lambda_1(rxv), PropertyList$addProperty$lambda_2(type, rxv), PropertyList$addProperty$lambda_3(rxv), PropertyList$addProperty$lambda_4(rxv, value), PropertyList$addProperty$lambda_5(type, rxv));
    $receiver.add_11rb$(element);
    return rxv;
  };
  function PropertyList$prop$lambda(closure$value, closure$type, this$PropertyList) {
    return function (name) {
      var rxv = this$PropertyList.addProperty_5wvcos$(name, closure$value, closure$type);
      return new RWProp(name, rxv, closure$type.writeDynamic);
    };
  }
  PropertyList.prototype.prop_z4bjo6$ = function (value, type) {
    if (type === void 0) {
      type = package$properties.IdentityType;
    }
    return named(PropertyList$prop$lambda(value, type, this));
  };
  PropertyList.prototype.string = function () {
    return this.prop_z4bjo6$('');
  };
  PropertyList.prototype.enum_wbfx10$ = defineInlineFunction('appsimake-commonshr.commonshr.properties.PropertyList.enum_wbfx10$', wrapFunction(function () {
    var killable = _.killable;
    var toList = Kotlin.kotlin.collections.toList_us0mfu$;
    var EnumProp_init = _.commonshr.properties.EnumProp;
    var wrapFunction = Kotlin.wrapFunction;
    var named = _.common.named_cq6yhu$;
    var PropertyList$enum$lambda = wrapFunction(function () {
      var PropertyType_init = _.commonshr.properties.PropertyType;
      function enumType$lambda(e, f) {
        return e.name;
      }
      function enumType$lambda_0(typeClosure$E, isE) {
        return function (d, f) {
          return typeClosure$E.valueOf_61zpoe$(d);
        };
      }
      var linked = _.rx.linked_g2t76q$;
      function toName$lambda(it) {
        return it.name;
      }
      function toName$lambda_0(typeClosure$E, isE) {
        return function (it) {
          return typeClosure$E.valueOf_61zpoe$(it);
        };
      }
      return function (typeClosure$E, isE, closure$v, this$PropertyList) {
        return function (name) {
          var type = new PropertyType_init(void 0, void 0, enumType$lambda, enumType$lambda_0(typeClosure$E, isE));
          var rxv = this$PropertyList.addProperty_5wvcos$(name, closure$v, type);
          var tmp$ = type.writeDynamic;
          var E_0 = typeClosure$E;
          var isE_0 = isE;
          return new EnumProp_init(name, rxv, tmp$, linked(rxv, killable.HasNoKill, toName$lambda, toName$lambda_0(E_0, isE_0)), toList(typeClosure$E.values()));
        };
      };
    });
    return function (E_0, isE, v) {
      return named(PropertyList$enum$lambda(E_0, isE, v, this));
    };
  }));
  PropertyList.prototype.number = function () {
    return this.prop_z4bjo6$(0);
  };
  PropertyList.prototype.serverTimestamp = function () {
    return this.readOnlyProp_z4bjo6$(TS$Server_getInstance(), ServerTimestampPropertyType);
  };
  PropertyList.prototype.array_itlr5c$ = function (type) {
    if (type === void 0)
      type = new PropertyType();
    return this.prop_z4bjo6$(emptyList(), arrayOfScalarType(type));
  };
  function PropertyList$set$lambda(this$PropertyList) {
    return function (name) {
      var value = emptySet();
      var elementType = new PropertyType();
      var type = setOfScalarType();
      var rxv = this$PropertyList.addProperty_5wvcos$(name, value, type);
      return new RWArrayProp(name, rxv, type.writeDynamic, elementType.writeDynamic);
    };
  }
  PropertyList.prototype.set_287e2$ = function () {
    return named(PropertyList$set$lambda(this));
  };
  PropertyList.prototype.rxlist_4okrys$ = function (create) {
    return this.prop_z4bjo6$(emptyList(), rxListType(create));
  };
  PropertyList.prototype.boolean_6taknv$ = function (default_0) {
    if (default_0 === void 0)
      default_0 = false;
    return this.prop_z4bjo6$(default_0);
  };
  PropertyList.prototype.int_za3lpa$ = function (default_0) {
    if (default_0 === void 0)
      default_0 = 0;
    return this.prop_z4bjo6$(default_0);
  };
  PropertyList.prototype.double = function () {
    return this.prop_z4bjo6$(0.0);
  };
  function PropertyList$addCalc$lambda(closure$fn) {
    return function ($receiver) {
      return closure$fn();
    };
  }
  function PropertyList$addCalc$lambda_0(closure$write, closure$rxv) {
    return function (ops) {
      return closure$write(closure$rxv.now, ops);
    };
  }
  function PropertyList$addCalc$lambda_1(f, f_0) {
    return Unit;
  }
  function PropertyList$addCalc$lambda_2(closure$rxv) {
    return function () {
      return closure$rxv.invoke();
    };
  }
  function PropertyList$addCalc$lambda_3(closure$rxv) {
    return function () {
      return closure$rxv.now;
    };
  }
  function PropertyList$addCalc$lambda_4(it) {
    return Unit;
  }
  function PropertyList$addCalc$lambda_5() {
    return Unit;
  }
  function PropertyList$addCalc$lambda_6(it) {
    return true;
  }
  PropertyList.prototype.addCalc_5k3qg1$ = function (name, write, fn) {
    if (write === void 0) {
      write = package$properties.IdentityWriteDynamic;
    }
    var rxv = Rx_init_0(NoKill, PropertyList$addCalc$lambda(fn));
    var $receiver = this.items;
    var element = new PropertyListItem(name, PropertyList$addCalc$lambda_0(write, rxv), PropertyList$addCalc$lambda_1, PropertyList$addCalc$lambda_2(rxv), PropertyList$addCalc$lambda_3(rxv), PropertyList$addCalc$lambda_4, PropertyList$addCalc$lambda_5, PropertyList$addCalc$lambda_6);
    $receiver.add_11rb$(element);
    return rxv;
  };
  function PropertyList$calc$lambda(closure$write, closure$fn, this$PropertyList) {
    return function (name) {
      var rxv = this$PropertyList.addCalc_5k3qg1$(name, closure$write, closure$fn);
      return new ROProp(name, rxv, closure$write);
    };
  }
  PropertyList.prototype.calc_26ey0h$ = function (write, fn) {
    if (write === void 0) {
      write = package$properties.IdentityWriteDynamic;
    }
    return named(PropertyList$calc$lambda(write, fn, this));
  };
  PropertyList.prototype.calcSet_2yxmkr$ = function (fn) {
    return this.calcSetGeneric_p9dtde$(fn, setOfScalarType().writeDynamic, package$properties.IdentityWriteDynamic);
  };
  function PropertyList$calcSetGeneric$lambda(closure$write, closure$fn, this$PropertyList, closure$writeElement) {
    return function (name) {
      var rxv = this$PropertyList.addCalc_5k3qg1$(name, closure$write, closure$fn);
      return new ROArrayProp(name, rxv, closure$write, closure$writeElement);
    };
  }
  PropertyList.prototype.calcSetGeneric_p9dtde$ = function (fn, write, writeElement) {
    return named(PropertyList$calcSetGeneric$lambda(write, fn, this, writeElement));
  };
  function PropertyList$lazySet$lambda(closure$write) {
    return function (v, ops) {
      return closure$write(v.value, ops);
    };
  }
  PropertyList.prototype.lazySet_iof1yq$ = function (write, writeElement, fn) {
    if (write === void 0)
      write = setOfScalarType().writeDynamic;
    if (writeElement === void 0) {
      writeElement = package$properties.IdentityWriteDynamic;
    }
    return this.calcSetGeneric_p9dtde$(fn, PropertyList$lazySet$lambda(write), writeElement);
  };
  function PropertyList$lazy$lambda(closure$write) {
    return function (v, ops) {
      return closure$write(v.value, ops);
    };
  }
  PropertyList.prototype.lazy_x7a9rj$ = function (write, fn) {
    if (write === void 0) {
      write = package$properties.IdentityWriteDynamic;
    }
    return this.calc_26ey0h$(PropertyList$lazy$lambda(write), fn);
  };
  PropertyList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropertyList',
    interfaces: []
  };
  function rxCompare(a, b) {
    var tmp$;
    var tmp$_0 = ((tmp$ = Kotlin.getKClassFromExpression(a)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(b)) : null) && a.o.items.size === b.o.items.size;
    if (tmp$_0) {
      var $receiver = zipItems(a, b);
      var all$result;
      all$break: do {
        var tmp$_1;
        tmp$_1 = $receiver.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          var pa = element.component1()
          , pb = element.component2();
          if (!pa.compare(pb.get())) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      tmp$_0 = all$result;
    }
    return tmp$_0;
  }
  function RxBase() {
    this.o = new PropertyList();
  }
  RxBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxBase',
    interfaces: []
  };
  function RxRoot() {
    RxRoot$Companion_getInstance();
    RxBase.call(this);
    this.type_gtc63r$_0 = this.o.string().provideDelegate_n5byny$(this, RxRoot$type_metadata);
  }
  var RxRoot$type_metadata = new PropertyMetadata('type');
  Object.defineProperty(RxRoot.prototype, 'type', {
    get: function () {
      return this.type_gtc63r$_0.getValue_lrcp0p$(this, RxRoot$type_metadata);
    }
  });
  function RxRoot$Companion() {
    RxRoot$Companion_instance = this;
    RxRoot.call(this);
  }
  RxRoot$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [RxRoot]
  };
  var RxRoot$Companion_instance = null;
  function RxRoot$Companion_getInstance() {
    if (RxRoot$Companion_instance === null) {
      new RxRoot$Companion();
    }
    return RxRoot$Companion_instance;
  }
  RxRoot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxRoot',
    interfaces: [RxBase]
  };
  function wrapper$lambda(closure$typeMap) {
    return function (d, ops) {
      var $receiver = RxRoot$Companion_getInstance();
      readDynamic($receiver, d, ops);
      var $receiver_0 = getValue(closure$typeMap, $receiver.type.now)();
      readDynamic($receiver_0, d, ops);
      return $receiver_0;
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
  function zipItems(a, b) {
    return zip(asSequence(a.o.items), asSequence(b.o.items));
  }
  var Any = Object;
  function copy($receiver) {
    var tmp$;
    var $receiver_0 = Kotlin.isType(tmp$ = new (get_js(Kotlin.getKClassFromExpression($receiver)))(), Any) ? tmp$ : throwCCE();
    var tmp$_0;
    tmp$_0 = zipItems($receiver, $receiver_0).iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var old = element.component1()
      , new_0 = element.component2();
      new_0.set(old.copy());
    }
    return $receiver_0;
  }
  function writeDynamic($receiver, ops) {
    var d = {};
    var tmp$;
    tmp$ = $receiver.o.items.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      d[element.name] = element.write(ops);
    }
    return d;
  }
  function readDynamic($receiver, d, ops) {
    var tmp$;
    tmp$ = $receiver.o.items.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (hasOwnProperty(d, element.name)) {
        element.read(d[element.name], ops);
      }
       else {
        element.reset();
      }
    }
  }
  function rxListType$lambda(closure$create) {
    return function (d, ops) {
      var $receiver = closure$create();
      readDynamic($receiver, d, ops);
      return $receiver;
    };
  }
  function rxListType(create) {
    return rxListType_0(rxListType$lambda(create));
  }
  function listCompare(a, b, compare) {
    var tmp$ = a.size === b.size;
    if (tmp$) {
      var $receiver = zip(asSequence(a), asSequence(b));
      var all$result;
      all$break: do {
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          var ba = element.component1()
          , bb = element.component2();
          if (!compare(ba, bb)) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      tmp$ = all$result;
    }
    return tmp$;
  }
  function rxListType$lambda_0(list) {
    var destination = ArrayList_init(collectionSizeOrDefault(list, 10));
    var tmp$;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(copy(item));
    }
    return destination;
  }
  function rxListType$lambda_1(a, b) {
    return listCompare(a, b, getCallableRef('rxCompare', function (a, b) {
      return rxCompare(a, b);
    }));
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function rxListType$lambda_2(list, ops) {
    var destination = ArrayList_init(collectionSizeOrDefault(list, 10));
    var tmp$;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(writeDynamic(item, ops));
    }
    return copyToArray(destination);
  }
  function rxListType$lambda_3(closure$read) {
    return function (d, ops) {
      var destination = ArrayList_init(d.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== d.length; ++tmp$) {
        var item = d[tmp$];
        destination.add_11rb$(closure$read(item, ops));
      }
      return destination;
    };
  }
  function rxListType_0(read) {
    return new PropertyType(rxListType$lambda_0, rxListType$lambda_1, rxListType$lambda_2, rxListType$lambda_3(read));
  }
  function ServerTimestampPropertyType$lambda(f, f_0) {
    return true;
  }
  function ServerTimestampPropertyType$lambda_0(f, ops) {
    return ops.writeTimestamp_frv8pu$(TS$Server_getInstance());
  }
  var ServerTimestampPropertyType;
  var enumType = defineInlineFunction('appsimake-commonshr.commonshr.properties.enumType_nxd2ia$', wrapFunction(function () {
    var PropertyType_init = _.commonshr.properties.PropertyType;
    function enumType$lambda(e, f) {
      return e.name;
    }
    function enumType$lambda_0(typeClosure$E, isE) {
      return function (d, f) {
        return typeClosure$E.valueOf_61zpoe$(d);
      };
    }
    return function (E_0, isE) {
      return new PropertyType_init(void 0, void 0, enumType$lambda, enumType$lambda_0(E_0, isE));
    };
  }));
  function arrayOfScalarType$lambda(closure$type) {
    return function (l) {
      var destination = ArrayList_init(collectionSizeOrDefault(l, 10));
      var tmp$;
      tmp$ = l.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(closure$type.copier(item));
      }
      return destination;
    };
  }
  function arrayOfScalarType$lambda_0(closure$type) {
    return function (a, b) {
      return listCompare(a, b, closure$type.compare);
    };
  }
  function arrayOfScalarType$lambda_1(closure$type) {
    return function (l, ops) {
      var destination = ArrayList_init(collectionSizeOrDefault(l, 10));
      var tmp$;
      tmp$ = l.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(closure$type.writeDynamic(item, ops));
      }
      return copyToArray(destination);
    };
  }
  function arrayOfScalarType$lambda_2(closure$type) {
    return function (d, ops) {
      var $receiver = toList(d);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(closure$type.readDynamic(item, ops));
      }
      return destination;
    };
  }
  function arrayOfScalarType(type) {
    if (type === void 0)
      type = new PropertyType();
    return new PropertyType(arrayOfScalarType$lambda(type), arrayOfScalarType$lambda_0(type), arrayOfScalarType$lambda_1(type), arrayOfScalarType$lambda_2(type));
  }
  function setOfScalarType$lambda(l, ops) {
    return copyToArray(l);
  }
  function setOfScalarType$lambda_0(d, ops) {
    return toSet_0(d);
  }
  function setOfScalarType() {
    return new PropertyType(void 0, void 0, setOfScalarType$lambda, setOfScalarType$lambda_0);
  }
  function calcType$lambda(f, f_0) {
    return true;
  }
  function calcType$lambda_0(closure$write, closure$rxv) {
    return function (f, ops) {
      return closure$write(closure$rxv.now, ops);
    };
  }
  function calcType$lambda_1(closure$rxv) {
    return function (f, f_0) {
      return closure$rxv.now;
    };
  }
  function calcType(rxv, write) {
    return new PropertyType(void 0, calcType$lambda, calcType$lambda_0(write, rxv), calcType$lambda_1(rxv));
  }
  function SnapshotEvent() {
  }
  function SnapshotEvent$Added(id, index, data) {
    SnapshotEvent.call(this);
    this.id = id;
    this.index = index;
    this.data = data;
  }
  SnapshotEvent$Added.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Added',
    interfaces: [SnapshotEvent]
  };
  function SnapshotEvent$Modified(index, data) {
    SnapshotEvent.call(this);
    this.index = index;
    this.data = data;
  }
  SnapshotEvent$Modified.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Modified',
    interfaces: [SnapshotEvent]
  };
  function SnapshotEvent$Moved(from, to) {
    SnapshotEvent.call(this);
    this.from = from;
    this.to = to;
  }
  SnapshotEvent$Moved.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Moved',
    interfaces: [SnapshotEvent]
  };
  function SnapshotEvent$Removed(index) {
    SnapshotEvent.call(this);
    this.index = index;
  }
  SnapshotEvent$Removed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Removed',
    interfaces: [SnapshotEvent]
  };
  SnapshotEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SnapshotEvent',
    interfaces: []
  };
  function Coroutine$wrapSnapshotEvents$lambda(this$wrapSnapshotEvents_0, closure$create_0, closure$wrapped_0, closure$channel_0, closure$update_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$wrapSnapshotEvents = this$wrapSnapshotEvents_0;
    this.local$closure$create = closure$create_0;
    this.local$closure$wrapped = closure$wrapped_0;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$update = closure$update_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$wrapSnapshotEvents$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$wrapSnapshotEvents$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$wrapSnapshotEvents$lambda.prototype.constructor = Coroutine$wrapSnapshotEvents$lambda;
  Coroutine$wrapSnapshotEvents$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$wrapSnapshotEvents.iterator();
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
              this.state_0 = 6;
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
            var e_0 = this.result_0;
            if (Kotlin.isType(e_0, SnapshotEvent$Added)) {
              var item = this.local$closure$create(e_0.id, e_0.data);
              this.local$closure$wrapped.add_wxm5ur$(e_0.index, item);
              plusAssign(this.local$closure$channel, new ListEvent$Add(e_0.index, item));
            }
             else if (Kotlin.isType(e_0, SnapshotEvent$Modified))
              this.local$closure$update(this.local$closure$wrapped.get_za3lpa$(e_0.index), e_0.data);
            else if (Kotlin.isType(e_0, SnapshotEvent$Moved)) {
              var item_0 = this.local$closure$wrapped.removeAt_za3lpa$(e_0.from);
              this.local$closure$wrapped.add_wxm5ur$(e_0.to, item_0);
              plusAssign(this.local$closure$channel, new ListEvent$Move(e_0.from, e_0.to, item_0));
            }
             else if (Kotlin.isType(e_0, SnapshotEvent$Removed)) {
              var item_1 = this.local$closure$wrapped.removeAt_za3lpa$(e_0.index);
              plusAssign(this.local$closure$channel, new ListEvent$Remove(e_0.index, item_1));
            }

            this.state_0 = 2;
            continue;
          case 6:
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
  function wrapSnapshotEvents$lambda(this$wrapSnapshotEvents_0, closure$create_0, closure$wrapped_0, closure$channel_0, closure$update_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$wrapSnapshotEvents$lambda(this$wrapSnapshotEvents_0, closure$create_0, closure$wrapped_0, closure$channel_0, closure$update_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function wrapSnapshotEvents($receiver, deps, create, update) {
    var channel = Channel(2147483647);
    var wrapped = ArrayList_init_0();
    launch(deps, void 0, void 0, wrapSnapshotEvents$lambda($receiver, create, wrapped, channel, update));
    return channel;
  }
  function listEvents$lambda(closure$collectionWrap, closure$ops) {
    return function (id, data) {
      return toFsDoc_1(closure$collectionWrap.factory(data, closure$ops), closure$collectionWrap, id);
    };
  }
  function listEvents$lambda_0(closure$collectionWrap, closure$ops) {
    return function ($receiver, data) {
      $receiver.rxv.remAssign_11rb$(closure$collectionWrap.factory(data, closure$ops));
      return Unit;
    };
  }
  function listEvents($receiver, deps, collectionWrap, ops) {
    return wrapSnapshotEvents($receiver, deps, listEvents$lambda(collectionWrap, ops), listEvents$lambda_0(collectionWrap, ops));
  }
  function TS() {
  }
  function TS$Value(date) {
    TS.call(this);
    this.date = date;
  }
  TS$Value.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Value',
    interfaces: [TS]
  };
  function TS$Server() {
    TS$Server_instance = this;
    TS.call(this);
  }
  TS$Server.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Server',
    interfaces: [TS]
  };
  var TS$Server_instance = null;
  function TS$Server_getInstance() {
    if (TS$Server_instance === null) {
      new TS$Server();
    }
    return TS$Server_instance;
  }
  TS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TS',
    interfaces: []
  };
  function RefDoc(id, doc) {
    this.id = id;
    this.rxv = new Var(doc);
  }
  RefDoc.prototype.invoke = function () {
    return this.rxv.invoke();
  };
  RefDoc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RefDoc',
    interfaces: []
  };
  function FsIdState() {
  }
  function FsIdState$NoId() {
    FsIdState$NoId_instance = this;
    FsIdState.call(this);
    this.exists_aoytwz$_0 = false;
  }
  Object.defineProperty(FsIdState$NoId.prototype, 'exists', {
    get: function () {
      return this.exists_aoytwz$_0;
    }
  });
  FsIdState$NoId.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NoId',
    interfaces: [FsIdState]
  };
  var FsIdState$NoId_instance = null;
  function FsIdState$NoId_getInstance() {
    if (FsIdState$NoId_instance === null) {
      new FsIdState$NoId();
    }
    return FsIdState$NoId_instance;
  }
  function FsIdState$HasId(id, exists) {
    FsIdState.call(this);
    this.id = id;
    this.exists_848kjo$_0 = exists;
  }
  Object.defineProperty(FsIdState$HasId.prototype, 'exists', {
    get: function () {
      return this.exists_848kjo$_0;
    }
  });
  FsIdState$HasId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HasId',
    interfaces: [FsIdState]
  };
  FsIdState$HasId.prototype.component1 = function () {
    return this.id;
  };
  FsIdState$HasId.prototype.component2 = function () {
    return this.exists;
  };
  FsIdState$HasId.prototype.copy_ivxn3r$ = function (id, exists) {
    return new FsIdState$HasId(id === void 0 ? this.id : id, exists === void 0 ? this.exists : exists);
  };
  FsIdState$HasId.prototype.toString = function () {
    return 'HasId(id=' + Kotlin.toString(this.id) + (', exists=' + Kotlin.toString(this.exists)) + ')';
  };
  FsIdState$HasId.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.exists) | 0;
    return result;
  };
  FsIdState$HasId.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.exists, other.exists)))));
  };
  FsIdState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FsIdState',
    interfaces: []
  };
  function FsId(coll, st) {
    this.coll = coll;
    this.state = new Var(st);
  }
  FsId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FsId',
    interfaces: []
  };
  function FsId_init(dw, exists, $this) {
    $this = $this || Object.create(FsId.prototype);
    FsId.call($this, dw.parent, new FsIdState$HasId(dw.id, exists));
    return $this;
  }
  function get_docWrap($receiver) {
    var st = $receiver.state.now;
    var block$result;
    if (equals(st, FsIdState$NoId_getInstance()))
      throw Error_init('Doc has no id!');
    else if (Kotlin.isType(st, FsIdState$HasId)) {
      block$result = $receiver.coll.doc_61zpoe$(st.id);
    }
     else {
      block$result = Kotlin.noWhenBranchMatched();
    }
    return block$result;
  }
  function get_docWrap_0($receiver) {
    return get_docWrap($receiver.id);
  }
  function toFsId($receiver, state) {
    return new FsId($receiver, state);
  }
  function toFsId_0($receiver, exists) {
    return toFsId($receiver.parent, new FsIdState$HasId($receiver.id, exists));
  }
  function toFsDoc($receiver, id) {
    return new RefDoc(id, $receiver);
  }
  function toFsDoc_0($receiver, cw) {
    return toFsDoc($receiver, toFsId(cw, FsIdState$NoId_getInstance()));
  }
  function toFsDoc_1($receiver, cw, id) {
    return toFsDoc($receiver, toFsId(cw, new FsIdState$HasId(id, true)));
  }
  function get_idOrFail($receiver) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver.id.state.now, FsIdState$HasId) ? tmp$ : throwCCE()).id;
  }
  function new_0($receiver, d, ops) {
    if (d === void 0) {
      d = {};
    }
    return toFsDoc($receiver.parent.factory(d, ops), toFsId_0($receiver, false));
  }
  function Noop$lambda() {
    return Unit;
  }
  var Noop;
  function NoKill$lambda(it) {
    return Noop;
  }
  var NoKill;
  function HasNoKill() {
    HasNoKill_instance = this;
    this.kills_me57hs$_0 = NoKill;
  }
  Object.defineProperty(HasNoKill.prototype, 'kills', {
    get: function () {
      return this.kills_me57hs$_0;
    }
  });
  HasNoKill.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HasNoKill',
    interfaces: [KillsApi]
  };
  var HasNoKill_instance = null;
  function HasNoKill_getInstance() {
    if (HasNoKill_instance === null) {
      new HasNoKill();
    }
    return HasNoKill_instance;
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
  function addedTo($receiver, ks) {
    var remove = add_0(ks, addedTo$lambda($receiver));
    $receiver.invokeOnCompletion_f05bi3$(addedTo$lambda_0(remove));
    return $receiver;
  }
  function add_0($receiver, killable) {
    return $receiver(killable);
  }
  function killables($receiver) {
    var $receiver_0 = new Killables();
    $receiver_0.plusAssign_o14v8n$(add_0($receiver, $receiver_0.kill));
    return $receiver_0;
  }
  function seq($receiver) {
    var $receiver_0 = KillableSeq_init();
    $receiver_0.onKill_8be2vx$.plusAssign_o14v8n$(add_0($receiver, $receiver_0.kill));
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
    this.kills_aez966$_0 = this.killSet;
    this.list_0 = emptyList();
    this.killedFlag_0 = false;
    this.killed_w97mwc$_0 = Killables$killed$lambda(this);
    this.kill_c3gib$_0 = Killables$kill$lambda(this);
  }
  Object.defineProperty(Killables.prototype, 'kills', {
    get: function () {
      return this.kills_aez966$_0;
    }
  });
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
    if (!this.killedFlag_0) {
      this.list_0 = plus(this.list_0, listener);
      tmp$ = once(Killables$add$lambda(this, listener));
    }
     else {
      listener();
      tmp$ = Noop;
    }
    return tmp$;
  };
  Object.defineProperty(Killables.prototype, 'killed', {
    get: function () {
      return this.killed_w97mwc$_0;
    }
  });
  Object.defineProperty(Killables.prototype, 'kill', {
    get: function () {
      return this.kill_c3gib$_0;
    }
  });
  Killables.prototype.killables = function () {
    return killables(this.killSet);
  };
  Killables.prototype.seq = function () {
    var $receiver = KillableSeq_init();
    $receiver.onKill_8be2vx$.plusAssign_o14v8n$(this.add_o14v8n$($receiver.kill));
    return $receiver;
  };
  function Killables$killed$lambda(this$Killables) {
    return function () {
      return this$Killables.killedFlag_0;
    };
  }
  function Killables$kill$lambda(this$Killables) {
    return function () {
      if (!this$Killables.killedFlag_0) {
        this$Killables.killedFlag_0 = true;
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
    interfaces: [HasKillKilledKills, KillsApi]
  };
  function join$lambda(closure$cd) {
    return function () {
      closure$cd.complete_11rb$(Unit);
      return Unit;
    };
  }
  function Coroutine$join($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$join.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$join.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$join.prototype.constructor = Coroutine$join;
  Coroutine$join.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var cd = CompletableDeferred();
            plusAssign_0(this.local$$receiver, join$lambda(cd));
            this.state_0 = 2;
            this.result_0 = cd.await(this);
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
  function join($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$join($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function perform($receiver, action) {
    if (!$receiver.killed()) {
      action();
    }
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
  function KillableSeq(current, onKill) {
    if (current === void 0)
      current = Noop;
    this.current_0 = current;
    this.onKill_8be2vx$ = onKill;
    this.killed_0 = false;
    this.kill = KillableSeq$kill$lambda(this);
    this.assign = KillableSeq$assign$lambda(this);
  }
  KillableSeq.prototype.set_y2pkhw$ = function (k) {
    this.set_o14v8n$(k.kill);
  };
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
  KillableSeq.prototype.remAssign_y2pkhw$ = function (fn) {
    this.set_y2pkhw$(fn);
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
  function Coroutine$toRx$lambda(this$toRx_0, closure$rxv_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$toRx = this$toRx_0;
    this.local$closure$rxv = closure$rxv_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$toRx$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toRx$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toRx$lambda.prototype.constructor = Coroutine$toRx$lambda;
  Coroutine$toRx$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$toRx.iterator();
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
              this.state_0 = 6;
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
            this.local$closure$rxv.remAssign_11rb$(t);
            this.state_0 = 2;
            continue;
          case 6:
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
  function toRx$lambda_0(this$toRx_0, closure$rxv_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$toRx$lambda(this$toRx_0, closure$rxv_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function toRx_0($receiver, deps, initial) {
    var rxv = new Var(initial);
    launch(deps, void 0, void 0, toRx$lambda_0($receiver, rxv));
    return rxv;
  }
  function Coroutine$mapAsync$calc(closure$kseq_0, closure$fn_0, t_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$kseq = closure$kseq_0;
    this.local$closure$fn = closure$fn_0;
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
            this.result_0 = this.local$closure$fn(this.local$closure$kseq.killables(), this.local$t, this);
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
  function mapAsync$calc(closure$kseq_0, closure$fn_0) {
    return function (t_0, continuation_0, suspended) {
      var instance = new Coroutine$mapAsync$calc(closure$kseq_0, closure$fn_0, t_0, continuation_0);
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
  function Coroutine$mapAsync($receiver_0, deps_0, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$calc = void 0;
    this.local$$receiver = $receiver_0;
    this.local$deps = deps_0;
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
            var kseq = seq(this.local$deps.kills);
            this.local$calc = mapAsync$calc(kseq, this.local$fn);
            this.state_0 = 2;
            this.result_0 = this.local$calc(this.local$$receiver.now, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var rxv = new Var(this.result_0);
            var ch = toChannelLater(this.local$$receiver, this.local$deps);
            launch(this.local$deps, void 0, void 0, mapAsync$lambda(ch, this.local$calc, rxv));
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
  function mapAsync($receiver_0, deps_0, fn_0, continuation_0, suspended) {
    var instance = new Coroutine$mapAsync($receiver_0, deps_0, fn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
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
  function RxCalc(ks, fn, killOrder) {
    RxCalc$Companion_getInstance();
    if (killOrder === void 0)
      killOrder = RxCalc$Companion_getInstance().KillFirst;
    RxChild.call(this);
    this.fn_0 = fn;
    this.killOrder = killOrder;
    this.rx_kwbhe1$_0 = this.rx_kwbhe1$_0;
    this.kseq_0 = seq(ks);
  }
  function RxCalc$Companion() {
    RxCalc$Companion_instance = this;
    this.KillFirst = RxCalc$Companion$KillFirst$lambda;
    this.KillLast = RxCalc$Companion$KillLast$lambda;
  }
  function RxCalc$Companion$KillFirst$lambda(process, kill) {
    kill();
    process();
    return Unit;
  }
  function RxCalc$Companion$KillLast$lambda(process, kill) {
    process();
    kill();
    return Unit;
  }
  RxCalc$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RxCalc$Companion_instance = null;
  function RxCalc$Companion_getInstance() {
    if (RxCalc$Companion_instance === null) {
      new RxCalc$Companion();
    }
    return RxCalc$Companion_instance;
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
  function RxCalc$recalc$lambda(this$RxCalc, closure$kv) {
    return function () {
      this$RxCalc.rx.setCurrentValue_1c3m6u$(closure$kv.value);
      return Unit;
    };
  }
  RxCalc.prototype.recalc = function () {
    var kv = this.recalcValue();
    this.killOrder(RxCalc$recalc$lambda(this, kv), kv.kill);
  };
  function RxCalc$recalcValue$lambda$lambda(this$RxCalc, closure$cks) {
    return function () {
      this$RxCalc.kseq_0.remAssign_o14v8n$(closure$cks.kill);
      return Unit;
    };
  }
  RxCalc.prototype.recalcValue = function () {
    this.disconnectAll();
    var savedCurrent = currentChild;
    currentChild = this;
    try {
      var cks = new Killables();
      return new KillableValue(this.fn_0(cks), RxCalc$recalcValue$lambda$lambda(this, cks));
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
  function Obs(ks, parent, killStart, killOrder, fn) {
    if (killStart === void 0)
      killStart = Obs_init$lambda;
    if (killOrder === void 0)
      killOrder = RxCalc$Companion_getInstance().KillFirst;
    this.parent_0 = parent;
    this.killOrder = killOrder;
    this.fn_0 = fn;
    plusAssign_0(ks, Obs_init$lambda_0(this));
    var $receiver = seq(ks);
    $receiver.remAssign_o14v8n$(killStart);
    this.kseq = $receiver;
  }
  function Obs$fire$lambda$lambda(this$Obs, this$) {
    return function () {
      this$Obs.fn_0(this$, this$Obs.parent_0.now);
      return Unit;
    };
  }
  function Obs$fire$lambda$lambda_0(this$Obs, this$) {
    return function () {
      this$Obs.kseq.remAssign_o14v8n$(this$.kill);
      return Unit;
    };
  }
  Obs.prototype.fire = function () {
    var $receiver = new Killables();
    this.killOrder(Obs$fire$lambda$lambda(this, $receiver), Obs$fire$lambda$lambda_0(this, $receiver));
  };
  function Obs_init$lambda() {
    return Unit;
  }
  function Obs_init$lambda_0(this$Obs) {
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
  RxIface.prototype.map_492dlc$ = function (ks, fn) {
    return Rx_init_0(ks, RxIface$map$lambda(fn, this));
  };
  RxIface.prototype.forEach_aaomyj$ = function (ks, fn) {
    this.forEach_vlp88o$(ks, RxCalc$Companion_getInstance().KillFirst, fn);
  };
  function RxIface$forEach$lambda$lambda(closure$fn, closure$it, this$) {
    return function () {
      closure$fn(this$, closure$it);
      return Unit;
    };
  }
  function RxIface$forEach$lambda$lambda_0(closure$ks0) {
    return function () {
      closure$ks0.kill();
      return Unit;
    };
  }
  function RxIface$forEach$lambda(closure$killOrder, closure$fn, closure$ks0) {
    return function ($receiver, it) {
      closure$killOrder(RxIface$forEach$lambda$lambda(closure$fn, it, $receiver), RxIface$forEach$lambda$lambda_0(closure$ks0));
      return Unit;
    };
  }
  RxIface.prototype.forEach_vlp88o$ = function (ks, killOrder, fn) {
    var ks0 = killables(ks);
    fn(ks0, this.now);
    return this.forEachLater_cksb0z$(ks, ks0.kill, killOrder, RxIface$forEach$lambda(killOrder, fn, ks0));
  };
  function RxIface$forEachLater$lambda() {
    return Unit;
  }
  RxIface.prototype.forEachLater_aaomyj$ = function (ks, fn) {
    this.forEachLater_cksb0z$(ks, RxIface$forEachLater$lambda, RxCalc$Companion_getInstance().KillFirst, fn);
  };
  function RxIface$forEachLater$lambda_0() {
    return Unit;
  }
  RxIface.prototype.forEachLater_cksb0z$ = function (ks, killStart, killOrder, fn, callback$default) {
    if (killStart === void 0)
      killStart = RxIface$forEachLater$lambda_0;
    if (killOrder === void 0)
      killOrder = RxCalc$Companion_getInstance().KillFirst;
    callback$default ? callback$default(ks, killStart, killOrder, fn) : this.forEachLater_cksb0z$$default(ks, killStart, killOrder, fn);
  };
  function RxIface$fold$lambda(closure$fn, closure$z) {
    return function ($receiver, it) {
      closure$z.v = closure$fn(closure$z.v, it);
      return Unit;
    };
  }
  RxIface.prototype.fold_h2yxzx$ = function (ks, z0, fn) {
    var z = {v: z0};
    return this.forEach_aaomyj$(ks, RxIface$fold$lambda(fn, z));
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
    this.forEach_aaomyj$(ks, RxIface$foldKillsTrigger$lambda_0(z, fn));
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
    this.forEach_aaomyj$(ks, RxIface$foldKills$lambda(z, fn));
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
    this.forEach_aaomyj$(ks, RxIface$foldKills$lambda_1(fn, z));
    plusAssign_0(ks, RxIface$foldKills$lambda_2(z));
  };
  function RxIface$foldLater$lambda(closure$fn, closure$z) {
    return function ($receiver, it) {
      closure$z.v = closure$fn($receiver, closure$z.v, it);
      return Unit;
    };
  }
  RxIface.prototype.foldLater_94stmo$ = function (ks, z0, fn) {
    var z = {v: z0};
    this.forEachLater_aaomyj$(ks, RxIface$foldLater$lambda(fn, z));
  };
  function RxIface$onChange$lambda(closure$fn) {
    return function ($receiver, old, new_0) {
      closure$fn($receiver, old, new_0);
      return new_0;
    };
  }
  RxIface.prototype.onChange_naxq84$ = function (ks, fn) {
    return this.foldLater_94stmo$(ks, this.now, RxIface$onChange$lambda(fn));
  };
  function RxIface$onOff$lambda(closure$off, closure$on) {
    return function ($receiver, old, new_0) {
      closure$off(old);
      closure$on(new_0);
      return Unit;
    };
  }
  RxIface.prototype.onOff_nf0d6g$ = function (ks, on, off) {
    on(this.now);
    this.onChange_naxq84$(ks, RxIface$onOff$lambda(off, on));
  };
  function RxIface$off$lambda(closure$offFn) {
    return function ($receiver, old, f) {
      closure$offFn(old);
      return Unit;
    };
  }
  RxIface.prototype.off_sysl1e$ = function (ks, offFn) {
    this.onChange_naxq84$(ks, RxIface$off$lambda(offFn));
  };
  RxIface.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RxIface',
    interfaces: []
  };
  function forEach($receiver, deps, fn) {
    $receiver.forEach_aaomyj$(deps.kills, fn);
  }
  function feedTo$lambda_1(closure$target) {
    return function ($receiver, it) {
      closure$target.now = it;
      return Unit;
    };
  }
  function feedTo_1($receiver, deps, target) {
    forEach($receiver, deps, feedTo$lambda_1(target));
  }
  function forEachLater($receiver, deps, fn) {
    $receiver.forEachLater_aaomyj$(deps.kills, fn);
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
  function incremented($receiver, deps) {
    $receiver.transform_ru8m0w$(incremented$lambda);
    plusAssign_0(deps.kills, incremented$lambda_0($receiver));
  }
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
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  RxVal.prototype.invoke = function () {
    if (!(currentChild != null)) {
      var message = 'RX invoked without a context!';
      throw IllegalArgumentException_init(message.toString());
    }
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
  RxVal.prototype.forEachLater_cksb0z$$default = function (ks, killStart, killOrder, fn) {
    var obs = new Obs(ks, this, killStart, killOrder, fn);
    this.observers_8be2vx$.add_11rb$(obs);
  };
  RxVal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxVal',
    interfaces: [RxIface, RxParent]
  };
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
  function add_1($receiver, v) {
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
    return function ($receiver, old, new_0) {
      closure$fn(SetDiff$Companion_getInstance().of_2xberu$(old, new_0));
      return Unit;
    };
  }
  function diffs($receiver, ks, fn) {
    fn(SetDiff$Companion_getInstance().of_2xberu$(None_getInstance(), $receiver.now));
    return $receiver.onChange_naxq84$(ks, diffs$lambda(fn));
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
    var kv = calc.recalcValue();
    kv.kill();
    Rx.call($this, ks, kv.value, calc);
    return $this;
  }
  function Rx_init_0(ks, fn, $this) {
    $this = $this || Object.create(Rx.prototype);
    Rx_init(ks, new RxCalc(ks, fn), $this);
    return $this;
  }
  function Rx_init_1(ks, killFirst, fn, $this) {
    $this = $this || Object.create(Rx.prototype);
    Rx_init(ks, new RxCalc(ks, fn, killFirst ? RxCalc$Companion_getInstance().KillFirst : RxCalc$Companion_getInstance().KillLast), $this);
    return $this;
  }
  function rx(deps, fn) {
    return Rx_init_0(deps.kills, fn);
  }
  function HasRx() {
  }
  HasRx.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasRx',
    interfaces: []
  };
  function HasVar() {
  }
  HasVar.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasVar',
    interfaces: [HasRx]
  };
  function get_readOnly($receiver) {
    return $receiver;
  }
  function Var(v) {
    RxVal.call(this, v);
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
  Var.prototype.remAssign_11rb$ = function (v) {
    this.now = v;
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
  function rxClass$lambda_1(closure$style, this$rxClass) {
    return function ($receiver, it) {
      if (it)
        addClass(this$rxClass, [closure$style]);
      else
        removeClass(this$rxClass, [closure$style]);
      return Unit;
    };
  }
  function rxClass_1($receiver, deps, style, fn) {
    fn.forEach_aaomyj$(deps.kills, rxClass$lambda_1(style, $receiver));
  }
  function rxClass$lambda_2(closure$fn) {
    return function ($receiver) {
      return closure$fn($receiver);
    };
  }
  function rxClass_2($receiver, deps, style, fn) {
    var rxv = rx(deps, rxClass$lambda_2(fn));
    rxClass_1($receiver, deps, style, rxv);
  }
  function toRx_1($receiver, ks) {
    return Rx_init_0(ks, $receiver);
  }
  function toChannelLater$lambda(closure$ch) {
    return function () {
      closure$ch.close_dbl4no$();
      return Unit;
    };
  }
  function toChannelLater$lambda_0(closure$ch) {
    return function ($receiver, t) {
      closure$ch.offer_11rb$(t);
      return Unit;
    };
  }
  function toChannelLater($receiver, deps) {
    var ch = Channel(2147483647);
    plusAssign_0(deps.kills, toChannelLater$lambda(ch));
    forEachLater($receiver, deps, toChannelLater$lambda_0(ch));
    return ch;
  }
  function rx_0($receiver, fn) {
    return Rx_init_0($receiver, fn);
  }
  function get_asVar($receiver) {
    return new Var($receiver);
  }
  var toName = defineInlineFunction('appsimake-commonshr.rx.toName_ojcv29$', wrapFunction(function () {
    var linked = _.rx.linked_g2t76q$;
    function toName$lambda(it) {
      return it.name;
    }
    function toName$lambda_0(typeClosure$E, isE) {
      return function (it) {
        return typeClosure$E.valueOf_61zpoe$(it);
      };
    }
    return function (E_0, isE, $receiver, deps) {
      return linked($receiver, deps, toName$lambda, toName$lambda_0(E_0, isE));
    };
  }));
  function linked$lambda$lambda(this$, closure$read) {
    return function ($receiver, it) {
      this$.remAssign_11rb$(closure$read(it));
      return Unit;
    };
  }
  function linked$lambda$lambda_0(this$linked, closure$write) {
    return function ($receiver, it) {
      this$linked.remAssign_11rb$(closure$write(it));
      return Unit;
    };
  }
  function linked($receiver, deps, read, write) {
    var $receiver_0 = new Var(read($receiver.now));
    forEach($receiver, deps, linked$lambda$lambda($receiver_0, read));
    forEach($receiver_0, deps, linked$lambda$lambda_0($receiver, write));
    return $receiver_0;
  }
  function rx$lambda(closure$fn) {
    return function ($receiver) {
      return closure$fn();
    };
  }
  function rx_1($receiver, deps, fn) {
    rx_2($receiver, deps, Rx_init_0(deps.kills, rx$lambda(fn)));
  }
  function rx$lambda_0(this$rx) {
    return function ($receiver, it) {
      this$rx(it);
      return Unit;
    };
  }
  function rx_2($receiver, deps, fn) {
    fn.forEach_aaomyj$(deps.kills, rx$lambda_0($receiver));
  }
  function add$lambda_0(closure$item) {
    return function (it) {
      return plus(it, closure$item);
    };
  }
  function add$lambda$lambda_1(closure$item) {
    return function (it) {
      return minus(it, closure$item);
    };
  }
  function add$lambda_1(closure$item, this$add) {
    return function () {
      this$add.transform_ru8m0w$(add$lambda$lambda_1(closure$item));
      return Unit;
    };
  }
  function add_2($receiver, deps, item) {
    $receiver.transform_ru8m0w$(add$lambda_0(item));
    plusAssign_0(deps.kills, add$lambda_1(item, $receiver));
  }
  function oldKilled$lambda$lambda(closure$kseq) {
    return function ($receiver, it) {
      closure$kseq.remAssign_o14v8n$(it.kill);
      return Unit;
    };
  }
  function oldKilled($receiver, deps) {
    var kseq = seq(deps.kills);
    forEach($receiver, deps, oldKilled$lambda$lambda(kseq));
    return $receiver;
  }
  function oldKilledOpt$lambda$lambda(closure$kseq) {
    return function ($receiver, it) {
      var tmp$;
      closure$kseq.remAssign_o14v8n$((tmp$ = it != null ? it.kill : null) != null ? tmp$ : Noop);
      return Unit;
    };
  }
  function oldKilledOpt($receiver, deps) {
    var kseq = seq(deps.kills);
    forEach($receiver, deps, oldKilledOpt$lambda$lambda(kseq));
    return $receiver;
  }
  function RxList() {
  }
  RxList.prototype.addListener_6zudpe$ = function (listener) {
    return this.addListener_icpdhz$(listener, true);
  };
  function RxList$Listener(added, removed, moved) {
    if (added === void 0)
      added = RxList$RxList$Listener_init$lambda;
    if (removed === void 0)
      removed = RxList$RxList$Listener_init$lambda_0;
    if (moved === void 0)
      moved = RxList$RxList$Listener_init$lambda_1;
    this.added = added;
    this.removed = removed;
    this.moved = moved;
  }
  function RxList$RxList$Listener_init$lambda(f, f_0) {
    return Unit;
  }
  function RxList$RxList$Listener_init$lambda_0(f, f_0) {
    return Unit;
  }
  function RxList$RxList$Listener_init$lambda_1(f, f_0) {
    return Unit;
  }
  RxList$Listener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Listener',
    interfaces: []
  };
  RxList$Listener.prototype.component1 = function () {
    return this.added;
  };
  RxList$Listener.prototype.component2 = function () {
    return this.removed;
  };
  RxList$Listener.prototype.component3 = function () {
    return this.moved;
  };
  RxList$Listener.prototype.copy_byo1lv$ = function (added, removed, moved) {
    return new RxList$Listener(added === void 0 ? this.added : added, removed === void 0 ? this.removed : removed, moved === void 0 ? this.moved : moved);
  };
  RxList$Listener.prototype.toString = function () {
    return 'Listener(added=' + Kotlin.toString(this.added) + (', removed=' + Kotlin.toString(this.removed)) + (', moved=' + Kotlin.toString(this.moved)) + ')';
  };
  RxList$Listener.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.added) | 0;
    result = result * 31 + Kotlin.hashCode(this.removed) | 0;
    result = result * 31 + Kotlin.hashCode(this.moved) | 0;
    return result;
  };
  RxList$Listener.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.added, other.added) && Kotlin.equals(this.removed, other.removed) && Kotlin.equals(this.moved, other.moved)))));
  };
  RxList.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RxList',
    interfaces: [List]
  };
  function Collector() {
  }
  Collector.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Collector',
    interfaces: []
  };
  function collector$ObjectLiteral(closure$fn) {
    this.closure$fn = closure$fn;
  }
  collector$ObjectLiteral.prototype.plusAssign_11rb$ = function (t) {
    this.closure$fn(t);
  };
  collector$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Collector]
  };
  function collector(fn) {
    return new collector$ObjectLiteral(fn);
  }
  function events$lambda$lambda(this$) {
    return function (it) {
      this$.offer_11rb$(it);
      return Unit;
    };
  }
  function Coroutine$events$lambda(closure$deps_0, this$events_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$deps = closure$deps_0;
    this.local$this$events = this$events_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$events$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$events$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$events$lambda.prototype.constructor = Coroutine$events$lambda;
  Coroutine$events$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            plusAssign_0(this.local$closure$deps.kills, events_0(this.local$this$events, collector(events$lambda$lambda(this.local$$receiver))));
            this.state_0 = 2;
            this.result_0 = join(this.local$closure$deps.kills, this);
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
  function events$lambda(closure$deps_0, this$events_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$events$lambda(closure$deps_0, this$events_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function events($receiver, deps) {
    return produce(deps, void 0, 2147483647, events$lambda(deps, $receiver));
  }
  function eventsEmitter$lambda$lambda(closure$cb) {
    return function (it) {
      closure$cb(it);
      return Unit;
    };
  }
  function eventsEmitter$lambda(closure$all, this$eventsEmitter) {
    return function (cb) {
      return events_0(this$eventsEmitter, collector(eventsEmitter$lambda$lambda(cb)), closure$all);
    };
  }
  function eventsEmitter($receiver, all) {
    if (all === void 0)
      all = true;
    return eventsEmitter$lambda(all, $receiver);
  }
  function events$lambda_0(closure$channel) {
    return function (i, t) {
      closure$channel.plusAssign_11rb$(new ListEvent$Add(i, t));
      return Unit;
    };
  }
  function events$lambda_1(closure$channel, this$events) {
    return function (from, to) {
      closure$channel.plusAssign_11rb$(new ListEvent$Move(from, to, this$events.get_za3lpa$(to)));
      return Unit;
    };
  }
  function events$lambda_2(closure$channel) {
    return function (i, t) {
      closure$channel.plusAssign_11rb$(new ListEvent$Remove(i, t));
      return Unit;
    };
  }
  function events_0($receiver, channel, all) {
    if (all === void 0)
      all = true;
    return $receiver.addListener_icpdhz$(new RxList$Listener(events$lambda_0(channel), events$lambda_2(channel), events$lambda_1(channel, $receiver)), all);
  }
  function RxMutableList(items) {
    AbstractMutableList.call(this);
    this.sizeVar_0 = new Var(0);
    this.sizeRx_jrq41x$_0 = this.sizeVar_0;
    this.isEmptyRx_cy1uhj$_0 = Rx_init_0(NoKill, RxMutableList$isEmptyRx$lambda(this));
    this.delegate_0 = ArrayList_init_0();
    this.listeners_0 = emptyList();
    this.emitter_sy0h38$_0 = lazy(RxMutableList$emitter$lambda(this));
    this.addAll_brywnq$(items);
    this.allRx_tqrlbp$_0 = lazy(RxMutableList$allRx$lambda(this));
  }
  Object.defineProperty(RxMutableList.prototype, 'sizeRx', {
    get: function () {
      return this.sizeRx_jrq41x$_0;
    }
  });
  Object.defineProperty(RxMutableList.prototype, 'isEmptyRx', {
    get: function () {
      return this.isEmptyRx_cy1uhj$_0;
    }
  });
  function RxMutableList$addListener$lambda(this$RxMutableList, closure$listener) {
    return function () {
      this$RxMutableList.listeners_0 = minus(this$RxMutableList.listeners_0, closure$listener);
      return Unit;
    };
  }
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  RxMutableList.prototype.addListener_icpdhz$ = function (listener, all) {
    this.listeners_0 = plus(this.listeners_0, listener);
    if (all) {
      var action = listener.added;
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = this.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        action(checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0)), item);
      }
    }
    return once(RxMutableList$addListener$lambda(this, listener));
  };
  Object.defineProperty(RxMutableList.prototype, 'size', {
    get: function () {
      return this.delegate_0.size;
    }
  });
  RxMutableList.prototype.add_wxm5ur$ = function (index, element) {
    this.delegate_0.add_wxm5ur$(index, element);
    this.sizeVar_0.now = this.size;
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element_0 = tmp$.next();
      element_0.added(index, element);
    }
  };
  RxMutableList.prototype.removeAt_za3lpa$ = function (index) {
    var v = this.delegate_0.removeAt_za3lpa$(index);
    this.sizeVar_0.now = this.size;
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.removed(index, v);
    }
    return v;
  };
  RxMutableList.prototype.set_wxm5ur$ = function (index, element) {
    var v = this.delegate_0.set_wxm5ur$(index, element);
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element_0 = tmp$.next();
      element_0.removed(index, v);
      element_0.added(index, element);
    }
    return v;
  };
  RxMutableList.prototype.get_za3lpa$ = function (index) {
    return this.delegate_0.get_za3lpa$(index);
  };
  RxMutableList.prototype.move_vux9f0$ = function (from, to) {
    var v = this.delegate_0.removeAt_za3lpa$(from);
    this.delegate_0.add_wxm5ur$(to, v);
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.moved(from, to);
    }
  };
  Object.defineProperty(RxMutableList.prototype, 'emitter', {
    get: function () {
      return this.emitter_sy0h38$_0.value;
    }
  });
  Object.defineProperty(RxMutableList.prototype, 'allRx', {
    get: function () {
      return this.allRx_tqrlbp$_0.value;
    }
  });
  function RxMutableList$isEmptyRx$lambda(this$RxMutableList) {
    return function ($receiver) {
      return this$RxMutableList.sizeVar_0.invoke() === 0;
    };
  }
  function RxMutableList$emitter$lambda$lambda(this$RxMutableList) {
    return function () {
      var $receiver = this$RxMutableList;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(new SetAdded(item));
      }
      return destination;
    };
  }
  function RxMutableList$emitter$lambda$lambda_0(closure$e) {
    return function (f, item) {
      closure$e.emit_11rb$(new SetAdded(item));
      return Unit;
    };
  }
  function RxMutableList$emitter$lambda$lambda_1(closure$e) {
    return function (f, item) {
      closure$e.emit_11rb$(new SetRemoved(item));
      return Unit;
    };
  }
  function RxMutableList$emitter$lambda(this$RxMutableList) {
    return function () {
      var e = new Emitter(RxMutableList$emitter$lambda$lambda(this$RxMutableList));
      this$RxMutableList.addListener_6zudpe$(new RxList$Listener(RxMutableList$emitter$lambda$lambda_0(e), RxMutableList$emitter$lambda$lambda_1(e)));
      return e;
    };
  }
  function RxMutableList$allRx$lambda$lambda(closure$rxv, this$RxMutableList) {
    return function (it) {
      closure$rxv.remAssign_11rb$(toList_1(this$RxMutableList));
      return Unit;
    };
  }
  function RxMutableList$allRx$lambda(this$RxMutableList) {
    return function () {
      var rxv = new Var(toList_1(this$RxMutableList));
      plusAssign_0(eventsEmitter(this$RxMutableList), RxMutableList$allRx$lambda$lambda(rxv, this$RxMutableList));
      return rxv;
    };
  }
  RxMutableList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxMutableList',
    interfaces: [RxList, AbstractMutableList]
  };
  function RxMutableList_init($this) {
    $this = $this || Object.create(RxMutableList.prototype);
    RxMutableList.call($this, emptyList());
    return $this;
  }
  function sorted$Holder(closure$kills, closure$key, item) {
    this.item = item;
    this.ks = killables(closure$kills);
    this.kills_lbq1q$_0 = this.ks.kills;
    this.krx = this.rx_y6x17j$(sorted$Holder$krx$lambda(closure$key, this));
    this.keyValue = this.krx.now;
    this.orderedIndex = 0;
  }
  Object.defineProperty(sorted$Holder.prototype, 'kills', {
    get: function () {
      return this.kills_lbq1q$_0;
    }
  });
  sorted$Holder.prototype.dec = function () {
    this.orderedIndex = this.orderedIndex - 1 | 0;
  };
  sorted$Holder.prototype.inc = function () {
    this.orderedIndex = this.orderedIndex + 1 | 0;
  };
  function sorted$Holder$krx$lambda(closure$key, this$Holder) {
    return function ($receiver) {
      return closure$key($receiver, this$Holder.item);
    };
  }
  sorted$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: [KillsApi]
  };
  function sorted$find$lambda(it) {
    return it.keyValue;
  }
  var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
  var binarySearch = Kotlin.kotlin.collections.binarySearch_sr7qim$;
  function binarySearchBy$lambda(closure$selector, closure$key) {
    return function (it) {
      return compareValues(closure$selector(it), closure$key);
    };
  }
  function sorted$find(closure$ordered) {
    return function ($receiver) {
      var $receiver_0 = closure$ordered;
      var key = $receiver.keyValue;
      var i = binarySearch($receiver_0, 0, $receiver_0.size, binarySearchBy$lambda(sorted$find$lambda, key));
      var $receiver_1 = i < 0 ? (-i | 0) - 1 | 0 : i;
      $receiver.orderedIndex = $receiver_1;
      return $receiver_1;
    };
  }
  function sorted$lambda$lambda$lambda(this$, closure$ordered, closure$find, closure$sorted) {
    return function ($receiver, kv) {
      this$.keyValue = kv;
      var from = this$.orderedIndex;
      closure$ordered.removeAt_za3lpa$(from);
      closure$find(this$);
      var to = this$.orderedIndex;
      closure$ordered.add_wxm5ur$(to, this$);
      if (from !== to) {
        closure$sorted.move_vux9f0$(from, to);
        if (from < to) {
          var tmp$;
          tmp$ = closure$ordered.subList_vux9f0$(from, to).iterator();
          while (tmp$.hasNext()) {
            var element = tmp$.next();
            element.dec();
          }
        }
         else if (to < from) {
          var tmp$_0;
          tmp$_0 = closure$ordered.subList_vux9f0$(to + 1 | 0, from + 1 | 0).iterator();
          while (tmp$_0.hasNext()) {
            var element_0 = tmp$_0.next();
            element_0.inc();
          }
        }
      }
      return Unit;
    };
  }
  function sorted$lambda(closure$kills, closure$key, closure$original, closure$find, closure$ordered, closure$sorted) {
    return function (e) {
      if (Kotlin.isType(e, ListEvent$Add)) {
        var $receiver = new sorted$Holder(closure$kills, closure$key, e.item);
        var closure$original_0 = closure$original;
        var closure$find_0 = closure$find;
        var closure$ordered_0 = closure$ordered;
        var closure$sorted_0 = closure$sorted;
        closure$original_0.add_wxm5ur$(e.index, $receiver);
        closure$find_0($receiver);
        closure$ordered_0.add_wxm5ur$($receiver.orderedIndex, $receiver);
        closure$sorted_0.add_wxm5ur$($receiver.orderedIndex, $receiver.item);
        var tmp$;
        tmp$ = drop(closure$ordered_0, $receiver.orderedIndex + 1 | 0).iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          element.inc();
        }
        $receiver.krx.forEachLater_aaomyj$($receiver.kills, sorted$lambda$lambda$lambda($receiver, closure$ordered_0, closure$find_0, closure$sorted_0));
      }
       else if (Kotlin.isType(e, ListEvent$Move))
        closure$original.add_wxm5ur$(e.to, closure$original.removeAt_za3lpa$(e.from));
      else if (Kotlin.isType(e, ListEvent$Remove)) {
        var $receiver_0 = closure$original.removeAt_za3lpa$(e.index);
        var closure$sorted_1 = closure$sorted;
        var closure$ordered_1 = closure$ordered;
        closure$sorted_1.removeAt_za3lpa$($receiver_0.orderedIndex);
        closure$ordered_1.removeAt_za3lpa$($receiver_0.orderedIndex);
        var tmp$_0;
        tmp$_0 = drop(closure$ordered_1, $receiver_0.orderedIndex).iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          element_0.dec();
        }
        $receiver_0.ks.kill();
      }
       else
        Kotlin.noWhenBranchMatched();
      return Unit;
    };
  }
  function sorted($receiver, kills, key) {
    var sorted = RxMutableList_init();
    var original = ArrayList_init_0();
    var ordered = ArrayList_init_0();
    var find = sorted$find(ordered);
    plusAssign_0(kills, eventsEmitter($receiver)(sorted$lambda(kills, key, original, find, ordered, sorted)));
    return sorted;
  }
  function map$lambda(k) {
    k.kill();
    return Unit;
  }
  function map_2($receiver, killables, create) {
    return map_3($receiver, killables, create, map$lambda);
  }
  function map$lambda_0(closure$result, closure$destroy) {
    return function () {
      var $receiver = closure$result;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        closure$destroy(element);
      }
      return Unit;
    };
  }
  function map$lambda_1(closure$result, closure$create) {
    return function (index, element) {
      closure$result.add_wxm5ur$(index, closure$create(element));
      return Unit;
    };
  }
  function map$lambda_2(closure$destroy, closure$result) {
    return function (index, f) {
      closure$destroy(closure$result.removeAt_za3lpa$(index));
      return Unit;
    };
  }
  function map$lambda_3(closure$result) {
    return function (from, to) {
      closure$result.move_vux9f0$(from, to);
      return Unit;
    };
  }
  function map_3($receiver, killables, create, destroy) {
    var result = RxMutableList_init();
    plusAssign_0(killables, map$lambda_0(result, destroy));
    plusAssign_0(killables, $receiver.addListener_6zudpe$(new RxList$Listener(map$lambda_1(result, create), map$lambda_2(destroy, result), map$lambda_3(result))));
    return result;
  }
  function map$Holder(kill) {
    this.kill = kill;
  }
  map$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: []
  };
  function map$lambda_4(closure$killables, closure$mapper, closure$result, closure$holders) {
    return function (index, element) {
      var ks = killables(closure$killables);
      var node = closure$mapper(element, ks.killSet);
      closure$result.add_wxm5ur$(index, node);
      closure$holders.add_wxm5ur$(index, new map$Holder(ks.kill));
      return Unit;
    };
  }
  function map$lambda_5(closure$result, closure$holders) {
    return function (index, f) {
      closure$result.removeAt_za3lpa$(index);
      var holder = closure$holders.removeAt_za3lpa$(index);
      holder.kill();
      return Unit;
    };
  }
  function map$lambda_6(closure$result, closure$holders) {
    return function (from, to) {
      closure$result.move_vux9f0$(from, to);
      closure$holders.add_wxm5ur$(to, closure$holders.removeAt_za3lpa$(from));
      return Unit;
    };
  }
  function map_4($receiver, killables, mapper) {
    var result = RxMutableList_init();
    var holders = ArrayList_init_0();
    plusAssign_0(killables, $receiver.addListener_6zudpe$(new RxList$Listener(map$lambda_4(killables, mapper, result, holders), map$lambda_5(result, holders), map$lambda_6(result, holders))));
    return result;
  }
  function MappedListenableListConfig(list, killables, mapper) {
    this.list = list;
    this.killables = killables;
    this.mapper = mapper;
  }
  MappedListenableListConfig.prototype.build = function () {
    return map_4(this.list, this.killables, this.mapper);
  };
  MappedListenableListConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MappedListenableListConfig',
    interfaces: []
  };
  MappedListenableListConfig.prototype.component1 = function () {
    return this.list;
  };
  MappedListenableListConfig.prototype.component2 = function () {
    return this.killables;
  };
  MappedListenableListConfig.prototype.component3 = function () {
    return this.mapper;
  };
  MappedListenableListConfig.prototype.copy_uccwnl$ = function (list, killables, mapper) {
    return new MappedListenableListConfig(list === void 0 ? this.list : list, killables === void 0 ? this.killables : killables, mapper === void 0 ? this.mapper : mapper);
  };
  MappedListenableListConfig.prototype.toString = function () {
    return 'MappedListenableListConfig(list=' + Kotlin.toString(this.list) + (', killables=' + Kotlin.toString(this.killables)) + (', mapper=' + Kotlin.toString(this.mapper)) + ')';
  };
  MappedListenableListConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.list) | 0;
    result = result * 31 + Kotlin.hashCode(this.killables) | 0;
    result = result * 31 + Kotlin.hashCode(this.mapper) | 0;
    return result;
  };
  MappedListenableListConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.list, other.list) && Kotlin.equals(this.killables, other.killables) && Kotlin.equals(this.mapper, other.mapper)))));
  };
  function FilteredListenableListConfig(list, killables, filterKey, input, filter) {
    this.list = list;
    this.killables = killables;
    this.filterKey = filterKey;
    this.input = input;
    this.filter = filter;
  }
  function FilteredListenableListConfig$build$Holder(closure$result, this$FilteredListenableListConfig, holders, item, holdersIndex) {
    this.closure$result = closure$result;
    this.this$FilteredListenableListConfig = this$FilteredListenableListConfig;
    this.holders = holders;
    this.item = item;
    this.holdersIndex = holdersIndex;
    this.resultIndex = None_getInstance();
    this.resultsBefore = 0;
    this.ks = killables(this$FilteredListenableListConfig.killables);
    this.key = this$FilteredListenableListConfig.filterKey(this.item, this.ks.killSet);
    this.holders.add_wxm5ur$(this.holdersIndex, this);
    var $receiver = this.holders.listIterator_za3lpa$(this.holdersIndex + 1 | 0);
    while ($receiver.hasNext()) {
      var element = $receiver.next();
      element.holdersIndex = element.holdersIndex + 1 | 0;
    }
    this.recalcResultsBefore();
    this.key.forEach_aaomyj$(this.ks.killSet, FilteredListenableListConfig$build$FilteredListenableListConfig$build$Holder_init$lambda(this));
  }
  function FilteredListenableListConfig$build$Holder$resultsIndexAfter$lambda(it) {
    return it + 1 | 0;
  }
  FilteredListenableListConfig$build$Holder.prototype.resultsIndexAfter = function () {
    return this.resultIndex.map_2o04qz$(FilteredListenableListConfig$build$Holder$resultsIndexAfter$lambda).getOrDefault_11rb$(this.resultsBefore);
  };
  FilteredListenableListConfig$build$Holder.prototype.recalcResultsBefore = function () {
    this.resultsBefore = this.holdersIndex === 0 ? 0 : this.holders.get_za3lpa$(this.holdersIndex - 1 | 0).resultsIndexAfter();
  };
  function FilteredListenableListConfig$build$Holder$move$forRange(closure$range, this$Holder) {
    return function (fn) {
      var $receiver = closure$range;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        fn(this$Holder.holders.get_za3lpa$(element));
      }
    };
  }
  function FilteredListenableListConfig$build$Holder$move$lambda(h) {
    h.holdersIndex = h.holdersIndex - 1 | 0;
    return Unit;
  }
  function FilteredListenableListConfig$build$Holder$move$lambda_0(h) {
    h.holdersIndex = h.holdersIndex + 1 | 0;
    return Unit;
  }
  function FilteredListenableListConfig$build$Holder$move$lambda$lambda(h) {
    h.shift_6taknv$(true);
    return Unit;
  }
  function FilteredListenableListConfig$build$Holder$move$lambda$lambda_0(h) {
    h.shift_6taknv$(false);
    return Unit;
  }
  function FilteredListenableListConfig$build$Holder$move$lambda_1(closure$fwd, closure$forRange, this$Holder, closure$result) {
    return function (ri) {
      if (closure$fwd) {
        closure$forRange(FilteredListenableListConfig$build$Holder$move$lambda$lambda);
        this$Holder.recalcResultsBefore();
      }
       else {
        this$Holder.recalcResultsBefore();
        closure$forRange(FilteredListenableListConfig$build$Holder$move$lambda$lambda_0);
      }
      closure$result.move_vux9f0$(ri, this$Holder.resultIndex.get());
      return Unit;
    };
  }
  FilteredListenableListConfig$build$Holder.prototype.move_za3lpa$ = function (to) {
    var from = this.holdersIndex;
    this.holders.add_wxm5ur$(to, this.holders.removeAt_za3lpa$(from));
    this.holdersIndex = to;
    var fwd = from < to;
    var range = fwd ? until(from, to) : new IntRange(to + 1 | 0, from);
    var forRange = FilteredListenableListConfig$build$Holder$move$forRange(range, this);
    if (fwd)
      forRange(FilteredListenableListConfig$build$Holder$move$lambda);
    else
      forRange(FilteredListenableListConfig$build$Holder$move$lambda_0);
    this.resultIndex.forEach_qlkmfe$(FilteredListenableListConfig$build$Holder$move$lambda_1(fwd, forRange, this, this.closure$result));
  };
  function FilteredListenableListConfig$build$Holder$shift$lambda(it) {
    return it - 1 | 0;
  }
  function FilteredListenableListConfig$build$Holder$shift$lambda_0(it) {
    return it + 1 | 0;
  }
  FilteredListenableListConfig$build$Holder.prototype.shift_6taknv$ = function (down) {
    if (down) {
      this.resultsBefore = this.resultsBefore - 1 | 0;
      this.resultIndex = this.resultIndex.map_2o04qz$(FilteredListenableListConfig$build$Holder$shift$lambda);
    }
     else {
      this.resultsBefore = this.resultsBefore + 1 | 0;
      this.resultIndex = this.resultIndex.map_2o04qz$(FilteredListenableListConfig$build$Holder$shift$lambda_0);
    }
  };
  function FilteredListenableListConfig$build$Holder$updateVisibility$lambda(closure$newVisible, closure$result, this$Holder) {
    return function (ri) {
      if (!closure$newVisible) {
        closure$result.removeAt_za3lpa$(ri);
        this$Holder.resultIndex = None_getInstance();
        var $receiver = this$Holder.holders.listIterator_za3lpa$(this$Holder.holdersIndex + 1 | 0);
        while ($receiver.hasNext()) {
          var element = $receiver.next();
          element.shift_6taknv$(true);
        }
      }
      return Unit;
    };
  }
  function FilteredListenableListConfig$build$Holder$updateVisibility$lambda_0(closure$newVisible, closure$result, this$Holder) {
    return function () {
      if (closure$newVisible) {
        closure$result.add_wxm5ur$(this$Holder.resultsBefore, this$Holder.item);
        this$Holder.resultIndex = new Some(this$Holder.resultsBefore);
        var $receiver = this$Holder.holders.listIterator_za3lpa$(this$Holder.holdersIndex + 1 | 0);
        while ($receiver.hasNext()) {
          var element = $receiver.next();
          element.shift_6taknv$(false);
        }
      }
      return Unit;
    };
  }
  FilteredListenableListConfig$build$Holder.prototype.updateVisibility_6taknv$ = function (newVisible) {
    this.resultIndex.map_2o04qz$(FilteredListenableListConfig$build$Holder$updateVisibility$lambda(newVisible, this.closure$result, this)).getOrElse_skz6lt$(FilteredListenableListConfig$build$Holder$updateVisibility$lambda_0(newVisible, this.closure$result, this));
  };
  FilteredListenableListConfig$build$Holder.prototype.updateInput_138r$ = function (i) {
    this.updateVisibility_6taknv$(this.this$FilteredListenableListConfig.filter(this.key.now, i));
  };
  FilteredListenableListConfig$build$Holder.prototype.updateKey_138q$ = function (k) {
    this.updateVisibility_6taknv$(this.this$FilteredListenableListConfig.filter(k, this.this$FilteredListenableListConfig.input.now));
  };
  FilteredListenableListConfig$build$Holder.prototype.remove = function () {
    this.updateVisibility_6taknv$(false);
    this.holders.removeAt_za3lpa$(this.holdersIndex);
    var $receiver = this.holders.listIterator_za3lpa$(this.holdersIndex);
    while ($receiver.hasNext()) {
      var element = $receiver.next();
      element.holdersIndex = element.holdersIndex - 1 | 0;
    }
  };
  function FilteredListenableListConfig$build$FilteredListenableListConfig$build$Holder_init$lambda(this$Holder) {
    return function ($receiver, k) {
      this$Holder.updateKey_138q$(k);
      return Unit;
    };
  }
  FilteredListenableListConfig$build$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: []
  };
  function FilteredListenableListConfig$build$lambda(closure$holders) {
    return function ($receiver, i) {
      var tmp$;
      tmp$ = closure$holders.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.updateInput_138r$(i);
      }
      return Unit;
    };
  }
  function FilteredListenableListConfig$build$lambda_0(closure$holders, closure$result, this$FilteredListenableListConfig) {
    return function (idx, t) {
      new FilteredListenableListConfig$build$Holder(closure$result, this$FilteredListenableListConfig, closure$holders, t, idx);
      return Unit;
    };
  }
  function FilteredListenableListConfig$build$lambda_1(closure$holders) {
    return function (idx, f) {
      closure$holders.get_za3lpa$(idx).remove();
      return Unit;
    };
  }
  function FilteredListenableListConfig$build$lambda_2(closure$holders) {
    return function (from, to) {
      closure$holders.get_za3lpa$(from).move_za3lpa$(to);
      return Unit;
    };
  }
  FilteredListenableListConfig.prototype.build = function () {
    var result = RxMutableList_init();
    var holders = ArrayList_init_0();
    this.input.forEachLater_aaomyj$(this.killables, FilteredListenableListConfig$build$lambda(holders));
    plusAssign_0(this.killables, this.list.addListener_6zudpe$(new RxList$Listener(FilteredListenableListConfig$build$lambda_0(holders, result, this), FilteredListenableListConfig$build$lambda_1(holders), FilteredListenableListConfig$build$lambda_2(holders))));
    return result;
  };
  FilteredListenableListConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilteredListenableListConfig',
    interfaces: []
  };
  FilteredListenableListConfig.prototype.component1 = function () {
    return this.list;
  };
  FilteredListenableListConfig.prototype.component2 = function () {
    return this.killables;
  };
  FilteredListenableListConfig.prototype.component3 = function () {
    return this.filterKey;
  };
  FilteredListenableListConfig.prototype.component4 = function () {
    return this.input;
  };
  FilteredListenableListConfig.prototype.component5 = function () {
    return this.filter;
  };
  FilteredListenableListConfig.prototype.copy_twqsro$ = function (list, killables, filterKey, input, filter) {
    return new FilteredListenableListConfig(list === void 0 ? this.list : list, killables === void 0 ? this.killables : killables, filterKey === void 0 ? this.filterKey : filterKey, input === void 0 ? this.input : input, filter === void 0 ? this.filter : filter);
  };
  FilteredListenableListConfig.prototype.toString = function () {
    return 'FilteredListenableListConfig(list=' + Kotlin.toString(this.list) + (', killables=' + Kotlin.toString(this.killables)) + (', filterKey=' + Kotlin.toString(this.filterKey)) + (', input=' + Kotlin.toString(this.input)) + (', filter=' + Kotlin.toString(this.filter)) + ')';
  };
  FilteredListenableListConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.list) | 0;
    result = result * 31 + Kotlin.hashCode(this.killables) | 0;
    result = result * 31 + Kotlin.hashCode(this.filterKey) | 0;
    result = result * 31 + Kotlin.hashCode(this.input) | 0;
    result = result * 31 + Kotlin.hashCode(this.filter) | 0;
    return result;
  };
  FilteredListenableListConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.list, other.list) && Kotlin.equals(this.killables, other.killables) && Kotlin.equals(this.filterKey, other.filterKey) && Kotlin.equals(this.input, other.input) && Kotlin.equals(this.filter, other.filter)))));
  };
  function applyTo_1($receiver, list) {
    if (Kotlin.isType($receiver, ListEvent$Add))
      list.add_wxm5ur$($receiver.index, $receiver.item);
    else if (Kotlin.isType($receiver, ListEvent$Remove))
      list.removeAt_za3lpa$($receiver.index);
    else if (Kotlin.isType($receiver, ListEvent$Move))
      list.move_vux9f0$($receiver.from, $receiver.to);
    else
      Kotlin.noWhenBranchMatched();
  }
  function Coroutine$applyTo$lambda_0(this$applyTo_0, closure$list_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$applyTo = this$applyTo_0;
    this.local$closure$list = closure$list_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$applyTo$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$applyTo$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$applyTo$lambda_0.prototype.constructor = Coroutine$applyTo$lambda_0;
  Coroutine$applyTo$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$applyTo.iterator();
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
              this.state_0 = 6;
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
            var e_0 = this.result_0;
            applyTo_1(e_0, this.local$closure$list);
            this.state_0 = 2;
            continue;
          case 6:
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
  function applyTo$lambda_0(this$applyTo_0, closure$list_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$applyTo$lambda_0(this$applyTo_0, closure$list_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function applyTo_2($receiver, deps, list) {
    launch(deps, void 0, void 0, applyTo$lambda_0($receiver, list));
  }
  function ids$lambda(it) {
    return get_idOrFail(it);
  }
  function ids($receiver, deps) {
    return toRxSet_0(mapEvents(events($receiver, deps), ids$lambda), deps);
  }
  function RxLookup() {
  }
  RxLookup.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RxLookup',
    interfaces: []
  };
  function RxLookupKills(deps, factory) {
    this.factory_c1uhm9$_0 = factory;
    this.ks_jn6sr3$_0 = killables(deps.kills);
    this.map_ub6of3$_0 = LinkedHashMap_init();
  }
  function RxLookupKills$Holder($outer, kseq, rxv) {
    this.$outer = $outer;
    this.kseq = kseq;
    this.rxv = rxv;
  }
  RxLookupKills$Holder.prototype.set_y2q2u0$ = function (value) {
    this.rxv.remAssign_11rb$(value(this.kseq.killables()));
  };
  Object.defineProperty(RxLookupKills$Holder.prototype, 'now', {
    get: function () {
      return this.rxv.now;
    }
  });
  RxLookupKills$Holder.prototype.fold_h2yxzx$ = function (ks, z0, fn) {
    return this.rxv.fold_h2yxzx$(ks, z0, fn);
  };
  RxLookupKills$Holder.prototype.foldKills_ooixq2$ = function (ks, fn) {
    return this.rxv.foldKills_ooixq2$(ks, fn);
  };
  RxLookupKills$Holder.prototype.foldKills_h4yiec$ = function (ks, z0, fn) {
    return this.rxv.foldKills_h4yiec$(ks, z0, fn);
  };
  RxLookupKills$Holder.prototype.foldKillsTrigger_ooixq2$ = function (ks, fn) {
    return this.rxv.foldKillsTrigger_ooixq2$(ks, fn);
  };
  RxLookupKills$Holder.prototype.foldLater_94stmo$ = function (ks, z0, fn) {
    return this.rxv.foldLater_94stmo$(ks, z0, fn);
  };
  RxLookupKills$Holder.prototype.forEach_aaomyj$ = function (ks, fn) {
    return this.rxv.forEach_aaomyj$(ks, fn);
  };
  RxLookupKills$Holder.prototype.forEach_vlp88o$ = function (ks, killOrder, fn) {
    return this.rxv.forEach_vlp88o$(ks, killOrder, fn);
  };
  RxLookupKills$Holder.prototype.forEachLater_aaomyj$ = function (ks, fn) {
    return this.rxv.forEachLater_aaomyj$(ks, fn);
  };
  RxLookupKills$Holder.prototype.forEachLater_cksb0z$$default = function (ks, killStart, killOrder, fn) {
    return this.rxv.forEachLater_cksb0z$$default(ks, killStart, killOrder, fn);
  };
  RxLookupKills$Holder.prototype.invoke = function () {
    return this.rxv.invoke();
  };
  RxLookupKills$Holder.prototype.map_492dlc$ = function (ks, fn) {
    return this.rxv.map_492dlc$(ks, fn);
  };
  RxLookupKills$Holder.prototype.off_sysl1e$ = function (ks, offFn) {
    return this.rxv.off_sysl1e$(ks, offFn);
  };
  RxLookupKills$Holder.prototype.onChange_naxq84$ = function (ks, fn) {
    return this.rxv.onChange_naxq84$(ks, fn);
  };
  RxLookupKills$Holder.prototype.onOff_nf0d6g$ = function (ks, on, off) {
    return this.rxv.onOff_nf0d6g$(ks, on, off);
  };
  RxLookupKills$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: [RxIface]
  };
  RxLookupKills.prototype.getInternal_ue3h1b$_0 = function (key) {
    var $receiver = this.map_ub6of3$_0;
    var tmp$;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var $receiver_0 = this.ks_jn6sr3$_0.seq();
      var answer = new RxLookupKills$Holder(this, $receiver_0, new Var(this.factory_c1uhm9$_0($receiver_0.killables(), key)));
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  RxLookupKills.prototype.get_11rb$ = function (key) {
    return this.getInternal_ue3h1b$_0(key);
  };
  RxLookupKills.prototype.put_ancdq$ = function (key, value) {
    this.getInternal_ue3h1b$_0(key).set_y2q2u0$(value);
  };
  RxLookupKills.prototype.remove_11rb$ = function (key) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.map_ub6of3$_0.remove_11rb$(key)) != null) {
      tmp$.kseq.kill();
      tmp$_0 = tmp$;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  RxLookupKills.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxLookupKills',
    interfaces: [RxLookup]
  };
  function SimpleRxLookup(factory) {
    this.factory = factory;
    this.map_vi484u$_0 = LinkedHashMap_init();
  }
  SimpleRxLookup.prototype.getInternal_ofduhg$_0 = function (key) {
    var $receiver = this.map_vi484u$_0;
    var tmp$;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var answer = new Var(this.factory(key));
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  SimpleRxLookup.prototype.get_11rb$ = function (key) {
    return this.getInternal_ofduhg$_0(key);
  };
  SimpleRxLookup.prototype.put_xwzc9p$ = function (key, value) {
    this.getInternal_ofduhg$_0(key).remAssign_11rb$(value);
  };
  SimpleRxLookup.prototype.remove_11rb$ = function (key) {
    return this.map_vi484u$_0.remove_11rb$(key);
  };
  SimpleRxLookup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleRxLookup',
    interfaces: [RxLookup]
  };
  function RxSet() {
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  function RxSet$anyRx$lambda(this$RxSet, closure$fn) {
    return function ($receiver) {
      var $receiver_0 = this$RxSet.iterableRx.invoke();
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
          if (closure$fn($receiver, element)) {
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
  RxSet.prototype.anyRx_760dx1$ = function (ks, fn) {
    return Rx_init_0(ks, RxSet$anyRx$lambda(this, fn));
  };
  function RxSet$get_RxSet$diffsAll$lambda(this$RxSet) {
    return function () {
      return listOf(new SetDiff(void 0, this$RxSet));
    };
  }
  Object.defineProperty(RxSet.prototype, 'diffsAll', {
    get: function () {
      return withInitial_0(this.diffs, RxSet$get_RxSet$diffsAll$lambda(this));
    }
  });
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
    this.iterableRx_2ob9qa$_0 = lazy(RxMutableSet$iterableRx$lambda(this));
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
    this.containsRxs_3baepc$_0 = lazy(RxMutableSet$containsRxs$lambda(this));
  }
  Object.defineProperty(RxMutableSet.prototype, 'iterableRx', {
    get: function () {
      return this.iterableRx_2ob9qa$_0.value;
    }
  });
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
  Object.defineProperty(RxMutableSet.prototype, 'containsRxs_0', {
    get: function () {
      return this.containsRxs_3baepc$_0.value;
    }
  });
  RxMutableSet.prototype.containsRx_va0u9b$ = function (ks, value) {
    return this.containsRxs_0.get_va0u9b$(ks, value);
  };
  function RxMutableSet$filtered$lambda$lambda(closure$fn, closure$item) {
    return function ($receiver) {
      return closure$fn($receiver, closure$item);
    };
  }
  function RxMutableSet$filtered$lambda$lambda$lambda(closure$fset, closure$item) {
    return function () {
      var $receiver = closure$fset;
      var element = closure$item;
      $receiver.remove_11rb$(element);
      return Unit;
    };
  }
  function RxMutableSet$filtered$lambda$lambda_0(closure$fset, closure$item) {
    return function ($receiver, v) {
      if (v) {
        var $receiver_0 = closure$fset;
        var element = closure$item;
        $receiver_0.add_11rb$(element);
        plusAssign_0($receiver.kills, RxMutableSet$filtered$lambda$lambda$lambda(closure$fset, closure$item));
      }
      return Unit;
    };
  }
  function RxMutableSet$filtered$lambda(closure$fn, closure$fset) {
    return function ($receiver, item) {
      $receiver.forEach_xwzbbo$($receiver.rx_y6x17j$(RxMutableSet$filtered$lambda$lambda(closure$fn, item)), RxMutableSet$filtered$lambda$lambda_0(closure$fset, item));
      return Unit;
    };
  }
  RxMutableSet.prototype.filtered_760dx1$ = function (ks, fn) {
    var fset = new RxMutableSet();
    process_1(this, ks, RxMutableSet$filtered$lambda(fn, fset));
    return fset;
  };
  Object.defineProperty(RxMutableSet.prototype, 'size', {
    get: function () {
      return this.delegate_0.size;
    }
  });
  function RxMutableSet$iterableRx$lambda$iterable$ObjectLiteral(this$RxMutableSet) {
    this.this$RxMutableSet = this$RxMutableSet;
  }
  RxMutableSet$iterableRx$lambda$iterable$ObjectLiteral.prototype.iterator = function () {
    return this.this$RxMutableSet.iterator();
  };
  RxMutableSet$iterableRx$lambda$iterable$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterable]
  };
  function RxMutableSet$iterableRx$lambda$iterable(this$RxMutableSet) {
    return function () {
      return new RxMutableSet$iterableRx$lambda$iterable$ObjectLiteral(this$RxMutableSet);
    };
  }
  function RxMutableSet$iterableRx$lambda$lambda(closure$iterable, closure$rxv) {
    return function (it) {
      closure$rxv.now = closure$iterable();
      return Unit;
    };
  }
  function RxMutableSet$iterableRx$lambda(this$RxMutableSet) {
    return function () {
      var iterable = RxMutableSet$iterableRx$lambda$iterable(this$RxMutableSet);
      var rxv = new Var(iterable());
      this$RxMutableSet.diffs.plusAssign_qlkmfe$(RxMutableSet$iterableRx$lambda$lambda(iterable, rxv));
      return rxv;
    };
  }
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
  function RxMutableSet$containsRxs$lambda$lambda(this$RxMutableSet) {
    return function ($receiver, it) {
      return new Var(this$RxMutableSet.contains_11rb$(it));
    };
  }
  function RxMutableSet$containsRxs$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.now = false;
    return Unit;
  }
  function RxMutableSet$containsRxs$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.now = true;
    return Unit;
  }
  function RxMutableSet$containsRxs$lambda$lambda$lambda(this$) {
    return function (d) {
      var $receiver = d.removed;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        this$.applyTo_bpsgc2$(element, RxMutableSet$containsRxs$lambda$lambda$lambda$lambda$lambda);
      }
      var $receiver_0 = d.added;
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        this$.applyTo_bpsgc2$(element_0, RxMutableSet$containsRxs$lambda$lambda$lambda$lambda$lambda_0);
      }
      return Unit;
    };
  }
  function RxMutableSet$containsRxs$lambda(this$RxMutableSet) {
    return function () {
      var $receiver = new RefCountMap(RxMutableSet$containsRxs$lambda$lambda(this$RxMutableSet));
      this$RxMutableSet.diffs.plusAssign_qlkmfe$(RxMutableSet$containsRxs$lambda$lambda$lambda($receiver));
      return $receiver;
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
    this.fns_0 = ArrayList_init_0();
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
    this.fns_0 = ArrayList_init_0();
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
  function toMap_1($receiver, ks, fn) {
    return toMap_0(toMoves($receiver.diffsAll), ks, fn);
  }
  function process_1($receiver, ks, fn) {
    process(toMoves($receiver.diffsAll), ks, fn);
  }
  function toRxSet_0($receiver, deps) {
    var $receiver_0 = new RxMutableSet();
    applyTo_0($receiver, deps, $receiver_0);
    return $receiver_0;
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
  package$common.Emitter = Emitter;
  package$common.MappedEmitter = MappedEmitter;
  package$common.map_x7fpzi$ = map_0;
  package$common.feedTo_cenaja$ = feedTo;
  package$common.filtered_duf482$ = filtered;
  package$common.feedTo_hghz1a$ = feedTo_0;
  package$common.toRxSet_ss8b8w$ = toRxSet;
  package$common.SetSource = SetSource;
  package$common.toRx_lwypm1$ = toRx;
  package$common.CircularList = CircularList;
  Object.defineProperty(RandomSource, 'Companion', {
    get: RandomSource$Companion_getInstance
  });
  package$common.RandomSource = RandomSource;
  package$common.random_txoh8m$ = random_0;
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
  var package$commonshr = _.commonshr || (_.commonshr = {});
  package$commonshr.Api = Api;
  package$commonshr.get_api_41sgpf$ = get_api;
  package$commonshr.KillsApi = KillsApi;
  package$commonshr.CsApi = CsApi;
  package$commonshr.CsKillsApi = CsKillsApi;
  package$commonshr.lib = lib;
  package$commonshr.Lib = Lib;
  package$commonshr.Function = Function;
  package$commonshr.DocWrap = DocWrap;
  package$commonshr.DocWrapImpl = DocWrapImpl;
  package$commonshr.DocSource = DocSource;
  package$commonshr.coll_287e2$ = coll;
  package$commonshr.coll_4okrys$ = coll_0;
  package$commonshr.HasPath = HasPath;
  package$commonshr.CollectionWrap = CollectionWrap;
  package$commonshr.CollectionSource = CollectionSource;
  package$commonshr.doc_287e2$ = doc;
  Object.defineProperty(package$commonshr, 'apps', {
    get: apps_getInstance
  });
  package$commonshr.AppDoc = AppDoc;
  package$commonshr.get_admin_py8usb$ = get_admin;
  package$commonshr.get_private_py8usb$ = get_private;
  package$commonshr.get_singletons_py8usb$ = get_singletons;
  package$commonshr.Singleton = Singleton;
  package$commonshr.Private = Private;
  package$commonshr.AdminDoc = AdminDoc;
  package$commonshr.get_fcmtokens_x4imip$ = get_fcmtokens;
  package$commonshr.FcmToken = FcmToken;
  package$commonshr.hasOwnProperty_hwpqgh$ = hasOwnProperty;
  package$commonshr.opt_h8phid$ = opt;
  Object.defineProperty(SetDiff, 'Companion', {
    get: SetDiff$Companion_getInstance
  });
  package$commonshr.SetDiff = SetDiff;
  package$commonshr.toLazy_eoe559$ = toLazy;
  package$commonshr.SetMove = SetMove;
  package$commonshr.SetAdded = SetAdded;
  package$commonshr.SetRemoved = SetRemoved;
  package$commonshr.InvokeApply = InvokeApply;
  package$commonshr.invoke_fiuc92$ = invoke;
  package$commonshr.InvokeWith = InvokeWith;
  package$commonshr.invoke_3lzs1f$ = invoke_0;
  package$commonshr.toMoves_k2zy3$ = toMoves;
  package$commonshr.process_a8xqq2$ = process;
  package$commonshr.toMap_m2zz0l$ = toMap_0;
  package$commonshr.plusAssign_rmur43$ = plusAssign;
  package$commonshr.timesAssign_rmur43$ = timesAssign;
  package$commonshr.HasExec = HasExec;
  package$commonshr.RxExec = RxExec;
  package$commonshr.get_withCounter_sb3j39$ = get_withCounter;
  package$commonshr.discardExecutor_e9pf1l$ = discardExecutor;
  package$commonshr.executor_e9pf1l$ = executor;
  package$commonshr.launchNonCancellable_hilpzi$ = launchNonCancellable;
  package$commonshr.RefCountMap = RefCountMap;
  package$commonshr.RefCount = RefCount;
  package$commonshr.HasKill = HasKill;
  package$commonshr.HasKilled = HasKilled;
  package$commonshr.HasKills = HasKills;
  package$commonshr.HasKillKills = HasKillKills;
  package$commonshr.HasKillKilledKills = HasKillKilledKills;
  package$commonshr.KillsDeps = KillsDeps;
  package$commonshr.HasCsKills = HasCsKills;
  package$commonshr.CsKillsDeps = CsKillsDeps;
  package$commonshr.get_fn_4b7k9i$ = get_fn;
  package$commonshr.listen_5ge9y1$ = listen;
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
  package$commonshr.get_groupThousands_mts6qi$ = get_groupThousands_0;
  package$commonshr.get_formatSecs_s8ev3n$ = get_formatSecs;
  ListEvent.Add = ListEvent$Add;
  ListEvent.Move = ListEvent$Move;
  ListEvent.Remove = ListEvent$Remove;
  package$commonshr.ListEvent = ListEvent;
  package$commonshr.map_tu4qsk$ = map_1;
  package$commonshr.mapEvents_xx1ylf$ = mapEvents;
  package$commonshr.mapLive_hpw2sv$ = mapLive;
  package$commonshr.listEventProcessor_xveuzn$ = listEventProcessor;
  package$commonshr.process_pjyot8$ = process_0;
  package$commonshr.applyTo_vxpj7g$ = applyTo;
  package$commonshr.applyTo_6bwryh$ = applyTo_0;
  package$commonshr.filter_g39gwq$ = filter;
  var package$properties = package$commonshr.properties || (package$commonshr.properties = {});
  package$properties.DynamicOps = DynamicOps;
  Object.defineProperty(package$properties, 'NoDynamicOps', {
    get: NoDynamicOps_getInstance
  });
  Object.defineProperty(package$properties, 'Identity', {
    get: function () {
      return Identity;
    }
  });
  Object.defineProperty(package$properties, 'CompareEquals', {
    get: function () {
      return CompareEquals;
    }
  });
  Object.defineProperty(package$properties, 'IdentityWriteDynamic', {
    get: function () {
      return IdentityWriteDynamic;
    }
  });
  Object.defineProperty(package$properties, 'IdentityReadDynamic', {
    get: function () {
      return IdentityReadDynamic;
    }
  });
  package$properties.identityCopier_287e2$ = identityCopier;
  package$properties.identityWriteDynamic_287e2$ = identityWriteDynamic;
  package$properties.identityReadDynamic_287e2$ = identityReadDynamic;
  package$properties.compareEquals_287e2$ = compareEquals;
  package$properties.ReadWrite = ReadWrite;
  package$properties.PropertyType = PropertyType;
  Object.defineProperty(package$properties, 'IdentityType', {
    get: function () {
      return IdentityType;
    }
  });
  package$properties.identityType_287e2$ = identityType;
  package$properties.ROProp = ROProp;
  package$properties.RWProp = RWProp;
  package$properties.EnumProp = EnumProp;
  package$properties.ScalarArrayProp = ScalarArrayProp;
  package$properties.ROArrayProp = ROArrayProp;
  package$properties.RWArrayProp = RWArrayProp;
  package$properties.PropertyListItem = PropertyListItem;
  var package$killable = _.killable || (_.killable = {});
  package$properties.PropertyList = PropertyList;
  package$properties.rxCompare_kagv6q$ = rxCompare;
  package$properties.RxBase = RxBase;
  Object.defineProperty(RxRoot, 'Companion', {
    get: RxRoot$Companion_getInstance
  });
  package$properties.RxRoot = RxRoot;
  package$properties.wrapper_3yfn2g$ = wrapper;
  package$properties.zipItems_kagv6q$ = zipItems;
  package$properties.copy_szlj5h$ = copy;
  package$properties.writeDynamic_y9dcxh$ = writeDynamic;
  package$properties.readDynamic_121my8$ = readDynamic;
  package$properties.rxListType_4okrys$ = rxListType;
  package$properties.listCompare_wct1zj$ = listCompare;
  package$properties.rxListType_68r5d9$ = rxListType_0;
  Object.defineProperty(package$properties, 'ServerTimestampPropertyType', {
    get: function () {
      return ServerTimestampPropertyType;
    }
  });
  package$properties.arrayOfScalarType_itlr5c$ = arrayOfScalarType;
  package$properties.setOfScalarType_287e2$ = setOfScalarType;
  package$properties.calcType_6hcemk$ = calcType;
  SnapshotEvent.Added = SnapshotEvent$Added;
  SnapshotEvent.Modified = SnapshotEvent$Modified;
  SnapshotEvent.Moved = SnapshotEvent$Moved;
  SnapshotEvent.Removed = SnapshotEvent$Removed;
  package$properties.SnapshotEvent = SnapshotEvent;
  package$properties.wrapSnapshotEvents_j0uhh8$ = wrapSnapshotEvents;
  package$properties.listEvents_k5exqy$ = listEvents;
  TS.Value = TS$Value;
  Object.defineProperty(TS, 'Server', {
    get: TS$Server_getInstance
  });
  package$properties.TS = TS;
  package$commonshr.RefDoc = RefDoc;
  Object.defineProperty(FsIdState, 'NoId', {
    get: FsIdState$NoId_getInstance
  });
  FsIdState.HasId = FsIdState$HasId;
  package$commonshr.FsIdState = FsIdState;
  package$commonshr.FsId_init_fwqjf0$ = FsId_init;
  package$commonshr.FsId = FsId;
  package$commonshr.get_docWrap_axmc3l$ = get_docWrap;
  package$commonshr.get_docWrap_2s00w$ = get_docWrap_0;
  package$commonshr.toFsId_5bzvyx$ = toFsId;
  package$commonshr.toFsId_d81mk7$ = toFsId_0;
  package$commonshr.toFsDoc_ved7zl$ = toFsDoc;
  package$commonshr.toFsDoc_s7qlz4$ = toFsDoc_0;
  package$commonshr.toFsDoc_e53g6m$ = toFsDoc_1;
  package$commonshr.get_idOrFail_2s00w$ = get_idOrFail;
  package$commonshr.new_kizxdt$ = new_0;
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
  Object.defineProperty(package$killable, 'HasNoKill', {
    get: HasNoKill_getInstance
  });
  package$killable.addedTo_tjw9ba$ = addedTo;
  package$killable.add_1wvaoy$ = add_0;
  package$killable.killables_yzxo1x$ = killables;
  package$killable.seq_yzxo1x$ = seq;
  package$killable.addedTo_wvpfik$ = addedTo_0;
  package$killable.Killables = Killables;
  package$killable.join_yzxo1x$ = join;
  package$killable.perform_1gfkez$ = perform;
  package$killable.KillableValue = KillableValue;
  package$killable.KillableSeq_init_o14v8n$ = KillableSeq_init;
  package$killable.KillableSeq = KillableSeq;
  var package$rx = _.rx || (_.rx = {});
  package$rx.toRx_9uhkxi$ = toRx_0;
  package$rx.mapAsync_ld00ug$ = mapAsync;
  package$rx.RxChild = RxChild;
  Object.defineProperty(RxCalc, 'Companion', {
    get: RxCalc$Companion_getInstance
  });
  package$rx.RxCalc = RxCalc;
  package$rx.RxParent = RxParent;
  package$rx.connect_xonuym$ = connect;
  package$rx.Obs = Obs;
  package$rx.RxIface = RxIface;
  package$rx.forEach_yaias7$ = forEach;
  package$rx.feedTo_6zab7q$ = feedTo_1;
  package$rx.forEachLater_yaias7$ = forEachLater;
  package$rx.incremented_xubefb$ = incremented;
  package$rx.RxVal = RxVal;
  package$rx.add_gcz0w7$ = add_1;
  package$rx.remove_gcz0w7$ = remove;
  package$rx.diffs_x22hzp$ = diffs;
  package$rx.Rx_init_y3u4fh$ = Rx_init;
  package$rx.Rx_init_lqp1nt$ = Rx_init_0;
  package$rx.Rx_init_nmn2eg$ = Rx_init_1;
  package$rx.Rx = Rx;
  package$rx.rx_m71pkk$ = rx;
  package$rx.HasRx = HasRx;
  package$rx.HasVar = HasVar;
  package$rx.get_readOnly_hw0zcq$ = get_readOnly;
  package$rx.Var = Var;
  package$rx.increase_eoy9qo$ = increase;
  package$rx.decrease_eoy9qo$ = decrease;
  package$rx.rxClass_z9szj9$ = rxClass;
  package$rx.rxClass_xqwy5d$ = rxClass_0;
  package$rx.rxClass_53u32h$ = rxClass_1;
  package$rx.rxClass_9rzgmr$ = rxClass_2;
  package$rx.toRx_56vwuc$ = toRx_1;
  package$rx.toChannelLater_prszu7$ = toChannelLater;
  package$rx.rx_50j47u$ = rx_0;
  package$rx.get_asVar_vvk9$ = get_asVar;
  package$rx.linked_g2t76q$ = linked;
  package$rx.rx_drrr49$ = rx_1;
  package$rx.rx_fmxlc4$ = rx_2;
  package$rx.add_2hqy4a$ = add_2;
  package$rx.oldKilled_jo2xf$ = oldKilled;
  package$rx.oldKilledOpt_jo2xf$ = oldKilledOpt;
  RxList.Listener = RxList$Listener;
  package$rx.RxList = RxList;
  package$rx.Collector = Collector;
  package$rx.collector_7qq44f$ = collector;
  package$rx.events_ceeeb7$ = events;
  package$rx.eventsEmitter_2us9mn$ = eventsEmitter;
  package$rx.events_gvkzwh$ = events_0;
  package$rx.RxMutableList_init_287e2$ = RxMutableList_init;
  package$rx.RxMutableList = RxMutableList;
  package$rx.sorted_ev4lgc$ = sorted;
  package$rx.map_xbmg4n$ = map_2;
  package$rx.map_chs0my$ = map_3;
  package$rx.map_ape3t2$ = map_4;
  package$rx.MappedListenableListConfig = MappedListenableListConfig;
  package$rx.FilteredListenableListConfig = FilteredListenableListConfig;
  package$rx.applyTo_vym8$ = applyTo_1;
  package$rx.applyTo_5k7i6r$ = applyTo_2;
  package$rx.ids_lvfhii$ = ids;
  package$rx.RxLookup = RxLookup;
  package$rx.RxLookupKills = RxLookupKills;
  package$rx.SimpleRxLookup = SimpleRxLookup;
  package$rx.RxSet = RxSet;
  package$rx.RxMutableSet = RxMutableSet;
  package$rx.RxMutableIterator = RxMutableIterator;
  package$rx.FunChain0 = FunChain0;
  package$rx.chain_klfg04$ = chain;
  package$rx.FunChain1 = FunChain1;
  package$rx.chain_7h29gk$ = chain_0;
  package$rx.toMap_ph3why$ = toMap_1;
  package$rx.process_d62qid$ = process_1;
  package$rx.toRxSet_dftzi3$ = toRxSet_0;
  withInitial$ObjectLiteral.prototype.plusAssign_qlkmfe$ = EmitterIface.prototype.plusAssign_qlkmfe$;
  Emitter.prototype.plusAssign_qlkmfe$ = EmitterIface.prototype.plusAssign_qlkmfe$;
  MappedEmitter.prototype.plusAssign_qlkmfe$ = EmitterIface.prototype.plusAssign_qlkmfe$;
  CsKillsApi.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  CsKillsApi.prototype.toRx_on0lyu$ = CsApi.prototype.toRx_on0lyu$;
  CsKillsApi.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  CsKillsApi.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  CsKillsApi.prototype.rx_wgabca$ = KillsApi.prototype.rx_wgabca$;
  CsKillsApi.prototype.rx_djv61p$ = KillsApi.prototype.rx_djv61p$;
  CsKillsApi.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  CsKillsApi.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  CsKillsApi.prototype.forEachLater_xwzbbo$ = KillsApi.prototype.forEachLater_xwzbbo$;
  CsKillsApi.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  CsKillsApi.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  CsKillsApi.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  CsKillsApi.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  CsKillsApi.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  CsKillsApi.prototype.incremented_eoy9qo$ = KillsApi.prototype.incremented_eoy9qo$;
  CsKillsApi.prototype.feedTo_9o5f67$ = KillsApi.prototype.feedTo_9o5f67$;
  CsKillsApi.prototype.remAssign_wgabca$ = KillsApi.prototype.remAssign_wgabca$;
  CsKillsApi.prototype.remAssign_djv61p$ = KillsApi.prototype.remAssign_djv61p$;
  CsKillsApi.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  CsKillsApi.prototype.get_oldKilled_vsdo34$ = KillsApi.prototype.get_oldKilled_vsdo34$;
  CsKillsApi.prototype.get_oldKilledOpt_vsdo34$ = KillsApi.prototype.get_oldKilledOpt_vsdo34$;
  CsKillsApi.prototype.linked_n1nom7$ = KillsApi.prototype.linked_n1nom7$;
  CsKillsApi.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  CsKillsApi.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  CsKillsApi.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  CsKillsApi.prototype.mapLive_1mq1ue$ = KillsApi.prototype.mapLive_1mq1ue$;
  CsKillsApi.prototype.listen_ubid8w$ = KillsApi.prototype.listen_ubid8w$;
  CsKillsApi.prototype.plusAssign_ubid8w$ = KillsApi.prototype.plusAssign_ubid8w$;
  toMoves$ObjectLiteral.prototype.plusAssign_qlkmfe$ = EmitterIface.prototype.plusAssign_qlkmfe$;
  filter$lambda$Item.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  filter$lambda$Item.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  filter$lambda$Item.prototype.rx_wgabca$ = KillsApi.prototype.rx_wgabca$;
  filter$lambda$Item.prototype.rx_djv61p$ = KillsApi.prototype.rx_djv61p$;
  filter$lambda$Item.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  filter$lambda$Item.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  filter$lambda$Item.prototype.forEachLater_xwzbbo$ = KillsApi.prototype.forEachLater_xwzbbo$;
  filter$lambda$Item.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  filter$lambda$Item.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  filter$lambda$Item.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  filter$lambda$Item.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  filter$lambda$Item.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  filter$lambda$Item.prototype.incremented_eoy9qo$ = KillsApi.prototype.incremented_eoy9qo$;
  filter$lambda$Item.prototype.feedTo_9o5f67$ = KillsApi.prototype.feedTo_9o5f67$;
  filter$lambda$Item.prototype.remAssign_wgabca$ = KillsApi.prototype.remAssign_wgabca$;
  filter$lambda$Item.prototype.remAssign_djv61p$ = KillsApi.prototype.remAssign_djv61p$;
  filter$lambda$Item.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  filter$lambda$Item.prototype.get_oldKilled_vsdo34$ = KillsApi.prototype.get_oldKilled_vsdo34$;
  filter$lambda$Item.prototype.get_oldKilledOpt_vsdo34$ = KillsApi.prototype.get_oldKilledOpt_vsdo34$;
  filter$lambda$Item.prototype.linked_n1nom7$ = KillsApi.prototype.linked_n1nom7$;
  filter$lambda$Item.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  filter$lambda$Item.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  filter$lambda$Item.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  filter$lambda$Item.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  filter$lambda$Item.prototype.mapLive_1mq1ue$ = KillsApi.prototype.mapLive_1mq1ue$;
  filter$lambda$Item.prototype.listen_ubid8w$ = KillsApi.prototype.listen_ubid8w$;
  filter$lambda$Item.prototype.plusAssign_ubid8w$ = KillsApi.prototype.plusAssign_ubid8w$;
  ROProp.prototype.forEachLater_cksb0z$ = RxIface.prototype.forEachLater_cksb0z$;
  HasNoKill.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  HasNoKill.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  HasNoKill.prototype.rx_wgabca$ = KillsApi.prototype.rx_wgabca$;
  HasNoKill.prototype.rx_djv61p$ = KillsApi.prototype.rx_djv61p$;
  HasNoKill.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  HasNoKill.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  HasNoKill.prototype.forEachLater_xwzbbo$ = KillsApi.prototype.forEachLater_xwzbbo$;
  HasNoKill.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  HasNoKill.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  HasNoKill.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  HasNoKill.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  HasNoKill.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  HasNoKill.prototype.incremented_eoy9qo$ = KillsApi.prototype.incremented_eoy9qo$;
  HasNoKill.prototype.feedTo_9o5f67$ = KillsApi.prototype.feedTo_9o5f67$;
  HasNoKill.prototype.remAssign_wgabca$ = KillsApi.prototype.remAssign_wgabca$;
  HasNoKill.prototype.remAssign_djv61p$ = KillsApi.prototype.remAssign_djv61p$;
  HasNoKill.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  HasNoKill.prototype.get_oldKilled_vsdo34$ = KillsApi.prototype.get_oldKilled_vsdo34$;
  HasNoKill.prototype.get_oldKilledOpt_vsdo34$ = KillsApi.prototype.get_oldKilledOpt_vsdo34$;
  HasNoKill.prototype.linked_n1nom7$ = KillsApi.prototype.linked_n1nom7$;
  HasNoKill.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  HasNoKill.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  HasNoKill.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  HasNoKill.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  HasNoKill.prototype.mapLive_1mq1ue$ = KillsApi.prototype.mapLive_1mq1ue$;
  HasNoKill.prototype.listen_ubid8w$ = KillsApi.prototype.listen_ubid8w$;
  HasNoKill.prototype.plusAssign_ubid8w$ = KillsApi.prototype.plusAssign_ubid8w$;
  Killables.prototype.plusAssign_ubid8w$ = KillsApi.prototype.plusAssign_ubid8w$;
  Killables.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  Killables.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  Killables.prototype.rx_wgabca$ = KillsApi.prototype.rx_wgabca$;
  Killables.prototype.rx_djv61p$ = KillsApi.prototype.rx_djv61p$;
  Killables.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  Killables.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  Killables.prototype.forEachLater_xwzbbo$ = KillsApi.prototype.forEachLater_xwzbbo$;
  Killables.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  Killables.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  Killables.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  Killables.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  Killables.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  Killables.prototype.incremented_eoy9qo$ = KillsApi.prototype.incremented_eoy9qo$;
  Killables.prototype.feedTo_9o5f67$ = KillsApi.prototype.feedTo_9o5f67$;
  Killables.prototype.remAssign_wgabca$ = KillsApi.prototype.remAssign_wgabca$;
  Killables.prototype.remAssign_djv61p$ = KillsApi.prototype.remAssign_djv61p$;
  Killables.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  Killables.prototype.get_oldKilled_vsdo34$ = KillsApi.prototype.get_oldKilled_vsdo34$;
  Killables.prototype.get_oldKilledOpt_vsdo34$ = KillsApi.prototype.get_oldKilledOpt_vsdo34$;
  Killables.prototype.linked_n1nom7$ = KillsApi.prototype.linked_n1nom7$;
  Killables.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  Killables.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  Killables.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  Killables.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  Killables.prototype.mapLive_1mq1ue$ = KillsApi.prototype.mapLive_1mq1ue$;
  Killables.prototype.listen_ubid8w$ = KillsApi.prototype.listen_ubid8w$;
  RxVal.prototype.forEachLater_aaomyj$ = RxIface.prototype.forEachLater_aaomyj$;
  RxVal.prototype.map_492dlc$ = RxIface.prototype.map_492dlc$;
  RxVal.prototype.forEach_aaomyj$ = RxIface.prototype.forEach_aaomyj$;
  RxVal.prototype.forEach_vlp88o$ = RxIface.prototype.forEach_vlp88o$;
  RxVal.prototype.fold_h2yxzx$ = RxIface.prototype.fold_h2yxzx$;
  RxVal.prototype.foldKillsTrigger_ooixq2$ = RxIface.prototype.foldKillsTrigger_ooixq2$;
  RxVal.prototype.foldKills_ooixq2$ = RxIface.prototype.foldKills_ooixq2$;
  RxVal.prototype.foldKills_h4yiec$ = RxIface.prototype.foldKills_h4yiec$;
  RxVal.prototype.foldLater_94stmo$ = RxIface.prototype.foldLater_94stmo$;
  RxVal.prototype.onChange_naxq84$ = RxIface.prototype.onChange_naxq84$;
  RxVal.prototype.onOff_nf0d6g$ = RxIface.prototype.onOff_nf0d6g$;
  RxVal.prototype.off_sysl1e$ = RxIface.prototype.off_sysl1e$;
  RxVal.prototype.forEachLater_cksb0z$ = RxIface.prototype.forEachLater_cksb0z$;
  RxMutableList.prototype.addListener_6zudpe$ = RxList.prototype.addListener_6zudpe$;
  sorted$Holder.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  sorted$Holder.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  sorted$Holder.prototype.rx_wgabca$ = KillsApi.prototype.rx_wgabca$;
  sorted$Holder.prototype.rx_djv61p$ = KillsApi.prototype.rx_djv61p$;
  sorted$Holder.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  sorted$Holder.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  sorted$Holder.prototype.forEachLater_xwzbbo$ = KillsApi.prototype.forEachLater_xwzbbo$;
  sorted$Holder.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  sorted$Holder.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  sorted$Holder.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  sorted$Holder.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  sorted$Holder.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  sorted$Holder.prototype.incremented_eoy9qo$ = KillsApi.prototype.incremented_eoy9qo$;
  sorted$Holder.prototype.feedTo_9o5f67$ = KillsApi.prototype.feedTo_9o5f67$;
  sorted$Holder.prototype.remAssign_wgabca$ = KillsApi.prototype.remAssign_wgabca$;
  sorted$Holder.prototype.remAssign_djv61p$ = KillsApi.prototype.remAssign_djv61p$;
  sorted$Holder.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  sorted$Holder.prototype.get_oldKilled_vsdo34$ = KillsApi.prototype.get_oldKilled_vsdo34$;
  sorted$Holder.prototype.get_oldKilledOpt_vsdo34$ = KillsApi.prototype.get_oldKilledOpt_vsdo34$;
  sorted$Holder.prototype.linked_n1nom7$ = KillsApi.prototype.linked_n1nom7$;
  sorted$Holder.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  sorted$Holder.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  sorted$Holder.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  sorted$Holder.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  sorted$Holder.prototype.mapLive_1mq1ue$ = KillsApi.prototype.mapLive_1mq1ue$;
  sorted$Holder.prototype.listen_ubid8w$ = KillsApi.prototype.listen_ubid8w$;
  sorted$Holder.prototype.plusAssign_ubid8w$ = KillsApi.prototype.plusAssign_ubid8w$;
  RxLookupKills$Holder.prototype.forEachLater_cksb0z$ = RxIface.prototype.forEachLater_cksb0z$;
  RxMutableSet.prototype.anyRx_760dx1$ = RxSet.prototype.anyRx_760dx1$;
  Object.defineProperty(RxMutableSet.prototype, 'diffsAll', Object.getOwnPropertyDescriptor(RxSet.prototype, 'diffsAll'));
  admin = coll();
  private_0 = coll();
  singletons = coll();
  fcmtokens = coll();
  Identity = Identity$lambda;
  CompareEquals = CompareEquals$lambda;
  IdentityWriteDynamic = IdentityWriteDynamic$lambda;
  IdentityReadDynamic = IdentityReadDynamic$lambda;
  IdentityType = new PropertyType();
  ServerTimestampPropertyType = new PropertyType(void 0, ServerTimestampPropertyType$lambda, ServerTimestampPropertyType$lambda_0);
  Noop = Noop$lambda;
  NoKill = NoKill$lambda;
  currentChild = null;
  affected = ArrayList_init_0();
  Kotlin.defineModule('appsimake-commonshr', _);
  return _;
}(typeof this['appsimake-commonshr'] === 'undefined' ? {} : this['appsimake-commonshr'], kotlin, this['kotlinx-coroutines-core']);

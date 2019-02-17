if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonlib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonlib'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonlib'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-commonlib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonlib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-commonlib'.");
}
if (typeof this['appsimake-firebaseshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonlib'. Its dependency 'appsimake-firebaseshr' was not found. Please, check whether 'appsimake-firebaseshr' is loaded prior to 'appsimake-commonlib'.");
}
this['appsimake-commonlib'] = function (_, Kotlin, $module$kotlinx_coroutines_core, $module$appsimake_commonshr, $module$appsimake_firebaseshr) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var addedTo = $module$appsimake_commonshr.killable.addedTo_tjw9ba$;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var SetAdded = $module$appsimake_commonshr.commonshr.SetAdded;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var add = $module$appsimake_commonshr.killable.add_1wvaoy$;
  var AsyncEmitter = $module$appsimake_commonshr.common.AsyncEmitter;
  var common = $module$appsimake_commonshr.common;
  var Var = $module$appsimake_commonshr.rx.Var;
  var Some = $module$appsimake_commonshr.common.Some;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var Killables = $module$appsimake_commonshr.killable.Killables;
  var once = $module$appsimake_commonshr.commonshr.once_yo2cq0$;
  var Emitter = $module$appsimake_commonshr.common.Emitter;
  var getCallableRef = Kotlin.getCallableRef;
  var map = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.map_610k8f$;
  var toChannel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.toChannel_j382de$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var plus = Kotlin.kotlin.collections.plus_khz7k3$;
  var equals = Kotlin.equals;
  var Lib = $module$appsimake_commonshr.commonlib.Lib;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var AdminDoc = $module$appsimake_commonshr.commonlib.AdminDoc;
  var Base = $module$appsimake_firebaseshr.firebaseshr.Base;
  var doc = $module$appsimake_commonshr.commonlib.doc_287e2$;
  var coll = $module$appsimake_commonshr.commonlib.coll_287e2$;
  RandomChooser$Input.prototype = Object.create(RandomChooser$Event.prototype);
  RandomChooser$Input.prototype.constructor = RandomChooser$Input;
  TokenDeveloperClaims.prototype = Object.create(Base.prototype);
  TokenDeveloperClaims.prototype.constructor = TokenDeveloperClaims;
  function LoopT() {
  }
  LoopT.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoopT',
    interfaces: []
  };
  function Ignore$ObjectLiteral() {
  }
  Ignore$ObjectLiteral.prototype.process_11rb$ = function (e, continuation) {
  };
  Ignore$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [LoopT]
  };
  var Ignore;
  function Actor(killables) {
    this.root = Ignore;
    this.channel = Channel();
    killables.plusAssign_o14v8n$(Actor_init$lambda$lambda(launch(coroutines.GlobalScope, void 0, void 0, Actor_init$lambda(this))));
  }
  function Coroutine$Actor$post$lambda(this$Actor_0, closure$e_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Actor = this$Actor_0;
    this.local$closure$e = closure$e_0;
  }
  Coroutine$Actor$post$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Actor$post$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Actor$post$lambda.prototype.constructor = Coroutine$Actor$post$lambda;
  Coroutine$Actor$post$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Actor.channel.send_11rb$(this.local$closure$e, this);
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
  function Actor$post$lambda(this$Actor_0, closure$e_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Actor$post$lambda(this$Actor_0, closure$e_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Actor.prototype.post_11rb$ = function (e) {
    launch(coroutines.GlobalScope, void 0, void 0, Actor$post$lambda(this, e));
  };
  function Coroutine$Actor_init$lambda(this$Actor_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Actor = this$Actor_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$Actor_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Actor_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Actor_init$lambda.prototype.constructor = Coroutine$Actor_init$lambda;
  Coroutine$Actor_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$Actor.channel.iterator();
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
            this.result_0 = this.local$this$Actor.root.process_11rb$(e_0, this);
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
  function Actor_init$lambda(this$Actor_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Actor_init$lambda(this$Actor_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Actor_init$lambda$lambda(closure$j) {
    return function () {
      closure$j.cancel();
      return Unit;
    };
  }
  Actor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Actor',
    interfaces: []
  };
  function Coroutine$post$lambda(closure$item_0, this$post_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$item = closure$item_0;
    this.local$this$post = this$post_0;
  }
  Coroutine$post$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$post$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$post$lambda.prototype.constructor = Coroutine$post$lambda;
  Coroutine$post$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$post.send_11rb$(this.local$closure$item, this);
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
  function post$lambda(closure$item_0, this$post_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$post$lambda(closure$item_0, this$post_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function post($receiver, item) {
    launch(coroutines.GlobalScope, void 0, void 0, post$lambda(item, $receiver));
  }
  function Coroutine$toChannel$lambda(closure$inp_0, closure$list_0, closure$out_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$inp = closure$inp_0;
    this.local$closure$list = closure$list_0;
    this.local$closure$out = closure$out_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$toChannel$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toChannel$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toChannel$lambda.prototype.constructor = Coroutine$toChannel$lambda;
  Coroutine$toChannel$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$inp.iterator();
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
              this.state_0 = 9;
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
            this.local$tmp$_0 = toList(this.local$closure$list).iterator();
            this.state_0 = 6;
            continue;
          case 6:
            if (!this.local$tmp$_0.hasNext()) {
              this.state_0 = 8;
              continue;
            }

            var t = this.local$tmp$_0.next();
            this.state_0 = 7;
            this.result_0 = this.local$closure$out.send_11rb$(t, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = 6;
            continue;
          case 8:
            this.state_0 = 2;
            continue;
          case 9:
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
  function toChannel$lambda(closure$inp_0, closure$list_0, closure$out_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$toChannel$lambda(closure$inp_0, closure$list_0, closure$out_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function toChannel$lambda_0(closure$list, closure$inp) {
    return function (t) {
      closure$list.add_11rb$(t);
      post(closure$inp, Unit);
      return Unit;
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function toChannel_0($receiver, ks) {
    var out = Channel();
    var list = ArrayList_init();
    var inp = Channel();
    addedTo(launch(coroutines.GlobalScope, void 0, void 0, toChannel$lambda(inp, list, out)), ks);
    plusAssign(ks, $receiver.add_qlkmfe$(toChannel$lambda_0(list, inp)));
    return out;
  }
  function addedTo_0($receiver, ks) {
    return addedTo($receiver, ks.killSet);
  }
  function toAsync$lambda$lambda(closure$waiting, closure$current) {
    return function (m) {
      var tmp$ = Kotlin.isType(m, SetAdded);
      if (tmp$) {
        tmp$ = !closure$waiting.isEmpty();
      }
      if (tmp$)
        closure$waiting.removeAt_za3lpa$(0).complete_11rb$(m.value);
      else
        m.applyTo_ufm9l7$(closure$current);
      return Unit;
    };
  }
  function toAsync$ObjectLiteral(closure$currents, closure$waiting, closure$ks) {
    this.closure$currents = closure$currents;
    this.closure$waiting = closure$waiting;
    this.closure$ks = closure$ks;
  }
  toAsync$ObjectLiteral.prototype.poll = function () {
    var tmp$;
    var $receiver = this.closure$currents;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (!element.isEmpty()) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$ = firstOrNull$result) != null ? tmp$.removeAt_za3lpa$(0) : null;
  };
  function toAsync$ObjectLiteral$receive$lambda(closure$waiting, closure$cd) {
    return function () {
      var $receiver = closure$waiting;
      var element = closure$cd;
      $receiver.remove_11rb$(element);
      closure$cd.cancel();
      return Unit;
    };
  }
  function Coroutine$receive($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$rk = void 0;
  }
  Coroutine$receive.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$receive.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$receive.prototype.constructor = Coroutine$receive;
  Coroutine$receive.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var polled = this.$this.poll();
            if (polled != null) {
              this.local$tmp$ = polled;
              this.state_0 = 3;
              continue;
            }
             else {
              var cd = CompletableDeferred();
              this.$this.closure$waiting.add_11rb$(cd);
              this.local$rk = add(this.$this.closure$ks, toAsync$ObjectLiteral$receive$lambda(this.$this.closure$waiting, cd));
              this.state_0 = 2;
              this.result_0 = cd.await(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var res = this.result_0;
            this.local$rk();
            this.local$tmp$ = res;
            this.state_0 = 3;
            continue;
          case 3:
            return this.local$tmp$;
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
  toAsync$ObjectLiteral.prototype.receive = function (continuation_0, suspended) {
    var instance = new Coroutine$receive(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  toAsync$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AsyncEmitter]
  };
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function toAsync(ks, emitters) {
    var waiting = ArrayList_init();
    var destination = ArrayList_init_0(emitters.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== emitters.length; ++tmp$) {
      var item = emitters[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var current = ArrayList_init();
      plusAssign(ks, item.add_qlkmfe$(toAsync$lambda$lambda(waiting, current)));
      tmp$_0.call(destination, current);
    }
    var currents = destination;
    return new toAsync$ObjectLiteral(currents, waiting, ks);
  }
  function toAsync_0($receiver, ks) {
    return toAsync(ks, [$receiver]);
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
            this.local$tmp$ = this.local$closure$rxv;
            this.state_0 = 2;
            this.result_0 = this.local$this$toRx.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$tmp$.now = new Some(this.result_0), Unit;
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
  function toRx$lambda(this$toRx_0, closure$rxv_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$toRx$lambda(this$toRx_0, closure$rxv_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function toRx($receiver) {
    var rxv = new Var(common.None);
    launch(coroutines.GlobalScope, void 0, void 0, toRx$lambda($receiver, rxv));
    return rxv;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function RandomChooser(emitters, recentSize, cacheSize, fn) {
    if (recentSize === void 0)
      recentSize = 1;
    if (cacheSize === void 0)
      cacheSize = 1;
    this.recentSize = recentSize;
    this.cacheSize = cacheSize;
    this.fn = fn;
    this.ks = new Killables();
    this.kill = this.ks.kill;
    this.FillCache = new RandomChooser$Event(this);
    this.waiting = ArrayList_init();
    this.eventChannel = Channel();
    this.cached = ArrayList_init();
    this.recent = ArrayList_init();
    var transform = getCallableRef('Source', function ($receiver, s) {
      return new RandomChooser$Source($receiver, s);
    }.bind(null, this));
    var destination = ArrayList_init_0(collectionSizeOrDefault(emitters, 10));
    var tmp$;
    tmp$ = emitters.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(transform(item));
    }
    this.sources = destination;
    addedTo_0(launch(coroutines.GlobalScope, void 0, void 0, RandomChooser_init$lambda(this)), this.ks);
  }
  function RandomChooser$Event($outer) {
    this.$outer = $outer;
  }
  RandomChooser$Event.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Event',
    interfaces: []
  };
  function RandomChooser$Input($outer, source, move) {
    this.$outer = $outer;
    RandomChooser$Event.call(this, this.$outer);
    this.source = source;
    this.move = move;
  }
  RandomChooser$Input.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Input',
    interfaces: [RandomChooser$Event]
  };
  function RandomChooser$Cache($outer, input, output, onEvict, onServe) {
    this.$outer = $outer;
    this.input = input;
    this.output = output;
    this.onEvict = onEvict;
    this.onServe = onServe;
  }
  RandomChooser$Cache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cache',
    interfaces: []
  };
  RandomChooser.prototype.fillCache = function () {
    post(this.eventChannel, this.FillCache);
  };
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  function RandomChooser$Source($outer, s) {
    this.$outer = $outer;
    this.alreadyChosen = LinkedHashSet_init();
    this.items = LinkedHashSet_init();
    var e = new Emitter();
    var sourceChannel = toChannel_0(e, this.$outer.ks.killSet);
    addAll(this.items, s.listen_cp6tho$(this.$outer.ks.killSet, getCallableRef('emit', function ($receiver, t) {
      return $receiver.emit_11rb$(t), Unit;
    }.bind(null, e))));
    addedTo_0(launch(coroutines.GlobalScope, void 0, void 0, RandomChooser$RandomChooser$Source_init$lambda(sourceChannel, this, this.$outer)), this.$outer.ks);
  }
  function Coroutine$tryFillCache($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$tryFillCache.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryFillCache.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryFillCache.prototype.constructor = Coroutine$tryFillCache;
  Coroutine$tryFillCache.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.attemptFillCache(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            if (!this.local$tmp$) {
              this.$this.alreadyChosen.clear();
              this.state_0 = 3;
              this.result_0 = this.$this.attemptFillCache(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            return this.local$tmp$;
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
  RandomChooser$Source.prototype.tryFillCache = function (continuation_0, suspended) {
    var instance = new Coroutine$tryFillCache(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function RandomChooser$Source$attemptFillCache$lambda(this$RandomChooser, closure$nextInput) {
    return function () {
      var $receiver = this$RandomChooser.recent;
      var element = closure$nextInput;
      $receiver.add_11rb$(element);
      while (this$RandomChooser.recent.size > this$RandomChooser.recentSize) {
        this$RandomChooser.recent.removeAt_za3lpa$(0);
      }
      return Unit;
    };
  }
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.collections.random_iscd7z$;
  function Coroutine$attemptFillCache($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$nextSet = void 0;
    this.local$nextInput = void 0;
    this.local$onEvict = void 0;
  }
  Coroutine$attemptFillCache.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$attemptFillCache.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$attemptFillCache.prototype.constructor = Coroutine$attemptFillCache;
  Coroutine$attemptFillCache.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.$outer.cached.size >= this.$this.$outer.cacheSize) {
              this.state_0 = 6;
              continue;
            }

            var tmp$ = minus(this.$this.items, this.$this.alreadyChosen);
            var $receiver = this.$this.$outer.cached;
            var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
              var item = tmp$_0.next();
              destination.add_11rb$(item.input);
            }

            this.local$nextSet = minus(minus(tmp$, destination), this.$this.$outer.recent);
            if (this.local$nextSet.isEmpty()) {
              return false;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$nextInput = random(this.local$nextSet, Random.Default);
            this.$this.alreadyChosen.add_11rb$(this.local$nextInput);
            this.local$onEvict = new Killables();
            this.state_0 = 4;
            this.result_0 = this.$this.$outer.fn(this.local$nextInput, this.local$onEvict, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var outputOpt = this.result_0;
            if (Kotlin.isType(outputOpt, Some)) {
              var onServe = new Killables();
              onServe.plusAssign_o14v8n$(this.$this.$outer.ks.add_o14v8n$(this.local$onEvict.kill));
              onServe.plusAssign_o14v8n$(once(RandomChooser$Source$attemptFillCache$lambda(this.$this.$outer, this.local$nextInput)));
              var output = outputOpt.value;
              var c = new RandomChooser$Cache(this.$this.$outer, this.local$nextInput, output, this.local$onEvict.kill, onServe.kill);
              this.$this.$outer.cached.add_11rb$(c);
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            return true;
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
  RandomChooser$Source.prototype.attemptFillCache = function (continuation_0, suspended) {
    var instance = new Coroutine$attemptFillCache(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$RandomChooser$RandomChooser$Source_init$lambda$lambda(this$Source_0, this$RandomChooser_0, i_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Source = this$Source_0;
    this.local$this$RandomChooser = this$RandomChooser_0;
    this.local$i = i_0;
  }
  Coroutine$RandomChooser$RandomChooser$Source_init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RandomChooser$RandomChooser$Source_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RandomChooser$RandomChooser$Source_init$lambda$lambda.prototype.constructor = Coroutine$RandomChooser$RandomChooser$Source_init$lambda$lambda;
  Coroutine$RandomChooser$RandomChooser$Source_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new RandomChooser$Input(this.local$this$RandomChooser, this.local$this$Source, this.local$i);
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
  function RandomChooser$RandomChooser$Source_init$lambda$lambda(this$Source_0, this$RandomChooser_0) {
    return function (i_0, continuation_0, suspended) {
      var instance = new Coroutine$RandomChooser$RandomChooser$Source_init$lambda$lambda(this$Source_0, this$RandomChooser_0, i_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$RandomChooser$RandomChooser$Source_init$lambda(closure$sourceChannel_0, this$Source_0, this$RandomChooser_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$sourceChannel = closure$sourceChannel_0;
    this.local$this$Source = this$Source_0;
    this.local$this$RandomChooser = this$RandomChooser_0;
  }
  Coroutine$RandomChooser$RandomChooser$Source_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RandomChooser$RandomChooser$Source_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RandomChooser$RandomChooser$Source_init$lambda.prototype.constructor = Coroutine$RandomChooser$RandomChooser$Source_init$lambda;
  Coroutine$RandomChooser$RandomChooser$Source_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = toChannel(map(this.local$closure$sourceChannel, void 0, RandomChooser$RandomChooser$Source_init$lambda$lambda(this.local$this$Source, this.local$this$RandomChooser)), this.local$this$RandomChooser.eventChannel, this);
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
  function RandomChooser$RandomChooser$Source_init$lambda(closure$sourceChannel_0, this$Source_0, this$RandomChooser_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$RandomChooser$RandomChooser$Source_init$lambda(closure$sourceChannel_0, this$Source_0, this$RandomChooser_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  RandomChooser$Source.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Source',
    interfaces: []
  };
  RandomChooser.prototype.poll = function () {
    var tmp$;
    if (!this.cached.isEmpty()) {
      var c = this.cached.removeAt_za3lpa$(0);
      this.fillCache();
      c.onServe();
      tmp$ = c.output;
    }
     else {
      tmp$ = null;
    }
    return tmp$;
  };
  function Coroutine$receive_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$receive_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$receive_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$receive_0.prototype.constructor = Coroutine$receive_0;
  Coroutine$receive_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var polled = this.$this.poll();
            if (polled != null) {
              this.local$tmp$ = polled;
              this.state_0 = 3;
              continue;
            }
             else {
              var cd = CompletableDeferred();
              this.$this.waiting.add_11rb$(cd);
              this.state_0 = 2;
              this.result_0 = cd.await(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            continue;
          case 3:
            return this.local$tmp$;
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
  RandomChooser.prototype.receive = function (continuation_0, suspended) {
    var instance = new Coroutine$receive_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  var Collection = Kotlin.kotlin.collections.Collection;
  function Coroutine$RandomChooser_init$lambda$tryFillCache(this$RandomChooser_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$RandomChooser = this$RandomChooser_0;
    this.local$$receiver = void 0;
    this.local$any$result = void 0;
    this.local$tmp$ = void 0;
  }
  Coroutine$RandomChooser_init$lambda$tryFillCache.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RandomChooser_init$lambda$tryFillCache.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RandomChooser_init$lambda$tryFillCache.prototype.constructor = Coroutine$RandomChooser_init$lambda$tryFillCache;
  Coroutine$RandomChooser_init$lambda$tryFillCache.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = this.local$this$RandomChooser.sources;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (Kotlin.isType(this.local$$receiver, Collection) && this.local$$receiver.isEmpty()) {
              this.local$any$result = false;
              this.state_0 = 8;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$tmp$ = this.local$$receiver.iterator();
            this.state_0 = 4;
            continue;
          case 4:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            var element = this.local$tmp$.next();
            this.state_0 = 5;
            this.result_0 = element.tryFillCache(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (this.result_0) {
              this.local$any$result = true;
              this.state_0 = 8;
              continue;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 6:
            this.state_0 = 4;
            continue;
          case 7:
            this.local$any$result = false;
            if (!false) {
              this.state_0 = 8;
              continue;
            }

            this.state_0 = 2;
            continue;
          case 8:
            return this.local$any$result;
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
  function RandomChooser_init$lambda$tryFillCache(this$RandomChooser_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$RandomChooser_init$lambda$tryFillCache(this$RandomChooser_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function RandomChooser_init$lambda$doServe(this$RandomChooser) {
    return function () {
      while (true) {
        var tmp$ = !this$RandomChooser.waiting.isEmpty();
        if (tmp$) {
          tmp$ = !this$RandomChooser.cached.isEmpty();
        }
        if (!tmp$)
          break;
        var c = this$RandomChooser.cached.removeAt_za3lpa$(0);
        var w = this$RandomChooser.waiting.removeAt_za3lpa$(0);
        c.onServe();
        w.complete_11rb$(c.output);
      }
    };
  }
  function Coroutine$RandomChooser_init$lambda$doFillCache(this$RandomChooser_0, closure$tryFillCache_0, closure$doServe_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$RandomChooser = this$RandomChooser_0;
    this.local$closure$tryFillCache = closure$tryFillCache_0;
    this.local$closure$doServe = closure$doServe_0;
  }
  Coroutine$RandomChooser_init$lambda$doFillCache.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RandomChooser_init$lambda$doFillCache.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RandomChooser_init$lambda$doFillCache.prototype.constructor = Coroutine$RandomChooser_init$lambda$doFillCache;
  Coroutine$RandomChooser_init$lambda$doFillCache.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$this$RandomChooser.sources;
            var tmp$;
            var accumulator = emptySet();
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              accumulator = plus(accumulator, element.items);
            }

            var all = accumulator;
            var iter = this.local$this$RandomChooser.cached.iterator();
            while (iter.hasNext()) {
              var next = iter.next();
              if (!all.contains_11rb$(next.input)) {
                iter.remove();
                next.onEvict();
              }
            }

            this.state_0 = 2;
            this.result_0 = this.local$closure$tryFillCache(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$closure$doServe();
            this.state_0 = 3;
            this.result_0 = this.local$closure$tryFillCache(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function RandomChooser_init$lambda$doFillCache(this$RandomChooser_0, closure$tryFillCache_0, closure$doServe_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$RandomChooser_init$lambda$doFillCache(this$RandomChooser_0, closure$tryFillCache_0, closure$doServe_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$RandomChooser_init$lambda(this$RandomChooser_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$RandomChooser = this$RandomChooser_0;
    this.local$tmp$ = void 0;
    this.local$doFillCache = void 0;
  }
  Coroutine$RandomChooser_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RandomChooser_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RandomChooser_init$lambda.prototype.constructor = Coroutine$RandomChooser_init$lambda;
  Coroutine$RandomChooser_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tryFillCache = RandomChooser_init$lambda$tryFillCache(this.local$this$RandomChooser);
            var doServe = RandomChooser_init$lambda$doServe(this.local$this$RandomChooser);
            this.local$doFillCache = RandomChooser_init$lambda$doFillCache(this.local$this$RandomChooser, tryFillCache, doServe);
            this.state_0 = 2;
            this.result_0 = this.local$doFillCache(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.local$this$RandomChooser.eventChannel.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            if (!this.result_0) {
              this.state_0 = 11;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 6;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var e_0 = this.result_0;
            if (equals(e_0, this.local$this$RandomChooser.FillCache)) {
              this.state_0 = 9;
              this.result_0 = this.local$doFillCache(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(e_0, RandomChooser$Input)) {
                e_0.move.applyTo_wgjnv3$(e_0.source.items);
                this.state_0 = 7;
                this.result_0 = this.local$doFillCache(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.state_0 = 8;
                continue;
              }
            }

          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 10;
            continue;
          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            this.state_0 = 3;
            continue;
          case 11:
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
  function RandomChooser_init$lambda(this$RandomChooser_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$RandomChooser_init$lambda(this$RandomChooser_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  RandomChooser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RandomChooser',
    interfaces: [AsyncEmitter]
  };
  function shared$lambda(it) {
    return new Lib(it);
  }
  var shared_metadata = new PropertyMetadata('shared');
  var shared;
  function get_shared() {
    return shared.getValue_lrcp0p$(this, shared_metadata);
  }
  function AdminUsersDoc() {
  }
  AdminUsersDoc.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AdminUsersDoc',
    interfaces: [AdminDoc]
  };
  function TokenDeveloperClaims() {
    Base.call(this);
    this.adminRight_jf0qlt$_0 = this.o.scalar_287e2$().prop_aspey6$().provideDelegate_lrcp0p$(this, TokenDeveloperClaims$adminRight_metadata);
    this.musicRight_98wbz9$_0 = this.o.scalar_287e2$().prop_aspey6$().provideDelegate_lrcp0p$(this, TokenDeveloperClaims$musicRight_metadata);
  }
  var TokenDeveloperClaims$adminRight_metadata = new PropertyMetadata('adminRight');
  Object.defineProperty(TokenDeveloperClaims.prototype, 'adminRight', {
    get: function () {
      return this.adminRight_jf0qlt$_0.getValue_lrcp0p$(this, TokenDeveloperClaims$adminRight_metadata);
    }
  });
  var TokenDeveloperClaims$musicRight_metadata = new PropertyMetadata('musicRight');
  Object.defineProperty(TokenDeveloperClaims.prototype, 'musicRight', {
    get: function () {
      return this.musicRight_98wbz9$_0.getValue_lrcp0p$(this, TokenDeveloperClaims$musicRight_metadata);
    }
  });
  TokenDeveloperClaims.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TokenDeveloperClaims',
    interfaces: [Base]
  };
  var users;
  var users_metadata = new PropertyMetadata('users');
  function get_users($receiver) {
    return users.getValue_lrcp0p$($receiver, users_metadata);
  }
  var tokens;
  var tokens_metadata = new PropertyMetadata('tokens');
  function get_tokens($receiver) {
    return tokens.getValue_lrcp0p$($receiver, tokens_metadata);
  }
  var customToken_metadata = new PropertyMetadata('customToken');
  var customToken;
  function get_customToken() {
    return customToken.getValue_lrcp0p$(this, customToken_metadata);
  }
  var package$commonlib = _.commonlib || (_.commonlib = {});
  package$commonlib.LoopT = LoopT;
  Object.defineProperty(package$commonlib, 'Ignore', {
    get: function () {
      return Ignore;
    }
  });
  package$commonlib.Actor = Actor;
  package$commonlib.post_rmur43$ = post;
  package$commonlib.toChannel_10flag$ = toChannel_0;
  package$commonlib.addedTo_cflf3n$ = addedTo_0;
  package$commonlib.toAsync_2ojuee$ = toAsync;
  package$commonlib.toAsync_ss8b8w$ = toAsync_0;
  package$commonlib.toRx_ge6odz$ = toRx;
  RandomChooser.Event = RandomChooser$Event;
  RandomChooser.Input = RandomChooser$Input;
  RandomChooser.Cache = RandomChooser$Cache;
  RandomChooser.Source = RandomChooser$Source;
  var package$commonlib_0 = package$commonlib.commonlib || (package$commonlib.commonlib = {});
  package$commonlib_0.RandomChooser = RandomChooser;
  Object.defineProperty(package$commonlib_0, 'shared', {
    get: get_shared
  });
  package$commonlib_0.AdminUsersDoc = AdminUsersDoc;
  package$commonlib_0.TokenDeveloperClaims = TokenDeveloperClaims;
  package$commonlib_0.get_users_cmfbet$ = get_users;
  package$commonlib_0.get_tokens_vfr2h5$ = get_tokens;
  Object.defineProperty(package$commonlib_0, 'customToken', {
    get: get_customToken
  });
  Ignore = new Ignore$ObjectLiteral();
  shared = named(shared$lambda).provideDelegate_n5byny$(this, shared_metadata);
  users = doc();
  tokens = coll();
  customToken = get_shared().function_q3lmfv$().provideDelegate_n5byny$(this, customToken_metadata);
  Kotlin.defineModule('appsimake-commonlib', _);
  return _;
}(typeof this['appsimake-commonlib'] === 'undefined' ? {} : this['appsimake-commonlib'], kotlin, this['kotlinx-coroutines-core'], this['appsimake-commonshr'], this['appsimake-firebaseshr']);

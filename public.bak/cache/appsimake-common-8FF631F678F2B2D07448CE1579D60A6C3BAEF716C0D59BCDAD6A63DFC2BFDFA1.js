if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-common'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-common'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-common'.");
}
this['appsimake-common'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var obj = $module$appsimake_commonshr.common.obj_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var minus = Kotlin.kotlin.collections.minus_2ws7j4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var List = Kotlin.kotlin.collections.List;
  var AbstractMutableList = Kotlin.kotlin.collections.AbstractMutableList;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var throwCCE = Kotlin.throwCCE;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var throwUPAE = Kotlin.throwUPAE;
  var equals = Kotlin.equals;
  ListenableMutableList.prototype = Object.create(AbstractMutableList.prototype);
  ListenableMutableList.prototype.constructor = ListenableMutableList;
  StateMachine$AlreadyShutdown.prototype = Object.create(State.prototype);
  StateMachine$AlreadyShutdown.prototype.constructor = StateMachine$AlreadyShutdown;
  Success.prototype = Object.create(Try.prototype);
  Success.prototype.constructor = Success;
  Failure.prototype = Object.create(Try.prototype);
  Failure.prototype.constructor = Failure;
  Some.prototype = Object.create(Optional.prototype);
  Some.prototype.constructor = Some;
  None.prototype = Object.create(Optional.prototype);
  None.prototype.constructor = None;
  Schema.prototype = Object.create(Enum.prototype);
  Schema.prototype.constructor = Schema;
  Killables.prototype = Object.create(Listeners.prototype);
  Killables.prototype.constructor = Killables;
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
  function Annotation() {
    return obj();
  }
  function onResize$lambda$lambda(closure$listeners) {
    return function (it) {
      closure$listeners.fire();
      return Unit;
    };
  }
  function onResize$lambda() {
    var listeners = new Listeners();
    window.onresize = onResize$lambda$lambda(listeners);
    return listeners;
  }
  var onResize;
  function get_onResize() {
    return onResize.value;
  }
  function resizeEvent($receiver, fn) {
    $receiver.window.setTimeout(fn, 0);
    fn();
    return get_onResize().add_o14v8n$(fn);
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function insertAt($receiver, position, element) {
    var length = $receiver.children.length;
    if (!(position <= length)) {
      var message = 'Requested position: ' + position + ' is more than length: ' + length;
      throw IllegalArgumentException_init(message.toString());
    }
    if (length === position) {
      $receiver.appendChild(element);
    }
     else {
      $receiver.insertBefore(element, $receiver.children.item(position));
    }
  }
  function insertAt_0($receiver, position, element) {
    var length = $receiver.childNodes.length;
    if (!(position <= length)) {
      var message = 'Requested position: ' + position + ' is more than length: ' + length;
      throw IllegalArgumentException_init(message.toString());
    }
    if (length === position) {
      $receiver.appendChild(element);
    }
     else {
      $receiver.insertBefore(element, $receiver.childNodes.item(position));
    }
  }
  function removeAt($receiver, position) {
    return $receiver.removeChild(ensureNotNull($receiver.children.item(position)));
  }
  function removeAt_0($receiver, position) {
    return $receiver.removeChild(ensureNotNull($receiver.childNodes.item(position)));
  }
  function replaceAt($receiver, position, element) {
    $receiver.replaceChild(ensureNotNull($receiver.children.item(position)), element);
  }
  function removeFromParent($receiver) {
    var tmp$;
    (tmp$ = $receiver.parentElement) != null ? tmp$.removeChild($receiver) : null;
  }
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
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
    return Emitter$add$lambda(this, listener);
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
  function attachEnabler$lambda(this$attachEnabler) {
    return function (en) {
      if (en) {
        removeClass(this$attachEnabler, ['disabled']);
        this$attachEnabler.style.cursor = 'pointer';
      }
       else {
        addClass(this$attachEnabler, ['disabled']);
        this$attachEnabler.style.cursor = 'default';
      }
      return Unit;
    };
  }
  function attachEnabler($receiver, enabled) {
    return enabled.forEach_qlkmfe$(attachEnabler$lambda($receiver));
  }
  function linkedIterable$ObjectLiteral(closure$next, closure$first) {
    this.closure$next = closure$next;
    this.closure$first = closure$first;
  }
  function linkedIterable$ObjectLiteral$iterator$ObjectLiteral(closure$next, closure$first) {
    this.closure$next = closure$next;
    this.current = closure$first;
  }
  linkedIterable$ObjectLiteral$iterator$ObjectLiteral.prototype.next = function () {
    var tmp = this.current;
    if (tmp == null) {
      throw NoSuchElementException_init();
    }
     else {
      this.current = this.closure$next(tmp);
      return tmp;
    }
  };
  linkedIterable$ObjectLiteral$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.current != null;
  };
  linkedIterable$ObjectLiteral$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  linkedIterable$ObjectLiteral.prototype.iterator = function () {
    return new linkedIterable$ObjectLiteral$iterator$ObjectLiteral(this.closure$next, this.closure$first);
  };
  linkedIterable$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterable]
  };
  function linkedIterable(first, next) {
    return new linkedIterable$ObjectLiteral(next, first);
  }
  function ListenableList() {
  }
  function ListenableList$Listener() {
    ListenableList$Listener$Companion_getInstance();
  }
  function ListenableList$Listener$Companion() {
    ListenableList$Listener$Companion_instance = this;
  }
  function ListenableList$Listener$Companion$of$ObjectLiteral(closure$added, closure$removed, closure$moved) {
    this.closure$added = closure$added;
    this.closure$removed = closure$removed;
    this.closure$moved = closure$moved;
  }
  ListenableList$Listener$Companion$of$ObjectLiteral.prototype.added_wxm5ur$ = function (index, element) {
    this.closure$added(index, element);
  };
  ListenableList$Listener$Companion$of$ObjectLiteral.prototype.removed_za3lpa$ = function (index) {
    this.closure$removed(index);
  };
  ListenableList$Listener$Companion$of$ObjectLiteral.prototype.moved_vux9f0$ = function (from, to) {
    this.closure$moved(from, to);
  };
  ListenableList$Listener$Companion$of$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ListenableList$Listener]
  };
  ListenableList$Listener$Companion.prototype.of_iwvohr$ = function (added, removed, moved) {
    return new ListenableList$Listener$Companion$of$ObjectLiteral(added, removed, moved);
  };
  ListenableList$Listener$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ListenableList$Listener$Companion_instance = null;
  function ListenableList$Listener$Companion_getInstance() {
    if (ListenableList$Listener$Companion_instance === null) {
      new ListenableList$Listener$Companion();
    }
    return ListenableList$Listener$Companion_instance;
  }
  ListenableList$Listener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Listener',
    interfaces: []
  };
  ListenableList.prototype.addListener_6r1g8a$ = function (added, removed, moved) {
    return this.addListener_ednqrc$(ListenableList$Listener$Companion_getInstance().of_iwvohr$(added, removed, moved));
  };
  ListenableList.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ListenableList',
    interfaces: [List]
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function ListenableMutableList() {
    AbstractMutableList.call(this);
    this.sizeVar_0 = new Var(0);
    this.isEmptyRx = Rx_init_0(ListenableMutableList$isEmptyRx$lambda(this));
    this.delegate_0 = ArrayList_init();
    this.listeners_0 = emptyList();
  }
  Object.defineProperty(ListenableMutableList.prototype, 'sizeRx', {
    get: function () {
      return this.sizeVar_0;
    }
  });
  function ListenableMutableList$addListener$lambda(this$ListenableMutableList, closure$listener) {
    return function () {
      this$ListenableMutableList.listeners_0 = minus(this$ListenableMutableList.listeners_0, closure$listener);
      return Unit;
    };
  }
  ListenableMutableList.prototype.addListener_ednqrc$ = function (listener) {
    this.listeners_0 = plus(this.listeners_0, listener);
    return ListenableMutableList$addListener$lambda(this, listener);
  };
  Object.defineProperty(ListenableMutableList.prototype, 'size', {
    get: function () {
      return this.delegate_0.size;
    }
  });
  ListenableMutableList.prototype.add_wxm5ur$ = function (index, element) {
    this.delegate_0.add_wxm5ur$(index, element);
    this.sizeVar_0.now = this.size;
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element_0 = tmp$.next();
      element_0.added_wxm5ur$(index, element);
    }
  };
  ListenableMutableList.prototype.removeAt_za3lpa$ = function (index) {
    var v = this.delegate_0.removeAt_za3lpa$(index);
    this.sizeVar_0.now = this.size;
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.removed_za3lpa$(index);
    }
    return v;
  };
  ListenableMutableList.prototype.set_wxm5ur$ = function (index, element) {
    var v = this.delegate_0.set_wxm5ur$(index, element);
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element_0 = tmp$.next();
      element_0.removed_za3lpa$(index);
      element_0.added_wxm5ur$(index, element);
    }
    return v;
  };
  ListenableMutableList.prototype.get_za3lpa$ = function (index) {
    return this.delegate_0.get_za3lpa$(index);
  };
  ListenableMutableList.prototype.move_vux9f0$ = function (from, to) {
    var v = this.delegate_0.removeAt_za3lpa$(from);
    this.delegate_0.add_wxm5ur$(to, v);
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.moved_vux9f0$(from, to);
    }
  };
  function ListenableMutableList$isEmptyRx$lambda(this$ListenableMutableList) {
    return function () {
      return this$ListenableMutableList.sizeVar_0.invoke() === 0;
    };
  }
  ListenableMutableList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListenableMutableList',
    interfaces: [ListenableList, AbstractMutableList]
  };
  function UNINITIALIZED() {
    UNINITIALIZED_instance = this;
  }
  UNINITIALIZED.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UNINITIALIZED',
    interfaces: []
  };
  var UNINITIALIZED_instance = null;
  function UNINITIALIZED_getInstance() {
    if (UNINITIALIZED_instance === null) {
      new UNINITIALIZED();
    }
    return UNINITIALIZED_instance;
  }
  function LazyDelegate(fn) {
    this.fn_0 = fn;
    this.value_0 = UNINITIALIZED_getInstance();
  }
  LazyDelegate.prototype.getValue_n5byny$ = function (thisRef, property) {
    if (this.value_0 === UNINITIALIZED_getInstance()) {
      this.value_0 = this.fn_0(thisRef, property);
    }
    return this.value_0;
  };
  LazyDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LazyDelegate',
    interfaces: []
  };
  function lazyNamed$lambda(closure$fn) {
    return function (f, p) {
      return closure$fn(p.callableName);
    };
  }
  function lazyNamed(fn) {
    return new LazyDelegate(lazyNamed$lambda(fn));
  }
  var objectKeys = defineInlineFunction('appsimake-common.common.objectKeys_za3rmp$', function (json) {
    return Object.keys(json);
  });
  function res(path) {
    var tmp$, tmp$_0, tmp$_1;
    var resmaps = window.resmaps;
    while (!(resmaps.modules.length === 0)) {
      var module_0 = resmaps.modules.shift();
      tmp$ = Object.keys(module_0);
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var k = tmp$[tmp$_0];
        resmaps.map[k] = module_0[k];
      }
    }
    return typeof (tmp$_1 = resmaps.map[path]) === 'string' ? tmp$_1 : throwCCE();
  }
  function State1() {
  }
  State1.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'State1',
    interfaces: []
  };
  function State0() {
  }
  State0.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'State0',
    interfaces: []
  };
  function AsyncState0() {
  }
  AsyncState0.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AsyncState0',
    interfaces: []
  };
  function state1$ObjectLiteral(closure$fn) {
    this.closure$fn = closure$fn;
  }
  state1$ObjectLiteral.prototype.invoke_11rb$ = function (input) {
    return this.closure$fn(input);
  };
  state1$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [State1]
  };
  function state1(fn) {
    return new state1$ObjectLiteral(fn);
  }
  function state0$ObjectLiteral(closure$fn) {
    this.closure$fn = closure$fn;
  }
  state0$ObjectLiteral.prototype.invoke = function () {
    return this.closure$fn();
  };
  state0$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [State0]
  };
  function state0(fn) {
    return new state0$ObjectLiteral(fn);
  }
  function asyncState0$ObjectLiteral(closure$fn) {
    this.closure$fn = closure$fn;
  }
  asyncState0$ObjectLiteral.prototype.invoke = function (continuation) {
    return this.closure$fn();
  };
  asyncState0$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AsyncState0]
  };
  function asyncState0(fn) {
    return new asyncState0$ObjectLiteral(fn);
  }
  function StateMachine1(initial) {
    this.state_8be2vx$ = initial;
  }
  StateMachine1.prototype.process_11rb$ = function (input) {
    var tmp$;
    var out = this.state_8be2vx$.invoke_11rb$(input);
    if ((tmp$ = out.first) != null) {
      this.state_8be2vx$ = tmp$;
    }
    return out.second;
  };
  StateMachine1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateMachine1',
    interfaces: []
  };
  function StateMachine0(initial) {
    this.state_8be2vx$ = initial;
  }
  StateMachine0.prototype.process = function () {
    var tmp$;
    var out = this.state_8be2vx$.invoke();
    if ((tmp$ = out.first) != null) {
      this.state_8be2vx$ = tmp$;
    }
    return out.second;
  };
  StateMachine0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateMachine0',
    interfaces: []
  };
  function AsyncStateMachine0(initial) {
    this.state_8be2vx$ = initial;
  }
  AsyncStateMachine0.prototype.process = function (continuation_0, suspended) {
    var instance = new Coroutine$process(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$process($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$process.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$process.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$process.prototype.constructor = Coroutine$process;
  Coroutine$process.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.state_8be2vx$.invoke(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var out = this.result_0;
            if ((tmp$ = out.first) != null) {
              this.$this.state_8be2vx$ = tmp$;
            }

            return out.second;
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
  AsyncStateMachine0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsyncStateMachine0',
    interfaces: []
  };
  function LazySM0(fn) {
    this.sm_8be2vx$ = new StateMachine0(state0(LazySM0$sm$lambda(fn)));
  }
  function LazySM0$sm$lambda$lambda(closure$v) {
    return function () {
      return to(null, closure$v);
    };
  }
  function LazySM0$sm$lambda(closure$fn) {
    return function () {
      var v = closure$fn();
      return to(state0(LazySM0$sm$lambda$lambda(v)), v);
    };
  }
  LazySM0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LazySM0',
    interfaces: []
  };
  function State() {
  }
  function State$enter$lambda() {
    return Unit;
  }
  State.prototype.enter = function () {
    return State$enter$lambda;
  };
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function StateMachine(state) {
    this.state_0 = state;
    this.destroy_0 = this.state_0.enter();
  }
  StateMachine.prototype.update_11rb$ = function (input) {
    var nextState = this.state_0.process_11rb$(input);
    if (nextState != null) {
      this.destroy_0();
      this.state_0 = nextState;
      this.destroy_0 = this.state_0.enter();
    }
  };
  StateMachine.prototype.alreadyShutdown_0 = function () {
    throw RuntimeException_init('state machine already shut down');
  };
  function StateMachine$AlreadyShutdown($outer) {
    this.$outer = $outer;
    State.call(this);
  }
  StateMachine$AlreadyShutdown.prototype.process_11rb$ = function (input) {
    return this.$outer.alreadyShutdown_0();
  };
  StateMachine$AlreadyShutdown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlreadyShutdown',
    interfaces: [State]
  };
  function StateMachine$shutdown$lambda(this$StateMachine) {
    return function () {
      this$StateMachine.alreadyShutdown_0();
      return Unit;
    };
  }
  StateMachine.prototype.shutdown = function () {
    var tmp$;
    this.destroy_0();
    this.destroy_0 = StateMachine$shutdown$lambda(this);
    this.state_0 = Kotlin.isType(tmp$ = new StateMachine$AlreadyShutdown(this), State) ? tmp$ : throwCCE();
  };
  StateMachine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateMachine',
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
  Some.prototype.toString = function () {
    return 'Some(' + this.value + ')';
  };
  Some.prototype.get = function () {
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
  None.prototype.toString = function () {
    return 'None';
  };
  None.prototype.get = function () {
    throw NoSuchElementException_init();
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
  function JsYamlOptions() {
    return obj();
  }
  function Schema(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Schema_initFields() {
    Schema_initFields = function () {
    };
    Schema$FAILSAFE_SCHEMA_instance = new Schema('FAILSAFE_SCHEMA', 0);
    Schema$JSON_SCHEMA_instance = new Schema('JSON_SCHEMA', 1);
    Schema$CORE_SCHEMA_instance = new Schema('CORE_SCHEMA', 2);
    Schema$DEFAULT_SAFE_SCHEMA_instance = new Schema('DEFAULT_SAFE_SCHEMA', 3);
    Schema$DEFAULT_FULL_SCHEMA_instance = new Schema('DEFAULT_FULL_SCHEMA', 4);
  }
  var Schema$FAILSAFE_SCHEMA_instance;
  function Schema$FAILSAFE_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$FAILSAFE_SCHEMA_instance;
  }
  var Schema$JSON_SCHEMA_instance;
  function Schema$JSON_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$JSON_SCHEMA_instance;
  }
  var Schema$CORE_SCHEMA_instance;
  function Schema$CORE_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$CORE_SCHEMA_instance;
  }
  var Schema$DEFAULT_SAFE_SCHEMA_instance;
  function Schema$DEFAULT_SAFE_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$DEFAULT_SAFE_SCHEMA_instance;
  }
  var Schema$DEFAULT_FULL_SCHEMA_instance;
  function Schema$DEFAULT_FULL_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$DEFAULT_FULL_SCHEMA_instance;
  }
  Schema.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Schema',
    interfaces: [Enum]
  };
  function Schema$values() {
    return [Schema$FAILSAFE_SCHEMA_getInstance(), Schema$JSON_SCHEMA_getInstance(), Schema$CORE_SCHEMA_getInstance(), Schema$DEFAULT_SAFE_SCHEMA_getInstance(), Schema$DEFAULT_FULL_SCHEMA_getInstance()];
  }
  Schema.values = Schema$values;
  function Schema$valueOf(name) {
    switch (name) {
      case 'FAILSAFE_SCHEMA':
        return Schema$FAILSAFE_SCHEMA_getInstance();
      case 'JSON_SCHEMA':
        return Schema$JSON_SCHEMA_getInstance();
      case 'CORE_SCHEMA':
        return Schema$CORE_SCHEMA_getInstance();
      case 'DEFAULT_SAFE_SCHEMA':
        return Schema$DEFAULT_SAFE_SCHEMA_getInstance();
      case 'DEFAULT_FULL_SCHEMA':
        return Schema$DEFAULT_FULL_SCHEMA_getInstance();
      default:throwISE('No enum constant jsyaml.Schema.' + name);
    }
  }
  Schema.valueOf_61zpoe$ = Schema$valueOf;
  function get_schemaEnum($receiver) {
    var tmp$;
    return (tmp$ = $receiver.schema) != null ? Schema$valueOf(tmp$) : null;
  }
  function set_schemaEnum($receiver, v) {
    $receiver.schema = v != null ? v.toString() : null;
  }
  function Killable() {
    Killable$Companion_getInstance();
  }
  Killable.prototype.addTo_di35k5$ = function (killables) {
    add(killables, this);
  };
  function Killable$Companion() {
    Killable$Companion_instance = this;
  }
  Killable$Companion.prototype.of_o14v8n$ = function (fn) {
    var $receiver = new Killables();
    $receiver.plusAssign_o14v8n$(fn);
    return $receiver;
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
    $receiver.add_o14v8n$(add$lambda(killable));
  }
  function KillableValue(value, killable) {
    this.value = value;
    this.killable = killable;
  }
  KillableValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillableValue',
    interfaces: []
  };
  function KillableValue_init(value, fn, $this) {
    $this = $this || Object.create(KillableValue.prototype);
    KillableValue.call($this, value, Killable$Companion_getInstance().of_o14v8n$(fn));
    return $this;
  }
  function Killables() {
    Listeners.call(this);
    this.killed_0 = false;
  }
  Killables.prototype.kill = function () {
    this.fire();
  };
  Killables.prototype.fire = function () {
    Listeners.prototype.fire.call(this);
    this.listeners = emptyList();
    this.killed_0 = true;
  };
  function Killables$add$lambda() {
    return Unit;
  }
  Killables.prototype.add_o14v8n$ = function (listener) {
    if (this.killed_0) {
      listener();
      return Killables$add$lambda;
    }
     else {
      return Listeners.prototype.add_o14v8n$.call(this, listener);
    }
  };
  Killables.prototype.plusAssign_wii6vi$ = function (killable) {
    add(this, killable);
  };
  Killables.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Killables',
    interfaces: [Killable, Listeners]
  };
  function KillableSeq(initial) {
    if (initial === void 0)
      initial = KillableSeq_init$lambda;
    this.current_0 = initial;
    this.killed_0 = false;
  }
  function KillableSeq$kill$lambda() {
    return Unit;
  }
  KillableSeq.prototype.kill = function () {
    if (!this.killed_0) {
      this.killed_0 = true;
      this.current_0();
      this.current_0 = KillableSeq$kill$lambda;
    }
  };
  KillableSeq.prototype.set_o14v8n$ = function (fn) {
    if (this.killed_0) {
      fn();
    }
     else {
      this.current_0();
      this.current_0 = fn;
    }
  };
  function KillableSeq_init$lambda() {
    return Unit;
  }
  KillableSeq.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillableSeq',
    interfaces: [Killable]
  };
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
  Var.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Var',
    interfaces: [RxVal]
  };
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
  function rxClass($receiver, style) {
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
  function rxClasses($receiver, style) {
    return style.onOff_uc1utc$(rxClasses$lambda($receiver), rxClasses$lambda_0($receiver));
  }
  var package$ace = _.ace || (_.ace = {});
  package$ace.Annotation = Annotation;
  var package$common = _.common || (_.common = {});
  Object.defineProperty(package$common, 'onResize', {
    get: get_onResize
  });
  package$common.resizeEvent_5ehnu1$ = resizeEvent;
  package$common.insertAt_tevjyx$ = insertAt;
  package$common.insertAt_y55kqv$ = insertAt_0;
  package$common.removeAt_poj3bi$ = removeAt;
  package$common.removeAt_jeu5im$ = removeAt_0;
  package$common.replaceAt_l17iyt$ = replaceAt;
  package$common.removeFromParent_asww5s$ = removeFromParent;
  package$common.Listeners = Listeners;
  package$common.Emitter = Emitter;
  package$common.attachEnabler_2mgs05$ = attachEnabler;
  package$common.linkedIterable_h43q6c$ = linkedIterable;
  Object.defineProperty(ListenableList$Listener, 'Companion', {
    get: ListenableList$Listener$Companion_getInstance
  });
  ListenableList.Listener = ListenableList$Listener;
  package$common.ListenableList = ListenableList;
  package$common.ListenableMutableList = ListenableMutableList;
  package$common.LazyDelegate = LazyDelegate;
  package$common.lazyNamed_cq6yhu$ = lazyNamed;
  package$common.objectKeys_za3rmp$ = objectKeys;
  $$importsForInline$$['appsimake-common'] = _;
  package$common.res_61zpoe$ = res;
  package$common.State1 = State1;
  package$common.State0 = State0;
  package$common.AsyncState0 = AsyncState0;
  package$common.state1_of8dpg$ = state1;
  package$common.state0_gmleg1$ = state0;
  package$common.asyncState0_rdka2b$ = asyncState0;
  package$common.StateMachine1 = StateMachine1;
  package$common.StateMachine0 = StateMachine0;
  package$common.AsyncStateMachine0 = AsyncStateMachine0;
  package$common.LazySM0 = LazySM0;
  package$common.State = State;
  package$common.StateMachine = StateMachine;
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
  var package$jsyaml = _.jsyaml || (_.jsyaml = {});
  package$jsyaml.JsYamlOptions = JsYamlOptions;
  Object.defineProperty(Schema, 'FAILSAFE_SCHEMA', {
    get: Schema$FAILSAFE_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'JSON_SCHEMA', {
    get: Schema$JSON_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'CORE_SCHEMA', {
    get: Schema$CORE_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'DEFAULT_SAFE_SCHEMA', {
    get: Schema$DEFAULT_SAFE_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'DEFAULT_FULL_SCHEMA', {
    get: Schema$DEFAULT_FULL_SCHEMA_getInstance
  });
  package$jsyaml.Schema = Schema;
  package$jsyaml.get_schemaEnum_lf44v5$ = get_schemaEnum;
  package$jsyaml.set_schemaEnum_isj6f3$ = set_schemaEnum;
  Object.defineProperty(Killable, 'Companion', {
    get: Killable$Companion_getInstance
  });
  var package$killable = _.killable || (_.killable = {});
  package$killable.Killable = Killable;
  package$killable.invoke_di35i9$ = invoke;
  package$killable.add_8dof8l$ = add;
  package$killable.KillableValue_init_vsvlef$ = KillableValue_init;
  package$killable.KillableValue = KillableValue;
  package$killable.Killables = Killables;
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
  package$rx.RxIfaceKillable = RxIfaceKillable;
  package$rx.Rx_init_ky6tb9$ = Rx_init;
  package$rx.Rx_init_klfg04$ = Rx_init_0;
  package$rx.Rx = Rx;
  package$rx.Var = Var;
  package$rx.rxClass_jgfmsn$ = rxClass;
  package$rx.rxHover_st2z1u$ = rxHover;
  package$rx.rxClassOpt_ywk6sc$ = rxClassOpt;
  package$rx.rxClasses_5wy11i$ = rxClasses;
  ListenableMutableList.prototype.addListener_6r1g8a$ = ListenableList.prototype.addListener_6r1g8a$;
  Killables.prototype.addTo_di35k5$ = Killable.prototype.addTo_di35k5$;
  KillableSeq.prototype.addTo_di35k5$ = Killable.prototype.addTo_di35k5$;
  Obs.prototype.addTo_di35k5$ = Killable.prototype.addTo_di35k5$;
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
  RxIfaceKillable.prototype.addTo_di35k5$ = Killable.prototype.addTo_di35k5$;
  RxIface$folded$ObjectLiteral.prototype.addTo_di35k5$ = RxIfaceKillable.prototype.addTo_di35k5$;
  Rx.prototype.addTo_di35k5$ = RxIfaceKillable.prototype.addTo_di35k5$;
  onResize = lazy(onResize$lambda);
  currentChild = null;
  affected = ArrayList_init();
  Kotlin.defineModule('appsimake-common', _);
  return _;
}(typeof this['appsimake-common'] === 'undefined' ? {} : this['appsimake-common'], kotlin, this['appsimake-commonshr']);

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonlib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonlib'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonlib'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-commonlib'.");
}
this['appsimake-commonlib'] = function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  Actor$Change.prototype = Object.create(Actor$Iter.prototype);
  Actor$Change.prototype.constructor = Actor$Change;
  Actor$Same$ObjectLiteral.prototype = Object.create(Actor$Iter.prototype);
  Actor$Same$ObjectLiteral.prototype.constructor = Actor$Same$ObjectLiteral;
  function Actor(killables) {
    this.Same = new Actor$Same$ObjectLiteral(this);
    this.channel = Channel();
    killables.plusAssign_o14v8n$(Actor_init$lambda$lambda(launch(coroutines.GlobalScope, void 0, void 0, Actor_init$lambda(this))));
  }
  function Actor$Iter($outer) {
    this.$outer = $outer;
  }
  Actor$Iter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Iter',
    interfaces: []
  };
  function Actor$Change($outer, next) {
    this.$outer = $outer;
    Actor$Iter.call(this, this.$outer);
    this.next = next;
  }
  Actor$Change.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Change',
    interfaces: [Actor$Iter]
  };
  function Actor$post$lambda(this$Actor_0, closure$e_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$Actor$post$lambda(this$Actor_0, closure$e_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Actor$post$lambda(this$Actor_0, closure$e_0, $receiver, controller, continuation_0) {
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
  Actor.prototype.post_11rb$ = function (e) {
    launch(coroutines.GlobalScope, void 0, void 0, Actor$post$lambda(this, e));
  };
  function Actor$Mixin($outer, process) {
    this.$outer = $outer;
    this.process = process;
  }
  Actor$Mixin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: []
  };
  function Actor$Loop($outer, process) {
    this.$outer = $outer;
    this.process = process;
  }
  Actor$Loop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Loop',
    interfaces: []
  };
  Actor.prototype.mixin_ho1cvy$ = function (fn) {
    return new Actor$Mixin(this, fn);
  };
  Actor.prototype.loop_6ay0xn$ = function (fn) {
    return new Actor$Loop(this, fn);
  };
  function Actor$or$lambda(this$or_0, closure$fn_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$Actor$or$lambda(this$or_0, closure$fn_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Actor$or$lambda(this$or_0, closure$fn_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$or = this$or_0;
    this.local$closure$fn = closure$fn_0;
    this.local$tmp$ = void 0;
    this.local$e = e_0;
  }
  Coroutine$Actor$or$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Actor$or$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Actor$or$lambda.prototype.constructor = Coroutine$Actor$or$lambda;
  Coroutine$Actor$or$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$or.process(this.local$e, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            if (this.local$tmp$ == null) {
              this.state_0 = 3;
              this.result_0 = this.local$closure$fn(this.local$e, this);
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
  Actor.prototype.or_jbc11u$ = function ($receiver, fn) {
    return this.mixin_ho1cvy$(Actor$or$lambda($receiver, fn));
  };
  Actor.prototype.or_n2n6r5$ = function ($receiver, fn) {
    return this.or_jbc11u$($receiver, fn.process);
  };
  function Actor$or$lambda_0(this$or_0, closure$fn_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$Actor$or$lambda_0(this$or_0, closure$fn_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Actor$or$lambda_0(this$or_0, closure$fn_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$or = this$or_0;
    this.local$closure$fn = closure$fn_0;
    this.local$tmp$ = void 0;
    this.local$e = e_0;
  }
  Coroutine$Actor$or$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Actor$or$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Actor$or$lambda_0.prototype.constructor = Coroutine$Actor$or$lambda_0;
  Coroutine$Actor$or$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$or.process(this.local$e, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            if (this.local$tmp$ == null) {
              this.state_0 = 3;
              this.result_0 = this.local$closure$fn(this.local$e, this);
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
  Actor.prototype.or_okxket$ = function ($receiver, fn) {
    return this.loop_6ay0xn$(Actor$or$lambda_0($receiver, fn));
  };
  Actor.prototype.or_gtvyvi$ = function ($receiver, fn) {
    return this.or_okxket$($receiver, fn.process);
  };
  function Actor$Same$ObjectLiteral(this$Actor) {
    Actor$Iter.call(this, this$Actor);
  }
  Actor$Same$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Actor$Iter]
  };
  function Actor_init$lambda(this$Actor_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$Actor_init$lambda(this$Actor_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Actor_init$lambda(this$Actor_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Actor = this$Actor_0;
    this.local$tmp$ = void 0;
    this.local$iter = void 0;
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
            this.local$iter = this.local$this$Actor.start;
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
            this.result_0 = this.local$iter.process(e_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var next = this.result_0;
            if (Kotlin.isType(next, Actor$Change)) {
              this.local$iter = next.next;
            }

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
  Actor.Iter = Actor$Iter;
  Actor.Change = Actor$Change;
  Actor.Mixin = Actor$Mixin;
  Actor.Loop = Actor$Loop;
  var package$commonlib = _.commonlib || (_.commonlib = {});
  package$commonlib.Actor = Actor;
  Kotlin.defineModule('appsimake-commonlib', _);
  return _;
}(typeof this['appsimake-commonlib'] === 'undefined' ? {} : this['appsimake-commonlib'], kotlin, this['kotlinx-coroutines-core']);

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonlib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonlib'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonlib'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-commonlib'.");
}
this['appsimake-commonlib'] = function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
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
  var package$commonlib = _.commonlib || (_.commonlib = {});
  package$commonlib.LoopT = LoopT;
  Object.defineProperty(package$commonlib, 'Ignore', {
    get: function () {
      return Ignore;
    }
  });
  package$commonlib.Actor = Actor;
  package$commonlib.post_rmur43$ = post;
  Ignore = new Ignore$ObjectLiteral();
  Kotlin.defineModule('appsimake-commonlib', _);
  return _;
}(typeof this['appsimake-commonlib'] === 'undefined' ? {} : this['appsimake-commonlib'], kotlin, this['kotlinx-coroutines-core']);

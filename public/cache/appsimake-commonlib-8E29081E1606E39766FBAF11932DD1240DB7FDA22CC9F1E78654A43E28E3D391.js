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
  var Lib = $module$appsimake_commonshr.commonshr.Lib;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var AdminDoc = $module$appsimake_commonshr.commonshr.AdminDoc;
  var Base = $module$appsimake_firebaseshr.firebaseshr.Base;
  var doc = $module$appsimake_commonshr.commonshr.doc_287e2$;
  var coll = $module$appsimake_commonshr.commonshr.coll_287e2$;
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
  function toChannel($receiver, ks) {
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
  package$commonlib.toChannel_10flag$ = toChannel;
  package$commonlib.addedTo_cflf3n$ = addedTo_0;
  package$commonlib.toAsync_2ojuee$ = toAsync;
  package$commonlib.toAsync_ss8b8w$ = toAsync_0;
  package$commonlib.toRx_ge6odz$ = toRx;
  var package$commonlib_0 = package$commonlib.commonlib || (package$commonlib.commonlib = {});
  Object.defineProperty(package$commonlib_0, 'shared', {
    get: get_shared
  });
  package$commonlib_0.AdminUsersDoc = AdminUsersDoc;
  package$commonlib_0.TokenDeveloperClaims = TokenDeveloperClaims;
  package$commonlib_0.get_users_g4qqrv$ = get_users;
  package$commonlib_0.get_tokens_b1xqfl$ = get_tokens;
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

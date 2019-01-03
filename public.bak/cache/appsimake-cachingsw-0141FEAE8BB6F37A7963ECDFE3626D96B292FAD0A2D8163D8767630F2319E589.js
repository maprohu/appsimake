if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-cachingsw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-cachingsw'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-cachingsw'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-cachingsw'.");
}
if (typeof this['appsimake-buildenv'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-cachingsw'. Its dependency 'appsimake-buildenv' was not found. Please, check whether 'appsimake-buildenv' is loaded prior to 'appsimake-cachingsw'.");
}
this['appsimake-cachingsw'] = function (_, Kotlin, $module$kotlinx_coroutines_core, $module$appsimake_buildenv) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var buildenv = $module$appsimake_buildenv.buildenv;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var asPromise = $module$kotlinx_coroutines_core.kotlinx.coroutines.asPromise_ge6odz$;
  var equals = Kotlin.equals;
  var sw;
  function main$lambda$lambda($receiver, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda$lambda($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$main$lambda$lambda($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$cache = void 0;
  }
  Coroutine$main$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda;
  Coroutine$main$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(sw.caches.open('appsimake-cache'), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$cache = this.result_0;
            var files = sw[buildenv.resourcesPropertyName];
            this.state_0 = 3;
            this.result_0 = await_0(this.local$cache.addAll(files), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = await_0(this.local$cache.add(sw.registration.scope), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  function main$lambda(event) {
    var tmp$;
    Kotlin.isType(tmp$ = event, InstallEvent) ? tmp$ : throwCCE();
    event.waitUntil(asPromise(async(coroutines.GlobalScope, void 0, void 0, main$lambda$lambda)));
    return Unit;
  }
  function main$lambda$lambda_0(closure$event_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda_0(closure$event_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda_0(closure$event_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$event = closure$event_0;
  }
  Coroutine$main$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda_0.prototype.constructor = Coroutine$main$lambda$lambda_0;
  Coroutine$main$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = await_0(sw.caches.match(this.local$closure$event.request), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = (tmp$ = this.result_0) == null || Kotlin.isType(tmp$, Response) ? tmp$ : throwCCE();
            if (response != null) {
              return response;
            }
             else {
              if (equals((new URL(this.local$closure$event.request.url)).origin, (new URL(sw.registration.scope)).origin)) {
                console.log(this.local$closure$event.request.url);
              }
              this.state_0 = 3;
              this.result_0 = await_0(sw.fetch(this.local$closure$event.request), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 3:
            return this.result_0;
          case 4:
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
  function main$lambda_0(event) {
    var tmp$;
    Kotlin.isType(tmp$ = event, FetchEvent) ? tmp$ : throwCCE();
    event.respondWith(asPromise(async(coroutines.GlobalScope, void 0, void 0, main$lambda$lambda_0(event))));
    return Unit;
  }
  function main(args) {
    sw.addEventListener('install', main$lambda);
    sw.addEventListener('fetch', main$lambda_0);
  }
  var package$cachingsw = _.cachingsw || (_.cachingsw = {});
  Object.defineProperty(package$cachingsw, 'sw', {
    get: function () {
      return sw;
    }
  });
  package$cachingsw.main_kand9s$ = main;
  sw = self;
  main([]);
  Kotlin.defineModule('appsimake-cachingsw', _);
  return _;
}(typeof this['appsimake-cachingsw'] === 'undefined' ? {} : this['appsimake-cachingsw'], kotlin, this['kotlinx-coroutines-core'], this['appsimake-buildenv']);

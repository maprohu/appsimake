if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-cachingsw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-cachingsw'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-cachingsw'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-cachingsw'.");
}
if (typeof this['appsimake-buildenv'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-cachingsw'. Its dependency 'appsimake-buildenv' was not found. Please, check whether 'appsimake-buildenv' is loaded prior to 'appsimake-cachingsw'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-cachingsw'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-cachingsw'.");
}
if (typeof this['appsimake-indexeddb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-cachingsw'. Its dependency 'appsimake-indexeddb' was not found. Please, check whether 'appsimake-indexeddb' is loaded prior to 'appsimake-cachingsw'.");
}
this['appsimake-cachingsw'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_buildenv, $module$kotlinx_coroutines_core, $module$appsimake_indexeddb) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var buildenv = $module$appsimake_buildenv.buildenv;
  var throwCCE = Kotlin.throwCCE;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var asPromise = $module$kotlinx_coroutines_core.kotlinx.coroutines.asPromise_ge6odz$;
  var equals = Kotlin.equals;
  var await_1 = $module$appsimake_indexeddb.indexeddb.await_cgxnqj$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var then = $module$appsimake_indexeddb.indexeddb.then_wi5cyq$;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  function ReferenceCountStore$lambda(it) {
    return it;
  }
  var ReferenceCountStore_metadata = new PropertyMetadata('ReferenceCountStore');
  var ReferenceCountStore;
  function get_ReferenceCountStore() {
    return ReferenceCountStore.getValue_lrcp0p$(this, ReferenceCountStore_metadata);
  }
  function ModuleResourcesStore$lambda(it) {
    return it;
  }
  var ModuleResourcesStore_metadata = new PropertyMetadata('ModuleResourcesStore');
  var ModuleResourcesStore;
  function get_ModuleResourcesStore() {
    return ModuleResourcesStore.getValue_lrcp0p$(this, ModuleResourcesStore_metadata);
  }
  function main$lambda$lambda(closure$cc_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda(closure$cc_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda(closure$cc_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$cc = closure$cc_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$cache = void 0;
    this.local$file = void 0;
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
            var tmp$;
            this.state_0 = 2;
            this.result_0 = await_0(self.caches.open('appsimake-cache'), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$cache = this.result_0;
            this.local$tmp$ = this.local$closure$cc.files;
            this.local$tmp$_0 = 0;
            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$tmp$_0 === this.local$tmp$.length) {
              this.state_0 = 8;
              continue;
            }

            this.local$file = this.local$tmp$[this.local$tmp$_0];
            this.state_0 = 4;
            this.result_0 = await_0(this.local$cache.match(this.local$file), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var res = (tmp$ = this.result_0) == null || Kotlin.isType(tmp$, Response) ? tmp$ : throwCCE();
            if (res == null) {
              this.state_0 = 5;
              this.result_0 = await_0(this.local$cache.add(this.local$file), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            ++this.local$tmp$_0;
            this.state_0 = 3;
            continue;
          case 8:
            this.state_0 = 9;
            this.result_0 = await_0(this.local$cache.add(self.registration.scope), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
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
  function main$lambda(closure$cc) {
    return function (event) {
      var tmp$;
      Kotlin.isType(tmp$ = event, InstallEvent) ? tmp$ : throwCCE();
      event.waitUntil(asPromise(async(coroutines.GlobalScope, void 0, void 0, main$lambda$lambda(closure$cc))));
      return Unit;
    };
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
            this.result_0 = await_0(self.caches.match(this.local$closure$event.request), this);
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
              if (equals((new URL(this.local$closure$event.request.url)).origin, (new URL(self.registration.scope)).origin)) {
                console.log(this.local$closure$event.request.url);
              }
              this.state_0 = 3;
              this.result_0 = await_0(self.fetch(this.local$closure$event.request), this);
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
  function main$lambda$lambda$lambda$lambda(event) {
    var tmp$;
    Kotlin.isType(tmp$ = event, IDBVersionChangeEvent) ? tmp$ : throwCCE();
    var db = event.target.result;
    db.createObjectStore(get_ReferenceCountStore());
    db.createObjectStore(get_ModuleResourcesStore());
    return Unit;
  }
  function main$lambda$lambda$chain$chainInner$lambda(closure$files, closure$chainInner) {
    return function () {
      var rest = drop(closure$files, 1);
      closure$chainInner(rest);
      return Unit;
    };
  }
  function main$lambda$lambda$chain$chainInner(closure$then, closure$fn) {
    return function closure$chainInner(files) {
      if (files.isEmpty()) {
        closure$then();
      }
       else {
        var file = first(files);
        closure$fn(file, main$lambda$lambda$chain$chainInner$lambda(files, closure$chainInner));
      }
    };
  }
  function main$lambda$lambda$chain(files, then, fn) {
    var chainInner = main$lambda$lambda$chain$chainInner(then, fn);
    chainInner(files);
  }
  function main$lambda$lambda$then$lambda(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function main$lambda$lambda$then(closure$cd) {
    return function ($receiver, fn) {
      then($receiver, fn, main$lambda$lambda$then$lambda(closure$cd));
    };
  }
  function main$lambda$lambda$inc$lambda$lambda$lambda(closure$next) {
    return function (it) {
      closure$next();
      return Unit;
    };
  }
  function main$lambda$lambda$inc$lambda$lambda(closure$toAdd, closure$file, closure$counts, closure$next, closure$then) {
    return function (c) {
      var count = c != null ? c : 0;
      if (count === 0) {
        var $receiver = closure$toAdd;
        var element = closure$file;
        $receiver.add_11rb$(element);
      }
      closure$then(closure$counts.put(count + 1 | 0, closure$file), main$lambda$lambda$inc$lambda$lambda$lambda(closure$next));
      return Unit;
    };
  }
  function main$lambda$lambda$inc$lambda(closure$counts, closure$toAdd, closure$then) {
    return function (file, next) {
      closure$then(closure$counts.get(file), main$lambda$lambda$inc$lambda$lambda(closure$toAdd, file, closure$counts, next, closure$then));
      return Unit;
    };
  }
  function main$lambda$lambda$inc(closure$counts, closure$toAdd, closure$then, closure$chain) {
    return function (files, then) {
      closure$chain(files, then, main$lambda$lambda$inc$lambda(closure$counts, closure$toAdd, closure$then));
    };
  }
  function main$lambda$lambda$dec$lambda$lambda$lambda(closure$next) {
    return function (it) {
      closure$next();
      return Unit;
    };
  }
  function main$lambda$lambda$dec$lambda$lambda$lambda_0(closure$next) {
    return function (it) {
      closure$next();
      return Unit;
    };
  }
  function main$lambda$lambda$dec$lambda$lambda(closure$toRemove, closure$file, closure$next, closure$counts, closure$then) {
    return function (count) {
      if (count == null) {
        var $receiver = closure$toRemove;
        var element = closure$file;
        $receiver.add_11rb$(element);
        closure$next();
      }
       else {
        var newCount = count - 1 | 0;
        if (newCount <= 0) {
          var $receiver_0 = closure$toRemove;
          var element_0 = closure$file;
          $receiver_0.add_11rb$(element_0);
          closure$then(closure$counts.delete(closure$file), main$lambda$lambda$dec$lambda$lambda$lambda(closure$next));
        }
         else {
          closure$then(closure$counts.put(newCount, closure$file), main$lambda$lambda$dec$lambda$lambda$lambda_0(closure$next));
        }
      }
      return Unit;
    };
  }
  function main$lambda$lambda$dec$lambda(closure$counts, closure$toRemove, closure$then) {
    return function (file, next) {
      closure$then(closure$counts.get(file), main$lambda$lambda$dec$lambda$lambda(closure$toRemove, file, next, closure$counts, closure$then));
      return Unit;
    };
  }
  function main$lambda$lambda$dec(closure$counts, closure$toRemove, closure$then, closure$chain) {
    return function (files, then) {
      closure$chain(files, then, main$lambda$lambda$dec$lambda(closure$counts, closure$toRemove, closure$then));
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(Unit);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda(closure$modules, closure$cc, closure$cd, closure$then) {
    return function () {
      closure$then(closure$modules.put(closure$cc.files, closure$cc.name), main$lambda$lambda$lambda$lambda$lambda$lambda(closure$cd));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_0(closure$decFiles, closure$modules, closure$cc, closure$cd, closure$then, closure$dec) {
    return function () {
      closure$dec(toList(closure$decFiles), main$lambda$lambda$lambda$lambda$lambda(closure$modules, closure$cc, closure$cd, closure$then));
      return Unit;
    };
  }
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  function main$lambda$lambda$lambda(closure$cc, closure$modules, closure$cd, closure$then, closure$dec, closure$inc) {
    return function (a) {
      var tmp$;
      var oldFiles = (tmp$ = a != null ? toSet(a) : null) != null ? tmp$ : emptySet();
      var newFiles = toSet(closure$cc.files);
      var incFiles = minus(newFiles, oldFiles);
      var decFiles = minus(oldFiles, newFiles);
      closure$inc(toList(incFiles), main$lambda$lambda$lambda$lambda_0(decFiles, closure$modules, closure$cc, closure$cd, closure$then, closure$dec));
      return Unit;
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function main$lambda$lambda_1(closure$cc_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda_1(closure$cc_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda_1(closure$cc_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$cc = closure$cc_0;
    this.local$tmp$ = void 0;
    this.local$cache = void 0;
    this.local$toAdd = void 0;
    this.local$toRemove = void 0;
  }
  Coroutine$main$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda_1.prototype.constructor = Coroutine$main$lambda$lambda_1;
  Coroutine$main$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(self.caches.open('appsimake-cache'), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$cache = this.result_0;
            var $receiver = self.indexedDB.open('appsimake-cache');
            $receiver.addEventListener('upgradeneeded', main$lambda$lambda$lambda$lambda);
            this.state_0 = 3;
            this.result_0 = await_1($receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var db = this.result_0;
            var tx = db.transaction([get_ReferenceCountStore(), get_ModuleResourcesStore()], 'readwrite');
            var counts = tx.objectStore(get_ReferenceCountStore());
            var modules = tx.objectStore(get_ModuleResourcesStore());
            var chain = main$lambda$lambda$chain;
            var cd = CompletableDeferred();
            var then = main$lambda$lambda$then(cd);
            this.local$toAdd = ArrayList_init();
            var inc = main$lambda$lambda$inc(counts, this.local$toAdd, then, chain);
            this.local$toRemove = ArrayList_init();
            var dec = main$lambda$lambda$dec(counts, this.local$toRemove, then, chain);
            then(modules.get(this.local$closure$cc.name), main$lambda$lambda$lambda(this.local$closure$cc, modules, cd, then, dec, inc));
            this.state_0 = 4;
            this.result_0 = cd.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$ = this.local$toRemove.iterator();
            this.state_0 = 5;
            continue;
          case 5:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            var remove = this.local$tmp$.next();
            this.state_0 = 6;
            this.result_0 = await_0(this.local$cache.delete(remove), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 5;
            continue;
          case 7:
            this.local$cache.addAll(copyToArray(this.local$toAdd));
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
  function main$lambda_1(closure$cc) {
    return function (event) {
      var tmp$;
      Kotlin.isType(tmp$ = event, ExtendableEvent) ? tmp$ : throwCCE();
      event.waitUntil(asPromise(async(coroutines.GlobalScope, void 0, void 0, main$lambda$lambda_1(closure$cc))));
      return Unit;
    };
  }
  function main(args) {
    self.registration;
    var cc = self[buildenv.resourcesPropertyName];
    if (cc.enabled) {
      self.addEventListener('install', main$lambda(cc));
      self.addEventListener('fetch', main$lambda_0);
      self.addEventListener('activate', main$lambda_1(cc));
    }
     else {
      console.log('Caching disabled.');
    }
  }
  var package$cachingsw = _.cachingsw || (_.cachingsw = {});
  Object.defineProperty(package$cachingsw, 'ReferenceCountStore', {
    get: get_ReferenceCountStore
  });
  Object.defineProperty(package$cachingsw, 'ModuleResourcesStore', {
    get: get_ModuleResourcesStore
  });
  $$importsForInline$$['appsimake-indexeddb'] = $module$appsimake_indexeddb;
  package$cachingsw.main_kand9s$ = main;
  ReferenceCountStore = named(ReferenceCountStore$lambda).provideDelegate_d6mtq7$(this, ReferenceCountStore_metadata);
  ModuleResourcesStore = named(ModuleResourcesStore$lambda).provideDelegate_d6mtq7$(this, ModuleResourcesStore_metadata);
  main([]);
  Kotlin.defineModule('appsimake-cachingsw', _);
  return _;
}(typeof this['appsimake-cachingsw'] === 'undefined' ? {} : this['appsimake-cachingsw'], kotlin, this['appsimake-commonshr'], this['appsimake-buildenv'], this['kotlinx-coroutines-core'], this['appsimake-indexeddb']);

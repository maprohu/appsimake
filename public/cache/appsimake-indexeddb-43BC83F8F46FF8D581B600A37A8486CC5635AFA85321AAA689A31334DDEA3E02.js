if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-indexeddb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-indexeddb'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-indexeddb'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-indexeddb'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-indexeddb'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-indexeddb'.");
}
this['appsimake-indexeddb'] = function (_, Kotlin, $module$appsimake_commonshr, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var report = $module$appsimake_commonshr.commonshr.report_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  function get_indexedDB($receiver) {
    return $receiver.indexedDB;
  }
  function then$lambda(it) {
    report(it);
    return Unit;
  }
  function then($receiver, fn) {
    then_0($receiver, fn, then$lambda);
  }
  function then$lambda_0(closure$fn, this$then) {
    return function (it) {
      closure$fn(this$then.result);
      return Unit;
    };
  }
  function then$lambda_1(closure$err) {
    return function (it) {
      closure$err(it);
      return Unit;
    };
  }
  function then_0($receiver, fn, err) {
    $receiver.addEventListener('success', then$lambda_0(fn, $receiver));
    $receiver.addEventListener('error', then$lambda_1(err));
  }
  function asDeferred$lambda(closure$d, this$asDeferred) {
    return function (it) {
      closure$d.complete_11rb$(this$asDeferred.result);
      return Unit;
    };
  }
  function asDeferred$lambda_0(closure$d) {
    return function (it) {
      closure$d.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function asDeferred($receiver) {
    var d = CompletableDeferred();
    $receiver.addEventListener('success', asDeferred$lambda(d, $receiver));
    $receiver.addEventListener('error', asDeferred$lambda_0(d));
    return d;
  }
  function await_0($receiver, continuation) {
    return asDeferred($receiver).await(continuation);
  }
  function get($receiver, store, key, continuation) {
    return await_0($receiver.transaction(store).objectStore(store).get(key), continuation);
  }
  function put($receiver, store, key, value, continuation) {
    return await_0($receiver.transaction(store, 'readwrite').objectStore(store).put(value, key), continuation);
  }
  function delete_0($receiver, store, key, continuation) {
    return await_0($receiver.transaction(store, 'readwrite').objectStore(store).delete(key), continuation);
  }
  function clear($receiver, store, continuation) {
    return await_0($receiver.transaction(store, 'readwrite').objectStore(store).clear(), continuation);
  }
  function getAllKeys($receiver, store, continuation) {
    return await_0($receiver.transaction(store).objectStore(store).getAllKeys(), continuation);
  }
  function Coroutine$exists($receiver_0, store_0, key_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$store = store_0;
    this.local$key = key_0;
  }
  Coroutine$exists.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$exists.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$exists.prototype.constructor = Coroutine$exists;
  Coroutine$exists.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$$receiver.transaction(this.local$store).objectStore(this.local$store).getKey(this.local$key), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0 != null;
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
  function exists($receiver_0, store_0, key_0, continuation_0, suspended) {
    var instance = new Coroutine$exists($receiver_0, store_0, key_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var get_readonly = defineInlineFunction('appsimake-indexeddb.indexeddb.get_readonly_7jucnl$', function ($receiver) {
    return 'readonly';
  });
  var get_readwrite = defineInlineFunction('appsimake-indexeddb.indexeddb.get_readwrite_7jucnl$', function ($receiver) {
    return 'readwrite';
  });
  var package$indexeddb = _.indexeddb || (_.indexeddb = {});
  package$indexeddb.get_indexedDB_xhrung$ = get_indexedDB;
  package$indexeddb.then_crilku$ = then;
  package$indexeddb.then_wi5cyq$ = then_0;
  package$indexeddb.asDeferred_cgxnqj$ = asDeferred;
  package$indexeddb.await_cgxnqj$ = await_0;
  package$indexeddb.get_k6oya7$ = get;
  $$importsForInline$$['appsimake-indexeddb'] = _;
  package$indexeddb.put_ebvufo$ = put;
  package$indexeddb.delete_g8ohbq$ = delete_0;
  package$indexeddb.clear_d3rseq$ = clear;
  package$indexeddb.getAllKeys_5ircvw$ = getAllKeys;
  package$indexeddb.exists_g8ohbq$ = exists;
  package$indexeddb.get_readonly_7jucnl$ = get_readonly;
  package$indexeddb.get_readwrite_7jucnl$ = get_readwrite;
  Kotlin.defineModule('appsimake-indexeddb', _);
  return _;
}(typeof this['appsimake-indexeddb'] === 'undefined' ? {} : this['appsimake-indexeddb'], kotlin, this['appsimake-commonshr'], this['kotlinx-coroutines-core']);

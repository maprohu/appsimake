if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-indexeddb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-indexeddb'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-indexeddb'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-indexeddb'.");
}
this['appsimake-indexeddb'] = function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  function then$lambda(closure$fn, this$then) {
    return function (it) {
      closure$fn(this$then.result);
      return Unit;
    };
  }
  function then$lambda_0(closure$err) {
    return function (it) {
      closure$err(it);
      return Unit;
    };
  }
  function then($receiver, fn, err) {
    $receiver.addEventListener('success', then$lambda(fn, $receiver));
    $receiver.addEventListener('error', then$lambda_0(err));
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
  var get_readonly = defineInlineFunction('appsimake-indexeddb.indexeddb.get_readonly_7jucnl$', function ($receiver) {
    return 'readonly';
  });
  var get_readwrite = defineInlineFunction('appsimake-indexeddb.indexeddb.get_readwrite_7jucnl$', function ($receiver) {
    return 'readwrite';
  });
  var package$indexeddb = _.indexeddb || (_.indexeddb = {});
  package$indexeddb.then_wi5cyq$ = then;
  package$indexeddb.asDeferred_cgxnqj$ = asDeferred;
  package$indexeddb.await_cgxnqj$ = await_0;
  package$indexeddb.get_readonly_7jucnl$ = get_readonly;
  package$indexeddb.get_readwrite_7jucnl$ = get_readwrite;
  Kotlin.defineModule('appsimake-indexeddb', _);
  return _;
}(typeof this['appsimake-indexeddb'] === 'undefined' ? {} : this['appsimake-indexeddb'], kotlin, this['kotlinx-coroutines-core']);

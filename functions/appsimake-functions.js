function define(args, fn) {
    fn(
        ...args.map(function(a) {
            if (a == 'exports') {
                return module.exports;
            } else if (a.startsWith('appsimake-')) {
                return require('./' + a);
            } else {
                return require(a);
            }
        })
    );
}

define(['exports', 'kotlin', 'kotlinx-coroutines-core', 'firebase-functions', 'appsimake-commonshr'], function (_, Kotlin, $module$kotlinx_coroutines_core, $module$firebase_functions, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var asPromise = $module$kotlinx_coroutines_core.kotlinx.coroutines.asPromise_ge6odz$;
  var onCall = $module$firebase_functions.https.onCall;
  var TS = $module$appsimake_commonshr.commonshr.properties.TS;
  var equals = Kotlin.equals;
  var TS$Value = $module$appsimake_commonshr.commonshr.properties.TS.Value;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var DynamicOps = $module$appsimake_commonshr.commonshr.properties.DynamicOps;
  function admin$lambda() {
    return require('firebase-admin');
  }
  var admin;
  function get_admin() {
    return admin.value;
  }
  function implement($receiver, exports, fn) {
    implementAny($receiver, exports, fn);
  }
  function Coroutine$implementAsync$lambda$lambda(closure$fn_0, closure$v_0, closure$ctx_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$v = closure$v_0;
    this.local$closure$ctx = closure$ctx_0;
  }
  Coroutine$implementAsync$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$implementAsync$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$implementAsync$lambda$lambda.prototype.constructor = Coroutine$implementAsync$lambda$lambda;
  Coroutine$implementAsync$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$closure$v, this.local$closure$ctx, this);
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
  function implementAsync$lambda$lambda(closure$fn_0, closure$v_0, closure$ctx_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$implementAsync$lambda$lambda(closure$fn_0, closure$v_0, closure$ctx_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function implementAsync$lambda(closure$fn) {
    return function (v, ctx) {
      return asPromise(async(coroutines.GlobalScope, void 0, void 0, implementAsync$lambda$lambda(closure$fn, v, ctx)));
    };
  }
  function implementAsync($receiver, exports, fn) {
    implement($receiver, exports, implementAsync$lambda(fn));
  }
  function implementSync($receiver, exports, fn) {
    implementAny($receiver, exports, fn);
  }
  function implementAny($receiver, exports, fn) {
    exports[$receiver.qualifiedName] = onCall(fn);
  }
  function firestore$lambda() {
    var $receiver = get_admin().firestore();
    var $receiver_0 = {};
    $receiver_0.timestampsInSnapshots = true;
    $receiver.settings($receiver_0);
    return $receiver;
  }
  var firestore;
  function get_firestore() {
    return firestore.value;
  }
  function FnsDynamicOps() {
    FnsDynamicOps_instance = this;
  }
  FnsDynamicOps.prototype.writeTimestamp_frv8pu$ = function (ts) {
    var tmp$;
    if (equals(ts, TS.Server))
      tmp$ = get_admin().FieldValue.serverTimestamp();
    else if (Kotlin.isType(ts, TS$Value))
      tmp$ = get_admin().Timestamp.fromDate(ts.date);
    else if (equals(ts, TS.Null))
      tmp$ = null;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  FnsDynamicOps.prototype.readTimestamp_za3rmp$ = function (d) {
    return new TS$Value(d.toDate());
  };
  FnsDynamicOps.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FnsDynamicOps',
    interfaces: [DynamicOps]
  };
  var FnsDynamicOps_instance = null;
  function FnsDynamicOps_getInstance() {
    if (FnsDynamicOps_instance === null) {
      new FnsDynamicOps();
    }
    return FnsDynamicOps_instance;
  }
  function functions$lambda() {
    return require('firebase-functions');
  }
  var functions;
  function get_functions() {
    return functions.value;
  }
  var package$firebaseadmin = _.firebaseadmin || (_.firebaseadmin = {});
  Object.defineProperty(package$firebaseadmin, 'admin', {
    get: get_admin
  });
  var package$commonfns = _.commonfns || (_.commonfns = {});
  package$commonfns.implement_n5hk4f$ = implement;
  package$commonfns.implementAsync_4bti1h$ = implementAsync;
  package$commonfns.implementSync_udhyv5$ = implementSync;
  package$commonfns.implementAny_f7exyw$ = implementAny;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  Object.defineProperty(package$commonfns, 'firestore', {
    get: get_firestore
  });
  Object.defineProperty(package$commonfns, 'FnsDynamicOps', {
    get: FnsDynamicOps_getInstance
  });
  var package$firebasefunctions = _.firebasefunctions || (_.firebasefunctions = {});
  Object.defineProperty(package$firebasefunctions, 'functions', {
    get: get_functions
  });
  admin = lazy(admin$lambda);
  firestore = lazy(firestore$lambda);
  functions = lazy(functions$lambda);
  Kotlin.defineModule('appsimake-functions', _);
  return _;
});

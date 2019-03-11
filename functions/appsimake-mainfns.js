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

define(['exports', 'kotlin', 'appsimake-functions', 'appsimake-commonshr', 'appsimake-testappfns', 'appsimake-tictactoefns', 'appsimake-commonlib', 'kotlinx-coroutines-core'], function (_, Kotlin, $module$appsimake_functions, $module$appsimake_commonshr, $module$appsimake_testappfns, $module$appsimake_tictactoefns, $module$appsimake_commonlib, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var firebaseadmin = $module$appsimake_functions.firebaseadmin;
  var init = $module$appsimake_testappfns.testappfns.init_za3rmp$;
  var init_0 = $module$appsimake_tictactoefns.tictactoefns.init_za3rmp$;
  var commonlib = $module$appsimake_commonlib.commonlib.commonlib;
  var get_admin = $module$appsimake_commonshr.commonshr.get_admin_py8usb$;
  var get_users = $module$appsimake_commonlib.commonlib.commonlib.get_users_g4qqrv$;
  var get_tokens = $module$appsimake_commonlib.commonlib.commonlib.get_tokens_b1xqfl$;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var TokenDeveloperClaims = $module$appsimake_commonlib.commonlib.commonlib.TokenDeveloperClaims;
  var commonfns = $module$appsimake_functions.commonfns;
  var readDynamic = $module$appsimake_commonshr.commonshr.properties.readDynamic_121my8$;
  var writeDynamic = $module$appsimake_commonshr.commonshr.properties.writeDynamic_y9dcxh$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var implementAsync = $module$appsimake_functions.commonfns.implementAsync_4bti1h$;
  function init_1(exports) {
    firebaseadmin.admin.initializeApp();
    var tmp$ = firebaseadmin.admin.firestore();
    var $receiver = {};
    $receiver.timestampsInSnapshots = true;
    tmp$.settings($receiver);
    initialize(exports);
    init(exports);
    init_0(exports);
  }
  function initialize(exports) {
    tokenImpl(exports);
  }
  function docRef($receiver, db) {
    return db.doc($receiver.path);
  }
  function Coroutine$tokenImpl$lambda(f_0, ctx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$ctx = ctx_0;
  }
  Coroutine$tokenImpl$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tokenImpl$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tokenImpl$lambda.prototype.constructor = Coroutine$tokenImpl$lambda;
  Coroutine$tokenImpl$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var db = firebaseadmin.admin.firestore();
            if ((this.local$tmp$ = this.local$ctx.auth) != null) {
              this.state_0 = 2;
              this.result_0 = await_0(docRef(get_tokens(get_users(get_admin(commonlib.shared.app))).doc_61zpoe$(this.local$tmp$.uid), db).get(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var d = this.result_0.data();
            var $receiver = new TokenDeveloperClaims();
            readDynamic($receiver, d, commonfns.FnsDynamicOps);
            var tdc = $receiver;
            this.local$tmp$_0 = firebaseadmin.admin.auth().createCustomToken(this.local$tmp$.uid, writeDynamic(tdc, commonfns.FnsDynamicOps));
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
  function tokenImpl$lambda(f_0, ctx_0, continuation_0, suspended) {
    var instance = new Coroutine$tokenImpl$lambda(f_0, ctx_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function tokenImpl(exports) {
    implementAsync(commonlib.customToken, exports, tokenImpl$lambda);
  }
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  _.init = init_1;
  _.initialize_za3rmp$ = initialize;
  _.docRef_tv37zg$ = docRef;
  var package$fns = _.fns || (_.fns = {});
  package$fns.tokenImpl_za3rmp$ = tokenImpl;
  Kotlin.defineModule('appsimake-mainfns', _);
  return _;
});

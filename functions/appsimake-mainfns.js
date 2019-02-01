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

define(['exports', 'kotlin', 'appsimake-functions', 'appsimake-testappfns', 'appsimake-tictactoefns', 'kotlinx-coroutines-core', 'appsimake-commonlib', 'appsimake-commonshr'], function (_, Kotlin, $module$appsimake_functions, $module$appsimake_testappfns, $module$appsimake_tictactoefns, $module$kotlinx_coroutines_core, $module$appsimake_commonlib, $module$appsimake_commonshr) {
  'use strict';
  var firebaseadmin = $module$appsimake_functions.firebaseadmin;
  var init = $module$appsimake_testappfns.testappfns.init_za3rmp$;
  var init_0 = $module$appsimake_tictactoefns.tictactoefns.init_za3rmp$;
  var firebasefunctions = $module$appsimake_functions.firebasefunctions;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var commonlib = $module$appsimake_commonlib.commonlib.commonlib;
  var get_admin = $module$appsimake_commonshr.commonlib.get_admin_6l3wi3$;
  var get_users = $module$appsimake_commonlib.commonlib.commonlib.get_users_cmfbet$;
  var get_tokens = $module$appsimake_commonlib.commonlib.commonlib.get_tokens_vfr2h5$;
  var TokenDeveloperClaims = $module$appsimake_commonlib.commonlib.commonlib.TokenDeveloperClaims;
  var implementAsync = $module$appsimake_functions.commonfns.implementAsync_1ba0c3$;
  function init_1(exports) {
    firebaseadmin.admin.initializeApp();
    initialize(exports);
    init(exports);
    init_0(exports);
  }
  function initialize(exports) {
    firebaseadmin.admin.initializeApp(firebasefunctions.functions.config().firebase);
    tokenImpl(exports);
  }
  function docRef($receiver, db) {
    return db.doc($receiver.path);
  }
  function Coroutine$initFrom($receiver_0, docWrap_0, db_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$docWrap = docWrap_0;
    this.local$db = db_0;
  }
  Coroutine$initFrom.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$initFrom.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initFrom.prototype.constructor = Coroutine$initFrom;
  Coroutine$initFrom.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(docRef(this.local$docWrap, this.local$db).get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var ds = this.result_0;
            if (ds.exists) {
              this.local$$receiver.props.extractInitial_za3rmp$(ds.data());
            }

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
  function initFrom($receiver_0, docWrap_0, db_0, continuation_0, suspended) {
    var instance = new Coroutine$initFrom($receiver_0, docWrap_0, db_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$tokenImpl$lambda(closure$db_0, f_0, ctx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$db = closure$db_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$$receiver = void 0;
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
            if ((this.local$tmp$ = this.local$ctx.auth) != null) {
              var closure$db = this.local$closure$db;
              var dw = get_tokens(get_users(get_admin(commonlib.shared.app))).doc_61zpoe$(this.local$tmp$.uid);
              this.local$$receiver = new TokenDeveloperClaims();
              this.state_0 = 2;
              this.result_0 = initFrom(this.local$$receiver, dw, closure$db, this);
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
            this.local$$receiver.props.rollback();
            var tdc = this.local$$receiver;
            this.local$tmp$_0 = firebaseadmin.admin.auth().createCustomToken(this.local$tmp$.uid, tdc.props.write());
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
  function tokenImpl$lambda(closure$db_0) {
    return function (f_0, ctx_0, continuation_0, suspended) {
      var instance = new Coroutine$tokenImpl$lambda(closure$db_0, f_0, ctx_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function tokenImpl(exports) {
    var db = firebaseadmin.admin.firestore();
    implementAsync(commonlib.customToken, exports, tokenImpl$lambda(db));
  }
  _.init = init_1;
  _.initialize_za3rmp$ = initialize;
  _.docRef_uv400c$ = docRef;
  _.initFrom_s99jh5$ = initFrom;
  var package$fns = _.fns || (_.fns = {});
  package$fns.tokenImpl_za3rmp$ = tokenImpl;
  Kotlin.defineModule('appsimake-mainfns', _);
  return _;
});

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

define(['exports', 'kotlin', 'appsimake-functions', 'appsimake-testappfns', 'appsimake-tictactoefns', 'appsimake-commonlib', 'appsimake-commonshr'], function (_, Kotlin, $module$appsimake_functions, $module$appsimake_testappfns, $module$appsimake_tictactoefns, $module$appsimake_commonlib, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var firebaseadmin = $module$appsimake_functions.firebaseadmin;
  var init = $module$appsimake_testappfns.testappfns.init_za3rmp$;
  var init_0 = $module$appsimake_tictactoefns.tictactoefns.init_za3rmp$;
  var commonlib = $module$appsimake_commonlib.commonlib.commonlib;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var implementAsync = $module$appsimake_functions.commonfns.implementAsync_5bcz1w$;
  function init_1(exports) {
    firebaseadmin.admin.initializeApp();
    tokenImpl(exports);
    init(exports);
    init_0(exports);
  }
  function Coroutine$tokenImpl$lambda(f_1, f_2, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
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
            var $receiver = {};
            $receiver.someField = 'blabla';
            return $receiver;
          case 1:
            throw this.exception_0;
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
  function tokenImpl$lambda(f_1, f_2, continuation_0, suspended) {
    var instance = new Coroutine$tokenImpl$lambda(f_1, f_2, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function tokenImpl(exports) {
    implementAsync(commonlib.customToken, exports, tokenImpl$lambda);
  }
  _.init = init_1;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$fns = _.fns || (_.fns = {});
  package$fns.tokenImpl_za3rmp$ = tokenImpl;
  Kotlin.defineModule('appsimake-mainfns', _);
  return _;
});

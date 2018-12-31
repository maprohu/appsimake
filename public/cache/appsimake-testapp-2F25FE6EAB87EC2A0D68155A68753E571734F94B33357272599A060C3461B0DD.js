if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-testapp'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-testapp'.");
}
if (typeof this['appsimake-testapplib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-testapp'. Its dependency 'appsimake-testapplib' was not found. Please, check whether 'appsimake-testapplib' is loaded prior to 'appsimake-testapp'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-testapp'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-testapp'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-testapp'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-testapp'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-testapp'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-testapp'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-testapp'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-testapp'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-testapp'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-testapp'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-testapp'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-testapp'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-testapp'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-testapp'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-testapp'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-testapp'.");
}
this['appsimake-testapp'] = function (_, Kotlin, $module$appsimake_testapplib, $module$appsimake_commonfb, $module$kotlinx_coroutines_core, $module$appsimake_commonshr, $module$appsimake_firebase, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_common, $module$appsimake_commonui) {
  'use strict';
  var testapplib = $module$appsimake_testapplib.testapplib;
  var FbCtx_init = $module$appsimake_commonfb.commonfb.FbCtx_init_nruni5$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var obj = $module$appsimake_commonshr.common.obj_287e2$;
  var setOptionsMerge = $module$appsimake_firebase.firebase.firestore.setOptionsMerge;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var get_classes = $module$appsimake_domx.domx.get_classes_ejp6nk$;
  var styles = $module$appsimake_domx.styles;
  var flexColumn = $module$appsimake_bootstrap.bootstrap.flexColumn_ejp6nk$;
  var flexGrow1 = $module$appsimake_bootstrap.bootstrap.flexGrow1_ejp6nk$;
  var margin2 = $module$appsimake_bootstrap.bootstrap.margin2_ejp6nk$;
  var displayBlock = $module$appsimake_bootstrap.bootstrap.displayBlock_ejp6nk$;
  var listGroupItem = $module$appsimake_bootstrap.bootstrap.listGroupItem_8ixz9m$;
  var listGroup = $module$appsimake_bootstrap.bootstrap.listGroup_t7sdcm$;
  var Listeners = $module$appsimake_common.common.Listeners;
  var flexRow = $module$appsimake_bootstrap.bootstrap.flexRow_ejp6nk$;
  var formControl = $module$appsimake_bootstrap.bootstrap.formControl_ejp6nk$;
  var margin1 = $module$appsimake_bootstrap.bootstrap.margin1_ejp6nk$;
  var obj_0 = $module$appsimake_commonshr.common.obj_7qq44f$;
  var input = $module$appsimake_domx.domx.input_xh1a31$;
  var form = $module$appsimake_domx.domx.form_8s32c1$;
  var btnPrimary = $module$appsimake_bootstrap.bootstrap.btnPrimary_ejp6nk$;
  var btnButton = $module$appsimake_bootstrap.bootstrap.btnButton_9ztatb$;
  var screenLayout = $module$appsimake_commonui.commonui.screenLayout_g4155o$;
  function main$lambda$lambda(closure$fbCtx_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda(closure$fbCtx_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda(closure$fbCtx_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fbCtx = closure$fbCtx_0;
    this.local$it = it_0;
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
            this.result_0 = await_0(this.local$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var token = this.result_0;
            return this.local$closure$fbCtx.db.collection(testapplib.tokensPath).doc(token).set(obj(), setOptionsMerge());
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
  function main$lambda(closure$fbCtx_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda(closure$fbCtx_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda(closure$fbCtx_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fbCtx = closure$fbCtx_0;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fbCtx.setupMessaging_qfvnr1$(main$lambda$lambda(this.local$closure$fbCtx), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$closure$fbCtx.messaging.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var messaging = this.result_0;
            return testUI(this.local$closure$fbCtx, messaging), Unit;
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
  function main(args) {
    var fbCtx = FbCtx_init(testapplib.testapp, 'Test App');
    launch(coroutines.GlobalScope, void 0, void 0, main$lambda(fbCtx));
  }
  function testUI$lambda$lambda$lambda(closure$fbCtx) {
    return function ($receiver) {
      $receiver.innerText = closure$fbCtx.appCtx.title;
      return Unit;
    };
  }
  function testUI$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.innerText = closure$it.data.message;
      $receiver.scrollIntoView();
      return Unit;
    };
  }
  function testUI$lambda$lambda$lambda$lambda(this$) {
    return function (it) {
      listGroupItem(this$, testUI$lambda$lambda$lambda$lambda$lambda(it));
      return Unit;
    };
  }
  function testUI$lambda$lambda$lambda_0(closure$messaging) {
    return function ($receiver) {
      margin2($receiver);
      flexGrow1($receiver);
      displayBlock($receiver);
      closure$messaging.onMessage(testUI$lambda$lambda$lambda$lambda($receiver));
      return Unit;
    };
  }
  function testUI$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      $receiver.message = this$.value;
      return Unit;
    };
  }
  function testUI$lambda$lambda$lambda$lambda$lambda$lambda(closure$fbCtx, this$) {
    return function () {
      closure$fbCtx.call_uni1ku$(testapplib.sendMessage, obj_0(testUI$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$)));
      this$.value = '';
      this$.focus();
      return Unit;
    };
  }
  function testUI$lambda$lambda$lambda$lambda$lambda_0(closure$submit, closure$fbCtx) {
    return function ($receiver) {
      formControl($receiver);
      margin1($receiver);
      flexGrow1($receiver);
      $receiver.autofocus = true;
      closure$submit.plusAssign_o14v8n$(testUI$lambda$lambda$lambda$lambda$lambda$lambda(closure$fbCtx, $receiver));
      return Unit;
    };
  }
  function testUI$lambda$lambda$lambda$lambda$lambda_1(closure$submit) {
    return function (it) {
      it.preventDefault();
      closure$submit.fire();
      return Unit;
    };
  }
  function testUI$lambda$lambda$lambda$lambda_0(closure$submit, closure$fbCtx) {
    return function ($receiver) {
      flexRow($receiver);
      flexGrow1($receiver);
      input($receiver, testUI$lambda$lambda$lambda$lambda$lambda_0(closure$submit, closure$fbCtx));
      $receiver.onsubmit = testUI$lambda$lambda$lambda$lambda$lambda_1(closure$submit);
      return Unit;
    };
  }
  function testUI$lambda$lambda$lambda$lambda$lambda_2(closure$submit) {
    return function (it) {
      closure$submit.fire();
      return Unit;
    };
  }
  function testUI$lambda$lambda$lambda$lambda_1(closure$submit) {
    return function ($receiver) {
      margin1($receiver);
      btnPrimary($receiver);
      $receiver.innerText = 'Send';
      $receiver.onclick = testUI$lambda$lambda$lambda$lambda$lambda_2(closure$submit);
      return Unit;
    };
  }
  function testUI$lambda(closure$fbCtx, closure$messaging) {
    return function ($receiver) {
      var $receiver_0 = $receiver.top;
      $receiver_0.middleTitle_ocyzvr$(testUI$lambda$lambda$lambda(closure$fbCtx));
      var $receiver_1 = $receiver.main;
      var closure$messaging_0 = closure$messaging;
      get_classes($receiver_1).plusAssign_61zpoe$(styles.scrollVertical);
      flexColumn($receiver_1);
      flexGrow1($receiver_1);
      listGroup($receiver_1, testUI$lambda$lambda$lambda_0(closure$messaging_0));
      var submit = new Listeners();
      var $receiver_2 = $receiver.bottom;
      var closure$fbCtx_0 = closure$fbCtx;
      form($receiver_2.middle, testUI$lambda$lambda$lambda$lambda_0(submit, closure$fbCtx_0));
      btnButton($receiver_2.right, testUI$lambda$lambda$lambda$lambda_1(submit));
      return Unit;
    };
  }
  function testUI(fbCtx, messaging) {
    screenLayout(fbCtx.appCtx.root.newRoot_iw61es$(), testUI$lambda(fbCtx, messaging));
  }
  var package$testapp = _.testapp || (_.testapp = {});
  package$testapp.main_kand9s$ = main;
  package$testapp.testUI_hbhxr9$ = testUI;
  main([]);
  Kotlin.defineModule('appsimake-testapp', _);
  return _;
}(typeof this['appsimake-testapp'] === 'undefined' ? {} : this['appsimake-testapp'], kotlin, this['appsimake-testapplib'], this['appsimake-commonfb'], this['kotlinx-coroutines-core'], this['appsimake-commonshr'], this['appsimake-firebase'], this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-common'], this['appsimake-commonui']);

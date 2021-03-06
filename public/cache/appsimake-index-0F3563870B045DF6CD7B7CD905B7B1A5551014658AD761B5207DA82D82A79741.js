if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-index'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-index'.");
}
this['appsimake-index'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_domx, $module$appsimake_commonshr, $module$appsimake_bootstrap, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var UIBase_init = $module$appsimake_commonui.commonui.widget.UIBase_init_kgemh3$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var UIBase = $module$appsimake_commonui.commonui.widget.UIBase;
  var widget = $module$appsimake_commonui.commonui.widget;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var Unit = Kotlin.kotlin.Unit;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_c1yg1q$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_p2 = $module$appsimake_bootstrap.bootstrap.get_p2_kre7dp$;
  var listAction = $module$appsimake_bootstrap.bootstrap.listAction_6t02fy$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var commonui = $module$appsimake_commonui.commonui;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var Body = $module$appsimake_commonui.commonui.widget.Body;
  var switchToView = $module$appsimake_commonui.commonui.widget.switchToView_t9xs9u$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  Home.prototype = Object.create(UIBase.prototype);
  Home.prototype.constructor = Home;
  function Home(body) {
    UIBase_init(body, this);
    this.rawView_aydnm1$_0 = ui(this);
  }
  Object.defineProperty(Home.prototype, 'rawView', {
    get: function () {
      return this.rawView_aydnm1$_0;
    }
  });
  Home.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Home',
    interfaces: [UIBase]
  };
  function ui$lambda$lambda$lambda$app$lambda(closure$id, closure$title) {
    return function ($receiver) {
      $receiver.href = '../' + closure$id + '/';
      $receiver.innerText = closure$title;
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$app(this$) {
    return function (id, title) {
      listAction(this$, ui$lambda$lambda$lambda$app$lambda(id, title));
    };
  }
  function ui$lambda$lambda$lambda($receiver) {
    get_p2(get_cls($receiver));
    var app = ui$lambda$lambda$lambda$app($receiver);
    app('tasks', 'Tasks');
    app('tictactoe', 'Tic Tac Toe');
    app('gymclock', 'Gym Clock');
    app('music', 'Music Player');
    return Unit;
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.screen;
    remAssign($receiver_0.topbar.title, 'Apps I Make');
    invoke(get_insert($receiver_0.main).scrollPane.pane, ui$lambda$lambda$lambda);
    return $receiver_0.node;
  }
  function Coroutine$main$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = void 0;
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
            this.local$$receiver = new Body();
            this.state_0 = 2;
            this.result_0 = switchToView(this.local$$receiver.content, new Home(this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver;
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
  function main$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main() {
    commonui.APP.startRegisteringServiceWorker();
    launch(coroutines.GlobalScope, void 0, void 0, main$lambda);
  }
  var package$index = _.index || (_.index = {});
  var package$home = package$index.home || (package$index.home = {});
  package$home.Home = Home;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$home.ui_g6igwz$ = ui;
  package$index.main = main;
  main();
  Kotlin.defineModule('appsimake-index', _);
  return _;
}(typeof this['appsimake-index'] === 'undefined' ? {} : this['appsimake-index'], kotlin, this['appsimake-commonui'], this['appsimake-domx'], this['appsimake-commonshr'], this['appsimake-bootstrap'], this['kotlinx-coroutines-core']);

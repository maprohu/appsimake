if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-index'.");
}
this['appsimake-index'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var CsKillsView = $module$appsimake_commonui.commonui.CsKillsView;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var widget = $module$appsimake_commonui.commonui.widget;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var Unit = Kotlin.kotlin.Unit;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_c1yg1q$;
  var get_p2 = $module$appsimake_bootstrap.bootstrap.get_p2_kre7dp$;
  var get_insert_0 = $module$appsimake_commonui.commonui.widget.get_insert_asww5s$;
  var get_a = $module$appsimake_domx.domx.get_a_asww5s$;
  var get_listGroupItem = $module$appsimake_bootstrap.bootstrap.get_listGroupItem_kre7dp$;
  var get_listGroupItemAction = $module$appsimake_bootstrap.bootstrap.get_listGroupItemAction_kre7dp$;
  var commonui = $module$appsimake_commonui.commonui;
  var Body = $module$appsimake_commonui.commonui.widget.Body;
  Home.prototype = Object.create(CsKillsView.prototype);
  Home.prototype.constructor = Home;
  function Home(body) {
    CsKillsView.call(this, body);
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
    interfaces: [CsKillsView]
  };
  function ui$lambda$lambda$lambda($receiver) {
    get_p1(get_cls($receiver));
    remAssign($receiver, 'Apps I Make');
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$app$lambda(closure$id, closure$title) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_listGroupItem($receiver_0);
      get_listGroupItemAction($receiver_0);
      $receiver.href = '../' + closure$id + '/';
      $receiver.innerText = closure$title;
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$app(this$) {
    return function (id, title) {
      invoke(get_a(this$.node), ui$lambda$lambda$lambda$lambda$app$lambda(id, title));
    };
  }
  function ui$lambda$lambda$lambda_0($receiver) {
    get_p2(get_cls($receiver));
    var app = ui$lambda$lambda$lambda$lambda$app(get_insert_0($receiver).listGroup);
    app('tasks', 'Tasks');
    app('tictactoe', 'Tic Tac Toe');
    app('gymclock', 'Gym Clock');
    app('music', 'Music Player');
    app('download', 'Download');
    app('testapp', 'Test App');
    app('checklist', 'Checklist');
    return Unit;
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.screen;
    invoke($receiver_0.topbar.title, ui$lambda$lambda$lambda);
    invoke(get_insert($receiver_0.main).scrollPane.pane, ui$lambda$lambda$lambda_0);
    return $receiver_0.node;
  }
  function main() {
    commonui.APP.startRegisteringServiceWorker();
    var $receiver = new Body();
    $receiver.hole.remAssign_looze4$(new Home($receiver));
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
}(typeof this['appsimake-index'] === 'undefined' ? {} : this['appsimake-index'], kotlin, this['appsimake-commonui'], this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-commonshr']);

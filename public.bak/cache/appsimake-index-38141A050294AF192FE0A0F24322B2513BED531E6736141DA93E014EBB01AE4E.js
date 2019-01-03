if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-index'.");
}
this['appsimake-index'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_bootstrap) {
  'use strict';
  var AppCtx = $module$appsimake_commonui.commonui.AppCtx;
  var Unit = Kotlin.kotlin.Unit;
  var flexColumn = $module$appsimake_bootstrap.bootstrap.flexColumn_ejp6nk$;
  var padding2 = $module$appsimake_bootstrap.bootstrap.padding2_ejp6nk$;
  var listAction = $module$appsimake_bootstrap.bootstrap.listAction_6t02fy$;
  var listGroup = $module$appsimake_bootstrap.bootstrap.listGroup_t7sdcm$;
  var screenLayout = $module$appsimake_commonui.commonui.screenLayout_g4155o$;
  function main$lambda$lambda$lambda$lambda(closure$appCtx) {
    return function ($receiver) {
      $receiver.innerText = closure$appCtx.title;
      return Unit;
    };
  }
  function main$lambda$lambda$lambda(closure$appCtx) {
    return function ($receiver) {
      $receiver.middleTitle_ocyzvr$(main$lambda$lambda$lambda$lambda(closure$appCtx));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$app$lambda(closure$id, closure$title) {
    return function ($receiver) {
      $receiver.href = '../' + closure$id + '/';
      $receiver.innerText = closure$title;
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$app(this$) {
    return function (id, title) {
      listAction(this$, main$lambda$lambda$lambda$lambda$app$lambda(id, title));
    };
  }
  function main$lambda$lambda$lambda$lambda_0($receiver) {
    var app = main$lambda$lambda$lambda$lambda$app($receiver);
    app('tasks', 'Tasks');
    app('tictactoe', 'Tic Tac Toe');
    app('gymclock', 'Gym Clock');
    return Unit;
  }
  function main$lambda$lambda$lambda_0($receiver) {
    flexColumn($receiver);
    padding2($receiver);
    listGroup($receiver, main$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function main$lambda$lambda(closure$appCtx) {
    return function ($receiver) {
      $receiver.top_vesf63$(main$lambda$lambda$lambda(closure$appCtx));
      $receiver.main_iw61es$(main$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function main$lambda(closure$appCtx) {
    return function ($receiver) {
      screenLayout($receiver, main$lambda$lambda(closure$appCtx));
      return Unit;
    };
  }
  function main(args) {
    var appCtx = new AppCtx('Apps I Make');
    appCtx.registerServiceWorker();
    appCtx.root.newRoot_iw61es$(main$lambda(appCtx));
  }
  var package$index = _.index || (_.index = {});
  package$index.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('appsimake-index', _);
  return _;
}(typeof this['appsimake-index'] === 'undefined' ? {} : this['appsimake-index'], kotlin, this['appsimake-commonui'], this['appsimake-bootstrap']);

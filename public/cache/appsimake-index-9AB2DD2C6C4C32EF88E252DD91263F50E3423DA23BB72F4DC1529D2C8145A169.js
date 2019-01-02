if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-index'.");
}
this['appsimake-index'] = function (_, Kotlin, $module$appsimake_bootstrap) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var padding2 = $module$appsimake_bootstrap.bootstrap.padding2_ejp6nk$;
  var Unit = Kotlin.kotlin.Unit;
  var listAction = $module$appsimake_bootstrap.bootstrap.listAction_6t02fy$;
  var listGroup = $module$appsimake_bootstrap.bootstrap.listGroup_t7sdcm$;
  function main$lambda$lambda$app$lambda(closure$id, closure$title) {
    return function ($receiver) {
      $receiver.href = '../' + closure$id + '/';
      $receiver.innerText = closure$title;
      return Unit;
    };
  }
  function main$lambda$lambda$app(this$) {
    return function (id, title) {
      listAction(this$, main$lambda$lambda$app$lambda(id, title));
    };
  }
  function main$lambda$lambda($receiver) {
    var app = main$lambda$lambda$app($receiver);
    app('tasks', 'Tasks');
    app('tictactoe', 'Tic Tac Toe');
    return Unit;
  }
  function main(args) {
    var $receiver = ensureNotNull(document.body);
    padding2($receiver);
    listGroup($receiver, main$lambda$lambda);
  }
  var package$index = _.index || (_.index = {});
  package$index.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('appsimake-index', _);
  return _;
}(typeof this['appsimake-index'] === 'undefined' ? {} : this['appsimake-index'], kotlin, this['appsimake-bootstrap']);

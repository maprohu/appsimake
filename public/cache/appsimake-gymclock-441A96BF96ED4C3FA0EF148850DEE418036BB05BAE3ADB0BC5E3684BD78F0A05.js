if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-gymclock'.");
}
this['appsimake-gymclock'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_domx) {
  'use strict';
  var AppCtx = $module$appsimake_commonui.commonui.AppCtx;
  var Unit = Kotlin.kotlin.Unit;
  var plus = $module$appsimake_domx.domx.plus_uy78um$;
  var div = $module$appsimake_domx.domx.div_gnmiz0$;
  function main$lambda$lambda($receiver) {
    plus($receiver, 'hello');
    return Unit;
  }
  function main$lambda($receiver) {
    div($receiver, main$lambda$lambda);
    return Unit;
  }
  function main(args) {
    var $receiver = new AppCtx('Gym Clock');
    $receiver.registerServiceWorker();
    var appCtx = $receiver;
    appCtx.root.newRoot_iw61es$(main$lambda);
  }
  var package$gymclock = _.gymclock || (_.gymclock = {});
  package$gymclock.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('appsimake-gymclock', _);
  return _;
}(typeof this['appsimake-gymclock'] === 'undefined' ? {} : this['appsimake-gymclock'], kotlin, this['appsimake-commonui'], this['appsimake-domx']);

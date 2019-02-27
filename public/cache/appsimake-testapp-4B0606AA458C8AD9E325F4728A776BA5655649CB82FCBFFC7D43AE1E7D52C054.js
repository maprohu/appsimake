if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-testapp'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-testapp'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-testapp'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-testapp'.");
}
this['appsimake-testapp'] = function (_, Kotlin, $module$appsimake_commonui) {
  'use strict';
  var Loading = $module$appsimake_commonui.commonui.widget.Loading;
  var commonui = $module$appsimake_commonui.commonui;
  function main() {
    new Loading();
    commonui.globalStatus.remAssign_11rb$('Registering SW...');
    commonui.APP.startRegisteringServiceWorker();
  }
  var package$testapp = _.testapp || (_.testapp = {});
  package$testapp.main = main;
  main();
  Kotlin.defineModule('appsimake-testapp', _);
  return _;
}(typeof this['appsimake-testapp'] === 'undefined' ? {} : this['appsimake-testapp'], kotlin, this['appsimake-commonui']);

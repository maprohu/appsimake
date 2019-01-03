if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-fbmessagingsw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-fbmessagingsw'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-fbmessagingsw'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-fbmessagingsw'.");
}
this['appsimake-fbmessagingsw'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var obj = $module$appsimake_commonshr.common.obj_7qq44f$;
  var initializeApp = firebase.initializeApp;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var sw;
  function app$lambda$lambda($receiver) {
    $receiver.messagingSenderId = '850641545175';
    return Unit;
  }
  function app$lambda() {
    return initializeApp(obj(app$lambda$lambda));
  }
  var app;
  function get_app() {
    return app.value;
  }
  function messaging$lambda() {
    return get_app().messaging();
  }
  var messaging;
  function get_messaging() {
    return messaging.value;
  }
  function main(args) {
    console.log('Updating service worker...');
    get_messaging();
  }
  var package$fbmessagingsw = _.fbmessagingsw || (_.fbmessagingsw = {});
  Object.defineProperty(package$fbmessagingsw, 'sw', {
    get: function () {
      return sw;
    }
  });
  Object.defineProperty(package$fbmessagingsw, 'app', {
    get: get_app
  });
  Object.defineProperty(package$fbmessagingsw, 'messaging', {
    get: get_messaging
  });
  package$fbmessagingsw.main_kand9s$ = main;
  sw = self;
  app = lazy(app$lambda);
  messaging = lazy(messaging$lambda);
  main([]);
  Kotlin.defineModule('appsimake-fbmessagingsw', _);
  return _;
}(typeof this['appsimake-fbmessagingsw'] === 'undefined' ? {} : this['appsimake-fbmessagingsw'], kotlin, this['appsimake-commonshr']);

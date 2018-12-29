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
  var sw;
  function main$lambda($receiver) {
    $receiver.messagingSenderId = '850641545175';
    return Unit;
  }
  function main(args) {
    console.log('Updating service worker...');
    var app = initializeApp(obj(main$lambda));
    app.messaging();
  }
  var package$fbmessagingsw = _.fbmessagingsw || (_.fbmessagingsw = {});
  Object.defineProperty(package$fbmessagingsw, 'sw', {
    get: function () {
      return sw;
    }
  });
  package$fbmessagingsw.main_kand9s$ = main;
  sw = self;
  main([]);
  Kotlin.defineModule('appsimake-fbmessagingsw', _);
  return _;
}(typeof this['appsimake-fbmessagingsw'] === 'undefined' ? {} : this['appsimake-fbmessagingsw'], kotlin, this['appsimake-commonshr']);

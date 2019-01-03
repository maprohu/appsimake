if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-testappsw0'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-testappsw0'.");
}
this['appsimake-testappsw0'] = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  function main$lambda(it) {
    console.dir(it);
    return Unit;
  }
  function main(args) {
    var sw = self;
    sw.addEventListener('notificationclick', main$lambda);
  }
  var package$testappsw0 = _.testappsw0 || (_.testappsw0 = {});
  package$testappsw0.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('appsimake-testappsw0', _);
  return _;
}(typeof this['appsimake-testappsw0'] === 'undefined' ? {} : this['appsimake-testappsw0'], kotlin);

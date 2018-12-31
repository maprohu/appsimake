if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-testappsw0'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-testappsw0'.");
}
this['appsimake-testappsw0'] = function (_, Kotlin) {
  'use strict';
  function main(args) {
    var sw = self;
  }
  var package$testappsw0 = _.testappsw0 || (_.testappsw0 = {});
  package$testappsw0.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('appsimake-testappsw0', _);
  return _;
}(typeof this['appsimake-testappsw0'] === 'undefined' ? {} : this['appsimake-testappsw0'], kotlin);

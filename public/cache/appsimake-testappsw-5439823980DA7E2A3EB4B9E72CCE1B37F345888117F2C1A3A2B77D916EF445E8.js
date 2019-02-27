if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-testappsw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-testappsw'.");
}
this['appsimake-testappsw'] = function (_, Kotlin) {
  'use strict';
  function main(args) {
  }
  var package$testappsw = _.testappsw || (_.testappsw = {});
  package$testappsw.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('appsimake-testappsw', _);
  return _;
}(typeof this['appsimake-testappsw'] === 'undefined' ? {} : this['appsimake-testappsw'], kotlin);

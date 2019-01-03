if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclocksw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-gymclocksw'.");
}
this['appsimake-gymclocksw'] = function (_, Kotlin) {
  'use strict';
  function main(args) {
  }
  var package$gymclocksw = _.gymclocksw || (_.gymclocksw = {});
  package$gymclocksw.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('appsimake-gymclocksw', _);
  return _;
}(typeof this['appsimake-gymclocksw'] === 'undefined' ? {} : this['appsimake-gymclocksw'], kotlin);

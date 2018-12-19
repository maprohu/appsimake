(function (_, Kotlin, $module$firebase_functions) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  function main$lambda(f, response) {
    response.send('hello from kotlin');
    return Unit;
  }
  function main(args) {
    exports.helloWorld = $module$firebase_functions.https.onRequest(main$lambda);
  }
  main([]);
  Kotlin.defineModule('functions', _);
  return _;
}(module.exports, require('kotlin'), require('firebase-functions')));

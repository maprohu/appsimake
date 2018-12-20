(function (_, Kotlin, $module$firebase_functions) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var onRequest = $module$firebase_functions.https.onRequest;
  function main$lambda(f, response) {
    response.send('hello from kotlin');
    return Unit;
  }
  function main(args) {
    exports.helloWorld = onRequest(main$lambda);
  }
  main([]);
  Kotlin.defineModule('appsimake-mainfns', _);
  return _;
}(module.exports, require('kotlin'), require('firebase-functions')));

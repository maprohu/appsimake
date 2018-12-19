(function (_, Kotlin, $module$firebase_functions) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  function helloWorld$lambda(f, response) {
    response.send('hello from kotlin');
    return Unit;
  }
  var helloWorld;
  Object.defineProperty(_, 'helloWorld', {
    get: function () {
      return helloWorld;
    }
  });
  helloWorld = $module$firebase_functions.https.onRequest(helloWorld$lambda);
  Kotlin.defineModule('functions', _);
  return _;
}(module.exports, require('kotlin'), require('firebase-functions')));

function define(args, fn) {
    fn(
        ...args.map(function(a) {
            if (a == 'exports') {
                return module.exports;
            } else if (a.startsWith('appsimake-')) {
                return require('./' + a);
            } else {
                return require(a);
            }
        })
    );
}

define(['exports', 'kotlin', 'firebase-functions'], function (_, Kotlin, $module$firebase_functions) {
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
});

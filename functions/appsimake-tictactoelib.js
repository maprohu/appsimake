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

define(['exports', 'kotlin'], function (_, Kotlin) {
  'use strict';
  var moveFunctionName;
  var package$tictactoelib = _.tictactoelib || (_.tictactoelib = {});
  Object.defineProperty(package$tictactoelib, 'moveFunctionName', {
    get: function () {
      return moveFunctionName;
    }
  });
  moveFunctionName = 'tictactoeMove';
  Kotlin.defineModule('appsimake-tictactoelib', _);
  return _;
});

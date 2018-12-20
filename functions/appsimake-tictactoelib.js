(function (_, Kotlin) {
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
}(module.exports, require('kotlin')));

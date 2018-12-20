function define(args, fn) {
    fn(
        args.map(function(a) {
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
  Kotlin.defineModule('appsimake-functions', _);
  return _;
});

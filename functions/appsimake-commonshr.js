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
  function obj() {
    return {};
  }
  function obj_0(fn) {
    var $receiver = obj();
    fn($receiver);
    return $receiver;
  }
  var package$common = _.common || (_.common = {});
  package$common.obj_287e2$ = obj;
  package$common.obj_7qq44f$ = obj_0;
  Kotlin.defineModule('appsimake-commonshr', _);
  return _;
});

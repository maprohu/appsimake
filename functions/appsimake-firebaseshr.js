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

define(['exports', 'kotlin', 'appsimake-commonshr'], function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var throwCCE = Kotlin.throwCCE;
  function decodeMessageData(data) {
    var tmp$;
    return JSON.parse(typeof (tmp$ = data.json) === 'string' ? tmp$ : throwCCE());
  }
  function encodeMessageData(data) {
    var $receiver = {};
    $receiver.json = JSON.stringify(data);
    return $receiver;
  }
  var package$firebaseshr = _.firebaseshr || (_.firebaseshr = {});
  package$firebaseshr.decodeMessageData_za3rmp$ = decodeMessageData;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$firebaseshr.encodeMessageData_s8jyv4$ = encodeMessageData;
  Kotlin.defineModule('appsimake-firebaseshr', _);
  return _;
});

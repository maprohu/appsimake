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
  var Lib = $module$appsimake_commonshr.commonlib.Lib;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  function testapp$lambda(it) {
    return new Lib(it);
  }
  var testapp_metadata = new PropertyMetadata('testapp');
  var testapp;
  function get_testapp() {
    return testapp.getValue_lrcp0p$(this, testapp_metadata);
  }
  var sendMessage_metadata = new PropertyMetadata('sendMessage');
  var sendMessage;
  function get_sendMessage() {
    return sendMessage.getValue_lrcp0p$(this, sendMessage_metadata);
  }
  var tokensCollectionName;
  var tokensPath;
  var package$testapplib = _.testapplib || (_.testapplib = {});
  Object.defineProperty(package$testapplib, 'testapp', {
    get: get_testapp
  });
  Object.defineProperty(package$testapplib, 'sendMessage', {
    get: get_sendMessage
  });
  Object.defineProperty(package$testapplib, 'tokensCollectionName', {
    get: function () {
      return tokensCollectionName;
    }
  });
  Object.defineProperty(package$testapplib, 'tokensPath', {
    get: function () {
      return tokensPath;
    }
  });
  testapp = named(testapp$lambda).provideDelegate_n5byny$(this, testapp_metadata);
  sendMessage = get_testapp().function_q3lmfv$().provideDelegate_n5byny$(this, sendMessage_metadata);
  tokensCollectionName = 'tokens';
  tokensPath = get_testapp().app.path + '/' + tokensCollectionName;
  Kotlin.defineModule('appsimake-testapplib', _);
  return _;
});

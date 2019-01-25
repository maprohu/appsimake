if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebasektjs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-firebasektjs'.");
}
this['appsimake-firebasektjs'] = function (_, Kotlin) {
  'use strict';
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var get_RAW = defineInlineFunction('appsimake-firebasektjs.firebase.storage.get_RAW_3xcz9r$', function ($receiver) {
    return 'RAW';
  });
  var get_BASE64 = defineInlineFunction('appsimake-firebasektjs.firebase.storage.get_BASE64_3xcz9r$', function ($receiver) {
    return 'BASE64';
  });
  var get_BASE64URL = defineInlineFunction('appsimake-firebasektjs.firebase.storage.get_BASE64URL_3xcz9r$', function ($receiver) {
    return 'BASE64URL';
  });
  var get_DATA_URL = defineInlineFunction('appsimake-firebasektjs.firebase.storage.get_DATA_URL_3xcz9r$', function ($receiver) {
    return 'DATA_URL';
  });
  var package$firebase = _.firebase || (_.firebase = {});
  var package$storage = package$firebase.storage || (package$firebase.storage = {});
  package$storage.get_RAW_3xcz9r$ = get_RAW;
  package$storage.get_BASE64_3xcz9r$ = get_BASE64;
  package$storage.get_BASE64URL_3xcz9r$ = get_BASE64URL;
  package$storage.get_DATA_URL_3xcz9r$ = get_DATA_URL;
  Kotlin.defineModule('appsimake-firebasektjs', _);
  return _;
}(typeof this['appsimake-firebasektjs'] === 'undefined' ? {} : this['appsimake-firebasektjs'], kotlin);

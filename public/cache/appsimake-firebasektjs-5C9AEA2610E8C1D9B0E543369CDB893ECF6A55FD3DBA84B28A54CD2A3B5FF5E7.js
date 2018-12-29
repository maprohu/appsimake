if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebasektjs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-firebasektjs'.");
}
this['appsimake-firebasektjs'] = function (_, Kotlin) {
  'use strict';
  Kotlin.defineModule('appsimake-firebasektjs', _);
  return _;
}(typeof this['appsimake-firebasektjs'] === 'undefined' ? {} : this['appsimake-firebasektjs'], kotlin);

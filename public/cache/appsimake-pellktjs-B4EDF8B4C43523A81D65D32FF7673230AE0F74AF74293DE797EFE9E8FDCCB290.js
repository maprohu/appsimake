if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-pellktjs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-pellktjs'.");
}
this['appsimake-pellktjs'] = function (_, Kotlin) {
  'use strict';
  Kotlin.defineModule('appsimake-pellktjs', _);
  return _;
}(typeof this['appsimake-pellktjs'] === 'undefined' ? {} : this['appsimake-pellktjs'], kotlin);

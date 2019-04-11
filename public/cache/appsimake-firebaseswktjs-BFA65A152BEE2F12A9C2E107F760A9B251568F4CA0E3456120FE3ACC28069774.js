if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebaseswktjs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-firebaseswktjs'.");
}
this['appsimake-firebaseswktjs'] = function (_, Kotlin) {
  'use strict';
  Kotlin.defineModule('appsimake-firebaseswktjs', _);
  return _;
}(typeof this['appsimake-firebaseswktjs'] === 'undefined' ? {} : this['appsimake-firebaseswktjs'], kotlin);

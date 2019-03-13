if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebaseshr'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-firebaseshr'.");
}
this['appsimake-firebaseshr'] = function (_, Kotlin) {
  'use strict';
  Kotlin.defineModule('appsimake-firebaseshr', _);
  return _;
}(typeof this['appsimake-firebaseshr'] === 'undefined' ? {} : this['appsimake-firebaseshr'], kotlin);

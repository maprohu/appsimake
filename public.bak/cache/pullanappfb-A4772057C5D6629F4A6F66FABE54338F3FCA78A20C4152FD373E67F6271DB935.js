if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'pullanappfb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'pullanappfb'.");
}
if (typeof firebase === 'undefined') {
  throw new Error("Error loading module 'pullanappfb'. Its dependency 'firebase' was not found. Please, check whether 'firebase' is loaded prior to 'pullanappfb'.");
}
var pullanappfb = function (_, Kotlin, $module$firebase) {
  'use strict';
  var AppOptions = $module$firebase.firebase.AppOptions;
  var initializeApp = firebase.initializeApp;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  function app$lambda() {
    var $receiver = AppOptions();
    $receiver.apiKey = 'AIzaSyCk4evdCJvWCYS8GpodbBotuYfebdwbqHE';
    $receiver.authDomain = 'pullanapp.firebaseapp.com';
    $receiver.databaseURL = 'https://pullanapp.firebaseio.com';
    $receiver.projectId = 'pullanapp';
    $receiver.storageBucket = 'pullanapp.appspot.com';
    $receiver.messagingSenderId = '778902419215';
    return initializeApp($receiver);
  }
  var app;
  function get_app() {
    return app.value;
  }
  var package$pullanappfb = _.pullanappfb || (_.pullanappfb = {});
  Object.defineProperty(package$pullanappfb, 'app', {
    get: get_app
  });
  app = lazy(app$lambda);
  Kotlin.defineModule('pullanappfb', _);
  return _;
}(typeof pullanappfb === 'undefined' ? {} : pullanappfb, kotlin, firebase);

//# sourceMappingURL=pullanappfb.js.map

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-indexlib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-indexlib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-indexlib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-indexlib'.");
}
if (typeof this['appsimake-commonlib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-indexlib'. Its dependency 'appsimake-commonlib' was not found. Please, check whether 'appsimake-commonlib' is loaded prior to 'appsimake-indexlib'.");
}
this['appsimake-indexlib'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_commonlib) {
  'use strict';
  var Lib = $module$appsimake_commonshr.commonshr.Lib;
  var HtmlPage = $module$appsimake_commonlib.commonlib.HtmlPage;
  var doc = $module$appsimake_commonshr.commonshr.doc_4okrys$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var indexLib;
  function about$lambda() {
    return new HtmlPage();
  }
  var about;
  var about_metadata = new PropertyMetadata('about');
  function get_about($receiver) {
    return about.getValue_lrcp0p$($receiver, about_metadata);
  }
  var package$index = _.index || (_.index = {});
  Object.defineProperty(package$index, 'indexLib', {
    get: function () {
      return indexLib;
    }
  });
  package$index.get_about_e59bpv$ = get_about;
  indexLib = new Lib('index');
  about = doc(about$lambda);
  Kotlin.defineModule('appsimake-indexlib', _);
  return _;
}(typeof this['appsimake-indexlib'] === 'undefined' ? {} : this['appsimake-indexlib'], kotlin, this['appsimake-commonshr'], this['appsimake-commonlib']);

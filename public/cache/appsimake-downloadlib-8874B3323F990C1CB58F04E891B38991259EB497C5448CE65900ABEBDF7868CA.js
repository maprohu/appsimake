if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-downloadlib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-downloadlib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-downloadlib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-downloadlib'.");
}
if (typeof this['appsimake-firebaseshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-downloadlib'. Its dependency 'appsimake-firebaseshr' was not found. Please, check whether 'appsimake-firebaseshr' is loaded prior to 'appsimake-downloadlib'.");
}
this['appsimake-downloadlib'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_firebaseshr) {
  'use strict';
  var Lib = $module$appsimake_commonshr.commonlib.Lib;
  var coll = $module$appsimake_commonshr.commonlib.coll_287e2$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Base = $module$appsimake_firebaseshr.firebaseshr.Base;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  DownloadItem.prototype = Object.create(Base.prototype);
  DownloadItem.prototype.constructor = DownloadItem;
  var downloadLib;
  var items;
  var items_metadata = new PropertyMetadata('items');
  function get_items($receiver) {
    return items.getValue_lrcp0p$($receiver, items_metadata);
  }
  function DownloadItem() {
    Base.call(this);
    this.url_yn8lc8$_0 = this.o.scalar_287e2$().prop_aspey6$().provideDelegate_lrcp0p$(this, DownloadItem$url_metadata);
  }
  var DownloadItem$url_metadata = new PropertyMetadata('url');
  Object.defineProperty(DownloadItem.prototype, 'url', {
    get: function () {
      return this.url_yn8lc8$_0.getValue_lrcp0p$(this, DownloadItem$url_metadata);
    }
  });
  DownloadItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DownloadItem',
    interfaces: [Base]
  };
  var package$download = _.download || (_.download = {});
  Object.defineProperty(package$download, 'downloadLib', {
    get: function () {
      return downloadLib;
    }
  });
  package$download.get_items_13xn5r$ = get_items;
  package$download.DownloadItem = DownloadItem;
  downloadLib = new Lib('download');
  items = coll();
  Kotlin.defineModule('appsimake-downloadlib', _);
  return _;
}(typeof this['appsimake-downloadlib'] === 'undefined' ? {} : this['appsimake-downloadlib'], kotlin, this['appsimake-commonshr'], this['appsimake-firebaseshr']);

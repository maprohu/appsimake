if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-downloadlib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-downloadlib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-downloadlib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-downloadlib'.");
}
this['appsimake-downloadlib'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var Lib = $module$appsimake_commonshr.commonshr.Lib;
  var coll = $module$appsimake_commonshr.commonshr.coll_4okrys$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var RxBase = $module$appsimake_commonshr.commonshr.properties.RxBase;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  DownloadItem.prototype = Object.create(RxBase.prototype);
  DownloadItem.prototype.constructor = DownloadItem;
  DownloadItem$Companion.prototype = Object.create(DownloadItem.prototype);
  DownloadItem$Companion.prototype.constructor = DownloadItem$Companion;
  DownloadProcess.prototype = Object.create(RxBase.prototype);
  DownloadProcess.prototype.constructor = DownloadProcess;
  DownloadProcess$Companion.prototype = Object.create(DownloadProcess.prototype);
  DownloadProcess$Companion.prototype.constructor = DownloadProcess$Companion;
  var downloadLib;
  function items$lambda() {
    return new DownloadItem();
  }
  var items;
  var items_metadata = new PropertyMetadata('items');
  function get_items($receiver) {
    return items.getValue_lrcp0p$($receiver, items_metadata);
  }
  function process$lambda() {
    return new DownloadProcess();
  }
  var process;
  var process_metadata = new PropertyMetadata('process');
  function get_process($receiver) {
    return process.getValue_lrcp0p$($receiver, process_metadata);
  }
  function DownloadItem() {
    DownloadItem$Companion_getInstance();
    RxBase.call(this);
    this.url_yn8lc8$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, DownloadItem$url_metadata);
    this.name_8nux0e$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, DownloadItem$name_metadata);
    this.ts_5r881a$_0 = this.o.serverTimestamp().provideDelegate_n5byny$(this, DownloadItem$ts_metadata);
  }
  var DownloadItem$url_metadata = new PropertyMetadata('url');
  Object.defineProperty(DownloadItem.prototype, 'url', {
    get: function () {
      return this.url_yn8lc8$_0.getValue_lrcp0p$(this, DownloadItem$url_metadata);
    }
  });
  var DownloadItem$name_metadata = new PropertyMetadata('name');
  Object.defineProperty(DownloadItem.prototype, 'name', {
    get: function () {
      return this.name_8nux0e$_0.getValue_lrcp0p$(this, DownloadItem$name_metadata);
    }
  });
  var DownloadItem$ts_metadata = new PropertyMetadata('ts');
  Object.defineProperty(DownloadItem.prototype, 'ts', {
    get: function () {
      return this.ts_5r881a$_0.getValue_lrcp0p$(this, DownloadItem$ts_metadata);
    }
  });
  function DownloadItem$Companion() {
    DownloadItem$Companion_instance = this;
    DownloadItem.call(this);
  }
  DownloadItem$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [DownloadItem]
  };
  var DownloadItem$Companion_instance = null;
  function DownloadItem$Companion_getInstance() {
    if (DownloadItem$Companion_instance === null) {
      new DownloadItem$Companion();
    }
    return DownloadItem$Companion_instance;
  }
  DownloadItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DownloadItem',
    interfaces: [RxBase]
  };
  function DownloadProcess() {
    DownloadProcess$Companion_getInstance();
    RxBase.call(this);
    this.url_3vbyns$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, DownloadProcess$url_metadata);
    this.title_p6ntpr$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, DownloadProcess$title_metadata);
    this.progress_7otglc$_0 = this.o.number().provideDelegate_n5byny$(this, DownloadProcess$progress_metadata);
    this.ts_y8tguq$_0 = this.o.serverTimestamp().provideDelegate_n5byny$(this, DownloadProcess$ts_metadata);
  }
  var DownloadProcess$url_metadata = new PropertyMetadata('url');
  Object.defineProperty(DownloadProcess.prototype, 'url', {
    get: function () {
      return this.url_3vbyns$_0.getValue_lrcp0p$(this, DownloadProcess$url_metadata);
    }
  });
  var DownloadProcess$title_metadata = new PropertyMetadata('title');
  Object.defineProperty(DownloadProcess.prototype, 'title', {
    get: function () {
      return this.title_p6ntpr$_0.getValue_lrcp0p$(this, DownloadProcess$title_metadata);
    }
  });
  var DownloadProcess$progress_metadata = new PropertyMetadata('progress');
  Object.defineProperty(DownloadProcess.prototype, 'progress', {
    get: function () {
      return this.progress_7otglc$_0.getValue_lrcp0p$(this, DownloadProcess$progress_metadata);
    }
  });
  var DownloadProcess$ts_metadata = new PropertyMetadata('ts');
  Object.defineProperty(DownloadProcess.prototype, 'ts', {
    get: function () {
      return this.ts_y8tguq$_0.getValue_lrcp0p$(this, DownloadProcess$ts_metadata);
    }
  });
  function DownloadProcess$Companion() {
    DownloadProcess$Companion_instance = this;
    DownloadProcess.call(this);
  }
  DownloadProcess$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [DownloadProcess]
  };
  var DownloadProcess$Companion_instance = null;
  function DownloadProcess$Companion_getInstance() {
    if (DownloadProcess$Companion_instance === null) {
      new DownloadProcess$Companion();
    }
    return DownloadProcess$Companion_instance;
  }
  DownloadProcess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DownloadProcess',
    interfaces: [RxBase]
  };
  var package$download = _.download || (_.download = {});
  Object.defineProperty(package$download, 'downloadLib', {
    get: function () {
      return downloadLib;
    }
  });
  package$download.get_items_x4imip$ = get_items;
  package$download.get_process_x4imip$ = get_process;
  Object.defineProperty(DownloadItem, 'Companion', {
    get: DownloadItem$Companion_getInstance
  });
  package$download.DownloadItem = DownloadItem;
  Object.defineProperty(DownloadProcess, 'Companion', {
    get: DownloadProcess$Companion_getInstance
  });
  package$download.DownloadProcess = DownloadProcess;
  downloadLib = new Lib('download');
  items = coll(items$lambda);
  process = coll(process$lambda);
  Kotlin.defineModule('appsimake-downloadlib', _);
  return _;
}(typeof this['appsimake-downloadlib'] === 'undefined' ? {} : this['appsimake-downloadlib'], kotlin, this['appsimake-commonshr']);

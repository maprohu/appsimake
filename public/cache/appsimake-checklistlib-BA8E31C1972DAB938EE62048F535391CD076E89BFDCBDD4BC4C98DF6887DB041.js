if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklistlib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-checklistlib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklistlib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-checklistlib'.");
}
this['appsimake-checklistlib'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var Lib = $module$appsimake_commonshr.commonlib.Lib;
  var coll = $module$appsimake_commonshr.commonlib.coll_4okrys$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var RxBase = $module$appsimake_commonshr.commonshr.properties.RxBase;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  Checklist.prototype = Object.create(RxBase.prototype);
  Checklist.prototype.constructor = Checklist;
  Checklist$Companion.prototype = Object.create(Checklist.prototype);
  Checklist$Companion.prototype.constructor = Checklist$Companion;
  ChecklistItem.prototype = Object.create(RxBase.prototype);
  ChecklistItem.prototype.constructor = ChecklistItem;
  var checklistLib;
  function checklists$lambda() {
    return new Checklist();
  }
  var checklists;
  var checklists_metadata = new PropertyMetadata('checklists');
  function get_checklists($receiver) {
    return checklists.getValue_lrcp0p$($receiver, checklists_metadata);
  }
  function Checklist() {
    Checklist$Companion_getInstance();
    RxBase.call(this);
    this.name_4e5ndt$_0 = this.o.string().provideDelegate_n5byny$(this, Checklist$name_metadata);
    this.items_3sg1t6$_0 = this.o.rxlist_4okrys$(Checklist$items$lambda).provideDelegate_n5byny$(this, Checklist$items_metadata);
    this.ts_wlm1at$_0 = this.o.serverTimestamp().provideDelegate_n5byny$(this, Checklist$ts_metadata);
  }
  var Checklist$name_metadata = new PropertyMetadata('name');
  Object.defineProperty(Checklist.prototype, 'name', {
    get: function () {
      return this.name_4e5ndt$_0.getValue_lrcp0p$(this, Checklist$name_metadata);
    }
  });
  var Checklist$items_metadata = new PropertyMetadata('items');
  Object.defineProperty(Checklist.prototype, 'items', {
    get: function () {
      return this.items_3sg1t6$_0.getValue_lrcp0p$(this, Checklist$items_metadata);
    }
  });
  var Checklist$ts_metadata = new PropertyMetadata('ts');
  Object.defineProperty(Checklist.prototype, 'ts', {
    get: function () {
      return this.ts_wlm1at$_0.getValue_lrcp0p$(this, Checklist$ts_metadata);
    }
  });
  function Checklist$Companion() {
    Checklist$Companion_instance = this;
    Checklist.call(this);
  }
  Checklist$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Checklist]
  };
  var Checklist$Companion_instance = null;
  function Checklist$Companion_getInstance() {
    if (Checklist$Companion_instance === null) {
      new Checklist$Companion();
    }
    return Checklist$Companion_instance;
  }
  function Checklist$items$lambda() {
    return new ChecklistItem();
  }
  Checklist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Checklist',
    interfaces: [RxBase]
  };
  function ChecklistItem() {
    RxBase.call(this);
    this.name_6g0rzi$_0 = this.o.string().provideDelegate_n5byny$(this, ChecklistItem$name_metadata);
    this.checked_cs55tc$_0 = this.o.boolean().provideDelegate_n5byny$(this, ChecklistItem$checked_metadata);
  }
  var ChecklistItem$name_metadata = new PropertyMetadata('name');
  Object.defineProperty(ChecklistItem.prototype, 'name', {
    get: function () {
      return this.name_6g0rzi$_0.getValue_lrcp0p$(this, ChecklistItem$name_metadata);
    }
  });
  var ChecklistItem$checked_metadata = new PropertyMetadata('checked');
  Object.defineProperty(ChecklistItem.prototype, 'checked', {
    get: function () {
      return this.checked_cs55tc$_0.getValue_lrcp0p$(this, ChecklistItem$checked_metadata);
    }
  });
  ChecklistItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChecklistItem',
    interfaces: [RxBase]
  };
  var package$checklist = _.checklist || (_.checklist = {});
  Object.defineProperty(package$checklist, 'checklistLib', {
    get: function () {
      return checklistLib;
    }
  });
  package$checklist.get_checklists_13xn5r$ = get_checklists;
  Object.defineProperty(Checklist, 'Companion', {
    get: Checklist$Companion_getInstance
  });
  package$checklist.Checklist = Checklist;
  package$checklist.ChecklistItem = ChecklistItem;
  checklistLib = new Lib('checklist');
  checklists = coll(checklists$lambda);
  Kotlin.defineModule('appsimake-checklistlib', _);
  return _;
}(typeof this['appsimake-checklistlib'] === 'undefined' ? {} : this['appsimake-checklistlib'], kotlin, this['appsimake-commonshr']);

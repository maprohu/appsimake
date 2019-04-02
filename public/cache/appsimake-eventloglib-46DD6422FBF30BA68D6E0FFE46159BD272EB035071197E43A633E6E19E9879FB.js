if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-eventloglib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-eventloglib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-eventloglib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-eventloglib'.");
}
this['appsimake-eventloglib'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var Lib = $module$appsimake_commonshr.commonshr.Lib;
  var coll = $module$appsimake_commonshr.commonshr.coll_4okrys$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var RxBase = $module$appsimake_commonshr.commonshr.properties.RxBase;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  EventType.prototype = Object.create(RxBase.prototype);
  EventType.prototype.constructor = EventType;
  EventType$Companion.prototype = Object.create(EventType.prototype);
  EventType$Companion.prototype.constructor = EventType$Companion;
  Occurrence.prototype = Object.create(RxBase.prototype);
  Occurrence.prototype.constructor = Occurrence;
  Occurrence$Companion.prototype = Object.create(Occurrence.prototype);
  Occurrence$Companion.prototype.constructor = Occurrence$Companion;
  var eventlogLib;
  function eventtypes$lambda() {
    return new EventType();
  }
  var eventtypes;
  var eventtypes_metadata = new PropertyMetadata('eventtypes');
  function get_eventtypes($receiver) {
    return eventtypes.getValue_lrcp0p$($receiver, eventtypes_metadata);
  }
  function occurrences$lambda() {
    return new Occurrence();
  }
  var occurrences;
  var occurrences_metadata = new PropertyMetadata('occurrences');
  function get_occurrences($receiver) {
    return occurrences.getValue_lrcp0p$($receiver, occurrences_metadata);
  }
  function EventType() {
    EventType$Companion_getInstance();
    RxBase.call(this);
    this.name_9uvto1$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, EventType$name_metadata);
    this.ts_9g7xtv$_0 = this.o.serverTimestamp().provideDelegate_n5byny$(this, EventType$ts_metadata);
  }
  var EventType$name_metadata = new PropertyMetadata('name');
  Object.defineProperty(EventType.prototype, 'name', {
    get: function () {
      return this.name_9uvto1$_0.getValue_lrcp0p$(this, EventType$name_metadata);
    }
  });
  var EventType$ts_metadata = new PropertyMetadata('ts');
  Object.defineProperty(EventType.prototype, 'ts', {
    get: function () {
      return this.ts_9g7xtv$_0.getValue_lrcp0p$(this, EventType$ts_metadata);
    }
  });
  function EventType$Companion() {
    EventType$Companion_instance = this;
    EventType.call(this);
  }
  EventType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [EventType]
  };
  var EventType$Companion_instance = null;
  function EventType$Companion_getInstance() {
    if (EventType$Companion_instance === null) {
      new EventType$Companion();
    }
    return EventType$Companion_instance;
  }
  EventType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EventType',
    interfaces: [RxBase]
  };
  function Occurrence() {
    Occurrence$Companion_getInstance();
    RxBase.call(this);
    this.ts_412s4e$_0 = this.o.serverTimestamp().provideDelegate_n5byny$(this, Occurrence$ts_metadata);
  }
  var Occurrence$ts_metadata = new PropertyMetadata('ts');
  Object.defineProperty(Occurrence.prototype, 'ts', {
    get: function () {
      return this.ts_412s4e$_0.getValue_lrcp0p$(this, Occurrence$ts_metadata);
    }
  });
  function Occurrence$Companion() {
    Occurrence$Companion_instance = this;
    Occurrence.call(this);
  }
  Occurrence$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Occurrence]
  };
  var Occurrence$Companion_instance = null;
  function Occurrence$Companion_getInstance() {
    if (Occurrence$Companion_instance === null) {
      new Occurrence$Companion();
    }
    return Occurrence$Companion_instance;
  }
  Occurrence.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Occurrence',
    interfaces: [RxBase]
  };
  var package$eventlog = _.eventlog || (_.eventlog = {});
  Object.defineProperty(package$eventlog, 'eventlogLib', {
    get: function () {
      return eventlogLib;
    }
  });
  package$eventlog.get_eventtypes_x4imip$ = get_eventtypes;
  package$eventlog.get_occurrences_7136yw$ = get_occurrences;
  Object.defineProperty(EventType, 'Companion', {
    get: EventType$Companion_getInstance
  });
  package$eventlog.EventType = EventType;
  Object.defineProperty(Occurrence, 'Companion', {
    get: Occurrence$Companion_getInstance
  });
  package$eventlog.Occurrence = Occurrence;
  eventlogLib = new Lib('eventlog');
  eventtypes = coll(eventtypes$lambda);
  occurrences = coll(occurrences$lambda);
  Kotlin.defineModule('appsimake-eventloglib', _);
  return _;
}(typeof this['appsimake-eventloglib'] === 'undefined' ? {} : this['appsimake-eventloglib'], kotlin, this['appsimake-commonshr']);

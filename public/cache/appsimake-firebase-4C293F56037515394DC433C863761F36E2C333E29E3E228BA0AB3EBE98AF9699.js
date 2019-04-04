if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-firebase'.");
}
this['appsimake-firebase'] = function (_, Kotlin, $module$appsimake_commonshr, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Api = $module$appsimake_commonshr.commonshr.Api;
  var KillsApi = $module$appsimake_commonshr.commonshr.KillsApi;
  var CsApi = $module$appsimake_commonshr.commonshr.CsApi;
  var CsKillsApi = $module$appsimake_commonshr.commonshr.CsKillsApi;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var HasKills = $module$appsimake_commonshr.commonshr.HasKills;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var HasCsKills = $module$appsimake_commonshr.commonshr.HasCsKills;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var coroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.coroutineScope_awg8ri$;
  var privateOf = $module$appsimake_commonshr.commonshr.privateOf_rzp46g$;
  var report = $module$appsimake_commonshr.commonshr.report_s8jyv4$;
  var SetDiff = $module$appsimake_commonshr.commonshr.SetDiff;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var equals = Kotlin.equals;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var asPromise = $module$kotlinx_coroutines_core.kotlinx.coroutines.asPromise_ge6odz$;
  var asDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.asDeferred_t11jrl$;
  var Try = $module$appsimake_commonshr.common.Try;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var FsIdState = $module$appsimake_commonshr.commonshr.FsIdState;
  var FsIdState$HasId = $module$appsimake_commonshr.commonshr.FsIdState.HasId;
  var writeDynamic = $module$appsimake_commonshr.commonshr.properties.writeDynamic_y9dcxh$;
  var get_docWrap = $module$appsimake_commonshr.commonshr.get_docWrap_axmc3l$;
  var FsId_init = $module$appsimake_commonshr.commonshr.FsId_init_fwqjf0$;
  var toFsDoc = $module$appsimake_commonshr.commonshr.toFsDoc_ved7zl$;
  var timesAssign = $module$appsimake_commonshr.commonshr.timesAssign_rmur43$;
  var produce = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.produce_f6xzli$;
  var get_docWrap_0 = $module$appsimake_commonshr.commonshr.get_docWrap_2s00w$;
  var listen = $module$appsimake_commonshr.commonshr.listen_5ge9y1$;
  var FieldValue$Companion = firebase.firestore.FieldValue;
  var TS = $module$appsimake_commonshr.commonshr.properties.TS;
  var Timestamp$Companion = firebase.firestore.Timestamp;
  var TS$Value = $module$appsimake_commonshr.commonshr.properties.TS.Value;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var DynamicOps = $module$appsimake_commonshr.commonshr.properties.DynamicOps;
  var new_0 = $module$appsimake_commonshr.commonshr.new_kizxdt$;
  var toFsEditable = $module$appsimake_commonshr.commonshr.toFsEditable_s8vq45$;
  var SimpleRxLookup = $module$appsimake_commonshr.rx.SimpleRxLookup;
  var killable = $module$appsimake_commonshr.killable;
  var get_idOrFail = $module$appsimake_commonshr.commonshr.get_idOrFail_2s00w$;
  var ListEvent$Add = $module$appsimake_commonshr.commonshr.ListEvent.Add;
  var ListEvent$Remove = $module$appsimake_commonshr.commonshr.ListEvent.Remove;
  var RxMutableList_init = $module$appsimake_commonshr.rx.RxMutableList_init_287e2$;
  var forEach = $module$appsimake_commonshr.rx.forEach_yaias7$;
  var listEventProcessor = $module$appsimake_commonshr.commonshr.listEventProcessor_xveuzn$;
  var broadcast = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.broadcast_k2ejrg$;
  var applyTo = $module$appsimake_commonshr.rx.applyTo_vym8$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var plus_0 = Kotlin.kotlin.collections.plus_qloxvw$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var join = $module$appsimake_commonshr.killable.join_yzxo1x$;
  var plusAssign_0 = $module$appsimake_commonshr.commonshr.plusAssign_rmur43$;
  var SnapshotEvent$Added = $module$appsimake_commonshr.commonshr.properties.SnapshotEvent.Added;
  var SnapshotEvent$Removed = $module$appsimake_commonshr.commonshr.properties.SnapshotEvent.Removed;
  var SnapshotEvent$Modified = $module$appsimake_commonshr.commonshr.properties.SnapshotEvent.Modified;
  var SnapshotEvent$Moved = $module$appsimake_commonshr.commonshr.properties.SnapshotEvent.Moved;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var listEvents = $module$appsimake_commonshr.commonshr.properties.listEvents_k5exqy$;
  var applyTo_0 = $module$appsimake_commonshr.rx.applyTo_5k7i6r$;
  RollbackException.prototype = Object.create(Exception.prototype);
  RollbackException.prototype.constructor = RollbackException;
  QuerySettings$OrderDirection.prototype = Object.create(Enum.prototype);
  QuerySettings$OrderDirection.prototype.constructor = QuerySettings$OrderDirection;
  QuerySettings$WhereOp.prototype = Object.create(Enum.prototype);
  QuerySettings$WhereOp.prototype.constructor = QuerySettings$WhereOp;
  function DbApi() {
  }
  DbApi.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return collectionRef($receiver, this);
  };
  DbApi.prototype.get_ref_aqty80$ = function ($receiver) {
    return docRef_0($receiver, this);
  };
  DbApi.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return randomDoc($receiver, this);
  };
  DbApi.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return toRandomFsDoc($receiver, this, cw);
  };
  DbApi.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return randomEditable($receiver, this, d);
  };
  DbApi.prototype.randomEditable_mx4g9l$ = function ($receiver, d, callback$default) {
    if (d === void 0) {
      d = {};
    }
    return callback$default ? callback$default($receiver, d) : this.randomEditable_mx4g9l$$default($receiver, d);
  };
  DbApi.prototype.save_73z9b6$ = function ($receiver) {
    return save($receiver, this);
  };
  DbApi.prototype.save_biv66q$ = function ($receiver) {
    return save_0($receiver, this);
  };
  DbApi.prototype.delete_73z9b6$ = function ($receiver) {
    return delete_1($receiver, this);
  };
  DbApi.prototype.delete_ihdkly$ = function ($receiver) {
    return delete_2($receiver, this);
  };
  DbApi.prototype.query_wzkv1r$$default = function ($receiver, query_0) {
    return query($receiver, this, query_0);
  };
  function DbApi$query$lambda($receiver) {
    return Unit;
  }
  DbApi.prototype.query_wzkv1r$ = function ($receiver, query, callback$default) {
    if (query === void 0)
      query = DbApi$query$lambda;
    return callback$default ? callback$default($receiver, query) : this.query_wzkv1r$$default($receiver, query);
  };
  DbApi.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return getCachedOrServer($receiver, this, continuation);
  };
  DbApi.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return getOrNull($receiver, this, source, continuation);
  };
  DbApi.prototype.getOrNull_m1hph$ = function ($receiver, source, continuation, callback$default) {
    if (source === void 0) {
      source = 'default';
    }
    return callback$default ? callback$default($receiver, source, continuation) : this.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  DbApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DbApi',
    interfaces: [HasDb, Api]
  };
  function KillsApiFirebase() {
  }
  KillsApiFirebase.prototype.onSnapshotNext_po64up$ = function ($receiver, onNext) {
    onSnapshotNext_1($receiver, this, onNext);
  };
  KillsApiFirebase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KillsApiFirebase',
    interfaces: [KillsApi]
  };
  function DbKillsApi() {
  }
  DbKillsApi.prototype.get_live_73z9b6$ = function ($receiver) {
    return live($receiver, this);
  };
  DbKillsApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DbKillsApi',
    interfaces: [KillsApiFirebase, DbApi, HasDbKills]
  };
  function CsApiFirebase() {
  }
  CsApiFirebase.prototype.toSnapshotEvents_ecp0ut$ = function ($receiver) {
    return toSnapshotEvents($receiver, this);
  };
  CsApiFirebase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsApiFirebase',
    interfaces: [CsApi]
  };
  function CsKillsApiFirebase() {
  }
  CsKillsApiFirebase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsKillsApiFirebase',
    interfaces: [CsApiFirebase, CsKillsApi]
  };
  function CsDbKillsApi() {
  }
  CsDbKillsApi.prototype.documentChanges_z2kgpb$ = function ($receiver) {
    return documentChanges($receiver, this);
  };
  CsDbKillsApi.prototype.get_snapshots_79y88y$ = function ($receiver) {
    return snapshots_0($receiver, this);
  };
  CsDbKillsApi.prototype.listEvents_pujjsl$$default = function ($receiver, query) {
    return listEvents_0($receiver, this, query);
  };
  function CsDbKillsApi$listEvents$lambda($receiver) {
    return Unit;
  }
  CsDbKillsApi.prototype.listEvents_pujjsl$ = function ($receiver, query, callback$default) {
    if (query === void 0)
      query = CsDbKillsApi$listEvents$lambda;
    return callback$default ? callback$default($receiver, query) : this.listEvents_pujjsl$$default($receiver, query);
  };
  CsDbKillsApi.prototype.docs_prxdpg$ = function ($receiver) {
    return docs($receiver, this);
  };
  CsDbKillsApi.prototype.toList_pujjsl$$default = function ($receiver, query) {
    return toList($receiver, this, query);
  };
  function CsDbKillsApi$toList$lambda($receiver) {
    return Unit;
  }
  CsDbKillsApi.prototype.toList_pujjsl$ = function ($receiver, query, callback$default) {
    if (query === void 0)
      query = CsDbKillsApi$toList$lambda;
    return callback$default ? callback$default($receiver, query) : this.toList_pujjsl$$default($receiver, query);
  };
  CsDbKillsApi.prototype.fsCache_sj6zb3$$default = function ($receiver, query, factory) {
    return fsCache($receiver, this, query, factory);
  };
  function CsDbKillsApi$fsCache$lambda($receiver) {
    return Unit;
  }
  CsDbKillsApi.prototype.fsCache_sj6zb3$ = function ($receiver, query, factory, callback$default) {
    if (query === void 0)
      query = CsDbKillsApi$fsCache$lambda;
    return callback$default ? callback$default($receiver, query, factory) : this.fsCache_sj6zb3$$default($receiver, query, factory);
  };
  CsDbKillsApi.prototype.fsCache_aujjp8$ = function ($receiver, factory) {
    return fsCache_0($receiver, this, factory);
  };
  CsDbKillsApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsDbKillsApi',
    interfaces: [DbKillsApi, KillsApiFirebase, DbApi, CsKillsApiFirebase, CsKillsApi, HasCsDbKills]
  };
  function HasDb() {
  }
  HasDb.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasDb',
    interfaces: []
  };
  function DbDeps(db) {
    this.db_jxxvbr$_0 = db;
  }
  Object.defineProperty(DbDeps.prototype, 'db', {
    get: function () {
      return this.db_jxxvbr$_0;
    }
  });
  DbDeps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DbDeps',
    interfaces: [HasDb]
  };
  DbDeps.prototype.component1 = function () {
    return this.db;
  };
  DbDeps.prototype.copy_8mbn6p$ = function (db) {
    return new DbDeps(db === void 0 ? this.db : db);
  };
  DbDeps.prototype.toString = function () {
    return 'DbDeps(db=' + Kotlin.toString(this.db) + ')';
  };
  DbDeps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.db) | 0;
    return result;
  };
  DbDeps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.db, other.db))));
  };
  function HasDbKills() {
  }
  HasDbKills.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasDbKills',
    interfaces: [HasKills, HasDb]
  };
  function DbKillsDeps(db, kills) {
    this.db_3lgs0y$_0 = db;
    this.kills_plxvxb$_0 = kills;
  }
  Object.defineProperty(DbKillsDeps.prototype, 'db', {
    get: function () {
      return this.db_3lgs0y$_0;
    }
  });
  Object.defineProperty(DbKillsDeps.prototype, 'kills', {
    get: function () {
      return this.kills_plxvxb$_0;
    }
  });
  DbKillsDeps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DbKillsDeps',
    interfaces: [HasDbKills]
  };
  DbKillsDeps.prototype.component1 = function () {
    return this.db;
  };
  DbKillsDeps.prototype.component2 = function () {
    return this.kills;
  };
  DbKillsDeps.prototype.copy_e6dr6x$ = function (db, kills) {
    return new DbKillsDeps(db === void 0 ? this.db : db, kills === void 0 ? this.kills : kills);
  };
  DbKillsDeps.prototype.toString = function () {
    return 'DbKillsDeps(db=' + Kotlin.toString(this.db) + (', kills=' + Kotlin.toString(this.kills)) + ')';
  };
  DbKillsDeps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.db) | 0;
    result = result * 31 + Kotlin.hashCode(this.kills) | 0;
    return result;
  };
  DbKillsDeps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.db, other.db) && Kotlin.equals(this.kills, other.kills)))));
  };
  function HasCsDb() {
  }
  HasCsDb.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasCsDb',
    interfaces: [HasDb, CoroutineScope]
  };
  function HasCsDbKills() {
  }
  HasCsDbKills.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasCsDbKills',
    interfaces: [HasDbKills, HasCsKills]
  };
  var MaxBatchSize;
  function FsBatch(db, batchSize) {
    if (batchSize === void 0)
      batchSize = 500;
    this.db_bqx7bj$_0 = db;
    this.batchSize = batchSize;
    this.counter = 0;
    this.batch = null;
  }
  Object.defineProperty(FsBatch.prototype, 'db', {
    get: function () {
      return this.db_bqx7bj$_0;
    }
  });
  Object.defineProperty(FsBatch.prototype, 'currentBatch', {
    get: function () {
      var b = this.batch;
      var tmp$;
      if (b != null)
        tmp$ = b;
      else {
        var $receiver = this.db.batch();
        this.counter = 0;
        this.batch = $receiver;
        tmp$ = $receiver;
      }
      return tmp$;
    }
  });
  FsBatch.prototype.increase_0 = function () {
    this.counter = this.counter + 1 | 0;
    if (this.counter === this.batchSize)
      this.commit();
  };
  FsBatch.prototype.set_sw4k2t$ = function (ref, data) {
    this.currentBatch.set(ref, data);
    this.increase_0();
  };
  FsBatch.prototype.set_bqiyn5$ = function (ref, data, options) {
    this.currentBatch.set(ref, data, options);
    this.increase_0();
  };
  FsBatch.prototype.delete_inmxie$ = function (ref) {
    this.currentBatch.delete(ref);
    this.increase_0();
  };
  FsBatch.prototype.commit = function () {
    var tmp$;
    if ((tmp$ = this.batch) != null) {
      tmp$.commit();
      this.batch = null;
    }
  };
  FsBatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FsBatch',
    interfaces: [HasDb]
  };
  var batch = defineInlineFunction('appsimake-firebase.firebase.firestore.batch_8ahkg8$', wrapFunction(function () {
    var FsBatch_init = _.firebase.firestore.FsBatch;
    return function ($receiver, batchSize, fn) {
      if (batchSize === void 0)
        batchSize = 500;
      var $receiver_0 = new FsBatch_init($receiver.db, batchSize);
      fn($receiver_0);
      $receiver_0.commit();
    };
  }));
  var batch_0 = defineInlineFunction('appsimake-firebase.firebase.firestore.batch_yd5ppk$', wrapFunction(function () {
    var FsBatch_init = _.firebase.firestore.FsBatch;
    return function ($receiver, batchSize, fn) {
      if (batchSize === void 0)
        batchSize = 500;
      var $receiver_0 = new FsBatch_init($receiver, batchSize);
      fn($receiver_0);
      $receiver_0.commit();
    };
  }));
  function waitUntilDeleted$lambda(closure$cd) {
    return function (ds) {
      if (!ds.exists)
        closure$cd.complete_11rb$(Unit);
      return Unit;
    };
  }
  function Coroutine$waitUntilDeleted($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$cancelSnapshots = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$waitUntilDeleted.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$waitUntilDeleted.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$waitUntilDeleted.prototype.constructor = Coroutine$waitUntilDeleted;
  Coroutine$waitUntilDeleted.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var cd = CompletableDeferred();
            this.local$cancelSnapshots = onSnapshotNext_0(this.local$$receiver, waitUntilDeleted$lambda(cd));
            this.state_0 = 2;
            this.result_0 = cd.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$cancelSnapshots();
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function waitUntilDeleted($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$waitUntilDeleted($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$delete$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$delete$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$delete$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$delete$lambda.prototype.constructor = Coroutine$delete$lambda;
  Coroutine$delete$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function delete$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$delete$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$delete$deleteCollectionsAndSelf(closure$deleteCollections_0, this$delete_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$deleteCollections = closure$deleteCollections_0;
    this.local$this$delete = this$delete_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$delete$deleteCollectionsAndSelf.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$delete$deleteCollectionsAndSelf.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$delete$deleteCollectionsAndSelf.prototype.constructor = Coroutine$delete$deleteCollectionsAndSelf;
  Coroutine$delete$deleteCollectionsAndSelf.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$deleteCollections(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$this$delete.delete_inmxie$(this.local$$receiver.ref);
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function delete$deleteCollectionsAndSelf(closure$deleteCollections_0, this$delete_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$delete$deleteCollectionsAndSelf(closure$deleteCollections_0, this$delete_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$delete$lambda$lambda$lambda$lambda(closure$qds_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$qds = closure$qds_0;
  }
  Coroutine$delete$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$delete$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$delete$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$delete$lambda$lambda$lambda$lambda;
  Coroutine$delete$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = waitUntilDeleted(this.local$closure$qds.ref, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function delete$lambda$lambda$lambda$lambda(closure$qds_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$delete$lambda$lambda$lambda$lambda(closure$qds_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$delete$lambda$lambda(closure$qs_0, closure$deleteCollectionsAndSelf_0, this$delete_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$qs = closure$qs_0;
    this.local$closure$deleteCollectionsAndSelf = closure$deleteCollectionsAndSelf_0;
    this.local$this$delete = this$delete_0;
    this.local$$receiver = void 0;
    this.local$tmp$ = void 0;
    this.local$element = void 0;
    this.local$$receiver_0 = $receiver_0;
  }
  Coroutine$delete$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$delete$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$delete$lambda$lambda.prototype.constructor = Coroutine$delete$lambda$lambda;
  Coroutine$delete$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = this.local$closure$qs.docs;
            this.local$tmp$ = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$tmp$ === this.local$$receiver.length) {
              this.state_0 = 5;
              continue;
            }

            this.local$element = this.local$$receiver[this.local$tmp$];
            this.state_0 = 3;
            this.result_0 = this.local$closure$deleteCollectionsAndSelf(this.local$element, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            launch(this.local$$receiver_0, void 0, void 0, delete$lambda$lambda$lambda$lambda(this.local$element));
            this.state_0 = 4;
            continue;
          case 4:
            ++this.local$tmp$;
            this.state_0 = 2;
            continue;
          case 5:
            return this.local$this$delete.commit(), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function delete$lambda$lambda(closure$qs_0, closure$deleteCollectionsAndSelf_0, this$delete_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$delete$lambda$lambda(closure$qs_0, closure$deleteCollectionsAndSelf_0, this$delete_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$delete($receiver_0, query_0, deleteCollections_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$ql = void 0;
    this.local$deleteCollectionsAndSelf = void 0;
    this.local$$receiver_0 = void 0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$query = query_0;
    this.local$deleteCollections = deleteCollections_0;
  }
  Coroutine$delete.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$delete.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$delete.prototype.constructor = Coroutine$delete;
  Coroutine$delete.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$deleteCollections === void 0)
              this.local$deleteCollections = delete$lambda;
            this.local$ql = this.local$query.limit(this.local$$receiver.batchSize);
            this.local$deleteCollectionsAndSelf = delete$deleteCollectionsAndSelf(this.local$deleteCollections, this.local$$receiver);
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = await_0(this.local$ql.get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var $receiver = this.result_0;
            if ($receiver.size === this.local$$receiver.batchSize) {
              this.state_0 = 8;
              this.result_0 = coroutineScope(delete$lambda$lambda($receiver, this.local$deleteCollectionsAndSelf, this.local$$receiver), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$$receiver_0 = $receiver.docs;
              this.local$tmp$ = 0;
              this.state_0 = 4;
              continue;
            }

          case 4:
            if (this.local$tmp$ === this.local$$receiver_0.length) {
              this.state_0 = 7;
              continue;
            }

            var element = this.local$$receiver_0[this.local$tmp$];
            this.state_0 = 5;
            this.result_0 = this.local$deleteCollectionsAndSelf(element, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            ++this.local$tmp$;
            this.state_0 = 4;
            continue;
          case 7:
            return;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.state_0 = 2;
            continue;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function delete_0($receiver_0, query_0, deleteCollections_0, continuation_0, suspended) {
    var instance = new Coroutine$delete($receiver_0, query_0, deleteCollections_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function setOptionsMerge() {
    var $receiver = {};
    $receiver.merge = true;
    return $receiver;
  }
  var get_added = defineInlineFunction('appsimake-firebase.firebase.firestore.get_added_mvgsxq$', function ($receiver) {
    return 'added';
  });
  var get_modified = defineInlineFunction('appsimake-firebase.firebase.firestore.get_modified_mvgsxq$', function ($receiver) {
    return 'modified';
  });
  var get_removed = defineInlineFunction('appsimake-firebase.firebase.firestore.get_removed_mvgsxq$', function ($receiver) {
    return 'removed';
  });
  var get_default = defineInlineFunction('appsimake-firebase.firebase.firestore.get_default_6qzrc4$', function ($receiver) {
    return 'default';
  });
  var get_server = defineInlineFunction('appsimake-firebase.firebase.firestore.get_server_6qzrc4$', function ($receiver) {
    return 'server';
  });
  var get_cache = defineInlineFunction('appsimake-firebase.firebase.firestore.get_cache_6qzrc4$', function ($receiver) {
    return 'cache';
  });
  function getOptionsCache() {
    var $receiver = {};
    $receiver.source = 'cache';
    return $receiver;
  }
  function privateOf_0($receiver, user) {
    return privateOf($receiver, user.uid);
  }
  function OnSnapshot(onNext, onError) {
    this.onNext = onNext;
    this.onError = onError;
  }
  OnSnapshot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnSnapshot',
    interfaces: []
  };
  function OnSnapshot_init(onNext, $this) {
    $this = $this || Object.create(OnSnapshot.prototype);
    OnSnapshot.call($this, onNext, OnSnapshot_init$lambda);
    return $this;
  }
  OnSnapshot.prototype.component1 = function () {
    return this.onNext;
  };
  OnSnapshot.prototype.component2 = function () {
    return this.onError;
  };
  OnSnapshot.prototype.copy_mv7v8d$ = function (onNext, onError) {
    return new OnSnapshot(onNext === void 0 ? this.onNext : onNext, onError === void 0 ? this.onError : onError);
  };
  OnSnapshot.prototype.toString = function () {
    return 'OnSnapshot(onNext=' + Kotlin.toString(this.onNext) + (', onError=' + Kotlin.toString(this.onError)) + ')';
  };
  OnSnapshot.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.onNext) | 0;
    result = result * 31 + Kotlin.hashCode(this.onError) | 0;
    return result;
  };
  OnSnapshot.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.onNext, other.onNext) && Kotlin.equals(this.onError, other.onError)))));
  };
  function OnSnapshot_init$lambda(it) {
    return Unit;
  }
  function withDefaultSettings($receiver) {
    $receiver.settings({});
    return $receiver;
  }
  function onSnapshotNext$lambda(it) {
    report(it);
    return Unit;
  }
  function onSnapshotNext($receiver, onNext) {
    return $receiver.onSnapshot(onNext, onSnapshotNext$lambda);
  }
  function idDiffs$lambda(closure$fn) {
    return function (qs) {
      var $receiver = qs.docChanges();
      var tmp$;
      var accumulator = new SetDiff();
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var d = accumulator;
        var operation$result;
        var tmp$_0;
        tmp$_0 = element.type;
        if (equals(tmp$_0, 'added')) {
          operation$result = d.copy_zfdv1o$(void 0, plus(d.added, element.doc.id));
        }
         else {
          if (equals(tmp$_0, 'removed')) {
            operation$result = d.copy_zfdv1o$(plus(d.removed, element.doc.id));
          }
           else {
            operation$result = d;
          }
        }
        accumulator = operation$result;
      }
      var $receiver_0 = accumulator;
      closure$fn($receiver_0);
      return Unit;
    };
  }
  function idDiffs($receiver, fn) {
    return onSnapshotNext($receiver, idDiffs$lambda(fn));
  }
  function onSnapshotNext$lambda_0(it) {
    report(it);
    return Unit;
  }
  function onSnapshotNext_0($receiver, onNext) {
    return $receiver.onSnapshot(onNext, onSnapshotNext$lambda_0);
  }
  function onSnapshotNext_1($receiver, deps, onNext) {
    plusAssign(deps.kills, onSnapshotNext_0($receiver, onNext));
  }
  function Coroutine$txDefer$lambda$lambda(closure$fn_0, closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$txDefer$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$txDefer$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$txDefer$lambda$lambda.prototype.constructor = Coroutine$txDefer$lambda$lambda;
  Coroutine$txDefer$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function txDefer$lambda$lambda(closure$fn_0, closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$txDefer$lambda$lambda(closure$fn_0, closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function txDefer$lambda(closure$fn) {
    return function (it) {
      return asPromise(async(coroutines.GlobalScope, void 0, void 0, txDefer$lambda$lambda(closure$fn, it)));
    };
  }
  function txDefer($receiver, fn) {
    return asDeferred($receiver.runTransaction(txDefer$lambda(fn)));
  }
  function tx($receiver, fn, continuation) {
    return txDefer($receiver, fn).await(continuation);
  }
  function Coroutine$txTry$lambda(closure$fn_0, this$txTry_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$this$txTry = this$txTry_0;
  }
  Coroutine$txTry$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$txTry$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$txTry$lambda.prototype.constructor = Coroutine$txTry$lambda;
  Coroutine$txTry$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = tx(this.local$this$txTry, this.local$closure$fn, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function txTry$lambda(closure$fn_0, this$txTry_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$txTry$lambda(closure$fn_0, this$txTry_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function txTry($receiver, fn, continuation) {
    return Try.Companion.invoke_lnyleu$(txTry$lambda(fn, $receiver), continuation);
  }
  function onRollback$lambda(closure$fn) {
    return function (it) {
      if (Kotlin.isType(it, RollbackException))
        return closure$fn();
      else
        throw it;
    };
  }
  function onRollback$lambda_0(it) {
    return it;
  }
  function onRollback($receiver, fn) {
    return $receiver.fold_wsjhie$(onRollback$lambda(fn), onRollback$lambda_0);
  }
  function RollbackException() {
    Exception_init(this);
    this.name = 'RollbackException';
  }
  RollbackException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RollbackException',
    interfaces: [Exception]
  };
  function rollback() {
    throw new RollbackException();
  }
  function Coroutine$exists($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$exists.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$exists.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$exists.prototype.constructor = Coroutine$exists;
  Coroutine$exists.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$$receiver.get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.exists;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function exists($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$exists($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function flushDocs$lambda$lambda$lambda$lambda(closure$cd) {
    return function (ds2) {
      if (!ds2.metadata.hasPendingWrites) {
        closure$cd.complete_11rb$(Unit);
      }
      return Unit;
    };
  }
  function flushDocs$lambda$lambda$lambda$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function Coroutine$flushDocs$lambda$lambda$lambda(closure$doc_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$doc = closure$doc_0;
  }
  Coroutine$flushDocs$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$flushDocs$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$flushDocs$lambda$lambda$lambda.prototype.constructor = Coroutine$flushDocs$lambda$lambda$lambda;
  Coroutine$flushDocs$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var cd = CompletableDeferred();
            var tmp$ = this.local$closure$doc;
            var $receiver = {};
            $receiver.includeMetadataChanges = true;
            tmp$.onSnapshot($receiver, flushDocs$lambda$lambda$lambda$lambda(cd), flushDocs$lambda$lambda$lambda$lambda_0(cd));
            this.state_0 = 2;
            this.result_0 = cd.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function flushDocs$lambda$lambda$lambda(closure$doc_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$flushDocs$lambda$lambda$lambda(closure$doc_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$flushDocs$lambda(closure$docs_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$docs = closure$docs_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$flushDocs$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$flushDocs$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$flushDocs$lambda.prototype.constructor = Coroutine$flushDocs$lambda;
  Coroutine$flushDocs$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$closure$docs;
            var tmp$;
            for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
              var element = $receiver[tmp$];
              launch(this.local$$receiver, void 0, void 0, flushDocs$lambda$lambda$lambda(element));
            }

            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function flushDocs$lambda(closure$docs_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$flushDocs$lambda(closure$docs_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$flushDocs(docs_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$docs = docs_0;
  }
  Coroutine$flushDocs.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$flushDocs.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$flushDocs.prototype.constructor = Coroutine$flushDocs;
  Coroutine$flushDocs.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = coroutineScope(flushDocs$lambda(this.local$docs), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function flushDocs(docs_0, continuation_0, suspended) {
    var instance = new Coroutine$flushDocs(docs_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function Coroutine$flushQueries$lambda$lambda$lambda(closure$q_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$q = closure$q_0;
  }
  Coroutine$flushQueries$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$flushQueries$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$flushQueries$lambda$lambda$lambda.prototype.constructor = Coroutine$flushQueries$lambda$lambda$lambda;
  Coroutine$flushQueries$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$closure$q.get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var qs = this.result_0;
            var $receiver = qs.docs;
            var destination = ArrayList_init();
            var tmp$;
            for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
              var element = $receiver[tmp$];
              if (element.metadata.hasPendingWrites)
                destination.add_11rb$(element);
            }

            var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
            var tmp$_0;
            tmp$_0 = destination.iterator();
            while (tmp$_0.hasNext()) {
              var item = tmp$_0.next();
              destination_0.add_11rb$(item.ref);
            }

            this.state_0 = 3;
            this.result_0 = flushDocs(copyToArray(destination_0).slice(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function flushQueries$lambda$lambda$lambda(closure$q_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$flushQueries$lambda$lambda$lambda(closure$q_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$flushQueries$lambda(closure$queries_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$queries = closure$queries_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$flushQueries$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$flushQueries$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$flushQueries$lambda.prototype.constructor = Coroutine$flushQueries$lambda;
  Coroutine$flushQueries$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$closure$queries;
            var tmp$;
            for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
              var element = $receiver[tmp$];
              launch(this.local$$receiver, void 0, void 0, flushQueries$lambda$lambda$lambda(element));
            }

            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function flushQueries$lambda(closure$queries_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$flushQueries$lambda(closure$queries_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$flushQueries(queries_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$queries = queries_0;
  }
  Coroutine$flushQueries.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$flushQueries.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$flushQueries.prototype.constructor = Coroutine$flushQueries;
  Coroutine$flushQueries.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = coroutineScope(flushQueries$lambda(this.local$queries), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function flushQueries(queries_0, continuation_0, suspended) {
    var instance = new Coroutine$flushQueries(queries_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function docRef($receiver, db) {
    return db.doc($receiver.path);
  }
  function docRef_0($receiver, deps) {
    return deps.db.doc($receiver.path);
  }
  function collectionRef($receiver, deps) {
    return deps.db.collection($receiver.path);
  }
  function randomDoc($receiver, deps) {
    return $receiver.doc_61zpoe$(collectionRef($receiver, deps).doc().id);
  }
  function randomDoc_0($receiver, deps) {
    return $receiver.doc_61zpoe$(collectionRef($receiver, deps).doc().id);
  }
  function randomEditable($receiver, deps, d) {
    if (d === void 0) {
      d = {};
    }
    return new_1(randomDoc_0($receiver, deps), d);
  }
  function save($receiver, deps) {
    var st = $receiver.id.state.now;
    var tmp$;
    if (equals(st, FsIdState.NoId)) {
      var $receiver_0 = randomDoc($receiver.id.coll, deps);
      $receiver.id.state.remAssign_11rb$(new FsIdState$HasId($receiver_0.id, false));
      tmp$ = $receiver_0;
    }
     else if (Kotlin.isType(st, FsIdState$HasId))
      tmp$ = $receiver.id.coll.doc_61zpoe$(st.id);
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    var dw = tmp$;
    return docRef_0(dw, deps).set(writeDynamic($receiver.rxv.now, FsDynamicOps_getInstance()));
  }
  function save_0($receiver, deps) {
    return docRef_0($receiver.id, deps).set(writeDynamic($receiver.doc, FsDynamicOps_getInstance()));
  }
  function delete_1($receiver, deps) {
    return delete_3(get_docWrap($receiver.id), deps);
  }
  function delete_2($receiver, deps) {
    return delete_3($receiver.id, deps);
  }
  function delete_3($receiver, deps) {
    return docRef_0($receiver, deps).delete();
  }
  function toRandomFsDoc($receiver, deps, cw) {
    return toFsDoc($receiver, FsId_init(randomDoc_0(cw, deps), false));
  }
  function snapshots($receiver, deps) {
    return snapshots_0(get_docWrap($receiver.id), deps);
  }
  function read($receiver, ds) {
    var tmp$;
    if (ds.exists) {
      tmp$ = $receiver.factory(ds.data(), FsDynamicOps_getInstance());
    }
     else {
      tmp$ = null;
    }
    return tmp$;
  }
  function Coroutine$docs$lambda(closure$deps_0, this$docs_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$deps = closure$deps_0;
    this.local$this$docs = this$docs_0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$docs$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$docs$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$docs$lambda.prototype.constructor = Coroutine$docs$lambda;
  Coroutine$docs$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = snapshots_0(this.local$this$docs, this.local$closure$deps).iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 8;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var s = this.result_0;
            if ((tmp$ = read(this.local$this$docs, s)) != null) {
              this.state_0 = 6;
              this.result_0 = timesAssign(this.local$$receiver.channel, tmp$, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 7;
              continue;
            }

          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 2;
            continue;
          case 8:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function docs$lambda(closure$deps_0, this$docs_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$docs$lambda(closure$deps_0, this$docs_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function docs($receiver, deps) {
    return produce(deps, void 0, 2147483647, docs$lambda(deps, $receiver));
  }
  function live$lambda$lambda(this$) {
    return function (it) {
      updateFrom(this$, it);
      return Unit;
    };
  }
  function live($receiver, deps) {
    listen(snapshotEmitter(get_docWrap_0($receiver), deps), deps, live$lambda$lambda($receiver));
    return $receiver;
  }
  function get_fsIdState($receiver) {
    return new FsIdState$HasId($receiver.ref.id, $receiver.exists);
  }
  function updateFrom($receiver, ds) {
    $receiver.id.state.remAssign_11rb$(get_fsIdState(ds));
    if (ds.exists) {
      $receiver.rxv.now = $receiver.id.factory(ds.data(), FsDynamicOps_getInstance());
    }
  }
  function FsDynamicOps() {
    FsDynamicOps_instance = this;
  }
  FsDynamicOps.prototype.writeTimestamp_frv8pu$ = function (ts) {
    var tmp$;
    if (equals(ts, TS.Server))
      tmp$ = FieldValue$Companion.serverTimestamp();
    else if (Kotlin.isType(ts, TS$Value))
      tmp$ = Timestamp$Companion.fromDate(ts.date);
    else if (equals(ts, TS.Null))
      tmp$ = null;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  FsDynamicOps.prototype.readTimestamp_za3rmp$ = function (d) {
    return d == null ? TS.Null : new TS$Value(d.toDate());
  };
  FsDynamicOps.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FsDynamicOps',
    interfaces: [DynamicOps]
  };
  var FsDynamicOps_instance = null;
  function FsDynamicOps_getInstance() {
    if (FsDynamicOps_instance === null) {
      new FsDynamicOps();
    }
    return FsDynamicOps_instance;
  }
  function get_new($receiver) {
    return new_1($receiver);
  }
  function new_1($receiver, d) {
    if (d === void 0) {
      d = {};
    }
    return new_0($receiver, d, FsDynamicOps_getInstance());
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function Coroutine$getCachedOrServer($receiver_0, deps_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.local$$receiver_0 = void 0;
    this.local$block$result = void 0;
    this.local$$receiver = $receiver_0;
    this.local$deps = deps_0;
  }
  Coroutine$getCachedOrServer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getCachedOrServer.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getCachedOrServer.prototype.constructor = Coroutine$getCachedOrServer;
  Coroutine$getCachedOrServer.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver_0 = docRef_0(this.local$$receiver, this.local$deps);
            this.state_0 = 1;
            continue;
          case 1:
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = await_0(this.local$$receiver_0.get(getOptionsCache()), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$block$result = this.result_0;
            this.exceptionState_0 = 7;
            this.state_0 = 5;
            continue;
          case 3:
            this.exceptionState_0 = 7;
            var e_0 = this.exception_0;
            this.state_0 = 4;
            this.result_0 = await_0(this.local$$receiver_0.get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$block$result = this.result_0;
            this.exceptionState_0 = 3;
            this.state_0 = 6;
            continue;
          case 5:
            if (!false) {
              this.state_0 = 6;
              continue;
            }

            this.state_0 = 1;
            continue;
          case 6:
            var ds = this.local$block$result;
            if (!ds.exists) {
              var message = 'Document does not exist: ' + this.local$$receiver.path;
              throw IllegalArgumentException_init(message.toString());
            }

            return toFsEditable(this.local$$receiver.factory(ds.data(), FsDynamicOps_getInstance()), this.local$$receiver);
          case 7:
            throw this.exception_0;
          default:this.state_0 = 7;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 7) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function getCachedOrServer($receiver_0, deps_0, continuation_0, suspended) {
    var instance = new Coroutine$getCachedOrServer($receiver_0, deps_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$getOrNull($receiver_0, deps_0, source_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$deps = deps_0;
    this.local$source = source_0;
  }
  Coroutine$getOrNull.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getOrNull.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getOrNull.prototype.constructor = Coroutine$getOrNull;
  Coroutine$getOrNull.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$source === void 0) {
              this.local$source = 'default';
            }

            var tmp$;
            var tmp$_0 = docRef_0(this.local$$receiver, this.local$deps);
            var $receiver = {};
            $receiver.source = this.local$source;
            this.state_0 = 2;
            this.result_0 = await_0(tmp$_0.get($receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var ds = this.result_0;
            if (ds.exists) {
              tmp$ = this.local$$receiver.factory(ds.data(), FsDynamicOps_getInstance());
            }
             else {
              tmp$ = null;
            }

            return tmp$;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function getOrNull($receiver_0, deps_0, source_0, continuation_0, suspended) {
    var instance = new Coroutine$getOrNull($receiver_0, deps_0, source_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function FsCache(lookup, list) {
    this.lookup = lookup;
    this.list = list;
  }
  FsCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FsCache',
    interfaces: []
  };
  function fsLookup$lambda$lambda$lambda(closure$e, this$) {
    return function ($receiver, doc) {
      this$.put_xwzc9p$(get_idOrFail(closure$e.item), doc);
      return Unit;
    };
  }
  function Coroutine$fsLookup$lambda$lambda(closure$coll_0, closure$deps_0, this$_0, closure$factory_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$coll = closure$coll_0;
    this.local$closure$deps = closure$deps_0;
    this.local$this$ = this$_0;
    this.local$closure$factory = closure$factory_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$fsLookup$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fsLookup$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fsLookup$lambda$lambda.prototype.constructor = Coroutine$fsLookup$lambda$lambda;
  Coroutine$fsLookup$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = listEvents_0(this.local$closure$coll, this.local$closure$deps).iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var e_0 = this.result_0;
            if (Kotlin.isType(e_0, ListEvent$Add))
              e_0.item.rxv.forEach_aaomyj$(killable.NoKill, fsLookup$lambda$lambda$lambda(e_0, this.local$this$));
            else if (Kotlin.isType(e_0, ListEvent$Remove)) {
              var $receiver = get_idOrFail(e_0.item);
              var closure$factory = this.local$closure$factory;
              this.local$this$.put_xwzc9p$($receiver, closure$factory($receiver));
            }

            this.state_0 = 2;
            continue;
          case 6:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function fsLookup$lambda$lambda(closure$coll_0, closure$deps_0, this$_0, closure$factory_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$fsLookup$lambda$lambda(closure$coll_0, closure$deps_0, this$_0, closure$factory_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function fsLookup(deps, coll, factory) {
    var $receiver = new SimpleRxLookup(factory);
    launch(deps, void 0, void 0, fsLookup$lambda$lambda(coll, deps, $receiver, factory));
    return $receiver;
  }
  function fsCache$lambda($receiver) {
    return Unit;
  }
  function fsCache($receiver, deps, query, factory) {
    if (query === void 0)
      query = fsCache$lambda;
    return fsCache_0(listEvents_0($receiver, deps, query), deps, factory);
  }
  function fsCache$lambda$lambda(closure$lookup, closure$id) {
    return function ($receiver, doc) {
      closure$lookup.put_xwzc9p$(closure$id, doc);
      return Unit;
    };
  }
  function fsCache$lambda$lambda_0(closure$lookup, closure$id, closure$factory) {
    return function () {
      closure$lookup.put_xwzc9p$(closure$id, closure$factory(closure$id));
      return Unit;
    };
  }
  function Coroutine$fsCache$lambda(closure$deps_0, closure$lookup_0, closure$factory_0, $receiver_0, e_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$deps = closure$deps_0;
    this.local$closure$lookup = closure$lookup_0;
    this.local$closure$factory = closure$factory_0;
    this.local$$receiver = $receiver_0;
    this.local$e = e_0;
  }
  Coroutine$fsCache$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fsCache$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fsCache$lambda.prototype.constructor = Coroutine$fsCache$lambda;
  Coroutine$fsCache$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var id = get_idOrFail(this.local$e);
            forEach(this.local$e.rxv, this.local$closure$deps, fsCache$lambda$lambda(this.local$closure$lookup, id));
            return plusAssign(this.local$$receiver.kills, fsCache$lambda$lambda_0(this.local$closure$lookup, id, this.local$closure$factory)), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function fsCache$lambda_0(closure$deps_0, closure$lookup_0, closure$factory_0) {
    return function ($receiver_0, e_0, continuation_0, suspended) {
      var instance = new Coroutine$fsCache$lambda(closure$deps_0, closure$lookup_0, closure$factory_0, $receiver_0, e_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$fsCache$lambda_0(this$fsCache_0, closure$list_0, closure$addToLookup_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$fsCache = this$fsCache_0;
    this.local$closure$list = closure$list_0;
    this.local$closure$addToLookup = closure$addToLookup_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$fsCache$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fsCache$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fsCache$lambda_0.prototype.constructor = Coroutine$fsCache$lambda_0;
  Coroutine$fsCache$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$fsCache.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 7;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var e_0 = this.result_0;
            var closure$list = this.local$closure$list;
            var closure$addToLookup = this.local$closure$addToLookup;
            applyTo(e_0, closure$list);
            this.state_0 = 6;
            this.result_0 = closure$addToLookup(e_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 2;
            continue;
          case 7:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function fsCache$lambda_1(this$fsCache_0, closure$list_0, closure$addToLookup_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$fsCache$lambda_0(this$fsCache_0, closure$list_0, closure$addToLookup_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function fsCache_0($receiver, deps, factory) {
    var lookup = new SimpleRxLookup(factory);
    var list = RxMutableList_init();
    var addToLookup = listEventProcessor(deps, fsCache$lambda_0(deps, lookup, factory));
    broadcast($receiver);
    launch(deps, void 0, void 0, fsCache$lambda_1($receiver, list, addToLookup));
    return new FsCache(lookup, list);
  }
  function QuerySettings(order, where, limit) {
    if (order === void 0)
      order = emptyList();
    if (where === void 0)
      where = emptyList();
    if (limit === void 0)
      limit = emptyList();
    this.order = order;
    this.where = where;
    this.limit = limit;
  }
  function QuerySettings$Where(path, op, param) {
    this.path = path;
    this.op = op;
    this.param = param;
  }
  QuerySettings$Where.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Where',
    interfaces: []
  };
  function QuerySettings$OrderBy(path, dir) {
    if (dir === void 0)
      dir = QuerySettings$OrderDirection$Asc_getInstance();
    this.path = path;
    this.dir = dir;
  }
  QuerySettings$OrderBy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OrderBy',
    interfaces: []
  };
  function QuerySettings$Limit(count) {
    this.count = count;
  }
  QuerySettings$Limit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Limit',
    interfaces: []
  };
  function QuerySettings$OrderDirection(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function QuerySettings$OrderDirection_initFields() {
    QuerySettings$OrderDirection_initFields = function () {
    };
    QuerySettings$OrderDirection$Asc_instance = new QuerySettings$OrderDirection('Asc', 0);
    QuerySettings$OrderDirection$Desc_instance = new QuerySettings$OrderDirection('Desc', 1);
  }
  var QuerySettings$OrderDirection$Asc_instance;
  function QuerySettings$OrderDirection$Asc_getInstance() {
    QuerySettings$OrderDirection_initFields();
    return QuerySettings$OrderDirection$Asc_instance;
  }
  var QuerySettings$OrderDirection$Desc_instance;
  function QuerySettings$OrderDirection$Desc_getInstance() {
    QuerySettings$OrderDirection_initFields();
    return QuerySettings$OrderDirection$Desc_instance;
  }
  QuerySettings$OrderDirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OrderDirection',
    interfaces: [Enum]
  };
  function QuerySettings$OrderDirection$values() {
    return [QuerySettings$OrderDirection$Asc_getInstance(), QuerySettings$OrderDirection$Desc_getInstance()];
  }
  QuerySettings$OrderDirection.values = QuerySettings$OrderDirection$values;
  function QuerySettings$OrderDirection$valueOf(name) {
    switch (name) {
      case 'Asc':
        return QuerySettings$OrderDirection$Asc_getInstance();
      case 'Desc':
        return QuerySettings$OrderDirection$Desc_getInstance();
      default:throwISE('No enum constant firebase.firestore.QuerySettings.OrderDirection.' + name);
    }
  }
  QuerySettings$OrderDirection.valueOf_61zpoe$ = QuerySettings$OrderDirection$valueOf;
  function QuerySettings$WhereOp(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function QuerySettings$WhereOp_initFields() {
    QuerySettings$WhereOp_initFields = function () {
    };
    QuerySettings$WhereOp$Eq_instance = new QuerySettings$WhereOp('Eq', 0);
    QuerySettings$WhereOp$ArrayContains_instance = new QuerySettings$WhereOp('ArrayContains', 1);
  }
  var QuerySettings$WhereOp$Eq_instance;
  function QuerySettings$WhereOp$Eq_getInstance() {
    QuerySettings$WhereOp_initFields();
    return QuerySettings$WhereOp$Eq_instance;
  }
  var QuerySettings$WhereOp$ArrayContains_instance;
  function QuerySettings$WhereOp$ArrayContains_getInstance() {
    QuerySettings$WhereOp_initFields();
    return QuerySettings$WhereOp$ArrayContains_instance;
  }
  QuerySettings$WhereOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WhereOp',
    interfaces: [Enum]
  };
  function QuerySettings$WhereOp$values() {
    return [QuerySettings$WhereOp$Eq_getInstance(), QuerySettings$WhereOp$ArrayContains_getInstance()];
  }
  QuerySettings$WhereOp.values = QuerySettings$WhereOp$values;
  function QuerySettings$WhereOp$valueOf(name) {
    switch (name) {
      case 'Eq':
        return QuerySettings$WhereOp$Eq_getInstance();
      case 'ArrayContains':
        return QuerySettings$WhereOp$ArrayContains_getInstance();
      default:throwISE('No enum constant firebase.firestore.QuerySettings.WhereOp.' + name);
    }
  }
  QuerySettings$WhereOp.valueOf_61zpoe$ = QuerySettings$WhereOp$valueOf;
  QuerySettings.prototype.asc_61zpoe$ = function (path) {
    return this.copy_64smwx$(plus_0(this.order, new QuerySettings$OrderBy(path)));
  };
  QuerySettings.prototype.desc_61zpoe$ = function (path) {
    return this.copy_64smwx$(plus_0(this.order, new QuerySettings$OrderBy(path, QuerySettings$OrderDirection$Desc_getInstance())));
  };
  QuerySettings.prototype.where_iwz0pm$ = function (wh) {
    return this.copy_64smwx$(void 0, plus_0(this.where, wh));
  };
  QuerySettings.prototype.limit_iqy2we$ = function (wh) {
    return this.copy_64smwx$(void 0, void 0, plus_0(this.limit, wh));
  };
  QuerySettings.prototype.where_l1revy$ = function (path, op, param) {
    return this.where_iwz0pm$(new QuerySettings$Where(path, op, param));
  };
  QuerySettings.prototype.limit_za3lpa$ = function (count) {
    return this.limit_iqy2we$(new QuerySettings$Limit(count));
  };
  QuerySettings.prototype.eq_bm4g0d$ = function (path, value) {
    return this.where_l1revy$(path, QuerySettings$WhereOp$Eq_getInstance(), value);
  };
  QuerySettings.prototype.arrayContains_bm4g0d$ = function (path, value) {
    return this.where_l1revy$(path, QuerySettings$WhereOp$ArrayContains_getInstance(), value);
  };
  QuerySettings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QuerySettings',
    interfaces: []
  };
  QuerySettings.prototype.component1 = function () {
    return this.order;
  };
  QuerySettings.prototype.component2 = function () {
    return this.where;
  };
  QuerySettings.prototype.component3 = function () {
    return this.limit;
  };
  QuerySettings.prototype.copy_64smwx$ = function (order, where, limit) {
    return new QuerySettings(order === void 0 ? this.order : order, where === void 0 ? this.where : where, limit === void 0 ? this.limit : limit);
  };
  QuerySettings.prototype.toString = function () {
    return 'QuerySettings(order=' + Kotlin.toString(this.order) + (', where=' + Kotlin.toString(this.where)) + (', limit=' + Kotlin.toString(this.limit)) + ')';
  };
  QuerySettings.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.order) | 0;
    result = result * 31 + Kotlin.hashCode(this.where) | 0;
    result = result * 31 + Kotlin.hashCode(this.limit) | 0;
    return result;
  };
  QuerySettings.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.order, other.order) && Kotlin.equals(this.where, other.where) && Kotlin.equals(this.limit, other.limit)))));
  };
  function QuerySettingsBuilder() {
  }
  QuerySettingsBuilder.prototype.arrayContains_s44rpz$ = function ($receiver, v) {
    this.settings = this.settings.arrayContains_bm4g0d$($receiver.name, $receiver.writeElement(v, FsDynamicOps_getInstance()));
  };
  QuerySettingsBuilder.prototype.eq_bo9m63$ = function ($receiver, v) {
    this.settings = this.settings.eq_bm4g0d$($receiver.name, $receiver.write(v, FsDynamicOps_getInstance()));
  };
  QuerySettingsBuilder.prototype.limit_za3lpa$ = function (count) {
    this.settings = this.settings.limit_za3lpa$(count);
  };
  QuerySettingsBuilder.prototype.get_asc_5eq60p$ = function ($receiver) {
    this.settings = this.settings.asc_61zpoe$($receiver.name);
  };
  QuerySettingsBuilder.prototype.get_desc_5eq60p$ = function ($receiver) {
    this.settings = this.settings.desc_61zpoe$($receiver.name);
  };
  QuerySettingsBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'QuerySettingsBuilder',
    interfaces: []
  };
  function querySettings$ObjectLiteral() {
    this.settings_2hxifz$_0 = new QuerySettings();
  }
  Object.defineProperty(querySettings$ObjectLiteral.prototype, 'settings', {
    get: function () {
      return this.settings_2hxifz$_0;
    },
    set: function (settings) {
      this.settings_2hxifz$_0 = settings;
    }
  });
  querySettings$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [QuerySettingsBuilder]
  };
  function querySettings(fn) {
    var $receiver = new querySettings$ObjectLiteral();
    fn($receiver);
    return $receiver.settings;
  }
  function apply($receiver, orderBy) {
    var tmp$, tmp$_0;
    tmp$ = orderBy.path;
    switch (orderBy.dir.name) {
      case 'Asc':
        tmp$_0 = 'asc';
        break;
      case 'Desc':
        tmp$_0 = 'desc';
        break;
      default:tmp$_0 = Kotlin.noWhenBranchMatched();
        break;
    }
    return $receiver.orderBy(tmp$, tmp$_0);
  }
  function apply_0($receiver, where) {
    var tmp$, tmp$_0;
    tmp$ = where.path;
    switch (where.op.name) {
      case 'Eq':
        tmp$_0 = '==';
        break;
      case 'ArrayContains':
        tmp$_0 = 'array-contains';
        break;
      default:tmp$_0 = Kotlin.noWhenBranchMatched();
        break;
    }
    return $receiver.where(tmp$, tmp$_0, where.param);
  }
  function apply_1($receiver, limit) {
    return $receiver.limit(limit.count);
  }
  function apply_2($receiver, settings) {
    var tmp$;
    var accumulator = $receiver;
    tmp$ = settings.order.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = apply(accumulator, element);
    }
    var tmp$_0;
    var accumulator_0 = accumulator;
    tmp$_0 = settings.where.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      accumulator_0 = apply_0(accumulator_0, element_0);
    }
    var tmp$_1;
    var accumulator_1 = accumulator_0;
    tmp$_1 = settings.limit.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      accumulator_1 = apply_1(accumulator_1, element_1);
    }
    return accumulator_1;
  }
  function query$lambda($receiver) {
    return Unit;
  }
  function query($receiver, deps, query) {
    if (query === void 0)
      query = query$lambda;
    return apply_2(collectionRef($receiver, deps), querySettings(query));
  }
  function documentChanges$lambda$lambda(this$) {
    return function (qs) {
      var $receiver = qs.docChanges();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        this$.channel.offer_11rb$(element);
      }
      return Unit;
    };
  }
  function documentChanges$lambda$lambda_0(this$) {
    return function (it) {
      this$.channel.close_dbl4no$(it);
      return Unit;
    };
  }
  function Coroutine$documentChanges$lambda(closure$deps_0, this$documentChanges_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$deps = closure$deps_0;
    this.local$this$documentChanges = this$documentChanges_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$documentChanges$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$documentChanges$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$documentChanges$lambda.prototype.constructor = Coroutine$documentChanges$lambda;
  Coroutine$documentChanges$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            plusAssign(this.local$closure$deps.kills, this.local$this$documentChanges.onSnapshot(documentChanges$lambda$lambda(this.local$$receiver), documentChanges$lambda$lambda_0(this.local$$receiver)));
            this.state_0 = 2;
            this.result_0 = join(this.local$closure$deps.kills, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function documentChanges$lambda(closure$deps_0, this$documentChanges_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$documentChanges$lambda(closure$deps_0, this$documentChanges_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function documentChanges($receiver, deps) {
    return produce(deps, void 0, 2147483647, documentChanges$lambda(deps, $receiver));
  }
  function documentSnapshots$lambda$lambda(this$) {
    return function (ds) {
      plusAssign_0(this$.channel, ds);
      return Unit;
    };
  }
  function Coroutine$documentSnapshots$lambda(closure$deps_0, this$documentSnapshots_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$deps = closure$deps_0;
    this.local$this$documentSnapshots = this$documentSnapshots_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$documentSnapshots$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$documentSnapshots$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$documentSnapshots$lambda.prototype.constructor = Coroutine$documentSnapshots$lambda;
  Coroutine$documentSnapshots$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            plusAssign(this.local$closure$deps.kills, onSnapshotNext_0(this.local$this$documentSnapshots, documentSnapshots$lambda$lambda(this.local$$receiver)));
            this.state_0 = 2;
            this.result_0 = join(this.local$closure$deps.kills, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function documentSnapshots$lambda(closure$deps_0, this$documentSnapshots_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$documentSnapshots$lambda(closure$deps_0, this$documentSnapshots_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function documentSnapshots($receiver, deps) {
    return produce(deps, void 0, 2147483647, documentSnapshots$lambda(deps, $receiver));
  }
  function Coroutine$toSnapshotEvents$lambda(this$toSnapshotEvents_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$toSnapshotEvents = this$toSnapshotEvents_0;
    this.local$tmp$ = void 0;
    this.local$dc = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toSnapshotEvents$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toSnapshotEvents$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toSnapshotEvents$lambda.prototype.constructor = Coroutine$toSnapshotEvents$lambda;
  Coroutine$toSnapshotEvents$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = this.local$this$toSnapshotEvents.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 14;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$dc = this.result_0;
            tmp$ = this.local$dc.type;
            if (equals(tmp$, 'added')) {
              this.state_0 = 12;
              this.result_0 = timesAssign(this.local$$receiver.channel, new SnapshotEvent$Added(this.local$dc.doc.id, this.local$dc.newIndex, this.local$dc.doc.data()), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (equals(tmp$, 'removed')) {
                this.state_0 = 10;
                this.result_0 = timesAssign(this.local$$receiver.channel, new SnapshotEvent$Removed(this.local$dc.oldIndex), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                if (equals(tmp$, 'modified')) {
                  this.state_0 = 6;
                  this.result_0 = timesAssign(this.local$$receiver.channel, new SnapshotEvent$Modified(this.local$dc.oldIndex, this.local$dc.doc.data()), this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                }
                 else {
                  throw Error_init('Unkown type: ' + this.local$dc.type);
                }
              }
            }

          case 6:
            if (this.local$dc.newIndex !== this.local$dc.oldIndex) {
              this.state_0 = 7;
              this.result_0 = timesAssign(this.local$$receiver.channel, new SnapshotEvent$Moved(this.local$dc.oldIndex, this.local$dc.newIndex), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 8;
              continue;
            }

          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.state_0 = 11;
            continue;
          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            this.state_0 = 13;
            continue;
          case 12:
            this.state_0 = 13;
            continue;
          case 13:
            this.state_0 = 2;
            continue;
          case 14:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toSnapshotEvents$lambda(this$toSnapshotEvents_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$toSnapshotEvents$lambda(this$toSnapshotEvents_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function toSnapshotEvents($receiver, deps) {
    return produce(deps, void 0, void 0, toSnapshotEvents$lambda($receiver));
  }
  function snapshots_0($receiver, deps) {
    return documentSnapshots(docRef_0($receiver, deps), deps);
  }
  function snapshotEmitter$lambda$lambda(closure$ref) {
    return function (it) {
      return onSnapshotNext_0(closure$ref, it);
    };
  }
  function snapshotEmitter($receiver, deps) {
    return snapshotEmitter$lambda$lambda(docRef_0($receiver, deps));
  }
  function listEvents$lambda($receiver) {
    return Unit;
  }
  function listEvents_0($receiver, deps, query_0) {
    if (query_0 === void 0)
      query_0 = listEvents$lambda;
    return listEvents(toSnapshotEvents(documentChanges(query($receiver, deps, query_0), deps), deps), deps, $receiver, FsDynamicOps_getInstance());
  }
  function toList$lambda($receiver) {
    return Unit;
  }
  function toList($receiver, deps, query) {
    if (query === void 0)
      query = toList$lambda;
    var list = RxMutableList_init();
    applyTo_0(listEvents_0($receiver, deps, query), deps, list);
    return list;
  }
  var get_RAW = defineInlineFunction('appsimake-firebase.firebase.storage.get_RAW_3xcz9r$', function ($receiver) {
    return 'RAW';
  });
  var get_BASE64 = defineInlineFunction('appsimake-firebase.firebase.storage.get_BASE64_3xcz9r$', function ($receiver) {
    return 'BASE64';
  });
  var get_BASE64URL = defineInlineFunction('appsimake-firebase.firebase.storage.get_BASE64URL_3xcz9r$', function ($receiver) {
    return 'BASE64URL';
  });
  var get_DATA_URL = defineInlineFunction('appsimake-firebase.firebase.storage.get_DATA_URL_3xcz9r$', function ($receiver) {
    return 'DATA_URL';
  });
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  $$importsForInline$$['appsimake-firebase'] = _;
  var package$firebase = _.firebase || (_.firebase = {});
  package$firebase.DbApi = DbApi;
  package$firebase.KillsApiFirebase = KillsApiFirebase;
  package$firebase.DbKillsApi = DbKillsApi;
  package$firebase.CsApiFirebase = CsApiFirebase;
  package$firebase.CsKillsApiFirebase = CsKillsApiFirebase;
  package$firebase.CsDbKillsApi = CsDbKillsApi;
  package$firebase.HasDb = HasDb;
  package$firebase.DbDeps = DbDeps;
  package$firebase.HasDbKills = HasDbKills;
  package$firebase.DbKillsDeps = DbKillsDeps;
  package$firebase.HasCsDb = HasCsDb;
  package$firebase.HasCsDbKills = HasCsDbKills;
  var package$firestore = package$firebase.firestore || (package$firebase.firestore = {});
  Object.defineProperty(package$firestore, 'MaxBatchSize', {
    get: function () {
      return MaxBatchSize;
    }
  });
  package$firestore.FsBatch = FsBatch;
  package$firestore.batch_yd5ppk$ = batch_0;
  package$firestore.batch_8ahkg8$ = batch;
  package$firestore.waitUntilDeleted_a3uf2h$ = waitUntilDeleted;
  package$firestore.delete_u0r02q$ = delete_0;
  package$firestore.setOptionsMerge = setOptionsMerge;
  package$firestore.get_added_mvgsxq$ = get_added;
  package$firestore.get_modified_mvgsxq$ = get_modified;
  package$firestore.get_removed_mvgsxq$ = get_removed;
  package$firestore.get_default_6qzrc4$ = get_default;
  package$firestore.get_server_6qzrc4$ = get_server;
  package$firestore.get_cache_6qzrc4$ = get_cache;
  package$firestore.getOptionsCache = getOptionsCache;
  package$firestore.privateOf_30ab3o$ = privateOf_0;
  package$firestore.OnSnapshot_init_ydux9x$ = OnSnapshot_init;
  package$firestore.OnSnapshot = OnSnapshot;
  package$firestore.withDefaultSettings_gwf93m$ = withDefaultSettings;
  package$firestore.onSnapshotNext_o3477o$ = onSnapshotNext;
  package$firestore.idDiffs_d0m7p1$ = idDiffs;
  package$firestore.onSnapshotNext_po64up$ = onSnapshotNext_0;
  package$firestore.onSnapshotNext_49319o$ = onSnapshotNext_1;
  package$firestore.txDefer_81x6o2$ = txDefer;
  package$firestore.tx_81x6o2$ = tx;
  package$firestore.txTry_81x6o2$ = txTry;
  package$firestore.onRollback_61ytec$ = onRollback;
  package$firestore.RollbackException = RollbackException;
  package$firestore.rollback = rollback;
  package$firestore.exists_a3uf2h$ = exists;
  package$firestore.flushDocs_lnhl1v$ = flushDocs;
  package$firestore.flushQueries_uk86bf$ = flushQueries;
  package$firestore.docRef_9g65oa$ = docRef;
  package$firestore.docRef_ut00iy$ = docRef_0;
  package$firestore.collectionRef_biyy30$ = collectionRef;
  package$firestore.randomDoc_hb25mr$ = randomDoc;
  package$firestore.randomDoc_5rwbmz$ = randomDoc_0;
  package$firestore.randomEditable_cejs18$ = randomEditable;
  package$firestore.save_xr2lrh$ = save;
  package$firestore.save_akgwwx$ = save_0;
  package$firestore.delete_xr2lrh$ = delete_1;
  package$firestore.delete_7hv9jb$ = delete_2;
  package$firestore.delete_jsbag5$ = delete_3;
  package$firestore.toRandomFsDoc_8wkasx$ = toRandomFsDoc;
  package$firestore.snapshots_49gdze$ = snapshots;
  package$firestore.read_bt13gf$ = read;
  package$firestore.docs_ilkqx8$ = docs;
  package$firestore.live_no8iyu$ = live;
  package$firestore.get_fsIdState_x32tru$ = get_fsIdState;
  package$firestore.updateFrom_oyg2fp$ = updateFrom;
  Object.defineProperty(package$firestore, 'FsDynamicOps', {
    get: FsDynamicOps_getInstance
  });
  package$firestore.get_new_bmgwz6$ = get_new;
  package$firestore.new_a7g4or$ = new_1;
  package$firestore.getCachedOrServer_1uroz$ = getCachedOrServer;
  package$firestore.getOrNull_uu0hce$ = getOrNull;
  package$firestore.FsCache = FsCache;
  package$firestore.fsLookup_rg6jg5$ = fsLookup;
  package$firestore.fsCache_yfbtpj$ = fsCache;
  package$firestore.fsCache_swod9v$ = fsCache_0;
  QuerySettings.Where = QuerySettings$Where;
  QuerySettings.OrderBy = QuerySettings$OrderBy;
  QuerySettings.Limit = QuerySettings$Limit;
  Object.defineProperty(QuerySettings$OrderDirection, 'Asc', {
    get: QuerySettings$OrderDirection$Asc_getInstance
  });
  Object.defineProperty(QuerySettings$OrderDirection, 'Desc', {
    get: QuerySettings$OrderDirection$Desc_getInstance
  });
  QuerySettings.OrderDirection = QuerySettings$OrderDirection;
  Object.defineProperty(QuerySettings$WhereOp, 'Eq', {
    get: QuerySettings$WhereOp$Eq_getInstance
  });
  Object.defineProperty(QuerySettings$WhereOp, 'ArrayContains', {
    get: QuerySettings$WhereOp$ArrayContains_getInstance
  });
  QuerySettings.WhereOp = QuerySettings$WhereOp;
  package$firestore.QuerySettings = QuerySettings;
  package$firestore.QuerySettingsBuilder = QuerySettingsBuilder;
  package$firestore.querySettings_oywost$ = querySettings;
  package$firestore.apply_io1z13$ = apply;
  package$firestore.apply_h66rd7$ = apply_0;
  package$firestore.apply_h05tjz$ = apply_1;
  package$firestore.apply_tgjpyq$ = apply_2;
  package$firestore.query_th3nra$ = query;
  package$firestore.documentChanges_4hx5ig$ = documentChanges;
  package$firestore.documentSnapshots_8s2sz4$ = documentSnapshots;
  package$firestore.toSnapshotEvents_nxyyql$ = toSnapshotEvents;
  package$firestore.snapshots_jlz3we$ = snapshots_0;
  package$firestore.snapshotEmitter_jsbag5$ = snapshotEmitter;
  package$firestore.listEvents_wamwi5$ = listEvents_0;
  package$firestore.toList_wamwi5$ = toList;
  var package$storage = package$firebase.storage || (package$firebase.storage = {});
  package$storage.get_RAW_3xcz9r$ = get_RAW;
  package$storage.get_BASE64_3xcz9r$ = get_BASE64;
  package$storage.get_BASE64URL_3xcz9r$ = get_BASE64URL;
  package$storage.get_DATA_URL_3xcz9r$ = get_DATA_URL;
  KillsApiFirebase.prototype.get_oldKilled_vsdo34$ = KillsApi.prototype.get_oldKilled_vsdo34$;
  KillsApiFirebase.prototype.get_oldKilledOpt_vsdo34$ = KillsApi.prototype.get_oldKilledOpt_vsdo34$;
  KillsApiFirebase.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  KillsApiFirebase.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  KillsApiFirebase.prototype.rx_wgabca$ = KillsApi.prototype.rx_wgabca$;
  KillsApiFirebase.prototype.rx_djv61p$ = KillsApi.prototype.rx_djv61p$;
  KillsApiFirebase.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  KillsApiFirebase.prototype.feedTo_9o5f67$ = KillsApi.prototype.feedTo_9o5f67$;
  KillsApiFirebase.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  KillsApiFirebase.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  KillsApiFirebase.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  KillsApiFirebase.prototype.forEachLater_xwzbbo$ = KillsApi.prototype.forEachLater_xwzbbo$;
  KillsApiFirebase.prototype.incremented_eoy9qo$ = KillsApi.prototype.incremented_eoy9qo$;
  KillsApiFirebase.prototype.linked_n1nom7$ = KillsApi.prototype.linked_n1nom7$;
  KillsApiFirebase.prototype.listen_ubid8w$ = KillsApi.prototype.listen_ubid8w$;
  KillsApiFirebase.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  KillsApiFirebase.prototype.mapLive_1mq1ue$ = KillsApi.prototype.mapLive_1mq1ue$;
  KillsApiFirebase.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  KillsApiFirebase.prototype.plusAssign_ubid8w$ = KillsApi.prototype.plusAssign_ubid8w$;
  KillsApiFirebase.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  KillsApiFirebase.prototype.remAssign_wgabca$ = KillsApi.prototype.remAssign_wgabca$;
  KillsApiFirebase.prototype.remAssign_djv61p$ = KillsApi.prototype.remAssign_djv61p$;
  KillsApiFirebase.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  KillsApiFirebase.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  KillsApiFirebase.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  KillsApiFirebase.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  KillsApiFirebase.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  DbKillsApi.prototype.get_ref_sj9vaa$ = DbApi.prototype.get_ref_sj9vaa$;
  DbKillsApi.prototype.get_ref_aqty80$ = DbApi.prototype.get_ref_aqty80$;
  DbKillsApi.prototype.get_randomDoc_sj9vaa$ = DbApi.prototype.get_randomDoc_sj9vaa$;
  DbKillsApi.prototype.toRandomFsDoc_xc7wmg$ = DbApi.prototype.toRandomFsDoc_xc7wmg$;
  DbKillsApi.prototype.randomEditable_mx4g9l$$default = DbApi.prototype.randomEditable_mx4g9l$$default;
  DbKillsApi.prototype.save_73z9b6$ = DbApi.prototype.save_73z9b6$;
  DbKillsApi.prototype.save_biv66q$ = DbApi.prototype.save_biv66q$;
  DbKillsApi.prototype.delete_73z9b6$ = DbApi.prototype.delete_73z9b6$;
  DbKillsApi.prototype.delete_ihdkly$ = DbApi.prototype.delete_ihdkly$;
  DbKillsApi.prototype.query_wzkv1r$$default = DbApi.prototype.query_wzkv1r$$default;
  DbKillsApi.prototype.getCachedOrServer_prxdpg$ = DbApi.prototype.getCachedOrServer_prxdpg$;
  DbKillsApi.prototype.getOrNull_m1hph$$default = DbApi.prototype.getOrNull_m1hph$$default;
  DbKillsApi.prototype.onSnapshotNext_po64up$ = KillsApiFirebase.prototype.onSnapshotNext_po64up$;
  DbKillsApi.prototype.get_oldKilled_vsdo34$ = KillsApiFirebase.prototype.get_oldKilled_vsdo34$;
  DbKillsApi.prototype.get_oldKilledOpt_vsdo34$ = KillsApiFirebase.prototype.get_oldKilledOpt_vsdo34$;
  DbKillsApi.prototype.rx_y6x17j$ = KillsApiFirebase.prototype.rx_y6x17j$;
  DbKillsApi.prototype.rx_46ic4w$ = KillsApiFirebase.prototype.rx_46ic4w$;
  DbKillsApi.prototype.rx_wgabca$ = KillsApiFirebase.prototype.rx_wgabca$;
  DbKillsApi.prototype.rx_djv61p$ = KillsApiFirebase.prototype.rx_djv61p$;
  DbKillsApi.prototype.containsRx_1w65cx$ = KillsApiFirebase.prototype.containsRx_1w65cx$;
  DbKillsApi.prototype.feedTo_9o5f67$ = KillsApiFirebase.prototype.feedTo_9o5f67$;
  DbKillsApi.prototype.filtered_tnde95$ = KillsApiFirebase.prototype.filtered_tnde95$;
  DbKillsApi.prototype.forEach_xwzbbo$ = KillsApiFirebase.prototype.forEach_xwzbbo$;
  DbKillsApi.prototype.forEach_35q7bt$ = KillsApiFirebase.prototype.forEach_35q7bt$;
  DbKillsApi.prototype.forEachLater_xwzbbo$ = KillsApiFirebase.prototype.forEachLater_xwzbbo$;
  DbKillsApi.prototype.incremented_eoy9qo$ = KillsApiFirebase.prototype.incremented_eoy9qo$;
  DbKillsApi.prototype.linked_n1nom7$ = KillsApiFirebase.prototype.linked_n1nom7$;
  DbKillsApi.prototype.listen_ubid8w$ = KillsApiFirebase.prototype.listen_ubid8w$;
  DbKillsApi.prototype.map_jtxi0h$ = KillsApiFirebase.prototype.map_jtxi0h$;
  DbKillsApi.prototype.mapLive_1mq1ue$ = KillsApiFirebase.prototype.mapLive_1mq1ue$;
  DbKillsApi.prototype.onChange_rlu5c6$ = KillsApiFirebase.prototype.onChange_rlu5c6$;
  DbKillsApi.prototype.plusAssign_ubid8w$ = KillsApiFirebase.prototype.plusAssign_ubid8w$;
  DbKillsApi.prototype.process_7xi3v7$ = KillsApiFirebase.prototype.process_7xi3v7$;
  DbKillsApi.prototype.remAssign_wgabca$ = KillsApiFirebase.prototype.remAssign_wgabca$;
  DbKillsApi.prototype.remAssign_djv61p$ = KillsApiFirebase.prototype.remAssign_djv61p$;
  DbKillsApi.prototype.remAssign_7fncnf$ = KillsApiFirebase.prototype.remAssign_7fncnf$;
  DbKillsApi.prototype.rxClass_c5yvvx$ = KillsApiFirebase.prototype.rxClass_c5yvvx$;
  DbKillsApi.prototype.rxClass_6sflyw$ = KillsApiFirebase.prototype.rxClass_6sflyw$;
  DbKillsApi.prototype.toChannelLater_z5dyp2$ = KillsApiFirebase.prototype.toChannelLater_z5dyp2$;
  DbKillsApi.prototype.toRxSet_jr4bl4$ = KillsApiFirebase.prototype.toRxSet_jr4bl4$;
  DbKillsApi.prototype.randomEditable_mx4g9l$ = DbApi.prototype.randomEditable_mx4g9l$;
  DbKillsApi.prototype.query_wzkv1r$ = DbApi.prototype.query_wzkv1r$;
  DbKillsApi.prototype.getOrNull_m1hph$ = DbApi.prototype.getOrNull_m1hph$;
  CsApiFirebase.prototype.toRx_on0lyu$ = CsApi.prototype.toRx_on0lyu$;
  CsKillsApiFirebase.prototype.get_ids_qko62t$ = CsKillsApi.prototype.get_ids_qko62t$;
  CsKillsApiFirebase.prototype.get_oldKilled_vsdo34$ = CsKillsApi.prototype.get_oldKilled_vsdo34$;
  CsKillsApiFirebase.prototype.get_oldKilledOpt_vsdo34$ = CsKillsApi.prototype.get_oldKilledOpt_vsdo34$;
  CsKillsApiFirebase.prototype.rx_y6x17j$ = CsKillsApi.prototype.rx_y6x17j$;
  CsKillsApiFirebase.prototype.rx_46ic4w$ = CsKillsApi.prototype.rx_46ic4w$;
  CsKillsApiFirebase.prototype.rx_wgabca$ = CsKillsApi.prototype.rx_wgabca$;
  CsKillsApiFirebase.prototype.rx_djv61p$ = CsKillsApi.prototype.rx_djv61p$;
  CsKillsApiFirebase.prototype.containsRx_1w65cx$ = CsKillsApi.prototype.containsRx_1w65cx$;
  CsKillsApiFirebase.prototype.events_9k4h2$ = CsKillsApi.prototype.events_9k4h2$;
  CsKillsApiFirebase.prototype.feedTo_9o5f67$ = CsKillsApi.prototype.feedTo_9o5f67$;
  CsKillsApiFirebase.prototype.filter_hu0si9$ = CsKillsApi.prototype.filter_hu0si9$;
  CsKillsApiFirebase.prototype.filtered_tnde95$ = CsKillsApi.prototype.filtered_tnde95$;
  CsKillsApiFirebase.prototype.forEach_xwzbbo$ = CsKillsApi.prototype.forEach_xwzbbo$;
  CsKillsApiFirebase.prototype.forEach_35q7bt$ = CsKillsApi.prototype.forEach_35q7bt$;
  CsKillsApiFirebase.prototype.forEachLater_xwzbbo$ = CsKillsApi.prototype.forEachLater_xwzbbo$;
  CsKillsApiFirebase.prototype.incremented_eoy9qo$ = CsKillsApi.prototype.incremented_eoy9qo$;
  CsKillsApiFirebase.prototype.linked_n1nom7$ = CsKillsApi.prototype.linked_n1nom7$;
  CsKillsApiFirebase.prototype.listen_ubid8w$ = CsKillsApi.prototype.listen_ubid8w$;
  CsKillsApiFirebase.prototype.map_jtxi0h$ = CsKillsApi.prototype.map_jtxi0h$;
  CsKillsApiFirebase.prototype.mapLive_1mq1ue$ = CsKillsApi.prototype.mapLive_1mq1ue$;
  CsKillsApiFirebase.prototype.onChange_rlu5c6$ = CsKillsApi.prototype.onChange_rlu5c6$;
  CsKillsApiFirebase.prototype.plusAssign_ubid8w$ = CsKillsApi.prototype.plusAssign_ubid8w$;
  CsKillsApiFirebase.prototype.process_y3juat$ = CsKillsApi.prototype.process_y3juat$;
  CsKillsApiFirebase.prototype.process_7xi3v7$ = CsKillsApi.prototype.process_7xi3v7$;
  CsKillsApiFirebase.prototype.remAssign_wgabca$ = CsKillsApi.prototype.remAssign_wgabca$;
  CsKillsApiFirebase.prototype.remAssign_djv61p$ = CsKillsApi.prototype.remAssign_djv61p$;
  CsKillsApiFirebase.prototype.remAssign_7fncnf$ = CsKillsApi.prototype.remAssign_7fncnf$;
  CsKillsApiFirebase.prototype.rxClass_c5yvvx$ = CsKillsApi.prototype.rxClass_c5yvvx$;
  CsKillsApiFirebase.prototype.rxClass_6sflyw$ = CsKillsApi.prototype.rxClass_6sflyw$;
  CsKillsApiFirebase.prototype.toChannelLater_z5dyp2$ = CsKillsApi.prototype.toChannelLater_z5dyp2$;
  CsKillsApiFirebase.prototype.toRx_on0lyu$ = CsKillsApi.prototype.toRx_on0lyu$;
  CsKillsApiFirebase.prototype.toRxSet_jr4bl4$ = CsKillsApi.prototype.toRxSet_jr4bl4$;
  CsKillsApiFirebase.prototype.toSnapshotEvents_ecp0ut$ = CsApiFirebase.prototype.toSnapshotEvents_ecp0ut$;
  CsDbKillsApi.prototype.get_ids_qko62t$ = CsKillsApiFirebase.prototype.get_ids_qko62t$;
  CsDbKillsApi.prototype.get_oldKilled_vsdo34$ = CsKillsApiFirebase.prototype.get_oldKilled_vsdo34$;
  CsDbKillsApi.prototype.get_oldKilledOpt_vsdo34$ = CsKillsApiFirebase.prototype.get_oldKilledOpt_vsdo34$;
  CsDbKillsApi.prototype.rx_y6x17j$ = CsKillsApiFirebase.prototype.rx_y6x17j$;
  CsDbKillsApi.prototype.rx_46ic4w$ = CsKillsApiFirebase.prototype.rx_46ic4w$;
  CsDbKillsApi.prototype.rx_wgabca$ = CsKillsApiFirebase.prototype.rx_wgabca$;
  CsDbKillsApi.prototype.rx_djv61p$ = CsKillsApiFirebase.prototype.rx_djv61p$;
  CsDbKillsApi.prototype.containsRx_1w65cx$ = CsKillsApiFirebase.prototype.containsRx_1w65cx$;
  CsDbKillsApi.prototype.events_9k4h2$ = CsKillsApiFirebase.prototype.events_9k4h2$;
  CsDbKillsApi.prototype.feedTo_9o5f67$ = CsKillsApiFirebase.prototype.feedTo_9o5f67$;
  CsDbKillsApi.prototype.filter_hu0si9$ = CsKillsApiFirebase.prototype.filter_hu0si9$;
  CsDbKillsApi.prototype.filtered_tnde95$ = CsKillsApiFirebase.prototype.filtered_tnde95$;
  CsDbKillsApi.prototype.forEach_xwzbbo$ = CsKillsApiFirebase.prototype.forEach_xwzbbo$;
  CsDbKillsApi.prototype.forEach_35q7bt$ = CsKillsApiFirebase.prototype.forEach_35q7bt$;
  CsDbKillsApi.prototype.forEachLater_xwzbbo$ = CsKillsApiFirebase.prototype.forEachLater_xwzbbo$;
  CsDbKillsApi.prototype.incremented_eoy9qo$ = CsKillsApiFirebase.prototype.incremented_eoy9qo$;
  CsDbKillsApi.prototype.linked_n1nom7$ = CsKillsApiFirebase.prototype.linked_n1nom7$;
  CsDbKillsApi.prototype.listen_ubid8w$ = CsKillsApiFirebase.prototype.listen_ubid8w$;
  CsDbKillsApi.prototype.map_jtxi0h$ = CsKillsApiFirebase.prototype.map_jtxi0h$;
  CsDbKillsApi.prototype.mapLive_1mq1ue$ = CsKillsApiFirebase.prototype.mapLive_1mq1ue$;
  CsDbKillsApi.prototype.onChange_rlu5c6$ = CsKillsApiFirebase.prototype.onChange_rlu5c6$;
  CsDbKillsApi.prototype.plusAssign_ubid8w$ = CsKillsApiFirebase.prototype.plusAssign_ubid8w$;
  CsDbKillsApi.prototype.process_y3juat$ = CsKillsApiFirebase.prototype.process_y3juat$;
  CsDbKillsApi.prototype.process_7xi3v7$ = CsKillsApiFirebase.prototype.process_7xi3v7$;
  CsDbKillsApi.prototype.remAssign_wgabca$ = CsKillsApiFirebase.prototype.remAssign_wgabca$;
  CsDbKillsApi.prototype.remAssign_djv61p$ = CsKillsApiFirebase.prototype.remAssign_djv61p$;
  CsDbKillsApi.prototype.remAssign_7fncnf$ = CsKillsApiFirebase.prototype.remAssign_7fncnf$;
  CsDbKillsApi.prototype.rxClass_c5yvvx$ = CsKillsApiFirebase.prototype.rxClass_c5yvvx$;
  CsDbKillsApi.prototype.rxClass_6sflyw$ = CsKillsApiFirebase.prototype.rxClass_6sflyw$;
  CsDbKillsApi.prototype.toChannelLater_z5dyp2$ = CsKillsApiFirebase.prototype.toChannelLater_z5dyp2$;
  CsDbKillsApi.prototype.toRx_on0lyu$ = CsKillsApiFirebase.prototype.toRx_on0lyu$;
  CsDbKillsApi.prototype.toRxSet_jr4bl4$ = CsKillsApiFirebase.prototype.toRxSet_jr4bl4$;
  CsDbKillsApi.prototype.toSnapshotEvents_ecp0ut$ = CsKillsApiFirebase.prototype.toSnapshotEvents_ecp0ut$;
  CsDbKillsApi.prototype.get_ref_sj9vaa$ = DbApi.prototype.get_ref_sj9vaa$;
  CsDbKillsApi.prototype.get_ref_aqty80$ = DbApi.prototype.get_ref_aqty80$;
  CsDbKillsApi.prototype.get_randomDoc_sj9vaa$ = DbApi.prototype.get_randomDoc_sj9vaa$;
  CsDbKillsApi.prototype.toRandomFsDoc_xc7wmg$ = DbApi.prototype.toRandomFsDoc_xc7wmg$;
  CsDbKillsApi.prototype.randomEditable_mx4g9l$$default = DbApi.prototype.randomEditable_mx4g9l$$default;
  CsDbKillsApi.prototype.save_73z9b6$ = DbApi.prototype.save_73z9b6$;
  CsDbKillsApi.prototype.save_biv66q$ = DbApi.prototype.save_biv66q$;
  CsDbKillsApi.prototype.delete_73z9b6$ = DbApi.prototype.delete_73z9b6$;
  CsDbKillsApi.prototype.delete_ihdkly$ = DbApi.prototype.delete_ihdkly$;
  CsDbKillsApi.prototype.query_wzkv1r$$default = DbApi.prototype.query_wzkv1r$$default;
  CsDbKillsApi.prototype.getCachedOrServer_prxdpg$ = DbApi.prototype.getCachedOrServer_prxdpg$;
  CsDbKillsApi.prototype.getOrNull_m1hph$$default = DbApi.prototype.getOrNull_m1hph$$default;
  CsDbKillsApi.prototype.onSnapshotNext_po64up$ = KillsApiFirebase.prototype.onSnapshotNext_po64up$;
  CsDbKillsApi.prototype.get_live_73z9b6$ = DbKillsApi.prototype.get_live_73z9b6$;
  CsDbKillsApi.prototype.randomEditable_mx4g9l$ = DbApi.prototype.randomEditable_mx4g9l$;
  CsDbKillsApi.prototype.query_wzkv1r$ = DbApi.prototype.query_wzkv1r$;
  CsDbKillsApi.prototype.getOrNull_m1hph$ = DbApi.prototype.getOrNull_m1hph$;
  querySettings$ObjectLiteral.prototype.arrayContains_s44rpz$ = QuerySettingsBuilder.prototype.arrayContains_s44rpz$;
  querySettings$ObjectLiteral.prototype.eq_bo9m63$ = QuerySettingsBuilder.prototype.eq_bo9m63$;
  querySettings$ObjectLiteral.prototype.limit_za3lpa$ = QuerySettingsBuilder.prototype.limit_za3lpa$;
  querySettings$ObjectLiteral.prototype.get_asc_5eq60p$ = QuerySettingsBuilder.prototype.get_asc_5eq60p$;
  querySettings$ObjectLiteral.prototype.get_desc_5eq60p$ = QuerySettingsBuilder.prototype.get_desc_5eq60p$;
  MaxBatchSize = 500;
  Kotlin.defineModule('appsimake-firebase', _);
  return _;
}(typeof this['appsimake-firebase'] === 'undefined' ? {} : this['appsimake-firebase'], kotlin, this['appsimake-commonshr'], this['kotlinx-coroutines-core']);

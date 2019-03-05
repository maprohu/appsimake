if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-firebase'.");
}
if (typeof this['appsimake-firebaseshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebase'. Its dependency 'appsimake-firebaseshr' was not found. Please, check whether 'appsimake-firebaseshr' is loaded prior to 'appsimake-firebase'.");
}
this['appsimake-firebase'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_common, $module$kotlinx_coroutines_core, $module$appsimake_firebaseshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Api = $module$appsimake_commonshr.commonshr.Api;
  var KillsApi = $module$appsimake_commonshr.commonshr.KillsApi;
  var CsApi = $module$appsimake_commonshr.commonshr.CsApi;
  var CsKillsApiCommon = $module$appsimake_common.common.CsKillsApiCommon;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var HasKills = $module$appsimake_commonshr.commonshr.HasKills;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var HasCsKills = $module$appsimake_commonshr.commonshr.HasCsKills;
  var InvokeWith = $module$appsimake_commonshr.commonshr.InvokeWith;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var produce = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.produce_f6xzli$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var insertAt = $module$appsimake_common.common.insertAt_tevjyx$;
  var equals = Kotlin.equals;
  var removeAt = $module$appsimake_common.common.removeAt_poj3bi$;
  var replaceAt = $module$appsimake_common.common.replaceAt_l17iyt$;
  var ListenableMutableList_init = $module$appsimake_common.common.ListenableMutableList_init_287e2$;
  var Var = $module$appsimake_commonshr.rx.Var;
  var report = $module$appsimake_commonshr.commonshr.report_s8jyv4$;
  var SetDiff = $module$appsimake_commonshr.commonshr.SetDiff;
  var plus = Kotlin.kotlin.collections.plus_xfiyik$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var asPromise = $module$kotlinx_coroutines_core.kotlinx.coroutines.asPromise_ge6odz$;
  var asDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.asDeferred_t11jrl$;
  var Try = $module$appsimake_commonshr.common.Try;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var once = $module$appsimake_commonshr.commonshr.once_yo2cq0$;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var FieldValue$Companion = firebase.firestore.FieldValue;
  var PropOps = $module$appsimake_firebaseshr.firebaseshr.PropOps;
  var initBinder = $module$appsimake_firebaseshr.firebaseshr.initBinder_frfi3t$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var Emitter = $module$appsimake_commonshr.common.Emitter;
  var SetAdded = $module$appsimake_commonshr.commonshr.SetAdded;
  var ensureNotNull = Kotlin.ensureNotNull;
  var minus = Kotlin.kotlin.collections.minus_xfiyik$;
  var SetRemoved = $module$appsimake_commonshr.commonshr.SetRemoved;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var SetSourceWithKey = $module$appsimake_commonshr.common.SetSourceWithKey;
  var initFrom = $module$appsimake_firebaseshr.firebaseshr.initFrom_bruz9y$;
  var RxMutableSet = $module$appsimake_commonshr.rx.RxMutableSet;
  var coroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.coroutineScope_awg8ri$;
  var process = $module$appsimake_commonshr.rx.process_d62qid$;
  var wrapSnapshotEvents = $module$appsimake_commonshr.commonshr.properties.wrapSnapshotEvents_j0uhh8$;
  var FsIdState = $module$appsimake_commonshr.commonshr.FsIdState;
  var FsIdState$HasId = $module$appsimake_commonshr.commonshr.FsIdState.HasId;
  var writeDynamic = $module$appsimake_commonshr.commonshr.properties.writeDynamic_y9dcxh$;
  var get_docWrap = $module$appsimake_commonshr.commonshr.get_docWrap_axmc3l$;
  var FsId_init = $module$appsimake_commonshr.commonshr.FsId_init_isyo70$;
  var toFsDoc = $module$appsimake_commonshr.commonshr.toFsDoc_9d6cjt$;
  var timesAssign = $module$appsimake_commonshr.commonshr.timesAssign_rmur43$;
  var readDynamic = $module$appsimake_commonshr.commonshr.properties.readDynamic_121my8$;
  var TS = $module$appsimake_commonshr.commonshr.properties.TS;
  var Timestamp$Companion = firebase.firestore.Timestamp;
  var TS$Value = $module$appsimake_commonshr.commonshr.properties.TS.Value;
  var DynamicOps = $module$appsimake_commonshr.commonshr.properties.DynamicOps;
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
  var listEvents = $module$appsimake_commonshr.commonshr.properties.listEvents_jx09cw$;
  RollbackException.prototype = Object.create(Exception.prototype);
  RollbackException.prototype.constructor = RollbackException;
  QuerySettings$OrderDirection.prototype = Object.create(Enum.prototype);
  QuerySettings$OrderDirection.prototype.constructor = QuerySettings$OrderDirection;
  function DbApi() {
  }
  DbApi.prototype.get_ref_9jwep6$ = function ($receiver) {
    return collectionRef($receiver, this);
  };
  DbApi.prototype.get_ref_lysoy0$ = function ($receiver) {
    return docRef_0($receiver, this);
  };
  DbApi.prototype.get_randomDoc_9jwep6$ = function ($receiver) {
    return randomDoc($receiver, this);
  };
  DbApi.prototype.toRandomFsDoc_t7liao$ = function ($receiver, cw) {
    return toRandomFsDoc($receiver, this, cw);
  };
  DbApi.prototype.save_73z9b6$ = function ($receiver) {
    return save($receiver, this);
  };
  DbApi.prototype.delete_73z9b6$ = function ($receiver) {
    return delete_0($receiver, this);
  };
  DbApi.prototype.query_mixq7r$$default = function ($receiver, query) {
    return query_0($receiver, this, query);
  };
  function DbApi$query$lambda($receiver) {
    return Unit;
  }
  DbApi.prototype.query_mixq7r$ = function ($receiver, query, callback$default) {
    if (query === void 0)
      query = DbApi$query$lambda;
    return callback$default ? callback$default($receiver, query) : this.query_mixq7r$$default($receiver, query);
  };
  DbApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DbApi',
    interfaces: [HasDb, Api]
  };
  function KillsApiFirebase() {
  }
  KillsApiFirebase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KillsApiFirebase',
    interfaces: [KillsApi]
  };
  function DbKillsApi() {
  }
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
  CsApiFirebase.prototype.listEvents_1nmm22$ = function ($receiver, collectionWrap, create) {
    return listEvents_0($receiver, this, collectionWrap, create);
  };
  CsApiFirebase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsApiFirebase',
    interfaces: [CsApi]
  };
  function CsKillsApiFirebase() {
  }
  CsKillsApiFirebase.prototype.listEvents_ghesau$ = function ($receiver, create) {
    return listEvents_1($receiver, this, create);
  };
  CsKillsApiFirebase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsKillsApiFirebase',
    interfaces: [CsApiFirebase, CsKillsApiCommon]
  };
  function CsDbKillsApi() {
  }
  CsDbKillsApi.prototype.documentChanges_z2kgpb$ = function ($receiver) {
    return documentChanges($receiver, this);
  };
  CsDbKillsApi.prototype.get_snapshots_5bfeyi$ = function ($receiver) {
    return snapshots_1($receiver, this);
  };
  CsDbKillsApi.prototype.listEvents_e847ux$$default = function ($receiver, create, query) {
    return listEvents_2($receiver, this, create, query);
  };
  function CsDbKillsApi$listEvents$lambda($receiver) {
    return Unit;
  }
  CsDbKillsApi.prototype.listEvents_e847ux$ = function ($receiver, create, query, callback$default) {
    if (query === void 0)
      query = CsDbKillsApi$listEvents$lambda;
    return callback$default ? callback$default($receiver, create, query) : this.listEvents_e847ux$$default($receiver, create, query);
  };
  CsDbKillsApi.prototype.get_live_73z9b6$ = function ($receiver) {
    return live($receiver, this);
  };
  CsDbKillsApi.prototype.docs_om34f8$ = function ($receiver) {
    return docs($receiver, this);
  };
  CsDbKillsApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsDbKillsApi',
    interfaces: [DbKillsApi, KillsApiFirebase, DbApi, CsKillsApiFirebase, CsKillsApiCommon, HasCsDbKills]
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
  function FirebaseApi() {
  }
  FirebaseApi.prototype.get_ids_wjz35z$ = function ($receiver) {
    return ids($receiver, this.kills);
  };
  FirebaseApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FirebaseApi',
    interfaces: [InvokeWith, KillsApi]
  };
  function get_fbapi$ObjectLiteral(this$fbapi) {
    this.this$fbapi = this$fbapi;
    this.$delegate_elvtu3$_0 = this$fbapi;
  }
  Object.defineProperty(get_fbapi$ObjectLiteral.prototype, 'kills', {
    get: function () {
      return this.$delegate_elvtu3$_0.kills;
    }
  });
  get_fbapi$ObjectLiteral.prototype.rx_y6x17j$ = function (fn) {
    return this.$delegate_elvtu3$_0.rx_y6x17j$(fn);
  };
  get_fbapi$ObjectLiteral.prototype.rx_46ic4w$ = function (killFirst, fn) {
    return this.$delegate_elvtu3$_0.rx_46ic4w$(killFirst, fn);
  };
  get_fbapi$ObjectLiteral.prototype.containsRx_1w65cx$ = function ($receiver, value) {
    return this.$delegate_elvtu3$_0.containsRx_1w65cx$($receiver, value);
  };
  get_fbapi$ObjectLiteral.prototype.filtered_tnde95$ = function ($receiver, fn) {
    return this.$delegate_elvtu3$_0.filtered_tnde95$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.forEach_xwzbbo$ = function ($receiver, fn) {
    return this.$delegate_elvtu3$_0.forEach_xwzbbo$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.forEach_35q7bt$ = function ($receiver, killOrder, fn) {
    return this.$delegate_elvtu3$_0.forEach_35q7bt$($receiver, killOrder, fn);
  };
  get_fbapi$ObjectLiteral.prototype.map_1mq1ue$ = function ($receiver, fn) {
    return this.$delegate_elvtu3$_0.map_1mq1ue$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.map_jtxi0h$ = function ($receiver, fn) {
    return this.$delegate_elvtu3$_0.map_jtxi0h$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.onChange_rlu5c6$ = function ($receiver, fn) {
    return this.$delegate_elvtu3$_0.onChange_rlu5c6$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.process_7xi3v7$ = function ($receiver, fn) {
    return this.$delegate_elvtu3$_0.process_7xi3v7$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.remAssign_7fncnf$ = function ($receiver, fn) {
    return this.$delegate_elvtu3$_0.remAssign_7fncnf$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.rxClass_c5yvvx$ = function ($receiver, fn) {
    return this.$delegate_elvtu3$_0.rxClass_c5yvvx$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.rxClass_6sflyw$ = function ($receiver, stl, fn) {
    return this.$delegate_elvtu3$_0.rxClass_6sflyw$($receiver, stl, fn);
  };
  get_fbapi$ObjectLiteral.prototype.toChannelLater_z5dyp2$ = function ($receiver) {
    return this.$delegate_elvtu3$_0.toChannelLater_z5dyp2$($receiver);
  };
  get_fbapi$ObjectLiteral.prototype.toRxSet_jr4bl4$ = function ($receiver) {
    return this.$delegate_elvtu3$_0.toRxSet_jr4bl4$($receiver);
  };
  get_fbapi$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [FirebaseApi, KillsApi]
  };
  function get_fbapi($receiver) {
    return new get_fbapi$ObjectLiteral($receiver);
  }
  function AppOptions() {
    return {};
  }
  function snapshots$lambda$lambda(this$) {
    return function (qs) {
      this$.offer_11rb$(qs);
      return Unit;
    };
  }
  function snapshots$lambda$lambda_0(this$) {
    return function (e) {
      this$.close_dbl4no$(e);
      return Unit;
    };
  }
  function snapshots$lambda$lambda$lambda(this$) {
    return function (it) {
      this$.complete_11rb$(Unit);
      return Unit;
    };
  }
  function Coroutine$snapshots$lambda(closure$query_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 6;
    this.local$closure$query = closure$query_0;
    this.local$cancel = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$snapshots$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$snapshots$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$snapshots$lambda.prototype.constructor = Coroutine$snapshots$lambda;
  Coroutine$snapshots$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$cancel = this.local$closure$query.onSnapshot(snapshots$lambda$lambda(this.local$$receiver), snapshots$lambda$lambda_0(this.local$$receiver));
            this.exceptionState_0 = 4;
            var $receiver = CompletableDeferred();
            this.local$$receiver.invokeOnClose_f05bi3$(snapshots$lambda$lambda$lambda($receiver));
            this.state_0 = 1;
            this.result_0 = $receiver.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            return;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            this.local$cancel();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  function snapshots$lambda(closure$query_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$snapshots$lambda(closure$query_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function snapshots($receiver, query) {
    return produce($receiver, void 0, 2147483647, snapshots$lambda(query));
  }
  function FirebaseCoroutinesApi() {
  }
  FirebaseCoroutinesApi.prototype.get_snapshots_z2kgpb$ = function ($receiver) {
    return snapshots(this, $receiver);
  };
  FirebaseCoroutinesApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FirebaseCoroutinesApi',
    interfaces: [CoroutineScope]
  };
  function setOptionsMerge() {
    var $receiver = {};
    $receiver.merge = true;
    return $receiver;
  }
  function Settings() {
    return {};
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
  function queryUi$lambda(closure$callback, closure$element, closure$item) {
    return function (qs) {
      var tmp$;
      (tmp$ = closure$callback != null ? closure$callback.onNext : null) != null ? tmp$(qs) : null;
      var $receiver = qs.docChanges();
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var element = $receiver[tmp$_0];
        var closure$element_0 = closure$element;
        var closure$item_0 = closure$item;
        var tmp$_1;
        tmp$_1 = element.type;
        if (equals(tmp$_1, 'added'))
          insertAt(closure$element_0, element.newIndex, closure$item_0(element.doc.data()));
        else {
          if (equals(tmp$_1, 'removed'))
            removeAt(closure$element_0, element.oldIndex);
          else {
            if (equals(tmp$_1, 'modified')) {
              var ie = closure$item_0(element.doc.data());
              if (element.newIndex === element.oldIndex)
                replaceAt(closure$element_0, element.oldIndex, ie);
              else {
                removeAt(closure$element_0, element.oldIndex);
                insertAt(closure$element_0, element.newIndex, ie);
              }
            }
          }
        }
      }
      return Unit;
    };
  }
  function queryUi$lambda_0(closure$callback) {
    return function (error) {
      var tmp$;
      (tmp$ = closure$callback != null ? closure$callback.onError : null) != null ? tmp$(error) : null;
      console.dir(error);
      return Unit;
    };
  }
  function queryUi(query, element, callback, item) {
    if (callback === void 0)
      callback = null;
    return query.onSnapshot(queryUi$lambda(callback, element, item), queryUi$lambda_0(callback));
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
  function listen$lambda() {
    return Unit;
  }
  function listen$lambda_0(it) {
    console.dir(it);
    return Unit;
  }
  function listen$lambda_1(closure$first, closure$onFirst, closure$list) {
    return function (qs) {
      if (closure$first.v) {
        closure$first.v = false;
        closure$onFirst();
      }
      var $receiver = qs.docChanges();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var closure$list_0 = closure$list;
        var tmp$_0;
        tmp$_0 = element.type;
        if (equals(tmp$_0, 'added'))
          closure$list_0.add_wxm5ur$(element.newIndex, new Var(element.doc.data()));
        else {
          if (equals(tmp$_0, 'removed'))
            closure$list_0.removeAt_za3lpa$(element.oldIndex);
          else {
            if (equals(tmp$_0, 'modified')) {
              closure$list_0.get_za3lpa$(element.oldIndex).now = element.doc.data();
              if (element.newIndex !== element.oldIndex) {
                closure$list_0.move_vux9f0$(element.oldIndex, element.newIndex);
              }
            }
          }
        }
      }
      return Unit;
    };
  }
  function listen($receiver, killables, onFirst, onError) {
    if (onFirst === void 0)
      onFirst = listen$lambda;
    if (onError === void 0)
      onError = listen$lambda_0;
    var first = {v: true};
    var list = ListenableMutableList_init();
    killables.plusAssign_o14v8n$($receiver.query.onSnapshot(listen$lambda_1(first, onFirst, list), onError));
    return list;
  }
  function withDefaultSettings($receiver) {
    $receiver.settings(Settings());
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
  function ListenConfig(list, create, update, remove, onFirst, onError) {
    ListenConfig$Companion_getInstance();
    if (onFirst === void 0)
      onFirst = ListenConfig_init$lambda;
    if (onError === void 0)
      onError = ListenConfig_init$lambda_0;
    this.list = list;
    this.create = create;
    this.update = update;
    this.remove = remove;
    this.onFirst = onFirst;
    this.onError = onError;
  }
  function ListenConfig$Companion() {
    ListenConfig$Companion_instance = this;
  }
  function ListenConfig$Companion$hasProps$lambda(closure$create, closure$collectionWrap) {
    return function (id, d) {
      var $receiver = closure$create();
      var closure$collectionWrap_0 = closure$collectionWrap;
      var $receiver_0 = $receiver.props;
      $receiver_0.collection = closure$collectionWrap_0;
      $receiver_0.persistedFB_61zpoe$(id);
      $receiver_0.extractInitial_za3rmp$(d);
      $receiver_0.live.now = true;
      return $receiver;
    };
  }
  function ListenConfig$Companion$hasProps$lambda_0($receiver, d) {
    $receiver.props.extractInitial_za3rmp$(d);
    return Unit;
  }
  function ListenConfig$Companion$hasProps$lambda_1(t) {
    t.props.live.now = false;
    return Unit;
  }
  ListenConfig$Companion.prototype.hasProps_4r7uln$ = function (list, collectionWrap, create) {
    return new ListenConfig(list, ListenConfig$Companion$hasProps$lambda(create, collectionWrap), ListenConfig$Companion$hasProps$lambda_0, ListenConfig$Companion$hasProps$lambda_1);
  };
  ListenConfig$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ListenConfig$Companion_instance = null;
  function ListenConfig$Companion_getInstance() {
    if (ListenConfig$Companion_instance === null) {
      new ListenConfig$Companion();
    }
    return ListenConfig$Companion_instance;
  }
  function ListenConfig_init$lambda() {
    return Unit;
  }
  function ListenConfig_init$lambda_0(it) {
    console.dir(it);
    return Unit;
  }
  ListenConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListenConfig',
    interfaces: []
  };
  ListenConfig.prototype.component1 = function () {
    return this.list;
  };
  ListenConfig.prototype.component2 = function () {
    return this.create;
  };
  ListenConfig.prototype.component3 = function () {
    return this.update;
  };
  ListenConfig.prototype.component4 = function () {
    return this.remove;
  };
  ListenConfig.prototype.component5 = function () {
    return this.onFirst;
  };
  ListenConfig.prototype.component6 = function () {
    return this.onError;
  };
  ListenConfig.prototype.copy_1yl3qd$ = function (list, create, update, remove, onFirst, onError) {
    return new ListenConfig(list === void 0 ? this.list : list, create === void 0 ? this.create : create, update === void 0 ? this.update : update, remove === void 0 ? this.remove : remove, onFirst === void 0 ? this.onFirst : onFirst, onError === void 0 ? this.onError : onError);
  };
  ListenConfig.prototype.toString = function () {
    return 'ListenConfig(list=' + Kotlin.toString(this.list) + (', create=' + Kotlin.toString(this.create)) + (', update=' + Kotlin.toString(this.update)) + (', remove=' + Kotlin.toString(this.remove)) + (', onFirst=' + Kotlin.toString(this.onFirst)) + (', onError=' + Kotlin.toString(this.onError)) + ')';
  };
  ListenConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.list) | 0;
    result = result * 31 + Kotlin.hashCode(this.create) | 0;
    result = result * 31 + Kotlin.hashCode(this.update) | 0;
    result = result * 31 + Kotlin.hashCode(this.remove) | 0;
    result = result * 31 + Kotlin.hashCode(this.onFirst) | 0;
    result = result * 31 + Kotlin.hashCode(this.onError) | 0;
    return result;
  };
  ListenConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.list, other.list) && Kotlin.equals(this.create, other.create) && Kotlin.equals(this.update, other.update) && Kotlin.equals(this.remove, other.remove) && Kotlin.equals(this.onFirst, other.onFirst) && Kotlin.equals(this.onError, other.onError)))));
  };
  function listen_0($receiver, killables, config) {
    listen_1($receiver.query, killables, config);
  }
  function listen$lambda$lambda(this$) {
    return function (qs) {
      var $receiver = qs.docChanges();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var this$_0 = this$;
        var tmp$_0;
        tmp$_0 = element.type;
        if (equals(tmp$_0, 'added'))
          this$_0.list.add_wxm5ur$(element.newIndex, this$_0.create(element.doc.id, element.doc.data()));
        else {
          if (equals(tmp$_0, 'removed'))
            this$_0.remove(this$_0.list.removeAt_za3lpa$(element.oldIndex));
          else {
            if (equals(tmp$_0, 'modified')) {
              this$_0.update(this$_0.list.get_za3lpa$(element.oldIndex), element.doc.data());
              if (element.newIndex !== element.oldIndex) {
                this$_0.list.move_vux9f0$(element.oldIndex, element.newIndex);
              }
            }
          }
        }
      }
      return Unit;
    };
  }
  function listen$lambda$lambda_0(this$, closure$onEach, closure$onNext) {
    return function (it) {
      this$.onFirst();
      closure$onNext.v = closure$onEach;
      closure$onNext.v(it);
      return Unit;
    };
  }
  function listen$lambda$lambda_1(closure$onNext) {
    return function (qs) {
      closure$onNext.v(qs);
      return Unit;
    };
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function listen_1($receiver, killables, config) {
    if (!config.list.isEmpty()) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    var onNext = {v: null};
    var onEach = listen$lambda$lambda(config);
    onNext.v = listen$lambda$lambda_0(config, onEach, onNext);
    killables.plusAssign_o14v8n$($receiver.onSnapshot(listen$lambda$lambda_1(onNext), config.onError));
  }
  function orderBy($receiver, prop) {
    return $receiver.orderBy(prop.callableName);
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
  function QueryBuilder(collectionWrap, query) {
    this.collectionWrap = collectionWrap;
    this.query = query;
  }
  QueryBuilder.prototype.arrayContains_1h0ukf$ = function ($receiver, v) {
    this.query = this.query.where($receiver.name, 'array-contains', first($receiver.write_11rc$(setOf(v))));
  };
  QueryBuilder.prototype.eq_5h2n3e$ = function ($receiver, v) {
    this.query = this.query.where($receiver.name, '==', $receiver.write_11rc$(v));
  };
  QueryBuilder.prototype.asc_pslpm2$ = function ($receiver) {
    this.query = this.query.orderBy($receiver.name);
  };
  QueryBuilder.prototype.desc_tixzdw$ = function ($receiver) {
    this.query = this.query.orderBy($receiver.name, 'desc');
  };
  QueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QueryBuilder',
    interfaces: []
  };
  function query$lambda($receiver) {
    return Unit;
  }
  function query($receiver, db, fn) {
    if (fn === void 0)
      fn = query$lambda;
    var $receiver_0 = new QueryBuilder($receiver, db.collection($receiver.path));
    fn($receiver_0);
    return wrap($receiver_0);
  }
  function wrap($receiver) {
    return wrap_0($receiver.query, $receiver.collectionWrap);
  }
  function wrap_0($receiver, collectionWrap) {
    return new QueryWrap(collectionWrap, $receiver);
  }
  function QueryWrap(collectionWrap, query) {
    this.collectionWrap = collectionWrap;
    this.query = query;
  }
  QueryWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QueryWrap',
    interfaces: []
  };
  function onSnapshot($receiver, d) {
    if (d.exists) {
      var data = d.data();
      $receiver.props.deleted = false;
      $receiver.props.extractInitial_za3rmp$(data);
    }
     else {
      $receiver.props.deleted = true;
    }
  }
  function listen$lambda_2() {
    return Unit;
  }
  function listen$lambda_3(closure$target, closure$firstOnce) {
    return function (d) {
      onSnapshot(closure$target, d);
      closure$firstOnce();
      return Unit;
    };
  }
  function listen$lambda_4(closure$killSnapshot, closure$target) {
    return function () {
      closure$killSnapshot();
      closure$target.props.live.now = false;
      return Unit;
    };
  }
  function listen_2($receiver, target, onFirst) {
    if (onFirst === void 0)
      onFirst = listen$lambda_2;
    if (!!target.props.live.now) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    target.props.live.now = true;
    var firstOnce = once(onFirst);
    var killSnapshot = $receiver.onSnapshot(listen$lambda_3(target, firstOnce));
    return once(listen$lambda_4(killSnapshot, target));
  }
  var MaxBatchSize;
  function Coroutine$deleteCollection$lambda$step$lambda(closure$c_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$c = closure$c_0;
  }
  Coroutine$deleteCollection$lambda$step$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deleteCollection$lambda$step$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deleteCollection$lambda$step$lambda.prototype.constructor = Coroutine$deleteCollection$lambda$step$lambda;
  Coroutine$deleteCollection$lambda$step$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$closure$c, this);
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
  function deleteCollection$lambda$step$lambda(closure$c_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$deleteCollection$lambda$step$lambda(closure$c_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$deleteCollection$lambda$step(closure$ref_0, closure$db_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$ref = closure$ref_0;
    this.local$closure$db = closure$db_0;
    this.local$this$ = this$_0;
  }
  Coroutine$deleteCollection$lambda$step.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deleteCollection$lambda$step.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deleteCollection$lambda$step.prototype.constructor = Coroutine$deleteCollection$lambda$step;
  Coroutine$deleteCollection$lambda$step.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = await_0(this.local$closure$ref.limit(500).get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var qs = this.result_0;
            var batch = this.local$closure$db.batch();
            tmp$ = qs.docs;
            for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
              var doc = tmp$[tmp$_0];
              batch.delete(doc.ref);
            }

            var c = batch.commit();
            launch(this.local$this$, void 0, void 0, deleteCollection$lambda$step$lambda(c));
            return qs.size === 500;
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
  function deleteCollection$lambda$step(closure$ref_0, closure$db_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$deleteCollection$lambda$step(closure$ref_0, closure$db_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$deleteCollection$lambda(closure$ref_0, closure$db_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$ref = closure$ref_0;
    this.local$closure$db = closure$db_0;
    this.local$step = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$deleteCollection$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deleteCollection$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deleteCollection$lambda.prototype.constructor = Coroutine$deleteCollection$lambda;
  Coroutine$deleteCollection$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$step = deleteCollection$lambda$step(this.local$closure$ref, this.local$closure$db, this.local$$receiver);
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$step(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 2;
            continue;
          case 5:
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
  function deleteCollection$lambda(closure$ref_0, closure$db_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$deleteCollection$lambda(closure$ref_0, closure$db_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function deleteCollection(ref, db) {
    return async(coroutines.GlobalScope, void 0, void 0, deleteCollection$lambda(ref, db));
  }
  function initBinder$lambda() {
    return FieldValue$Companion.delete();
  }
  function initBinder$lambda_0() {
    return FieldValue$Companion.serverTimestamp();
  }
  function initBinder$lambda_1(closure$deps) {
    return function (cw) {
      return deleteCollection(collectionRef(cw, closure$deps), closure$deps.db);
    };
  }
  function initBinder$lambda_2(closure$deps) {
    return function (it) {
      return collectionRef(it, closure$deps).doc().id;
    };
  }
  function initBinder$lambda_3(closure$deps) {
    return function (w, d) {
      return asDeferred(docRef_0(w, closure$deps).set(d));
    };
  }
  function initBinder$lambda_4(closure$deps) {
    return function (w, d) {
      return asDeferred(docRef_0(w, closure$deps).set(d, setOptionsMerge()));
    };
  }
  function initBinder$lambda_5(vs) {
    var tmp$;
    return (tmp$ = FieldValue$Companion).arrayUnion.apply(tmp$, vs);
  }
  function initBinder$lambda_6(vs) {
    var tmp$;
    return (tmp$ = FieldValue$Companion).arrayRemove.apply(tmp$, vs);
  }
  function initBinder_0(deps) {
    initBinder(new PropOps(initBinder$lambda, initBinder$lambda_0, initBinder$lambda_1(deps), initBinder$lambda_2(deps), initBinder$lambda_3(deps), initBinder$lambda_4(deps), initBinder$lambda_5, initBinder$lambda_6));
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
  function toSetSource$placeholder(closure$cdmap) {
    return function (id) {
      var $receiver = closure$cdmap;
      var tmp$;
      var value = $receiver.get_11rb$(id);
      if (value == null) {
        var answer = CompletableDeferred();
        $receiver.put_xwzc9p$(id, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      return tmp$;
    };
  }
  function toSetSource$addOrUpdate(closure$placeholder, closure$create, closure$set, closure$emitter, closure$update) {
    return function (id, data) {
      var cd = closure$placeholder(id);
      if (!cd.isCompleted) {
        var t = closure$create(id, data);
        closure$set.v = plus(closure$set.v, t);
        cd.complete_11rb$(t);
        closure$emitter.emit_11rb$(new SetAdded(t));
      }
       else {
        closure$update(cd.getCompleted(), data);
      }
    };
  }
  function toSetSource$lambda(closure$addOrUpdate, closure$cdmap, closure$set, closure$emitter) {
    return function (qs) {
      var $receiver = qs.docChanges();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var closure$addOrUpdate_0 = closure$addOrUpdate;
        var closure$cdmap_0 = closure$cdmap;
        var closure$set_0 = closure$set;
        var closure$emitter_0 = closure$emitter;
        var tmp$_0;
        tmp$_0 = element.type;
        var tmp$_1 = equals(tmp$_0, 'added');
        if (!tmp$_1) {
          tmp$_1 = equals(tmp$_0, 'modified');
        }
        if (tmp$_1)
          closure$addOrUpdate_0(element.doc.id, element.doc.data());
        else {
          if (equals(tmp$_0, 'removed')) {
            var id = element.doc.id;
            var t = ensureNotNull(closure$cdmap_0.remove_11rb$(id)).getCompleted();
            closure$set_0.v = minus(closure$set_0.v, t);
            closure$emitter_0.emit_11rb$(new SetRemoved(t));
          }
        }
      }
      return Unit;
    };
  }
  function toSetSource$ObjectLiteral(closure$set, closure$emitter, closure$placeholder, closure$write) {
    this.closure$set = closure$set;
    this.closure$emitter = closure$emitter;
    this.closure$placeholder = closure$placeholder;
    this.closure$write = closure$write;
  }
  Object.defineProperty(toSetSource$ObjectLiteral.prototype, 'current', {
    get: function () {
      return this.closure$set.v;
    }
  });
  toSetSource$ObjectLiteral.prototype.listen_cp6tho$ = function (ks, fn) {
    plusAssign(ks, this.closure$emitter.add_qlkmfe$(fn));
    return this.closure$set.v;
  };
  toSetSource$ObjectLiteral.prototype.get_11rc$ = function (k) {
    return this.closure$placeholder(k);
  };
  function Coroutine$getOrPut_jkvqe4$($this, id_0, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$cd = void 0;
    this.local$id = id_0;
    this.local$fn = fn_0;
  }
  Coroutine$getOrPut_jkvqe4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getOrPut_jkvqe4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getOrPut_jkvqe4$.prototype.constructor = Coroutine$getOrPut_jkvqe4$;
  Coroutine$getOrPut_jkvqe4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$cd = this.$this.closure$placeholder(this.local$id);
            if (!this.local$cd.isCompleted) {
              this.state_0 = 2;
              this.result_0 = this.$this.closure$write(this.local$id, this.local$fn, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$cd.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  toSetSource$ObjectLiteral.prototype.getOrPut_jkvqe4$ = function (id_0, fn_0, continuation_0, suspended) {
    var instance = new Coroutine$getOrPut_jkvqe4$(this, id_0, fn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  toSetSource$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SetSourceWithKey]
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function Coroutine$toSetSource($receiver_0, killables_0, create_0, update_0, write_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$set = void 0;
    this.local$emitter = void 0;
    this.local$placeholder = void 0;
    this.local$addOrUpdate = void 0;
    this.local$$receiver = $receiver_0;
    this.local$killables = killables_0;
    this.local$create = create_0;
    this.local$update = update_0;
    this.local$write = write_0;
  }
  Coroutine$toSetSource.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toSetSource.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toSetSource.prototype.constructor = Coroutine$toSetSource;
  Coroutine$toSetSource.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$set = {v: emptySet()};
            var cdmap = LinkedHashMap_init();
            this.local$emitter = new Emitter();
            this.local$placeholder = toSetSource$placeholder(cdmap);
            this.local$addOrUpdate = toSetSource$addOrUpdate(this.local$placeholder, this.local$create, this.local$set, this.local$emitter, this.local$update);
            plusAssign(this.local$killables, onSnapshotNext(this.local$$receiver.query, toSetSource$lambda(this.local$addOrUpdate, cdmap, this.local$set, this.local$emitter)));
            this.state_0 = 2;
            this.result_0 = await_0(this.local$$receiver.query.get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var qs = this.result_0;
            var $receiver = qs.docs;
            var tmp$;
            for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
              var element = $receiver[tmp$];
              this.local$addOrUpdate(element.id, element.data());
            }

            return new toSetSource$ObjectLiteral(this.local$set, this.local$emitter, this.local$placeholder, this.local$write);
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
  function toSetSource($receiver_0, killables_0, create_0, update_0, write_0, continuation_0, suspended) {
    var instance = new Coroutine$toSetSource($receiver_0, killables_0, create_0, update_0, write_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function toSetSource$createPersisted(closure$create, closure$collectionWrap) {
    return function (id) {
      var $receiver = closure$create();
      var closure$collectionWrap_0 = closure$collectionWrap;
      $receiver.props.persisted_11rd$(closure$collectionWrap_0.doc_61zpoe$(id));
      return $receiver;
    };
  }
  function toSetSource$lambda_0(closure$createPersisted) {
    return function (id, data) {
      var $receiver = closure$createPersisted(id);
      initFrom($receiver, data);
      return $receiver;
    };
  }
  function toSetSource$lambda_1(t, data) {
    initFrom(t, data);
    return Unit;
  }
  function Coroutine$toSetSource$lambda(closure$createPersisted_0, id_0, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$createPersisted = closure$createPersisted_0;
    this.local$$receiver = void 0;
    this.local$id = id_0;
    this.local$fn = fn_0;
  }
  Coroutine$toSetSource$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toSetSource$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toSetSource$lambda.prototype.constructor = Coroutine$toSetSource$lambda;
  Coroutine$toSetSource$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = this.local$closure$createPersisted(this.local$id);
            this.state_0 = 2;
            this.result_0 = this.local$fn(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.props.save();
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
  function toSetSource$lambda_2(closure$createPersisted_0) {
    return function (id_0, fn_0, continuation_0, suspended) {
      var instance = new Coroutine$toSetSource$lambda(closure$createPersisted_0, id_0, fn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function toSetSource_0($receiver, killables, collectionWrap, create, continuation) {
    var createPersisted = toSetSource$createPersisted(create, collectionWrap);
    return toSetSource($receiver, killables, toSetSource$lambda_0(createPersisted), toSetSource$lambda_1, toSetSource$lambda_2(createPersisted), continuation);
  }
  function toSetSource_1($receiver, killables, db, create, continuation) {
    return toSetSource_0(query($receiver, db), killables, $receiver, create, continuation);
  }
  function RxSetWithLookup(set, lookup, loadAll) {
    this.set = set;
    this.lookup = lookup;
    this.loadAll = loadAll;
  }
  RxSetWithLookup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxSetWithLookup',
    interfaces: []
  };
  function toRxSetWithLookup$addOrUpdate(closure$map, closure$create, closure$set, closure$update) {
    return function (id, data) {
      var existing = closure$map.get_11rb$(id);
      if (existing == null) {
        var t = closure$create(id, data);
        closure$map.put_xwzc9p$(id, t);
        closure$set.add_11rb$(t);
      }
       else {
        closure$update(existing, data);
      }
    };
  }
  function toRxSetWithLookup$lambda(closure$addOrUpdate, closure$map, closure$set) {
    return function (qs) {
      var $receiver = qs.docChanges();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var closure$addOrUpdate_0 = closure$addOrUpdate;
        var closure$map_0 = closure$map;
        var closure$set_0 = closure$set;
        var tmp$_0, tmp$_1;
        tmp$_0 = element.type;
        var tmp$_2 = equals(tmp$_0, 'added');
        if (!tmp$_2) {
          tmp$_2 = equals(tmp$_0, 'modified');
        }
        if (tmp$_2)
          closure$addOrUpdate_0(element.doc.id, element.doc.data());
        else {
          if (equals(tmp$_0, 'removed')) {
            var id = element.doc.id;
            if ((tmp$_1 = closure$map_0.remove_11rb$(id)) != null) {
              closure$set_0.remove_11rb$(tmp$_1);
            }
          }
        }
      }
      return Unit;
    };
  }
  function toRxSetWithLookup$lambda_0(closure$map) {
    return function (it) {
      return closure$map.get_11rb$(it);
    };
  }
  function Coroutine$toRxSetWithLookup$lambda(this$toRxSetWithLookup_0, closure$addOrUpdate_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$toRxSetWithLookup = this$toRxSetWithLookup_0;
    this.local$closure$addOrUpdate = closure$addOrUpdate_0;
  }
  Coroutine$toRxSetWithLookup$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toRxSetWithLookup$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toRxSetWithLookup$lambda.prototype.constructor = Coroutine$toRxSetWithLookup$lambda;
  Coroutine$toRxSetWithLookup$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$toRxSetWithLookup.query.get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var qs = this.result_0;
            var $receiver = qs.docs;
            var tmp$;
            for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
              var element = $receiver[tmp$];
              this.local$closure$addOrUpdate(element.id, element.data());
            }

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
  function toRxSetWithLookup$lambda_1(this$toRxSetWithLookup_0, closure$addOrUpdate_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$toRxSetWithLookup$lambda(this$toRxSetWithLookup_0, closure$addOrUpdate_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function toRxSetWithLookup($receiver, killables, create, update) {
    var set = new RxMutableSet();
    var map = LinkedHashMap_init();
    var addOrUpdate = toRxSetWithLookup$addOrUpdate(map, create, set, update);
    plusAssign(killables, onSnapshotNext($receiver.query, toRxSetWithLookup$lambda(addOrUpdate, map, set)));
    return new RxSetWithLookup(set, toRxSetWithLookup$lambda_0(map), toRxSetWithLookup$lambda_1($receiver, addOrUpdate));
  }
  function toRxSetWithLookup$createPersisted(closure$create, this$toRxSetWithLookup) {
    return function (id) {
      var $receiver = closure$create();
      var this$toRxSetWithLookup_0 = this$toRxSetWithLookup;
      $receiver.props.persisted_11rd$(this$toRxSetWithLookup_0.collectionWrap.doc_61zpoe$(id));
      return $receiver;
    };
  }
  function toRxSetWithLookup$lambda_2(closure$createPersisted) {
    return function (id, data) {
      var $receiver = closure$createPersisted(id);
      initFrom($receiver, data);
      return $receiver;
    };
  }
  function toRxSetWithLookup$lambda_3(t, data) {
    initFrom(t, data);
    return Unit;
  }
  function toRxSetWithLookup_0($receiver, killables, create) {
    var createPersisted = toRxSetWithLookup$createPersisted(create, $receiver);
    return toRxSetWithLookup($receiver, killables, toRxSetWithLookup$lambda_2(createPersisted), toRxSetWithLookup$lambda_3);
  }
  function toRxSetWithLookup_1($receiver, killables, db, create) {
    return toRxSetWithLookup_0(query($receiver, db), killables, create);
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
  function Coroutine$flushDocs($receiver_0, docs_0, continuation_0) {
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
  function flushDocs($receiver_0, docs_0, continuation_0, suspended) {
    var instance = new Coroutine$flushDocs($receiver_0, docs_0, continuation_0);
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
    this.local$$receiver = $receiver_0;
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
            this.result_0 = flushDocs(this.local$$receiver, copyToArray(destination_0).slice(), this);
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
  function Coroutine$flushQueries($receiver_0, queries_0, continuation_0) {
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
  function flushQueries($receiver_0, queries_0, continuation_0, suspended) {
    var instance = new Coroutine$flushQueries($receiver_0, queries_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function ids$lambda$lambda(closure$ids, closure$id) {
    return function () {
      var $receiver = closure$ids;
      var element = closure$id;
      $receiver.remove_11rb$(element);
      return Unit;
    };
  }
  function ids$lambda(closure$ids) {
    return function ($receiver, item) {
      var id = item.props.idOrFail;
      closure$ids.add_11rb$(id);
      plusAssign($receiver.kills, ids$lambda$lambda(closure$ids, id));
      return Unit;
    };
  }
  function ids($receiver, ks) {
    var ids = new RxMutableSet();
    process($receiver, ks, ids$lambda(ids));
    return ids;
  }
  function listEvents$createPersisted(closure$create, closure$collectionWrap) {
    return function (id) {
      var $receiver = closure$create();
      var closure$collectionWrap_0 = closure$collectionWrap;
      $receiver.props.persisted_11rd$(closure$collectionWrap_0.doc_61zpoe$(id));
      return $receiver;
    };
  }
  function listEvents$lambda(closure$createPersisted) {
    return function (id, data) {
      var $receiver = closure$createPersisted(id);
      initFrom($receiver, data);
      return $receiver;
    };
  }
  function listEvents$lambda_0($receiver, data) {
    initFrom($receiver, data);
    return Unit;
  }
  function listEvents_0($receiver, deps, collectionWrap, create) {
    var createPersisted = listEvents$createPersisted(create, collectionWrap);
    return wrapSnapshotEvents($receiver, deps, listEvents$lambda(createPersisted), listEvents$lambda_0);
  }
  function listEvents_1($receiver, deps, create) {
    return listEvents_0(toSnapshotEvents(documentChanges($receiver.query, deps), deps), deps, $receiver.collectionWrap, create);
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
  function save($receiver, deps) {
    var st = $receiver.id.state.now;
    var tmp$;
    if (equals(st, FsIdState.NoId)) {
      var $receiver_0 = randomDoc_0($receiver.id.coll, deps);
      $receiver.id.state.remAssign_11rb$(new FsIdState$HasId($receiver_0.id, false));
      tmp$ = $receiver_0;
    }
     else if (Kotlin.isType(st, FsIdState$HasId))
      tmp$ = $receiver.id.coll.doc_61zpoe$(st.id);
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    var dw = tmp$;
    return docRef_0(dw, deps).set(writeDynamic($receiver.doc, FsDynamicOps_getInstance()));
  }
  function delete_0($receiver, deps) {
    return docRef_0(get_docWrap($receiver.id), deps).delete();
  }
  function toRandomFsDoc($receiver, deps, cw) {
    return toFsDoc($receiver, FsId_init(randomDoc_0(cw, deps), false));
  }
  function snapshots_0($receiver, deps) {
    return snapshots_1(get_docWrap($receiver.id), deps);
  }
  function read($receiver, ds) {
    var tmp$;
    if (ds.exists) {
      tmp$ = $receiver.parent.factory(ds.data(), FsDynamicOps_getInstance());
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
            this.local$tmp$ = snapshots_1(this.local$this$docs, this.local$closure$deps).iterator();
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
  function Coroutine$live$lambda$lambda(closure$deps_0, this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$deps = closure$deps_0;
    this.local$this$ = this$_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$live$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$live$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$live$lambda$lambda.prototype.constructor = Coroutine$live$lambda$lambda;
  Coroutine$live$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = snapshots_0(this.local$this$, this.local$closure$deps).iterator();
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
            var s = this.result_0;
            updateFrom(this.local$this$, s);
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
  function live$lambda$lambda(closure$deps_0, this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$live$lambda$lambda(closure$deps_0, this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function live($receiver, deps) {
    launch(deps, void 0, void 0, live$lambda$lambda(deps, $receiver));
    return $receiver;
  }
  function get_fsIdState($receiver) {
    return new FsIdState$HasId($receiver.ref.id, $receiver.exists);
  }
  function updateFrom($receiver, ds) {
    $receiver.id.state.remAssign_11rb$(get_fsIdState(ds));
    if (ds.exists) {
      readDynamic($receiver.doc, ds.data(), FsDynamicOps_getInstance());
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
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  FsDynamicOps.prototype.readTimestamp_za3rmp$ = function (d) {
    return new TS$Value(d.toDate());
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
  function QuerySettings(order) {
    if (order === void 0)
      order = emptyList();
    this.order = order;
  }
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
  QuerySettings.prototype.asc_61zpoe$ = function (path) {
    return this.copy_ultnkd$(plus_0(this.order, new QuerySettings$OrderBy(path)));
  };
  QuerySettings.prototype.desc_61zpoe$ = function (path) {
    return this.copy_ultnkd$(plus_0(this.order, new QuerySettings$OrderBy(path, QuerySettings$OrderDirection$Desc_getInstance())));
  };
  QuerySettings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QuerySettings',
    interfaces: []
  };
  QuerySettings.prototype.component1 = function () {
    return this.order;
  };
  QuerySettings.prototype.copy_ultnkd$ = function (order) {
    return new QuerySettings(order === void 0 ? this.order : order);
  };
  QuerySettings.prototype.toString = function () {
    return 'QuerySettings(order=' + Kotlin.toString(this.order) + ')';
  };
  QuerySettings.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.order) | 0;
    return result;
  };
  QuerySettings.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.order, other.order))));
  };
  function QuerySettingsBuilder() {
  }
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
    $receiver.orderBy(tmp$, tmp$_0);
  }
  function apply_0($receiver, settings) {
    var tmp$;
    tmp$ = settings.order.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      apply($receiver, element);
    }
    return $receiver;
  }
  function query$lambda_0($receiver) {
    return Unit;
  }
  function query_0($receiver, deps, query) {
    if (query === void 0)
      query = query$lambda_0;
    return apply_0(collectionRef($receiver, deps), querySettings(query));
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
  function snapshots_1($receiver, deps) {
    return documentSnapshots(docRef_0($receiver, deps), deps);
  }
  function listEvents$lambda_1($receiver) {
    return Unit;
  }
  function listEvents_2($receiver, deps, create, query) {
    if (query === void 0)
      query = listEvents$lambda_1;
    return listEvents(toSnapshotEvents(documentChanges(query_0($receiver, deps, query), deps), deps), deps, $receiver, FsDynamicOps_getInstance(), create);
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
  package$firebase.FirebaseApi = FirebaseApi;
  package$firebase.get_fbapi_i7n0b6$ = get_fbapi;
  package$firebase.AppOptions = AppOptions;
  package$firebase.snapshots_8v94ob$ = snapshots;
  package$firebase.FirebaseCoroutinesApi = FirebaseCoroutinesApi;
  var package$firestore = package$firebase.firestore || (package$firebase.firestore = {});
  package$firestore.setOptionsMerge = setOptionsMerge;
  package$firestore.Settings = Settings;
  package$firestore.get_added_mvgsxq$ = get_added;
  package$firestore.get_modified_mvgsxq$ = get_modified;
  package$firestore.get_removed_mvgsxq$ = get_removed;
  package$firestore.get_default_6qzrc4$ = get_default;
  package$firestore.get_server_6qzrc4$ = get_server;
  package$firestore.get_cache_6qzrc4$ = get_cache;
  $$importsForInline$$['appsimake-firebase'] = _;
  package$firestore.queryUi_m7qy8e$ = queryUi;
  package$firestore.OnSnapshot_init_ydux9x$ = OnSnapshot_init;
  package$firestore.OnSnapshot = OnSnapshot;
  package$firestore.listen_pmqkoy$ = listen;
  package$firestore.withDefaultSettings_gwf93m$ = withDefaultSettings;
  package$firestore.onSnapshotNext_o3477o$ = onSnapshotNext;
  package$firestore.idDiffs_d0m7p1$ = idDiffs;
  package$firestore.onSnapshotNext_po64up$ = onSnapshotNext_0;
  Object.defineProperty(ListenConfig, 'Companion', {
    get: ListenConfig$Companion_getInstance
  });
  package$firestore.ListenConfig = ListenConfig;
  package$firestore.listen_3m6zjo$ = listen_0;
  package$firestore.listen_wkiigx$ = listen_1;
  package$firestore.orderBy_pn31r1$ = orderBy;
  package$firestore.txDefer_81x6o2$ = txDefer;
  package$firestore.tx_81x6o2$ = tx;
  package$firestore.txTry_81x6o2$ = txTry;
  package$firestore.onRollback_61ytec$ = onRollback;
  package$firestore.RollbackException = RollbackException;
  package$firestore.rollback = rollback;
  package$firestore.QueryBuilder = QueryBuilder;
  package$firestore.query_vhmfed$ = query;
  package$firestore.wrap_aaxyke$ = wrap;
  package$firestore.wrap_o4uwzk$ = wrap_0;
  package$firestore.QueryWrap = QueryWrap;
  package$firestore.onSnapshot_685y8m$ = onSnapshot;
  package$firestore.listen_7dd08w$ = listen_2;
  Object.defineProperty(package$firestore, 'MaxBatchSize', {
    get: function () {
      return MaxBatchSize;
    }
  });
  package$firestore.deleteCollection_whao2e$ = deleteCollection;
  package$firestore.initBinder_wfj6dr$ = initBinder_0;
  package$firestore.exists_a3uf2h$ = exists;
  package$firestore.toSetSource_2n6do3$ = toSetSource;
  package$firestore.toSetSource_ade12y$ = toSetSource_0;
  package$firestore.toSetSource_muuc72$ = toSetSource_1;
  package$firestore.RxSetWithLookup = RxSetWithLookup;
  package$firestore.toRxSetWithLookup_cwtub$ = toRxSetWithLookup;
  package$firestore.toRxSetWithLookup_zi47ij$ = toRxSetWithLookup_0;
  package$firestore.toRxSetWithLookup_muuc72$ = toRxSetWithLookup_1;
  package$firestore.flushDocs_m9gmja$ = flushDocs;
  package$firestore.flushQueries_z82j6a$ = flushQueries;
  package$firestore.ids_r39rf5$ = ids;
  package$firestore.listEvents_8v2swm$ = listEvents_0;
  package$firestore.listEvents_tg1zur$ = listEvents_1;
  package$firestore.docRef_bi4pki$ = docRef;
  package$firestore.docRef_ek09gi$ = docRef_0;
  package$firestore.collectionRef_h36x4c$ = collectionRef;
  package$firestore.randomDoc_jd0piz$ = randomDoc;
  package$firestore.randomDoc_d498v7$ = randomDoc_0;
  package$firestore.save_xr2lrh$ = save;
  package$firestore.delete_xr2lrh$ = delete_0;
  package$firestore.toRandomFsDoc_hduxux$ = toRandomFsDoc;
  package$firestore.snapshots_49gdze$ = snapshots_0;
  package$firestore.read_3ncbjt$ = read;
  package$firestore.docs_pxxo5g$ = docs;
  package$firestore.live_49gdze$ = live;
  package$firestore.get_fsIdState_x32tru$ = get_fsIdState;
  package$firestore.updateFrom_oyg2fp$ = updateFrom;
  Object.defineProperty(package$firestore, 'FsDynamicOps', {
    get: FsDynamicOps_getInstance
  });
  QuerySettings.OrderBy = QuerySettings$OrderBy;
  Object.defineProperty(QuerySettings$OrderDirection, 'Asc', {
    get: QuerySettings$OrderDirection$Asc_getInstance
  });
  Object.defineProperty(QuerySettings$OrderDirection, 'Desc', {
    get: QuerySettings$OrderDirection$Desc_getInstance
  });
  QuerySettings.OrderDirection = QuerySettings$OrderDirection;
  package$firestore.QuerySettings = QuerySettings;
  package$firestore.QuerySettingsBuilder = QuerySettingsBuilder;
  package$firestore.querySettings_oywost$ = querySettings;
  package$firestore.apply_io1z13$ = apply;
  package$firestore.apply_tgjpyq$ = apply_0;
  package$firestore.query_68ya0u$ = query_0;
  package$firestore.documentChanges_4hx5ig$ = documentChanges;
  package$firestore.documentSnapshots_8s2sz4$ = documentSnapshots;
  package$firestore.toSnapshotEvents_nxyyql$ = toSnapshotEvents;
  package$firestore.snapshots_hk0k06$ = snapshots_1;
  package$firestore.listEvents_z0wu75$ = listEvents_2;
  var package$storage = package$firebase.storage || (package$firebase.storage = {});
  package$storage.get_RAW_3xcz9r$ = get_RAW;
  package$storage.get_BASE64_3xcz9r$ = get_BASE64;
  package$storage.get_BASE64URL_3xcz9r$ = get_BASE64URL;
  package$storage.get_DATA_URL_3xcz9r$ = get_DATA_URL;
  KillsApiFirebase.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  KillsApiFirebase.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  KillsApiFirebase.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  KillsApiFirebase.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  KillsApiFirebase.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  KillsApiFirebase.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  KillsApiFirebase.prototype.map_1mq1ue$ = KillsApi.prototype.map_1mq1ue$;
  KillsApiFirebase.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  KillsApiFirebase.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  KillsApiFirebase.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  KillsApiFirebase.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  KillsApiFirebase.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  KillsApiFirebase.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  KillsApiFirebase.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  KillsApiFirebase.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  DbKillsApi.prototype.get_ref_9jwep6$ = DbApi.prototype.get_ref_9jwep6$;
  DbKillsApi.prototype.get_ref_lysoy0$ = DbApi.prototype.get_ref_lysoy0$;
  DbKillsApi.prototype.get_randomDoc_9jwep6$ = DbApi.prototype.get_randomDoc_9jwep6$;
  DbKillsApi.prototype.toRandomFsDoc_t7liao$ = DbApi.prototype.toRandomFsDoc_t7liao$;
  DbKillsApi.prototype.save_73z9b6$ = DbApi.prototype.save_73z9b6$;
  DbKillsApi.prototype.delete_73z9b6$ = DbApi.prototype.delete_73z9b6$;
  DbKillsApi.prototype.query_mixq7r$$default = DbApi.prototype.query_mixq7r$$default;
  DbKillsApi.prototype.rx_y6x17j$ = KillsApiFirebase.prototype.rx_y6x17j$;
  DbKillsApi.prototype.rx_46ic4w$ = KillsApiFirebase.prototype.rx_46ic4w$;
  DbKillsApi.prototype.containsRx_1w65cx$ = KillsApiFirebase.prototype.containsRx_1w65cx$;
  DbKillsApi.prototype.filtered_tnde95$ = KillsApiFirebase.prototype.filtered_tnde95$;
  DbKillsApi.prototype.forEach_xwzbbo$ = KillsApiFirebase.prototype.forEach_xwzbbo$;
  DbKillsApi.prototype.forEach_35q7bt$ = KillsApiFirebase.prototype.forEach_35q7bt$;
  DbKillsApi.prototype.map_1mq1ue$ = KillsApiFirebase.prototype.map_1mq1ue$;
  DbKillsApi.prototype.map_jtxi0h$ = KillsApiFirebase.prototype.map_jtxi0h$;
  DbKillsApi.prototype.onChange_rlu5c6$ = KillsApiFirebase.prototype.onChange_rlu5c6$;
  DbKillsApi.prototype.process_7xi3v7$ = KillsApiFirebase.prototype.process_7xi3v7$;
  DbKillsApi.prototype.remAssign_7fncnf$ = KillsApiFirebase.prototype.remAssign_7fncnf$;
  DbKillsApi.prototype.rxClass_c5yvvx$ = KillsApiFirebase.prototype.rxClass_c5yvvx$;
  DbKillsApi.prototype.rxClass_6sflyw$ = KillsApiFirebase.prototype.rxClass_6sflyw$;
  DbKillsApi.prototype.toChannelLater_z5dyp2$ = KillsApiFirebase.prototype.toChannelLater_z5dyp2$;
  DbKillsApi.prototype.toRxSet_jr4bl4$ = KillsApiFirebase.prototype.toRxSet_jr4bl4$;
  DbKillsApi.prototype.query_mixq7r$ = DbApi.prototype.query_mixq7r$;
  CsApiFirebase.prototype.toRx_on0lyu$ = CsApi.prototype.toRx_on0lyu$;
  CsKillsApiFirebase.prototype.listEvents_1nmm22$ = CsApiFirebase.prototype.listEvents_1nmm22$;
  CsKillsApiFirebase.prototype.rx_y6x17j$ = CsKillsApiCommon.prototype.rx_y6x17j$;
  CsKillsApiFirebase.prototype.rx_46ic4w$ = CsKillsApiCommon.prototype.rx_46ic4w$;
  CsKillsApiFirebase.prototype.containsRx_1w65cx$ = CsKillsApiCommon.prototype.containsRx_1w65cx$;
  CsKillsApiFirebase.prototype.events_9fvrrk$ = CsKillsApiCommon.prototype.events_9fvrrk$;
  CsKillsApiFirebase.prototype.filtered_tnde95$ = CsKillsApiCommon.prototype.filtered_tnde95$;
  CsKillsApiFirebase.prototype.forEach_xwzbbo$ = CsKillsApiCommon.prototype.forEach_xwzbbo$;
  CsKillsApiFirebase.prototype.forEach_35q7bt$ = CsKillsApiCommon.prototype.forEach_35q7bt$;
  CsKillsApiFirebase.prototype.map_1mq1ue$ = CsKillsApiCommon.prototype.map_1mq1ue$;
  CsKillsApiFirebase.prototype.map_jtxi0h$ = CsKillsApiCommon.prototype.map_jtxi0h$;
  CsKillsApiFirebase.prototype.onChange_rlu5c6$ = CsKillsApiCommon.prototype.onChange_rlu5c6$;
  CsKillsApiFirebase.prototype.process_7xi3v7$ = CsKillsApiCommon.prototype.process_7xi3v7$;
  CsKillsApiFirebase.prototype.remAssign_7fncnf$ = CsKillsApiCommon.prototype.remAssign_7fncnf$;
  CsKillsApiFirebase.prototype.rxClass_c5yvvx$ = CsKillsApiCommon.prototype.rxClass_c5yvvx$;
  CsKillsApiFirebase.prototype.rxClass_6sflyw$ = CsKillsApiCommon.prototype.rxClass_6sflyw$;
  CsKillsApiFirebase.prototype.toChannelLater_z5dyp2$ = CsKillsApiCommon.prototype.toChannelLater_z5dyp2$;
  CsKillsApiFirebase.prototype.toRx_on0lyu$ = CsKillsApiCommon.prototype.toRx_on0lyu$;
  CsKillsApiFirebase.prototype.toRxSet_jr4bl4$ = CsKillsApiCommon.prototype.toRxSet_jr4bl4$;
  CsKillsApiFirebase.prototype.toSnapshotEvents_ecp0ut$ = CsApiFirebase.prototype.toSnapshotEvents_ecp0ut$;
  CsDbKillsApi.prototype.listEvents_ghesau$ = CsKillsApiFirebase.prototype.listEvents_ghesau$;
  CsDbKillsApi.prototype.listEvents_1nmm22$ = CsKillsApiFirebase.prototype.listEvents_1nmm22$;
  CsDbKillsApi.prototype.rx_y6x17j$ = CsKillsApiFirebase.prototype.rx_y6x17j$;
  CsDbKillsApi.prototype.rx_46ic4w$ = CsKillsApiFirebase.prototype.rx_46ic4w$;
  CsDbKillsApi.prototype.containsRx_1w65cx$ = CsKillsApiFirebase.prototype.containsRx_1w65cx$;
  CsDbKillsApi.prototype.events_9fvrrk$ = CsKillsApiFirebase.prototype.events_9fvrrk$;
  CsDbKillsApi.prototype.filtered_tnde95$ = CsKillsApiFirebase.prototype.filtered_tnde95$;
  CsDbKillsApi.prototype.forEach_xwzbbo$ = CsKillsApiFirebase.prototype.forEach_xwzbbo$;
  CsDbKillsApi.prototype.forEach_35q7bt$ = CsKillsApiFirebase.prototype.forEach_35q7bt$;
  CsDbKillsApi.prototype.map_1mq1ue$ = CsKillsApiFirebase.prototype.map_1mq1ue$;
  CsDbKillsApi.prototype.map_jtxi0h$ = CsKillsApiFirebase.prototype.map_jtxi0h$;
  CsDbKillsApi.prototype.onChange_rlu5c6$ = CsKillsApiFirebase.prototype.onChange_rlu5c6$;
  CsDbKillsApi.prototype.process_7xi3v7$ = CsKillsApiFirebase.prototype.process_7xi3v7$;
  CsDbKillsApi.prototype.remAssign_7fncnf$ = CsKillsApiFirebase.prototype.remAssign_7fncnf$;
  CsDbKillsApi.prototype.rxClass_c5yvvx$ = CsKillsApiFirebase.prototype.rxClass_c5yvvx$;
  CsDbKillsApi.prototype.rxClass_6sflyw$ = CsKillsApiFirebase.prototype.rxClass_6sflyw$;
  CsDbKillsApi.prototype.toChannelLater_z5dyp2$ = CsKillsApiFirebase.prototype.toChannelLater_z5dyp2$;
  CsDbKillsApi.prototype.toRx_on0lyu$ = CsKillsApiFirebase.prototype.toRx_on0lyu$;
  CsDbKillsApi.prototype.toRxSet_jr4bl4$ = CsKillsApiFirebase.prototype.toRxSet_jr4bl4$;
  CsDbKillsApi.prototype.toSnapshotEvents_ecp0ut$ = CsKillsApiFirebase.prototype.toSnapshotEvents_ecp0ut$;
  CsDbKillsApi.prototype.get_ref_9jwep6$ = DbApi.prototype.get_ref_9jwep6$;
  CsDbKillsApi.prototype.get_ref_lysoy0$ = DbApi.prototype.get_ref_lysoy0$;
  CsDbKillsApi.prototype.get_randomDoc_9jwep6$ = DbApi.prototype.get_randomDoc_9jwep6$;
  CsDbKillsApi.prototype.toRandomFsDoc_t7liao$ = DbApi.prototype.toRandomFsDoc_t7liao$;
  CsDbKillsApi.prototype.save_73z9b6$ = DbApi.prototype.save_73z9b6$;
  CsDbKillsApi.prototype.delete_73z9b6$ = DbApi.prototype.delete_73z9b6$;
  CsDbKillsApi.prototype.query_mixq7r$$default = DbApi.prototype.query_mixq7r$$default;
  CsDbKillsApi.prototype.query_mixq7r$ = DbApi.prototype.query_mixq7r$;
  FirebaseApi.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  FirebaseApi.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  FirebaseApi.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  FirebaseApi.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  FirebaseApi.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  FirebaseApi.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  FirebaseApi.prototype.map_1mq1ue$ = KillsApi.prototype.map_1mq1ue$;
  FirebaseApi.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  FirebaseApi.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  FirebaseApi.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  FirebaseApi.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  FirebaseApi.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  FirebaseApi.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  FirebaseApi.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  FirebaseApi.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  get_fbapi$ObjectLiteral.prototype.get_ids_wjz35z$ = FirebaseApi.prototype.get_ids_wjz35z$;
  querySettings$ObjectLiteral.prototype.get_asc_5eq60p$ = QuerySettingsBuilder.prototype.get_asc_5eq60p$;
  querySettings$ObjectLiteral.prototype.get_desc_5eq60p$ = QuerySettingsBuilder.prototype.get_desc_5eq60p$;
  MaxBatchSize = 500;
  Kotlin.defineModule('appsimake-firebase', _);
  return _;
}(typeof this['appsimake-firebase'] === 'undefined' ? {} : this['appsimake-firebase'], kotlin, this['appsimake-commonshr'], this['appsimake-common'], this['kotlinx-coroutines-core'], this['appsimake-firebaseshr']);

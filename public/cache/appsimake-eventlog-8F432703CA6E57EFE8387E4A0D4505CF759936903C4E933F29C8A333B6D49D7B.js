if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-eventlog'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-eventlog'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-eventlog'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-eventlog'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-eventlog'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-eventlog'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-eventlog'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-eventlog'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-eventlog'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-eventlog'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-eventlog'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-eventlog'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-eventlog'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-eventlog'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-eventlog'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-eventlog'.");
}
if (typeof this['appsimake-eventloglib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-eventlog'. Its dependency 'appsimake-eventloglib' was not found. Please, check whether 'appsimake-eventloglib' is loaded prior to 'appsimake-eventlog'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-eventlog'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-eventlog'.");
}
this['appsimake-eventlog'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_commonfb, $module$appsimake_domx, $module$appsimake_commonshr, $module$appsimake_bootstrap, $module$appsimake_firebase, $module$kotlinx_coroutines_core, $module$appsimake_eventloglib, $module$appsimake_fontawesome) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ForwardBase = $module$appsimake_commonui.commonui.view.ForwardBase;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var FBBackApi = $module$appsimake_commonfb.commonfb.FBBackApi;
  var BackEditKillsUixApi = $module$appsimake_commonui.commonui.BackEditKillsUixApi;
  var HasBack = $module$appsimake_commonui.commonui.HasBack;
  var widget = $module$appsimake_commonui.commonui.widget;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var Unit = Kotlin.kotlin.Unit;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_leftRightTopBottom0 = $module$appsimake_domx.styles.get_leftRightTopBottom0_kre7dp$;
  var get_widget = $module$appsimake_commonui.commonui.widget.get_widget_asww5s$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_im8gow$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var required = $module$appsimake_commonui.commonui.editing.required_dvq9sy$;
  var column = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var FbLinksFactory = $module$appsimake_commonfb.commonfb.FbLinksFactory;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var DbApi = $module$appsimake_firebase.firebase.DbApi;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var links = $module$appsimake_commonui.commonui.links;
  var forwarding = $module$appsimake_commonui.commonui.view.forwarding_caeb5u$;
  var BaseTC = $module$appsimake_commonui.commonui.links.BaseTC;
  var LinkApi = $module$appsimake_commonui.commonui.links.LinkApi;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var advance = $module$appsimake_commonui.commonui.view.advance_zadjfr$;
  var get_idOrFail = $module$appsimake_commonshr.commonshr.get_idOrFail_2s00w$;
  var eventlog = $module$appsimake_eventloglib.eventlog;
  var get_private = $module$appsimake_commonshr.commonshr.get_private_py8usb$;
  var get_eventtypes = $module$appsimake_eventloglib.eventlog.get_eventtypes_x4imip$;
  var FBApi = $module$appsimake_commonfb.commonfb.FBApi;
  var get_plus = $module$appsimake_fontawesome.fontawesome.get_plus_xml72e$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var column_0 = $module$appsimake_bootstrap.bootstrap.column_kre7dp$;
  var EventType = $module$appsimake_eventloglib.eventlog.EventType;
  var row = $module$appsimake_bootstrap.bootstrap.row_kre7dp$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var CsKillsView = $module$appsimake_commonui.commonui.view.CsKillsView;
  var BackCreateKillsUixApi = $module$appsimake_commonui.commonui.BackCreateKillsUixApi;
  var ago = $module$appsimake_commonshr.commonshr.properties.ago_troxq7$;
  var Occurrence = $module$appsimake_eventloglib.eventlog.Occurrence;
  var get_docWrap = $module$appsimake_commonshr.commonshr.get_docWrap_axmc3l$;
  var get_occurrences = $module$appsimake_eventloglib.eventlog.get_occurrences_7136yw$;
  var toFsDoc = $module$appsimake_commonshr.commonshr.toFsDoc_ihdkly$;
  var Var = $module$appsimake_commonshr.rx.Var;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var ListEvent$Add = $module$appsimake_commonshr.commonshr.ListEvent.Add;
  var launchReport = $module$appsimake_commonui.commonui.launchReport_hilpzi$;
  var get_dl = $module$appsimake_domx.domx.get_dl_asww5s$;
  var get_dt = $module$appsimake_domx.domx.get_dt_asww5s$;
  var get_dd = $module$appsimake_domx.domx.get_dd_asww5s$;
  var get_insert_0 = $module$appsimake_commonui.commonui.widget.get_insert_asww5s$;
  EditEventType.prototype = Object.create(ForwardBase.prototype);
  EditEventType.prototype.constructor = EditEventType;
  Links.prototype = Object.create(FbLinksFactory.prototype);
  Links.prototype.constructor = Links;
  LoggedIn.prototype = Object.create(ForwardBase.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  NewEventType.prototype = Object.create(CsKillsView.prototype);
  NewEventType.prototype.constructor = NewEventType;
  RecordOccurrence.prototype = Object.create(ForwardBase.prototype);
  RecordOccurrence.prototype.constructor = RecordOccurrence;
  function EditEventTypePath() {
  }
  EditEventTypePath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditEventTypePath',
    interfaces: [LoggedInPath]
  };
  function EditEventType(from, linkage, item) {
    ForwardBase.call(this, from);
    this.$delegate_nwiveq$_0 = from;
    this.$delegate_nwiveq$_1 = linkage;
    this.editEventType_98w1pg$_0 = this;
    this.editing_f0scc2$_0 = this.rxEditing_6l8l9j$(item);
    this.rawView_xcalnr$_0 = ui(this);
  }
  Object.defineProperty(EditEventType.prototype, 'editEventType', {
    get: function () {
      return this.editEventType_98w1pg$_0;
    }
  });
  Object.defineProperty(EditEventType.prototype, 'editing', {
    get: function () {
      return this.editing_f0scc2$_0;
    }
  });
  Object.defineProperty(EditEventType.prototype, 'rawView', {
    get: function () {
      return this.rawView_xcalnr$_0;
    }
  });
  Object.defineProperty(EditEventType.prototype, 'db', {
    get: function () {
      return this.$delegate_nwiveq$_0.db;
    }
  });
  Object.defineProperty(EditEventType.prototype, 'links', {
    get: function () {
      return this.$delegate_nwiveq$_0.links;
    }
  });
  Object.defineProperty(EditEventType.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_nwiveq$_0.loggedIn;
    }
  });
  EditEventType.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_nwiveq$_0.get_randomDoc_sj9vaa$($receiver);
  };
  EditEventType.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_nwiveq$_0.get_ref_sj9vaa$($receiver);
  };
  EditEventType.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_nwiveq$_0.get_ref_aqty80$($receiver);
  };
  EditEventType.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_nwiveq$_0.delete_73z9b6$($receiver);
  };
  EditEventType.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_nwiveq$_0.delete_ihdkly$($receiver);
  };
  EditEventType.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_nwiveq$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  EditEventType.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_nwiveq$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  EditEventType.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_nwiveq$_0.query_wzkv1r$$default($receiver, query);
  };
  EditEventType.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_nwiveq$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  EditEventType.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_nwiveq$_0.save_73z9b6$($receiver);
  };
  EditEventType.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_nwiveq$_0.save_biv66q$($receiver);
  };
  EditEventType.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_nwiveq$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(EditEventType.prototype, 'back', {
    get: function () {
      return this.$delegate_nwiveq$_1.back;
    }
  });
  EditEventType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditEventType',
    interfaces: [BackEditKillsUixApi, FBBackApi, HasBack, EditEventTypePath, LoggedInPath, ForwardBase]
  };
  function ui$lambda(this$ui) {
    return function ($receiver) {
      get_leftRightTopBottom0(get_cls($receiver));
      var $receiver_0 = get_insert(get_widget($receiver)).input;
      var this$ui_0 = this$ui;
      get_m1($receiver_0.cls);
      required(this$ui_0.bind_8y93tj$($receiver_0, this$ui_0.editing.current.name));
      return Unit;
    };
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backSaveDiscard_e1rmy3$($receiver_0.slots.left);
    remAssign($receiver_0.title, 'Edit Event Type');
    $receiver.get_saveDeleteButton_tdhe4g$($receiver_0.right);
    return new TopAndContent($receiver_0.node, column(document, ui$lambda($receiver)));
  }
  function Coroutine$main$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new Links(this.local$it);
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
  function main$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main() {
    FbLinksFactory.Companion.start_avsawv$(void 0, void 0, main$lambda);
  }
  function LinksPath() {
  }
  LinksPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinksPath',
    interfaces: [DbApi]
  };
  function Links(deps) {
    FbLinksFactory.call(this, deps);
    this.links_3458py$_0 = this;
    this.home_tmmjoi$_0 = this.root_7o50g$(Links$home$lambda(this, deps));
    this.editEventType_arh3tj$_0 = this.home.param_kchx42$(links.StringHasher).child_jgcrpc$(Links$editEventType$lambda(this)).provideDelegate_n5byny$(this, Links$editEventType_metadata);
    this.newEventType_x063ql$_0 = this.home.child_b2q6wh$(Links$newEventType$lambda).provideDelegate_n5byny$(this, Links$newEventType_metadata);
    this.recordOccurrence_y98kwv$_0 = this.home.param_kchx42$(links.StringHasher).child_jgcrpc$(Links$recordOccurrence$lambda(this)).provideDelegate_n5byny$(this, Links$recordOccurrence_metadata);
  }
  Object.defineProperty(Links.prototype, 'links', {
    get: function () {
      return this.links_3458py$_0;
    }
  });
  Object.defineProperty(Links.prototype, 'home', {
    get: function () {
      return this.home_tmmjoi$_0;
    }
  });
  var Links$editEventType_metadata = new PropertyMetadata('editEventType');
  Object.defineProperty(Links.prototype, 'editEventType', {
    get: function () {
      return this.editEventType_arh3tj$_0.getValue_lrcp0p$(this, Links$editEventType_metadata);
    }
  });
  var Links$newEventType_metadata = new PropertyMetadata('newEventType');
  Object.defineProperty(Links.prototype, 'newEventType', {
    get: function () {
      return this.newEventType_x063ql$_0.getValue_lrcp0p$(this, Links$newEventType_metadata);
    }
  });
  var Links$recordOccurrence_metadata = new PropertyMetadata('recordOccurrence');
  Object.defineProperty(Links.prototype, 'recordOccurrence', {
    get: function () {
      return this.recordOccurrence_y98kwv$_0.getValue_lrcp0p$(this, Links$recordOccurrence_metadata);
    }
  });
  function Coroutine$Links$home$lambda(this$Links_0, closure$deps_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$closure$deps = closure$deps_0;
    this.local$tmp$ = void 0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$home$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$home$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$home$lambda.prototype.constructor = Coroutine$Links$home$lambda;
  Coroutine$Links$home$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = this.local$closure$deps.hole;
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.requestUser(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = this.result_0;
            var $receiver = new LoggedIn(this.local$this$Links, this.local$lnk, this.local$tmp$, tmp$);
            this.local$closure$deps.hole.remAssign_9i7ztu$($receiver);
            return $receiver;
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
  function Links$home$lambda(this$Links_0, closure$deps_0) {
    return function (lnk_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$home$lambda(this$Links_0, closure$deps_0, lnk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Links$editEventType$lambda(this$Links_0, parent_0, id_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$parent = parent_0;
    this.local$id = id_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$editEventType$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$editEventType$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$editEventType$lambda.prototype.constructor = Coroutine$Links$editEventType$lambda;
  Coroutine$Links$editEventType$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.getCachedOrServer_prxdpg$(this.local$parent.loggedIn.eventTypes.doc_61zpoe$(this.local$id), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return forwarding(new EditEventType(this.local$parent, this.local$lnk, this.result_0), this.local$parent);
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
  function Links$editEventType$lambda(this$Links_0) {
    return function (parent_0, id_0, lnk_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$editEventType$lambda(this$Links_0, parent_0, id_0, lnk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Links$newEventType$lambda(parent_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$parent = parent_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$newEventType$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$newEventType$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$newEventType$lambda.prototype.constructor = Coroutine$Links$newEventType$lambda;
  Coroutine$Links$newEventType$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return forwarding(new NewEventType(this.local$parent, this.local$lnk), this.local$parent);
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
  function Links$newEventType$lambda(parent_0, lnk_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$newEventType$lambda(parent_0, lnk_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Links$recordOccurrence$lambda(this$Links_0, parent_0, id_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$parent = parent_0;
    this.local$id = id_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$recordOccurrence$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$recordOccurrence$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$recordOccurrence$lambda.prototype.constructor = Coroutine$Links$recordOccurrence$lambda;
  Coroutine$Links$recordOccurrence$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.getCachedOrServer_prxdpg$(this.local$parent.loggedIn.eventTypes.doc_61zpoe$(this.local$id), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return forwarding(new RecordOccurrence(this.local$parent, this.local$lnk, this.result_0), this.local$parent);
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
  function Links$recordOccurrence$lambda(this$Links_0) {
    return function (parent_0, id_0, lnk_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$recordOccurrence$lambda(this$Links_0, parent_0, id_0, lnk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Links.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Links',
    interfaces: [LinksPath, FbLinksFactory]
  };
  function LoggedInTC() {
  }
  LoggedInTC.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoggedInTC',
    interfaces: [LinkApi, LoggedInPath, BaseTC]
  };
  function LoggedInPath() {
  }
  LoggedInPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoggedInPath',
    interfaces: [LinksPath]
  };
  function LoggedIn(links, linkage, hole, user) {
    ForwardBase.call(this, hole);
    this.linkage_38xsqh$_0 = linkage;
    this.$delegate_9135me$_0 = links;
    this.loggedIn_qzsq0f$_0 = this;
    this.eventTypes = get_eventtypes(get_private(eventlog.eventlogLib.app).doc_61zpoe$(user.uid));
    this.rawView_8bloq7$_0 = ui_0(this);
  }
  Object.defineProperty(LoggedIn.prototype, 'linkage', {
    get: function () {
      return this.linkage_38xsqh$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'loggedIn', {
    get: function () {
      return this.loggedIn_qzsq0f$_0;
    }
  });
  function Coroutine$LoggedIn$signOut$lambda(this$LoggedIn_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$signOut$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$signOut$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$signOut$lambda.prototype.constructor = Coroutine$LoggedIn$signOut$lambda;
  Coroutine$LoggedIn$signOut$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.links.signOut(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$LoggedIn.links.home.load(this);
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
  function LoggedIn$signOut$lambda(this$LoggedIn_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$signOut$lambda(this$LoggedIn_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.signOut = function () {
    return launch(this.links, void 0, void 0, LoggedIn$signOut$lambda(this));
  };
  function Coroutine$LoggedIn$newEventType$lambda(this$LoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$newEventType$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$newEventType$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$newEventType$lambda.prototype.constructor = Coroutine$LoggedIn$newEventType$lambda;
  Coroutine$LoggedIn$newEventType$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.fwd_nnhkmr$(this.local$this$LoggedIn.links.newEventType, void 0, this);
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
  function LoggedIn$newEventType$lambda(this$LoggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$newEventType$lambda(this$LoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.newEventType = function () {
    advance(this, LoggedIn$newEventType$lambda(this));
  };
  function Coroutine$LoggedIn$editEventType$lambda(this$LoggedIn_0, closure$cl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
    this.local$closure$cl = closure$cl_0;
  }
  Coroutine$LoggedIn$editEventType$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$editEventType$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$editEventType$lambda.prototype.constructor = Coroutine$LoggedIn$editEventType$lambda;
  Coroutine$LoggedIn$editEventType$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.fwd_e1fa5e$(this.local$this$LoggedIn.links.editEventType, get_idOrFail(this.local$closure$cl), void 0, this);
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
  function LoggedIn$editEventType$lambda(this$LoggedIn_0, closure$cl_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$editEventType$lambda(this$LoggedIn_0, closure$cl_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.editEventType_dyxigj$ = function (cl) {
    advance(this, LoggedIn$editEventType$lambda(this, cl));
  };
  function Coroutine$LoggedIn$recorOccurrence$lambda(this$LoggedIn_0, closure$cl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
    this.local$closure$cl = closure$cl_0;
  }
  Coroutine$LoggedIn$recorOccurrence$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$recorOccurrence$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$recorOccurrence$lambda.prototype.constructor = Coroutine$LoggedIn$recorOccurrence$lambda;
  Coroutine$LoggedIn$recorOccurrence$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.fwd_e1fa5e$(this.local$this$LoggedIn.links.recordOccurrence, get_idOrFail(this.local$closure$cl), void 0, this);
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
  function LoggedIn$recorOccurrence$lambda(this$LoggedIn_0, closure$cl_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$recorOccurrence$lambda(this$LoggedIn_0, closure$cl_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.recorOccurrence_dyxigj$ = function (cl) {
    advance(this, LoggedIn$recorOccurrence$lambda(this, cl));
  };
  Object.defineProperty(LoggedIn.prototype, 'rawView', {
    get: function () {
      return this.rawView_8bloq7$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'db', {
    get: function () {
      return this.$delegate_9135me$_0.db;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'links', {
    get: function () {
      return this.$delegate_9135me$_0.links;
    }
  });
  LoggedIn.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_9135me$_0.get_randomDoc_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_9135me$_0.get_ref_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_9135me$_0.get_ref_aqty80$($receiver);
  };
  LoggedIn.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_9135me$_0.delete_73z9b6$($receiver);
  };
  LoggedIn.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_9135me$_0.delete_ihdkly$($receiver);
  };
  LoggedIn.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_9135me$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  LoggedIn.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_9135me$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  LoggedIn.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_9135me$_0.query_wzkv1r$$default($receiver, query);
  };
  LoggedIn.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_9135me$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  LoggedIn.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_9135me$_0.save_73z9b6$($receiver);
  };
  LoggedIn.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_9135me$_0.save_biv66q$($receiver);
  };
  LoggedIn.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_9135me$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [FBApi, LoggedInTC, LoggedInPath, LinksPath, ForwardBase]
  };
  function ui$lambda$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.signOut();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.newEventType();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_0($receiver) {
    $receiver.get_desc_5eq60p$(EventType.Companion.ts);
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$cl) {
    return function () {
      return closure$cl.invoke().name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda(closure$cl, this$) {
    return function ($receiver) {
      get_flexGrow1(get_cls($receiver));
      this$.remAssign_7fncnf$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$cl));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cl, this$ui) {
    return function () {
      this$ui.recorOccurrence_dyxigj$(closure$cl);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$cl, this$ui) {
    return function () {
      this$ui.editEventType_dyxigj$(closure$cl);
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda(this$ui_0, $receiver_0, cl_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$cl = cl_0;
  }
  Coroutine$ui$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = widget.factory.buttonGroup;
            var this$ui = this.local$this$ui;
            var $receiver_0 = $receiver.button;
            row($receiver_0.cls);
            $receiver_0.primary;
            invoke($receiver_0.text, ui$lambda$lambda$lambda$lambda$lambda$lambda(this.local$cl, this.local$$receiver));
            this$ui.click_9375ex$($receiver_0, ui$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$cl, this$ui));
            var $receiver_1 = $receiver.dropdownSplit;
            flexFixedSize($receiver_1.cls);
            $receiver_1.primary;
            var $receiver_2 = $receiver.menu;
            $receiver_2.right;
            var $receiver_3 = $receiver_2.item;
            $receiver_3.text.remAssign_61zpoe$('Edit');
            this$ui.click_512jbc$($receiver_3, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this.local$cl, this$ui));
            return $receiver.node;
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
  function ui$lambda$lambda$lambda_1(this$ui_0) {
    return function ($receiver_0, cl_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda(this$ui_0, $receiver_0, cl_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_p1($receiver_0);
      column_0($receiver_0);
      this$ui.list_u1uvxv$($receiver, this$ui.mapLive_1mq1ue$(this$ui.listEvents_pujjsl$(this$ui.eventTypes, ui$lambda$lambda$lambda_0), ui$lambda$lambda$lambda_1(this$ui)));
      return Unit;
    };
  }
  function ui_0($receiver) {
    var $receiver_0 = widget.factory.topbar;
    remAssign($receiver_0.title, 'Event Log');
    var $receiver_1 = $receiver_0.left.dropdown;
    $receiver_1.bars;
    $receiver.signOut_tstgz9$($receiver_1.menu, ui$lambda$lambda$lambda$lambda($receiver));
    var $receiver_2 = $receiver_0.right.button;
    $receiver_2.m1p2;
    get_plus($receiver_2.fa);
    $receiver_2.primary;
    $receiver.click_9375ex$($receiver_2, ui$lambda$lambda$lambda($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_3 = widget.factory.scrollPane;
    invoke($receiver_3.pane, ui$lambda$lambda($receiver));
    return new TopAndContent(tmp$, $receiver_3.node);
  }
  function NewEventTypePath() {
  }
  NewEventTypePath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NewEventTypePath',
    interfaces: [LoggedInPath]
  };
  function NewEventType(parent, linkage) {
    CsKillsView.call(this, parent);
    this.linkage = linkage;
    this.$delegate_q1ybt6$_0 = parent;
    this.newEventType_qwdr1a$_0 = this;
    this.item = this.randomEditable_mx4g9l$(this.loggedIn.eventTypes);
    this.creating_41dlvh$_0 = this.rxCreating_8ctbwl$(this.item, NewEventType$creating$lambda(parent, this));
    this.rawView_o1aaz5$_0 = ui_1(this);
  }
  Object.defineProperty(NewEventType.prototype, 'newEventType', {
    get: function () {
      return this.newEventType_qwdr1a$_0;
    }
  });
  Object.defineProperty(NewEventType.prototype, 'creating', {
    get: function () {
      return this.creating_41dlvh$_0;
    }
  });
  Object.defineProperty(NewEventType.prototype, 'rawView', {
    get: function () {
      return this.rawView_o1aaz5$_0;
    }
  });
  Object.defineProperty(NewEventType.prototype, 'db', {
    get: function () {
      return this.$delegate_q1ybt6$_0.db;
    }
  });
  Object.defineProperty(NewEventType.prototype, 'links', {
    get: function () {
      return this.$delegate_q1ybt6$_0.links;
    }
  });
  Object.defineProperty(NewEventType.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_q1ybt6$_0.loggedIn;
    }
  });
  NewEventType.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_q1ybt6$_0.get_randomDoc_sj9vaa$($receiver);
  };
  NewEventType.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_q1ybt6$_0.get_ref_sj9vaa$($receiver);
  };
  NewEventType.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_q1ybt6$_0.get_ref_aqty80$($receiver);
  };
  NewEventType.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_q1ybt6$_0.delete_73z9b6$($receiver);
  };
  NewEventType.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_q1ybt6$_0.delete_ihdkly$($receiver);
  };
  NewEventType.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_q1ybt6$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  NewEventType.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_q1ybt6$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  NewEventType.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_q1ybt6$_0.query_wzkv1r$$default($receiver, query);
  };
  NewEventType.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_q1ybt6$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  NewEventType.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_q1ybt6$_0.save_73z9b6$($receiver);
  };
  NewEventType.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_q1ybt6$_0.save_biv66q$($receiver);
  };
  NewEventType.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_q1ybt6$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(NewEventType.prototype, 'back', {
    get: function () {
      return this.linkage.back;
    }
  });
  function Coroutine$NewEventType$creating$lambda$lambda$lambda$lambda(this$_0, this$NewEventType_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$this$NewEventType = this$NewEventType_0;
  }
  Coroutine$NewEventType$creating$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NewEventType$creating$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NewEventType$creating$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$NewEventType$creating$lambda$lambda$lambda$lambda;
  Coroutine$NewEventType$creating$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.fwd_e1fa5e$(this.local$this$.links.editEventType, this.local$this$NewEventType.item.id.id, true, this);
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
  function NewEventType$creating$lambda$lambda$lambda$lambda(this$_0, this$NewEventType_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$NewEventType$creating$lambda$lambda$lambda$lambda(this$_0, this$NewEventType_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function NewEventType$creating$lambda$lambda(closure$parent, this$NewEventType) {
    return function () {
      var receiver = closure$parent;
      advance(receiver, NewEventType$creating$lambda$lambda$lambda$lambda(receiver, this$NewEventType));
      return Unit;
    };
  }
  function NewEventType$creating$lambda(closure$parent, this$NewEventType) {
    return function (tr) {
      return tr.copy_ucykgt$(void 0, NewEventType$creating$lambda$lambda(closure$parent, this$NewEventType));
    };
  }
  NewEventType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NewEventType',
    interfaces: [BackCreateKillsUixApi, FBBackApi, HasBack, NewEventTypePath, LoggedInPath, CsKillsView]
  };
  function ui$lambda_0(this$ui) {
    return function ($receiver) {
      get_leftRightTopBottom0(get_cls($receiver));
      var $receiver_0 = get_insert(get_widget($receiver)).input;
      var this$ui_0 = this$ui;
      get_m1($receiver_0.cls);
      required(this$ui_0.bind_8y93tj$($receiver_0, this$ui_0.creating.current.name));
      return Unit;
    };
  }
  function ui_1($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backPersistDiscard_e1rmy3$($receiver_0.slots.left);
    remAssign($receiver_0.title, 'New Event Type');
    $receiver.get_persistButton_tdhe4g$($receiver_0.right);
    return new TopAndContent($receiver_0.node, column(document, ui$lambda_0($receiver)));
  }
  function RecordOccurrencePath() {
  }
  RecordOccurrencePath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RecordOccurrencePath',
    interfaces: [LoggedInPath]
  };
  function RecordOccurrence(from, linkage, eventType) {
    ForwardBase.call(this, from);
    this.$delegate_3hq59m$_0 = from;
    this.$delegate_3hq59m$_1 = linkage;
    this.recordOccurrence_qs4x4k$_0 = this;
    this.eventType = this.get_live_73z9b6$(toFsDoc(eventType));
    this.latestOccurrenceVar = new Var(null);
    this.latestOccurrence = new Var('<no record>');
    this.rawView_evsldd$_0 = ui_2(this);
    this.forEach_xwzbbo$(this.rx_y6x17j$(RecordOccurrence_init$lambda(this)), RecordOccurrence_init$lambda_0(this));
    var $receiver = window.setInterval(RecordOccurrence_init$lambda_1(this), 1000);
    plusAssign(this.kills, RecordOccurrence_init$lambda$lambda($receiver));
    var tr = this.redisplay.trigger;
    this.redisplay.remAssign_o14v8n$(RecordOccurrence_init$lambda$lambda_0(this, tr));
    launchReport(this, RecordOccurrence_init$lambda_2(eventType, this));
  }
  Object.defineProperty(RecordOccurrence.prototype, 'recordOccurrence', {
    get: function () {
      return this.recordOccurrence_qs4x4k$_0;
    }
  });
  RecordOccurrence.prototype.updateTime = function () {
    var tmp$, tmp$_0, tmp$_1;
    var ts = (tmp$_1 = (tmp$_0 = (tmp$ = this.latestOccurrenceVar.now) != null ? tmp$.now : null) != null ? tmp$_0.ts : null) != null ? tmp$_1.now : null;
    this.updateTime_87vvmp$(ts);
  };
  RecordOccurrence.prototype.updateTime_87vvmp$ = function (ts) {
    var tmp$;
    this.latestOccurrence.remAssign_11rb$((tmp$ = ts != null ? ago(ts) : null) != null ? tmp$ : '<no record>');
  };
  Object.defineProperty(RecordOccurrence.prototype, 'rawView', {
    get: function () {
      return this.rawView_evsldd$_0;
    }
  });
  RecordOccurrence.prototype.record = function () {
    this.save_73z9b6$(this.toRandomFsDoc_xc7wmg$(new Occurrence(), get_occurrences(get_docWrap(this.eventType.id))));
  };
  Object.defineProperty(RecordOccurrence.prototype, 'db', {
    get: function () {
      return this.$delegate_3hq59m$_0.db;
    }
  });
  Object.defineProperty(RecordOccurrence.prototype, 'links', {
    get: function () {
      return this.$delegate_3hq59m$_0.links;
    }
  });
  Object.defineProperty(RecordOccurrence.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_3hq59m$_0.loggedIn;
    }
  });
  RecordOccurrence.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_3hq59m$_0.get_randomDoc_sj9vaa$($receiver);
  };
  RecordOccurrence.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_3hq59m$_0.get_ref_sj9vaa$($receiver);
  };
  RecordOccurrence.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_3hq59m$_0.get_ref_aqty80$($receiver);
  };
  RecordOccurrence.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_3hq59m$_0.delete_73z9b6$($receiver);
  };
  RecordOccurrence.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_3hq59m$_0.delete_ihdkly$($receiver);
  };
  RecordOccurrence.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_3hq59m$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  RecordOccurrence.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_3hq59m$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  RecordOccurrence.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_3hq59m$_0.query_wzkv1r$$default($receiver, query);
  };
  RecordOccurrence.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_3hq59m$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  RecordOccurrence.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_3hq59m$_0.save_73z9b6$($receiver);
  };
  RecordOccurrence.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_3hq59m$_0.save_biv66q$($receiver);
  };
  RecordOccurrence.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_3hq59m$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(RecordOccurrence.prototype, 'back', {
    get: function () {
      return this.$delegate_3hq59m$_1.back;
    }
  });
  function RecordOccurrence_init$lambda(this$RecordOccurrence) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$_0 = (tmp$ = this$RecordOccurrence.latestOccurrenceVar.invoke()) != null ? tmp$.invoke() : null) != null ? tmp$_0.ts : null) != null ? tmp$_1.invoke() : null;
    };
  }
  function RecordOccurrence_init$lambda_0(this$RecordOccurrence) {
    return function ($receiver, it) {
      this$RecordOccurrence.updateTime_87vvmp$(it);
      return Unit;
    };
  }
  function RecordOccurrence_init$lambda_1(this$RecordOccurrence) {
    return function () {
      this$RecordOccurrence.updateTime();
      return Unit;
    };
  }
  function RecordOccurrence_init$lambda$lambda(closure$id) {
    return function () {
      window.clearInterval(closure$id);
      return Unit;
    };
  }
  function RecordOccurrence_init$lambda$lambda_0(this$RecordOccurrence, closure$tr) {
    return function () {
      this$RecordOccurrence.record();
      closure$tr();
      return Unit;
    };
  }
  function RecordOccurrence_init$lambda$lambda_1($receiver) {
    $receiver.get_desc_5eq60p$(Occurrence.Companion.ts);
    $receiver.limit_za3lpa$(1);
    return Unit;
  }
  function Coroutine$RecordOccurrence_init$lambda(closure$eventType_0, this$RecordOccurrence_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$eventType = closure$eventType_0;
    this.local$this$RecordOccurrence = this$RecordOccurrence_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$RecordOccurrence_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RecordOccurrence_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RecordOccurrence_init$lambda.prototype.constructor = Coroutine$RecordOccurrence_init$lambda;
  Coroutine$RecordOccurrence_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var ch = this.local$this$RecordOccurrence.listEvents_pujjsl$(get_occurrences(this.local$closure$eventType.id), RecordOccurrence_init$lambda$lambda_1);
            this.local$tmp$ = ch.iterator();
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
              this.local$this$RecordOccurrence.latestOccurrenceVar.remAssign_11rb$(e_0.item.rxv);
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
  function RecordOccurrence_init$lambda_2(closure$eventType_0, this$RecordOccurrence_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$RecordOccurrence_init$lambda(closure$eventType_0, this$RecordOccurrence_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  RecordOccurrence.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecordOccurrence',
    interfaces: [FBBackApi, HasBack, RecordOccurrencePath, LoggedInPath, ForwardBase]
  };
  function ui$lambda$lambda$lambda$lambda_0(this$ui) {
    return function () {
      return this$ui.eventType.invoke().name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda_1(this$ui) {
    return function () {
      return this$ui.latestOccurrence.invoke();
    };
  }
  function ui$lambda$lambda$lambda_2(this$ui) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      remAssign(get_dt($receiver), 'Event Type');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$lambda$lambda_0(this$ui));
      remAssign(get_dt($receiver), 'Latest Occurrence');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$lambda$lambda_1(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_2(this$ui) {
    return function () {
      this$ui.record();
      return Unit;
    };
  }
  function ui$lambda$lambda_0(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_p1($receiver_0);
      column_0($receiver_0);
      invoke(get_dl($receiver), ui$lambda$lambda$lambda_2(this$ui));
      var $receiver_1 = get_insert_0($receiver).button;
      var this$ui_0 = this$ui;
      get_m1($receiver_1.cls);
      remAssign($receiver_1.text, 'Record Again');
      $receiver_1.primary;
      this$ui_0.click_9375ex$($receiver_1, ui$lambda$lambda$lambda$lambda_2(this$ui_0));
      return Unit;
    };
  }
  function ui_2($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backButton_tdhe4g$($receiver_0.left);
    remAssign($receiver_0.title, 'Record Occurrence');
    var tmp$ = $receiver_0.node;
    var $receiver_1 = widget.factory.scrollPane;
    invoke($receiver_1.pane, ui$lambda$lambda_0($receiver));
    return new TopAndContent(tmp$, $receiver_1.node);
  }
  var package$eventlog = _.eventlog || (_.eventlog = {});
  var package$editeventtype = package$eventlog.editeventtype || (package$eventlog.editeventtype = {});
  package$editeventtype.EditEventTypePath = EditEventTypePath;
  package$editeventtype.EditEventType = EditEventType;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$editeventtype.ui_up4hyl$ = ui;
  package$eventlog.main = main;
  package$eventlog.LinksPath = LinksPath;
  package$eventlog.Links = Links;
  var package$loggedin = package$eventlog.loggedin || (package$eventlog.loggedin = {});
  package$loggedin.LoggedInTC = LoggedInTC;
  package$loggedin.LoggedInPath = LoggedInPath;
  package$loggedin.LoggedIn = LoggedIn;
  package$loggedin.ui_46qdnp$ = ui_0;
  var package$neweventtype = package$eventlog.neweventtype || (package$eventlog.neweventtype = {});
  package$neweventtype.NewEventTypePath = NewEventTypePath;
  package$neweventtype.NewEventType = NewEventType;
  package$neweventtype.ui_qcbkf9$ = ui_1;
  var package$recordoccurrence = package$eventlog.recordoccurrence || (package$eventlog.recordoccurrence = {});
  package$recordoccurrence.RecordOccurrencePath = RecordOccurrencePath;
  package$recordoccurrence.RecordOccurrence = RecordOccurrence;
  package$recordoccurrence.ui_xspkmz$ = ui_2;
  LinksPath.prototype.get_randomDoc_sj9vaa$ = DbApi.prototype.get_randomDoc_sj9vaa$;
  LinksPath.prototype.get_ref_sj9vaa$ = DbApi.prototype.get_ref_sj9vaa$;
  LinksPath.prototype.get_ref_aqty80$ = DbApi.prototype.get_ref_aqty80$;
  LinksPath.prototype.delete_73z9b6$ = DbApi.prototype.delete_73z9b6$;
  LinksPath.prototype.delete_ihdkly$ = DbApi.prototype.delete_ihdkly$;
  LinksPath.prototype.getCachedOrServer_prxdpg$ = DbApi.prototype.getCachedOrServer_prxdpg$;
  LinksPath.prototype.getOrNull_m1hph$$default = DbApi.prototype.getOrNull_m1hph$$default;
  LinksPath.prototype.query_wzkv1r$$default = DbApi.prototype.query_wzkv1r$$default;
  LinksPath.prototype.randomEditable_mx4g9l$$default = DbApi.prototype.randomEditable_mx4g9l$$default;
  LinksPath.prototype.save_73z9b6$ = DbApi.prototype.save_73z9b6$;
  LinksPath.prototype.save_biv66q$ = DbApi.prototype.save_biv66q$;
  LinksPath.prototype.toRandomFsDoc_xc7wmg$ = DbApi.prototype.toRandomFsDoc_xc7wmg$;
  LinksPath.prototype.getOrNull_m1hph$ = DbApi.prototype.getOrNull_m1hph$;
  LinksPath.prototype.query_wzkv1r$ = DbApi.prototype.query_wzkv1r$;
  LinksPath.prototype.randomEditable_mx4g9l$ = DbApi.prototype.randomEditable_mx4g9l$;
  LoggedInPath.prototype.get_randomDoc_sj9vaa$ = LinksPath.prototype.get_randomDoc_sj9vaa$;
  LoggedInPath.prototype.get_ref_sj9vaa$ = LinksPath.prototype.get_ref_sj9vaa$;
  LoggedInPath.prototype.get_ref_aqty80$ = LinksPath.prototype.get_ref_aqty80$;
  LoggedInPath.prototype.delete_73z9b6$ = LinksPath.prototype.delete_73z9b6$;
  LoggedInPath.prototype.delete_ihdkly$ = LinksPath.prototype.delete_ihdkly$;
  LoggedInPath.prototype.getCachedOrServer_prxdpg$ = LinksPath.prototype.getCachedOrServer_prxdpg$;
  LoggedInPath.prototype.getOrNull_m1hph$$default = LinksPath.prototype.getOrNull_m1hph$$default;
  LoggedInPath.prototype.query_wzkv1r$$default = LinksPath.prototype.query_wzkv1r$$default;
  LoggedInPath.prototype.randomEditable_mx4g9l$$default = LinksPath.prototype.randomEditable_mx4g9l$$default;
  LoggedInPath.prototype.save_73z9b6$ = LinksPath.prototype.save_73z9b6$;
  LoggedInPath.prototype.save_biv66q$ = LinksPath.prototype.save_biv66q$;
  LoggedInPath.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  LoggedInPath.prototype.getOrNull_m1hph$ = LinksPath.prototype.getOrNull_m1hph$;
  LoggedInPath.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  LoggedInPath.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
  EditEventTypePath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  EditEventTypePath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  EditEventTypePath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  EditEventTypePath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  EditEventTypePath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  EditEventTypePath.prototype.getCachedOrServer_prxdpg$ = LoggedInPath.prototype.getCachedOrServer_prxdpg$;
  EditEventTypePath.prototype.getOrNull_m1hph$$default = LoggedInPath.prototype.getOrNull_m1hph$$default;
  EditEventTypePath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  EditEventTypePath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  EditEventTypePath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  EditEventTypePath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  EditEventTypePath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  EditEventTypePath.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  EditEventTypePath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  EditEventTypePath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  EditEventType.prototype.bind_8y93tj$ = BackEditKillsUixApi.prototype.bind_8y93tj$;
  EditEventType.prototype.bind_4dd4yj$ = BackEditKillsUixApi.prototype.bind_4dd4yj$;
  EditEventType.prototype.bind_igb9j9$ = BackEditKillsUixApi.prototype.bind_igb9j9$;
  EditEventType.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  EditEventType.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  EditEventType.prototype.get_clickActivate_tvm2vp$ = FBBackApi.prototype.get_clickActivate_tvm2vp$;
  EditEventType.prototype.get_clickToggle_tvm2vp$ = FBBackApi.prototype.get_clickToggle_tvm2vp$;
  EditEventType.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  EditEventType.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  EditEventType.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  EditEventType.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  EditEventType.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  EditEventType.prototype.click_4eku4n$ = FBBackApi.prototype.click_4eku4n$;
  EditEventType.prototype.click_9375ex$ = FBBackApi.prototype.click_9375ex$;
  EditEventType.prototype.click_512jbc$ = FBBackApi.prototype.click_512jbc$;
  EditEventType.prototype.click_3zaxtq$ = FBBackApi.prototype.click_3zaxtq$;
  EditEventType.prototype.click_ts68bh$ = FBBackApi.prototype.click_ts68bh$;
  EditEventType.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  EditEventType.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  EditEventType.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  EditEventType.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  EditEventType.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  EditEventType.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  EditEventType.prototype.signIn_tstgz9$ = FBBackApi.prototype.signIn_tstgz9$;
  EditEventType.prototype.signOut_tstgz9$ = FBBackApi.prototype.signOut_tstgz9$;
  EditEventType.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  EditEventType.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  Object.defineProperty(EditEventType.prototype, 'bindings', Object.getOwnPropertyDescriptor(BackEditKillsUixApi.prototype, 'bindings'));
  EditEventType.prototype.get_backSaveDiscard_e1rmy3$ = BackEditKillsUixApi.prototype.get_backSaveDiscard_e1rmy3$;
  EditEventType.prototype.get_saveButton_tdhe4g$ = BackEditKillsUixApi.prototype.get_saveButton_tdhe4g$;
  EditEventType.prototype.get_saveDeleteButton_tdhe4g$ = BackEditKillsUixApi.prototype.get_saveDeleteButton_tdhe4g$;
  EditEventType.prototype.getOrNull_m1hph$ = EditEventTypePath.prototype.getOrNull_m1hph$;
  EditEventType.prototype.query_wzkv1r$ = EditEventTypePath.prototype.query_wzkv1r$;
  EditEventType.prototype.randomEditable_mx4g9l$ = EditEventTypePath.prototype.randomEditable_mx4g9l$;
  EditEventType.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  EditEventType.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  EditEventType.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  EditEventType.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  EditEventType.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  Links.prototype.get_randomDoc_sj9vaa$ = LinksPath.prototype.get_randomDoc_sj9vaa$;
  Links.prototype.get_ref_sj9vaa$ = LinksPath.prototype.get_ref_sj9vaa$;
  Links.prototype.get_ref_aqty80$ = LinksPath.prototype.get_ref_aqty80$;
  Links.prototype.delete_73z9b6$ = LinksPath.prototype.delete_73z9b6$;
  Links.prototype.delete_ihdkly$ = LinksPath.prototype.delete_ihdkly$;
  Links.prototype.getCachedOrServer_prxdpg$ = LinksPath.prototype.getCachedOrServer_prxdpg$;
  Links.prototype.getOrNull_m1hph$$default = LinksPath.prototype.getOrNull_m1hph$$default;
  Links.prototype.query_wzkv1r$$default = LinksPath.prototype.query_wzkv1r$$default;
  Links.prototype.randomEditable_mx4g9l$$default = LinksPath.prototype.randomEditable_mx4g9l$$default;
  Links.prototype.save_73z9b6$ = LinksPath.prototype.save_73z9b6$;
  Links.prototype.save_biv66q$ = LinksPath.prototype.save_biv66q$;
  Links.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  Links.prototype.getOrNull_m1hph$ = LinksPath.prototype.getOrNull_m1hph$;
  Links.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  Links.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
  LoggedInTC.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  LoggedInTC.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  LoggedInTC.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  LoggedInTC.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  LoggedInTC.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  LoggedInTC.prototype.getCachedOrServer_prxdpg$ = LoggedInPath.prototype.getCachedOrServer_prxdpg$;
  LoggedInTC.prototype.getOrNull_m1hph$$default = LoggedInPath.prototype.getOrNull_m1hph$$default;
  LoggedInTC.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  LoggedInTC.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  LoggedInTC.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  LoggedInTC.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  LoggedInTC.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  LoggedInTC.prototype.fwd_e1fa5e$$default = LinkApi.prototype.fwd_e1fa5e$$default;
  LoggedInTC.prototype.fwd_nnhkmr$$default = LinkApi.prototype.fwd_nnhkmr$$default;
  LoggedInTC.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  LoggedInTC.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  LoggedInTC.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  LoggedInTC.prototype.fwd_e1fa5e$ = LinkApi.prototype.fwd_e1fa5e$;
  LoggedInTC.prototype.fwd_nnhkmr$ = LinkApi.prototype.fwd_nnhkmr$;
  LoggedIn.prototype.signOut_tstgz9$ = FBApi.prototype.signOut_tstgz9$;
  LoggedIn.prototype.fwd_e1fa5e$$default = LoggedInTC.prototype.fwd_e1fa5e$$default;
  LoggedIn.prototype.fwd_nnhkmr$$default = LoggedInTC.prototype.fwd_nnhkmr$$default;
  LoggedIn.prototype.get_clickActivate_tvm2vp$ = FBApi.prototype.get_clickActivate_tvm2vp$;
  LoggedIn.prototype.get_clickToggle_tvm2vp$ = FBApi.prototype.get_clickToggle_tvm2vp$;
  LoggedIn.prototype.get_live_73z9b6$ = FBApi.prototype.get_live_73z9b6$;
  LoggedIn.prototype.get_snapshots_79y88y$ = FBApi.prototype.get_snapshots_79y88y$;
  LoggedIn.prototype.rxCreating_8ctbwl$$default = FBApi.prototype.rxCreating_8ctbwl$$default;
  LoggedIn.prototype.rxEditing_6l8l9j$$default = FBApi.prototype.rxEditing_6l8l9j$$default;
  LoggedIn.prototype.click_4eku4n$ = FBApi.prototype.click_4eku4n$;
  LoggedIn.prototype.click_9375ex$ = FBApi.prototype.click_9375ex$;
  LoggedIn.prototype.click_512jbc$ = FBApi.prototype.click_512jbc$;
  LoggedIn.prototype.click_3zaxtq$ = FBApi.prototype.click_3zaxtq$;
  LoggedIn.prototype.click_ts68bh$ = FBApi.prototype.click_ts68bh$;
  LoggedIn.prototype.docs_prxdpg$ = FBApi.prototype.docs_prxdpg$;
  LoggedIn.prototype.documentChanges_z2kgpb$ = FBApi.prototype.documentChanges_z2kgpb$;
  LoggedIn.prototype.fsCache_sj6zb3$$default = FBApi.prototype.fsCache_sj6zb3$$default;
  LoggedIn.prototype.fsCache_aujjp8$ = FBApi.prototype.fsCache_aujjp8$;
  LoggedIn.prototype.listEvents_pujjsl$$default = FBApi.prototype.listEvents_pujjsl$$default;
  LoggedIn.prototype.onSnapshotNext_po64up$ = FBApi.prototype.onSnapshotNext_po64up$;
  LoggedIn.prototype.signIn_tstgz9$ = FBApi.prototype.signIn_tstgz9$;
  LoggedIn.prototype.toList_pujjsl$$default = FBApi.prototype.toList_pujjsl$$default;
  LoggedIn.prototype.toSnapshotEvents_ecp0ut$ = FBApi.prototype.toSnapshotEvents_ecp0ut$;
  LoggedIn.prototype.getOrNull_m1hph$ = LoggedInTC.prototype.getOrNull_m1hph$;
  LoggedIn.prototype.query_wzkv1r$ = LoggedInTC.prototype.query_wzkv1r$;
  LoggedIn.prototype.randomEditable_mx4g9l$ = LoggedInTC.prototype.randomEditable_mx4g9l$;
  LoggedIn.prototype.fwd_e1fa5e$ = LoggedInTC.prototype.fwd_e1fa5e$;
  LoggedIn.prototype.fwd_nnhkmr$ = LoggedInTC.prototype.fwd_nnhkmr$;
  LoggedIn.prototype.rxCreating_8ctbwl$ = FBApi.prototype.rxCreating_8ctbwl$;
  LoggedIn.prototype.rxEditing_6l8l9j$ = FBApi.prototype.rxEditing_6l8l9j$;
  LoggedIn.prototype.fsCache_sj6zb3$ = FBApi.prototype.fsCache_sj6zb3$;
  LoggedIn.prototype.listEvents_pujjsl$ = FBApi.prototype.listEvents_pujjsl$;
  LoggedIn.prototype.toList_pujjsl$ = FBApi.prototype.toList_pujjsl$;
  NewEventTypePath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  NewEventTypePath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  NewEventTypePath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  NewEventTypePath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  NewEventTypePath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  NewEventTypePath.prototype.getCachedOrServer_prxdpg$ = LoggedInPath.prototype.getCachedOrServer_prxdpg$;
  NewEventTypePath.prototype.getOrNull_m1hph$$default = LoggedInPath.prototype.getOrNull_m1hph$$default;
  NewEventTypePath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  NewEventTypePath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  NewEventTypePath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  NewEventTypePath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  NewEventTypePath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  NewEventTypePath.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  NewEventTypePath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  NewEventTypePath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  NewEventType.prototype.bind_8y93tj$ = BackCreateKillsUixApi.prototype.bind_8y93tj$;
  NewEventType.prototype.bind_4dd4yj$ = BackCreateKillsUixApi.prototype.bind_4dd4yj$;
  NewEventType.prototype.bind_igb9j9$ = BackCreateKillsUixApi.prototype.bind_igb9j9$;
  NewEventType.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  NewEventType.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  NewEventType.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  NewEventType.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  NewEventType.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  NewEventType.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  NewEventType.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  NewEventType.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  NewEventType.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  NewEventType.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  NewEventType.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  NewEventType.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  NewEventType.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  NewEventType.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  NewEventType.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  Object.defineProperty(NewEventType.prototype, 'bindings', Object.getOwnPropertyDescriptor(BackCreateKillsUixApi.prototype, 'bindings'));
  NewEventType.prototype.get_backPersistDiscard_e1rmy3$ = BackCreateKillsUixApi.prototype.get_backPersistDiscard_e1rmy3$;
  NewEventType.prototype.get_persistButton_tdhe4g$ = BackCreateKillsUixApi.prototype.get_persistButton_tdhe4g$;
  NewEventType.prototype.getOrNull_m1hph$ = NewEventTypePath.prototype.getOrNull_m1hph$;
  NewEventType.prototype.query_wzkv1r$ = NewEventTypePath.prototype.query_wzkv1r$;
  NewEventType.prototype.randomEditable_mx4g9l$ = NewEventTypePath.prototype.randomEditable_mx4g9l$;
  NewEventType.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  NewEventType.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  NewEventType.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  NewEventType.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  NewEventType.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  RecordOccurrencePath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  RecordOccurrencePath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  RecordOccurrencePath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  RecordOccurrencePath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  RecordOccurrencePath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  RecordOccurrencePath.prototype.getCachedOrServer_prxdpg$ = LoggedInPath.prototype.getCachedOrServer_prxdpg$;
  RecordOccurrencePath.prototype.getOrNull_m1hph$$default = LoggedInPath.prototype.getOrNull_m1hph$$default;
  RecordOccurrencePath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  RecordOccurrencePath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  RecordOccurrencePath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  RecordOccurrencePath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  RecordOccurrencePath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  RecordOccurrencePath.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  RecordOccurrencePath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  RecordOccurrencePath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  RecordOccurrence.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  RecordOccurrence.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  RecordOccurrence.prototype.get_clickActivate_tvm2vp$ = FBBackApi.prototype.get_clickActivate_tvm2vp$;
  RecordOccurrence.prototype.get_clickToggle_tvm2vp$ = FBBackApi.prototype.get_clickToggle_tvm2vp$;
  RecordOccurrence.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  RecordOccurrence.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  RecordOccurrence.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  RecordOccurrence.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  RecordOccurrence.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  RecordOccurrence.prototype.click_4eku4n$ = FBBackApi.prototype.click_4eku4n$;
  RecordOccurrence.prototype.click_9375ex$ = FBBackApi.prototype.click_9375ex$;
  RecordOccurrence.prototype.click_512jbc$ = FBBackApi.prototype.click_512jbc$;
  RecordOccurrence.prototype.click_3zaxtq$ = FBBackApi.prototype.click_3zaxtq$;
  RecordOccurrence.prototype.click_ts68bh$ = FBBackApi.prototype.click_ts68bh$;
  RecordOccurrence.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  RecordOccurrence.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  RecordOccurrence.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  RecordOccurrence.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  RecordOccurrence.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  RecordOccurrence.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  RecordOccurrence.prototype.signIn_tstgz9$ = FBBackApi.prototype.signIn_tstgz9$;
  RecordOccurrence.prototype.signOut_tstgz9$ = FBBackApi.prototype.signOut_tstgz9$;
  RecordOccurrence.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  RecordOccurrence.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  RecordOccurrence.prototype.getOrNull_m1hph$ = RecordOccurrencePath.prototype.getOrNull_m1hph$;
  RecordOccurrence.prototype.query_wzkv1r$ = RecordOccurrencePath.prototype.query_wzkv1r$;
  RecordOccurrence.prototype.randomEditable_mx4g9l$ = RecordOccurrencePath.prototype.randomEditable_mx4g9l$;
  RecordOccurrence.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  RecordOccurrence.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  RecordOccurrence.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  RecordOccurrence.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  RecordOccurrence.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  main();
  Kotlin.defineModule('appsimake-eventlog', _);
  return _;
}(typeof this['appsimake-eventlog'] === 'undefined' ? {} : this['appsimake-eventlog'], kotlin, this['appsimake-commonui'], this['appsimake-commonfb'], this['appsimake-domx'], this['appsimake-commonshr'], this['appsimake-bootstrap'], this['appsimake-firebase'], this['kotlinx-coroutines-core'], this['appsimake-eventloglib'], this['appsimake-fontawesome']);

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-buildenv'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-buildenv' was not found. Please, check whether 'appsimake-buildenv' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-commonui'.");
}
this['appsimake-commonui'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_bootstrap, $module$appsimake_buildenv, $module$appsimake_domx, $module$appsimake_common, $module$kotlinx_coroutines_core, $module$appsimake_fontawesome) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Unit = Kotlin.kotlin.Unit;
  var Killables = $module$appsimake_commonshr.killable.Killables;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var Var = $module$appsimake_commonshr.rx.Var;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_klfg04$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var setupFullScreen = $module$appsimake_bootstrap.bootstrap.setupFullScreen;
  var Any = Object;
  var buildenv = $module$appsimake_buildenv.buildenv;
  var get_source = $module$appsimake_domx.domx.get_source_asww5s$;
  var base64 = $module$appsimake_domx.domx.base64_mf97a2$;
  var video = $module$appsimake_domx.domx.video_2l7o0u$;
  var get_connection = $module$appsimake_common.common.get_connection_yi0el1$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_input = $module$appsimake_domx.domx.get_input_asww5s$;
  var equals = Kotlin.equals;
  var flexRow = $module$appsimake_bootstrap.bootstrap.flexRow_ejp6nk$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_fa = $module$appsimake_fontawesome.fontawesome.get_fa_kre7dp$;
  var get_chevronRight = $module$appsimake_fontawesome.fontawesome.get_chevronRight_xml72e$;
  var listButton = $module$appsimake_bootstrap.bootstrap.listButton_juq4uf$;
  var get_spinnerBorder = $module$appsimake_bootstrap.bootstrap.get_spinnerBorder_kre7dp$;
  var centerDiv = $module$appsimake_bootstrap.bootstrap.centerDiv_gnmiz0$;
  var get_p2 = $module$appsimake_bootstrap.bootstrap.get_p2_kre7dp$;
  var get_span = $module$appsimake_domx.domx.get_span_asww5s$;
  var get_fw = $module$appsimake_fontawesome.fontawesome.get_fw_xml72e$;
  var get_classes = $module$appsimake_domx.domx.get_classes_ejp6nk$;
  var get_button = $module$appsimake_domx.domx.get_button_asww5s$;
  var get_btn = $module$appsimake_bootstrap.bootstrap.get_btn_kre7dp$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var with_0 = $module$appsimake_commonshr.killable.with_qs7ci7$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var get_dFlex = $module$appsimake_bootstrap.bootstrap.get_dFlex_kre7dp$;
  var resizeEvent = $module$appsimake_common.common.resizeEvent_5ehnu1$;
  var rxClass = $module$appsimake_commonshr.rx.rxClass_jgfmsn$;
  var get_flexBasis0 = $module$appsimake_domx.styles.get_flexBasis0_kre7dp$;
  var column = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var removeFromParent = $module$appsimake_common.common.removeFromParent_asww5s$;
  var getCallableRef = Kotlin.getCallableRef;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var KillableSeq_init = $module$appsimake_commonshr.killable.KillableSeq_init_wii6vi$;
  var Killable = $module$appsimake_commonshr.killable.Killable;
  var replaceWith = $module$appsimake_common.common.replaceWith_fga9sf$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_kre7dp$;
  var killables = $module$appsimake_commonshr.killable.killables_yzxo1x$;
  var plusAssign = $module$appsimake_commonshr.killable.plusAssign_aeyq4w$;
  var addedTo = $module$appsimake_commonshr.killable.addedTo_8nlz5n$;
  var common = $module$appsimake_commonshr.common;
  var Some = $module$appsimake_commonshr.common.Some;
  var addedTo_0 = $module$appsimake_commonshr.killable.addedTo_tjw9ba$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var get_btnSecondary = $module$appsimake_bootstrap.bootstrap.get_btnSecondary_kre7dp$;
  var btnButton = $module$appsimake_bootstrap.bootstrap.btnButton_9ztatb$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var clickEvent = $module$appsimake_domx.domx.clickEvent_bvfv80$;
  var Fa = $module$appsimake_fontawesome.fontawesome.Fa;
  var get_chevronLeft = $module$appsimake_fontawesome.fontawesome.get_chevronLeft_xml72e$;
  var flexAlignItemsCenter = $module$appsimake_bootstrap.bootstrap.flexAlignItemsCenter_ejp6nk$;
  var get_h5 = $module$appsimake_domx.domx.get_h5_asww5s$;
  var get_m2 = $module$appsimake_bootstrap.bootstrap.get_m2_kre7dp$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var get_flexRow = $module$appsimake_bootstrap.bootstrap.get_flexRow_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_spinnerBorderSm = $module$appsimake_bootstrap.bootstrap.get_spinnerBorderSm_kre7dp$;
  var get_navTabs = $module$appsimake_bootstrap.bootstrap.get_navTabs_kre7dp$;
  var get_bgLight = $module$appsimake_bootstrap.bootstrap.get_bgLight_kre7dp$;
  var row = $module$appsimake_bootstrap.bootstrap.row_gnmiz0$;
  var lazyOf = Kotlin.kotlin.lazyOf_mh5how$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var borderBottom = $module$appsimake_bootstrap.bootstrap.borderBottom_ejp6nk$;
  var get_flexColumn = $module$appsimake_bootstrap.bootstrap.get_flexColumn_kre7dp$;
  var insertAt = $module$appsimake_common.common.insertAt_tevjyx$;
  var get_mt1 = $module$appsimake_bootstrap.bootstrap.get_mt1_kre7dp$;
  var get_navItem = $module$appsimake_bootstrap.bootstrap.get_navItem_kre7dp$;
  var get_a = $module$appsimake_domx.domx.get_a_asww5s$;
  var get_navLink = $module$appsimake_bootstrap.bootstrap.get_navLink_kre7dp$;
  var get_px2 = $module$appsimake_bootstrap.bootstrap.get_px2_kre7dp$;
  var get_active = $module$appsimake_bootstrap.bootstrap.get_active_kre7dp$;
  var rxClass_0 = $module$appsimake_commonshr.rx.rxClass_3s5dpe$;
  Orientation.prototype = Object.create(Enum.prototype);
  Orientation.prototype.constructor = Orientation;
  Slots$Ref$First.prototype = Object.create(Slots$Ref.prototype);
  Slots$Ref$First.prototype.constructor = Slots$Ref$First;
  Slots$Ref$NodeRef.prototype = Object.create(Slots$Ref.prototype);
  Slots$Ref$NodeRef.prototype.constructor = Slots$Ref$NodeRef;
  Slots$Ref$SlotRef.prototype = Object.create(Slots$Ref.prototype);
  Slots$Ref$SlotRef.prototype.constructor = Slots$Ref$SlotRef;
  ToolBar.prototype = Object.create(NodesFactory.prototype);
  ToolBar.prototype.constructor = ToolBar;
  function AppCtx(title) {
    this.title = title;
    this.killables = new Killables();
    this.visible_yu49lr$_0 = lazy(AppCtx$visible$lambda(this));
    this.hasFocus_ezs4tf$_0 = lazy(AppCtx$hasFocus$lambda(this));
    this.windowActive_xk4uuj$_0 = lazy(AppCtx$windowActive$lambda(this));
    this.root_mbqan$_0 = lazy(AppCtx$root$lambda);
    setupFullScreen();
    this.isServiceWorkerSupported_c1ctq4$_0 = lazy(AppCtx$isServiceWorkerSupported$lambda);
    this.isFcmSupported_iuxhhj$_0 = lazy(AppCtx$isFcmSupported$lambda(this));
    this.serviceWorker_ghxie8$_0 = lazy(AppCtx$serviceWorker$lambda);
    this.keepAwakeVideo_4mtrra$_0 = lazy(AppCtx$keepAwakeVideo$lambda);
    this.keepAwakeCounter_0 = 0;
    this.networkType_we8u4r$_0 = lazy(AppCtx$networkType$lambda(this));
    this.networkEffectiveType_nd1mum$_0 = lazy(AppCtx$networkEffectiveType$lambda(this));
  }
  Object.defineProperty(AppCtx.prototype, 'visible', {
    get: function () {
      return this.visible_yu49lr$_0.value;
    }
  });
  Object.defineProperty(AppCtx.prototype, 'hasFocus', {
    get: function () {
      return this.hasFocus_ezs4tf$_0.value;
    }
  });
  Object.defineProperty(AppCtx.prototype, 'windowActive', {
    get: function () {
      return this.windowActive_xk4uuj$_0.value;
    }
  });
  Object.defineProperty(AppCtx.prototype, 'root', {
    get: function () {
      return this.root_mbqan$_0.value;
    }
  });
  AppCtx.prototype.hourglass = function () {
    this.root.setHourglass();
  };
  Object.defineProperty(AppCtx.prototype, 'isServiceWorkerSupported', {
    get: function () {
      return this.isServiceWorkerSupported_c1ctq4$_0.value;
    }
  });
  Object.defineProperty(AppCtx.prototype, 'isFcmSupported', {
    get: function () {
      return this.isFcmSupported_iuxhhj$_0.value;
    }
  });
  Object.defineProperty(AppCtx.prototype, 'serviceWorker', {
    get: function () {
      return this.serviceWorker_ghxie8$_0.value;
    }
  });
  AppCtx.prototype.registerServiceWorker = function () {
    if (this.isServiceWorkerSupported) {
      this.serviceWorker;
    }
  };
  Object.defineProperty(AppCtx.prototype, 'keepAwakeVideo_0', {
    get: function () {
      return this.keepAwakeVideo_4mtrra$_0.value;
    }
  });
  function AppCtx$keepAwake$lambda(this$AppCtx) {
    return function () {
      var tmp$;
      tmp$ = this$AppCtx.keepAwakeCounter_0;
      this$AppCtx.keepAwakeCounter_0 = tmp$ - 1 | 0;
      if (this$AppCtx.keepAwakeCounter_0 === 0) {
        this$AppCtx.keepAwakeVideo_0.pause();
      }
      return Unit;
    };
  }
  AppCtx.prototype.keepAwake = function () {
    if (this.keepAwakeCounter_0 === 0) {
      this.keepAwakeVideo_0.play();
    }
    this.keepAwakeCounter_0 = this.keepAwakeCounter_0 + 1 | 0;
    return AppCtx$keepAwake$lambda(this);
  };
  Object.defineProperty(AppCtx.prototype, 'networkType', {
    get: function () {
      return this.networkType_we8u4r$_0.value;
    }
  });
  Object.defineProperty(AppCtx.prototype, 'networkEffectiveType', {
    get: function () {
      return this.networkEffectiveType_nd1mum$_0.value;
    }
  });
  function AppCtx$visible$lambda$lambda(it) {
    return it;
  }
  var AppCtx$visible$lambda$hidden_metadata = new PropertyMetadata('hidden');
  function AppCtx$visible$lambda$lambda_0(it) {
    return it;
  }
  var AppCtx$visible$lambda$visible_metadata = new PropertyMetadata('visible');
  function AppCtx$visible$lambda$lambda_1(it) {
    return it;
  }
  var AppCtx$visible$lambda$visibilitychange_metadata = new PropertyMetadata('visibilitychange');
  function AppCtx$visible$lambda$lambda_2(it) {
    return it;
  }
  var AppCtx$visible$lambda$visibilityState_metadata = new PropertyMetadata('visibilityState');
  function AppCtx$visible$lambda$isVisible(closure$hidden, closure$visibilityState, closure$visible) {
    return function () {
      var dd = document;
      return dd[closure$hidden.getValue_lrcp0p$(null, AppCtx$visible$lambda$hidden_metadata)] == false || dd[closure$visibilityState.getValue_lrcp0p$(null, AppCtx$visible$lambda$visibilityState_metadata)] == closure$visible.getValue_lrcp0p$(null, AppCtx$visible$lambda$visible_metadata);
    };
  }
  function AppCtx$visible$lambda$lambda_3(closure$isVisible, closure$rxv) {
    return function (it) {
      closure$rxv.now = closure$isVisible();
      return Unit;
    };
  }
  function AppCtx$visible$lambda$lambda_4(closure$visibilitychange, closure$callback) {
    return function () {
      document.removeEventListener(closure$visibilitychange.getValue_lrcp0p$(null, AppCtx$visible$lambda$visibilitychange_metadata), closure$callback);
      return Unit;
    };
  }
  function AppCtx$visible$lambda(this$AppCtx) {
    return function () {
      var hidden = named(AppCtx$visible$lambda$lambda).provideDelegate_n5byny$(this, AppCtx$visible$lambda$hidden_metadata);
      var visible = named(AppCtx$visible$lambda$lambda_0).provideDelegate_n5byny$(this, AppCtx$visible$lambda$visible_metadata);
      var visibilitychange = named(AppCtx$visible$lambda$lambda_1).provideDelegate_n5byny$(this, AppCtx$visible$lambda$visibilitychange_metadata);
      var visibilityState = named(AppCtx$visible$lambda$lambda_2).provideDelegate_n5byny$(this, AppCtx$visible$lambda$visibilityState_metadata);
      var isVisible = AppCtx$visible$lambda$isVisible(hidden, visibilityState, visible);
      var rxv = new Var(isVisible());
      var callback = AppCtx$visible$lambda$lambda_3(isVisible, rxv);
      document.addEventListener(visibilitychange.getValue_lrcp0p$(null, AppCtx$visible$lambda$visibilitychange_metadata), callback);
      this$AppCtx.killables.plusAssign_o14v8n$(AppCtx$visible$lambda$lambda_4(visibilitychange, callback));
      return rxv;
    };
  }
  function AppCtx$hasFocus$lambda$lambda(closure$rxv) {
    return function (it) {
      closure$rxv.now = true;
      return Unit;
    };
  }
  function AppCtx$hasFocus$lambda$lambda_0(closure$rxv) {
    return function (it) {
      closure$rxv.now = false;
      return Unit;
    };
  }
  function AppCtx$hasFocus$lambda$lambda_1(closure$target, closure$focusEvent, closure$focusCallback, closure$blurEvent, closure$blurCallback) {
    return function () {
      closure$target.removeEventListener(closure$focusEvent, closure$focusCallback);
      closure$target.removeEventListener(closure$blurEvent, closure$blurCallback);
      return Unit;
    };
  }
  function AppCtx$hasFocus$lambda(this$AppCtx) {
    return function () {
      var rxv = new Var(document.hasFocus());
      var target = window;
      var focusEvent = 'focus';
      var blurEvent = 'blur';
      var focusCallback = AppCtx$hasFocus$lambda$lambda(rxv);
      var blurCallback = AppCtx$hasFocus$lambda$lambda_0(rxv);
      target.addEventListener(focusEvent, focusCallback);
      target.addEventListener(blurEvent, blurCallback);
      this$AppCtx.killables.plusAssign_o14v8n$(AppCtx$hasFocus$lambda$lambda_1(target, focusEvent, focusCallback, blurEvent, blurCallback));
      return rxv;
    };
  }
  function AppCtx$windowActive$lambda$lambda(this$AppCtx) {
    return function () {
      return this$AppCtx.visible.invoke() && this$AppCtx.hasFocus.invoke();
    };
  }
  function AppCtx$windowActive$lambda(this$AppCtx) {
    return function () {
      return Rx_init(AppCtx$windowActive$lambda$lambda(this$AppCtx));
    };
  }
  function AppCtx$root$lambda() {
    var $receiver = new RootPanel(ensureNotNull(document.body));
    $receiver.setHourglass();
    return $receiver;
  }
  function AppCtx$isServiceWorkerSupported$lambda() {
    var tmp$;
    return (Kotlin.isType(tmp$ = window.navigator.serviceWorker, Any) ? tmp$ : null) != null;
  }
  function AppCtx$isFcmSupported$lambda(this$AppCtx) {
    return function () {
      return this$AppCtx.isServiceWorkerSupported;
    };
  }
  function AppCtx$serviceWorker$lambda() {
    return window.navigator.serviceWorker.register(buildenv.serviceWorkerFileName);
  }
  function AppCtx$keepAwakeVideo$lambda$lambda($receiver) {
    $receiver.loop = true;
    base64(get_source($receiver), 'video/webm', 'GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA');
    base64(get_source($receiver), 'video/mp4', 'AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAG21kYXQAAAGzABAHAAABthADAowdbb9');
    return Unit;
  }
  function AppCtx$keepAwakeVideo$lambda() {
    return video(document, AppCtx$keepAwakeVideo$lambda$lambda);
  }
  function AppCtx$networkType$lambda$update(closure$connection, closure$rxv) {
    return function () {
      closure$rxv.now = closure$connection.type;
    };
  }
  function AppCtx$networkType$lambda$lambda(closure$update) {
    return function (it) {
      closure$update();
      return Unit;
    };
  }
  function AppCtx$networkType$lambda$lambda_0(closure$connection, closure$listener) {
    return function () {
      closure$connection.removeEventListener('change', closure$listener);
      return Unit;
    };
  }
  function Coroutine$AppCtx$networkType$lambda$lambda(closure$update_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$update = closure$update_0;
  }
  Coroutine$AppCtx$networkType$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AppCtx$networkType$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AppCtx$networkType$lambda$lambda.prototype.constructor = Coroutine$AppCtx$networkType$lambda$lambda;
  Coroutine$AppCtx$networkType$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$update(), Unit;
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
  function AppCtx$networkType$lambda$lambda_1(closure$update_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$AppCtx$networkType$lambda$lambda(closure$update_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function AppCtx$networkType$lambda(this$AppCtx) {
    return function () {
      var rxv = new Var('unknown');
      var connection = get_connection(window.navigator);
      var update = AppCtx$networkType$lambda$update(connection, rxv);
      var listener = AppCtx$networkType$lambda$lambda(update);
      connection.addEventListener('change', listener);
      this$AppCtx.killables.plusAssign_o14v8n$(AppCtx$networkType$lambda$lambda_0(connection, listener));
      launch(coroutines.GlobalScope, void 0, void 0, AppCtx$networkType$lambda$lambda_1(update));
      return rxv;
    };
  }
  function AppCtx$networkEffectiveType$lambda$update(closure$connection, closure$rxv) {
    return function () {
      closure$rxv.now = closure$connection.effectiveType;
    };
  }
  function AppCtx$networkEffectiveType$lambda$lambda(closure$update) {
    return function (it) {
      closure$update();
      return Unit;
    };
  }
  function AppCtx$networkEffectiveType$lambda$lambda_0(closure$connection, closure$listener) {
    return function () {
      closure$connection.removeEventListener('change', closure$listener);
      return Unit;
    };
  }
  function Coroutine$AppCtx$networkEffectiveType$lambda$lambda(closure$update_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$update = closure$update_0;
  }
  Coroutine$AppCtx$networkEffectiveType$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AppCtx$networkEffectiveType$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AppCtx$networkEffectiveType$lambda$lambda.prototype.constructor = Coroutine$AppCtx$networkEffectiveType$lambda$lambda;
  Coroutine$AppCtx$networkEffectiveType$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$update(), Unit;
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
  function AppCtx$networkEffectiveType$lambda$lambda_1(closure$update_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$AppCtx$networkEffectiveType$lambda$lambda(closure$update_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function AppCtx$networkEffectiveType$lambda(this$AppCtx) {
    return function () {
      var connection = get_connection(window.navigator);
      var rxv = new Var(connection.effectiveType);
      var update = AppCtx$networkEffectiveType$lambda$update(connection, rxv);
      var listener = AppCtx$networkEffectiveType$lambda$lambda(update);
      connection.addEventListener('change', listener);
      this$AppCtx.killables.plusAssign_o14v8n$(AppCtx$networkEffectiveType$lambda$lambda_0(connection, listener));
      launch(coroutines.GlobalScope, void 0, void 0, AppCtx$networkEffectiveType$lambda$lambda_1(update));
      return rxv;
    };
  }
  AppCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AppCtx',
    interfaces: []
  };
  function nextButton$lambda(closure$label) {
    return function ($receiver) {
      $receiver.innerText = closure$label;
      return Unit;
    };
  }
  function nextButton($receiver, label, fn) {
    return nextButton_0($receiver, nextButton$lambda(label), fn);
  }
  function webkitdirectorySupported$lambda() {
    return equals(typeof get_input(document).webkitdirectory, 'boolean');
  }
  var webkitdirectorySupported;
  function get_webkitdirectorySupported() {
    return webkitdirectorySupported.value;
  }
  function nextButton$lambda$lambda(closure$label) {
    return function ($receiver) {
      get_flexGrow1(get_cls($receiver));
      closure$label($receiver);
      return Unit;
    };
  }
  function nextButton$lambda_0(closure$label) {
    return function ($receiver) {
      flexRow($receiver);
      invoke(get_div($receiver), nextButton$lambda$lambda(closure$label));
      get_chevronRight(get_fa(get_cls($receiver)));
      return Unit;
    };
  }
  function nextButton_0($receiver, label, fn) {
    return listButton($receiver, fn, nextButton$lambda_0(label));
  }
  function get_hourglass$lambda$lambda($receiver) {
    get_spinnerBorder($receiver);
    return Unit;
  }
  function get_hourglass$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(get_hourglass$lambda$lambda);
    return Unit;
  }
  function get_hourglass($receiver) {
    return centerDiv($receiver, get_hourglass$lambda);
  }
  function showClosable$lambda(closure$back, closure$ks) {
    return function () {
      closure$back();
      closure$ks.kill();
      return Unit;
    };
  }
  function showClosable(killables, page, back) {
    var ks = killables.killables();
    page(ks, showClosable$lambda(back, ks));
  }
  function faButtonSpan$lambda($receiver) {
    return Unit;
  }
  function faButtonSpan$lambda_0($receiver) {
    get_p2($receiver);
    return Unit;
  }
  function faButtonSpan$lambda$lambda($receiver) {
    get_fw(get_fa($receiver));
    return Unit;
  }
  function faButtonSpan$lambda_1(closure$faIconClass, closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(faButtonSpan$lambda$lambda);
      if (closure$faIconClass != null) {
        var it = closure$faIconClass;
        get_classes($receiver).plusAssign_pdl1vj$(it);
      }
      closure$fn($receiver);
      return Unit;
    };
  }
  function faButtonSpan($receiver, faIconClass, fn) {
    if (faIconClass === void 0)
      faIconClass = null;
    if (fn === void 0)
      fn = faButtonSpan$lambda;
    get_cls($receiver).invoke_cr52h1$(faButtonSpan$lambda_0);
    return invoke(get_span($receiver), faButtonSpan$lambda_1(faIconClass, fn));
  }
  function faButton$lambda$lambda($receiver) {
    get_btn($receiver);
    return Unit;
  }
  function faButton$lambda(closure$faIconClass, closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(faButton$lambda$lambda);
      faButtonSpan($receiver, closure$faIconClass);
      closure$fn($receiver);
      return Unit;
    };
  }
  function faButton($receiver, faIconClass, fn) {
    return invoke(get_button($receiver), faButton$lambda(faIconClass, fn));
  }
  function mediaSessionSupported$lambda() {
    return 'mediaSession' in navigator;
  }
  var mediaSessionSupported;
  function get_mediaSessionSupported() {
    return mediaSessionSupported.value;
  }
  var get_mediaSession = defineInlineFunction('appsimake-commonui.mediasession.get_mediaSession_yi0el1$', function ($receiver) {
    return $receiver.mediaSession;
  });
  var get_none = defineInlineFunction('appsimake-commonui.mediasession.get_none_dhxii3$', function ($receiver) {
    return 'none';
  });
  var get_paused = defineInlineFunction('appsimake-commonui.mediasession.get_paused_dhxii3$', function ($receiver) {
    return 'paused';
  });
  var get_playing = defineInlineFunction('appsimake-commonui.mediasession.get_playing_dhxii3$', function ($receiver) {
    return 'playing';
  });
  function Coroutine$currentOrAsk($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
  }
  Coroutine$currentOrAsk.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$currentOrAsk.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$currentOrAsk.prototype.constructor = Coroutine$currentOrAsk;
  Coroutine$currentOrAsk.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var permission = Notification.permission;
            if (equals(permission, 'default')) {
              this.state_0 = 2;
              this.result_0 = await_0(Notification.requestPermission(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$ = permission;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            continue;
          case 3:
            return this.local$tmp$;
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
  function currentOrAsk($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$currentOrAsk($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$isGrantedOrAsk($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$isGrantedOrAsk.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$isGrantedOrAsk.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$isGrantedOrAsk.prototype.constructor = Coroutine$isGrantedOrAsk;
  Coroutine$isGrantedOrAsk.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = currentOrAsk(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return equals(this.result_0, 'granted');
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
  function isGrantedOrAsk($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$isGrantedOrAsk($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function isSupported($receiver) {
    return window.Notification != null;
  }
  function notDenied($receiver) {
    return !equals(Notification.permission, 'denied');
  }
  function notGranted($receiver) {
    return !equals(Notification.permission, 'granted');
  }
  function shouldRequest($receiver) {
    return isSupported($receiver) && notDenied($receiver) && notGranted($receiver);
  }
  function PageOut(node, kill, proc) {
    if (kill === void 0)
      kill = PageOut_init$lambda;
    if (proc === void 0)
      proc = procOrElse();
    this.node = node;
    this.kill = kill;
    this.proc = proc;
  }
  function PageOut_init$lambda() {
    return Unit;
  }
  PageOut.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageOut',
    interfaces: []
  };
  function PageIn(inbox, back) {
    this.inbox = inbox;
    this.back = back;
  }
  PageIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageIn',
    interfaces: []
  };
  function NodeSlot(node) {
    this.node = node;
  }
  NodeSlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeSlot',
    interfaces: []
  };
  function runNode$lambda(closure$current, closure$panel, closure$proc) {
    return function (po) {
      closure$current.v.kill();
      closure$current.v = po;
      closure$panel(closure$current.v.node);
      closure$proc(closure$current.v.proc);
      return Unit;
    };
  }
  function runNode(node, proc) {
    var panel = runPanel(node);
    var current = {v: new PageOut(node)};
    return runNode$lambda(current, panel, proc);
  }
  function bodyPage(proc) {
    return runNode(get_div(ensureNotNull(document.body)), proc);
  }
  function PageSlot(node, page) {
    this.node = node;
    this.page = page;
  }
  PageSlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageSlot',
    interfaces: []
  };
  function SubPages(add, proc, kill) {
    this.add = add;
    this.proc = proc;
    this.kill = kill;
  }
  SubPages.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubPages',
    interfaces: []
  };
  function with_1($receiver, page) {
    var tmp$, tmp$_0;
    tmp$ = page.node;
    tmp$_0 = with_3($receiver.proc, page.proc);
    return new PageOut(tmp$, with_0($receiver.kill, page.kill), tmp$_0);
  }
  function Orientation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Orientation_initFields() {
    Orientation_initFields = function () {
    };
    Orientation$Horizontal_instance = new Orientation('Horizontal', 0);
    Orientation$Vertical_instance = new Orientation('Vertical', 1);
  }
  var Orientation$Horizontal_instance;
  function Orientation$Horizontal_getInstance() {
    Orientation_initFields();
    return Orientation$Horizontal_instance;
  }
  var Orientation$Vertical_instance;
  function Orientation$Vertical_getInstance() {
    Orientation_initFields();
    return Orientation$Vertical_instance;
  }
  Orientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Orientation',
    interfaces: [Enum]
  };
  function Orientation$values() {
    return [Orientation$Horizontal_getInstance(), Orientation$Vertical_getInstance()];
  }
  Orientation.values = Orientation$values;
  function Orientation$valueOf(name) {
    switch (name) {
      case 'Horizontal':
        return Orientation$Horizontal_getInstance();
      case 'Vertical':
        return Orientation$Vertical_getInstance();
      default:throwISE('No enum constant commonui.Orientation.' + name);
    }
  }
  Orientation.valueOf_61zpoe$ = Orientation$valueOf;
  function Size(width, height) {
    this.width = width;
    this.height = height;
    this.orientation = this.width >= this.height ? Orientation$Horizontal_getInstance() : Orientation$Vertical_getInstance();
    this.ratio = this.height === 0 ? 1.0 : this.width / this.height;
  }
  Size.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Size',
    interfaces: []
  };
  Size.prototype.component1 = function () {
    return this.width;
  };
  Size.prototype.component2 = function () {
    return this.height;
  };
  Size.prototype.copy_vux9f0$ = function (width, height) {
    return new Size(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Size.prototype.toString = function () {
    return 'Size(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Size.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Size.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function aspectRatio$lambda$lambda($receiver) {
    get_dFlex($receiver);
    get_flexGrow1($receiver);
    return Unit;
  }
  function aspectRatio$lambda$lambda_0(this$, closure$size) {
    return function () {
      closure$size.now = new Size(this$.offsetWidth, this$.offsetHeight);
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda_1(closure$size) {
    return function () {
      return closure$size.invoke().ratio;
    };
  }
  function aspectRatio$lambda$lambda_2(closure$tableRatio, closure$ratio) {
    return function () {
      return closure$tableRatio >= closure$ratio.invoke() ? Orientation$Vertical_getInstance() : Orientation$Horizontal_getInstance();
    };
  }
  function aspectRatio$lambda$lambda_3(closure$ratio, closure$tableRatio) {
    return function () {
      var tmp$;
      var containerRatio = closure$ratio.invoke();
      if (closure$tableRatio >= containerRatio) {
        tmp$ = containerRatio / closure$tableRatio;
      }
       else {
        tmp$ = closure$tableRatio / containerRatio;
      }
      var tablePerContainer = tmp$;
      var allSpacingPerContainer = 1.0 - tablePerContainer;
      var allSpacingPerTable = allSpacingPerContainer / tablePerContainer;
      var halfSpacingPerTable = allSpacingPerTable / 2.0;
      return halfSpacingPerTable;
    };
  }
  function aspectRatio$lambda$lambda_4(closure$flexOrientation) {
    return function () {
      switch (closure$flexOrientation.invoke().name) {
        case 'Vertical':
          return 'flex-column';
        case 'Horizontal':
          return 'flex-row';
        default:return Kotlin.noWhenBranchMatched();
      }
    };
  }
  function aspectRatio$lambda$lambda$lambda(this$) {
    return function (it) {
      this$.style.flexGrow = it.toString();
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda_5(closure$spacingGrow) {
    return function ($receiver) {
      get_flexBasis0(get_cls($receiver));
      closure$spacingGrow.forEach_qlkmfe$(aspectRatio$lambda$lambda$lambda($receiver));
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda$lambda_0($receiver) {
    get_flexBasis0($receiver);
    get_flexGrow1($receiver);
    return Unit;
  }
  function aspectRatio$lambda$lambda$lambda$lambda(closure$fn) {
    return function ($receiver) {
      get_flexGrow1(get_cls($receiver));
      $receiver.style.position = 'relative';
      closure$fn($receiver);
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda$lambda_1(closure$fn) {
    return function ($receiver) {
      get_flexGrow1(get_cls($receiver));
      invoke(get_div($receiver), aspectRatio$lambda$lambda$lambda$lambda(closure$fn));
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda_6(closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(aspectRatio$lambda$lambda$lambda_0);
      column($receiver, aspectRatio$lambda$lambda$lambda_1(closure$fn));
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda$lambda_2(this$) {
    return function (it) {
      this$.style.flexGrow = it.toString();
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda_7(closure$spacingGrow) {
    return function ($receiver) {
      get_flexBasis0(get_cls($receiver));
      closure$spacingGrow.forEach_qlkmfe$(aspectRatio$lambda$lambda$lambda_2($receiver));
      return Unit;
    };
  }
  function aspectRatio$lambda(closure$killables, closure$tableRatio, closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(aspectRatio$lambda$lambda);
      var size = new Var(new Size($receiver.offsetWidth, $receiver.offsetHeight));
      closure$killables.plusAssign_o14v8n$(resizeEvent(window, aspectRatio$lambda$lambda_0($receiver, size)));
      var ratio = Rx_init(aspectRatio$lambda$lambda_1(size));
      var flexOrientation = Rx_init(aspectRatio$lambda$lambda_2(closure$tableRatio, ratio));
      var spacingGrow = Rx_init(aspectRatio$lambda$lambda_3(ratio, closure$tableRatio));
      rxClass($receiver, Rx_init(aspectRatio$lambda$lambda_4(flexOrientation)));
      invoke(get_div($receiver), aspectRatio$lambda$lambda_5(spacingGrow));
      column($receiver, aspectRatio$lambda$lambda_6(closure$fn));
      invoke(get_div($receiver), aspectRatio$lambda$lambda_7(spacingGrow));
      return Unit;
    };
  }
  function aspectRatio($receiver, killables, tableRatio, fn) {
    if (tableRatio === void 0)
      tableRatio = 1.0;
    return invoke(get_div($receiver), aspectRatio$lambda(killables, tableRatio, fn));
  }
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function RootPanel(container, currentRoot) {
    if (currentRoot === void 0)
      currentRoot = KillableSeq_init();
    this.container_8be2vx$ = container;
    this.currentRoot_0 = currentRoot;
    this.subs_0 = emptyList();
    this.killed_0 = false;
  }
  RootPanel.prototype.killSubs_0 = function () {
    var s = this.subs_0;
    this.subs_0 = emptyList();
    var tmp$;
    tmp$ = s.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.kill();
    }
  };
  RootPanel.prototype.kill = function () {
    if (!this.killed_0) {
      this.killed_0 = true;
      this.killSubs_0();
    }
  };
  function RootPanel$setRoot$lambda(closure$node) {
    return function () {
      removeFromParent(closure$node);
      return Unit;
    };
  }
  RootPanel.prototype.setRoot_b3w3xb$ = function (node) {
    if (!this.killed_0) {
      this.killSubs_0();
      this.currentRoot_0.set_o14v8n$(RootPanel$setRoot$lambda(node));
      this.container_8be2vx$.appendChild(node);
    }
  };
  function RootPanel$newRoot$lambda($receiver) {
    return Unit;
  }
  function RootPanel$newRoot$lambda_0(this$RootPanel, closure$fn) {
    return function ($receiver) {
      this$RootPanel.setRoot_b3w3xb$($receiver);
      get_flexGrow1(get_cls($receiver));
      closure$fn($receiver);
      return Unit;
    };
  }
  RootPanel.prototype.newRoot_iw61es$ = function (fn) {
    if (fn === void 0)
      fn = RootPanel$newRoot$lambda;
    return column(document, RootPanel$newRoot$lambda_0(this, fn));
  };
  RootPanel.prototype.setHourglass = function () {
    var $receiver = get_hourglass(document);
    getCallableRef('setRoot', function ($receiver, node) {
      return $receiver.setRoot_b3w3xb$(node), Unit;
    }.bind(null, this))($receiver);
    return $receiver;
  };
  RootPanel.prototype.sub = function () {
    var s = new RootPanel(this.container_8be2vx$, this.currentRoot_0);
    if (this.killed_0) {
      s.kill();
    }
     else {
      this.subs_0 = plus(this.subs_0, s);
    }
    return s;
  };
  RootPanel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootPanel',
    interfaces: [Killable]
  };
  function rxPanel$lambda(closure$rxv, closure$map, closure$fn) {
    return function () {
      var $receiver = closure$rxv.invoke();
      var closure$map_0 = closure$map;
      var closure$fn_0 = closure$fn;
      var tmp$;
      var value = closure$map_0.get_11rb$($receiver);
      if (value == null) {
        var answer = closure$fn_0($receiver);
        closure$map_0.put_xwzc9p$($receiver, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      return tmp$;
    };
  }
  function rxPanel$lambda_0(closure$root) {
    return function (it) {
      closure$root.setRoot_b3w3xb$(it);
      return Unit;
    };
  }
  function rxPanel$lambda_1(closure$node) {
    return function () {
      closure$node.kill();
      return Unit;
    };
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function rxPanel($receiver, rxv, fn) {
    var map = LinkedHashMap_init();
    var node = Rx_init(rxPanel$lambda(rxv, map, fn));
    var root = new RootPanel($receiver);
    node.forEach_qlkmfe$(rxPanel$lambda_0(root));
    return rxPanel$lambda_1(node);
  }
  function first$lambda(closure$trigger, this$first) {
    return function (t) {
      closure$trigger();
      this$first(t);
      return Unit;
    };
  }
  function first($receiver, trigger) {
    return first$lambda(trigger, $receiver);
  }
  function runPanel$lambda(old, new_0) {
    replaceWith(old, new_0);
    return Unit;
  }
  function runPanel$lambda_0(closure$rxv) {
    return function (n) {
      closure$rxv.now = n;
      return Unit;
    };
  }
  function runPanel(node) {
    if (node === void 0) {
      setupFullScreen();
      node = get_div(ensureNotNull(document.body));
    }
    var rxv = new Var(node);
    rxv.onChange_nrmh93$(runPanel$lambda);
    return runPanel$lambda_0(rxv);
  }
  function Coroutine$proc$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$proc$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$proc$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$proc$lambda.prototype.constructor = Coroutine$proc$lambda;
  Coroutine$proc$lambda.prototype.doResume = function () {
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
  function proc$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$proc$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function proc() {
    return proc$lambda;
  }
  function Coroutine$procOrElse$lambda(e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$procOrElse$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$procOrElse$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$procOrElse$lambda.prototype.constructor = Coroutine$procOrElse$lambda;
  Coroutine$procOrElse$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$els(this.local$e, this);
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
  function procOrElse$lambda(e_0, els_0, continuation_0, suspended) {
    var instance = new Coroutine$procOrElse$lambda(e_0, els_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function procOrElse() {
    return procOrElse$lambda;
  }
  function Coroutine$procOrElse$lambda_0(closure$fn_0, closure$msg_0, e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$msg = closure$msg_0;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$procOrElse$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$procOrElse$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$procOrElse$lambda_0.prototype.constructor = Coroutine$procOrElse$lambda_0;
  Coroutine$procOrElse$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (equals(this.local$e, this.local$closure$msg)) {
              this.state_0 = 3;
              this.result_0 = this.local$closure$fn(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$els(this.local$e, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            return Unit;
          case 4:
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
  function procOrElse$lambda_0(closure$fn_0, closure$msg_0) {
    return function (e_0, els_0, continuation_0, suspended) {
      var instance = new Coroutine$procOrElse$lambda_0(closure$fn_0, closure$msg_0, e_0, els_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function procOrElse_0(msg, fn) {
    return procOrElse$lambda_0(fn, msg);
  }
  function Coroutine$with$lambda(this$with_0, closure$proc_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$with = this$with_0;
    this.local$closure$proc = closure$proc_0;
    this.local$e = e_0;
  }
  Coroutine$with$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$with$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$with$lambda.prototype.constructor = Coroutine$with$lambda;
  Coroutine$with$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$with(this.local$e, this.local$closure$proc, this);
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
  function with$lambda(this$with_0, closure$proc_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$with$lambda(this$with_0, closure$proc_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function with_2($receiver, proc) {
    return with$lambda($receiver, proc);
  }
  function Coroutine$with$lambda$lambda(closure$procOrElse_0, closure$els_0, e2_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$procOrElse = closure$procOrElse_0;
    this.local$closure$els = closure$els_0;
    this.local$e2 = e2_0;
  }
  Coroutine$with$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$with$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$with$lambda$lambda.prototype.constructor = Coroutine$with$lambda$lambda;
  Coroutine$with$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$procOrElse(this.local$e2, this.local$closure$els, this);
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
  function with$lambda$lambda(closure$procOrElse_0, closure$els_0) {
    return function (e2_0, continuation_0, suspended) {
      var instance = new Coroutine$with$lambda$lambda(closure$procOrElse_0, closure$els_0, e2_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$with$lambda_0(this$with_0, closure$procOrElse_0, e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$with = this$with_0;
    this.local$closure$procOrElse = closure$procOrElse_0;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$with$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$with$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$with$lambda_0.prototype.constructor = Coroutine$with$lambda_0;
  Coroutine$with$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$with(this.local$e, with$lambda$lambda(this.local$closure$procOrElse, this.local$els), this);
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
  function with$lambda_0(this$with_0, closure$procOrElse_0) {
    return function (e_0, els_0, continuation_0, suspended) {
      var instance = new Coroutine$with$lambda_0(this$with_0, closure$procOrElse_0, e_0, els_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function with_3($receiver, procOrElse) {
    return with$lambda_0($receiver, procOrElse);
  }
  function toSetProcOrElse$lambda(this$toSetProcOrElse, closure$default) {
    return function (p) {
      this$toSetProcOrElse(with_2(p, closure$default));
      return Unit;
    };
  }
  function toSetProcOrElse($receiver, default_0) {
    if (default_0 === void 0)
      default_0 = proc();
    return toSetProcOrElse$lambda($receiver, default_0);
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function ProcOrElseList() {
    this.procs_0 = ArrayList_init();
    this.proc = ProcOrElseList$proc$lambda(this);
    this.add = ProcOrElseList$add$lambda(this);
  }
  function Coroutine$ProcOrElseList$next$lambda(closure$iter_0, closure$e_0, closure$els_0, this$ProcOrElseList_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$iter = closure$iter_0;
    this.local$closure$e = closure$e_0;
    this.local$closure$els = closure$els_0;
    this.local$this$ProcOrElseList = this$ProcOrElseList_0;
  }
  Coroutine$ProcOrElseList$next$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ProcOrElseList$next$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ProcOrElseList$next$lambda.prototype.constructor = Coroutine$ProcOrElseList$next$lambda;
  Coroutine$ProcOrElseList$next$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ProcOrElseList.next_0(this.local$closure$iter, this.local$closure$e, this.local$closure$els, this);
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
  function ProcOrElseList$next$lambda(closure$iter_0, closure$e_0, closure$els_0, this$ProcOrElseList_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ProcOrElseList$next$lambda(closure$iter_0, closure$e_0, closure$els_0, this$ProcOrElseList_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$next_0($this, iter_0, e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$iter = iter_0;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$next_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$next_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$next_0.prototype.constructor = Coroutine$next_0;
  Coroutine$next_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$iter.hasNext()) {
              var n = this.local$iter.next();
              this.state_0 = 3;
              this.result_0 = n(this.local$e, ProcOrElseList$next$lambda(this.local$iter, this.local$e, this.local$els, this.$this), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$els(this.local$e, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 4;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
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
  ProcOrElseList.prototype.next_0 = function (iter_0, e_0, els_0, continuation_0, suspended) {
    var instance = new Coroutine$next_0(this, iter_0, e_0, els_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ProcOrElseList.prototype.plusAssign_bmtija$ = function (proc) {
    this.add(proc);
  };
  function Coroutine$ProcOrElseList$proc$lambda(this$ProcOrElseList_0, e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ProcOrElseList = this$ProcOrElseList_0;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$ProcOrElseList$proc$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ProcOrElseList$proc$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ProcOrElseList$proc$lambda.prototype.constructor = Coroutine$ProcOrElseList$proc$lambda;
  Coroutine$ProcOrElseList$proc$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var it = this.local$this$ProcOrElseList.procs_0.iterator();
            this.state_0 = 2;
            this.result_0 = this.local$this$ProcOrElseList.next_0(it, this.local$e, this.local$els, this);
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
  function ProcOrElseList$proc$lambda(this$ProcOrElseList_0) {
    return function (e_0, els_0, continuation_0, suspended) {
      var instance = new Coroutine$ProcOrElseList$proc$lambda(this$ProcOrElseList_0, e_0, els_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ProcOrElseList$add$lambda$lambda(this$ProcOrElseList, closure$proc) {
    return function () {
      var $receiver = this$ProcOrElseList.procs_0;
      var element = closure$proc;
      $receiver.remove_11rb$(element);
      return Unit;
    };
  }
  function ProcOrElseList$add$lambda(this$ProcOrElseList) {
    return function (proc) {
      this$ProcOrElseList.procs_0.add_11rb$(proc);
      return ProcOrElseList$add$lambda$lambda(this$ProcOrElseList, proc);
    };
  }
  ProcOrElseList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProcOrElseList',
    interfaces: []
  };
  function process($receiver, msg, fn) {
    return $receiver(procOrElse_0(msg, fn));
  }
  function Back() {
    Back_instance = this;
  }
  Back.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Back',
    interfaces: []
  };
  var Back_instance = null;
  function Back_getInstance() {
    if (Back_instance === null) {
      new Back();
    }
    return Back_instance;
  }
  function back(fn) {
    return procOrElse_0(Back_getInstance(), fn);
  }
  function LoopControl(proc, inbox) {
    this.proc = proc;
    this.inbox = inbox;
  }
  LoopControl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoopControl',
    interfaces: []
  };
  function plusAssign_0($receiver, msg) {
    $receiver.offer_11rb$(msg);
  }
  function ProcVar(proc) {
    if (proc === void 0)
      proc = ProcVar_init$lambda;
    this.proc = proc;
    this.setter = ProcVar$setter$lambda(this);
  }
  function Coroutine$ProcVar_init$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$ProcVar_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ProcVar_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ProcVar_init$lambda.prototype.constructor = Coroutine$ProcVar_init$lambda;
  Coroutine$ProcVar_init$lambda.prototype.doResume = function () {
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
  function ProcVar_init$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$ProcVar_init$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function ProcVar$setter$lambda(this$ProcVar) {
    return function (p) {
      this$ProcVar.proc = p;
      return Unit;
    };
  }
  ProcVar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProcVar',
    interfaces: []
  };
  function Coroutine$runLoop$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$runLoop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runLoop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runLoop$lambda.prototype.constructor = Coroutine$runLoop$lambda;
  Coroutine$runLoop$lambda.prototype.doResume = function () {
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
  function runLoop$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$runLoop$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$runLoop$lambda_0(closure$procVar_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$procVar = closure$procVar_0;
    this.local$e = e_0;
  }
  Coroutine$runLoop$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runLoop$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runLoop$lambda_0.prototype.constructor = Coroutine$runLoop$lambda_0;
  Coroutine$runLoop$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$procVar.proc(this.local$e, this);
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
  function runLoop$lambda_0(closure$procVar_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$runLoop$lambda_0(closure$procVar_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function runLoop(initial) {
    if (initial === void 0)
      initial = runLoop$lambda;
    var channel = Channel(2147483647);
    var procVar = new ProcVar(initial);
    runLoop_0(channel, runLoop$lambda_0(procVar));
    return new LoopControl(procVar.setter, channel);
  }
  function Coroutine$runLoop$lambda_1(closure$channel_0, closure$proc_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$proc = closure$proc_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$runLoop$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runLoop$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runLoop$lambda_1.prototype.constructor = Coroutine$runLoop$lambda_1;
  Coroutine$runLoop$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$channel.iterator();
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
            this.state_0 = 6;
            this.result_0 = this.local$closure$proc(e_0, this);
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
  function runLoop$lambda_1(closure$channel_0, closure$proc_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$runLoop$lambda_1(closure$channel_0, closure$proc_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function runLoop_0(channel, proc) {
    launch(coroutines.GlobalScope, void 0, void 0, runLoop$lambda_1(channel, proc));
  }
  function hourglass$lambda$lambda($receiver) {
    get_flexGrow1($receiver);
    flexCenter($receiver);
    return Unit;
  }
  function hourglass$lambda$lambda$lambda($receiver) {
    get_spinnerBorder($receiver);
    return Unit;
  }
  function hourglass$lambda$lambda_0($receiver) {
    get_cls($receiver).invoke_cr52h1$(hourglass$lambda$lambda$lambda);
    return Unit;
  }
  function hourglass$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(hourglass$lambda$lambda);
    invoke(get_div($receiver), hourglass$lambda$lambda_0);
    return Unit;
  }
  function hourglass($receiver) {
    $receiver(invoke(get_div(document), hourglass$lambda));
  }
  function Coroutine$remAssign($receiver_0, v_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$v = v_0;
  }
  Coroutine$remAssign.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$remAssign.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$remAssign.prototype.constructor = Coroutine$remAssign;
  Coroutine$remAssign.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver(this.local$v, this);
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
  function remAssign($receiver_0, v_0, continuation_0, suspended) {
    var instance = new Coroutine$remAssign($receiver_0, v_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function asyncKills$State(value, kill) {
    this.value = value;
    this.kill = kill;
  }
  asyncKills$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function toTrigger$lambda(this$toTrigger) {
    return function () {
      this$toTrigger.kill();
      return Unit;
    };
  }
  function Coroutine$asyncKills$state(closure$ks_0, closure$fn_0, v_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$ks = closure$ks_0;
    this.local$closure$fn = closure$fn_0;
    this.local$vks = void 0;
    this.local$v = v_0;
  }
  Coroutine$asyncKills$state.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$asyncKills$state.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$asyncKills$state.prototype.constructor = Coroutine$asyncKills$state;
  Coroutine$asyncKills$state.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$vks = killables(this.local$closure$ks);
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$vks.plusAssign_o14v8n$(this.result_0);
            return new asyncKills$State(this.local$v, toTrigger$lambda(this.local$vks));
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
  function asyncKills$state(closure$ks_0, closure$fn_0) {
    return function (v_0, continuation_0, suspended) {
      var instance = new Coroutine$asyncKills$state(closure$ks_0, closure$fn_0, v_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$asyncKills$lambda(closure$current_0, closure$state_0, v_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$current = closure$current_0;
    this.local$closure$state = closure$state_0;
    this.local$v = v_0;
  }
  Coroutine$asyncKills$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$asyncKills$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$asyncKills$lambda.prototype.constructor = Coroutine$asyncKills$lambda;
  Coroutine$asyncKills$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!equals(this.local$v, this.local$closure$current.v.value)) {
              this.local$closure$current.v.kill();
              this.state_0 = 2;
              this.result_0 = this.local$closure$state(this.local$v, this);
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
            return this.local$closure$current.v = this.result_0, Unit;
          case 3:
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
  function asyncKills$lambda(closure$current_0, closure$state_0) {
    return function (v_0, continuation_0, suspended) {
      var instance = new Coroutine$asyncKills$lambda(closure$current_0, closure$state_0, v_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$asyncKills(ks_0, initial_0, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$state = void 0;
    this.local$ks = ks_0;
    this.local$initial = initial_0;
    this.local$fn = fn_0;
  }
  Coroutine$asyncKills.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$asyncKills.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$asyncKills.prototype.constructor = Coroutine$asyncKills;
  Coroutine$asyncKills.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$state = asyncKills$state(this.local$ks, this.local$fn);
            this.state_0 = 2;
            this.result_0 = this.local$state(this.local$initial, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var current = {v: this.result_0};
            return asyncKills$lambda(current, this.local$state);
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
  function asyncKills(ks_0, initial_0, fn_0, continuation_0, suspended) {
    var instance = new Coroutine$asyncKills(ks_0, initial_0, fn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function ProcOrElseVar(proc, assign) {
    ProcOrElseVar$Companion_getInstance();
    this.proc = proc;
    this.assign = assign;
  }
  function ProcOrElseVar$Companion() {
    ProcOrElseVar$Companion_instance = this;
  }
  function Coroutine$ProcOrElseVar$Companion$invoke$lambda(closure$proc_0, e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$proc = closure$proc_0;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$ProcOrElseVar$Companion$invoke$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ProcOrElseVar$Companion$invoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ProcOrElseVar$Companion$invoke$lambda.prototype.constructor = Coroutine$ProcOrElseVar$Companion$invoke$lambda;
  Coroutine$ProcOrElseVar$Companion$invoke$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$proc.v(this.local$e, this.local$els, this);
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
  function ProcOrElseVar$Companion$invoke$lambda(closure$proc_0) {
    return function (e_0, els_0, continuation_0, suspended) {
      var instance = new Coroutine$ProcOrElseVar$Companion$invoke$lambda(closure$proc_0, e_0, els_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ProcOrElseVar$Companion$invoke$lambda_0(closure$proc) {
    return function (p) {
      closure$proc.v = p;
      return Unit;
    };
  }
  ProcOrElseVar$Companion.prototype.invoke_bmtija$ = function (initial) {
    if (initial === void 0)
      initial = procOrElse();
    var proc = {v: initial};
    return new ProcOrElseVar(ProcOrElseVar$Companion$invoke$lambda(proc), ProcOrElseVar$Companion$invoke$lambda_0(proc));
  };
  ProcOrElseVar$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ProcOrElseVar$Companion_instance = null;
  function ProcOrElseVar$Companion_getInstance() {
    if (ProcOrElseVar$Companion_instance === null) {
      new ProcOrElseVar$Companion();
    }
    return ProcOrElseVar$Companion_instance;
  }
  ProcOrElseVar.prototype.remAssign_bmtija$ = function (proc) {
    this.assign(proc);
  };
  ProcOrElseVar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProcOrElseVar',
    interfaces: []
  };
  function procVar() {
    return ProcOrElseVar$Companion_getInstance().invoke_bmtija$();
  }
  function procOrElses() {
    return new ProcOrElseList();
  }
  function assignedTo($receiver, pvar) {
    pvar($receiver.proc);
    return $receiver;
  }
  function assignedTo_0($receiver, pvar) {
    pvar.remAssign_bmtija$($receiver.proc);
    return $receiver;
  }
  function addedTo_1($receiver, pset) {
    pset.plusAssign_bmtija$($receiver.proc);
    return $receiver;
  }
  function addedTo_2($receiver, pset) {
    plusAssign(pset, $receiver.proc);
    return $receiver;
  }
  function addProcAssign($receiver) {
    return addedTo_2(procVar(), $receiver).assign;
  }
  function addProcAssign_0($receiver) {
    return addProcAssign($receiver.add);
  }
  function assignProcAdd($receiver) {
    return assignedTo(procOrElses(), $receiver).add;
  }
  function rxProc$lambda(closure$fn) {
    return function () {
      return closure$fn();
    };
  }
  function Coroutine$rxProc$lambda(closure$rxv_0, e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$rxv = closure$rxv_0;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$rxProc$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$rxProc$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$rxProc$lambda.prototype.constructor = Coroutine$rxProc$lambda;
  Coroutine$rxProc$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$rxv.now(this.local$e, this.local$els, this);
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
  function rxProc$lambda_0(closure$rxv_0) {
    return function (e_0, els_0, continuation_0, suspended) {
      var instance = new Coroutine$rxProc$lambda(closure$rxv_0, e_0, els_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function rxProc(ks, fn) {
    var rxv = addedTo(Rx_init(rxProc$lambda(fn)), ks);
    return rxProc$lambda_0(rxv);
  }
  function rxProcIf$lambda(closure$rxv, closure$fn) {
    return function () {
      var $receiver = closure$rxv.invoke();
      var closure$fn_0 = closure$fn;
      var block$result;
      if ($receiver == null) {
        block$result = procOrElse();
      }
       else {
        block$result = closure$fn_0($receiver);
      }
      return block$result;
    };
  }
  function rxProcIf(ks, rxv, fn) {
    return rxProc(ks, rxProcIf$lambda(rxv, fn));
  }
  function AsyncHolder(initial) {
    if (initial === void 0)
      initial = common.None;
    this.opt_8be2vx$ = initial;
  }
  Object.defineProperty(AsyncHolder.prototype, 'value', {
    get: function () {
      return this.opt_8be2vx$.get();
    }
  });
  AsyncHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsyncHolder',
    interfaces: []
  };
  function AsyncHolder_init(initial, $this) {
    $this = $this || Object.create(AsyncHolder.prototype);
    AsyncHolder.call($this, new Some(initial));
    return $this;
  }
  function Coroutine$async$lambda(closure$fn_0, closure$msg_0, this$async_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$msg = closure$msg_0;
    this.local$this$async = this$async_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$async$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$async$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$async$lambda.prototype.constructor = Coroutine$async$lambda;
  Coroutine$async$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$msg;
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$.opt_8be2vx$ = new Some(this.result_0);
            return plusAssign_0(this.local$this$async, this.local$closure$msg), Unit;
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
  function async$lambda(closure$fn_0, closure$msg_0, this$async_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$async$lambda(closure$fn_0, closure$msg_0, this$async_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function async($receiver, ks, fn) {
    var msg = new AsyncHolder();
    addedTo_0(launch(coroutines.GlobalScope, void 0, void 0, async$lambda(fn, msg, $receiver)), ks);
    return msg;
  }
  function Coroutine$processedBy$lambda(closure$fn_0, this$processedBy_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$this$processedBy = this$processedBy_0;
  }
  Coroutine$processedBy$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$processedBy$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$processedBy$lambda.prototype.constructor = Coroutine$processedBy$lambda;
  Coroutine$processedBy$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$this$processedBy.value, this);
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
  function processedBy$lambda(closure$fn_0, this$processedBy_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$processedBy$lambda(closure$fn_0, this$processedBy_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function processedBy($receiver, fn) {
    return procOrElse_0($receiver, processedBy$lambda(fn, $receiver));
  }
  function Coroutine$channel$lambda$lambda(closure$fn_0, closure$tks_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$tks = closure$tks_0;
    this.local$it = it_0;
  }
  Coroutine$channel$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$channel$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$channel$lambda$lambda.prototype.constructor = Coroutine$channel$lambda$lambda;
  Coroutine$channel$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$tks.kill(), Unit;
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
  function channel$lambda$lambda(closure$fn_0, closure$tks_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$channel$lambda$lambda(closure$fn_0, closure$tks_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$channel$lambda(closure$ch_0, closure$ks_0, closure$procs_0, this$channel_0, closure$fn_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$ch = closure$ch_0;
    this.local$closure$ks = closure$ks_0;
    this.local$closure$procs = closure$procs_0;
    this.local$this$channel = this$channel_0;
    this.local$closure$fn = closure$fn_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$channel$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$channel$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$channel$lambda.prototype.constructor = Coroutine$channel$lambda;
  Coroutine$channel$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$ch.iterator();
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
            var t = this.result_0;
            var tks = killables(this.local$closure$ks);
            var tmp$ = this.local$closure$procs;
            var tmp$_0 = tmp$.add;
            var $receiver = AsyncHolder_init(t);
            plusAssign_0(this.local$this$channel, $receiver);
            tks.plusAssign_o14v8n$(tmp$_0.call(tmp$, processedBy($receiver, channel$lambda$lambda(this.local$closure$fn, tks))));
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
  function channel$lambda(closure$ch_0, closure$ks_0, closure$procs_0, this$channel_0, closure$fn_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$channel$lambda(closure$ch_0, closure$ks_0, closure$procs_0, this$channel_0, closure$fn_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function channel($receiver, ks, ch, fn) {
    var procs = new ProcOrElseList();
    launch(coroutines.GlobalScope, void 0, void 0, channel$lambda(ch, ks, procs, $receiver, fn));
    return procs.proc;
  }
  var SlotsAttribute;
  function get_slots($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver[SlotsAttribute]) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver_0 = new Slots($receiver);
      $receiver[SlotsAttribute] = $receiver_0;
      tmp$_0 = $receiver_0;
    }
    return tmp$_0;
  }
  function Slots(node) {
    this.node_0 = node;
    this.list_0 = ArrayList_init();
  }
  Slots.prototype.invoke_4sesq9$ = function (fn) {
    fn(this);
    return this;
  };
  function Slots$SlotItem($outer, prev) {
    this.$outer = $outer;
    this.current = null;
    this.setter = Slots$SlotItem$setter$lambda(this, this.$outer);
    var tmp$;
    if (equals(prev, Slots$Ref$First_getInstance()))
      tmp$ = Slots$SlotItem$prevNode$lambda;
    else if (Kotlin.isType(prev, Slots$Ref$NodeRef))
      tmp$ = Slots$SlotItem$prevNode$lambda_0(prev);
    else if (Kotlin.isType(prev, Slots$Ref$SlotRef))
      tmp$ = Slots$SlotItem$prevNode$lambda_1(prev);
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    this.prevNode = tmp$;
  }
  Slots$SlotItem.prototype.ref = function () {
    var tmp$;
    var lc = this.$outer.node_0.lastChild;
    if (lc == null || equals(lc, this.prevNode()))
      tmp$ = new Slots$Ref$SlotRef(this);
    else
      tmp$ = new Slots$Ref$NodeRef(lc);
    return tmp$;
  };
  function Slots$SlotItem$setter$lambda(this$SlotItem, this$Slots) {
    return function (n) {
      var curr = this$SlotItem.current;
      if (!equals(curr, n))
        if (curr == null && n != null)
          insertAfter(this$Slots.node_0, n, this$SlotItem.prevNode());
        else if (curr != null && n == null)
          removeFromParent(curr);
        else if (curr != null && n != null)
          replaceWith(curr, n);
      this$SlotItem.current = n;
      return Unit;
    };
  }
  function Slots$SlotItem$prevNode$lambda() {
    return null;
  }
  function Slots$SlotItem$prevNode$lambda_0(closure$prev) {
    return function () {
      return closure$prev.node;
    };
  }
  function Slots$SlotItem$prevNode$lambda_1(closure$prev) {
    return function () {
      var tmp$;
      return (tmp$ = closure$prev.item.current) != null ? tmp$ : closure$prev.item.prevNode();
    };
  }
  Slots$SlotItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotItem',
    interfaces: []
  };
  Slots.prototype.ref_0 = function () {
    var tmp$;
    if (!this.list_0.isEmpty()) {
      tmp$ = last(this.list_0).ref();
    }
     else {
      tmp$ = Slots$Ref$Companion_getInstance().of_asww5c$(this.node_0.lastChild);
    }
    return tmp$;
  };
  function Slots$Ref() {
    Slots$Ref$Companion_getInstance();
  }
  function Slots$Ref$First() {
    Slots$Ref$First_instance = this;
    Slots$Ref.call(this);
  }
  Slots$Ref$First.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'First',
    interfaces: [Slots$Ref]
  };
  var Slots$Ref$First_instance = null;
  function Slots$Ref$First_getInstance() {
    if (Slots$Ref$First_instance === null) {
      new Slots$Ref$First();
    }
    return Slots$Ref$First_instance;
  }
  function Slots$Ref$NodeRef(node) {
    Slots$Ref.call(this);
    this.node = node;
  }
  Slots$Ref$NodeRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeRef',
    interfaces: [Slots$Ref]
  };
  function Slots$Ref$SlotRef(item) {
    Slots$Ref.call(this);
    this.item = item;
  }
  Slots$Ref$SlotRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotRef',
    interfaces: [Slots$Ref]
  };
  function Slots$Ref$Companion() {
    Slots$Ref$Companion_instance = this;
  }
  Slots$Ref$Companion.prototype.of_asww5c$ = function (node) {
    var tmp$;
    return (tmp$ = node != null ? new Slots$Ref$NodeRef(node) : null) != null ? tmp$ : Slots$Ref$First_getInstance();
  };
  Slots$Ref$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Slots$Ref$Companion_instance = null;
  function Slots$Ref$Companion_getInstance() {
    if (Slots$Ref$Companion_instance === null) {
      new Slots$Ref$Companion();
    }
    return Slots$Ref$Companion_instance;
  }
  Slots$Ref.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ref',
    interfaces: []
  };
  Object.defineProperty(Slots.prototype, 'slot', {
    get: function () {
      var $receiver = new Slots$SlotItem(this, this.ref_0());
      this.list_0.add_11rb$($receiver);
      return $receiver.setter;
    }
  });
  Slots.prototype.slot_i0umcc$ = function (ps) {
    ps.node(this.slot);
  };
  Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: []
  };
  function get_widget($receiver) {
    return get_slots($receiver).slot;
  }
  function widget($receiver, ps) {
    ps.slot(get_widget($receiver));
  }
  function Widget(node, slot) {
    this.node = node;
    this.slot = slot;
  }
  Widget.prototype.remAssign_asww5c$ = function (n) {
    this.node(n);
  };
  Widget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Widget',
    interfaces: []
  };
  function widget$lambda(closure$slot, closure$current) {
    return function (n) {
      var s = closure$slot.v;
      if (s == null) {
        closure$current.v = n;
      }
       else {
        s(n);
      }
      return Unit;
    };
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function widget$lambda_0(closure$slot, closure$current) {
    return function (s) {
      if (!(closure$slot.v == null)) {
        var message = 'Widget already initialized!';
        throw IllegalArgumentException_init(message.toString());
      }
      closure$slot.v = s;
      s(closure$current.v);
      closure$current.v = null;
      return Unit;
    };
  }
  function widget_0(initial) {
    if (initial === void 0)
      initial = null;
    var slot = {v: null};
    var current = {v: initial};
    return new Widget(widget$lambda(slot, current), widget$lambda_0(slot, current));
  }
  function ToolBar(element, killables) {
    NodesFactory.call(this, element, killables);
    this.element = element;
    this.left = this.opt_ibb6lz$(invoke(get_div(document), ToolBar$left$lambda));
    this.middle = this.opt_ibb6lz$(invoke(get_div(this.element), ToolBar$middle$lambda));
    this.spinner = this.opt_ibb6lz$(invoke(get_div(this.element), ToolBar$spinner$lambda));
    this.tabs = this.opt_ibb6lz$(invoke(get_div(this.element), ToolBar$tabs$lambda));
    this.right = this.opt_ibb6lz$(invoke(get_div(this.element), ToolBar$right$lambda), ToolBar$right$lambda_0(this));
  }
  function ToolBar$leftButton$lambda$lambda($receiver) {
    get_btnSecondary($receiver);
    return Unit;
  }
  function ToolBar$leftButton$lambda(closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(ToolBar$leftButton$lambda$lambda);
      closure$fn($receiver);
      return Unit;
    };
  }
  ToolBar.prototype.leftButton_3uqggf$ = function (fn) {
    return btnButton(this.left.node, ToolBar$leftButton$lambda(fn));
  };
  function ToolBar$backButton$lambda$lambda($receiver) {
    get_m1($receiver);
    return Unit;
  }
  function ToolBar$backButton$lambda$lambda_0(closure$fn) {
    return function (it) {
      closure$fn();
      return Unit;
    };
  }
  function ToolBar$backButton$lambda(closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(ToolBar$backButton$lambda$lambda);
      clickEvent($receiver, ToolBar$backButton$lambda$lambda_0(closure$fn));
      faButtonSpan($receiver, get_chevronLeft(Fa.Companion));
      return Unit;
    };
  }
  ToolBar.prototype.backButton_o14v8n$ = function (fn) {
    return this.leftButton_3uqggf$(ToolBar$backButton$lambda(fn));
  };
  function ToolBar$middleTitle$lambda($receiver) {
    flexAlignItemsCenter($receiver);
    return Unit;
  }
  function ToolBar$middleTitle$lambda$lambda($receiver) {
    get_m2($receiver);
    return Unit;
  }
  function ToolBar$middleTitle$lambda_0(closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(ToolBar$middleTitle$lambda$lambda);
      closure$fn($receiver);
      return Unit;
    };
  }
  ToolBar.prototype.middleTitle_9f50g3$ = function (fn) {
    return invoke(get_h5(this.middle.invoke_gk6m2q$(ToolBar$middleTitle$lambda)), ToolBar$middleTitle$lambda_0(fn));
  };
  function ToolBar$left$lambda$lambda($receiver) {
    get_dFlex($receiver);
    flexFixedSize($receiver);
    return Unit;
  }
  function ToolBar$left$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ToolBar$left$lambda$lambda);
    return Unit;
  }
  function ToolBar$middle$lambda$lambda($receiver) {
    get_dFlex($receiver);
    get_flexGrow1($receiver);
    return Unit;
  }
  function ToolBar$middle$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ToolBar$middle$lambda$lambda);
    return Unit;
  }
  function ToolBar$spinner$lambda$lambda($receiver) {
    get_dFlex($receiver);
    get_flexRow($receiver);
    get_alignItemsCenter($receiver);
    return Unit;
  }
  function ToolBar$spinner$lambda$lambda$lambda($receiver) {
    get_m1($receiver);
    get_spinnerBorder($receiver);
    get_spinnerBorderSm($receiver);
    return Unit;
  }
  function ToolBar$spinner$lambda$lambda_0($receiver) {
    get_cls($receiver).invoke_cr52h1$(ToolBar$spinner$lambda$lambda$lambda);
    return Unit;
  }
  function ToolBar$spinner$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ToolBar$spinner$lambda$lambda);
    invoke(get_div($receiver), ToolBar$spinner$lambda$lambda_0);
    return Unit;
  }
  function ToolBar$tabs$lambda$lambda($receiver) {
    get_dFlex($receiver);
    get_flexRow($receiver);
    return Unit;
  }
  function ToolBar$tabs$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ToolBar$tabs$lambda$lambda);
    return Unit;
  }
  function ToolBar$right$lambda$lambda($receiver) {
    get_dFlex($receiver);
    flexFixedSize($receiver);
    return Unit;
  }
  function ToolBar$right$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ToolBar$right$lambda$lambda);
    return Unit;
  }
  function ToolBar$right$lambda_0(this$ToolBar) {
    return function () {
      this$ToolBar.middle.node;
      return Unit;
    };
  }
  ToolBar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToolBar',
    interfaces: [NodesFactory]
  };
  function ToolBar_init(node, killables, $this) {
    $this = $this || Object.create(ToolBar.prototype);
    ToolBar.call($this, row(node, ToolBar_init$lambda), killables);
    return $this;
  }
  function ToolBar_init$lambda$lambda($receiver) {
    get_navTabs($receiver);
    flexFixedSize($receiver);
    get_bgLight($receiver);
    return Unit;
  }
  function ToolBar_init$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ToolBar_init$lambda$lambda);
    return Unit;
  }
  function NodesFactory(parent, killables) {
    this.parent_4xa7e$_0 = parent;
    this.killables_b2mpvp$_0 = killables;
    this.latest_chjw6l$_0 = null;
  }
  function NodesFactory$vis$lambda() {
    return Unit;
  }
  NodesFactory.prototype.vis_xxs8av$ = function ($receiver, rxv, first) {
    if (first === void 0)
      first = NodesFactory$vis$lambda;
    var $receiver_0 = new NodeHolder($receiver, this.parent_4xa7e$_0, this.latest_chjw6l$_0, new Var(rxv), first, this.killables_b2mpvp$_0);
    this.latest_chjw6l$_0 = $receiver_0;
    return $receiver_0;
  };
  function NodesFactory$vis$lambda_0() {
    return true;
  }
  function NodesFactory$vis$lambda_1(closure$fn) {
    return function () {
      return closure$fn();
    };
  }
  NodesFactory.prototype.vis_e7p61z$ = function ($receiver, fn) {
    if (fn === void 0)
      fn = NodesFactory$vis$lambda_0;
    var $receiver_0 = Rx_init(NodesFactory$vis$lambda_1(fn));
    this.killables_b2mpvp$_0.plusAssign_wii6vi$($receiver_0);
    return this.vis_xxs8av$($receiver, $receiver_0);
  };
  function NodesFactory$opt$lambda() {
    return Unit;
  }
  function NodesFactory$opt$lambda_0(closure$first, closure$rxv) {
    return function () {
      closure$first();
      closure$rxv.now = true;
      return Unit;
    };
  }
  NodesFactory.prototype.opt_ibb6lz$ = function ($receiver, first) {
    if (first === void 0)
      first = NodesFactory$opt$lambda;
    var rxv = new Var(false);
    return this.vis_xxs8av$($receiver, rxv, NodesFactory$opt$lambda_0(first, rxv));
  };
  NodesFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodesFactory',
    interfaces: []
  };
  function insertAfter($receiver, what, afterWhat) {
    $receiver.insertBefore(what, afterWhat == null ? $receiver.firstChild : afterWhat.nextSibling);
  }
  function NodeHolder(wrapped, parent, previous, visibility, first, killables) {
    NodeHolder$Companion_getInstance();
    this.wrapped_8be2vx$ = wrapped;
    this.parent_0 = parent;
    this.previous_0 = previous;
    this.visibility = visibility;
    this.node_3i5zg9$_0 = lazy(NodeHolder$node$lambda(first, this));
    var $receiver = Rx_init(NodeHolder$visible$lambda(this));
    killables.plusAssign_wii6vi$($receiver);
    this.visible = $receiver;
    this.lastVisible_0 = NodeHolder$Companion_getInstance().NullNode_0;
    var tmp$, tmp$_0;
    if (this.previous_0 == null) {
      tmp$ = NodeHolder$insertAfterProvider$lambda;
    }
     else {
      tmp$ = NodeHolder$insertAfterProvider$lambda_0(this);
    }
    this.insertAfterProvider_0 = tmp$;
    this.visibleInsertBefore_0 = lazyOf(this.wrapped_8be2vx$);
    if (this.previous_0 == null) {
      tmp$_0 = NodeHolder$previousLastVisible$lambda;
    }
     else {
      tmp$_0 = NodeHolder$previousLastVisible$lambda_0(this);
    }
    this.previousLastVisible_0 = tmp$_0;
    this.visible.forEach_qlkmfe$(NodeHolder_init$lambda(this));
  }
  Object.defineProperty(NodeHolder.prototype, 'node', {
    get: function () {
      return this.node_3i5zg9$_0.value;
    }
  });
  NodeHolder.prototype.invoke_gk6m2q$ = function (fn) {
    var $receiver = this.node;
    fn($receiver);
    return $receiver;
  };
  function NodeHolder$Companion() {
    NodeHolder$Companion_instance = this;
    this.NullNode_0 = lazyOf(null);
  }
  NodeHolder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NodeHolder$Companion_instance = null;
  function NodeHolder$Companion_getInstance() {
    if (NodeHolder$Companion_instance === null) {
      new NodeHolder$Companion();
    }
    return NodeHolder$Companion_instance;
  }
  NodeHolder.prototype.insert_0 = function () {
    insertAfter(this.parent_0, this.wrapped_8be2vx$, this.insertAfterProvider_0());
  };
  function NodeHolder$node$lambda(closure$first, this$NodeHolder) {
    return function () {
      closure$first();
      return this$NodeHolder.wrapped_8be2vx$;
    };
  }
  function NodeHolder$visible$lambda(this$NodeHolder) {
    return function () {
      return this$NodeHolder.visibility.invoke().invoke();
    };
  }
  function NodeHolder$insertAfterProvider$lambda() {
    return null;
  }
  function NodeHolder$insertAfterProvider$lambda_0(this$NodeHolder) {
    return function () {
      return this$NodeHolder.previous_0.lastVisible_0.value;
    };
  }
  function NodeHolder$previousLastVisible$lambda() {
    return NodeHolder$Companion_getInstance().NullNode_0;
  }
  function NodeHolder$previousLastVisible$lambda$lambda(this$NodeHolder) {
    return function () {
      return this$NodeHolder.previous_0.lastVisible_0.value;
    };
  }
  function NodeHolder$previousLastVisible$lambda_0(this$NodeHolder) {
    return function () {
      return lazy(NodeHolder$previousLastVisible$lambda$lambda(this$NodeHolder));
    };
  }
  function NodeHolder_init$lambda(this$NodeHolder) {
    return function (v) {
      var tmp$;
      if (v) {
        this$NodeHolder.insert_0();
        tmp$ = this$NodeHolder.visibleInsertBefore_0;
      }
       else {
        removeFromParent(this$NodeHolder.wrapped_8be2vx$);
        tmp$ = this$NodeHolder.previousLastVisible_0();
      }
      this$NodeHolder.lastVisible_0 = tmp$;
      return Unit;
    };
  }
  NodeHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeHolder',
    interfaces: []
  };
  function nodes($receiver, killables, fn) {
    fn(new NodesFactory($receiver, killables));
  }
  function get_topbarP1$lambda($receiver) {
    get_p1(get_cls($receiver));
    return Unit;
  }
  function get_topbarP1($receiver) {
    return invoke(get_topbar($receiver), get_topbarP1$lambda);
  }
  function get_topbar$lambda$lambda($receiver) {
    get_navTabs($receiver);
    flexFixedSize($receiver);
    get_bgLight($receiver);
    return Unit;
  }
  function get_topbar$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(get_topbar$lambda$lambda);
    return Unit;
  }
  function get_topbar($receiver) {
    return row($receiver, get_topbar$lambda);
  }
  function backButton$lambda$lambda($receiver) {
    get_btnSecondary($receiver);
    get_m1($receiver);
    return Unit;
  }
  function backButton$lambda$lambda_0(closure$inbox) {
    return function (it) {
      plusAssign_0(closure$inbox, Back_getInstance());
      return Unit;
    };
  }
  function backButton$lambda(closure$inbox) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(backButton$lambda$lambda);
      clickEvent($receiver, backButton$lambda$lambda_0(closure$inbox));
      return Unit;
    };
  }
  function backButton($receiver, inbox) {
    faButton($receiver, get_chevronLeft(Fa.Companion), backButton$lambda(inbox));
  }
  function toolbar$lambda($receiver) {
    return Unit;
  }
  function toolbar($receiver, killables, fn) {
    if (fn === void 0)
      fn = toolbar$lambda;
    var $receiver_0 = ToolBar_init($receiver, killables);
    fn($receiver_0);
    return $receiver_0;
  }
  function topbar$lambda($receiver) {
    return Unit;
  }
  function topbar($receiver, killables, fn) {
    if (fn === void 0)
      fn = topbar$lambda;
    var $receiver_0 = toolbar($receiver, killables, fn);
    borderBottom($receiver_0.element);
    return $receiver_0;
  }
  function ScreenLayout(element, killables) {
    this.element = element;
    invoke(this.element, ScreenLayout_init$lambda);
    this.top_2j5p02$_0 = lazy(ScreenLayout$top$lambda(killables, this));
    this.main_7kw2y0$_0 = lazy(ScreenLayout$main$lambda(this));
  }
  Object.defineProperty(ScreenLayout.prototype, 'top', {
    get: function () {
      return this.top_2j5p02$_0.value;
    }
  });
  ScreenLayout.prototype.top_vesf63$ = function (fn) {
    var $receiver = this.top;
    fn($receiver);
    return $receiver;
  };
  Object.defineProperty(ScreenLayout.prototype, 'main', {
    get: function () {
      return this.main_7kw2y0$_0.value;
    }
  });
  function ScreenLayout_init$lambda$lambda($receiver) {
    get_dFlex($receiver);
    get_flexColumn($receiver);
    return Unit;
  }
  function ScreenLayout_init$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ScreenLayout_init$lambda$lambda);
    return Unit;
  }
  function ScreenLayout$top$lambda(closure$killables, this$ScreenLayout) {
    return function () {
      var $receiver = topbar(document, closure$killables);
      insertAt(this$ScreenLayout.element, 0, $receiver.element);
      return $receiver;
    };
  }
  function ScreenLayout$main$lambda$lambda$lambda($receiver) {
    get_flexGrow1($receiver);
    return Unit;
  }
  function ScreenLayout$main$lambda$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ScreenLayout$main$lambda$lambda$lambda);
    return Unit;
  }
  function ScreenLayout$main$lambda(this$ScreenLayout) {
    return function () {
      return invoke(get_div(this$ScreenLayout.element), ScreenLayout$main$lambda$lambda);
    };
  }
  ScreenLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenLayout',
    interfaces: []
  };
  function screenLayout$lambda($receiver) {
    return Unit;
  }
  function screenLayout($receiver, killables, fn) {
    if (fn === void 0)
      fn = screenLayout$lambda;
    var $receiver_0 = new ScreenLayout($receiver, killables);
    fn($receiver_0);
    return $receiver_0;
  }
  function faTab$lambda$lambda($receiver) {
    get_mt1($receiver);
    get_navItem($receiver);
    get_dFlex($receiver);
    return Unit;
  }
  function faTab$lambda$lambda$lambda(closure$killables, closure$act, this$) {
    return function ($receiver) {
      get_navLink($receiver);
      get_px2($receiver);
      closure$killables.plusAssign_wii6vi$(rxClass_0(this$, get_active($receiver), closure$act));
      return Unit;
    };
  }
  function faTab$lambda$lambda$lambda$lambda($receiver) {
    get_fw(get_fa($receiver));
    return Unit;
  }
  function faTab$lambda$lambda$lambda_0(closure$faIcon) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(faTab$lambda$lambda$lambda$lambda);
      get_classes($receiver).plusAssign_pdl1vj$(closure$faIcon);
      return Unit;
    };
  }
  function faTab$lambda$lambda_0(closure$killables, closure$act, closure$faIcon, closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(faTab$lambda$lambda$lambda(closure$killables, closure$act, $receiver));
      invoke(get_span($receiver), faTab$lambda$lambda$lambda_0(closure$faIcon));
      $receiver.href = '#';
      closure$fn($receiver);
      return Unit;
    };
  }
  function faTab$lambda(closure$killables, closure$act, closure$faIcon, closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(faTab$lambda$lambda);
      invoke(get_a($receiver), faTab$lambda$lambda_0(closure$killables, closure$act, closure$faIcon, closure$fn));
      return Unit;
    };
  }
  function faTab($receiver, faIcon, act, fn) {
    var killables = new Killables();
    invoke(get_div($receiver), faTab$lambda(killables, act, faIcon, fn));
    return killables;
  }
  $$importsForInline$$['appsimake-common'] = $module$appsimake_common;
  var package$commonui = _.commonui || (_.commonui = {});
  package$commonui.AppCtx = AppCtx;
  package$commonui.nextButton_t3i1hh$ = nextButton;
  Object.defineProperty(package$commonui, 'webkitdirectorySupported', {
    get: get_webkitdirectorySupported
  });
  package$commonui.nextButton_rqshq1$ = nextButton_0;
  package$commonui.get_hourglass_asww5s$ = get_hourglass;
  package$commonui.showClosable_l02s0b$ = showClosable;
  package$commonui.faButtonSpan_hq6cqm$ = faButtonSpan;
  package$commonui.faButton_jous2b$ = faButton;
  var package$mediasession = _.mediasession || (_.mediasession = {});
  Object.defineProperty(package$mediasession, 'mediaSessionSupported', {
    get: get_mediaSessionSupported
  });
  package$mediasession.get_mediaSession_yi0el1$ = get_mediaSession;
  package$mediasession.get_none_dhxii3$ = get_none;
  package$mediasession.get_paused_dhxii3$ = get_paused;
  package$mediasession.get_playing_dhxii3$ = get_playing;
  package$commonui.currentOrAsk_iyaa7$ = currentOrAsk;
  package$commonui.isGrantedOrAsk_iyaa7$ = isGrantedOrAsk;
  package$commonui.isSupported_iyaa7$ = isSupported;
  package$commonui.notDenied_iyaa7$ = notDenied;
  package$commonui.notGranted_iyaa7$ = notGranted;
  package$commonui.shouldRequest_iyaa7$ = shouldRequest;
  package$commonui.PageOut = PageOut;
  package$commonui.PageIn = PageIn;
  package$commonui.NodeSlot = NodeSlot;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$commonui.runNode_2pk8oc$ = runNode;
  package$commonui.bodyPage_oexf41$ = bodyPage;
  package$commonui.PageSlot = PageSlot;
  package$commonui.SubPages = SubPages;
  package$commonui.with_kkqu24$ = with_1;
  Object.defineProperty(Orientation, 'Horizontal', {
    get: Orientation$Horizontal_getInstance
  });
  Object.defineProperty(Orientation, 'Vertical', {
    get: Orientation$Vertical_getInstance
  });
  package$commonui.Orientation = Orientation;
  package$commonui.Size = Size;
  package$commonui.aspectRatio_ahwbu2$ = aspectRatio;
  package$commonui.RootPanel = RootPanel;
  package$commonui.rxPanel_83qqjo$ = rxPanel;
  package$commonui.first_4s9a7f$ = first;
  package$commonui.runPanel_b3w3xb$ = runPanel;
  package$commonui.proc = proc;
  package$commonui.procOrElse = procOrElse;
  package$commonui.procOrElse_hrb794$ = procOrElse_0;
  package$commonui.with_iud8od$ = with_2;
  package$commonui.with_m7lysv$ = with_3;
  package$commonui.toSetProcOrElse_lf6aks$ = toSetProcOrElse;
  package$commonui.ProcOrElseList = ProcOrElseList;
  package$commonui.process_y3in6q$ = process;
  Object.defineProperty(package$commonui, 'Back', {
    get: Back_getInstance
  });
  package$commonui.back_g2bo5h$ = back;
  package$commonui.LoopControl = LoopControl;
  package$commonui.plusAssign_rmur43$ = plusAssign_0;
  package$commonui.ProcVar = ProcVar;
  package$commonui.runLoop_dqn3l2$ = runLoop;
  package$commonui.runLoop_pi6h9k$ = runLoop_0;
  package$commonui.hourglass_6j947t$ = hourglass;
  package$commonui.remAssign_cslpg8$ = remAssign;
  package$commonui.asyncKills_9scqh$ = asyncKills;
  Object.defineProperty(ProcOrElseVar, 'Companion', {
    get: ProcOrElseVar$Companion_getInstance
  });
  package$commonui.ProcOrElseVar = ProcOrElseVar;
  package$commonui.procVar = procVar;
  package$commonui.procOrElses = procOrElses;
  package$commonui.assignedTo_k8rgz3$ = assignedTo;
  package$commonui.assignedTo_47xytm$ = assignedTo_0;
  package$commonui.addedTo_p8zqfq$ = addedTo_1;
  package$commonui.addedTo_bd26vw$ = addedTo_2;
  package$commonui.addProcAssign_5pyr9y$ = addProcAssign;
  package$commonui.addProcAssign_vog39s$ = addProcAssign_0;
  package$commonui.assignProcAdd_ohglao$ = assignProcAdd;
  package$commonui.rxProc_ll0nau$ = rxProc;
  package$commonui.rxProcIf_acq064$ = rxProcIf;
  package$commonui.AsyncHolder_init_mh5how$ = AsyncHolder_init;
  package$commonui.AsyncHolder = AsyncHolder;
  package$commonui.async_k2h1w8$ = async;
  package$commonui.processedBy_ehye39$ = processedBy;
  package$commonui.channel_x76zy$ = channel;
  package$commonui.get_slots_asww5s$ = get_slots;
  package$commonui.Slots = Slots;
  package$commonui.get_widget_asww5s$ = get_widget;
  package$commonui.widget_n6imv7$ = widget;
  package$commonui.Widget = Widget;
  package$commonui.widget_asww5c$ = widget_0;
  package$commonui.ToolBar_init_vm9pgu$ = ToolBar_init;
  package$commonui.ToolBar = ToolBar;
  package$commonui.NodesFactory = NodesFactory;
  package$commonui.insertAfter_5a54o3$ = insertAfter;
  Object.defineProperty(NodeHolder, 'Companion', {
    get: NodeHolder$Companion_getInstance
  });
  package$commonui.NodeHolder = NodeHolder;
  package$commonui.nodes_m6gby8$ = nodes;
  package$commonui.get_topbarP1_asww5s$ = get_topbarP1;
  package$commonui.get_topbar_asww5s$ = get_topbar;
  package$commonui.backButton_6cprvl$ = backButton;
  package$commonui.toolbar_aurkz0$ = toolbar;
  package$commonui.topbar_aurkz0$ = topbar;
  package$commonui.ScreenLayout = ScreenLayout;
  package$commonui.screenLayout_yc4v25$ = screenLayout;
  package$commonui.faTab_mg509s$ = faTab;
  RootPanel.prototype.plus_wii6vi$ = Killable.prototype.plus_wii6vi$;
  webkitdirectorySupported = lazy(webkitdirectorySupported$lambda);
  mediaSessionSupported = lazy(mediaSessionSupported$lambda);
  SlotsAttribute = 'appsimakeSlots';
  Kotlin.defineModule('appsimake-commonui', _);
  return _;
}(typeof this['appsimake-commonui'] === 'undefined' ? {} : this['appsimake-commonui'], kotlin, this['appsimake-commonshr'], this['appsimake-bootstrap'], this['appsimake-buildenv'], this['appsimake-domx'], this['appsimake-common'], this['kotlinx-coroutines-core'], this['appsimake-fontawesome']);

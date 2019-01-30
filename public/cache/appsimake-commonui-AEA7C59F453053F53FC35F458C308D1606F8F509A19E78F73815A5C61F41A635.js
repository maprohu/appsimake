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
  var flexGrow1 = $module$appsimake_bootstrap.bootstrap.flexGrow1_ejp6nk$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
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
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var flex = $module$appsimake_bootstrap.bootstrap.flex_ejp6nk$;
  var resizeEvent = $module$appsimake_common.common.resizeEvent_5ehnu1$;
  var rxClass = $module$appsimake_commonshr.rx.rxClass_jgfmsn$;
  var get_flexBasis0 = $module$appsimake_domx.styles.get_flexBasis0_kre7dp$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var column = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var removeFromParent = $module$appsimake_common.common.removeFromParent_asww5s$;
  var get_dFlex = $module$appsimake_bootstrap.bootstrap.get_dFlex_kre7dp$;
  var get_flexColumn = $module$appsimake_bootstrap.bootstrap.get_flexColumn_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_justifyContentCenter = $module$appsimake_bootstrap.bootstrap.get_justifyContentCenter_kre7dp$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var KillableSeq_init = $module$appsimake_commonshr.killable.KillableSeq_init_wii6vi$;
  var Killable = $module$appsimake_commonshr.killable.Killable;
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
  var get_spinnerBorderSm = $module$appsimake_bootstrap.bootstrap.get_spinnerBorderSm_kre7dp$;
  var get_navTabs = $module$appsimake_bootstrap.bootstrap.get_navTabs_kre7dp$;
  var get_bgLight = $module$appsimake_bootstrap.bootstrap.get_bgLight_kre7dp$;
  var row = $module$appsimake_bootstrap.bootstrap.row_gnmiz0$;
  var lazyOf = Kotlin.kotlin.lazyOf_mh5how$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var borderBottom = $module$appsimake_bootstrap.bootstrap.borderBottom_ejp6nk$;
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
  ToolBar.prototype = Object.create(NodesFactory.prototype);
  ToolBar.prototype.constructor = ToolBar;
  function AppCtx(title) {
    this.title = title;
    this.killables = new Killables();
    this.visible_yu49lr$_0 = lazy(AppCtx$visible$lambda(this));
    this.hasFocus_ezs4tf$_0 = lazy(AppCtx$hasFocus$lambda(this));
    this.windowActive_xk4uuj$_0 = lazy(AppCtx$windowActive$lambda(this));
    this.root = new RootPanel(ensureNotNull(document.body));
    setupFullScreen();
    this.hourglass();
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
      flexGrow1($receiver);
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
  function hourglass$lambda$lambda($receiver) {
    get_spinnerBorder($receiver);
    return Unit;
  }
  function hourglass$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(hourglass$lambda$lambda);
    return Unit;
  }
  function hourglass($receiver) {
    return centerDiv($receiver, hourglass$lambda);
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
  function aspectRatio$lambda$lambda(this$, closure$size) {
    return function () {
      closure$size.now = new Size(this$.offsetWidth, this$.offsetHeight);
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda_0(closure$size) {
    return function () {
      return closure$size.invoke().ratio;
    };
  }
  function aspectRatio$lambda$lambda_1(closure$tableRatio, closure$ratio) {
    return function () {
      return closure$tableRatio >= closure$ratio.invoke() ? Orientation$Vertical_getInstance() : Orientation$Horizontal_getInstance();
    };
  }
  function aspectRatio$lambda$lambda_2(closure$ratio, closure$tableRatio) {
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
  function aspectRatio$lambda$lambda_3(closure$flexOrientation) {
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
  function aspectRatio$lambda$lambda_4(closure$spacingGrow) {
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
      flexGrow1($receiver);
      $receiver.style.position = 'relative';
      closure$fn($receiver);
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda$lambda_1(closure$fn) {
    return function ($receiver) {
      flexGrow1($receiver);
      invoke(get_div($receiver), aspectRatio$lambda$lambda$lambda$lambda(closure$fn));
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda_5(closure$fn) {
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
  function aspectRatio$lambda$lambda_6(closure$spacingGrow) {
    return function ($receiver) {
      get_flexBasis0(get_cls($receiver));
      closure$spacingGrow.forEach_qlkmfe$(aspectRatio$lambda$lambda$lambda_2($receiver));
      return Unit;
    };
  }
  function aspectRatio$lambda(closure$killables, closure$tableRatio, closure$fn) {
    return function ($receiver) {
      flexGrow1($receiver);
      flex($receiver);
      var size = new Var(new Size($receiver.offsetWidth, $receiver.offsetHeight));
      closure$killables.plusAssign_o14v8n$(resizeEvent(window, aspectRatio$lambda$lambda($receiver, size)));
      var ratio = Rx_init(aspectRatio$lambda$lambda_0(size));
      var flexOrientation = Rx_init(aspectRatio$lambda$lambda_1(closure$tableRatio, ratio));
      var spacingGrow = Rx_init(aspectRatio$lambda$lambda_2(ratio, closure$tableRatio));
      rxClass($receiver, Rx_init(aspectRatio$lambda$lambda_3(flexOrientation)));
      invoke(get_div($receiver), aspectRatio$lambda$lambda_4(spacingGrow));
      column($receiver, aspectRatio$lambda$lambda_5(closure$fn));
      invoke(get_div($receiver), aspectRatio$lambda$lambda_6(spacingGrow));
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
  function RootPanel$setHourglass$lambda$lambda($receiver) {
    get_dFlex($receiver);
    get_flexColumn($receiver);
    get_alignItemsCenter($receiver);
    get_justifyContentCenter($receiver);
    return Unit;
  }
  function RootPanel$setHourglass$lambda$lambda_0($receiver) {
    get_spinnerBorder(get_cls($receiver));
    return Unit;
  }
  function RootPanel$setHourglass$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(RootPanel$setHourglass$lambda$lambda);
    invoke(get_div($receiver), RootPanel$setHourglass$lambda$lambda_0);
    return Unit;
  }
  RootPanel.prototype.setHourglass = function () {
    return this.newRoot_iw61es$(RootPanel$setHourglass$lambda);
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
  function ToolBar$middle$lambda($receiver) {
    flex($receiver);
    flexGrow1($receiver);
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
  package$commonui.hourglass_ejp6nk$ = hourglass;
  package$commonui.showClosable_l02s0b$ = showClosable;
  package$commonui.faButtonSpan_hq6cqm$ = faButtonSpan;
  package$commonui.faButton_jous2b$ = faButton;
  package$commonui.currentOrAsk_iyaa7$ = currentOrAsk;
  package$commonui.isGrantedOrAsk_iyaa7$ = isGrantedOrAsk;
  package$commonui.isSupported_iyaa7$ = isSupported;
  package$commonui.notDenied_iyaa7$ = notDenied;
  package$commonui.notGranted_iyaa7$ = notGranted;
  package$commonui.shouldRequest_iyaa7$ = shouldRequest;
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
  package$commonui.ToolBar_init_vm9pgu$ = ToolBar_init;
  package$commonui.ToolBar = ToolBar;
  package$commonui.NodesFactory = NodesFactory;
  package$commonui.insertAfter_5a54o3$ = insertAfter;
  Object.defineProperty(NodeHolder, 'Companion', {
    get: NodeHolder$Companion_getInstance
  });
  package$commonui.NodeHolder = NodeHolder;
  package$commonui.nodes_m6gby8$ = nodes;
  package$commonui.toolbar_aurkz0$ = toolbar;
  package$commonui.topbar_aurkz0$ = topbar;
  package$commonui.ScreenLayout = ScreenLayout;
  package$commonui.screenLayout_yc4v25$ = screenLayout;
  package$commonui.faTab_mg509s$ = faTab;
  RootPanel.prototype.plus_wii6vi$ = Killable.prototype.plus_wii6vi$;
  webkitdirectorySupported = lazy(webkitdirectorySupported$lambda);
  Kotlin.defineModule('appsimake-commonui', _);
  return _;
}(typeof this['appsimake-commonui'] === 'undefined' ? {} : this['appsimake-commonui'], kotlin, this['appsimake-commonshr'], this['appsimake-bootstrap'], this['appsimake-buildenv'], this['appsimake-domx'], this['appsimake-common'], this['kotlinx-coroutines-core'], this['appsimake-fontawesome']);

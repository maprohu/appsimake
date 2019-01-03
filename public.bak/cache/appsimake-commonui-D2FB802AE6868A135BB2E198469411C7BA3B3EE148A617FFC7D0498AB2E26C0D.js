if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-commonui'.");
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
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-commonui'.");
}
this['appsimake-commonui'] = function (_, Kotlin, $module$appsimake_common, $module$appsimake_bootstrap, $module$appsimake_buildenv, $module$appsimake_domx, $module$appsimake_fontawesome, $module$kotlinx_coroutines_core) {
  'use strict';
  var Killables = $module$appsimake_common.killable.Killables;
  var Var = $module$appsimake_common.rx.Var;
  var Unit = Kotlin.kotlin.Unit;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Rx_init = $module$appsimake_common.rx.Rx_init_klfg04$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var setupFullScreen = $module$appsimake_bootstrap.bootstrap.setupFullScreen;
  var Any = Object;
  var buildenv = $module$appsimake_buildenv.buildenv;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var flexRow = $module$appsimake_bootstrap.bootstrap.flexRow_ejp6nk$;
  var flexGrow1 = $module$appsimake_bootstrap.bootstrap.flexGrow1_ejp6nk$;
  var div = $module$appsimake_domx.domx.div_gnmiz0$;
  var chevronRight = $module$appsimake_fontawesome.fontawesome.chevronRight_asww5s$;
  var listButton = $module$appsimake_bootstrap.bootstrap.listButton_juq4uf$;
  var spinner = $module$appsimake_fontawesome.fontawesome.spinner_asww5s$;
  var centerDiv = $module$appsimake_bootstrap.bootstrap.centerDiv_gnmiz0$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var equals = Kotlin.equals;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var flex = $module$appsimake_bootstrap.bootstrap.flex_ejp6nk$;
  var resizeEvent = $module$appsimake_common.common.resizeEvent_5ehnu1$;
  var rxClass = $module$appsimake_common.rx.rxClass_jgfmsn$;
  var get_classes = $module$appsimake_domx.domx.get_classes_ejp6nk$;
  var styles = $module$appsimake_domx.styles;
  var column = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var removeFromParent = $module$appsimake_common.common.removeFromParent_asww5s$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_ejp6nk$;
  var KillableSeq = $module$appsimake_common.killable.KillableSeq;
  var throwUPAE = Kotlin.throwUPAE;
  var fullSize = $module$appsimake_bootstrap.bootstrap.fullSize_ejp6nk$;
  var linkedIterable = $module$appsimake_common.common.linkedIterable_h43q6c$;
  var flexColumn = $module$appsimake_bootstrap.bootstrap.flexColumn_ejp6nk$;
  var flexShrink0 = $module$appsimake_bootstrap.bootstrap.flexShrink0_ejp6nk$;
  var margin2 = $module$appsimake_bootstrap.bootstrap.margin2_ejp6nk$;
  var chevronLeft = $module$appsimake_fontawesome.fontawesome.chevronLeft_asww5s$;
  var span = $module$appsimake_domx.domx.span_c7xqcp$;
  var button = $module$appsimake_domx.domx.button_9ztatb$;
  var add = $module$appsimake_common.killable.add_8dof8l$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var rxClasses = $module$appsimake_common.rx.rxClasses_5wy11i$;
  var li = $module$appsimake_domx.domx.li_8ixz9m$;
  var breadcrumb = $module$appsimake_bootstrap.bootstrap.breadcrumb_waljkg$;
  var dropdownDiv = $module$appsimake_bootstrap.bootstrap.dropdownDiv_gnmiz0$;
  var margin1 = $module$appsimake_bootstrap.bootstrap.margin1_ejp6nk$;
  var btnSecondary = $module$appsimake_bootstrap.bootstrap.btnSecondary_ejp6nk$;
  var btnButton = $module$appsimake_bootstrap.bootstrap.btnButton_9ztatb$;
  var flexAlignItemsCenter = $module$appsimake_bootstrap.bootstrap.flexAlignItemsCenter_ejp6nk$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_ejp6nk$;
  var bgLight = $module$appsimake_bootstrap.bootstrap.bgLight_ejp6nk$;
  var padding1 = $module$appsimake_bootstrap.bootstrap.padding1_ejp6nk$;
  var row = $module$appsimake_bootstrap.bootstrap.row_gnmiz0$;
  var insertAt = $module$appsimake_common.common.insertAt_tevjyx$;
  var borderBottom = $module$appsimake_bootstrap.bootstrap.borderBottom_ejp6nk$;
  var borderTop = $module$appsimake_bootstrap.bootstrap.borderTop_ejp6nk$;
  Orientation.prototype = Object.create(Enum.prototype);
  Orientation.prototype.constructor = Orientation;
  SlideState.prototype = Object.create(Enum.prototype);
  SlideState.prototype.constructor = SlideState;
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
  function AppCtx$visible$lambda$isVisible(closure$hidden) {
    return function () {
      var hiddenValue = document[closure$hidden];
      return hiddenValue == null || hiddenValue == false;
    };
  }
  function AppCtx$visible$lambda$lambda(closure$isVisible, closure$rxv) {
    return function (it) {
      closure$rxv.now = closure$isVisible();
      return Unit;
    };
  }
  function AppCtx$visible$lambda$lambda_0(closure$visibilitychange, closure$callback) {
    return function () {
      document.removeEventListener(closure$visibilitychange, closure$callback);
      return Unit;
    };
  }
  function AppCtx$visible$lambda(this$AppCtx) {
    return function () {
      var hidden = 'hidden';
      var visibilitychange = 'visibilitychange';
      var isVisible = AppCtx$visible$lambda$isVisible(hidden);
      var rxv = new Var(isVisible());
      var callback = AppCtx$visible$lambda$lambda(isVisible, rxv);
      document.addEventListener(visibilitychange, callback);
      this$AppCtx.killables.plusAssign_o14v8n$(AppCtx$visible$lambda$lambda_0(visibilitychange, callback));
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
      div($receiver, nextButton$lambda$lambda(closure$label));
      chevronRight($receiver);
      return Unit;
    };
  }
  function nextButton_0($receiver, label, fn) {
    return listButton($receiver, fn, nextButton$lambda_0(label));
  }
  function hourglass$lambda($receiver) {
    spinner($receiver);
    return Unit;
  }
  function hourglass($receiver) {
    return centerDiv($receiver, hourglass$lambda);
  }
  function currentOrAsk($receiver, continuation_0, suspended) {
    var instance = new Coroutine$currentOrAsk($receiver, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$currentOrAsk($receiver, continuation_0) {
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
  function isGrantedOrAsk($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$isGrantedOrAsk($receiver_0, continuation_0);
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
      get_classes($receiver).plusAssign_61zpoe$(styles.flexBasis0);
      closure$spacingGrow.forEach_qlkmfe$(aspectRatio$lambda$lambda$lambda($receiver));
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda$lambda$lambda(closure$fn) {
    return function ($receiver) {
      flexGrow1($receiver);
      $receiver.style.position = 'relative';
      closure$fn($receiver);
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda$lambda_0(closure$fn) {
    return function ($receiver) {
      flexGrow1($receiver);
      div($receiver, aspectRatio$lambda$lambda$lambda$lambda(closure$fn));
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda_5(closure$fn) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$(styles.flexBasis0);
      flexGrow1($receiver);
      column($receiver, aspectRatio$lambda$lambda$lambda_0(closure$fn));
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda$lambda_1(this$) {
    return function (it) {
      this$.style.flexGrow = it.toString();
      return Unit;
    };
  }
  function aspectRatio$lambda$lambda_6(closure$spacingGrow) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$(styles.flexBasis0);
      closure$spacingGrow.forEach_qlkmfe$(aspectRatio$lambda$lambda$lambda_1($receiver));
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
      div($receiver, aspectRatio$lambda$lambda_4(spacingGrow));
      column($receiver, aspectRatio$lambda$lambda_5(closure$fn));
      div($receiver, aspectRatio$lambda$lambda_6(spacingGrow));
      return Unit;
    };
  }
  function aspectRatio($receiver, killables, tableRatio, fn) {
    if (tableRatio === void 0)
      tableRatio = 1.0;
    return div($receiver, aspectRatio$lambda(killables, tableRatio, fn));
  }
  function RootPanel(container) {
    this.container_0 = container;
    this.currentRoot_0 = new KillableSeq();
  }
  function RootPanel$setRoot$lambda(closure$node) {
    return function () {
      removeFromParent(closure$node);
      return Unit;
    };
  }
  RootPanel.prototype.setRoot_b3w3xb$ = function (node) {
    this.currentRoot_0.set_o14v8n$(RootPanel$setRoot$lambda(node));
    this.container_0.appendChild(node);
  };
  function RootPanel$newRoot$lambda($receiver) {
    return Unit;
  }
  function RootPanel$newRoot$lambda_0(this$RootPanel, closure$fn) {
    return function ($receiver) {
      this$RootPanel.setRoot_b3w3xb$($receiver);
      flexGrow1($receiver);
      closure$fn($receiver);
      return Unit;
    };
  }
  RootPanel.prototype.newRoot_iw61es$ = function (fn) {
    if (fn === void 0)
      fn = RootPanel$newRoot$lambda;
    return column(document, RootPanel$newRoot$lambda_0(this, fn));
  };
  function RootPanel$setHourglass$lambda($receiver) {
    flexCenter($receiver);
    spinner($receiver);
    return Unit;
  }
  RootPanel.prototype.setHourglass = function () {
    this.newRoot_iw61es$(RootPanel$setHourglass$lambda);
  };
  RootPanel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootPanel',
    interfaces: []
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
  function Slider(root, element) {
    this.current = new Var(null);
    this.relativeDiv_akbykz$_0 = this.relativeDiv_akbykz$_0;
    this.dropdownDiv_sr4v3c$_0 = this.dropdownDiv_sr4v3c$_0;
    this.breadcrumbOL_rnjolg$_0 = this.breadcrumbOL_rnjolg$_0;
    div(element, Slider_init$lambda(this));
    this.current.now = new Slider$Wrapper(this, root);
    this.current.forEach_qlkmfe$(Slider_init$lambda_0);
  }
  Object.defineProperty(Slider.prototype, 'relativeDiv', {
    get: function () {
      if (this.relativeDiv_akbykz$_0 == null)
        return throwUPAE('relativeDiv');
      return this.relativeDiv_akbykz$_0;
    },
    set: function (relativeDiv) {
      this.relativeDiv_akbykz$_0 = relativeDiv;
    }
  });
  Object.defineProperty(Slider.prototype, 'dropdownDiv', {
    get: function () {
      if (this.dropdownDiv_sr4v3c$_0 == null)
        return throwUPAE('dropdownDiv');
      return this.dropdownDiv_sr4v3c$_0;
    },
    set: function (dropdownDiv) {
      this.dropdownDiv_sr4v3c$_0 = dropdownDiv;
    }
  });
  Object.defineProperty(Slider.prototype, 'breadcrumbOL', {
    get: function () {
      if (this.breadcrumbOL_rnjolg$_0 == null)
        return throwUPAE('breadcrumbOL');
      return this.breadcrumbOL_rnjolg$_0;
    },
    set: function (breadcrumbOL) {
      this.breadcrumbOL_rnjolg$_0 = breadcrumbOL;
    }
  });
  function Slider$slidingDiv$lambda($receiver) {
    return Unit;
  }
  function Slider$slidingDiv$lambda_0(closure$block) {
    return function ($receiver) {
      fullSize($receiver);
      get_classes($receiver).plusAssign_61zpoe$('position-absolute ' + styles.transformRight);
      closure$block($receiver);
      return Unit;
    };
  }
  Slider.prototype.slidingDiv_gnmiz0$ = function ($receiver, block) {
    if (block === void 0)
      block = Slider$slidingDiv$lambda;
    return div($receiver, Slider$slidingDiv$lambda_0(block));
  };
  Slider.prototype.next_yt5ymz$ = function (screen) {
    var new_0 = new Slider$Wrapper(this, screen);
    var tail = ensureNotNull(this.current.now);
    tail.disposeNexts();
    tail.next = new_0;
    new_0.prev = tail;
    this.current.now = new_0;
  };
  function Slider$Wrapper($outer, screen) {
    this.$outer = $outer;
    this.screen = screen;
    this.prev = null;
    this.next = null;
    this.killables = new Killables();
    var $receiver = Rx_init(Slider$Wrapper$isCurrent$lambda(this.$outer, this));
    add(this.killables, $receiver);
    this.isCurrent = $receiver;
    this.preKillables = new Killables();
    this.slideTo = new Var(SlideState$Right_getInstance());
    var $receiver_0 = new Var(new Transition(this.slideTo.now, this.slideTo.now));
    this.slideTo.onChange_nrmh93$(Slider$Wrapper$slideState$lambda$lambda(this, $receiver_0));
    this.slideState = $receiver_0;
    this.slideClass = Rx_init(Slider$Wrapper$slideClass$lambda(this));
    this.animating_0 = new Var(false);
    this.canDispose_0 = Rx_init(Slider$Wrapper$canDispose$lambda(this));
    this.$outer.slidingDiv_gnmiz0$(this.$outer.relativeDiv, Slider$Slider$Wrapper_init$lambda(this));
    li(this.$outer.breadcrumbOL, Slider$Slider$Wrapper_init$lambda_0(this));
  }
  Slider$Wrapper.prototype.slider = function () {
    return this.$outer;
  };
  Slider$Wrapper.prototype.moveTo_e5v01d$ = function (state) {
    this.slideTo.now = state;
  };
  Slider$Wrapper.prototype.dispose = function () {
    this.preKillables.kill();
  };
  function Slider$Wrapper$prevs$lambda(it) {
    return it.prev;
  }
  Slider$Wrapper.prototype.prevs = function () {
    return linkedIterable(this.prev, Slider$Wrapper$prevs$lambda);
  };
  function Slider$Wrapper$nexts$lambda(it) {
    return it.next;
  }
  Slider$Wrapper.prototype.nexts = function () {
    return linkedIterable(this.next, Slider$Wrapper$nexts$lambda);
  };
  Slider$Wrapper.prototype.focus = function () {
    this.$outer.current.now = this;
  };
  Slider$Wrapper.prototype.disposeNexts = function () {
    var tmp$;
    tmp$ = this.nexts().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.dispose();
    }
    this.next = null;
  };
  function Slider$Wrapper$backPanel$lambda$lambda$lambda$lambda($receiver) {
    flexGrow1($receiver);
    $receiver.innerText = 'Back';
    return Unit;
  }
  function Slider$Wrapper$backPanel$lambda$lambda$lambda$lambda_0(this$Wrapper) {
    return function (it) {
      var $receiver = ensureNotNull(this$Wrapper.prev);
      $receiver.focus();
      $receiver.disposeNexts();
      return $receiver;
    };
  }
  function Slider$Wrapper$backPanel$lambda$lambda$lambda(this$Wrapper) {
    return function ($receiver) {
      flexRow($receiver);
      flexShrink0($receiver);
      margin2($receiver);
      $receiver.type = 'button';
      get_classes($receiver).plusAssign_61zpoe$('btn btn-light border');
      chevronLeft($receiver);
      span($receiver, Slider$Wrapper$backPanel$lambda$lambda$lambda$lambda);
      $receiver.onclick = Slider$Wrapper$backPanel$lambda$lambda$lambda$lambda_0(this$Wrapper);
      return Unit;
    };
  }
  function Slider$Wrapper$backPanel$lambda$lambda(closure$content, this$Wrapper) {
    return function ($receiver) {
      flexGrow1($receiver);
      get_classes($receiver).plusAssign_61zpoe$(styles.scrollVertical);
      closure$content($receiver);
      button($receiver, Slider$Wrapper$backPanel$lambda$lambda$lambda(this$Wrapper));
      return Unit;
    };
  }
  function Slider$Wrapper$backPanel$lambda(closure$content, this$Wrapper) {
    return function ($receiver) {
      fullSize($receiver);
      flexColumn($receiver);
      div($receiver, Slider$Wrapper$backPanel$lambda$lambda(closure$content, this$Wrapper));
      return Unit;
    };
  }
  Slider$Wrapper.prototype.backPanel_gnmiz0$ = function ($receiver, content) {
    div($receiver, Slider$Wrapper$backPanel$lambda(content, this));
  };
  function Slider$Wrapper$isCurrent$lambda(this$Slider, this$Wrapper) {
    return function () {
      return this$Slider.current.invoke() === this$Wrapper;
    };
  }
  function Slider$Wrapper$slideState$lambda$lambda(this$Wrapper, closure$it) {
    return function (from, to) {
      this$Wrapper.animating_0.now = true;
      closure$it.now = new Transition(from, to);
      return Unit;
    };
  }
  function Slider$Wrapper$slideClass$lambda(this$Wrapper) {
    return function () {
      var t = this$Wrapper.slideState.invoke();
      return setOf([t.from.transformClass, t.to.animClass]);
    };
  }
  function Slider$Wrapper$canDispose$lambda(this$Wrapper) {
    return function () {
      return this$Wrapper.slideTo.invoke() === SlideState$Right_getInstance() && !this$Wrapper.animating_0.invoke();
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda(this$Wrapper) {
    return function (it) {
      this$Wrapper.animating_0.now = true;
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda_0(this$Wrapper) {
    return function (it) {
      this$Wrapper.animating_0.now = false;
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda$lambda(this$, this$Wrapper) {
    return function (it) {
      if (it) {
        removeFromParent(this$);
        this$Wrapper.killables.kill();
      }
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda_1(this$Wrapper, this$) {
    return function () {
      this$Wrapper.canDispose_0.forEach_qlkmfe$(Slider$Slider$Wrapper_init$lambda$lambda$lambda(this$, this$Wrapper));
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda(this$Wrapper) {
    return function ($receiver) {
      this$Wrapper.screen.content($receiver, this$Wrapper);
      $receiver.addEventListener('animationstart', Slider$Slider$Wrapper_init$lambda$lambda(this$Wrapper));
      $receiver.addEventListener('animationend', Slider$Slider$Wrapper_init$lambda$lambda_0(this$Wrapper));
      this$Wrapper.preKillables.add_o14v8n$(Slider$Slider$Wrapper_init$lambda$lambda_1(this$Wrapper, $receiver));
      rxClasses($receiver, this$Wrapper.slideClass);
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda_2(this$) {
    return function (it) {
      this$.focus();
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda_3(this$) {
    return function () {
      removeFromParent(this$);
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda_4(this$Wrapper) {
    return function () {
      return this$Wrapper.isCurrent.invoke() ? 'active' : styles.cursorPointer;
    };
  }
  function Slider$Slider$Wrapper_init$lambda_0(this$Wrapper) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$('breadcrumb-item');
      this$Wrapper.screen.label($receiver);
      $receiver.onclick = Slider$Slider$Wrapper_init$lambda$lambda_2($receiver);
      this$Wrapper.preKillables.add_o14v8n$(Slider$Slider$Wrapper_init$lambda$lambda_3($receiver));
      rxClass($receiver, Rx_init(Slider$Slider$Wrapper_init$lambda$lambda_4(this$Wrapper)));
      return Unit;
    };
  }
  Slider$Wrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Wrapper',
    interfaces: []
  };
  function Slider_init$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function Slider_init$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function Slider_init$lambda$lambda(this$Slider) {
    return function ($receiver) {
      this$Slider.breadcrumbOL = breadcrumb($receiver.left, Slider_init$lambda$lambda$lambda);
      this$Slider.dropdownDiv = dropdownDiv($receiver.right, Slider_init$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function Slider_init$lambda$lambda_0($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('flex-grow-1 position-relative');
    return Unit;
  }
  function Slider_init$lambda(this$Slider) {
    return function ($receiver) {
      fullSize($receiver);
      flexColumn($receiver);
      topbar($receiver, Slider_init$lambda$lambda(this$Slider));
      this$Slider.relativeDiv = div($receiver, Slider_init$lambda$lambda_0);
      return Unit;
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Slider_init$lambda_0(it) {
    if (it != null) {
      it.moveTo_e5v01d$(SlideState$Center_getInstance());
      var $receiver = it.nexts();
      var tmp$;
      var list = ArrayList_init();
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        if (!(item.slideState.now.to !== SlideState$Right_getInstance()))
          break;
        list.add_11rb$(item);
      }
      var tmp$_0;
      tmp$_0 = list.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        element.moveTo_e5v01d$(SlideState$Right_getInstance());
      }
      var $receiver_0 = it.prevs();
      var tmp$_1;
      var list_0 = ArrayList_init();
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        if (!(item_0.slideState.now.to !== SlideState$Left_getInstance()))
          break;
        list_0.add_11rb$(item_0);
      }
      var tmp$_2;
      tmp$_2 = list_0.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        element_0.moveTo_e5v01d$(SlideState$Left_getInstance());
      }
    }
    return Unit;
  }
  Slider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slider',
    interfaces: []
  };
  function SlideState(name, ordinal, transformClass, animClass) {
    Enum.call(this);
    this.transformClass = transformClass;
    this.animClass = animClass;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SlideState_initFields() {
    SlideState_initFields = function () {
    };
    SlideState$Left_instance = new SlideState('Left', 0, styles.transformLeft, styles.animLeft);
    SlideState$Center_instance = new SlideState('Center', 1, styles.transformCenter, styles.animCenter);
    SlideState$Right_instance = new SlideState('Right', 2, styles.transformRight, styles.animRight);
  }
  var SlideState$Left_instance;
  function SlideState$Left_getInstance() {
    SlideState_initFields();
    return SlideState$Left_instance;
  }
  var SlideState$Center_instance;
  function SlideState$Center_getInstance() {
    SlideState_initFields();
    return SlideState$Center_instance;
  }
  var SlideState$Right_instance;
  function SlideState$Right_getInstance() {
    SlideState_initFields();
    return SlideState$Right_instance;
  }
  SlideState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlideState',
    interfaces: [Enum]
  };
  function SlideState$values() {
    return [SlideState$Left_getInstance(), SlideState$Center_getInstance(), SlideState$Right_getInstance()];
  }
  SlideState.values = SlideState$values;
  function SlideState$valueOf(name) {
    switch (name) {
      case 'Left':
        return SlideState$Left_getInstance();
      case 'Center':
        return SlideState$Center_getInstance();
      case 'Right':
        return SlideState$Right_getInstance();
      default:throwISE('No enum constant commonui.SlideState.' + name);
    }
  }
  SlideState.valueOf_61zpoe$ = SlideState$valueOf;
  function Transition(from, to) {
    this.from = from;
    this.to = to;
  }
  Transition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transition',
    interfaces: []
  };
  Transition.prototype.component1 = function () {
    return this.from;
  };
  Transition.prototype.component2 = function () {
    return this.to;
  };
  Transition.prototype.copy_1f4mb6$ = function (from, to) {
    return new Transition(from === void 0 ? this.from : from, to === void 0 ? this.to : to);
  };
  Transition.prototype.toString = function () {
    return 'Transition(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + ')';
  };
  Transition.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    return result;
  };
  Transition.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to)))));
  };
  function Screen(label, content) {
    this.label = label;
    this.content = content;
  }
  Screen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Screen',
    interfaces: []
  };
  function ToolBar(node) {
    this.element = row(node, ToolBar$element$lambda);
    this.left_eu5367$_0 = lazy(ToolBar$left$lambda(this));
    this.middle_z51f1f$_0 = lazy(ToolBar$middle$lambda(this));
    this.right_uv8280$_0 = lazy(ToolBar$right$lambda(this));
  }
  Object.defineProperty(ToolBar.prototype, 'left', {
    get: function () {
      return this.left_eu5367$_0.value;
    }
  });
  ToolBar.prototype.left_iw61es$ = function (fn) {
    var $receiver = this.left;
    fn($receiver);
    return $receiver;
  };
  function ToolBar$leftButton$lambda(closure$fn) {
    return function ($receiver) {
      margin1($receiver);
      btnSecondary($receiver);
      closure$fn($receiver);
      return Unit;
    };
  }
  ToolBar.prototype.leftButton_3uqggf$ = function (fn) {
    return btnButton(this.left, ToolBar$leftButton$lambda(fn));
  };
  Object.defineProperty(ToolBar.prototype, 'middle', {
    get: function () {
      return this.middle_z51f1f$_0.value;
    }
  });
  ToolBar.prototype.middle_iw61es$ = function (fn) {
    var $receiver = this.middle;
    fn($receiver);
    return $receiver;
  };
  function ToolBar$middleTitle$lambda($receiver) {
    flexAlignItemsCenter($receiver);
    return Unit;
  }
  function ToolBar$middleTitle$lambda_0(closure$fn) {
    return function ($receiver) {
      margin1($receiver);
      $receiver.style.fontSize = '1.25rem';
      closure$fn($receiver);
      return Unit;
    };
  }
  ToolBar.prototype.middleTitle_ocyzvr$ = function (fn) {
    return span(this.middle_iw61es$(ToolBar$middleTitle$lambda), ToolBar$middleTitle$lambda_0(fn));
  };
  Object.defineProperty(ToolBar.prototype, 'right', {
    get: function () {
      return this.right_uv8280$_0.value;
    }
  });
  ToolBar.prototype.right_iw61es$ = function (fn) {
    var $receiver = this.right;
    fn($receiver);
    return $receiver;
  };
  function ToolBar$element$lambda($receiver) {
    flexFixedSize($receiver);
    bgLight($receiver);
    padding1($receiver);
    return Unit;
  }
  function ToolBar$left$lambda$lambda($receiver) {
    flex($receiver);
    flexFixedSize($receiver);
    return Unit;
  }
  function ToolBar$left$lambda(this$ToolBar) {
    return function () {
      var $receiver = div(document, ToolBar$left$lambda$lambda);
      insertAt(this$ToolBar.element, 0, $receiver);
      return $receiver;
    };
  }
  function ToolBar$middle$lambda$lambda($receiver) {
    flex($receiver);
    flexGrow1($receiver);
    return Unit;
  }
  function ToolBar$middle$lambda(this$ToolBar) {
    return function () {
      return div(this$ToolBar.element, ToolBar$middle$lambda$lambda);
    };
  }
  function ToolBar$right$lambda$lambda($receiver) {
    flex($receiver);
    flexFixedSize($receiver);
    return Unit;
  }
  function ToolBar$right$lambda(this$ToolBar) {
    return function () {
      this$ToolBar.middle;
      return div(this$ToolBar.element, ToolBar$right$lambda$lambda);
    };
  }
  ToolBar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToolBar',
    interfaces: []
  };
  function toolbar$lambda($receiver) {
    return Unit;
  }
  function toolbar($receiver, fn) {
    if (fn === void 0)
      fn = toolbar$lambda;
    var $receiver_0 = new ToolBar($receiver);
    fn($receiver_0);
    return $receiver_0;
  }
  function topbar$lambda($receiver) {
    return Unit;
  }
  function topbar($receiver, fn) {
    if (fn === void 0)
      fn = topbar$lambda;
    var $receiver_0 = toolbar($receiver, fn);
    borderBottom($receiver_0.element);
    return $receiver_0;
  }
  function bottombar$lambda($receiver) {
    return Unit;
  }
  function bottombar($receiver, fn) {
    if (fn === void 0)
      fn = bottombar$lambda;
    var $receiver_0 = toolbar($receiver, fn);
    borderTop($receiver_0.element);
    return $receiver_0;
  }
  function ScreenLayout(element) {
    this.element = element;
    var $receiver = this.element;
    flex($receiver);
    flexColumn($receiver);
    this.top_2j5p02$_0 = lazy(ScreenLayout$top$lambda(this));
    this.main_7kw2y0$_0 = lazy(ScreenLayout$main$lambda(this));
    this.bottom_iwvh9i$_0 = lazy(ScreenLayout$bottom$lambda(this));
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
  ScreenLayout.prototype.main_iw61es$ = function (fn) {
    var $receiver = this.main;
    fn($receiver);
    return $receiver;
  };
  Object.defineProperty(ScreenLayout.prototype, 'bottom', {
    get: function () {
      return this.bottom_iwvh9i$_0.value;
    }
  });
  ScreenLayout.prototype.bottom_vesf63$ = function (fn) {
    var $receiver = this.bottom;
    fn($receiver);
    return $receiver;
  };
  function ScreenLayout$top$lambda(this$ScreenLayout) {
    return function () {
      var $receiver = topbar(document);
      insertAt(this$ScreenLayout.element, 0, $receiver.element);
      return $receiver;
    };
  }
  function ScreenLayout$main$lambda$lambda($receiver) {
    flex($receiver);
    flexGrow1($receiver);
    return Unit;
  }
  function ScreenLayout$main$lambda(this$ScreenLayout) {
    return function () {
      return div(this$ScreenLayout.element, ScreenLayout$main$lambda$lambda);
    };
  }
  function ScreenLayout$bottom$lambda(this$ScreenLayout) {
    return function () {
      this$ScreenLayout.main;
      return bottombar(this$ScreenLayout.element);
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
  function screenLayout($receiver, fn) {
    if (fn === void 0)
      fn = screenLayout$lambda;
    var $receiver_0 = new ScreenLayout($receiver);
    fn($receiver_0);
    return $receiver_0;
  }
  var package$commonui = _.commonui || (_.commonui = {});
  package$commonui.AppCtx = AppCtx;
  package$commonui.nextButton_t3i1hh$ = nextButton;
  package$commonui.nextButton_rqshq1$ = nextButton_0;
  package$commonui.hourglass_ejp6nk$ = hourglass;
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
  Slider.Wrapper = Slider$Wrapper;
  package$commonui.Slider = Slider;
  Object.defineProperty(SlideState, 'Left', {
    get: SlideState$Left_getInstance
  });
  Object.defineProperty(SlideState, 'Center', {
    get: SlideState$Center_getInstance
  });
  Object.defineProperty(SlideState, 'Right', {
    get: SlideState$Right_getInstance
  });
  package$commonui.SlideState = SlideState;
  package$commonui.Transition = Transition;
  package$commonui.Screen = Screen;
  package$commonui.ToolBar = ToolBar;
  package$commonui.toolbar_8ct6zf$ = toolbar;
  package$commonui.topbar_8ct6zf$ = topbar;
  package$commonui.bottombar_8ct6zf$ = bottombar;
  package$commonui.ScreenLayout = ScreenLayout;
  package$commonui.screenLayout_g4155o$ = screenLayout;
  Kotlin.defineModule('appsimake-commonui', _);
  return _;
}(typeof this['appsimake-commonui'] === 'undefined' ? {} : this['appsimake-commonui'], kotlin, this['appsimake-common'], this['appsimake-bootstrap'], this['appsimake-buildenv'], this['appsimake-domx'], this['appsimake-fontawesome'], this['kotlinx-coroutines-core']);

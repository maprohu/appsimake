if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'commonui'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'commonui'.");
}
if (typeof bootstrap === 'undefined') {
  throw new Error("Error loading module 'commonui'. Its dependency 'bootstrap' was not found. Please, check whether 'bootstrap' is loaded prior to 'commonui'.");
}
if (typeof domx === 'undefined') {
  throw new Error("Error loading module 'commonui'. Its dependency 'domx' was not found. Please, check whether 'domx' is loaded prior to 'commonui'.");
}
if (typeof fontawesome === 'undefined') {
  throw new Error("Error loading module 'commonui'. Its dependency 'fontawesome' was not found. Please, check whether 'fontawesome' is loaded prior to 'commonui'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'commonui'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'commonui'.");
}
var commonui = function (_, Kotlin, $module$bootstrap, $module$domx, $module$fontawesome, $module$common) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var setupFullScreen = $module$bootstrap.bootstrap.setupFullScreen;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var flexRow = $module$bootstrap.bootstrap.flexRow_ejp6nk$;
  var flexGrow1 = $module$bootstrap.bootstrap.flexGrow1_ejp6nk$;
  var div = $module$domx.domx.div_gnmiz0$;
  var chevronRight = $module$fontawesome.fontawesome.chevronRight_asww5s$;
  var listButton = $module$bootstrap.bootstrap.listButton_juq4uf$;
  var spinner = $module$fontawesome.fontawesome.spinner_asww5s$;
  var centerDiv = $module$bootstrap.bootstrap.centerDiv_gnmiz0$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var flex = $module$bootstrap.bootstrap.flex_ejp6nk$;
  var Var = $module$common.rx.Var;
  var resizeEvent = $module$common.common.resizeEvent_5ehnu1$;
  var Rx_init = $module$common.rx.Rx_init_klfg04$;
  var rxClass = $module$common.rx.rxClass_jgfmsn$;
  var get_classes = $module$domx.domx.get_classes_ejp6nk$;
  var styles = $module$domx.styles;
  var padding2 = $module$bootstrap.bootstrap.padding2_ejp6nk$;
  var column = $module$bootstrap.bootstrap.column_gnmiz0$;
  var removeFromParent = $module$common.common.removeFromParent_asww5s$;
  var flexCenter = $module$bootstrap.bootstrap.flexCenter_ejp6nk$;
  var KillableSeq = $module$common.killable.KillableSeq;
  var throwUPAE = Kotlin.throwUPAE;
  var fullSize = $module$bootstrap.bootstrap.fullSize_ejp6nk$;
  var linkedIterable = $module$common.common.linkedIterable_h43q6c$;
  var flexColumn = $module$bootstrap.bootstrap.flexColumn_ejp6nk$;
  var flexShrink0 = $module$bootstrap.bootstrap.flexShrink0_ejp6nk$;
  var margin2 = $module$bootstrap.bootstrap.margin2_ejp6nk$;
  var chevronLeft = $module$fontawesome.fontawesome.chevronLeft_asww5s$;
  var span = $module$domx.domx.span_c7xqcp$;
  var button = $module$domx.domx.button_9ztatb$;
  var Killables = $module$common.killable.Killables;
  var add = $module$common.killable.add_8dof8l$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var rxClasses = $module$common.rx.rxClasses_5wy11i$;
  var li = $module$domx.domx.li_8ixz9m$;
  var breadcrumb = $module$bootstrap.bootstrap.breadcrumb_waljkg$;
  var dropdownDiv = $module$bootstrap.bootstrap.dropdownDiv_gnmiz0$;
  var btnSecondary = $module$bootstrap.bootstrap.btnSecondary_ejp6nk$;
  var btnButton = $module$bootstrap.bootstrap.btnButton_9ztatb$;
  var flexAlignItemsCenter = $module$bootstrap.bootstrap.flexAlignItemsCenter_ejp6nk$;
  var flexFixedSize = $module$bootstrap.bootstrap.flexFixedSize_ejp6nk$;
  var bgLight = $module$bootstrap.bootstrap.bgLight_ejp6nk$;
  var padding1 = $module$bootstrap.bootstrap.padding1_ejp6nk$;
  var row = $module$bootstrap.bootstrap.row_gnmiz0$;
  var margin1 = $module$bootstrap.bootstrap.margin1_ejp6nk$;
  var insertAt = $module$common.common.insertAt_tevjyx$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var borderBottom = $module$bootstrap.bootstrap.borderBottom_ejp6nk$;
  var borderTop = $module$bootstrap.bootstrap.borderTop_ejp6nk$;
  Orientation.prototype = Object.create(Enum.prototype);
  Orientation.prototype.constructor = Orientation;
  SlideState.prototype = Object.create(Enum.prototype);
  SlideState.prototype.constructor = SlideState;
  function AppCtx() {
    this.root = new RootPanel(ensureNotNull(document.body));
    setupFullScreen();
    this.hourglass();
  }
  AppCtx.prototype.hourglass = function () {
    this.root.setHourglass();
  };
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
      padding2($receiver);
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
  function ToolBar(node, fn) {
    if (fn === void 0)
      fn = ToolBar_init$lambda;
    this.element = row(node, ToolBar$element$lambda);
    this.left_eu5367$_0 = lazy(ToolBar$left$lambda(this));
    this.middle_z51f1f$_0 = lazy(ToolBar$middle$lambda(this));
    this.right_uv8280$_0 = lazy(ToolBar$right$lambda(this));
    fn(this);
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
  function ToolBar_init$lambda($receiver) {
    return Unit;
  }
  function ToolBar$element$lambda($receiver) {
    flexFixedSize($receiver);
    bgLight($receiver);
    padding1($receiver);
    return Unit;
  }
  function ToolBar$left$lambda$lambda($receiver) {
    flex($receiver);
    flexFixedSize($receiver);
    margin1($receiver);
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
    margin1($receiver);
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
    margin1($receiver);
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
    return new ToolBar($receiver, fn);
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
  function ScreenLayout(element, fn) {
    if (fn === void 0)
      fn = ScreenLayout_init$lambda;
    this.element = element;
    var $receiver = this.element;
    flex($receiver);
    flexColumn($receiver);
    this.top_2j5p02$_0 = lazy(ScreenLayout$top$lambda(this));
    this.main_7kw2y0$_0 = lazy(ScreenLayout$main$lambda(this));
    this.bottom_iwvh9i$_0 = lazy(ScreenLayout$bottom$lambda(this));
    fn(this);
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
  function ScreenLayout_init$lambda($receiver) {
    return Unit;
  }
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
    return new ScreenLayout($receiver, fn);
  }
  var package$commonui = _.commonui || (_.commonui = {});
  package$commonui.AppCtx = AppCtx;
  package$commonui.nextButton_t3i1hh$ = nextButton;
  package$commonui.nextButton_rqshq1$ = nextButton_0;
  package$commonui.hourglass_ejp6nk$ = hourglass;
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
  Kotlin.defineModule('commonui', _);
  return _;
}(typeof commonui === 'undefined' ? {} : commonui, kotlin, bootstrap, domx, fontawesome, common);

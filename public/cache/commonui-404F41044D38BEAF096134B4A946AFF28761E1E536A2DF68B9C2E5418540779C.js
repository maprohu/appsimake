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
  var removeFromParent = $module$common.common.removeFromParent_asww5s$;
  var column = $module$bootstrap.bootstrap.column_gnmiz0$;
  var flexCenter = $module$bootstrap.bootstrap.flexCenter_ejp6nk$;
  var KillableSeq = $module$common.killable.KillableSeq;
  var throwUPAE = Kotlin.throwUPAE;
  var fullSize = $module$bootstrap.bootstrap.fullSize_ejp6nk$;
  var get_classes = $module$domx.domx.get_classes_ejp6nk$;
  var styles = $module$domx.styles;
  var linkedIterable = $module$common.common.linkedIterable_h43q6c$;
  var flexColumn = $module$bootstrap.bootstrap.flexColumn_ejp6nk$;
  var flexShrink0 = $module$bootstrap.bootstrap.flexShrink0_ejp6nk$;
  var margin2 = $module$bootstrap.bootstrap.margin2_ejp6nk$;
  var chevronLeft = $module$fontawesome.fontawesome.chevronLeft_asww5s$;
  var span = $module$domx.domx.span_c7xqcp$;
  var button = $module$domx.domx.button_9ztatb$;
  var Killables = $module$common.killable.Killables;
  var Rx_init = $module$common.rx.Rx_init_klfg04$;
  var add = $module$common.killable.add_8dof8l$;
  var Var = $module$common.rx.Var;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var rxClasses = $module$common.rx.rxClasses_5wy11i$;
  var rxClass = $module$common.rx.rxClass_jgfmsn$;
  var li = $module$domx.domx.li_8ixz9m$;
  var breadcrumb = $module$bootstrap.bootstrap.breadcrumb_waljkg$;
  var dropdownDiv = $module$bootstrap.bootstrap.dropdownDiv_gnmiz0$;
  var topbar = $module$bootstrap.bootstrap.topbar_gnmiz0$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
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
      this$Slider.breadcrumbOL = breadcrumb($receiver, Slider_init$lambda$lambda$lambda);
      this$Slider.dropdownDiv = dropdownDiv($receiver, Slider_init$lambda$lambda$lambda_0);
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
  var package$commonui = _.commonui || (_.commonui = {});
  package$commonui.AppCtx = AppCtx;
  package$commonui.nextButton_t3i1hh$ = nextButton;
  package$commonui.nextButton_rqshq1$ = nextButton_0;
  package$commonui.hourglass_ejp6nk$ = hourglass;
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
  Kotlin.defineModule('commonui', _);
  return _;
}(typeof commonui === 'undefined' ? {} : commonui, kotlin, bootstrap, domx, fontawesome, common);

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'bootstrap'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'bootstrap'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'bootstrap'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'bootstrap'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'bootstrap'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'bootstrap'.");
}
var bootstrap = function (_, Kotlin, $module$common, $module$kotlinx_html_js) {
  'use strict';
  var throwUPAE = Kotlin.throwUPAE;
  var Unit = Kotlin.kotlin.Unit;
  var styles = $module$common.styles;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var linkedIterable = $module$common.common.linkedIterable_h43q6c$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var fa = $module$common.common.fa_bq9830$;
  var span = $module$kotlinx_html_js.kotlinx.html.js.span_x24v7w$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var button = $module$kotlinx_html_js.kotlinx.html.js.button_yqfwmz$;
  var Killables = $module$common.common.Killables;
  var Rx_init = $module$common.rx.Rx_init_klfg04$;
  var add = $module$common.rx.add_hbf74d$;
  var Var = $module$common.rx.Var;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var removeFromParent = $module$common.common.removeFromParent_asww5s$;
  var rxClasses = $module$common.rx.rxClasses_5wy11i$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var li = $module$kotlinx_html_js.kotlinx.html.js.li_525bpd$;
  var rxClass = $module$common.rx.rxClass_jgfmsn$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var breadcrumb = $module$common.common.breadcrumb_xjd1qy$;
  var dropdown = $module$common.common.dropdown_xt65r4$;
  var topbar = $module$common.common.topbar_xt65r4$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var a = $module$kotlinx_html_js.kotlinx.html.js.a_5i6vd$;
  SlideState.prototype = Object.create(Enum.prototype);
  SlideState.prototype.constructor = SlideState;
  function Slider(root, element) {
    this.current = new Var(null);
    this.relativeDiv_2lmkg1$_0 = this.relativeDiv_2lmkg1$_0;
    this.dropdownDiv_t40nus$_0 = this.dropdownDiv_t40nus$_0;
    this.breadcrumbOL_9llqls$_0 = this.breadcrumbOL_9llqls$_0;
    append(element, Slider_init$lambda(this));
    this.current.now = new Slider$Wrapper(this, root);
    this.current.forEach_qlkmfe$(Slider_init$lambda_0);
  }
  Object.defineProperty(Slider.prototype, 'relativeDiv', {
    get: function () {
      if (this.relativeDiv_2lmkg1$_0 == null)
        return throwUPAE('relativeDiv');
      return this.relativeDiv_2lmkg1$_0;
    },
    set: function (relativeDiv) {
      this.relativeDiv_2lmkg1$_0 = relativeDiv;
    }
  });
  Object.defineProperty(Slider.prototype, 'dropdownDiv', {
    get: function () {
      if (this.dropdownDiv_t40nus$_0 == null)
        return throwUPAE('dropdownDiv');
      return this.dropdownDiv_t40nus$_0;
    },
    set: function (dropdownDiv) {
      this.dropdownDiv_t40nus$_0 = dropdownDiv;
    }
  });
  Object.defineProperty(Slider.prototype, 'breadcrumbOL', {
    get: function () {
      if (this.breadcrumbOL_9llqls$_0 == null)
        return throwUPAE('breadcrumbOL');
      return this.breadcrumbOL_9llqls$_0;
    },
    set: function (breadcrumbOL) {
      this.breadcrumbOL_9llqls$_0 = breadcrumbOL;
    }
  });
  function Slider$slidingDiv$lambda($receiver) {
    return Unit;
  }
  function Slider$slidingDiv$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  Slider.prototype.slidingDiv_xt65r4$ = function ($receiver, block) {
    if (block === void 0)
      block = Slider$slidingDiv$lambda;
    return div($receiver, 'position-absolute w-100 h-100 ' + styles.transformRight, Slider$slidingDiv$lambda_0(block));
  };
  Slider.prototype.next_znjm9$ = function (screen) {
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
    append(this.$outer.relativeDiv, Slider$Slider$Wrapper_init$lambda(this, this.$outer));
    append(this.$outer.breadcrumbOL, Slider$Slider$Wrapper_init$lambda_0(this));
  }
  Slider$Wrapper.prototype.slider = function () {
    return this.$outer;
  };
  Slider$Wrapper.prototype.moveTo_qvk61p$ = function (state) {
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
  function Slider$Wrapper$backPanel$lambda$lambda$lambda(closure$content) {
    return function ($receiver) {
      closure$content($receiver);
      return Unit;
    };
  }
  function Slider$Wrapper$backPanel$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Back');
    return Unit;
  }
  function Slider$Wrapper$backPanel$lambda$lambda$lambda$lambda_0(this$Wrapper) {
    return function (it) {
      var $receiver = ensureNotNull(this$Wrapper.prev);
      $receiver.focus();
      $receiver.disposeNexts();
      return Unit;
    };
  }
  function Slider$Wrapper$backPanel$lambda$lambda$lambda_0(this$, this$Wrapper) {
    return function ($receiver) {
      fa(this$, 'chevron-left');
      span(this$, 'flex-grow-1', Slider$Wrapper$backPanel$lambda$lambda$lambda$lambda);
      set_onClickFunction($receiver, Slider$Wrapper$backPanel$lambda$lambda$lambda$lambda_0(this$Wrapper));
      return Unit;
    };
  }
  function Slider$Wrapper$backPanel$lambda$lambda(closure$content, this$, this$Wrapper) {
    return function ($receiver) {
      div(this$, 'flex-grow-1 ' + styles.scrollVertical, Slider$Wrapper$backPanel$lambda$lambda$lambda(closure$content));
      button(this$, void 0, void 0, void 0, ButtonType.button, 'btn btn-light border flex-shrink-0 d-flex flex-row m-2', Slider$Wrapper$backPanel$lambda$lambda$lambda_0(this$, this$Wrapper));
      return Unit;
    };
  }
  Slider$Wrapper.prototype.backPanel_xfb89v$ = function (to, content) {
    div(to, 'd-flex flex-column w-100 h-100', Slider$Wrapper$backPanel$lambda$lambda(content, to, this));
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
  function Slider$Slider$Wrapper_init$lambda$lambda(this$Wrapper, this$) {
    return function ($receiver) {
      this$Wrapper.screen.content(this$, this$Wrapper);
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda$lambda(this$Wrapper) {
    return function (it) {
      this$Wrapper.animating_0.now = true;
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda$lambda_0(this$Wrapper) {
    return function (it) {
      this$Wrapper.animating_0.now = false;
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda$lambda$lambda(this$, this$Wrapper) {
    return function (it) {
      if (it) {
        removeFromParent(this$);
        this$Wrapper.killables.kill();
      }
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda$lambda_1(this$Wrapper, this$) {
    return function () {
      this$Wrapper.canDispose_0.forEach_qlkmfe$(Slider$Slider$Wrapper_init$lambda$lambda$lambda$lambda(this$, this$Wrapper));
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda(this$Wrapper, this$Slider) {
    return function ($receiver) {
      var $receiver_0 = this$Slider.slidingDiv_xt65r4$($receiver, Slider$Slider$Wrapper_init$lambda$lambda(this$Wrapper, $receiver));
      var this$Wrapper_0 = this$Wrapper;
      $receiver_0.addEventListener('animationstart', Slider$Slider$Wrapper_init$lambda$lambda$lambda(this$Wrapper_0));
      $receiver_0.addEventListener('animationend', Slider$Slider$Wrapper_init$lambda$lambda$lambda_0(this$Wrapper_0));
      this$Wrapper_0.preKillables.add_o14v8n$(Slider$Slider$Wrapper_init$lambda$lambda$lambda_1(this$Wrapper_0, $receiver_0));
      rxClasses($receiver_0, this$Wrapper_0.slideClass);
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda$lambda_2(this$Wrapper) {
    return function (it) {
      this$Wrapper.focus();
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda_0(this$Wrapper, this$) {
    return function ($receiver) {
      this$Wrapper.screen.label(this$);
      set_onClickFunction($receiver, Slider$Slider$Wrapper_init$lambda$lambda$lambda_2(this$Wrapper));
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda$lambda_3(closure$it) {
    return function () {
      removeFromParent(closure$it);
      return Unit;
    };
  }
  function Slider$Slider$Wrapper_init$lambda$lambda$lambda_4(this$Wrapper) {
    return function () {
      return this$Wrapper.isCurrent.invoke() ? 'active' : styles.cursorPointer;
    };
  }
  function Slider$Slider$Wrapper_init$lambda_0(this$Wrapper) {
    return function ($receiver) {
      var $receiver_0 = li($receiver, 'breadcrumb-item', Slider$Slider$Wrapper_init$lambda$lambda_0(this$Wrapper, $receiver));
      var this$Wrapper_0 = this$Wrapper;
      this$Wrapper_0.preKillables.add_o14v8n$(Slider$Slider$Wrapper_init$lambda$lambda$lambda_3($receiver_0));
      rxClass($receiver_0, Rx_init(Slider$Slider$Wrapper_init$lambda$lambda$lambda_4(this$Wrapper_0)));
      return Unit;
    };
  }
  Slider$Wrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Wrapper',
    interfaces: []
  };
  function Slider_init$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function Slider_init$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function Slider_init$lambda$lambda$lambda(this$, this$Slider) {
    return function ($receiver) {
      this$Slider.breadcrumbOL = breadcrumb(this$, Slider_init$lambda$lambda$lambda$lambda);
      this$Slider.dropdownDiv = dropdown(this$, Slider_init$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function Slider_init$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function Slider_init$lambda$lambda(this$, this$Slider) {
    return function ($receiver) {
      topbar(this$, Slider_init$lambda$lambda$lambda(this$, this$Slider));
      this$Slider.relativeDiv = div(this$, 'flex-grow-1 position-relative', Slider_init$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function Slider_init$lambda(this$Slider) {
    return function ($receiver) {
      div($receiver, 'w-100 h-100 d-flex flex-column', Slider_init$lambda$lambda($receiver, this$Slider));
      return Unit;
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Slider_init$lambda_0(it) {
    if (it != null) {
      it.moveTo_qvk61p$(SlideState$Center_getInstance());
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
        element.moveTo_qvk61p$(SlideState$Right_getInstance());
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
        element_0.moveTo_qvk61p$(SlideState$Left_getInstance());
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
      default:throwISE('No enum constant common.SlideState.' + name);
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
  Transition.prototype.copy_pch46$ = function (from, to) {
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
  function listButton$lambda(closure$content) {
    return function ($receiver) {
      closure$content($receiver);
      return Unit;
    };
  }
  function listButton($receiver, content) {
    return a($receiver, '#', void 0, 'list-group-item list-group-item-action d-flex flex-row', listButton$lambda(content));
  }
  function nextButton$lambda$lambda(closure$label) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$label);
      return Unit;
    };
  }
  function nextButton$lambda$lambda_0(closure$fn) {
    return function (it) {
      closure$fn();
      return Unit;
    };
  }
  function nextButton$lambda(closure$label, this$nextButton, closure$fn) {
    return function ($receiver) {
      div(this$nextButton, 'flex-grow-1', nextButton$lambda$lambda(closure$label));
      fa(this$nextButton, 'chevron-right');
      set_onClickFunction($receiver, nextButton$lambda$lambda_0(closure$fn));
      return Unit;
    };
  }
  function nextButton($receiver, label, fn) {
    return listButton($receiver, nextButton$lambda(label, $receiver, fn));
  }
  function nextButton$lambda$lambda_1(closure$label, this$nextButton) {
    return function ($receiver) {
      closure$label(this$nextButton);
      return Unit;
    };
  }
  function nextButton$lambda$lambda_2(closure$fn) {
    return function (it) {
      closure$fn();
      return Unit;
    };
  }
  function nextButton$lambda_0(closure$label, this$nextButton, closure$fn) {
    return function ($receiver) {
      div(this$nextButton, 'flex-grow-1', nextButton$lambda$lambda_1(closure$label, this$nextButton));
      fa(this$nextButton, 'chevron-right');
      set_onClickFunction($receiver, nextButton$lambda$lambda_2(closure$fn));
      return Unit;
    };
  }
  function nextButton_0($receiver, label, fn) {
    return listButton($receiver, nextButton$lambda_0(label, $receiver, fn));
  }
  function commandButton$lambda$lambda(closure$label) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$label);
      return Unit;
    };
  }
  function commandButton$lambda$lambda_0(closure$fn) {
    return function (it) {
      closure$fn();
      return Unit;
    };
  }
  function commandButton$lambda(closure$label, this$commandButton, closure$fn) {
    return function ($receiver) {
      div(this$commandButton, 'flex-grow-1', commandButton$lambda$lambda(closure$label));
      set_onClickFunction($receiver, commandButton$lambda$lambda_0(closure$fn));
      return Unit;
    };
  }
  function commandButton($receiver, label, fn) {
    return listButton($receiver, commandButton$lambda(label, $receiver, fn));
  }
  function hourglass$lambda(this$hourglass) {
    return function ($receiver) {
      fa(this$hourglass, 'spinner fa-spin');
      return Unit;
    };
  }
  function hourglass($receiver) {
    return div($receiver, 'w-100 h-100 d-flex align-items-center justify-content-center', hourglass$lambda($receiver));
  }
  function rxDisplay$lambda(this$rxDisplay) {
    return function (it) {
      this$rxDisplay.style.cssText = it ? '' : 'display: none !important;';
      return Unit;
    };
  }
  function rxDisplay($receiver, rxVal) {
    return rxVal.forEach_qlkmfe$(rxDisplay$lambda($receiver));
  }
  function rxText$lambda(this$rxText) {
    return function (it) {
      this$rxText.innerText = it;
      return Unit;
    };
  }
  function rxText($receiver, rxVal) {
    return rxVal.forEach_qlkmfe$(rxText$lambda($receiver));
  }
  Slider.Wrapper = Slider$Wrapper;
  var package$common = _.common || (_.common = {});
  package$common.Slider = Slider;
  Object.defineProperty(SlideState, 'Left', {
    get: SlideState$Left_getInstance
  });
  Object.defineProperty(SlideState, 'Center', {
    get: SlideState$Center_getInstance
  });
  Object.defineProperty(SlideState, 'Right', {
    get: SlideState$Right_getInstance
  });
  package$common.SlideState = SlideState;
  package$common.Transition = Transition;
  package$common.Screen = Screen;
  package$common.listButton_h10u0g$ = listButton;
  package$common.nextButton_lqo47t$ = nextButton;
  package$common.nextButton_dp6e3f$ = nextButton_0;
  package$common.commandButton_lqo47t$ = commandButton;
  package$common.hourglass_oypc8e$ = hourglass;
  package$common.rxDisplay_86pnez$ = rxDisplay;
  package$common.rxText_btzx6a$ = rxText;
  Kotlin.defineModule('bootstrap', _);
  return _;
}(typeof bootstrap === 'undefined' ? {} : bootstrap, kotlin, common, this['kotlinx-html-js']);

//# sourceMappingURL=bootstrap.js.map

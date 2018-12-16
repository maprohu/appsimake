if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'bootstrap'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'bootstrap'.");
}
if (typeof domx === 'undefined') {
  throw new Error("Error loading module 'bootstrap'. Its dependency 'domx' was not found. Please, check whether 'domx' is loaded prior to 'bootstrap'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'bootstrap'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'bootstrap'.");
}
var bootstrap = function (_, Kotlin, $module$domx, $module$common) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var get_classes = $module$domx.domx.get_classes_ejp6nk$;
  var div = $module$domx.domx.div_gnmiz0$;
  var ol = $module$domx.domx.ol_waljkg$;
  var set = $module$domx.domx.set_56wq3j$;
  var a = $module$domx.domx.a_6t02fy$;
  var clickEvent = $module$domx.domx.clickEvent_bvfv80$;
  var ul = $module$domx.domx.ul_t7sdcm$;
  var li = $module$domx.domx.li_8ixz9m$;
  var Rx_init = $module$common.rx.Rx_init_klfg04$;
  var rxClassOpt = $module$common.rx.rxClassOpt_ywk6sc$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var styles = $module$domx.styles;
  var removeFromParent = $module$common.common.removeFromParent_asww5s$;
  var Killables = $module$common.killable.Killables;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var button = $module$domx.domx.button_9ztatb$;
  function topbar$lambda($receiver) {
    return Unit;
  }
  function topbar$lambda_0(closure$block) {
    return function ($receiver) {
      flexRow($receiver);
      get_classes($receiver).plusAssign_61zpoe$('border-bottom bg-light align-items-center pr-1');
      closure$block($receiver);
      return Unit;
    };
  }
  function topbar($receiver, block) {
    if (block === void 0)
      block = topbar$lambda;
    div($receiver, topbar$lambda_0(block));
  }
  function breadcrumb$lambda($receiver) {
    return Unit;
  }
  function breadcrumb$lambda_0(closure$block) {
    return function ($receiver) {
      flexGrow1($receiver);
      get_classes($receiver).plusAssign_61zpoe$('breadcrumb mb-0 bg-transparent');
      closure$block($receiver);
      return Unit;
    };
  }
  function breadcrumb($receiver, block) {
    if (block === void 0)
      block = breadcrumb$lambda;
    return ol($receiver, breadcrumb$lambda_0(block));
  }
  function dropdownToggleButton$lambda($receiver) {
    return Unit;
  }
  function dropdownToggleButton$lambda_0(closure$fn) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$('dropdown-toggle');
      set($receiver.attributes, 'data-toggle', 'dropdown');
      closure$fn($receiver);
      return Unit;
    };
  }
  function dropdownToggleButton($receiver, fn) {
    if (fn === void 0)
      fn = dropdownToggleButton$lambda;
    return btnButton($receiver, dropdownToggleButton$lambda_0(fn));
  }
  function dropdownDiv$lambda($receiver) {
    return Unit;
  }
  function dropdownDiv$lambda$lambda(closure$block) {
    return function ($receiver) {
      dropdownMenu($receiver);
      closure$block($receiver);
      return Unit;
    };
  }
  function dropdownDiv$lambda_0(closure$block) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$('dropdown');
      dropdownToggleButton($receiver);
      div($receiver, dropdownDiv$lambda$lambda(closure$block));
      return Unit;
    };
  }
  function dropdownDiv($receiver, block) {
    if (block === void 0)
      block = dropdownDiv$lambda;
    return div($receiver, dropdownDiv$lambda_0(block));
  }
  function dropdownItemAnchor$lambda($receiver) {
    return Unit;
  }
  function dropdownItemAnchor$lambda_0(closure$block) {
    return function ($receiver) {
      dropdownItem($receiver);
      $receiver.href = '#';
      closure$block($receiver);
      return Unit;
    };
  }
  function dropdownItemAnchor($receiver, block) {
    if (block === void 0)
      block = dropdownItemAnchor$lambda;
    return a($receiver, dropdownItemAnchor$lambda_0(block));
  }
  function listAction$lambda(closure$content) {
    return function ($receiver) {
      $receiver.href = '#';
      get_classes($receiver).plusAssign_61zpoe$('list-group-item list-group-item-action');
      closure$content($receiver);
      return Unit;
    };
  }
  function listAction($receiver, content) {
    return a($receiver, listAction$lambda(content));
  }
  function listButton$lambda() {
    return Unit;
  }
  function listButton$lambda$lambda(closure$fn) {
    return function (it) {
      closure$fn();
      return Unit;
    };
  }
  function listButton$lambda_0(closure$fn, closure$content) {
    return function ($receiver) {
      clickEvent($receiver, listButton$lambda$lambda(closure$fn));
      closure$content($receiver);
      return Unit;
    };
  }
  function listButton($receiver, fn, content) {
    if (fn === void 0)
      fn = listButton$lambda;
    return listAction($receiver, listButton$lambda_0(fn, content));
  }
  function listGroup$lambda(closure$content) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$('list-group');
      closure$content($receiver);
      return Unit;
    };
  }
  function listGroup($receiver, content) {
    return ul($receiver, listGroup$lambda(content));
  }
  function listGroupItem$lambda(closure$content) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$('list-group-item');
      closure$content($receiver);
      return Unit;
    };
  }
  function listGroupItem($receiver, content) {
    return li($receiver, listGroupItem$lambda(content));
  }
  function commandButton$lambda(closure$label) {
    return function ($receiver) {
      $receiver.innerText = closure$label;
      return Unit;
    };
  }
  function commandButton($receiver, label, fn) {
    return listButton($receiver, fn, commandButton$lambda(label));
  }
  function centerDiv$lambda(closure$block) {
    return function ($receiver) {
      fullSize($receiver);
      flexCenter($receiver);
      closure$block($receiver);
      return Unit;
    };
  }
  function centerDiv($receiver, block) {
    return div($receiver, centerDiv$lambda(block));
  }
  function flexJustifyContentCenter($receiver) {
    flex($receiver);
    get_classes($receiver).plusAssign_61zpoe$('justify-content-center');
  }
  function flexAlignItemsCenter($receiver) {
    flex($receiver);
    get_classes($receiver).plusAssign_61zpoe$('align-items-center');
  }
  function flexCenter($receiver) {
    flex($receiver);
    flexJustifyContentCenter($receiver);
    flexAlignItemsCenter($receiver);
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
  function rxAnchorEnabled$lambda(closure$rxVal) {
    return function () {
      return closure$rxVal.invoke() ? null : 'disabled';
    };
  }
  function rxAnchorEnabled($receiver, rxVal) {
    var stl = Rx_init(rxAnchorEnabled$lambda(rxVal));
    rxClassOpt($receiver, stl);
    return stl;
  }
  function rxAnchorClick$lambda(closure$rxVal, closure$fn) {
    return function (it) {
      if (closure$rxVal.now) {
        closure$fn(it);
      }
      return Unit;
    };
  }
  function rxAnchorClick($receiver, rxVal, fn) {
    var rx = rxAnchorEnabled($receiver, rxVal);
    clickEvent($receiver, rxAnchorClick$lambda(rxVal, fn));
    return rx;
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
  function rxText_0($receiver, fn) {
    var rx = Rx_init(fn);
    rxText($receiver, rx);
    return rx;
  }
  function setupFullScreen() {
    var $receiver = ensureNotNull(document.body);
    fullSize($receiver);
    flex($receiver);
    flexColumn($receiver);
    var $receiver_0 = ensureNotNull($receiver.parentElement);
    fullSize($receiver_0);
    get_classes($receiver_0).plusAssign_61zpoe$(styles.overflowHidden);
  }
  function Panel(root) {
    this.root_0 = root;
    this.current_0 = new Panel$Content(this, this.wrapper_0());
  }
  function Panel$Content($outer, tab) {
    this.$outer = $outer;
    this.tab = tab;
    this.$outer.root_0.appendChild(this.tab);
    this.killables = new Killables();
  }
  Panel$Content.prototype.kill_8be2vx$ = function () {
    removeFromParent(this.tab);
    this.killables.kill();
  };
  Panel$Content.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Content',
    interfaces: []
  };
  function Panel$wrapper$lambda($receiver) {
    fullSize($receiver);
    return Unit;
  }
  Panel.prototype.wrapper_0 = function () {
    return div(document, Panel$wrapper$lambda);
  };
  Panel.prototype.new_lt8gi4$ = function (wrapper) {
    if (wrapper === void 0)
      wrapper = this.wrapper_0();
    this.current_0.kill_8be2vx$();
    this.current_0 = new Panel$Content(this, wrapper);
    return this.current_0;
  };
  Panel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Panel',
    interfaces: []
  };
  function column$lambda(closure$fn) {
    return function ($receiver) {
      flexColumn($receiver);
      closure$fn($receiver);
      return Unit;
    };
  }
  function column($receiver, fn) {
    return div($receiver, column$lambda(fn));
  }
  function row$lambda(closure$fn) {
    return function ($receiver) {
      flexRow($receiver);
      closure$fn($receiver);
      return Unit;
    };
  }
  function row($receiver, fn) {
    return div($receiver, row$lambda(fn));
  }
  function btnButton$lambda(closure$fn) {
    return function ($receiver) {
      $receiver.type = 'button';
      get_classes($receiver).plusAssign_61zpoe$('btn');
      closure$fn($receiver);
      return Unit;
    };
  }
  function btnButton($receiver, fn) {
    button($receiver, btnButton$lambda(fn));
  }
  function fullSize($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('w-100 h-100');
  }
  function flex($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('d-flex');
  }
  function flexColumn($receiver) {
    flex($receiver);
    get_classes($receiver).plusAssign_61zpoe$('flex-column');
  }
  function flexRow($receiver) {
    flex($receiver);
    get_classes($receiver).plusAssign_61zpoe$('flex-row');
  }
  function margin1($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('m-1');
  }
  function margin2($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('m-2');
  }
  function padding1($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('p-1');
  }
  function padding2($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('p-2');
  }
  function paddingRight2($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('pr-2');
  }
  function paddingLeft2($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('pl-2');
  }
  function flexGrow1($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('flex-grow-1');
  }
  function flexGrow0($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('flex-grow-0');
  }
  function flexShrink0($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('flex-shrink-0');
  }
  function bgLight($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('bg-light');
  }
  function bgDark($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('bg-dark');
  }
  function flexFixedSize($receiver) {
    flexShrink0($receiver);
    flexGrow0($receiver);
  }
  function alignItemsCenter($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('align-items-center');
  }
  function border($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('border');
  }
  function borderBottom($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('border-bottom');
  }
  function borderTop($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('border-top');
  }
  function btnPrimary($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('btn-primary');
  }
  function btnSecondary($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('btn-secondary');
  }
  function formGroup($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('form-group');
  }
  function formControl($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('form-control');
  }
  function btnGroup($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('btn-group');
  }
  function dropdownMenu($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('dropdown-menu dropdown-menu-right');
  }
  function dropdownItem($receiver) {
    get_classes($receiver).plusAssign_61zpoe$('dropdown-item');
  }
  var package$bootstrap = _.bootstrap || (_.bootstrap = {});
  package$bootstrap.topbar_gnmiz0$ = topbar;
  package$bootstrap.breadcrumb_waljkg$ = breadcrumb;
  package$bootstrap.dropdownToggleButton_9ztatb$ = dropdownToggleButton;
  package$bootstrap.dropdownDiv_gnmiz0$ = dropdownDiv;
  package$bootstrap.dropdownItemAnchor_6t02fy$ = dropdownItemAnchor;
  package$bootstrap.listAction_6t02fy$ = listAction;
  package$bootstrap.listButton_juq4uf$ = listButton;
  package$bootstrap.listGroup_t7sdcm$ = listGroup;
  package$bootstrap.listGroupItem_8ixz9m$ = listGroupItem;
  package$bootstrap.commandButton_t3i1hh$ = commandButton;
  package$bootstrap.centerDiv_gnmiz0$ = centerDiv;
  package$bootstrap.flexJustifyContentCenter_ejp6nk$ = flexJustifyContentCenter;
  package$bootstrap.flexAlignItemsCenter_ejp6nk$ = flexAlignItemsCenter;
  package$bootstrap.flexCenter_ejp6nk$ = flexCenter;
  package$bootstrap.rxDisplay_86pnez$ = rxDisplay;
  package$bootstrap.rxAnchorEnabled_vewjqu$ = rxAnchorEnabled;
  package$bootstrap.rxAnchorClick_qit41n$ = rxAnchorClick;
  package$bootstrap.rxText_btzx6a$ = rxText;
  package$bootstrap.rxText_7fncnf$ = rxText_0;
  package$bootstrap.setupFullScreen = setupFullScreen;
  Panel.Content = Panel$Content;
  package$bootstrap.Panel = Panel;
  package$bootstrap.column_gnmiz0$ = column;
  package$bootstrap.row_gnmiz0$ = row;
  package$bootstrap.btnButton_9ztatb$ = btnButton;
  package$bootstrap.fullSize_ejp6nk$ = fullSize;
  package$bootstrap.flex_ejp6nk$ = flex;
  package$bootstrap.flexColumn_ejp6nk$ = flexColumn;
  package$bootstrap.flexRow_ejp6nk$ = flexRow;
  package$bootstrap.margin1_ejp6nk$ = margin1;
  package$bootstrap.margin2_ejp6nk$ = margin2;
  package$bootstrap.padding1_ejp6nk$ = padding1;
  package$bootstrap.padding2_ejp6nk$ = padding2;
  package$bootstrap.paddingRight2_ejp6nk$ = paddingRight2;
  package$bootstrap.paddingLeft2_ejp6nk$ = paddingLeft2;
  package$bootstrap.flexGrow1_ejp6nk$ = flexGrow1;
  package$bootstrap.flexGrow0_ejp6nk$ = flexGrow0;
  package$bootstrap.flexShrink0_ejp6nk$ = flexShrink0;
  package$bootstrap.bgLight_ejp6nk$ = bgLight;
  package$bootstrap.bgDark_ejp6nk$ = bgDark;
  package$bootstrap.flexFixedSize_ejp6nk$ = flexFixedSize;
  package$bootstrap.alignItemsCenter_ejp6nk$ = alignItemsCenter;
  package$bootstrap.border_ejp6nk$ = border;
  package$bootstrap.borderBottom_ejp6nk$ = borderBottom;
  package$bootstrap.borderTop_ejp6nk$ = borderTop;
  package$bootstrap.btnPrimary_ejp6nk$ = btnPrimary;
  package$bootstrap.btnSecondary_ejp6nk$ = btnSecondary;
  package$bootstrap.formGroup_ejp6nk$ = formGroup;
  package$bootstrap.formControl_ejp6nk$ = formControl;
  package$bootstrap.btnGroup_ejp6nk$ = btnGroup;
  package$bootstrap.dropdownMenu_ejp6nk$ = dropdownMenu;
  package$bootstrap.dropdownItem_ejp6nk$ = dropdownItem;
  Kotlin.defineModule('bootstrap', _);
  return _;
}(typeof bootstrap === 'undefined' ? {} : bootstrap, kotlin, domx, common);

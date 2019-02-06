if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-bootstrap'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-bootstrap'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-bootstrap'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-bootstrap'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-bootstrap'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-bootstrap'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-bootstrap'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-bootstrap'.");
}
this['appsimake-bootstrap'] = function (_, Kotlin, $module$appsimake_domx, $module$appsimake_commonshr, $module$appsimake_common) {
  'use strict';
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var Unit = Kotlin.kotlin.Unit;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_a = $module$appsimake_domx.domx.get_a_asww5s$;
  var get_leftRightTopBottom0 = $module$appsimake_domx.styles.get_leftRightTopBottom0_kre7dp$;
  var get_pointerEventsNone = $module$appsimake_domx.styles.get_pointerEventsNone_kre7dp$;
  var get_zIndex1 = $module$appsimake_domx.styles.get_zIndex1_kre7dp$;
  var get_span = $module$appsimake_domx.domx.get_span_asww5s$;
  var get_pointerEventsAll = $module$appsimake_domx.styles.get_pointerEventsAll_kre7dp$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_classes = $module$appsimake_domx.domx.get_classes_ejp6nk$;
  var ol = $module$appsimake_domx.domx.ol_waljkg$;
  var set = $module$appsimake_domx.domx.set_56wq3j$;
  var get_button = $module$appsimake_domx.domx.get_button_asww5s$;
  var get_attr = $module$appsimake_domx.domx.get_attr_ejp6nk$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var clickEvent = $module$appsimake_domx.domx.clickEvent_bvfv80$;
  var ul = $module$appsimake_domx.domx.ul_t7sdcm$;
  var li = $module$appsimake_domx.domx.li_8ixz9m$;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_klfg04$;
  var rxClassOpt = $module$appsimake_commonshr.rx.rxClassOpt_ywk6sc$;
  var orEmpty = $module$appsimake_commonshr.common.orEmpty_rw3ye5$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var get_overflowHidden = $module$appsimake_domx.styles.get_overflowHidden_kre7dp$;
  var removeFromParent = $module$appsimake_common.common.removeFromParent_asww5s$;
  var Killables = $module$appsimake_commonshr.killable.Killables;
  var css = $module$appsimake_domx.domx.css;
  function ClickItemButtons(node) {
    this.element = invoke(get_div(node), ClickItemButtons$element$lambda);
    this.anchor = invoke(get_a(this.element), ClickItemButtons$anchor$lambda);
    this.rel_0 = invoke(get_div(this.element), ClickItemButtons$rel$lambda);
    this.text = invoke(get_span(this.rel_0), ClickItemButtons$text$lambda);
    this.buttons = invoke(get_div(this.rel_0), ClickItemButtons$buttons$lambda);
  }
  function ClickItemButtons$element$lambda$lambda($receiver) {
    get_listGroupItem($receiver);
    get_positionRelative($receiver);
    get_p0($receiver);
    return Unit;
  }
  function ClickItemButtons$element$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ClickItemButtons$element$lambda$lambda);
    return Unit;
  }
  function ClickItemButtons$anchor$lambda$lambda($receiver) {
    get_positionAbsolute($receiver);
    get_leftRightTopBottom0($receiver);
    get_listGroupItemAction($receiver);
    return Unit;
  }
  function ClickItemButtons$anchor$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ClickItemButtons$anchor$lambda$lambda);
    $receiver.href = '#';
    return Unit;
  }
  function ClickItemButtons$rel$lambda$lambda($receiver) {
    get_p1($receiver);
    get_flexGrow1($receiver);
    get_dFlex($receiver);
    get_flexRow($receiver);
    get_alignItemsCenter($receiver);
    get_positionRelative($receiver);
    get_pointerEventsNone($receiver);
    get_zIndex1($receiver);
    return Unit;
  }
  function ClickItemButtons$rel$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ClickItemButtons$rel$lambda$lambda);
    return Unit;
  }
  function ClickItemButtons$text$lambda$lambda($receiver) {
    get_m1($receiver);
    get_flexGrow1($receiver);
    return Unit;
  }
  function ClickItemButtons$text$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ClickItemButtons$text$lambda$lambda);
    return Unit;
  }
  function ClickItemButtons$buttons$lambda$lambda($receiver) {
    flexFixedSize($receiver);
    get_pointerEventsAll($receiver);
    return Unit;
  }
  function ClickItemButtons$buttons$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ClickItemButtons$buttons$lambda$lambda);
    return Unit;
  }
  ClickItemButtons.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClickItemButtons',
    interfaces: []
  };
  function clickItemButtons($receiver, fn) {
    var $receiver_0 = new ClickItemButtons($receiver);
    fn($receiver_0);
    return $receiver_0;
  }
  function breadcrumb$lambda($receiver) {
    return Unit;
  }
  function breadcrumb$lambda_0(closure$block) {
    return function ($receiver) {
      get_flexGrow1(get_cls($receiver));
      get_classes($receiver).plusAssign_pdl1vj$('breadcrumb mb-0 bg-transparent');
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
      btnSecondary($receiver);
      get_classes($receiver).plusAssign_pdl1vj$('dropdown-toggle');
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
  function dropdownToggle($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('dropdown-toggle');
  }
  function DropdownGroup(node, btnStyle) {
    if (btnStyle === void 0)
      btnStyle = null;
    this.element = invoke(get_div(node), DropdownGroup$element$lambda);
    this.drop = invoke(get_button(this.element), DropdownGroup$drop$lambda(btnStyle));
    this.menu = invoke(get_div(this.element), DropdownGroup$menu$lambda);
  }
  function DropdownGroup$element$lambda$lambda($receiver) {
    get_dropdown($receiver);
    return Unit;
  }
  function DropdownGroup$element$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(DropdownGroup$element$lambda$lambda);
    return Unit;
  }
  function DropdownGroup$drop$lambda$lambda($receiver) {
    get_btn($receiver);
    get_dropdownToggle($receiver);
    return Unit;
  }
  function DropdownGroup$drop$lambda(closure$btnStyle) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(DropdownGroup$drop$lambda$lambda);
      get_classes($receiver).plusAssign_pdl1vj$(closure$btnStyle);
      dataToggleDropdown($receiver);
      return Unit;
    };
  }
  function DropdownGroup$menu$lambda$lambda($receiver) {
    get_dropdownMenu($receiver);
    return Unit;
  }
  function DropdownGroup$menu$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(DropdownGroup$menu$lambda$lambda);
    return Unit;
  }
  DropdownGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DropdownGroup',
    interfaces: []
  };
  function dataToggleDropdown($receiver) {
    get_attr($receiver).set_puj7f4$('data-toggle', 'dropdown');
  }
  function get_dropdownSplit$lambda$lambda($receiver) {
    get_btn($receiver);
    get_dropdownToggle($receiver);
    get_dropdownToggleSplit($receiver);
    return Unit;
  }
  function get_dropdownSplit$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(get_dropdownSplit$lambda$lambda);
    dataToggleDropdown($receiver);
    get_attr($receiver).set_puj7f4$('data-reference', 'parent');
    return Unit;
  }
  function get_dropdownSplit($receiver) {
    return invoke(get_button($receiver), get_dropdownSplit$lambda);
  }
  function dropdownGroup($receiver, btnStyle, fn) {
    if (btnStyle === void 0)
      btnStyle = null;
    var $receiver_0 = new DropdownGroup($receiver, btnStyle);
    get_btnGroup(get_cls($receiver_0.element));
    fn($receiver_0);
    return $receiver_0;
  }
  function dropdownDiv($receiver, btnStyle, fn) {
    if (btnStyle === void 0)
      btnStyle = null;
    var $receiver_0 = new DropdownGroup($receiver, btnStyle);
    fn($receiver_0);
    return $receiver_0;
  }
  function DropdownItemAnchor(node) {
    this.anchor = invoke(get_a(node), DropdownItemAnchor$anchor$lambda);
    this.iconSpan_0 = get_span(this.anchor);
    this.icon_dt4ob8$_0 = lazy(DropdownItemAnchor$icon$lambda(this));
    this.text = get_span(this.anchor);
  }
  Object.defineProperty(DropdownItemAnchor.prototype, 'icon', {
    get: function () {
      return this.icon_dt4ob8$_0.value;
    }
  });
  function DropdownItemAnchor$anchor$lambda$lambda($receiver) {
    get_dropdownItem($receiver);
    return Unit;
  }
  function DropdownItemAnchor$anchor$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(DropdownItemAnchor$anchor$lambda$lambda);
    $receiver.href = '#';
    return Unit;
  }
  function DropdownItemAnchor$icon$lambda$lambda$lambda($receiver) {
    get_mr2($receiver);
    return Unit;
  }
  function DropdownItemAnchor$icon$lambda$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(DropdownItemAnchor$icon$lambda$lambda$lambda);
    return Unit;
  }
  function DropdownItemAnchor$icon$lambda(this$DropdownItemAnchor) {
    return function () {
      return invoke(this$DropdownItemAnchor.iconSpan_0, DropdownItemAnchor$icon$lambda$lambda);
    };
  }
  DropdownItemAnchor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DropdownItemAnchor',
    interfaces: []
  };
  function dropdownItemAnchor$lambda($receiver) {
    return Unit;
  }
  function dropdownItemAnchor($receiver, block) {
    if (block === void 0)
      block = dropdownItemAnchor$lambda;
    var $receiver_0 = new DropdownItemAnchor($receiver);
    block($receiver_0);
    return $receiver_0;
  }
  function listAction$lambda$lambda($receiver) {
    get_listGroupItem($receiver);
    get_listGroupItemAction($receiver);
    return Unit;
  }
  function listAction$lambda(closure$content) {
    return function ($receiver) {
      $receiver.href = '#';
      get_cls($receiver).invoke_cr52h1$(listAction$lambda$lambda);
      get_classes($receiver).plusAssign_pdl1vj$('list-group-item list-group-item-action');
      closure$content($receiver);
      return Unit;
    };
  }
  function listAction($receiver, content) {
    return invoke(get_a($receiver), listAction$lambda(content));
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
  function listGroup$lambda$lambda($receiver) {
    get_listGroup($receiver);
    return Unit;
  }
  function listGroup$lambda(closure$content) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(listGroup$lambda$lambda);
      closure$content($receiver);
      return Unit;
    };
  }
  function listGroup($receiver, content) {
    return ul($receiver, listGroup$lambda(content));
  }
  function listGroupItem$lambda(closure$content) {
    return function ($receiver) {
      get_listGroupItem(get_cls($receiver));
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
  function centerDiv$lambda$lambda($receiver) {
    flexCenter($receiver);
    return Unit;
  }
  function centerDiv$lambda(closure$block) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(centerDiv$lambda$lambda);
      closure$block($receiver);
      return Unit;
    };
  }
  function centerDiv($receiver, block) {
    return invoke(get_div($receiver), centerDiv$lambda(block));
  }
  function flexJustifyContentCenter($receiver) {
    flex($receiver);
    get_classes($receiver).plusAssign_pdl1vj$('justify-content-center');
  }
  function flexAlignItemsCenter($receiver) {
    flex($receiver);
    get_classes($receiver).plusAssign_pdl1vj$('align-items-center');
  }
  function rxDisplay$lambda(closure$rxVal) {
    return function () {
      return closure$rxVal();
    };
  }
  function rxDisplay($receiver, rxVal) {
    var rxv = Rx_init(rxDisplay$lambda(rxVal));
    rxDisplay_0($receiver, rxv);
    return rxv;
  }
  function rxDisplay$lambda_0(this$rxDisplay) {
    return function (it) {
      this$rxDisplay.style.cssText = it ? '' : 'display: none !important;';
      return Unit;
    };
  }
  function rxDisplay_0($receiver, rxVal) {
    return rxVal.forEach_qlkmfe$(rxDisplay$lambda_0($receiver));
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
  function rxTextOrEmpty$lambda(closure$fn) {
    return function () {
      return orEmpty(closure$fn());
    };
  }
  function rxTextOrEmpty($receiver, fn) {
    return rxText_0($receiver, rxTextOrEmpty$lambda(fn));
  }
  function setupFullScreen$lambda$lambda($receiver) {
    get_w100($receiver);
    get_h100($receiver);
    get_dFlex($receiver);
    get_flexColumn($receiver);
    return Unit;
  }
  function setupFullScreen$lambda$lambda$lambda($receiver) {
    get_w100($receiver);
    get_h100($receiver);
    get_overflowHidden($receiver);
    return Unit;
  }
  function setupFullScreen$lambda$lambda_0($receiver) {
    get_cls($receiver).invoke_cr52h1$(setupFullScreen$lambda$lambda$lambda);
    return Unit;
  }
  function setupFullScreen$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(setupFullScreen$lambda$lambda);
    invoke(ensureNotNull($receiver.parentElement), setupFullScreen$lambda$lambda_0);
    return Unit;
  }
  function setupFullScreen() {
    invoke(ensureNotNull(document.body), setupFullScreen$lambda);
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
    return invoke(get_div(document), Panel$wrapper$lambda);
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
  function column$lambda$lambda($receiver) {
    get_dFlex($receiver);
    get_flexColumn($receiver);
    return Unit;
  }
  function column$lambda(closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(column$lambda$lambda);
      closure$fn($receiver);
      return Unit;
    };
  }
  function column($receiver, fn) {
    return invoke(get_div($receiver), column$lambda(fn));
  }
  function row$lambda$lambda($receiver) {
    get_dFlex($receiver);
    get_flexRow($receiver);
    return Unit;
  }
  function row$lambda(closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(row$lambda$lambda);
      closure$fn($receiver);
      return Unit;
    };
  }
  function row($receiver, fn) {
    return invoke(get_div($receiver), row$lambda(fn));
  }
  function btnButton$lambda$lambda($receiver) {
    get_btn($receiver);
    return Unit;
  }
  function btnButton$lambda(closure$fn) {
    return function ($receiver) {
      $receiver.type = 'button';
      get_cls($receiver).invoke_cr52h1$(btnButton$lambda$lambda);
      closure$fn($receiver);
      return Unit;
    };
  }
  function btnButton($receiver, fn) {
    return invoke(get_button($receiver), btnButton$lambda(fn));
  }
  function fullSize($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('w-100 h-100');
  }
  function flex($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('d-flex');
  }
  function flexColumn($receiver) {
    flex($receiver);
    get_classes($receiver).plusAssign_pdl1vj$('flex-column');
  }
  function flexRow($receiver) {
    flex($receiver);
    get_classes($receiver).plusAssign_pdl1vj$('flex-row');
  }
  function margin1($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('m-1');
  }
  function marginRight2($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('mr-2');
  }
  function marginBottom1($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('mb-1');
  }
  function margin2($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('m-2');
  }
  function displayBlock($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('d-block');
  }
  function padding1($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('p-1');
  }
  function card($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('card');
  }
  function padding2($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('p-2');
  }
  function paddingRight2($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('pr-2');
  }
  function paddingLeft2($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('pl-2');
  }
  function flexGrow0($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('flex-grow-0');
  }
  function flexShrink0($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('flex-shrink-0');
  }
  function bgLight($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('bg-light');
  }
  function bgDark($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('bg-dark');
  }
  function bgWhite($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('bg-white');
  }
  function alignItemsCenter($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('align-items-center');
  }
  function border($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('border');
  }
  function borderBottom($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('border-bottom');
  }
  function borderTop($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('border-top');
  }
  function btn($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('btn');
  }
  function btnPrimary($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('btn-primary');
  }
  function btnSecondary($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('btn-secondary');
  }
  function formGroup($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('form-group');
  }
  function formControl($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('form-control');
  }
  function formCheck($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('form-check');
  }
  function formCheckInput($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('form-check-input');
  }
  function dropdownMenuRight($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('dropdown-menu-right');
  }
  function dropdownItem($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('dropdown-item');
  }
  function alert($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('alert');
  }
  function alertWarning($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('alert-warning');
  }
  function spinnerBorder($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('spinner-border');
  }
  function spinnerBorderSm($receiver) {
    spinnerBorder($receiver);
    get_classes($receiver).plusAssign_pdl1vj$('spinner-border-sm');
  }
  function positionAbsolute($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('position-absolute');
  }
  function positionRelative($receiver) {
    get_classes($receiver).plusAssign_pdl1vj$('position-relative');
  }
  var w100_metadata = new PropertyMetadata('w100');
  var w100;
  function get_w100($receiver) {
    return w100.getValue_lrcp0p$($receiver, w100_metadata);
  }
  var h100_metadata = new PropertyMetadata('h100');
  var h100;
  function get_h100($receiver) {
    return h100.getValue_lrcp0p$($receiver, h100_metadata);
  }
  var alignMiddle_metadata = new PropertyMetadata('alignMiddle');
  var alignMiddle;
  function get_alignMiddle($receiver) {
    return alignMiddle.getValue_lrcp0p$($receiver, alignMiddle_metadata);
  }
  var textDanger_metadata = new PropertyMetadata('textDanger');
  var textDanger;
  function get_textDanger($receiver) {
    return textDanger.getValue_lrcp0p$($receiver, textDanger_metadata);
  }
  var textPrimary_metadata = new PropertyMetadata('textPrimary');
  var textPrimary;
  function get_textPrimary($receiver) {
    return textPrimary.getValue_lrcp0p$($receiver, textPrimary_metadata);
  }
  var textInfo_metadata = new PropertyMetadata('textInfo');
  var textInfo;
  function get_textInfo($receiver) {
    return textInfo.getValue_lrcp0p$($receiver, textInfo_metadata);
  }
  var bgDanger_metadata = new PropertyMetadata('bgDanger');
  var bgDanger;
  function get_bgDanger($receiver) {
    return bgDanger.getValue_lrcp0p$($receiver, bgDanger_metadata);
  }
  var bgTransparent_metadata = new PropertyMetadata('bgTransparent');
  var bgTransparent;
  function get_bgTransparent($receiver) {
    return bgTransparent.getValue_lrcp0p$($receiver, bgTransparent_metadata);
  }
  var bgWhite_metadata = new PropertyMetadata('bgWhite');
  var bgWhite_0;
  function get_bgWhite($receiver) {
    return bgWhite_0.getValue_lrcp0p$($receiver, bgWhite_metadata);
  }
  var bgSuccess_metadata = new PropertyMetadata('bgSuccess');
  var bgSuccess;
  function get_bgSuccess($receiver) {
    return bgSuccess.getValue_lrcp0p$($receiver, bgSuccess_metadata);
  }
  var bgLight_metadata = new PropertyMetadata('bgLight');
  var bgLight_0;
  function get_bgLight($receiver) {
    return bgLight_0.getValue_lrcp0p$($receiver, bgLight_metadata);
  }
  var bgSecondary_metadata = new PropertyMetadata('bgSecondary');
  var bgSecondary;
  function get_bgSecondary($receiver) {
    return bgSecondary.getValue_lrcp0p$($receiver, bgSecondary_metadata);
  }
  var bgWarning_metadata = new PropertyMetadata('bgWarning');
  var bgWarning;
  function get_bgWarning($receiver) {
    return bgWarning.getValue_lrcp0p$($receiver, bgWarning_metadata);
  }
  var border_metadata = new PropertyMetadata('border');
  var border_0;
  function get_border($receiver) {
    return border_0.getValue_lrcp0p$($receiver, border_metadata);
  }
  var borderPrimary_metadata = new PropertyMetadata('borderPrimary');
  var borderPrimary;
  function get_borderPrimary($receiver) {
    return borderPrimary.getValue_lrcp0p$($receiver, borderPrimary_metadata);
  }
  var borderTop_metadata = new PropertyMetadata('borderTop');
  var borderTop_0;
  function get_borderTop($receiver) {
    return borderTop_0.getValue_lrcp0p$($receiver, borderTop_metadata);
  }
  var borderBottom_metadata = new PropertyMetadata('borderBottom');
  var borderBottom_0;
  function get_borderBottom($receiver) {
    return borderBottom_0.getValue_lrcp0p$($receiver, borderBottom_metadata);
  }
  var borderWarning_metadata = new PropertyMetadata('borderWarning');
  var borderWarning;
  function get_borderWarning($receiver) {
    return borderWarning.getValue_lrcp0p$($receiver, borderWarning_metadata);
  }
  var rounded_metadata = new PropertyMetadata('rounded');
  var rounded;
  function get_rounded($receiver) {
    return rounded.getValue_lrcp0p$($receiver, rounded_metadata);
  }
  var close_metadata = new PropertyMetadata('close');
  var close;
  function get_close($receiver) {
    return close.getValue_lrcp0p$($receiver, close_metadata);
  }
  var card_metadata = new PropertyMetadata('card');
  var card_0;
  function get_card($receiver) {
    return card_0.getValue_lrcp0p$($receiver, card_metadata);
  }
  var cardHeader_metadata = new PropertyMetadata('cardHeader');
  var cardHeader;
  function get_cardHeader($receiver) {
    return cardHeader.getValue_lrcp0p$($receiver, cardHeader_metadata);
  }
  var cardFooter_metadata = new PropertyMetadata('cardFooter');
  var cardFooter;
  function get_cardFooter($receiver) {
    return cardFooter.getValue_lrcp0p$($receiver, cardFooter_metadata);
  }
  var cardBody_metadata = new PropertyMetadata('cardBody');
  var cardBody;
  function get_cardBody($receiver) {
    return cardBody.getValue_lrcp0p$($receiver, cardBody_metadata);
  }
  var cardTitle_metadata = new PropertyMetadata('cardTitle');
  var cardTitle;
  function get_cardTitle($receiver) {
    return cardTitle.getValue_lrcp0p$($receiver, cardTitle_metadata);
  }
  var spinnerBorder_metadata = new PropertyMetadata('spinnerBorder');
  var spinnerBorder_0;
  function get_spinnerBorder($receiver) {
    return spinnerBorder_0.getValue_lrcp0p$($receiver, spinnerBorder_metadata);
  }
  var spinnerBorderSm_metadata = new PropertyMetadata('spinnerBorderSm');
  var spinnerBorderSm_0;
  function get_spinnerBorderSm($receiver) {
    return spinnerBorderSm_0.getValue_lrcp0p$($receiver, spinnerBorderSm_metadata);
  }
  var spinnerGrow_metadata = new PropertyMetadata('spinnerGrow');
  var spinnerGrow;
  function get_spinnerGrow($receiver) {
    return spinnerGrow.getValue_lrcp0p$($receiver, spinnerGrow_metadata);
  }
  var textLeft_metadata = new PropertyMetadata('textLeft');
  var textLeft;
  function get_textLeft($receiver) {
    return textLeft.getValue_lrcp0p$($receiver, textLeft_metadata);
  }
  var m0_metadata = new PropertyMetadata('m0');
  var m0;
  function get_m0($receiver) {
    return m0.getValue_lrcp0p$($receiver, m0_metadata);
  }
  var m1_metadata = new PropertyMetadata('m1');
  var m1;
  function get_m1($receiver) {
    return m1.getValue_lrcp0p$($receiver, m1_metadata);
  }
  var m2_metadata = new PropertyMetadata('m2');
  var m2;
  function get_m2($receiver) {
    return m2.getValue_lrcp0p$($receiver, m2_metadata);
  }
  var mt1_metadata = new PropertyMetadata('mt1');
  var mt1;
  function get_mt1($receiver) {
    return mt1.getValue_lrcp0p$($receiver, mt1_metadata);
  }
  var mr0_metadata = new PropertyMetadata('mr0');
  var mr0;
  function get_mr0($receiver) {
    return mr0.getValue_lrcp0p$($receiver, mr0_metadata);
  }
  var mr1_metadata = new PropertyMetadata('mr1');
  var mr1;
  function get_mr1($receiver) {
    return mr1.getValue_lrcp0p$($receiver, mr1_metadata);
  }
  var mr2_metadata = new PropertyMetadata('mr2');
  var mr2;
  function get_mr2($receiver) {
    return mr2.getValue_lrcp0p$($receiver, mr2_metadata);
  }
  var mr3_metadata = new PropertyMetadata('mr3');
  var mr3;
  function get_mr3($receiver) {
    return mr3.getValue_lrcp0p$($receiver, mr3_metadata);
  }
  var mr4_metadata = new PropertyMetadata('mr4');
  var mr4;
  function get_mr4($receiver) {
    return mr4.getValue_lrcp0p$($receiver, mr4_metadata);
  }
  var mr5_metadata = new PropertyMetadata('mr5');
  var mr5;
  function get_mr5($receiver) {
    return mr5.getValue_lrcp0p$($receiver, mr5_metadata);
  }
  var p0_metadata = new PropertyMetadata('p0');
  var p0;
  function get_p0($receiver) {
    return p0.getValue_lrcp0p$($receiver, p0_metadata);
  }
  var p1_metadata = new PropertyMetadata('p1');
  var p1;
  function get_p1($receiver) {
    return p1.getValue_lrcp0p$($receiver, p1_metadata);
  }
  var p2_metadata = new PropertyMetadata('p2');
  var p2;
  function get_p2($receiver) {
    return p2.getValue_lrcp0p$($receiver, p2_metadata);
  }
  var p3_metadata = new PropertyMetadata('p3');
  var p3;
  function get_p3($receiver) {
    return p3.getValue_lrcp0p$($receiver, p3_metadata);
  }
  var p4_metadata = new PropertyMetadata('p4');
  var p4;
  function get_p4($receiver) {
    return p4.getValue_lrcp0p$($receiver, p4_metadata);
  }
  var p5_metadata = new PropertyMetadata('p5');
  var p5;
  function get_p5($receiver) {
    return p5.getValue_lrcp0p$($receiver, p5_metadata);
  }
  var py1_metadata = new PropertyMetadata('py1');
  var py1;
  function get_py1($receiver) {
    return py1.getValue_lrcp0p$($receiver, py1_metadata);
  }
  var px1_metadata = new PropertyMetadata('px1');
  var px1;
  function get_px1($receiver) {
    return px1.getValue_lrcp0p$($receiver, px1_metadata);
  }
  var px2_metadata = new PropertyMetadata('px2');
  var px2;
  function get_px2($receiver) {
    return px2.getValue_lrcp0p$($receiver, px2_metadata);
  }
  var ml1_metadata = new PropertyMetadata('ml1');
  var ml1;
  function get_ml1($receiver) {
    return ml1.getValue_lrcp0p$($receiver, ml1_metadata);
  }
  var btnGroup_metadata = new PropertyMetadata('btnGroup');
  var btnGroup;
  function get_btnGroup($receiver) {
    return btnGroup.getValue_lrcp0p$($receiver, btnGroup_metadata);
  }
  var btnGroupVertical_metadata = new PropertyMetadata('btnGroupVertical');
  var btnGroupVertical;
  function get_btnGroupVertical($receiver) {
    return btnGroupVertical.getValue_lrcp0p$($receiver, btnGroupVertical_metadata);
  }
  var btnToolbar_metadata = new PropertyMetadata('btnToolbar');
  var btnToolbar;
  function get_btnToolbar($receiver) {
    return btnToolbar.getValue_lrcp0p$($receiver, btnToolbar_metadata);
  }
  var btnSecondary_metadata = new PropertyMetadata('btnSecondary');
  var btnSecondary_0;
  function get_btnSecondary($receiver) {
    return btnSecondary_0.getValue_lrcp0p$($receiver, btnSecondary_metadata);
  }
  var btnInfo_metadata = new PropertyMetadata('btnInfo');
  var btnInfo;
  function get_btnInfo($receiver) {
    return btnInfo.getValue_lrcp0p$($receiver, btnInfo_metadata);
  }
  var btnSuccess_metadata = new PropertyMetadata('btnSuccess');
  var btnSuccess;
  function get_btnSuccess($receiver) {
    return btnSuccess.getValue_lrcp0p$($receiver, btnSuccess_metadata);
  }
  var btnLight_metadata = new PropertyMetadata('btnLight');
  var btnLight;
  function get_btnLight($receiver) {
    return btnLight.getValue_lrcp0p$($receiver, btnLight_metadata);
  }
  var btnPrimary_metadata = new PropertyMetadata('btnPrimary');
  var btnPrimary_0;
  function get_btnPrimary($receiver) {
    return btnPrimary_0.getValue_lrcp0p$($receiver, btnPrimary_metadata);
  }
  var btnOutlinePrimary_metadata = new PropertyMetadata('btnOutlinePrimary');
  var btnOutlinePrimary;
  function get_btnOutlinePrimary($receiver) {
    return btnOutlinePrimary.getValue_lrcp0p$($receiver, btnOutlinePrimary_metadata);
  }
  var btnOutlineSuccess_metadata = new PropertyMetadata('btnOutlineSuccess');
  var btnOutlineSuccess;
  function get_btnOutlineSuccess($receiver) {
    return btnOutlineSuccess.getValue_lrcp0p$($receiver, btnOutlineSuccess_metadata);
  }
  var btnDanger_metadata = new PropertyMetadata('btnDanger');
  var btnDanger;
  function get_btnDanger($receiver) {
    return btnDanger.getValue_lrcp0p$($receiver, btnDanger_metadata);
  }
  var btnWarning_metadata = new PropertyMetadata('btnWarning');
  var btnWarning;
  function get_btnWarning($receiver) {
    return btnWarning.getValue_lrcp0p$($receiver, btnWarning_metadata);
  }
  var btn_metadata = new PropertyMetadata('btn');
  var btn_0;
  function get_btn($receiver) {
    return btn_0.getValue_lrcp0p$($receiver, btn_metadata);
  }
  var btnOutlineSecondary_metadata = new PropertyMetadata('btnOutlineSecondary');
  var btnOutlineSecondary;
  function get_btnOutlineSecondary($receiver) {
    return btnOutlineSecondary.getValue_lrcp0p$($receiver, btnOutlineSecondary_metadata);
  }
  var dBlock_metadata = new PropertyMetadata('dBlock');
  var dBlock;
  function get_dBlock($receiver) {
    return dBlock.getValue_lrcp0p$($receiver, dBlock_metadata);
  }
  var dFlex_metadata = new PropertyMetadata('dFlex');
  var dFlex;
  function get_dFlex($receiver) {
    return dFlex.getValue_lrcp0p$($receiver, dFlex_metadata);
  }
  var dNone_metadata = new PropertyMetadata('dNone');
  var dNone;
  function get_dNone($receiver) {
    return dNone.getValue_lrcp0p$($receiver, dNone_metadata);
  }
  var flexRow_metadata = new PropertyMetadata('flexRow');
  var flexRow_0;
  function get_flexRow($receiver) {
    return flexRow_0.getValue_lrcp0p$($receiver, flexRow_metadata);
  }
  var flexColumn_metadata = new PropertyMetadata('flexColumn');
  var flexColumn_0;
  function get_flexColumn($receiver) {
    return flexColumn_0.getValue_lrcp0p$($receiver, flexColumn_metadata);
  }
  var flexWrap_metadata = new PropertyMetadata('flexWrap');
  var flexWrap;
  function get_flexWrap($receiver) {
    return flexWrap.getValue_lrcp0p$($receiver, flexWrap_metadata);
  }
  var flexGrow1_metadata = new PropertyMetadata('flexGrow1');
  var flexGrow1;
  function get_flexGrow1($receiver) {
    return flexGrow1.getValue_lrcp0p$($receiver, flexGrow1_metadata);
  }
  var flexGrow0_metadata = new PropertyMetadata('flexGrow0');
  var flexGrow0_0;
  function get_flexGrow0($receiver) {
    return flexGrow0_0.getValue_lrcp0p$($receiver, flexGrow0_metadata);
  }
  var flexShrink0_metadata = new PropertyMetadata('flexShrink0');
  var flexShrink0_0;
  function get_flexShrink0($receiver) {
    return flexShrink0_0.getValue_lrcp0p$($receiver, flexShrink0_metadata);
  }
  var justifyContentStart_metadata = new PropertyMetadata('justifyContentStart');
  var justifyContentStart;
  function get_justifyContentStart($receiver) {
    return justifyContentStart.getValue_lrcp0p$($receiver, justifyContentStart_metadata);
  }
  var justifyContentCenter_metadata = new PropertyMetadata('justifyContentCenter');
  var justifyContentCenter;
  function get_justifyContentCenter($receiver) {
    return justifyContentCenter.getValue_lrcp0p$($receiver, justifyContentCenter_metadata);
  }
  var alignItemsCenter_metadata = new PropertyMetadata('alignItemsCenter');
  var alignItemsCenter_0;
  function get_alignItemsCenter($receiver) {
    return alignItemsCenter_0.getValue_lrcp0p$($receiver, alignItemsCenter_metadata);
  }
  var alignItemsStretch_metadata = new PropertyMetadata('alignItemsStretch');
  var alignItemsStretch;
  function get_alignItemsStretch($receiver) {
    return alignItemsStretch.getValue_lrcp0p$($receiver, alignItemsStretch_metadata);
  }
  var listGroup_metadata = new PropertyMetadata('listGroup');
  var listGroup_0;
  function get_listGroup($receiver) {
    return listGroup_0.getValue_lrcp0p$($receiver, listGroup_metadata);
  }
  var listGroupItem_metadata = new PropertyMetadata('listGroupItem');
  var listGroupItem_0;
  function get_listGroupItem($receiver) {
    return listGroupItem_0.getValue_lrcp0p$($receiver, listGroupItem_metadata);
  }
  var listGroupItemAction_metadata = new PropertyMetadata('listGroupItemAction');
  var listGroupItemAction;
  function get_listGroupItemAction($receiver) {
    return listGroupItemAction.getValue_lrcp0p$($receiver, listGroupItemAction_metadata);
  }
  var listGroupFlush_metadata = new PropertyMetadata('listGroupFlush');
  var listGroupFlush;
  function get_listGroupFlush($receiver) {
    return listGroupFlush.getValue_lrcp0p$($receiver, listGroupFlush_metadata);
  }
  var navbarBrand_metadata = new PropertyMetadata('navbarBrand');
  var navbarBrand;
  function get_navbarBrand($receiver) {
    return navbarBrand.getValue_lrcp0p$($receiver, navbarBrand_metadata);
  }
  var formInline_metadata = new PropertyMetadata('formInline');
  var formInline;
  function get_formInline($receiver) {
    return formInline.getValue_lrcp0p$($receiver, formInline_metadata);
  }
  var formControl_metadata = new PropertyMetadata('formControl');
  var formControl_0;
  function get_formControl($receiver) {
    return formControl_0.getValue_lrcp0p$($receiver, formControl_metadata);
  }
  var formControlFile_metadata = new PropertyMetadata('formControlFile');
  var formControlFile;
  function get_formControlFile($receiver) {
    return formControlFile.getValue_lrcp0p$($receiver, formControlFile_metadata);
  }
  var formGroup_metadata = new PropertyMetadata('formGroup');
  var formGroup_0;
  function get_formGroup($receiver) {
    return formGroup_0.getValue_lrcp0p$($receiver, formGroup_metadata);
  }
  var isInvalid_metadata = new PropertyMetadata('isInvalid');
  var isInvalid;
  function get_isInvalid($receiver) {
    return isInvalid.getValue_lrcp0p$($receiver, isInvalid_metadata);
  }
  var inputGroup_metadata = new PropertyMetadata('inputGroup');
  var inputGroup;
  function get_inputGroup($receiver) {
    return inputGroup.getValue_lrcp0p$($receiver, inputGroup_metadata);
  }
  var inputGroupAppend_metadata = new PropertyMetadata('inputGroupAppend');
  var inputGroupAppend;
  function get_inputGroupAppend($receiver) {
    return inputGroupAppend.getValue_lrcp0p$($receiver, inputGroupAppend_metadata);
  }
  var inputGroupText_metadata = new PropertyMetadata('inputGroupText');
  var inputGroupText;
  function get_inputGroupText($receiver) {
    return inputGroupText.getValue_lrcp0p$($receiver, inputGroupText_metadata);
  }
  var inputGroupPrepend_metadata = new PropertyMetadata('inputGroupPrepend');
  var inputGroupPrepend;
  function get_inputGroupPrepend($receiver) {
    return inputGroupPrepend.getValue_lrcp0p$($receiver, inputGroupPrepend_metadata);
  }
  var dropdown_metadata = new PropertyMetadata('dropdown');
  var dropdown;
  function get_dropdown($receiver) {
    return dropdown.getValue_lrcp0p$($receiver, dropdown_metadata);
  }
  var dropdownToggle_metadata = new PropertyMetadata('dropdownToggle');
  var dropdownToggle_0;
  function get_dropdownToggle($receiver) {
    return dropdownToggle_0.getValue_lrcp0p$($receiver, dropdownToggle_metadata);
  }
  var dropdownToggleSplit_metadata = new PropertyMetadata('dropdownToggleSplit');
  var dropdownToggleSplit;
  function get_dropdownToggleSplit($receiver) {
    return dropdownToggleSplit.getValue_lrcp0p$($receiver, dropdownToggleSplit_metadata);
  }
  var dropdownMenu_metadata = new PropertyMetadata('dropdownMenu');
  var dropdownMenu;
  function get_dropdownMenu($receiver) {
    return dropdownMenu.getValue_lrcp0p$($receiver, dropdownMenu_metadata);
  }
  var dropdownMenuRight_metadata = new PropertyMetadata('dropdownMenuRight');
  var dropdownMenuRight_0;
  function get_dropdownMenuRight($receiver) {
    return dropdownMenuRight_0.getValue_lrcp0p$($receiver, dropdownMenuRight_metadata);
  }
  var dropdownItem_metadata = new PropertyMetadata('dropdownItem');
  var dropdownItem_0;
  function get_dropdownItem($receiver) {
    return dropdownItem_0.getValue_lrcp0p$($receiver, dropdownItem_metadata);
  }
  var customSelect_metadata = new PropertyMetadata('customSelect');
  var customSelect;
  function get_customSelect($receiver) {
    return customSelect.getValue_lrcp0p$($receiver, customSelect_metadata);
  }
  var fontWeightBold_metadata = new PropertyMetadata('fontWeightBold');
  var fontWeightBold;
  function get_fontWeightBold($receiver) {
    return fontWeightBold.getValue_lrcp0p$($receiver, fontWeightBold_metadata);
  }
  var badge_metadata = new PropertyMetadata('badge');
  var badge;
  function get_badge($receiver) {
    return badge.getValue_lrcp0p$($receiver, badge_metadata);
  }
  var badgePill_metadata = new PropertyMetadata('badgePill');
  var badgePill;
  function get_badgePill($receiver) {
    return badgePill.getValue_lrcp0p$($receiver, badgePill_metadata);
  }
  var badgePrimary_metadata = new PropertyMetadata('badgePrimary');
  var badgePrimary;
  function get_badgePrimary($receiver) {
    return badgePrimary.getValue_lrcp0p$($receiver, badgePrimary_metadata);
  }
  var badgeSecondary_metadata = new PropertyMetadata('badgeSecondary');
  var badgeSecondary;
  function get_badgeSecondary($receiver) {
    return badgeSecondary.getValue_lrcp0p$($receiver, badgeSecondary_metadata);
  }
  var badgeWarning_metadata = new PropertyMetadata('badgeWarning');
  var badgeWarning;
  function get_badgeWarning($receiver) {
    return badgeWarning.getValue_lrcp0p$($receiver, badgeWarning_metadata);
  }
  var navTabs_metadata = new PropertyMetadata('navTabs');
  var navTabs;
  function get_navTabs($receiver) {
    return navTabs.getValue_lrcp0p$($receiver, navTabs_metadata);
  }
  var navItem_metadata = new PropertyMetadata('navItem');
  var navItem;
  function get_navItem($receiver) {
    return navItem.getValue_lrcp0p$($receiver, navItem_metadata);
  }
  var navLink_metadata = new PropertyMetadata('navLink');
  var navLink;
  function get_navLink($receiver) {
    return navLink.getValue_lrcp0p$($receiver, navLink_metadata);
  }
  var active_metadata = new PropertyMetadata('active');
  var active;
  function get_active($receiver) {
    return active.getValue_lrcp0p$($receiver, active_metadata);
  }
  var positionRelative_metadata = new PropertyMetadata('positionRelative');
  var positionRelative_0;
  function get_positionRelative($receiver) {
    return positionRelative_0.getValue_lrcp0p$($receiver, positionRelative_metadata);
  }
  var positionAbsolute_metadata = new PropertyMetadata('positionAbsolute');
  var positionAbsolute_0;
  function get_positionAbsolute($receiver) {
    return positionAbsolute_0.getValue_lrcp0p$($receiver, positionAbsolute_metadata);
  }
  function flexCenter($receiver) {
    get_dFlex($receiver);
    get_justifyContentCenter($receiver);
    get_alignItemsCenter($receiver);
  }
  function flexFixedSize($receiver) {
    get_flexGrow0($receiver);
    get_flexShrink0($receiver);
  }
  var package$bootstrap = _.bootstrap || (_.bootstrap = {});
  package$bootstrap.ClickItemButtons = ClickItemButtons;
  package$bootstrap.clickItemButtons_vdnn27$ = clickItemButtons;
  package$bootstrap.breadcrumb_waljkg$ = breadcrumb;
  package$bootstrap.dropdownToggleButton_9ztatb$ = dropdownToggleButton;
  package$bootstrap.dropdownToggle_ejp6nk$ = dropdownToggle;
  package$bootstrap.DropdownGroup = DropdownGroup;
  package$bootstrap.dataToggleDropdown_v3gdir$ = dataToggleDropdown;
  package$bootstrap.get_dropdownSplit_asww5s$ = get_dropdownSplit;
  package$bootstrap.dropdownGroup_ju7q0d$ = dropdownGroup;
  package$bootstrap.dropdownDiv_ju7q0d$ = dropdownDiv;
  package$bootstrap.DropdownItemAnchor = DropdownItemAnchor;
  package$bootstrap.dropdownItemAnchor_fahyz6$ = dropdownItemAnchor;
  package$bootstrap.listAction_6t02fy$ = listAction;
  package$bootstrap.listButton_juq4uf$ = listButton;
  package$bootstrap.listGroup_t7sdcm$ = listGroup;
  package$bootstrap.listGroupItem_8ixz9m$ = listGroupItem;
  package$bootstrap.commandButton_t3i1hh$ = commandButton;
  package$bootstrap.centerDiv_gnmiz0$ = centerDiv;
  package$bootstrap.flexJustifyContentCenter_ejp6nk$ = flexJustifyContentCenter;
  package$bootstrap.flexAlignItemsCenter_ejp6nk$ = flexAlignItemsCenter;
  package$bootstrap.rxDisplay_dw434i$ = rxDisplay;
  package$bootstrap.rxDisplay_86pnez$ = rxDisplay_0;
  package$bootstrap.rxAnchorEnabled_vewjqu$ = rxAnchorEnabled;
  package$bootstrap.rxAnchorClick_qit41n$ = rxAnchorClick;
  package$bootstrap.rxText_btzx6a$ = rxText;
  package$bootstrap.rxText_7fncnf$ = rxText_0;
  package$bootstrap.rxTextOrEmpty_elhwo1$ = rxTextOrEmpty;
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
  package$bootstrap.marginRight2_ejp6nk$ = marginRight2;
  package$bootstrap.marginBottom1_ejp6nk$ = marginBottom1;
  package$bootstrap.margin2_ejp6nk$ = margin2;
  package$bootstrap.displayBlock_ejp6nk$ = displayBlock;
  package$bootstrap.padding1_ejp6nk$ = padding1;
  package$bootstrap.card_ejp6nk$ = card;
  package$bootstrap.padding2_ejp6nk$ = padding2;
  package$bootstrap.paddingRight2_ejp6nk$ = paddingRight2;
  package$bootstrap.paddingLeft2_ejp6nk$ = paddingLeft2;
  package$bootstrap.flexGrow0_ejp6nk$ = flexGrow0;
  package$bootstrap.flexShrink0_ejp6nk$ = flexShrink0;
  package$bootstrap.bgLight_ejp6nk$ = bgLight;
  package$bootstrap.bgDark_ejp6nk$ = bgDark;
  package$bootstrap.bgWhite_ejp6nk$ = bgWhite;
  package$bootstrap.alignItemsCenter_ejp6nk$ = alignItemsCenter;
  package$bootstrap.border_ejp6nk$ = border;
  package$bootstrap.borderBottom_ejp6nk$ = borderBottom;
  package$bootstrap.borderTop_ejp6nk$ = borderTop;
  package$bootstrap.btn_ejp6nk$ = btn;
  package$bootstrap.btnPrimary_ejp6nk$ = btnPrimary;
  package$bootstrap.btnSecondary_ejp6nk$ = btnSecondary;
  package$bootstrap.formGroup_ejp6nk$ = formGroup;
  package$bootstrap.formControl_ejp6nk$ = formControl;
  package$bootstrap.formCheck_ejp6nk$ = formCheck;
  package$bootstrap.formCheckInput_ejp6nk$ = formCheckInput;
  package$bootstrap.dropdownMenuRight_ejp6nk$ = dropdownMenuRight;
  package$bootstrap.dropdownItem_ejp6nk$ = dropdownItem;
  package$bootstrap.alert_ejp6nk$ = alert;
  package$bootstrap.alertWarning_ejp6nk$ = alertWarning;
  package$bootstrap.spinnerBorder_ejp6nk$ = spinnerBorder;
  package$bootstrap.spinnerBorderSm_ejp6nk$ = spinnerBorderSm;
  package$bootstrap.positionAbsolute_ejp6nk$ = positionAbsolute;
  package$bootstrap.positionRelative_ejp6nk$ = positionRelative;
  package$bootstrap.get_w100_kre7dp$ = get_w100;
  package$bootstrap.get_h100_kre7dp$ = get_h100;
  package$bootstrap.get_alignMiddle_kre7dp$ = get_alignMiddle;
  package$bootstrap.get_textDanger_kre7dp$ = get_textDanger;
  package$bootstrap.get_textPrimary_kre7dp$ = get_textPrimary;
  package$bootstrap.get_textInfo_kre7dp$ = get_textInfo;
  package$bootstrap.get_bgDanger_kre7dp$ = get_bgDanger;
  package$bootstrap.get_bgTransparent_kre7dp$ = get_bgTransparent;
  package$bootstrap.get_bgWhite_kre7dp$ = get_bgWhite;
  package$bootstrap.get_bgSuccess_kre7dp$ = get_bgSuccess;
  package$bootstrap.get_bgLight_kre7dp$ = get_bgLight;
  package$bootstrap.get_bgSecondary_kre7dp$ = get_bgSecondary;
  package$bootstrap.get_bgWarning_kre7dp$ = get_bgWarning;
  package$bootstrap.get_border_kre7dp$ = get_border;
  package$bootstrap.get_borderPrimary_kre7dp$ = get_borderPrimary;
  package$bootstrap.get_borderTop_kre7dp$ = get_borderTop;
  package$bootstrap.get_borderBottom_kre7dp$ = get_borderBottom;
  package$bootstrap.get_borderWarning_kre7dp$ = get_borderWarning;
  package$bootstrap.get_rounded_kre7dp$ = get_rounded;
  package$bootstrap.get_close_kre7dp$ = get_close;
  package$bootstrap.get_card_kre7dp$ = get_card;
  package$bootstrap.get_cardHeader_kre7dp$ = get_cardHeader;
  package$bootstrap.get_cardFooter_kre7dp$ = get_cardFooter;
  package$bootstrap.get_cardBody_kre7dp$ = get_cardBody;
  package$bootstrap.get_cardTitle_kre7dp$ = get_cardTitle;
  package$bootstrap.get_spinnerBorder_kre7dp$ = get_spinnerBorder;
  package$bootstrap.get_spinnerBorderSm_kre7dp$ = get_spinnerBorderSm;
  package$bootstrap.get_spinnerGrow_kre7dp$ = get_spinnerGrow;
  package$bootstrap.get_textLeft_kre7dp$ = get_textLeft;
  package$bootstrap.get_m0_kre7dp$ = get_m0;
  package$bootstrap.get_m1_kre7dp$ = get_m1;
  package$bootstrap.get_m2_kre7dp$ = get_m2;
  package$bootstrap.get_mt1_kre7dp$ = get_mt1;
  package$bootstrap.get_mr0_kre7dp$ = get_mr0;
  package$bootstrap.get_mr1_kre7dp$ = get_mr1;
  package$bootstrap.get_mr2_kre7dp$ = get_mr2;
  package$bootstrap.get_mr3_kre7dp$ = get_mr3;
  package$bootstrap.get_mr4_kre7dp$ = get_mr4;
  package$bootstrap.get_mr5_kre7dp$ = get_mr5;
  package$bootstrap.get_p0_kre7dp$ = get_p0;
  package$bootstrap.get_p1_kre7dp$ = get_p1;
  package$bootstrap.get_p2_kre7dp$ = get_p2;
  package$bootstrap.get_p3_kre7dp$ = get_p3;
  package$bootstrap.get_p4_kre7dp$ = get_p4;
  package$bootstrap.get_p5_kre7dp$ = get_p5;
  package$bootstrap.get_py1_kre7dp$ = get_py1;
  package$bootstrap.get_px1_kre7dp$ = get_px1;
  package$bootstrap.get_px2_kre7dp$ = get_px2;
  package$bootstrap.get_ml1_kre7dp$ = get_ml1;
  package$bootstrap.get_btnGroup_kre7dp$ = get_btnGroup;
  package$bootstrap.get_btnGroupVertical_kre7dp$ = get_btnGroupVertical;
  package$bootstrap.get_btnToolbar_kre7dp$ = get_btnToolbar;
  package$bootstrap.get_btnSecondary_kre7dp$ = get_btnSecondary;
  package$bootstrap.get_btnInfo_kre7dp$ = get_btnInfo;
  package$bootstrap.get_btnSuccess_kre7dp$ = get_btnSuccess;
  package$bootstrap.get_btnLight_kre7dp$ = get_btnLight;
  package$bootstrap.get_btnPrimary_kre7dp$ = get_btnPrimary;
  package$bootstrap.get_btnOutlinePrimary_kre7dp$ = get_btnOutlinePrimary;
  package$bootstrap.get_btnOutlineSuccess_kre7dp$ = get_btnOutlineSuccess;
  package$bootstrap.get_btnDanger_kre7dp$ = get_btnDanger;
  package$bootstrap.get_btnWarning_kre7dp$ = get_btnWarning;
  package$bootstrap.get_btn_kre7dp$ = get_btn;
  package$bootstrap.get_btnOutlineSecondary_kre7dp$ = get_btnOutlineSecondary;
  package$bootstrap.get_dBlock_kre7dp$ = get_dBlock;
  package$bootstrap.get_dFlex_kre7dp$ = get_dFlex;
  package$bootstrap.get_dNone_kre7dp$ = get_dNone;
  package$bootstrap.get_flexRow_kre7dp$ = get_flexRow;
  package$bootstrap.get_flexColumn_kre7dp$ = get_flexColumn;
  package$bootstrap.get_flexWrap_kre7dp$ = get_flexWrap;
  package$bootstrap.get_flexGrow1_kre7dp$ = get_flexGrow1;
  package$bootstrap.get_flexGrow0_kre7dp$ = get_flexGrow0;
  package$bootstrap.get_flexShrink0_kre7dp$ = get_flexShrink0;
  package$bootstrap.get_justifyContentStart_kre7dp$ = get_justifyContentStart;
  package$bootstrap.get_justifyContentCenter_kre7dp$ = get_justifyContentCenter;
  package$bootstrap.get_alignItemsCenter_kre7dp$ = get_alignItemsCenter;
  package$bootstrap.get_alignItemsStretch_kre7dp$ = get_alignItemsStretch;
  package$bootstrap.get_listGroup_kre7dp$ = get_listGroup;
  package$bootstrap.get_listGroupItem_kre7dp$ = get_listGroupItem;
  package$bootstrap.get_listGroupItemAction_kre7dp$ = get_listGroupItemAction;
  package$bootstrap.get_listGroupFlush_kre7dp$ = get_listGroupFlush;
  package$bootstrap.get_navbarBrand_kre7dp$ = get_navbarBrand;
  package$bootstrap.get_formInline_kre7dp$ = get_formInline;
  package$bootstrap.get_formControl_kre7dp$ = get_formControl;
  package$bootstrap.get_formControlFile_kre7dp$ = get_formControlFile;
  package$bootstrap.get_formGroup_kre7dp$ = get_formGroup;
  package$bootstrap.get_isInvalid_kre7dp$ = get_isInvalid;
  package$bootstrap.get_inputGroup_kre7dp$ = get_inputGroup;
  package$bootstrap.get_inputGroupAppend_kre7dp$ = get_inputGroupAppend;
  package$bootstrap.get_inputGroupText_kre7dp$ = get_inputGroupText;
  package$bootstrap.get_inputGroupPrepend_kre7dp$ = get_inputGroupPrepend;
  package$bootstrap.get_dropdown_kre7dp$ = get_dropdown;
  package$bootstrap.get_dropdownToggle_kre7dp$ = get_dropdownToggle;
  package$bootstrap.get_dropdownToggleSplit_kre7dp$ = get_dropdownToggleSplit;
  package$bootstrap.get_dropdownMenu_kre7dp$ = get_dropdownMenu;
  package$bootstrap.get_dropdownMenuRight_kre7dp$ = get_dropdownMenuRight;
  package$bootstrap.get_dropdownItem_kre7dp$ = get_dropdownItem;
  package$bootstrap.get_customSelect_kre7dp$ = get_customSelect;
  package$bootstrap.get_fontWeightBold_kre7dp$ = get_fontWeightBold;
  package$bootstrap.get_badge_kre7dp$ = get_badge;
  package$bootstrap.get_badgePill_kre7dp$ = get_badgePill;
  package$bootstrap.get_badgePrimary_kre7dp$ = get_badgePrimary;
  package$bootstrap.get_badgeSecondary_kre7dp$ = get_badgeSecondary;
  package$bootstrap.get_badgeWarning_kre7dp$ = get_badgeWarning;
  package$bootstrap.get_navTabs_kre7dp$ = get_navTabs;
  package$bootstrap.get_navItem_kre7dp$ = get_navItem;
  package$bootstrap.get_navLink_kre7dp$ = get_navLink;
  package$bootstrap.get_active_kre7dp$ = get_active;
  package$bootstrap.get_positionRelative_kre7dp$ = get_positionRelative;
  package$bootstrap.get_positionAbsolute_kre7dp$ = get_positionAbsolute;
  package$bootstrap.flexCenter_kre7dp$ = flexCenter;
  package$bootstrap.flexFixedSize_kre7dp$ = flexFixedSize;
  w100 = css().provideDelegate_d6mtq7$(this, w100_metadata);
  h100 = css().provideDelegate_d6mtq7$(this, h100_metadata);
  alignMiddle = css().provideDelegate_d6mtq7$(this, alignMiddle_metadata);
  textDanger = css().provideDelegate_d6mtq7$(this, textDanger_metadata);
  textPrimary = css().provideDelegate_d6mtq7$(this, textPrimary_metadata);
  textInfo = css().provideDelegate_d6mtq7$(this, textInfo_metadata);
  bgDanger = css().provideDelegate_d6mtq7$(this, bgDanger_metadata);
  bgTransparent = css().provideDelegate_d6mtq7$(this, bgTransparent_metadata);
  bgWhite_0 = css().provideDelegate_d6mtq7$(this, bgWhite_metadata);
  bgSuccess = css().provideDelegate_d6mtq7$(this, bgSuccess_metadata);
  bgLight_0 = css().provideDelegate_d6mtq7$(this, bgLight_metadata);
  bgSecondary = css().provideDelegate_d6mtq7$(this, bgSecondary_metadata);
  bgWarning = css().provideDelegate_d6mtq7$(this, bgWarning_metadata);
  border_0 = css().provideDelegate_d6mtq7$(this, border_metadata);
  borderPrimary = css().provideDelegate_d6mtq7$(this, borderPrimary_metadata);
  borderTop_0 = css().provideDelegate_d6mtq7$(this, borderTop_metadata);
  borderBottom_0 = css().provideDelegate_d6mtq7$(this, borderBottom_metadata);
  borderWarning = css().provideDelegate_d6mtq7$(this, borderWarning_metadata);
  rounded = css().provideDelegate_d6mtq7$(this, rounded_metadata);
  close = css().provideDelegate_d6mtq7$(this, close_metadata);
  card_0 = css().provideDelegate_d6mtq7$(this, card_metadata);
  cardHeader = css().provideDelegate_d6mtq7$(this, cardHeader_metadata);
  cardFooter = css().provideDelegate_d6mtq7$(this, cardFooter_metadata);
  cardBody = css().provideDelegate_d6mtq7$(this, cardBody_metadata);
  cardTitle = css().provideDelegate_d6mtq7$(this, cardTitle_metadata);
  spinnerBorder_0 = css().provideDelegate_d6mtq7$(this, spinnerBorder_metadata);
  spinnerBorderSm_0 = css().provideDelegate_d6mtq7$(this, spinnerBorderSm_metadata);
  spinnerGrow = css().provideDelegate_d6mtq7$(this, spinnerGrow_metadata);
  textLeft = css().provideDelegate_d6mtq7$(this, textLeft_metadata);
  m0 = css().provideDelegate_d6mtq7$(this, m0_metadata);
  m1 = css().provideDelegate_d6mtq7$(this, m1_metadata);
  m2 = css().provideDelegate_d6mtq7$(this, m2_metadata);
  mt1 = css().provideDelegate_d6mtq7$(this, mt1_metadata);
  mr0 = css().provideDelegate_d6mtq7$(this, mr0_metadata);
  mr1 = css().provideDelegate_d6mtq7$(this, mr1_metadata);
  mr2 = css().provideDelegate_d6mtq7$(this, mr2_metadata);
  mr3 = css().provideDelegate_d6mtq7$(this, mr3_metadata);
  mr4 = css().provideDelegate_d6mtq7$(this, mr4_metadata);
  mr5 = css().provideDelegate_d6mtq7$(this, mr5_metadata);
  p0 = css().provideDelegate_d6mtq7$(this, p0_metadata);
  p1 = css().provideDelegate_d6mtq7$(this, p1_metadata);
  p2 = css().provideDelegate_d6mtq7$(this, p2_metadata);
  p3 = css().provideDelegate_d6mtq7$(this, p3_metadata);
  p4 = css().provideDelegate_d6mtq7$(this, p4_metadata);
  p5 = css().provideDelegate_d6mtq7$(this, p5_metadata);
  py1 = css().provideDelegate_d6mtq7$(this, py1_metadata);
  px1 = css().provideDelegate_d6mtq7$(this, px1_metadata);
  px2 = css().provideDelegate_d6mtq7$(this, px2_metadata);
  ml1 = css().provideDelegate_d6mtq7$(this, ml1_metadata);
  btnGroup = css().provideDelegate_d6mtq7$(this, btnGroup_metadata);
  btnGroupVertical = css().provideDelegate_d6mtq7$(this, btnGroupVertical_metadata);
  btnToolbar = css().provideDelegate_d6mtq7$(this, btnToolbar_metadata);
  btnSecondary_0 = css().provideDelegate_d6mtq7$(this, btnSecondary_metadata);
  btnInfo = css().provideDelegate_d6mtq7$(this, btnInfo_metadata);
  btnSuccess = css().provideDelegate_d6mtq7$(this, btnSuccess_metadata);
  btnLight = css().provideDelegate_d6mtq7$(this, btnLight_metadata);
  btnPrimary_0 = css().provideDelegate_d6mtq7$(this, btnPrimary_metadata);
  btnOutlinePrimary = css().provideDelegate_d6mtq7$(this, btnOutlinePrimary_metadata);
  btnOutlineSuccess = css().provideDelegate_d6mtq7$(this, btnOutlineSuccess_metadata);
  btnDanger = css().provideDelegate_d6mtq7$(this, btnDanger_metadata);
  btnWarning = css().provideDelegate_d6mtq7$(this, btnWarning_metadata);
  btn_0 = css().provideDelegate_d6mtq7$(this, btn_metadata);
  btnOutlineSecondary = css().provideDelegate_d6mtq7$(this, btnOutlineSecondary_metadata);
  dBlock = css().provideDelegate_d6mtq7$(this, dBlock_metadata);
  dFlex = css().provideDelegate_d6mtq7$(this, dFlex_metadata);
  dNone = css().provideDelegate_d6mtq7$(this, dNone_metadata);
  flexRow_0 = css().provideDelegate_d6mtq7$(this, flexRow_metadata);
  flexColumn_0 = css().provideDelegate_d6mtq7$(this, flexColumn_metadata);
  flexWrap = css().provideDelegate_d6mtq7$(this, flexWrap_metadata);
  flexGrow1 = css().provideDelegate_d6mtq7$(this, flexGrow1_metadata);
  flexGrow0_0 = css().provideDelegate_d6mtq7$(this, flexGrow0_metadata);
  flexShrink0_0 = css().provideDelegate_d6mtq7$(this, flexShrink0_metadata);
  justifyContentStart = css().provideDelegate_d6mtq7$(this, justifyContentStart_metadata);
  justifyContentCenter = css().provideDelegate_d6mtq7$(this, justifyContentCenter_metadata);
  alignItemsCenter_0 = css().provideDelegate_d6mtq7$(this, alignItemsCenter_metadata);
  alignItemsStretch = css().provideDelegate_d6mtq7$(this, alignItemsStretch_metadata);
  listGroup_0 = css().provideDelegate_d6mtq7$(this, listGroup_metadata);
  listGroupItem_0 = css().provideDelegate_d6mtq7$(this, listGroupItem_metadata);
  listGroupItemAction = css().provideDelegate_d6mtq7$(this, listGroupItemAction_metadata);
  listGroupFlush = css().provideDelegate_d6mtq7$(this, listGroupFlush_metadata);
  navbarBrand = css().provideDelegate_d6mtq7$(this, navbarBrand_metadata);
  formInline = css().provideDelegate_d6mtq7$(this, formInline_metadata);
  formControl_0 = css().provideDelegate_d6mtq7$(this, formControl_metadata);
  formControlFile = css().provideDelegate_d6mtq7$(this, formControlFile_metadata);
  formGroup_0 = css().provideDelegate_d6mtq7$(this, formGroup_metadata);
  isInvalid = css().provideDelegate_d6mtq7$(this, isInvalid_metadata);
  inputGroup = css().provideDelegate_d6mtq7$(this, inputGroup_metadata);
  inputGroupAppend = css().provideDelegate_d6mtq7$(this, inputGroupAppend_metadata);
  inputGroupText = css().provideDelegate_d6mtq7$(this, inputGroupText_metadata);
  inputGroupPrepend = css().provideDelegate_d6mtq7$(this, inputGroupPrepend_metadata);
  dropdown = css().provideDelegate_d6mtq7$(this, dropdown_metadata);
  dropdownToggle_0 = css().provideDelegate_d6mtq7$(this, dropdownToggle_metadata);
  dropdownToggleSplit = css().provideDelegate_d6mtq7$(this, dropdownToggleSplit_metadata);
  dropdownMenu = css().provideDelegate_d6mtq7$(this, dropdownMenu_metadata);
  dropdownMenuRight_0 = css().provideDelegate_d6mtq7$(this, dropdownMenuRight_metadata);
  dropdownItem_0 = css().provideDelegate_d6mtq7$(this, dropdownItem_metadata);
  customSelect = css().provideDelegate_d6mtq7$(this, customSelect_metadata);
  fontWeightBold = css().provideDelegate_d6mtq7$(this, fontWeightBold_metadata);
  badge = css().provideDelegate_d6mtq7$(this, badge_metadata);
  badgePill = css().provideDelegate_d6mtq7$(this, badgePill_metadata);
  badgePrimary = css().provideDelegate_d6mtq7$(this, badgePrimary_metadata);
  badgeSecondary = css().provideDelegate_d6mtq7$(this, badgeSecondary_metadata);
  badgeWarning = css().provideDelegate_d6mtq7$(this, badgeWarning_metadata);
  navTabs = css().provideDelegate_d6mtq7$(this, navTabs_metadata);
  navItem = css().provideDelegate_d6mtq7$(this, navItem_metadata);
  navLink = css().provideDelegate_d6mtq7$(this, navLink_metadata);
  active = css().provideDelegate_d6mtq7$(this, active_metadata);
  positionRelative_0 = css().provideDelegate_d6mtq7$(this, positionRelative_metadata);
  positionAbsolute_0 = css().provideDelegate_d6mtq7$(this, positionAbsolute_metadata);
  Kotlin.defineModule('appsimake-bootstrap', _);
  return _;
}(typeof this['appsimake-bootstrap'] === 'undefined' ? {} : this['appsimake-bootstrap'], kotlin, this['appsimake-domx'], this['appsimake-commonshr'], this['appsimake-common']);

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'domx'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'domx'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'domx'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'domx'.");
}
var domx = function (_, Kotlin, $module$common) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwCCE = Kotlin.throwCCE;
  var insertAt = $module$common.common.insertAt_y55kqv$;
  var removeAt = $module$common.common.removeAt_jeu5im$;
  var ListenableList$Listener = $module$common.common.ListenableList.Listener;
  var ensureNotNull = Kotlin.ensureNotNull;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var named = $module$common.common.named_cq6yhu$;
  function tagCreated$lambda($receiver) {
    return Unit;
  }
  function tagCreated($receiver, created, fn) {
    if (fn === void 0)
      fn = tagCreated$lambda;
    var t = created;
    if (!Kotlin.isType($receiver, Document)) {
      $receiver.appendChild(t);
    }
    fn(t);
    return t;
  }
  function tag$lambda($receiver) {
    return Unit;
  }
  function tag($receiver, name, fn) {
    if (fn === void 0)
      fn = tag$lambda;
    return tagCreated($receiver, document.createElement(name), fn);
  }
  function tagNS$lambda($receiver) {
    return Unit;
  }
  function tagNS($receiver, ns, name, fn) {
    if (fn === void 0)
      fn = tagNS$lambda;
    return tagCreated($receiver, document.createElementNS(ns, name), fn);
  }
  function get_classes($receiver) {
    return new Classes($receiver);
  }
  function Classes(element) {
    this.element_0 = element;
  }
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  Classes.prototype.plusAssign_61zpoe$ = function (cls) {
    var tmp$;
    var $receiver = trim(Kotlin.isCharSequence(tmp$ = cls) ? tmp$ : throwCCE()).toString();
    var tmp$_0;
    tmp$_0 = Regex_init('\\s').split_905azu$($receiver, 0).iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      addClass(this.element_0, [element]);
    }
  };
  Classes.prototype.minusAssign_61zpoe$ = function (cls) {
    var tmp$;
    var $receiver = trim(Kotlin.isCharSequence(tmp$ = cls) ? tmp$ : throwCCE()).toString();
    var tmp$_0;
    tmp$_0 = Regex_init('\\s').split_905azu$($receiver, 0).iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      removeClass(this.element_0, [element]);
    }
  };
  Classes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Classes',
    interfaces: []
  };
  function set($receiver, key, value) {
    var $receiver_0 = document.createAttribute(key);
    $receiver_0.value = value;
    $receiver.setNamedItem($receiver_0);
  }
  function clickEvent$lambda(closure$fn) {
    return function (it) {
      var tmp$;
      it.preventDefault();
      closure$fn(Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : throwCCE());
      return Unit;
    };
  }
  function clickEvent($receiver, fn) {
    $receiver.onclick = clickEvent$lambda(fn);
  }
  function inputEvent$lambda(closure$fn) {
    return function (it) {
      var tmp$;
      it.preventDefault();
      closure$fn(Kotlin.isType(tmp$ = it, InputEvent) ? tmp$ : throwCCE());
      return Unit;
    };
  }
  function inputEvent($receiver, fn) {
    $receiver.oninput = inputEvent$lambda(fn);
  }
  function rxInput$lambda(this$rxInput, closure$rx) {
    return function (it) {
      closure$rx.now = this$rxInput.value;
      return Unit;
    };
  }
  function rxInput($receiver, rx) {
    inputEvent($receiver, rxInput$lambda($receiver, rx));
  }
  function rxInput$lambda_0(this$rxInput, closure$rx) {
    return function (it) {
      closure$rx.now = this$rxInput.value;
      return Unit;
    };
  }
  function rxInput_0($receiver, rx) {
    inputEvent($receiver, rxInput$lambda_0($receiver, rx));
  }
  function rxEnabled$lambda(this$rxEnabled) {
    return function (it) {
      this$rxEnabled.disabled = !it;
      return Unit;
    };
  }
  function rxEnabled($receiver, rx) {
    rx.forEach_qlkmfe$(rxEnabled$lambda($receiver));
  }
  function listenableList$ObjectLiteral(closure$create, this$listenableList) {
    this.closure$create = closure$create;
    this.this$listenableList = this$listenableList;
  }
  listenableList$ObjectLiteral.prototype.added_wxm5ur$ = function (index, element) {
    insertAt(this.this$listenableList, index, this.closure$create(element));
  };
  listenableList$ObjectLiteral.prototype.removed_za3lpa$ = function (index) {
    removeAt(this.this$listenableList, index);
  };
  listenableList$ObjectLiteral.prototype.moved_vux9f0$ = function (from, to) {
    insertAt(this.this$listenableList, to, removeAt(this.this$listenableList, from));
  };
  listenableList$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ListenableList$Listener]
  };
  function listenableList($receiver, list, create) {
    return list.addListener_ednqrc$(new listenableList$ObjectLiteral(create, $receiver));
  }
  function div$lambda($receiver) {
    return Unit;
  }
  function div($receiver, fn) {
    if (fn === void 0)
      fn = div$lambda;
    return tag($receiver, 'div', fn);
  }
  function nav$lambda($receiver) {
    return Unit;
  }
  function nav($receiver, fn) {
    if (fn === void 0)
      fn = nav$lambda;
    return tag($receiver, 'nav', fn);
  }
  function span$lambda($receiver) {
    return Unit;
  }
  function span($receiver, fn) {
    if (fn === void 0)
      fn = span$lambda;
    return tag($receiver, 'span', fn);
  }
  function styleTag$lambda($receiver) {
    return Unit;
  }
  function styleTag($receiver, fn) {
    if (fn === void 0)
      fn = styleTag$lambda;
    return tag($receiver, 'style', fn);
  }
  function ul$lambda($receiver) {
    return Unit;
  }
  function ul($receiver, fn) {
    if (fn === void 0)
      fn = ul$lambda;
    return tag($receiver, 'ul', fn);
  }
  function a$lambda($receiver) {
    return Unit;
  }
  function a($receiver, fn) {
    if (fn === void 0)
      fn = a$lambda;
    return tag($receiver, 'a', fn);
  }
  function ol$lambda($receiver) {
    return Unit;
  }
  function ol($receiver, fn) {
    if (fn === void 0)
      fn = ol$lambda;
    return tag($receiver, 'ol', fn);
  }
  function li$lambda($receiver) {
    return Unit;
  }
  function li($receiver, fn) {
    if (fn === void 0)
      fn = li$lambda;
    return tag($receiver, 'li', fn);
  }
  function button$lambda($receiver) {
    return Unit;
  }
  function button($receiver, fn) {
    if (fn === void 0)
      fn = button$lambda;
    return tag($receiver, 'button', fn);
  }
  function label$lambda($receiver) {
    return Unit;
  }
  function label($receiver, fn) {
    if (fn === void 0)
      fn = label$lambda;
    return tag($receiver, 'label', fn);
  }
  function textarea$lambda($receiver) {
    return Unit;
  }
  function textarea($receiver, fn) {
    if (fn === void 0)
      fn = textarea$lambda;
    return tag($receiver, 'textarea', fn);
  }
  function input$lambda($receiver) {
    return Unit;
  }
  function input($receiver, fn) {
    if (fn === void 0)
      fn = input$lambda;
    return tag($receiver, 'input', fn);
  }
  function h1$lambda($receiver) {
    return Unit;
  }
  function h1($receiver, fn) {
    if (fn === void 0)
      fn = h1$lambda;
    return tag($receiver, 'h1', fn);
  }
  function h2$lambda($receiver) {
    return Unit;
  }
  function h2($receiver, fn) {
    if (fn === void 0)
      fn = h2$lambda;
    return tag($receiver, 'h2', fn);
  }
  function h3$lambda($receiver) {
    return Unit;
  }
  function h3($receiver, fn) {
    if (fn === void 0)
      fn = h3$lambda;
    return tag($receiver, 'h3', fn);
  }
  function h4$lambda($receiver) {
    return Unit;
  }
  function h4($receiver, fn) {
    if (fn === void 0)
      fn = h4$lambda;
    return tag($receiver, 'h4', fn);
  }
  function h5$lambda($receiver) {
    return Unit;
  }
  function h5($receiver, fn) {
    if (fn === void 0)
      fn = h5$lambda;
    return tag($receiver, 'h5', fn);
  }
  function h6$lambda($receiver) {
    return Unit;
  }
  function h6($receiver, fn) {
    if (fn === void 0)
      fn = h6$lambda;
    return tag($receiver, 'h6', fn);
  }
  function styleElement$lambda() {
    return styleTag(ensureNotNull(document.head));
  }
  var styleElement;
  function get_styleElement() {
    return styleElement.value;
  }
  function add(name, rules) {
    appendText(get_styleElement(), '.' + name + ' {' + rules + '}' + '\n');
    return name;
  }
  var defaultAnimRules;
  function anim(name, keyframes, rules) {
    if (rules === void 0)
      rules = defaultAnimRules;
    appendText(get_styleElement(), '@keyframes ' + name + ' {' + keyframes + '}' + '\n');
    return add(name, 'animation-name: ' + name + '; ' + rules);
  }
  function lineHeightInherit$lambda() {
    return add('line-height-inherit', 'line-height: inherit;');
  }
  var lineHeightInherit;
  function get_lineHeightInherit() {
    return lineHeightInherit.value;
  }
  function cursorPointer$lambda() {
    return add('cursor-pointer', 'cursor: pointer;');
  }
  var cursorPointer;
  function get_cursorPointer() {
    return cursorPointer.value;
  }
  function overflowHidden$lambda() {
    return add('overflow-hidden', 'overflow: hidden;');
  }
  var overflowHidden;
  function get_overflowHidden() {
    return overflowHidden.value;
  }
  var scrollVertical;
  var scrollVertical_metadata = new PropertyMetadata('scrollVertical');
  function get_scrollVertical() {
    return scrollVertical.getValue_n5byny$(this, scrollVertical_metadata);
  }
  var flexBasis0;
  var flexBasis0_metadata = new PropertyMetadata('flexBasis0');
  function get_flexBasis0() {
    return flexBasis0.getValue_n5byny$(this, flexBasis0_metadata);
  }
  function pointerEventsNone$lambda() {
    return add('pointer-events-none', 'pointer-events: none;');
  }
  var pointerEventsNone;
  function get_pointerEventsNone() {
    return pointerEventsNone.value;
  }
  function transformRight$lambda() {
    return add('transform-right', 'transform: translate(100%);');
  }
  var transformRight;
  function get_transformRight() {
    return transformRight.value;
  }
  function transformLeft$lambda() {
    return add('transform-left', 'transform: translate(-100%);');
  }
  var transformLeft;
  function get_transformLeft() {
    return transformLeft.value;
  }
  function transformCenter$lambda() {
    return add('transform-center', 'transform: none;');
  }
  var transformCenter;
  function get_transformCenter() {
    return transformCenter.value;
  }
  function animLeft$lambda() {
    return anim('anim-left', trimIndent('\n                to {\n                    transform: translate(-100%);\n                }\n            '));
  }
  var animLeft;
  function get_animLeft() {
    return animLeft.value;
  }
  function animRight$lambda() {
    return anim('anim-right', trimIndent('\n                to {\n                    transform: translate(100%);\n                }\n            '));
  }
  var animRight;
  function get_animRight() {
    return animRight.value;
  }
  function animCenter$lambda() {
    return anim('animCenter', trimIndent('\n                to {\n                    transform: none;\n                }\n            '));
  }
  var animCenter;
  function get_animCenter() {
    return animCenter.value;
  }
  function cls$lambda(closure$txt) {
    return function (it) {
      return add(it, closure$txt);
    };
  }
  function cls(txt) {
    return named(cls$lambda(txt));
  }
  var SvgNS;
  function svg$lambda($receiver) {
    return Unit;
  }
  function svg($receiver, name, fn) {
    if (fn === void 0)
      fn = svg$lambda;
    return tagNS($receiver, SvgNS, name, fn);
  }
  function svg$lambda_0($receiver) {
    return Unit;
  }
  function svg_0($receiver, fn) {
    if (fn === void 0)
      fn = svg$lambda_0;
    return svg($receiver, 'svg', fn);
  }
  function line$lambda($receiver) {
    return Unit;
  }
  function line($receiver, fn) {
    if (fn === void 0)
      fn = line$lambda;
    return svg($receiver, 'line', fn);
  }
  function rect$lambda($receiver) {
    return Unit;
  }
  function rect($receiver, fn) {
    if (fn === void 0)
      fn = rect$lambda;
    return svg($receiver, 'rect', fn);
  }
  function circle$lambda($receiver) {
    return Unit;
  }
  function circle($receiver, fn) {
    if (fn === void 0)
      fn = circle$lambda;
    return svg($receiver, 'circle', fn);
  }
  function a$lambda_0($receiver) {
    return Unit;
  }
  function a_0($receiver, fn) {
    if (fn === void 0)
      fn = a$lambda_0;
    return svg($receiver, 'a', fn);
  }
  function g$lambda($receiver) {
    return Unit;
  }
  function g($receiver, fn) {
    if (fn === void 0)
      fn = g$lambda;
    return svg($receiver, 'g', fn);
  }
  var package$domx = _.domx || (_.domx = {});
  package$domx.tagCreated_n4ldoh$ = tagCreated;
  package$domx.tag_vds068$ = tag;
  package$domx.tagNS_8ei2pe$ = tagNS;
  package$domx.get_classes_ejp6nk$ = get_classes;
  package$domx.Classes = Classes;
  package$domx.set_56wq3j$ = set;
  package$domx.clickEvent_bvfv80$ = clickEvent;
  package$domx.inputEvent_oyfk7p$ = inputEvent;
  package$domx.rxInput_his5zs$ = rxInput;
  package$domx.rxInput_oyq3so$ = rxInput_0;
  package$domx.rxEnabled_v5m6ih$ = rxEnabled;
  package$domx.listenableList_fgftfw$ = listenableList;
  package$domx.div_gnmiz0$ = div;
  package$domx.nav_nv65oz$ = nav;
  package$domx.span_c7xqcp$ = span;
  package$domx.styleTag_4udgdo$ = styleTag;
  package$domx.ul_t7sdcm$ = ul;
  package$domx.a_6t02fy$ = a;
  package$domx.ol_waljkg$ = ol;
  package$domx.li_8ixz9m$ = li;
  package$domx.button_9ztatb$ = button;
  package$domx.label_faa409$ = label;
  package$domx.textarea_vbubjb$ = textarea;
  package$domx.input_xh1a31$ = input;
  package$domx.h1_4vw2t7$ = h1;
  package$domx.h2_4vw2t7$ = h2;
  package$domx.h3_4vw2t7$ = h3;
  package$domx.h4_4vw2t7$ = h4;
  package$domx.h5_4vw2t7$ = h5;
  package$domx.h6_4vw2t7$ = h6;
  var package$styles = _.styles || (_.styles = {});
  Object.defineProperty(package$styles, 'styleElement', {
    get: get_styleElement
  });
  package$styles.add_puj7f4$ = add;
  package$styles.anim_6hosri$ = anim;
  Object.defineProperty(package$styles, 'lineHeightInherit', {
    get: get_lineHeightInherit
  });
  Object.defineProperty(package$styles, 'cursorPointer', {
    get: get_cursorPointer
  });
  Object.defineProperty(package$styles, 'overflowHidden', {
    get: get_overflowHidden
  });
  Object.defineProperty(package$styles, 'scrollVertical', {
    get: get_scrollVertical
  });
  Object.defineProperty(package$styles, 'flexBasis0', {
    get: get_flexBasis0
  });
  Object.defineProperty(package$styles, 'pointerEventsNone', {
    get: get_pointerEventsNone
  });
  Object.defineProperty(package$styles, 'transformRight', {
    get: get_transformRight
  });
  Object.defineProperty(package$styles, 'transformLeft', {
    get: get_transformLeft
  });
  Object.defineProperty(package$styles, 'transformCenter', {
    get: get_transformCenter
  });
  Object.defineProperty(package$styles, 'animLeft', {
    get: get_animLeft
  });
  Object.defineProperty(package$styles, 'animRight', {
    get: get_animRight
  });
  Object.defineProperty(package$styles, 'animCenter', {
    get: get_animCenter
  });
  package$styles.cls_61zpoe$ = cls;
  var package$svgx = _.svgx || (_.svgx = {});
  Object.defineProperty(package$svgx, 'SvgNS', {
    get: function () {
      return SvgNS;
    }
  });
  package$svgx.svg_veu7ak$ = svg_0;
  package$svgx.line_lr0x44$ = line;
  package$svgx.rect_bfker8$ = rect;
  package$svgx.circle_nmh8i0$ = circle;
  package$svgx.a_lzuxbr$ = a_0;
  package$svgx.g_5dzvjl$ = g;
  styleElement = lazy(styleElement$lambda);
  defaultAnimRules = trimIndent('\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n    animation-timing-function: ease;\n');
  lineHeightInherit = lazy(lineHeightInherit$lambda);
  cursorPointer = lazy(cursorPointer$lambda);
  overflowHidden = lazy(overflowHidden$lambda);
  scrollVertical = cls('overflow-y: auto;');
  flexBasis0 = cls('flex-basis: 0;');
  pointerEventsNone = lazy(pointerEventsNone$lambda);
  transformRight = lazy(transformRight$lambda);
  transformLeft = lazy(transformLeft$lambda);
  transformCenter = lazy(transformCenter$lambda);
  animLeft = lazy(animLeft$lambda);
  animRight = lazy(animRight$lambda);
  animCenter = lazy(animCenter$lambda);
  SvgNS = 'http://www.w3.org/2000/svg';
  Kotlin.defineModule('domx', _);
  return _;
}(typeof domx === 'undefined' ? {} : domx, kotlin, common);

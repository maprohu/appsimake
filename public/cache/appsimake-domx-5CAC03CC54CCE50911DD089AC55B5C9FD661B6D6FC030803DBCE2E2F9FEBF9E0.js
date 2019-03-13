if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-domx'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-domx'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-domx'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-domx'.");
}
this['appsimake-domx'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var KillsApi = $module$appsimake_commonshr.commonshr.KillsApi;
  var Unit = Kotlin.kotlin.Unit;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var InvokeApply = $module$appsimake_commonshr.commonshr.InvokeApply;
  var forEach = $module$appsimake_commonshr.rx.forEach_yaias7$;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_lqp1nt$;
  var killable = $module$appsimake_commonshr.killable;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var toString = Kotlin.toString;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var throwCCE = Kotlin.throwCCE;
  Cls$Companion.prototype = Object.create(Cls.prototype);
  Cls$Companion.prototype.constructor = Cls$Companion;
  function KillsApiDomx() {
  }
  KillsApiDomx.prototype.on_hgi4ad$ = function ($receiver, event, action) {
    on($receiver, this, event, action);
  };
  KillsApiDomx.prototype.on_2stdkb$ = function ($receiver, event, action) {
    on($receiver, this, event, action);
  };
  KillsApiDomx.prototype.onClick_pofl4w$ = function ($receiver, action) {
    onClick($receiver, this, action);
  };
  KillsApiDomx.prototype.onInput_clfw57$ = function ($receiver, action) {
    onInput($receiver, this, action);
  };
  KillsApiDomx.prototype.onChange_oeam7t$ = function ($receiver, action) {
    onChange($receiver, this, action);
  };
  KillsApiDomx.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KillsApiDomx',
    interfaces: [KillsApi]
  };
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
  var get_classes = defineInlineFunction('appsimake-domx.domx.get_classes_ejp6nk$', wrapFunction(function () {
    var Classes_init = _.domx.Classes;
    return function ($receiver) {
      return new Classes_init($receiver);
    };
  }));
  function Classes(element) {
    this.element_0 = element;
  }
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  Classes.prototype.plusAssign_pdl1vj$ = function (cls) {
    if (cls != null) {
      var tmp$;
      var $receiver = trim(Kotlin.isCharSequence(tmp$ = cls) ? tmp$ : throwCCE()).toString();
      var tmp$_0;
      tmp$_0 = Regex_init('\\s').split_905azu$($receiver, 0).iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        addClass(this.element_0, [element]);
      }
    }
  };
  Classes.prototype.minusAssign_pdl1vj$ = function (cls) {
    if (cls != null) {
      var tmp$;
      var $receiver = trim(Kotlin.isCharSequence(tmp$ = cls) ? tmp$ : throwCCE()).toString();
      var tmp$_0;
      tmp$_0 = Regex_init('\\s').split_905azu$($receiver, 0).iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        removeClass(this.element_0, [element]);
      }
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
  function Attrs(element) {
    this.element = element;
  }
  Attrs.prototype.set_puj7f4$ = function (key, value) {
    this.element.setAttribute(key, value);
  };
  Attrs.prototype.get_61zpoe$ = function (key) {
    return this.element.getAttribute(key);
  };
  Attrs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attrs',
    interfaces: []
  };
  function get_attr($receiver) {
    return new Attrs($receiver);
  }
  var nextId;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function get_ref($receiver) {
    var tmp$;
    var $receiver_0 = $receiver.id;
    if ($receiver_0 == null || isBlank($receiver_0)) {
      $receiver.id = $receiver.tagName + '-' + (tmp$ = nextId, nextId = tmp$ + 1 | 0, tmp$);
    }
    return $receiver.id;
  }
  function base64($receiver, mime, data) {
    $receiver.src = 'data:' + mime + ';base64,' + data;
    $receiver.type = mime;
  }
  function replay($receiver) {
    $receiver.pause();
    $receiver.currentTime = 0.0;
    $receiver.play();
  }
  function CssClass(name) {
    this.name = name;
  }
  function CssClass$getValue$lambda(this$CssClass) {
    return function ($receiver) {
      (new Classes($receiver)).plusAssign_pdl1vj$(this$CssClass.name);
      return Unit;
    };
  }
  CssClass.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    thisRef.element(CssClass$getValue$lambda(this));
    return this.name;
  };
  CssClass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssClass',
    interfaces: [ReadOnlyProperty]
  };
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  function toCss($receiver) {
    var regex = Regex_init('[A-Z]');
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = regex.find_905azu$($receiver);
      if (match == null) {
        replace_20wsma$result = $receiver.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = $receiver.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$($receiver, lastStart, foundMatch.range.start);
        sb.append_gw00v9$('-' + foundMatch.value.toLowerCase());
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$($receiver, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    var tmp$ = replace_20wsma$result;
    var regex_0 = Regex_init('\\d+');
    var replace_20wsma$result_0;
    replace_20wsma$break: do {
      var match_0 = regex_0.find_905azu$(tmp$);
      if (match_0 == null) {
        replace_20wsma$result_0 = tmp$.toString();
        break replace_20wsma$break;
      }
      var lastStart_0 = 0;
      var length_0 = tmp$.length;
      var sb_0 = StringBuilder_init(length_0);
      do {
        var foundMatch_0 = ensureNotNull(match_0);
        sb_0.append_ezbsdh$(tmp$, lastStart_0, foundMatch_0.range.start);
        sb_0.append_gw00v9$('-' + foundMatch_0.value);
        lastStart_0 = foundMatch_0.range.endInclusive + 1 | 0;
        match_0 = foundMatch_0.next();
      }
       while (lastStart_0 < length_0 && match_0 != null);
      if (lastStart_0 < length_0) {
        sb_0.append_ezbsdh$(tmp$, lastStart_0, length_0);
      }
      replace_20wsma$result_0 = sb_0.toString();
    }
     while (false);
    return replace_20wsma$result_0;
  }
  function CssClassProvider() {
  }
  CssClassProvider.prototype.provideDelegate_d6mtq7$ = function (thisRef, prop) {
    return new CssClass(toCss(prop.callableName));
  };
  CssClassProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssClassProvider',
    interfaces: []
  };
  function Cls(element) {
    Cls$Companion_getInstance();
    if (element === void 0)
      element = Cls_init$lambda;
    this.element = element;
  }
  function Cls$Companion() {
    Cls$Companion_instance = this;
    Cls.call(this);
  }
  Cls$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Cls]
  };
  var Cls$Companion_instance = null;
  function Cls$Companion_getInstance() {
    if (Cls$Companion_instance === null) {
      new Cls$Companion();
    }
    return Cls$Companion_instance;
  }
  function Cls_init$lambda(it) {
    return Unit;
  }
  Cls.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cls',
    interfaces: [InvokeApply]
  };
  function get_cls$lambda(this$cls) {
    return function (it) {
      it(this$cls);
      return Unit;
    };
  }
  function get_cls($receiver) {
    return new Cls(get_cls$lambda($receiver));
  }
  function css(name) {
    return new CssClass(name);
  }
  function css_0() {
    return new CssClassProvider();
  }
  function TagDelegate(name) {
    if (name === void 0)
      name = null;
    this.name = name;
  }
  TagDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    return tag(thisRef, (tmp$ = this.name) != null ? tmp$ : property.callableName);
  };
  TagDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDelegate',
    interfaces: [ReadOnlyProperty]
  };
  function elem() {
    return new TagDelegate();
  }
  function elem_0(name) {
    return new TagDelegate(name);
  }
  function invoke($receiver, fn) {
    fn($receiver);
    return $receiver;
  }
  function rxEnabled$lambda(this$rxEnabled) {
    return function ($receiver, it) {
      this$rxEnabled.disabled = !it;
      return Unit;
    };
  }
  function rxEnabled($receiver, deps, rx) {
    forEach(rx, deps, rxEnabled$lambda($receiver));
  }
  function rxEnabled$lambda_0(closure$fn) {
    return function ($receiver) {
      return closure$fn($receiver);
    };
  }
  function rxEnabled_0($receiver, deps, fn) {
    var $receiver_0 = Rx_init(deps.kills, rxEnabled$lambda_0(fn));
    rxEnabled($receiver, killable.HasNoKill, $receiver_0);
  }
  function remAssign($receiver, text) {
    $receiver.innerText = text;
  }
  var div;
  var div_metadata = new PropertyMetadata('div');
  function get_div($receiver) {
    return div.getValue_lrcp0p$($receiver, div_metadata);
  }
  var styleTag;
  var styleTag_metadata = new PropertyMetadata('styleTag');
  function get_styleTag($receiver) {
    return styleTag.getValue_lrcp0p$($receiver, styleTag_metadata);
  }
  var nav;
  var nav_metadata = new PropertyMetadata('nav');
  function get_nav($receiver) {
    return nav.getValue_lrcp0p$($receiver, nav_metadata);
  }
  var video;
  var video_metadata = new PropertyMetadata('video');
  function get_video($receiver) {
    return video.getValue_lrcp0p$($receiver, video_metadata);
  }
  var li;
  var li_metadata = new PropertyMetadata('li');
  function get_li($receiver) {
    return li.getValue_lrcp0p$($receiver, li_metadata);
  }
  var ol;
  var ol_metadata = new PropertyMetadata('ol');
  function get_ol($receiver) {
    return ol.getValue_lrcp0p$($receiver, ol_metadata);
  }
  var ul;
  var ul_metadata = new PropertyMetadata('ul');
  function get_ul($receiver) {
    return ul.getValue_lrcp0p$($receiver, ul_metadata);
  }
  var img;
  var img_metadata = new PropertyMetadata('img');
  function get_img($receiver) {
    return img.getValue_lrcp0p$($receiver, img_metadata);
  }
  var strong;
  var strong_metadata = new PropertyMetadata('strong');
  function get_strong($receiver) {
    return strong.getValue_lrcp0p$($receiver, strong_metadata);
  }
  var pre;
  var pre_metadata = new PropertyMetadata('pre');
  function get_pre($receiver) {
    return pre.getValue_lrcp0p$($receiver, pre_metadata);
  }
  var source;
  var source_metadata = new PropertyMetadata('source');
  function get_source($receiver) {
    return source.getValue_lrcp0p$($receiver, source_metadata);
  }
  var audio;
  var audio_metadata = new PropertyMetadata('audio');
  function get_audio($receiver) {
    return audio.getValue_lrcp0p$($receiver, audio_metadata);
  }
  var span;
  var span_metadata = new PropertyMetadata('span');
  function get_span($receiver) {
    return span.getValue_lrcp0p$($receiver, span_metadata);
  }
  var a;
  var a_metadata = new PropertyMetadata('a');
  function get_a($receiver) {
    return a.getValue_lrcp0p$($receiver, a_metadata);
  }
  var button;
  var button_metadata = new PropertyMetadata('button');
  function get_button($receiver) {
    return button.getValue_lrcp0p$($receiver, button_metadata);
  }
  var h1;
  var h1_metadata = new PropertyMetadata('h1');
  function get_h1($receiver) {
    return h1.getValue_lrcp0p$($receiver, h1_metadata);
  }
  var h2;
  var h2_metadata = new PropertyMetadata('h2');
  function get_h2($receiver) {
    return h2.getValue_lrcp0p$($receiver, h2_metadata);
  }
  var h3;
  var h3_metadata = new PropertyMetadata('h3');
  function get_h3($receiver) {
    return h3.getValue_lrcp0p$($receiver, h3_metadata);
  }
  var h4;
  var h4_metadata = new PropertyMetadata('h4');
  function get_h4($receiver) {
    return h4.getValue_lrcp0p$($receiver, h4_metadata);
  }
  var h5;
  var h5_metadata = new PropertyMetadata('h5');
  function get_h5($receiver) {
    return h5.getValue_lrcp0p$($receiver, h5_metadata);
  }
  var h6;
  var h6_metadata = new PropertyMetadata('h6');
  function get_h6($receiver) {
    return h6.getValue_lrcp0p$($receiver, h6_metadata);
  }
  var dl;
  var dl_metadata = new PropertyMetadata('dl');
  function get_dl($receiver) {
    return dl.getValue_lrcp0p$($receiver, dl_metadata);
  }
  var dt;
  var dt_metadata = new PropertyMetadata('dt');
  function get_dt($receiver) {
    return dt.getValue_lrcp0p$($receiver, dt_metadata);
  }
  var dd;
  var dd_metadata = new PropertyMetadata('dd');
  function get_dd($receiver) {
    return dd.getValue_lrcp0p$($receiver, dd_metadata);
  }
  var input;
  var input_metadata = new PropertyMetadata('input');
  function get_input($receiver) {
    return input.getValue_lrcp0p$($receiver, input_metadata);
  }
  var form;
  var form_metadata = new PropertyMetadata('form');
  function get_form($receiver) {
    return form.getValue_lrcp0p$($receiver, form_metadata);
  }
  var label;
  var label_metadata = new PropertyMetadata('label');
  function get_label($receiver) {
    return label.getValue_lrcp0p$($receiver, label_metadata);
  }
  var textarea;
  var textarea_metadata = new PropertyMetadata('textarea');
  function get_textarea($receiver) {
    return textarea.getValue_lrcp0p$($receiver, textarea_metadata);
  }
  var select;
  var select_metadata = new PropertyMetadata('select');
  function get_select($receiver) {
    return select.getValue_lrcp0p$($receiver, select_metadata);
  }
  var option;
  var option_metadata = new PropertyMetadata('option');
  function get_option($receiver) {
    return option.getValue_lrcp0p$($receiver, option_metadata);
  }
  function on$lambda(closure$action) {
    return function (e) {
      closure$action(e);
      return Unit;
    };
  }
  function on$lambda_0(closure$event, closure$listener, this$on) {
    return function () {
      this$on.removeEventListener(closure$event, closure$listener);
      return Unit;
    };
  }
  function on($receiver, deps, event, action) {
    var listener = on$lambda(action);
    $receiver.addEventListener(event, listener);
    plusAssign(deps.kills, on$lambda_0(event, listener, $receiver));
  }
  function onClick($receiver, deps, action) {
    on($receiver, deps, 'click', action);
  }
  function onInput($receiver, deps, action) {
    on($receiver, deps, 'input', action);
  }
  function onChange($receiver, deps, action) {
    on($receiver, deps, 'change', action);
  }
  function styleElement$lambda() {
    return get_styleTag(ensureNotNull(document.head));
  }
  var styleElement;
  function get_styleElement() {
    return styleElement.value;
  }
  function styleSheet$lambda() {
    return get_styleElement().sheet;
  }
  var styleSheet;
  function get_styleSheet() {
    return styleSheet.value;
  }
  function addStyle(name, action, rules) {
    var tmp$;
    get_styleSheet().insertRule('.' + name + ((tmp$ = action != null ? ':' + toString(action) : null) != null ? tmp$ : '') + ' {' + rules + '}', get_styleSheet().cssRules.length);
  }
  function def$ObjectLiteral(closure$action, closure$s) {
    this.closure$action = closure$action;
    this.closure$s = closure$s;
    this.name = null;
  }
  function def$ObjectLiteral$getValue$lambda(closure$n) {
    return function ($receiver) {
      (new Classes($receiver)).plusAssign_pdl1vj$(closure$n);
      return Unit;
    };
  }
  def$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    if (this.name == null) {
      var n = toCss(property.callableName);
      this.name = n;
      addStyle(n, this.closure$action, this.closure$s);
      tmp$ = n;
    }
     else {
      tmp$ = ensureNotNull(this.name);
    }
    var n_0 = tmp$;
    thisRef.element(def$ObjectLiteral$getValue$lambda(n_0));
    return n_0;
  };
  def$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadOnlyProperty]
  };
  function def(s, action) {
    if (action === void 0)
      action = null;
    return new def$ObjectLiteral(action, s);
  }
  function get_cssEscape($receiver) {
    return Regex_init('[^a-zA-Z0-9-]]').replace_x2uqeu$($receiver, '_');
  }
  function defParam$lambda(it) {
    return get_cssEscape(toString(it));
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function defParam$ObjectLiteral(closure$paramString, closure$action, closure$css) {
    this.closure$paramString = closure$paramString;
    this.closure$action = closure$action;
    this.closure$css = closure$css;
    this.names = LinkedHashMap_init();
  }
  function defParam$ObjectLiteral$getValue$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      (new Classes($receiver)).plusAssign_pdl1vj$(this$);
      return Unit;
    };
  }
  function defParam$ObjectLiteral$getValue$lambda(this$, closure$property, closure$paramString, closure$action, closure$css, closure$thisRef) {
    return function (param) {
      var $receiver = this$.names;
      var tmp$;
      var value = $receiver.get_11rb$(param);
      if (value == null) {
        var closure$property_0 = closure$property;
        var closure$paramString_0 = closure$paramString;
        var closure$action_0 = closure$action;
        var closure$css_0 = closure$css;
        var $receiver_0 = toCss(closure$property_0.callableName) + '--' + closure$paramString_0(param);
        addStyle($receiver_0, closure$action_0, closure$css_0(param));
        var answer = $receiver_0;
        $receiver.put_xwzc9p$(param, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      var $receiver_1 = tmp$;
      closure$thisRef.element(defParam$ObjectLiteral$getValue$lambda$lambda$lambda($receiver_1));
      return $receiver_1;
    };
  }
  defParam$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return defParam$ObjectLiteral$getValue$lambda(this, property, this.closure$paramString, this.closure$action, this.closure$css, thisRef);
  };
  defParam$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadOnlyProperty]
  };
  function defParam(action, paramString, css) {
    if (action === void 0)
      action = null;
    if (paramString === void 0)
      paramString = defParam$lambda;
    return new defParam$ObjectLiteral(paramString, action, css);
  }
  var height0;
  var height0_metadata = new PropertyMetadata('height0');
  function get_height0($receiver) {
    return height0.getValue_lrcp0p$($receiver, height0_metadata);
  }
  var lineHeightInherit;
  var lineHeightInherit_metadata = new PropertyMetadata('lineHeightInherit');
  function get_lineHeightInherit($receiver) {
    return lineHeightInherit.getValue_lrcp0p$($receiver, lineHeightInherit_metadata);
  }
  var cursorPointer;
  var cursorPointer_metadata = new PropertyMetadata('cursorPointer');
  function get_cursorPointer($receiver) {
    return cursorPointer.getValue_lrcp0p$($receiver, cursorPointer_metadata);
  }
  var hoverColorInherit;
  var hoverColorInherit_metadata = new PropertyMetadata('hoverColorInherit');
  function get_hoverColorInherit($receiver) {
    return hoverColorInherit.getValue_lrcp0p$($receiver, hoverColorInherit_metadata);
  }
  var overflowHidden;
  var overflowHidden_metadata = new PropertyMetadata('overflowHidden');
  function get_overflowHidden($receiver) {
    return overflowHidden.getValue_lrcp0p$($receiver, overflowHidden_metadata);
  }
  var scrollVertical;
  var scrollVertical_metadata = new PropertyMetadata('scrollVertical');
  function get_scrollVertical($receiver) {
    return scrollVertical.getValue_lrcp0p$($receiver, scrollVertical_metadata);
  }
  var scrollHorizontal;
  var scrollHorizontal_metadata = new PropertyMetadata('scrollHorizontal');
  function get_scrollHorizontal($receiver) {
    return scrollHorizontal.getValue_lrcp0p$($receiver, scrollHorizontal_metadata);
  }
  var dGrid;
  var dGrid_metadata = new PropertyMetadata('dGrid');
  function get_dGrid($receiver) {
    return dGrid.getValue_lrcp0p$($receiver, dGrid_metadata);
  }
  var alignContentCenter;
  var alignContentCenter_metadata = new PropertyMetadata('alignContentCenter');
  function get_alignContentCenter($receiver) {
    return alignContentCenter.getValue_lrcp0p$($receiver, alignContentCenter_metadata);
  }
  var gridAutoFlowRow;
  var gridAutoFlowRow_metadata = new PropertyMetadata('gridAutoFlowRow');
  function get_gridAutoFlowRow($receiver) {
    return gridAutoFlowRow.getValue_lrcp0p$($receiver, gridAutoFlowRow_metadata);
  }
  var justifySelfEnd;
  var justifySelfEnd_metadata = new PropertyMetadata('justifySelfEnd');
  function get_justifySelfEnd($receiver) {
    return justifySelfEnd.getValue_lrcp0p$($receiver, justifySelfEnd_metadata);
  }
  var justifySelfStart;
  var justifySelfStart_metadata = new PropertyMetadata('justifySelfStart');
  function get_justifySelfStart($receiver) {
    return justifySelfStart.getValue_lrcp0p$($receiver, justifySelfStart_metadata);
  }
  var flexBasis0;
  var flexBasis0_metadata = new PropertyMetadata('flexBasis0');
  function get_flexBasis0($receiver) {
    return flexBasis0.getValue_lrcp0p$($receiver, flexBasis0_metadata);
  }
  var pointerEventsNone;
  var pointerEventsNone_metadata = new PropertyMetadata('pointerEventsNone');
  function get_pointerEventsNone($receiver) {
    return pointerEventsNone.getValue_lrcp0p$($receiver, pointerEventsNone_metadata);
  }
  var pointerEventsAll;
  var pointerEventsAll_metadata = new PropertyMetadata('pointerEventsAll');
  function get_pointerEventsAll($receiver) {
    return pointerEventsAll.getValue_lrcp0p$($receiver, pointerEventsAll_metadata);
  }
  var textDecorationNone;
  var textDecorationNone_metadata = new PropertyMetadata('textDecorationNone');
  function get_textDecorationNone($receiver) {
    return textDecorationNone.getValue_lrcp0p$($receiver, textDecorationNone_metadata);
  }
  var fontSize100;
  var fontSize100_metadata = new PropertyMetadata('fontSize100');
  function get_fontSize100($receiver) {
    return fontSize100.getValue_lrcp0p$($receiver, fontSize100_metadata);
  }
  var widthAuto;
  var widthAuto_metadata = new PropertyMetadata('widthAuto');
  function get_widthAuto($receiver) {
    return widthAuto.getValue_lrcp0p$($receiver, widthAuto_metadata);
  }
  var zIndex1;
  var zIndex1_metadata = new PropertyMetadata('zIndex1');
  function get_zIndex1($receiver) {
    return zIndex1.getValue_lrcp0p$($receiver, zIndex1_metadata);
  }
  var leftRightTopBottom0;
  var leftRightTopBottom0_metadata = new PropertyMetadata('leftRightTopBottom0');
  function get_leftRightTopBottom0($receiver) {
    return leftRightTopBottom0.getValue_lrcp0p$($receiver, leftRightTopBottom0_metadata);
  }
  var objectFitCover;
  var objectFitCover_metadata = new PropertyMetadata('objectFitCover');
  function get_objectFitCover($receiver) {
    return objectFitCover.getValue_lrcp0p$($receiver, objectFitCover_metadata);
  }
  var objectFitContain;
  var objectFitContain_metadata = new PropertyMetadata('objectFitContain');
  function get_objectFitContain($receiver) {
    return objectFitContain.getValue_lrcp0p$($receiver, objectFitContain_metadata);
  }
  var objectFitScaleDown;
  var objectFitScaleDown_metadata = new PropertyMetadata('objectFitScaleDown');
  function get_objectFitScaleDown($receiver) {
    return objectFitScaleDown.getValue_lrcp0p$($receiver, objectFitScaleDown_metadata);
  }
  function gridTemplateColumnsAuto$lambda$lambda(it) {
    return 'auto';
  }
  function gridTemplateColumnsAuto$lambda(count) {
    return 'grid-template-columns: ' + joinToString(new IntRange(1, count), ' ', void 0, void 0, void 0, void 0, gridTemplateColumnsAuto$lambda$lambda) + ';';
  }
  var gridTemplateColumnsAuto;
  var gridTemplateColumnsAuto_metadata = new PropertyMetadata('gridTemplateColumnsAuto');
  function get_gridTemplateColumnsAuto($receiver) {
    return gridTemplateColumnsAuto.getValue_lrcp0p$($receiver, gridTemplateColumnsAuto_metadata);
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
  function a$lambda($receiver) {
    return Unit;
  }
  function a_0($receiver, fn) {
    if (fn === void 0)
      fn = a$lambda;
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
  function get_owner($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = $receiver.ownerSVGElement) != null ? tmp$_0 : Kotlin.isType(tmp$ = $receiver, SVGSVGElement) ? tmp$ : throwCCE();
  }
  function transform($receiver, fn) {
    var $receiver_0 = get_owner($receiver).createSVGTransform();
    fn($receiver_0);
    $receiver.transform.baseVal.appendItem($receiver_0);
    return $receiver_0;
  }
  function viewBox($receiver, x, y, w, h) {
    $receiver.setAttribute('viewBox', x.toString() + ' ' + y + ' ' + w + ' ' + h);
  }
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$domx = _.domx || (_.domx = {});
  package$domx.KillsApiDomx = KillsApiDomx;
  package$domx.tagCreated_n4ldoh$ = tagCreated;
  package$domx.tag_vds068$ = tag;
  package$domx.tagNS_8ei2pe$ = tagNS;
  package$domx.get_classes_ejp6nk$ = get_classes;
  package$domx.Classes = Classes;
  package$domx.set_56wq3j$ = set;
  package$domx.Attrs = Attrs;
  package$domx.get_attr_ejp6nk$ = get_attr;
  package$domx.get_ref_ejp6nk$ = get_ref;
  package$domx.base64_mf97a2$ = base64;
  package$domx.replay_cmu6zj$ = replay;
  $$importsForInline$$['appsimake-domx'] = _;
  package$domx.CssClass = CssClass;
  package$domx.toCss_pdl1vz$ = toCss;
  package$domx.CssClassProvider = CssClassProvider;
  Object.defineProperty(Cls, 'Companion', {
    get: Cls$Companion_getInstance
  });
  package$domx.Cls = Cls;
  package$domx.get_cls_ejp6nk$ = get_cls;
  package$domx.css_61zpoe$ = css;
  package$domx.css = css_0;
  package$domx.TagDelegate = TagDelegate;
  package$domx.elem_kxhmqx$ = elem;
  package$domx.elem_evuobd$ = elem_0;
  package$domx.invoke_inodcj$ = invoke;
  package$domx.rxEnabled_573ntu$ = rxEnabled;
  package$domx.rxEnabled_3afqaq$ = rxEnabled_0;
  package$domx.remAssign_9bm2zh$ = remAssign;
  package$domx.get_div_asww5s$ = get_div;
  package$domx.get_styleTag_asww5s$ = get_styleTag;
  package$domx.get_nav_asww5s$ = get_nav;
  package$domx.get_video_asww5s$ = get_video;
  package$domx.get_li_asww5s$ = get_li;
  package$domx.get_ol_asww5s$ = get_ol;
  package$domx.get_ul_asww5s$ = get_ul;
  package$domx.get_img_asww5s$ = get_img;
  package$domx.get_strong_asww5s$ = get_strong;
  package$domx.get_pre_asww5s$ = get_pre;
  package$domx.get_source_asww5s$ = get_source;
  package$domx.get_audio_asww5s$ = get_audio;
  package$domx.get_span_asww5s$ = get_span;
  package$domx.get_a_asww5s$ = get_a;
  package$domx.get_button_asww5s$ = get_button;
  package$domx.get_h1_asww5s$ = get_h1;
  package$domx.get_h2_asww5s$ = get_h2;
  package$domx.get_h3_asww5s$ = get_h3;
  package$domx.get_h4_asww5s$ = get_h4;
  package$domx.get_h5_asww5s$ = get_h5;
  package$domx.get_h6_asww5s$ = get_h6;
  package$domx.get_dl_asww5s$ = get_dl;
  package$domx.get_dt_asww5s$ = get_dt;
  package$domx.get_dd_asww5s$ = get_dd;
  package$domx.get_input_asww5s$ = get_input;
  package$domx.get_form_asww5s$ = get_form;
  package$domx.get_label_asww5s$ = get_label;
  package$domx.get_textarea_asww5s$ = get_textarea;
  package$domx.get_select_asww5s$ = get_select;
  package$domx.get_option_asww5s$ = get_option;
  package$domx.on_ukchg8$ = on;
  package$domx.onClick_g3txrx$ = onClick;
  package$domx.onInput_t6tmrm$ = onInput;
  package$domx.onChange_8wu52c$ = onChange;
  var package$styles = _.styles || (_.styles = {});
  package$styles.addStyle_722sht$ = addStyle;
  package$styles.get_cssEscape_pdl1vz$ = get_cssEscape;
  package$styles.get_height0_kre7dp$ = get_height0;
  package$styles.get_lineHeightInherit_kre7dp$ = get_lineHeightInherit;
  package$styles.get_cursorPointer_kre7dp$ = get_cursorPointer;
  package$styles.get_hoverColorInherit_kre7dp$ = get_hoverColorInherit;
  package$styles.get_overflowHidden_kre7dp$ = get_overflowHidden;
  package$styles.get_scrollVertical_kre7dp$ = get_scrollVertical;
  package$styles.get_scrollHorizontal_kre7dp$ = get_scrollHorizontal;
  package$styles.get_dGrid_kre7dp$ = get_dGrid;
  package$styles.get_alignContentCenter_kre7dp$ = get_alignContentCenter;
  package$styles.get_gridAutoFlowRow_kre7dp$ = get_gridAutoFlowRow;
  package$styles.get_justifySelfEnd_kre7dp$ = get_justifySelfEnd;
  package$styles.get_justifySelfStart_kre7dp$ = get_justifySelfStart;
  package$styles.get_flexBasis0_kre7dp$ = get_flexBasis0;
  package$styles.get_pointerEventsNone_kre7dp$ = get_pointerEventsNone;
  package$styles.get_pointerEventsAll_kre7dp$ = get_pointerEventsAll;
  package$styles.get_textDecorationNone_kre7dp$ = get_textDecorationNone;
  package$styles.get_fontSize100_kre7dp$ = get_fontSize100;
  package$styles.get_widthAuto_kre7dp$ = get_widthAuto;
  package$styles.get_zIndex1_kre7dp$ = get_zIndex1;
  package$styles.get_leftRightTopBottom0_kre7dp$ = get_leftRightTopBottom0;
  package$styles.get_objectFitCover_kre7dp$ = get_objectFitCover;
  package$styles.get_objectFitContain_kre7dp$ = get_objectFitContain;
  package$styles.get_objectFitScaleDown_kre7dp$ = get_objectFitScaleDown;
  package$styles.get_gridTemplateColumnsAuto_kre7dp$ = get_gridTemplateColumnsAuto;
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
  package$svgx.get_owner_npzfio$ = get_owner;
  package$svgx.transform_udgqj7$ = transform;
  package$svgx.viewBox_wedmho$ = viewBox;
  KillsApiDomx.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  KillsApiDomx.prototype.get_oldKilled_vsdo34$ = KillsApi.prototype.get_oldKilled_vsdo34$;
  KillsApiDomx.prototype.get_oldKilledOpt_vsdo34$ = KillsApi.prototype.get_oldKilledOpt_vsdo34$;
  KillsApiDomx.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  KillsApiDomx.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  KillsApiDomx.prototype.rx_wgabca$ = KillsApi.prototype.rx_wgabca$;
  KillsApiDomx.prototype.rx_djv61p$ = KillsApi.prototype.rx_djv61p$;
  KillsApiDomx.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  KillsApiDomx.prototype.feedTo_9o5f67$ = KillsApi.prototype.feedTo_9o5f67$;
  KillsApiDomx.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  KillsApiDomx.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  KillsApiDomx.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  KillsApiDomx.prototype.forEachLater_xwzbbo$ = KillsApi.prototype.forEachLater_xwzbbo$;
  KillsApiDomx.prototype.incremented_eoy9qo$ = KillsApi.prototype.incremented_eoy9qo$;
  KillsApiDomx.prototype.linked_n1nom7$ = KillsApi.prototype.linked_n1nom7$;
  KillsApiDomx.prototype.listen_ubid8w$ = KillsApi.prototype.listen_ubid8w$;
  KillsApiDomx.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  KillsApiDomx.prototype.mapLive_1mq1ue$ = KillsApi.prototype.mapLive_1mq1ue$;
  KillsApiDomx.prototype.plusAssign_ubid8w$ = KillsApi.prototype.plusAssign_ubid8w$;
  KillsApiDomx.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  KillsApiDomx.prototype.remAssign_wgabca$ = KillsApi.prototype.remAssign_wgabca$;
  KillsApiDomx.prototype.remAssign_djv61p$ = KillsApi.prototype.remAssign_djv61p$;
  KillsApiDomx.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  KillsApiDomx.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  KillsApiDomx.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  KillsApiDomx.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  KillsApiDomx.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  nextId = 0;
  div = elem();
  styleTag = elem_0('style');
  nav = elem();
  video = elem();
  li = elem();
  ol = elem();
  ul = elem();
  img = elem();
  strong = elem();
  pre = elem();
  source = elem();
  audio = elem();
  span = elem();
  a = elem();
  button = elem();
  h1 = elem();
  h2 = elem();
  h3 = elem();
  h4 = elem();
  h5 = elem();
  h6 = elem();
  dl = elem();
  dt = elem();
  dd = elem();
  input = elem();
  form = elem();
  label = elem();
  textarea = elem();
  select = elem();
  option = elem();
  styleElement = lazy(styleElement$lambda);
  styleSheet = lazy(styleSheet$lambda);
  height0 = def('height: 0px;');
  lineHeightInherit = def('line-height: inherit;');
  cursorPointer = def('cursor: pointer;');
  hoverColorInherit = def('color: inherit;', 'hover');
  overflowHidden = def('overflow: hidden;');
  scrollVertical = def('overflow-y: auto;');
  scrollHorizontal = def('overflow-x: auto;');
  dGrid = def('display: grid;');
  alignContentCenter = def('align-content: center;');
  gridAutoFlowRow = def('grid-auto-flow: row;');
  justifySelfEnd = def('justify-self: end;');
  justifySelfStart = def('justify-self: start;');
  flexBasis0 = def('flex-basis: 0;');
  pointerEventsNone = def('pointer-events: none;');
  pointerEventsAll = def('pointer-events: all;');
  textDecorationNone = def('text-decoration: none;');
  fontSize100 = def('font-size: 100%;');
  widthAuto = def('width: auto;');
  zIndex1 = def('z-index: 1;');
  leftRightTopBottom0 = def(trimIndent('\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n    '));
  objectFitCover = def('object-fit: cover;');
  objectFitContain = def('object-fit: contain;');
  objectFitScaleDown = def('object-fit: scale-down;');
  gridTemplateColumnsAuto = defParam(void 0, void 0, gridTemplateColumnsAuto$lambda);
  SvgNS = 'http://www.w3.org/2000/svg';
  Kotlin.defineModule('appsimake-domx', _);
  return _;
}(typeof this['appsimake-domx'] === 'undefined' ? {} : this['appsimake-domx'], kotlin, this['appsimake-commonshr']);

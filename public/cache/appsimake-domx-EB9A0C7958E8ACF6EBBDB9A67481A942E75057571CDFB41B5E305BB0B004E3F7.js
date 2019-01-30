if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-domx'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-domx'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-domx'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-domx'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-domx'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-domx'.");
}
this['appsimake-domx'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_common) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwCCE = Kotlin.throwCCE;
  var KillableSeq_init = $module$appsimake_commonshr.killable.KillableSeq_init_wii6vi$;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_klfg04$;
  var insertAt = $module$appsimake_common.common.insertAt_y55kqv$;
  var removeAt = $module$appsimake_common.common.removeAt_jeu5im$;
  var ListenableList$Listener = $module$appsimake_common.common.ListenableList.Listener;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ensureNotNull = Kotlin.ensureNotNull;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_gexuht$;
  var equals = Kotlin.equals;
  var drop = Kotlin.kotlin.sequences.drop_wuwhe2$;
  var removeFromParent = $module$appsimake_common.common.removeFromParent_asww5s$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  Cls$Companion.prototype = Object.create(Cls.prototype);
  Cls$Companion.prototype.constructor = Cls$Companion;
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
  function longClick$cancel(closure$timer) {
    return function () {
      var tmp$;
      if ((tmp$ = closure$timer.v) != null) {
        var closure$timer_0 = closure$timer;
        window.clearTimeout(tmp$);
        closure$timer_0.v = null;
      }
    };
  }
  function longClick$lambda(closure$cancel) {
    return function (it) {
      it.preventDefault();
      it.stopPropagation();
      closure$cancel();
      return Unit;
    };
  }
  function longClick$lambda$lambda(closure$timer, closure$fn) {
    return function () {
      closure$timer.v = null;
      closure$fn();
      return Unit;
    };
  }
  function longClick$lambda_0(closure$cancel, closure$timer, closure$fn) {
    return function (it) {
      it.preventDefault();
      it.stopPropagation();
      closure$cancel();
      closure$timer.v = window.setTimeout(longClick$lambda$lambda(closure$timer, closure$fn), 1000);
      return Unit;
    };
  }
  function longClick$lambda_1(closure$cancel) {
    return function (it) {
      it.preventDefault();
      it.stopPropagation();
      closure$cancel();
      return Unit;
    };
  }
  function longClick($receiver, fn) {
    var timer = {v: null};
    var cancel = longClick$cancel(timer);
    $receiver.onmouseleave = longClick$lambda(cancel);
    $receiver.onmousedown = longClick$lambda_0(cancel, timer, fn);
    $receiver.onmouseup = longClick$lambda_1(cancel);
  }
  function clickEventSeq$lambda(closure$fn, closure$seq) {
    return function (it) {
      var tmp$;
      it.preventDefault();
      closure$fn(closure$seq.killables(), Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : throwCCE());
      return Unit;
    };
  }
  function clickEventSeq($receiver, fn) {
    var seq = KillableSeq_init();
    $receiver.onclick = clickEventSeq$lambda(fn, seq);
    return seq;
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
  function changeEvent$lambda(closure$fn) {
    return function (it) {
      it.preventDefault();
      closure$fn(it);
      return Unit;
    };
  }
  function changeEvent($receiver, fn) {
    $receiver.onchange = changeEvent$lambda(fn);
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
  function listenInput$lambda(closure$fn, this$listenInput) {
    return function (it) {
      closure$fn(this$listenInput.value);
      return Unit;
    };
  }
  function listenInput($receiver, fn) {
    inputEvent($receiver, listenInput$lambda(fn, $receiver));
  }
  function listenInput$lambda_0(closure$fn, this$listenInput) {
    return function (it) {
      closure$fn(this$listenInput.value);
      return Unit;
    };
  }
  function listenInput_0($receiver, fn) {
    inputEvent($receiver, listenInput$lambda_0(fn, $receiver));
  }
  function rxEnabled$lambda(this$rxEnabled) {
    return function (it) {
      this$rxEnabled.disabled = !it;
      return Unit;
    };
  }
  function rxEnabled($receiver, rx) {
    return rx.forEach_qlkmfe$(rxEnabled$lambda($receiver));
  }
  function rxEnabled$lambda_0(closure$fn) {
    return function () {
      return closure$fn();
    };
  }
  function rxEnabled_0($receiver, fn) {
    var $receiver_0 = Rx_init(rxEnabled$lambda_0(fn));
    rxEnabled($receiver, $receiver_0);
    return $receiver_0;
  }
  function rxVisible$lambda(this$rxVisible) {
    return function (it) {
      this$rxVisible.style.visibility = it ? 'visible' : 'collapse';
      return Unit;
    };
  }
  function rxVisible($receiver, rxv) {
    return rxv.forEach_qlkmfe$(rxVisible$lambda($receiver));
  }
  function rxVisible_0($receiver, fn) {
    var $receiver_0 = Rx_init(fn);
    rxVisible($receiver, $receiver_0);
    return $receiver_0;
  }
  function listenableList$lambda(closure$create, this$listenableList) {
    return function (index, element) {
      insertAt(this$listenableList, index, closure$create(element));
      return Unit;
    };
  }
  function listenableList$lambda_0(this$listenableList) {
    return function (index, f) {
      removeAt(this$listenableList, index);
      return Unit;
    };
  }
  function listenableList$lambda_1(this$listenableList) {
    return function (from, to) {
      insertAt(this$listenableList, to, removeAt(this$listenableList, from));
      return Unit;
    };
  }
  function listenableList($receiver, list, create) {
    return list.addListener_ednqrc$(new ListenableList$Listener(listenableList$lambda(create, $receiver), listenableList$lambda_0($receiver), listenableList$lambda_1($receiver)));
  }
  function listenableList$lambda_2(closure$killables, closure$create, this$listenableList, closure$kills) {
    return function (index, element) {
      var ks = closure$killables.killables();
      var node = closure$create(element, ks);
      insertAt(this$listenableList, index, node);
      closure$kills.add_wxm5ur$(index, ks);
      return Unit;
    };
  }
  function listenableList$lambda_3(this$listenableList, closure$kills) {
    return function (index, f) {
      removeAt(this$listenableList, index);
      var ks = closure$kills.removeAt_za3lpa$(index);
      ks.kill();
      return Unit;
    };
  }
  function listenableList$lambda_4(this$listenableList, closure$kills) {
    return function (from, to) {
      insertAt(this$listenableList, to, removeAt(this$listenableList, from));
      closure$kills.add_wxm5ur$(to, closure$kills.removeAt_za3lpa$(from));
      return Unit;
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function listenableList_0($receiver, list, killables, create) {
    var kills = ArrayList_init();
    killables.plusAssign_wii6vi$(list.addListener_ednqrc$(new ListenableList$Listener(listenableList$lambda_2(killables, create, $receiver, kills), listenableList$lambda_3($receiver, kills), listenableList$lambda_4($receiver, kills))));
  }
  function get_textNode($receiver) {
    return document.createTextNode($receiver);
  }
  function plus($receiver, string) {
    $receiver.appendChild(get_textNode(string));
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
  function Attr() {
  }
  Attr.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return thisRef.getAttribute(property.callableName);
  };
  Attr.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    if (value == null) {
      thisRef.removeAttribute(property.callableName);
    }
     else {
      thisRef.setAttribute(property.callableName, value);
    }
  };
  Attr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attr',
    interfaces: [ReadWriteProperty]
  };
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
  function checkbox$lambda(closure$fn) {
    return function ($receiver) {
      $receiver.type = 'checkbox';
      closure$fn($receiver);
      return Unit;
    };
  }
  function checkbox($receiver, fn) {
    return invoke(get_input($receiver), checkbox$lambda(fn));
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
      get_classes($receiver).plusAssign_pdl1vj$(this$CssClass.name);
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
  Cls.prototype.invoke_cr52h1$ = function (fn) {
    fn(this);
    return this;
  };
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
    interfaces: []
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
  function TagDelegate() {
  }
  TagDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return tag(thisRef, property.callableName);
  };
  TagDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDelegate',
    interfaces: [ReadOnlyProperty]
  };
  function elem() {
    return new TagDelegate();
  }
  function invoke($receiver, fn) {
    fn($receiver);
    return $receiver;
  }
  var domxNodesAttributeName;
  function NodeExt(owner) {
    this.owner = owner;
    this.lastKnownChild_0 = null;
    this.childRole = null;
  }
  function NodeExt$ChildRole($outer, parent, previous) {
    this.$outer = $outer;
    this.parent = parent;
    this.previous = previous;
  }
  Object.defineProperty(NodeExt$ChildRole.prototype, 'owner', {
    get: function () {
      return this.$outer.owner;
    }
  });
  Object.defineProperty(NodeExt$ChildRole.prototype, 'isDisplayed', {
    get: function () {
      return get_isDisplayed(this.owner);
    }
  });
  NodeExt$ChildRole.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChildRole',
    interfaces: []
  };
  NodeExt.prototype.updateChildren = function () {
    var tmp$, tmp$_0;
    var $receiver = previousChain(this.lastKnownChild_0);
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (element.isDisplayed) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var lastKnownVisibleChildExt = firstOrNull$result;
    var firstUnknownChild = (tmp$_0 = (tmp$ = lastKnownVisibleChildExt != null ? lastKnownVisibleChildExt.owner : null) != null ? tmp$.nextSibling : null) != null ? tmp$_0 : this.owner.firstChild;
    var tmp$_2;
    tmp$_2 = nextSeq(firstUnknownChild).iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      this.lastKnownChild_0 = get_nodeExt(element_0).makeChild_bjm1lb$(this, this.lastKnownChild_0);
    }
    return this.lastKnownChild_0;
  };
  NodeExt.prototype.asChild = function () {
    return ensureNotNull(this.childRole);
  };
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  NodeExt.prototype.makeChild_bjm1lb$ = function (parent, previous) {
    if (!(this.childRole == null)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    this.childRole = new NodeExt$ChildRole(this, parent, previous);
    return this.childRole;
  };
  NodeExt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeExt',
    interfaces: []
  };
  function get_isDisplayed($receiver) {
    return $receiver.parentNode != null;
  }
  function previousChain$lambda(it) {
    return it.previous;
  }
  function previousChain($receiver) {
    return generateSequence($receiver, previousChain$lambda);
  }
  function nextSeq$lambda(it) {
    return it.nextSibling;
  }
  function nextSeq($receiver) {
    return generateSequence($receiver, nextSeq$lambda);
  }
  function get_nodeExt($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver[domxNodesAttributeName]) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver_0 = new NodeExt($receiver);
      $receiver[domxNodesAttributeName] = $receiver_0;
      tmp$_0 = $receiver_0;
    }
    return tmp$_0;
  }
  function rxDisplayed$lambda(closure$fn) {
    return function () {
      return closure$fn();
    };
  }
  function rxDisplayed($receiver, fn) {
    var rxv = Rx_init(rxDisplayed$lambda(fn));
    rxDisplayed_0($receiver, rxv);
    return rxv;
  }
  function rxDisplayed$lambda_0(this$rxDisplayed, closure$childRole, closure$parent) {
    return function (v) {
      var tmp$;
      if (v) {
        if (!get_isDisplayed(this$rxDisplayed)) {
          var $receiver = drop(previousChain(closure$childRole), 1);
          var firstOrNull$result;
          firstOrNull$break: do {
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
              var element = tmp$_0.next();
              if (element.isDisplayed) {
                firstOrNull$result = element;
                break firstOrNull$break;
              }
            }
            firstOrNull$result = null;
          }
           while (false);
          var previousDisplayed = firstOrNull$result;
          if (previousDisplayed == null) {
            tmp$ = closure$parent.firstChild;
          }
           else {
            tmp$ = previousDisplayed.owner.nextSibling;
          }
          var nextDisplayed = tmp$;
          closure$parent.insertBefore(this$rxDisplayed, nextDisplayed);
        }
      }
       else {
        removeFromParent(this$rxDisplayed);
      }
      return Unit;
    };
  }
  function rxDisplayed_0($receiver, rxv) {
    var parent = ensureNotNull($receiver.parentNode);
    var parentNodeExt = get_nodeExt(parent);
    parentNodeExt.updateChildren();
    var childRole = get_nodeExt($receiver).asChild();
    if (!equals(childRole.parent.owner, parent)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return rxv.forEach_qlkmfe$(rxDisplayed$lambda_0($receiver, childRole, parent));
  }
  function nav$lambda($receiver) {
    return Unit;
  }
  function nav($receiver, fn) {
    if (fn === void 0)
      fn = nav$lambda;
    return tag($receiver, 'nav', fn);
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
  function video$lambda($receiver) {
    return Unit;
  }
  function video($receiver, fn) {
    if (fn === void 0)
      fn = video$lambda;
    return tag($receiver, 'video', fn);
  }
  var div;
  var div_metadata = new PropertyMetadata('div');
  function get_div($receiver) {
    return div.getValue_lrcp0p$($receiver, div_metadata);
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
  function styleElement$lambda() {
    return styleTag(ensureNotNull(document.head));
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
  function addStyle(name, rules) {
    get_styleSheet().insertRule('.' + name + ' {' + rules + '}', get_styleSheet().cssRules.length);
  }
  function def$ObjectLiteral(closure$s) {
    this.closure$s = closure$s;
    this.name = null;
  }
  function def$ObjectLiteral$getValue$lambda(closure$n) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_pdl1vj$(closure$n);
      return Unit;
    };
  }
  def$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    if (this.name == null) {
      var n = toCss(property.callableName);
      this.name = n;
      addStyle(n, this.closure$s);
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
  function def(s) {
    return new def$ObjectLiteral(s);
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
  var package$domx = _.domx || (_.domx = {});
  package$domx.tagCreated_n4ldoh$ = tagCreated;
  package$domx.tag_vds068$ = tag;
  package$domx.tagNS_8ei2pe$ = tagNS;
  package$domx.get_classes_ejp6nk$ = get_classes;
  package$domx.Classes = Classes;
  package$domx.set_56wq3j$ = set;
  package$domx.clickEvent_bvfv80$ = clickEvent;
  package$domx.longClick_j9bshf$ = longClick;
  package$domx.clickEventSeq_er8ueh$ = clickEventSeq;
  package$domx.inputEvent_oyfk7p$ = inputEvent;
  package$domx.changeEvent_e6qnhl$ = changeEvent;
  package$domx.rxInput_his5zs$ = rxInput;
  package$domx.rxInput_oyq3so$ = rxInput_0;
  package$domx.listenInput_bouo3s$ = listenInput;
  package$domx.listenInput_5kmoko$ = listenInput_0;
  package$domx.rxEnabled_v5m6ih$ = rxEnabled;
  package$domx.rxEnabled_11uc4k$ = rxEnabled_0;
  package$domx.rxVisible_e43bpc$ = rxVisible;
  package$domx.rxVisible_i505hf$ = rxVisible_0;
  package$domx.listenableList_fgftfw$ = listenableList;
  package$domx.listenableList_yfrdg0$ = listenableList_0;
  package$domx.get_textNode_pdl1vz$ = get_textNode;
  package$domx.plus_uy78um$ = plus;
  package$domx.Attrs = Attrs;
  package$domx.get_attr_ejp6nk$ = get_attr;
  package$domx.Attr = Attr;
  package$domx.get_ref_ejp6nk$ = get_ref;
  package$domx.checkbox_xh1a31$ = checkbox;
  package$domx.base64_mf97a2$ = base64;
  package$domx.replay_cmu6zj$ = replay;
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
  package$domx.invoke_inodcj$ = invoke;
  NodeExt.ChildRole = NodeExt$ChildRole;
  package$domx.NodeExt = NodeExt;
  package$domx.get_isDisplayed_asww5s$ = get_isDisplayed;
  package$domx.previousChain_voxevv$ = previousChain;
  package$domx.nextSeq_k98lbj$ = nextSeq;
  package$domx.get_nodeExt_hyuuur$ = get_nodeExt;
  package$domx.rxDisplayed_ux9tev$ = rxDisplayed;
  package$domx.rxDisplayed_29v9re$ = rxDisplayed_0;
  package$domx.nav_nv65oz$ = nav;
  package$domx.styleTag_4udgdo$ = styleTag;
  package$domx.ul_t7sdcm$ = ul;
  package$domx.ol_waljkg$ = ol;
  package$domx.li_8ixz9m$ = li;
  package$domx.video_2l7o0u$ = video;
  package$domx.get_div_asww5s$ = get_div;
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
  var package$styles = _.styles || (_.styles = {});
  package$styles.addStyle_puj7f4$ = addStyle;
  package$styles.get_height0_kre7dp$ = get_height0;
  package$styles.get_lineHeightInherit_kre7dp$ = get_lineHeightInherit;
  package$styles.get_cursorPointer_kre7dp$ = get_cursorPointer;
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
  package$styles.get_fontSize100_kre7dp$ = get_fontSize100;
  package$styles.get_widthAuto_kre7dp$ = get_widthAuto;
  package$styles.get_zIndex1_kre7dp$ = get_zIndex1;
  package$styles.get_leftRightTopBottom0_kre7dp$ = get_leftRightTopBottom0;
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
  nextId = 0;
  domxNodesAttributeName = 'domxNodeExt';
  div = elem();
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
  fontSize100 = def('font-size: 100%;');
  widthAuto = def('width: auto;');
  zIndex1 = def('z-index: 1;');
  leftRightTopBottom0 = def(trimIndent('\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n    '));
  SvgNS = 'http://www.w3.org/2000/svg';
  Kotlin.defineModule('appsimake-domx', _);
  return _;
}(typeof this['appsimake-domx'] === 'undefined' ? {} : this['appsimake-domx'], kotlin, this['appsimake-commonshr'], this['appsimake-common']);

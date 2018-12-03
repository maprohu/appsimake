if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'common'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'common'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'common'.");
}
var common = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var ensureNotNull = Kotlin.ensureNotNull;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var minus = Kotlin.kotlin.collections.minus_2ws7j4$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var span = $module$kotlinx_html_js.kotlinx.html.js.span_x24v7w$;
  var ol = $module$kotlinx_html_js.kotlinx.html.js.ol_qmgqht$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var button = $module$kotlinx_html_js.kotlinx.html.js.button_yqfwmz$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var a = $module$kotlinx_html_js.kotlinx.html.js.a_5i6vd$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var List = Kotlin.kotlin.collections.List;
  var AbstractMutableList = Kotlin.kotlin.collections.AbstractMutableList;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var throwUPAE = Kotlin.throwUPAE;
  var equals = Kotlin.equals;
  var style = $module$kotlinx_html_js.kotlinx.html.js.style_s80t09$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  Killables.prototype = Object.create(Listeners.prototype);
  Killables.prototype.constructor = Killables;
  ListenableMutableList.prototype = Object.create(AbstractMutableList.prototype);
  ListenableMutableList.prototype.constructor = ListenableMutableList;
  Schema.prototype = Object.create(Enum.prototype);
  Schema.prototype.constructor = Schema;
  RxCalc.prototype = Object.create(RxChild.prototype);
  RxCalc.prototype.constructor = RxCalc;
  RxVal.prototype = Object.create(RxParent.prototype);
  RxVal.prototype.constructor = RxVal;
  Var.prototype = Object.create(RxVal.prototype);
  Var.prototype.constructor = Var;
  RxIface$folded$ObjectLiteral.prototype = Object.create(Var.prototype);
  RxIface$folded$ObjectLiteral.prototype.constructor = RxIface$folded$ObjectLiteral;
  Rx.prototype = Object.create(RxVal.prototype);
  Rx.prototype.constructor = Rx;
  function Annotation() {
    return obj();
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function insertAt($receiver, position, element) {
    var length = $receiver.children.length;
    if (!(position <= length)) {
      var message = 'Requested position: ' + position + ' is more than length: ' + length;
      throw IllegalArgumentException_init(message.toString());
    }
    if (length === position) {
      $receiver.appendChild(element);
    }
     else {
      $receiver.insertBefore(element, $receiver.children.item(position));
    }
  }
  function removeAt($receiver, position) {
    return $receiver.removeChild(ensureNotNull($receiver.children.item(position)));
  }
  function replaceAt($receiver, position, element) {
    $receiver.replaceChild(ensureNotNull($receiver.children.item(position)), element);
  }
  function removeFromParent($receiver) {
    var tmp$;
    (tmp$ = $receiver.parentElement) != null ? tmp$.removeChild($receiver) : null;
  }
  function obj() {
    var tmp$;
    return (tmp$ = {}) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  }
  function obj_0(fn) {
    var $receiver = obj();
    fn($receiver);
    return $receiver;
  }
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function Listeners() {
    this.listeners = emptyList();
  }
  function Listeners$add$lambda(this$Listeners, closure$listener) {
    return function () {
      this$Listeners.listeners = minus(this$Listeners.listeners, closure$listener);
      return Unit;
    };
  }
  Listeners.prototype.add_o14v8n$ = function (listener) {
    this.listeners = plus(this.listeners, listener);
    return Listeners$add$lambda(this, listener);
  };
  Listeners.prototype.fire = function () {
    var tmp$;
    tmp$ = this.listeners.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element();
    }
  };
  Listeners.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Listeners',
    interfaces: []
  };
  function Killables() {
    Listeners.call(this);
    this.killed_0 = false;
  }
  Killables.prototype.kill = function () {
    this.fire();
  };
  Killables.prototype.fire = function () {
    Listeners.prototype.fire.call(this);
    this.listeners = emptyList();
    this.killed_0 = true;
  };
  function Killables$add$lambda() {
    return Unit;
  }
  Killables.prototype.add_o14v8n$ = function (listener) {
    if (this.killed_0) {
      listener();
      return Killables$add$lambda;
    }
     else {
      return Listeners.prototype.add_o14v8n$.call(this, listener);
    }
  };
  Killables.prototype.plusAssign_o14v8n$ = function (listener) {
    this.add_o14v8n$(listener);
  };
  Killables.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Killables',
    interfaces: [Killable, Listeners]
  };
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
  Panel.prototype.wrapper_0 = function () {
    return div(get_create(document), 'w-100 h-100');
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
  function topbar$lambda($receiver) {
    return Unit;
  }
  function topbar$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function topbar($receiver, block) {
    if (block === void 0)
      block = topbar$lambda;
    div($receiver, 'border-bottom d-flex flex-row bg-light align-items-center pr-1', topbar$lambda_0(block));
  }
  function insert($receiver, node) {
    var $receiver_0 = span($receiver);
    ensureNotNull($receiver_0.parentElement).appendChild(node);
    removeFromParent($receiver_0);
  }
  function breadcrumb$lambda($receiver) {
    return Unit;
  }
  function breadcrumb$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function breadcrumb($receiver, block) {
    if (block === void 0)
      block = breadcrumb$lambda;
    var tmp$;
    return Kotlin.isType(tmp$ = ol($receiver, 'breadcrumb mb-0 flex-grow-1 bg-transparent', breadcrumb$lambda_0(block)), HTMLOListElement) ? tmp$ : throwCCE();
  }
  function dropdown$lambda($receiver) {
    return Unit;
  }
  function dropdown$lambda$lambda($receiver) {
    var $receiver_0 = $receiver.attributes;
    var key = 'data-toggle';
    var value = 'dropdown';
    $receiver_0.put_xwzc9p$(key, value);
    return Unit;
  }
  function dropdown$lambda$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function dropdown$lambda_0(this$dropdown, closure$block) {
    return function ($receiver) {
      button(this$dropdown, void 0, void 0, void 0, ButtonType.button, 'btn btn-light dropdown-toggle', dropdown$lambda$lambda);
      div(this$dropdown, 'dropdown-menu dropdown-menu-right', dropdown$lambda$lambda_0(closure$block));
      return Unit;
    };
  }
  function dropdown($receiver, block) {
    if (block === void 0)
      block = dropdown$lambda;
    return div($receiver, 'dropdown', dropdown$lambda_0($receiver, block));
  }
  function menuitem$lambda(closure$label, closure$click) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$label);
      set_onClickFunction($receiver, closure$click);
      return Unit;
    };
  }
  function menuitem($receiver, label, click) {
    return a($receiver, '#', void 0, 'dropdown-item', menuitem$lambda(label, click));
  }
  function attachEnabler$lambda(this$attachEnabler) {
    return function (en) {
      if (en) {
        removeClass(this$attachEnabler, ['disabled']);
        this$attachEnabler.style.cursor = 'pointer';
      }
       else {
        addClass(this$attachEnabler, ['disabled']);
        this$attachEnabler.style.cursor = 'default';
      }
      return Unit;
    };
  }
  function attachEnabler($receiver, enabled) {
    return enabled.forEach_qlkmfe$(attachEnabler$lambda($receiver));
  }
  function linkedIterable$ObjectLiteral(closure$next, closure$first) {
    this.closure$next = closure$next;
    this.closure$first = closure$first;
  }
  function linkedIterable$ObjectLiteral$iterator$ObjectLiteral(closure$next, closure$first) {
    this.closure$next = closure$next;
    this.current = closure$first;
  }
  linkedIterable$ObjectLiteral$iterator$ObjectLiteral.prototype.next = function () {
    var tmp = this.current;
    if (tmp == null) {
      throw NoSuchElementException_init();
    }
     else {
      this.current = this.closure$next(tmp);
      return tmp;
    }
  };
  linkedIterable$ObjectLiteral$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.current != null;
  };
  linkedIterable$ObjectLiteral$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  linkedIterable$ObjectLiteral.prototype.iterator = function () {
    return new linkedIterable$ObjectLiteral$iterator$ObjectLiteral(this.closure$next, this.closure$first);
  };
  linkedIterable$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterable]
  };
  function linkedIterable(first, next) {
    return new linkedIterable$ObjectLiteral(next, first);
  }
  function ListenableList() {
  }
  function ListenableList$Listener() {
    ListenableList$Listener$Companion_getInstance();
  }
  function ListenableList$Listener$Companion() {
    ListenableList$Listener$Companion_instance = this;
  }
  function ListenableList$Listener$Companion$of$ObjectLiteral(closure$added, closure$removed, closure$moved) {
    this.closure$added = closure$added;
    this.closure$removed = closure$removed;
    this.closure$moved = closure$moved;
  }
  ListenableList$Listener$Companion$of$ObjectLiteral.prototype.added_wxm5ur$ = function (index, element) {
    this.closure$added(index, element);
  };
  ListenableList$Listener$Companion$of$ObjectLiteral.prototype.removed_za3lpa$ = function (index) {
    this.closure$removed(index);
  };
  ListenableList$Listener$Companion$of$ObjectLiteral.prototype.moved_vux9f0$ = function (from, to) {
    this.closure$moved(from, to);
  };
  ListenableList$Listener$Companion$of$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ListenableList$Listener]
  };
  ListenableList$Listener$Companion.prototype.of_iwvohr$ = function (added, removed, moved) {
    return new ListenableList$Listener$Companion$of$ObjectLiteral(added, removed, moved);
  };
  ListenableList$Listener$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ListenableList$Listener$Companion_instance = null;
  function ListenableList$Listener$Companion_getInstance() {
    if (ListenableList$Listener$Companion_instance === null) {
      new ListenableList$Listener$Companion();
    }
    return ListenableList$Listener$Companion_instance;
  }
  ListenableList$Listener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Listener',
    interfaces: []
  };
  ListenableList.prototype.addListener_6r1g8a$ = function (added, removed, moved) {
    return this.addListener_ednqrc$(ListenableList$Listener$Companion_getInstance().of_iwvohr$(added, removed, moved));
  };
  ListenableList.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ListenableList',
    interfaces: [List]
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function ListenableMutableList() {
    AbstractMutableList.call(this);
    this.delegate_0 = ArrayList_init();
    this.listeners_0 = emptyList();
  }
  function ListenableMutableList$addListener$lambda(this$ListenableMutableList, closure$listener) {
    return function () {
      this$ListenableMutableList.listeners_0 = minus(this$ListenableMutableList.listeners_0, closure$listener);
      return Unit;
    };
  }
  ListenableMutableList.prototype.addListener_ednqrc$ = function (listener) {
    this.listeners_0 = plus(this.listeners_0, listener);
    return ListenableMutableList$addListener$lambda(this, listener);
  };
  Object.defineProperty(ListenableMutableList.prototype, 'size', {
    get: function () {
      return this.delegate_0.size;
    }
  });
  ListenableMutableList.prototype.add_wxm5ur$ = function (index, element) {
    this.delegate_0.add_wxm5ur$(index, element);
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element_0 = tmp$.next();
      element_0.added_wxm5ur$(index, element);
    }
  };
  ListenableMutableList.prototype.removeAt_za3lpa$ = function (index) {
    var v = this.delegate_0.removeAt_za3lpa$(index);
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.removed_za3lpa$(index);
    }
    return v;
  };
  ListenableMutableList.prototype.set_wxm5ur$ = function (index, element) {
    var v = this.delegate_0.set_wxm5ur$(index, element);
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element_0 = tmp$.next();
      element_0.removed_za3lpa$(index);
      element_0.added_wxm5ur$(index, element);
    }
    return v;
  };
  ListenableMutableList.prototype.get_za3lpa$ = function (index) {
    return this.delegate_0.get_za3lpa$(index);
  };
  ListenableMutableList.prototype.move_vux9f0$ = function (from, to) {
    var v = this.delegate_0.removeAt_za3lpa$(from);
    this.delegate_0.add_wxm5ur$(to, v);
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.moved_vux9f0$(from, to);
    }
  };
  ListenableMutableList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListenableMutableList',
    interfaces: [ListenableList, AbstractMutableList]
  };
  function fa($receiver, name) {
    return span($receiver, 'fas fa-' + name + ' ' + get_lineHeightInherit());
  }
  var objectKeys = defineInlineFunction('common.common.objectKeys_za3rmp$', function (json) {
    return Object.keys(json);
  });
  function res(path) {
    var tmp$, tmp$_0, tmp$_1;
    var resmaps = window.resmaps;
    while (!(resmaps.modules.length === 0)) {
      var module_0 = resmaps.modules.shift();
      tmp$ = Object.keys(module_0);
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var k = tmp$[tmp$_0];
        resmaps.map[k] = module_0[k];
      }
    }
    return typeof (tmp$_1 = resmaps.map[path]) === 'string' ? tmp$_1 : throwCCE();
  }
  function JsYamlOptions() {
    return obj();
  }
  function Schema(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Schema_initFields() {
    Schema_initFields = function () {
    };
    Schema$FAILSAFE_SCHEMA_instance = new Schema('FAILSAFE_SCHEMA', 0);
    Schema$JSON_SCHEMA_instance = new Schema('JSON_SCHEMA', 1);
    Schema$CORE_SCHEMA_instance = new Schema('CORE_SCHEMA', 2);
    Schema$DEFAULT_SAFE_SCHEMA_instance = new Schema('DEFAULT_SAFE_SCHEMA', 3);
    Schema$DEFAULT_FULL_SCHEMA_instance = new Schema('DEFAULT_FULL_SCHEMA', 4);
  }
  var Schema$FAILSAFE_SCHEMA_instance;
  function Schema$FAILSAFE_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$FAILSAFE_SCHEMA_instance;
  }
  var Schema$JSON_SCHEMA_instance;
  function Schema$JSON_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$JSON_SCHEMA_instance;
  }
  var Schema$CORE_SCHEMA_instance;
  function Schema$CORE_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$CORE_SCHEMA_instance;
  }
  var Schema$DEFAULT_SAFE_SCHEMA_instance;
  function Schema$DEFAULT_SAFE_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$DEFAULT_SAFE_SCHEMA_instance;
  }
  var Schema$DEFAULT_FULL_SCHEMA_instance;
  function Schema$DEFAULT_FULL_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$DEFAULT_FULL_SCHEMA_instance;
  }
  Schema.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Schema',
    interfaces: [Enum]
  };
  function Schema$values() {
    return [Schema$FAILSAFE_SCHEMA_getInstance(), Schema$JSON_SCHEMA_getInstance(), Schema$CORE_SCHEMA_getInstance(), Schema$DEFAULT_SAFE_SCHEMA_getInstance(), Schema$DEFAULT_FULL_SCHEMA_getInstance()];
  }
  Schema.values = Schema$values;
  function Schema$valueOf(name) {
    switch (name) {
      case 'FAILSAFE_SCHEMA':
        return Schema$FAILSAFE_SCHEMA_getInstance();
      case 'JSON_SCHEMA':
        return Schema$JSON_SCHEMA_getInstance();
      case 'CORE_SCHEMA':
        return Schema$CORE_SCHEMA_getInstance();
      case 'DEFAULT_SAFE_SCHEMA':
        return Schema$DEFAULT_SAFE_SCHEMA_getInstance();
      case 'DEFAULT_FULL_SCHEMA':
        return Schema$DEFAULT_FULL_SCHEMA_getInstance();
      default:throwISE('No enum constant jsyaml.Schema.' + name);
    }
  }
  Schema.valueOf_61zpoe$ = Schema$valueOf;
  function get_schemaEnum($receiver) {
    var tmp$;
    return (tmp$ = $receiver.schema) != null ? Schema$valueOf(tmp$) : null;
  }
  function set_schemaEnum($receiver, v) {
    $receiver.schema = v != null ? v.toString() : null;
  }
  var currentChild;
  var affected;
  function RxChild() {
    this.parents = emptyList();
  }
  RxChild.prototype.disconnectAll = function () {
    var tmp$;
    tmp$ = this.parents.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.children = minus(element.children, this);
    }
    this.parents = emptyList();
  };
  RxChild.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxChild',
    interfaces: []
  };
  function RxCalc(fn) {
    RxChild.call(this);
    this.fn_0 = fn;
    this.rx_kwbhe1$_0 = this.rx_kwbhe1$_0;
  }
  Object.defineProperty(RxCalc.prototype, 'rx', {
    get: function () {
      if (this.rx_kwbhe1$_0 == null)
        return throwUPAE('rx');
      return this.rx_kwbhe1$_0;
    },
    set: function (rx) {
      this.rx_kwbhe1$_0 = rx;
    }
  });
  RxCalc.prototype.recalc = function () {
    this.rx.setCurrentValue_1c3m6u$(this.recalcValue());
  };
  RxCalc.prototype.recalcValue = function () {
    this.disconnectAll();
    var savedCurrent = currentChild;
    currentChild = this;
    try {
      return this.fn_0();
    }
    finally {
      currentChild = savedCurrent;
    }
  };
  RxCalc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxCalc',
    interfaces: [RxChild]
  };
  function RxParent() {
    this.children = emptyList();
  }
  RxParent.prototype.recalcChildren = function () {
    var tmp$;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.recalc();
    }
  };
  RxParent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxParent',
    interfaces: []
  };
  function connect(parent, child) {
    if (!parent.children.contains_11rb$(child)) {
      parent.children = plus(parent.children, child);
      child.parents = plus(child.parents, parent);
    }
  }
  function Killable() {
  }
  Killable.prototype.addTo_g9f6u0$ = function (killables) {
    add(killables, this);
  };
  Killable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Killable',
    interfaces: []
  };
  function add$lambda(closure$killable) {
    return function () {
      closure$killable.kill();
      return Unit;
    };
  }
  function add($receiver, killable) {
    $receiver.add_o14v8n$(add$lambda(killable));
  }
  function Obs(parent, fn) {
    this.parent_0 = parent;
    this.fn_0 = fn;
  }
  Obs.prototype.kill = function () {
    this.parent_0.observers_8be2vx$.remove_11rb$(this);
  };
  Obs.prototype.fire = function () {
    this.fn_0(this.parent_0.now);
  };
  Obs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Obs',
    interfaces: [Killable]
  };
  function RxIface() {
  }
  RxIface.prototype.forEach_qlkmfe$ = function (fn) {
    fn(this.now);
    return this.forEachLater_qlkmfe$(fn);
  };
  function RxIface$fold$lambda(closure$fn, closure$z) {
    return function (it) {
      closure$z.v = closure$fn(closure$z.v, it);
      return Unit;
    };
  }
  RxIface.prototype.fold_b8xf17$ = function (z0, fn) {
    var z = {v: z0};
    return this.forEach_qlkmfe$(RxIface$fold$lambda(fn, z));
  };
  function RxIface$folded$ObjectLiteral(this$RxIface, closure$fn, v_0) {
    Var.call(this, v_0);
    this.killable = this$RxIface.forEach_qlkmfe$(RxIface$folded$ObjectLiteral$killable$lambda(closure$fn, this));
  }
  RxIface$folded$ObjectLiteral.prototype.kill = function () {
    this.killable.kill();
  };
  function RxIface$folded$ObjectLiteral$killable$lambda(closure$fn, this$) {
    return function (it) {
      this$.now = closure$fn(this$.now, it);
      return Unit;
    };
  }
  RxIface$folded$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [RxIfaceKillable, Var]
  };
  RxIface.prototype.folded_b8xf17$ = function (z0, fn) {
    return new RxIface$folded$ObjectLiteral(this, fn, z0);
  };
  function RxIface$foldLater$lambda(closure$fn, closure$z) {
    return function (it) {
      closure$z.v = closure$fn(closure$z.v, it);
      return Unit;
    };
  }
  RxIface.prototype.foldLater_b8xf17$ = function (z0, fn) {
    var z = {v: z0};
    return this.forEachLater_qlkmfe$(RxIface$foldLater$lambda(fn, z));
  };
  function RxIface$onChange$lambda(closure$fn) {
    return function (old, new_0) {
      closure$fn(old, new_0);
      return new_0;
    };
  }
  RxIface.prototype.onChange_nrmh93$ = function (fn) {
    return this.foldLater_b8xf17$(this.now, RxIface$onChange$lambda(fn));
  };
  function RxIface$onOff$lambda(closure$off, closure$on) {
    return function (old, new_0) {
      closure$off(old);
      closure$on(new_0);
      return Unit;
    };
  }
  RxIface.prototype.onOff_uc1utc$ = function (on, off) {
    on(this.now);
    return this.onChange_nrmh93$(RxIface$onOff$lambda(off, on));
  };
  function RxIface$off$lambda(closure$offFn) {
    return function (old, f) {
      closure$offFn(old);
      return Unit;
    };
  }
  RxIface.prototype.off_qlkmfe$ = function (offFn) {
    return this.onChange_nrmh93$(RxIface$off$lambda(offFn));
  };
  RxIface.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RxIface',
    interfaces: []
  };
  function RxVal(currentValue) {
    RxParent.call(this);
    this.currentValue = currentValue;
    this.oldValue_ofkn4b$_0 = this.currentValue;
    this.observers_8be2vx$ = ArrayList_init();
  }
  Object.defineProperty(RxVal.prototype, 'now', {
    get: function () {
      return this.currentValue;
    }
  });
  RxVal.prototype.invoke = function () {
    connect(this, ensureNotNull(currentChild));
    return this.currentValue;
  };
  RxVal.prototype.setCurrentValue_1c3m6u$ = function (v) {
    if (!equals(this.oldValue_ofkn4b$_0, v)) {
      affected.add_11rb$(this);
    }
     else {
      affected.remove_11rb$(this);
    }
    if (!equals(this.currentValue, v)) {
      this.currentValue = v;
      this.recalcChildren();
    }
  };
  RxVal.prototype.clearDirty_8be2vx$ = function () {
    this.oldValue_ofkn4b$_0 = this.currentValue;
  };
  RxVal.prototype.forEachLater_qlkmfe$ = function (fn) {
    var obs = new Obs(this, fn);
    this.observers_8be2vx$.add_11rb$(obs);
    return obs;
  };
  RxVal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxVal',
    interfaces: [RxIface, RxParent]
  };
  function killOld$lambda(it) {
    it.kill();
    return Unit;
  }
  function killOld($receiver) {
    return $receiver.off_qlkmfe$(killOld$lambda);
  }
  function RxIfaceKillable() {
  }
  RxIfaceKillable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RxIfaceKillable',
    interfaces: [Killable, RxIface]
  };
  function Rx(currentValue, calc) {
    RxVal.call(this, currentValue);
    this.calc_0 = calc;
    this.calc_0.rx = this;
  }
  Rx.prototype.kill = function () {
    this.calc_0.disconnectAll();
  };
  Rx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rx',
    interfaces: [RxIfaceKillable, RxVal]
  };
  function Rx_init(calc, $this) {
    $this = $this || Object.create(Rx.prototype);
    Rx.call($this, calc.recalcValue(), calc);
    return $this;
  }
  function Rx_init_0(fn, $this) {
    $this = $this || Object.create(Rx.prototype);
    Rx_init(new RxCalc(fn), $this);
    return $this;
  }
  function Var(v_0) {
    RxVal.call(this, v_0);
  }
  Var.prototype.setValue_11rb$ = function (value) {
    this.setCurrentValue_1c3m6u$(value);
    var observers = ArrayList_init();
    var tmp$;
    tmp$ = affected.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = element.observers_8be2vx$.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (!observers.contains_11rb$(element_0)) {
          observers.add_11rb$(element_0);
        }
      }
      element.clearDirty_8be2vx$();
    }
    affected.clear();
    var tmp$_1;
    tmp$_1 = observers.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      element_1.fire();
    }
  };
  Object.defineProperty(Var.prototype, 'now', {
    get: function () {
      return Kotlin.callGetter(this, RxVal.prototype, 'now');
    },
    set: function (value) {
      this.setValue_11rb$(value);
    }
  });
  Var.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Var',
    interfaces: [RxVal]
  };
  function rxClass$lambda(this$rxClass) {
    return function (it) {
      addClass(this$rxClass, [it]);
      return Unit;
    };
  }
  function rxClass$lambda_0(this$rxClass) {
    return function (it) {
      removeClass(this$rxClass, [it]);
      return Unit;
    };
  }
  function rxClass($receiver, style) {
    return style.onOff_uc1utc$(rxClass$lambda($receiver), rxClass$lambda_0($receiver));
  }
  function rxClassOpt$lambda(this$rxClassOpt) {
    return function (it) {
      if (it != null) {
        addClass(this$rxClassOpt, [it]);
      }
      return Unit;
    };
  }
  function rxClassOpt$lambda_0(this$rxClassOpt) {
    return function (it) {
      if (it != null) {
        removeClass(this$rxClassOpt, [it]);
      }
      return Unit;
    };
  }
  function rxClassOpt($receiver, style) {
    return style.onOff_uc1utc$(rxClassOpt$lambda($receiver), rxClassOpt$lambda_0($receiver));
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function rxClasses$lambda(this$rxClasses) {
    return function (it) {
      addClass(this$rxClasses, copyToArray(it).slice());
      return Unit;
    };
  }
  function rxClasses$lambda_0(this$rxClasses) {
    return function (it) {
      removeClass(this$rxClasses, copyToArray(it).slice());
      return Unit;
    };
  }
  function rxClasses($receiver, style) {
    return style.onOff_uc1utc$(rxClasses$lambda($receiver), rxClasses$lambda_0($receiver));
  }
  function styleElement$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function styleElement$lambda$lambda($receiver) {
    style($receiver, void 0, styleElement$lambda$lambda$lambda);
    return Unit;
  }
  function styleElement$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = append(ensureNotNull(document.head), styleElement$lambda$lambda).get_za3lpa$(0), HTMLStyleElement) ? tmp$ : throwCCE();
  }
  var styleElement;
  function get_styleElement() {
    return styleElement.value;
  }
  function add_0(name, rules) {
    appendText(get_styleElement(), '.' + name + ' {' + rules + '}' + '\n');
    return name;
  }
  var defaultAnimRules;
  function anim(name, keyframes, rules) {
    if (rules === void 0)
      rules = defaultAnimRules;
    appendText(get_styleElement(), '@keyframes ' + name + ' {' + keyframes + '}' + '\n');
    return add_0(name, 'animation-name: ' + name + '; ' + rules);
  }
  function lineHeightInherit$lambda() {
    return add_0('line-height-inherit', 'line-height: inherit;');
  }
  var lineHeightInherit;
  function get_lineHeightInherit() {
    return lineHeightInherit.value;
  }
  function cursorPointer$lambda() {
    return add_0('cursor-pointer', 'cursor: pointer;');
  }
  var cursorPointer;
  function get_cursorPointer() {
    return cursorPointer.value;
  }
  function scrollVertical$lambda() {
    return add_0('scroll-vertical', 'overflow-y: auto;');
  }
  var scrollVertical;
  function get_scrollVertical() {
    return scrollVertical.value;
  }
  function pointerEventsNone$lambda() {
    return add_0('pointer-events-none', 'pointer-events: none;');
  }
  var pointerEventsNone;
  function get_pointerEventsNone() {
    return pointerEventsNone.value;
  }
  function transformRight$lambda() {
    return add_0('transform-right', 'transform: translate(100%);');
  }
  var transformRight;
  function get_transformRight() {
    return transformRight.value;
  }
  function transformLeft$lambda() {
    return add_0('transform-left', 'transform: translate(-100%);');
  }
  var transformLeft;
  function get_transformLeft() {
    return transformLeft.value;
  }
  function transformCenter$lambda() {
    return add_0('transform-center', 'transform: none;');
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
  var package$ace = _.ace || (_.ace = {});
  package$ace.Annotation = Annotation;
  var package$common = _.common || (_.common = {});
  package$common.insertAt_tevjyx$ = insertAt;
  package$common.removeAt_poj3bi$ = removeAt;
  package$common.replaceAt_l17iyt$ = replaceAt;
  package$common.removeFromParent_asww5s$ = removeFromParent;
  package$common.obj_287e2$ = obj;
  package$common.obj_7qq44f$ = obj_0;
  package$common.Listeners = Listeners;
  package$common.Killables = Killables;
  Panel.Content = Panel$Content;
  package$common.Panel = Panel;
  package$common.topbar_xt65r4$ = topbar;
  package$common.insert_85c47j$ = insert;
  package$common.breadcrumb_xjd1qy$ = breadcrumb;
  package$common.dropdown_xt65r4$ = dropdown;
  package$common.menuitem_16yqb9$ = menuitem;
  package$common.attachEnabler_2mgs05$ = attachEnabler;
  package$common.linkedIterable_h43q6c$ = linkedIterable;
  Object.defineProperty(ListenableList$Listener, 'Companion', {
    get: ListenableList$Listener$Companion_getInstance
  });
  ListenableList.Listener = ListenableList$Listener;
  package$common.ListenableList = ListenableList;
  package$common.ListenableMutableList = ListenableMutableList;
  package$common.fa_bq9830$ = fa;
  package$common.objectKeys_za3rmp$ = objectKeys;
  $$importsForInline$$.common = _;
  package$common.res_61zpoe$ = res;
  var package$jsyaml = _.jsyaml || (_.jsyaml = {});
  package$jsyaml.JsYamlOptions = JsYamlOptions;
  Object.defineProperty(Schema, 'FAILSAFE_SCHEMA', {
    get: Schema$FAILSAFE_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'JSON_SCHEMA', {
    get: Schema$JSON_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'CORE_SCHEMA', {
    get: Schema$CORE_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'DEFAULT_SAFE_SCHEMA', {
    get: Schema$DEFAULT_SAFE_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'DEFAULT_FULL_SCHEMA', {
    get: Schema$DEFAULT_FULL_SCHEMA_getInstance
  });
  package$jsyaml.Schema = Schema;
  package$jsyaml.get_schemaEnum_lf44v5$ = get_schemaEnum;
  package$jsyaml.set_schemaEnum_isj6f3$ = set_schemaEnum;
  var package$rx = _.rx || (_.rx = {});
  package$rx.RxChild = RxChild;
  package$rx.RxCalc = RxCalc;
  package$rx.RxParent = RxParent;
  package$rx.connect_xonuym$ = connect;
  package$rx.Killable = Killable;
  package$rx.add_hbf74d$ = add;
  package$rx.Obs = Obs;
  package$rx.RxIface = RxIface;
  package$rx.RxVal = RxVal;
  package$rx.killOld_5kwh6e$ = killOld;
  package$rx.RxIfaceKillable = RxIfaceKillable;
  package$rx.Rx_init_ky6tb9$ = Rx_init;
  package$rx.Rx_init_klfg04$ = Rx_init_0;
  package$rx.Rx = Rx;
  package$rx.Var = Var;
  package$rx.rxClass_jgfmsn$ = rxClass;
  package$rx.rxClassOpt_ywk6sc$ = rxClassOpt;
  package$rx.rxClasses_5wy11i$ = rxClasses;
  var package$styles = _.styles || (_.styles = {});
  Object.defineProperty(package$styles, 'styleElement', {
    get: get_styleElement
  });
  package$styles.add_puj7f4$ = add_0;
  package$styles.anim_6hosri$ = anim;
  Object.defineProperty(package$styles, 'lineHeightInherit', {
    get: get_lineHeightInherit
  });
  Object.defineProperty(package$styles, 'cursorPointer', {
    get: get_cursorPointer
  });
  Object.defineProperty(package$styles, 'scrollVertical', {
    get: get_scrollVertical
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
  Killables.prototype.addTo_g9f6u0$ = Killable.prototype.addTo_g9f6u0$;
  ListenableMutableList.prototype.addListener_6r1g8a$ = ListenableList.prototype.addListener_6r1g8a$;
  Obs.prototype.addTo_g9f6u0$ = Killable.prototype.addTo_g9f6u0$;
  RxVal.prototype.forEach_qlkmfe$ = RxIface.prototype.forEach_qlkmfe$;
  RxVal.prototype.fold_b8xf17$ = RxIface.prototype.fold_b8xf17$;
  RxVal.prototype.folded_b8xf17$ = RxIface.prototype.folded_b8xf17$;
  RxVal.prototype.foldLater_b8xf17$ = RxIface.prototype.foldLater_b8xf17$;
  RxVal.prototype.onChange_nrmh93$ = RxIface.prototype.onChange_nrmh93$;
  RxVal.prototype.onOff_uc1utc$ = RxIface.prototype.onOff_uc1utc$;
  RxVal.prototype.off_qlkmfe$ = RxIface.prototype.off_qlkmfe$;
  RxIfaceKillable.prototype.forEach_qlkmfe$ = RxIface.prototype.forEach_qlkmfe$;
  RxIfaceKillable.prototype.fold_b8xf17$ = RxIface.prototype.fold_b8xf17$;
  RxIfaceKillable.prototype.folded_b8xf17$ = RxIface.prototype.folded_b8xf17$;
  RxIfaceKillable.prototype.foldLater_b8xf17$ = RxIface.prototype.foldLater_b8xf17$;
  RxIfaceKillable.prototype.onChange_nrmh93$ = RxIface.prototype.onChange_nrmh93$;
  RxIfaceKillable.prototype.onOff_uc1utc$ = RxIface.prototype.onOff_uc1utc$;
  RxIfaceKillable.prototype.off_qlkmfe$ = RxIface.prototype.off_qlkmfe$;
  RxIfaceKillable.prototype.addTo_g9f6u0$ = Killable.prototype.addTo_g9f6u0$;
  RxIface$folded$ObjectLiteral.prototype.addTo_g9f6u0$ = RxIfaceKillable.prototype.addTo_g9f6u0$;
  Rx.prototype.addTo_g9f6u0$ = RxIfaceKillable.prototype.addTo_g9f6u0$;
  currentChild = null;
  affected = ArrayList_init();
  styleElement = lazy(styleElement$lambda);
  defaultAnimRules = trimIndent('\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n    animation-timing-function: ease;\n');
  lineHeightInherit = lazy(lineHeightInherit$lambda);
  cursorPointer = lazy(cursorPointer$lambda);
  scrollVertical = lazy(scrollVertical$lambda);
  pointerEventsNone = lazy(pointerEventsNone$lambda);
  transformRight = lazy(transformRight$lambda);
  transformLeft = lazy(transformLeft$lambda);
  transformCenter = lazy(transformCenter$lambda);
  animLeft = lazy(animLeft$lambda);
  animRight = lazy(animRight$lambda);
  animCenter = lazy(animCenter$lambda);
  Kotlin.defineModule('common', _);
  return _;
}(typeof common === 'undefined' ? {} : common, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=common.js.map

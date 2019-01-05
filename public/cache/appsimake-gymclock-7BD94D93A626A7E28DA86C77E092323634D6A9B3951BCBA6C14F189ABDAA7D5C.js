if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-gymclock'.");
}
this['appsimake-gymclock'] = function (_, Kotlin, $module$appsimake_common, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_commonui, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Killables = $module$appsimake_common.killable.Killables;
  var Unit = Kotlin.kotlin.Unit;
  var clickEvent = $module$appsimake_domx.domx.clickEvent_bvfv80$;
  var margin1 = $module$appsimake_bootstrap.bootstrap.margin1_ejp6nk$;
  var flexRow = $module$appsimake_bootstrap.bootstrap.flexRow_ejp6nk$;
  var flexAlignItemsCenter = $module$appsimake_bootstrap.bootstrap.flexAlignItemsCenter_ejp6nk$;
  var btnSecondary = $module$appsimake_bootstrap.bootstrap.btnSecondary_ejp6nk$;
  var marginRight2 = $module$appsimake_bootstrap.bootstrap.marginRight2_ejp6nk$;
  var pointerEventsNone = $module$appsimake_domx.domx.pointerEventsNone_ejp6nk$;
  var checkbox = $module$appsimake_domx.domx.checkbox_xh1a31$;
  var span = $module$appsimake_domx.domx.span_c7xqcp$;
  var btnButton = $module$appsimake_bootstrap.bootstrap.btnButton_9ztatb$;
  var screenLayout = $module$appsimake_commonui.commonui.screenLayout_g4155o$;
  var get_audio = $module$appsimake_domx.domx.get_audio_asww5s$;
  var get_source = $module$appsimake_domx.domx.get_source_asww5s$;
  var res = $module$appsimake_common.common.res_61zpoe$;
  var invoke = $module$appsimake_bootstrap.bootstrap.invoke_inodcj$;
  var positionRelative = $module$appsimake_bootstrap.bootstrap.positionRelative_ejp6nk$;
  var Var = $module$appsimake_common.rx.Var;
  var bootstrap = $module$appsimake_bootstrap.bootstrap;
  var positionAbsolute = $module$appsimake_bootstrap.bootstrap.positionAbsolute_ejp6nk$;
  var rxClass = $module$appsimake_common.rx.rxClass_jgfmsn$;
  var div = $module$appsimake_domx.domx.div_gnmiz0$;
  var fullSize = $module$appsimake_bootstrap.bootstrap.fullSize_ejp6nk$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_ejp6nk$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var KillableSeq = $module$appsimake_common.killable.KillableSeq;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_9ce4rd$;
  var flatten = Kotlin.kotlin.sequences.flatten_41nmvn$;
  var plus_0 = Kotlin.kotlin.sequences.plus_v0iwhp$;
  var numberToInt = Kotlin.numberToInt;
  var replay = $module$appsimake_domx.domx.replay_cmu6zj$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var flexGrow1 = $module$appsimake_bootstrap.bootstrap.flexGrow1_ejp6nk$;
  var get_classes = $module$appsimake_domx.domx.get_classes_ejp6nk$;
  var styles = $module$appsimake_domx.styles;
  var flexColumn = $module$appsimake_bootstrap.bootstrap.flexColumn_ejp6nk$;
  var padding2 = $module$appsimake_bootstrap.bootstrap.padding2_ejp6nk$;
  var Listeners = $module$appsimake_common.common.Listeners;
  var formGroup = $module$appsimake_bootstrap.bootstrap.formGroup_ejp6nk$;
  var label = $module$appsimake_domx.domx.label_faa409$;
  var formControl = $module$appsimake_bootstrap.bootstrap.formControl_ejp6nk$;
  var get_ref = $module$appsimake_domx.domx.get_ref_ejp6nk$;
  var inputEvent = $module$appsimake_domx.domx.inputEvent_oyfk7p$;
  var changeEvent = $module$appsimake_domx.domx.changeEvent_e6qnhl$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Throwable = Error;
  var Rx_init = $module$appsimake_common.rx.Rx_init_klfg04$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var rxClassOpt = $module$appsimake_common.rx.rxClassOpt_ywk6sc$;
  var input = $module$appsimake_domx.domx.input_xh1a31$;
  var a = $module$appsimake_domx.domx.a_6t02fy$;
  var form = $module$appsimake_domx.domx.form_8s32c1$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_ejp6nk$;
  var btnPrimary = $module$appsimake_bootstrap.bootstrap.btnPrimary_ejp6nk$;
  var rxEnabled = $module$appsimake_domx.domx.rxEnabled_v5m6ih$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var AppCtx = $module$appsimake_commonui.commonui.AppCtx;
  function Clock() {
    Clock_instance = this;
    this.prepareAudio = this.createAudio_0('exquisite');
    this.workAudio = this.createAudio_0('definite');
    this.restAudio = this.createAudio_0('not-bad');
  }
  function Clock$Phase(length, style, audio) {
    this.length = length;
    this.style = style;
    this.audio = audio;
  }
  Clock$Phase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Phase',
    interfaces: []
  };
  function Clock$PhasePos(start, end, phase) {
    this.start = start;
    this.end = end;
    this.phase = phase;
  }
  Clock$PhasePos.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PhasePos',
    interfaces: []
  };
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function Clock$PhaseList(phases, length) {
    if (phases === void 0) {
      phases = emptyList();
    }
    if (length === void 0)
      length = 0;
    this.phases = phases;
    this.length = length;
  }
  Clock$PhaseList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PhaseList',
    interfaces: []
  };
  Clock$PhaseList.prototype.component1 = function () {
    return this.phases;
  };
  Clock$PhaseList.prototype.component2 = function () {
    return this.length;
  };
  Clock$PhaseList.prototype.copy_1nuhkf$ = function (phases, length) {
    return new Clock$PhaseList(phases === void 0 ? this.phases : phases, length === void 0 ? this.length : length);
  };
  Clock$PhaseList.prototype.toString = function () {
    return 'PhaseList(phases=' + Kotlin.toString(this.phases) + (', length=' + Kotlin.toString(this.length)) + ')';
  };
  Clock$PhaseList.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.phases) | 0;
    result = result * 31 + Kotlin.hashCode(this.length) | 0;
    return result;
  };
  Clock$PhaseList.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.phases, other.phases) && Kotlin.equals(this.length, other.length)))));
  };
  function Clock$StartState(start, first, phases) {
    this.start = start;
    this.first = first;
    this.phases = phases;
  }
  Clock$StartState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StartState',
    interfaces: []
  };
  Clock$StartState.prototype.component1 = function () {
    return this.start;
  };
  Clock$StartState.prototype.component2 = function () {
    return this.first;
  };
  Clock$StartState.prototype.component3 = function () {
    return this.phases;
  };
  Clock$StartState.prototype.copy_1fvqe5$ = function (start, first, phases) {
    return new Clock$StartState(start === void 0 ? this.start : start, first === void 0 ? this.first : first, phases === void 0 ? this.phases : phases);
  };
  Clock$StartState.prototype.toString = function () {
    return 'StartState(start=' + Kotlin.toString(this.start) + (', first=' + Kotlin.toString(this.first)) + (', phases=' + Kotlin.toString(this.phases)) + ')';
  };
  Clock$StartState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.first) | 0;
    result = result * 31 + Kotlin.hashCode(this.phases) | 0;
    return result;
  };
  Clock$StartState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.start, other.start) && Kotlin.equals(this.first, other.first) && Kotlin.equals(this.phases, other.phases)))));
  };
  function Clock$show$lambda$lambda$lambda$lambda$lambda(closure$killables) {
    return function (it) {
      closure$killables.kill();
      Form_getInstance().show();
      return Unit;
    };
  }
  function Clock$show$lambda$lambda$lambda$lambda(closure$killables) {
    return function ($receiver) {
      $receiver.innerText = 'Cancel';
      clickEvent($receiver, Clock$show$lambda$lambda$lambda$lambda$lambda(closure$killables));
      return Unit;
    };
  }
  function Clock$show$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.innerText = Main_getInstance().appCtx.title;
    return Unit;
  }
  function Clock$show$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$) {
    return function (it) {
      this$.checked = it;
      return Unit;
    };
  }
  function Clock$show$lambda$lambda$lambda$lambda$lambda$lambda(closure$killables) {
    return function ($receiver) {
      marginRight2($receiver);
      pointerEventsNone($receiver);
      closure$killables.plusAssign_wii6vi$(Model_getInstance().sounds.forEach_qlkmfe$(Clock$show$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver)));
      return Unit;
    };
  }
  function Clock$show$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.innerText = 'Sounds';
    return Unit;
  }
  function Clock$show$lambda$lambda$lambda$lambda$lambda$lambda_1(it) {
    Model_getInstance().sounds.now = !Model_getInstance().sounds.now;
    return Unit;
  }
  function Clock$show$lambda$lambda$lambda$lambda$lambda_0(closure$killables) {
    return function ($receiver) {
      margin1($receiver);
      flexRow($receiver);
      flexAlignItemsCenter($receiver);
      btnSecondary($receiver);
      checkbox($receiver, Clock$show$lambda$lambda$lambda$lambda$lambda$lambda(closure$killables));
      span($receiver, Clock$show$lambda$lambda$lambda$lambda$lambda$lambda_0);
      clickEvent($receiver, Clock$show$lambda$lambda$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function Clock$show$lambda$lambda$lambda$lambda_1(closure$killables) {
    return function ($receiver) {
      btnButton($receiver, Clock$show$lambda$lambda$lambda$lambda$lambda_0(closure$killables));
      return Unit;
    };
  }
  function Clock$show$lambda$lambda$lambda(closure$killables) {
    return function ($receiver) {
      $receiver.leftButton_3uqggf$(Clock$show$lambda$lambda$lambda$lambda(closure$killables));
      $receiver.middleTitle_ocyzvr$(Clock$show$lambda$lambda$lambda$lambda_0);
      $receiver.right_iw61es$(Clock$show$lambda$lambda$lambda$lambda_1(closure$killables));
      return Unit;
    };
  }
  function Clock$show$lambda$lambda$lambda_0(closure$killables, this$Clock) {
    return function ($receiver) {
      closure$killables.plusAssign_wii6vi$(this$Clock.timer_e0t6x9$($receiver));
      return Unit;
    };
  }
  function Clock$show$lambda$lambda(closure$killables, this$Clock) {
    return function ($receiver) {
      $receiver.top_vesf63$(Clock$show$lambda$lambda$lambda(closure$killables));
      $receiver.main_iw61es$(Clock$show$lambda$lambda$lambda_0(closure$killables, this$Clock));
      return Unit;
    };
  }
  function Clock$show$lambda(closure$killables, this$Clock) {
    return function ($receiver) {
      screenLayout($receiver, Clock$show$lambda$lambda(closure$killables, this$Clock));
      return Unit;
    };
  }
  Clock.prototype.show = function () {
    var killables = new Killables();
    killables.plusAssign_o14v8n$(Main_getInstance().appCtx.keepAwake());
    Main_getInstance().appCtx.root.newRoot_iw61es$(Clock$show$lambda(killables, this));
  };
  function Clock$createAudio$lambda$lambda(closure$name) {
    return function ($receiver) {
      $receiver.src = res('audio/' + closure$name + '.mp3');
      $receiver.type = 'audio/mpeg';
      return Unit;
    };
  }
  function Clock$createAudio$lambda$lambda_0(closure$name) {
    return function ($receiver) {
      $receiver.src = res('audio/' + closure$name + '.m4r');
      $receiver.type = 'audio/x-m4r';
      return Unit;
    };
  }
  function Clock$createAudio$lambda(closure$name) {
    return function ($receiver) {
      invoke(get_source($receiver), Clock$createAudio$lambda$lambda(closure$name));
      invoke(get_source($receiver), Clock$createAudio$lambda$lambda_0(closure$name));
      return Unit;
    };
  }
  Clock.prototype.createAudio_0 = function (name) {
    return invoke(get_audio(document), Clock$createAudio$lambda(name));
  };
  function Clock$timer$lambda(closure$colorDivClass) {
    return function ($receiver) {
      positionAbsolute($receiver);
      rxClass($receiver, closure$colorDivClass);
      var $receiver_0 = $receiver.style;
      $receiver_0.left = '0';
      $receiver_0.right = '0';
      $receiver_0.bottom = '0';
      $receiver_0.top = '100%';
      return Unit;
    };
  }
  function Clock$timer$lambda$lambda$lambda(this$) {
    return function (it) {
      this$.innerText = it.toString();
      return Unit;
    };
  }
  function Clock$timer$lambda$lambda(closure$counter) {
    return function ($receiver) {
      $receiver.style.fontSize = '52vmin';
      closure$counter.forEach_qlkmfe$(Clock$timer$lambda$lambda$lambda($receiver));
      return Unit;
    };
  }
  function Clock$timer$lambda_0(closure$counter) {
    return function ($receiver) {
      fullSize($receiver);
      positionAbsolute($receiver);
      flexCenter($receiver);
      span($receiver, Clock$timer$lambda$lambda(closure$counter));
      return Unit;
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Clock$timer$nonZeroes($receiver) {
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.length > 0)
        destination.add_11rb$(element);
    }
    return destination;
  }
  function Clock$timer$toPhaseList($receiver) {
    var tmp$;
    var accumulator = new Clock$PhaseList();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = accumulator;
      var end = list.length + element.length | 0;
      accumulator = new Clock$PhaseList(plus(list.phases, new Clock$PhasePos(list.length, end, element)), end);
    }
    return accumulator;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function Clock$timer$startState($receiver, start) {
    var $receiver_0 = $receiver.phases;
    var tmp$;
    var yielding = false;
    var list = ArrayList_init();
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (yielding)
        list.add_11rb$(item);
      else {
        if (!(item.end <= start)) {
          list.add_11rb$(item);
          yielding = true;
        }
      }
    }
    var remaining = list;
    var first_0 = first(remaining);
    var tmp$_0 = start - first_0.start;
    var tmp$_1 = first_0.phase;
    var $receiver_1 = drop(remaining, 1);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_2;
    tmp$_2 = $receiver_1.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination.add_11rb$(item_0.phase);
    }
    return new Clock$StartState(tmp$_0, tmp$_1, asSequence(destination));
  }
  function Clock$timer$start$lambda$lambda(closure$repeatPhases) {
    return function () {
      return asSequence(closure$repeatPhases);
    };
  }
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  function Clock$timer$start$applyStyle(closure$colorDivClass, closure$colorDiv) {
    return function ($receiver, startPercent) {
      if (startPercent === void 0)
        startPercent = 0.0;
      closure$colorDivClass.now = $receiver.style;
      var $receiver_0 = closure$colorDiv;
      var tmp$;
      var $receiver_1 = (tmp$ = {}) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
      $receiver_1.top = ['0%', '100%'];
      var $receiver_2 = {};
      $receiver_2.duration = $receiver.length * 1000 | 0;
      $receiver_2.iterationStart = startPercent;
      $receiver_0.animate($receiver_1, $receiver_2);
    };
  }
  function Clock$timer$start$step(closure$counter, closure$next, closure$applyStyle, this$Clock) {
    return function () {
      var c = closure$counter.now - 1 | 0;
      if (c === 0) {
        var first = closure$next.next();
        closure$applyStyle(first);
        if (Model_getInstance().sounds.now) {
          replay(first.audio);
        }
        closure$counter.now = first.length;
      }
       else {
        closure$counter.now = c;
        if (Model_getInstance().sounds.now && (1 <= c && c <= 3)) {
          replay(this$Clock.prepareAudio);
        }
      }
    };
  }
  function Clock$timer$start$lambda$lambda_0(closure$step) {
    return function () {
      closure$step();
      return Unit;
    };
  }
  function Clock$timer$start$lambda$lambda$lambda(closure$it) {
    return function () {
      window.clearInterval(closure$it);
      return Unit;
    };
  }
  function Clock$timer$start$lambda(closure$step, closure$running) {
    return function () {
      closure$step();
      var $receiver = window.setInterval(Clock$timer$start$lambda$lambda_0(closure$step), 1000);
      closure$running.plusAssign_o14v8n$(Clock$timer$start$lambda$lambda$lambda($receiver));
      return $receiver;
    };
  }
  function Clock$timer$start$lambda$lambda_1(closure$it) {
    return function () {
      window.clearTimeout(closure$it);
      return Unit;
    };
  }
  function Clock$timer$start$lambda_0(closure$running) {
    return function () {
      closure$running.kill();
      return Unit;
    };
  }
  var Math_0 = Math;
  function Clock$timer$start(closure$started, closure$init, closure$startState, closure$repeat, closure$repeatPhases, closure$counter, closure$colorDivClass, closure$colorDiv, this$Clock) {
    return function () {
      var tmp$;
      var running = new Killables();
      var passed = ((new Date()).getTime() - closure$started) / 1000.0;
      if (passed < closure$init.length) {
        tmp$ = closure$startState(closure$init, passed);
      }
       else {
        var inRepeat = (passed - closure$init.length) % closure$repeat.length;
        tmp$ = closure$startState(closure$repeat, inRepeat);
      }
      var $receiver = tmp$;
      var phases = $receiver.copy_1fvqe5$(void 0, void 0, plus_0($receiver.phases, flatten(generateSequence(Clock$timer$start$lambda$lambda(closure$repeatPhases)))));
      var x = phases.start;
      var firstSecond = numberToInt(Math_0.floor(x));
      closure$counter.now = phases.first.length - firstSecond | 0;
      var percent = phases.start / phases.first.length;
      var applyStyle = Clock$timer$start$applyStyle(closure$colorDivClass, closure$colorDiv);
      applyStyle(phases.first, percent);
      var next = phases.phases.iterator();
      var step = Clock$timer$start$step(closure$counter, next, applyStyle, this$Clock);
      var initDelay = numberToInt(((firstSecond + 1 | 0) - phases.start) * 1000);
      running.plusAssign_o14v8n$(Clock$timer$start$lambda$lambda_1(window.setTimeout(Clock$timer$start$lambda(step, running), initDelay)));
      return Clock$timer$start$lambda_0(running);
    };
  }
  function Clock$timer$lambda$lambda_0() {
    return Unit;
  }
  function Clock$timer$lambda_1(closure$seq, closure$start) {
    return function (vis) {
      closure$seq.set_o14v8n$(vis ? closure$start() : Clock$timer$lambda$lambda_0);
      return Unit;
    };
  }
  Clock.prototype.timer_e0t6x9$ = function (timerDiv) {
    var killables = new Killables();
    positionRelative(timerDiv);
    var counter = new Var(-1);
    var colorDivClass = new Var(bootstrap.bgTransparent);
    var colorDiv = div(timerDiv, Clock$timer$lambda(colorDivClass));
    div(timerDiv, Clock$timer$lambda_0(counter));
    var nonZeroes = Clock$timer$nonZeroes;
    var toPhaseList = Clock$timer$toPhaseList;
    var init = toPhaseList(nonZeroes(listOf(new Clock$Phase(Model_getInstance().delay.now, bootstrap.bgWarning, this.restAudio))));
    var repeatPhases = nonZeroes(listOf_0([new Clock$Phase(Model_getInstance().work.now, bootstrap.bgSucess, this.workAudio), new Clock$Phase(Model_getInstance().rest.now, bootstrap.bgWarning, this.restAudio)]));
    var repeat = toPhaseList(repeatPhases);
    var startState = Clock$timer$startState;
    var started = (new Date()).getTime();
    var $receiver = new KillableSeq();
    killables.plusAssign_wii6vi$($receiver);
    var seq = $receiver;
    var start = Clock$timer$start(started, init, startState, repeat, repeatPhases, counter, colorDivClass, colorDiv, this);
    killables.plusAssign_wii6vi$(Main_getInstance().appCtx.visible.forEach_qlkmfe$(Clock$timer$lambda_1(seq, start)));
    return killables;
  };
  Clock.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Clock',
    interfaces: []
  };
  var Clock_instance = null;
  function Clock_getInstance() {
    if (Clock_instance === null) {
      new Clock();
    }
    return Clock_instance;
  }
  function Form() {
    Form_instance = this;
    this.root_yerr1l$_0 = lazy(Form$root$lambda);
  }
  Object.defineProperty(Form.prototype, 'root', {
    get: function () {
      return this.root_yerr1l$_0.value;
    }
  });
  Form.prototype.show = function () {
    Main_getInstance().appCtx.root.setRoot_b3w3xb$(this.root);
  };
  function Form$root$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.innerText = 'Gym Clock';
    return Unit;
  }
  function Form$root$lambda$lambda$lambda$lambda($receiver) {
    $receiver.middleTitle_ocyzvr$(Form$root$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda(closure$labelString) {
    return function ($receiver) {
      $receiver.innerText = closure$labelString;
      return Unit;
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$update(this$, closure$rxs, closure$cv) {
    return function () {
      closure$rxs.now = this$.value;
      closure$cv.now = this$.checkValidity();
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda(closure$update) {
    return function (it) {
      closure$update();
      return Unit;
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_0(closure$update) {
    return function (it) {
      closure$update();
      return Unit;
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_1(closure$rxs) {
    return function () {
      try {
        return toInt(closure$rxs.invoke());
      }
       catch (_) {
        if (Kotlin.isType(_, Throwable)) {
          return null;
        }
         else
          throw _;
      }
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_2(closure$rxn, closure$cv) {
    return function () {
      return closure$rxn.invoke() != null && closure$cv.invoke();
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_3(closure$rxn, closure$source) {
    return function () {
      closure$source.now = ensureNotNull(closure$rxn.now);
      return Unit;
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_4(closure$valid) {
    return function () {
      return !closure$valid.invoke() ? 'is-invalid' : null;
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda_0(closure$l, closure$source, closure$valids, closure$submit) {
    return function ($receiver) {
      formControl($receiver);
      $receiver.type = 'number';
      closure$l.htmlFor = get_ref($receiver);
      $receiver.min = '0';
      $receiver.step = '1';
      $receiver.value = closure$source.now.toString();
      var rxs = new Var($receiver.value);
      var cv = new Var($receiver.checkValidity());
      var update = Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$update($receiver, rxs, cv);
      inputEvent($receiver, Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda(update));
      changeEvent($receiver, Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_0(update));
      var rxn = Rx_init(Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_1(rxs));
      var valid = Rx_init(Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_2(rxn, cv));
      closure$valids.add_11rb$(valid);
      closure$submit.plusAssign_o14v8n$(Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_3(rxn, closure$source));
      rxClassOpt($receiver, Rx_init(Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_4(valid)));
      return Unit;
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda(closure$labelString, closure$source, closure$valids, closure$submit) {
    return function ($receiver) {
      formGroup($receiver);
      var l = label($receiver, Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda(closure$labelString));
      input($receiver, Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda$lambda_0(l, closure$source, closure$valids, closure$submit));
      return Unit;
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$number(closure$valids, closure$submit, this$) {
    return function (labelString, source) {
      div(this$, Form$root$lambda$lambda$lambda$lambda$lambda$number$lambda(labelString, source, closure$valids, closure$submit));
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$) {
    return function (it) {
      this$.checked = it;
      return Unit;
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    margin1($receiver);
    get_classes($receiver).plusAssign_61zpoe$(styles.pointerEventsNone);
    $receiver.type = 'checkbox';
    Model_getInstance().sounds.forEach_qlkmfe$(Form$root$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver));
    return Unit;
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$i) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$(styles.pointerEventsNone);
      $receiver.innerText = 'Sounds';
      $receiver.htmlFor = get_ref(closure$i);
      return Unit;
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(it) {
    Model_getInstance().sounds.now = !Model_getInstance().sounds.now;
    return Unit;
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_classes($receiver).plusAssign_61zpoe$(styles.cursorPointer);
    var i = input($receiver, Form$root$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    label($receiver, Form$root$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(i));
    clickEvent($receiver, Form$root$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda_0(closure$valids, closure$submit) {
    return function ($receiver) {
      var number = Form$root$lambda$lambda$lambda$lambda$lambda$number(closure$valids, closure$submit, $receiver);
      number('Work (seconds)', Model_getInstance().work);
      number('Rest (seconds)', Model_getInstance().rest);
      number('Initial delay (seconds)', Model_getInstance().delay);
      a($receiver, Form$root$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  function Form$root$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$valids) {
    return function () {
      var $receiver = closure$valids;
      var all$result;
      all$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!element.invoke()) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      return all$result;
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$canSubmit, closure$submit) {
    return function (it) {
      if (closure$canSubmit.now) {
        closure$submit.fire();
        Clock_getInstance().show();
      }
      return Unit;
    };
  }
  function Form$root$lambda$lambda$lambda$lambda$lambda_1(closure$valids, closure$submit) {
    return function ($receiver) {
      flexFixedSize($receiver);
      btnPrimary($receiver);
      $receiver.innerText = 'Start';
      var canSubmit = Rx_init(Form$root$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$valids));
      rxEnabled($receiver, canSubmit);
      clickEvent($receiver, Form$root$lambda$lambda$lambda$lambda$lambda$lambda_1(canSubmit, closure$submit));
      return Unit;
    };
  }
  function Form$root$lambda$lambda$lambda$lambda_0($receiver) {
    get_classes($receiver).plusAssign_61zpoe$(styles.scrollVertical);
    flexColumn($receiver);
    padding2($receiver);
    var valids = ArrayList_init();
    var submit = new Listeners();
    form($receiver, Form$root$lambda$lambda$lambda$lambda$lambda_0(valids, submit));
    btnButton($receiver, Form$root$lambda$lambda$lambda$lambda$lambda_1(valids, submit));
    return Unit;
  }
  function Form$root$lambda$lambda$lambda($receiver) {
    $receiver.top_vesf63$(Form$root$lambda$lambda$lambda$lambda);
    $receiver.main_iw61es$(Form$root$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function Form$root$lambda$lambda($receiver) {
    flexGrow1($receiver);
    screenLayout($receiver, Form$root$lambda$lambda$lambda);
    return Unit;
  }
  function Form$root$lambda() {
    return div(document, Form$root$lambda$lambda);
  }
  Form.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Form',
    interfaces: []
  };
  var Form_instance = null;
  function Form_getInstance() {
    if (Form_instance === null) {
      new Form();
    }
    return Form_instance;
  }
  function main(args) {
    Form_getInstance().show();
  }
  function Main() {
    Main_instance = this;
    var $receiver = new AppCtx('Gym Clock');
    $receiver.registerServiceWorker();
    this.appCtx = $receiver;
  }
  Main.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Main',
    interfaces: []
  };
  var Main_instance = null;
  function Main_getInstance() {
    if (Main_instance === null) {
      new Main();
    }
    return Main_instance;
  }
  var SettingsKey;
  function Model() {
    Model_instance = this;
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = (tmp$ = window.localStorage[SettingsKey]) != null ? JSON.parse(tmp$) : null) != null)
      tmp$_1 = tmp$_0;
    else {
      var $receiver = {};
      $receiver.work = 40;
      $receiver.rest = 20;
      $receiver.delay = 5;
      $receiver.sounds = true;
      tmp$_1 = $receiver;
    }
    this.settings = tmp$_1;
    this.work = new Var(this.settings.work);
    this.rest = new Var(this.settings.rest);
    this.delay = new Var(this.settings.delay);
    this.sounds = new Var(this.settings.sounds);
    this.settingsRx = Rx_init(Model$settingsRx$lambda(this));
    this.settingsRx.forEach_qlkmfe$(Model_init$lambda);
  }
  function Model$settingsRx$lambda(this$Model) {
    return function () {
      var $receiver = {};
      var this$Model_0 = this$Model;
      $receiver.work = this$Model_0.work.invoke();
      $receiver.rest = this$Model_0.rest.invoke();
      $receiver.delay = this$Model_0.delay.invoke();
      $receiver.sounds = this$Model_0.sounds.invoke();
      return $receiver;
    };
  }
  function Model_init$lambda(it) {
    window.localStorage[SettingsKey] = JSON.stringify(it);
    return Unit;
  }
  Model.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Model',
    interfaces: []
  };
  var Model_instance = null;
  function Model_getInstance() {
    if (Model_instance === null) {
      new Model();
    }
    return Model_instance;
  }
  Clock.prototype.Phase = Clock$Phase;
  Clock.prototype.PhasePos = Clock$PhasePos;
  Clock.prototype.PhaseList = Clock$PhaseList;
  Clock.prototype.StartState = Clock$StartState;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$gymclock = _.gymclock || (_.gymclock = {});
  Object.defineProperty(package$gymclock, 'Clock', {
    get: Clock_getInstance
  });
  Object.defineProperty(package$gymclock, 'Form', {
    get: Form_getInstance
  });
  package$gymclock.main_kand9s$ = main;
  Object.defineProperty(package$gymclock, 'Main', {
    get: Main_getInstance
  });
  Object.defineProperty(package$gymclock, 'SettingsKey', {
    get: function () {
      return SettingsKey;
    }
  });
  Object.defineProperty(package$gymclock, 'Model', {
    get: Model_getInstance
  });
  SettingsKey = 'gymclock-settings';
  main([]);
  Kotlin.defineModule('appsimake-gymclock', _);
  return _;
}(typeof this['appsimake-gymclock'] === 'undefined' ? {} : this['appsimake-gymclock'], kotlin, this['appsimake-common'], this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-commonui'], this['appsimake-commonshr']);

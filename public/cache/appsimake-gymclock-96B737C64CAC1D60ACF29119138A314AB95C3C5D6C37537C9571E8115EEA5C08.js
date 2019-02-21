if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-gymclock'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-gymclock'.");
}
this['appsimake-gymclock'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_commonshr, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_fontawesome, $module$appsimake_common, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var UIBase_init = $module$appsimake_commonui.commonui.widget.UIBase_init_kgemh3$;
  var Var = $module$appsimake_commonshr.rx.Var;
  var Cls = $module$appsimake_domx.domx.Cls;
  var get_bgTransparent = $module$appsimake_bootstrap.bootstrap.get_bgTransparent_kre7dp$;
  var Emitter = $module$appsimake_commonshr.common.Emitter;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var get_bgWarning = $module$appsimake_bootstrap.bootstrap.get_bgWarning_kre7dp$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var get_bgSuccess = $module$appsimake_bootstrap.bootstrap.get_bgSuccess_kre7dp$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var seq = $module$appsimake_commonshr.killable.seq_yzxo1x$;
  var Killables = $module$appsimake_commonshr.killable.Killables;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_9ce4rd$;
  var flatten = Kotlin.kotlin.sequences.flatten_41nmvn$;
  var plus_0 = Kotlin.kotlin.sequences.plus_v0iwhp$;
  var numberToInt = Kotlin.numberToInt;
  var replay = $module$appsimake_domx.domx.replay_cmu6zj$;
  var Unit = Kotlin.kotlin.Unit;
  var commonui = $module$appsimake_commonui.commonui;
  var UIBase = $module$appsimake_commonui.commonui.widget.UIBase;
  var widget = $module$appsimake_commonui.commonui.widget;
  var get_x3 = $module$appsimake_fontawesome.fontawesome.get_x3_xml72e$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var Fa = $module$appsimake_fontawesome.fontawesome.Fa;
  var get_volumeUp = $module$appsimake_fontawesome.fontawesome.get_volumeUp_xml72e$;
  var get_volumeMute = $module$appsimake_fontawesome.fontawesome.get_volumeMute_xml72e$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_c1yg1q$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var get_positionRelative = $module$appsimake_bootstrap.bootstrap.get_positionRelative_kre7dp$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_positionAbsolute = $module$appsimake_bootstrap.bootstrap.get_positionAbsolute_kre7dp$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_w100 = $module$appsimake_bootstrap.bootstrap.get_w100_kre7dp$;
  var get_h100 = $module$appsimake_bootstrap.bootstrap.get_h100_kre7dp$;
  var get_dFlex = $module$appsimake_bootstrap.bootstrap.get_dFlex_kre7dp$;
  var get_justifyContentCenter = $module$appsimake_bootstrap.bootstrap.get_justifyContentCenter_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_span = $module$appsimake_domx.domx.get_span_asww5s$;
  var resizeEvent = $module$appsimake_common.common.resizeEvent_5ehnu1$;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var HasKillSet = $module$appsimake_commonshr.killable.HasKillSet;
  var BodyPath = $module$appsimake_commonui.commonui.widget.BodyPath;
  var Body = $module$appsimake_commonui.commonui.widget.Body;
  var switchToView = $module$appsimake_commonui.commonui.widget.switchToView_t9xs9u$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ForwardBase_init = $module$appsimake_commonui.commonui.widget.ForwardBase_init_kgemh3$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var ForwardBase = $module$appsimake_commonui.commonui.widget.ForwardBase;
  var get_audio = $module$appsimake_domx.domx.get_audio_asww5s$;
  var get_source = $module$appsimake_domx.domx.get_source_asww5s$;
  var res = $module$appsimake_common.common.res_61zpoe$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var get_flexColumn = $module$appsimake_bootstrap.bootstrap.get_flexColumn_kre7dp$;
  var Listeners = $module$appsimake_commonshr.common.Listeners;
  var get_form = $module$appsimake_domx.domx.get_form_asww5s$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var get_formGroup = $module$appsimake_bootstrap.bootstrap.get_formGroup_kre7dp$;
  var get_label = $module$appsimake_domx.domx.get_label_asww5s$;
  var get_input = $module$appsimake_domx.domx.get_input_asww5s$;
  var get_formControl = $module$appsimake_bootstrap.bootstrap.get_formControl_kre7dp$;
  var get_ref = $module$appsimake_domx.domx.get_ref_ejp6nk$;
  var inputEvent = $module$appsimake_domx.domx.inputEvent_oyfk7p$;
  var changeEvent = $module$appsimake_domx.domx.changeEvent_e6qnhl$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Throwable = Error;
  var ensureNotNull = Kotlin.ensureNotNull;
  var get_isInvalid = $module$appsimake_bootstrap.bootstrap.get_isInvalid_kre7dp$;
  var get_insert_0 = $module$appsimake_commonui.commonui.widget.get_insert_asww5s$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var get_btnPrimary = $module$appsimake_bootstrap.bootstrap.get_btnPrimary_kre7dp$;
  var get_fa = $module$appsimake_fontawesome.fontawesome.get_fa_kre7dp$;
  var get_running = $module$appsimake_fontawesome.fontawesome.get_running_xml72e$;
  var Loading = $module$appsimake_commonui.commonui.widget.Loading;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  FormPath.prototype = Object.create(BodyPath.prototype);
  FormPath.prototype.constructor = FormPath;
  ClockPath.prototype = Object.create(FormPath.prototype);
  ClockPath.prototype.constructor = ClockPath;
  Clock.prototype = Object.create(UIBase.prototype);
  Clock.prototype.constructor = Clock;
  Form.prototype = Object.create(ForwardBase.prototype);
  Form.prototype.constructor = Form;
  function ClockPath(clock) {
    FormPath.call(this, clock.form);
    this.clock = clock;
  }
  ClockPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClockPath',
    interfaces: [FormPath]
  };
  function Clock(form) {
    UIBase_init(form, this);
    this.form = form;
    this.path = new ClockPath(this);
    this.sounds = this.form.sounds;
    this.model = this.form.model;
    this.counter = new Var(-1);
    this.colorDivClass = new Var(get_bgTransparent(Cls.Companion));
    this.animation = new Emitter();
    this.rawView_yqmmqw$_0 = ui(this);
    var nonZeroes = Clock_init$nonZeroes;
    var toPhaseList = Clock_init$toPhaseList;
    var init = toPhaseList(nonZeroes(listOf(new Clock$Phase(this.model.delay.now, get_bgWarning(Cls.Companion), this.sounds.restAudio))));
    var repeatPhases = nonZeroes(listOf_0([new Clock$Phase(this.model.work.now, get_bgSuccess(Cls.Companion), this.sounds.workAudio), new Clock$Phase(this.model.rest.now, get_bgWarning(Cls.Companion), this.sounds.restAudio)]));
    var repeat = toPhaseList(repeatPhases);
    var startState = Clock_init$startState;
    var started = (new Date()).getTime();
    var seq_0 = seq(this.kills);
    var start = Clock_init$start(started, init, startState, repeat, repeatPhases, this);
    this.forEach_5mel8p$(commonui.browserVisible, Clock_init$lambda(seq_0, start));
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
  Clock$PhaseList.prototype.copy_2k8l0x$ = function (phases, length) {
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
  Clock$StartState.prototype.copy_jflwt9$ = function (start, first, phases) {
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
  function Clock$AnimationData(length, startPercent) {
    this.length = length;
    this.startPercent = startPercent;
  }
  Clock$AnimationData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationData',
    interfaces: []
  };
  Object.defineProperty(Clock.prototype, 'rawView', {
    get: function () {
      return this.rawView_yqmmqw$_0;
    }
  });
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Clock_init$nonZeroes($receiver) {
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
  function Clock_init$toPhaseList($receiver) {
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
  function Clock_init$startState($receiver, start) {
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
  function Clock_init$start$lambda$lambda(closure$repeatPhases) {
    return function () {
      return asSequence(closure$repeatPhases);
    };
  }
  function Clock_init$start$applyStyle(this$Clock) {
    return function ($receiver, startPercent) {
      if (startPercent === void 0)
        startPercent = 0.0;
      this$Clock.colorDivClass.now = $receiver.style;
      this$Clock.animation.emit_11rb$(new Clock$AnimationData($receiver.length, startPercent));
    };
  }
  function Clock_init$start$step(this$Clock, closure$next, closure$applyStyle) {
    return function () {
      var c = this$Clock.counter.now - 1 | 0;
      if (c === 0) {
        var first = closure$next.next();
        closure$applyStyle(first);
        if (this$Clock.model.sounds.now) {
          replay(first.audio);
        }
        this$Clock.counter.now = first.length;
      }
       else {
        this$Clock.counter.now = c;
        if (this$Clock.model.sounds.now && (1 <= c && c <= 3)) {
          replay(this$Clock.sounds.prepareAudio);
        }
      }
    };
  }
  function Clock_init$start$lambda$lambda_0(closure$step) {
    return function () {
      closure$step();
      return Unit;
    };
  }
  function Clock_init$start$lambda$lambda$lambda(closure$it) {
    return function () {
      window.clearInterval(closure$it);
      return Unit;
    };
  }
  function Clock_init$start$lambda(closure$step, closure$running) {
    return function () {
      closure$step();
      var $receiver = window.setInterval(Clock_init$start$lambda$lambda_0(closure$step), 1000);
      closure$running.plusAssign_o14v8n$(Clock_init$start$lambda$lambda$lambda($receiver));
      return $receiver;
    };
  }
  function Clock_init$start$lambda$lambda_1(closure$it) {
    return function () {
      window.clearTimeout(closure$it);
      return Unit;
    };
  }
  function Clock_init$start$lambda_0(closure$running) {
    return function () {
      closure$running.kill();
      return Unit;
    };
  }
  var Math_0 = Math;
  function Clock_init$start(closure$started, closure$init, closure$startState, closure$repeat, closure$repeatPhases, this$Clock) {
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
      var phases = $receiver.copy_jflwt9$(void 0, void 0, plus_0($receiver.phases, flatten(generateSequence(Clock_init$start$lambda$lambda(closure$repeatPhases)))));
      var x = phases.start;
      var firstSecond = numberToInt(Math_0.floor(x));
      this$Clock.counter.now = phases.first.length - firstSecond | 0;
      var percent = phases.start / phases.first.length;
      var applyStyle = Clock_init$start$applyStyle(this$Clock);
      applyStyle(phases.first, percent);
      var next = phases.phases.iterator();
      var step = Clock_init$start$step(this$Clock, next, applyStyle);
      var initDelay = numberToInt(((firstSecond + 1 | 0) - phases.start) * 1000);
      running.plusAssign_o14v8n$(Clock_init$start$lambda$lambda_1(window.setTimeout(Clock_init$start$lambda(step, running), initDelay)));
      return Clock_init$start$lambda_0(running);
    };
  }
  function Clock_init$lambda$lambda() {
    return Unit;
  }
  function Clock_init$lambda(closure$seq, closure$start) {
    return function ($receiver, vis) {
      closure$seq.set_o14v8n$(vis ? closure$start() : Clock_init$lambda$lambda);
      return Unit;
    };
  }
  Clock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Clock',
    interfaces: [UIBase]
  };
  function Coroutine$ui$lambda$lambda$lambda$lambda(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.form.back();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ui$lambda$lambda$lambda$lambda(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda(this$ui) {
    return function ($receiver) {
      if (this$ui.model.sounds.invoke()) {
        return get_volumeUp(Fa.Companion);
      }
       else {
        return get_volumeMute(Fa.Companion);
      }
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    return !it;
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.model.sounds.transform_ru8m0w$(ui$lambda$lambda$lambda$lambda$lambda$lambda), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ui$lambda$lambda$lambda$lambda$lambda_0(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_0(this$ui) {
    return function ($receiver) {
      return this$ui.colorDivClass.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda_1(this$) {
    return function (ad) {
      var $receiver = this$;
      var $receiver_0 = {};
      $receiver_0.top = ['0%', '100%'];
      var $receiver_1 = {};
      $receiver_1.duration = ad.length * 1000 | 0;
      $receiver_1.iterationStart = ad.startPercent;
      $receiver.animate($receiver_0, $receiver_1);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda(this$ui) {
    return function ($receiver) {
      get_positionAbsolute(get_cls($receiver));
      this$ui.rxClass_wqb4ha$($receiver, ui$lambda$lambda$lambda$lambda_0(this$ui));
      var $receiver_0 = $receiver.style;
      $receiver_0.left = '0';
      $receiver_0.right = '0';
      $receiver_0.bottom = '0';
      $receiver_0.top = '100%';
      this$ui.animation.plusAssign_qlkmfe$(ui$lambda$lambda$lambda$lambda_1($receiver));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_1(closure$timerDiv, this$) {
    return function () {
      var $receiver = closure$timerDiv;
      var a = $receiver.offsetWidth;
      var b = $receiver.offsetHeight;
      var fs = numberToInt(Math_0.min(a, b) * 0.6).toString() + 'px';
      this$.style.fontSize = fs;
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_2(this$) {
    return function ($receiver, it) {
      this$.innerText = it.toString();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_2(this$ui, closure$timerDiv) {
    return function ($receiver) {
      plusAssign(this$ui.kills, resizeEvent(window, ui$lambda$lambda$lambda$lambda$lambda_1(closure$timerDiv, $receiver)));
      this$ui.forEach_5mel8p$(this$ui.counter, ui$lambda$lambda$lambda$lambda$lambda_2($receiver));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_0(this$ui, closure$timerDiv) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_w100($receiver_0);
      get_h100($receiver_0);
      get_positionAbsolute($receiver_0);
      get_dFlex($receiver_0);
      get_justifyContentCenter($receiver_0);
      get_alignItemsCenter($receiver_0);
      invoke(get_span($receiver), ui$lambda$lambda$lambda$lambda_2(this$ui, closure$timerDiv));
      return Unit;
    };
  }
  function ui$lambda$lambda(this$ui) {
    return function ($receiver) {
      var timerDiv = $receiver;
      var $receiver_0 = get_cls($receiver);
      get_flexGrow1($receiver_0);
      get_positionRelative($receiver_0);
      invoke(get_div($receiver), ui$lambda$lambda$lambda(this$ui));
      invoke(get_div($receiver), ui$lambda$lambda$lambda_0(this$ui, timerDiv));
      return Unit;
    };
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.screen;
    var $receiver_1 = $receiver_0.topbar;
    var $receiver_2 = $receiver_1.left.button;
    $receiver_2.back;
    get_x3($receiver_2.fa);
    $receiver.click_3xepc3$($receiver_2, ui$lambda$lambda$lambda$lambda($receiver));
    remAssign($receiver_1.title, 'Workout');
    var $receiver_3 = $receiver_1.right.button;
    $receiver_3.m1p2;
    $receiver_3.secondary;
    get_x3($receiver_3.fa);
    $receiver.rxClass_wqb4ha$($receiver_3.icon, ui$lambda$lambda$lambda$lambda$lambda($receiver));
    $receiver.click_3xepc3$($receiver_3, ui$lambda$lambda$lambda$lambda$lambda_0($receiver));
    get_insert($receiver_0.main).wraps.div_iw61es$(ui$lambda$lambda($receiver));
    return $receiver_0.node;
  }
  var SettingsKey;
  function Model(kills) {
    this.kills_k68mkz$_0 = kills;
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
    this.settingsRx = this.rx_pn7ch0$(Model$settingsRx$lambda(this));
    this.forEach_5mel8p$(this.settingsRx, Model_init$lambda);
  }
  Object.defineProperty(Model.prototype, 'kills', {
    get: function () {
      return this.kills_k68mkz$_0;
    }
  });
  function Model$settingsRx$lambda(this$Model) {
    return function ($receiver) {
      var $receiver_0 = {};
      var this$Model_0 = this$Model;
      $receiver_0.work = this$Model_0.work.invoke();
      $receiver_0.rest = this$Model_0.rest.invoke();
      $receiver_0.delay = this$Model_0.delay.invoke();
      $receiver_0.sounds = this$Model_0.sounds.invoke();
      return $receiver_0;
    };
  }
  function Model_init$lambda($receiver, it) {
    window.localStorage[SettingsKey] = JSON.stringify(it);
    return Unit;
  }
  Model.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Model',
    interfaces: [HasKillSet]
  };
  function FormPath(form) {
    BodyPath.call(this, form.body);
    this.form = form;
  }
  FormPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormPath',
    interfaces: [BodyPath]
  };
  function Form(body) {
    Form$Companion_getInstance();
    ForwardBase_init(body, this);
    this.body = body;
    this.path = new FormPath(this);
    this.sounds_3bur17$_0 = lazy(Form$sounds$lambda);
    this.model = new Model(this.kills);
    this.rawView_bji2eg$_0 = ui_0(this);
  }
  Object.defineProperty(Form.prototype, 'sounds', {
    get: function () {
      return this.sounds_3bur17$_0.value;
    }
  });
  function Form$Companion() {
    Form$Companion_instance = this;
  }
  function Coroutine$boot_bufp83$($this, hole_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$hole = hole_0;
  }
  Coroutine$boot_bufp83$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$boot_bufp83$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$boot_bufp83$.prototype.constructor = Coroutine$boot_bufp83$;
  Coroutine$boot_bufp83$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new Body(this.local$hole);
            this.state_0 = 2;
            this.result_0 = switchToView($receiver.content, new Form($receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Form$Companion.prototype.boot_bufp83$ = function (hole_0, continuation_0, suspended) {
    var instance = new Coroutine$boot_bufp83$(this, hole_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Form$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Form$Companion_instance = null;
  function Form$Companion_getInstance() {
    if (Form$Companion_instance === null) {
      new Form$Companion();
    }
    return Form$Companion_instance;
  }
  function Coroutine$Form$start$lambda(this$Form_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Form = this$Form_0;
  }
  Coroutine$Form$start$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Form$start$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Form$start$lambda.prototype.constructor = Coroutine$Form$start$lambda;
  Coroutine$Form$start$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new Clock(this.local$this$Form);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Form$start$lambda(this$Form_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Form$start$lambda(this$Form_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$start($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$start.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$start.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$start.prototype.constructor = Coroutine$start;
  Coroutine$start.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.forward.switchTo_cbny1b$(Form$start$lambda(this.$this), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Form.prototype.start = function (continuation_0, suspended) {
    var instance = new Coroutine$start(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Object.defineProperty(Form.prototype, 'rawView', {
    get: function () {
      return this.rawView_bji2eg$_0;
    }
  });
  function Form$sounds$lambda() {
    return new Sounds();
  }
  Form.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Form',
    interfaces: [ForwardBase]
  };
  function Sounds() {
    this.prepareAudio = this.createAudio_0('exquisite');
    this.workAudio = this.createAudio_0('definite');
    this.restAudio = this.createAudio_0('not-bad');
  }
  function Sounds$createAudio$lambda$lambda(closure$name) {
    return function ($receiver) {
      $receiver.src = res('audio/' + closure$name + '.mp3');
      $receiver.type = 'audio/mpeg';
      return Unit;
    };
  }
  function Sounds$createAudio$lambda$lambda_0(closure$name) {
    return function ($receiver) {
      $receiver.src = res('audio/' + closure$name + '.m4r');
      $receiver.type = 'audio/x-m4r';
      return Unit;
    };
  }
  function Sounds$createAudio$lambda(closure$name) {
    return function ($receiver) {
      invoke(get_source($receiver), Sounds$createAudio$lambda$lambda(closure$name));
      invoke(get_source($receiver), Sounds$createAudio$lambda$lambda_0(closure$name));
      $receiver.load();
      return Unit;
    };
  }
  Sounds.prototype.createAudio_0 = function (name) {
    return invoke(get_audio(document), Sounds$createAudio$lambda(name));
  };
  Sounds.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sounds',
    interfaces: []
  };
  function ui$lambda$lambda$lambda_1($receiver) {
    get_p1(get_cls($receiver));
    remAssign($receiver, 'Gym Clock');
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda_3(this$ui) {
    return function ($receiver) {
      if (this$ui.model.sounds.invoke()) {
        return get_volumeUp(Fa.Companion);
      }
       else {
        return get_volumeMute(Fa.Companion);
      }
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_3(it) {
    return !it;
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_0(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.model.sounds.transform_ru8m0w$(ui$lambda$lambda$lambda$lambda$lambda_3), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ui$lambda$lambda$lambda$lambda_4(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_0(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$number$lambda$lambda(closure$labelString) {
    return function ($receiver) {
      $receiver.innerText = closure$labelString;
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$number$lambda$lambda$update(this$, closure$rxs, closure$cv) {
    return function () {
      closure$rxs.now = this$.value;
      closure$cv.now = this$.checkValidity();
    };
  }
  function ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda(closure$update) {
    return function (it) {
      closure$update();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_0(closure$update) {
    return function (it) {
      closure$update();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_1(closure$rxs) {
    return function ($receiver) {
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
  function ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_2(closure$rxn, closure$cv) {
    return function ($receiver) {
      return closure$rxn.invoke() != null && closure$cv.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_3(closure$rxn, closure$source) {
    return function () {
      closure$source.now = ensureNotNull(closure$rxn.now);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_4(closure$valid) {
    return function ($receiver) {
      return !closure$valid.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$number$lambda$lambda_0(closure$l, closure$source, this$ui, closure$valids, closure$submit) {
    return function ($receiver) {
      get_formControl(get_cls($receiver));
      $receiver.type = 'number';
      closure$l.htmlFor = get_ref($receiver);
      $receiver.min = '0';
      $receiver.step = '1';
      $receiver.value = closure$source.now.toString();
      var rxs = new Var($receiver.value);
      var cv = new Var($receiver.checkValidity());
      var update = ui$lambda$lambda$lambda$lambda$number$lambda$lambda$update($receiver, rxs, cv);
      inputEvent($receiver, ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda(update));
      changeEvent($receiver, ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_0(update));
      var rxn = this$ui.rx_pn7ch0$(ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_1(rxs));
      var valid = this$ui.rx_pn7ch0$(ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_2(rxn, cv));
      closure$valids.add_11rb$(valid);
      closure$submit.plusAssign_o14v8n$(ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_3(rxn, closure$source));
      this$ui.rxClass_mjd6u9$($receiver, get_isInvalid(Cls.Companion), ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_4(valid));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$number$lambda(closure$labelString, closure$source, this$ui, closure$valids, closure$submit) {
    return function ($receiver) {
      get_formGroup(get_cls($receiver));
      var l = invoke(get_label($receiver), ui$lambda$lambda$lambda$lambda$number$lambda$lambda(closure$labelString));
      invoke(get_input($receiver), ui$lambda$lambda$lambda$lambda$number$lambda$lambda_0(l, closure$source, this$ui, closure$valids, closure$submit));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$number(this$, this$ui, closure$valids, closure$submit) {
    return function (labelString, source) {
      invoke(get_div(this$), ui$lambda$lambda$lambda$lambda$number$lambda(labelString, source, this$ui, closure$valids, closure$submit));
    };
  }
  function ui$lambda$lambda$lambda$lambda_5(this$ui, closure$valids, closure$submit) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      var number = ui$lambda$lambda$lambda$lambda$number($receiver, this$ui, closure$valids, closure$submit);
      number('Work (seconds)', this$ui.model.work);
      number('Rest (seconds)', this$ui.model.rest);
      number('Initial delay (seconds)', this$ui.model.delay);
      return Unit;
    };
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  function ui$lambda$lambda$lambda$lambda$lambda_4(closure$valids) {
    return function ($receiver) {
      var $receiver_0 = closure$valids;
      var all$result;
      all$break: do {
        var tmp$;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$ = $receiver_0.iterator();
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
  function ui$lambda$lambda$lambda$lambda$lambda_5(closure$canSubmit) {
    return function () {
      return closure$canSubmit.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0(closure$submit_0, this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$submit = closure$submit_0;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$submit.fire();
            this.state_0 = 2;
            this.result_0 = this.local$this$ui.start(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ui$lambda$lambda$lambda$lambda$lambda_6(closure$submit_0, this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0(closure$submit_0, this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_2(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_dFlex($receiver_0);
      get_flexColumn($receiver_0);
      get_p1($receiver_0);
      var valids = ArrayList_init();
      var submit = new Listeners();
      invoke(get_form($receiver), ui$lambda$lambda$lambda$lambda_5(this$ui, valids, submit));
      var $receiver_1 = get_insert_0($receiver).button;
      var this$ui_0 = this$ui;
      var $receiver_2 = $receiver_1.cls;
      get_m1($receiver_2);
      flexFixedSize($receiver_2);
      get_btnPrimary($receiver_2);
      var $receiver_3 = get_fa(get_cls($receiver_1.icon));
      get_x3($receiver_3);
      get_running($receiver_3);
      var canSubmit = this$ui_0.rx_pn7ch0$(ui$lambda$lambda$lambda$lambda$lambda_4(valids));
      this$ui_0.rxEnabled_y5ufnr$($receiver_1, ui$lambda$lambda$lambda$lambda$lambda_5(canSubmit));
      this$ui_0.click_3xepc3$($receiver_1, ui$lambda$lambda$lambda$lambda$lambda_6(submit, this$ui_0));
      return Unit;
    };
  }
  function ui_0($receiver) {
    var $receiver_0 = widget.factory.screen;
    var $receiver_1 = $receiver_0.topbar;
    invoke($receiver_1.title, ui$lambda$lambda$lambda_1);
    var $receiver_2 = $receiver_1.right.button;
    $receiver_2.m1p2;
    $receiver_2.fa;
    $receiver_2.secondary;
    $receiver.rxClass_wqb4ha$($receiver_2.icon, ui$lambda$lambda$lambda$lambda_3($receiver));
    $receiver.click_3xepc3$($receiver_2, ui$lambda$lambda$lambda$lambda_4($receiver));
    invoke(get_insert($receiver_0.main).scrollPane.pane, ui$lambda$lambda$lambda_2($receiver));
    return $receiver_0.node;
  }
  function Coroutine$main$lambda(closure$loading_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$loading = closure$loading_0;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$loading.remAssign_61zpoe$('Registering service worker...');
            commonui.APP.startRegisteringServiceWorker();
            this.local$closure$loading.remAssign_61zpoe$('Starting app...');
            this.state_0 = 2;
            this.result_0 = Form$Companion_getInstance().boot_bufp83$(this.local$closure$loading.hole, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda(closure$loading_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda(closure$loading_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main() {
    var loading = new Loading();
    launch(coroutines.GlobalScope, void 0, void 0, main$lambda(loading));
  }
  var package$gymclock = _.gymclock || (_.gymclock = {});
  var package$clock = package$gymclock.clock || (package$gymclock.clock = {});
  package$clock.ClockPath = ClockPath;
  Clock.Phase = Clock$Phase;
  Clock.PhasePos = Clock$PhasePos;
  Clock.PhaseList = Clock$PhaseList;
  Clock.StartState = Clock$StartState;
  Clock.AnimationData = Clock$AnimationData;
  package$clock.Clock = Clock;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$clock.ui_udbwl8$ = ui;
  var package$data = package$gymclock.data || (package$gymclock.data = {});
  Object.defineProperty(package$data, 'SettingsKey', {
    get: function () {
      return SettingsKey;
    }
  });
  package$data.Model = Model;
  var package$form = package$gymclock.form || (package$gymclock.form = {});
  package$form.FormPath = FormPath;
  Object.defineProperty(Form, 'Companion', {
    get: Form$Companion_getInstance
  });
  package$form.Form = Form;
  package$form.Sounds = Sounds;
  package$form.ui_rpzng$ = ui_0;
  package$gymclock.main = main;
  Model.prototype.rx_pn7ch0$ = HasKillSet.prototype.rx_pn7ch0$;
  Model.prototype.rx_rf89m5$ = HasKillSet.prototype.rx_rf89m5$;
  Model.prototype.containsRx_1w65cx$ = HasKillSet.prototype.containsRx_1w65cx$;
  Model.prototype.filtered_49l5s4$ = HasKillSet.prototype.filtered_49l5s4$;
  Model.prototype.forEach_5mel8p$ = HasKillSet.prototype.forEach_5mel8p$;
  Model.prototype.forEach_igkruk$ = HasKillSet.prototype.forEach_igkruk$;
  Model.prototype.map_i8ud5a$ = HasKillSet.prototype.map_i8ud5a$;
  Model.prototype.onChange_ocsf2x$ = HasKillSet.prototype.onChange_ocsf2x$;
  Model.prototype.process_ttzep4$ = HasKillSet.prototype.process_ttzep4$;
  Model.prototype.remAssign_7fncnf$ = HasKillSet.prototype.remAssign_7fncnf$;
  Model.prototype.rxClass_wqb4ha$ = HasKillSet.prototype.rxClass_wqb4ha$;
  Model.prototype.rxClass_mjd6u9$ = HasKillSet.prototype.rxClass_mjd6u9$;
  Model.prototype.toRxSet_jr4bl4$ = HasKillSet.prototype.toRxSet_jr4bl4$;
  SettingsKey = 'gymclock-settings';
  main();
  Kotlin.defineModule('appsimake-gymclock', _);
  return _;
}(typeof this['appsimake-gymclock'] === 'undefined' ? {} : this['appsimake-gymclock'], kotlin, this['appsimake-commonui'], this['appsimake-commonshr'], this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-fontawesome'], this['appsimake-common'], this['kotlinx-coroutines-core']);

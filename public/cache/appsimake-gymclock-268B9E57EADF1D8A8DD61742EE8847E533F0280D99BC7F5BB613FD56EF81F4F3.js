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
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-gymclock'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-gymclock'.");
}
this['appsimake-gymclock'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_commonshr, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_fontawesome, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var CsKillsView = $module$appsimake_commonui.commonui.view.CsKillsView;
  var Var = $module$appsimake_commonshr.rx.Var;
  var Cls = $module$appsimake_domx.domx.Cls;
  var get_bgTransparent = $module$appsimake_bootstrap.bootstrap.get_bgTransparent_kre7dp$;
  var Emitter = $module$appsimake_commonshr.common.Emitter;
  var BackKillsUixApi = $module$appsimake_commonui.commonui.BackKillsUixApi;
  var HasBack = $module$appsimake_commonui.commonui.HasBack;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var get_bgWarning = $module$appsimake_bootstrap.bootstrap.get_bgWarning_kre7dp$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var get_bgSuccess = $module$appsimake_bootstrap.bootstrap.get_bgSuccess_kre7dp$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var commonui = $module$appsimake_commonui.commonui;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_9ce4rd$;
  var flatten = Kotlin.kotlin.sequences.flatten_41nmvn$;
  var plus_0 = Kotlin.kotlin.sequences.plus_v0iwhp$;
  var numberToInt = Kotlin.numberToInt;
  var replay = $module$appsimake_domx.domx.replay_cmu6zj$;
  var Unit = Kotlin.kotlin.Unit;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var widget = $module$appsimake_commonui.commonui.widget;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var get_volumeUp = $module$appsimake_fontawesome.fontawesome.get_volumeUp_xml72e$;
  var get_volumeMute = $module$appsimake_fontawesome.fontawesome.get_volumeMute_xml72e$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_yao39p$;
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
  var resizeEvent = $module$appsimake_domx.common.resizeEvent_5ehnu1$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var RxBase = $module$appsimake_commonshr.commonshr.properties.RxBase;
  var properties = $module$appsimake_commonshr.commonshr.properties;
  var readDynamic = $module$appsimake_commonshr.commonshr.properties.readDynamic_121my8$;
  var writeDynamic = $module$appsimake_commonshr.commonshr.properties.writeDynamic_y9dcxh$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var ForwardBase = $module$appsimake_commonui.commonui.view.ForwardBase;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var DefaultBindings = $module$appsimake_commonui.commonui.editing.DefaultBindings;
  var KillsUixApi = $module$appsimake_commonui.commonui.KillsUixApi;
  var BindKillsApi = $module$appsimake_commonui.commonui.BindKillsApi;
  var LinkApi = $module$appsimake_commonui.commonui.links.LinkApi;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var get_audio = $module$appsimake_domx.domx.get_audio_asww5s$;
  var get_source = $module$appsimake_domx.domx.get_source_asww5s$;
  var res = $module$appsimake_domx.common.res_61zpoe$;
  var listenOnce = $module$appsimake_domx.common.listenOnce_hgi4ad$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var get_flexColumn = $module$appsimake_bootstrap.bootstrap.get_flexColumn_kre7dp$;
  var get_form = $module$appsimake_domx.domx.get_form_asww5s$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var get_insert_0 = $module$appsimake_commonui.commonui.widget.get_insert_asww5s$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var get_btnPrimary = $module$appsimake_bootstrap.bootstrap.get_btnPrimary_kre7dp$;
  var row = $module$appsimake_bootstrap.bootstrap.row_kre7dp$;
  var get_running = $module$appsimake_fontawesome.fontawesome.get_running_xml72e$;
  var LinksFactory = $module$appsimake_commonui.commonui.links.LinksFactory;
  var keepAwake = $module$appsimake_commonui.commonui.keepAwake;
  var forwarding = $module$appsimake_commonui.commonui.view.forwarding_caeb5u$;
  Clock.prototype = Object.create(CsKillsView.prototype);
  Clock.prototype.constructor = Clock;
  Settings.prototype = Object.create(RxBase.prototype);
  Settings.prototype.constructor = Settings;
  Form.prototype = Object.create(ForwardBase.prototype);
  Form.prototype.constructor = Form;
  Links.prototype = Object.create(LinksFactory.prototype);
  Links.prototype.constructor = Links;
  function ClockPath() {
  }
  ClockPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ClockPath',
    interfaces: [FormPath]
  };
  function Clock(from, linkage, sounds, keepAwake) {
    CsKillsView.call(this, from);
    this.sounds = sounds;
    this.keepAwake = keepAwake;
    this.$delegate_q6mq4z$_0 = from;
    this.$delegate_q6mq4z$_1 = linkage;
    this.clock_z7kwbd$_0 = this;
    this.model = this.form.model;
    this.counter = new Var(-1);
    this.colorDivClass = new Var(get_bgTransparent(Cls.Companion));
    this.animation = new Emitter();
    this.rawView_yqmmqw$_0 = ui(this);
    run(this);
  }
  Object.defineProperty(Clock.prototype, 'clock', {
    get: function () {
      return this.clock_z7kwbd$_0;
    }
  });
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
  Object.defineProperty(Clock.prototype, 'form', {
    get: function () {
      return this.$delegate_q6mq4z$_0.form;
    }
  });
  Object.defineProperty(Clock.prototype, 'links', {
    get: function () {
      return this.$delegate_q6mq4z$_0.links;
    }
  });
  Object.defineProperty(Clock.prototype, 'back', {
    get: function () {
      return this.$delegate_q6mq4z$_1.back;
    }
  });
  Clock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Clock',
    interfaces: [BackKillsUixApi, HasBack, ClockPath, FormPath, CsKillsView]
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function run$nonZeroes($receiver) {
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
  function run$toPhaseList($receiver) {
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
  function run$startState($receiver, start) {
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
  function run$lambda(this$run) {
    return function ($receiver) {
      return this$run.isActiveView.invoke();
    };
  }
  function run$lambda$lambda($receiver) {
    return commonui.browserVisible.invoke();
  }
  function run$lambda$lambda$lambda$lambda(closure$repeatPhases) {
    return function () {
      return asSequence(closure$repeatPhases);
    };
  }
  function run$lambda$lambda$applyStyle(this$run) {
    return function ($receiver, startPercent) {
      if (startPercent === void 0)
        startPercent = 0.0;
      this$run.colorDivClass.now = $receiver.style;
      this$run.animation.emit_11rb$(new Clock$AnimationData($receiver.length, startPercent));
    };
  }
  function run$lambda$lambda$step(this$run, closure$next, closure$applyStyle) {
    return function () {
      var c = this$run.counter.now - 1 | 0;
      if (c === 0) {
        var first = closure$next.next();
        closure$applyStyle(first);
        if (this$run.model.sounds.now) {
          replay(first.audio);
        }
        this$run.counter.now = first.length;
      }
       else {
        this$run.counter.now = c;
        if (this$run.model.sounds.now && (1 <= c && c <= 3)) {
          replay(this$run.sounds.prepare);
        }
      }
    };
  }
  function run$lambda$lambda$lambda$lambda_0(closure$step) {
    return function () {
      closure$step();
      return Unit;
    };
  }
  function run$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function () {
      window.clearInterval(closure$it);
      return Unit;
    };
  }
  function run$lambda$lambda$lambda(closure$step, this$) {
    return function () {
      closure$step();
      var $receiver = window.setInterval(run$lambda$lambda$lambda$lambda_0(closure$step), 1000);
      plusAssign(this$.kills, run$lambda$lambda$lambda$lambda$lambda($receiver));
      return $receiver;
    };
  }
  function run$lambda$lambda$lambda$lambda_1(closure$it) {
    return function () {
      window.clearTimeout(closure$it);
      return Unit;
    };
  }
  var Math_0 = Math;
  function run$lambda$lambda_0(this$run, closure$started, closure$init, closure$startState, closure$repeat, closure$repeatPhases) {
    return function ($receiver, vis) {
      var tmp$;
      if (vis) {
        this$run.keepScreenAwake_ipfk82$(this$run.keepAwake);
        var passed = ((new Date()).getTime() - closure$started) / 1000.0;
        if (passed < closure$init.length) {
          tmp$ = closure$startState(closure$init, passed);
        }
         else {
          var inRepeat = (passed - closure$init.length) % closure$repeat.length;
          tmp$ = closure$startState(closure$repeat, inRepeat);
        }
        var $receiver_0 = tmp$;
        var phases = $receiver_0.copy_jflwt9$(void 0, void 0, plus_0($receiver_0.phases, flatten(generateSequence(run$lambda$lambda$lambda$lambda(closure$repeatPhases)))));
        var x = phases.start;
        var firstSecond = numberToInt(Math_0.floor(x));
        this$run.counter.now = phases.first.length - firstSecond | 0;
        var percent = phases.start / phases.first.length;
        var applyStyle = run$lambda$lambda$applyStyle(this$run);
        applyStyle(phases.first, percent);
        var next = phases.phases.iterator();
        var step = run$lambda$lambda$step(this$run, next, applyStyle);
        var initDelay = numberToInt(((firstSecond + 1 | 0) - phases.start) * 1000);
        var $receiver_1 = window.setTimeout(run$lambda$lambda$lambda(step, $receiver), initDelay);
        plusAssign($receiver.kills, run$lambda$lambda$lambda$lambda_1($receiver_1));
      }
      return Unit;
    };
  }
  function run$lambda_0(this$run, closure$nonZeroes, closure$toPhaseList, closure$startState) {
    return function ($receiver, act) {
      if (act) {
        var init = closure$toPhaseList(closure$nonZeroes(listOf(new Clock$Phase(this$run.model.delay.now, get_bgWarning(Cls.Companion), this$run.sounds.rest))));
        var repeatPhases = closure$nonZeroes(listOf_0([new Clock$Phase(this$run.model.work.now, get_bgSuccess(Cls.Companion), this$run.sounds.work), new Clock$Phase(this$run.model.rest.now, get_bgWarning(Cls.Companion), this$run.sounds.rest)]));
        var repeat = closure$toPhaseList(repeatPhases);
        var started = (new Date()).getTime();
        $receiver.forEach_xwzbbo$($receiver.rx_y6x17j$(run$lambda$lambda), run$lambda$lambda_0(this$run, started, init, closure$startState, repeat, repeatPhases));
      }
      return Unit;
    };
  }
  function run($receiver) {
    var nonZeroes = run$nonZeroes;
    var toPhaseList = run$toPhaseList;
    var startState = run$startState;
    $receiver.forEach_xwzbbo$($receiver.rx_y6x17j$(run$lambda($receiver)), run$lambda_0($receiver, nonZeroes, toPhaseList, startState));
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda(this$ui) {
    return function ($receiver) {
      return this$ui.model.sounds.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui) {
    return function ($receiver) {
      return !this$ui.model.sounds.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_1(it) {
    return !it;
  }
  function ui$lambda$lambda$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.model.sounds.rxv.transform_ru8m0w$(ui$lambda$lambda$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda(this$ui) {
    return function ($receiver) {
      return this$ui.colorDivClass.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda_0(this$) {
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
      this$ui.rxClass_c5yvvx$($receiver, ui$lambda$lambda$lambda$lambda(this$ui));
      var $receiver_0 = $receiver.style;
      $receiver_0.left = '0';
      $receiver_0.right = '0';
      $receiver_0.bottom = '0';
      $receiver_0.top = '100%';
      this$ui.animation.plusAssign_qlkmfe$(ui$lambda$lambda$lambda$lambda_0($receiver));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_0(closure$timerDiv, this$) {
    return function () {
      var $receiver = closure$timerDiv;
      var a = $receiver.offsetWidth;
      var b = $receiver.offsetHeight;
      var fs = numberToInt(Math_0.min(a, b) * 0.6).toString() + 'px';
      this$.style.fontSize = fs;
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_1(this$) {
    return function ($receiver, it) {
      this$.innerText = it.toString();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_1(this$ui, closure$timerDiv) {
    return function ($receiver) {
      plusAssign(this$ui.kills, resizeEvent(window, ui$lambda$lambda$lambda$lambda$lambda_0(closure$timerDiv, $receiver)));
      this$ui.forEach_xwzbbo$(this$ui.counter, ui$lambda$lambda$lambda$lambda$lambda_1($receiver));
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
      invoke(get_span($receiver), ui$lambda$lambda$lambda$lambda_1(this$ui, closure$timerDiv));
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
    $receiver.get_backButton_tdhe4g$($receiver_1.left).icon.x3;
    remAssign($receiver_1.title, 'Workout');
    var $receiver_2 = $receiver_1.right.button;
    $receiver_2.m1p2;
    $receiver_2.secondary;
    var $receiver_3 = $receiver_2.insert.icon;
    $receiver_3.x3;
    get_volumeUp($receiver_3.fa);
    $receiver.visible_od9jl4$($receiver_3.svg, ui$lambda$lambda$lambda$lambda$lambda$lambda($receiver));
    var $receiver_4 = $receiver_2.insert.icon;
    $receiver_4.x3;
    get_volumeMute($receiver_4.fa);
    $receiver.visible_od9jl4$($receiver_4.svg, ui$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver));
    $receiver.click_9375ex$($receiver_2, ui$lambda$lambda$lambda$lambda$lambda($receiver));
    get_insert($receiver_0.main).wraps.div_iw61es$(ui$lambda$lambda($receiver));
    return $receiver_0.node;
  }
  var SettingsKey;
  function Settings() {
    RxBase.call(this);
    this.work_oufmg7$_0 = this.o.int_za3lpa$(40).provideDelegate_n5byny$(this, Settings$work_metadata);
    this.rest_oriakk$_0 = this.o.int_za3lpa$(20).provideDelegate_n5byny$(this, Settings$rest_metadata);
    this.delay_ka90zr$_0 = this.o.int_za3lpa$(5).provideDelegate_n5byny$(this, Settings$delay_metadata);
    this.sounds_meh0d0$_0 = this.o.boolean_6taknv$(true).provideDelegate_n5byny$(this, Settings$sounds_metadata);
  }
  var Settings$work_metadata = new PropertyMetadata('work');
  Object.defineProperty(Settings.prototype, 'work', {
    get: function () {
      return this.work_oufmg7$_0.getValue_lrcp0p$(this, Settings$work_metadata);
    }
  });
  var Settings$rest_metadata = new PropertyMetadata('rest');
  Object.defineProperty(Settings.prototype, 'rest', {
    get: function () {
      return this.rest_oriakk$_0.getValue_lrcp0p$(this, Settings$rest_metadata);
    }
  });
  var Settings$delay_metadata = new PropertyMetadata('delay');
  Object.defineProperty(Settings.prototype, 'delay', {
    get: function () {
      return this.delay_ka90zr$_0.getValue_lrcp0p$(this, Settings$delay_metadata);
    }
  });
  var Settings$sounds_metadata = new PropertyMetadata('sounds');
  Object.defineProperty(Settings.prototype, 'sounds', {
    get: function () {
      return this.sounds_meh0d0$_0.getValue_lrcp0p$(this, Settings$sounds_metadata);
    }
  });
  Settings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Settings',
    interfaces: [RxBase]
  };
  function loadModel$lambda(closure$settings) {
    return function ($receiver) {
      var $receiver_0 = new Settings();
      var closure$settings_0 = closure$settings;
      $receiver_0.work.now = closure$settings_0.work.invoke();
      $receiver_0.rest.now = closure$settings_0.rest.invoke();
      $receiver_0.delay.now = closure$settings_0.delay.invoke();
      $receiver_0.sounds.now = closure$settings_0.sounds.invoke();
      return $receiver_0;
    };
  }
  function loadModel$lambda_0($receiver, s) {
    window.localStorage[SettingsKey] = JSON.stringify(writeDynamic(s, properties.NoDynamicOps));
    return Unit;
  }
  function loadModel($receiver) {
    var $receiver_0 = new Settings();
    var tmp$;
    if ((tmp$ = window.localStorage[SettingsKey]) != null) {
      readDynamic($receiver_0, JSON.parse(tmp$), properties.NoDynamicOps);
    }
    var settings = $receiver_0;
    var settingsRx = $receiver.rx_y6x17j$(loadModel$lambda(settings));
    $receiver.forEach_xwzbbo$(settingsRx, loadModel$lambda_0);
    return settings;
  }
  function FormPath() {
  }
  FormPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FormPath',
    interfaces: [LinksPath]
  };
  function Form(body, linkage, links) {
    ForwardBase.call(this, body);
    this.linkage_n41jv4$_0 = linkage;
    this.$delegate_g2b1lf$_0 = links;
    this.form_3w2hut$_0 = this;
    this.sounds_3bur17$_0 = lazy(Form$sounds$lambda(this));
    this.model = loadModel(this);
    this.bindings_hs33td$_0 = new DefaultBindings(this.kills);
    this.forEachLater_xwzbbo$(this.model.sounds, Form_init$lambda(this));
    this.rawView_bji2eg$_0 = ui_0(this);
  }
  Object.defineProperty(Form.prototype, 'linkage', {
    get: function () {
      return this.linkage_n41jv4$_0;
    }
  });
  Object.defineProperty(Form.prototype, 'form', {
    get: function () {
      return this.form_3w2hut$_0;
    }
  });
  Object.defineProperty(Form.prototype, 'sounds_0', {
    get: function () {
      return this.sounds_3bur17$_0.value;
    }
  });
  Form.prototype.sounds = function (continuation) {
    return this.sounds_0.await(continuation);
  };
  function Coroutine$Form$startWorkout$lambda(this$Form_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Form = this$Form_0;
  }
  Coroutine$Form$startWorkout$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Form$startWorkout$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Form$startWorkout$lambda.prototype.constructor = Coroutine$Form$startWorkout$lambda;
  Coroutine$Form$startWorkout$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$Form.sounds_0;
            this.state_0 = 2;
            this.result_0 = this.local$this$Form.fwd_nnhkmr$(this.local$this$Form.links.clock, void 0, this);
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
  function Form$startWorkout$lambda(this$Form_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Form$startWorkout$lambda(this$Form_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Form.prototype.startWorkout = function () {
    return launch(this, void 0, void 0, Form$startWorkout$lambda(this));
  };
  Object.defineProperty(Form.prototype, 'bindings', {
    get: function () {
      return this.bindings_hs33td$_0;
    }
  });
  Object.defineProperty(Form.prototype, 'rawView', {
    get: function () {
      return this.rawView_bji2eg$_0;
    }
  });
  Object.defineProperty(Form.prototype, 'links', {
    get: function () {
      return this.$delegate_g2b1lf$_0.links;
    }
  });
  function Coroutine$Form$sounds$lambda$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$Form$sounds$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Form$sounds$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Form$sounds$lambda$lambda.prototype.constructor = Coroutine$Form$sounds$lambda$lambda;
  Coroutine$Form$sounds$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = Sounds$Companion_getInstance().load(this);
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
  function Form$sounds$lambda$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$Form$sounds$lambda$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Form$sounds$lambda(this$Form) {
    return function () {
      return async(this$Form, void 0, void 0, Form$sounds$lambda$lambda);
    };
  }
  function Coroutine$Form_init$lambda$lambda(this$Form_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Form = this$Form_0;
  }
  Coroutine$Form_init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Form_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Form_init$lambda$lambda.prototype.constructor = Coroutine$Form_init$lambda$lambda;
  Coroutine$Form_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Form.sounds(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return replay(this.result_0.prepare), Unit;
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
  function Form_init$lambda$lambda(this$Form_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Form_init$lambda$lambda(this$Form_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Form_init$lambda(this$Form) {
    return function ($receiver, it) {
      if (it) {
        launch(this$Form, void 0, void 0, Form_init$lambda$lambda(this$Form));
      }
      return Unit;
    };
  }
  Form.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Form',
    interfaces: [LinkApi, BindKillsApi, KillsUixApi, FormPath, LinksPath, ForwardBase]
  };
  function Sounds(prepare, work, rest) {
    Sounds$Companion_getInstance();
    this.prepare = prepare;
    this.work = work;
    this.rest = rest;
  }
  function Sounds$Companion() {
    Sounds$Companion_instance = this;
  }
  function Sounds$Companion$load$createAudio$lambda$lambda(closure$name) {
    return function ($receiver) {
      $receiver.src = res('audio/' + closure$name + '.mp3');
      $receiver.type = 'audio/mpeg';
      return Unit;
    };
  }
  function Sounds$Companion$load$createAudio$lambda$lambda_0(closure$name) {
    return function ($receiver) {
      $receiver.src = res('audio/' + closure$name + '.m4r');
      $receiver.type = 'audio/x-m4r';
      return Unit;
    };
  }
  function Sounds$Companion$load$createAudio$lambda$lambda_1(closure$cd, this$) {
    return function (it) {
      closure$cd.complete_11rb$(this$);
      return Unit;
    };
  }
  function Sounds$Companion$load$createAudio$lambda(closure$name, closure$cd) {
    return function ($receiver) {
      invoke(get_source($receiver), Sounds$Companion$load$createAudio$lambda$lambda(closure$name));
      invoke(get_source($receiver), Sounds$Companion$load$createAudio$lambda$lambda_0(closure$name));
      $receiver.load();
      listenOnce($receiver, 'canplay', Sounds$Companion$load$createAudio$lambda$lambda_1(closure$cd, $receiver));
      return Unit;
    };
  }
  function Sounds$Companion$load$createAudio(name) {
    var cd = CompletableDeferred();
    invoke(get_audio(document), Sounds$Companion$load$createAudio$lambda(name, cd));
    return cd;
  }
  function Coroutine$load($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$workAudio = void 0;
    this.local$restAudio = void 0;
  }
  Coroutine$load.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$load.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$load.prototype.constructor = Coroutine$load;
  Coroutine$load.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var createAudio = Sounds$Companion$load$createAudio;
            var prepareAudio = createAudio('exquisite');
            this.local$workAudio = createAudio('definite');
            this.local$restAudio = createAudio('not-bad');
            this.state_0 = 2;
            this.result_0 = prepareAudio.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$workAudio.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$restAudio.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return new Sounds(this.local$tmp$, this.local$tmp$_0, this.result_0);
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
  Sounds$Companion.prototype.load = function (continuation_0, suspended) {
    var instance = new Coroutine$load(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Sounds$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Sounds$Companion_instance = null;
  function Sounds$Companion_getInstance() {
    if (Sounds$Companion_instance === null) {
      new Sounds$Companion();
    }
    return Sounds$Companion_instance;
  }
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
  function ui$lambda$lambda$lambda$lambda$lambda_2(this$ui) {
    return function ($receiver) {
      return this$ui.model.sounds.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_3(this$ui) {
    return function ($receiver) {
      return !this$ui.model.sounds.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_4(it) {
    return !it;
  }
  function ui$lambda$lambda$lambda$lambda_2(this$ui) {
    return function () {
      this$ui.model.sounds.rxv.transform_ru8m0w$(ui$lambda$lambda$lambda$lambda$lambda_4);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda(it) {
    return it.toString();
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_0(str) {
    var double = toDouble(str);
    var int = numberToInt(double);
    if (!(int === double)) {
      var message = 'Must be round number.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (!(int >= 0)) {
      var message_0 = 'Cannot be negative.';
      throw IllegalArgumentException_init(message_0.toString());
    }
    return int;
  }
  function ui$lambda$lambda$lambda$lambda$number(this$, this$ui) {
    return function (labelString, source) {
      var $receiver = get_insert_0(this$).formGroup;
      var this$ui_0 = this$ui;
      remAssign($receiver.label, labelString);
      var $receiver_0 = $receiver.input;
      $receiver_0.node.type = 'number';
      this$ui_0.bind_4dd4yj$($receiver_0, source, ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda, ui$lambda$lambda$lambda$lambda$number$lambda$lambda$lambda_0);
    };
  }
  function ui$lambda$lambda$lambda$lambda_3(this$ui) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      var number = ui$lambda$lambda$lambda$lambda$number($receiver, this$ui);
      number('Work (seconds)', this$ui.model.work.rxv);
      number('Rest (seconds)', this$ui.model.rest.rxv);
      number('Initial delay (seconds)', this$ui.model.delay.rxv);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_5(this$ui) {
    return function ($receiver) {
      return this$ui.bindings.canSave.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_6(this$ui) {
    return function () {
      this$ui.startWorkout();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_2(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_dFlex($receiver_0);
      get_flexColumn($receiver_0);
      get_p1($receiver_0);
      invoke(get_form($receiver), ui$lambda$lambda$lambda$lambda_3(this$ui));
      var $receiver_1 = get_insert_0($receiver).button;
      var this$ui_0 = this$ui;
      var $receiver_2 = $receiver_1.cls;
      get_m1($receiver_2);
      flexFixedSize($receiver_2);
      get_btnPrimary($receiver_2);
      row($receiver_2);
      get_justifyContentCenter($receiver_2);
      var $receiver_3 = $receiver_1.icon;
      $receiver_3.x3;
      get_running($receiver_3.fa);
      this$ui_0.enabled_hlnvpg$($receiver_1, ui$lambda$lambda$lambda$lambda$lambda_5(this$ui_0));
      this$ui_0.click_9375ex$($receiver_1, ui$lambda$lambda$lambda$lambda$lambda_6(this$ui_0));
      return Unit;
    };
  }
  function ui_0($receiver) {
    var $receiver_0 = widget.factory.screen;
    var $receiver_1 = $receiver_0.topbar;
    invoke($receiver_1.title, ui$lambda$lambda$lambda_1);
    var $receiver_2 = $receiver_1.right.button;
    $receiver_2.m1p2;
    $receiver_2.secondary;
    var $receiver_3 = $receiver_2.insert.icon;
    $receiver_3.fw;
    get_volumeUp($receiver_3.fa);
    $receiver.visible_od9jl4$($receiver_3.svg, ui$lambda$lambda$lambda$lambda$lambda_2($receiver));
    var $receiver_4 = $receiver_2.insert.icon;
    $receiver_4.fw;
    get_volumeMute($receiver_4.fa);
    $receiver.visible_od9jl4$($receiver_4.svg, ui$lambda$lambda$lambda$lambda$lambda_3($receiver));
    $receiver.click_9375ex$($receiver_2, ui$lambda$lambda$lambda$lambda_2($receiver));
    invoke(get_insert($receiver_0.main).scrollPane.pane, ui$lambda$lambda$lambda_2($receiver));
    return $receiver_0.node;
  }
  function Coroutine$main$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
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
            return new Links(this.local$it);
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
  function main$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main() {
    LinksFactory.Companion.start_pbkrle$(void 0, main$lambda);
  }
  function LinksPath() {
  }
  LinksPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinksPath',
    interfaces: []
  };
  function Links(deps) {
    LinksFactory.call(this, deps.homeName);
    this.links_dggwvl$_0 = this;
    this.home_wgcxuz$_0 = this.root_7o50g$(Links$home$lambda(deps, this));
    this.clock_98q5z0$_0 = this.home.child_b2q6wh$(Links$clock$lambda).provideDelegate_n5byny$(this, Links$clock_metadata);
  }
  Object.defineProperty(Links.prototype, 'links', {
    get: function () {
      return this.links_dggwvl$_0;
    }
  });
  Object.defineProperty(Links.prototype, 'home', {
    get: function () {
      return this.home_wgcxuz$_0;
    }
  });
  var Links$clock_metadata = new PropertyMetadata('clock');
  Object.defineProperty(Links.prototype, 'clock', {
    get: function () {
      return this.clock_98q5z0$_0.getValue_lrcp0p$(this, Links$clock_metadata);
    }
  });
  function Coroutine$Links$home$lambda(closure$deps_0, this$Links_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$deps = closure$deps_0;
    this.local$this$Links = this$Links_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$home$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$home$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$home$lambda.prototype.constructor = Coroutine$Links$home$lambda;
  Coroutine$Links$home$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new Form(this.local$closure$deps.body, this.local$lnk, this.local$this$Links);
            this.local$closure$deps.body.hole.remAssign_9i7ztu$($receiver);
            return $receiver;
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
  function Links$home$lambda(closure$deps_0, this$Links_0) {
    return function (lnk_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$home$lambda(closure$deps_0, this$Links_0, lnk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Links$clock$lambda(form_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$form = form_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$clock$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$clock$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$clock$lambda.prototype.constructor = Coroutine$Links$clock$lambda;
  Coroutine$Links$clock$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$form.sounds(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            this.result_0 = keepAwake(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return forwarding(new Clock(this.local$form, this.local$lnk, this.local$tmp$, this.result_0), this.local$form);
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
  function Links$clock$lambda(form_0, lnk_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$clock$lambda(form_0, lnk_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  Links.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Links',
    interfaces: [LinksPath, LinksFactory]
  };
  var package$gymclock = _.gymclock || (_.gymclock = {});
  var package$clock = package$gymclock.clock || (package$gymclock.clock = {});
  package$clock.ClockPath = ClockPath;
  Clock.Phase = Clock$Phase;
  Clock.PhasePos = Clock$PhasePos;
  Clock.PhaseList = Clock$PhaseList;
  Clock.StartState = Clock$StartState;
  Clock.AnimationData = Clock$AnimationData;
  package$clock.Clock = Clock;
  package$clock.run_udbwl8$ = run;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$clock.ui_udbwl8$ = ui;
  var package$data = package$gymclock.data || (package$gymclock.data = {});
  Object.defineProperty(package$data, 'SettingsKey', {
    get: function () {
      return SettingsKey;
    }
  });
  package$data.Settings = Settings;
  package$data.loadModel_i7n0b6$ = loadModel;
  var package$form = package$gymclock.form || (package$gymclock.form = {});
  package$form.FormPath = FormPath;
  package$form.Form = Form;
  Object.defineProperty(Sounds, 'Companion', {
    get: Sounds$Companion_getInstance
  });
  package$form.Sounds = Sounds;
  package$form.ui_rpzng$ = ui_0;
  package$gymclock.main = main;
  package$gymclock.LinksPath = LinksPath;
  package$gymclock.Links = Links;
  Clock.prototype.get_backButton_tdhe4g$ = BackKillsUixApi.prototype.get_backButton_tdhe4g$;
  Clock.prototype.get_backButton_ihoiae$ = BackKillsUixApi.prototype.get_backButton_ihoiae$;
  Clock.prototype.backOnDelete_287e2$ = BackKillsUixApi.prototype.backOnDelete_287e2$;
  Form.prototype.bind_8y93tj$ = BindKillsApi.prototype.bind_8y93tj$;
  Form.prototype.bind_4dd4yj$ = BindKillsApi.prototype.bind_4dd4yj$;
  Form.prototype.bind_igb9j9$ = BindKillsApi.prototype.bind_igb9j9$;
  Form.prototype.get_clickActivate_tvm2vp$ = KillsUixApi.prototype.get_clickActivate_tvm2vp$;
  Form.prototype.get_clickToggle_tvm2vp$ = KillsUixApi.prototype.get_clickToggle_tvm2vp$;
  Form.prototype.click_4eku4n$ = KillsUixApi.prototype.click_4eku4n$;
  Form.prototype.click_9375ex$ = KillsUixApi.prototype.click_9375ex$;
  Form.prototype.click_512jbc$ = KillsUixApi.prototype.click_512jbc$;
  Form.prototype.click_3zaxtq$ = KillsUixApi.prototype.click_3zaxtq$;
  Form.prototype.click_ts68bh$ = KillsUixApi.prototype.click_ts68bh$;
  Form.prototype.signIn_tstgz9$ = KillsUixApi.prototype.signIn_tstgz9$;
  Form.prototype.signOut_tstgz9$ = KillsUixApi.prototype.signOut_tstgz9$;
  Form.prototype.fwd_e1fa5e$$default = LinkApi.prototype.fwd_e1fa5e$$default;
  Form.prototype.fwd_nnhkmr$$default = LinkApi.prototype.fwd_nnhkmr$$default;
  Form.prototype.fwd_e1fa5e$ = LinkApi.prototype.fwd_e1fa5e$;
  Form.prototype.fwd_nnhkmr$ = LinkApi.prototype.fwd_nnhkmr$;
  SettingsKey = 'gymclock-settings';
  main();
  Kotlin.defineModule('appsimake-gymclock', _);
  return _;
}(typeof this['appsimake-gymclock'] === 'undefined' ? {} : this['appsimake-gymclock'], kotlin, this['appsimake-commonui'], this['appsimake-commonshr'], this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-fontawesome'], this['kotlinx-coroutines-core']);

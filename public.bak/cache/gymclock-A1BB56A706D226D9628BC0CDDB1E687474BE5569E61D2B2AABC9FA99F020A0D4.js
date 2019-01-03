if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'gymclock'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'gymclock'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'gymclock'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'gymclock'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'gymclock'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'gymclock'.");
}
var gymclock = function (_, Kotlin, $module$common, $module$kotlinx_html_js) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var throwUPAE = Kotlin.throwUPAE;
  var Var = $module$common.rx.Var;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var res = $module$common.common.res_61zpoe$;
  var source = $module$kotlinx_html_js.kotlinx.html.source_73nwfk$;
  var audio = $module$kotlinx_html_js.kotlinx.html.js.audio_bbjfyk$;
  var source_0 = $module$kotlinx_html_js.kotlinx.html.source_bzm4az$;
  var video = $module$kotlinx_html_js.kotlinx.html.js.video_kpr04x$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var styles = $module$common.styles;
  var label = $module$kotlinx_html_js.kotlinx.html.js.label_uo7uay$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var throwCCE = Kotlin.throwCCE;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var input = $module$kotlinx_html_js.kotlinx.html.js.input_x8a5sv$;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var button = $module$kotlinx_html_js.kotlinx.html.js.button_yqfwmz$;
  var form = $module$kotlinx_html_js.kotlinx.html.js.form_cxki7s$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var obj = $module$common.common.obj_287e2$;
  function main(args) {
    Main_getInstance().run();
  }
  function Main() {
    Main_instance = this;
  }
  function Main$run$restart(closure$animationPanel) {
    return function () {
      (closure$animationPanel.v == null ? throwUPAE('animationPanel') : closure$animationPanel.v).style.animation = 'none';
      (closure$animationPanel.v == null ? throwUPAE('animationPanel') : closure$animationPanel.v).offsetHeight;
      (closure$animationPanel.v == null ? throwUPAE('animationPanel') : closure$animationPanel.v).style.animation = null;
    };
  }
  function Main$run$lambda(closure$config) {
    return function (it) {
      closure$config.sounds = it;
      return Unit;
    };
  }
  function Main$run$createAudio$lambda$lambda(closure$name) {
    return function ($receiver) {
      $receiver.src = res('audio/' + closure$name + '.mp3');
      $receiver.type = 'audio/mpeg';
      return Unit;
    };
  }
  function Main$run$createAudio$lambda$lambda_0(closure$name) {
    return function ($receiver) {
      $receiver.src = res('audio/' + closure$name + '.m4r');
      $receiver.type = 'audio/x-m4r';
      return Unit;
    };
  }
  function Main$run$createAudio$lambda(closure$name) {
    return function ($receiver) {
      source($receiver, void 0, Main$run$createAudio$lambda$lambda(closure$name));
      source($receiver, void 0, Main$run$createAudio$lambda$lambda_0(closure$name));
      return Unit;
    };
  }
  function Main$run$createAudio(name) {
    return audio(get_create(document), void 0, Main$run$createAudio$lambda(name));
  }
  function Main$run$replay($receiver) {
    $receiver.pause();
    $receiver.currentTime = 0.0;
    $receiver.play();
  }
  function Main$run$lambda_0(closure$sounds, closure$prepareAudio, closure$replay) {
    return function (sec) {
      if (closure$sounds.now) {
        if (1 <= sec && sec <= 3) {
          closure$replay(closure$prepareAudio);
        }
      }
      return Unit;
    };
  }
  function Main$run$stopCounter(closure$countInterval) {
    return function () {
      var tmp$;
      if ((tmp$ = closure$countInterval.v) != null) {
        var closure$countInterval_0 = closure$countInterval;
        window.clearInterval(tmp$);
        closure$countInterval_0.v = null;
      }
    };
  }
  function Main$run$restartCounter$lambda(closure$seconds) {
    return function () {
      closure$seconds.now = closure$seconds.now - 1 | 0;
      return Unit;
    };
  }
  function Main$run$restartCounter(closure$stopCounter, closure$seconds, closure$countInterval) {
    return function (value) {
      closure$stopCounter();
      closure$seconds.now = value;
      closure$countInterval.v = window.setInterval(Main$run$restartCounter$lambda(closure$seconds), 1000);
    };
  }
  function Main$run$lambda$addSourceToVideo$lambda(closure$mime, closure$base64) {
    return function ($receiver) {
      $receiver.src = 'data:' + closure$mime + ';base64,' + closure$base64;
      $receiver.type = closure$mime;
      return Unit;
    };
  }
  function Main$run$lambda$addSourceToVideo(this$) {
    return function (mime, base64) {
      source_0(this$, void 0, Main$run$lambda$addSourceToVideo$lambda(mime, base64));
    };
  }
  function Main$run$lambda_1($receiver) {
    $receiver.loop = true;
    var addSourceToVideo = Main$run$lambda$addSourceToVideo($receiver);
    addSourceToVideo('video/webm', 'GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA');
    addSourceToVideo('video/mp4', 'AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAG21kYXQAAAGzABAHAAABthADAowdbb9');
    return Unit;
  }
  function Main$run$stopTimers(closure$workTimeout, closure$restTimeout, closure$workInterval, closure$restInterval, closure$stopCounter) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      if ((tmp$ = closure$workTimeout.v) != null) {
        var closure$workTimeout_0 = closure$workTimeout;
        window.clearTimeout(tmp$);
        closure$workTimeout_0.v = null;
      }
      if ((tmp$_0 = closure$restTimeout.v) != null) {
        var closure$restTimeout_0 = closure$restTimeout;
        window.clearTimeout(tmp$_0);
        closure$restTimeout_0.v = null;
      }
      if ((tmp$_1 = closure$workInterval.v) != null) {
        var closure$workInterval_0 = closure$workInterval;
        window.clearInterval(tmp$_1);
        closure$workInterval_0.v = null;
      }
      if ((tmp$_2 = closure$restInterval.v) != null) {
        var closure$restInterval_0 = closure$restInterval;
        window.clearInterval(tmp$_2);
        closure$restInterval_0.v = null;
      }
      closure$stopCounter();
    };
  }
  function Main$run$startAnimation$lambda$lambda(closure$colorElement, closure$restart, closure$config, closure$restartCounter, closure$animationPanel, closure$sounds, closure$workAudio, closure$replay) {
    return function () {
      removeClass(closure$colorElement, ['bg-warning']);
      addClass(closure$colorElement, ['bg-success']);
      closure$restart();
      closure$restartCounter(closure$config.work);
      (closure$animationPanel.v == null ? throwUPAE('animationPanel') : closure$animationPanel.v).style.animationDuration = closure$config.work.toString() + 's';
      if (closure$sounds.now) {
        closure$replay(closure$workAudio);
      }
      return Unit;
    };
  }
  function Main$run$startAnimation$lambda(closure$colorElement, closure$restart, closure$config, closure$restartCounter, closure$animationPanel, closure$sounds, closure$workAudio, closure$replay, closure$period, closure$workInterval) {
    return function () {
      var h = Main$run$startAnimation$lambda$lambda(closure$colorElement, closure$restart, closure$config, closure$restartCounter, closure$animationPanel, closure$sounds, closure$workAudio, closure$replay);
      h();
      closure$workInterval.v = window.setInterval(h, closure$period * 1000 | 0);
      return Unit;
    };
  }
  function Main$run$startAnimation$lambda$lambda_0(closure$colorElement, closure$restart, closure$config, closure$restartCounter, closure$animationPanel, closure$sounds, closure$restAudio, closure$replay) {
    return function () {
      addClass(closure$colorElement, ['bg-warning']);
      removeClass(closure$colorElement, ['bg-success']);
      closure$restart();
      closure$restartCounter(closure$config.rest);
      (closure$animationPanel.v == null ? throwUPAE('animationPanel') : closure$animationPanel.v).style.animationDuration = closure$config.rest.toString() + 's';
      if (closure$sounds.now) {
        closure$replay(closure$restAudio);
      }
      return Unit;
    };
  }
  function Main$run$startAnimation$lambda_0(closure$colorElement, closure$restart, closure$config, closure$restartCounter, closure$animationPanel, closure$sounds, closure$restAudio, closure$replay, closure$period, closure$restInterval) {
    return function () {
      var h = Main$run$startAnimation$lambda$lambda_0(closure$colorElement, closure$restart, closure$config, closure$restartCounter, closure$animationPanel, closure$sounds, closure$restAudio, closure$replay);
      h();
      closure$restInterval.v = window.setInterval(h, closure$period * 1000 | 0);
      return Unit;
    };
  }
  function Main$run$startAnimation(closure$config, closure$video, closure$animationPanel, closure$stopTimers, closure$restartCounter, closure$restart, closure$sounds, closure$workAudio, closure$replay, closure$workInterval, closure$workTimeout, closure$restAudio, closure$restInterval, closure$restTimeout) {
    return function () {
      window.localStorage.setItem('gymclock', JSON.stringify(closure$config));
      closure$video.play();
      var colorElement = ensureNotNull((closure$animationPanel.v == null ? throwUPAE('animationPanel') : closure$animationPanel.v).parentElement);
      removeClass(colorElement, ['bg-success']);
      addClass(colorElement, ['bg-warning']);
      (closure$animationPanel.v == null ? throwUPAE('animationPanel') : closure$animationPanel.v).style.animationDuration = closure$config.delay.toString() + 's';
      var period = closure$config.rest + closure$config.work | 0;
      closure$stopTimers();
      closure$restartCounter(closure$config.delay);
      closure$workTimeout.v = window.setTimeout(Main$run$startAnimation$lambda(colorElement, closure$restart, closure$config, closure$restartCounter, closure$animationPanel, closure$sounds, closure$workAudio, closure$replay, period, closure$workInterval), closure$config.delay * 1000 | 0);
      closure$restTimeout.v = window.setTimeout(Main$run$startAnimation$lambda_0(colorElement, closure$restart, closure$config, closure$restartCounter, closure$animationPanel, closure$sounds, closure$restAudio, closure$replay, period, closure$restInterval), (closure$config.delay + closure$config.work | 0) * 1000 | 0);
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.attributes.put_xwzc9p$('for', 'work');
    $receiver.unaryPlus_pdl1vz$('Work (seconds)');
    return Unit;
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda$lambda(closure$config) {
    return function (it) {
      var tmp$;
      closure$config.work = toInt(typeof (tmp$ = ensureNotNull(it.target).value) === 'string' ? tmp$ : throwCCE());
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda_0(closure$config) {
    return function ($receiver) {
      set_id($receiver, 'work');
      $receiver.value = closure$config.work.toString();
      set_onChangeFunction($receiver, Main$run$lambda$lambda$lambda$lambda$lambda$lambda(closure$config));
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda(this$, closure$config) {
    return function ($receiver) {
      label(this$, void 0, Main$run$lambda$lambda$lambda$lambda$lambda);
      input(this$, InputType.number, void 0, void 0, void 0, 'form-control', Main$run$lambda$lambda$lambda$lambda$lambda_0(closure$config));
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.attributes.put_xwzc9p$('for', 'rest');
    $receiver.unaryPlus_pdl1vz$('Rest (seconds)');
    return Unit;
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$config) {
    return function (it) {
      var tmp$;
      closure$config.rest = toInt(typeof (tmp$ = ensureNotNull(it.target).value) === 'string' ? tmp$ : throwCCE());
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda_2(closure$config) {
    return function ($receiver) {
      set_id($receiver, 'rest');
      $receiver.value = closure$config.rest.toString();
      set_onChangeFunction($receiver, Main$run$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$config));
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda_0(this$, closure$config) {
    return function ($receiver) {
      label(this$, void 0, Main$run$lambda$lambda$lambda$lambda$lambda_1);
      input(this$, InputType.number, void 0, void 0, void 0, 'form-control', Main$run$lambda$lambda$lambda$lambda$lambda_2(closure$config));
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.attributes.put_xwzc9p$('for', 'delay');
    $receiver.unaryPlus_pdl1vz$('Delay (seconds)');
    return Unit;
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$config) {
    return function (it) {
      var tmp$;
      closure$config.delay = toInt(typeof (tmp$ = ensureNotNull(it.target).value) === 'string' ? tmp$ : throwCCE());
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda_4(closure$config) {
    return function ($receiver) {
      set_id($receiver, 'delay');
      $receiver.value = closure$config.delay.toString();
      set_onChangeFunction($receiver, Main$run$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$config));
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda_1(this$, closure$config) {
    return function ($receiver) {
      label(this$, void 0, Main$run$lambda$lambda$lambda$lambda$lambda_3);
      input(this$, InputType.number, void 0, void 0, void 0, 'form-control', Main$run$lambda$lambda$lambda$lambda$lambda_4(closure$config));
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$sounds) {
    return function (it) {
      var tmp$;
      closure$sounds.now = typeof (tmp$ = ensureNotNull(it.target).checked) === 'boolean' ? tmp$ : throwCCE();
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda_5(closure$config, closure$sounds) {
    return function ($receiver) {
      var tmp$;
      set_id($receiver, 'sounds');
      $receiver.checked = (tmp$ = closure$config.sounds) != null ? tmp$ : true;
      set_onClickFunction($receiver, Main$run$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$sounds));
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$chk) {
    return function (it) {
      closure$chk.checked = it;
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.attributes.put_xwzc9p$('for', 'sounds');
    $receiver.unaryPlus_pdl1vz$('Sounds');
    return Unit;
  }
  function Main$run$lambda$lambda$lambda$lambda_2(closure$config, closure$sounds, this$) {
    return function ($receiver) {
      var $receiver_0 = input(this$, InputType.checkBox, void 0, void 0, void 0, 'form-check-input', Main$run$lambda$lambda$lambda$lambda$lambda_5(closure$config, closure$sounds));
      closure$sounds.forEach_qlkmfe$(Main$run$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver_0));
      label(this$, 'form-check-label', Main$run$lambda$lambda$lambda$lambda$lambda_6);
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda_7(closure$settingsForm, closure$clockPanel, closure$startAnimation) {
    return function (it) {
      addClass(closure$settingsForm.v == null ? throwUPAE('settingsForm') : closure$settingsForm.v, ['d-none']);
      removeClass(closure$clockPanel.v == null ? throwUPAE('clockPanel') : closure$clockPanel.v, ['d-none']);
      closure$startAnimation();
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda_3(closure$settingsForm, closure$clockPanel, closure$startAnimation) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Start!');
      set_onClickFunction($receiver, Main$run$lambda$lambda$lambda$lambda$lambda_7(closure$settingsForm, closure$clockPanel, closure$startAnimation));
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda(this$, closure$config, closure$sounds, closure$settingsForm, closure$clockPanel, closure$startAnimation) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      div(this$, 'form-group', Main$run$lambda$lambda$lambda$lambda(this$, closure$config));
      div(this$, 'form-group', Main$run$lambda$lambda$lambda$lambda_0(this$, closure$config));
      div(this$, 'form-group', Main$run$lambda$lambda$lambda$lambda_1(this$, closure$config));
      div(this$, 'form-group form-check', Main$run$lambda$lambda$lambda$lambda_2(closure$config, closure$sounds, this$));
      tmp$ = ButtonType.button;
      tmp$_0 = Main$run$lambda$lambda$lambda$lambda_3(closure$settingsForm, closure$clockPanel, closure$startAnimation);
      button(this$, void 0, void 0, void 0, tmp$, 'btn btn-primary w-100', tmp$_0);
      return Unit;
    };
  }
  function Main$run$lambda$lambda(this$, closure$config, closure$sounds, closure$settingsForm, closure$clockPanel, closure$startAnimation) {
    return function ($receiver) {
      form(this$, void 0, void 0, void 0, 'p-2', Main$run$lambda$lambda$lambda(this$, closure$config, closure$sounds, closure$settingsForm, closure$clockPanel, closure$startAnimation));
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$video, closure$stopTimers, closure$settingsForm, closure$clockPanel) {
    return function (it) {
      closure$video.pause();
      closure$stopTimers();
      removeClass(closure$settingsForm.v == null ? throwUPAE('settingsForm') : closure$settingsForm.v, ['d-none']);
      addClass(closure$clockPanel.v == null ? throwUPAE('clockPanel') : closure$clockPanel.v, ['d-none']);
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda_8(closure$video, closure$stopTimers, closure$settingsForm, closure$clockPanel) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Back');
      set_onClickFunction($receiver, Main$run$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$video, closure$stopTimers, closure$settingsForm, closure$clockPanel));
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    set_id($receiver, 'runningSounds');
    return Unit;
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$cb) {
    return function (it) {
      closure$cb.checked = it;
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    var $receiver_0 = $receiver.attributes;
    var value = 'runningSounds';
    $receiver_0.put_xwzc9p$('for', value);
    $receiver.unaryPlus_pdl1vz$('Sounds');
    return Unit;
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda$lambda_5(this$, closure$sounds) {
    return function ($receiver) {
      var $receiver_0 = input(this$, InputType.checkBox, void 0, void 0, void 0, 'form-check-input', Main$run$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      closure$sounds.forEach_qlkmfe$(Main$run$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver_0));
      label(this$, 'form-check-label', Main$run$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$sounds) {
    return function (it) {
      closure$sounds.now = !closure$sounds.now;
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda_9(this$, closure$sounds) {
    return function ($receiver) {
      div(this$, 'form-check ' + styles.pointerEventsNone, Main$run$lambda$lambda$lambda$lambda$lambda$lambda_5(this$, closure$sounds));
      set_onClickFunction($receiver, Main$run$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$sounds));
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda_4(closure$video, closure$stopTimers, closure$settingsForm, closure$clockPanel, this$, closure$sounds) {
    return function ($receiver) {
      button(this$, void 0, void 0, void 0, ButtonType.button, 'btn btn-light', Main$run$lambda$lambda$lambda$lambda$lambda_8(closure$video, closure$stopTimers, closure$settingsForm, closure$clockPanel));
      div(this$, 'flex-grow-1');
      button(this$, void 0, void 0, void 0, ButtonType.button, 'btn btn-light', Main$run$lambda$lambda$lambda$lambda$lambda_9(this$, closure$sounds));
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    return Unit;
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    return Unit;
  }
  function Main$run$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$div) {
    return function (it) {
      closure$div.innerText = it.toString();
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda$lambda_5(this$, closure$animationPanel, closure$seconds) {
    return function ($receiver) {
      closure$animationPanel.v = div(this$, 'bg-light w-100 position-absolute clock', Main$run$lambda$lambda$lambda$lambda$lambda_10);
      var $receiver_0 = div(this$, 'seconds', Main$run$lambda$lambda$lambda$lambda$lambda_11);
      closure$seconds.forEach_qlkmfe$(Main$run$lambda$lambda$lambda$lambda$lambda$lambda_7($receiver_0));
      return Unit;
    };
  }
  function Main$run$lambda$lambda$lambda_0(closure$video, closure$stopTimers, closure$settingsForm, closure$clockPanel, this$, closure$sounds, closure$animationPanel, closure$seconds) {
    return function ($receiver) {
      div(this$, 'bg-secondary p-2 border-bottom d-flex flex-row align-items-stretch', Main$run$lambda$lambda$lambda$lambda_4(closure$video, closure$stopTimers, closure$settingsForm, closure$clockPanel, this$, closure$sounds));
      div(this$, 'flex-grow-1 bg-warning position-relative', Main$run$lambda$lambda$lambda$lambda_5(this$, closure$animationPanel, closure$seconds));
      return Unit;
    };
  }
  function Main$run$lambda$lambda_0(closure$video, closure$stopTimers, closure$settingsForm, closure$clockPanel, this$, closure$sounds, closure$animationPanel, closure$seconds) {
    return function ($receiver) {
      div(this$, 'w-100 h-100 d-flex flex-column', Main$run$lambda$lambda$lambda_0(closure$video, closure$stopTimers, closure$settingsForm, closure$clockPanel, this$, closure$sounds, closure$animationPanel, closure$seconds));
      return Unit;
    };
  }
  function Main$run$lambda_2(closure$config, closure$sounds, closure$settingsForm, closure$clockPanel, closure$startAnimation, closure$video, closure$stopTimers, closure$animationPanel, closure$seconds) {
    return function ($receiver) {
      closure$settingsForm.v = div($receiver, 'w-100 h-100 ' + styles.scrollVertical, Main$run$lambda$lambda($receiver, closure$config, closure$sounds, closure$settingsForm, closure$clockPanel, closure$startAnimation));
      closure$clockPanel.v = div($receiver, 'd-none w-100 h-100', Main$run$lambda$lambda_0(closure$video, closure$stopTimers, closure$settingsForm, closure$clockPanel, $receiver, closure$sounds, closure$animationPanel, closure$seconds));
      return Unit;
    };
  }
  Main.prototype.run = function () {
    var tmp$, tmp$_0, tmp$_1;
    var tmp$_2;
    if ((tmp$_0 = (tmp$ = window.localStorage.getItem('gymclock')) != null ? JSON.parse(tmp$) : null) != null)
      tmp$_2 = tmp$_0;
    else {
      var $receiver = Config();
      $receiver.rest = 20;
      $receiver.work = 40;
      $receiver.delay = 3;
      $receiver.sounds = true;
      tmp$_2 = $receiver;
    }
    var config = tmp$_2;
    var settingsForm = {v: null};
    var clockPanel = {v: null};
    var animationPanel = {v: null};
    var workTimeout = {v: null};
    var restTimeout = {v: null};
    var workInterval = {v: null};
    var restInterval = {v: null};
    var countInterval = {v: null};
    var restart = Main$run$restart(animationPanel);
    var seconds = new Var(0);
    var sounds = new Var((tmp$_1 = config.sounds) != null ? tmp$_1 : true);
    sounds.forEach_qlkmfe$(Main$run$lambda(config));
    var createAudio = Main$run$createAudio;
    var prepareAudio = createAudio('exquisite');
    var workAudio = createAudio('definite');
    var restAudio = createAudio('not-bad');
    var replay = Main$run$replay;
    seconds.forEach_qlkmfe$(Main$run$lambda_0(sounds, prepareAudio, replay));
    var stopCounter = Main$run$stopCounter(countInterval);
    var restartCounter = Main$run$restartCounter(stopCounter, seconds, countInterval);
    var video_0 = video(get_create(document), void 0, Main$run$lambda_1);
    var stopTimers = Main$run$stopTimers(workTimeout, restTimeout, workInterval, restInterval, stopCounter);
    var startAnimation = Main$run$startAnimation(config, video_0, animationPanel, stopTimers, restartCounter, restart, sounds, workAudio, replay, workInterval, workTimeout, restAudio, restInterval, restTimeout);
    append(ensureNotNull(document.body), Main$run$lambda_2(config, sounds, settingsForm, clockPanel, startAnimation, video_0, stopTimers, animationPanel, seconds));
  };
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
  function Config() {
    return obj();
  }
  var package$gymclock = _.gymclock || (_.gymclock = {});
  package$gymclock.main_kand9s$ = main;
  Object.defineProperty(package$gymclock, 'Main', {
    get: Main_getInstance
  });
  package$gymclock.Config = Config;
  main([]);
  Kotlin.defineModule('gymclock', _);
  return _;
}(typeof gymclock === 'undefined' ? {} : gymclock, kotlin, common, this['kotlinx-html-js']);

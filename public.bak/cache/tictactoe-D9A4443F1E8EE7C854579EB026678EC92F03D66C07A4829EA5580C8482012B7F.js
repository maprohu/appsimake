if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'tictactoe'.");
}
if (typeof bootstrap === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'bootstrap' was not found. Please, check whether 'bootstrap' is loaded prior to 'tictactoe'.");
}
if (typeof domx === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'domx' was not found. Please, check whether 'domx' is loaded prior to 'tictactoe'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'tictactoe'.");
}
if (typeof firebase === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'firebase' was not found. Please, check whether 'firebase' is loaded prior to 'tictactoe'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'tictactoe'.");
}
if (typeof commonfb === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'commonfb' was not found. Please, check whether 'commonfb' is loaded prior to 'tictactoe'.");
}
if (typeof commonui === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'commonui' was not found. Please, check whether 'commonui' is loaded prior to 'tictactoe'.");
}
var tictactoe = function (_, Kotlin, $module$bootstrap, $module$domx, $module$common, $module$firebase, $module$kotlinx_coroutines_core, $module$commonfb, $module$commonui) {
  'use strict';
  var flexCenter = $module$bootstrap.bootstrap.flexCenter_ejp6nk$;
  var margin1 = $module$bootstrap.bootstrap.margin1_ejp6nk$;
  var Unit = Kotlin.kotlin.Unit;
  var h1 = $module$domx.domx.h1_4vw2t7$;
  var obj = $module$common.common.obj_7qq44f$;
  var setOptionsMerge = $module$firebase.firebase.firestore.setOptionsMerge;
  var clickEvent = $module$domx.domx.clickEvent_bvfv80$;
  var btnButton = $module$bootstrap.bootstrap.btnButton_9ztatb$;
  var State = $module$common.common.State;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var Random = Kotlin.kotlin.random.Random;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var asPromise = $module$kotlinx_coroutines_core.kotlinx.coroutines.asPromise_ge6odz$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var get_typeEnum = $module$firebase.firebase.firestore.get_typeEnum_samrru$;
  var DocumentChangeType = $module$firebase.firebase.firestore.DocumentChangeType;
  var equals = Kotlin.equals;
  var onSnapshotNext = $module$firebase.firebase.firestore.onSnapshotNext_o3477o$;
  var obj_0 = $module$common.common.obj_287e2$;
  var Killables = $module$common.killable.Killables;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var tx = $module$firebase.firebase.firestore.tx_81x6o2$;
  var LoggedInCtx = $module$commonfb.commonfb.LoggedInCtx;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Emitter = $module$common.common.Emitter;
  var Var = $module$common.rx.Var;
  var Rx_init = $module$common.rx.Rx_init_klfg04$;
  var line = $module$domx.svgx.line_lr0x44$;
  var g = $module$domx.svgx.g_5dzvjl$;
  var circle = $module$domx.svgx.circle_nmh8i0$;
  var rxHover = $module$common.rx.rxHover_st2z1u$;
  var rect = $module$domx.svgx.rect_bfker8$;
  var a = $module$domx.svgx.a_lzuxbr$;
  var set = $module$domx.domx.set_56wq3j$;
  var svg = $module$domx.svgx.svg_veu7ak$;
  var flex = $module$bootstrap.bootstrap.flex_ejp6nk$;
  var flexGrow1 = $module$bootstrap.bootstrap.flexGrow1_ejp6nk$;
  var padding2 = $module$bootstrap.bootstrap.padding2_ejp6nk$;
  var resizeEvent = $module$common.common.resizeEvent_5ehnu1$;
  var rxClass = $module$common.rx.rxClass_jgfmsn$;
  var get_classes = $module$domx.domx.get_classes_ejp6nk$;
  var styles = $module$domx.styles;
  var div = $module$domx.domx.div_gnmiz0$;
  var border = $module$bootstrap.bootstrap.border_ejp6nk$;
  var column = $module$bootstrap.bootstrap.column_gnmiz0$;
  var bgLight = $module$bootstrap.bootstrap.bgLight_ejp6nk$;
  var borderTop = $module$bootstrap.bootstrap.borderTop_ejp6nk$;
  var flexFixedSize = $module$bootstrap.bootstrap.flexFixedSize_ejp6nk$;
  var padding1 = $module$bootstrap.bootstrap.padding1_ejp6nk$;
  var span = $module$domx.domx.span_c7xqcp$;
  var row = $module$bootstrap.bootstrap.row_gnmiz0$;
  var rxText = $module$bootstrap.bootstrap.rxText_7fncnf$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_gexuht$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var takeWhile = Kotlin.kotlin.sequences.takeWhile_euau3h$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var orderBy = $module$firebase.firebase.firestore.orderBy_pn31r1$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var getKClass = Kotlin.getKClass;
  var wrapper = $module$common.common.wrapper_giuhum$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Wrap = $module$common.common.Wrap;
  var borderBottom = $module$bootstrap.bootstrap.borderBottom_ejp6nk$;
  var btnSecondary = $module$bootstrap.bootstrap.btnSecondary_ejp6nk$;
  var RootPanel = $module$commonui.commonui.RootPanel;
  var throwUPAE = Kotlin.throwUPAE;
  var StateMachine = $module$common.common.StateMachine;
  var LoggingInCtx_init = $module$commonfb.commonfb.LoggingInCtx_init_61zpoe$;
  var LoggingInCtx = $module$commonfb.commonfb.LoggingInCtx;
  var alignItemsCenter = $module$bootstrap.bootstrap.alignItemsCenter_ejp6nk$;
  var paddingRight2 = $module$bootstrap.bootstrap.paddingRight2_ejp6nk$;
  var textarea = $module$domx.domx.textarea_vbubjb$;
  var removeFromParent = $module$common.common.removeFromParent_asww5s$;
  LoggedInState.prototype = Object.create(State.prototype);
  LoggedInState.prototype.constructor = LoggedInState;
  PlayerStateUnknown.prototype = Object.create(LoggedInState.prototype);
  PlayerStateUnknown.prototype.constructor = PlayerStateUnknown;
  PlayerInactive.prototype = Object.create(LoggedInState.prototype);
  PlayerInactive.prototype.constructor = PlayerInactive;
  PlayerActiveWaiting.prototype = Object.create(LoggedInState.prototype);
  PlayerActiveWaiting.prototype.constructor = PlayerActiveWaiting;
  StartPlayingState.prototype = Object.create(LoggedInState.prototype);
  StartPlayingState.prototype.constructor = StartPlayingState;
  Orientation.prototype = Object.create(Enum.prototype);
  Orientation.prototype.constructor = Orientation;
  FieldState.prototype = Object.create(Enum.prototype);
  FieldState.prototype.constructor = FieldState;
  Mark.prototype = Object.create(Enum.prototype);
  Mark.prototype.constructor = Mark;
  Turn.prototype = Object.create(Enum.prototype);
  Turn.prototype.constructor = Turn;
  Party.prototype = Object.create(Enum.prototype);
  Party.prototype.constructor = Party;
  MarkState.prototype = Object.create(Enum.prototype);
  MarkState.prototype.constructor = MarkState;
  Move.prototype = Object.create(Wrap.prototype);
  Move.prototype.constructor = Move;
  Placement.prototype = Object.create(Move.prototype);
  Placement.prototype.constructor = Placement;
  Leave.prototype = Object.create(Move.prototype);
  Leave.prototype.constructor = Leave;
  TicTacToeLoggedOutControl.prototype = Object.create(LoggingInCtx.prototype);
  TicTacToeLoggedOutControl.prototype.constructor = TicTacToeLoggedOutControl;
  function inactiveUI$lambda$lambda($receiver) {
    margin1($receiver);
    $receiver.innerText = 'Tic Tac Toe';
    return Unit;
  }
  function inactiveUI$lambda$lambda$lambda$lambda($receiver) {
    $receiver.active = true;
    return Unit;
  }
  function inactiveUI$lambda$lambda$lambda(this$inactiveUI) {
    return function (it) {
      this$inactiveUI.control.playerRef.set(obj(inactiveUI$lambda$lambda$lambda$lambda), setOptionsMerge());
      return Unit;
    };
  }
  function inactiveUI$lambda$lambda_0(this$inactiveUI) {
    return function ($receiver) {
      margin1($receiver);
      $receiver.innerText = 'Enter Waiting Room';
      clickEvent($receiver, inactiveUI$lambda$lambda$lambda(this$inactiveUI));
      return Unit;
    };
  }
  function inactiveUI$lambda(this$inactiveUI) {
    return function ($receiver) {
      flexCenter($receiver);
      h1($receiver, inactiveUI$lambda$lambda);
      btnButton($receiver, inactiveUI$lambda$lambda_0(this$inactiveUI));
      return Unit;
    };
  }
  function inactiveUI($receiver) {
    $receiver.control.appCtx.root.newRoot_iw61es$(inactiveUI$lambda($receiver));
  }
  function LoggedInState(control) {
    State.call(this);
    this.control = control;
  }
  LoggedInState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedInState',
    interfaces: [State]
  };
  function PlayerStateUnknown(control) {
    LoggedInState.call(this, control);
  }
  PlayerStateUnknown.prototype.process_11rb$ = function (input) {
    var tmp$;
    if (input == null) {
      this.control.createPlayer();
      tmp$ = null;
    }
     else if (input.game != null)
      tmp$ = new StartPlayingState(this.control, ensureNotNull(input.game));
    else if (!input.active)
      tmp$ = new PlayerInactive(this.control);
    else
      tmp$ = new PlayerActiveWaiting(this.control);
    return tmp$;
  };
  PlayerStateUnknown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerStateUnknown',
    interfaces: [LoggedInState]
  };
  function PlayerInactive(control) {
    LoggedInState.call(this, control);
  }
  function PlayerInactive$enter$lambda() {
    return Unit;
  }
  PlayerInactive.prototype.enter = function () {
    inactiveUI(this);
    return PlayerInactive$enter$lambda;
  };
  PlayerInactive.prototype.process_11rb$ = function (input) {
    var tmp$;
    if (input == null) {
      this.control.createPlayer();
      tmp$ = null;
    }
     else if (input.game != null)
      tmp$ = new StartPlayingState(this.control, ensureNotNull(input.game));
    else if (input.active)
      tmp$ = new PlayerActiveWaiting(this.control);
    else
      tmp$ = null;
    return tmp$;
  };
  PlayerInactive.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerInactive',
    interfaces: [LoggedInState]
  };
  function PlayerActiveWaiting(control) {
    LoggedInState.call(this, control);
  }
  function PlayerActiveWaiting$enter$lambda$lambda(this$PlayerActiveWaiting) {
    return function ($receiver) {
      $receiver.players = [this$PlayerActiveWaiting.control.playerId];
      return Unit;
    };
  }
  function PlayerActiveWaiting$enter$lambda$lambda$lambda$lambda$lambda(closure$ownGameRef) {
    return function ($receiver) {
      $receiver.active = false;
      $receiver.game = closure$ownGameRef.id;
      return Unit;
    };
  }
  function PlayerActiveWaiting$enter$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.merge = true;
    return Unit;
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function PlayerActiveWaiting$enter$lambda$lambda$lambda$lambda(closure$players) {
    return function ($receiver) {
      var $receiver_0 = closure$players;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(item.id);
      }
      $receiver.players = copyToArray(destination);
      $receiver.firstPlayer = Random.Default.nextInt_za3lpa$(2);
      return Unit;
    };
  }
  function PlayerActiveWaiting$enter$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.merge = true;
    return Unit;
  }
  function PlayerActiveWaiting$enter$lambda$lambda$lambda(this$PlayerActiveWaiting_0, closure$otherPlayerChange_0, closure$tx_0, closure$ownGameRef_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda(this$PlayerActiveWaiting_0, closure$otherPlayerChange_0, closure$tx_0, closure$ownGameRef_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda(this$PlayerActiveWaiting_0, closure$otherPlayerChange_0, closure$tx_0, closure$ownGameRef_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$PlayerActiveWaiting = this$PlayerActiveWaiting_0;
    this.local$closure$otherPlayerChange = closure$otherPlayerChange_0;
    this.local$closure$tx = closure$tx_0;
    this.local$closure$ownGameRef = closure$ownGameRef_0;
    this.local$tmp$ = void 0;
    this.local$playersFree = void 0;
    this.local$players = void 0;
  }
  Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda.prototype.constructor = Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda;
  Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$playersFree = true;
            this.local$players = [this.local$this$PlayerActiveWaiting.control.playerRef, this.local$closure$otherPlayerChange.doc.ref];
            this.local$tmp$ = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$tmp$ === this.local$players.length) {
              this.state_0 = 6;
              continue;
            }

            var player = this.local$players[this.local$tmp$];
            this.state_0 = 3;
            this.result_0 = await_0(this.local$closure$tx.get(player), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var ds = this.result_0;
            var tmp$ = !ds.exists;
            if (!tmp$) {
              var it = ds.data();
              tmp$ = !it.active || it.game != null;
            }

            if (tmp$) {
              this.local$playersFree = false;
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            ++this.local$tmp$;
            this.state_0 = 2;
            continue;
          case 6:
            if (this.local$playersFree) {
              var tmp$_0;
              for (tmp$_0 = 0; tmp$_0 !== this.local$players.length; ++tmp$_0) {
                var element = this.local$players[tmp$_0];
                this.local$closure$tx.set(element, obj(PlayerActiveWaiting$enter$lambda$lambda$lambda$lambda$lambda(this.local$closure$ownGameRef)), obj(PlayerActiveWaiting$enter$lambda$lambda$lambda$lambda$lambda_0));
              }
              this.local$closure$tx.set(this.local$closure$ownGameRef, obj(PlayerActiveWaiting$enter$lambda$lambda$lambda$lambda(this.local$players)), obj(PlayerActiveWaiting$enter$lambda$lambda$lambda$lambda_0));
            }

            return this.local$playersFree;
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
  function PlayerActiveWaiting$enter$lambda$lambda_0(this$PlayerActiveWaiting, closure$otherPlayerChange, closure$ownGameRef) {
    return function (tx) {
      return asPromise(async(coroutines.GlobalScope, void 0, void 0, PlayerActiveWaiting$enter$lambda$lambda$lambda(this$PlayerActiveWaiting, closure$otherPlayerChange, tx, closure$ownGameRef)));
    };
  }
  function PlayerActiveWaiting$enter$lambda(this$PlayerActiveWaiting_0, closure$channel_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$PlayerActiveWaiting$enter$lambda(this$PlayerActiveWaiting_0, closure$channel_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerActiveWaiting$enter$lambda(this$PlayerActiveWaiting_0, closure$channel_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$PlayerActiveWaiting = this$PlayerActiveWaiting_0;
    this.local$closure$channel = closure$channel_0;
    this.local$tmp$ = void 0;
    this.local$ownGameRef = void 0;
  }
  Coroutine$PlayerActiveWaiting$enter$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PlayerActiveWaiting$enter$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PlayerActiveWaiting$enter$lambda.prototype.constructor = Coroutine$PlayerActiveWaiting$enter$lambda;
  Coroutine$PlayerActiveWaiting$enter$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$PlayerActiveWaiting.control.mainCtx.gamesRef.add(obj(PlayerActiveWaiting$enter$lambda$lambda(this.local$this$PlayerActiveWaiting))), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$ownGameRef = this.result_0;
            this.local$tmp$ = this.local$closure$channel.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            if (!this.result_0) {
              this.state_0 = 9;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 6;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var otherPlayerChange = this.result_0;
            this.state_0 = 7;
            this.result_0 = await_0(this.local$this$PlayerActiveWaiting.control.fbCtx.db.runTransaction(PlayerActiveWaiting$enter$lambda$lambda_0(this.local$this$PlayerActiveWaiting, otherPlayerChange, this.local$ownGameRef)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            var started = this.result_0;
            if (started) {
              this.state_0 = 9;
              continue;
            }
             else {
              this.state_0 = 8;
              continue;
            }

          case 8:
            this.state_0 = 3;
            continue;
          case 9:
            return Unit;
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
  function PlayerActiveWaiting$enter$lambda$lambda$lambda_0(closure$channel_0, closure$dc_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda_0(closure$channel_0, closure$dc_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda_0(closure$channel_0, closure$dc_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$dc = closure$dc_0;
  }
  Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda_0.prototype.constructor = Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda_0;
  Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$channel.send_11rb$(this.local$closure$dc, this);
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
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function PlayerActiveWaiting$enter$lambda_0(this$PlayerActiveWaiting, closure$channel) {
    return function (qs) {
      var $receiver = qs.docChanges();
      var destination = ArrayList_init_0();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var this$PlayerActiveWaiting_0 = this$PlayerActiveWaiting;
        if (get_typeEnum(element) === DocumentChangeType.added && !equals(element.doc.id, this$PlayerActiveWaiting_0.control.playerId))
          destination.add_11rb$(element);
      }
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var closure$channel_0 = closure$channel;
        launch(coroutines.GlobalScope, void 0, void 0, PlayerActiveWaiting$enter$lambda$lambda$lambda_0(closure$channel_0, element_0));
      }
      return Unit;
    };
  }
  function PlayerActiveWaiting$enter$lambda_1(closure$stopQuerying, closure$processingJob) {
    return function () {
      closure$stopQuerying();
      closure$processingJob.cancel();
      return Unit;
    };
  }
  PlayerActiveWaiting.prototype.enter = function () {
    waitingUI(this);
    this.control.cleanupGames();
    var channel = Channel();
    var processingJob = launch(coroutines.GlobalScope, void 0, void 0, PlayerActiveWaiting$enter$lambda(this, channel));
    var stopQuerying = onSnapshotNext(this.control.mainCtx.playersRef.where('active', '==', true).where('game', '==', null), PlayerActiveWaiting$enter$lambda_0(this, channel));
    return PlayerActiveWaiting$enter$lambda_1(stopQuerying, processingJob);
  };
  PlayerActiveWaiting.prototype.process_11rb$ = function (input) {
    var tmp$;
    if (input == null) {
      this.control.createPlayer();
      tmp$ = null;
    }
     else if (input.game != null)
      tmp$ = new StartPlayingState(this.control, ensureNotNull(input.game));
    else if (!input.active)
      tmp$ = new PlayerInactive(this.control);
    else
      tmp$ = null;
    return tmp$;
  };
  PlayerActiveWaiting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerActiveWaiting',
    interfaces: [LoggedInState]
  };
  function StartPlayingState(control, game) {
    LoggedInState.call(this, control);
    this.game_0 = game;
  }
  StartPlayingState.prototype.enter = function () {
    return this.control.startPlaying_61zpoe$(this.game_0);
  };
  StartPlayingState.prototype.process_11rb$ = function (input) {
    var tmp$;
    if (input == null) {
      this.control.createPlayer();
      tmp$ = new PlayerActiveWaiting(this.control);
    }
     else if (input.game == null && !input.active)
      tmp$ = new PlayerInactive(this.control);
    else if (input.game == null)
      tmp$ = new PlayerActiveWaiting(this.control);
    else if (!equals(input.game, this.game_0))
      tmp$ = new StartPlayingState(this.control, ensureNotNull(input.game));
    else
      tmp$ = null;
    return tmp$;
  };
  StartPlayingState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StartPlayingState',
    interfaces: [LoggedInState]
  };
  function MainCtx(fbCtx) {
    this.fbCtx = fbCtx;
    this.playersRef = this.fbCtx.baseRef.collection('players');
    this.gamesRef = this.fbCtx.baseRef.collection('games');
  }
  MainCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainCtx',
    interfaces: []
  };
  function PlayerCtx(mainCtx, loggedInCtx) {
    this.mainCtx = mainCtx;
    this.loggedInCtx = loggedInCtx;
    this.fbCtx = this.mainCtx.fbCtx;
    this.playerId = this.loggedInCtx.user.uid;
    this.appCtx = this.fbCtx.appCtx;
    this.db = this.fbCtx.db;
    this.playerRef = this.mainCtx.playersRef.doc(this.playerId);
  }
  PlayerCtx.prototype.newPlayer = function () {
    var $receiver = obj_0();
    $receiver.active = false;
    $receiver.game = null;
    return $receiver;
  };
  function PlayerCtx$cleanupGames$lambda(this$PlayerCtx_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$PlayerCtx$cleanupGames$lambda(this$PlayerCtx_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerCtx$cleanupGames$lambda(this$PlayerCtx_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$PlayerCtx = this$PlayerCtx_0;
  }
  Coroutine$PlayerCtx$cleanupGames$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PlayerCtx$cleanupGames$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PlayerCtx$cleanupGames$lambda.prototype.constructor = Coroutine$PlayerCtx$cleanupGames$lambda;
  Coroutine$PlayerCtx$cleanupGames$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$PlayerCtx.mainCtx.gamesRef.where('players', 'array-contains', this.local$this$PlayerCtx.playerId).get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.docs;
            var tmp$;
            for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
              var element = $receiver[tmp$];
              var this$PlayerCtx = this.local$this$PlayerCtx;
              console.dir(element);
              var gameRef = element.ref;
              this$PlayerCtx.cleanupGame_0(gameRef);
            }

            return Unit;
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
  PlayerCtx.prototype.cleanupGames = function () {
    launch(coroutines.GlobalScope, void 0, void 0, PlayerCtx$cleanupGames$lambda(this));
  };
  function PlayerCtx$deleteGameCollections$lambda(closure$gameRef_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$PlayerCtx$deleteGameCollections$lambda(closure$gameRef_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerCtx$deleteGameCollections$lambda(closure$gameRef_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$gameRef = closure$gameRef_0;
  }
  Coroutine$PlayerCtx$deleteGameCollections$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PlayerCtx$deleteGameCollections$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PlayerCtx$deleteGameCollections$lambda.prototype.constructor = Coroutine$PlayerCtx$deleteGameCollections$lambda;
  Coroutine$PlayerCtx$deleteGameCollections$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(moves(this.local$closure$gameRef).get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.docs;
            var tmp$;
            for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
              var element = $receiver[tmp$];
              element.ref.delete();
            }

            return Unit;
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
  PlayerCtx.prototype.deleteGameCollections_inmxie$ = function (gameRef) {
    launch(coroutines.GlobalScope, void 0, void 0, PlayerCtx$deleteGameCollections$lambda(gameRef));
  };
  function PlayerCtx$cleanupGame$lambda$lambda$lambda(closure$tx_0, closure$gameRef_0, this$PlayerCtx_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$PlayerCtx$cleanupGame$lambda$lambda$lambda(closure$tx_0, closure$gameRef_0, this$PlayerCtx_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerCtx$cleanupGame$lambda$lambda$lambda(closure$tx_0, closure$gameRef_0, this$PlayerCtx_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$tx = closure$tx_0;
    this.local$closure$gameRef = closure$gameRef_0;
    this.local$this$PlayerCtx = this$PlayerCtx_0;
    this.local$game = void 0;
  }
  Coroutine$PlayerCtx$cleanupGame$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PlayerCtx$cleanupGame$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PlayerCtx$cleanupGame$lambda$lambda$lambda.prototype.constructor = Coroutine$PlayerCtx$cleanupGame$lambda$lambda$lambda;
  Coroutine$PlayerCtx$cleanupGame$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = await_0(this.local$closure$tx.get(this.local$closure$gameRef), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$game = this.result_0;
            if (this.local$game.exists) {
              this.state_0 = 3;
              this.result_0 = await_0(this.local$closure$tx.get(this.local$this$PlayerCtx.playerRef), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              return false;
            }

          case 3:
            var player = this.result_0;
            if (player.exists) {
              tmp$ = player.data();
            }
             else {
              tmp$ = this.local$this$PlayerCtx.newPlayer();
            }

            var playerToWrite = tmp$;
            if (!equals(playerToWrite.game, this.local$game.ref.id)) {
              var gameData = this.local$game.data();
              var this$PlayerCtx = this.local$this$PlayerCtx;
              var $receiver = gameData.players;
              var destination = ArrayList_init_0();
              var tmp$_1;
              for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
                var element = $receiver[tmp$_1];
                if (!equals(element, this$PlayerCtx.playerId))
                  destination.add_11rb$(element);
              }
              gameData.players = copyToArray(destination);
              if (gameData.players.length === 0) {
                this.local$closure$tx.delete(this.local$game.ref);
                tmp$_0 = true;
              }
               else {
                this.local$closure$tx.update(this.local$game.ref, gameData);
                tmp$_0 = false;
              }
              var deleted = tmp$_0;
              this.local$closure$tx.set(this.local$this$PlayerCtx.playerRef, playerToWrite);
              return deleted;
            }
             else {
              return false;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
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
  function PlayerCtx$cleanupGame$lambda$lambda(closure$gameRef, this$PlayerCtx) {
    return function (tx) {
      return asPromise(async(coroutines.GlobalScope, void 0, void 0, PlayerCtx$cleanupGame$lambda$lambda$lambda(tx, closure$gameRef, this$PlayerCtx)));
    };
  }
  function PlayerCtx$cleanupGame$lambda(this$PlayerCtx_0, closure$gameRef_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$PlayerCtx$cleanupGame$lambda(this$PlayerCtx_0, closure$gameRef_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerCtx$cleanupGame$lambda(this$PlayerCtx_0, closure$gameRef_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$PlayerCtx = this$PlayerCtx_0;
    this.local$closure$gameRef = closure$gameRef_0;
  }
  Coroutine$PlayerCtx$cleanupGame$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PlayerCtx$cleanupGame$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PlayerCtx$cleanupGame$lambda.prototype.constructor = Coroutine$PlayerCtx$cleanupGame$lambda;
  Coroutine$PlayerCtx$cleanupGame$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$PlayerCtx.db.runTransaction(PlayerCtx$cleanupGame$lambda$lambda(this.local$closure$gameRef, this.local$this$PlayerCtx)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0;
            var closure$gameRef = this.local$closure$gameRef;
            var this$PlayerCtx = this.local$this$PlayerCtx;
            if ($receiver)
              this$PlayerCtx.deleteGameCollections_inmxie$(closure$gameRef);
            return Unit;
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
  PlayerCtx.prototype.cleanupGame_0 = function (gameRef) {
    launch(coroutines.GlobalScope, void 0, void 0, PlayerCtx$cleanupGame$lambda(this, gameRef));
  };
  function PlayerCtx$createPlayer$lambda$lambda(closure$tx_0, this$PlayerCtx_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$PlayerCtx$createPlayer$lambda$lambda(closure$tx_0, this$PlayerCtx_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerCtx$createPlayer$lambda$lambda(closure$tx_0, this$PlayerCtx_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$tx = closure$tx_0;
    this.local$this$PlayerCtx = this$PlayerCtx_0;
  }
  Coroutine$PlayerCtx$createPlayer$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PlayerCtx$createPlayer$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PlayerCtx$createPlayer$lambda$lambda.prototype.constructor = Coroutine$PlayerCtx$createPlayer$lambda$lambda;
  Coroutine$PlayerCtx$createPlayer$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$closure$tx.get(this.local$this$PlayerCtx.playerRef), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var player = this.result_0;
            if (!player.exists) {
              return this.local$closure$tx.set(this.local$this$PlayerCtx.playerRef, this.local$this$PlayerCtx.newPlayer()), Unit;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
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
  function PlayerCtx$createPlayer$lambda(this$PlayerCtx) {
    return function (tx) {
      return asPromise(async(coroutines.GlobalScope, void 0, void 0, PlayerCtx$createPlayer$lambda$lambda(tx, this$PlayerCtx)));
    };
  }
  PlayerCtx.prototype.createPlayer = function () {
    this.fbCtx.db.runTransaction(PlayerCtx$createPlayer$lambda(this));
  };
  function PlayerCtx$startPlaying$lambda(closure$gameId, this$PlayerCtx, closure$playingRoot, closure$killables) {
    return function (it) {
      if (!it.exists) {
        this$PlayerCtx.leaveGame_61zpoe$(closure$gameId);
      }
       else {
        var game = it.data();
        var playerIndex = indexOf(game.players, this$PlayerCtx.playerId);
        var weStart = playerIndex === game.firstPlayer;
        var playingCtx = new PlayingCtx(this$PlayerCtx, closure$gameId, playerIndex, weStart, closure$playingRoot);
        closure$killables.plusAssign_o14v8n$(playfieldUI(playingCtx));
      }
      return Unit;
    };
  }
  function PlayerCtx$startPlaying$lambda_0(closure$killables) {
    return function () {
      closure$killables.kill();
      return Unit;
    };
  }
  PlayerCtx.prototype.startPlaying_61zpoe$ = function (gameId) {
    var killables = new Killables();
    var playingRoot = playingUI(this);
    playingRoot.setHourglass();
    this.mainCtx.gamesRef.doc(gameId).get().then(PlayerCtx$startPlaying$lambda(gameId, this, playingRoot, killables));
    return PlayerCtx$startPlaying$lambda_0(killables);
  };
  function PlayerCtx$leaveGame$lambda$lambda(this$PlayerCtx_0, closure$gameId_0) {
    return function (tx_0, continuation_0, suspended) {
      var instance = new Coroutine$PlayerCtx$leaveGame$lambda$lambda(this$PlayerCtx_0, closure$gameId_0, tx_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerCtx$leaveGame$lambda$lambda(this$PlayerCtx_0, closure$gameId_0, tx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$PlayerCtx = this$PlayerCtx_0;
    this.local$closure$gameId = closure$gameId_0;
    this.local$tx = tx_0;
  }
  Coroutine$PlayerCtx$leaveGame$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PlayerCtx$leaveGame$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PlayerCtx$leaveGame$lambda$lambda.prototype.constructor = Coroutine$PlayerCtx$leaveGame$lambda$lambda;
  Coroutine$PlayerCtx$leaveGame$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$tx.get(this.local$this$PlayerCtx.playerRef), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var player = this.result_0.data();
            if (equals(player.game, this.local$closure$gameId)) {
              player.game = null;
            }

            return this.local$tx.set(this.local$this$PlayerCtx.playerRef, player);
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
  function PlayerCtx$leaveGame$lambda(this$PlayerCtx_0, closure$gameId_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$PlayerCtx$leaveGame$lambda(this$PlayerCtx_0, closure$gameId_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerCtx$leaveGame$lambda(this$PlayerCtx_0, closure$gameId_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$PlayerCtx = this$PlayerCtx_0;
    this.local$closure$gameId = closure$gameId_0;
  }
  Coroutine$PlayerCtx$leaveGame$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PlayerCtx$leaveGame$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PlayerCtx$leaveGame$lambda.prototype.constructor = Coroutine$PlayerCtx$leaveGame$lambda;
  Coroutine$PlayerCtx$leaveGame$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = tx(this.local$this$PlayerCtx.db, PlayerCtx$leaveGame$lambda$lambda(this.local$this$PlayerCtx, this.local$closure$gameId), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$this$PlayerCtx.cleanupGames(), Unit;
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
  PlayerCtx.prototype.leaveGame_61zpoe$ = function (gameId) {
    launch(coroutines.GlobalScope, void 0, void 0, PlayerCtx$leaveGame$lambda(this, gameId));
  };
  PlayerCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerCtx',
    interfaces: []
  };
  function PlayerCtx_init(fbCtx, user, $this) {
    $this = $this || Object.create(PlayerCtx.prototype);
    PlayerCtx.call($this, new MainCtx(fbCtx), new LoggedInCtx(fbCtx, user));
    return $this;
  }
  function Orientation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Orientation_initFields() {
    Orientation_initFields = function () {
    };
    Orientation$Horizontal_instance = new Orientation('Horizontal', 0);
    Orientation$Vertical_instance = new Orientation('Vertical', 1);
  }
  var Orientation$Horizontal_instance;
  function Orientation$Horizontal_getInstance() {
    Orientation_initFields();
    return Orientation$Horizontal_instance;
  }
  var Orientation$Vertical_instance;
  function Orientation$Vertical_getInstance() {
    Orientation_initFields();
    return Orientation$Vertical_instance;
  }
  Orientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Orientation',
    interfaces: [Enum]
  };
  function Orientation$values() {
    return [Orientation$Horizontal_getInstance(), Orientation$Vertical_getInstance()];
  }
  Orientation.values = Orientation$values;
  function Orientation$valueOf(name) {
    switch (name) {
      case 'Horizontal':
        return Orientation$Horizontal_getInstance();
      case 'Vertical':
        return Orientation$Vertical_getInstance();
      default:throwISE('No enum constant tictactoe.Orientation.' + name);
    }
  }
  Orientation.valueOf_61zpoe$ = Orientation$valueOf;
  function Size(width, height) {
    this.width = width;
    this.height = height;
    this.orientation = this.width >= this.height ? Orientation$Horizontal_getInstance() : Orientation$Vertical_getInstance();
    this.ratio = this.height === 0 ? 1.0 : this.width / this.height;
  }
  Size.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Size',
    interfaces: []
  };
  Size.prototype.component1 = function () {
    return this.width;
  };
  Size.prototype.component2 = function () {
    return this.height;
  };
  Size.prototype.copy_vux9f0$ = function (width, height) {
    return new Size(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Size.prototype.toString = function () {
    return 'Size(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Size.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Size.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function Coords(x, y) {
    this.x = x;
    this.y = y;
  }
  Coords.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Coords',
    interfaces: []
  };
  Coords.prototype.component1 = function () {
    return this.x;
  };
  Coords.prototype.component2 = function () {
    return this.y;
  };
  Coords.prototype.copy_vux9f0$ = function (x, y) {
    return new Coords(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Coords.prototype.toString = function () {
    return 'Coords(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Coords.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Coords.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function FieldState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FieldState_initFields() {
    FieldState_initFields = function () {
    };
    FieldState$Free_instance = new FieldState('Free', 0);
    FieldState$Friend_instance = new FieldState('Friend', 1);
    FieldState$Foe_instance = new FieldState('Foe', 2);
  }
  var FieldState$Free_instance;
  function FieldState$Free_getInstance() {
    FieldState_initFields();
    return FieldState$Free_instance;
  }
  var FieldState$Friend_instance;
  function FieldState$Friend_getInstance() {
    FieldState_initFields();
    return FieldState$Friend_instance;
  }
  var FieldState$Foe_instance;
  function FieldState$Foe_getInstance() {
    FieldState_initFields();
    return FieldState$Foe_instance;
  }
  FieldState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldState',
    interfaces: [Enum]
  };
  function FieldState$values() {
    return [FieldState$Free_getInstance(), FieldState$Friend_getInstance(), FieldState$Foe_getInstance()];
  }
  FieldState.values = FieldState$values;
  function FieldState$valueOf(name) {
    switch (name) {
      case 'Free':
        return FieldState$Free_getInstance();
      case 'Friend':
        return FieldState$Friend_getInstance();
      case 'Foe':
        return FieldState$Foe_getInstance();
      default:throwISE('No enum constant tictactoe.FieldState.' + name);
    }
  }
  FieldState.valueOf_61zpoe$ = FieldState$valueOf;
  function Highlight(from, to) {
    this.from = from;
    this.to = to;
  }
  Highlight.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Highlight',
    interfaces: []
  };
  function Mark(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Mark_initFields() {
    Mark_initFields = function () {
    };
    Mark$X_instance = new Mark('X', 0);
    Mark$O_instance = new Mark('O', 1);
  }
  var Mark$X_instance;
  function Mark$X_getInstance() {
    Mark_initFields();
    return Mark$X_instance;
  }
  var Mark$O_instance;
  function Mark$O_getInstance() {
    Mark_initFields();
    return Mark$O_instance;
  }
  Mark.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mark',
    interfaces: [Enum]
  };
  function Mark$values() {
    return [Mark$X_getInstance(), Mark$O_getInstance()];
  }
  Mark.values = Mark$values;
  function Mark$valueOf(name) {
    switch (name) {
      case 'X':
        return Mark$X_getInstance();
      case 'O':
        return Mark$O_getInstance();
      default:throwISE('No enum constant tictactoe.Mark.' + name);
    }
  }
  Mark.valueOf_61zpoe$ = Mark$valueOf;
  function Turn(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Turn_initFields() {
    Turn_initFields = function () {
    };
    Turn$Here_instance = new Turn('Here', 0);
    Turn$There_instance = new Turn('There', 1);
    Turn$Check_instance = new Turn('Check', 2);
    Turn$Won_instance = new Turn('Won', 3);
    Turn$Lost_instance = new Turn('Lost', 4);
    Turn$Alone_instance = new Turn('Alone', 5);
  }
  var Turn$Here_instance;
  function Turn$Here_getInstance() {
    Turn_initFields();
    return Turn$Here_instance;
  }
  var Turn$There_instance;
  function Turn$There_getInstance() {
    Turn_initFields();
    return Turn$There_instance;
  }
  var Turn$Check_instance;
  function Turn$Check_getInstance() {
    Turn_initFields();
    return Turn$Check_instance;
  }
  var Turn$Won_instance;
  function Turn$Won_getInstance() {
    Turn_initFields();
    return Turn$Won_instance;
  }
  var Turn$Lost_instance;
  function Turn$Lost_getInstance() {
    Turn_initFields();
    return Turn$Lost_instance;
  }
  var Turn$Alone_instance;
  function Turn$Alone_getInstance() {
    Turn_initFields();
    return Turn$Alone_instance;
  }
  Turn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Turn',
    interfaces: [Enum]
  };
  function Turn$values() {
    return [Turn$Here_getInstance(), Turn$There_getInstance(), Turn$Check_getInstance(), Turn$Won_getInstance(), Turn$Lost_getInstance(), Turn$Alone_getInstance()];
  }
  Turn.values = Turn$values;
  function Turn$valueOf(name) {
    switch (name) {
      case 'Here':
        return Turn$Here_getInstance();
      case 'There':
        return Turn$There_getInstance();
      case 'Check':
        return Turn$Check_getInstance();
      case 'Won':
        return Turn$Won_getInstance();
      case 'Lost':
        return Turn$Lost_getInstance();
      case 'Alone':
        return Turn$Alone_getInstance();
      default:throwISE('No enum constant tictactoe.Turn.' + name);
    }
  }
  Turn.valueOf_61zpoe$ = Turn$valueOf;
  function Party(name, ordinal, field, next, end) {
    Enum.call(this);
    this.field = field;
    this.next = next;
    this.end = end;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Party_initFields() {
    Party_initFields = function () {
    };
    Party$This_instance = new Party('This', 0, FieldState$Friend_getInstance(), Turn$There_getInstance(), Turn$Won_getInstance());
    Party$That_instance = new Party('That', 1, FieldState$Foe_getInstance(), Turn$Here_getInstance(), Turn$Lost_getInstance());
  }
  var Party$This_instance;
  function Party$This_getInstance() {
    Party_initFields();
    return Party$This_instance;
  }
  var Party$That_instance;
  function Party$That_getInstance() {
    Party_initFields();
    return Party$That_instance;
  }
  Party.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Party',
    interfaces: [Enum]
  };
  function Party$values() {
    return [Party$This_getInstance(), Party$That_getInstance()];
  }
  Party.values = Party$values;
  function Party$valueOf(name) {
    switch (name) {
      case 'This':
        return Party$This_getInstance();
      case 'That':
        return Party$That_getInstance();
      default:throwISE('No enum constant tictactoe.Party.' + name);
    }
  }
  Party.valueOf_61zpoe$ = Party$valueOf;
  function MarkState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MarkState_initFields() {
    MarkState_initFields = function () {
    };
    MarkState$Hidden_instance = new MarkState('Hidden', 0);
    MarkState$Suggest_instance = new MarkState('Suggest', 1);
    MarkState$Visible_instance = new MarkState('Visible', 2);
  }
  var MarkState$Hidden_instance;
  function MarkState$Hidden_getInstance() {
    MarkState_initFields();
    return MarkState$Hidden_instance;
  }
  var MarkState$Suggest_instance;
  function MarkState$Suggest_getInstance() {
    MarkState_initFields();
    return MarkState$Suggest_instance;
  }
  var MarkState$Visible_instance;
  function MarkState$Visible_getInstance() {
    MarkState_initFields();
    return MarkState$Visible_instance;
  }
  MarkState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MarkState',
    interfaces: [Enum]
  };
  function MarkState$values() {
    return [MarkState$Hidden_getInstance(), MarkState$Suggest_getInstance(), MarkState$Visible_getInstance()];
  }
  MarkState.values = MarkState$values;
  function MarkState$valueOf(name) {
    switch (name) {
      case 'Hidden':
        return MarkState$Hidden_getInstance();
      case 'Suggest':
        return MarkState$Suggest_getInstance();
      case 'Visible':
        return MarkState$Visible_getInstance();
      default:throwISE('No enum constant tictactoe.MarkState.' + name);
    }
  }
  MarkState.valueOf_61zpoe$ = MarkState$valueOf;
  function playfieldUI$state(closure$fields) {
    return function (coords) {
      var $receiver = closure$fields;
      var tmp$;
      var value = $receiver.get_11rb$(coords);
      if (value == null) {
        var answer = new Var(FieldState$Free_getInstance());
        $receiver.put_xwzc9p$(coords, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      return tmp$;
    };
  }
  function playfieldUI$state_0(closure$state) {
    return function (x, y) {
      return closure$state(new Coords(x, y));
    };
  }
  function playfieldUI$lambda(closure$turn) {
    return function () {
      return closure$turn.invoke() === Turn$Here_getInstance();
    };
  }
  function playfieldUI$fieldUI$lambda(closure$state) {
    return function () {
      return closure$state.invoke() === FieldState$Free_getInstance();
    };
  }
  function playfieldUI$fieldUI$lambda_0(closure$ourTurn, closure$isFree) {
    return function () {
      return closure$ourTurn.invoke() && closure$isFree.invoke();
    };
  }
  function playfieldUI$fieldUI$lambda_1(closure$state) {
    return function () {
      return closure$state.invoke() === FieldState$Foe_getInstance();
    };
  }
  function playfieldUI$fieldUI$lambda_2(closure$state) {
    return function () {
      return closure$state.invoke() === FieldState$Friend_getInstance();
    };
  }
  function playfieldUI$fieldUI$lambda_3(closure$ourMark, closure$isFriend, closure$isFoe) {
    return function () {
      return closure$ourMark.invoke() === Mark$X_getInstance() && closure$isFriend.invoke() || (closure$ourMark.invoke() === Mark$O_getInstance() && closure$isFoe.invoke());
    };
  }
  function playfieldUI$fieldUI$lambda_4(closure$ourMark, closure$isFriend, closure$isFoe) {
    return function () {
      return closure$ourMark.invoke() === Mark$O_getInstance() && closure$isFriend.invoke() || (closure$ourMark.invoke() === Mark$X_getInstance() && closure$isFoe.invoke());
    };
  }
  function playfieldUI$fieldUI$lambda_5(closure$ourTurn, closure$isFree, closure$hover) {
    return function () {
      return closure$ourTurn.invoke() && closure$isFree.invoke() && closure$hover.invoke();
    };
  }
  function playfieldUI$fieldUI$lambda_6(closure$suggest, closure$ourMark) {
    return function () {
      return closure$suggest.invoke() && closure$ourMark.invoke() === Mark$X_getInstance();
    };
  }
  function playfieldUI$fieldUI$lambda_7(closure$suggest, closure$ourMark) {
    return function () {
      return closure$suggest.invoke() && closure$ourMark.invoke() === Mark$O_getInstance();
    };
  }
  function playfieldUI$fieldUI$lambda_8(closure$isX, closure$suggestX) {
    return function () {
      if (closure$isX.invoke())
        return MarkState$Visible_getInstance();
      else if (closure$suggestX.invoke())
        return MarkState$Suggest_getInstance();
      else
        return MarkState$Hidden_getInstance();
    };
  }
  function playfieldUI$fieldUI$lambda_9(closure$isO, closure$suggestO) {
    return function () {
      if (closure$isO.invoke())
        return MarkState$Visible_getInstance();
      else if (closure$suggestO.invoke())
        return MarkState$Suggest_getInstance();
      else
        return MarkState$Hidden_getInstance();
    };
  }
  function playfieldUI$fieldUI$lambda$lambda$lambda$stl($receiver) {
    $receiver.style.cssText = 'stroke:black;stroke-width:0.1;fill:none;';
  }
  function playfieldUI$fieldUI$lambda$lambda$lambda$markState$lambda(this$markState) {
    return function (it) {
      var tmp$;
      if (it === MarkState$Hidden_getInstance()) {
        this$markState.style.visibility = 'hidden';
      }
       else {
        this$markState.style.visibility = 'visible';
        if (equals(it, MarkState$Suggest_getInstance()))
          tmp$ = '0.5';
        else
          tmp$ = '1.0';
        var op = tmp$;
        this$markState.style.fillOpacity = op;
        this$markState.style.strokeOpacity = op;
      }
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda$lambda$lambda$markState($receiver, rx) {
    rx.forEach_qlkmfe$(playfieldUI$fieldUI$lambda$lambda$lambda$markState$lambda($receiver));
  }
  function playfieldUI$fieldUI$lambda$lambda$lambda$lambda$lambda(closure$stl) {
    return function ($receiver) {
      closure$stl($receiver);
      $receiver.x1.baseVal.value = -0.5;
      $receiver.y1.baseVal.value = -0.5;
      $receiver.x2.baseVal.value = 0.5;
      $receiver.y2.baseVal.value = 0.5;
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda$lambda$lambda$lambda$lambda_0(closure$stl) {
    return function ($receiver) {
      closure$stl($receiver);
      $receiver.x1.baseVal.value = -0.5;
      $receiver.y1.baseVal.value = 0.5;
      $receiver.x2.baseVal.value = 0.5;
      $receiver.y2.baseVal.value = -0.5;
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda$lambda$lambda$lambda(closure$xState, closure$markState, closure$stl) {
    return function ($receiver) {
      closure$markState($receiver, closure$xState);
      line($receiver, playfieldUI$fieldUI$lambda$lambda$lambda$lambda$lambda(closure$stl));
      line($receiver, playfieldUI$fieldUI$lambda$lambda$lambda$lambda$lambda_0(closure$stl));
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda$lambda$lambda$lambda_0(closure$stl, closure$oState, this$, closure$markState) {
    return function ($receiver) {
      closure$stl($receiver);
      closure$markState(this$, closure$oState);
      $receiver.r.baseVal.value = 0.5;
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda$lambda$lambda(closure$xState, closure$oState) {
    return function ($receiver) {
      var tmp$ = $receiver.transform.baseVal;
      var $receiver_0 = ensureNotNull($receiver.ownerSVGElement).createSVGTransform();
      $receiver_0.setScale(0.8, 0.8);
      tmp$.appendItem($receiver_0);
      var stl = playfieldUI$fieldUI$lambda$lambda$lambda$stl;
      var markState = playfieldUI$fieldUI$lambda$lambda$lambda$markState;
      g($receiver, playfieldUI$fieldUI$lambda$lambda$lambda$lambda(closure$xState, markState, stl));
      circle($receiver, playfieldUI$fieldUI$lambda$lambda$lambda$lambda_0(stl, closure$oState, $receiver, markState));
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda$lambda(closure$xState, closure$oState) {
    return function ($receiver) {
      g($receiver, playfieldUI$fieldUI$lambda$lambda$lambda(closure$xState, closure$oState));
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda$lambda$lambda_0(this$) {
    return function (it) {
      this$.style.cursor = it ? 'pointer' : 'default';
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda$lambda$lambda_1(closure$canClick, closure$turn, closure$state, closure$x, closure$y, this$playfieldUI) {
    return function (it) {
      if (closure$canClick.now) {
        closure$turn.now = Turn$There_getInstance();
        closure$state.now = FieldState$Friend_getInstance();
        var tmp$ = this$playfieldUI;
        var $receiver = new Placement();
        var closure$x_0 = closure$x;
        var closure$y_0 = closure$y;
        $receiver.x = closure$x_0;
        $receiver.y = closure$y_0;
        move(tmp$, $receiver);
      }
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda$lambda$lambda_2($receiver) {
    $receiver.x.baseVal.value = -0.5;
    $receiver.y.baseVal.value = -0.5;
    $receiver.width.baseVal.value = 1.0;
    $receiver.height.baseVal.value = 1.0;
    $receiver.style.cssText = 'fill:transparent;';
    return Unit;
  }
  function playfieldUI$fieldUI$lambda$lambda_0(closure$canClick, closure$turn, closure$state, closure$x, closure$y, this$playfieldUI, closure$hover) {
    return function ($receiver) {
      closure$canClick.forEach_qlkmfe$(playfieldUI$fieldUI$lambda$lambda$lambda_0($receiver));
      clickEvent($receiver, playfieldUI$fieldUI$lambda$lambda$lambda_1(closure$canClick, closure$turn, closure$state, closure$x, closure$y, this$playfieldUI));
      rxHover($receiver, closure$hover);
      rect($receiver, playfieldUI$fieldUI$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda_10(closure$x, closure$y, closure$xState, closure$oState, closure$canClick, closure$turn, closure$state, this$playfieldUI, closure$hover) {
    return function ($receiver) {
      var tmp$ = $receiver.transform.baseVal;
      var $receiver_0 = ensureNotNull($receiver.ownerSVGElement).createSVGTransform();
      $receiver_0.setTranslate(closure$x, closure$y);
      tmp$.appendItem($receiver_0);
      g($receiver, playfieldUI$fieldUI$lambda$lambda(closure$xState, closure$oState));
      a($receiver, playfieldUI$fieldUI$lambda$lambda_0(closure$canClick, closure$turn, closure$state, closure$x, closure$y, this$playfieldUI, closure$hover));
      return Unit;
    };
  }
  function playfieldUI$fieldUI(closure$state, closure$ourTurn, closure$ourMark, closure$turn, this$playfieldUI) {
    return function ($receiver, x, y) {
      var state = closure$state(x, y);
      var isFree = Rx_init(playfieldUI$fieldUI$lambda(state));
      var canClick = Rx_init(playfieldUI$fieldUI$lambda_0(closure$ourTurn, isFree));
      var isFoe = Rx_init(playfieldUI$fieldUI$lambda_1(state));
      var isFriend = Rx_init(playfieldUI$fieldUI$lambda_2(state));
      var isX = Rx_init(playfieldUI$fieldUI$lambda_3(closure$ourMark, isFriend, isFoe));
      var isO = Rx_init(playfieldUI$fieldUI$lambda_4(closure$ourMark, isFriend, isFoe));
      var hover = new Var(false);
      var suggest = Rx_init(playfieldUI$fieldUI$lambda_5(closure$ourTurn, isFree, hover));
      var suggestX = Rx_init(playfieldUI$fieldUI$lambda_6(suggest, closure$ourMark));
      var suggestO = Rx_init(playfieldUI$fieldUI$lambda_7(suggest, closure$ourMark));
      var xState = Rx_init(playfieldUI$fieldUI$lambda_8(isX, suggestX));
      var oState = Rx_init(playfieldUI$fieldUI$lambda_9(isO, suggestO));
      g($receiver, playfieldUI$fieldUI$lambda_10(x, y, xState, oState, canClick, closure$turn, state, this$playfieldUI, hover));
    };
  }
  function playfieldUI$board$lambda$stroke$lambda(closure$x1, closure$y1, closure$x2, closure$y2) {
    return function ($receiver) {
      $receiver.x1.baseVal.value = closure$x1;
      $receiver.y1.baseVal.value = closure$y1;
      $receiver.x2.baseVal.value = closure$x2;
      $receiver.y2.baseVal.value = closure$y2;
      $receiver.style.cssText = 'stroke:black;stroke-width:1px';
      set($receiver.attributes, 'vector-effect', 'non-scaling-stroke');
      return Unit;
    };
  }
  function playfieldUI$board$lambda$stroke(this$) {
    return function (x1, y1, x2, y2) {
      line(this$, playfieldUI$board$lambda$stroke$lambda(x1, y1, x2, y2));
    };
  }
  function playfieldUI$board$lambda$lambda$lambda$lambda(closure$h) {
    return function ($receiver) {
      $receiver.x1.baseVal.value = closure$h.from.x;
      $receiver.y1.baseVal.value = closure$h.from.y;
      $receiver.x2.baseVal.value = closure$h.to.x;
      $receiver.y2.baseVal.value = closure$h.to.y;
      $receiver.style.cssText = '\n                                    stroke:red;\n                                    stroke-width:0.3;\n                                    stroke-opacity:0.5;\n                                    stroke-linecap:round;\n                                ';
      return Unit;
    };
  }
  function playfieldUI$board$lambda$lambda$lambda(this$) {
    return function (h) {
      line(this$, playfieldUI$board$lambda$lambda$lambda$lambda(h));
      return Unit;
    };
  }
  function playfieldUI$board$lambda$lambda(closure$fieldUI, closure$highlights) {
    return function ($receiver) {
      var tmp$ = $receiver.transform.baseVal;
      var $receiver_0 = ensureNotNull($receiver.ownerSVGElement).createSVGTransform();
      $receiver_0.setTranslate(0.5, 0.5);
      tmp$.appendItem($receiver_0);
      for (var x = 0; x <= 2; x++) {
        for (var y = 0; y <= 2; y++) {
          closure$fieldUI($receiver, x, y);
        }
      }
      closure$highlights.plusAssign_qlkmfe$(playfieldUI$board$lambda$lambda$lambda($receiver));
      return Unit;
    };
  }
  function playfieldUI$board$lambda(closure$fieldUI, closure$highlights) {
    return function ($receiver) {
      var $receiver_0 = $receiver.style;
      $receiver_0.position = 'absolute';
      $receiver_0.left = '0';
      $receiver_0.right = '0';
      $receiver_0.top = '0';
      $receiver_0.bottom = '0';
      $receiver_0.minHeight = '0';
      $receiver_0.minWidth = '0';
      $receiver.setAttribute('preserve-aspect-ratio', 'none');
      $receiver.setAttribute('viewBox', '0 0 3 3');
      var stroke = playfieldUI$board$lambda$stroke($receiver);
      stroke(1.0, 0.0, 1.0, 3.0);
      stroke(2.0, 0.0, 2.0, 3.0);
      stroke(0.0, 1.0, 3.0, 1.0);
      stroke(0.0, 2.0, 3.0, 2.0);
      g($receiver, playfieldUI$board$lambda$lambda(closure$fieldUI, closure$highlights));
      return Unit;
    };
  }
  function playfieldUI$board(closure$fieldUI, closure$highlights) {
    return function ($receiver) {
      svg($receiver, playfieldUI$board$lambda(closure$fieldUI, closure$highlights));
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda(this$, closure$size) {
    return function () {
      closure$size.now = new Size(this$.offsetWidth, this$.offsetHeight);
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda_0(closure$size) {
    return function () {
      return closure$size.invoke().ratio;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda_1(closure$tableRatio, closure$ratio) {
    return function () {
      return closure$tableRatio >= closure$ratio.invoke() ? Orientation$Vertical_getInstance() : Orientation$Horizontal_getInstance();
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda_2(closure$ratio, closure$tableRatio) {
    return function () {
      var tmp$;
      var containerRatio = closure$ratio.invoke();
      if (closure$tableRatio >= containerRatio) {
        tmp$ = containerRatio / closure$tableRatio;
      }
       else {
        tmp$ = closure$tableRatio / containerRatio;
      }
      var tablePerContainer = tmp$;
      var allSpacingPerContainer = 1.0 - tablePerContainer;
      var allSpacingPerTable = allSpacingPerContainer / tablePerContainer;
      var halfSpacingPerTable = allSpacingPerTable / 2.0;
      return halfSpacingPerTable;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda_3(closure$flexOrientation) {
    return function () {
      switch (closure$flexOrientation.invoke().name) {
        case 'Vertical':
          return 'flex-column';
        case 'Horizontal':
          return 'flex-row';
        default:return Kotlin.noWhenBranchMatched();
      }
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda$lambda(this$) {
    return function (it) {
      this$.style.flexGrow = it.toString();
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda_4(closure$spacingGrow) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$(styles.flexBasis0);
      closure$spacingGrow.forEach_qlkmfe$(playfieldUI$lambda$lambda$lambda$lambda$lambda($receiver));
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda$lambda$lambda(closure$board) {
    return function ($receiver) {
      flexGrow1($receiver);
      $receiver.style.position = 'relative';
      closure$board($receiver);
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda$lambda_0(closure$board) {
    return function ($receiver) {
      border($receiver);
      padding2($receiver);
      flexGrow1($receiver);
      div($receiver, playfieldUI$lambda$lambda$lambda$lambda$lambda$lambda(closure$board));
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda_5(closure$board) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$(styles.flexBasis0);
      flexGrow1($receiver);
      column($receiver, playfieldUI$lambda$lambda$lambda$lambda$lambda_0(closure$board));
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda$lambda_1(this$) {
    return function (it) {
      this$.style.flexGrow = it.toString();
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda_6(closure$spacingGrow) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$(styles.flexBasis0);
      closure$spacingGrow.forEach_qlkmfe$(playfieldUI$lambda$lambda$lambda$lambda$lambda_1($receiver));
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda(closure$killables, closure$tableRatio, closure$board) {
    return function ($receiver) {
      flexGrow1($receiver);
      flex($receiver);
      var size = new Var(new Size($receiver.offsetWidth, $receiver.offsetHeight));
      closure$killables.plusAssign_o14v8n$(resizeEvent(window, playfieldUI$lambda$lambda$lambda$lambda($receiver, size)));
      var ratio = Rx_init(playfieldUI$lambda$lambda$lambda$lambda_0(size));
      var flexOrientation = Rx_init(playfieldUI$lambda$lambda$lambda$lambda_1(closure$tableRatio, ratio));
      var spacingGrow = Rx_init(playfieldUI$lambda$lambda$lambda$lambda_2(ratio, closure$tableRatio));
      rxClass($receiver, Rx_init(playfieldUI$lambda$lambda$lambda$lambda_3(flexOrientation)));
      div($receiver, playfieldUI$lambda$lambda$lambda$lambda_4(spacingGrow));
      column($receiver, playfieldUI$lambda$lambda$lambda$lambda_5(closure$board));
      div($receiver, playfieldUI$lambda$lambda$lambda$lambda_6(spacingGrow));
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda(closure$killables, closure$tableRatio, closure$board) {
    return function ($receiver) {
      flex($receiver);
      flexGrow1($receiver);
      padding2($receiver);
      div($receiver, playfieldUI$lambda$lambda$lambda(closure$killables, closure$tableRatio, closure$board));
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda_7($receiver) {
    margin1($receiver);
    $receiver.innerText = 'X';
    return Unit;
  }
  function playfieldUI$lambda$lambda$lambda$lambda_8($receiver) {
    margin1($receiver);
    $receiver.innerText = 'You';
    return Unit;
  }
  function playfieldUI$lambda$lambda$lambda_0($receiver) {
    padding1($receiver);
    flexFixedSize($receiver);
    btnButton($receiver, playfieldUI$lambda$lambda$lambda$lambda_7);
    span($receiver, playfieldUI$lambda$lambda$lambda$lambda_8);
    return Unit;
  }
  function playfieldUI$lambda$lambda$lambda$lambda$lambda_2(closure$turn) {
    return function () {
      switch (closure$turn.invoke().name) {
        case 'Won':
          return 'You won!';
        case 'Lost':
          return 'You lost.';
        case 'Check':
          return 'Waiting...';
        case 'There':
          return 'Waiting for opponent...';
        case 'Here':
          return 'Make a move!';
        case 'Alone':
          return 'Opponent left.';
        default:return Kotlin.noWhenBranchMatched();
      }
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda_9(closure$turn) {
    return function ($receiver) {
      rxText($receiver, playfieldUI$lambda$lambda$lambda$lambda$lambda_2(closure$turn));
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda_1(closure$turn) {
    return function ($receiver) {
      flexGrow1($receiver);
      flexCenter($receiver);
      span($receiver, playfieldUI$lambda$lambda$lambda$lambda_9(closure$turn));
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda_10($receiver) {
    margin1($receiver);
    $receiver.innerText = 'Opponent';
    return Unit;
  }
  function playfieldUI$lambda$lambda$lambda$lambda_11($receiver) {
    margin1($receiver);
    $receiver.innerText = 'O';
    return Unit;
  }
  function playfieldUI$lambda$lambda$lambda_2($receiver) {
    padding1($receiver);
    flexFixedSize($receiver);
    span($receiver, playfieldUI$lambda$lambda$lambda$lambda_10);
    btnButton($receiver, playfieldUI$lambda$lambda$lambda$lambda_11);
    return Unit;
  }
  function playfieldUI$lambda$lambda_0(closure$turn) {
    return function ($receiver) {
      bgLight($receiver);
      borderTop($receiver);
      flexFixedSize($receiver);
      row($receiver, playfieldUI$lambda$lambda$lambda_0);
      div($receiver, playfieldUI$lambda$lambda$lambda_1(closure$turn));
      row($receiver, playfieldUI$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function playfieldUI$lambda_0(closure$killables, closure$tableRatio, closure$board, closure$turn) {
    return function ($receiver) {
      div($receiver, playfieldUI$lambda$lambda(closure$killables, closure$tableRatio, closure$board));
      row($receiver, playfieldUI$lambda$lambda_0(closure$turn));
      return Unit;
    };
  }
  function playfieldUI$lambda_1(closure$gameOverStates, closure$turn) {
    return function () {
      return closure$gameOverStates.contains_11rb$(closure$turn.invoke());
    };
  }
  function playfieldUI$isOurs(this$playfieldUI) {
    return function ($receiver) {
      return $receiver.player === this$playfieldUI.playerIndex;
    };
  }
  function playfieldUI$party(closure$isOurs) {
    return function ($receiver) {
      return closure$isOurs($receiver) ? Party$This_getInstance() : Party$That_getInstance();
    };
  }
  function playfieldUI$Dir(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }
  playfieldUI$Dir.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dir',
    interfaces: []
  };
  playfieldUI$Dir.prototype.component1 = function () {
    return this.dx;
  };
  playfieldUI$Dir.prototype.component2 = function () {
    return this.dy;
  };
  playfieldUI$Dir.prototype.copy_vux9f0$ = function (dx, dy) {
    return new playfieldUI$Dir(dx === void 0 ? this.dx : dx, dy === void 0 ? this.dy : dy);
  };
  playfieldUI$Dir.prototype.toString = function () {
    return 'Dir(dx=' + Kotlin.toString(this.dx) + (', dy=' + Kotlin.toString(this.dy)) + ')';
  };
  playfieldUI$Dir.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dx) | 0;
    result = result * 31 + Kotlin.hashCode(this.dy) | 0;
    return result;
  };
  playfieldUI$Dir.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.dx, other.dx) && Kotlin.equals(this.dy, other.dy)))));
  };
  function playfieldUI$plus($receiver, dir) {
    return new Coords($receiver.x + dir.dx | 0, $receiver.y + dir.dy | 0);
  }
  function playfieldUI$sequenceExcluding$lambda(this$sequenceExcluding, closure$plus) {
    return function (it) {
      return closure$plus(it, this$sequenceExcluding);
    };
  }
  function playfieldUI$sequenceExcluding(closure$plus) {
    return function ($receiver, from) {
      return generateSequence(closure$plus(from, $receiver), playfieldUI$sequenceExcluding$lambda($receiver, closure$plus));
    };
  }
  function playfieldUI$unaryMinus($receiver) {
    return new playfieldUI$Dir(-$receiver.dx | 0, -$receiver.dy | 0);
  }
  function playfieldUI$opposite(closure$unaryMinus) {
    return function ($receiver) {
      return closure$unaryMinus($receiver);
    };
  }
  function playfieldUI$checkGameOver$reach$lambda(closure$state, closure$winner) {
    return function (it) {
      return closure$state(it).now === closure$winner;
    };
  }
  function playfieldUI$checkGameOver$reach(this$checkGameOver, closure$sequenceExcluding, closure$state, closure$winner) {
    return function ($receiver) {
      return plus(listOf_0(this$checkGameOver), toList(takeWhile(closure$sequenceExcluding($receiver, this$checkGameOver), playfieldUI$checkGameOver$reach$lambda(closure$state, closure$winner))));
    };
  }
  var wrapFunction = Kotlin.wrapFunction;
  var mapNotNullTo$lambda = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  function playfieldUI$checkGameOver(closure$state, closure$sequenceExcluding, closure$dirs, closure$opposite, closure$winBy, closure$highlights) {
    return function ($receiver) {
      var winner = closure$state($receiver).now;
      console.dir(winner);
      if (winner === FieldState$Free_getInstance())
        return false;
      var reach = playfieldUI$checkGameOver$reach($receiver, closure$sequenceExcluding, closure$state, winner);
      var $receiver_0 = closure$dirs;
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        var closure$opposite_0 = closure$opposite;
        var closure$winBy_0 = closure$winBy;
        var transform$result;
        var s1 = reach(element);
        var s2 = reach(closure$opposite_0(element));
        if ((s1.size + s2.size - 1 | 0) >= closure$winBy_0) {
          transform$result = new Highlight(last(s1), last(s2));
        }
         else {
          transform$result = null;
        }
        if ((tmp$_0 = transform$result) != null) {
          destination.add_11rb$(tmp$_0);
        }
      }
      var hs = destination;
      var tmp$_1;
      tmp$_1 = hs.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        closure$highlights.fire_11rb$(element_0);
      }
      return !hs.isEmpty();
    };
  }
  function playfieldUI$process(closure$isOver, closure$state, closure$party, closure$checkGameOver, closure$turn) {
    return function ($receiver) {
      if (closure$isOver.now)
        return;
      if (Kotlin.isType($receiver, Placement)) {
        var coords = new Coords($receiver.x, $receiver.y);
        var state = closure$state(coords);
        var party = closure$party($receiver);
        state.now = party.field;
        closure$turn.now = closure$checkGameOver(coords) ? party.end : party.next;
      }
       else if (Kotlin.isType($receiver, Leave))
        closure$turn.now = Turn$Alone_getInstance();
    };
  }
  function playfieldUI$lambda_2(closure$process) {
    return function (qs) {
      var $receiver = qs.docChanges();
      var destination = ArrayList_init_0();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (get_typeEnum(element) === DocumentChangeType.added)
          destination.add_11rb$(element);
      }
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        closure$process(Move$Companion_getInstance().of(element_0.doc.data()));
      }
      return Unit;
    };
  }
  function playfieldUI$lambda_3(closure$killables, closure$stopListening, this$playfieldUI) {
    return function () {
      closure$killables.kill();
      closure$stopListening();
      leaveGame(this$playfieldUI);
      return Unit;
    };
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function playfieldUI($receiver) {
    var tableRatio = 1.0;
    var killables = new Killables();
    var highlights = new Emitter();
    var fields = LinkedHashMap_init();
    var state = playfieldUI$state(fields);
    var state_0 = playfieldUI$state_0(state);
    var ourMark = new Var(Mark$X_getInstance());
    var turn = new Var($receiver.weStart ? Turn$Here_getInstance() : Turn$There_getInstance());
    var ourTurn = Rx_init(playfieldUI$lambda(turn));
    var fieldUI = playfieldUI$fieldUI(state_0, ourTurn, ourMark, turn, $receiver);
    var board = playfieldUI$board(fieldUI, highlights);
    $receiver.root.newRoot_iw61es$(playfieldUI$lambda_0(killables, tableRatio, board, turn));
    var gameOverStates = setOf([Turn$Won_getInstance(), Turn$Lost_getInstance(), Turn$Alone_getInstance()]);
    var isOver = Rx_init(playfieldUI$lambda_1(gameOverStates, turn));
    var isOurs = playfieldUI$isOurs($receiver);
    var party = playfieldUI$party(isOurs);
    var dirs = listOf([new playfieldUI$Dir(1, -1), new playfieldUI$Dir(1, 0), new playfieldUI$Dir(1, 1), new playfieldUI$Dir(0, 1)]);
    var plus = playfieldUI$plus;
    var sequenceExcluding = playfieldUI$sequenceExcluding(plus);
    var unaryMinus = playfieldUI$unaryMinus;
    var opposite = playfieldUI$opposite(unaryMinus);
    var winBy = 3;
    var checkGameOver = playfieldUI$checkGameOver(state, sequenceExcluding, dirs, opposite, winBy, highlights);
    var process = playfieldUI$process(isOver, state, party, checkGameOver, turn);
    var stopListening = onSnapshotNext(orderBy($receiver.movesRef, getPropertyCallableRef('sequence', 1, function ($receiver) {
      return $receiver.sequence;
    }, function ($receiver, value) {
      $receiver.sequence = value;
    })), playfieldUI$lambda_2(process));
    return playfieldUI$lambda_3(killables, stopListening, $receiver);
  }
  function PlayingCtx(playerCtx, gameId, playerIndex, weStart, root) {
    this.playerCtx = playerCtx;
    this.gameId = gameId;
    this.playerIndex = playerIndex;
    this.weStart = weStart;
    this.root = root;
    this.playerRef = this.playerCtx.playerRef;
    this.playerId = this.playerCtx.playerId;
    this.gameRef = this.playerCtx.mainCtx.gamesRef.doc(this.gameId);
    this.movesRef = moves(this.gameRef);
    this.appCtx = this.playerCtx.appCtx;
    this.db = this.playerCtx.db;
  }
  PlayingCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayingCtx',
    interfaces: []
  };
  function moves(gameRef) {
    return gameRef.collection('moves');
  }
  function Move(o) {
    Move$Companion_getInstance();
    Wrap.call(this, o);
    this.sequence_8gbkug$_0 = this.dyn_287e2$();
    this.player_gbwi5k$_0 = this.dyn_287e2$();
  }
  var Move$sequence_metadata = new PropertyMetadata('sequence');
  Object.defineProperty(Move.prototype, 'sequence', {
    get: function () {
      return this.sequence_8gbkug$_0.getValue_lrcp0p$(this, Move$sequence_metadata);
    },
    set: function (sequence) {
      this.sequence_8gbkug$_0.setValue_9rddgb$(this, Move$sequence_metadata, sequence);
    }
  });
  var Move$player_metadata = new PropertyMetadata('player');
  Object.defineProperty(Move.prototype, 'player', {
    get: function () {
      return this.player_gbwi5k$_0.getValue_lrcp0p$(this, Move$player_metadata);
    },
    set: function (player) {
      this.player_gbwi5k$_0.setValue_9rddgb$(this, Move$player_metadata, player);
    }
  });
  function Move$Companion() {
    Move$Companion_instance = this;
    this.of = wrapper([getKClass(Placement), getKClass(Leave)]);
  }
  Move$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Move$Companion_instance = null;
  function Move$Companion_getInstance() {
    if (Move$Companion_instance === null) {
      new Move$Companion();
    }
    return Move$Companion_instance;
  }
  Move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Move',
    interfaces: [Wrap]
  };
  function Placement(o) {
    if (o === void 0)
      o = obj_0();
    Move.call(this, o);
    this.x_29a48n$_0 = this.dyn_287e2$();
    this.y_29a49i$_0 = this.dyn_287e2$();
  }
  var Placement$x_metadata = new PropertyMetadata('x');
  Object.defineProperty(Placement.prototype, 'x', {
    get: function () {
      return this.x_29a48n$_0.getValue_lrcp0p$(this, Placement$x_metadata);
    },
    set: function (x) {
      this.x_29a48n$_0.setValue_9rddgb$(this, Placement$x_metadata, x);
    }
  });
  var Placement$y_metadata = new PropertyMetadata('y');
  Object.defineProperty(Placement.prototype, 'y', {
    get: function () {
      return this.y_29a49i$_0.getValue_lrcp0p$(this, Placement$y_metadata);
    },
    set: function (y) {
      this.y_29a49i$_0.setValue_9rddgb$(this, Placement$y_metadata, y);
    }
  });
  Placement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Placement',
    interfaces: [Move]
  };
  function Leave(o) {
    if (o === void 0)
      o = obj_0();
    Move.call(this, o);
  }
  Leave.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Leave',
    interfaces: [Move]
  };
  function move$lambda$lambda(this$move_0, closure$m_0) {
    return function (tx_0, continuation_0, suspended) {
      var instance = new Coroutine$move$lambda$lambda(this$move_0, closure$m_0, tx_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$move$lambda$lambda(this$move_0, closure$m_0, tx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$move = this$move_0;
    this.local$closure$m = closure$m_0;
    this.local$tx = tx_0;
  }
  Coroutine$move$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$move$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$move$lambda$lambda.prototype.constructor = Coroutine$move$lambda$lambda;
  Coroutine$move$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = await_0(this.local$tx.get(this.local$this$move.gameRef), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var game = this.result_0.data();
            var sequence = (tmp$_0 = (tmp$ = game.lastSequence) != null ? tmp$ + 1 | 0 : null) != null ? tmp$_0 : 0;
            this.local$closure$m.player = this.local$this$move.playerIndex;
            this.local$closure$m.sequence = sequence;
            game.lastSequence = sequence;
            this.local$tx.set(this.local$this$move.gameRef, game);
            return this.local$tx.set(this.local$this$move.movesRef.doc(sequence.toString()), this.local$closure$m.wrapped);
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
  function move$lambda(this$move_0, closure$m_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$move$lambda(this$move_0, closure$m_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$move$lambda(this$move_0, closure$m_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$move = this$move_0;
    this.local$closure$m = closure$m_0;
  }
  Coroutine$move$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$move$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$move$lambda.prototype.constructor = Coroutine$move$lambda;
  Coroutine$move$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = tx(this.local$this$move.db, move$lambda$lambda(this.local$this$move, this.local$closure$m), this);
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
  function move($receiver, m) {
    return launch(coroutines.GlobalScope, void 0, void 0, move$lambda($receiver, m));
  }
  function leaveGame($receiver) {
    move($receiver, new Leave());
    $receiver.playerCtx.leaveGame_61zpoe$($receiver.gameId);
  }
  function playingUI$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.active = true;
    $receiver.game = null;
    return Unit;
  }
  function playingUI$lambda$lambda$lambda$lambda(this$playingUI) {
    return function (it) {
      this$playingUI.playerRef.set(obj(playingUI$lambda$lambda$lambda$lambda$lambda));
      return Unit;
    };
  }
  function playingUI$lambda$lambda$lambda(this$playingUI) {
    return function ($receiver) {
      btnSecondary($receiver);
      margin1($receiver);
      $receiver.innerText = 'Back to Waiting Room';
      clickEvent($receiver, playingUI$lambda$lambda$lambda$lambda(this$playingUI));
      return Unit;
    };
  }
  function playingUI$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.active = false;
    $receiver.game = null;
    return Unit;
  }
  function playingUI$lambda$lambda$lambda$lambda_0(this$playingUI) {
    return function (it) {
      this$playingUI.playerRef.set(obj(playingUI$lambda$lambda$lambda$lambda$lambda_0));
      return Unit;
    };
  }
  function playingUI$lambda$lambda$lambda_0(this$playingUI) {
    return function ($receiver) {
      btnSecondary($receiver);
      margin1($receiver);
      $receiver.innerText = 'Stop Playing';
      clickEvent($receiver, playingUI$lambda$lambda$lambda$lambda_0(this$playingUI));
      return Unit;
    };
  }
  function playingUI$lambda$lambda(this$playingUI) {
    return function ($receiver) {
      flexFixedSize($receiver);
      bgLight($receiver);
      borderBottom($receiver);
      padding1($receiver);
      btnButton($receiver, playingUI$lambda$lambda$lambda(this$playingUI));
      btnButton($receiver, playingUI$lambda$lambda$lambda_0(this$playingUI));
      return Unit;
    };
  }
  function playingUI$lambda$lambda_0($receiver) {
    flexGrow1($receiver);
    return Unit;
  }
  function playingUI$lambda(this$playingUI, closure$root) {
    return function ($receiver) {
      row($receiver, playingUI$lambda$lambda(this$playingUI));
      closure$root.v = new RootPanel(column($receiver, playingUI$lambda$lambda_0));
      return Unit;
    };
  }
  function playingUI($receiver) {
    var root = {v: null};
    $receiver.appCtx.root.newRoot_iw61es$(playingUI$lambda($receiver, root));
    return root.v == null ? throwUPAE('root') : root.v;
  }
  function main(args) {
    (new TicTacToeLoggedOutControl()).start();
  }
  function TicTacToeLoggedOutControl() {
    LoggingInCtx_init('tictactoe', this);
  }
  function TicTacToeLoggedOutControl$loggedIn$lambda(closure$stateMachine) {
    return function (ds) {
      closure$stateMachine.update_11rb$(ds.exists ? ds.data() : null);
      return Unit;
    };
  }
  function TicTacToeLoggedOutControl$loggedIn$lambda_0(closure$stopQuerying, closure$stateMachine) {
    return function () {
      closure$stopQuerying();
      closure$stateMachine.shutdown();
      return Unit;
    };
  }
  TicTacToeLoggedOutControl.prototype.loggedIn_v1eir6$ = function (user) {
    var control = PlayerCtx_init(this.fbCtx, user);
    var stateMachine = new StateMachine(new PlayerStateUnknown(control));
    var stopQuerying = control.playerRef.onSnapshot(TicTacToeLoggedOutControl$loggedIn$lambda(stateMachine));
    return TicTacToeLoggedOutControl$loggedIn$lambda_0(stopQuerying, stateMachine);
  };
  TicTacToeLoggedOutControl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TicTacToeLoggedOutControl',
    interfaces: [LoggingInCtx]
  };
  function waitingUI$lambda$lambda$lambda($receiver) {
    margin1($receiver);
    $receiver.innerText = 'Waiting for opponent...';
    return Unit;
  }
  function waitingUI$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.active = false;
    return Unit;
  }
  function waitingUI$lambda$lambda$lambda$lambda(this$waitingUI) {
    return function (it) {
      this$waitingUI.control.playerRef.set(obj(waitingUI$lambda$lambda$lambda$lambda$lambda), setOptionsMerge());
      return Unit;
    };
  }
  function waitingUI$lambda$lambda$lambda_0(this$waitingUI) {
    return function ($receiver) {
      margin1($receiver);
      $receiver.innerText = 'Cancel';
      clickEvent($receiver, waitingUI$lambda$lambda$lambda$lambda(this$waitingUI));
      return Unit;
    };
  }
  function waitingUI$lambda$lambda(this$waitingUI) {
    return function ($receiver) {
      flexGrow1($receiver);
      flexCenter($receiver);
      span($receiver, waitingUI$lambda$lambda$lambda);
      btnButton($receiver, waitingUI$lambda$lambda$lambda_0(this$waitingUI));
      return Unit;
    };
  }
  function waitingUI$lambda$lambda$lambda$lambda_0($receiver) {
    paddingRight2($receiver);
    $receiver.innerText = window.location.href;
    return Unit;
  }
  function waitingUI$lambda$lambda$lambda$lambda$lambda_0(it) {
    var t = textarea(document);
    t.value = window.location.href;
    ensureNotNull(document.body).appendChild(t);
    t.select();
    document.execCommand('copy');
    removeFromParent(t);
    return Unit;
  }
  function waitingUI$lambda$lambda$lambda$lambda_1($receiver) {
    btnSecondary($receiver);
    $receiver.innerText = 'Copy';
    clickEvent($receiver, waitingUI$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function waitingUI$lambda$lambda$lambda_1($receiver) {
    border($receiver);
    padding2($receiver);
    alignItemsCenter($receiver);
    div($receiver, waitingUI$lambda$lambda$lambda$lambda_0);
    btnButton($receiver, waitingUI$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function waitingUI$lambda$lambda_0($receiver) {
    flexFixedSize($receiver);
    flexCenter($receiver);
    row($receiver, waitingUI$lambda$lambda$lambda_1);
    return Unit;
  }
  function waitingUI$lambda(this$waitingUI) {
    return function ($receiver) {
      padding2($receiver);
      column($receiver, waitingUI$lambda$lambda(this$waitingUI));
      div($receiver, waitingUI$lambda$lambda_0);
      return Unit;
    };
  }
  function waitingUI($receiver) {
    $receiver.control.appCtx.root.newRoot_iw61es$(waitingUI$lambda($receiver));
  }
  var package$tictactoe = _.tictactoe || (_.tictactoe = {});
  package$tictactoe.inactiveUI_tchvpl$ = inactiveUI;
  package$tictactoe.LoggedInState = LoggedInState;
  package$tictactoe.PlayerStateUnknown = PlayerStateUnknown;
  package$tictactoe.PlayerInactive = PlayerInactive;
  package$tictactoe.PlayerActiveWaiting = PlayerActiveWaiting;
  package$tictactoe.StartPlayingState = StartPlayingState;
  package$tictactoe.MainCtx = MainCtx;
  package$tictactoe.PlayerCtx_init_ugw59m$ = PlayerCtx_init;
  package$tictactoe.PlayerCtx = PlayerCtx;
  Object.defineProperty(Orientation, 'Horizontal', {
    get: Orientation$Horizontal_getInstance
  });
  Object.defineProperty(Orientation, 'Vertical', {
    get: Orientation$Vertical_getInstance
  });
  package$tictactoe.Orientation = Orientation;
  package$tictactoe.Size = Size;
  package$tictactoe.Coords = Coords;
  Object.defineProperty(FieldState, 'Free', {
    get: FieldState$Free_getInstance
  });
  Object.defineProperty(FieldState, 'Friend', {
    get: FieldState$Friend_getInstance
  });
  Object.defineProperty(FieldState, 'Foe', {
    get: FieldState$Foe_getInstance
  });
  package$tictactoe.FieldState = FieldState;
  package$tictactoe.Highlight = Highlight;
  Object.defineProperty(Mark, 'X', {
    get: Mark$X_getInstance
  });
  Object.defineProperty(Mark, 'O', {
    get: Mark$O_getInstance
  });
  package$tictactoe.Mark = Mark;
  Object.defineProperty(Turn, 'Here', {
    get: Turn$Here_getInstance
  });
  Object.defineProperty(Turn, 'There', {
    get: Turn$There_getInstance
  });
  Object.defineProperty(Turn, 'Check', {
    get: Turn$Check_getInstance
  });
  Object.defineProperty(Turn, 'Won', {
    get: Turn$Won_getInstance
  });
  Object.defineProperty(Turn, 'Lost', {
    get: Turn$Lost_getInstance
  });
  Object.defineProperty(Turn, 'Alone', {
    get: Turn$Alone_getInstance
  });
  package$tictactoe.Turn = Turn;
  Object.defineProperty(Party, 'This', {
    get: Party$This_getInstance
  });
  Object.defineProperty(Party, 'That', {
    get: Party$That_getInstance
  });
  package$tictactoe.Party = Party;
  Object.defineProperty(MarkState, 'Hidden', {
    get: MarkState$Hidden_getInstance
  });
  Object.defineProperty(MarkState, 'Suggest', {
    get: MarkState$Suggest_getInstance
  });
  Object.defineProperty(MarkState, 'Visible', {
    get: MarkState$Visible_getInstance
  });
  package$tictactoe.MarkState = MarkState;
  package$tictactoe.playfieldUI_uoq3fa$ = playfieldUI;
  package$tictactoe.PlayingCtx = PlayingCtx;
  package$tictactoe.moves_inmxie$ = moves;
  Object.defineProperty(Move, 'Companion', {
    get: Move$Companion_getInstance
  });
  package$tictactoe.Move = Move;
  package$tictactoe.Placement = Placement;
  package$tictactoe.Leave = Leave;
  package$tictactoe.move_yjg8op$ = move;
  package$tictactoe.leaveGame_uoq3fa$ = leaveGame;
  package$tictactoe.playingUI_s1l8uj$ = playingUI;
  package$tictactoe.main_kand9s$ = main;
  package$tictactoe.TicTacToeLoggedOutControl = TicTacToeLoggedOutControl;
  package$tictactoe.waitingUI_3w0waz$ = waitingUI;
  main([]);
  Kotlin.defineModule('tictactoe', _);
  return _;
}(typeof tictactoe === 'undefined' ? {} : tictactoe, kotlin, bootstrap, domx, common, firebase, this['kotlinx-coroutines-core'], commonfb, commonui);

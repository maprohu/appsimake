if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'tictactoe'.");
}
if (typeof domx === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'domx' was not found. Please, check whether 'domx' is loaded prior to 'tictactoe'.");
}
if (typeof bootstrap === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'bootstrap' was not found. Please, check whether 'bootstrap' is loaded prior to 'tictactoe'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'tictactoe'.");
}
if (typeof firebase === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'firebase' was not found. Please, check whether 'firebase' is loaded prior to 'tictactoe'.");
}
if (typeof commonui === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'commonui' was not found. Please, check whether 'commonui' is loaded prior to 'tictactoe'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'tictactoe'.");
}
if (typeof commonfb === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'commonfb' was not found. Please, check whether 'commonfb' is loaded prior to 'tictactoe'.");
}
if (typeof fontawesome === 'undefined') {
  throw new Error("Error loading module 'tictactoe'. Its dependency 'fontawesome' was not found. Please, check whether 'fontawesome' is loaded prior to 'tictactoe'.");
}
var tictactoe = function (_, Kotlin, $module$domx, $module$bootstrap, $module$common, $module$firebase, $module$commonui, $module$kotlinx_coroutines_core, $module$commonfb, $module$fontawesome) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var clickEvent = $module$domx.domx.clickEvent_bvfv80$;
  var flexCenter = $module$bootstrap.bootstrap.flexCenter_ejp6nk$;
  var btnPrimary = $module$bootstrap.bootstrap.btnPrimary_ejp6nk$;
  var obj = $module$common.common.obj_7qq44f$;
  var setOptionsMerge = $module$firebase.firebase.firestore.setOptionsMerge;
  var btnButton = $module$bootstrap.bootstrap.btnButton_9ztatb$;
  var screenLayout = $module$commonui.commonui.screenLayout_g4155o$;
  var State = $module$common.common.State;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var Random = Kotlin.kotlin.random.Random;
  var rollback = $module$firebase.firebase.firestore.rollback;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var txTry = $module$firebase.firebase.firestore.txTry_81x6o2$;
  var onRollback = $module$firebase.firebase.firestore.onRollback_61ytec$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var get_typeEnum = $module$firebase.firebase.firestore.get_typeEnum_samrru$;
  var DocumentChangeType = $module$firebase.firebase.firestore.DocumentChangeType;
  var equals = Kotlin.equals;
  var onSnapshotNext = $module$firebase.firebase.firestore.onSnapshotNext_o3477o$;
  var obj_0 = $module$common.common.obj_287e2$;
  var launch_0 = $module$firebase.firebase.firestore.launch_g2bo5h$;
  var txDefer = $module$firebase.firebase.firestore.txDefer_81x6o2$;
  var Killables = $module$common.killable.Killables;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var tx = $module$firebase.firebase.firestore.tx_81x6o2$;
  var LoggedInCtx = $module$commonfb.commonfb.LoggedInCtx;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var Emitter = $module$common.common.Emitter;
  var Var = $module$common.rx.Var;
  var Rx_init = $module$common.rx.Rx_init_klfg04$;
  var rxDisplay = $module$bootstrap.bootstrap.rxDisplay_86pnez$;
  var line = $module$domx.svgx.line_lr0x44$;
  var g = $module$domx.svgx.g_5dzvjl$;
  var circle = $module$domx.svgx.circle_nmh8i0$;
  var transform = $module$domx.svgx.transform_udgqj7$;
  var rxHover = $module$common.rx.rxHover_st2z1u$;
  var rect = $module$domx.svgx.rect_bfker8$;
  var a = $module$domx.svgx.a_lzuxbr$;
  var set = $module$domx.domx.set_56wq3j$;
  var svg = $module$domx.svgx.svg_veu7ak$;
  var padding2 = $module$bootstrap.bootstrap.padding2_ejp6nk$;
  var aspectRatio = $module$commonui.commonui.aspectRatio_ahwbu2$;
  var viewBox = $module$domx.svgx.viewBox_wedmho$;
  var rxVisible = $module$domx.domx.rxVisible_i505hf$;
  var get_textNode = $module$domx.domx.get_textNode_pdl1vz$;
  var plus = $module$domx.domx.plus_uy78um$;
  var div = $module$domx.domx.div_gnmiz0$;
  var rxPanel = $module$commonui.commonui.rxPanel_83qqjo$;
  var span = $module$domx.domx.span_c7xqcp$;
  var margin1 = $module$bootstrap.bootstrap.margin1_ejp6nk$;
  var invoke = $module$bootstrap.bootstrap.invoke_inodcj$;
  var chevronDown = $module$fontawesome.fontawesome.chevronDown_asww5s$;
  var dropdownMenuRight = $module$bootstrap.bootstrap.dropdownMenuRight_ejp6nk$;
  var dropdownItemAnchor = $module$bootstrap.bootstrap.dropdownItemAnchor_6t02fy$;
  var dropdown = $module$bootstrap.bootstrap.dropdown_dz5l3e$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_gexuht$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var takeWhile = Kotlin.kotlin.sequences.takeWhile_euau3h$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var plus_0 = Kotlin.kotlin.collections.plus_mydzjv$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var orderBy = $module$firebase.firebase.firestore.orderBy_pn31r1$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var getKClass = Kotlin.getKClass;
  var wrapper = $module$common.common.wrapper_giuhum$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Wrap = $module$common.common.Wrap;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var chevronLeft = $module$fontawesome.fontawesome.chevronLeft_asww5s$;
  var flexRow = $module$bootstrap.bootstrap.flexRow_ejp6nk$;
  var spinner = $module$fontawesome.fontawesome.spinner_asww5s$;
  var RootPanel = $module$commonui.commonui.RootPanel;
  var StateMachine = $module$common.common.StateMachine;
  var LoggingInCtx_init = $module$commonfb.commonfb.LoggingInCtx_init_puj7f4$;
  var LoggingInCtx = $module$commonfb.commonfb.LoggingInCtx;
  var flexColumn = $module$bootstrap.bootstrap.flexColumn_ejp6nk$;
  var flex = $module$bootstrap.bootstrap.flex_ejp6nk$;
  var flexGrow1 = $module$bootstrap.bootstrap.flexGrow1_ejp6nk$;
  var padding1 = $module$bootstrap.bootstrap.padding1_ejp6nk$;
  var input = $module$domx.domx.input_xh1a31$;
  var btnSecondary = $module$bootstrap.bootstrap.btnSecondary_ejp6nk$;
  var fas = $module$fontawesome.fontawesome.fas_46n0ku$;
  var textarea = $module$domx.domx.textarea_vbubjb$;
  var removeFromParent = $module$common.common.removeFromParent_asww5s$;
  var row = $module$bootstrap.bootstrap.row_gnmiz0$;
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
  SequenceTakenException.prototype = Object.create(Exception.prototype);
  SequenceTakenException.prototype.constructor = SequenceTakenException;
  TicTacToeLoggedOutControl.prototype = Object.create(LoggingInCtx.prototype);
  TicTacToeLoggedOutControl.prototype.constructor = TicTacToeLoggedOutControl;
  function inactiveUI$lambda$lambda$lambda$lambda$lambda(this$inactiveUI) {
    return function (it) {
      this$inactiveUI.control.fbCtx.signOut();
      return Unit;
    };
  }
  function inactiveUI$lambda$lambda$lambda$lambda(this$inactiveUI) {
    return function ($receiver) {
      $receiver.innerText = 'Sign Out';
      clickEvent($receiver, inactiveUI$lambda$lambda$lambda$lambda$lambda(this$inactiveUI));
      return Unit;
    };
  }
  function inactiveUI$lambda$lambda$lambda(this$inactiveUI) {
    return function ($receiver) {
      ticTacToe($receiver);
      $receiver.leftButton_3uqggf$(inactiveUI$lambda$lambda$lambda$lambda(this$inactiveUI));
      return Unit;
    };
  }
  function inactiveUI$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.active = true;
    return Unit;
  }
  function inactiveUI$lambda$lambda$lambda$lambda$lambda_0(this$inactiveUI) {
    return function (it) {
      this$inactiveUI.control.playerRef.set(obj(inactiveUI$lambda$lambda$lambda$lambda$lambda$lambda), setOptionsMerge());
      return Unit;
    };
  }
  function inactiveUI$lambda$lambda$lambda$lambda_0(this$inactiveUI) {
    return function ($receiver) {
      btnPrimary($receiver);
      $receiver.innerText = 'Enter Waiting Room';
      clickEvent($receiver, inactiveUI$lambda$lambda$lambda$lambda$lambda_0(this$inactiveUI));
      return Unit;
    };
  }
  function inactiveUI$lambda$lambda$lambda_0(this$inactiveUI) {
    return function ($receiver) {
      flexCenter($receiver);
      btnButton($receiver, inactiveUI$lambda$lambda$lambda$lambda_0(this$inactiveUI));
      return Unit;
    };
  }
  function inactiveUI$lambda$lambda(this$inactiveUI) {
    return function ($receiver) {
      $receiver.top_vesf63$(inactiveUI$lambda$lambda$lambda(this$inactiveUI));
      $receiver.main_iw61es$(inactiveUI$lambda$lambda$lambda_0(this$inactiveUI));
      return Unit;
    };
  }
  function inactiveUI$lambda(this$inactiveUI) {
    return function ($receiver) {
      screenLayout($receiver, inactiveUI$lambda$lambda(this$inactiveUI));
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
  function PlayerActiveWaiting$enter$lambda$lambda$lambda$lambda(closure$ownGameRef) {
    return function ($receiver) {
      $receiver.active = false;
      $receiver.game = closure$ownGameRef.id;
      return Unit;
    };
  }
  function PlayerActiveWaiting$enter$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.merge = true;
    return Unit;
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function PlayerActiveWaiting$enter$lambda$lambda$lambda(closure$players) {
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
  function PlayerActiveWaiting$enter$lambda$lambda$lambda_0($receiver) {
    $receiver.merge = true;
    return Unit;
  }
  function PlayerActiveWaiting$enter$lambda$lambda_0(this$PlayerActiveWaiting_0, closure$otherPlayerChange_0, closure$ownGameRef_0) {
    return function (tx_0, continuation_0, suspended) {
      var instance = new Coroutine$PlayerActiveWaiting$enter$lambda$lambda(this$PlayerActiveWaiting_0, closure$otherPlayerChange_0, closure$ownGameRef_0, tx_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerActiveWaiting$enter$lambda$lambda(this$PlayerActiveWaiting_0, closure$otherPlayerChange_0, closure$ownGameRef_0, tx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$PlayerActiveWaiting = this$PlayerActiveWaiting_0;
    this.local$closure$otherPlayerChange = closure$otherPlayerChange_0;
    this.local$closure$ownGameRef = closure$ownGameRef_0;
    this.local$tmp$ = void 0;
    this.local$playersFree = void 0;
    this.local$players = void 0;
    this.local$tx = tx_0;
  }
  Coroutine$PlayerActiveWaiting$enter$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PlayerActiveWaiting$enter$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PlayerActiveWaiting$enter$lambda$lambda.prototype.constructor = Coroutine$PlayerActiveWaiting$enter$lambda$lambda;
  Coroutine$PlayerActiveWaiting$enter$lambda$lambda.prototype.doResume = function () {
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
            this.result_0 = await_0(this.local$tx.get(player), this);
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
                this.local$tx.set(element, obj(PlayerActiveWaiting$enter$lambda$lambda$lambda$lambda(this.local$closure$ownGameRef)), obj(PlayerActiveWaiting$enter$lambda$lambda$lambda$lambda_0));
              }
              this.local$tx.set(this.local$closure$ownGameRef, obj(PlayerActiveWaiting$enter$lambda$lambda$lambda(this.local$players)), obj(PlayerActiveWaiting$enter$lambda$lambda$lambda_0));
              return true;
            }
             else {
              return rollback();
            }

          case 7:
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
  function PlayerActiveWaiting$enter$lambda$lambda_1() {
    return false;
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
            this.result_0 = txTry(this.local$this$PlayerActiveWaiting.control.db, PlayerActiveWaiting$enter$lambda$lambda_0(this.local$this$PlayerActiveWaiting, otherPlayerChange, this.local$ownGameRef), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            var started = onRollback(this.result_0, PlayerActiveWaiting$enter$lambda$lambda_1);
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
  function PlayerActiveWaiting$enter$lambda$lambda$lambda_1(closure$channel_0, closure$dc_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda(closure$channel_0, closure$dc_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerActiveWaiting$enter$lambda$lambda$lambda(closure$channel_0, closure$dc_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$dc = closure$dc_0;
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
        launch(coroutines.GlobalScope, void 0, void 0, PlayerActiveWaiting$enter$lambda$lambda$lambda_1(closure$channel_0, element_0));
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
  function PlayerCtx$cleanupGame$lambda$lambda(closure$gameRef_0, this$PlayerCtx_0) {
    return function (tx_0, continuation_0, suspended) {
      var instance = new Coroutine$PlayerCtx$cleanupGame$lambda$lambda(closure$gameRef_0, this$PlayerCtx_0, tx_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerCtx$cleanupGame$lambda$lambda(closure$gameRef_0, this$PlayerCtx_0, tx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$gameRef = closure$gameRef_0;
    this.local$this$PlayerCtx = this$PlayerCtx_0;
    this.local$game = void 0;
    this.local$tx = tx_0;
  }
  Coroutine$PlayerCtx$cleanupGame$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PlayerCtx$cleanupGame$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PlayerCtx$cleanupGame$lambda$lambda.prototype.constructor = Coroutine$PlayerCtx$cleanupGame$lambda$lambda;
  Coroutine$PlayerCtx$cleanupGame$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = await_0(this.local$tx.get(this.local$closure$gameRef), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$game = this.result_0;
            if (this.local$game.exists) {
              this.state_0 = 3;
              this.result_0 = await_0(this.local$tx.get(this.local$this$PlayerCtx.playerRef), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              return rollback();
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
                this.local$tx.delete(this.local$game.ref);
                tmp$_0 = true;
              }
               else {
                this.local$tx.update(this.local$game.ref, gameData);
                tmp$_0 = false;
              }
              var deleted = tmp$_0;
              this.local$tx.set(this.local$this$PlayerCtx.playerRef, playerToWrite);
              return deleted;
            }
             else {
              return rollback();
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
  function PlayerCtx$cleanupGame$lambda$lambda_0() {
    return false;
  }
  function PlayerCtx$cleanupGame$lambda(this$PlayerCtx_0, closure$gameRef_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$PlayerCtx$cleanupGame$lambda(this$PlayerCtx_0, closure$gameRef_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerCtx$cleanupGame$lambda(this$PlayerCtx_0, closure$gameRef_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
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
            this.result_0 = txTry(this.local$this$PlayerCtx.db, PlayerCtx$cleanupGame$lambda$lambda(this.local$closure$gameRef, this.local$this$PlayerCtx), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = onRollback(this.result_0, PlayerCtx$cleanupGame$lambda$lambda_0);
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
    launch_0(PlayerCtx$cleanupGame$lambda(this, gameRef));
  };
  function PlayerCtx$createPlayer$lambda(this$PlayerCtx_0) {
    return function (tx_0, continuation_0, suspended) {
      var instance = new Coroutine$PlayerCtx$createPlayer$lambda(this$PlayerCtx_0, tx_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$PlayerCtx$createPlayer$lambda(this$PlayerCtx_0, tx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$PlayerCtx = this$PlayerCtx_0;
    this.local$tx = tx_0;
  }
  Coroutine$PlayerCtx$createPlayer$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$PlayerCtx$createPlayer$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$PlayerCtx$createPlayer$lambda.prototype.constructor = Coroutine$PlayerCtx$createPlayer$lambda;
  Coroutine$PlayerCtx$createPlayer$lambda.prototype.doResume = function () {
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
            var player = this.result_0;
            if (!player.exists) {
              return this.local$tx.set(this.local$this$PlayerCtx.playerRef, this.local$this$PlayerCtx.newPlayer());
            }
             else {
              return rollback();
            }

          case 3:
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
  PlayerCtx.prototype.createPlayer = function () {
    txDefer(this.db, PlayerCtx$createPlayer$lambda(this));
  };
  function PlayerCtx$startPlaying$lambda(closure$gameId, this$PlayerCtx, closure$ui, closure$killables) {
    return function (it) {
      if (!it.exists) {
        this$PlayerCtx.leaveGame_61zpoe$(closure$gameId);
      }
       else {
        var game = it.data();
        var playerIndex = indexOf(game.players, this$PlayerCtx.playerId);
        var weStart = playerIndex === game.firstPlayer;
        var playingCtx = new PlayingCtx(this$PlayerCtx, closure$gameId, playerIndex, weStart, closure$ui);
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
    var ui = playingUI(this);
    ui.root.setHourglass();
    this.mainCtx.gamesRef.doc(gameId).get().then(PlayerCtx$startPlaying$lambda(gameId, this, ui, killables));
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
  function get_other($receiver) {
    switch ($receiver.name) {
      case 'X':
        return Mark$O_getInstance();
      case 'O':
        return Mark$X_getInstance();
      default:return Kotlin.noWhenBranchMatched();
    }
  }
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
    Turn$Draw_instance = new Turn('Draw', 5);
    Turn$Alone_instance = new Turn('Alone', 6);
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
  var Turn$Draw_instance;
  function Turn$Draw_getInstance() {
    Turn_initFields();
    return Turn$Draw_instance;
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
    return [Turn$Here_getInstance(), Turn$There_getInstance(), Turn$Check_getInstance(), Turn$Won_getInstance(), Turn$Lost_getInstance(), Turn$Draw_getInstance(), Turn$Alone_getInstance()];
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
      case 'Draw':
        return Turn$Draw_getInstance();
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
  var FieldWidth;
  var FieldHeight;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ValidCoords;
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
  function playfieldUI$lambda(closure$ourMark) {
    return function () {
      return get_other(closure$ourMark.invoke());
    };
  }
  function playfieldUI$lambda_0(closure$turn) {
    return function () {
      switch (closure$turn.invoke().name) {
        case 'Check':
        case 'There':
          return true;
        default:return false;
      }
    };
  }
  function playfieldUI$message(this$playfieldUI) {
    return function (msg) {
      return this$playfieldUI.appCtx.notify_a4mwiz$(msg);
    };
  }
  function playfieldUI$lambda_1(closure$message) {
    return function (it) {
      switch (it.name) {
        case 'Here':
          closure$message("It's your turn!");
          break;
        case 'Won':
        case 'Lost':
        case 'Draw':
          closure$message('The game has ended.');
          break;
        case 'Alone':
          closure$message('Your opponent left the game.');
          break;
        default:break;
      }
      return Unit;
    };
  }
  function playfieldUI$lambda_2(closure$turn) {
    return function () {
      return closure$turn.invoke() === Turn$Here_getInstance();
    };
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  var checkCountOverflow = Kotlin.kotlin.collections.checkCountOverflow_za3lpa$;
  function playfieldUI$lambda_3(closure$state) {
    return function () {
      var $receiver = ValidCoords;
      var count$result;
      count$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          count$result = 0;
          break count$break;
        }
        var count = 0;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (closure$state(element).invoke() === FieldState$Free_getInstance())
            checkCountOverflow((count = count + 1 | 0, count));
        }
        count$result = count;
      }
       while (false);
      return count$result;
    };
  }
  function playfieldUI$lambda_4(closure$freeLeft) {
    return function () {
      return closure$freeLeft.invoke() === 0;
    };
  }
  function playfieldUI$markStyle($receiver) {
    $receiver.style.cssText = 'stroke:black;stroke-width:0.1;fill:none;';
  }
  function playfieldUI$drawX$lambda$lambda($receiver) {
    $receiver.x1.baseVal.value = -0.5;
    $receiver.y1.baseVal.value = -0.5;
    $receiver.x2.baseVal.value = 0.5;
    $receiver.y2.baseVal.value = 0.5;
    return Unit;
  }
  function playfieldUI$drawX$lambda$lambda_0($receiver) {
    $receiver.x1.baseVal.value = -0.5;
    $receiver.y1.baseVal.value = 0.5;
    $receiver.x2.baseVal.value = 0.5;
    $receiver.y2.baseVal.value = -0.5;
    return Unit;
  }
  function playfieldUI$drawX$lambda(closure$markStyle) {
    return function ($receiver) {
      closure$markStyle($receiver);
      line($receiver, playfieldUI$drawX$lambda$lambda);
      line($receiver, playfieldUI$drawX$lambda$lambda_0);
      return Unit;
    };
  }
  function playfieldUI$drawX(closure$markStyle) {
    return function ($receiver) {
      return g($receiver, playfieldUI$drawX$lambda(closure$markStyle));
    };
  }
  function playfieldUI$drawO$lambda(closure$markStyle) {
    return function ($receiver) {
      closure$markStyle($receiver);
      $receiver.r.baseVal.value = 0.5;
      return Unit;
    };
  }
  function playfieldUI$drawO(closure$markStyle) {
    return function ($receiver) {
      return circle($receiver, playfieldUI$drawO$lambda(closure$markStyle));
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
  function playfieldUI$fieldUI$lambda$lambda$lambda$lambda($receiver) {
    $receiver.setScale(0.8, 0.8);
    return Unit;
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
  function playfieldUI$fieldUI$lambda$lambda$lambda(closure$drawX, closure$xState, closure$drawO, closure$oState) {
    return function ($receiver) {
      transform($receiver, playfieldUI$fieldUI$lambda$lambda$lambda$lambda);
      var markState = playfieldUI$fieldUI$lambda$lambda$lambda$markState;
      var $receiver_0 = closure$drawX($receiver);
      markState($receiver_0, closure$xState);
      closure$drawO($receiver);
      markState($receiver, closure$oState);
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda$lambda(closure$drawX, closure$xState, closure$drawO, closure$oState) {
    return function ($receiver) {
      g($receiver, playfieldUI$fieldUI$lambda$lambda$lambda(closure$drawX, closure$xState, closure$drawO, closure$oState));
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda$lambda$lambda_0(this$) {
    return function (it) {
      this$.style.cursor = it ? 'pointer' : 'default';
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda$lambda$lambda$lambda_0(closure$expectingSequence_0, closure$x_0, closure$y_0, this$playfieldUI_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$playfieldUI$fieldUI$lambda$lambda$lambda$lambda(closure$expectingSequence_0, closure$x_0, closure$y_0, this$playfieldUI_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$playfieldUI$fieldUI$lambda$lambda$lambda$lambda(closure$expectingSequence_0, closure$x_0, closure$y_0, this$playfieldUI_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$expectingSequence = closure$expectingSequence_0;
    this.local$closure$x = closure$x_0;
    this.local$closure$y = closure$y_0;
    this.local$this$playfieldUI = this$playfieldUI_0;
  }
  Coroutine$playfieldUI$fieldUI$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playfieldUI$fieldUI$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playfieldUI$fieldUI$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$playfieldUI$fieldUI$lambda$lambda$lambda$lambda;
  Coroutine$playfieldUI$fieldUI$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$ = this.local$this$playfieldUI;
            var tmp$_0 = this.local$closure$expectingSequence.v;
            var $receiver = new Placement();
            var closure$x = this.local$closure$x;
            var closure$y = this.local$closure$y;
            $receiver.x = closure$x;
            $receiver.y = closure$y;
            this.state_0 = 2;
            this.result_0 = move(tmp$, tmp$_0, $receiver, this);
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
  function playfieldUI$fieldUI$lambda$lambda$lambda_1(closure$canClick, closure$turn, closure$state, closure$expectingSequence, closure$x, closure$y, this$playfieldUI) {
    return function (it) {
      if (closure$canClick.now) {
        closure$turn.now = Turn$There_getInstance();
        closure$state.now = FieldState$Friend_getInstance();
        launch(coroutines.GlobalScope, void 0, void 0, playfieldUI$fieldUI$lambda$lambda$lambda$lambda_0(closure$expectingSequence, closure$x, closure$y, this$playfieldUI));
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
  function playfieldUI$fieldUI$lambda$lambda_0(closure$canClick, closure$turn, closure$state, closure$expectingSequence, closure$x, closure$y, this$playfieldUI, closure$hover) {
    return function ($receiver) {
      closure$canClick.forEach_qlkmfe$(playfieldUI$fieldUI$lambda$lambda$lambda_0($receiver));
      clickEvent($receiver, playfieldUI$fieldUI$lambda$lambda$lambda_1(closure$canClick, closure$turn, closure$state, closure$expectingSequence, closure$x, closure$y, this$playfieldUI));
      rxHover($receiver, closure$hover);
      rect($receiver, playfieldUI$fieldUI$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function playfieldUI$fieldUI$lambda_10(closure$x, closure$y, closure$drawX, closure$xState, closure$drawO, closure$oState, closure$canClick, closure$turn, closure$state, closure$expectingSequence, this$playfieldUI, closure$hover) {
    return function ($receiver) {
      var tmp$ = $receiver.transform.baseVal;
      var $receiver_0 = ensureNotNull($receiver.ownerSVGElement).createSVGTransform();
      $receiver_0.setTranslate(closure$x, closure$y);
      tmp$.appendItem($receiver_0);
      g($receiver, playfieldUI$fieldUI$lambda$lambda(closure$drawX, closure$xState, closure$drawO, closure$oState));
      a($receiver, playfieldUI$fieldUI$lambda$lambda_0(closure$canClick, closure$turn, closure$state, closure$expectingSequence, closure$x, closure$y, this$playfieldUI, closure$hover));
      return Unit;
    };
  }
  function playfieldUI$fieldUI(closure$state, closure$ourTurn, closure$ourMark, closure$drawX, closure$drawO, closure$turn, closure$expectingSequence, this$playfieldUI) {
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
      g($receiver, playfieldUI$fieldUI$lambda_10(x, y, closure$drawX, xState, closure$drawO, oState, canClick, closure$turn, state, closure$expectingSequence, this$playfieldUI, hover));
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
  function playfieldUI$lambda$lambda(closure$board) {
    return function ($receiver) {
      closure$board($receiver);
      return Unit;
    };
  }
  function playfieldUI$lambda_5(closure$killables, closure$board) {
    return function ($receiver) {
      padding2($receiver);
      aspectRatio($receiver, closure$killables, void 0, playfieldUI$lambda$lambda(closure$board));
      return Unit;
    };
  }
  function playfieldUI$markSvg$lambda($receiver) {
    $receiver.width.baseVal.valueAsString = '1em';
    $receiver.height.baseVal.valueAsString = '1em';
    viewBox($receiver, -0.5, -0.5, 1.0, 1.0);
    return Unit;
  }
  function playfieldUI$markSvg$lambda$lambda($receiver) {
    $receiver.setScale(0.8, 0.8);
    return Unit;
  }
  function playfieldUI$markSvg$lambda_0($receiver) {
    transform($receiver, playfieldUI$markSvg$lambda$lambda);
    return Unit;
  }
  function playfieldUI$markSvg($receiver) {
    return g(svg($receiver, playfieldUI$markSvg$lambda), playfieldUI$markSvg$lambda_0);
  }
  function playfieldUI$drawMark$lambda$lambda$lambda(closure$rxv) {
    return function () {
      return closure$rxv.invoke() === Mark$O_getInstance();
    };
  }
  function playfieldUI$drawMark$lambda$lambda$lambda_0(closure$rxv) {
    return function () {
      return closure$rxv.invoke() === Mark$X_getInstance();
    };
  }
  function playfieldUI$drawMark(closure$markSvg, closure$drawO, closure$drawX) {
    return function ($receiver, rxv) {
      var $receiver_0 = closure$markSvg($receiver);
      var closure$drawO_0 = closure$drawO;
      var closure$drawX_0 = closure$drawX;
      rxVisible(closure$drawO_0($receiver_0), playfieldUI$drawMark$lambda$lambda$lambda(rxv));
      rxVisible(closure$drawX_0($receiver_0), playfieldUI$drawMark$lambda$lambda$lambda_0(rxv));
      return $receiver_0;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda(closure$theirMark, closure$drawMark) {
    return function ($receiver) {
      plus($receiver, 'Opponent placing ');
      closure$drawMark($receiver, closure$theirMark);
      plus($receiver, ' ...');
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda_0(closure$ourMark, closure$drawMark) {
    return function ($receiver) {
      plus($receiver, 'Place your ');
      closure$drawMark($receiver, closure$ourMark);
      plus($receiver, ' !');
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda(closure$theirMark, closure$drawMark, closure$ourMark) {
    return function (it) {
      switch (it.name) {
        case 'Won':
          return get_textNode('You won!');
        case 'Lost':
          return get_textNode('You lost.');
        case 'Draw':
          return get_textNode("It's a draw.");
        case 'Check':
          return get_textNode('Waiting...');
        case 'There':
          return div(document, playfieldUI$lambda$lambda$lambda$lambda(closure$theirMark, closure$drawMark));
        case 'Here':
          return div(document, playfieldUI$lambda$lambda$lambda$lambda_0(closure$ourMark, closure$drawMark));
        case 'Alone':
          return get_textNode('Opponent left.');
        default:return Kotlin.noWhenBranchMatched();
      }
    };
  }
  function playfieldUI$lambda$lambda_0(closure$turn, closure$theirMark, closure$drawMark, closure$ourMark) {
    return function ($receiver) {
      rxPanel($receiver, closure$turn, playfieldUI$lambda$lambda$lambda(closure$theirMark, closure$drawMark, closure$ourMark));
      return Unit;
    };
  }
  function playfieldUI$lambda_6(closure$turn, closure$theirMark, closure$drawMark, closure$ourMark) {
    return function ($receiver) {
      flexCenter($receiver);
      span($receiver, playfieldUI$lambda$lambda_0(closure$turn, closure$theirMark, closure$drawMark, closure$ourMark));
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda_0($receiver) {
    margin1($receiver);
    return Unit;
  }
  function playfieldUI$lambda$lambda$lambda_1($receiver) {
    chevronDown($receiver);
    return Unit;
  }
  function playfieldUI$lambda$lambda$lambda$lambda$lambda(closure$ourMark) {
    return function (it) {
      closure$ourMark.now = get_other(closure$ourMark.now);
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda$lambda_1(closure$theirMark, closure$drawMark, closure$ourMark) {
    return function ($receiver) {
      plus($receiver, 'Change mark to ');
      closure$drawMark($receiver, closure$theirMark);
      clickEvent($receiver, playfieldUI$lambda$lambda$lambda$lambda$lambda(closure$ourMark));
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda$lambda_2(closure$theirMark, closure$drawMark, closure$ourMark) {
    return function ($receiver) {
      dropdownMenuRight($receiver);
      dropdownItemAnchor($receiver, playfieldUI$lambda$lambda$lambda$lambda_1(closure$theirMark, closure$drawMark, closure$ourMark));
      return Unit;
    };
  }
  function playfieldUI$lambda$lambda_1(closure$theirMark, closure$drawMark, closure$ourMark) {
    return function ($receiver) {
      invoke($receiver.element, playfieldUI$lambda$lambda$lambda_0);
      $receiver.button_3uqggf$(playfieldUI$lambda$lambda$lambda_1);
      invoke($receiver.menu, playfieldUI$lambda$lambda$lambda_2(closure$theirMark, closure$drawMark, closure$ourMark));
      return Unit;
    };
  }
  function playfieldUI$lambda_7(closure$theirMark, closure$drawMark, closure$ourMark) {
    return function ($receiver) {
      dropdown($receiver, playfieldUI$lambda$lambda_1(closure$theirMark, closure$drawMark, closure$ourMark));
      return Unit;
    };
  }
  function playfieldUI$lambda_8(closure$gameOverStates, closure$turn) {
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
      return plus_0(listOf_0(this$checkGameOver), toList(takeWhile(closure$sequenceExcluding($receiver, this$checkGameOver), playfieldUI$checkGameOver$reach$lambda(closure$state, closure$winner))));
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
  function playfieldUI$process(closure$expectingSequence, closure$isOver, closure$state, closure$party, closure$checkGameOver, closure$isDraw, closure$turn) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      if ($receiver.sequence < closure$expectingSequence.v)
        return;
      if (closure$isOver.now)
        return;
      if ($receiver.sequence > closure$expectingSequence.v)
        throw Error_init('expecting sequence ' + closure$expectingSequence.v + ', got ' + $receiver.sequence);
      closure$expectingSequence.v = $receiver.sequence + 1 | 0;
      if (Kotlin.isType($receiver, Placement)) {
        var coords = new Coords($receiver.x, $receiver.y);
        var state = closure$state(coords);
        var party = closure$party($receiver);
        state.now = party.field;
        tmp$_0 = closure$turn;
        if (closure$checkGameOver(coords))
          tmp$ = party.end;
        else if (closure$isDraw.now)
          tmp$ = Turn$Draw_getInstance();
        else
          tmp$ = party.next;
        tmp$_0.now = tmp$;
      }
       else if (Kotlin.isType($receiver, Leave))
        closure$turn.now = Turn$Alone_getInstance();
    };
  }
  function playfieldUI$lambda_9(closure$process) {
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
  function playfieldUI$lambda$lambda$lambda_3(closure$expectingSequence) {
    return function () {
      return closure$expectingSequence.v;
    };
  }
  function playfieldUI$lambda$lambda_2(closure$expectingSequence_0, this$playfieldUI_0, closure$killables_0, closure$stopListening_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$playfieldUI$lambda$lambda(closure$expectingSequence_0, this$playfieldUI_0, closure$killables_0, closure$stopListening_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$playfieldUI$lambda$lambda(closure$expectingSequence_0, this$playfieldUI_0, closure$killables_0, closure$stopListening_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$expectingSequence = closure$expectingSequence_0;
    this.local$this$playfieldUI = this$playfieldUI_0;
    this.local$closure$killables = closure$killables_0;
    this.local$closure$stopListening = closure$stopListening_0;
  }
  Coroutine$playfieldUI$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playfieldUI$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playfieldUI$lambda$lambda.prototype.constructor = Coroutine$playfieldUI$lambda$lambda;
  Coroutine$playfieldUI$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = leaveGame(this.local$this$playfieldUI, playfieldUI$lambda$lambda$lambda_3(this.local$closure$expectingSequence), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$closure$killables.kill();
            return this.local$closure$stopListening();
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
  function playfieldUI$lambda_10(closure$expectingSequence, this$playfieldUI, closure$killables, closure$stopListening) {
    return function () {
      launch(coroutines.GlobalScope, void 0, void 0, playfieldUI$lambda$lambda_2(closure$expectingSequence, this$playfieldUI, closure$killables, closure$stopListening));
      return Unit;
    };
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function playfieldUI($receiver) {
    var expectingSequence = {v: 0};
    var killables = new Killables();
    var highlights = new Emitter();
    var fields = LinkedHashMap_init();
    var state = playfieldUI$state(fields);
    var state_0 = playfieldUI$state_0(state);
    var ourMark = new Var(Mark$X_getInstance());
    var theirMark = Rx_init(playfieldUI$lambda(ourMark));
    var turn = new Var($receiver.weStart ? Turn$Here_getInstance() : Turn$There_getInstance());
    var isWaiting = Rx_init(playfieldUI$lambda_0(turn));
    var message = playfieldUI$message($receiver);
    turn.forEach_qlkmfe$(playfieldUI$lambda_1(message));
    rxDisplay($receiver.ui.spinner, isWaiting);
    var ourTurn = Rx_init(playfieldUI$lambda_2(turn));
    var freeLeft = Rx_init(playfieldUI$lambda_3(state));
    var isDraw = Rx_init(playfieldUI$lambda_4(freeLeft));
    var markStyle = playfieldUI$markStyle;
    var drawX = playfieldUI$drawX(markStyle);
    var drawO = playfieldUI$drawO(markStyle);
    var fieldUI = playfieldUI$fieldUI(state_0, ourTurn, ourMark, drawX, drawO, turn, expectingSequence, $receiver);
    var board = playfieldUI$board(fieldUI, highlights);
    $receiver.ui.root.newRoot_iw61es$(playfieldUI$lambda_5(killables, board));
    var markSvg = playfieldUI$markSvg;
    var drawMark = playfieldUI$drawMark(markSvg, drawO, drawX);
    $receiver.ui.layout.top.middle_iw61es$(playfieldUI$lambda_6(turn, theirMark, drawMark, ourMark));
    $receiver.ui.layout.top.right_iw61es$(playfieldUI$lambda_7(theirMark, drawMark, ourMark));
    var gameOverStates = setOf([Turn$Won_getInstance(), Turn$Lost_getInstance(), Turn$Draw_getInstance(), Turn$Alone_getInstance()]);
    var isOver = Rx_init(playfieldUI$lambda_8(gameOverStates, turn));
    var isOurs = playfieldUI$isOurs($receiver);
    var party = playfieldUI$party(isOurs);
    var dirs = listOf([new playfieldUI$Dir(1, -1), new playfieldUI$Dir(1, 0), new playfieldUI$Dir(1, 1), new playfieldUI$Dir(0, 1)]);
    var plus = playfieldUI$plus;
    var sequenceExcluding = playfieldUI$sequenceExcluding(plus);
    var unaryMinus = playfieldUI$unaryMinus;
    var opposite = playfieldUI$opposite(unaryMinus);
    var winBy = 3;
    var checkGameOver = playfieldUI$checkGameOver(state, sequenceExcluding, dirs, opposite, winBy, highlights);
    var process = playfieldUI$process(expectingSequence, isOver, state, party, checkGameOver, isDraw, turn);
    var stopListening = onSnapshotNext(orderBy($receiver.movesRef, getPropertyCallableRef('sequence', 1, function ($receiver) {
      return $receiver.sequence;
    }, function ($receiver, value) {
      $receiver.sequence = value;
    })), playfieldUI$lambda_9(process));
    return playfieldUI$lambda_10(expectingSequence, $receiver, killables, stopListening);
  }
  function PlayingCtx(playerCtx, gameId, playerIndex, weStart, ui) {
    this.playerCtx = playerCtx;
    this.gameId = gameId;
    this.playerIndex = playerIndex;
    this.weStart = weStart;
    this.ui = ui;
    this.playerRef = this.playerCtx.playerRef;
    this.playerId = this.playerCtx.playerId;
    this.gameRef = this.playerCtx.mainCtx.gamesRef.doc(this.gameId);
    this.movesRef = moves(this.gameRef);
    this.fbCtx = this.playerCtx.fbCtx;
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
  function SequenceTakenException() {
    Exception_init(this);
    this.name = 'SequenceTakenException';
  }
  SequenceTakenException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SequenceTakenException',
    interfaces: [Exception]
  };
  var SequenceStartsFrom;
  function move$lambda(this$move_0, closure$m_0) {
    return function (tx_0, continuation_0, suspended) {
      var instance = new Coroutine$move$lambda(this$move_0, closure$m_0, tx_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$move$lambda(this$move_0, closure$m_0, tx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$move = this$move_0;
    this.local$closure$m = closure$m_0;
    this.local$moveRef = void 0;
    this.local$tx = tx_0;
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
            this.local$moveRef = this.local$this$move.movesRef.doc(this.local$closure$m.sequence.toString());
            this.state_0 = 2;
            this.result_0 = await_0(this.local$tx.get(this.local$moveRef), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var currentMove = this.result_0;
            if (!currentMove.exists) {
              this.local$closure$m.player = this.local$this$move.playerIndex;
              return this.local$tx.set(this.local$moveRef, this.local$closure$m.wrapped);
            }
             else {
              throw new SequenceTakenException();
            }

          case 3:
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
  function move($receiver_0, seq_0, m_0, continuation_0, suspended) {
    var instance = new Coroutine$move($receiver_0, seq_0, m_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$move($receiver_0, seq_0, m_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$seq = seq_0;
    this.local$m = m_0;
  }
  Coroutine$move.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$move.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$move.prototype.constructor = Coroutine$move;
  Coroutine$move.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$m.sequence = this.local$seq;
            this.state_0 = 2;
            this.result_0 = tx(this.local$$receiver.db, move$lambda(this.local$$receiver, this.local$m), this);
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
  var Math_0 = Math;
  function tryLeave($receiver_0, trySeq_0, seq_0, continuation_0, suspended) {
    var instance = new Coroutine$tryLeave($receiver_0, trySeq_0, seq_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$tryLeave($receiver_0, trySeq_0, seq_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver = $receiver_0;
    this.local$trySeq = trySeq_0;
    this.local$seq = seq_0;
  }
  Coroutine$tryLeave.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryLeave.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryLeave.prototype.constructor = Coroutine$tryLeave;
  Coroutine$tryLeave.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = move(this.local$$receiver, this.local$trySeq, new Leave(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 6;
            this.state_0 = 5;
            continue;
          case 2:
            this.exceptionState_0 = 6;
            var e = this.exception_0;
            if (Kotlin.isType(e, SequenceTakenException)) {
              var a = this.local$seq();
              var b = this.local$trySeq + 1 | 0;
              this.state_0 = 3;
              this.result_0 = tryLeave(this.local$$receiver, Math_0.max(a, b), this.local$seq, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              throw e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  function leaveGame($receiver_0, seq_0, continuation_0, suspended) {
    var instance = new Coroutine$leaveGame($receiver_0, seq_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$leaveGame($receiver_0, seq_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$seq = seq_0;
  }
  Coroutine$leaveGame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$leaveGame.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$leaveGame.prototype.constructor = Coroutine$leaveGame;
  Coroutine$leaveGame.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = tryLeave(this.local$$receiver, this.local$seq(), this.local$seq, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver.playerCtx.leaveGame_61zpoe$(this.local$$receiver.gameId);
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
  function PlayingUI(playerCtx) {
    this.layout = screenLayout(playerCtx.appCtx.root.newRoot_iw61es$(), PlayingUI$layout$lambda(playerCtx));
    this.spinner = div(this.layout.top.right_iw61es$(PlayingUI$spinner$lambda), PlayingUI$spinner$lambda_0);
    this.root = new RootPanel(this.layout.main);
  }
  function PlayingUI$layout$lambda$lambda$lambda$lambda($receiver) {
    margin1($receiver);
    return Unit;
  }
  function PlayingUI$layout$lambda$lambda$lambda$lambda_0($receiver) {
    chevronLeft($receiver);
    return Unit;
  }
  function PlayingUI$layout$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.active = true;
    $receiver.game = null;
    return Unit;
  }
  function PlayingUI$layout$lambda$lambda$lambda$lambda$lambda$lambda(closure$playerCtx) {
    return function (it) {
      closure$playerCtx.playerRef.set(obj(PlayingUI$layout$lambda$lambda$lambda$lambda$lambda$lambda$lambda));
      return Unit;
    };
  }
  function PlayingUI$layout$lambda$lambda$lambda$lambda$lambda(closure$playerCtx) {
    return function ($receiver) {
      $receiver.innerText = 'Back to Waiting Room';
      clickEvent($receiver, PlayingUI$layout$lambda$lambda$lambda$lambda$lambda$lambda(closure$playerCtx));
      return Unit;
    };
  }
  function PlayingUI$layout$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.active = false;
    $receiver.game = null;
    return Unit;
  }
  function PlayingUI$layout$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$playerCtx) {
    return function (it) {
      closure$playerCtx.playerRef.set(obj(PlayingUI$layout$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0));
      return Unit;
    };
  }
  function PlayingUI$layout$lambda$lambda$lambda$lambda$lambda_0(closure$playerCtx) {
    return function ($receiver) {
      $receiver.innerText = 'Stop Playing';
      clickEvent($receiver, PlayingUI$layout$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$playerCtx));
      return Unit;
    };
  }
  function PlayingUI$layout$lambda$lambda$lambda$lambda_1(closure$playerCtx) {
    return function ($receiver) {
      dropdownItemAnchor($receiver, PlayingUI$layout$lambda$lambda$lambda$lambda$lambda(closure$playerCtx));
      dropdownItemAnchor($receiver, PlayingUI$layout$lambda$lambda$lambda$lambda$lambda_0(closure$playerCtx));
      return Unit;
    };
  }
  function PlayingUI$layout$lambda$lambda$lambda(closure$playerCtx) {
    return function ($receiver) {
      invoke($receiver.element, PlayingUI$layout$lambda$lambda$lambda$lambda);
      $receiver.button_3uqggf$(PlayingUI$layout$lambda$lambda$lambda$lambda_0);
      invoke($receiver.menu, PlayingUI$layout$lambda$lambda$lambda$lambda_1(closure$playerCtx));
      return Unit;
    };
  }
  function PlayingUI$layout$lambda$lambda(closure$playerCtx) {
    return function ($receiver) {
      dropdown($receiver.left, PlayingUI$layout$lambda$lambda$lambda(closure$playerCtx));
      return Unit;
    };
  }
  function PlayingUI$layout$lambda(closure$playerCtx) {
    return function ($receiver) {
      $receiver.top_vesf63$(PlayingUI$layout$lambda$lambda(closure$playerCtx));
      return Unit;
    };
  }
  function PlayingUI$spinner$lambda($receiver) {
    flexRow($receiver);
    return Unit;
  }
  function PlayingUI$spinner$lambda_0($receiver) {
    margin1($receiver);
    flexCenter($receiver);
    spinner($receiver);
    return Unit;
  }
  PlayingUI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayingUI',
    interfaces: []
  };
  function playingUI($receiver) {
    return new PlayingUI($receiver);
  }
  function main(args) {
    var ttt = new TicTacToeLoggedOutControl();
    ttt.start();
  }
  function ticTacToe$lambda($receiver) {
    $receiver.innerText = 'Tic Tac Toe';
    return Unit;
  }
  function ticTacToe($receiver) {
    $receiver.middleTitle_ocyzvr$(ticTacToe$lambda);
  }
  function TicTacToeLoggedOutControl() {
    LoggingInCtx_init('tictactoe', 'Tic Tac Toe', this);
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
  function waitingUI$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.active = false;
    return Unit;
  }
  function waitingUI$lambda$lambda$lambda$lambda$lambda(this$waitingUI) {
    return function (it) {
      this$waitingUI.control.playerRef.set(obj(waitingUI$lambda$lambda$lambda$lambda$lambda$lambda), setOptionsMerge());
      return Unit;
    };
  }
  function waitingUI$lambda$lambda$lambda$lambda(this$waitingUI) {
    return function ($receiver) {
      $receiver.innerText = 'Cancel';
      clickEvent($receiver, waitingUI$lambda$lambda$lambda$lambda$lambda(this$waitingUI));
      return Unit;
    };
  }
  function waitingUI$lambda$lambda$lambda(this$waitingUI) {
    return function ($receiver) {
      ticTacToe($receiver);
      $receiver.leftButton_3uqggf$(waitingUI$lambda$lambda$lambda$lambda(this$waitingUI));
      return Unit;
    };
  }
  function waitingUI$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.innerText = 'Waiting for opponent...';
    return Unit;
  }
  function waitingUI$lambda$lambda$lambda$lambda_0($receiver) {
    padding2($receiver);
    flex($receiver);
    flexGrow1($receiver);
    flexCenter($receiver);
    span($receiver, waitingUI$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function waitingUI$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    padding1($receiver);
    margin1($receiver);
    flexGrow1($receiver);
    $receiver.value = window.location.href;
    $receiver.readOnly = true;
    return Unit;
  }
  function waitingUI$lambda$lambda$lambda$lambda$lambda$lambda_0(it) {
    var t = textarea(document);
    t.value = window.location.href;
    ensureNotNull(document.body).appendChild(t);
    t.select();
    document.execCommand('copy');
    removeFromParent(t);
    return Unit;
  }
  function waitingUI$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    btnSecondary($receiver);
    margin1($receiver);
    fas($receiver, 'copy');
    clickEvent($receiver, waitingUI$lambda$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function waitingUI$lambda$lambda$lambda$lambda_1($receiver) {
    padding1($receiver);
    input($receiver, waitingUI$lambda$lambda$lambda$lambda$lambda_1);
    btnButton($receiver, waitingUI$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function waitingUI$lambda$lambda$lambda_0($receiver) {
    flexColumn($receiver);
    div($receiver, waitingUI$lambda$lambda$lambda$lambda_0);
    row($receiver, waitingUI$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function waitingUI$lambda$lambda(this$waitingUI) {
    return function ($receiver) {
      $receiver.top_vesf63$(waitingUI$lambda$lambda$lambda(this$waitingUI));
      $receiver.main_iw61es$(waitingUI$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function waitingUI$lambda(this$waitingUI) {
    return function ($receiver) {
      screenLayout($receiver, waitingUI$lambda$lambda(this$waitingUI));
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
  package$tictactoe.get_other_rgwsty$ = get_other;
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
  Object.defineProperty(Turn, 'Draw', {
    get: Turn$Draw_getInstance
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
  Object.defineProperty(package$tictactoe, 'FieldWidth', {
    get: function () {
      return FieldWidth;
    }
  });
  Object.defineProperty(package$tictactoe, 'FieldHeight', {
    get: function () {
      return FieldHeight;
    }
  });
  Object.defineProperty(package$tictactoe, 'ValidCoords', {
    get: function () {
      return ValidCoords;
    }
  });
  package$tictactoe.playfieldUI_uoq3fa$ = playfieldUI;
  package$tictactoe.PlayingCtx = PlayingCtx;
  package$tictactoe.moves_inmxie$ = moves;
  Object.defineProperty(Move, 'Companion', {
    get: Move$Companion_getInstance
  });
  package$tictactoe.Move = Move;
  package$tictactoe.Placement = Placement;
  package$tictactoe.Leave = Leave;
  package$tictactoe.SequenceTakenException = SequenceTakenException;
  Object.defineProperty(package$tictactoe, 'SequenceStartsFrom', {
    get: function () {
      return SequenceStartsFrom;
    }
  });
  package$tictactoe.move_dli9rx$ = move;
  package$tictactoe.tryLeave_a8394u$ = tryLeave;
  package$tictactoe.leaveGame_li81mw$ = leaveGame;
  package$tictactoe.PlayingUI = PlayingUI;
  package$tictactoe.playingUI_s1l8uj$ = playingUI;
  package$tictactoe.main_kand9s$ = main;
  package$tictactoe.ticTacToe_cgrbrx$ = ticTacToe;
  package$tictactoe.TicTacToeLoggedOutControl = TicTacToeLoggedOutControl;
  package$tictactoe.waitingUI_3w0waz$ = waitingUI;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  FieldWidth = 3;
  FieldHeight = 3;
  var $receiver = until(0, FieldWidth);
  var destination = ArrayList_init_0();
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var element = tmp$.next();
    var $receiver_0 = until(0, FieldHeight);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(new Coords(element, item));
    }
    var list = destination_0;
    addAll(destination, list);
  }
  ValidCoords = destination;
  SequenceStartsFrom = 0;
  main([]);
  Kotlin.defineModule('tictactoe', _);
  return _;
}(typeof tictactoe === 'undefined' ? {} : tictactoe, kotlin, domx, bootstrap, common, firebase, commonui, this['kotlinx-coroutines-core'], commonfb, fontawesome);

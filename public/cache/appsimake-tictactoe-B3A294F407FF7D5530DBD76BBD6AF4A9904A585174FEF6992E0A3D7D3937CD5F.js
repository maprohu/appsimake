if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-tictactoelib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-tictactoelib' was not found. Please, check whether 'appsimake-tictactoelib' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-tictactoe'.");
}
this['appsimake-tictactoe'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_tictactoelib, $module$kotlinx_coroutines_core, $module$appsimake_firebase, $module$appsimake_commonshr, $module$appsimake_domx, $module$appsimake_fontawesome, $module$appsimake_bootstrap, $module$appsimake_commonfb) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ProgressTC = $module$appsimake_commonui.commonui.topandcontent.ProgressTC;
  var commonui = $module$appsimake_commonui.commonui;
  var GameStatus$Online = $module$appsimake_tictactoelib.tictactoelib.GameStatus.Online;
  var GameStatus$Playing = $module$appsimake_tictactoelib.tictactoelib.GameStatus.Playing;
  var equals = Kotlin.equals;
  var Move = $module$appsimake_tictactoelib.tictactoelib.Move;
  var Move$Leave = $module$appsimake_tictactoelib.tictactoelib.Move.Leave;
  var GameStatus$Offline = $module$appsimake_tictactoelib.tictactoelib.GameStatus.Offline;
  var Unit = Kotlin.kotlin.Unit;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var rollback = $module$appsimake_firebase.firebase.firestore.rollback_pdl1vj$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var txTry = $module$appsimake_firebase.firebase.firestore.txTry_4q5zrj$;
  var launchReport = $module$appsimake_commonui.commonui.launchReport_hilpzi$;
  var MultiView = $module$appsimake_commonui.commonui.view.MultiView;
  var GameStatus$Waiting = $module$appsimake_tictactoelib.tictactoelib.GameStatus.Waiting;
  var Var = $module$appsimake_commonshr.rx.Var;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var ProgressBackTC = $module$appsimake_commonui.commonui.topandcontent.ProgressBackTC;
  var tictactoelib = $module$appsimake_tictactoelib.tictactoelib;
  var get_tmp = $module$appsimake_commonshr.commonshr.get_tmp_py8usb$;
  var Lounge$Empty = $module$appsimake_tictactoelib.tictactoelib.Lounge.Empty;
  var Lounge$Waiting = $module$appsimake_tictactoelib.tictactoelib.Lounge.Waiting;
  var get_uid = $module$appsimake_firebase.firebase.auth.get_uid_32ydu7$;
  var Move$Start = $module$appsimake_tictactoelib.tictactoelib.Move.Start;
  var Random = Kotlin.kotlin.random.Random;
  var CsDbKillsApi = $module$appsimake_firebase.firebase.CsDbKillsApi;
  var HasKillsRedisplay = $module$appsimake_commonui.commonui.HasKillsRedisplay;
  var HasBackKillsRouting = $module$appsimake_commonui.commonui.view.HasBackKillsRouting;
  var HasRouting = $module$appsimake_commonui.commonui.view.HasRouting;
  var HasBack = $module$appsimake_commonui.commonui.HasBack;
  var get_inbox = $module$appsimake_commonshr.commonshr.get_inbox_py8usb$;
  var get_public = $module$appsimake_commonshr.commonshr.get_public_csfjwe$;
  var get_moves = $module$appsimake_tictactoelib.tictactoelib.get_moves_f80bip$;
  var report = $module$appsimake_commonshr.commonshr.report_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Move$Placement = $module$appsimake_tictactoelib.tictactoelib.Move.Placement;
  var get_redoAlt = $module$appsimake_fontawesome.fontawesome.get_redoAlt_xml72e$;
  var get_times = $module$appsimake_fontawesome.fontawesome.get_times_xml72e$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var ListEvent$Add = $module$appsimake_commonshr.commonshr.ListEvent.Add;
  var map = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.map_610k8f$;
  var widget = $module$appsimake_commonui.commonui.widget;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var column = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var get_input = $module$appsimake_domx.domx.get_input_asww5s$;
  var get_px1 = $module$appsimake_bootstrap.bootstrap.get_px1_kre7dp$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_asww5s$;
  var get_copy = $module$appsimake_fontawesome.fontawesome.get_copy_xml72e$;
  var copyToClipboard = $module$appsimake_domx.common.copyToClipboard_pdl1vz$;
  var row = $module$appsimake_bootstrap.bootstrap.row_gnmiz0$;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var CsKillsView = $module$appsimake_commonui.commonui.view.CsKillsView;
  var HasKillKillsView = $module$appsimake_commonui.commonui.view.HasKillKillsView;
  var BackCsDbKillsUixApi = $module$appsimake_commonfb.commonfb.BackCsDbKillsUixApi;
  var KillsMessagingUixApi = $module$appsimake_commonfb.commonfb.KillsMessagingUixApi;
  var ForwardBase = $module$appsimake_commonui.commonui.view.ForwardBase;
  var FBBackApi = $module$appsimake_commonfb.commonfb.FBBackApi;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var takeWhile = Kotlin.kotlin.sequences.takeWhile_euau3h$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var Emitter = $module$appsimake_commonshr.common.Emitter;
  var get_fn = $module$appsimake_commonshr.commonshr.get_fn_4b7k9i$;
  var killable = $module$appsimake_commonshr.killable;
  var rx = $module$appsimake_commonshr.rx.rx_m71pkk$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var throwCCE = Kotlin.throwCCE;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_gexuht$;
  var def = $module$appsimake_domx.styles.def_722sht$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var get_svg = $module$appsimake_domx.svgx.get_svg_asww5s$;
  var get_cls_0 = $module$appsimake_domx.svgx.get_cls_npzfio$;
  var get_dNone = $module$appsimake_bootstrap.bootstrap.get_dNone_kre7dp$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var get_symbol = $module$appsimake_domx.svgx.get_symbol_asww5s$;
  var get_overflowVisible = $module$appsimake_domx.styles.get_overflowVisible_kre7dp$;
  var get_g = $module$appsimake_domx.svgx.get_g_asww5s$;
  var get_line = $module$appsimake_domx.svgx.get_line_asww5s$;
  var get_circle = $module$appsimake_domx.svgx.get_circle_asww5s$;
  var get_ref = $module$appsimake_domx.domx.get_ref_ejp6nk$;
  var get_m2 = $module$appsimake_bootstrap.bootstrap.get_m2_kre7dp$;
  var get_height0 = $module$appsimake_domx.styles.get_height0_kre7dp$;
  var transform = $module$appsimake_domx.svgx.transform_udgqj7$;
  var get_use = $module$appsimake_domx.svgx.get_use_asww5s$;
  var set_xlinkHref = $module$appsimake_domx.svgx.set_xlinkHref_15dcce$;
  var get_a = $module$appsimake_domx.svgx.get_a_asww5s$;
  var get_rect = $module$appsimake_domx.svgx.get_rect_asww5s$;
  var set = $module$appsimake_domx.domx.set_56wq3j$;
  var get_bgLight = $module$appsimake_bootstrap.bootstrap.get_bgLight_kre7dp$;
  var get_borderTop = $module$appsimake_bootstrap.bootstrap.get_borderTop_kre7dp$;
  var get_widget = $module$appsimake_commonui.commonui.widget.get_widget_asww5s$;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var get_mx1 = $module$appsimake_bootstrap.bootstrap.get_mx1_kre7dp$;
  var get_iconSquare = $module$appsimake_commonui.commonui.widget.get_iconSquare_kre7dp$;
  var viewBox = $module$appsimake_domx.svgx.viewBox_wedmho$;
  var DbApi = $module$appsimake_firebase.firebase.DbApi;
  var FbLinksFactory = $module$appsimake_commonfb.commonfb.FbLinksFactory;
  var forwarding = $module$appsimake_commonui.commonui.view.forwarding_caeb5u$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var hourglass = $module$appsimake_commonui.commonui.view.hourglass_9knj8w$;
  var BaseTC = $module$appsimake_commonui.commonui.links.BaseTC;
  var LinkApi = $module$appsimake_commonui.commonui.links.LinkApi;
  var HasDbLibUser = $module$appsimake_firebase.firebase.HasDbLibUser;
  var HasMessaging = $module$appsimake_commonfb.commonfb.HasMessaging;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var advance = $module$appsimake_commonui.commonui.view.advance_zadjfr$;
  var privateOf = $module$appsimake_firebase.firebase.firestore.privateOf_30ab3o$;
  var get_singletons = $module$appsimake_commonshr.commonshr.get_singletons_v34c5b$;
  var get_status = $module$appsimake_tictactoelib.tictactoelib.get_status_f98aja$;
  var get_lounge = $module$appsimake_tictactoelib.tictactoelib.get_lounge_cz4ylz$;
  var inboxOf = $module$appsimake_firebase.firebase.firestore.inboxOf_30ab3o$;
  var MessagingControl = $module$appsimake_commonfb.commonfb.messaging.MessagingControl;
  var FBApi = $module$appsimake_commonfb.commonfb.FBApi;
  var HasDbKillsLibUser = $module$appsimake_firebase.firebase.HasDbKillsLibUser;
  var get_user = $module$appsimake_fontawesome.fontawesome.get_user_xml72e$;
  var HasKillsRouting = $module$appsimake_commonui.commonui.view.HasKillsRouting;
  GS$None.prototype = Object.create(GS.prototype);
  GS$None.prototype.constructor = GS$None;
  GS$Waiting.prototype = Object.create(GS.prototype);
  GS$Waiting.prototype.constructor = GS$Waiting;
  GS$Playing.prototype = Object.create(GS.prototype);
  GS$Playing.prototype.constructor = GS$Playing;
  Active.prototype = Object.create(MultiView.prototype);
  Active.prototype.constructor = Active;
  BoardControlBase.prototype = Object.create(BoardTurnsDelegate.prototype);
  BoardControlBase.prototype.constructor = BoardControlBase;
  OnlineBoardControl.prototype = Object.create(BoardControlBase.prototype);
  OnlineBoardControl.prototype.constructor = OnlineBoardControl;
  Waiting.prototype = Object.create(CsKillsView.prototype);
  Waiting.prototype.constructor = Waiting;
  Board.prototype = Object.create(ForwardBase.prototype);
  Board.prototype.constructor = Board;
  SinglePlayerControl.prototype = Object.create(BoardControlBase.prototype);
  SinglePlayerControl.prototype.constructor = SinglePlayerControl;
  FieldState$Free.prototype = Object.create(FieldState.prototype);
  FieldState$Free.prototype.constructor = FieldState$Free;
  FieldState$Taken.prototype = Object.create(FieldState.prototype);
  FieldState$Taken.prototype.constructor = FieldState$Taken;
  TurnState$Starting.prototype = Object.create(TurnState.prototype);
  TurnState$Starting.prototype.constructor = TurnState$Starting;
  TurnState$Playing.prototype = Object.create(TurnState.prototype);
  TurnState$Playing.prototype.constructor = TurnState$Playing;
  TurnState$Waiting.prototype = Object.create(TurnState.prototype);
  TurnState$Waiting.prototype.constructor = TurnState$Waiting;
  GameState$Ongoing.prototype = Object.create(GameState.prototype);
  GameState$Ongoing.prototype.constructor = GameState$Ongoing;
  GameState$Draw.prototype = Object.create(GameState.prototype);
  GameState$Draw.prototype.constructor = GameState$Draw;
  GameState$GameOver.prototype = Object.create(GameState.prototype);
  GameState$GameOver.prototype.constructor = GameState$GameOver;
  GameState$Abandoned.prototype = Object.create(GameState.prototype);
  GameState$Abandoned.prototype.constructor = GameState$Abandoned;
  GameState$Corrupted.prototype = Object.create(GameState.prototype);
  GameState$Corrupted.prototype.constructor = GameState$Corrupted;
  Links.prototype = Object.create(FbLinksFactory.prototype);
  Links.prototype.constructor = Links;
  LoggedIn.prototype = Object.create(ForwardBase.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  SinglePlayer.prototype = Object.create(MultiView.prototype);
  SinglePlayer.prototype.constructor = SinglePlayer;
  function ActivePath() {
  }
  ActivePath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ActivePath',
    interfaces: [LoggedInPath]
  };
  function GS() {
  }
  function GS$None() {
    GS$None_instance = this;
    GS.call(this);
  }
  GS$None.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'None',
    interfaces: [GS]
  };
  var GS$None_instance = null;
  function GS$None_getInstance() {
    if (GS$None_instance === null) {
      new GS$None();
    }
    return GS$None_instance;
  }
  function GS$Waiting(game) {
    GS.call(this);
    this.game = game;
  }
  GS$Waiting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Waiting',
    interfaces: [GS]
  };
  GS$Waiting.prototype.component1 = function () {
    return this.game;
  };
  GS$Waiting.prototype.copy_61zpoe$ = function (game) {
    return new GS$Waiting(game === void 0 ? this.game : game);
  };
  GS$Waiting.prototype.toString = function () {
    return 'Waiting(game=' + Kotlin.toString(this.game) + ')';
  };
  GS$Waiting.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.game) | 0;
    return result;
  };
  GS$Waiting.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.game, other.game))));
  };
  function GS$Playing(opponent, game) {
    GS$Playing$Companion_getInstance();
    GS.call(this);
    this.opponent = opponent;
    this.game = game;
  }
  function GS$Playing$Companion() {
    GS$Playing$Companion_instance = this;
  }
  GS$Playing$Companion.prototype.of_k12awh$ = function (gs) {
    return new GS$Playing(gs.opponent.now, gs.game.now);
  };
  GS$Playing$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GS$Playing$Companion_instance = null;
  function GS$Playing$Companion_getInstance() {
    if (GS$Playing$Companion_instance === null) {
      new GS$Playing$Companion();
    }
    return GS$Playing$Companion_instance;
  }
  GS$Playing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Playing',
    interfaces: [GS]
  };
  GS$Playing.prototype.component1 = function () {
    return this.opponent;
  };
  GS$Playing.prototype.component2 = function () {
    return this.game;
  };
  GS$Playing.prototype.copy_puj7f4$ = function (opponent, game) {
    return new GS$Playing(opponent === void 0 ? this.opponent : opponent, game === void 0 ? this.game : game);
  };
  GS$Playing.prototype.toString = function () {
    return 'Playing(opponent=' + Kotlin.toString(this.opponent) + (', game=' + Kotlin.toString(this.game)) + ')';
  };
  GS$Playing.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opponent) | 0;
    result = result * 31 + Kotlin.hashCode(this.game) | 0;
    return result;
  };
  GS$Playing.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opponent, other.opponent) && Kotlin.equals(this.game, other.game)))));
  };
  GS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GS',
    interfaces: []
  };
  function Active(from, linkage) {
    MultiView.call(this, from);
    this.linkage = linkage;
    this.$delegate_ijqcrm$_0 = from;
    this.$delegate_ijqcrm$_1 = from;
    this.active_uamg8$_0 = this;
    this.gameStatus = this.loggedIn.gameStatus;
    this.gState = this.rx_y6x17j$(Active$gState$lambda(this));
    this.currentView_dozdko$_0 = this.get_oldKilled_vsdo34$(new Var(new ProgressTC(this)));
    this.forEach_xwzbbo$(this.gameStatus, Active_init$lambda(this));
    this.forEach_xwzbbo$(this.gState, Active_init$lambda_0(this));
    launchReport(this, Active_init$lambda_1(this));
  }
  Object.defineProperty(Active.prototype, 'active', {
    get: function () {
      return this.active_uamg8$_0;
    }
  });
  Object.defineProperty(Active.prototype, 'currentView', {
    get: function () {
      return this.currentView_dozdko$_0;
    }
  });
  Active.prototype.hourglass = function () {
    this.currentView.remAssign_11rb$(new ProgressTC(this));
  };
  function Active$playing$leave$lambda$lambda$lambda() {
    return new GameStatus$Online();
  }
  function Active$playing$leave$lambda$lambda$lambda_0(closure$gs) {
    return function ($receiver) {
      $receiver.eq_n266k$(Move.Companion.game, closure$gs.game);
      return Unit;
    };
  }
  function Coroutine$Active$playing$leave$lambda$lambda(this$Active_0, closure$gs_0, closure$andWait_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Active = this$Active_0;
    this.local$closure$gs = closure$gs_0;
    this.local$closure$andWait = closure$andWait_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Active$playing$leave$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Active$playing$leave$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Active$playing$leave$lambda$lambda.prototype.constructor = Coroutine$Active$playing$leave$lambda$lambda;
  Coroutine$Active$playing$leave$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getOrDefault_we3fe6$(this.local$this$Active.loggedIn.statusDoc, Active$playing$leave$lambda$lambda$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var st = this.result_0.doc;
            if (Kotlin.isType(st, GameStatus$Playing) && equals(st.game.now, this.local$closure$gs.game)) {
              postMove(this.local$$receiver, this.local$this$Active.loggedIn, GS$Playing$Companion_getInstance().of_k12awh$(st), st.seq.now + 1 | 0, new Move$Leave());
              tmp$_0 = this.local$this$Active.loggedIn.statusDoc;
              if (this.local$closure$andWait) {
                tmp$ = new GameStatus$Online();
              }
               else {
                tmp$ = new GameStatus$Offline();
              }
              this.local$$receiver.txSet_y1t3au$(tmp$_0, tmp$);
              this.state_0 = 3;
              this.result_0 = await_0(this.local$$receiver.query_wzkv1r$(this.local$this$Active.loggedIn.inboxMoves, Active$playing$leave$lambda$lambda$lambda_0(this.local$closure$gs)).get(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              return rollback('Leaving obsolete game.'), Unit;
            }

          case 3:
            var $receiver = this.result_0.docs;
            var tmp$_1;
            for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
              var element = $receiver[tmp$_1];
              this.local$$receiver.tx.delete(element.ref);
            }

            return Unit;
          case 4:
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
  function Active$playing$leave$lambda$lambda(this$Active_0, closure$gs_0, closure$andWait_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Active$playing$leave$lambda$lambda(this$Active_0, closure$gs_0, closure$andWait_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Active$playing$leave$lambda(this$Active_0, closure$gs_0, closure$andWait_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Active = this$Active_0;
    this.local$closure$gs = closure$gs_0;
    this.local$closure$andWait = closure$andWait_0;
  }
  Coroutine$Active$playing$leave$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Active$playing$leave$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Active$playing$leave$lambda.prototype.constructor = Coroutine$Active$playing$leave$lambda;
  Coroutine$Active$playing$leave$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = txTry(this.local$this$Active, Active$playing$leave$lambda$lambda(this.local$this$Active, this.local$closure$gs, this.local$closure$andWait), this);
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
  function Active$playing$leave$lambda(this$Active_0, closure$gs_0, closure$andWait_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Active$playing$leave$lambda(this$Active_0, closure$gs_0, closure$andWait_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Active$playing$leave(this$Active, closure$gs) {
    return function (andWait) {
      commonui.globalStatus.remAssign_11rb$(andWait ? 'Returning to Waiting Room...' : 'Going offline...');
      this$Active.hourglass();
      launchReport(this$Active.loggedIn, Active$playing$leave$lambda(this$Active, closure$gs, andWait));
    };
  }
  function Active$playing$lambda$lambda(closure$leave) {
    return function () {
      closure$leave(false);
      return Unit;
    };
  }
  function Active$playing$lambda$lambda_0(closure$leave) {
    return function () {
      closure$leave(true);
      return Unit;
    };
  }
  function Active$playing$lambda(closure$gs, closure$leave) {
    return function ($receiver) {
      return new OnlineBoardControl($receiver, closure$gs, Active$playing$lambda$lambda(closure$leave), Active$playing$lambda$lambda_0(closure$leave));
    };
  }
  Active.prototype.playing_u15jbc$ = function (gs) {
    var leave = Active$playing$leave(this, gs);
    return new Board(this, this.linkage, this.loggedIn, Active$playing$lambda(gs, leave));
  };
  Object.defineProperty(Active.prototype, 'db', {
    get: function () {
      return this.$delegate_ijqcrm$_0.db;
    }
  });
  Object.defineProperty(Active.prototype, 'lib', {
    get: function () {
      return this.$delegate_ijqcrm$_0.lib;
    }
  });
  Object.defineProperty(Active.prototype, 'links', {
    get: function () {
      return this.$delegate_ijqcrm$_0.links;
    }
  });
  Object.defineProperty(Active.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_ijqcrm$_0.loggedIn;
    }
  });
  Object.defineProperty(Active.prototype, 'messaging', {
    get: function () {
      return this.$delegate_ijqcrm$_0.messaging;
    }
  });
  Object.defineProperty(Active.prototype, 'user', {
    get: function () {
      return this.$delegate_ijqcrm$_0.user;
    }
  });
  Active.prototype.get_randomDoc_lsue4w$ = function ($receiver) {
    return this.$delegate_ijqcrm$_0.get_randomDoc_lsue4w$($receiver);
  };
  Active.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_ijqcrm$_0.get_randomDoc_sj9vaa$($receiver);
  };
  Active.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_ijqcrm$_0.get_ref_sj9vaa$($receiver);
  };
  Active.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_ijqcrm$_0.get_ref_aqty80$($receiver);
  };
  Active.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_ijqcrm$_0.delete_73z9b6$($receiver);
  };
  Active.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_ijqcrm$_0.delete_ihdkly$($receiver);
  };
  Active.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_ijqcrm$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  Active.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_ijqcrm$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  Active.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_ijqcrm$_0.query_wzkv1r$$default($receiver, query);
  };
  Active.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_ijqcrm$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  Active.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_ijqcrm$_0.save_73z9b6$($receiver);
  };
  Active.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_ijqcrm$_0.save_biv66q$($receiver);
  };
  Active.prototype.set_o9yh22$$default = function ($receiver, data, options) {
    return this.$delegate_ijqcrm$_0.set_o9yh22$$default($receiver, data, options);
  };
  Active.prototype.toFsDoc_bo0woj$$default = function ($receiver, source, default_0, continuation) {
    return this.$delegate_ijqcrm$_0.toFsDoc_bo0woj$$default($receiver, source, default_0, continuation);
  };
  Active.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_ijqcrm$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(Active.prototype, 'activeView', {
    get: function () {
      return this.$delegate_ijqcrm$_1.activeView;
    }
  });
  Object.defineProperty(Active.prototype, 'back', {
    get: function () {
      return this.linkage.back;
    }
  });
  function Active$gState$lambda(this$Active) {
    return function ($receiver) {
      var gs = this$Active.gameStatus.invoke();
      var block$result;
      if (Kotlin.isType(gs, GameStatus$Waiting)) {
        block$result = new GS$Waiting(gs.game.now);
      }
       else if (Kotlin.isType(gs, GameStatus$Playing)) {
        block$result = GS$Playing$Companion_getInstance().of_k12awh$(gs);
      }
       else {
        block$result = GS$None_getInstance();
      }
      return block$result;
    };
  }
  function Active_init$lambda(this$Active) {
    return function ($receiver, gs) {
      if (Kotlin.isType(gs, GameStatus$Offline)) {
        this$Active.back();
      }
      return Unit;
    };
  }
  function Active_init$lambda$lambda($receiver, tb) {
    remAssign(tb.title, 'Waiting Room');
    return Unit;
  }
  function Active_init$lambda_0(this$Active) {
    return function ($receiver, gs) {
      var tmp$, tmp$_0;
      tmp$_0 = this$Active.currentView;
      if (equals(gs, GS$None_getInstance()))
        tmp$ = new ProgressBackTC(this$Active, Active_init$lambda$lambda);
      else if (Kotlin.isType(gs, GS$Waiting))
        tmp$ = new Waiting(this$Active, gs);
      else if (Kotlin.isType(gs, GS$Playing))
        tmp$ = this$Active.playing_u15jbc$(gs);
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      tmp$_0.now = tmp$;
      return Unit;
    };
  }
  function Active_init$lambda$lambda$lambda() {
    return new GameStatus$Online();
  }
  function Active_init$lambda$lambda$lambda_0() {
    return new Lounge$Empty();
  }
  function Coroutine$Active_init$lambda$lambda(this$Active_0, closure$game_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Active = this$Active_0;
    this.local$closure$game = closure$game_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Active_init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Active_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Active_init$lambda$lambda.prototype.constructor = Coroutine$Active_init$lambda$lambda;
  Coroutine$Active_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getOrDefault_we3fe6$(this.local$this$Active.loggedIn.statusDoc, Active_init$lambda$lambda$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var st = this.result_0;
            if (Kotlin.isType(st.doc, GameStatus$Online)) {
              this.state_0 = 3;
              this.result_0 = this.local$$receiver.getOrDefault_we3fe6$(this.local$this$Active.loggedIn.lounge, Active_init$lambda$lambda$lambda_0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              return rollback('game already created: ' + st.doc.type.now);
            }

          case 3:
            var lounge = this.result_0.doc;
            if (Kotlin.isType(lounge, Lounge$Empty)) {
              var tmp$ = this.local$this$Active.loggedIn.lounge;
              var $receiver = new Lounge$Waiting();
              var this$Active = this.local$this$Active;
              var closure$game = this.local$closure$game;
              $receiver.user.remAssign_11rc$(get_uid(this$Active));
              $receiver.game.remAssign_11rc$(closure$game);
              this.local$$receiver.txSet_y1t3au$(tmp$, $receiver);
              var tmp$_0 = this.local$this$Active.loggedIn.statusDoc;
              var $receiver_0 = new GameStatus$Waiting();
              var closure$game_0 = this.local$closure$game;
              $receiver_0.game.remAssign_11rc$(closure$game_0);
              return this.local$$receiver.txSet_y1t3au$(tmp$_0, $receiver_0);
            }
             else {
              if (Kotlin.isType(lounge, Lounge$Waiting)) {
                this.local$$receiver.txSet_y1t3au$(this.local$this$Active.loggedIn.lounge, new Lounge$Empty());
                var $receiver_1 = new GameStatus$Playing();
                $receiver_1.opponent.remAssign_11rc$(lounge.user.now);
                $receiver_1.game.remAssign_11rc$(lounge.game.now);
                var newSt = $receiver_1;
                this.local$$receiver.txSet_y1t3au$(this.local$this$Active.loggedIn.statusDoc, newSt);
                var newGs = GS$Playing$Companion_getInstance().of_k12awh$(newSt);
                var tmp$_1 = this.local$this$Active.loggedIn;
                var tmp$_2 = newSt.seq.now;
                var $receiver_2 = new Move$Start();
                var this$Active_0 = this.local$this$Active;
                var tmp$_3;
                tmp$_3 = $receiver_2.firstPlayer;
                var tmp$_4;
                if (Random.Default.nextBoolean()) {
                  tmp$_4 = get_uid(this$Active_0.loggedIn);
                }
                 else {
                  tmp$_4 = newGs.opponent;
                }
                tmp$_3.remAssign_11rc$(tmp$_4);
                return postMove(this.local$$receiver, tmp$_1, newGs, tmp$_2, $receiver_2), Unit;
              }
               else {
                return Kotlin.noWhenBranchMatched();
              }
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
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
  function Active_init$lambda$lambda_0(this$Active_0, closure$game_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Active_init$lambda$lambda(this$Active_0, closure$game_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Active_init$lambda(this$Active_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Active = this$Active_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$Active_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Active_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Active_init$lambda.prototype.constructor = Coroutine$Active_init$lambda;
  Coroutine$Active_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$Active.toChannel_z5dyp2$(this.local$this$Active.gameStatus).iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 8;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var gs = this.result_0;
            if (Kotlin.isType(gs, GameStatus$Online)) {
              var game = this.local$this$Active.get_randomDoc_sj9vaa$(get_tmp(tictactoelib.tictactoeLib.app)).id;
              this.state_0 = 6;
              this.result_0 = txTry(this.local$this$Active, Active_init$lambda$lambda_0(this.local$this$Active, game), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 7;
              continue;
            }

          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 2;
            continue;
          case 8:
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
  function Active_init$lambda_1(this$Active_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Active_init$lambda(this$Active_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Active.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Active',
    interfaces: [HasBackKillsRouting, HasRouting, HasBack, ActivePath, LoggedInPath, HasKillsRedisplay, CsDbKillsApi, MultiView]
  };
  function postMove($receiver, loggedIn, gs, seq, move) {
    move.from.remAssign_11rc$(get_uid(loggedIn));
    move.game.remAssign_11rc$(gs.game);
    move.seq.remAssign_11rc$(seq);
    var outgoing = get_moves(get_public(get_inbox(tictactoelib.tictactoeLib.app).doc_61zpoe$(gs.opponent)));
    $receiver.txSet_y1t3au$($receiver.get_randomDoc_lsue4w$(outgoing), move);
    if (!Kotlin.isType(move, Move$Leave)) {
      $receiver.txSet_y1t3au$($receiver.get_randomDoc_lsue4w$(loggedIn.inboxMoves), move);
    }
  }
  function OnlineBoardControl(board, gs, goOffline, restart) {
    BoardControlBase.call(this);
    this.board = board;
    this.gs = gs;
    this.goOffline = goOffline;
    this.restart = restart;
    this.topbar_f0zvfw$_0 = OnlineBoardControl$topbar$lambda(this);
    this.playerUids = listOf([get_uid(this.loggedIn), this.gs.opponent]);
    this.moveProc = new OnlineBoardControl$Moves(this);
    this.clicks = Channel(2147483647);
    var $receiver = this.board;
    launchReport($receiver, OnlineBoardControl_init$lambda$lambda($receiver, this));
    launchReport($receiver, OnlineBoardControl_init$lambda$lambda_0(this, $receiver));
  }
  Object.defineProperty(OnlineBoardControl.prototype, 'topbar', {
    get: function () {
      return this.topbar_f0zvfw$_0;
    }
  });
  function OnlineBoardControl$MovesItem(seq, move, next, abandon) {
    if (move === void 0)
      move = null;
    if (next === void 0)
      next = null;
    if (abandon === void 0)
      abandon = false;
    this.seq = seq;
    this.move = move;
    this.next = next;
    this.abandon = abandon;
  }
  OnlineBoardControl$MovesItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MovesItem',
    interfaces: []
  };
  function OnlineBoardControl$Moves($outer) {
    this.$outer = $outer;
    this.head = new OnlineBoardControl$MovesItem(GameStatus$Playing.Companion.FirstSeq);
  }
  OnlineBoardControl$Moves.prototype.get_following_eof6f6$ = function ($receiver) {
    var n = $receiver.next;
    var tmp$;
    if (n != null)
      tmp$ = n;
    else {
      var $receiver_0 = new OnlineBoardControl$MovesItem($receiver.seq + 1 | 0);
      $receiver.next = $receiver_0;
      tmp$ = $receiver_0;
    }
    return tmp$;
  };
  OnlineBoardControl$Moves.prototype.add_r7wwk$ = function (move) {
    var moveSeq = move.seq.now;
    if (Kotlin.isType(move, Move$Leave)) {
      var curr = this.head;
      while (curr.seq < moveSeq) {
        curr = this.get_following_eof6f6$(curr);
      }
      curr.abandon = true;
      this.process_0();
    }
     else {
      if (moveSeq < this.head.seq) {
        report('Sequence ' + moveSeq + ' alread porcessed. Current: ' + this.head.seq);
        this.$outer.states.gameState.remAssign_11rb$(GameState$Corrupted_getInstance());
      }
       else {
        var curr_0 = this.head;
        while (curr_0.seq < moveSeq) {
          curr_0 = this.get_following_eof6f6$(curr_0);
        }
        if (curr_0.move != null) {
          report('Duplicate sequence item: ' + moveSeq);
          this.$outer.states.gameState.remAssign_11rb$(GameState$Corrupted_getInstance());
        }
         else {
          curr_0.move = move;
          this.process_0();
        }
      }
    }
  };
  Object.defineProperty(OnlineBoardControl$Moves.prototype, 'isOngoing', {
    get: function () {
      return equals(this.$outer.gameState.now, GameState$Ongoing_getInstance());
    }
  });
  OnlineBoardControl$Moves.prototype.ifOngoing_0 = function (fn) {
    if (this.isOngoing) {
      fn();
    }
  };
  OnlineBoardControl$Moves.prototype.checkAbandon_0 = function () {
    if (this.head.abandon) {
      this.$outer.states.gameState.remAssign_11rb$(GameState$Abandoned_getInstance());
    }
  };
  function OnlineBoardControl$Moves$process$lambda(this$Moves) {
    return function () {
      this$Moves.checkAbandon_0();
      return Unit;
    };
  }
  OnlineBoardControl$Moves.prototype.process_0 = function () {
    while (this.isOngoing && this.head.move != null) {
      this.process_1(ensureNotNull(this.head.move));
      this.checkAbandon_0();
      this.head = this.get_following_eof6f6$(this.head);
    }
    this.ifOngoing_0(OnlineBoardControl$Moves$process$lambda(this));
  };
  OnlineBoardControl$Moves.prototype.process_1 = function (move) {
    commonui.globalStatus.remAssign_11rb$('Processing move: ' + move.type.now);
    if (Kotlin.isType(move, Move$Start))
      if (!equals(this.$outer.turnState.now, TurnState$Starting_getInstance())) {
        report('Start should be the first move');
        this.$outer.states.gameState.remAssign_11rb$(GameState$Corrupted_getInstance());
      }
       else {
        var firstPlayer = this.$outer.players.get_za3lpa$(this.$outer.playerUids.indexOf_11rb$(move.firstPlayer.now));
        this.$outer.states.turnState.remAssign_11rb$(new TurnState$Playing(firstPlayer));
      }
     else if (Kotlin.isType(move, Move$Placement)) {
      var playerIndex = this.$outer.playerUids.indexOf_11rb$(move.from.now);
      var player = this.$outer.players.get_za3lpa$(playerIndex);
      if (!equals(this.$outer.turnState.now, new TurnState$Playing(player)) && !equals(this.$outer.turnState.now, new TurnState$Waiting(player))) {
        report('Move from the wrong player.');
        this.$outer.states.gameState.remAssign_11rb$(GameState$Corrupted_getInstance());
      }
       else {
        this.$outer.states.take_ospv3j$(new Coords(move.x.now, move.y.now), player);
        this.$outer.states.turnState.remAssign_11rb$(new TurnState$Playing(this.$outer.players.get_za3lpa$(1 - playerIndex | 0)));
      }
    }
  };
  OnlineBoardControl$Moves.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Moves',
    interfaces: []
  };
  OnlineBoardControl.prototype.click_8jcxv$ = function ($receiver) {
    this.clicks.offer_11rb$($receiver);
  };
  Object.defineProperty(OnlineBoardControl.prototype, 'db', {
    get: function () {
      return this.board.db;
    }
  });
  Object.defineProperty(OnlineBoardControl.prototype, 'lib', {
    get: function () {
      return this.board.lib;
    }
  });
  Object.defineProperty(OnlineBoardControl.prototype, 'links', {
    get: function () {
      return this.board.links;
    }
  });
  Object.defineProperty(OnlineBoardControl.prototype, 'loggedIn', {
    get: function () {
      return this.board.loggedIn;
    }
  });
  Object.defineProperty(OnlineBoardControl.prototype, 'messaging', {
    get: function () {
      return this.board.messaging;
    }
  });
  Object.defineProperty(OnlineBoardControl.prototype, 'user', {
    get: function () {
      return this.board.user;
    }
  });
  OnlineBoardControl.prototype.get_randomDoc_lsue4w$ = function ($receiver) {
    return this.board.get_randomDoc_lsue4w$($receiver);
  };
  OnlineBoardControl.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.board.get_randomDoc_sj9vaa$($receiver);
  };
  OnlineBoardControl.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.board.get_ref_sj9vaa$($receiver);
  };
  OnlineBoardControl.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.board.get_ref_aqty80$($receiver);
  };
  OnlineBoardControl.prototype.delete_73z9b6$ = function ($receiver) {
    return this.board.delete_73z9b6$($receiver);
  };
  OnlineBoardControl.prototype.delete_ihdkly$ = function ($receiver) {
    return this.board.delete_ihdkly$($receiver);
  };
  OnlineBoardControl.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.board.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  OnlineBoardControl.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.board.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  OnlineBoardControl.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.board.query_wzkv1r$$default($receiver, query);
  };
  OnlineBoardControl.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.board.randomEditable_mx4g9l$$default($receiver, d);
  };
  OnlineBoardControl.prototype.save_73z9b6$ = function ($receiver) {
    return this.board.save_73z9b6$($receiver);
  };
  OnlineBoardControl.prototype.save_biv66q$ = function ($receiver) {
    return this.board.save_biv66q$($receiver);
  };
  OnlineBoardControl.prototype.set_o9yh22$$default = function ($receiver, data, options) {
    return this.board.set_o9yh22$$default($receiver, data, options);
  };
  OnlineBoardControl.prototype.toFsDoc_bo0woj$$default = function ($receiver, source, default_0, continuation) {
    return this.board.toFsDoc_bo0woj$$default($receiver, source, default_0, continuation);
  };
  OnlineBoardControl.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.board.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  function OnlineBoardControl$topbar$lambda$lambda$lambda$lambda$lambda(this$OnlineBoardControl) {
    return function () {
      this$OnlineBoardControl.restart();
      return Unit;
    };
  }
  function OnlineBoardControl$topbar$lambda$lambda$lambda$lambda$lambda$lambda(this$OnlineBoardControl) {
    return function () {
      this$OnlineBoardControl.goOffline();
      return Unit;
    };
  }
  function OnlineBoardControl$topbar$lambda(this$OnlineBoardControl) {
    return function ($receiver) {
      var receiver = this$OnlineBoardControl.board;
      var this$OnlineBoardControl_0 = this$OnlineBoardControl;
      remAssign($receiver.title, 'Playing Online');
      var $receiver_0 = $receiver.right.buttonGroup;
      $receiver_0.m1;
      var $receiver_1 = $receiver_0.button;
      $receiver_1.p2;
      $receiver_1.secondary;
      get_redoAlt($receiver_1.icon.fa);
      receiver.click_9375ex$($receiver_1, OnlineBoardControl$topbar$lambda$lambda$lambda$lambda$lambda(this$OnlineBoardControl_0));
      $receiver_0.dropdownSplit.secondary;
      var $receiver_2 = $receiver_0.menu;
      $receiver_2.right;
      var $receiver_3 = $receiver_2.item;
      $receiver_3.text.remAssign_61zpoe$('Stop Playing Online');
      get_times($receiver_3.icon.fa);
      receiver.click_512jbc$($receiver_3, OnlineBoardControl$topbar$lambda$lambda$lambda$lambda$lambda$lambda(this$OnlineBoardControl_0));
      return Unit;
    };
  }
  function OnlineBoardControl_init$lambda$lambda$lambda(this$OnlineBoardControl) {
    return function ($receiver) {
      $receiver.eq_n266k$(Move.Companion.game, this$OnlineBoardControl.gs.game);
      return Unit;
    };
  }
  function Coroutine$OnlineBoardControl_init$lambda$lambda$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$OnlineBoardControl_init$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$OnlineBoardControl_init$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$OnlineBoardControl_init$lambda$lambda$lambda.prototype.constructor = Coroutine$OnlineBoardControl_init$lambda$lambda$lambda;
  Coroutine$OnlineBoardControl_init$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$it.item.rxv.now;
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
  function OnlineBoardControl_init$lambda$lambda$lambda_0(it_0, continuation_0, suspended) {
    var instance = new Coroutine$OnlineBoardControl_init$lambda$lambda$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var mapNotNull = $module$appsimake_commonshr.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.channels.mapNotNull_8vobzo$;
  function Coroutine$filterIsInstance$lambda(typeClosure$T_0, isT_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$isT = isT_0;
    this.local$it = it_0;
  }
  Coroutine$filterIsInstance$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$filterIsInstance$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$filterIsInstance$lambda.prototype.constructor = Coroutine$filterIsInstance$lambda;
  Coroutine$filterIsInstance$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$isT(this.local$it) ? this.local$it : null;
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
  function filterIsInstance$lambda(typeClosure$T_0, isT_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$filterIsInstance$lambda(typeClosure$T_0, isT_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$OnlineBoardControl_init$lambda$lambda(this$_0, this$OnlineBoardControl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$this$OnlineBoardControl = this$OnlineBoardControl_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$OnlineBoardControl_init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$OnlineBoardControl_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$OnlineBoardControl_init$lambda$lambda.prototype.constructor = Coroutine$OnlineBoardControl_init$lambda$lambda;
  Coroutine$OnlineBoardControl_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var moves = map(mapNotNull(this.local$this$.listEvents_pujjsl$(this.local$this$.loggedIn.inboxMoves, OnlineBoardControl_init$lambda$lambda$lambda(this.local$this$OnlineBoardControl)), void 0, filterIsInstance$lambda(ListEvent$Add, Kotlin.isInstanceOf(ListEvent$Add))), void 0, OnlineBoardControl_init$lambda$lambda$lambda_0);
            this.local$tmp$ = moves.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var move = this.result_0;
            commonui.globalStatus.remAssign_11rb$('Received move: ' + move.type.now);
            this.local$this$OnlineBoardControl.moveProc.add_r7wwk$(move);
            this.state_0 = 2;
            continue;
          case 6:
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
  function OnlineBoardControl_init$lambda$lambda(this$_0, this$OnlineBoardControl_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$OnlineBoardControl_init$lambda$lambda(this$_0, this$OnlineBoardControl_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$OnlineBoardControl_init$lambda$lambda$lambda$lambda(this$_0, this$OnlineBoardControl_0, closure$click_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$this$OnlineBoardControl = this$OnlineBoardControl_0;
    this.local$closure$click = closure$click_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$OnlineBoardControl_init$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$OnlineBoardControl_init$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$OnlineBoardControl_init$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$OnlineBoardControl_init$lambda$lambda$lambda$lambda;
  Coroutine$OnlineBoardControl_init$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getOrFail_prxdpg$(this.local$this$.loggedIn.statusDoc, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var game = this.result_0.doc;
            if (Kotlin.isType(game, GameStatus$Playing) && equals(game.opponent.now, this.local$this$OnlineBoardControl.gs.opponent) && equals(game.game.now, this.local$this$OnlineBoardControl.gs.game)) {
              var newSeq = this.local$this$OnlineBoardControl.moveProc.head.seq;
              if (game.seq.now >= newSeq) {
                rollback('move already made.');
              }
              var $receiver = new Move$Placement();
              var closure$click = this.local$closure$click;
              $receiver.x.remAssign_11rc$(closure$click.x);
              $receiver.y.remAssign_11rc$(closure$click.y);
              var move = $receiver;
              var tmp$ = this.local$this$.loggedIn.statusDoc;
              game.seq.remAssign_11rc$(newSeq);
              this.local$$receiver.txSet_y1t3au$(tmp$, game);
              return postMove(this.local$$receiver, this.local$this$.loggedIn, this.local$this$OnlineBoardControl.gs, newSeq, move), Unit;
            }
             else {
              return rollback('obsolete game.'), Unit;
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
  function OnlineBoardControl_init$lambda$lambda$lambda$lambda(this$_0, this$OnlineBoardControl_0, closure$click_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$OnlineBoardControl_init$lambda$lambda$lambda$lambda(this$_0, this$OnlineBoardControl_0, closure$click_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$OnlineBoardControl_init$lambda$lambda_0(this$OnlineBoardControl_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$OnlineBoardControl = this$OnlineBoardControl_0;
    this.local$this$ = this$_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$OnlineBoardControl_init$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$OnlineBoardControl_init$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$OnlineBoardControl_init$lambda$lambda_0.prototype.constructor = Coroutine$OnlineBoardControl_init$lambda$lambda_0;
  Coroutine$OnlineBoardControl_init$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$OnlineBoardControl.clicks.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 8;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var click = this.result_0;
            var $this = this.local$this$OnlineBoardControl.states;
            if ($this.ourTurnRx.now && equals($this.state_p734xe$(click).now, FieldState.Free)) {
              $this.turnState.remAssign_11rb$(new TurnState$Waiting($this.thisPlayer.now));
              var this$ = this.local$this$;
              this.state_0 = 6;
              this.result_0 = txTry(this$, OnlineBoardControl_init$lambda$lambda$lambda$lambda(this$, this.local$this$OnlineBoardControl, click), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 7;
              continue;
            }

          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 2;
            continue;
          case 8:
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
  function OnlineBoardControl_init$lambda$lambda_0(this$OnlineBoardControl_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$OnlineBoardControl_init$lambda$lambda_0(this$OnlineBoardControl_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  OnlineBoardControl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnlineBoardControl',
    interfaces: [LoggedInPath, BoardControlBase]
  };
  function ui$lambda$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.goOffline();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_0(this$ui) {
    return function ($receiver) {
      return this$ui.messaging.hasVisibleMenuItems.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda_1(this$ui) {
    return function ($receiver) {
      return this$ui.messaging.hasVisibleMenuItems.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda_2($receiver) {
    get_m1(get_cls($receiver));
    remAssign($receiver, 'Waiting for Opponent...');
    return Unit;
  }
  function ui$lambda$lambda$lambda(this$ui) {
    return function ($receiver) {
      get_alignItemsCenter(get_cls($receiver));
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda_2);
      this$ui.get_messagingButton_asww5s$($receiver);
      return Unit;
    };
  }
  function ui$lambda$lambda(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_flexGrow1($receiver_0);
      flexCenter($receiver_0);
      column($receiver, ui$lambda$lambda$lambda(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_0($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_m1($receiver_0);
    get_px1($receiver_0);
    get_flexGrow1($receiver_0);
    $receiver.readOnly = true;
    $receiver.value = window.location.href;
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda_3(closure$url) {
    return function () {
      copyToClipboard(closure$url.value);
      return Unit;
    };
  }
  function ui$lambda$lambda_0(this$ui) {
    return function ($receiver) {
      flexFixedSize(get_cls($receiver));
      var url = invoke(get_input($receiver), ui$lambda$lambda$lambda_0);
      var $receiver_0 = get_insert($receiver).button;
      var this$ui_0 = this$ui;
      var $receiver_1 = $receiver_0.cls;
      get_m1($receiver_1);
      flexFixedSize($receiver_1);
      $receiver_0.secondary;
      get_copy($receiver_0.fa);
      this$ui_0.click_9375ex$($receiver_0, ui$lambda$lambda$lambda$lambda_3(url));
      return Unit;
    };
  }
  function ui$lambda(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_p1($receiver_0);
      get_flexGrow1($receiver_0);
      invoke(get_div($receiver), ui$lambda$lambda(this$ui));
      row($receiver, ui$lambda$lambda_0(this$ui));
      return Unit;
    };
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backButton_tdhe4g$($receiver_0.left);
    remAssign($receiver_0.title, 'Waiting Room');
    var $receiver_1 = $receiver_0.right.buttonGroup;
    $receiver_1.m1;
    var $receiver_2 = $receiver_1.button;
    $receiver_2.p2;
    get_times($receiver_2.fa);
    $receiver_2.secondary;
    $receiver.click_9375ex$($receiver_2, ui$lambda$lambda$lambda$lambda($receiver));
    var $receiver_3 = $receiver_1.dropdownSplit;
    $receiver.visible_od9jl4$($receiver_3, ui$lambda$lambda$lambda$lambda_0($receiver));
    $receiver_3.secondary;
    var $receiver_4 = $receiver_1.menu;
    $receiver.visible_od9jl4$($receiver_4, ui$lambda$lambda$lambda$lambda_1($receiver));
    $receiver_4.right;
    $receiver.get_messagingMenu_rp0x24$($receiver_4);
    return new TopAndContent($receiver_0.node, column(document, ui$lambda($receiver)));
  }
  function WaitingPath() {
  }
  WaitingPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WaitingPath',
    interfaces: [ActivePath]
  };
  function Waiting(parent, gs) {
    CsKillsView.call(this, parent);
    this.gs = gs;
    this.$delegate_qlzosv$_0 = parent;
    this.$delegate_qlzosv$_1 = parent;
    this.waiting_zfnx2i$_0 = this;
    this.rawView_vh7oty$_0 = ui(this);
    launchReport(this, Waiting_init$lambda(this));
  }
  Object.defineProperty(Waiting.prototype, 'waiting', {
    get: function () {
      return this.waiting_zfnx2i$_0;
    }
  });
  Object.defineProperty(Waiting.prototype, 'rawView', {
    get: function () {
      return this.rawView_vh7oty$_0;
    }
  });
  function Coroutine$Waiting$goOffline$lambda$lambda(this$Waiting_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Waiting = this$Waiting_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Waiting$goOffline$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Waiting$goOffline$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Waiting$goOffline$lambda$lambda.prototype.constructor = Coroutine$Waiting$goOffline$lambda$lambda;
  Coroutine$Waiting$goOffline$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getOrFail_prxdpg$(this.local$this$Waiting.loggedIn.statusDoc, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var st = this.result_0.doc;
            if (Kotlin.isType(st, GameStatus$Waiting) && equals(st.game.now, this.local$this$Waiting.gs.game)) {
              this.state_0 = 3;
              this.result_0 = this.local$$receiver.getOrFail_prxdpg$(this.local$this$Waiting.loggedIn.lounge, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              return rollback('Leaving obsolete game.');
            }

          case 3:
            var lounge = this.result_0.doc;
            if (Kotlin.isType(lounge, Lounge$Waiting) && equals(lounge.user.now, get_uid(this.local$this$Waiting.loggedIn)) && equals(lounge.game.now, this.local$this$Waiting.gs.game)) {
              this.local$$receiver.txSet_y1t3au$(this.local$this$Waiting.loggedIn.lounge, new Lounge$Empty());
            }
             else {
              this.local$$receiver.txSet_y1t3au$(this.local$this$Waiting.loggedIn.lounge, lounge);
            }

            return this.local$$receiver.txSet_y1t3au$(this.local$this$Waiting.loggedIn.statusDoc, new GameStatus$Offline());
          case 4:
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
  function Waiting$goOffline$lambda$lambda(this$Waiting_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Waiting$goOffline$lambda$lambda(this$Waiting_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Waiting$goOffline$lambda(this$Waiting_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Waiting = this$Waiting_0;
  }
  Coroutine$Waiting$goOffline$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Waiting$goOffline$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Waiting$goOffline$lambda.prototype.constructor = Coroutine$Waiting$goOffline$lambda;
  Coroutine$Waiting$goOffline$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = txTry(this.local$this$Waiting, Waiting$goOffline$lambda$lambda(this.local$this$Waiting), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$this$Waiting.back();
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
  function Waiting$goOffline$lambda(this$Waiting_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Waiting$goOffline$lambda(this$Waiting_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Waiting.prototype.goOffline = function () {
    commonui.globalStatus.remAssign_11rb$('Going offline...');
    this.active.hourglass();
    launchReport(this.loggedIn, Waiting$goOffline$lambda(this));
  };
  Object.defineProperty(Waiting.prototype, 'active', {
    get: function () {
      return this.$delegate_qlzosv$_0.active;
    }
  });
  Object.defineProperty(Waiting.prototype, 'db', {
    get: function () {
      return this.$delegate_qlzosv$_0.db;
    }
  });
  Object.defineProperty(Waiting.prototype, 'lib', {
    get: function () {
      return this.$delegate_qlzosv$_0.lib;
    }
  });
  Object.defineProperty(Waiting.prototype, 'links', {
    get: function () {
      return this.$delegate_qlzosv$_0.links;
    }
  });
  Object.defineProperty(Waiting.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_qlzosv$_0.loggedIn;
    }
  });
  Object.defineProperty(Waiting.prototype, 'messaging', {
    get: function () {
      return this.$delegate_qlzosv$_0.messaging;
    }
  });
  Object.defineProperty(Waiting.prototype, 'user', {
    get: function () {
      return this.$delegate_qlzosv$_0.user;
    }
  });
  Waiting.prototype.get_randomDoc_lsue4w$ = function ($receiver) {
    return this.$delegate_qlzosv$_0.get_randomDoc_lsue4w$($receiver);
  };
  Waiting.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_qlzosv$_0.get_randomDoc_sj9vaa$($receiver);
  };
  Waiting.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_qlzosv$_0.get_ref_sj9vaa$($receiver);
  };
  Waiting.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_qlzosv$_0.get_ref_aqty80$($receiver);
  };
  Waiting.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_qlzosv$_0.delete_73z9b6$($receiver);
  };
  Waiting.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_qlzosv$_0.delete_ihdkly$($receiver);
  };
  Waiting.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_qlzosv$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  Waiting.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_qlzosv$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  Waiting.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_qlzosv$_0.query_wzkv1r$$default($receiver, query);
  };
  Waiting.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_qlzosv$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  Waiting.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_qlzosv$_0.save_73z9b6$($receiver);
  };
  Waiting.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_qlzosv$_0.save_biv66q$($receiver);
  };
  Waiting.prototype.set_o9yh22$$default = function ($receiver, data, options) {
    return this.$delegate_qlzosv$_0.set_o9yh22$$default($receiver, data, options);
  };
  Waiting.prototype.toFsDoc_bo0woj$$default = function ($receiver, source, default_0, continuation) {
    return this.$delegate_qlzosv$_0.toFsDoc_bo0woj$$default($receiver, source, default_0, continuation);
  };
  Waiting.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_qlzosv$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(Waiting.prototype, 'back', {
    get: function () {
      return this.$delegate_qlzosv$_1.back;
    }
  });
  function Waiting_init$lambda$lambda(this$Waiting) {
    return function ($receiver) {
      $receiver.eq_n266k$(Move.Companion.game, this$Waiting.gs.game);
      return Unit;
    };
  }
  function Coroutine$Waiting_init$lambda$lambda(this$Waiting_0, closure$e_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Waiting = this$Waiting_0;
    this.local$closure$e = closure$e_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Waiting_init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Waiting_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Waiting_init$lambda$lambda.prototype.constructor = Coroutine$Waiting_init$lambda$lambda;
  Coroutine$Waiting_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getOrFail_prxdpg$(this.local$this$Waiting.loggedIn.statusDoc, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var st = this.result_0.doc;
            if (Kotlin.isType(st, GameStatus$Waiting) && equals(st.game.now, this.local$this$Waiting.gs.game)) {
              var game = this.local$closure$e.item.rxv.now.game.now;
              var opponent = this.local$closure$e.item.rxv.now.from.now;
              var $receiver = new GameStatus$Playing();
              $receiver.opponent.remAssign_11rc$(opponent);
              $receiver.game.remAssign_11rc$(game);
              var newSt = $receiver;
              return this.local$$receiver.txSet_y1t3au$(this.local$this$Waiting.loggedIn.statusDoc, newSt);
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
  function Waiting_init$lambda$lambda_0(this$Waiting_0, closure$e_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Waiting_init$lambda$lambda(this$Waiting_0, closure$e_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$filterIsInstance$lambda_0(typeClosure$T_0, isT_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$isT = isT_0;
    this.local$it = it_0;
  }
  Coroutine$filterIsInstance$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$filterIsInstance$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$filterIsInstance$lambda_0.prototype.constructor = Coroutine$filterIsInstance$lambda_0;
  Coroutine$filterIsInstance$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$isT(this.local$it) ? this.local$it : null;
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
  function filterIsInstance$lambda_0(typeClosure$T_0, isT_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$filterIsInstance$lambda_0(typeClosure$T_0, isT_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Waiting_init$lambda(this$Waiting_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Waiting = this$Waiting_0;
  }
  Coroutine$Waiting_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Waiting_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Waiting_init$lambda.prototype.constructor = Coroutine$Waiting_init$lambda;
  Coroutine$Waiting_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            commonui.globalStatus.remAssign_11rb$('Waiting for game start...');
            this.state_0 = 2;
            this.result_0 = mapNotNull(this.local$this$Waiting.listEvents_pujjsl$(this.local$this$Waiting.loggedIn.inboxMoves, Waiting_init$lambda$lambda(this.local$this$Waiting)), void 0, filterIsInstance$lambda_0(ListEvent$Add, Kotlin.isInstanceOf(ListEvent$Add))).receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var e_0 = this.result_0;
            commonui.globalStatus.remAssign_11rb$('Starting game...');
            this.state_0 = 3;
            this.result_0 = txTry(this.local$this$Waiting, Waiting_init$lambda$lambda_0(this.local$this$Waiting, e_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function Waiting_init$lambda(this$Waiting_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Waiting_init$lambda(this$Waiting_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Waiting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Waiting',
    interfaces: [KillsMessagingUixApi, BackCsDbKillsUixApi, HasBack, WaitingPath, ActivePath, CsKillsView, HasKillKillsView]
  };
  function BoardPath() {
  }
  BoardPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BoardPath',
    interfaces: [LoggedInPath]
  };
  function Board(from, linkage, loggedIn, control) {
    ForwardBase.call(this, from);
    this.$delegate_szmucu$_0 = loggedIn;
    this.$delegate_szmucu$_1 = linkage;
    this.board_9hfjo0$_0 = this;
    this.control = control(this);
    this.rawView_u782vd$_0 = ui_0(this);
  }
  Object.defineProperty(Board.prototype, 'board', {
    get: function () {
      return this.board_9hfjo0$_0;
    }
  });
  Object.defineProperty(Board.prototype, 'rawView', {
    get: function () {
      return this.rawView_u782vd$_0;
    }
  });
  Object.defineProperty(Board.prototype, 'db', {
    get: function () {
      return this.$delegate_szmucu$_0.db;
    }
  });
  Object.defineProperty(Board.prototype, 'lib', {
    get: function () {
      return this.$delegate_szmucu$_0.lib;
    }
  });
  Object.defineProperty(Board.prototype, 'links', {
    get: function () {
      return this.$delegate_szmucu$_0.links;
    }
  });
  Object.defineProperty(Board.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_szmucu$_0.loggedIn;
    }
  });
  Object.defineProperty(Board.prototype, 'messaging', {
    get: function () {
      return this.$delegate_szmucu$_0.messaging;
    }
  });
  Object.defineProperty(Board.prototype, 'user', {
    get: function () {
      return this.$delegate_szmucu$_0.user;
    }
  });
  Board.prototype.get_randomDoc_lsue4w$ = function ($receiver) {
    return this.$delegate_szmucu$_0.get_randomDoc_lsue4w$($receiver);
  };
  Board.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_szmucu$_0.get_randomDoc_sj9vaa$($receiver);
  };
  Board.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_szmucu$_0.get_ref_sj9vaa$($receiver);
  };
  Board.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_szmucu$_0.get_ref_aqty80$($receiver);
  };
  Board.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_szmucu$_0.delete_73z9b6$($receiver);
  };
  Board.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_szmucu$_0.delete_ihdkly$($receiver);
  };
  Board.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_szmucu$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  Board.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_szmucu$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  Board.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_szmucu$_0.query_wzkv1r$$default($receiver, query);
  };
  Board.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_szmucu$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  Board.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_szmucu$_0.save_73z9b6$($receiver);
  };
  Board.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_szmucu$_0.save_biv66q$($receiver);
  };
  Board.prototype.set_o9yh22$$default = function ($receiver, data, options) {
    return this.$delegate_szmucu$_0.set_o9yh22$$default($receiver, data, options);
  };
  Board.prototype.toFsDoc_bo0woj$$default = function ($receiver, source, default_0, continuation) {
    return this.$delegate_szmucu$_0.toFsDoc_bo0woj$$default($receiver, source, default_0, continuation);
  };
  Board.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_szmucu$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(Board.prototype, 'back', {
    get: function () {
      return this.$delegate_szmucu$_1.back;
    }
  });
  Board.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Board',
    interfaces: [FBBackApi, HasBack, BoardPath, LoggedInPath, ForwardBase]
  };
  function BoardTurns() {
  }
  BoardTurns.prototype.ourTurn = function () {
    return equals(this.gameState.invoke(), GameState$Ongoing_getInstance()) && equals(this.turnState.invoke(), new TurnState$Playing(this.thisPlayer.invoke()));
  };
  BoardTurns.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BoardTurns',
    interfaces: []
  };
  function BoardControl() {
  }
  BoardControl.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BoardControl',
    interfaces: [BoardTurns]
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function BoardState(dimensions, thisPlayer, winBy) {
    this.dimensions = dimensions;
    this.winBy = winBy;
    var $receiver = LinkedHashMap_init();
    var tmp$;
    tmp$ = get_validCoords(this.dimensions).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var value = new Var(FieldState$Free_getInstance());
      $receiver.put_xwzc9p$(element, value);
    }
    this.fields = $receiver;
    this.highlightsEmitter = new Emitter();
    this.highlights_ymtb9o$_0 = get_fn(this.highlightsEmitter);
    this.turnState_5fizmz$_0 = new Var(TurnState$Starting_getInstance());
    this.gameState_3aft8q$_0 = new Var(GameState$Ongoing_getInstance());
    this.thisPlayer_q3yoh8$_0 = new Var(thisPlayer);
    this.ourTurnRx = rx(killable.HasNoKill, BoardState$ourTurnRx$lambda(this));
    this.hasFree = rx(killable.HasNoKill, BoardState$hasFree$lambda(this));
  }
  Object.defineProperty(BoardState.prototype, 'highlights', {
    get: function () {
      return this.highlights_ymtb9o$_0;
    }
  });
  Object.defineProperty(BoardState.prototype, 'turnState', {
    get: function () {
      return this.turnState_5fizmz$_0;
    }
  });
  Object.defineProperty(BoardState.prototype, 'gameState', {
    get: function () {
      return this.gameState_3aft8q$_0;
    }
  });
  Object.defineProperty(BoardState.prototype, 'thisPlayer', {
    get: function () {
      return this.thisPlayer_q3yoh8$_0;
    }
  });
  BoardState.prototype.state_p734xe$ = function (coords) {
    return getValue(this.fields, coords);
  };
  BoardState.prototype.click_32usgv$ = defineInlineFunction('appsimake-tictactoe.tictactoe.board.BoardState.click_32usgv$', wrapFunction(function () {
    var FieldState = _.tictactoe.board.FieldState;
    var equals = Kotlin.equals;
    var TurnState$TurnState$Waiting_init = _.tictactoe.board.TurnState.Waiting;
    return function (coords, fn) {
      if (this.ourTurnRx.now && equals(this.state_p734xe$(coords).now, FieldState.Free)) {
        this.turnState.remAssign_11rb$(new TurnState$TurnState$Waiting_init(this.thisPlayer.now));
        fn();
      }
    };
  }));
  BoardState.prototype.get_withinBoard_8jcxv$ = function ($receiver) {
    return $receiver.x >= 0 && $receiver.y >= 0 && $receiver.x < this.dimensions.width && $receiver.y < this.dimensions.height;
  };
  function BoardState$checkGameOver$reach$lambda(this$BoardState, closure$winner) {
    return function (c) {
      return this$BoardState.get_withinBoard_8jcxv$(c) && equals(this$BoardState.state_p734xe$(c).now, closure$winner);
    };
  }
  function BoardState$checkGameOver$reach(this$checkGameOver, this$BoardState, closure$winner) {
    return function ($receiver) {
      return plus(listOf_0(this$checkGameOver), toList(takeWhile(sequenceExcluding($receiver, this$checkGameOver), BoardState$checkGameOver$reach$lambda(this$BoardState, closure$winner))));
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
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
  BoardState.prototype.checkGameOver_8jcxv$ = function ($receiver) {
    var winner = this.state_p734xe$($receiver).now;
    if (equals(winner, FieldState$Free_getInstance()))
      return false;
    var reach = BoardState$checkGameOver$reach($receiver, this, winner);
    var $receiver_0 = dirs;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      var transform$result;
      var s1 = reach(element);
      var s2 = reach(opposite(element));
      if ((s1.size + s2.size - 1 | 0) >= this.winBy) {
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
      this.highlightsEmitter.emit_11rb$(element_0);
    }
    return !hs.isEmpty();
  };
  BoardState.prototype.take_ospv3j$ = function (coords, player) {
    var st = this.state_p734xe$(coords);
    if (!equals(st.now, FieldState$Free_getInstance())) {
      report('Field already taken: ' + coords);
      this.gameState.remAssign_11rb$(GameState$Corrupted_getInstance());
    }
     else {
      st.remAssign_11rb$(new FieldState$Taken(player));
      if (this.checkGameOver_8jcxv$(coords)) {
        this.gameState.remAssign_11rb$(new GameState$GameOver(player));
      }
       else if (!this.hasFree.now) {
        this.gameState.remAssign_11rb$(GameState$Draw_getInstance());
      }
    }
  };
  function BoardState$ourTurnRx$lambda(this$BoardState) {
    return function ($receiver) {
      return this$BoardState.ourTurn();
    };
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  function BoardState$hasFree$lambda(this$BoardState) {
    return function ($receiver) {
      var $receiver_0 = this$BoardState.fields.values;
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (equals(element.invoke(), FieldState$Free_getInstance())) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }
  BoardState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoardState',
    interfaces: [BoardTurns]
  };
  function BoardTurnsDelegate(states) {
    this.states = states;
  }
  Object.defineProperty(BoardTurnsDelegate.prototype, 'gameState', {
    get: function () {
      return this.states.gameState;
    }
  });
  Object.defineProperty(BoardTurnsDelegate.prototype, 'highlights', {
    get: function () {
      return this.states.highlights;
    }
  });
  Object.defineProperty(BoardTurnsDelegate.prototype, 'thisPlayer', {
    get: function () {
      return this.states.thisPlayer;
    }
  });
  Object.defineProperty(BoardTurnsDelegate.prototype, 'turnState', {
    get: function () {
      return this.states.turnState;
    }
  });
  BoardTurnsDelegate.prototype.ourTurn = function () {
    return this.states.ourTurn();
  };
  BoardTurnsDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoardTurnsDelegate',
    interfaces: [BoardTurns]
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  function BoardControlBase(thisPlayerIndex, players, dimensions, winBy) {
    if (thisPlayerIndex === void 0)
      thisPlayerIndex = 0;
    if (players === void 0) {
      var $receiver = get_standardMarks();
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(new PlayerImpl(checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0)), item));
      }
      players = destination;
    }
    if (dimensions === void 0)
      dimensions = new Dimensions(3, 3);
    if (winBy === void 0)
      winBy = 3;
    BoardTurnsDelegate.call(this, new BoardState(dimensions, players.get_za3lpa$(thisPlayerIndex), winBy));
    this.players = players;
    this.dimensions_hzipbv$_0 = dimensions;
    this.numPlayers = this.players.size;
  }
  Object.defineProperty(BoardControlBase.prototype, 'dimensions', {
    get: function () {
      return this.dimensions_hzipbv$_0;
    }
  });
  BoardControlBase.prototype.get_state_8jcxv$ = function ($receiver) {
    return this.states.state_p734xe$($receiver);
  };
  BoardControlBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoardControlBase',
    interfaces: [BoardControl, BoardTurnsDelegate]
  };
  function SinglePlayerControl(board, reset) {
    BoardControlBase.call(this);
    this.board = board;
    this.reset = reset;
    this.topbar_ud4uky$_0 = SinglePlayerControl$topbar$lambda(this);
    this.states.turnState.remAssign_11rb$(new TurnState$Playing(this.players.get_za3lpa$(0)));
  }
  function SinglePlayerControl$click$lambda$lambda$lambda(this$SinglePlayerControl) {
    return function (it) {
      return this$SinglePlayerControl.players.get_za3lpa$((it.index + 1 | 0) % this$SinglePlayerControl.numPlayers);
    };
  }
  SinglePlayerControl.prototype.click_8jcxv$ = function ($receiver) {
    var $this = this.states;
    if ($this.ourTurnRx.now && equals($this.state_p734xe$($receiver).now, FieldState.Free)) {
      $this.turnState.remAssign_11rb$(new TurnState$Waiting($this.thisPlayer.now));
      var receiver = this.states;
      receiver.take_ospv3j$($receiver, receiver.thisPlayer.now);
      if (equals(receiver.gameState.now, GameState$Ongoing_getInstance())) {
        receiver.thisPlayer.transform_ru8m0w$(SinglePlayerControl$click$lambda$lambda$lambda(this));
        receiver.turnState.remAssign_11rb$(new TurnState$Playing(receiver.thisPlayer.now));
      }
    }
  };
  Object.defineProperty(SinglePlayerControl.prototype, 'topbar', {
    get: function () {
      return this.topbar_ud4uky$_0;
    }
  });
  function SinglePlayerControl$topbar$lambda$lambda$lambda$lambda(this$SinglePlayerControl) {
    return function () {
      this$SinglePlayerControl.reset();
      return Unit;
    };
  }
  function SinglePlayerControl$topbar$lambda(this$SinglePlayerControl) {
    return function ($receiver) {
      var receiver = this$SinglePlayerControl.board;
      var this$SinglePlayerControl_0 = this$SinglePlayerControl;
      remAssign($receiver.title, 'Single Player');
      var $receiver_0 = $receiver.right.button;
      $receiver_0.m1p2;
      get_redoAlt($receiver_0.fa);
      $receiver_0.secondary;
      receiver.click_9375ex$($receiver_0, SinglePlayerControl$topbar$lambda$lambda$lambda$lambda(this$SinglePlayerControl_0));
      return Unit;
    };
  }
  SinglePlayerControl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SinglePlayerControl',
    interfaces: [BoardControlBase]
  };
  function Dimensions(width, height) {
    this.width = width;
    this.height = height;
  }
  Dimensions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dimensions',
    interfaces: []
  };
  Dimensions.prototype.component1 = function () {
    return this.width;
  };
  Dimensions.prototype.component2 = function () {
    return this.height;
  };
  Dimensions.prototype.copy_vux9f0$ = function (width, height) {
    return new Dimensions(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Dimensions.prototype.toString = function () {
    return 'Dimensions(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Dimensions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Dimensions.prototype.equals = function (other) {
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
  function Player() {
  }
  Player.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Player',
    interfaces: []
  };
  function PlayerImpl(index, mark) {
    this.index_npb7gf$_0 = index;
    this.mark_8gefbo$_0 = new Var(mark);
  }
  Object.defineProperty(PlayerImpl.prototype, 'index', {
    get: function () {
      return this.index_npb7gf$_0;
    }
  });
  Object.defineProperty(PlayerImpl.prototype, 'mark', {
    get: function () {
      return this.mark_8gefbo$_0;
    }
  });
  PlayerImpl.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !equals(get_js(Kotlin.getKClassFromExpression(this)), get_js(Kotlin.getKClassFromExpression(other))))
      return false;
    Kotlin.isType(tmp$ = other, PlayerImpl) ? tmp$ : throwCCE();
    if (this.index !== other.index)
      return false;
    return true;
  };
  PlayerImpl.prototype.hashCode = function () {
    return this.index;
  };
  PlayerImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerImpl',
    interfaces: [Player]
  };
  function FieldState() {
  }
  function FieldState$Free() {
    FieldState$Free_instance = this;
    FieldState.call(this);
  }
  FieldState$Free.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Free',
    interfaces: [FieldState]
  };
  var FieldState$Free_instance = null;
  function FieldState$Free_getInstance() {
    if (FieldState$Free_instance === null) {
      new FieldState$Free();
    }
    return FieldState$Free_instance;
  }
  function FieldState$Taken(player) {
    FieldState.call(this);
    this.player = player;
  }
  FieldState$Taken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Taken',
    interfaces: [FieldState]
  };
  FieldState$Taken.prototype.component1 = function () {
    return this.player;
  };
  FieldState$Taken.prototype.copy_vas1o5$ = function (player) {
    return new FieldState$Taken(player === void 0 ? this.player : player);
  };
  FieldState$Taken.prototype.toString = function () {
    return 'Taken(player=' + Kotlin.toString(this.player) + ')';
  };
  FieldState$Taken.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.player) | 0;
    return result;
  };
  FieldState$Taken.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.player, other.player))));
  };
  FieldState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldState',
    interfaces: []
  };
  function TurnState() {
  }
  function TurnState$Starting() {
    TurnState$Starting_instance = this;
    TurnState.call(this);
  }
  TurnState$Starting.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Starting',
    interfaces: [TurnState]
  };
  var TurnState$Starting_instance = null;
  function TurnState$Starting_getInstance() {
    if (TurnState$Starting_instance === null) {
      new TurnState$Starting();
    }
    return TurnState$Starting_instance;
  }
  function TurnState$Playing(player) {
    TurnState.call(this);
    this.player = player;
  }
  TurnState$Playing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Playing',
    interfaces: [TurnState]
  };
  TurnState$Playing.prototype.component1 = function () {
    return this.player;
  };
  TurnState$Playing.prototype.copy_vas1o5$ = function (player) {
    return new TurnState$Playing(player === void 0 ? this.player : player);
  };
  TurnState$Playing.prototype.toString = function () {
    return 'Playing(player=' + Kotlin.toString(this.player) + ')';
  };
  TurnState$Playing.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.player) | 0;
    return result;
  };
  TurnState$Playing.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.player, other.player))));
  };
  function TurnState$Waiting(player) {
    TurnState.call(this);
    this.player = player;
  }
  TurnState$Waiting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Waiting',
    interfaces: [TurnState]
  };
  TurnState$Waiting.prototype.component1 = function () {
    return this.player;
  };
  TurnState$Waiting.prototype.copy_vas1o5$ = function (player) {
    return new TurnState$Waiting(player === void 0 ? this.player : player);
  };
  TurnState$Waiting.prototype.toString = function () {
    return 'Waiting(player=' + Kotlin.toString(this.player) + ')';
  };
  TurnState$Waiting.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.player) | 0;
    return result;
  };
  TurnState$Waiting.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.player, other.player))));
  };
  TurnState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TurnState',
    interfaces: []
  };
  function GameState() {
  }
  function GameState$Ongoing() {
    GameState$Ongoing_instance = this;
    GameState.call(this);
  }
  GameState$Ongoing.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Ongoing',
    interfaces: [GameState]
  };
  var GameState$Ongoing_instance = null;
  function GameState$Ongoing_getInstance() {
    if (GameState$Ongoing_instance === null) {
      new GameState$Ongoing();
    }
    return GameState$Ongoing_instance;
  }
  function GameState$Draw() {
    GameState$Draw_instance = this;
    GameState.call(this);
  }
  GameState$Draw.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Draw',
    interfaces: [GameState]
  };
  var GameState$Draw_instance = null;
  function GameState$Draw_getInstance() {
    if (GameState$Draw_instance === null) {
      new GameState$Draw();
    }
    return GameState$Draw_instance;
  }
  function GameState$GameOver(winner) {
    GameState.call(this);
    this.winner = winner;
  }
  GameState$GameOver.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameOver',
    interfaces: [GameState]
  };
  GameState$GameOver.prototype.component1 = function () {
    return this.winner;
  };
  GameState$GameOver.prototype.copy_vas1o5$ = function (winner) {
    return new GameState$GameOver(winner === void 0 ? this.winner : winner);
  };
  GameState$GameOver.prototype.toString = function () {
    return 'GameOver(winner=' + Kotlin.toString(this.winner) + ')';
  };
  GameState$GameOver.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.winner) | 0;
    return result;
  };
  GameState$GameOver.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.winner, other.winner))));
  };
  function GameState$Abandoned() {
    GameState$Abandoned_instance = this;
    GameState.call(this);
  }
  GameState$Abandoned.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Abandoned',
    interfaces: [GameState]
  };
  var GameState$Abandoned_instance = null;
  function GameState$Abandoned_getInstance() {
    if (GameState$Abandoned_instance === null) {
      new GameState$Abandoned();
    }
    return GameState$Abandoned_instance;
  }
  function GameState$Corrupted() {
    GameState$Corrupted_instance = this;
    GameState.call(this);
  }
  GameState$Corrupted.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Corrupted',
    interfaces: [GameState]
  };
  var GameState$Corrupted_instance = null;
  function GameState$Corrupted_getInstance() {
    if (GameState$Corrupted_instance === null) {
      new GameState$Corrupted();
    }
    return GameState$Corrupted_instance;
  }
  GameState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameState',
    interfaces: []
  };
  function Highlight(from, to) {
    this.from = from;
    this.to = to;
  }
  Highlight.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Highlight',
    interfaces: []
  };
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  function get_validCoords($receiver) {
    var $receiver_0 = until(0, $receiver.width);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_1 = until(0, $receiver.height);
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_0;
      tmp$_0 = $receiver_1.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(new Coords(element, item));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return destination;
  }
  function Dir(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }
  Dir.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dir',
    interfaces: []
  };
  Dir.prototype.component1 = function () {
    return this.dx;
  };
  Dir.prototype.component2 = function () {
    return this.dy;
  };
  Dir.prototype.copy_vux9f0$ = function (dx, dy) {
    return new Dir(dx === void 0 ? this.dx : dx, dy === void 0 ? this.dy : dy);
  };
  Dir.prototype.toString = function () {
    return 'Dir(dx=' + Kotlin.toString(this.dx) + (', dy=' + Kotlin.toString(this.dy)) + ')';
  };
  Dir.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dx) | 0;
    result = result * 31 + Kotlin.hashCode(this.dy) | 0;
    return result;
  };
  Dir.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.dx, other.dx) && Kotlin.equals(this.dy, other.dy)))));
  };
  var dirs;
  function plus_0($receiver, dir) {
    return new Coords($receiver.x + dir.dx | 0, $receiver.y + dir.dy | 0);
  }
  function sequenceExcluding$lambda(this$sequenceExcluding) {
    return function (it) {
      return plus_0(it, this$sequenceExcluding);
    };
  }
  function sequenceExcluding($receiver, from) {
    return generateSequence(plus_0(from, $receiver), sequenceExcluding$lambda($receiver));
  }
  function unaryMinus($receiver) {
    return new Dir(-$receiver.dx | 0, -$receiver.dy | 0);
  }
  function opposite($receiver) {
    return unaryMinus($receiver);
  }
  function cls(s) {
    return def(s, void 0, 'tictactoe-');
  }
  var mark;
  var mark_metadata = new PropertyMetadata('mark');
  function get_mark($receiver) {
    return mark.getValue_lrcp0p$($receiver, mark_metadata);
  }
  var stroke;
  var stroke_metadata = new PropertyMetadata('stroke');
  function get_stroke($receiver) {
    return stroke.getValue_lrcp0p$($receiver, stroke_metadata);
  }
  var fieldAnchor;
  var fieldAnchor_metadata = new PropertyMetadata('fieldAnchor');
  function get_fieldAnchor($receiver) {
    return fieldAnchor.getValue_lrcp0p$($receiver, fieldAnchor_metadata);
  }
  var highlight;
  var highlight_metadata = new PropertyMetadata('highlight');
  function get_highlight($receiver) {
    return highlight.getValue_lrcp0p$($receiver, highlight_metadata);
  }
  function defs$lambda$lambda($receiver) {
    get_dNone(get_cls_0($receiver));
    return Unit;
  }
  function defs$lambda() {
    return invoke(get_svg(ensureNotNull(document.body)), defs$lambda$lambda);
  }
  var defs;
  function get_defs() {
    return defs.value;
  }
  function xGraphics$lambda$lambda$lambda$lambda($receiver) {
    $receiver.x1.baseVal.value = -0.5;
    $receiver.y1.baseVal.value = -0.5;
    $receiver.x2.baseVal.value = 0.5;
    $receiver.y2.baseVal.value = 0.5;
    return Unit;
  }
  function xGraphics$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.x1.baseVal.value = -0.5;
    $receiver.y1.baseVal.value = 0.5;
    $receiver.x2.baseVal.value = 0.5;
    $receiver.y2.baseVal.value = -0.5;
    return Unit;
  }
  function xGraphics$lambda$lambda$lambda($receiver) {
    get_mark(get_cls_0($receiver));
    invoke(get_line($receiver), xGraphics$lambda$lambda$lambda$lambda);
    invoke(get_line($receiver), xGraphics$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function xGraphics$lambda$lambda($receiver) {
    get_overflowVisible(get_cls_0($receiver));
    invoke(get_g($receiver), xGraphics$lambda$lambda$lambda);
    return Unit;
  }
  function xGraphics$lambda() {
    return invoke(get_symbol(get_defs()), xGraphics$lambda$lambda);
  }
  var xGraphics;
  function get_xGraphics() {
    return xGraphics.value;
  }
  function oGraphics$lambda$lambda$lambda($receiver) {
    get_mark(get_cls_0($receiver));
    $receiver.r.baseVal.value = 0.5;
    return Unit;
  }
  function oGraphics$lambda$lambda($receiver) {
    get_overflowVisible(get_cls_0($receiver));
    invoke(get_circle($receiver), oGraphics$lambda$lambda$lambda);
    return Unit;
  }
  function oGraphics$lambda() {
    return invoke(get_symbol(get_defs()), oGraphics$lambda$lambda);
  }
  var oGraphics;
  function get_oGraphics() {
    return oGraphics.value;
  }
  function standardMarks$lambda() {
    return listOf([get_ref(get_xGraphics()), get_ref(get_oGraphics())]);
  }
  var standardMarks;
  function get_standardMarks() {
    return standardMarks.value;
  }
  function markRef($receiver) {
    return '#' + $receiver.mark.invoke();
  }
  function boardNode$lambda$lambda$lambda$fieldUI$lambda(closure$state) {
    return function ($receiver) {
      return equals(closure$state.invoke(), FieldState$Free_getInstance());
    };
  }
  function boardNode$lambda$lambda$lambda$fieldUI$lambda_0(this$, closure$isFree) {
    return function ($receiver) {
      return this$.ourTurn() && closure$isFree.invoke();
    };
  }
  function boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda$lambda($receiver) {
    $receiver.setScale(0.8, 0.8);
    return Unit;
  }
  function boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda$lambda$lambda(closure$state) {
    return function ($receiver) {
      var s = closure$state.invoke();
      var block$result;
      if (equals(s, FieldState$Free_getInstance())) {
        block$result = null;
      }
       else if (Kotlin.isType(s, FieldState$Taken)) {
        block$result = markRef(s.player);
      }
       else {
        block$result = Kotlin.noWhenBranchMatched();
      }
      return block$result;
    };
  }
  function boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda$lambda$lambda_0(this$) {
    return function ($receiver, it) {
      set_xlinkHref(this$, it);
      return Unit;
    };
  }
  function boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda$lambda_0(closure$state, this$) {
    return function ($receiver) {
      this$.forEach_xwzbbo$(this$.rx_y6x17j$(boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda$lambda$lambda(closure$state)), boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda$lambda$lambda_0($receiver));
      return Unit;
    };
  }
  function boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda(closure$state, this$) {
    return function ($receiver) {
      transform($receiver, boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda$lambda);
      invoke(get_use($receiver), boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda$lambda_0(closure$state, this$));
      return Unit;
    };
  }
  function boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda(closure$state, this$) {
    return function ($receiver) {
      invoke(get_g($receiver), boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda(closure$state, this$));
      return Unit;
    };
  }
  function boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda_0(closure$canClick) {
    return function () {
      return closure$canClick.invoke();
    };
  }
  function boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda_1(closure$coords, this$) {
    return function () {
      this$.click_8jcxv$(closure$coords);
      return Unit;
    };
  }
  function boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda_2($receiver) {
    $receiver.x.baseVal.value = -0.5;
    $receiver.y.baseVal.value = -0.5;
    $receiver.width.baseVal.value = 1.0;
    $receiver.height.baseVal.value = 1.0;
    get_fieldAnchor(get_cls_0($receiver));
    return Unit;
  }
  function boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda_0(closure$canClick, this$, closure$coords, this$_0) {
    return function ($receiver) {
      $receiver.href.baseVal = '#';
      this$.attached_ux9tev$($receiver, boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda_0(closure$canClick));
      this$.click_ts68bh$($receiver, boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda_1(closure$coords, this$_0));
      invoke(get_rect($receiver), boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function boardNode$lambda$lambda$lambda$fieldUI$lambda_1(closure$coords, closure$state, this$, closure$canClick, this$_0) {
    return function ($receiver) {
      var tmp$ = $receiver.transform.baseVal;
      var $receiver_0 = ensureNotNull($receiver.ownerSVGElement).createSVGTransform();
      var closure$coords_0 = closure$coords;
      $receiver_0.setTranslate(closure$coords_0.x, closure$coords_0.y);
      tmp$.appendItem($receiver_0);
      invoke(get_g($receiver), boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda(closure$state, this$));
      invoke(get_a($receiver), boardNode$lambda$lambda$lambda$fieldUI$lambda$lambda_0(closure$canClick, this$, closure$coords, this$_0));
      return Unit;
    };
  }
  function boardNode$lambda$lambda$lambda$fieldUI(this$, this$_0) {
    return function ($receiver, coords) {
      var state = this$.get_state_8jcxv$(coords);
      var isFree = this$_0.rx_y6x17j$(boardNode$lambda$lambda$lambda$fieldUI$lambda(state));
      var canClick = this$_0.rx_y6x17j$(boardNode$lambda$lambda$lambda$fieldUI$lambda_0(this$, isFree));
      invoke(get_g($receiver), boardNode$lambda$lambda$lambda$fieldUI$lambda_1(coords, state, this$_0, canClick, this$));
    };
  }
  function boardNode$lambda$lambda$lambda$lambda$stroke$lambda(closure$x1, closure$y1, closure$x2, closure$y2) {
    return function ($receiver) {
      $receiver.x1.baseVal.value = closure$x1;
      $receiver.y1.baseVal.value = closure$y1;
      $receiver.x2.baseVal.value = closure$x2;
      $receiver.y2.baseVal.value = closure$y2;
      get_stroke(get_cls_0($receiver));
      set($receiver.attributes, 'vector-effect', 'non-scaling-stroke');
      return Unit;
    };
  }
  function boardNode$lambda$lambda$lambda$lambda$stroke(this$) {
    return function (x1, y1, x2, y2) {
      invoke(get_line(this$), boardNode$lambda$lambda$lambda$lambda$stroke$lambda(x1, y1, x2, y2));
    };
  }
  function boardNode$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$h) {
    return function ($receiver) {
      get_highlight(get_cls_0($receiver));
      $receiver.x1.baseVal.value = closure$h.from.x;
      $receiver.y1.baseVal.value = closure$h.from.y;
      $receiver.x2.baseVal.value = closure$h.to.x;
      $receiver.y2.baseVal.value = closure$h.to.y;
      return Unit;
    };
  }
  function boardNode$lambda$lambda$lambda$lambda$lambda$lambda(this$) {
    return function (h) {
      invoke(get_line(this$), boardNode$lambda$lambda$lambda$lambda$lambda$lambda$lambda(h));
      return Unit;
    };
  }
  function boardNode$lambda$lambda$lambda$lambda$lambda(this$, closure$fieldUI, this$_0) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      var tmp$_1 = $receiver.transform.baseVal;
      var $receiver_0 = ensureNotNull($receiver.ownerSVGElement).createSVGTransform();
      $receiver_0.setTranslate(0.5, 0.5);
      tmp$_1.appendItem($receiver_0);
      tmp$ = this$.dimensions.width;
      for (var x = 0; x < tmp$; x++) {
        tmp$_0 = this$.dimensions.height;
        for (var y = 0; y < tmp$_0; y++) {
          closure$fieldUI($receiver, new Coords(x, y));
        }
      }
      this$_0.plusAssign_ubid8w$(this$.highlights, boardNode$lambda$lambda$lambda$lambda$lambda$lambda($receiver));
      return Unit;
    };
  }
  function boardNode$lambda$lambda$lambda$lambda(this$, closure$fieldUI, this$_0) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      $receiver.setAttribute('viewBox', '0 0 ' + this$.dimensions.width + ' ' + this$.dimensions.height);
      var stroke = boardNode$lambda$lambda$lambda$lambda$stroke($receiver);
      tmp$ = this$.dimensions.width;
      for (var x = 1; x < tmp$; x++) {
        stroke(x * 1.0, 0.0, x * 1.0, this$.dimensions.height * 1.0);
      }
      tmp$_0 = this$.dimensions.width;
      for (var y = 1; y < tmp$_0; y++) {
        stroke(0.0, y * 1.0, this$.dimensions.width * 1.0, y * 1.0);
      }
      invoke(get_g($receiver), boardNode$lambda$lambda$lambda$lambda$lambda(this$, closure$fieldUI, this$_0));
      return Unit;
    };
  }
  function boardNode$lambda$lambda$lambda$lambda$lambda_0(this$) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_alignItemsCenter($receiver_0);
      var $receiver_1 = this$.gameState.invoke();
      var this$_0 = this$;
      if (equals($receiver_1, GameState$Corrupted_getInstance()))
        remAssign($receiver, 'Illegal move detected.');
      else if (equals($receiver_1, GameState$Abandoned_getInstance()))
        remAssign($receiver, 'The game has been abandoned.');
      else if (equals($receiver_1, GameState$Draw_getInstance()))
        remAssign($receiver, "It's a draw.");
      else if (Kotlin.isType($receiver_1, GameState$GameOver))
        if (equals($receiver_1.winner, this$_0.thisPlayer.invoke())) {
          appendText($receiver, 'You won!');
        }
         else {
          appendText($receiver, 'You lost. Winner: ');
          playerIcon($receiver, $receiver_1.winner);
        }
       else {
        var $receiver_2 = this$_0.turnState.invoke();
        if (equals($receiver_2, TurnState$Starting_getInstance()))
          remAssign($receiver, 'Flipping coin...');
        else if (Kotlin.isType($receiver_2, TurnState$Waiting))
          remAssign($receiver, 'Please wait...');
        else if (Kotlin.isType($receiver_2, TurnState$Playing))
          if (equals($receiver_2.player, this$_0.thisPlayer.invoke())) {
            appendText($receiver, 'Place your ');
            playerIcon($receiver, $receiver_2.player);
            appendText($receiver, ' !');
          }
           else {
            appendText($receiver, 'Opponent placing ');
            playerIcon($receiver, $receiver_2.player);
            appendText($receiver, ' ...');
          }
         else
          Kotlin.noWhenBranchMatched();
      }
      return Unit;
    };
  }
  function boardNode$lambda$lambda$lambda$lambda_0(this$) {
    return function () {
      return row(document, boardNode$lambda$lambda$lambda$lambda$lambda_0(this$));
    };
  }
  function boardNode$lambda$lambda$lambda(this$, this$_0) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      flexFixedSize($receiver_0);
      flexCenter($receiver_0);
      get_bgLight($receiver_0);
      get_borderTop($receiver_0);
      get_p1($receiver_0);
      this$_0.remAssign_wgabca$(get_widget($receiver), boardNode$lambda$lambda$lambda$lambda_0(this$));
      return Unit;
    };
  }
  function boardNode($receiver, board) {
    var receiver = board.control;
    var $receiver_0 = get_insert($receiver).svg;
    var $receiver_1 = $receiver_0.cls;
    get_m2($receiver_1);
    get_flexGrow1($receiver_1);
    get_height0($receiver_1);
    var fieldUI = boardNode$lambda$lambda$lambda$fieldUI(receiver, board);
    invoke($receiver_0.node, boardNode$lambda$lambda$lambda$lambda(receiver, fieldUI, board));
    return invoke(get_div($receiver), boardNode$lambda$lambda$lambda(receiver, board));
  }
  function playerIcon$lambda$lambda$lambda($receiver) {
    $receiver.setScale(0.8, 0.8);
    return Unit;
  }
  function playerIcon$lambda$lambda(closure$p) {
    return function ($receiver) {
      transform($receiver, playerIcon$lambda$lambda$lambda);
      set_xlinkHref($receiver, markRef(closure$p));
      return Unit;
    };
  }
  function playerIcon$lambda(closure$p) {
    return function ($receiver) {
      var $receiver_0 = get_cls_0($receiver);
      get_mx1($receiver_0);
      get_iconSquare($receiver_0);
      viewBox($receiver, -0.5, -0.5, 1.0, 1.0);
      invoke(get_use($receiver), playerIcon$lambda$lambda(closure$p));
      return Unit;
    };
  }
  function playerIcon($receiver, p) {
    invoke(get_svg($receiver), playerIcon$lambda(p));
  }
  function ui$lambda_0(this$ui) {
    return function ($receiver) {
      get_flexGrow1(get_cls($receiver));
      boardNode($receiver, this$ui);
      return Unit;
    };
  }
  function ui_0($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backButton_tdhe4g$($receiver_0.left);
    $receiver.control.topbar($receiver_0);
    return new TopAndContent($receiver_0.node, column(document, ui$lambda_0($receiver)));
  }
  function LinksPath() {
  }
  LinksPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinksPath',
    interfaces: [DbApi]
  };
  function Links(deps) {
    FbLinksFactory.call(this, deps);
    this.links_652kn2$_0 = this;
    this.home_9f6ati$_0 = this.root_7o50g$(Links$home$lambda(this, deps));
    this.singlePlayer_y0omsw$_0 = this.home.child_b2q6wh$(Links$singlePlayer$lambda).provideDelegate_n5byny$(this, Links$singlePlayer_metadata);
    this.online_1xpn22$_0 = this.home.child_b2q6wh$(Links$online$lambda).provideDelegate_n5byny$(this, Links$online_metadata);
  }
  Object.defineProperty(Links.prototype, 'links', {
    get: function () {
      return this.links_652kn2$_0;
    }
  });
  Object.defineProperty(Links.prototype, 'home', {
    get: function () {
      return this.home_9f6ati$_0;
    }
  });
  var Links$singlePlayer_metadata = new PropertyMetadata('singlePlayer');
  Object.defineProperty(Links.prototype, 'singlePlayer', {
    get: function () {
      return this.singlePlayer_y0omsw$_0.getValue_lrcp0p$(this, Links$singlePlayer_metadata);
    }
  });
  var Links$online_metadata = new PropertyMetadata('online');
  Object.defineProperty(Links.prototype, 'online', {
    get: function () {
      return this.online_1xpn22$_0.getValue_lrcp0p$(this, Links$online_metadata);
    }
  });
  function Coroutine$Links$home$lambda(this$Links_0, closure$deps_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$closure$deps = closure$deps_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
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
            var tmp$;
            this.local$tmp$ = this.local$closure$deps.hole;
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.requestUser(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$Links.fcmDeferred.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            tmp$ = this.result_0;
            var $receiver = new LoggedIn(this.local$this$Links, this.local$lnk, this.local$tmp$, this.local$tmp$_0, tmp$);
            this.local$closure$deps.hole.remAssign_9i7ztu$($receiver);
            return $receiver;
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
  function Links$home$lambda(this$Links_0, closure$deps_0) {
    return function (lnk_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$home$lambda(this$Links_0, closure$deps_0, lnk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Links$singlePlayer$lambda(parent_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$parent = parent_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$singlePlayer$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$singlePlayer$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$singlePlayer$lambda.prototype.constructor = Coroutine$Links$singlePlayer$lambda;
  Coroutine$Links$singlePlayer$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return forwarding(new SinglePlayer(this.local$parent, this.local$lnk), this.local$parent);
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
  function Links$singlePlayer$lambda(parent_0, lnk_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$singlePlayer$lambda(parent_0, lnk_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Links$online$lambda$lambda$lambda$lambda() {
    return new GameStatus$Offline();
  }
  function Coroutine$Links$online$lambda$lambda$lambda(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Links$online$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$online$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$online$lambda$lambda$lambda.prototype.constructor = Coroutine$Links$online$lambda$lambda$lambda;
  Coroutine$Links$online$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getOrDefault_we3fe6$(this.local$this$.loggedIn.statusDoc, Links$online$lambda$lambda$lambda$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var st = this.result_0.doc;
            if (Kotlin.isType(st, GameStatus$Offline)) {
              return this.local$$receiver.txSet_y1t3au$(this.local$this$.loggedIn.statusDoc, new GameStatus$Online());
            }
             else {
              return rollback('already online.');
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
  function Links$online$lambda$lambda$lambda(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$online$lambda$lambda$lambda(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Links$online$lambda$lambda$lambda$lambda_0(closure$cd) {
    return function ($receiver, gs) {
      if (!Kotlin.isType(gs, GameStatus$Offline)) {
        closure$cd.complete_11rb$(Unit);
      }
      return Unit;
    };
  }
  var Killables_init = $module$appsimake_commonshr.killable.Killables;
  function Coroutine$Links$online$lambda(parent_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$cd = void 0;
    this.local$$receiver = void 0;
    this.local$parent = parent_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$online$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$online$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$online$lambda.prototype.constructor = Coroutine$Links$online$lambda;
  Coroutine$Links$online$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$cd = CompletableDeferred();
            hourglass(this.local$parent);
            this.state_0 = 1;
            this.result_0 = txTry(this.local$parent, Links$online$lambda$lambda$lambda(this.local$parent), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$$receiver = new Killables_init();
            this.exceptionState_0 = 4;
            this.local$$receiver.forEach_xwzbbo$(this.local$parent.loggedIn.gameStatus, Links$online$lambda$lambda$lambda$lambda_0(this.local$cd));
            this.state_0 = 2;
            this.result_0 = this.local$cd.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            return forwarding(new Active(this.local$parent, this.local$lnk), this.local$parent);
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            this.local$$receiver.kill();
            this.state_0 = this.finallyPath_0.shift();
            continue;
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
  function Links$online$lambda(parent_0, lnk_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$online$lambda(parent_0, lnk_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  Links.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Links',
    interfaces: [LinksPath, FbLinksFactory]
  };
  function LoggedInTC() {
  }
  LoggedInTC.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoggedInTC',
    interfaces: [LinkApi, LoggedInPath, BaseTC]
  };
  function LoggedInPath() {
  }
  LoggedInPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoggedInPath',
    interfaces: [HasMessaging, HasDbLibUser, LinksPath]
  };
  function LoggedIn(links, linkage, hole, user, fcm) {
    ForwardBase.call(this, hole);
    this.linkage_17uu7$_0 = linkage;
    this.user_ly52v1$_0 = user;
    this.$delegate_62d09q$_0 = links;
    this.loggedIn_3pyit5$_0 = this;
    this.lib_gr2e1r$_0 = tictactoelib.tictactoeLib;
    this.privateDoc = privateOf(tictactoelib.tictactoeLib, this.user);
    this.statusDoc = get_status(get_singletons(this.privateDoc));
    this.lounge = get_lounge(get_tmp(tictactoelib.tictactoeLib.app));
    this.inboxMoves = get_moves(get_public(inboxOf(tictactoelib.tictactoeLib, this.user)));
    this.gameStatus = this.toRx_on0lyu$(this.get_docsOrNull_g2zw3r$(this.statusDoc), null);
    this.messaging_9tg1fi$_0 = new MessagingControl(this, fcm);
    this.rawView_blrcav$_0 = ui_1(this);
  }
  Object.defineProperty(LoggedIn.prototype, 'linkage', {
    get: function () {
      return this.linkage_17uu7$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'user', {
    get: function () {
      return this.user_ly52v1$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'loggedIn', {
    get: function () {
      return this.loggedIn_3pyit5$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'lib', {
    get: function () {
      return this.lib_gr2e1r$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'messaging', {
    get: function () {
      return this.messaging_9tg1fi$_0;
    }
  });
  function Coroutine$LoggedIn$signOut$lambda(this$LoggedIn_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$signOut$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$signOut$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$signOut$lambda.prototype.constructor = Coroutine$LoggedIn$signOut$lambda;
  Coroutine$LoggedIn$signOut$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.links.signOut(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$LoggedIn.links.home.load(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function LoggedIn$signOut$lambda(this$LoggedIn_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$signOut$lambda(this$LoggedIn_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.signOut = function () {
    return launch(this.links, void 0, void 0, LoggedIn$signOut$lambda(this));
  };
  function Coroutine$LoggedIn$singlePlayer$lambda(this$LoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$singlePlayer$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$singlePlayer$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$singlePlayer$lambda.prototype.constructor = Coroutine$LoggedIn$singlePlayer$lambda;
  Coroutine$LoggedIn$singlePlayer$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.fwd_nnhkmr$(this.local$this$LoggedIn.links.singlePlayer, void 0, this);
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
  function LoggedIn$singlePlayer$lambda(this$LoggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$singlePlayer$lambda(this$LoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.singlePlayer = function () {
    advance(this, LoggedIn$singlePlayer$lambda(this));
  };
  function Coroutine$LoggedIn$goOnline$lambda(this$LoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$goOnline$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$goOnline$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$goOnline$lambda.prototype.constructor = Coroutine$LoggedIn$goOnline$lambda;
  Coroutine$LoggedIn$goOnline$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.fwd_nnhkmr$(this.local$this$LoggedIn.links.online, void 0, this);
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
  function LoggedIn$goOnline$lambda(this$LoggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$goOnline$lambda(this$LoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.goOnline = function () {
    advance(this, LoggedIn$goOnline$lambda(this));
  };
  Object.defineProperty(LoggedIn.prototype, 'rawView', {
    get: function () {
      return this.rawView_blrcav$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'db', {
    get: function () {
      return this.$delegate_62d09q$_0.db;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'links', {
    get: function () {
      return this.$delegate_62d09q$_0.links;
    }
  });
  LoggedIn.prototype.get_randomDoc_lsue4w$ = function ($receiver) {
    return this.$delegate_62d09q$_0.get_randomDoc_lsue4w$($receiver);
  };
  LoggedIn.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_62d09q$_0.get_randomDoc_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_62d09q$_0.get_ref_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_62d09q$_0.get_ref_aqty80$($receiver);
  };
  LoggedIn.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_62d09q$_0.delete_73z9b6$($receiver);
  };
  LoggedIn.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_62d09q$_0.delete_ihdkly$($receiver);
  };
  LoggedIn.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_62d09q$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  LoggedIn.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_62d09q$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  LoggedIn.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_62d09q$_0.query_wzkv1r$$default($receiver, query);
  };
  LoggedIn.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_62d09q$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  LoggedIn.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_62d09q$_0.save_73z9b6$($receiver);
  };
  LoggedIn.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_62d09q$_0.save_biv66q$($receiver);
  };
  LoggedIn.prototype.set_o9yh22$$default = function ($receiver, data, options) {
    return this.$delegate_62d09q$_0.set_o9yh22$$default($receiver, data, options);
  };
  LoggedIn.prototype.toFsDoc_bo0woj$$default = function ($receiver, source, default_0, continuation) {
    return this.$delegate_62d09q$_0.toFsDoc_bo0woj$$default($receiver, source, default_0, continuation);
  };
  LoggedIn.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_62d09q$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [HasDbKillsLibUser, FBApi, LoggedInTC, LoggedInPath, LinksPath, ForwardBase]
  };
  function ui$lambda$lambda$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.singlePlayer();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_4(this$ui) {
    return function () {
      this$ui.signOut();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_1(this$ui) {
    return function () {
      var gs = this$ui.gameStatus.invoke();
      var block$result;
      if (Kotlin.isType(gs, GameStatus$Online) || Kotlin.isType(gs, GameStatus$Waiting)) {
        block$result = 'Enter Waiting Room';
      }
       else if (Kotlin.isType(gs, GameStatus$Playing)) {
        block$result = 'Show Ongoing Game';
      }
       else {
        block$result = 'Go Online';
      }
      return block$result;
    };
  }
  function ui$lambda$lambda$lambda_2(this$ui) {
    return function () {
      this$ui.goOnline();
      return Unit;
    };
  }
  function ui$lambda_1(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_flexGrow1($receiver_0);
      flexCenter($receiver_0);
      var $receiver_1 = get_insert($receiver).button;
      var this$ui_0 = this$ui;
      $receiver_1.primary;
      this$ui_0.remAssign_7fncnf$($receiver_1.text, ui$lambda$lambda$lambda_1(this$ui_0));
      this$ui_0.click_9375ex$($receiver_1, ui$lambda$lambda$lambda_2(this$ui_0));
      return Unit;
    };
  }
  function ui_1($receiver) {
    var $receiver_0 = widget.factory.topbar;
    remAssign($receiver_0.title, 'Tic Tac Toe');
    var $receiver_1 = $receiver_0.left.dropdown;
    $receiver_1.bars;
    var $receiver_2 = $receiver_1.menu;
    var $receiver_3 = $receiver_2.item;
    $receiver_3.text.remAssign_61zpoe$('Play Against Yourself');
    get_user($receiver_3.icon.fa);
    $receiver.click_512jbc$($receiver_3, ui$lambda$lambda$lambda$lambda$lambda($receiver));
    $receiver.signOut_tstgz9$($receiver_2, ui$lambda$lambda$lambda$lambda_4($receiver));
    return new TopAndContent($receiver_0.node, invoke(get_div(document), ui$lambda_1($receiver)));
  }
  function SinglePlayerPath() {
  }
  SinglePlayerPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SinglePlayerPath',
    interfaces: [LoggedInPath]
  };
  function SinglePlayer(from, linkage) {
    MultiView.call(this, from);
    this.linkage = linkage;
    this.$delegate_clw8bm$_0 = from;
    this.$delegate_clw8bm$_1 = from;
    this.singlePlayer_5gykw5$_0 = this;
    this.currentView_qxlb3s$_0 = this.get_oldKilled_vsdo34$(new Var(this.createBoard()));
  }
  Object.defineProperty(SinglePlayer.prototype, 'singlePlayer', {
    get: function () {
      return this.singlePlayer_5gykw5$_0;
    }
  });
  function SinglePlayer$createBoard$lambda$lambda(this$SinglePlayer) {
    return function () {
      this$SinglePlayer.currentView.remAssign_11rb$(this$SinglePlayer.createBoard());
      return Unit;
    };
  }
  function SinglePlayer$createBoard$lambda(this$SinglePlayer) {
    return function ($receiver) {
      return new SinglePlayerControl($receiver, SinglePlayer$createBoard$lambda$lambda(this$SinglePlayer));
    };
  }
  SinglePlayer.prototype.createBoard = function () {
    return new Board(this, this.linkage, this.loggedIn, SinglePlayer$createBoard$lambda(this));
  };
  Object.defineProperty(SinglePlayer.prototype, 'currentView', {
    get: function () {
      return this.currentView_qxlb3s$_0;
    }
  });
  Object.defineProperty(SinglePlayer.prototype, 'activeView', {
    get: function () {
      return this.$delegate_clw8bm$_0.activeView;
    }
  });
  Object.defineProperty(SinglePlayer.prototype, 'db', {
    get: function () {
      return this.$delegate_clw8bm$_1.db;
    }
  });
  Object.defineProperty(SinglePlayer.prototype, 'lib', {
    get: function () {
      return this.$delegate_clw8bm$_1.lib;
    }
  });
  Object.defineProperty(SinglePlayer.prototype, 'links', {
    get: function () {
      return this.$delegate_clw8bm$_1.links;
    }
  });
  Object.defineProperty(SinglePlayer.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_clw8bm$_1.loggedIn;
    }
  });
  Object.defineProperty(SinglePlayer.prototype, 'messaging', {
    get: function () {
      return this.$delegate_clw8bm$_1.messaging;
    }
  });
  Object.defineProperty(SinglePlayer.prototype, 'user', {
    get: function () {
      return this.$delegate_clw8bm$_1.user;
    }
  });
  SinglePlayer.prototype.get_randomDoc_lsue4w$ = function ($receiver) {
    return this.$delegate_clw8bm$_1.get_randomDoc_lsue4w$($receiver);
  };
  SinglePlayer.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_clw8bm$_1.get_randomDoc_sj9vaa$($receiver);
  };
  SinglePlayer.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_clw8bm$_1.get_ref_sj9vaa$($receiver);
  };
  SinglePlayer.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_clw8bm$_1.get_ref_aqty80$($receiver);
  };
  SinglePlayer.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_clw8bm$_1.delete_73z9b6$($receiver);
  };
  SinglePlayer.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_clw8bm$_1.delete_ihdkly$($receiver);
  };
  SinglePlayer.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_clw8bm$_1.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  SinglePlayer.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_clw8bm$_1.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  SinglePlayer.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_clw8bm$_1.query_wzkv1r$$default($receiver, query);
  };
  SinglePlayer.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_clw8bm$_1.randomEditable_mx4g9l$$default($receiver, d);
  };
  SinglePlayer.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_clw8bm$_1.save_73z9b6$($receiver);
  };
  SinglePlayer.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_clw8bm$_1.save_biv66q$($receiver);
  };
  SinglePlayer.prototype.set_o9yh22$$default = function ($receiver, data, options) {
    return this.$delegate_clw8bm$_1.set_o9yh22$$default($receiver, data, options);
  };
  SinglePlayer.prototype.toFsDoc_bo0woj$$default = function ($receiver, source, default_0, continuation) {
    return this.$delegate_clw8bm$_1.toFsDoc_bo0woj$$default($receiver, source, default_0, continuation);
  };
  SinglePlayer.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_clw8bm$_1.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(SinglePlayer.prototype, 'back', {
    get: function () {
      return this.linkage.back;
    }
  });
  SinglePlayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SinglePlayer',
    interfaces: [HasBack, SinglePlayerPath, LoggedInPath, HasKillsRouting, HasRouting, HasKillsRedisplay, MultiView]
  };
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
    FbLinksFactory.Companion.start_avsawv$(void 0, void 0, main$lambda);
  }
  var package$tictactoe = _.tictactoe || (_.tictactoe = {});
  var package$active = package$tictactoe.active || (package$tictactoe.active = {});
  package$active.ActivePath = ActivePath;
  Object.defineProperty(GS, 'None', {
    get: GS$None_getInstance
  });
  GS.Waiting = GS$Waiting;
  Object.defineProperty(GS$Playing, 'Companion', {
    get: GS$Playing$Companion_getInstance
  });
  GS.Playing = GS$Playing;
  package$active.GS = GS;
  package$active.Active = Active;
  package$active.postMove_whsej2$ = postMove;
  OnlineBoardControl.MovesItem = OnlineBoardControl$MovesItem;
  OnlineBoardControl.Moves = OnlineBoardControl$Moves;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  $$importsForInline$$['appsimake-tictactoe'] = _;
  package$active.OnlineBoardControl = OnlineBoardControl;
  package$active.ui_rfmavy$ = ui;
  package$active.WaitingPath = WaitingPath;
  package$active.Waiting = Waiting;
  var package$board = package$tictactoe.board || (package$tictactoe.board = {});
  package$board.BoardPath = BoardPath;
  package$board.Board = Board;
  package$board.BoardTurns = BoardTurns;
  package$board.BoardControl = BoardControl;
  package$board.FieldState = FieldState;
  package$board.TurnState = TurnState;
  package$board.BoardState = BoardState;
  package$board.BoardTurnsDelegate = BoardTurnsDelegate;
  package$board.BoardControlBase = BoardControlBase;
  package$board.SinglePlayerControl = SinglePlayerControl;
  package$board.Dimensions = Dimensions;
  package$board.Coords = Coords;
  package$board.Player = Player;
  package$board.PlayerImpl = PlayerImpl;
  Object.defineProperty(FieldState, 'Free', {
    get: FieldState$Free_getInstance
  });
  FieldState.Taken = FieldState$Taken;
  Object.defineProperty(TurnState, 'Starting', {
    get: TurnState$Starting_getInstance
  });
  TurnState.Playing = TurnState$Playing;
  TurnState.Waiting = TurnState$Waiting;
  Object.defineProperty(GameState, 'Ongoing', {
    get: GameState$Ongoing_getInstance
  });
  Object.defineProperty(GameState, 'Draw', {
    get: GameState$Draw_getInstance
  });
  GameState.GameOver = GameState$GameOver;
  Object.defineProperty(GameState, 'Abandoned', {
    get: GameState$Abandoned_getInstance
  });
  Object.defineProperty(GameState, 'Corrupted', {
    get: GameState$Corrupted_getInstance
  });
  package$board.GameState = GameState;
  package$board.Highlight = Highlight;
  package$board.get_validCoords_1nhp0u$ = get_validCoords;
  package$board.Dir = Dir;
  Object.defineProperty(package$board, 'dirs', {
    get: function () {
      return dirs;
    }
  });
  package$board.plus_qjrf50$ = plus_0;
  package$board.sequenceExcluding_sfketk$ = sequenceExcluding;
  package$board.unaryMinus_3ncaty$ = unaryMinus;
  package$board.opposite_3ncaty$ = opposite;
  Object.defineProperty(package$board, 'standardMarks', {
    get: get_standardMarks
  });
  package$board.markRef_o5fbty$ = markRef;
  package$board.boardNode_2c1wi$ = boardNode;
  package$board.playerIcon_8ld411$ = playerIcon;
  package$board.ui_opsknx$ = ui_0;
  package$tictactoe.LinksPath = LinksPath;
  package$tictactoe.Links = Links;
  var package$loggedin = package$tictactoe.loggedin || (package$tictactoe.loggedin = {});
  package$loggedin.LoggedInTC = LoggedInTC;
  package$loggedin.LoggedInPath = LoggedInPath;
  package$loggedin.LoggedIn = LoggedIn;
  package$loggedin.ui_p24xl9$ = ui_1;
  var package$singleplayer = package$tictactoe.singleplayer || (package$tictactoe.singleplayer = {});
  package$singleplayer.SinglePlayerPath = SinglePlayerPath;
  package$singleplayer.SinglePlayer = SinglePlayer;
  package$tictactoe.main = main;
  LinksPath.prototype.get_randomDoc_lsue4w$ = DbApi.prototype.get_randomDoc_lsue4w$;
  LinksPath.prototype.get_randomDoc_sj9vaa$ = DbApi.prototype.get_randomDoc_sj9vaa$;
  LinksPath.prototype.get_ref_sj9vaa$ = DbApi.prototype.get_ref_sj9vaa$;
  LinksPath.prototype.get_ref_aqty80$ = DbApi.prototype.get_ref_aqty80$;
  LinksPath.prototype.delete_73z9b6$ = DbApi.prototype.delete_73z9b6$;
  LinksPath.prototype.delete_ihdkly$ = DbApi.prototype.delete_ihdkly$;
  LinksPath.prototype.getCachedOrServer_prxdpg$ = DbApi.prototype.getCachedOrServer_prxdpg$;
  LinksPath.prototype.getOrNull_m1hph$$default = DbApi.prototype.getOrNull_m1hph$$default;
  LinksPath.prototype.query_wzkv1r$$default = DbApi.prototype.query_wzkv1r$$default;
  LinksPath.prototype.randomEditable_mx4g9l$$default = DbApi.prototype.randomEditable_mx4g9l$$default;
  LinksPath.prototype.save_73z9b6$ = DbApi.prototype.save_73z9b6$;
  LinksPath.prototype.save_biv66q$ = DbApi.prototype.save_biv66q$;
  LinksPath.prototype.set_o9yh22$$default = DbApi.prototype.set_o9yh22$$default;
  LinksPath.prototype.toFsDoc_bo0woj$$default = DbApi.prototype.toFsDoc_bo0woj$$default;
  LinksPath.prototype.toRandomFsDoc_xc7wmg$ = DbApi.prototype.toRandomFsDoc_xc7wmg$;
  LinksPath.prototype.getOrNull_m1hph$ = DbApi.prototype.getOrNull_m1hph$;
  LinksPath.prototype.query_wzkv1r$ = DbApi.prototype.query_wzkv1r$;
  LinksPath.prototype.randomEditable_mx4g9l$ = DbApi.prototype.randomEditable_mx4g9l$;
  LinksPath.prototype.set_o9yh22$ = DbApi.prototype.set_o9yh22$;
  LinksPath.prototype.toFsDoc_bo0woj$ = DbApi.prototype.toFsDoc_bo0woj$;
  LoggedInPath.prototype.get_randomDoc_lsue4w$ = LinksPath.prototype.get_randomDoc_lsue4w$;
  LoggedInPath.prototype.get_randomDoc_sj9vaa$ = LinksPath.prototype.get_randomDoc_sj9vaa$;
  LoggedInPath.prototype.get_ref_sj9vaa$ = LinksPath.prototype.get_ref_sj9vaa$;
  LoggedInPath.prototype.get_ref_aqty80$ = LinksPath.prototype.get_ref_aqty80$;
  LoggedInPath.prototype.delete_73z9b6$ = LinksPath.prototype.delete_73z9b6$;
  LoggedInPath.prototype.delete_ihdkly$ = LinksPath.prototype.delete_ihdkly$;
  LoggedInPath.prototype.getCachedOrServer_prxdpg$ = LinksPath.prototype.getCachedOrServer_prxdpg$;
  LoggedInPath.prototype.getOrNull_m1hph$$default = LinksPath.prototype.getOrNull_m1hph$$default;
  LoggedInPath.prototype.query_wzkv1r$$default = LinksPath.prototype.query_wzkv1r$$default;
  LoggedInPath.prototype.randomEditable_mx4g9l$$default = LinksPath.prototype.randomEditable_mx4g9l$$default;
  LoggedInPath.prototype.save_73z9b6$ = LinksPath.prototype.save_73z9b6$;
  LoggedInPath.prototype.save_biv66q$ = LinksPath.prototype.save_biv66q$;
  LoggedInPath.prototype.set_o9yh22$$default = LinksPath.prototype.set_o9yh22$$default;
  LoggedInPath.prototype.toFsDoc_bo0woj$$default = LinksPath.prototype.toFsDoc_bo0woj$$default;
  LoggedInPath.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  LoggedInPath.prototype.getOrNull_m1hph$ = LinksPath.prototype.getOrNull_m1hph$;
  LoggedInPath.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  LoggedInPath.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
  LoggedInPath.prototype.set_o9yh22$ = LinksPath.prototype.set_o9yh22$;
  LoggedInPath.prototype.toFsDoc_bo0woj$ = LinksPath.prototype.toFsDoc_bo0woj$;
  ActivePath.prototype.get_randomDoc_lsue4w$ = LoggedInPath.prototype.get_randomDoc_lsue4w$;
  ActivePath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  ActivePath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  ActivePath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  ActivePath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  ActivePath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  ActivePath.prototype.getCachedOrServer_prxdpg$ = LoggedInPath.prototype.getCachedOrServer_prxdpg$;
  ActivePath.prototype.getOrNull_m1hph$$default = LoggedInPath.prototype.getOrNull_m1hph$$default;
  ActivePath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  ActivePath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  ActivePath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  ActivePath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  ActivePath.prototype.set_o9yh22$$default = LoggedInPath.prototype.set_o9yh22$$default;
  ActivePath.prototype.toFsDoc_bo0woj$$default = LoggedInPath.prototype.toFsDoc_bo0woj$$default;
  ActivePath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  ActivePath.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  ActivePath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  ActivePath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  ActivePath.prototype.set_o9yh22$ = LoggedInPath.prototype.set_o9yh22$;
  ActivePath.prototype.toFsDoc_bo0woj$ = LoggedInPath.prototype.toFsDoc_bo0woj$;
  Active.prototype.get_docsOrNull_g2zw3r$ = CsDbKillsApi.prototype.get_docsOrNull_g2zw3r$;
  Active.prototype.get_live_73z9b6$ = CsDbKillsApi.prototype.get_live_73z9b6$;
  Active.prototype.get_snapshots_79y88y$ = CsDbKillsApi.prototype.get_snapshots_79y88y$;
  Active.prototype.docs_prxdpg$ = CsDbKillsApi.prototype.docs_prxdpg$;
  Active.prototype.documentChanges_pujjsl$$default = CsDbKillsApi.prototype.documentChanges_pujjsl$$default;
  Active.prototype.documentChanges_z2kgpb$ = CsDbKillsApi.prototype.documentChanges_z2kgpb$;
  Active.prototype.fsCache_sj6zb3$$default = CsDbKillsApi.prototype.fsCache_sj6zb3$$default;
  Active.prototype.fsCache_aujjp8$ = CsDbKillsApi.prototype.fsCache_aujjp8$;
  Active.prototype.listEvents_pujjsl$$default = CsDbKillsApi.prototype.listEvents_pujjsl$$default;
  Active.prototype.onSnapshotNext_po64up$ = CsDbKillsApi.prototype.onSnapshotNext_po64up$;
  Active.prototype.toList_pujjsl$$default = CsDbKillsApi.prototype.toList_pujjsl$$default;
  Active.prototype.toSnapshotEvents_ecp0ut$ = CsDbKillsApi.prototype.toSnapshotEvents_ecp0ut$;
  Active.prototype.documentChanges_pujjsl$ = CsDbKillsApi.prototype.documentChanges_pujjsl$;
  Active.prototype.fsCache_sj6zb3$ = CsDbKillsApi.prototype.fsCache_sj6zb3$;
  Active.prototype.getOrNull_m1hph$ = CsDbKillsApi.prototype.getOrNull_m1hph$;
  Active.prototype.listEvents_pujjsl$ = CsDbKillsApi.prototype.listEvents_pujjsl$;
  Active.prototype.query_wzkv1r$ = CsDbKillsApi.prototype.query_wzkv1r$;
  Active.prototype.randomEditable_mx4g9l$ = CsDbKillsApi.prototype.randomEditable_mx4g9l$;
  Active.prototype.set_o9yh22$ = CsDbKillsApi.prototype.set_o9yh22$;
  Active.prototype.toFsDoc_bo0woj$ = CsDbKillsApi.prototype.toFsDoc_bo0woj$;
  Active.prototype.toList_pujjsl$ = CsDbKillsApi.prototype.toList_pujjsl$;
  BoardControl.prototype.ourTurn = BoardTurns.prototype.ourTurn;
  OnlineBoardControl.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  OnlineBoardControl.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  OnlineBoardControl.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  OnlineBoardControl.prototype.set_o9yh22$ = LoggedInPath.prototype.set_o9yh22$;
  OnlineBoardControl.prototype.toFsDoc_bo0woj$ = LoggedInPath.prototype.toFsDoc_bo0woj$;
  WaitingPath.prototype.get_randomDoc_lsue4w$ = ActivePath.prototype.get_randomDoc_lsue4w$;
  WaitingPath.prototype.get_randomDoc_sj9vaa$ = ActivePath.prototype.get_randomDoc_sj9vaa$;
  WaitingPath.prototype.get_ref_sj9vaa$ = ActivePath.prototype.get_ref_sj9vaa$;
  WaitingPath.prototype.get_ref_aqty80$ = ActivePath.prototype.get_ref_aqty80$;
  WaitingPath.prototype.delete_73z9b6$ = ActivePath.prototype.delete_73z9b6$;
  WaitingPath.prototype.delete_ihdkly$ = ActivePath.prototype.delete_ihdkly$;
  WaitingPath.prototype.getCachedOrServer_prxdpg$ = ActivePath.prototype.getCachedOrServer_prxdpg$;
  WaitingPath.prototype.getOrNull_m1hph$$default = ActivePath.prototype.getOrNull_m1hph$$default;
  WaitingPath.prototype.query_wzkv1r$$default = ActivePath.prototype.query_wzkv1r$$default;
  WaitingPath.prototype.randomEditable_mx4g9l$$default = ActivePath.prototype.randomEditable_mx4g9l$$default;
  WaitingPath.prototype.save_73z9b6$ = ActivePath.prototype.save_73z9b6$;
  WaitingPath.prototype.save_biv66q$ = ActivePath.prototype.save_biv66q$;
  WaitingPath.prototype.set_o9yh22$$default = ActivePath.prototype.set_o9yh22$$default;
  WaitingPath.prototype.toFsDoc_bo0woj$$default = ActivePath.prototype.toFsDoc_bo0woj$$default;
  WaitingPath.prototype.toRandomFsDoc_xc7wmg$ = ActivePath.prototype.toRandomFsDoc_xc7wmg$;
  WaitingPath.prototype.getOrNull_m1hph$ = ActivePath.prototype.getOrNull_m1hph$;
  WaitingPath.prototype.query_wzkv1r$ = ActivePath.prototype.query_wzkv1r$;
  WaitingPath.prototype.randomEditable_mx4g9l$ = ActivePath.prototype.randomEditable_mx4g9l$;
  WaitingPath.prototype.set_o9yh22$ = ActivePath.prototype.set_o9yh22$;
  WaitingPath.prototype.toFsDoc_bo0woj$ = ActivePath.prototype.toFsDoc_bo0woj$;
  Waiting.prototype.get_backButton_tdhe4g$ = BackCsDbKillsUixApi.prototype.get_backButton_tdhe4g$;
  Waiting.prototype.get_backButton_ihoiae$ = BackCsDbKillsUixApi.prototype.get_backButton_ihoiae$;
  Waiting.prototype.get_docsOrNull_g2zw3r$ = BackCsDbKillsUixApi.prototype.get_docsOrNull_g2zw3r$;
  Waiting.prototype.get_live_73z9b6$ = BackCsDbKillsUixApi.prototype.get_live_73z9b6$;
  Waiting.prototype.get_snapshots_79y88y$ = BackCsDbKillsUixApi.prototype.get_snapshots_79y88y$;
  Waiting.prototype.backOnDelete_287e2$ = BackCsDbKillsUixApi.prototype.backOnDelete_287e2$;
  Waiting.prototype.rxCreating_8ctbwl$$default = BackCsDbKillsUixApi.prototype.rxCreating_8ctbwl$$default;
  Waiting.prototype.rxEditing_6l8l9j$$default = BackCsDbKillsUixApi.prototype.rxEditing_6l8l9j$$default;
  Waiting.prototype.docs_prxdpg$ = BackCsDbKillsUixApi.prototype.docs_prxdpg$;
  Waiting.prototype.documentChanges_pujjsl$$default = BackCsDbKillsUixApi.prototype.documentChanges_pujjsl$$default;
  Waiting.prototype.documentChanges_z2kgpb$ = BackCsDbKillsUixApi.prototype.documentChanges_z2kgpb$;
  Waiting.prototype.fsCache_sj6zb3$$default = BackCsDbKillsUixApi.prototype.fsCache_sj6zb3$$default;
  Waiting.prototype.fsCache_aujjp8$ = BackCsDbKillsUixApi.prototype.fsCache_aujjp8$;
  Waiting.prototype.listEvents_pujjsl$$default = BackCsDbKillsUixApi.prototype.listEvents_pujjsl$$default;
  Waiting.prototype.onSnapshotNext_po64up$ = BackCsDbKillsUixApi.prototype.onSnapshotNext_po64up$;
  Waiting.prototype.toList_pujjsl$$default = BackCsDbKillsUixApi.prototype.toList_pujjsl$$default;
  Waiting.prototype.toSnapshotEvents_ecp0ut$ = BackCsDbKillsUixApi.prototype.toSnapshotEvents_ecp0ut$;
  Waiting.prototype.get_messagingButton_asww5s$ = KillsMessagingUixApi.prototype.get_messagingButton_asww5s$;
  Waiting.prototype.get_messagingMenu_rp0x24$ = KillsMessagingUixApi.prototype.get_messagingMenu_rp0x24$;
  Waiting.prototype.getOrNull_m1hph$ = WaitingPath.prototype.getOrNull_m1hph$;
  Waiting.prototype.query_wzkv1r$ = WaitingPath.prototype.query_wzkv1r$;
  Waiting.prototype.randomEditable_mx4g9l$ = WaitingPath.prototype.randomEditable_mx4g9l$;
  Waiting.prototype.set_o9yh22$ = WaitingPath.prototype.set_o9yh22$;
  Waiting.prototype.toFsDoc_bo0woj$ = WaitingPath.prototype.toFsDoc_bo0woj$;
  Waiting.prototype.rxCreating_8ctbwl$ = BackCsDbKillsUixApi.prototype.rxCreating_8ctbwl$;
  Waiting.prototype.rxEditing_6l8l9j$ = BackCsDbKillsUixApi.prototype.rxEditing_6l8l9j$;
  Waiting.prototype.documentChanges_pujjsl$ = BackCsDbKillsUixApi.prototype.documentChanges_pujjsl$;
  Waiting.prototype.fsCache_sj6zb3$ = BackCsDbKillsUixApi.prototype.fsCache_sj6zb3$;
  Waiting.prototype.listEvents_pujjsl$ = BackCsDbKillsUixApi.prototype.listEvents_pujjsl$;
  Waiting.prototype.toList_pujjsl$ = BackCsDbKillsUixApi.prototype.toList_pujjsl$;
  BoardPath.prototype.get_randomDoc_lsue4w$ = LoggedInPath.prototype.get_randomDoc_lsue4w$;
  BoardPath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  BoardPath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  BoardPath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  BoardPath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  BoardPath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  BoardPath.prototype.getCachedOrServer_prxdpg$ = LoggedInPath.prototype.getCachedOrServer_prxdpg$;
  BoardPath.prototype.getOrNull_m1hph$$default = LoggedInPath.prototype.getOrNull_m1hph$$default;
  BoardPath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  BoardPath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  BoardPath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  BoardPath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  BoardPath.prototype.set_o9yh22$$default = LoggedInPath.prototype.set_o9yh22$$default;
  BoardPath.prototype.toFsDoc_bo0woj$$default = LoggedInPath.prototype.toFsDoc_bo0woj$$default;
  BoardPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  BoardPath.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  BoardPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  BoardPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  BoardPath.prototype.set_o9yh22$ = LoggedInPath.prototype.set_o9yh22$;
  BoardPath.prototype.toFsDoc_bo0woj$ = LoggedInPath.prototype.toFsDoc_bo0woj$;
  Board.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  Board.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  Board.prototype.get_clickActivate_tvm2vp$ = FBBackApi.prototype.get_clickActivate_tvm2vp$;
  Board.prototype.get_clickToggle_tvm2vp$ = FBBackApi.prototype.get_clickToggle_tvm2vp$;
  Board.prototype.get_docsOrNull_g2zw3r$ = FBBackApi.prototype.get_docsOrNull_g2zw3r$;
  Board.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  Board.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  Board.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  Board.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  Board.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  Board.prototype.click_4eku4n$ = FBBackApi.prototype.click_4eku4n$;
  Board.prototype.click_9375ex$ = FBBackApi.prototype.click_9375ex$;
  Board.prototype.click_512jbc$ = FBBackApi.prototype.click_512jbc$;
  Board.prototype.click_3zaxtq$ = FBBackApi.prototype.click_3zaxtq$;
  Board.prototype.click_ts68bh$ = FBBackApi.prototype.click_ts68bh$;
  Board.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  Board.prototype.documentChanges_pujjsl$$default = FBBackApi.prototype.documentChanges_pujjsl$$default;
  Board.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  Board.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  Board.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  Board.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  Board.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  Board.prototype.signIn_tstgz9$ = FBBackApi.prototype.signIn_tstgz9$;
  Board.prototype.signOut_tstgz9$ = FBBackApi.prototype.signOut_tstgz9$;
  Board.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  Board.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  Board.prototype.getOrNull_m1hph$ = BoardPath.prototype.getOrNull_m1hph$;
  Board.prototype.query_wzkv1r$ = BoardPath.prototype.query_wzkv1r$;
  Board.prototype.randomEditable_mx4g9l$ = BoardPath.prototype.randomEditable_mx4g9l$;
  Board.prototype.set_o9yh22$ = BoardPath.prototype.set_o9yh22$;
  Board.prototype.toFsDoc_bo0woj$ = BoardPath.prototype.toFsDoc_bo0woj$;
  Board.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  Board.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  Board.prototype.documentChanges_pujjsl$ = FBBackApi.prototype.documentChanges_pujjsl$;
  Board.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  Board.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  Board.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  BoardState.prototype.ourTurn = BoardTurns.prototype.ourTurn;
  Links.prototype.get_randomDoc_lsue4w$ = LinksPath.prototype.get_randomDoc_lsue4w$;
  Links.prototype.get_randomDoc_sj9vaa$ = LinksPath.prototype.get_randomDoc_sj9vaa$;
  Links.prototype.get_ref_sj9vaa$ = LinksPath.prototype.get_ref_sj9vaa$;
  Links.prototype.get_ref_aqty80$ = LinksPath.prototype.get_ref_aqty80$;
  Links.prototype.delete_73z9b6$ = LinksPath.prototype.delete_73z9b6$;
  Links.prototype.delete_ihdkly$ = LinksPath.prototype.delete_ihdkly$;
  Links.prototype.getCachedOrServer_prxdpg$ = LinksPath.prototype.getCachedOrServer_prxdpg$;
  Links.prototype.getOrNull_m1hph$$default = LinksPath.prototype.getOrNull_m1hph$$default;
  Links.prototype.query_wzkv1r$$default = LinksPath.prototype.query_wzkv1r$$default;
  Links.prototype.randomEditable_mx4g9l$$default = LinksPath.prototype.randomEditable_mx4g9l$$default;
  Links.prototype.save_73z9b6$ = LinksPath.prototype.save_73z9b6$;
  Links.prototype.save_biv66q$ = LinksPath.prototype.save_biv66q$;
  Links.prototype.set_o9yh22$$default = LinksPath.prototype.set_o9yh22$$default;
  Links.prototype.toFsDoc_bo0woj$$default = LinksPath.prototype.toFsDoc_bo0woj$$default;
  Links.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  Links.prototype.getOrNull_m1hph$ = LinksPath.prototype.getOrNull_m1hph$;
  Links.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  Links.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
  Links.prototype.set_o9yh22$ = LinksPath.prototype.set_o9yh22$;
  Links.prototype.toFsDoc_bo0woj$ = LinksPath.prototype.toFsDoc_bo0woj$;
  LoggedInTC.prototype.get_randomDoc_lsue4w$ = LoggedInPath.prototype.get_randomDoc_lsue4w$;
  LoggedInTC.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  LoggedInTC.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  LoggedInTC.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  LoggedInTC.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  LoggedInTC.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  LoggedInTC.prototype.getCachedOrServer_prxdpg$ = LoggedInPath.prototype.getCachedOrServer_prxdpg$;
  LoggedInTC.prototype.getOrNull_m1hph$$default = LoggedInPath.prototype.getOrNull_m1hph$$default;
  LoggedInTC.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  LoggedInTC.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  LoggedInTC.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  LoggedInTC.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  LoggedInTC.prototype.set_o9yh22$$default = LoggedInPath.prototype.set_o9yh22$$default;
  LoggedInTC.prototype.toFsDoc_bo0woj$$default = LoggedInPath.prototype.toFsDoc_bo0woj$$default;
  LoggedInTC.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  LoggedInTC.prototype.fwd_e1fa5e$$default = LinkApi.prototype.fwd_e1fa5e$$default;
  LoggedInTC.prototype.fwd_nnhkmr$$default = LinkApi.prototype.fwd_nnhkmr$$default;
  LoggedInTC.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  LoggedInTC.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  LoggedInTC.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  LoggedInTC.prototype.set_o9yh22$ = LoggedInPath.prototype.set_o9yh22$;
  LoggedInTC.prototype.toFsDoc_bo0woj$ = LoggedInPath.prototype.toFsDoc_bo0woj$;
  LoggedInTC.prototype.fwd_e1fa5e$ = LinkApi.prototype.fwd_e1fa5e$;
  LoggedInTC.prototype.fwd_nnhkmr$ = LinkApi.prototype.fwd_nnhkmr$;
  LoggedIn.prototype.signOut_tstgz9$ = FBApi.prototype.signOut_tstgz9$;
  LoggedIn.prototype.fwd_e1fa5e$$default = LoggedInTC.prototype.fwd_e1fa5e$$default;
  LoggedIn.prototype.fwd_nnhkmr$$default = LoggedInTC.prototype.fwd_nnhkmr$$default;
  LoggedIn.prototype.get_clickActivate_tvm2vp$ = FBApi.prototype.get_clickActivate_tvm2vp$;
  LoggedIn.prototype.get_clickToggle_tvm2vp$ = FBApi.prototype.get_clickToggle_tvm2vp$;
  LoggedIn.prototype.get_docsOrNull_g2zw3r$ = FBApi.prototype.get_docsOrNull_g2zw3r$;
  LoggedIn.prototype.get_live_73z9b6$ = FBApi.prototype.get_live_73z9b6$;
  LoggedIn.prototype.get_snapshots_79y88y$ = FBApi.prototype.get_snapshots_79y88y$;
  LoggedIn.prototype.rxCreating_8ctbwl$$default = FBApi.prototype.rxCreating_8ctbwl$$default;
  LoggedIn.prototype.rxEditing_6l8l9j$$default = FBApi.prototype.rxEditing_6l8l9j$$default;
  LoggedIn.prototype.click_4eku4n$ = FBApi.prototype.click_4eku4n$;
  LoggedIn.prototype.click_9375ex$ = FBApi.prototype.click_9375ex$;
  LoggedIn.prototype.click_512jbc$ = FBApi.prototype.click_512jbc$;
  LoggedIn.prototype.click_3zaxtq$ = FBApi.prototype.click_3zaxtq$;
  LoggedIn.prototype.click_ts68bh$ = FBApi.prototype.click_ts68bh$;
  LoggedIn.prototype.docs_prxdpg$ = FBApi.prototype.docs_prxdpg$;
  LoggedIn.prototype.documentChanges_pujjsl$$default = FBApi.prototype.documentChanges_pujjsl$$default;
  LoggedIn.prototype.documentChanges_z2kgpb$ = FBApi.prototype.documentChanges_z2kgpb$;
  LoggedIn.prototype.fsCache_sj6zb3$$default = FBApi.prototype.fsCache_sj6zb3$$default;
  LoggedIn.prototype.fsCache_aujjp8$ = FBApi.prototype.fsCache_aujjp8$;
  LoggedIn.prototype.listEvents_pujjsl$$default = FBApi.prototype.listEvents_pujjsl$$default;
  LoggedIn.prototype.onSnapshotNext_po64up$ = FBApi.prototype.onSnapshotNext_po64up$;
  LoggedIn.prototype.signIn_tstgz9$ = FBApi.prototype.signIn_tstgz9$;
  LoggedIn.prototype.toList_pujjsl$$default = FBApi.prototype.toList_pujjsl$$default;
  LoggedIn.prototype.toSnapshotEvents_ecp0ut$ = FBApi.prototype.toSnapshotEvents_ecp0ut$;
  LoggedIn.prototype.getOrNull_m1hph$ = LoggedInTC.prototype.getOrNull_m1hph$;
  LoggedIn.prototype.query_wzkv1r$ = LoggedInTC.prototype.query_wzkv1r$;
  LoggedIn.prototype.randomEditable_mx4g9l$ = LoggedInTC.prototype.randomEditable_mx4g9l$;
  LoggedIn.prototype.set_o9yh22$ = LoggedInTC.prototype.set_o9yh22$;
  LoggedIn.prototype.toFsDoc_bo0woj$ = LoggedInTC.prototype.toFsDoc_bo0woj$;
  LoggedIn.prototype.fwd_e1fa5e$ = LoggedInTC.prototype.fwd_e1fa5e$;
  LoggedIn.prototype.fwd_nnhkmr$ = LoggedInTC.prototype.fwd_nnhkmr$;
  LoggedIn.prototype.rxCreating_8ctbwl$ = FBApi.prototype.rxCreating_8ctbwl$;
  LoggedIn.prototype.rxEditing_6l8l9j$ = FBApi.prototype.rxEditing_6l8l9j$;
  LoggedIn.prototype.documentChanges_pujjsl$ = FBApi.prototype.documentChanges_pujjsl$;
  LoggedIn.prototype.fsCache_sj6zb3$ = FBApi.prototype.fsCache_sj6zb3$;
  LoggedIn.prototype.listEvents_pujjsl$ = FBApi.prototype.listEvents_pujjsl$;
  LoggedIn.prototype.toList_pujjsl$ = FBApi.prototype.toList_pujjsl$;
  SinglePlayerPath.prototype.get_randomDoc_lsue4w$ = LoggedInPath.prototype.get_randomDoc_lsue4w$;
  SinglePlayerPath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  SinglePlayerPath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  SinglePlayerPath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  SinglePlayerPath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  SinglePlayerPath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  SinglePlayerPath.prototype.getCachedOrServer_prxdpg$ = LoggedInPath.prototype.getCachedOrServer_prxdpg$;
  SinglePlayerPath.prototype.getOrNull_m1hph$$default = LoggedInPath.prototype.getOrNull_m1hph$$default;
  SinglePlayerPath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  SinglePlayerPath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  SinglePlayerPath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  SinglePlayerPath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  SinglePlayerPath.prototype.set_o9yh22$$default = LoggedInPath.prototype.set_o9yh22$$default;
  SinglePlayerPath.prototype.toFsDoc_bo0woj$$default = LoggedInPath.prototype.toFsDoc_bo0woj$$default;
  SinglePlayerPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  SinglePlayerPath.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  SinglePlayerPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  SinglePlayerPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  SinglePlayerPath.prototype.set_o9yh22$ = LoggedInPath.prototype.set_o9yh22$;
  SinglePlayerPath.prototype.toFsDoc_bo0woj$ = LoggedInPath.prototype.toFsDoc_bo0woj$;
  SinglePlayer.prototype.getOrNull_m1hph$ = SinglePlayerPath.prototype.getOrNull_m1hph$;
  SinglePlayer.prototype.query_wzkv1r$ = SinglePlayerPath.prototype.query_wzkv1r$;
  SinglePlayer.prototype.randomEditable_mx4g9l$ = SinglePlayerPath.prototype.randomEditable_mx4g9l$;
  SinglePlayer.prototype.set_o9yh22$ = SinglePlayerPath.prototype.set_o9yh22$;
  SinglePlayer.prototype.toFsDoc_bo0woj$ = SinglePlayerPath.prototype.toFsDoc_bo0woj$;
  dirs = listOf([new Dir(1, -1), new Dir(1, 0), new Dir(1, 1), new Dir(0, 1)]);
  mark = cls(trimIndent('\n        stroke: black;\n        stroke-width: 0.1;\n        fill: none;\n    '));
  stroke = cls(trimIndent('\n        stroke: black;\n        stroke-width: 1px;\n    '));
  fieldAnchor = cls(trimIndent('\n        fill: transparent;\n    '));
  highlight = cls(trimIndent('\n        stroke:red;\n        stroke-width:0.3;\n        stroke-opacity:0.5;\n        stroke-linecap:round;\n    '));
  defs = lazy(defs$lambda);
  xGraphics = lazy(xGraphics$lambda);
  oGraphics = lazy(oGraphics$lambda);
  standardMarks = lazy(standardMarks$lambda);
  main();
  Kotlin.defineModule('appsimake-tictactoe', _);
  return _;
}(typeof this['appsimake-tictactoe'] === 'undefined' ? {} : this['appsimake-tictactoe'], kotlin, this['appsimake-commonui'], this['appsimake-tictactoelib'], this['kotlinx-coroutines-core'], this['appsimake-firebase'], this['appsimake-commonshr'], this['appsimake-domx'], this['appsimake-fontawesome'], this['appsimake-bootstrap'], this['appsimake-commonfb']);

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-tictactoe'.");
}
if (typeof this['appsimake-tictactoelib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoe'. Its dependency 'appsimake-tictactoelib' was not found. Please, check whether 'appsimake-tictactoelib' is loaded prior to 'appsimake-tictactoe'.");
}
this['appsimake-tictactoe'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_commonfb, $module$appsimake_domx, $module$appsimake_commonshr, $module$appsimake_bootstrap, $module$appsimake_fontawesome, $module$appsimake_firebase, $module$kotlinx_coroutines_core, $module$appsimake_tictactoelib) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ForwardBase = $module$appsimake_commonui.commonui.view.ForwardBase;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var FBBackApi = $module$appsimake_commonfb.commonfb.FBBackApi;
  var HasBack = $module$appsimake_commonui.commonui.HasBack;
  var widget = $module$appsimake_commonui.commonui.widget;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var Unit = Kotlin.kotlin.Unit;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var equals = Kotlin.equals;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var takeWhile = Kotlin.kotlin.sequences.takeWhile_euau3h$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var Var = $module$appsimake_commonshr.rx.Var;
  var Emitter = $module$appsimake_commonshr.common.Emitter;
  var get_fn = $module$appsimake_commonshr.commonshr.get_fn_4b7k9i$;
  var killable = $module$appsimake_commonshr.killable;
  var rx = $module$appsimake_commonshr.rx.rx_m71pkk$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_gexuht$;
  var def = $module$appsimake_domx.styles.def_722sht$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var ensureNotNull = Kotlin.ensureNotNull;
  var get_svg = $module$appsimake_domx.svgx.get_svg_asww5s$;
  var get_cls = $module$appsimake_domx.svgx.get_cls_npzfio$;
  var get_dNone = $module$appsimake_bootstrap.bootstrap.get_dNone_kre7dp$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var get_symbol = $module$appsimake_domx.svgx.get_symbol_asww5s$;
  var set = $module$appsimake_domx.domx.set_56wq3j$;
  var get_g = $module$appsimake_domx.svgx.get_g_asww5s$;
  var get_line = $module$appsimake_domx.svgx.get_line_asww5s$;
  var get_circle = $module$appsimake_domx.svgx.get_circle_asww5s$;
  var get_ref = $module$appsimake_domx.domx.get_ref_ejp6nk$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_asww5s$;
  var get_m2 = $module$appsimake_bootstrap.bootstrap.get_m2_kre7dp$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var get_height0 = $module$appsimake_domx.styles.get_height0_kre7dp$;
  var transform = $module$appsimake_domx.svgx.transform_udgqj7$;
  var get_use = $module$appsimake_domx.svgx.get_use_asww5s$;
  var set_xlinkHref = $module$appsimake_domx.svgx.set_xlinkHref_15dcce$;
  var get_a = $module$appsimake_domx.svgx.get_a_asww5s$;
  var get_rect = $module$appsimake_domx.svgx.get_rect_asww5s$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_cls_0 = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_kre7dp$;
  var get_bgLight = $module$appsimake_bootstrap.bootstrap.get_bgLight_kre7dp$;
  var get_borderTop = $module$appsimake_bootstrap.bootstrap.get_borderTop_kre7dp$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var get_widget = $module$appsimake_commonui.commonui.widget.get_widget_asww5s$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var row = $module$appsimake_bootstrap.bootstrap.row_gnmiz0$;
  var get_mx1 = $module$appsimake_bootstrap.bootstrap.get_mx1_kre7dp$;
  var get_iconSquare = $module$appsimake_commonui.commonui.widget.get_iconSquare_kre7dp$;
  var viewBox = $module$appsimake_domx.svgx.viewBox_wedmho$;
  var get_redoAlt = $module$appsimake_fontawesome.fontawesome.get_redoAlt_xml72e$;
  var column = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var DbApi = $module$appsimake_firebase.firebase.DbApi;
  var FbLinksFactory = $module$appsimake_commonfb.commonfb.FbLinksFactory;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var forwarding = $module$appsimake_commonui.commonui.view.forwarding_caeb5u$;
  var BaseTC = $module$appsimake_commonui.commonui.links.BaseTC;
  var LinkApi = $module$appsimake_commonui.commonui.links.LinkApi;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var advance = $module$appsimake_commonui.commonui.view.advance_zadjfr$;
  var tictactoelib = $module$appsimake_tictactoelib.tictactoelib;
  var privateOf = $module$appsimake_firebase.firebase.firestore.privateOf_30ab3o$;
  var get_singletons = $module$appsimake_commonshr.commonshr.get_singletons_v34c5b$;
  var get_status = $module$appsimake_tictactoelib.tictactoelib.get_status_f98aja$;
  var GameStatus$None = $module$appsimake_tictactoelib.tictactoelib.GameStatus.None;
  var FBApi = $module$appsimake_commonfb.commonfb.FBApi;
  var get_user = $module$appsimake_fontawesome.fontawesome.get_user_xml72e$;
  var MultiView = $module$appsimake_commonui.commonui.view.MultiView;
  var HasKillsRedisplay = $module$appsimake_commonui.commonui.HasKillsRedisplay;
  var HasKillsRouting = $module$appsimake_commonui.commonui.view.HasKillsRouting;
  var HasRouting = $module$appsimake_commonui.commonui.view.HasRouting;
  Active.prototype = Object.create(ForwardBase.prototype);
  Active.prototype.constructor = Active;
  Board.prototype = Object.create(ForwardBase.prototype);
  Board.prototype.constructor = Board;
  BoardControlBase.prototype = Object.create(BoardTurnsDelegate.prototype);
  BoardControlBase.prototype.constructor = BoardControlBase;
  SinglePlayerControl.prototype = Object.create(BoardControlBase.prototype);
  SinglePlayerControl.prototype.constructor = SinglePlayerControl;
  FieldState$Free.prototype = Object.create(FieldState.prototype);
  FieldState$Free.prototype.constructor = FieldState$Free;
  FieldState$Taken.prototype = Object.create(FieldState.prototype);
  FieldState$Taken.prototype.constructor = FieldState$Taken;
  TurnState$Waiting.prototype = Object.create(TurnState.prototype);
  TurnState$Waiting.prototype.constructor = TurnState$Waiting;
  TurnState$Playing.prototype = Object.create(TurnState.prototype);
  TurnState$Playing.prototype.constructor = TurnState$Playing;
  GameState$Ongoing.prototype = Object.create(GameState.prototype);
  GameState$Ongoing.prototype.constructor = GameState$Ongoing;
  GameState$Draw.prototype = Object.create(GameState.prototype);
  GameState$Draw.prototype.constructor = GameState$Draw;
  GameState$GameOver.prototype = Object.create(GameState.prototype);
  GameState$GameOver.prototype.constructor = GameState$GameOver;
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
  function Active(from, linkage) {
    ForwardBase.call(this, from);
    this.$delegate_ijqcrm$_0 = from;
    this.$delegate_ijqcrm$_1 = linkage;
    this.active_uamg8$_0 = this;
    this.rawView_9dd1on$_0 = ui(this);
  }
  Object.defineProperty(Active.prototype, 'active', {
    get: function () {
      return this.active_uamg8$_0;
    }
  });
  Object.defineProperty(Active.prototype, 'rawView', {
    get: function () {
      return this.rawView_9dd1on$_0;
    }
  });
  Object.defineProperty(Active.prototype, 'db', {
    get: function () {
      return this.$delegate_ijqcrm$_0.db;
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
  Active.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_ijqcrm$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(Active.prototype, 'back', {
    get: function () {
      return this.$delegate_ijqcrm$_1.back;
    }
  });
  Active.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Active',
    interfaces: [FBBackApi, HasBack, ActivePath, LoggedInPath, ForwardBase]
  };
  function ui($receiver) {
    var $receiver_0 = widget.factory.topbar;
    remAssign($receiver_0.title, 'Active Room');
    $receiver.get_backButton_tdhe4g$($receiver_0.left);
    return new TopAndContent($receiver_0.node, null);
  }
  function BoardPath() {
  }
  BoardPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BoardPath',
    interfaces: [LoggedInPath]
  };
  function Board(from, linkage, loggedIn, control, restart) {
    ForwardBase.call(this, from);
    this.control = control;
    this.restart = restart;
    this.$delegate_szmucu$_0 = loggedIn;
    this.$delegate_szmucu$_1 = linkage;
    this.board_9hfjo0$_0 = this;
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
    this.turnState_5fizmz$_0 = new Var(TurnState$Waiting_getInstance());
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
  BoardState.prototype.click_32usgv$ = function (coords, fn) {
    if (this.ourTurnRx.now && equals(this.state_p734xe$(coords).now, FieldState$Free_getInstance())) {
      fn();
    }
  };
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
      return plus(listOf(this$checkGameOver), toList(takeWhile(sequenceExcluding($receiver, this$checkGameOver), BoardState$checkGameOver$reach$lambda(this$BoardState, closure$winner))));
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
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
    this.state_p734xe$(coords).remAssign_11rb$(new FieldState$Taken(player));
    if (this.checkGameOver_8jcxv$(coords)) {
      this.gameState.remAssign_11rb$(new GameState$GameOver(player));
    }
     else if (!this.hasFree.now) {
      this.gameState.remAssign_11rb$(GameState$Draw_getInstance());
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
  function BoardControlBase(title, thisPlayerIndex, players, dimensions, winBy) {
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
    this.title_8tzjbg$_0 = title;
    this.players = players;
    this.dimensions_hzipbv$_0 = dimensions;
    this.numPlayers = this.players.size;
  }
  Object.defineProperty(BoardControlBase.prototype, 'title', {
    get: function () {
      return this.title_8tzjbg$_0;
    }
  });
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
  function SinglePlayerControl() {
    BoardControlBase.call(this, 'Single Player', 0);
    this.states.turnState.remAssign_11rb$(new TurnState$Playing(this.players.get_za3lpa$(0)));
  }
  function SinglePlayerControl$click$lambda$lambda$lambda(this$SinglePlayerControl) {
    return function (it) {
      return this$SinglePlayerControl.players.get_za3lpa$((it.index + 1 | 0) % this$SinglePlayerControl.numPlayers);
    };
  }
  function SinglePlayerControl$click$lambda(this$SinglePlayerControl, this$click) {
    return function () {
      var receiver = this$SinglePlayerControl.states;
      var this$click_0 = this$click;
      var this$SinglePlayerControl_0 = this$SinglePlayerControl;
      receiver.take_ospv3j$(this$click_0, receiver.thisPlayer.now);
      if (equals(receiver.gameState.now, GameState$Ongoing_getInstance())) {
        receiver.thisPlayer.transform_ru8m0w$(SinglePlayerControl$click$lambda$lambda$lambda(this$SinglePlayerControl_0));
        receiver.turnState.remAssign_11rb$(new TurnState$Playing(receiver.thisPlayer.now));
      }
      return Unit;
    };
  }
  SinglePlayerControl.prototype.click_8jcxv$ = function ($receiver) {
    this.states.click_32usgv$($receiver, SinglePlayerControl$click$lambda(this, $receiver));
  };
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
  function TurnState$Waiting() {
    TurnState$Waiting_instance = this;
    TurnState.call(this);
  }
  TurnState$Waiting.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Waiting',
    interfaces: [TurnState]
  };
  var TurnState$Waiting_instance = null;
  function TurnState$Waiting_getInstance() {
    if (TurnState$Waiting_instance === null) {
      new TurnState$Waiting();
    }
    return TurnState$Waiting_instance;
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
    get_dNone(get_cls($receiver));
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
    get_mark(get_cls($receiver));
    invoke(get_line($receiver), xGraphics$lambda$lambda$lambda$lambda);
    invoke(get_line($receiver), xGraphics$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function xGraphics$lambda$lambda($receiver) {
    set($receiver.attributes, 'overflow', 'visible');
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
    get_mark(get_cls($receiver));
    $receiver.r.baseVal.value = 0.5;
    return Unit;
  }
  function oGraphics$lambda$lambda($receiver) {
    set($receiver.attributes, 'overflow', 'visible');
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
    return listOf_0([get_ref(get_xGraphics()), get_ref(get_oGraphics())]);
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
    get_fieldAnchor(get_cls($receiver));
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
      get_stroke(get_cls($receiver));
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
      get_highlight(get_cls($receiver));
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
      var $receiver_0 = get_cls_0($receiver);
      get_m1($receiver_0);
      get_alignItemsCenter($receiver_0);
      var $receiver_1 = this$.gameState.invoke();
      var this$_0 = this$;
      if (equals($receiver_1, GameState$Draw_getInstance()))
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
        if (equals($receiver_2, TurnState$Waiting_getInstance()))
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
      var $receiver_0 = get_cls_0($receiver);
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
      var $receiver_0 = get_cls($receiver);
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
  function ui$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.restart();
      return Unit;
    };
  }
  function ui$lambda(this$ui) {
    return function ($receiver) {
      get_flexGrow1(get_cls_0($receiver));
      boardNode($receiver, this$ui);
      return Unit;
    };
  }
  function ui_0($receiver) {
    var $receiver_0 = widget.factory.topbar;
    remAssign($receiver_0.title, $receiver.control.title);
    $receiver.get_backButton_tdhe4g$($receiver_0.left);
    var $receiver_1 = $receiver_0.right.button;
    $receiver_1.m1p2;
    get_redoAlt($receiver_1.fa);
    $receiver_1.warning;
    $receiver.click_9375ex$($receiver_1, ui$lambda$lambda$lambda($receiver));
    return new TopAndContent($receiver_0.node, column(document, ui$lambda($receiver)));
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
  function Coroutine$Links$home$lambda(this$Links_0, closure$deps_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$closure$deps = closure$deps_0;
    this.local$tmp$ = void 0;
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
            tmp$ = this.result_0;
            var $receiver = new LoggedIn(this.local$this$Links, this.local$lnk, this.local$tmp$, tmp$);
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
    interfaces: [LinksPath]
  };
  function LoggedIn(links, linkage, hole, user) {
    ForwardBase.call(this, hole);
    this.linkage_17uu7$_0 = linkage;
    this.$delegate_62d09q$_0 = links;
    this.loggedIn_3pyit5$_0 = this;
    this.privateDoc = privateOf(tictactoelib.tictactoeLib, user);
    this.statusDoc = get_status(get_singletons(this.privateDoc));
    this.gameStatus = new Var(null);
    this.rawView_blrcav$_0 = ui_1(this);
    launch(this, void 0, void 0, LoggedIn_init$lambda(this));
  }
  Object.defineProperty(LoggedIn.prototype, 'linkage', {
    get: function () {
      return this.linkage_17uu7$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'loggedIn', {
    get: function () {
      return this.loggedIn_3pyit5$_0;
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
  LoggedIn.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_62d09q$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  function Coroutine$LoggedIn_init$lambda(this$LoggedIn_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$LoggedIn_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn_init$lambda.prototype.constructor = Coroutine$LoggedIn_init$lambda;
  Coroutine$LoggedIn_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$_0 = this.local$this$LoggedIn.gameStatus;
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.getOrNull_m1hph$(this.local$this$LoggedIn.statusDoc, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_0.remAssign_11rb$((tmp$ = this.result_0) != null ? tmp$ : new GameStatus$None());
            this.local$tmp$ = this.local$this$LoggedIn.docs_prxdpg$(this.local$this$LoggedIn.statusDoc).iterator();
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
              this.state_0 = 7;
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
            var d = this.result_0;
            this.local$this$LoggedIn.gameStatus.remAssign_11rb$(d);
            this.state_0 = 3;
            continue;
          case 7:
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
  function LoggedIn_init$lambda(this$LoggedIn_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn_init$lambda(this$LoggedIn_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [FBApi, LoggedInTC, LoggedInPath, LinksPath, ForwardBase]
  };
  function ui$lambda$lambda$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.singlePlayer();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.signOut();
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
    $receiver.signOut_tstgz9$($receiver_2, ui$lambda$lambda$lambda$lambda($receiver));
    return new TopAndContent($receiver_0.node, null);
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
    this.currentView_qxlb3s$_0 = new Var(this.createBoard());
  }
  Object.defineProperty(SinglePlayer.prototype, 'singlePlayer', {
    get: function () {
      return this.singlePlayer_5gykw5$_0;
    }
  });
  function SinglePlayer$createBoard$lambda(this$SinglePlayer) {
    return function () {
      this$SinglePlayer.currentView.remAssign_11rb$(this$SinglePlayer.createBoard());
      return Unit;
    };
  }
  SinglePlayer.prototype.createBoard = function () {
    return new Board(this, this.linkage, this.loggedIn, new SinglePlayerControl(), SinglePlayer$createBoard$lambda(this));
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
  package$active.Active = Active;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$active.ui_6qsk0d$ = ui;
  var package$board = package$tictactoe.board || (package$tictactoe.board = {});
  package$board.BoardPath = BoardPath;
  package$board.Board = Board;
  package$board.BoardTurns = BoardTurns;
  package$board.BoardControl = BoardControl;
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
  package$board.FieldState = FieldState;
  Object.defineProperty(TurnState, 'Waiting', {
    get: TurnState$Waiting_getInstance
  });
  TurnState.Playing = TurnState$Playing;
  package$board.TurnState = TurnState;
  Object.defineProperty(GameState, 'Ongoing', {
    get: GameState$Ongoing_getInstance
  });
  Object.defineProperty(GameState, 'Draw', {
    get: GameState$Draw_getInstance
  });
  GameState.GameOver = GameState$GameOver;
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
  LinksPath.prototype.toRandomFsDoc_xc7wmg$ = DbApi.prototype.toRandomFsDoc_xc7wmg$;
  LinksPath.prototype.getOrNull_m1hph$ = DbApi.prototype.getOrNull_m1hph$;
  LinksPath.prototype.query_wzkv1r$ = DbApi.prototype.query_wzkv1r$;
  LinksPath.prototype.randomEditable_mx4g9l$ = DbApi.prototype.randomEditable_mx4g9l$;
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
  LoggedInPath.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  LoggedInPath.prototype.getOrNull_m1hph$ = LinksPath.prototype.getOrNull_m1hph$;
  LoggedInPath.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  LoggedInPath.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
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
  ActivePath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  ActivePath.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  ActivePath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  ActivePath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  Active.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  Active.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  Active.prototype.get_clickActivate_tvm2vp$ = FBBackApi.prototype.get_clickActivate_tvm2vp$;
  Active.prototype.get_clickToggle_tvm2vp$ = FBBackApi.prototype.get_clickToggle_tvm2vp$;
  Active.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  Active.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  Active.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  Active.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  Active.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  Active.prototype.click_4eku4n$ = FBBackApi.prototype.click_4eku4n$;
  Active.prototype.click_9375ex$ = FBBackApi.prototype.click_9375ex$;
  Active.prototype.click_512jbc$ = FBBackApi.prototype.click_512jbc$;
  Active.prototype.click_3zaxtq$ = FBBackApi.prototype.click_3zaxtq$;
  Active.prototype.click_ts68bh$ = FBBackApi.prototype.click_ts68bh$;
  Active.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  Active.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  Active.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  Active.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  Active.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  Active.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  Active.prototype.signIn_tstgz9$ = FBBackApi.prototype.signIn_tstgz9$;
  Active.prototype.signOut_tstgz9$ = FBBackApi.prototype.signOut_tstgz9$;
  Active.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  Active.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  Active.prototype.getOrNull_m1hph$ = ActivePath.prototype.getOrNull_m1hph$;
  Active.prototype.query_wzkv1r$ = ActivePath.prototype.query_wzkv1r$;
  Active.prototype.randomEditable_mx4g9l$ = ActivePath.prototype.randomEditable_mx4g9l$;
  Active.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  Active.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  Active.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  Active.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  Active.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
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
  BoardPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  BoardPath.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  BoardPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  BoardPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  Board.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  Board.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  Board.prototype.get_clickActivate_tvm2vp$ = FBBackApi.prototype.get_clickActivate_tvm2vp$;
  Board.prototype.get_clickToggle_tvm2vp$ = FBBackApi.prototype.get_clickToggle_tvm2vp$;
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
  Board.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  Board.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  Board.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  Board.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  Board.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  BoardControl.prototype.ourTurn = BoardTurns.prototype.ourTurn;
  BoardState.prototype.ourTurn = BoardTurns.prototype.ourTurn;
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
  Links.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  Links.prototype.getOrNull_m1hph$ = LinksPath.prototype.getOrNull_m1hph$;
  Links.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  Links.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
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
  LoggedInTC.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  LoggedInTC.prototype.fwd_e1fa5e$$default = LinkApi.prototype.fwd_e1fa5e$$default;
  LoggedInTC.prototype.fwd_nnhkmr$$default = LinkApi.prototype.fwd_nnhkmr$$default;
  LoggedInTC.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  LoggedInTC.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  LoggedInTC.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  LoggedInTC.prototype.fwd_e1fa5e$ = LinkApi.prototype.fwd_e1fa5e$;
  LoggedInTC.prototype.fwd_nnhkmr$ = LinkApi.prototype.fwd_nnhkmr$;
  LoggedIn.prototype.signOut_tstgz9$ = FBApi.prototype.signOut_tstgz9$;
  LoggedIn.prototype.fwd_e1fa5e$$default = LoggedInTC.prototype.fwd_e1fa5e$$default;
  LoggedIn.prototype.fwd_nnhkmr$$default = LoggedInTC.prototype.fwd_nnhkmr$$default;
  LoggedIn.prototype.get_clickActivate_tvm2vp$ = FBApi.prototype.get_clickActivate_tvm2vp$;
  LoggedIn.prototype.get_clickToggle_tvm2vp$ = FBApi.prototype.get_clickToggle_tvm2vp$;
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
  LoggedIn.prototype.fwd_e1fa5e$ = LoggedInTC.prototype.fwd_e1fa5e$;
  LoggedIn.prototype.fwd_nnhkmr$ = LoggedInTC.prototype.fwd_nnhkmr$;
  LoggedIn.prototype.rxCreating_8ctbwl$ = FBApi.prototype.rxCreating_8ctbwl$;
  LoggedIn.prototype.rxEditing_6l8l9j$ = FBApi.prototype.rxEditing_6l8l9j$;
  LoggedIn.prototype.fsCache_sj6zb3$ = FBApi.prototype.fsCache_sj6zb3$;
  LoggedIn.prototype.listEvents_pujjsl$ = FBApi.prototype.listEvents_pujjsl$;
  LoggedIn.prototype.toList_pujjsl$ = FBApi.prototype.toList_pujjsl$;
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
  SinglePlayerPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  SinglePlayerPath.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  SinglePlayerPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  SinglePlayerPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  SinglePlayer.prototype.getOrNull_m1hph$ = SinglePlayerPath.prototype.getOrNull_m1hph$;
  SinglePlayer.prototype.query_wzkv1r$ = SinglePlayerPath.prototype.query_wzkv1r$;
  SinglePlayer.prototype.randomEditable_mx4g9l$ = SinglePlayerPath.prototype.randomEditable_mx4g9l$;
  dirs = listOf_0([new Dir(1, -1), new Dir(1, 0), new Dir(1, 1), new Dir(0, 1)]);
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
}(typeof this['appsimake-tictactoe'] === 'undefined' ? {} : this['appsimake-tictactoe'], kotlin, this['appsimake-commonui'], this['appsimake-commonfb'], this['appsimake-domx'], this['appsimake-commonshr'], this['appsimake-bootstrap'], this['appsimake-fontawesome'], this['appsimake-firebase'], this['kotlinx-coroutines-core'], this['appsimake-tictactoelib']);

function define(args, fn) {
    fn(
        ...args.map(function(a) {
            if (a == 'exports') {
                return module.exports;
            } else if (a.startsWith('appsimake-')) {
                return require('./' + a);
            } else {
                return require(a);
            }
        })
    );
}

define(['exports', 'kotlin', 'appsimake-commonshr'], function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var common = $module$appsimake_commonshr.common;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Lib = $module$appsimake_commonshr.commonshr.Lib;
  var coll = $module$appsimake_commonshr.commonshr.coll_287e2$;
  var docRoot = $module$appsimake_commonshr.commonshr.docRoot_th1k7p$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var wrapper = $module$appsimake_commonshr.commonshr.properties.wrapper_3yfn2g$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var RxRoot = $module$appsimake_commonshr.commonshr.properties.RxRoot;
  var Tmp = $module$appsimake_commonshr.commonshr.Tmp;
  var PrivateSingleton = $module$appsimake_commonshr.commonshr.PrivateSingleton;
  var RxBase = $module$appsimake_commonshr.commonshr.properties.RxBase;
  var InboxPublic = $module$appsimake_commonshr.commonshr.InboxPublic;
  Lounge.prototype = Object.create(RxRoot.prototype);
  Lounge.prototype.constructor = Lounge;
  Lounge$Empty.prototype = Object.create(Lounge.prototype);
  Lounge$Empty.prototype.constructor = Lounge$Empty;
  Lounge$Waiting.prototype = Object.create(Lounge.prototype);
  Lounge$Waiting.prototype.constructor = Lounge$Waiting;
  GameStatus.prototype = Object.create(RxRoot.prototype);
  GameStatus.prototype.constructor = GameStatus;
  GameStatus$Offline.prototype = Object.create(GameStatus.prototype);
  GameStatus$Offline.prototype.constructor = GameStatus$Offline;
  GameStatus$Online.prototype = Object.create(GameStatus.prototype);
  GameStatus$Online.prototype.constructor = GameStatus$Online;
  GameStatus$Waiting.prototype = Object.create(GameStatus.prototype);
  GameStatus$Waiting.prototype.constructor = GameStatus$Waiting;
  GameStatus$Playing.prototype = Object.create(GameStatus.prototype);
  GameStatus$Playing.prototype.constructor = GameStatus$Playing;
  Player.prototype = Object.create(RxBase.prototype);
  Player.prototype.constructor = Player;
  Move.prototype = Object.create(RxRoot.prototype);
  Move.prototype.constructor = Move;
  Move$Start.prototype = Object.create(Move.prototype);
  Move$Start.prototype.constructor = Move$Start;
  Move$Start$Companion.prototype = Object.create(Move$Start.prototype);
  Move$Start$Companion.prototype.constructor = Move$Start$Companion;
  Move$Placement.prototype = Object.create(Move.prototype);
  Move$Placement.prototype.constructor = Move$Placement;
  Move$Leave.prototype = Object.create(Move.prototype);
  Move$Leave.prototype.constructor = Move$Leave;
  Move$Companion.prototype = Object.create(Move.prototype);
  Move$Companion.prototype.constructor = Move$Companion;
  var GoOnline_metadata = new PropertyMetadata('GoOnline');
  var GoOnline;
  function get_GoOnline() {
    return GoOnline.getValue_lrcp0p$(this, GoOnline_metadata);
  }
  var DisableNotifications_metadata = new PropertyMetadata('DisableNotifications');
  var DisableNotifications;
  function get_DisableNotifications() {
    return DisableNotifications.getValue_lrcp0p$(this, DisableNotifications_metadata);
  }
  var tictactoeLib;
  var players;
  var players_metadata = new PropertyMetadata('players');
  function get_players($receiver) {
    return players.getValue_lrcp0p$($receiver, players_metadata);
  }
  var status;
  var status_metadata = new PropertyMetadata('status');
  function get_status($receiver) {
    return status.getValue_lrcp0p$($receiver, status_metadata);
  }
  var lounge;
  var lounge_metadata = new PropertyMetadata('lounge');
  function get_lounge($receiver) {
    return lounge.getValue_lrcp0p$($receiver, lounge_metadata);
  }
  function get_moves($receiver) {
    return $receiver.toSource_sjcvik$(Move$Companion_getInstance().of);
  }
  function Lounge() {
    Lounge$Companion_getInstance();
    RxRoot.call(this);
  }
  function Lounge$Empty() {
    Lounge.call(this);
  }
  Lounge$Empty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Empty',
    interfaces: [Lounge]
  };
  function Lounge$Waiting() {
    Lounge.call(this);
    this.user_y6clbv$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, Lounge$Waiting$user_metadata);
    this.game_yed1s2$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, Lounge$Waiting$game_metadata);
  }
  var Lounge$Waiting$user_metadata = new PropertyMetadata('user');
  Object.defineProperty(Lounge$Waiting.prototype, 'user', {
    get: function () {
      return this.user_y6clbv$_0.getValue_lrcp0p$(this, Lounge$Waiting$user_metadata);
    }
  });
  var Lounge$Waiting$game_metadata = new PropertyMetadata('game');
  Object.defineProperty(Lounge$Waiting.prototype, 'game', {
    get: function () {
      return this.game_yed1s2$_0.getValue_lrcp0p$(this, Lounge$Waiting$game_metadata);
    }
  });
  Lounge$Waiting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Waiting',
    interfaces: [Lounge]
  };
  function Lounge$Companion() {
    Lounge$Companion_instance = this;
    this.of = wrapper([Lounge$Companion$of$lambda, Lounge$Companion$of$lambda_0]);
  }
  function Lounge$Companion$of$lambda() {
    return new Lounge$Empty();
  }
  function Lounge$Companion$of$lambda_0() {
    return new Lounge$Waiting();
  }
  Lounge$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Lounge$Companion_instance = null;
  function Lounge$Companion_getInstance() {
    if (Lounge$Companion_instance === null) {
      new Lounge$Companion();
    }
    return Lounge$Companion_instance;
  }
  Lounge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lounge',
    interfaces: [Tmp, RxRoot]
  };
  function GameStatus() {
    GameStatus$Companion_getInstance();
    RxRoot.call(this);
  }
  function GameStatus$Offline() {
    GameStatus.call(this);
  }
  GameStatus$Offline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Offline',
    interfaces: [GameStatus]
  };
  function GameStatus$Online() {
    GameStatus.call(this);
  }
  GameStatus$Online.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Online',
    interfaces: [GameStatus]
  };
  function GameStatus$Waiting() {
    GameStatus.call(this);
    this.game_vwrg20$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, GameStatus$Waiting$game_metadata);
  }
  var GameStatus$Waiting$game_metadata = new PropertyMetadata('game');
  Object.defineProperty(GameStatus$Waiting.prototype, 'game', {
    get: function () {
      return this.game_vwrg20$_0.getValue_lrcp0p$(this, GameStatus$Waiting$game_metadata);
    }
  });
  GameStatus$Waiting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Waiting',
    interfaces: [GameStatus]
  };
  function GameStatus$Playing() {
    GameStatus$Playing$Companion_getInstance();
    GameStatus.call(this);
    this.opponent_54wrxe$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, GameStatus$Playing$opponent_metadata);
    this.game_qqcqi1$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, GameStatus$Playing$game_metadata);
    this.seq_q2mdbu$_0 = this.o.int_za3lpa$(GameStatus$Playing$Companion_getInstance().FirstSeq).provideDelegate_n5byny$(this, GameStatus$Playing$seq_metadata);
  }
  var GameStatus$Playing$opponent_metadata = new PropertyMetadata('opponent');
  Object.defineProperty(GameStatus$Playing.prototype, 'opponent', {
    get: function () {
      return this.opponent_54wrxe$_0.getValue_lrcp0p$(this, GameStatus$Playing$opponent_metadata);
    }
  });
  var GameStatus$Playing$game_metadata = new PropertyMetadata('game');
  Object.defineProperty(GameStatus$Playing.prototype, 'game', {
    get: function () {
      return this.game_qqcqi1$_0.getValue_lrcp0p$(this, GameStatus$Playing$game_metadata);
    }
  });
  var GameStatus$Playing$seq_metadata = new PropertyMetadata('seq');
  Object.defineProperty(GameStatus$Playing.prototype, 'seq', {
    get: function () {
      return this.seq_q2mdbu$_0.getValue_lrcp0p$(this, GameStatus$Playing$seq_metadata);
    }
  });
  function GameStatus$Playing$Companion() {
    GameStatus$Playing$Companion_instance = this;
    this.FirstSeq = 1;
  }
  GameStatus$Playing$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameStatus$Playing$Companion_instance = null;
  function GameStatus$Playing$Companion_getInstance() {
    if (GameStatus$Playing$Companion_instance === null) {
      new GameStatus$Playing$Companion();
    }
    return GameStatus$Playing$Companion_instance;
  }
  GameStatus$Playing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Playing',
    interfaces: [GameStatus]
  };
  function GameStatus$Companion() {
    GameStatus$Companion_instance = this;
    this.of = wrapper([GameStatus$Companion$of$lambda, GameStatus$Companion$of$lambda_0, GameStatus$Companion$of$lambda_1, GameStatus$Companion$of$lambda_2]);
  }
  function GameStatus$Companion$of$lambda() {
    return new GameStatus$Offline();
  }
  function GameStatus$Companion$of$lambda_0() {
    return new GameStatus$Online();
  }
  function GameStatus$Companion$of$lambda_1() {
    return new GameStatus$Waiting();
  }
  function GameStatus$Companion$of$lambda_2() {
    return new GameStatus$Playing();
  }
  GameStatus$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameStatus$Companion_instance = null;
  function GameStatus$Companion_getInstance() {
    if (GameStatus$Companion_instance === null) {
      new GameStatus$Companion();
    }
    return GameStatus$Companion_instance;
  }
  GameStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameStatus',
    interfaces: [PrivateSingleton, RxRoot]
  };
  function Player() {
    RxBase.call(this);
    this.active_ir98gi$_0 = this.o.boolean_6taknv$().provideDelegate_n5byny$(this, Player$active_metadata);
    this.game_u70256$_0 = this.o.prop_z4bjo6$(null).provideDelegate_n5byny$(this, Player$game_metadata);
  }
  var Player$active_metadata = new PropertyMetadata('active');
  Object.defineProperty(Player.prototype, 'active', {
    get: function () {
      return this.active_ir98gi$_0.getValue_lrcp0p$(this, Player$active_metadata);
    }
  });
  var Player$game_metadata = new PropertyMetadata('game');
  Object.defineProperty(Player.prototype, 'game', {
    get: function () {
      return this.game_u70256$_0.getValue_lrcp0p$(this, Player$game_metadata);
    }
  });
  Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: [RxBase]
  };
  function Move() {
    Move$Companion_getInstance();
    RxRoot.call(this);
    this.seq_g4r6p9$_0 = this.o.int_za3lpa$().provideDelegate_n5byny$(this, Move$seq_metadata);
    this.game_2oy8ye$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, Move$game_metadata);
    this.from_2opcta$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, Move$from_metadata);
  }
  var Move$seq_metadata = new PropertyMetadata('seq');
  Object.defineProperty(Move.prototype, 'seq', {
    get: function () {
      return this.seq_g4r6p9$_0.getValue_lrcp0p$(this, Move$seq_metadata);
    }
  });
  var Move$game_metadata = new PropertyMetadata('game');
  Object.defineProperty(Move.prototype, 'game', {
    get: function () {
      return this.game_2oy8ye$_0.getValue_lrcp0p$(this, Move$game_metadata);
    }
  });
  var Move$from_metadata = new PropertyMetadata('from');
  Object.defineProperty(Move.prototype, 'from', {
    get: function () {
      return this.from_2opcta$_0.getValue_lrcp0p$(this, Move$from_metadata);
    }
  });
  function Move$Start() {
    Move$Start$Companion_getInstance();
    Move.call(this);
    this.firstPlayer_7xyi7t$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, Move$Start$firstPlayer_metadata);
  }
  var Move$Start$firstPlayer_metadata = new PropertyMetadata('firstPlayer');
  Object.defineProperty(Move$Start.prototype, 'firstPlayer', {
    get: function () {
      return this.firstPlayer_7xyi7t$_0.getValue_lrcp0p$(this, Move$Start$firstPlayer_metadata);
    }
  });
  function Move$Start$Companion() {
    Move$Start$Companion_instance = this;
    Move$Start.call(this);
  }
  Move$Start$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Move$Start]
  };
  var Move$Start$Companion_instance = null;
  function Move$Start$Companion_getInstance() {
    if (Move$Start$Companion_instance === null) {
      new Move$Start$Companion();
    }
    return Move$Start$Companion_instance;
  }
  Move$Start.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Start',
    interfaces: [Move]
  };
  function Move$Placement() {
    Move.call(this);
    this.x_hf6glf$_0 = this.o.int_za3lpa$().provideDelegate_n5byny$(this, Move$Placement$x_metadata);
    this.y_hf6gkk$_0 = this.o.int_za3lpa$().provideDelegate_n5byny$(this, Move$Placement$y_metadata);
  }
  var Move$Placement$x_metadata = new PropertyMetadata('x');
  Object.defineProperty(Move$Placement.prototype, 'x', {
    get: function () {
      return this.x_hf6glf$_0.getValue_lrcp0p$(this, Move$Placement$x_metadata);
    }
  });
  var Move$Placement$y_metadata = new PropertyMetadata('y');
  Object.defineProperty(Move$Placement.prototype, 'y', {
    get: function () {
      return this.y_hf6gkk$_0.getValue_lrcp0p$(this, Move$Placement$y_metadata);
    }
  });
  Move$Placement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Placement',
    interfaces: [Move]
  };
  function Move$Leave() {
    Move.call(this);
  }
  Move$Leave.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Leave',
    interfaces: [Move]
  };
  function Move$Companion() {
    Move$Companion_instance = this;
    Move.call(this);
    this.of = wrapper([Move$Companion$of$lambda, Move$Companion$of$lambda_0, Move$Companion$of$lambda_1]);
  }
  function Move$Companion$of$lambda() {
    return new Move$Start();
  }
  function Move$Companion$of$lambda_0() {
    return new Move$Placement();
  }
  function Move$Companion$of$lambda_1() {
    return new Move$Leave();
  }
  Move$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Move]
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
    interfaces: [InboxPublic, RxRoot]
  };
  var package$tictactoelib = _.tictactoelib || (_.tictactoelib = {});
  Object.defineProperty(package$tictactoelib, 'GoOnline', {
    get: get_GoOnline
  });
  Object.defineProperty(package$tictactoelib, 'DisableNotifications', {
    get: get_DisableNotifications
  });
  Object.defineProperty(package$tictactoelib, 'tictactoeLib', {
    get: function () {
      return tictactoeLib;
    }
  });
  package$tictactoelib.get_players_py8usb$ = get_players;
  package$tictactoelib.get_status_f98aja$ = get_status;
  package$tictactoelib.get_lounge_cz4ylz$ = get_lounge;
  package$tictactoelib.get_moves_f80bip$ = get_moves;
  Lounge.Empty = Lounge$Empty;
  Lounge.Waiting = Lounge$Waiting;
  Object.defineProperty(Lounge, 'Companion', {
    get: Lounge$Companion_getInstance
  });
  package$tictactoelib.Lounge = Lounge;
  GameStatus.Offline = GameStatus$Offline;
  GameStatus.Online = GameStatus$Online;
  GameStatus.Waiting = GameStatus$Waiting;
  Object.defineProperty(GameStatus$Playing, 'Companion', {
    get: GameStatus$Playing$Companion_getInstance
  });
  GameStatus.Playing = GameStatus$Playing;
  Object.defineProperty(GameStatus, 'Companion', {
    get: GameStatus$Companion_getInstance
  });
  package$tictactoelib.GameStatus = GameStatus;
  package$tictactoelib.Player = Player;
  Object.defineProperty(Move$Start, 'Companion', {
    get: Move$Start$Companion_getInstance
  });
  Move.Start = Move$Start;
  Move.Placement = Move$Placement;
  Move.Leave = Move$Leave;
  Object.defineProperty(Move, 'Companion', {
    get: Move$Companion_getInstance
  });
  package$tictactoelib.Move = Move;
  GoOnline = common.varName.provideDelegate_n5byny$(this, GoOnline_metadata);
  DisableNotifications = common.varName.provideDelegate_n5byny$(this, DisableNotifications_metadata);
  tictactoeLib = new Lib('tictactoe');
  players = coll();
  status = docRoot(GameStatus$Companion_getInstance().of);
  lounge = docRoot(Lounge$Companion_getInstance().of);
  Kotlin.defineModule('appsimake-tictactoelib', _);
  return _;
});

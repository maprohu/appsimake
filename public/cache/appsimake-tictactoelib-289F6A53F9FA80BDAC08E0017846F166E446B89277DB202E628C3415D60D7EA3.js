if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoelib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-tictactoelib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoelib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-tictactoelib'.");
}
this['appsimake-tictactoelib'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var Lib = $module$appsimake_commonshr.commonshr.Lib;
  var coll = $module$appsimake_commonshr.commonshr.coll_287e2$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var doc = $module$appsimake_commonshr.commonshr.doc_68r5d9$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var wrapper = $module$appsimake_commonshr.commonshr.properties.wrapper_3yfn2g$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var RxRoot = $module$appsimake_commonshr.commonshr.properties.RxRoot;
  var PrivateSingleton = $module$appsimake_commonshr.commonshr.PrivateSingleton;
  var RxBase = $module$appsimake_commonshr.commonshr.properties.RxBase;
  GameStatus.prototype = Object.create(RxRoot.prototype);
  GameStatus.prototype.constructor = GameStatus;
  GameStatus$None.prototype = Object.create(GameStatus.prototype);
  GameStatus$None.prototype.constructor = GameStatus$None;
  GameStatus$Waiting.prototype = Object.create(GameStatus.prototype);
  GameStatus$Waiting.prototype.constructor = GameStatus$Waiting;
  GameStatus$Playing.prototype = Object.create(GameStatus.prototype);
  GameStatus$Playing.prototype.constructor = GameStatus$Playing;
  Player.prototype = Object.create(RxBase.prototype);
  Player.prototype.constructor = Player;
  Game.prototype = Object.create(RxBase.prototype);
  Game.prototype.constructor = Game;
  Move.prototype = Object.create(RxRoot.prototype);
  Move.prototype.constructor = Move;
  Move$Companion.prototype = Object.create(Move.prototype);
  Move$Companion.prototype.constructor = Move$Companion;
  Start.prototype = Object.create(Move.prototype);
  Start.prototype.constructor = Start;
  Placement.prototype = Object.create(Move.prototype);
  Placement.prototype.constructor = Placement;
  Leave.prototype = Object.create(Move.prototype);
  Leave.prototype.constructor = Leave;
  var tictactoeLib;
  var games;
  var games_metadata = new PropertyMetadata('games');
  function get_games($receiver) {
    return games.getValue_lrcp0p$($receiver, games_metadata);
  }
  var players;
  var players_metadata = new PropertyMetadata('players');
  function get_players($receiver) {
    return players.getValue_lrcp0p$($receiver, players_metadata);
  }
  var moves;
  var moves_metadata = new PropertyMetadata('moves');
  function get_moves($receiver) {
    return moves.getValue_lrcp0p$($receiver, moves_metadata);
  }
  var status;
  var status_metadata = new PropertyMetadata('status');
  function get_status($receiver) {
    return status.getValue_lrcp0p$($receiver, status_metadata);
  }
  function GameStatus() {
    GameStatus$Companion_getInstance();
    RxRoot.call(this);
  }
  function GameStatus$None() {
    GameStatus.call(this);
  }
  GameStatus$None.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'None',
    interfaces: [GameStatus]
  };
  function GameStatus$Waiting() {
    GameStatus.call(this);
  }
  GameStatus$Waiting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Waiting',
    interfaces: [GameStatus]
  };
  function GameStatus$Playing() {
    GameStatus.call(this);
  }
  GameStatus$Playing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Playing',
    interfaces: [GameStatus]
  };
  function GameStatus$Companion() {
    GameStatus$Companion_instance = this;
    this.of = wrapper([GameStatus$Companion$of$lambda, GameStatus$Companion$of$lambda_0, GameStatus$Companion$of$lambda_1]);
  }
  function GameStatus$Companion$of$lambda() {
    return new GameStatus$None();
  }
  function GameStatus$Companion$of$lambda_0() {
    return new GameStatus$Waiting();
  }
  function GameStatus$Companion$of$lambda_1() {
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
  function Game() {
    RxBase.call(this);
    this.players_7xo8u1$_0 = this.o.set_287e2$().provideDelegate_n5byny$(this, Game$players_metadata);
    this.originalPlayers_6ak8tm$_0 = this.o.set_287e2$().provideDelegate_n5byny$(this, Game$originalPlayers_metadata);
    this.isOver_3nqnrf$_0 = this.o.boolean_6taknv$().provideDelegate_n5byny$(this, Game$isOver_metadata);
  }
  var Game$players_metadata = new PropertyMetadata('players');
  Object.defineProperty(Game.prototype, 'players', {
    get: function () {
      return this.players_7xo8u1$_0.getValue_lrcp0p$(this, Game$players_metadata);
    }
  });
  var Game$originalPlayers_metadata = new PropertyMetadata('originalPlayers');
  Object.defineProperty(Game.prototype, 'originalPlayers', {
    get: function () {
      return this.originalPlayers_6ak8tm$_0.getValue_lrcp0p$(this, Game$originalPlayers_metadata);
    }
  });
  var Game$isOver_metadata = new PropertyMetadata('isOver');
  Object.defineProperty(Game.prototype, 'isOver', {
    get: function () {
      return this.isOver_3nqnrf$_0.getValue_lrcp0p$(this, Game$isOver_metadata);
    }
  });
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: [RxBase]
  };
  function Move() {
    Move$Companion_getInstance();
    RxRoot.call(this);
    this.sequence_hl9azr$_0 = this.o.int_za3lpa$().provideDelegate_n5byny$(this, Move$sequence_metadata);
    this.player_q0tkjr$_0 = this.o.int_za3lpa$().provideDelegate_n5byny$(this, Move$player_metadata);
  }
  var Move$sequence_metadata = new PropertyMetadata('sequence');
  Object.defineProperty(Move.prototype, 'sequence', {
    get: function () {
      return this.sequence_hl9azr$_0.getValue_lrcp0p$(this, Move$sequence_metadata);
    }
  });
  var Move$player_metadata = new PropertyMetadata('player');
  Object.defineProperty(Move.prototype, 'player', {
    get: function () {
      return this.player_q0tkjr$_0.getValue_lrcp0p$(this, Move$player_metadata);
    }
  });
  function Move$Companion() {
    Move$Companion_instance = this;
    Move.call(this);
    this.of = wrapper([Move$Companion$of$lambda, Move$Companion$of$lambda_0, Move$Companion$of$lambda_1]);
  }
  function Move$Companion$of$lambda() {
    return new Start();
  }
  function Move$Companion$of$lambda_0() {
    return new Placement();
  }
  function Move$Companion$of$lambda_1() {
    return new Leave();
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
    interfaces: [RxRoot]
  };
  function Start() {
    Move.call(this);
  }
  Start.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Start',
    interfaces: [Move]
  };
  function Placement() {
    Move.call(this);
    this.x_by76mu$_0 = this.o.int_za3lpa$().provideDelegate_n5byny$(this, Placement$x_metadata);
    this.y_by76np$_0 = this.o.int_za3lpa$().provideDelegate_n5byny$(this, Placement$y_metadata);
  }
  var Placement$x_metadata = new PropertyMetadata('x');
  Object.defineProperty(Placement.prototype, 'x', {
    get: function () {
      return this.x_by76mu$_0.getValue_lrcp0p$(this, Placement$x_metadata);
    }
  });
  var Placement$y_metadata = new PropertyMetadata('y');
  Object.defineProperty(Placement.prototype, 'y', {
    get: function () {
      return this.y_by76np$_0.getValue_lrcp0p$(this, Placement$y_metadata);
    }
  });
  Placement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Placement',
    interfaces: [Move]
  };
  function Leave() {
    Move.call(this);
  }
  Leave.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Leave',
    interfaces: [Move]
  };
  var package$tictactoelib = _.tictactoelib || (_.tictactoelib = {});
  Object.defineProperty(package$tictactoelib, 'tictactoeLib', {
    get: function () {
      return tictactoeLib;
    }
  });
  package$tictactoelib.get_games_py8usb$ = get_games;
  package$tictactoelib.get_players_py8usb$ = get_players;
  package$tictactoelib.get_moves_9zet87$ = get_moves;
  package$tictactoelib.get_status_f98aja$ = get_status;
  GameStatus.None = GameStatus$None;
  GameStatus.Waiting = GameStatus$Waiting;
  GameStatus.Playing = GameStatus$Playing;
  Object.defineProperty(GameStatus, 'Companion', {
    get: GameStatus$Companion_getInstance
  });
  package$tictactoelib.GameStatus = GameStatus;
  package$tictactoelib.Player = Player;
  package$tictactoelib.Game = Game;
  Object.defineProperty(Move, 'Companion', {
    get: Move$Companion_getInstance
  });
  package$tictactoelib.Move = Move;
  package$tictactoelib.Start = Start;
  package$tictactoelib.Placement = Placement;
  package$tictactoelib.Leave = Leave;
  tictactoeLib = new Lib('tictactoe');
  games = coll();
  players = coll();
  moves = coll();
  status = doc(GameStatus$Companion_getInstance().of);
  Kotlin.defineModule('appsimake-tictactoelib', _);
  return _;
}(typeof this['appsimake-tictactoelib'] === 'undefined' ? {} : this['appsimake-tictactoelib'], kotlin, this['appsimake-commonshr']);

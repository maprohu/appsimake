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

define(['exports', 'kotlin', 'appsimake-commonshr', 'appsimake-firebaseshr'], function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_firebaseshr) {
  'use strict';
  var Lib = $module$appsimake_commonshr.commonlib.Lib;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var coll = $module$appsimake_commonshr.commonlib.coll_287e2$;
  var Base = $module$appsimake_firebaseshr.firebaseshr.Base;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var initFrom = $module$appsimake_firebaseshr.firebaseshr.initFrom_d5knkn$;
  var wrapper = $module$appsimake_firebaseshr.firebaseshr.wrapper_3ib333$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var BaseRoot = $module$appsimake_firebaseshr.firebaseshr.BaseRoot;
  Player.prototype = Object.create(Base.prototype);
  Player.prototype.constructor = Player;
  Game.prototype = Object.create(Base.prototype);
  Game.prototype.constructor = Game;
  Move.prototype = Object.create(BaseRoot.prototype);
  Move.prototype.constructor = Move;
  Move$Companion.prototype = Object.create(Move.prototype);
  Move$Companion.prototype.constructor = Move$Companion;
  Start.prototype = Object.create(Move.prototype);
  Start.prototype.constructor = Start;
  Placement.prototype = Object.create(Move.prototype);
  Placement.prototype.constructor = Placement;
  Leave.prototype = Object.create(Move.prototype);
  Leave.prototype.constructor = Leave;
  function tictactoe$lambda(it) {
    return new Lib(it);
  }
  var tictactoe_metadata = new PropertyMetadata('tictactoe');
  var tictactoe;
  function get_tictactoe() {
    return tictactoe.getValue_lrcp0p$(this, tictactoe_metadata);
  }
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
  function Player() {
    Base.call(this);
    this.active_ir98gi$_0 = this.o.scalar_287e2$().prop_2nq2ks$().provideDelegate_n5byny$(this, Player$active_metadata);
    this.game_u70256$_0 = this.o.scalar_287e2$().prop_2nq2ks$().provideDelegate_n5byny$(this, Player$game_metadata);
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
    interfaces: [Base]
  };
  function Game() {
    Base.call(this);
    this.players_7xo8u1$_0 = this.o.array_287e2$().prop_2nq2ks$().provideDelegate_n5byny$(this, Game$players_metadata);
    this.originalPlayers_6ak8tm$_0 = this.o.array_287e2$().prop_2nq2ks$().provideDelegate_n5byny$(this, Game$originalPlayers_metadata);
    this.isOver_3nqnrf$_0 = this.o.scalar_287e2$().prop_2nq2ks$().provideDelegate_n5byny$(this, Game$isOver_metadata);
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
    interfaces: [Base]
  };
  function Move() {
    Move$Companion_getInstance();
    BaseRoot.call(this);
    this.sequence_hl9azr$_0 = this.o.scalar_287e2$().prop_2nq2ks$().provideDelegate_n5byny$(this, Move$sequence_metadata);
    this.player_q0tkjr$_0 = this.o.scalar_287e2$().prop_2nq2ks$().provideDelegate_n5byny$(this, Move$player_metadata);
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
    this.emptyOf = wrapper([Move$Companion$emptyOf$lambda, Move$Companion$emptyOf$lambda_0, Move$Companion$emptyOf$lambda_1]);
  }
  Move$Companion.prototype.of_za3rmp$ = function (d) {
    return initFrom(this.emptyOf(d), d);
  };
  function Move$Companion$emptyOf$lambda() {
    return new Start();
  }
  function Move$Companion$emptyOf$lambda_0() {
    return new Placement();
  }
  function Move$Companion$emptyOf$lambda_1() {
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
    interfaces: [BaseRoot]
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
    this.x_by76mu$_0 = this.o.scalar_287e2$().prop_2nq2ks$().provideDelegate_n5byny$(this, Placement$x_metadata);
    this.y_by76np$_0 = this.o.scalar_287e2$().prop_2nq2ks$().provideDelegate_n5byny$(this, Placement$y_metadata);
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
  Object.defineProperty(package$tictactoelib, 'tictactoe', {
    get: get_tictactoe
  });
  package$tictactoelib.get_games_6l3wi3$ = get_games;
  package$tictactoelib.get_players_6l3wi3$ = get_players;
  package$tictactoelib.get_moves_wehbcf$ = get_moves;
  package$tictactoelib.Player = Player;
  package$tictactoelib.Game = Game;
  Object.defineProperty(Move, 'Companion', {
    get: Move$Companion_getInstance
  });
  package$tictactoelib.Move = Move;
  package$tictactoelib.Start = Start;
  package$tictactoelib.Placement = Placement;
  package$tictactoelib.Leave = Leave;
  tictactoe = named(tictactoe$lambda).provideDelegate_n5byny$(this, tictactoe_metadata);
  games = coll();
  players = coll();
  moves = coll();
  Kotlin.defineModule('appsimake-tictactoelib', _);
  return _;
});

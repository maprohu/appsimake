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

define(['exports', 'kotlin', 'appsimake-commonlib', 'appsimake-commonshr'], function (_, Kotlin, $module$appsimake_commonlib, $module$appsimake_commonshr) {
  'use strict';
  var Lib = $module$appsimake_commonlib.commonlib.Lib;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var getKClass = Kotlin.getKClass;
  var wrapper = $module$appsimake_commonshr.common.wrapper_giuhum$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Wrap = $module$appsimake_commonshr.common.Wrap;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  Move.prototype = Object.create(Wrap.prototype);
  Move.prototype.constructor = Move;
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
  var firestoreGamesPath;
  var firestorePlayersPath;
  var firestoreMovesCollectionName;
  function firestoreGameRef(gameId) {
    return firestoreGamesPath + '/' + gameId;
  }
  function firestoreMovesRef(gameId) {
    return firestoreGameRef(gameId) + '/' + firestoreMovesCollectionName;
  }
  function Move(o) {
    Move$Companion_getInstance();
    Wrap.call(this, o);
    this.sequence_hl9azr$_0 = this.dyn_287e2$();
    this.player_q0tkjr$_0 = this.dyn_287e2$();
  }
  var Move$sequence_metadata = new PropertyMetadata('sequence');
  Object.defineProperty(Move.prototype, 'sequence', {
    get: function () {
      return this.sequence_hl9azr$_0.getValue_lrcp0p$(this, Move$sequence_metadata);
    },
    set: function (sequence) {
      this.sequence_hl9azr$_0.setValue_9rddgb$(this, Move$sequence_metadata, sequence);
    }
  });
  var Move$player_metadata = new PropertyMetadata('player');
  Object.defineProperty(Move.prototype, 'player', {
    get: function () {
      return this.player_q0tkjr$_0.getValue_lrcp0p$(this, Move$player_metadata);
    },
    set: function (player) {
      this.player_q0tkjr$_0.setValue_9rddgb$(this, Move$player_metadata, player);
    }
  });
  function Move$Companion() {
    Move$Companion_instance = this;
    this.of = wrapper([getKClass(Start), getKClass(Placement), getKClass(Leave)]);
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
  function Start(o) {
    if (o === void 0)
      o = null;
    Move.call(this, o);
  }
  Start.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Start',
    interfaces: [Move]
  };
  function Placement(o) {
    if (o === void 0)
      o = null;
    Move.call(this, o);
    this.x_by76mu$_0 = this.dyn_287e2$();
    this.y_by76np$_0 = this.dyn_287e2$();
  }
  var Placement$x_metadata = new PropertyMetadata('x');
  Object.defineProperty(Placement.prototype, 'x', {
    get: function () {
      return this.x_by76mu$_0.getValue_lrcp0p$(this, Placement$x_metadata);
    },
    set: function (x) {
      this.x_by76mu$_0.setValue_9rddgb$(this, Placement$x_metadata, x);
    }
  });
  var Placement$y_metadata = new PropertyMetadata('y');
  Object.defineProperty(Placement.prototype, 'y', {
    get: function () {
      return this.y_by76np$_0.getValue_lrcp0p$(this, Placement$y_metadata);
    },
    set: function (y) {
      this.y_by76np$_0.setValue_9rddgb$(this, Placement$y_metadata, y);
    }
  });
  Placement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Placement',
    interfaces: [Move]
  };
  function Leave(o) {
    if (o === void 0)
      o = null;
    Move.call(this, o);
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
  Object.defineProperty(package$tictactoelib, 'firestoreGamesPath', {
    get: function () {
      return firestoreGamesPath;
    }
  });
  Object.defineProperty(package$tictactoelib, 'firestorePlayersPath', {
    get: function () {
      return firestorePlayersPath;
    }
  });
  Object.defineProperty(package$tictactoelib, 'firestoreMovesCollectionName', {
    get: function () {
      return firestoreMovesCollectionName;
    }
  });
  package$tictactoelib.firestoreGameRef_61zpoe$ = firestoreGameRef;
  package$tictactoelib.firestoreMovesRef_61zpoe$ = firestoreMovesRef;
  Object.defineProperty(Move, 'Companion', {
    get: Move$Companion_getInstance
  });
  package$tictactoelib.Move = Move;
  package$tictactoelib.Start = Start;
  package$tictactoelib.Placement = Placement;
  package$tictactoelib.Leave = Leave;
  tictactoe = named(tictactoe$lambda).provideDelegate_d6mtq7$(this, tictactoe_metadata);
  firestoreGamesPath = get_tictactoe().firestoreBasePath + '/games';
  firestorePlayersPath = get_tictactoe().firestoreBasePath + '/players';
  firestoreMovesCollectionName = 'moves';
  Kotlin.defineModule('appsimake-tictactoelib', _);
  return _;
});

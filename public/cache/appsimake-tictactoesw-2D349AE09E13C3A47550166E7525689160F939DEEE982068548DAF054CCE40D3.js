if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-tictactoesw'.");
}
if (typeof this['appsimake-tictactoelib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'appsimake-tictactoelib' was not found. Please, check whether 'appsimake-tictactoelib' is loaded prior to 'appsimake-tictactoesw'.");
}
if (typeof this['appsimake-fbmessagingsw'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'appsimake-fbmessagingsw' was not found. Please, check whether 'appsimake-fbmessagingsw' is loaded prior to 'appsimake-tictactoesw'.");
}
this['appsimake-tictactoesw'] = function (_, Kotlin, $module$appsimake_tictactoelib, $module$appsimake_fbmessagingsw) {
  'use strict';
  var Move = $module$appsimake_tictactoelib.tictactoelib.Move;
  var throwCCE = Kotlin.throwCCE;
  var Start = $module$appsimake_tictactoelib.tictactoelib.Start;
  var Leave = $module$appsimake_tictactoelib.tictactoelib.Leave;
  var Placement = $module$appsimake_tictactoelib.tictactoelib.Placement;
  var fbmessagingsw = $module$appsimake_fbmessagingsw.fbmessagingsw;
  function main$lambda(it) {
    var tmp$, tmp$_0;
    var move = Move.Companion.of(JSON.parse(typeof (tmp$ = it.data.json) === 'string' ? tmp$ : throwCCE()));
    if (Kotlin.isType(move, Start))
      tmp$_0 = 'game started';
    else if (Kotlin.isType(move, Leave))
      tmp$_0 = 'opponent left';
    else if (Kotlin.isType(move, Placement))
      tmp$_0 = 'opponent moved';
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    var msg = tmp$_0;
    return 'TicTacToe: ' + msg;
  }
  function main(args) {
    fbmessagingsw.messageTitle = main$lambda;
  }
  var package$tictactoesw = _.tictactoesw || (_.tictactoesw = {});
  package$tictactoesw.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('appsimake-tictactoesw', _);
  return _;
}(typeof this['appsimake-tictactoesw'] === 'undefined' ? {} : this['appsimake-tictactoesw'], kotlin, this['appsimake-tictactoelib'], this['appsimake-fbmessagingsw']);

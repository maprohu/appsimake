if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'index'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'index'.");
}
if (typeof bootstrap === 'undefined') {
  throw new Error("Error loading module 'index'. Its dependency 'bootstrap' was not found. Please, check whether 'bootstrap' is loaded prior to 'index'.");
}
var index = function (_, Kotlin, $module$bootstrap) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var padding2 = $module$bootstrap.bootstrap.padding2_ejp6nk$;
  var Unit = Kotlin.kotlin.Unit;
  var listAction = $module$bootstrap.bootstrap.listAction_6t02fy$;
  var listGroup = $module$bootstrap.bootstrap.listGroup_t7sdcm$;
  function main$lambda$lambda$lambda($receiver) {
    $receiver.href = 'ideas.html';
    $receiver.innerText = 'Ideas';
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    listAction($receiver, main$lambda$lambda$lambda);
    return Unit;
  }
  function main(args) {
    var $receiver = ensureNotNull(document.body);
    padding2($receiver);
    listGroup($receiver, main$lambda$lambda);
  }
  var package$index = _.index || (_.index = {});
  package$index.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('index', _);
  return _;
}(typeof index === 'undefined' ? {} : index, kotlin, bootstrap);

//# sourceMappingURL=index.js.map

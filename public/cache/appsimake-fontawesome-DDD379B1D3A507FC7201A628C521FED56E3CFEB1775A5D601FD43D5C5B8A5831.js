if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-fontawesome'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-fontawesome'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-fontawesome'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-fontawesome'.");
}
this['appsimake-fontawesome'] = function (_, Kotlin, $module$appsimake_domx) {
  'use strict';
  var get_classes = $module$appsimake_domx.domx.get_classes_ejp6nk$;
  var styles = $module$appsimake_domx.styles;
  var Unit = Kotlin.kotlin.Unit;
  var span = $module$appsimake_domx.domx.span_c7xqcp$;
  function fas($receiver, name) {
    get_classes($receiver).plusAssign_61zpoe$('fas fa-' + name);
  }
  function fa$lambda(closure$name) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_61zpoe$('fas fa-' + closure$name + ' ' + styles.lineHeightInherit);
      return Unit;
    };
  }
  function fa($receiver, name) {
    return span($receiver, fa$lambda(name));
  }
  function chevronRight($receiver) {
    return fa($receiver, 'chevron-right');
  }
  function chevronLeft($receiver) {
    return fa($receiver, 'chevron-left');
  }
  function chevronDown($receiver) {
    return fa($receiver, 'chevron-down');
  }
  function spinner($receiver) {
    return fa($receiver, 'spinner fa-spin');
  }
  var package$fontawesome = _.fontawesome || (_.fontawesome = {});
  package$fontawesome.fas_46n0ku$ = fas;
  package$fontawesome.fa_uy78um$ = fa;
  package$fontawesome.chevronRight_asww5s$ = chevronRight;
  package$fontawesome.chevronLeft_asww5s$ = chevronLeft;
  package$fontawesome.chevronDown_asww5s$ = chevronDown;
  package$fontawesome.spinner_asww5s$ = spinner;
  Kotlin.defineModule('appsimake-fontawesome', _);
  return _;
}(typeof this['appsimake-fontawesome'] === 'undefined' ? {} : this['appsimake-fontawesome'], kotlin, this['appsimake-domx']);

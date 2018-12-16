if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'fontawesome'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'fontawesome'.");
}
if (typeof domx === 'undefined') {
  throw new Error("Error loading module 'fontawesome'. Its dependency 'domx' was not found. Please, check whether 'domx' is loaded prior to 'fontawesome'.");
}
var fontawesome = function (_, Kotlin, $module$domx) {
  'use strict';
  var get_classes = $module$domx.domx.get_classes_ejp6nk$;
  var styles = $module$domx.styles;
  var Unit = Kotlin.kotlin.Unit;
  var span = $module$domx.domx.span_c7xqcp$;
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
  function spinner($receiver) {
    return fa($receiver, 'spinner fa-spin');
  }
  var package$fontawesome = _.fontawesome || (_.fontawesome = {});
  package$fontawesome.fa_uy78um$ = fa;
  package$fontawesome.chevronRight_asww5s$ = chevronRight;
  package$fontawesome.chevronLeft_asww5s$ = chevronLeft;
  package$fontawesome.spinner_asww5s$ = spinner;
  Kotlin.defineModule('fontawesome', _);
  return _;
}(typeof fontawesome === 'undefined' ? {} : fontawesome, kotlin, domx);

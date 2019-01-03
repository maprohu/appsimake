if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonlib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonlib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonlib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-commonlib'.");
}
this['appsimake-commonlib'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Lib(name) {
    this.name = name;
    this.firestoreBasePath = 'apps/' + this.name;
    this.firestoreSingletonsPath = this.firestoreBasePath + '/singletons';
  }
  function Lib$function$lambda(this$Lib) {
    return function (it) {
      return new Function(this$Lib, it);
    };
  }
  Lib.prototype.function_q3lmfv$ = function () {
    return named(Lib$function$lambda(this));
  };
  Lib.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lib',
    interfaces: []
  };
  function Function(lib, name) {
    this.lib = lib;
    this.name = name;
    this.qualifiedName = this.lib.name + '_' + this.name;
  }
  Function.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Function',
    interfaces: []
  };
  var package$commonlib = _.commonlib || (_.commonlib = {});
  package$commonlib.Lib = Lib;
  package$commonlib.Function = Function;
  Kotlin.defineModule('appsimake-commonlib', _);
  return _;
}(typeof this['appsimake-commonlib'] === 'undefined' ? {} : this['appsimake-commonlib'], kotlin, this['appsimake-commonshr']);

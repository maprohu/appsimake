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
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var RxBase = $module$appsimake_commonshr.commonshr.properties.RxBase;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var MetaDoc = $module$appsimake_commonshr.commonshr.MetaDoc;
  var Lib = $module$appsimake_commonshr.commonshr.Lib;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var AdminDoc = $module$appsimake_commonshr.commonshr.AdminDoc;
  var doc = $module$appsimake_commonshr.commonshr.doc_287e2$;
  var coll = $module$appsimake_commonshr.commonshr.coll_287e2$;
  HtmlPageBase.prototype = Object.create(RxBase.prototype);
  HtmlPageBase.prototype.constructor = HtmlPageBase;
  HtmlPage.prototype = Object.create(HtmlPageBase.prototype);
  HtmlPage.prototype.constructor = HtmlPage;
  TokenDeveloperClaims.prototype = Object.create(RxBase.prototype);
  TokenDeveloperClaims.prototype.constructor = TokenDeveloperClaims;
  function HtmlPageBase() {
    RxBase.call(this);
    this.html_p32msg$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, HtmlPageBase$html_metadata);
  }
  var HtmlPageBase$html_metadata = new PropertyMetadata('html');
  Object.defineProperty(HtmlPageBase.prototype, 'html', {
    get: function () {
      return this.html_p32msg$_0.getValue_lrcp0p$(this, HtmlPageBase$html_metadata);
    }
  });
  HtmlPageBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlPageBase',
    interfaces: [MetaDoc, RxBase]
  };
  function HtmlPage() {
    HtmlPageBase.call(this);
  }
  HtmlPage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlPage',
    interfaces: [HtmlPageBase]
  };
  function shared$lambda(it) {
    return new Lib(it);
  }
  var shared_metadata = new PropertyMetadata('shared');
  var shared;
  function get_shared() {
    return shared.getValue_lrcp0p$(this, shared_metadata);
  }
  function AdminUsersDoc() {
  }
  AdminUsersDoc.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AdminUsersDoc',
    interfaces: [AdminDoc]
  };
  function TokenDeveloperClaims() {
    RxBase.call(this);
    this.adminRight_jf0qlt$_0 = this.o.prop_z4bjo6$(false).provideDelegate_n5byny$(this, TokenDeveloperClaims$adminRight_metadata);
    this.musicRight_98wbz9$_0 = this.o.prop_z4bjo6$(false).provideDelegate_n5byny$(this, TokenDeveloperClaims$musicRight_metadata);
  }
  var TokenDeveloperClaims$adminRight_metadata = new PropertyMetadata('adminRight');
  Object.defineProperty(TokenDeveloperClaims.prototype, 'adminRight', {
    get: function () {
      return this.adminRight_jf0qlt$_0.getValue_lrcp0p$(this, TokenDeveloperClaims$adminRight_metadata);
    }
  });
  var TokenDeveloperClaims$musicRight_metadata = new PropertyMetadata('musicRight');
  Object.defineProperty(TokenDeveloperClaims.prototype, 'musicRight', {
    get: function () {
      return this.musicRight_98wbz9$_0.getValue_lrcp0p$(this, TokenDeveloperClaims$musicRight_metadata);
    }
  });
  TokenDeveloperClaims.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TokenDeveloperClaims',
    interfaces: [RxBase]
  };
  var users;
  var users_metadata = new PropertyMetadata('users');
  function get_users($receiver) {
    return users.getValue_lrcp0p$($receiver, users_metadata);
  }
  var tokens;
  var tokens_metadata = new PropertyMetadata('tokens');
  function get_tokens($receiver) {
    return tokens.getValue_lrcp0p$($receiver, tokens_metadata);
  }
  var CustomSignInProvider;
  var customToken_metadata = new PropertyMetadata('customToken');
  var customToken;
  function get_customToken() {
    return customToken.getValue_lrcp0p$(this, customToken_metadata);
  }
  var package$commonlib = _.commonlib || (_.commonlib = {});
  package$commonlib.HtmlPageBase = HtmlPageBase;
  package$commonlib.HtmlPage = HtmlPage;
  var package$commonlib_0 = package$commonlib.commonlib || (package$commonlib.commonlib = {});
  Object.defineProperty(package$commonlib_0, 'shared', {
    get: get_shared
  });
  package$commonlib_0.AdminUsersDoc = AdminUsersDoc;
  package$commonlib_0.TokenDeveloperClaims = TokenDeveloperClaims;
  package$commonlib_0.get_users_g4qqrv$ = get_users;
  package$commonlib_0.get_tokens_b1xqfl$ = get_tokens;
  Object.defineProperty(package$commonlib_0, 'CustomSignInProvider', {
    get: function () {
      return CustomSignInProvider;
    }
  });
  Object.defineProperty(package$commonlib_0, 'customToken', {
    get: get_customToken
  });
  shared = named(shared$lambda).provideDelegate_n5byny$(this, shared_metadata);
  users = doc();
  tokens = coll();
  CustomSignInProvider = 'custom';
  customToken = get_shared().function_q3lmfv$().provideDelegate_n5byny$(this, customToken_metadata);
  Kotlin.defineModule('appsimake-commonlib', _);
  return _;
});

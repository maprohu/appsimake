if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'chat'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'chat'.");
}
if (typeof pullanappfb === 'undefined') {
  throw new Error("Error loading module 'chat'. Its dependency 'pullanappfb' was not found. Please, check whether 'pullanappfb' is loaded prior to 'chat'.");
}
if (typeof firebase === 'undefined') {
  throw new Error("Error loading module 'chat'. Its dependency 'firebase' was not found. Please, check whether 'firebase' is loaded prior to 'chat'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'chat'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'chat'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'chat'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'chat'.");
}
var chat = function (_, Kotlin, $module$pullanappfb, $module$firebase, $module$kotlinx_html_js, $module$common) {
  'use strict';
  var pullanappfb = $module$pullanappfb.pullanappfb;
  var firestore = $module$firebase.firebase.app.firestore_c7ogsi$;
  var withDefaultSettings = $module$firebase.firebase.firestore.withDefaultSettings_gwf93m$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var Unit = Kotlin.kotlin.Unit;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var Login = $module$firebase.firebaseui.Login;
  var removeFromParent = $module$common.common.removeFromParent_asww5s$;
  var b = $module$kotlinx_html_js.kotlinx.html.js.b_x0nqqg$;
  var span = $module$kotlinx_html_js.kotlinx.html.js.span_x24v7w$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input = $module$kotlinx_html_js.kotlinx.html.js.input_x8a5sv$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var button = $module$kotlinx_html_js.kotlinx.html.js.button_yqfwmz$;
  var set_onSubmitFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onSubmitFunction_pszlq2$;
  var form = $module$kotlinx_html_js.kotlinx.html.js.form_cxki7s$;
  var styles = $module$common.styles;
  var dl = $module$kotlinx_html_js.kotlinx.html.js.dl_4s12uu$;
  var equals = Kotlin.equals;
  var dt = $module$kotlinx_html_js.kotlinx.html.js.dt_iewpf2$;
  var dd = $module$kotlinx_html_js.kotlinx.html.js.dd_8uujpe$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var obj = $module$common.common.obj_7qq44f$;
  var obj_0 = $module$common.common.obj_287e2$;
  var Var = $module$common.rx.Var;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var db;
  var baseRef;
  var publicCollection;
  function root$lambda() {
    var $receiver = ensureNotNull(document.body);
    var tmp$;
    tmp$ = listOf([$receiver, ensureNotNull($receiver.parentElement)]).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      addClass(element, ['w-100 h-100']);
    }
    return $receiver;
  }
  var root;
  function get_root() {
    return root.value;
  }
  function main$lambda(closure$loginDiv) {
    return function (it) {
      if (it == null) {
        get_root().appendChild(closure$loginDiv);
        (new Login()).loginUi_2rdptt$(closure$loginDiv);
      }
       else {
        removeFromParent(closure$loginDiv);
        (new Chatting(it)).start();
      }
      return Unit;
    };
  }
  function main(args) {
    var loginDiv = div(get_create(document));
    pullanappfb.app.auth().onAuthStateChanged(main$lambda(loginDiv));
  }
  function Chatting(user) {
    this.user = user;
    this.publicDoc = publicCollection.doc(this.user.uid);
    this.alias = new Var('<unknown>');
    this.lastMessage = baseRef.collection('messages').doc('last');
  }
  function Chatting$start$lambda(this$Chatting) {
    return function (it) {
      if (it.exists) {
        this$Chatting.alias.now = it.data().alias;
      }
       else {
        this$Chatting.setAlias_0(this$Chatting.user.uid);
      }
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda$lambda$lambda$lambda(closure$s) {
    return function (it) {
      closure$s.innerText = it;
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda$lambda(this$, this$Chatting) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Your alias: ');
      var $receiver_0 = b(this$);
      this$Chatting.alias.forEach_qlkmfe$(Chatting$start$lambda$lambda$lambda$lambda$lambda($receiver_0));
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Change alias');
    return Unit;
  }
  function Chatting$start$lambda$lambda$lambda$lambda_0(closure$aliasInput, this$Chatting) {
    return function (it) {
      it.preventDefault();
      this$Chatting.setAlias_0(closure$aliasInput.value);
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda$lambda_0(this$, this$Chatting) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = InputType.text;
      var aliasInput = input(this$, tmp$, void 0, void 0, void 0, 'flex-grow-1 form-control');
      tmp$_0 = ButtonType.submit;
      button(this$, void 0, void 0, void 0, tmp$_0, 'btn', Chatting$start$lambda$lambda$lambda$lambda);
      set_onSubmitFunction($receiver, Chatting$start$lambda$lambda$lambda$lambda_0(aliasInput, this$Chatting));
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function Chatting$start$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function Chatting$start$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$name) {
    return function (it) {
      if (it.exists) {
        closure$name.innerText = it.data().alias;
      }
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda$lambda$lambda$lambda_0(closure$data, this$Chatting, this$) {
    return function ($receiver) {
      if (equals(closure$data.uid, this$Chatting.user.uid)) {
        $receiver.unaryPlus_pdl1vz$('You said: ');
      }
       else {
        var name = span(this$, void 0, Chatting$start$lambda$lambda$lambda$lambda$lambda$lambda);
        publicCollection.doc(closure$data.uid).onSnapshot(Chatting$start$lambda$lambda$lambda$lambda$lambda$lambda_0(name));
        $receiver.unaryPlus_pdl1vz$(' said:');
      }
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda$lambda$lambda$lambda_1(closure$data) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$data.message);
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda$lambda$lambda_1(closure$data, this$Chatting) {
    return function ($receiver) {
      dt($receiver, void 0, Chatting$start$lambda$lambda$lambda$lambda$lambda_0(closure$data, this$Chatting, $receiver));
      dd($receiver, void 0, Chatting$start$lambda$lambda$lambda$lambda$lambda_1(closure$data));
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda$lambda_2(closure$first, closure$list, this$Chatting) {
    return function (msg) {
      if (closure$first.v) {
        closure$first.v = false;
      }
       else if (msg.exists) {
        var data = msg.data();
        append(closure$list, Chatting$start$lambda$lambda$lambda$lambda_1(data, this$Chatting));
        closure$list.scrollTop = closure$list.scrollHeight - closure$list.clientHeight | 0;
      }
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda$lambda$lambda$lambda_2(closure$e) {
    return function () {
      closure$e.focus();
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Send');
    return Unit;
  }
  function Chatting$start$lambda$lambda$lambda$lambda$lambda_3(this$Chatting, closure$messageInput) {
    return function ($receiver) {
      $receiver.uid = this$Chatting.user.uid;
      $receiver.message = closure$messageInput.value;
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda$lambda$lambda_3(this$Chatting, closure$messageInput) {
    return function (it) {
      it.preventDefault();
      this$Chatting.lastMessage.set(obj(Chatting$start$lambda$lambda$lambda$lambda$lambda_3(this$Chatting, closure$messageInput)));
      closure$messageInput.value = '';
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda$lambda_3(this$, this$Chatting) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = InputType.text;
      var $receiver_0 = input(this$, tmp$, void 0, void 0, void 0, 'flex-grow-1 form-control');
      window.setTimeout(Chatting$start$lambda$lambda$lambda$lambda$lambda_2($receiver_0), 0);
      var messageInput = $receiver_0;
      tmp$_0 = ButtonType.submit;
      button(this$, void 0, void 0, void 0, tmp$_0, 'btn', Chatting$start$lambda$lambda$lambda$lambda_2);
      set_onSubmitFunction($receiver, Chatting$start$lambda$lambda$lambda$lambda_3(this$Chatting, messageInput));
      return Unit;
    };
  }
  function Chatting$start$lambda$lambda(this$, this$Chatting) {
    return function ($receiver) {
      span(this$, 'flex-grow-0 flex-shrink-0', Chatting$start$lambda$lambda$lambda(this$, this$Chatting));
      form(this$, void 0, void 0, void 0, 'd-flex flex-row flex-grow-0 flex-shrink-0', Chatting$start$lambda$lambda$lambda_0(this$, this$Chatting));
      var list = dl(this$, 'flex-grow-1 ' + styles.scrollVertical + ' my-2 border', Chatting$start$lambda$lambda$lambda_1);
      var first = {v: true};
      this$Chatting.lastMessage.onSnapshot(Chatting$start$lambda$lambda$lambda_2(first, list, this$Chatting));
      form(this$, void 0, void 0, void 0, 'd-flex flex-row flex-grow-0 flex-shrink-0', Chatting$start$lambda$lambda$lambda_3(this$, this$Chatting));
      return Unit;
    };
  }
  function Chatting$start$lambda_0(this$Chatting) {
    return function ($receiver) {
      div($receiver, 'd-flex flex-column w-100 h-100 p-2', Chatting$start$lambda$lambda($receiver, this$Chatting));
      return Unit;
    };
  }
  Chatting.prototype.start = function () {
    this.publicDoc.onSnapshot(Chatting$start$lambda(this));
    append(get_root(), Chatting$start$lambda_0(this));
  };
  Chatting.prototype.setAlias_0 = function (newAlias) {
    var tmp$ = this.publicDoc;
    var $receiver = obj_0();
    $receiver.alias = newAlias;
    tmp$.set($receiver);
  };
  Chatting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chatting',
    interfaces: []
  };
  var package$chat = _.chat || (_.chat = {});
  Object.defineProperty(package$chat, 'db', {
    get: function () {
      return db;
    }
  });
  Object.defineProperty(package$chat, 'baseRef', {
    get: function () {
      return baseRef;
    }
  });
  Object.defineProperty(package$chat, 'publicCollection', {
    get: function () {
      return publicCollection;
    }
  });
  Object.defineProperty(package$chat, 'root', {
    get: get_root
  });
  package$chat.main_kand9s$ = main;
  package$chat.Chatting = Chatting;
  db = withDefaultSettings(firestore(pullanappfb.app));
  baseRef = db.collection('apps').doc('chat');
  publicCollection = baseRef.collection('public');
  root = lazy(root$lambda);
  main([]);
  Kotlin.defineModule('chat', _);
  return _;
}(typeof chat === 'undefined' ? {} : chat, kotlin, pullanappfb, firebase, this['kotlinx-html-js'], common);

//# sourceMappingURL=chat.js.map

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-common'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-common'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-common'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-common'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-common'.");
}
this['appsimake-common'] = function (_, Kotlin, $module$appsimake_commonshr, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var CsKillsApi = $module$appsimake_commonshr.commonshr.CsKillsApi;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var replace = Kotlin.kotlin.text.replace_r2fvfm$;
  var Listeners = $module$appsimake_commonshr.common.Listeners;
  var Unit = Kotlin.kotlin.Unit;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var once = $module$appsimake_commonshr.commonshr.once_yo2cq0$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var throwCCE = Kotlin.throwCCE;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var killable = $module$appsimake_commonshr.killable;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  StateMachine$AlreadyShutdown.prototype = Object.create(State.prototype);
  StateMachine$AlreadyShutdown.prototype.constructor = StateMachine$AlreadyShutdown;
  Schema.prototype = Object.create(Enum.prototype);
  Schema.prototype.constructor = Schema;
  function Annotation() {
    return {};
  }
  function CsKillsApiCommon() {
  }
  CsKillsApiCommon.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsKillsApiCommon',
    interfaces: [CsKillsApi]
  };
  function Coroutine$hash($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$hash.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$hash.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$hash.prototype.constructor = Coroutine$hash;
  Coroutine$hash.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(window.crypto.subtle.digest('SHA-256', this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var hashBuffer = this.result_0;
            var uint8 = new Uint8Array(hashBuffer);
            return get_escape(String.fromCharCode.apply(null, uint8));
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function hash($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$hash($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function get_escape($receiver) {
    return replace(window.btoa($receiver), 47, 45);
  }
  function onResize$lambda$lambda(closure$listeners) {
    return function (it) {
      closure$listeners.fire();
      return Unit;
    };
  }
  function onResize$lambda() {
    var listeners = new Listeners();
    window.onresize = onResize$lambda$lambda(listeners);
    return listeners;
  }
  var onResize;
  function get_onResize() {
    return onResize.value;
  }
  function resizeEvent($receiver, fn) {
    $receiver.window.setTimeout(fn, 0);
    fn();
    return get_onResize().add_o14v8n$(fn);
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function insertAt($receiver, position, element) {
    var length = $receiver.children.length;
    if (!(position <= length)) {
      var message = 'Requested position: ' + position + ' is more than length: ' + length;
      throw IllegalArgumentException_init(message.toString());
    }
    if (length === position) {
      $receiver.appendChild(element);
    }
     else {
      $receiver.insertBefore(element, $receiver.children.item(position));
    }
  }
  function insertAt_0($receiver, position, element) {
    var length = $receiver.childNodes.length;
    if (!(position <= length)) {
      var message = 'Requested position: ' + position + ' is more than length: ' + length;
      throw IllegalArgumentException_init(message.toString());
    }
    if (length === position) {
      $receiver.appendChild(element);
    }
     else {
      $receiver.insertBefore(element, $receiver.childNodes.item(position));
    }
  }
  function removeAt($receiver, position) {
    return $receiver.removeChild(ensureNotNull($receiver.children.item(position)));
  }
  function removeAt_0($receiver, position) {
    return $receiver.removeChild(ensureNotNull($receiver.childNodes.item(position)));
  }
  function replaceAt($receiver, position, element) {
    $receiver.replaceChild(ensureNotNull($receiver.children.item(position)), element);
  }
  function removeFromParent($receiver) {
    var tmp$;
    (tmp$ = $receiver.parentElement) != null ? tmp$.removeChild($receiver) : null;
  }
  function replaceWith($receiver, node) {
    var $receiver_0 = ensureNotNull($receiver.parentNode);
    $receiver_0.insertBefore(node, $receiver);
    $receiver_0.removeChild($receiver);
  }
  function attachEnabler$lambda(this$attachEnabler) {
    return function ($receiver, en) {
      if (en) {
        removeClass(this$attachEnabler, ['disabled']);
        this$attachEnabler.style.cursor = 'pointer';
      }
       else {
        addClass(this$attachEnabler, ['disabled']);
        this$attachEnabler.style.cursor = 'default';
      }
      return Unit;
    };
  }
  function attachEnabler($receiver, ks, enabled) {
    enabled.forEach_aaomyj$(ks, attachEnabler$lambda($receiver));
  }
  function linkedIterable$ObjectLiteral(closure$next, closure$first) {
    this.closure$next = closure$next;
    this.closure$first = closure$first;
  }
  function linkedIterable$ObjectLiteral$iterator$ObjectLiteral(closure$next, closure$first) {
    this.closure$next = closure$next;
    this.current = closure$first;
  }
  linkedIterable$ObjectLiteral$iterator$ObjectLiteral.prototype.next = function () {
    var tmp = this.current;
    if (tmp == null) {
      throw NoSuchElementException_init();
    }
     else {
      this.current = this.closure$next(tmp);
      return tmp;
    }
  };
  linkedIterable$ObjectLiteral$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.current != null;
  };
  linkedIterable$ObjectLiteral$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  linkedIterable$ObjectLiteral.prototype.iterator = function () {
    return new linkedIterable$ObjectLiteral$iterator$ObjectLiteral(this.closure$next, this.closure$first);
  };
  linkedIterable$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterable]
  };
  function linkedIterable(first, next) {
    return new linkedIterable$ObjectLiteral(next, first);
  }
  function listen$lambda(this$listen, closure$type, closure$fn) {
    return function () {
      this$listen.removeEventListener(closure$type, closure$fn);
      return Unit;
    };
  }
  function listen($receiver, type, fn) {
    $receiver.addEventListener(type, fn);
    return once(listen$lambda($receiver, type, fn));
  }
  function listenAs$lambda(closure$fn) {
    return function (e) {
      closure$fn(e);
      return Unit;
    };
  }
  function listenAs($receiver, type, fn) {
    return listen($receiver, type, listenAs$lambda(fn));
  }
  function onInterval$lambda(closure$handle, this$onInterval) {
    return function () {
      this$onInterval.clearInterval(closure$handle);
      return Unit;
    };
  }
  function onInterval($receiver, timeout, fn) {
    var handle = $receiver.setInterval(fn, timeout);
    return once(onInterval$lambda(handle, $receiver));
  }
  function UNINITIALIZED() {
    UNINITIALIZED_instance = this;
  }
  UNINITIALIZED.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UNINITIALIZED',
    interfaces: []
  };
  var UNINITIALIZED_instance = null;
  function UNINITIALIZED_getInstance() {
    if (UNINITIALIZED_instance === null) {
      new UNINITIALIZED();
    }
    return UNINITIALIZED_instance;
  }
  function LazyDelegate(fn) {
    this.fn_0 = fn;
    this.value_0 = UNINITIALIZED_getInstance();
  }
  LazyDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    if (this.value_0 === UNINITIALIZED_getInstance()) {
      this.value_0 = this.fn_0(thisRef, property);
    }
    return this.value_0;
  };
  LazyDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LazyDelegate',
    interfaces: []
  };
  function lazyNamed$lambda(closure$fn) {
    return function (f, p) {
      return closure$fn(p.callableName);
    };
  }
  function lazyNamed(fn) {
    return new LazyDelegate(lazyNamed$lambda(fn));
  }
  function get_connection($receiver) {
    return $receiver.connection;
  }
  var get_bluetooth = defineInlineFunction('appsimake-common.common.get_bluetooth_83l5d8$', function ($receiver) {
    return 'bluetooth';
  });
  var get_cellular = defineInlineFunction('appsimake-common.common.get_cellular_83l5d8$', function ($receiver) {
    return 'cellular';
  });
  var get_ethernet = defineInlineFunction('appsimake-common.common.get_ethernet_83l5d8$', function ($receiver) {
    return 'ethernet';
  });
  var get_none = defineInlineFunction('appsimake-common.common.get_none_83l5d8$', function ($receiver) {
    return 'none';
  });
  var get_wifi = defineInlineFunction('appsimake-common.common.get_wifi_83l5d8$', function ($receiver) {
    return 'wifi';
  });
  var get_wimax = defineInlineFunction('appsimake-common.common.get_wimax_83l5d8$', function ($receiver) {
    return 'wimax';
  });
  var get_other = defineInlineFunction('appsimake-common.common.get_other_83l5d8$', function ($receiver) {
    return 'other';
  });
  var get_unknown = defineInlineFunction('appsimake-common.common.get_unknown_83l5d8$', function ($receiver) {
    return 'unknown';
  });
  var get_slow2g = defineInlineFunction('appsimake-common.common.get_slow2g_z7fr9$', function ($receiver) {
    return 'slow-2g';
  });
  var get_g2 = defineInlineFunction('appsimake-common.common.get_g2_z7fr9$', function ($receiver) {
    return '2g';
  });
  var get_g3 = defineInlineFunction('appsimake-common.common.get_g3_z7fr9$', function ($receiver) {
    return '3g';
  });
  var get_g4 = defineInlineFunction('appsimake-common.common.get_g4_z7fr9$', function ($receiver) {
    return '4g';
  });
  function requestFileSystem$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function requestFileSystem$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function requestFileSystem($receiver, type, size, continuation) {
    var cd = CompletableDeferred();
    $receiver.webkitRequestFileSystem(type, size, requestFileSystem$lambda(cd), requestFileSystem$lambda_0(cd));
    return cd.await(continuation);
  }
  function Coroutine$requestPersistentFileSystem($receiver_0, size_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$size = size_0;
  }
  Coroutine$requestPersistentFileSystem.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$requestPersistentFileSystem.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$requestPersistentFileSystem.prototype.constructor = Coroutine$requestPersistentFileSystem;
  Coroutine$requestPersistentFileSystem.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = requestQuota(this.local$$receiver.navigator.webkitPersistentStorage, this.local$size, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var granted = this.result_0;
            this.state_0 = 3;
            this.result_0 = requestFileSystem(this.local$$receiver, this.local$$receiver.PERSISTENT, granted, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function requestPersistentFileSystem($receiver_0, size_0, continuation_0, suspended) {
    var instance = new Coroutine$requestPersistentFileSystem($receiver_0, size_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var get_withQuota = defineInlineFunction('appsimake-common.common.get_withQuota_nz12v2$', function ($receiver) {
    return $receiver;
  });
  var get_withQuota_0 = defineInlineFunction('appsimake-common.common.get_withQuota_yi0el1$', function ($receiver) {
    return $receiver;
  });
  function requestQuota$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function requestQuota$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function requestQuota($receiver, bytes, continuation) {
    var cd = CompletableDeferred();
    $receiver.requestQuota(bytes, requestQuota$lambda(cd), requestQuota$lambda_0(cd));
    return cd.await(continuation);
  }
  function UsageAndQuota(usage, quota) {
    this.usage = usage;
    this.quota = quota;
  }
  UsageAndQuota.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UsageAndQuota',
    interfaces: []
  };
  UsageAndQuota.prototype.component1 = function () {
    return this.usage;
  };
  UsageAndQuota.prototype.component2 = function () {
    return this.quota;
  };
  UsageAndQuota.prototype.copy_z8e4lc$ = function (usage, quota) {
    return new UsageAndQuota(usage === void 0 ? this.usage : usage, quota === void 0 ? this.quota : quota);
  };
  UsageAndQuota.prototype.toString = function () {
    return 'UsageAndQuota(usage=' + Kotlin.toString(this.usage) + (', quota=' + Kotlin.toString(this.quota)) + ')';
  };
  UsageAndQuota.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.usage) | 0;
    result = result * 31 + Kotlin.hashCode(this.quota) | 0;
    return result;
  };
  UsageAndQuota.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.usage, other.usage) && Kotlin.equals(this.quota, other.quota)))));
  };
  function queryUsageAndQuota$lambda(closure$cd) {
    return function (usage, quota) {
      closure$cd.complete_11rb$(new UsageAndQuota(usage, quota));
      return Unit;
    };
  }
  function queryUsageAndQuota$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function queryUsageAndQuota($receiver, continuation) {
    var cd = CompletableDeferred();
    $receiver.queryUsageAndQuota(queryUsageAndQuota$lambda(cd), queryUsageAndQuota$lambda_0(cd));
    return cd.await(continuation);
  }
  function Coroutine$readAllEntries$lambda(closure$dir_0, closure$ch_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$dir = closure$dir_0;
    this.local$closure$ch = closure$ch_0;
    this.local$reader = void 0;
    this.local$a = void 0;
  }
  Coroutine$readAllEntries$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAllEntries$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAllEntries$lambda.prototype.constructor = Coroutine$readAllEntries$lambda;
  Coroutine$readAllEntries$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$reader = this.local$closure$dir.createReader();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = readEntries(this.local$reader, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$a = this.result_0;
            if (this.local$a.length === 0) {
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$closure$ch.send_11rb$(this.local$a, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            return this.local$closure$ch.close_dbl4no$();
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readAllEntries$lambda(closure$dir_0, closure$ch_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$readAllEntries$lambda(closure$dir_0, closure$ch_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function readAllEntries($receiver, dir) {
    var ch = Channel();
    launch($receiver, void 0, void 0, readAllEntries$lambda(dir, ch));
    return ch;
  }
  function readEntries$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function readEntries$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function readEntries($receiver, continuation) {
    var cd = CompletableDeferred();
    $receiver.readEntries(readEntries$lambda(cd), readEntries$lambda_0(cd));
    return cd.await(continuation);
  }
  function getDirectory$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function getDirectory$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function getDirectory($receiver, path, options, continuation) {
    if (options === void 0) {
      var $receiver_0 = {};
      $receiver_0.create = true;
      options = $receiver_0;
    }
    var cd = CompletableDeferred();
    $receiver.getDirectory(path, options, getDirectory$lambda(cd), getDirectory$lambda_0(cd));
    return cd.await(continuation);
  }
  function getFile$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function getFile$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function getFile($receiver, path, options, continuation) {
    if (options === void 0) {
      var $receiver_0 = {};
      $receiver_0.create = true;
      options = $receiver_0;
    }
    var cd = CompletableDeferred();
    $receiver.getFile(path, options, getFile$lambda(cd), getFile$lambda_0(cd));
    return cd.await(continuation);
  }
  function Coroutine$writeFile($receiver_0, name_0, blob_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$name = name_0;
    this.local$blob = blob_0;
  }
  Coroutine$writeFile.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeFile.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeFile.prototype.constructor = Coroutine$writeFile;
  Coroutine$writeFile.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = getFile(this.local$$receiver, this.local$name, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = createWriter(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0.write(this.local$blob);
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function writeFile($receiver_0, name_0, blob_0, continuation_0, suspended) {
    var instance = new Coroutine$writeFile($receiver_0, name_0, blob_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function createWriter$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function createWriter$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function createWriter($receiver, continuation) {
    var cd = CompletableDeferred();
    $receiver.createWriter(createWriter$lambda(cd), createWriter$lambda_0(cd));
    return cd.await(continuation);
  }
  function file$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(it);
      return Unit;
    };
  }
  function file$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function file($receiver, continuation) {
    var cd = CompletableDeferred();
    $receiver.file(file$lambda(cd), file$lambda_0(cd));
    return cd.await(continuation);
  }
  function remove$lambda(closure$cd) {
    return function () {
      closure$cd.complete_11rb$(Unit);
      return Unit;
    };
  }
  function remove$lambda_0(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function remove($receiver, continuation) {
    var cd = CompletableDeferred();
    $receiver.remove(remove$lambda(cd), remove$lambda_0(cd));
    return cd.await(continuation);
  }
  function isFileSystemSupported$lambda() {
    return window.navigator.webkitPersistentStorage != null;
  }
  var isFileSystemSupported;
  function get_isFileSystemSupported() {
    return isFileSystemSupported.value;
  }
  var objectKeys = defineInlineFunction('appsimake-common.common.objectKeys_za3rmp$', function (json) {
    return Object.keys(json);
  });
  function res(path) {
    var tmp$, tmp$_0, tmp$_1;
    var resmaps = window.resmaps;
    while (!(resmaps.modules.length === 0)) {
      var module_0 = resmaps.modules.shift();
      tmp$ = Object.keys(module_0);
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var k = tmp$[tmp$_0];
        resmaps.map[k] = module_0[k];
      }
    }
    return typeof (tmp$_1 = resmaps.map[path]) === 'string' ? tmp$_1 : throwCCE();
  }
  function State1() {
  }
  State1.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'State1',
    interfaces: []
  };
  function State0() {
  }
  State0.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'State0',
    interfaces: []
  };
  function AsyncState0() {
  }
  AsyncState0.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AsyncState0',
    interfaces: []
  };
  function state1$ObjectLiteral(closure$fn) {
    this.closure$fn = closure$fn;
  }
  state1$ObjectLiteral.prototype.invoke_11rb$ = function (input) {
    return this.closure$fn(input);
  };
  state1$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [State1]
  };
  function state1(fn) {
    return new state1$ObjectLiteral(fn);
  }
  function state0$ObjectLiteral(closure$fn) {
    this.closure$fn = closure$fn;
  }
  state0$ObjectLiteral.prototype.invoke = function () {
    return this.closure$fn();
  };
  state0$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [State0]
  };
  function state0(fn) {
    return new state0$ObjectLiteral(fn);
  }
  function asyncState0$ObjectLiteral(closure$fn) {
    this.closure$fn = closure$fn;
  }
  asyncState0$ObjectLiteral.prototype.invoke = function (continuation) {
    return this.closure$fn();
  };
  asyncState0$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AsyncState0]
  };
  function asyncState0(fn) {
    return new asyncState0$ObjectLiteral(fn);
  }
  function StateMachine1(initial) {
    this.state_8be2vx$ = initial;
  }
  StateMachine1.prototype.process_11rb$ = function (input) {
    var tmp$;
    var out = this.state_8be2vx$.invoke_11rb$(input);
    if ((tmp$ = out.first) != null) {
      this.state_8be2vx$ = tmp$;
    }
    return out.second;
  };
  StateMachine1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateMachine1',
    interfaces: []
  };
  function StateMachine0(initial) {
    this.state_8be2vx$ = initial;
  }
  StateMachine0.prototype.process = function () {
    var tmp$;
    var out = this.state_8be2vx$.invoke();
    if ((tmp$ = out.first) != null) {
      this.state_8be2vx$ = tmp$;
    }
    return out.second;
  };
  StateMachine0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateMachine0',
    interfaces: []
  };
  function AsyncStateMachine0(initial) {
    this.state_8be2vx$ = initial;
  }
  function Coroutine$process($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$process.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$process.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$process.prototype.constructor = Coroutine$process;
  Coroutine$process.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.state_8be2vx$.invoke(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var out = this.result_0;
            if ((tmp$ = out.first) != null) {
              this.$this.state_8be2vx$ = tmp$;
            }

            return out.second;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AsyncStateMachine0.prototype.process = function (continuation_0, suspended) {
    var instance = new Coroutine$process(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AsyncStateMachine0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsyncStateMachine0',
    interfaces: []
  };
  function LazySM0(fn) {
    this.sm_8be2vx$ = new StateMachine0(state0(LazySM0$sm$lambda(fn)));
  }
  function LazySM0$sm$lambda$lambda(closure$v) {
    return function () {
      return to(null, closure$v);
    };
  }
  function LazySM0$sm$lambda(closure$fn) {
    return function () {
      var v = closure$fn();
      return to(state0(LazySM0$sm$lambda$lambda(v)), v);
    };
  }
  LazySM0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LazySM0',
    interfaces: []
  };
  function State() {
  }
  State.prototype.enter = function () {
    return killable.Noop;
  };
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function StateMachine(state) {
    this.state_0 = state;
    this.destroy_0 = this.state_0.enter();
  }
  StateMachine.prototype.update_11rb$ = function (input) {
    var nextState = this.state_0.process_11rb$(input);
    if (nextState != null) {
      this.destroy_0();
      this.state_0 = nextState;
      this.destroy_0 = this.state_0.enter();
    }
  };
  StateMachine.prototype.alreadyShutdown_0 = function () {
    throw RuntimeException_init('state machine already shut down');
  };
  function StateMachine$AlreadyShutdown($outer) {
    this.$outer = $outer;
    State.call(this);
  }
  StateMachine$AlreadyShutdown.prototype.process_11rb$ = function (input) {
    return this.$outer.alreadyShutdown_0();
  };
  StateMachine$AlreadyShutdown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlreadyShutdown',
    interfaces: [State]
  };
  function StateMachine$shutdown$lambda(this$StateMachine) {
    return function () {
      this$StateMachine.alreadyShutdown_0();
      return Unit;
    };
  }
  StateMachine.prototype.shutdown = function () {
    this.destroy_0();
    this.destroy_0 = StateMachine$shutdown$lambda(this);
    this.state_0 = new StateMachine$AlreadyShutdown(this);
  };
  StateMachine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateMachine',
    interfaces: []
  };
  var get_withStorage = defineInlineFunction('appsimake-common.common.get_withStorage_yi0el1$', function ($receiver) {
    return $receiver;
  });
  var get_storage = defineInlineFunction('appsimake-common.common.get_storage_yi0el1$', function ($receiver) {
    return $receiver.storage;
  });
  function isStorageManagerSupported$lambda() {
    return window.navigator.storage != null;
  }
  var isStorageManagerSupported;
  function get_isStorageManagerSupported() {
    return isStorageManagerSupported.value;
  }
  function JsYamlOptions() {
    return {};
  }
  function Schema(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Schema_initFields() {
    Schema_initFields = function () {
    };
    Schema$FAILSAFE_SCHEMA_instance = new Schema('FAILSAFE_SCHEMA', 0);
    Schema$JSON_SCHEMA_instance = new Schema('JSON_SCHEMA', 1);
    Schema$CORE_SCHEMA_instance = new Schema('CORE_SCHEMA', 2);
    Schema$DEFAULT_SAFE_SCHEMA_instance = new Schema('DEFAULT_SAFE_SCHEMA', 3);
    Schema$DEFAULT_FULL_SCHEMA_instance = new Schema('DEFAULT_FULL_SCHEMA', 4);
  }
  var Schema$FAILSAFE_SCHEMA_instance;
  function Schema$FAILSAFE_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$FAILSAFE_SCHEMA_instance;
  }
  var Schema$JSON_SCHEMA_instance;
  function Schema$JSON_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$JSON_SCHEMA_instance;
  }
  var Schema$CORE_SCHEMA_instance;
  function Schema$CORE_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$CORE_SCHEMA_instance;
  }
  var Schema$DEFAULT_SAFE_SCHEMA_instance;
  function Schema$DEFAULT_SAFE_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$DEFAULT_SAFE_SCHEMA_instance;
  }
  var Schema$DEFAULT_FULL_SCHEMA_instance;
  function Schema$DEFAULT_FULL_SCHEMA_getInstance() {
    Schema_initFields();
    return Schema$DEFAULT_FULL_SCHEMA_instance;
  }
  Schema.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Schema',
    interfaces: [Enum]
  };
  function Schema$values() {
    return [Schema$FAILSAFE_SCHEMA_getInstance(), Schema$JSON_SCHEMA_getInstance(), Schema$CORE_SCHEMA_getInstance(), Schema$DEFAULT_SAFE_SCHEMA_getInstance(), Schema$DEFAULT_FULL_SCHEMA_getInstance()];
  }
  Schema.values = Schema$values;
  function Schema$valueOf(name) {
    switch (name) {
      case 'FAILSAFE_SCHEMA':
        return Schema$FAILSAFE_SCHEMA_getInstance();
      case 'JSON_SCHEMA':
        return Schema$JSON_SCHEMA_getInstance();
      case 'CORE_SCHEMA':
        return Schema$CORE_SCHEMA_getInstance();
      case 'DEFAULT_SAFE_SCHEMA':
        return Schema$DEFAULT_SAFE_SCHEMA_getInstance();
      case 'DEFAULT_FULL_SCHEMA':
        return Schema$DEFAULT_FULL_SCHEMA_getInstance();
      default:throwISE('No enum constant jsyaml.Schema.' + name);
    }
  }
  Schema.valueOf_61zpoe$ = Schema$valueOf;
  function get_schemaEnum($receiver) {
    var tmp$;
    return (tmp$ = $receiver.schema) != null ? Schema$valueOf(tmp$) : null;
  }
  function set_schemaEnum($receiver, v) {
    $receiver.schema = v != null ? v.toString() : null;
  }
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$ace = _.ace || (_.ace = {});
  package$ace.Annotation = Annotation;
  var package$common = _.common || (_.common = {});
  package$common.CsKillsApiCommon = CsKillsApiCommon;
  package$common.hash_qfdq9h$ = hash;
  package$common.get_escape_pdl1vz$ = get_escape;
  Object.defineProperty(package$common, 'onResize', {
    get: get_onResize
  });
  package$common.resizeEvent_5ehnu1$ = resizeEvent;
  package$common.insertAt_tevjyx$ = insertAt;
  package$common.insertAt_y55kqv$ = insertAt_0;
  package$common.removeAt_poj3bi$ = removeAt;
  package$common.removeAt_jeu5im$ = removeAt_0;
  package$common.replaceAt_l17iyt$ = replaceAt;
  package$common.removeFromParent_asww5s$ = removeFromParent;
  package$common.replaceWith_fga9sf$ = replaceWith;
  package$common.attachEnabler_4r7ayb$ = attachEnabler;
  package$common.linkedIterable_h43q6c$ = linkedIterable;
  package$common.listen_hgi4ad$ = listen;
  package$common.listenAs_2stdkb$ = listenAs;
  package$common.onInterval_a3jiyj$ = onInterval;
  package$common.LazyDelegate = LazyDelegate;
  package$common.lazyNamed_cq6yhu$ = lazyNamed;
  package$common.get_connection_yi0el1$ = get_connection;
  package$common.get_bluetooth_83l5d8$ = get_bluetooth;
  package$common.get_cellular_83l5d8$ = get_cellular;
  package$common.get_ethernet_83l5d8$ = get_ethernet;
  package$common.get_none_83l5d8$ = get_none;
  package$common.get_wifi_83l5d8$ = get_wifi;
  package$common.get_wimax_83l5d8$ = get_wimax;
  package$common.get_other_83l5d8$ = get_other;
  package$common.get_unknown_83l5d8$ = get_unknown;
  package$common.get_slow2g_z7fr9$ = get_slow2g;
  package$common.get_g2_z7fr9$ = get_g2;
  package$common.get_g3_z7fr9$ = get_g3;
  package$common.get_g4_z7fr9$ = get_g4;
  package$common.requestFileSystem_mif124$ = requestFileSystem;
  $$importsForInline$$['appsimake-common'] = _;
  package$common.requestPersistentFileSystem_cjjapg$ = requestPersistentFileSystem;
  package$common.get_withQuota_nz12v2$ = get_withQuota;
  package$common.get_withQuota_yi0el1$ = get_withQuota_0;
  package$common.requestQuota_o528w6$ = requestQuota;
  package$common.UsageAndQuota = UsageAndQuota;
  package$common.queryUsageAndQuota_qs12is$ = queryUsageAndQuota;
  package$common.readAllEntries_70fqbg$ = readAllEntries;
  package$common.readEntries_e3gq6l$ = readEntries;
  package$common.getDirectory_lzt4nx$ = getDirectory;
  package$common.getFile_lzt4nx$ = getFile;
  package$common.writeFile_7y1pu9$ = writeFile;
  package$common.createWriter_sqof09$ = createWriter;
  package$common.file_sqof09$ = file;
  package$common.remove_sqof09$ = remove;
  Object.defineProperty(package$common, 'isFileSystemSupported', {
    get: get_isFileSystemSupported
  });
  package$common.objectKeys_za3rmp$ = objectKeys;
  package$common.res_61zpoe$ = res;
  package$common.State1 = State1;
  package$common.State0 = State0;
  package$common.AsyncState0 = AsyncState0;
  package$common.state1_of8dpg$ = state1;
  package$common.state0_gmleg1$ = state0;
  package$common.asyncState0_rdka2b$ = asyncState0;
  package$common.StateMachine1 = StateMachine1;
  package$common.StateMachine0 = StateMachine0;
  package$common.AsyncStateMachine0 = AsyncStateMachine0;
  package$common.LazySM0 = LazySM0;
  package$common.State = State;
  package$common.StateMachine = StateMachine;
  package$common.get_withStorage_yi0el1$ = get_withStorage;
  package$common.get_storage_yi0el1$ = get_storage;
  Object.defineProperty(package$common, 'isStorageManagerSupported', {
    get: get_isStorageManagerSupported
  });
  var package$jsyaml = _.jsyaml || (_.jsyaml = {});
  package$jsyaml.JsYamlOptions = JsYamlOptions;
  Object.defineProperty(Schema, 'FAILSAFE_SCHEMA', {
    get: Schema$FAILSAFE_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'JSON_SCHEMA', {
    get: Schema$JSON_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'CORE_SCHEMA', {
    get: Schema$CORE_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'DEFAULT_SAFE_SCHEMA', {
    get: Schema$DEFAULT_SAFE_SCHEMA_getInstance
  });
  Object.defineProperty(Schema, 'DEFAULT_FULL_SCHEMA', {
    get: Schema$DEFAULT_FULL_SCHEMA_getInstance
  });
  package$jsyaml.Schema = Schema;
  package$jsyaml.get_schemaEnum_lf44v5$ = get_schemaEnum;
  package$jsyaml.set_schemaEnum_isj6f3$ = set_schemaEnum;
  CsKillsApiCommon.prototype.get_ids_qko62t$ = CsKillsApi.prototype.get_ids_qko62t$;
  CsKillsApiCommon.prototype.rx_y6x17j$ = CsKillsApi.prototype.rx_y6x17j$;
  CsKillsApiCommon.prototype.rx_46ic4w$ = CsKillsApi.prototype.rx_46ic4w$;
  CsKillsApiCommon.prototype.rx_wgabca$ = CsKillsApi.prototype.rx_wgabca$;
  CsKillsApiCommon.prototype.rx_djv61p$ = CsKillsApi.prototype.rx_djv61p$;
  CsKillsApiCommon.prototype.containsRx_1w65cx$ = CsKillsApi.prototype.containsRx_1w65cx$;
  CsKillsApiCommon.prototype.events_9k4h2$ = CsKillsApi.prototype.events_9k4h2$;
  CsKillsApiCommon.prototype.feedTo_9o5f67$ = CsKillsApi.prototype.feedTo_9o5f67$;
  CsKillsApiCommon.prototype.filter_hu0si9$ = CsKillsApi.prototype.filter_hu0si9$;
  CsKillsApiCommon.prototype.filtered_tnde95$ = CsKillsApi.prototype.filtered_tnde95$;
  CsKillsApiCommon.prototype.forEach_xwzbbo$ = CsKillsApi.prototype.forEach_xwzbbo$;
  CsKillsApiCommon.prototype.forEach_35q7bt$ = CsKillsApi.prototype.forEach_35q7bt$;
  CsKillsApiCommon.prototype.forEachLater_xwzbbo$ = CsKillsApi.prototype.forEachLater_xwzbbo$;
  CsKillsApiCommon.prototype.incremented_eoy9qo$ = CsKillsApi.prototype.incremented_eoy9qo$;
  CsKillsApiCommon.prototype.linked_n1nom7$ = CsKillsApi.prototype.linked_n1nom7$;
  CsKillsApiCommon.prototype.listen_ubid8w$ = CsKillsApi.prototype.listen_ubid8w$;
  CsKillsApiCommon.prototype.map_jtxi0h$ = CsKillsApi.prototype.map_jtxi0h$;
  CsKillsApiCommon.prototype.mapLive_1mq1ue$ = CsKillsApi.prototype.mapLive_1mq1ue$;
  CsKillsApiCommon.prototype.onChange_rlu5c6$ = CsKillsApi.prototype.onChange_rlu5c6$;
  CsKillsApiCommon.prototype.plusAssign_ubid8w$ = CsKillsApi.prototype.plusAssign_ubid8w$;
  CsKillsApiCommon.prototype.process_y3juat$ = CsKillsApi.prototype.process_y3juat$;
  CsKillsApiCommon.prototype.process_7xi3v7$ = CsKillsApi.prototype.process_7xi3v7$;
  CsKillsApiCommon.prototype.remAssign_wgabca$ = CsKillsApi.prototype.remAssign_wgabca$;
  CsKillsApiCommon.prototype.remAssign_djv61p$ = CsKillsApi.prototype.remAssign_djv61p$;
  CsKillsApiCommon.prototype.remAssign_7fncnf$ = CsKillsApi.prototype.remAssign_7fncnf$;
  CsKillsApiCommon.prototype.rxClass_c5yvvx$ = CsKillsApi.prototype.rxClass_c5yvvx$;
  CsKillsApiCommon.prototype.rxClass_6sflyw$ = CsKillsApi.prototype.rxClass_6sflyw$;
  CsKillsApiCommon.prototype.toChannelLater_z5dyp2$ = CsKillsApi.prototype.toChannelLater_z5dyp2$;
  CsKillsApiCommon.prototype.toRx_on0lyu$ = CsKillsApi.prototype.toRx_on0lyu$;
  CsKillsApiCommon.prototype.toRxSet_jr4bl4$ = CsKillsApi.prototype.toRxSet_jr4bl4$;
  onResize = lazy(onResize$lambda);
  isFileSystemSupported = lazy(isFileSystemSupported$lambda);
  isStorageManagerSupported = lazy(isStorageManagerSupported$lambda);
  Kotlin.defineModule('appsimake-common', _);
  return _;
}(typeof this['appsimake-common'] === 'undefined' ? {} : this['appsimake-common'], kotlin, this['appsimake-commonshr'], this['kotlinx-coroutines-core']);

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-domx'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-domx'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-domx'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-domx'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-domx'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-domx'.");
}
this['appsimake-domx'] = function (_, Kotlin, $module$kotlinx_coroutines_core, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var replace = Kotlin.kotlin.text.replace_r2fvfm$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var once = $module$appsimake_commonshr.commonshr.once_yo2cq0$;
  var Killables = $module$appsimake_commonshr.killable.Killables;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var rx = $module$appsimake_commonshr.rx.rx_m71pkk$;
  var killable = $module$appsimake_commonshr.killable;
  var forEach = $module$appsimake_commonshr.rx.forEach_yaias7$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var throwCCE = Kotlin.throwCCE;
  var Listeners = $module$appsimake_commonshr.common.Listeners;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var KillsApi = $module$appsimake_commonshr.commonshr.KillsApi;
  var joinTo = Kotlin.kotlin.collections.joinTo_gcc71v$;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var InvokeApply = $module$appsimake_commonshr.commonshr.InvokeApply;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_lqp1nt$;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var toString = Kotlin.toString;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  Cls$Companion.prototype = Object.create(Cls.prototype);
  Cls$Companion.prototype.constructor = Cls$Companion;
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
  function copyToClipboard$lambda(this$copyToClipboard) {
    return function ($receiver) {
      $receiver.value = this$copyToClipboard;
      ensureNotNull(document.body).appendChild($receiver);
      $receiver.select();
      document.execCommand('copy');
      removeFromParent($receiver);
      return Unit;
    };
  }
  function copyToClipboard($receiver) {
    invoke(get_textarea(document), copyToClipboard$lambda($receiver));
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
  function removeAt($receiver, position) {
    return $receiver.removeChild(ensureNotNull($receiver.children.item(position)));
  }
  function replaceAt($receiver, position, element) {
    $receiver.replaceChild(ensureNotNull($receiver.children.item(position)), element);
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
  function listenOnce$lambda(closure$ks, closure$fn) {
    return function (it) {
      closure$ks.kill();
      closure$fn(it);
      return Unit;
    };
  }
  function listenOnce($receiver, type, fn) {
    var ks = new Killables();
    ks.plusAssign_o14v8n$(listen($receiver, type, listenOnce$lambda(ks, fn)));
  }
  function get_connection($receiver) {
    return $receiver.connection;
  }
  var get_bluetooth = defineInlineFunction('appsimake-domx.common.get_bluetooth_83l5d8$', function ($receiver) {
    return 'bluetooth';
  });
  var get_cellular = defineInlineFunction('appsimake-domx.common.get_cellular_83l5d8$', function ($receiver) {
    return 'cellular';
  });
  var get_ethernet = defineInlineFunction('appsimake-domx.common.get_ethernet_83l5d8$', function ($receiver) {
    return 'ethernet';
  });
  var get_none = defineInlineFunction('appsimake-domx.common.get_none_83l5d8$', function ($receiver) {
    return 'none';
  });
  var get_wifi = defineInlineFunction('appsimake-domx.common.get_wifi_83l5d8$', function ($receiver) {
    return 'wifi';
  });
  var get_wimax = defineInlineFunction('appsimake-domx.common.get_wimax_83l5d8$', function ($receiver) {
    return 'wimax';
  });
  var get_other = defineInlineFunction('appsimake-domx.common.get_other_83l5d8$', function ($receiver) {
    return 'other';
  });
  var get_unknown = defineInlineFunction('appsimake-domx.common.get_unknown_83l5d8$', function ($receiver) {
    return 'unknown';
  });
  var get_slow2g = defineInlineFunction('appsimake-domx.common.get_slow2g_z7fr9$', function ($receiver) {
    return 'slow-2g';
  });
  var get_g2 = defineInlineFunction('appsimake-domx.common.get_g2_z7fr9$', function ($receiver) {
    return '2g';
  });
  var get_g3 = defineInlineFunction('appsimake-domx.common.get_g3_z7fr9$', function ($receiver) {
    return '3g';
  });
  var get_g4 = defineInlineFunction('appsimake-domx.common.get_g4_z7fr9$', function ($receiver) {
    return '4g';
  });
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
  function insertAfter($receiver, what, afterWhat) {
    $receiver.insertBefore(what, afterWhat == null ? $receiver.firstChild : afterWhat.nextSibling);
  }
  function removeAt_0($receiver, position) {
    return $receiver.removeChild(ensureNotNull($receiver.childNodes.item(position)));
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
  function attached$lambda(closure$fn) {
    return function ($receiver) {
      return closure$fn();
    };
  }
  function attached$lambda_0(closure$p, this$attached) {
    return function ($receiver, v) {
      if (v) {
        closure$p.appendChild(this$attached);
      }
       else {
        removeFromParent(this$attached);
      }
      return Unit;
    };
  }
  function attached($receiver, deps, fn) {
    if ($receiver.parentNode == null) {
      var message = 'Dynamically attached element must have a parent to start with.';
      throw IllegalArgumentException_init(message.toString());
    }
    var p = ensureNotNull($receiver.parentNode);
    forEach(rx(deps, attached$lambda(fn)), killable.HasNoKill, attached$lambda_0(p, $receiver));
  }
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
  var get_withQuota = defineInlineFunction('appsimake-domx.common.get_withQuota_nz12v2$', function ($receiver) {
    return $receiver;
  });
  var get_withQuota_0 = defineInlineFunction('appsimake-domx.common.get_withQuota_yi0el1$', function ($receiver) {
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
  var objectKeys = defineInlineFunction('appsimake-domx.common.objectKeys_za3rmp$', function (json) {
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
  var get_withStorage = defineInlineFunction('appsimake-domx.common.get_withStorage_yi0el1$', function ($receiver) {
    return $receiver;
  });
  var get_storage = defineInlineFunction('appsimake-domx.common.get_storage_yi0el1$', function ($receiver) {
    return $receiver.storage;
  });
  function isStorageManagerSupported$lambda() {
    return window.navigator.storage != null;
  }
  var isStorageManagerSupported;
  function get_isStorageManagerSupported() {
    return isStorageManagerSupported.value;
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
  function KillsApiDomx() {
  }
  KillsApiDomx.prototype.on_hgi4ad$ = function ($receiver, event, action) {
    on($receiver, this, event, action);
  };
  KillsApiDomx.prototype.on_2stdkb$ = function ($receiver, event, action) {
    on($receiver, this, event, action);
  };
  KillsApiDomx.prototype.onClick_pofl4w$ = function ($receiver, action) {
    onClick($receiver, this, action);
  };
  KillsApiDomx.prototype.onInput_clfw57$ = function ($receiver, action) {
    onInput($receiver, this, action);
  };
  KillsApiDomx.prototype.onChange_oeam7t$ = function ($receiver, action) {
    onChange($receiver, this, action);
  };
  KillsApiDomx.prototype.attached_ux9tev$ = function ($receiver, fn) {
    attached($receiver, this, fn);
  };
  KillsApiDomx.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KillsApiDomx',
    interfaces: [KillsApi]
  };
  function Classes() {
  }
  Classes.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Classes',
    interfaces: []
  };
  var plusAssign_0 = defineInlineFunction('appsimake-domx.domx.plusAssign_etbs9u$', wrapFunction(function () {
    var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
    var addClass = _.domx.addClass_zcd9gc$;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var plusAssign$lambda = wrapFunction(function () {
      var throwCCE = Kotlin.throwCCE;
      var trim = Kotlin.kotlin.text.trim_gw00vp$;
      return function (this$plusAssign) {
        return function (c) {
          var tmp$;
          var $receiver = trim(Kotlin.isCharSequence(tmp$ = c) ? tmp$ : throwCCE()).toString();
          var $receiver_0 = Regex_init('\\s+').split_905azu$($receiver, 0);
          var tmp$_0;
          tmp$_0 = $receiver_0.iterator();
          while (tmp$_0.hasNext()) {
            var element = tmp$_0.next();
            addClass(this$plusAssign, [element]);
          }
          return Unit;
        };
      };
    });
    var throwCCE = Kotlin.throwCCE;
    var trim = Kotlin.kotlin.text.trim_gw00vp$;
    return function ($receiver, cls) {
      if (cls != null) {
        var tmp$;
        var $receiver_0 = trim(Kotlin.isCharSequence(tmp$ = cls) ? tmp$ : throwCCE()).toString();
        var tmp$_0;
        tmp$_0 = Regex_init('\\s+').split_905azu$($receiver_0, 0).iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          addClass($receiver, [element]);
        }
      }
    };
  }));
  var minusAssign = defineInlineFunction('appsimake-domx.domx.minusAssign_etbs9u$', wrapFunction(function () {
    var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
    var removeClass = _.domx.removeClass_zcd9gc$;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var minusAssign$lambda = wrapFunction(function () {
      var throwCCE = Kotlin.throwCCE;
      var trim = Kotlin.kotlin.text.trim_gw00vp$;
      return function (this$minusAssign) {
        return function (c) {
          var tmp$;
          var $receiver = trim(Kotlin.isCharSequence(tmp$ = c) ? tmp$ : throwCCE()).toString();
          var $receiver_0 = Regex_init('\\s').split_905azu$($receiver, 0);
          var tmp$_0;
          tmp$_0 = $receiver_0.iterator();
          while (tmp$_0.hasNext()) {
            var element = tmp$_0.next();
            removeClass(this$minusAssign, [element]);
          }
          return Unit;
        };
      };
    });
    var throwCCE = Kotlin.throwCCE;
    var trim = Kotlin.kotlin.text.trim_gw00vp$;
    return function ($receiver, cls) {
      if (cls != null) {
        var tmp$;
        var $receiver_0 = trim(Kotlin.isCharSequence(tmp$ = cls) ? tmp$ : throwCCE()).toString();
        var tmp$_0;
        tmp$_0 = Regex_init('\\s').split_905azu$($receiver_0, 0).iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          removeClass($receiver, [element]);
        }
      }
    };
  }));
  function HtmlClasses(element) {
    this.element = element;
  }
  Object.defineProperty(HtmlClasses.prototype, 'className', {
    get: function () {
      return this.element.className;
    },
    set: function (value) {
      this.element.className = value;
    }
  });
  HtmlClasses.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlClasses',
    interfaces: [Classes]
  };
  function SvgClasses(element) {
    this.element = element;
    this.svgClassName = this.element.className;
  }
  Object.defineProperty(SvgClasses.prototype, 'className', {
    get: function () {
      return this.svgClassName.baseVal;
    },
    set: function (value) {
      this.svgClassName.baseVal = value;
    }
  });
  SvgClasses.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvgClasses',
    interfaces: [Classes]
  };
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  function hasClass($receiver, cssClass) {
    var tmp$ = $receiver.className;
    return Regex_init('(^|.*' + '\\' + 's+)' + cssClass + '(' + '$' + '|' + '\\' + 's+.*)').matches_6bul2c$(tmp$);
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  function addClass($receiver, cssClasses) {
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== cssClasses.length; ++tmp$) {
      var element = cssClasses[tmp$];
      if (!hasClass($receiver, element))
        destination.add_11rb$(element);
    }
    var missingClasses = destination;
    if (!missingClasses.isEmpty()) {
      var $receiver_0 = $receiver.className;
      var tmp$_0;
      var presentClasses = trim(Kotlin.isCharSequence(tmp$_0 = $receiver_0) ? tmp$_0 : throwCCE()).toString();
      var $receiver_1 = StringBuilder_init();
      $receiver_1.append_gw00v9$(presentClasses);
      if (!(presentClasses.length === 0)) {
        $receiver_1.append_gw00v9$(' ');
      }
      joinTo(missingClasses, $receiver_1, ' ');
      $receiver.className = $receiver_1.toString();
      return true;
    }
    return false;
  }
  function removeClass($receiver, cssClasses) {
    var any$result;
    any$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== cssClasses.length; ++tmp$) {
        var element = cssClasses[tmp$];
        if (hasClass($receiver, element)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    if (any$result) {
      var toBeRemoved = toSet(cssClasses);
      var $receiver_0 = $receiver.className;
      var tmp$_0;
      var tmp$_1 = trim(Kotlin.isCharSequence(tmp$_0 = $receiver_0) ? tmp$_0 : throwCCE()).toString();
      var $receiver_1 = Regex_init('\\s+').split_905azu$(tmp$_1, 0);
      var destination = ArrayList_init();
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        if (!toBeRemoved.contains_11rb$(element_0))
          destination.add_11rb$(element_0);
      }
      $receiver.className = joinToString(destination, ' ');
      return true;
    }
    return false;
  }
  function tagCreated$lambda($receiver) {
    return Unit;
  }
  function tagCreated($receiver, created, fn) {
    if (fn === void 0)
      fn = tagCreated$lambda;
    var t = created;
    if (!Kotlin.isType($receiver, Document)) {
      $receiver.appendChild(t);
    }
    fn(t);
    return t;
  }
  function tag$lambda($receiver) {
    return Unit;
  }
  function tag($receiver, name, fn) {
    if (fn === void 0)
      fn = tag$lambda;
    return tagCreated($receiver, document.createElement(name), fn);
  }
  function tagNS$lambda($receiver) {
    return Unit;
  }
  function tagNS($receiver, ns, name, fn) {
    if (fn === void 0)
      fn = tagNS$lambda;
    return tagCreated($receiver, document.createElementNS(ns, name), fn);
  }
  var get_classes = defineInlineFunction('appsimake-domx.domx.get_classes_ejp6nk$', wrapFunction(function () {
    var HtmlClasses_init = _.domx.HtmlClasses;
    return function ($receiver) {
      return new HtmlClasses_init($receiver);
    };
  }));
  function set($receiver, key, value) {
    var $receiver_0 = document.createAttribute(key);
    $receiver_0.value = value;
    $receiver.setNamedItem($receiver_0);
  }
  function Attrs(element) {
    this.element = element;
  }
  Attrs.prototype.set_puj7f4$ = function (key, value) {
    this.element.setAttribute(key, value);
  };
  Attrs.prototype.get_61zpoe$ = function (key) {
    return this.element.getAttribute(key);
  };
  Attrs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attrs',
    interfaces: []
  };
  function get_attr($receiver) {
    return new Attrs($receiver);
  }
  var nextId;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function get_ref($receiver) {
    var tmp$;
    var $receiver_0 = $receiver.id;
    if ($receiver_0 == null || isBlank($receiver_0)) {
      $receiver.id = $receiver.tagName + '-' + (tmp$ = nextId, nextId = tmp$ + 1 | 0, tmp$);
    }
    return $receiver.id;
  }
  function base64($receiver, mime, data) {
    $receiver.src = 'data:' + mime + ';base64,' + data;
    $receiver.type = mime;
  }
  function replay($receiver) {
    $receiver.pause();
    $receiver.currentTime = 0.0;
    $receiver.play();
  }
  function CssClass(name) {
    this.name = name;
  }
  var plusAssign$lambda = wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    var trim = Kotlin.kotlin.text.trim_gw00vp$;
    return function (this$plusAssign) {
      return function (c) {
        var tmp$;
        var $receiver = trim(Kotlin.isCharSequence(tmp$ = c) ? tmp$ : throwCCE()).toString();
        var tmp$_0;
        tmp$_0 = Regex_init('\\s+').split_905azu$($receiver, 0).iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          addClass(this$plusAssign, [element]);
        }
        return Unit;
      };
    };
  });
  function CssClass$getValue$lambda(this$CssClass) {
    return function ($receiver) {
      var cls = this$CssClass.name;
      if (cls != null) {
        var tmp$;
        var $receiver_0 = trim(Kotlin.isCharSequence(tmp$ = cls) ? tmp$ : throwCCE()).toString();
        var tmp$_0;
        tmp$_0 = Regex_init('\\s+').split_905azu$($receiver_0, 0).iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          addClass($receiver, [element]);
        }
      }
      return Unit;
    };
  }
  CssClass.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    thisRef.element(CssClass$getValue$lambda(this));
    return this.name;
  };
  CssClass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssClass',
    interfaces: [ReadOnlyProperty]
  };
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  function toCss($receiver) {
    var regex = Regex_init('[A-Z]');
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = regex.find_905azu$($receiver);
      if (match == null) {
        replace_20wsma$result = $receiver.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = $receiver.length;
      var sb = StringBuilder_init_0(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$($receiver, lastStart, foundMatch.range.start);
        sb.append_gw00v9$('-' + foundMatch.value.toLowerCase());
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$($receiver, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    var tmp$ = replace_20wsma$result;
    var regex_0 = Regex_init('\\d+');
    var replace_20wsma$result_0;
    replace_20wsma$break: do {
      var match_0 = regex_0.find_905azu$(tmp$);
      if (match_0 == null) {
        replace_20wsma$result_0 = tmp$.toString();
        break replace_20wsma$break;
      }
      var lastStart_0 = 0;
      var length_0 = tmp$.length;
      var sb_0 = StringBuilder_init_0(length_0);
      do {
        var foundMatch_0 = ensureNotNull(match_0);
        sb_0.append_ezbsdh$(tmp$, lastStart_0, foundMatch_0.range.start);
        sb_0.append_gw00v9$('-' + foundMatch_0.value);
        lastStart_0 = foundMatch_0.range.endInclusive + 1 | 0;
        match_0 = foundMatch_0.next();
      }
       while (lastStart_0 < length_0 && match_0 != null);
      if (lastStart_0 < length_0) {
        sb_0.append_ezbsdh$(tmp$, lastStart_0, length_0);
      }
      replace_20wsma$result_0 = sb_0.toString();
    }
     while (false);
    return replace_20wsma$result_0;
  }
  function CssClassProvider() {
  }
  CssClassProvider.prototype.provideDelegate_d6mtq7$ = function (thisRef, prop) {
    return new CssClass(toCss(prop.callableName));
  };
  CssClassProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssClassProvider',
    interfaces: []
  };
  function Cls(element) {
    Cls$Companion_getInstance();
    if (element === void 0)
      element = Cls_init$lambda;
    this.element = element;
  }
  function Cls$Companion() {
    Cls$Companion_instance = this;
    Cls.call(this);
  }
  Cls$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Cls]
  };
  var Cls$Companion_instance = null;
  function Cls$Companion_getInstance() {
    if (Cls$Companion_instance === null) {
      new Cls$Companion();
    }
    return Cls$Companion_instance;
  }
  function Cls_init$lambda(it) {
    return Unit;
  }
  Cls.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cls',
    interfaces: [InvokeApply]
  };
  function get_cls$lambda(this$cls) {
    return function (it) {
      it(new HtmlClasses(this$cls));
      return Unit;
    };
  }
  function get_cls($receiver) {
    return new Cls(get_cls$lambda($receiver));
  }
  function css(name) {
    return new CssClass(name);
  }
  function css_0() {
    return new CssClassProvider();
  }
  function TagDelegate(name) {
    if (name === void 0)
      name = null;
    this.name = name;
  }
  TagDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    return tag(thisRef, (tmp$ = this.name) != null ? tmp$ : property.callableName);
  };
  TagDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDelegate',
    interfaces: [ReadOnlyProperty]
  };
  function elem() {
    return new TagDelegate();
  }
  function elem_0(name) {
    return new TagDelegate(name);
  }
  function invoke($receiver, fn) {
    fn($receiver);
    return $receiver;
  }
  function rxEnabled$lambda(this$rxEnabled) {
    return function ($receiver, it) {
      this$rxEnabled.disabled = !it;
      return Unit;
    };
  }
  function rxEnabled($receiver, deps, rx) {
    forEach(rx, deps, rxEnabled$lambda($receiver));
  }
  function rxEnabled$lambda_0(closure$fn) {
    return function ($receiver) {
      return closure$fn($receiver);
    };
  }
  function rxEnabled_0($receiver, deps, fn) {
    var $receiver_0 = Rx_init(deps.kills, rxEnabled$lambda_0(fn));
    rxEnabled($receiver, killable.HasNoKill, $receiver_0);
  }
  function remAssign($receiver, text) {
    $receiver.innerText = text;
  }
  function plusAssign_1($receiver, text) {
    appendText($receiver, text);
  }
  var div;
  var div_metadata = new PropertyMetadata('div');
  function get_div($receiver) {
    return div.getValue_lrcp0p$($receiver, div_metadata);
  }
  var styleTag;
  var styleTag_metadata = new PropertyMetadata('styleTag');
  function get_styleTag($receiver) {
    return styleTag.getValue_lrcp0p$($receiver, styleTag_metadata);
  }
  var nav;
  var nav_metadata = new PropertyMetadata('nav');
  function get_nav($receiver) {
    return nav.getValue_lrcp0p$($receiver, nav_metadata);
  }
  var video;
  var video_metadata = new PropertyMetadata('video');
  function get_video($receiver) {
    return video.getValue_lrcp0p$($receiver, video_metadata);
  }
  var li;
  var li_metadata = new PropertyMetadata('li');
  function get_li($receiver) {
    return li.getValue_lrcp0p$($receiver, li_metadata);
  }
  var ol;
  var ol_metadata = new PropertyMetadata('ol');
  function get_ol($receiver) {
    return ol.getValue_lrcp0p$($receiver, ol_metadata);
  }
  var ul;
  var ul_metadata = new PropertyMetadata('ul');
  function get_ul($receiver) {
    return ul.getValue_lrcp0p$($receiver, ul_metadata);
  }
  var img;
  var img_metadata = new PropertyMetadata('img');
  function get_img($receiver) {
    return img.getValue_lrcp0p$($receiver, img_metadata);
  }
  var strong;
  var strong_metadata = new PropertyMetadata('strong');
  function get_strong($receiver) {
    return strong.getValue_lrcp0p$($receiver, strong_metadata);
  }
  var pre;
  var pre_metadata = new PropertyMetadata('pre');
  function get_pre($receiver) {
    return pre.getValue_lrcp0p$($receiver, pre_metadata);
  }
  var source;
  var source_metadata = new PropertyMetadata('source');
  function get_source($receiver) {
    return source.getValue_lrcp0p$($receiver, source_metadata);
  }
  var audio;
  var audio_metadata = new PropertyMetadata('audio');
  function get_audio($receiver) {
    return audio.getValue_lrcp0p$($receiver, audio_metadata);
  }
  var span;
  var span_metadata = new PropertyMetadata('span');
  function get_span($receiver) {
    return span.getValue_lrcp0p$($receiver, span_metadata);
  }
  var a;
  var a_metadata = new PropertyMetadata('a');
  function get_a($receiver) {
    return a.getValue_lrcp0p$($receiver, a_metadata);
  }
  var p;
  var p_metadata = new PropertyMetadata('p');
  function get_p($receiver) {
    return p.getValue_lrcp0p$($receiver, p_metadata);
  }
  var button;
  var button_metadata = new PropertyMetadata('button');
  function get_button($receiver) {
    return button.getValue_lrcp0p$($receiver, button_metadata);
  }
  var h1;
  var h1_metadata = new PropertyMetadata('h1');
  function get_h1($receiver) {
    return h1.getValue_lrcp0p$($receiver, h1_metadata);
  }
  var h2;
  var h2_metadata = new PropertyMetadata('h2');
  function get_h2($receiver) {
    return h2.getValue_lrcp0p$($receiver, h2_metadata);
  }
  var h3;
  var h3_metadata = new PropertyMetadata('h3');
  function get_h3($receiver) {
    return h3.getValue_lrcp0p$($receiver, h3_metadata);
  }
  var h4;
  var h4_metadata = new PropertyMetadata('h4');
  function get_h4($receiver) {
    return h4.getValue_lrcp0p$($receiver, h4_metadata);
  }
  var h5;
  var h5_metadata = new PropertyMetadata('h5');
  function get_h5($receiver) {
    return h5.getValue_lrcp0p$($receiver, h5_metadata);
  }
  var h6;
  var h6_metadata = new PropertyMetadata('h6');
  function get_h6($receiver) {
    return h6.getValue_lrcp0p$($receiver, h6_metadata);
  }
  var dl;
  var dl_metadata = new PropertyMetadata('dl');
  function get_dl($receiver) {
    return dl.getValue_lrcp0p$($receiver, dl_metadata);
  }
  var dt;
  var dt_metadata = new PropertyMetadata('dt');
  function get_dt($receiver) {
    return dt.getValue_lrcp0p$($receiver, dt_metadata);
  }
  var dd;
  var dd_metadata = new PropertyMetadata('dd');
  function get_dd($receiver) {
    return dd.getValue_lrcp0p$($receiver, dd_metadata);
  }
  var input;
  var input_metadata = new PropertyMetadata('input');
  function get_input($receiver) {
    return input.getValue_lrcp0p$($receiver, input_metadata);
  }
  var form;
  var form_metadata = new PropertyMetadata('form');
  function get_form($receiver) {
    return form.getValue_lrcp0p$($receiver, form_metadata);
  }
  var label;
  var label_metadata = new PropertyMetadata('label');
  function get_label($receiver) {
    return label.getValue_lrcp0p$($receiver, label_metadata);
  }
  var textarea;
  var textarea_metadata = new PropertyMetadata('textarea');
  function get_textarea($receiver) {
    return textarea.getValue_lrcp0p$($receiver, textarea_metadata);
  }
  var select;
  var select_metadata = new PropertyMetadata('select');
  function get_select($receiver) {
    return select.getValue_lrcp0p$($receiver, select_metadata);
  }
  var option;
  var option_metadata = new PropertyMetadata('option');
  function get_option($receiver) {
    return option.getValue_lrcp0p$($receiver, option_metadata);
  }
  function on$lambda(closure$action) {
    return function (e) {
      closure$action(e);
      return Unit;
    };
  }
  function on$lambda_0(closure$event, closure$listener, this$on) {
    return function () {
      this$on.removeEventListener(closure$event, closure$listener);
      return Unit;
    };
  }
  function on($receiver, deps, event, action) {
    var listener = on$lambda(action);
    $receiver.addEventListener(event, listener);
    plusAssign(deps.kills, on$lambda_0(event, listener, $receiver));
  }
  function onClick($receiver, deps, action) {
    on($receiver, deps, 'click', action);
  }
  function onInput($receiver, deps, action) {
    on($receiver, deps, 'input', action);
  }
  function onChange($receiver, deps, action) {
    on($receiver, deps, 'change', action);
  }
  function styleElement$lambda() {
    return get_styleTag(ensureNotNull(document.head));
  }
  var styleElement;
  function get_styleElement() {
    return styleElement.value;
  }
  function styleSheet$lambda() {
    return get_styleElement().sheet;
  }
  var styleSheet;
  function get_styleSheet() {
    return styleSheet.value;
  }
  function addStyle(name, action, rules) {
    var tmp$;
    get_styleSheet().insertRule('.' + name + ((tmp$ = action != null ? ':' + toString(action) : null) != null ? tmp$ : '') + ' {' + rules + '}', get_styleSheet().cssRules.length);
  }
  function def$ObjectLiteral(closure$prefix, closure$action, closure$s) {
    this.closure$prefix = closure$prefix;
    this.closure$action = closure$action;
    this.closure$s = closure$s;
    this.name = null;
  }
  var plusAssign$lambda_0 = wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    var trim = Kotlin.kotlin.text.trim_gw00vp$;
    return function (this$plusAssign) {
      return function (c) {
        var tmp$;
        var $receiver = trim(Kotlin.isCharSequence(tmp$ = c) ? tmp$ : throwCCE()).toString();
        var tmp$_0;
        tmp$_0 = Regex_init('\\s+').split_905azu$($receiver, 0).iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          addClass(this$plusAssign, [element]);
        }
        return Unit;
      };
    };
  });
  function def$ObjectLiteral$getValue$lambda(closure$n) {
    return function ($receiver) {
      var cls = closure$n;
      if (cls != null) {
        var tmp$;
        var $receiver_0 = trim(Kotlin.isCharSequence(tmp$ = cls) ? tmp$ : throwCCE()).toString();
        var tmp$_0;
        tmp$_0 = Regex_init('\\s+').split_905azu$($receiver_0, 0).iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          addClass($receiver, [element]);
        }
      }
      return Unit;
    };
  }
  def$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    if (this.name == null) {
      var n = this.closure$prefix + toCss(property.callableName);
      this.name = n;
      addStyle(n, this.closure$action, this.closure$s);
      tmp$ = n;
    }
     else {
      tmp$ = ensureNotNull(this.name);
    }
    var n_0 = tmp$;
    thisRef.element(def$ObjectLiteral$getValue$lambda(n_0));
    return n_0;
  };
  def$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadOnlyProperty]
  };
  function def(s, action, prefix) {
    if (action === void 0)
      action = null;
    if (prefix === void 0)
      prefix = '';
    return new def$ObjectLiteral(prefix, action, s);
  }
  function get_cssEscape($receiver) {
    return Regex_init('[^a-zA-Z0-9-]').replace_x2uqeu$($receiver, '_');
  }
  function defParam$lambda(it) {
    return get_cssEscape(toString(it));
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function defParam$ObjectLiteral(closure$paramString, closure$action, closure$css) {
    this.closure$paramString = closure$paramString;
    this.closure$action = closure$action;
    this.closure$css = closure$css;
    this.names = LinkedHashMap_init();
  }
  function defParam$ObjectLiteral$getValue$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      var cls = this$;
      if (cls != null) {
        var tmp$;
        var $receiver_0 = trim(Kotlin.isCharSequence(tmp$ = cls) ? tmp$ : throwCCE()).toString();
        var tmp$_0;
        tmp$_0 = Regex_init('\\s+').split_905azu$($receiver_0, 0).iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          addClass($receiver, [element]);
        }
      }
      return Unit;
    };
  }
  function defParam$ObjectLiteral$getValue$lambda(this$, closure$property, closure$paramString, closure$action, closure$css, closure$thisRef) {
    return function (param) {
      var $receiver = this$.names;
      var tmp$;
      var value = $receiver.get_11rb$(param);
      if (value == null) {
        var closure$property_0 = closure$property;
        var closure$paramString_0 = closure$paramString;
        var closure$action_0 = closure$action;
        var closure$css_0 = closure$css;
        var $receiver_0 = toCss(closure$property_0.callableName) + '--' + closure$paramString_0(param);
        addStyle($receiver_0, closure$action_0, closure$css_0(param));
        var answer = $receiver_0;
        $receiver.put_xwzc9p$(param, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      var $receiver_1 = tmp$;
      closure$thisRef.element(defParam$ObjectLiteral$getValue$lambda$lambda$lambda($receiver_1));
      return $receiver_1;
    };
  }
  defParam$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return defParam$ObjectLiteral$getValue$lambda(this, property, this.closure$paramString, this.closure$action, this.closure$css, thisRef);
  };
  defParam$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadOnlyProperty]
  };
  function defParam(action, paramString, css) {
    if (action === void 0)
      action = null;
    if (paramString === void 0)
      paramString = defParam$lambda;
    return new defParam$ObjectLiteral(paramString, action, css);
  }
  var minWidth0;
  var minWidth0_metadata = new PropertyMetadata('minWidth0');
  function get_minWidth0($receiver) {
    return minWidth0.getValue_lrcp0p$($receiver, minWidth0_metadata);
  }
  var height0;
  var height0_metadata = new PropertyMetadata('height0');
  function get_height0($receiver) {
    return height0.getValue_lrcp0p$($receiver, height0_metadata);
  }
  var lineHeightInherit;
  var lineHeightInherit_metadata = new PropertyMetadata('lineHeightInherit');
  function get_lineHeightInherit($receiver) {
    return lineHeightInherit.getValue_lrcp0p$($receiver, lineHeightInherit_metadata);
  }
  var cursorPointer;
  var cursorPointer_metadata = new PropertyMetadata('cursorPointer');
  function get_cursorPointer($receiver) {
    return cursorPointer.getValue_lrcp0p$($receiver, cursorPointer_metadata);
  }
  var overflowHidden;
  var overflowHidden_metadata = new PropertyMetadata('overflowHidden');
  function get_overflowHidden($receiver) {
    return overflowHidden.getValue_lrcp0p$($receiver, overflowHidden_metadata);
  }
  var overflowVisible;
  var overflowVisible_metadata = new PropertyMetadata('overflowVisible');
  function get_overflowVisible($receiver) {
    return overflowVisible.getValue_lrcp0p$($receiver, overflowVisible_metadata);
  }
  var scrollVertical;
  var scrollVertical_metadata = new PropertyMetadata('scrollVertical');
  function get_scrollVertical($receiver) {
    return scrollVertical.getValue_lrcp0p$($receiver, scrollVertical_metadata);
  }
  var scrollHorizontal;
  var scrollHorizontal_metadata = new PropertyMetadata('scrollHorizontal');
  function get_scrollHorizontal($receiver) {
    return scrollHorizontal.getValue_lrcp0p$($receiver, scrollHorizontal_metadata);
  }
  var dGrid;
  var dGrid_metadata = new PropertyMetadata('dGrid');
  function get_dGrid($receiver) {
    return dGrid.getValue_lrcp0p$($receiver, dGrid_metadata);
  }
  var alignContentCenter;
  var alignContentCenter_metadata = new PropertyMetadata('alignContentCenter');
  function get_alignContentCenter($receiver) {
    return alignContentCenter.getValue_lrcp0p$($receiver, alignContentCenter_metadata);
  }
  var gridAutoFlowRow;
  var gridAutoFlowRow_metadata = new PropertyMetadata('gridAutoFlowRow');
  function get_gridAutoFlowRow($receiver) {
    return gridAutoFlowRow.getValue_lrcp0p$($receiver, gridAutoFlowRow_metadata);
  }
  var justifySelfEnd;
  var justifySelfEnd_metadata = new PropertyMetadata('justifySelfEnd');
  function get_justifySelfEnd($receiver) {
    return justifySelfEnd.getValue_lrcp0p$($receiver, justifySelfEnd_metadata);
  }
  var justifySelfStart;
  var justifySelfStart_metadata = new PropertyMetadata('justifySelfStart');
  function get_justifySelfStart($receiver) {
    return justifySelfStart.getValue_lrcp0p$($receiver, justifySelfStart_metadata);
  }
  var flexBasis0;
  var flexBasis0_metadata = new PropertyMetadata('flexBasis0');
  function get_flexBasis0($receiver) {
    return flexBasis0.getValue_lrcp0p$($receiver, flexBasis0_metadata);
  }
  var pointerEventsNone;
  var pointerEventsNone_metadata = new PropertyMetadata('pointerEventsNone');
  function get_pointerEventsNone($receiver) {
    return pointerEventsNone.getValue_lrcp0p$($receiver, pointerEventsNone_metadata);
  }
  var pointerEventsAll;
  var pointerEventsAll_metadata = new PropertyMetadata('pointerEventsAll');
  function get_pointerEventsAll($receiver) {
    return pointerEventsAll.getValue_lrcp0p$($receiver, pointerEventsAll_metadata);
  }
  var fontSize100;
  var fontSize100_metadata = new PropertyMetadata('fontSize100');
  function get_fontSize100($receiver) {
    return fontSize100.getValue_lrcp0p$($receiver, fontSize100_metadata);
  }
  var widthAuto;
  var widthAuto_metadata = new PropertyMetadata('widthAuto');
  function get_widthAuto($receiver) {
    return widthAuto.getValue_lrcp0p$($receiver, widthAuto_metadata);
  }
  var zIndex1;
  var zIndex1_metadata = new PropertyMetadata('zIndex1');
  function get_zIndex1($receiver) {
    return zIndex1.getValue_lrcp0p$($receiver, zIndex1_metadata);
  }
  var leftRightTopBottom0;
  var leftRightTopBottom0_metadata = new PropertyMetadata('leftRightTopBottom0');
  function get_leftRightTopBottom0($receiver) {
    return leftRightTopBottom0.getValue_lrcp0p$($receiver, leftRightTopBottom0_metadata);
  }
  var objectFitCover;
  var objectFitCover_metadata = new PropertyMetadata('objectFitCover');
  function get_objectFitCover($receiver) {
    return objectFitCover.getValue_lrcp0p$($receiver, objectFitCover_metadata);
  }
  var objectFitContain;
  var objectFitContain_metadata = new PropertyMetadata('objectFitContain');
  function get_objectFitContain($receiver) {
    return objectFitContain.getValue_lrcp0p$($receiver, objectFitContain_metadata);
  }
  var objectFitScaleDown;
  var objectFitScaleDown_metadata = new PropertyMetadata('objectFitScaleDown');
  function get_objectFitScaleDown($receiver) {
    return objectFitScaleDown.getValue_lrcp0p$($receiver, objectFitScaleDown_metadata);
  }
  function gridTemplateColumnsAuto$lambda$lambda(it) {
    return 'auto';
  }
  function gridTemplateColumnsAuto$lambda(count) {
    return 'grid-template-columns: ' + joinToString(new IntRange(1, count), ' ', void 0, void 0, void 0, void 0, gridTemplateColumnsAuto$lambda$lambda) + ';';
  }
  var gridTemplateColumnsAuto;
  var gridTemplateColumnsAuto_metadata = new PropertyMetadata('gridTemplateColumnsAuto');
  function get_gridTemplateColumnsAuto($receiver) {
    return gridTemplateColumnsAuto.getValue_lrcp0p$($receiver, gridTemplateColumnsAuto_metadata);
  }
  function width$lambda(w) {
    return 'width: ' + w + ';';
  }
  var width;
  var width_metadata = new PropertyMetadata('width');
  function get_width($receiver) {
    return width.getValue_lrcp0p$($receiver, width_metadata);
  }
  function widthEm($receiver, w) {
    return get_width($receiver)(w.toString() + 'em');
  }
  function get_width125Em($receiver) {
    return widthEm($receiver, 1.25);
  }
  function square$lambda(w) {
    return 'width: ' + w + '; height: ' + w + ';';
  }
  var square;
  var square_metadata = new PropertyMetadata('square');
  function get_square($receiver) {
    return square.getValue_lrcp0p$($receiver, square_metadata);
  }
  function squareEm($receiver, w) {
    return get_square($receiver)(w.toString() + 'em');
  }
  function get_square125Em($receiver) {
    return squareEm($receiver, 1.25);
  }
  var SvgNS;
  function SvgTagDelegate(name) {
    if (name === void 0)
      name = null;
    this.name = name;
  }
  SvgTagDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    return tagNS(thisRef, SvgNS, (tmp$ = this.name) != null ? tmp$ : property.callableName);
  };
  SvgTagDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvgTagDelegate',
    interfaces: [ReadOnlyProperty]
  };
  function svg() {
    return new SvgTagDelegate();
  }
  var svg_0;
  var svg_metadata = new PropertyMetadata('svg');
  function get_svg($receiver) {
    return svg_0.getValue_lrcp0p$($receiver, svg_metadata);
  }
  var use;
  var use_metadata = new PropertyMetadata('use');
  function get_use($receiver) {
    return use.getValue_lrcp0p$($receiver, use_metadata);
  }
  var line;
  var line_metadata = new PropertyMetadata('line');
  function get_line($receiver) {
    return line.getValue_lrcp0p$($receiver, line_metadata);
  }
  var rect;
  var rect_metadata = new PropertyMetadata('rect');
  function get_rect($receiver) {
    return rect.getValue_lrcp0p$($receiver, rect_metadata);
  }
  var circle;
  var circle_metadata = new PropertyMetadata('circle');
  function get_circle($receiver) {
    return circle.getValue_lrcp0p$($receiver, circle_metadata);
  }
  var a_0;
  var a_metadata_0 = new PropertyMetadata('a');
  function get_a_0($receiver) {
    return a_0.getValue_lrcp0p$($receiver, a_metadata_0);
  }
  var g;
  var g_metadata = new PropertyMetadata('g');
  function get_g($receiver) {
    return g.getValue_lrcp0p$($receiver, g_metadata);
  }
  var defs;
  var defs_metadata = new PropertyMetadata('defs');
  function get_defs($receiver) {
    return defs.getValue_lrcp0p$($receiver, defs_metadata);
  }
  var symbol;
  var symbol_metadata = new PropertyMetadata('symbol');
  function get_symbol($receiver) {
    return symbol.getValue_lrcp0p$($receiver, symbol_metadata);
  }
  function get_owner($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = $receiver.ownerSVGElement) != null ? tmp$_0 : Kotlin.isType(tmp$ = $receiver, SVGSVGElement) ? tmp$ : throwCCE();
  }
  function transform($receiver, fn) {
    var $receiver_0 = get_owner($receiver).createSVGTransform();
    fn($receiver_0);
    $receiver.transform.baseVal.appendItem($receiver_0);
    return $receiver_0;
  }
  function viewBox($receiver, x, y, w, h) {
    $receiver.setAttribute('viewBox', x.toString() + ' ' + y + ' ' + w + ' ' + h);
  }
  var get_classes_0 = defineInlineFunction('appsimake-domx.svgx.get_classes_npzfio$', wrapFunction(function () {
    var SvgClasses_init = _.domx.SvgClasses;
    return function ($receiver) {
      return new SvgClasses_init($receiver);
    };
  }));
  function get_cls$lambda_0(this$cls) {
    return function (it) {
      it(new SvgClasses(this$cls));
      return Unit;
    };
  }
  function get_cls_0($receiver) {
    return new Cls(get_cls$lambda_0($receiver));
  }
  function get_xlinkHref($receiver) {
    return $receiver.getAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href');
  }
  function set_xlinkHref($receiver, v) {
    if (v == null) {
      $receiver.removeAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href');
    }
     else {
      $receiver.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', v);
    }
  }
  var package$common = _.common || (_.common = {});
  package$common.hash_qfdq9h$ = hash;
  package$common.get_escape_pdl1vz$ = get_escape;
  package$common.copyToClipboard_pdl1vz$ = copyToClipboard;
  package$common.insertAt_tevjyx$ = insertAt;
  package$common.removeAt_poj3bi$ = removeAt;
  package$common.replaceAt_l17iyt$ = replaceAt;
  package$common.listen_hgi4ad$ = listen;
  package$common.listenAs_2stdkb$ = listenAs;
  package$common.listenOnce_hgi4ad$ = listenOnce;
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
  package$common.insertAt_y55kqv$ = insertAt_0;
  package$common.insertAfter_5a54o3$ = insertAfter;
  package$common.removeAt_jeu5im$ = removeAt_0;
  package$common.removeFromParent_asww5s$ = removeFromParent;
  package$common.replaceWith_fga9sf$ = replaceWith;
  package$common.attached_x64csk$ = attached;
  package$common.requestFileSystem_mif124$ = requestFileSystem;
  $$importsForInline$$['appsimake-domx'] = _;
  package$common.requestPersistentFileSystem_cjjapg$ = requestPersistentFileSystem;
  package$common.get_withQuota_nz12v2$ = get_withQuota;
  package$common.get_withQuota_yi0el1$ = get_withQuota_0;
  package$common.requestQuota_o528w6$ = requestQuota;
  package$common.UsageAndQuota = UsageAndQuota;
  package$common.queryUsageAndQuota_qs12is$ = queryUsageAndQuota;
  package$common.readAllEntries_70fqbg$ = readAllEntries;
  package$common.readEntries_e3gq6l$ = readEntries;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
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
  package$common.get_withStorage_yi0el1$ = get_withStorage;
  package$common.get_storage_yi0el1$ = get_storage;
  Object.defineProperty(package$common, 'isStorageManagerSupported', {
    get: get_isStorageManagerSupported
  });
  package$common.onInterval_a3jiyj$ = onInterval;
  Object.defineProperty(package$common, 'onResize', {
    get: get_onResize
  });
  package$common.resizeEvent_5ehnu1$ = resizeEvent;
  var package$domx = _.domx || (_.domx = {});
  package$domx.KillsApiDomx = KillsApiDomx;
  package$domx.Classes = Classes;
  package$domx.addClass_zcd9gc$ = addClass;
  package$domx.plusAssign_etbs9u$ = plusAssign_0;
  package$domx.removeClass_zcd9gc$ = removeClass;
  package$domx.minusAssign_etbs9u$ = minusAssign;
  package$domx.HtmlClasses = HtmlClasses;
  package$domx.SvgClasses = SvgClasses;
  package$domx.hasClass_mfo5j7$ = hasClass;
  package$domx.tagCreated_n4ldoh$ = tagCreated;
  package$domx.tag_vds068$ = tag;
  package$domx.tagNS_8ei2pe$ = tagNS;
  package$domx.get_classes_ejp6nk$ = get_classes;
  package$domx.set_56wq3j$ = set;
  package$domx.Attrs = Attrs;
  package$domx.get_attr_ejp6nk$ = get_attr;
  package$domx.get_ref_ejp6nk$ = get_ref;
  package$domx.base64_mf97a2$ = base64;
  package$domx.replay_cmu6zj$ = replay;
  package$domx.CssClass = CssClass;
  package$domx.toCss_pdl1vz$ = toCss;
  package$domx.CssClassProvider = CssClassProvider;
  Object.defineProperty(Cls, 'Companion', {
    get: Cls$Companion_getInstance
  });
  package$domx.Cls = Cls;
  package$domx.get_cls_ejp6nk$ = get_cls;
  package$domx.css_61zpoe$ = css;
  package$domx.css = css_0;
  package$domx.TagDelegate = TagDelegate;
  package$domx.elem_kxhmqx$ = elem;
  package$domx.elem_evuobd$ = elem_0;
  package$domx.invoke_inodcj$ = invoke;
  package$domx.rxEnabled_573ntu$ = rxEnabled;
  package$domx.rxEnabled_3afqaq$ = rxEnabled_0;
  package$domx.remAssign_9bm2zh$ = remAssign;
  package$domx.plusAssign_46n0ku$ = plusAssign_1;
  package$domx.get_div_asww5s$ = get_div;
  package$domx.get_styleTag_asww5s$ = get_styleTag;
  package$domx.get_nav_asww5s$ = get_nav;
  package$domx.get_video_asww5s$ = get_video;
  package$domx.get_li_asww5s$ = get_li;
  package$domx.get_ol_asww5s$ = get_ol;
  package$domx.get_ul_asww5s$ = get_ul;
  package$domx.get_img_asww5s$ = get_img;
  package$domx.get_strong_asww5s$ = get_strong;
  package$domx.get_pre_asww5s$ = get_pre;
  package$domx.get_source_asww5s$ = get_source;
  package$domx.get_audio_asww5s$ = get_audio;
  package$domx.get_span_asww5s$ = get_span;
  package$domx.get_a_asww5s$ = get_a;
  package$domx.get_p_asww5s$ = get_p;
  package$domx.get_button_asww5s$ = get_button;
  package$domx.get_h1_asww5s$ = get_h1;
  package$domx.get_h2_asww5s$ = get_h2;
  package$domx.get_h3_asww5s$ = get_h3;
  package$domx.get_h4_asww5s$ = get_h4;
  package$domx.get_h5_asww5s$ = get_h5;
  package$domx.get_h6_asww5s$ = get_h6;
  package$domx.get_dl_asww5s$ = get_dl;
  package$domx.get_dt_asww5s$ = get_dt;
  package$domx.get_dd_asww5s$ = get_dd;
  package$domx.get_input_asww5s$ = get_input;
  package$domx.get_form_asww5s$ = get_form;
  package$domx.get_label_asww5s$ = get_label;
  package$domx.get_textarea_asww5s$ = get_textarea;
  package$domx.get_select_asww5s$ = get_select;
  package$domx.get_option_asww5s$ = get_option;
  package$domx.on_ukchg8$ = on;
  package$domx.onClick_g3txrx$ = onClick;
  package$domx.onInput_t6tmrm$ = onInput;
  package$domx.onChange_8wu52c$ = onChange;
  var package$styles = _.styles || (_.styles = {});
  package$styles.addStyle_722sht$ = addStyle;
  package$styles.def_722sht$ = def;
  package$styles.get_cssEscape_pdl1vz$ = get_cssEscape;
  package$styles.get_minWidth0_kre7dp$ = get_minWidth0;
  package$styles.get_height0_kre7dp$ = get_height0;
  package$styles.get_lineHeightInherit_kre7dp$ = get_lineHeightInherit;
  package$styles.get_cursorPointer_kre7dp$ = get_cursorPointer;
  package$styles.get_overflowHidden_kre7dp$ = get_overflowHidden;
  package$styles.get_overflowVisible_kre7dp$ = get_overflowVisible;
  package$styles.get_scrollVertical_kre7dp$ = get_scrollVertical;
  package$styles.get_scrollHorizontal_kre7dp$ = get_scrollHorizontal;
  package$styles.get_dGrid_kre7dp$ = get_dGrid;
  package$styles.get_alignContentCenter_kre7dp$ = get_alignContentCenter;
  package$styles.get_gridAutoFlowRow_kre7dp$ = get_gridAutoFlowRow;
  package$styles.get_justifySelfEnd_kre7dp$ = get_justifySelfEnd;
  package$styles.get_justifySelfStart_kre7dp$ = get_justifySelfStart;
  package$styles.get_flexBasis0_kre7dp$ = get_flexBasis0;
  package$styles.get_pointerEventsNone_kre7dp$ = get_pointerEventsNone;
  package$styles.get_pointerEventsAll_kre7dp$ = get_pointerEventsAll;
  package$styles.get_fontSize100_kre7dp$ = get_fontSize100;
  package$styles.get_widthAuto_kre7dp$ = get_widthAuto;
  package$styles.get_zIndex1_kre7dp$ = get_zIndex1;
  package$styles.get_leftRightTopBottom0_kre7dp$ = get_leftRightTopBottom0;
  package$styles.get_objectFitCover_kre7dp$ = get_objectFitCover;
  package$styles.get_objectFitContain_kre7dp$ = get_objectFitContain;
  package$styles.get_objectFitScaleDown_kre7dp$ = get_objectFitScaleDown;
  package$styles.get_gridTemplateColumnsAuto_kre7dp$ = get_gridTemplateColumnsAuto;
  package$styles.get_width_kre7dp$ = get_width;
  package$styles.widthEm_w4izlt$ = widthEm;
  package$styles.get_width125Em_kre7dp$ = get_width125Em;
  package$styles.get_square_kre7dp$ = get_square;
  package$styles.squareEm_w4izlt$ = squareEm;
  package$styles.get_square125Em_kre7dp$ = get_square125Em;
  var package$svgx = _.svgx || (_.svgx = {});
  package$svgx.get_svg_asww5s$ = get_svg;
  package$svgx.get_use_asww5s$ = get_use;
  package$svgx.get_line_asww5s$ = get_line;
  package$svgx.get_rect_asww5s$ = get_rect;
  package$svgx.get_circle_asww5s$ = get_circle;
  package$svgx.get_a_asww5s$ = get_a_0;
  package$svgx.get_g_asww5s$ = get_g;
  package$svgx.get_defs_asww5s$ = get_defs;
  package$svgx.get_symbol_asww5s$ = get_symbol;
  package$svgx.get_owner_npzfio$ = get_owner;
  package$svgx.transform_udgqj7$ = transform;
  package$svgx.viewBox_wedmho$ = viewBox;
  package$svgx.get_classes_npzfio$ = get_classes_0;
  package$svgx.get_cls_npzfio$ = get_cls_0;
  package$svgx.get_xlinkHref_rqkhp$ = get_xlinkHref;
  package$svgx.set_xlinkHref_15dcce$ = set_xlinkHref;
  KillsApiDomx.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  KillsApiDomx.prototype.get_oldKilled_vsdo34$ = KillsApi.prototype.get_oldKilled_vsdo34$;
  KillsApiDomx.prototype.get_oldKilledOpt_vsdo34$ = KillsApi.prototype.get_oldKilledOpt_vsdo34$;
  KillsApiDomx.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  KillsApiDomx.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  KillsApiDomx.prototype.rx_wgabca$ = KillsApi.prototype.rx_wgabca$;
  KillsApiDomx.prototype.rx_djv61p$ = KillsApi.prototype.rx_djv61p$;
  KillsApiDomx.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  KillsApiDomx.prototype.feedTo_9o5f67$ = KillsApi.prototype.feedTo_9o5f67$;
  KillsApiDomx.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  KillsApiDomx.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  KillsApiDomx.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  KillsApiDomx.prototype.forEachLater_xwzbbo$ = KillsApi.prototype.forEachLater_xwzbbo$;
  KillsApiDomx.prototype.incremented_eoy9qo$ = KillsApi.prototype.incremented_eoy9qo$;
  KillsApiDomx.prototype.linked_n1nom7$ = KillsApi.prototype.linked_n1nom7$;
  KillsApiDomx.prototype.listen_ubid8w$ = KillsApi.prototype.listen_ubid8w$;
  KillsApiDomx.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  KillsApiDomx.prototype.mapLive_1mq1ue$ = KillsApi.prototype.mapLive_1mq1ue$;
  KillsApiDomx.prototype.plusAssign_ubid8w$ = KillsApi.prototype.plusAssign_ubid8w$;
  KillsApiDomx.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  KillsApiDomx.prototype.remAssign_wgabca$ = KillsApi.prototype.remAssign_wgabca$;
  KillsApiDomx.prototype.remAssign_djv61p$ = KillsApi.prototype.remAssign_djv61p$;
  KillsApiDomx.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  KillsApiDomx.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  KillsApiDomx.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  KillsApiDomx.prototype.toChannel_z5dyp2$ = KillsApi.prototype.toChannel_z5dyp2$;
  KillsApiDomx.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  KillsApiDomx.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  isFileSystemSupported = lazy(isFileSystemSupported$lambda);
  isStorageManagerSupported = lazy(isStorageManagerSupported$lambda);
  onResize = lazy(onResize$lambda);
  nextId = 0;
  div = elem();
  styleTag = elem_0('style');
  nav = elem();
  video = elem();
  li = elem();
  ol = elem();
  ul = elem();
  img = elem();
  strong = elem();
  pre = elem();
  source = elem();
  audio = elem();
  span = elem();
  a = elem();
  p = elem();
  button = elem();
  h1 = elem();
  h2 = elem();
  h3 = elem();
  h4 = elem();
  h5 = elem();
  h6 = elem();
  dl = elem();
  dt = elem();
  dd = elem();
  input = elem();
  form = elem();
  label = elem();
  textarea = elem();
  select = elem();
  option = elem();
  styleElement = lazy(styleElement$lambda);
  styleSheet = lazy(styleSheet$lambda);
  minWidth0 = def('min-width: 0;');
  height0 = def('height: 0px;');
  lineHeightInherit = def('line-height: inherit;');
  cursorPointer = def('cursor: pointer;');
  overflowHidden = def('overflow: hidden;');
  overflowVisible = def('overflow: visible;');
  scrollVertical = def('overflow-y: auto;');
  scrollHorizontal = def('overflow-x: auto;');
  dGrid = def('display: grid;');
  alignContentCenter = def('align-content: center;');
  gridAutoFlowRow = def('grid-auto-flow: row;');
  justifySelfEnd = def('justify-self: end;');
  justifySelfStart = def('justify-self: start;');
  flexBasis0 = def('flex-basis: 0;');
  pointerEventsNone = def('pointer-events: none;');
  pointerEventsAll = def('pointer-events: all;');
  fontSize100 = def('font-size: 100%;');
  widthAuto = def('width: auto;');
  zIndex1 = def('z-index: 1;');
  leftRightTopBottom0 = def(trimIndent('\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n    '));
  objectFitCover = def('object-fit: cover;');
  objectFitContain = def('object-fit: contain;');
  objectFitScaleDown = def('object-fit: scale-down;');
  gridTemplateColumnsAuto = defParam(void 0, void 0, gridTemplateColumnsAuto$lambda);
  width = defParam(void 0, void 0, width$lambda);
  square = defParam(void 0, void 0, square$lambda);
  SvgNS = 'http://www.w3.org/2000/svg';
  svg_0 = svg();
  use = svg();
  line = svg();
  rect = svg();
  circle = svg();
  a_0 = svg();
  g = svg();
  defs = svg();
  symbol = svg();
  Kotlin.defineModule('appsimake-domx', _);
  return _;
}(typeof this['appsimake-domx'] === 'undefined' ? {} : this['appsimake-domx'], kotlin, this['kotlinx-coroutines-core'], this['appsimake-commonshr']);

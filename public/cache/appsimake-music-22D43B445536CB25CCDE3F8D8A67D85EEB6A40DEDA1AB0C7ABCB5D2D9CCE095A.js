if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-music'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-indexeddb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-indexeddb' was not found. Please, check whether 'appsimake-indexeddb' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-musiclib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-musiclib' was not found. Please, check whether 'appsimake-musiclib' is loaded prior to 'appsimake-music'.");
}
this['appsimake-music'] = function (_, Kotlin, $module$appsimake_fontawesome, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_commonui, $module$kotlinx_coroutines_core, $module$appsimake_indexeddb, $module$appsimake_commonshr, $module$appsimake_firebase, $module$appsimake_common, $module$appsimake_commonfb, $module$appsimake_musiclib) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Fa = $module$appsimake_fontawesome.fontawesome.Fa;
  var get_chevronDown = $module$appsimake_fontawesome.fontawesome.get_chevronDown_xml72e$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var get_btnSecondary = $module$appsimake_bootstrap.bootstrap.get_btnSecondary_kre7dp$;
  var dataToggleDropdown = $module$appsimake_bootstrap.bootstrap.dataToggleDropdown_v3gdir$;
  var faButton = $module$appsimake_commonui.commonui.faButton_jous2b$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_dropdownMenu = $module$appsimake_bootstrap.bootstrap.get_dropdownMenu_kre7dp$;
  var get_dropdownMenuRight = $module$appsimake_bootstrap.bootstrap.get_dropdownMenuRight_kre7dp$;
  var get_fa = $module$appsimake_fontawesome.fontawesome.get_fa_kre7dp$;
  var get_fileImport = $module$appsimake_fontawesome.fontawesome.get_fileImport_xml72e$;
  var getCallableRef = Kotlin.getCallableRef;
  var showClosable = $module$appsimake_commonui.commonui.showClosable_l02s0b$;
  var clickEvent = $module$appsimake_domx.domx.clickEvent_bvfv80$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var dropdownItemAnchor = $module$appsimake_bootstrap.bootstrap.dropdownItemAnchor_fahyz6$;
  var get_trashAlt = $module$appsimake_fontawesome.fontawesome.get_trashAlt_xml72e$;
  var get_textDanger = $module$appsimake_bootstrap.bootstrap.get_textDanger_kre7dp$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var clear = $module$appsimake_indexeddb.indexeddb.clear_d3rseq$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var longClick = $module$appsimake_domx.domx.longClick_j9bshf$;
  var screenLayout = $module$appsimake_commonui.commonui.screenLayout_yc4v25$;
  var await_0 = $module$appsimake_indexeddb.indexeddb.await_cgxnqj$;
  var get_bars = $module$appsimake_fontawesome.fontawesome.get_bars_xml72e$;
  var get_database = $module$appsimake_fontawesome.fontawesome.get_database_xml72e$;
  var get_listOl = $module$appsimake_fontawesome.fontawesome.get_listOl_xml72e$;
  var rxText = $module$appsimake_bootstrap.bootstrap.rxText_7fncnf$;
  var addedTo = $module$appsimake_commonshr.killable.addedTo_60he60$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var equals = Kotlin.equals;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var unboxChar = Kotlin.unboxChar;
  var toChar = Kotlin.toChar;
  var toByte = Kotlin.toByte;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var AbstractList = Kotlin.kotlin.collections.AbstractList;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var toCharArray = Kotlin.kotlin.collections.toCharArray_rr68x$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var plus = Kotlin.kotlin.collections.plus_e8164j$;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var get_listGroupItem = $module$appsimake_bootstrap.bootstrap.get_listGroupItem_kre7dp$;
  var get_dl = $module$appsimake_domx.domx.get_dl_asww5s$;
  var get_dt = $module$appsimake_domx.domx.get_dt_asww5s$;
  var get_dd = $module$appsimake_domx.domx.get_dd_asww5s$;
  var rxTextOrEmpty = $module$appsimake_bootstrap.bootstrap.rxTextOrEmpty_elhwo1$;
  var Var = $module$appsimake_commonshr.rx.Var;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_klfg04$;
  var Emitter = $module$appsimake_commonshr.common.Emitter;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var plus_0 = Kotlin.kotlin.collections.plus_mydzjv$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var exists = $module$appsimake_indexeddb.indexeddb.exists_g8ohbq$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var docRef = $module$appsimake_firebase.firebase.firestore.docRef_bi4pki$;
  var put = $module$appsimake_indexeddb.indexeddb.put_ebvufo$;
  var removeFromParent = $module$appsimake_common.common.removeFromParent_asww5s$;
  var decrease = $module$appsimake_commonshr.rx.decrease_eoy9qo$;
  var toMap = Kotlin.kotlin.collections.toMap_abgq59$;
  var Throwable = Error;
  var increase = $module$appsimake_commonshr.rx.increase_eoy9qo$;
  var get_chevronLeft = $module$appsimake_fontawesome.fontawesome.get_chevronLeft_xml72e$;
  var Cls = $module$appsimake_domx.domx.Cls;
  var get_btnDanger = $module$appsimake_bootstrap.bootstrap.get_btnDanger_kre7dp$;
  var rxClass = $module$appsimake_commonshr.rx.rxClass_z8puye$;
  var get_flexRow = $module$appsimake_bootstrap.bootstrap.get_flexRow_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_m2 = $module$appsimake_bootstrap.bootstrap.get_m2_kre7dp$;
  var get_badge = $module$appsimake_bootstrap.bootstrap.get_badge_kre7dp$;
  var get_badgePill = $module$appsimake_bootstrap.bootstrap.get_badgePill_kre7dp$;
  var get_badgeWarning = $module$appsimake_bootstrap.bootstrap.get_badgeWarning_kre7dp$;
  var rxDisplayed = $module$appsimake_domx.domx.rxDisplayed_ux9tev$;
  var get_btnGroup = $module$appsimake_bootstrap.bootstrap.get_btnGroup_kre7dp$;
  var get_ban = $module$appsimake_fontawesome.fontawesome.get_ban_xml72e$;
  var get_btnWarning = $module$appsimake_bootstrap.bootstrap.get_btnWarning_kre7dp$;
  var rxEnabled = $module$appsimake_domx.domx.rxEnabled_11uc4k$;
  var get_btnPrimary = $module$appsimake_bootstrap.bootstrap.get_btnPrimary_kre7dp$;
  var get_dFlex = $module$appsimake_bootstrap.bootstrap.get_dFlex_kre7dp$;
  var get_flexColumn = $module$appsimake_bootstrap.bootstrap.get_flexColumn_kre7dp$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_kre7dp$;
  var get_borderBottom = $module$appsimake_bootstrap.bootstrap.get_borderBottom_kre7dp$;
  var get_folder = $module$appsimake_fontawesome.fontawesome.get_folder_xml72e$;
  var get_active = $module$appsimake_bootstrap.bootstrap.get_active_kre7dp$;
  var rxClass_0 = $module$appsimake_commonshr.rx.rxClass_3s5dpe$;
  var get_file = $module$appsimake_fontawesome.fontawesome.get_file_xml72e$;
  var get_input = $module$appsimake_domx.domx.get_input_asww5s$;
  var get_formControlFile = $module$appsimake_bootstrap.bootstrap.get_formControlFile_kre7dp$;
  var get_widthAuto = $module$appsimake_domx.styles.get_widthAuto_kre7dp$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var changeEvent = $module$appsimake_domx.domx.changeEvent_e6qnhl$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var get_scrollVertical = $module$appsimake_domx.styles.get_scrollVertical_kre7dp$;
  var get_listGroup = $module$appsimake_bootstrap.bootstrap.get_listGroup_kre7dp$;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var get_indexedDB = $module$appsimake_indexeddb.indexeddb.get_indexedDB_xhrung$;
  var L2 = Kotlin.Long.fromInt(2);
  var throwCCE = Kotlin.throwCCE;
  var Killables = $module$appsimake_commonshr.killable.Killables;
  var LoggingInCtx_init = $module$appsimake_commonfb.commonfb.LoggingInCtx_init_nruni5$;
  var LoggingInCtx = $module$appsimake_commonfb.commonfb.LoggingInCtx;
  var musiclib = $module$appsimake_musiclib.musiclib;
  var LoggedInCtx = $module$appsimake_commonfb.commonfb.LoggedInCtx;
  var get_storage = $module$appsimake_musiclib.musiclib.get_storage_lzzonv$;
  var get_songs = $module$appsimake_musiclib.musiclib.get_songs_lzzonv$;
  var collectionRef = $module$appsimake_firebase.firebase.firestore.collectionRef_nabv8k$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var plus_1 = Kotlin.kotlin.collections.plus_khz7k3$;
  var idDiffs = $module$appsimake_firebase.firebase.firestore.idDiffs_d0m7p1$;
  var await_1 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var replace = Kotlin.kotlin.text.replace_r2fvfm$;
  var get_audio = $module$appsimake_domx.domx.get_audio_asww5s$;
  var get_border = $module$appsimake_bootstrap.bootstrap.get_border_kre7dp$;
  var get_rounded = $module$appsimake_bootstrap.bootstrap.get_rounded_kre7dp$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var get_btnOutlinePrimary = $module$appsimake_bootstrap.bootstrap.get_btnOutlinePrimary_kre7dp$;
  var get_stepBackward = $module$appsimake_fontawesome.fontawesome.get_stepBackward_xml72e$;
  var get_play = $module$appsimake_fontawesome.fontawesome.get_play_xml72e$;
  var get_pause = $module$appsimake_fontawesome.fontawesome.get_pause_xml72e$;
  var get_stop = $module$appsimake_fontawesome.fontawesome.get_stop_xml72e$;
  var get_stepForward = $module$appsimake_fontawesome.fontawesome.get_stepForward_xml72e$;
  var get_plus = $module$appsimake_fontawesome.fontawesome.get_plus_xml72e$;
  var get_btnOutlineSuccess = $module$appsimake_bootstrap.bootstrap.get_btnOutlineSuccess_kre7dp$;
  var clickItemButtons = $module$appsimake_bootstrap.bootstrap.clickItemButtons_vdnn27$;
  var UserSongState = $module$appsimake_musiclib.musiclib.UserSongState;
  var getAllKeys = $module$appsimake_indexeddb.indexeddb.getAllKeys_5ircvw$;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var common = $module$appsimake_commonshr.common;
  var Some = $module$appsimake_commonshr.common.Some;
  var QueryCache = $module$appsimake_firebase.firebase.QueryCache;
  var StoreState = $module$appsimake_musiclib.musiclib.StoreState;
  var then = $module$appsimake_indexeddb.indexeddb.then_wi5cyq$;
  var get_h5 = $module$appsimake_domx.domx.get_h5_asww5s$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Mp3File = $module$appsimake_musiclib.musiclib.Mp3File;
  var setOptionsMerge = $module$appsimake_firebase.firebase.firestore.setOptionsMerge;
  var ListenableMutableList = $module$appsimake_common.common.ListenableMutableList;
  var ListenableList$Listener = $module$appsimake_common.common.ListenableList.Listener;
  var query = $module$appsimake_firebase.firebase.firestore.query_vhmfed$;
  var ListenConfig = $module$appsimake_firebase.firebase.firestore.ListenConfig;
  var listen = $module$appsimake_firebase.firebase.firestore.listen_3m6zjo$;
  var UserSong = $module$appsimake_musiclib.musiclib.UserSong;
  var get_private = $module$appsimake_commonshr.commonlib.get_private_6l3wi3$;
  var get_usersongs = $module$appsimake_musiclib.musiclib.get_usersongs_13xn5r$;
  asList$ObjectLiteral.prototype = Object.create(AbstractList.prototype);
  asList$ObjectLiteral.prototype.constructor = asList$ObjectLiteral;
  asUint16List$ObjectLiteral.prototype = Object.create(AbstractList.prototype);
  asUint16List$ObjectLiteral.prototype.constructor = asUint16List$ObjectLiteral;
  Encoding$ISO_8859_1.prototype = Object.create(Encoding.prototype);
  Encoding$ISO_8859_1.prototype.constructor = Encoding$ISO_8859_1;
  Encoding$UTF_16.prototype = Object.create(Encoding.prototype);
  Encoding$UTF_16.prototype.constructor = Encoding$UTF_16;
  Encoding$UTF_16BE.prototype = Object.create(Encoding.prototype);
  Encoding$UTF_16BE.prototype.constructor = Encoding$UTF_16BE;
  Encoding$UTF_8.prototype = Object.create(Encoding.prototype);
  Encoding$UTF_8.prototype.constructor = Encoding$UTF_8;
  FileType$File.prototype = Object.create(FileType.prototype);
  FileType$File.prototype.constructor = FileType$File;
  FileType$Folder.prototype = Object.create(FileType.prototype);
  FileType$Folder.prototype.constructor = FileType$Folder;
  Event$Load.prototype = Object.create(Event.prototype);
  Event$Load.prototype.constructor = Event$Load;
  Event$ProcessEnd.prototype = Object.create(Event.prototype);
  Event$ProcessEnd.prototype.constructor = Event$ProcessEnd;
  Event$Cancel.prototype = Object.create(Event.prototype);
  Event$Cancel.prototype.constructor = Event$Cancel;
  Event$Import.prototype = Object.create(Event.prototype);
  Event$Import.prototype.constructor = Event$Import;
  Event$Close.prototype = Object.create(Event.prototype);
  Event$Close.prototype.constructor = Event$Close;
  import$lambda$Exit.prototype = Object.create(Throwable.prototype);
  import$lambda$Exit.prototype.constructor = import$lambda$Exit;
  main$lambda$ObjectLiteral.prototype = Object.create(LoggingInCtx.prototype);
  main$lambda$ObjectLiteral.prototype.constructor = main$lambda$ObjectLiteral;
  MusicCtx.prototype = Object.create(LoggedInCtx.prototype);
  MusicCtx.prototype.constructor = MusicCtx;
  Player$Status$Stopped.prototype = Object.create(Player$Status.prototype);
  Player$Status$Stopped.prototype.constructor = Player$Status$Stopped;
  Player$Status$Playing.prototype = Object.create(Player$Status.prototype);
  Player$Status$Playing.prototype.constructor = Player$Status$Playing;
  Player$Status$Paused.prototype = Object.create(Player$Status.prototype);
  Player$Status$Paused.prototype.constructor = Player$Status$Paused;
  Player$Event$Play.prototype = Object.create(Player$Event.prototype);
  Player$Event$Play.prototype.constructor = Player$Event$Play;
  Player$Event$Pause.prototype = Object.create(Player$Event.prototype);
  Player$Event$Pause.prototype.constructor = Player$Event$Pause;
  Player$Event$Stop.prototype = Object.create(Player$Event.prototype);
  Player$Event$Stop.prototype.constructor = Player$Event$Stop;
  Player$Event$Next.prototype = Object.create(Player$Event.prototype);
  Player$Event$Next.prototype.constructor = Player$Event$Next;
  Player$Event$Previous.prototype = Object.create(Player$Event.prototype);
  Player$Event$Previous.prototype.constructor = Player$Event$Previous;
  function database$lambda$redisplay(closure$panel, this$) {
    return function () {
      closure$panel.setRoot_b3w3xb$(this$);
    };
  }
  function database$lambda$lambda$lambda$lambda($receiver) {
    $receiver.innerText = 'Database';
    return Unit;
  }
  function database$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_m1($receiver);
    get_btnSecondary($receiver);
    return Unit;
  }
  function database$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(database$lambda$lambda$lambda$lambda$lambda$lambda);
    dataToggleDropdown($receiver);
    return Unit;
  }
  function database$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    get_dropdownMenu($receiver);
    get_dropdownMenuRight($receiver);
    return Unit;
  }
  function database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$panel, this$database) {
    return function (ks, cl) {
      import_0(this$database, closure$panel.sub(), ks, cl);
      return Unit;
    };
  }
  function database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$killables, closure$panel, this$database, closure$redisplay) {
    return function (it) {
      showClosable(closure$killables, database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$panel, this$database), getCallableRef('redisplay', function () {
        return closure$redisplay(), Unit;
      }));
      return Unit;
    };
  }
  function database$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$killables, closure$panel, this$database, closure$redisplay) {
    return function ($receiver) {
      clickEvent($receiver, database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$killables, closure$panel, this$database, closure$redisplay));
      return Unit;
    };
  }
  function database$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$killables, closure$panel, this$database, closure$redisplay) {
    return function ($receiver) {
      get_fileImport(get_fa(get_cls($receiver.icon)));
      $receiver.text.innerText = 'Import MP3s';
      invoke($receiver.anchor, database$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$killables, closure$panel, this$database, closure$redisplay));
      return Unit;
    };
  }
  function database$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    get_trashAlt(get_fa($receiver));
    return Unit;
  }
  function database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    get_textDanger($receiver);
    return Unit;
  }
  function database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$database_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$database_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$database_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$database = this$database_0;
  }
  Coroutine$database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = clear(this.local$this$database.idb, get_Mp3Store(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$database.dbStatus.reset(this);
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
  function database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$database, closure$menu) {
    return function () {
      launch(coroutines.GlobalScope, void 0, void 0, database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$database));
      removeClass(closure$menu, ['show']);
      return Unit;
    };
  }
  function database$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$database, closure$menu) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      longClick($receiver, database$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$database, closure$menu));
      return Unit;
    };
  }
  function database$lambda$lambda$lambda$lambda$lambda$lambda_2(this$database, closure$menu) {
    return function ($receiver) {
      get_cls($receiver.icon).invoke_cr52h1$(database$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      $receiver.text.innerText = 'Purge Local Database';
      invoke($receiver.anchor, database$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$database, closure$menu));
      return Unit;
    };
  }
  function database$lambda$lambda$lambda$lambda$lambda_0(closure$killables, closure$panel, this$database, closure$redisplay) {
    return function ($receiver) {
      var menu = $receiver;
      get_cls($receiver).invoke_cr52h1$(database$lambda$lambda$lambda$lambda$lambda$lambda_0);
      dropdownItemAnchor($receiver, database$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$killables, closure$panel, this$database, closure$redisplay));
      dropdownItemAnchor($receiver, database$lambda$lambda$lambda$lambda$lambda$lambda_2(this$database, menu));
      return Unit;
    };
  }
  function database$lambda$lambda$lambda$lambda_0(closure$killables, closure$panel, this$database, closure$redisplay) {
    return function ($receiver) {
      faButton($receiver, get_chevronDown(Fa.Companion), database$lambda$lambda$lambda$lambda$lambda);
      invoke(get_div($receiver), database$lambda$lambda$lambda$lambda$lambda_0(closure$killables, closure$panel, this$database, closure$redisplay));
      return Unit;
    };
  }
  function database$lambda$lambda$lambda(closure$close, closure$killables, closure$panel, this$database, closure$redisplay) {
    return function ($receiver) {
      $receiver.backButton_o14v8n$(closure$close);
      $receiver.middleTitle_9f50g3$(database$lambda$lambda$lambda$lambda);
      $receiver.right.invoke_gk6m2q$(database$lambda$lambda$lambda$lambda_0(closure$killables, closure$panel, this$database, closure$redisplay));
      return Unit;
    };
  }
  function database$lambda$lambda$lambda_0(closure$killables, this$database) {
    return function ($receiver) {
      $receiver.appendChild(status(this$database, closure$killables));
      return Unit;
    };
  }
  function database$lambda$lambda(closure$close, closure$killables, closure$panel, this$database, closure$redisplay) {
    return function ($receiver) {
      $receiver.top_vesf63$(database$lambda$lambda$lambda(closure$close, closure$killables, closure$panel, this$database, closure$redisplay));
      invoke($receiver.main, database$lambda$lambda$lambda_0(closure$killables, this$database));
      return Unit;
    };
  }
  function database$lambda(closure$panel, closure$killables, closure$close, this$database) {
    return function ($receiver) {
      var redisplay = database$lambda$redisplay(closure$panel, $receiver);
      screenLayout($receiver, closure$killables, database$lambda$lambda(closure$close, closure$killables, closure$panel, this$database, redisplay));
      return Unit;
    };
  }
  function database($receiver, panel, killables, close) {
    panel.newRoot_iw61es$(database$lambda(panel, killables, close, $receiver));
  }
  function readMp3Store($receiver) {
    return $receiver.transaction(get_Mp3Store()).objectStore(get_Mp3Store());
  }
  function readMp3($receiver, hash, continuation) {
    return await_0(readMp3Store($receiver).get(hash), continuation);
  }
  function home$lambda(this$home_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$home$lambda(this$home_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$home$lambda(this$home_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$home = this$home_0;
  }
  Coroutine$home$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$home$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$home$lambda.prototype.constructor = Coroutine$home$lambda;
  Coroutine$home$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$home.playlist.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function home$lambda$redisplay(closure$panel, this$) {
    return function () {
      closure$panel.setRoot_b3w3xb$(this$);
    };
  }
  function home$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_m1($receiver);
    get_btnSecondary($receiver);
    return Unit;
  }
  function home$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(home$lambda$lambda$lambda$lambda$lambda$lambda);
    dataToggleDropdown($receiver);
    return Unit;
  }
  function home$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    get_dropdownMenu($receiver);
    return Unit;
  }
  function home$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$panel, this$home) {
    return function (ks, cl) {
      database(this$home, closure$panel.sub(), ks, cl);
      return Unit;
    };
  }
  function home$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$killables, closure$panel, this$home, closure$redisplay) {
    return function (it) {
      showClosable(closure$killables, home$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$panel, this$home), getCallableRef('redisplay', function () {
        return closure$redisplay(), Unit;
      }));
      return Unit;
    };
  }
  function home$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$killables, closure$panel, this$home, closure$redisplay) {
    return function ($receiver) {
      clickEvent($receiver, home$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$killables, closure$panel, this$home, closure$redisplay));
      return Unit;
    };
  }
  function home$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$killables, closure$panel, this$home, closure$redisplay) {
    return function ($receiver) {
      get_database(get_fa(get_cls($receiver.icon)));
      $receiver.text.innerText = 'Database';
      invoke($receiver.anchor, home$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$killables, closure$panel, this$home, closure$redisplay));
      return Unit;
    };
  }
  function home$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$panel) {
    return function (ks, cl) {
      playlists(closure$panel.sub(), ks, cl);
      return Unit;
    };
  }
  function home$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$killables, closure$panel, closure$redisplay) {
    return function (it) {
      showClosable(closure$killables, home$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$panel), getCallableRef('redisplay', function () {
        return closure$redisplay(), Unit;
      }));
      return Unit;
    };
  }
  function home$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$killables, closure$panel, closure$redisplay) {
    return function ($receiver) {
      clickEvent($receiver, home$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$killables, closure$panel, closure$redisplay));
      return Unit;
    };
  }
  function home$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$killables, closure$panel, closure$redisplay) {
    return function ($receiver) {
      get_listOl(get_fa(get_cls($receiver.icon)));
      $receiver.text.innerText = 'Playlists';
      invoke($receiver.anchor, home$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$killables, closure$panel, closure$redisplay));
      return Unit;
    };
  }
  function home$lambda$lambda$lambda$lambda$lambda_0(closure$killables, closure$panel, this$home, closure$redisplay) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(home$lambda$lambda$lambda$lambda$lambda$lambda_0);
      dropdownItemAnchor($receiver, home$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$killables, closure$panel, this$home, closure$redisplay));
      dropdownItemAnchor($receiver, home$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$killables, closure$panel, closure$redisplay));
      return Unit;
    };
  }
  function home$lambda$lambda$lambda$lambda(closure$killables, closure$panel, this$home, closure$redisplay) {
    return function ($receiver) {
      faButton($receiver, get_bars(Fa.Companion), home$lambda$lambda$lambda$lambda$lambda);
      invoke(get_div($receiver), home$lambda$lambda$lambda$lambda$lambda_0(closure$killables, closure$panel, this$home, closure$redisplay));
      return Unit;
    };
  }
  function home$lambda$lambda$lambda$lambda_0(this$home) {
    return function ($receiver) {
      $receiver.innerText = this$home.fbCtx.appCtx.title;
      return Unit;
    };
  }
  function home$lambda$lambda$lambda(closure$killables, closure$panel, this$home, closure$redisplay) {
    return function ($receiver) {
      $receiver.left.invoke_gk6m2q$(home$lambda$lambda$lambda$lambda(closure$killables, closure$panel, this$home, closure$redisplay));
      $receiver.middleTitle_9f50g3$(home$lambda$lambda$lambda$lambda_0(this$home));
      return Unit;
    };
  }
  function home$lambda$lambda$lambda$lambda$lambda_1(this$home) {
    return function () {
      return this$home.appCtx.networkEffectiveType.invoke().toString();
    };
  }
  function home$lambda$lambda$lambda$lambda_1(this$home, closure$killables) {
    return function ($receiver) {
      addedTo(rxText($receiver, home$lambda$lambda$lambda$lambda$lambda_1(this$home)), closure$killables);
      return Unit;
    };
  }
  function home$lambda$lambda$lambda$lambda$lambda_2(this$home) {
    return function () {
      return this$home.appCtx.networkType.invoke().toString();
    };
  }
  function home$lambda$lambda$lambda$lambda_2(this$home, closure$killables) {
    return function ($receiver) {
      addedTo(rxText($receiver, home$lambda$lambda$lambda$lambda$lambda_2(this$home)), closure$killables);
      return Unit;
    };
  }
  function home$lambda$lambda$lambda_0(this$home, closure$killables) {
    return function ($receiver) {
      invoke(get_div($receiver), home$lambda$lambda$lambda$lambda_1(this$home, closure$killables));
      invoke(get_div($receiver), home$lambda$lambda$lambda$lambda_2(this$home, closure$killables));
      return Unit;
    };
  }
  function home$lambda$lambda(closure$killables, closure$panel, this$home, closure$redisplay) {
    return function ($receiver) {
      $receiver.top_vesf63$(home$lambda$lambda$lambda(closure$killables, closure$panel, this$home, closure$redisplay));
      invoke($receiver.main, home$lambda$lambda$lambda_0(this$home, closure$killables));
      return Unit;
    };
  }
  function home$lambda_0(closure$panel, closure$killables, this$home) {
    return function ($receiver) {
      var redisplay = home$lambda$redisplay(closure$panel, $receiver);
      screenLayout($receiver, closure$killables, home$lambda$lambda(closure$killables, closure$panel, this$home, redisplay));
      return Unit;
    };
  }
  function home($receiver, panel, killables) {
    launch(coroutines.GlobalScope, void 0, void 0, home$lambda($receiver));
    panel.newRoot_iw61es$(home$lambda_0(panel, killables, $receiver));
  }
  function ID3v1(title, artist, album, year, comment, genre) {
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.comment = comment;
    this.genre = genre;
  }
  ID3v1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ID3v1',
    interfaces: []
  };
  ID3v1.prototype.component1 = function () {
    return this.title;
  };
  ID3v1.prototype.component2 = function () {
    return this.artist;
  };
  ID3v1.prototype.component3 = function () {
    return this.album;
  };
  ID3v1.prototype.component4 = function () {
    return this.year;
  };
  ID3v1.prototype.component5 = function () {
    return this.comment;
  };
  ID3v1.prototype.component6 = function () {
    return this.genre;
  };
  ID3v1.prototype.copy_r3y0ew$ = function (title, artist, album, year, comment, genre) {
    return new ID3v1(title === void 0 ? this.title : title, artist === void 0 ? this.artist : artist, album === void 0 ? this.album : album, year === void 0 ? this.year : year, comment === void 0 ? this.comment : comment, genre === void 0 ? this.genre : genre);
  };
  ID3v1.prototype.toString = function () {
    return 'ID3v1(title=' + Kotlin.toString(this.title) + (', artist=' + Kotlin.toString(this.artist)) + (', album=' + Kotlin.toString(this.album)) + (', year=' + Kotlin.toString(this.year)) + (', comment=' + Kotlin.toString(this.comment)) + (', genre=' + Kotlin.toString(this.genre)) + ')';
  };
  ID3v1.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.artist) | 0;
    result = result * 31 + Kotlin.hashCode(this.album) | 0;
    result = result * 31 + Kotlin.hashCode(this.year) | 0;
    result = result * 31 + Kotlin.hashCode(this.comment) | 0;
    result = result * 31 + Kotlin.hashCode(this.genre) | 0;
    return result;
  };
  ID3v1.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.artist, other.artist) && Kotlin.equals(this.album, other.album) && Kotlin.equals(this.year, other.year) && Kotlin.equals(this.comment, other.comment) && Kotlin.equals(this.genre, other.genre)))));
  };
  function id3v1$str0(closure$tr) {
    return function (size) {
      var $receiver = closure$tr.string_za3lpa$(size);
      var takeWhile$result;
      takeWhile$break: do {
        var tmp$;
        tmp$ = $receiver.length;
        for (var index = 0; index < tmp$; index++) {
          if (!(unboxChar(toBoxedChar($receiver.charCodeAt(index))) !== toChar(0))) {
            takeWhile$result = $receiver.substring(0, index);
            break takeWhile$break;
          }
        }
        takeWhile$result = $receiver;
      }
       while (false);
      return takeWhile$result;
    };
  }
  function id3v1(buffer) {
    var tr = new TagReader(buffer);
    tr.pos = buffer.byteLength - 128 | 0;
    var tag = tr.string_za3lpa$(3);
    if (!equals(tag, 'TAG')) {
      throw IllegalArgumentException_init('No ID3v1 tag found.');
    }
    var str0 = id3v1$str0(tr);
    return new ID3v1(str0(30), str0(30), str0(30), str0(4), str0(30), str0(1));
  }
  function Id3Version(major, revision) {
    Id3Version$Companion_getInstance();
    this.major = major;
    this.revision = revision;
    if (!(this.major === Id3Version$Companion_getInstance().SupportedMajorVersion)) {
      var message = 'Only version ' + Id3Version$Companion_getInstance().SupportedMajorVersion + ' is supported. File contains ' + this.major + '.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (!(this.major < 255 && this.revision < 255)) {
      var message_0 = 'Invalid version number.';
      throw IllegalArgumentException_init(message_0.toString());
    }
  }
  function Id3Version$Companion() {
    Id3Version$Companion_instance = this;
    this.SupportedMajorVersion = toByte(3);
  }
  Id3Version$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Id3Version$Companion_instance = null;
  function Id3Version$Companion_getInstance() {
    if (Id3Version$Companion_instance === null) {
      new Id3Version$Companion();
    }
    return Id3Version$Companion_instance;
  }
  Id3Version.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Id3Version',
    interfaces: []
  };
  Id3Version.prototype.component1 = function () {
    return this.major;
  };
  Id3Version.prototype.component2 = function () {
    return this.revision;
  };
  Id3Version.prototype.copy_5gdoe6$ = function (major, revision) {
    return new Id3Version(major === void 0 ? this.major : major, revision === void 0 ? this.revision : revision);
  };
  Id3Version.prototype.toString = function () {
    return 'Id3Version(major=' + Kotlin.toString(this.major) + (', revision=' + Kotlin.toString(this.revision)) + ')';
  };
  Id3Version.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.major) | 0;
    result = result * 31 + Kotlin.hashCode(this.revision) | 0;
    return result;
  };
  Id3Version.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.major, other.major) && Kotlin.equals(this.revision, other.revision)))));
  };
  function Id3Flags(unsynchronisation, extendedHeader, experimentalIndicator, footerPresent) {
    Id3Flags$Companion_getInstance();
    this.unsynchronisation = unsynchronisation;
    this.extendedHeader = extendedHeader;
    this.experimentalIndicator = experimentalIndicator;
    this.footerPresent = footerPresent;
  }
  function Id3Flags$Companion() {
    Id3Flags$Companion_instance = this;
    this.UnsynchronisationBit = 7;
    this.ExtendedHeaderBit = 6;
    this.ExperimentalIndicatorBit = 5;
    this.FooterPresentBit = 4;
  }
  function Id3Flags$Companion$of$bit(closure$unchecked) {
    return function (bit) {
      var test = 1 << bit;
      var result = (closure$unchecked.v & test) !== 0;
      closure$unchecked.v = closure$unchecked.v & ~test;
      return result;
    };
  }
  Id3Flags$Companion.prototype.of_s8j3t7$ = function (flags) {
    var unchecked = {v: flags};
    var bit = Id3Flags$Companion$of$bit(unchecked);
    var $receiver = new Id3Flags(bit(this.UnsynchronisationBit), bit(this.ExtendedHeaderBit), bit(this.ExperimentalIndicatorBit), bit(this.FooterPresentBit));
    if (!(unchecked.v === 0)) {
      var message = 'Used flags not cleared';
      throw IllegalArgumentException_init(message.toString());
    }
    return $receiver;
  };
  Id3Flags$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Id3Flags$Companion_instance = null;
  function Id3Flags$Companion_getInstance() {
    if (Id3Flags$Companion_instance === null) {
      new Id3Flags$Companion();
    }
    return Id3Flags$Companion_instance;
  }
  Id3Flags.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Id3Flags',
    interfaces: []
  };
  Id3Flags.prototype.component1 = function () {
    return this.unsynchronisation;
  };
  Id3Flags.prototype.component2 = function () {
    return this.extendedHeader;
  };
  Id3Flags.prototype.component3 = function () {
    return this.experimentalIndicator;
  };
  Id3Flags.prototype.component4 = function () {
    return this.footerPresent;
  };
  Id3Flags.prototype.copy_nyyhg$ = function (unsynchronisation, extendedHeader, experimentalIndicator, footerPresent) {
    return new Id3Flags(unsynchronisation === void 0 ? this.unsynchronisation : unsynchronisation, extendedHeader === void 0 ? this.extendedHeader : extendedHeader, experimentalIndicator === void 0 ? this.experimentalIndicator : experimentalIndicator, footerPresent === void 0 ? this.footerPresent : footerPresent);
  };
  Id3Flags.prototype.toString = function () {
    return 'Id3Flags(unsynchronisation=' + Kotlin.toString(this.unsynchronisation) + (', extendedHeader=' + Kotlin.toString(this.extendedHeader)) + (', experimentalIndicator=' + Kotlin.toString(this.experimentalIndicator)) + (', footerPresent=' + Kotlin.toString(this.footerPresent)) + ')';
  };
  Id3Flags.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.unsynchronisation) | 0;
    result = result * 31 + Kotlin.hashCode(this.extendedHeader) | 0;
    result = result * 31 + Kotlin.hashCode(this.experimentalIndicator) | 0;
    result = result * 31 + Kotlin.hashCode(this.footerPresent) | 0;
    return result;
  };
  Id3Flags.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.unsynchronisation, other.unsynchronisation) && Kotlin.equals(this.extendedHeader, other.extendedHeader) && Kotlin.equals(this.experimentalIndicator, other.experimentalIndicator) && Kotlin.equals(this.footerPresent, other.footerPresent)))));
  };
  function FrameFlags(tagAlterPreservation, fileAlterPreservation, readOnly, groupingIdentity, compression, encryption, unsynchronisation, dataLengthIndicator) {
    FrameFlags$Companion_getInstance();
    this.tagAlterPreservation = tagAlterPreservation;
    this.fileAlterPreservation = fileAlterPreservation;
    this.readOnly = readOnly;
    this.groupingIdentity = groupingIdentity;
    this.compression = compression;
    this.encryption = encryption;
    this.unsynchronisation = unsynchronisation;
    this.dataLengthIndicator = dataLengthIndicator;
  }
  function FrameFlags$Companion() {
    FrameFlags$Companion_instance = this;
  }
  function FrameFlags$Companion$of$bit(closure$unchecked) {
    return function (bit) {
      var test = 1 << bit;
      var result = (closure$unchecked.v & test) !== 0;
      closure$unchecked.v = closure$unchecked.v & ~test;
      return result;
    };
  }
  FrameFlags$Companion.prototype.of_5gdoe6$ = function (b1, b2) {
    var unchecked = {v: b1 << 8 | b2};
    var bit = FrameFlags$Companion$of$bit(unchecked);
    var $receiver = new FrameFlags(bit(14), bit(13), bit(12), bit(6), bit(3), bit(2), bit(1), bit(0));
    if (!(unchecked.v === 0)) {
      var message = 'Used flags not cleared';
      throw IllegalArgumentException_init(message.toString());
    }
    return $receiver;
  };
  FrameFlags$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FrameFlags$Companion_instance = null;
  function FrameFlags$Companion_getInstance() {
    if (FrameFlags$Companion_instance === null) {
      new FrameFlags$Companion();
    }
    return FrameFlags$Companion_instance;
  }
  FrameFlags.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameFlags',
    interfaces: []
  };
  FrameFlags.prototype.component1 = function () {
    return this.tagAlterPreservation;
  };
  FrameFlags.prototype.component2 = function () {
    return this.fileAlterPreservation;
  };
  FrameFlags.prototype.component3 = function () {
    return this.readOnly;
  };
  FrameFlags.prototype.component4 = function () {
    return this.groupingIdentity;
  };
  FrameFlags.prototype.component5 = function () {
    return this.compression;
  };
  FrameFlags.prototype.component6 = function () {
    return this.encryption;
  };
  FrameFlags.prototype.component7 = function () {
    return this.unsynchronisation;
  };
  FrameFlags.prototype.component8 = function () {
    return this.dataLengthIndicator;
  };
  FrameFlags.prototype.copy_aby97w$ = function (tagAlterPreservation, fileAlterPreservation, readOnly, groupingIdentity, compression, encryption, unsynchronisation, dataLengthIndicator) {
    return new FrameFlags(tagAlterPreservation === void 0 ? this.tagAlterPreservation : tagAlterPreservation, fileAlterPreservation === void 0 ? this.fileAlterPreservation : fileAlterPreservation, readOnly === void 0 ? this.readOnly : readOnly, groupingIdentity === void 0 ? this.groupingIdentity : groupingIdentity, compression === void 0 ? this.compression : compression, encryption === void 0 ? this.encryption : encryption, unsynchronisation === void 0 ? this.unsynchronisation : unsynchronisation, dataLengthIndicator === void 0 ? this.dataLengthIndicator : dataLengthIndicator);
  };
  FrameFlags.prototype.toString = function () {
    return 'FrameFlags(tagAlterPreservation=' + Kotlin.toString(this.tagAlterPreservation) + (', fileAlterPreservation=' + Kotlin.toString(this.fileAlterPreservation)) + (', readOnly=' + Kotlin.toString(this.readOnly)) + (', groupingIdentity=' + Kotlin.toString(this.groupingIdentity)) + (', compression=' + Kotlin.toString(this.compression)) + (', encryption=' + Kotlin.toString(this.encryption)) + (', unsynchronisation=' + Kotlin.toString(this.unsynchronisation)) + (', dataLengthIndicator=' + Kotlin.toString(this.dataLengthIndicator)) + ')';
  };
  FrameFlags.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tagAlterPreservation) | 0;
    result = result * 31 + Kotlin.hashCode(this.fileAlterPreservation) | 0;
    result = result * 31 + Kotlin.hashCode(this.readOnly) | 0;
    result = result * 31 + Kotlin.hashCode(this.groupingIdentity) | 0;
    result = result * 31 + Kotlin.hashCode(this.compression) | 0;
    result = result * 31 + Kotlin.hashCode(this.encryption) | 0;
    result = result * 31 + Kotlin.hashCode(this.unsynchronisation) | 0;
    result = result * 31 + Kotlin.hashCode(this.dataLengthIndicator) | 0;
    return result;
  };
  FrameFlags.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.tagAlterPreservation, other.tagAlterPreservation) && Kotlin.equals(this.fileAlterPreservation, other.fileAlterPreservation) && Kotlin.equals(this.readOnly, other.readOnly) && Kotlin.equals(this.groupingIdentity, other.groupingIdentity) && Kotlin.equals(this.compression, other.compression) && Kotlin.equals(this.encryption, other.encryption) && Kotlin.equals(this.unsynchronisation, other.unsynchronisation) && Kotlin.equals(this.dataLengthIndicator, other.dataLengthIndicator)))));
  };
  function asList$ObjectLiteral(this$asList) {
    this.this$asList = this$asList;
    AbstractList.call(this);
  }
  Object.defineProperty(asList$ObjectLiteral.prototype, 'size', {
    get: function () {
      return this.this$asList.length;
    }
  });
  asList$ObjectLiteral.prototype.get_za3lpa$ = function (index) {
    if (index >= 0 && index <= get_lastIndex(this)) {
      return this.this$asList[index];
    }
     else
      throw new IndexOutOfBoundsException('index ' + index + ' is not in range [0..' + get_lastIndex(this) + ']');
  };
  asList$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AbstractList]
  };
  function asList_0($receiver) {
    return new asList$ObjectLiteral($receiver);
  }
  function asUint16List$ObjectLiteral(closure$arrayLength, closure$dv, closure$littleEndian) {
    this.closure$arrayLength = closure$arrayLength;
    this.closure$dv = closure$dv;
    this.closure$littleEndian = closure$littleEndian;
    AbstractList.call(this);
  }
  Object.defineProperty(asUint16List$ObjectLiteral.prototype, 'size', {
    get: function () {
      return this.closure$arrayLength / 2 | 0;
    }
  });
  asUint16List$ObjectLiteral.prototype.get_za3lpa$ = function (index) {
    if (index >= 0 && index <= get_lastIndex(this))
      return this.closure$dv.getUint16(index * 2 | 0, this.closure$littleEndian);
    else
      throw new IndexOutOfBoundsException('index ' + index + ' is not in range [0..' + get_lastIndex(this) + ']');
  };
  asUint16List$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AbstractList]
  };
  function asUint16List($receiver, littleEndian) {
    var arrayLength = $receiver.length;
    if (!(arrayLength % 2 === 0)) {
      var message = '16 bit list byte length not even: ' + arrayLength;
      throw IllegalArgumentException_init(message.toString());
    }
    var dv = new DataView($receiver.buffer, $receiver.byteOffset, $receiver.byteLength);
    return new asUint16List$ObjectLiteral(arrayLength, dv, littleEndian);
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function asSynchSafeInt($receiver) {
    var $receiver_0 = asList_0($receiver);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item);
    }
    var tmp$_0;
    var accumulator = 0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var acc = accumulator;
      if (!((element & 128) === 0)) {
        var message = 'Synchsafe bit 7 not cleared.';
        throw IllegalArgumentException_init(message.toString());
      }
      accumulator = acc << 7 | element;
    }
    return accumulator;
  }
  function asInt($receiver) {
    var dv = new DataView($receiver.buffer, $receiver.byteOffset, $receiver.byteLength);
    return dv.getInt32(0, false);
  }
  function TagReader(buffer) {
    this.uia = new Uint8Array(buffer);
    this.pos = 0;
  }
  TagReader.prototype.subarray_za3lpa$ = function (length) {
    var $receiver = this.uia.subarray(this.pos, this.pos + length | 0);
    this.pos = this.pos + length | 0;
    return $receiver;
  };
  TagReader.prototype.string_za3lpa$ = function (length) {
    return asString_0(this.subarray_za3lpa$(length));
  };
  TagReader.prototype.id3 = function () {
    var $receiver = this.string_za3lpa$(3);
    if (!equals($receiver, 'ID3')) {
      var message = 'ID3 id missing.';
      throw IllegalArgumentException_init(message.toString());
    }
    return $receiver;
  };
  TagReader.prototype.byte2_gyx1j6$ = function (fn) {
    var b2 = this.subarray_za3lpa$(2);
    return fn(b2[0], b2[1]);
  };
  TagReader.prototype.id3Version = function () {
    return this.byte2_gyx1j6$(getCallableRef('Id3Version', function (major, revision) {
      return new Id3Version(major, revision);
    }));
  };
  TagReader.prototype.byte = function () {
    var tmp$;
    return this.uia[tmp$ = this.pos, this.pos = tmp$ + 1 | 0, tmp$];
  };
  TagReader.prototype.id3Flags = function () {
    return Id3Flags$Companion_getInstance().of_s8j3t7$(this.byte());
  };
  TagReader.prototype.synchSafeInt = function () {
    return asSynchSafeInt(this.subarray_za3lpa$(4));
  };
  TagReader.prototype.int = function () {
    return asInt(this.subarray_za3lpa$(4));
  };
  TagReader.prototype.frameFlags = function () {
    return this.byte2_gyx1j6$(getCallableRef('of', function ($receiver, b1, b2) {
      return $receiver.of_5gdoe6$(b1, b2);
    }.bind(null, FrameFlags$Companion_getInstance())));
  };
  TagReader.prototype.peek_klfg04$ = function (fn) {
    var saved = this.pos;
    try {
      return fn();
    }
    finally {
      this.pos = saved;
    }
  };
  TagReader.prototype.encoding = function () {
    var b = this.byte();
    var block$result;
    block$break: do {
      switch (b) {
        case 0:
          block$result = Encoding$ISO_8859_1_getInstance();
          break block$break;
        case 1:
          block$result = Encoding$UTF_16_getInstance();
          break block$break;
        case 2:
          block$result = Encoding$UTF_16BE_getInstance();
          break block$break;
        case 4:
          block$result = Encoding$UTF_8_getInstance();
          break block$break;
        default:throw Error_init('Unknown encoding: ' + b);
      }
    }
     while (false);
    return block$result;
  };
  TagReader.prototype.strings_za3lpa$ = function (size) {
    return split(this.encoding().read_uhu100$(this.subarray_za3lpa$(size - 1 | 0)), Kotlin.charArrayOf(0));
  };
  TagReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagReader',
    interfaces: []
  };
  function Encoding() {
  }
  function Encoding$ISO_8859_1() {
    Encoding$ISO_8859_1_instance = this;
    Encoding.call(this);
  }
  Encoding$ISO_8859_1.prototype.read_uhu100$ = function (data) {
    return asString_0(data);
  };
  Encoding$ISO_8859_1.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ISO_8859_1',
    interfaces: [Encoding]
  };
  var Encoding$ISO_8859_1_instance = null;
  function Encoding$ISO_8859_1_getInstance() {
    if (Encoding$ISO_8859_1_instance === null) {
      new Encoding$ISO_8859_1();
    }
    return Encoding$ISO_8859_1_instance;
  }
  function Encoding$UTF_16() {
    Encoding$UTF_16_instance = this;
    Encoding.call(this);
  }
  Encoding$UTF_16.prototype.read_uhu100$ = function (data) {
    var tmp$;
    var b1 = data[0];
    var b2 = data[1];
    if (b1 === 255 && b2 === 254)
      tmp$ = true;
    else if (b1 === 254 && b2 === 255)
      tmp$ = false;
    else
      throw Error_init('No BOM found: ' + b1 + ' ' + b2);
    var littleEndian = tmp$;
    var $receiver = asUint16List(data.subarray(2, data.length), littleEndian);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(toBoxedChar(toChar(item)));
    }
    return asString(destination);
  };
  Encoding$UTF_16.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UTF_16',
    interfaces: [Encoding]
  };
  var Encoding$UTF_16_instance = null;
  function Encoding$UTF_16_getInstance() {
    if (Encoding$UTF_16_instance === null) {
      new Encoding$UTF_16();
    }
    return Encoding$UTF_16_instance;
  }
  function Encoding$UTF_16BE() {
    Encoding$UTF_16BE_instance = this;
    Encoding.call(this);
  }
  Encoding$UTF_16BE.prototype.read_uhu100$ = function (data) {
    var $receiver = asUint16List(data, false);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(toBoxedChar(toChar(item)));
    }
    return asString(destination);
  };
  Encoding$UTF_16BE.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UTF_16BE',
    interfaces: [Encoding]
  };
  var Encoding$UTF_16BE_instance = null;
  function Encoding$UTF_16BE_getInstance() {
    if (Encoding$UTF_16BE_instance === null) {
      new Encoding$UTF_16BE();
    }
    return Encoding$UTF_16BE_instance;
  }
  function Encoding$UTF_8() {
    Encoding$UTF_8_instance = this;
    Encoding.call(this);
  }
  Encoding$UTF_8.prototype.read_uhu100$ = function (data) {
    return decodeURIComponent(escape(asString_0(data)));
  };
  Encoding$UTF_8.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UTF_8',
    interfaces: [Encoding]
  };
  var Encoding$UTF_8_instance = null;
  function Encoding$UTF_8_getInstance() {
    if (Encoding$UTF_8_instance === null) {
      new Encoding$UTF_8();
    }
    return Encoding$UTF_8_instance;
  }
  Encoding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Encoding',
    interfaces: []
  };
  function asString($receiver) {
    var it = toCharArray($receiver);
    return String.fromCharCode.apply(null, it);
  }
  function asString_0($receiver) {
    var $receiver_0 = asList_0($receiver);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(toBoxedChar(toChar(item)));
    }
    return asString(destination);
  }
  function readAsArrayBuffer$lambda(closure$d, closure$reader) {
    return function (it) {
      return closure$d.complete_11rb$(closure$reader.result);
    };
  }
  function readAsArrayBuffer$lambda_0(closure$d) {
    return function (e) {
      return closure$d.completeExceptionally_tcv7n7$(e);
    };
  }
  function readAsArrayBuffer($receiver, continuation) {
    var d = CompletableDeferred();
    var reader = new FileReader();
    reader.onload = readAsArrayBuffer$lambda(d, reader);
    reader.onerror = readAsArrayBuffer$lambda_0(d);
    reader.readAsArrayBuffer($receiver);
    return d.await(continuation);
  }
  function id3v2_3$frame$lambda(closure$tr) {
    return function () {
      return closure$tr.byte();
    };
  }
  function id3v2_3$frame(closure$tr, closure$frameData) {
    return function () {
      if (closure$tr.peek_klfg04$(id3v2_3$frame$lambda(closure$tr)) === toByte(0)) {
        return false;
      }
      var id = closure$tr.string_za3lpa$(4);
      var fr = Frames_getInstance().all.get_11rb$(id);
      var frameSize = closure$tr.int();
      var frameFlags = closure$tr.frameFlags();
      if (fr == null) {
        console.log('Unknown frame, skipping: ' + id);
        closure$tr.pos = closure$tr.pos + frameSize | 0;
      }
       else {
        closure$frameData.v = fr.process_1imv4s$(new Frames$FrameInput(frameSize, frameFlags, closure$tr, closure$frameData.v));
      }
      return true;
    };
  }
  function id3v2_3(buffer) {
    var tr = new TagReader(buffer);
    tr.id3();
    tr.id3Version();
    var tagFlags = tr.id3Flags();
    var tagSize = tr.synchSafeInt();
    var trLimit = tr.pos + tagSize | 0;
    if (tagFlags.extendedHeader) {
      var pos = tr.pos;
      var extendedHeaderSize = tr.synchSafeInt();
      tr.pos = tr.pos + (pos + extendedHeaderSize) | 0;
    }
    var frameData = {v: new FramesData()};
    var frame = id3v2_3$frame(tr, frameData);
    while (tr.pos < trLimit && frame()) {
    }
    return frameData.v;
  }
  function FramesData(text, url, userText, comments) {
    if (text === void 0)
      text = emptyMap();
    if (url === void 0)
      url = emptyMap();
    if (userText === void 0)
      userText = emptyMap();
    if (comments === void 0)
      comments = emptyMap();
    this.text = text;
    this.url = url;
    this.userText = userText;
    this.comments = comments;
  }
  function FramesData$CommentKey(language, content) {
    this.language = language;
    this.content = content;
  }
  FramesData$CommentKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommentKey',
    interfaces: []
  };
  FramesData$CommentKey.prototype.component1 = function () {
    return this.language;
  };
  FramesData$CommentKey.prototype.component2 = function () {
    return this.content;
  };
  FramesData$CommentKey.prototype.copy_puj7f4$ = function (language, content) {
    return new FramesData$CommentKey(language === void 0 ? this.language : language, content === void 0 ? this.content : content);
  };
  FramesData$CommentKey.prototype.toString = function () {
    return 'CommentKey(language=' + Kotlin.toString(this.language) + (', content=' + Kotlin.toString(this.content)) + ')';
  };
  FramesData$CommentKey.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.language) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  FramesData$CommentKey.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.language, other.language) && Kotlin.equals(this.content, other.content)))));
  };
  FramesData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FramesData',
    interfaces: []
  };
  FramesData.prototype.component1 = function () {
    return this.text;
  };
  FramesData.prototype.component2 = function () {
    return this.url;
  };
  FramesData.prototype.component3 = function () {
    return this.userText;
  };
  FramesData.prototype.component4 = function () {
    return this.comments;
  };
  FramesData.prototype.copy_lfa25k$ = function (text, url, userText, comments) {
    return new FramesData(text === void 0 ? this.text : text, url === void 0 ? this.url : url, userText === void 0 ? this.userText : userText, comments === void 0 ? this.comments : comments);
  };
  FramesData.prototype.toString = function () {
    return 'FramesData(text=' + Kotlin.toString(this.text) + (', url=' + Kotlin.toString(this.url)) + (', userText=' + Kotlin.toString(this.userText)) + (', comments=' + Kotlin.toString(this.comments)) + ')';
  };
  FramesData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.userText) | 0;
    result = result * 31 + Kotlin.hashCode(this.comments) | 0;
    return result;
  };
  FramesData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.userText, other.userText) && Kotlin.equals(this.comments, other.comments)))));
  };
  function Frames() {
    Frames_instance = this;
    this.all = emptyMap();
    this.TPE1_8ql0dv$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TPE1_metadata);
    this.TPE2_8ql0eq$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TPE2_metadata);
    this.TPE3_8ql0fl$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TPE3_metadata);
    this.TPE4_8ql0gg$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TPE4_metadata);
    this.TIT1_8qgull$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TIT1_metadata);
    this.TIT2_8qgumg$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TIT2_metadata);
    this.TIT3_8qgunb$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TIT3_metadata);
    this.TALB_8qbl6g$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TALB_metadata);
    this.TRCK_8qm9hx$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TRCK_metadata);
    this.TYER_8qqs21$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TYER_metadata);
    this.TDRC_8qdmm2$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TDRC_metadata);
    this.TCON_8qcxnx$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TCON_metadata);
    this.TPOS_8ql8m3$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TPOS_metadata);
    this.TPUB_8qlcnm$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TPUB_metadata);
    this.TCMP_8qcw89$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TCMP_metadata);
    this.TENC_8qe6mt$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TENC_metadata);
    this.TKEY_8qhueo$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TKEY_metadata);
    this.TSOA_8qn556$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TSOA_metadata);
    this.TSOP_8qn5i3$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TSOP_metadata);
    this.TCOP_8qcxpn$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TCOP_metadata);
    this.TSRC_8qn7ez$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TSRC_metadata);
    this.TEXT_8qeege$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TEXT_metadata);
    this.TRSN_8qmlfm$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TRSN_metadata);
    this.TOPE_8qkm17$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TOPE_metadata);
    this.TOLY_8qkjjn$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TOLY_metadata);
    this.TLAN_8qie5y$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TLAN_metadata);
    this.TCOM_8qcxn2$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TCOM_metadata);
    this.TDAT_8qdaew$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TDAT_metadata);
    this.TSSE_8qn87e$_0 = this.text().provideDelegate_o0e7kf$(this, Frames$TSSE_metadata);
    this.WCOM_8s0bf5$_0 = this.url().provideDelegate_o0e7kf$(this, Frames$WCOM_metadata);
    this.APIC_8g50ia$_0 = this.skip().provideDelegate_o0e7kf$(this, Frames$APIC_metadata);
    this.GEOB_8j8vmy$_0 = this.skip().provideDelegate_o0e7kf$(this, Frames$GEOB_metadata);
    this.RVA2_8pl66e$_0 = this.skip().provideDelegate_o0e7kf$(this, Frames$RVA2_metadata);
    this.PRIV_8of7u4$_0 = this.skip().provideDelegate_o0e7kf$(this, Frames$PRIV_metadata);
    this.WXXX_8sdx2y$_0 = this.skip().provideDelegate_o0e7kf$(this, Frames$WXXX_metadata);
    this.COMM_8h81wv$_0 = this.frame_ihl4q3$(Frames$COMM$lambda).provideDelegate_o0e7kf$(this, Frames$COMM_metadata);
    this.TXXX_8qqjav$_0 = this.frame_ihl4q3$(Frames$TXXX$lambda).provideDelegate_o0e7kf$(this, Frames$TXXX_metadata);
  }
  function Frames$FrameInput(size, flags, tr, data) {
    this.size = size;
    this.flags = flags;
    this.tr = tr;
    this.data = data;
  }
  Frames$FrameInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameInput',
    interfaces: []
  };
  var Frames$TPE1_metadata = new PropertyMetadata('TPE1');
  Object.defineProperty(Frames.prototype, 'TPE1', {
    get: function () {
      return this.TPE1_8ql0dv$_0.getValue_lrcp0p$(this, Frames$TPE1_metadata);
    }
  });
  var Frames$TPE2_metadata = new PropertyMetadata('TPE2');
  Object.defineProperty(Frames.prototype, 'TPE2', {
    get: function () {
      return this.TPE2_8ql0eq$_0.getValue_lrcp0p$(this, Frames$TPE2_metadata);
    }
  });
  var Frames$TPE3_metadata = new PropertyMetadata('TPE3');
  Object.defineProperty(Frames.prototype, 'TPE3', {
    get: function () {
      return this.TPE3_8ql0fl$_0.getValue_lrcp0p$(this, Frames$TPE3_metadata);
    }
  });
  var Frames$TPE4_metadata = new PropertyMetadata('TPE4');
  Object.defineProperty(Frames.prototype, 'TPE4', {
    get: function () {
      return this.TPE4_8ql0gg$_0.getValue_lrcp0p$(this, Frames$TPE4_metadata);
    }
  });
  var Frames$TIT1_metadata = new PropertyMetadata('TIT1');
  Object.defineProperty(Frames.prototype, 'TIT1', {
    get: function () {
      return this.TIT1_8qgull$_0.getValue_lrcp0p$(this, Frames$TIT1_metadata);
    }
  });
  var Frames$TIT2_metadata = new PropertyMetadata('TIT2');
  Object.defineProperty(Frames.prototype, 'TIT2', {
    get: function () {
      return this.TIT2_8qgumg$_0.getValue_lrcp0p$(this, Frames$TIT2_metadata);
    }
  });
  var Frames$TIT3_metadata = new PropertyMetadata('TIT3');
  Object.defineProperty(Frames.prototype, 'TIT3', {
    get: function () {
      return this.TIT3_8qgunb$_0.getValue_lrcp0p$(this, Frames$TIT3_metadata);
    }
  });
  var Frames$TALB_metadata = new PropertyMetadata('TALB');
  Object.defineProperty(Frames.prototype, 'TALB', {
    get: function () {
      return this.TALB_8qbl6g$_0.getValue_lrcp0p$(this, Frames$TALB_metadata);
    }
  });
  var Frames$TRCK_metadata = new PropertyMetadata('TRCK');
  Object.defineProperty(Frames.prototype, 'TRCK', {
    get: function () {
      return this.TRCK_8qm9hx$_0.getValue_lrcp0p$(this, Frames$TRCK_metadata);
    }
  });
  var Frames$TYER_metadata = new PropertyMetadata('TYER');
  Object.defineProperty(Frames.prototype, 'TYER', {
    get: function () {
      return this.TYER_8qqs21$_0.getValue_lrcp0p$(this, Frames$TYER_metadata);
    }
  });
  var Frames$TDRC_metadata = new PropertyMetadata('TDRC');
  Object.defineProperty(Frames.prototype, 'TDRC', {
    get: function () {
      return this.TDRC_8qdmm2$_0.getValue_lrcp0p$(this, Frames$TDRC_metadata);
    }
  });
  var Frames$TCON_metadata = new PropertyMetadata('TCON');
  Object.defineProperty(Frames.prototype, 'TCON', {
    get: function () {
      return this.TCON_8qcxnx$_0.getValue_lrcp0p$(this, Frames$TCON_metadata);
    }
  });
  var Frames$TPOS_metadata = new PropertyMetadata('TPOS');
  Object.defineProperty(Frames.prototype, 'TPOS', {
    get: function () {
      return this.TPOS_8ql8m3$_0.getValue_lrcp0p$(this, Frames$TPOS_metadata);
    }
  });
  var Frames$TPUB_metadata = new PropertyMetadata('TPUB');
  Object.defineProperty(Frames.prototype, 'TPUB', {
    get: function () {
      return this.TPUB_8qlcnm$_0.getValue_lrcp0p$(this, Frames$TPUB_metadata);
    }
  });
  var Frames$TCMP_metadata = new PropertyMetadata('TCMP');
  Object.defineProperty(Frames.prototype, 'TCMP', {
    get: function () {
      return this.TCMP_8qcw89$_0.getValue_lrcp0p$(this, Frames$TCMP_metadata);
    }
  });
  var Frames$TENC_metadata = new PropertyMetadata('TENC');
  Object.defineProperty(Frames.prototype, 'TENC', {
    get: function () {
      return this.TENC_8qe6mt$_0.getValue_lrcp0p$(this, Frames$TENC_metadata);
    }
  });
  var Frames$TKEY_metadata = new PropertyMetadata('TKEY');
  Object.defineProperty(Frames.prototype, 'TKEY', {
    get: function () {
      return this.TKEY_8qhueo$_0.getValue_lrcp0p$(this, Frames$TKEY_metadata);
    }
  });
  var Frames$TSOA_metadata = new PropertyMetadata('TSOA');
  Object.defineProperty(Frames.prototype, 'TSOA', {
    get: function () {
      return this.TSOA_8qn556$_0.getValue_lrcp0p$(this, Frames$TSOA_metadata);
    }
  });
  var Frames$TSOP_metadata = new PropertyMetadata('TSOP');
  Object.defineProperty(Frames.prototype, 'TSOP', {
    get: function () {
      return this.TSOP_8qn5i3$_0.getValue_lrcp0p$(this, Frames$TSOP_metadata);
    }
  });
  var Frames$TCOP_metadata = new PropertyMetadata('TCOP');
  Object.defineProperty(Frames.prototype, 'TCOP', {
    get: function () {
      return this.TCOP_8qcxpn$_0.getValue_lrcp0p$(this, Frames$TCOP_metadata);
    }
  });
  var Frames$TSRC_metadata = new PropertyMetadata('TSRC');
  Object.defineProperty(Frames.prototype, 'TSRC', {
    get: function () {
      return this.TSRC_8qn7ez$_0.getValue_lrcp0p$(this, Frames$TSRC_metadata);
    }
  });
  var Frames$TEXT_metadata = new PropertyMetadata('TEXT');
  Object.defineProperty(Frames.prototype, 'TEXT', {
    get: function () {
      return this.TEXT_8qeege$_0.getValue_lrcp0p$(this, Frames$TEXT_metadata);
    }
  });
  var Frames$TRSN_metadata = new PropertyMetadata('TRSN');
  Object.defineProperty(Frames.prototype, 'TRSN', {
    get: function () {
      return this.TRSN_8qmlfm$_0.getValue_lrcp0p$(this, Frames$TRSN_metadata);
    }
  });
  var Frames$TOPE_metadata = new PropertyMetadata('TOPE');
  Object.defineProperty(Frames.prototype, 'TOPE', {
    get: function () {
      return this.TOPE_8qkm17$_0.getValue_lrcp0p$(this, Frames$TOPE_metadata);
    }
  });
  var Frames$TOLY_metadata = new PropertyMetadata('TOLY');
  Object.defineProperty(Frames.prototype, 'TOLY', {
    get: function () {
      return this.TOLY_8qkjjn$_0.getValue_lrcp0p$(this, Frames$TOLY_metadata);
    }
  });
  var Frames$TLAN_metadata = new PropertyMetadata('TLAN');
  Object.defineProperty(Frames.prototype, 'TLAN', {
    get: function () {
      return this.TLAN_8qie5y$_0.getValue_lrcp0p$(this, Frames$TLAN_metadata);
    }
  });
  var Frames$TCOM_metadata = new PropertyMetadata('TCOM');
  Object.defineProperty(Frames.prototype, 'TCOM', {
    get: function () {
      return this.TCOM_8qcxn2$_0.getValue_lrcp0p$(this, Frames$TCOM_metadata);
    }
  });
  var Frames$TDAT_metadata = new PropertyMetadata('TDAT');
  Object.defineProperty(Frames.prototype, 'TDAT', {
    get: function () {
      return this.TDAT_8qdaew$_0.getValue_lrcp0p$(this, Frames$TDAT_metadata);
    }
  });
  var Frames$TSSE_metadata = new PropertyMetadata('TSSE');
  Object.defineProperty(Frames.prototype, 'TSSE', {
    get: function () {
      return this.TSSE_8qn87e$_0.getValue_lrcp0p$(this, Frames$TSSE_metadata);
    }
  });
  var Frames$WCOM_metadata = new PropertyMetadata('WCOM');
  Object.defineProperty(Frames.prototype, 'WCOM', {
    get: function () {
      return this.WCOM_8s0bf5$_0.getValue_lrcp0p$(this, Frames$WCOM_metadata);
    }
  });
  var Frames$APIC_metadata = new PropertyMetadata('APIC');
  Object.defineProperty(Frames.prototype, 'APIC', {
    get: function () {
      return this.APIC_8g50ia$_0.getValue_lrcp0p$(this, Frames$APIC_metadata);
    }
  });
  var Frames$GEOB_metadata = new PropertyMetadata('GEOB');
  Object.defineProperty(Frames.prototype, 'GEOB', {
    get: function () {
      return this.GEOB_8j8vmy$_0.getValue_lrcp0p$(this, Frames$GEOB_metadata);
    }
  });
  var Frames$RVA2_metadata = new PropertyMetadata('RVA2');
  Object.defineProperty(Frames.prototype, 'RVA2', {
    get: function () {
      return this.RVA2_8pl66e$_0.getValue_lrcp0p$(this, Frames$RVA2_metadata);
    }
  });
  var Frames$PRIV_metadata = new PropertyMetadata('PRIV');
  Object.defineProperty(Frames.prototype, 'PRIV', {
    get: function () {
      return this.PRIV_8of7u4$_0.getValue_lrcp0p$(this, Frames$PRIV_metadata);
    }
  });
  var Frames$WXXX_metadata = new PropertyMetadata('WXXX');
  Object.defineProperty(Frames.prototype, 'WXXX', {
    get: function () {
      return this.WXXX_8sdx2y$_0.getValue_lrcp0p$(this, Frames$WXXX_metadata);
    }
  });
  var Frames$COMM_metadata = new PropertyMetadata('COMM');
  Object.defineProperty(Frames.prototype, 'COMM', {
    get: function () {
      return this.COMM_8h81wv$_0.getValue_lrcp0p$(this, Frames$COMM_metadata);
    }
  });
  var Frames$TXXX_metadata = new PropertyMetadata('TXXX');
  Object.defineProperty(Frames.prototype, 'TXXX', {
    get: function () {
      return this.TXXX_8qqjav$_0.getValue_lrcp0p$(this, Frames$TXXX_metadata);
    }
  });
  function Frames$Frame(name, fn) {
    this.name = name;
    this.fn = fn;
    Frames_getInstance().all = plus(Frames_getInstance().all, to(this.name, this));
  }
  Frames$Frame.prototype.process_1imv4s$ = function (input) {
    return this.fn(input);
  };
  Frames$Frame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Frame',
    interfaces: []
  };
  function Frames$FrameProvider(fn) {
    this.fn = fn;
  }
  function Frames$FrameProvider$provideDelegate$lambda(this$FrameProvider, closure$name) {
    return function (fi) {
      return this$FrameProvider.fn(closure$name, fi);
    };
  }
  function Frames$FrameProvider$provideDelegate$ObjectLiteral(closure$frame) {
    this.closure$frame = closure$frame;
  }
  Frames$FrameProvider$provideDelegate$ObjectLiteral.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.closure$frame;
  };
  Frames$FrameProvider$provideDelegate$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReadOnlyProperty]
  };
  Frames$FrameProvider.prototype.provideDelegate_o0e7kf$ = function (thisRef, prop) {
    var name = prop.callableName;
    var frame = new Frames$Frame(name, Frames$FrameProvider$provideDelegate$lambda(this, name));
    return new Frames$FrameProvider$provideDelegate$ObjectLiteral(frame);
  };
  Frames$FrameProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameProvider',
    interfaces: []
  };
  Frames.prototype.frame_ihl4q3$ = function (fn) {
    return new Frames$FrameProvider(fn);
  };
  var Map = Kotlin.kotlin.collections.Map;
  function Frames$url$lambda(name, input) {
    var d = input.data;
    var $receiver = d.url;
    var tmp$;
    if (!!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(name)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return d.copy_lfa25k$(void 0, plus(d.url, to(name, input.tr.string_za3lpa$(input.size))));
  }
  Frames.prototype.url = function () {
    return this.frame_ihl4q3$(Frames$url$lambda);
  };
  function Frames$text$lambda(name, input) {
    var d = input.data;
    var $receiver = d.text;
    var tmp$;
    if (!!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(name)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return d.copy_lfa25k$(plus(d.text, to(name, input.tr.strings_za3lpa$(input.size))));
  }
  Frames.prototype.text = function () {
    return this.frame_ihl4q3$(Frames$text$lambda);
  };
  function Frames$skip$lambda(f, input) {
    var tmp$;
    tmp$ = input.tr;
    tmp$.pos = tmp$.pos + input.size | 0;
    return input.data;
  }
  Frames.prototype.skip = function () {
    return this.frame_ihl4q3$(Frames$skip$lambda);
  };
  function Frames$COMM$lambda(f, input) {
    var encoding = input.tr.encoding();
    var language = input.tr.string_za3lpa$(3);
    var texts = split(encoding.read_uhu100$(input.tr.subarray_za3lpa$(input.size - 4 | 0)), Kotlin.charArrayOf(0));
    var content = texts.get_za3lpa$(0);
    var text = texts.get_za3lpa$(1);
    var key = new FramesData$CommentKey(language, content);
    var $receiver = input.data.comments;
    var tmp$;
    if (!!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      var message = 'Comment already exists: ' + key;
      throw IllegalArgumentException_init(message.toString());
    }
    return input.data.copy_lfa25k$(void 0, void 0, void 0, plus(input.data.comments, to(key, text)));
  }
  function Frames$TXXX$lambda(f, input) {
    var texts = input.tr.strings_za3lpa$(input.size);
    var content = texts.get_za3lpa$(0);
    var text = texts.get_za3lpa$(1);
    var $receiver = input.data.userText;
    var tmp$;
    if (!!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(content)) {
      var message = 'User text already exists: ' + content;
      throw IllegalArgumentException_init(message.toString());
    }
    return input.data.copy_lfa25k$(void 0, void 0, plus(input.data.userText, to(content, text)));
  }
  Frames.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Frames',
    interfaces: []
  };
  var Frames_instance = null;
  function Frames_getInstance() {
    if (Frames_instance === null) {
      new Frames();
    }
    return Frames_instance;
  }
  function FileType() {
  }
  function FileType$File() {
    FileType$File_instance = this;
    FileType.call(this);
  }
  FileType$File.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'File',
    interfaces: [FileType]
  };
  var FileType$File_instance = null;
  function FileType$File_getInstance() {
    if (FileType$File_instance === null) {
      new FileType$File();
    }
    return FileType$File_instance;
  }
  function FileType$Folder() {
    FileType$Folder_instance = this;
    FileType.call(this);
  }
  FileType$Folder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Folder',
    interfaces: [FileType]
  };
  var FileType$Folder_instance = null;
  function FileType$Folder_getInstance() {
    if (FileType$Folder_instance === null) {
      new FileType$Folder();
    }
    return FileType$Folder_instance;
  }
  FileType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FileType',
    interfaces: []
  };
  function Event() {
  }
  function Event$Load(fileList) {
    Event.call(this);
    this.fileList = fileList;
  }
  Event$Load.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Load',
    interfaces: [Event]
  };
  function Event$ProcessEnd() {
    Event$ProcessEnd_instance = this;
    Event.call(this);
  }
  Event$ProcessEnd.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ProcessEnd',
    interfaces: [Event]
  };
  var Event$ProcessEnd_instance = null;
  function Event$ProcessEnd_getInstance() {
    if (Event$ProcessEnd_instance === null) {
      new Event$ProcessEnd();
    }
    return Event$ProcessEnd_instance;
  }
  function Event$Cancel() {
    Event$Cancel_instance = this;
    Event.call(this);
  }
  Event$Cancel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Cancel',
    interfaces: [Event]
  };
  var Event$Cancel_instance = null;
  function Event$Cancel_getInstance() {
    if (Event$Cancel_instance === null) {
      new Event$Cancel();
    }
    return Event$Cancel_instance;
  }
  function Event$Import() {
    Event$Import_instance = this;
    Event.call(this);
  }
  Event$Import.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Import',
    interfaces: [Event]
  };
  var Event$Import_instance = null;
  function Event$Import_getInstance() {
    if (Event$Import_instance === null) {
      new Event$Import();
    }
    return Event$Import_instance;
  }
  function Event$Close() {
    Event$Close_instance = this;
    Event.call(this);
  }
  Event$Close.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Close',
    interfaces: [Event]
  };
  var Event$Close_instance = null;
  function Event$Close_getInstance() {
    if (Event$Close_instance === null) {
      new Event$Close();
    }
    return Event$Close_instance;
  }
  Event.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Event',
    interfaces: []
  };
  function fileListItem$lambda$lambda($receiver) {
    get_listGroupItem($receiver);
    return Unit;
  }
  function fileListItem$lambda$lambda$lambda($receiver) {
    $receiver.innerText = 'Filename';
    return Unit;
  }
  function fileListItem$lambda$lambda$lambda_0(closure$f) {
    return function ($receiver) {
      $receiver.innerText = closure$f.name;
      return Unit;
    };
  }
  function fileListItem$lambda$lambda$lambda_1($receiver) {
    $receiver.innerText = 'Size';
    return Unit;
  }
  function fileListItem$lambda$lambda$lambda$lambda$lambda(b) {
    return b.toString() + ' bytes';
  }
  function fileListItem$lambda$lambda$lambda$lambda(closure$mp3File) {
    return function () {
      return closure$mp3File.bytes.initial.invoke().map_2o04qz$(fileListItem$lambda$lambda$lambda$lambda$lambda);
    };
  }
  function fileListItem$lambda$lambda$lambda_2(closure$mp3File, closure$killables) {
    return function ($receiver) {
      addedTo(rxTextOrEmpty($receiver, fileListItem$lambda$lambda$lambda$lambda(closure$mp3File)), closure$killables);
      return Unit;
    };
  }
  function fileListItem$lambda$lambda$lambda_3($receiver) {
    $receiver.innerText = 'Artist';
    return Unit;
  }
  function fileListItem$lambda$lambda$lambda$lambda$lambda_0(closure$mp3File) {
    return function () {
      return closure$mp3File.artist.initial.invoke();
    };
  }
  function fileListItem$lambda$lambda$lambda$lambda_0(closure$mp3File) {
    return function () {
      return closure$mp3File.artistfix.initial.invoke().orElse_isaiq7$(fileListItem$lambda$lambda$lambda$lambda$lambda_0(closure$mp3File));
    };
  }
  function fileListItem$lambda$lambda$lambda_4(closure$mp3File, closure$killables) {
    return function ($receiver) {
      addedTo(rxTextOrEmpty($receiver, fileListItem$lambda$lambda$lambda$lambda_0(closure$mp3File)), closure$killables);
      return Unit;
    };
  }
  function fileListItem$lambda$lambda$lambda_5($receiver) {
    $receiver.innerText = 'Title';
    return Unit;
  }
  function fileListItem$lambda$lambda$lambda$lambda$lambda_1(closure$mp3File) {
    return function () {
      return closure$mp3File.title.initial.invoke();
    };
  }
  function fileListItem$lambda$lambda$lambda$lambda_1(closure$mp3File) {
    return function () {
      return closure$mp3File.titlefix.initial.invoke().orElse_isaiq7$(fileListItem$lambda$lambda$lambda$lambda$lambda_1(closure$mp3File));
    };
  }
  function fileListItem$lambda$lambda$lambda_6(closure$mp3File, closure$killables) {
    return function ($receiver) {
      addedTo(rxTextOrEmpty($receiver, fileListItem$lambda$lambda$lambda$lambda_1(closure$mp3File)), closure$killables);
      return Unit;
    };
  }
  function fileListItem$lambda$lambda$lambda_7($receiver) {
    $receiver.innerText = 'Duration';
    return Unit;
  }
  function fileListItem$lambda$lambda$lambda$lambda$lambda_2(s) {
    return s.toString() + ' secs';
  }
  function fileListItem$lambda$lambda$lambda$lambda_2(closure$mp3File) {
    return function () {
      return closure$mp3File.secs.initial.invoke().map_2o04qz$(fileListItem$lambda$lambda$lambda$lambda$lambda_2);
    };
  }
  function fileListItem$lambda$lambda$lambda_8(closure$mp3File, closure$killables) {
    return function ($receiver) {
      addedTo(rxTextOrEmpty($receiver, fileListItem$lambda$lambda$lambda$lambda_2(closure$mp3File)), closure$killables);
      return Unit;
    };
  }
  function fileListItem$lambda$lambda_0(closure$f, closure$mp3File, closure$killables) {
    return function ($receiver) {
      invoke(get_dt($receiver), fileListItem$lambda$lambda$lambda);
      invoke(get_dd($receiver), fileListItem$lambda$lambda$lambda_0(closure$f));
      invoke(get_dt($receiver), fileListItem$lambda$lambda$lambda_1);
      invoke(get_dd($receiver), fileListItem$lambda$lambda$lambda_2(closure$mp3File, closure$killables));
      invoke(get_dt($receiver), fileListItem$lambda$lambda$lambda_3);
      invoke(get_dd($receiver), fileListItem$lambda$lambda$lambda_4(closure$mp3File, closure$killables));
      invoke(get_dt($receiver), fileListItem$lambda$lambda$lambda_5);
      invoke(get_dd($receiver), fileListItem$lambda$lambda$lambda_6(closure$mp3File, closure$killables));
      invoke(get_dt($receiver), fileListItem$lambda$lambda$lambda_7);
      invoke(get_dd($receiver), fileListItem$lambda$lambda$lambda_8(closure$mp3File, closure$killables));
      return Unit;
    };
  }
  function fileListItem$lambda(closure$f, closure$mp3File, closure$killables) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(fileListItem$lambda$lambda);
      invoke(get_dl($receiver), fileListItem$lambda$lambda_0(closure$f, closure$mp3File, closure$killables));
      return Unit;
    };
  }
  function fileListItem(f, mp3File, killables) {
    return invoke(get_div(document), fileListItem$lambda(f, mp3File, killables));
  }
  function import$Item(file, hash, element, mp3File, killables) {
    this.file = file;
    this.hash = hash;
    this.element = element;
    this.mp3File = mp3File;
    this.killables = killables;
  }
  import$Item.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Item',
    interfaces: []
  };
  function import$lambda(closure$fileType) {
    return function () {
      return equals(closure$fileType.invoke(), FileType$File_getInstance());
    };
  }
  function import$lambda_0(closure$fileType) {
    return function () {
      return equals(closure$fileType.invoke(), FileType$Folder_getInstance());
    };
  }
  function import$lambda_1(closure$fileMap) {
    return function () {
      return !closure$fileMap.invoke().isEmpty();
    };
  }
  function import$post$lambda(closure$channel_0, closure$e_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$import$post$lambda(closure$channel_0, closure$e_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$import$post$lambda(closure$channel_0, closure$e_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$e = closure$e_0;
  }
  Coroutine$import$post$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$import$post$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$import$post$lambda.prototype.constructor = Coroutine$import$post$lambda;
  Coroutine$import$post$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$channel.send_11rb$(this.local$closure$e, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function import$post(closure$channel) {
    return function (e) {
      return launch(coroutines.GlobalScope, void 0, void 0, import$post$lambda(closure$channel, e));
    };
  }
  function import$addFilesToLoad$lambda(closure$files) {
    return function (it) {
      return it + closure$files.size | 0;
    };
  }
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function import$addFilesToLoad(closure$pendingFiles, closure$filesToLoad) {
    return function (fl) {
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = fl.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.type, 'audio/mp3'))
          destination.add_11rb$(element);
      }
      var files = destination;
      closure$pendingFiles.transform_ru8m0w$(import$addFilesToLoad$lambda(files));
      closure$filesToLoad.v = plus_0(closure$filesToLoad.v, files);
    };
  }
  function import$startLoading$lambda$lambda(closure$f_0, closure$buffer_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$import$startLoading$lambda$lambda(closure$f_0, closure$buffer_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$import$startLoading$lambda$lambda(closure$f_0, closure$buffer_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$f = closure$f_0;
    this.local$closure$buffer = closure$buffer_0;
  }
  Coroutine$import$startLoading$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$import$startLoading$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$import$startLoading$lambda$lambda.prototype.constructor = Coroutine$import$startLoading$lambda$lambda;
  Coroutine$import$startLoading$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return to(this.local$closure$f, this.local$closure$buffer);
          case 1:
            throw this.exception_0;
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
  function import$startLoading$lambda$lambda$lambda(closure$hash, closure$i) {
    return function (it) {
      return plus(it, to(closure$hash, closure$i));
    };
  }
  function import$startLoading$lambda$lambda_0(it) {
    return it - 1 | 0;
  }
  function import$startLoading$lambda(closure$filesToLoad_0, this$import_0, closure$fileMap_0, closure$killables_0, closure$fileListItemEmitter_0, closure$canceling_0, closure$pendingFiles_0, closure$post_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$import$startLoading$lambda(closure$filesToLoad_0, this$import_0, closure$fileMap_0, closure$killables_0, closure$fileListItemEmitter_0, closure$canceling_0, closure$pendingFiles_0, closure$post_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$import$startLoading$lambda(closure$filesToLoad_0, this$import_0, closure$fileMap_0, closure$killables_0, closure$fileListItemEmitter_0, closure$canceling_0, closure$pendingFiles_0, closure$post_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$filesToLoad = closure$filesToLoad_0;
    this.local$this$import = this$import_0;
    this.local$closure$fileMap = closure$fileMap_0;
    this.local$closure$killables = closure$killables_0;
    this.local$closure$fileListItemEmitter = closure$fileListItemEmitter_0;
    this.local$closure$canceling = closure$canceling_0;
    this.local$closure$pendingFiles = closure$pendingFiles_0;
    this.local$closure$post = closure$post_0;
    this.local$tmp$ = void 0;
    this.local$f = void 0;
    this.local$buffer = void 0;
    this.local$hash = void 0;
  }
  Coroutine$import$startLoading$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$import$startLoading$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$import$startLoading$lambda.prototype.constructor = Coroutine$import$startLoading$lambda;
  Coroutine$import$startLoading$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$closure$filesToLoad.v.isEmpty()) {
              this.state_0 = 10;
              continue;
            }

            this.local$f = first(this.local$closure$filesToLoad.v);
            this.local$closure$filesToLoad.v = drop(this.local$closure$filesToLoad.v, 1);
            this.state_0 = 3;
            this.result_0 = readAsArrayBuffer(this.local$f, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$buffer = this.result_0;
            this.state_0 = 4;
            this.result_0 = hash(this.local$buffer, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$hash = this.result_0;
            if (!this.local$this$import.storedHashes.now.contains_11rb$(this.local$hash)) {
              this.state_0 = 5;
              this.result_0 = exists(this.local$this$import.idb, get_Mp3Store(), this.local$hash, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$ = false;
              this.state_0 = 6;
              continue;
            }

          case 5:
            this.local$tmp$ = !this.result_0;
            this.state_0 = 6;
            continue;
          case 6:
            var tmp$ = this.local$tmp$;
            if (tmp$) {
              var $receiver = this.local$closure$fileMap.now;
              var tmp$_0;
              tmp$ = !(Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(this.local$hash);
            }

            if (tmp$) {
              this.state_0 = 7;
              this.result_0 = this.local$this$import.tagDB.get_46owy4$(this.local$hash, import$startLoading$lambda$lambda(this.local$f, this.local$buffer), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 8;
              continue;
            }

          case 7:
            var mp3File = this.result_0;
            var ks = this.local$closure$killables.killables();
            var element = fileListItem(this.local$f, mp3File, ks);
            this.local$closure$fileListItemEmitter.emit_11rb$(element);
            var $receiver_0 = new import$Item(this.local$f, this.local$hash, element, mp3File, ks);
            this.local$closure$fileMap.transform_ru8m0w$(import$startLoading$lambda$lambda$lambda(this.local$hash, $receiver_0));
            this.state_0 = 8;
            continue;
          case 8:
            if (this.local$closure$canceling.now) {
              this.state_0 = 10;
              continue;
            }
             else {
              this.state_0 = 9;
              continue;
            }

          case 9:
            this.local$closure$pendingFiles.transform_ru8m0w$(import$startLoading$lambda$lambda_0);
            this.state_0 = 2;
            continue;
          case 10:
            return this.local$closure$post(Event$ProcessEnd_getInstance());
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
  function import$startLoading(closure$filesToLoad, this$import, closure$fileMap, closure$killables, closure$fileListItemEmitter, closure$canceling, closure$pendingFiles, closure$post) {
    return function () {
      launch(coroutines.GlobalScope, void 0, void 0, import$startLoading$lambda(closure$filesToLoad, this$import, closure$fileMap, closure$killables, closure$fileListItemEmitter, closure$canceling, closure$pendingFiles, closure$post));
    };
  }
  function import$startImporting$lambda(closure$fileMap_0, closure$pendingFiles_0, this$import_0, closure$canceling_0, closure$post_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$import$startImporting$lambda(closure$fileMap_0, closure$pendingFiles_0, this$import_0, closure$canceling_0, closure$post_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$import$startImporting$lambda(closure$fileMap_0, closure$pendingFiles_0, this$import_0, closure$canceling_0, closure$post_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fileMap = closure$fileMap_0;
    this.local$closure$pendingFiles = closure$pendingFiles_0;
    this.local$this$import = this$import_0;
    this.local$closure$canceling = closure$canceling_0;
    this.local$closure$post = closure$post_0;
    this.local$tmp$ = void 0;
    this.local$b = void 0;
    this.local$bc = void 0;
    this.local$mfm = void 0;
    this.local$fe = void 0;
    this.local$f = void 0;
  }
  Coroutine$import$startImporting$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$import$startImporting$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$import$startImporting$lambda.prototype.constructor = Coroutine$import$startImporting$lambda;
  Coroutine$import$startImporting$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var fm = this.local$closure$fileMap.now;
            this.local$closure$pendingFiles.now = fm.size;
            this.local$b = this.local$this$import.db.batch();
            this.local$bc = 500;
            this.local$mfm = toMutableMap(fm);
            this.local$tmp$ = fm.entries.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }

            this.local$fe = this.local$tmp$.next();
            this.local$f = this.local$fe.value;
            this.local$b.set(docRef(this.local$this$import.songsWrap.doc_61zpoe$(this.local$f.hash), this.local$this$import.db), this.local$f.mp3File.props.write());
            this.local$bc = this.local$bc - 1 | 0;
            if (this.local$bc === 0) {
              this.local$b.commit();
              this.local$bc = 500;
              this.local$b = this.local$this$import.db.batch();
            }

            this.state_0 = 3;
            this.result_0 = put(this.local$this$import.idb, get_Mp3Store(), this.local$f.hash, this.local$f.file, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$f.killables.kill();
            removeFromParent(this.local$f.element);
            decrease(this.local$closure$pendingFiles);
            this.local$mfm.remove_11rb$(this.local$fe.key);
            this.state_0 = 4;
            this.result_0 = this.local$this$import.dbStatus.add_5wr77w$(this.local$f.mp3File.bytes.iv, this.local$f.mp3File.secs.iv, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            if (this.local$closure$canceling.now) {
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            this.local$b.commit();
            this.local$closure$fileMap.now = toMap(this.local$mfm);
            return this.local$closure$post(Event$ProcessEnd_getInstance());
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
  function import$startImporting(closure$fileMap, closure$pendingFiles, this$import, closure$canceling, closure$post) {
    return function () {
      launch(coroutines.GlobalScope, void 0, void 0, import$startImporting$lambda(closure$fileMap, closure$pendingFiles, this$import, closure$canceling, closure$post));
    };
  }
  function import$lambda$Exit() {
    Throwable.call(this);
    this.message_lxbd3y$_0 = void 0;
    this.cause_7ixke8$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'import$lambda$Exit';
  }
  Object.defineProperty(import$lambda$Exit.prototype, 'message', {
    get: function () {
      return this.message_lxbd3y$_0;
    }
  });
  Object.defineProperty(import$lambda$Exit.prototype, 'cause', {
    get: function () {
      return this.cause_7ixke8$_0;
    }
  });
  import$lambda$Exit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Exit',
    interfaces: [Throwable]
  };
  function import$lambda$exit() {
    throw new import$lambda$Exit();
  }
  function import$lambda$doClose(closure$canceling, closure$close, closure$exit) {
    return function () {
      closure$canceling.now = true;
      closure$close();
      closure$exit();
    };
  }
  function import$lambda$whileActive(closure$processesRunning_0, closure$channel_0, closure$doClose_0) {
    return function (fn_0, continuation_0, suspended) {
      var instance = new Coroutine$import$lambda$whileActive(closure$processesRunning_0, closure$channel_0, closure$doClose_0, fn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$import$lambda$whileActive(closure$processesRunning_0, closure$channel_0, closure$doClose_0, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$processesRunning = closure$processesRunning_0;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$doClose = closure$doClose_0;
    this.local$fn = fn_0;
  }
  Coroutine$import$lambda$whileActive.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$import$lambda$whileActive.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$import$lambda$whileActive.prototype.constructor = Coroutine$import$lambda$whileActive;
  Coroutine$import$lambda$whileActive.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$closure$processesRunning.now <= 0) {
              this.state_0 = 6;
              continue;
            }

            this.state_0 = 3;
            this.result_0 = this.local$closure$channel.receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var e_0 = this.result_0;
            if (equals(e_0, Event$Close_getInstance())) {
              this.local$closure$doClose();
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 4;
              this.result_0 = this.local$fn(e_0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 2;
            continue;
          case 6:
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
  function import$lambda$cancelingLoop$lambda(closure$processesRunning_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$import$lambda$cancelingLoop$lambda(closure$processesRunning_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$import$lambda$cancelingLoop$lambda(closure$processesRunning_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$processesRunning = closure$processesRunning_0;
    this.local$e = e_0;
  }
  Coroutine$import$lambda$cancelingLoop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$import$lambda$cancelingLoop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$import$lambda$cancelingLoop$lambda.prototype.constructor = Coroutine$import$lambda$cancelingLoop$lambda;
  Coroutine$import$lambda$cancelingLoop$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (equals(this.local$e, Event$ProcessEnd_getInstance()))
              return decrease(this.local$closure$processesRunning), Unit;
            else {
              return Unit;
            }

          case 1:
            throw this.exception_0;
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
  function import$lambda$cancelingLoop(closure$canceling_0, closure$processesRunning_0, closure$whileActive_0, closure$pendingFiles_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$import$lambda$cancelingLoop(closure$canceling_0, closure$processesRunning_0, closure$whileActive_0, closure$pendingFiles_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$import$lambda$cancelingLoop(closure$canceling_0, closure$processesRunning_0, closure$whileActive_0, closure$pendingFiles_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$closure$canceling = closure$canceling_0;
    this.local$closure$processesRunning = closure$processesRunning_0;
    this.local$closure$whileActive = closure$whileActive_0;
    this.local$closure$pendingFiles = closure$pendingFiles_0;
  }
  Coroutine$import$lambda$cancelingLoop.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$import$lambda$cancelingLoop.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$import$lambda$cancelingLoop.prototype.constructor = Coroutine$import$lambda$cancelingLoop;
  Coroutine$import$lambda$cancelingLoop.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$canceling.now = true;
            this.exceptionState_0 = 3;
            this.state_0 = 1;
            this.result_0 = this.local$closure$whileActive(import$lambda$cancelingLoop$lambda(this.local$closure$processesRunning), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 5;
            this.finallyPath_0 = [2];
            this.state_0 = 4;
            continue;
          case 2:
            return;
          case 3:
            this.finallyPath_0 = [5];
            this.state_0 = 4;
            continue;
          case 4:
            this.local$closure$canceling.now = false;
            this.local$closure$pendingFiles.now = 0;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
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
  function import$lambda$loadingLoop$lambda(closure$addFilesToLoad_0, closure$processesRunning_0, closure$cancelingLoop_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$import$lambda$loadingLoop$lambda(closure$addFilesToLoad_0, closure$processesRunning_0, closure$cancelingLoop_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$import$lambda$loadingLoop$lambda(closure$addFilesToLoad_0, closure$processesRunning_0, closure$cancelingLoop_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$addFilesToLoad = closure$addFilesToLoad_0;
    this.local$closure$processesRunning = closure$processesRunning_0;
    this.local$closure$cancelingLoop = closure$cancelingLoop_0;
    this.local$e = e_0;
  }
  Coroutine$import$lambda$loadingLoop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$import$lambda$loadingLoop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$import$lambda$loadingLoop$lambda.prototype.constructor = Coroutine$import$lambda$loadingLoop$lambda;
  Coroutine$import$lambda$loadingLoop$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$e, Event$Load)) {
              return this.local$closure$addFilesToLoad(this.local$e.fileList), Unit;
            }
             else {
              if (equals(this.local$e, Event$ProcessEnd_getInstance())) {
                return decrease(this.local$closure$processesRunning), Unit;
              }
               else {
                if (equals(this.local$e, Event$Cancel_getInstance())) {
                  this.state_0 = 2;
                  this.result_0 = this.local$closure$cancelingLoop(this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                }
                 else {
                  return Unit;
                }
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
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
  function import$lambda$loadingLoop(closure$addFilesToLoad_0, closure$processesRunning_0, closure$cancelingLoop_0, closure$whileActive_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$import$lambda$loadingLoop(closure$addFilesToLoad_0, closure$processesRunning_0, closure$cancelingLoop_0, closure$whileActive_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$import$lambda$loadingLoop(closure$addFilesToLoad_0, closure$processesRunning_0, closure$cancelingLoop_0, closure$whileActive_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$addFilesToLoad = closure$addFilesToLoad_0;
    this.local$closure$processesRunning = closure$processesRunning_0;
    this.local$closure$cancelingLoop = closure$cancelingLoop_0;
    this.local$closure$whileActive = closure$whileActive_0;
  }
  Coroutine$import$lambda$loadingLoop.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$import$lambda$loadingLoop.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$import$lambda$loadingLoop.prototype.constructor = Coroutine$import$lambda$loadingLoop;
  Coroutine$import$lambda$loadingLoop.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$whileActive(import$lambda$loadingLoop$lambda(this.local$closure$addFilesToLoad, this.local$closure$processesRunning, this.local$closure$cancelingLoop), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function import$lambda$importingLoop$lambda(closure$processesRunning_0, closure$cancelingLoop_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$import$lambda$importingLoop$lambda(closure$processesRunning_0, closure$cancelingLoop_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$import$lambda$importingLoop$lambda(closure$processesRunning_0, closure$cancelingLoop_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$processesRunning = closure$processesRunning_0;
    this.local$closure$cancelingLoop = closure$cancelingLoop_0;
    this.local$e = e_0;
  }
  Coroutine$import$lambda$importingLoop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$import$lambda$importingLoop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$import$lambda$importingLoop$lambda.prototype.constructor = Coroutine$import$lambda$importingLoop$lambda;
  Coroutine$import$lambda$importingLoop$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (equals(this.local$e, Event$ProcessEnd_getInstance())) {
              return decrease(this.local$closure$processesRunning), Unit;
            }
             else {
              if (equals(this.local$e, Event$Cancel_getInstance())) {
                this.state_0 = 2;
                this.result_0 = this.local$closure$cancelingLoop(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                return Unit;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
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
  function import$lambda$importingLoop(closure$importing_0, closure$processesRunning_0, closure$cancelingLoop_0, closure$whileActive_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$import$lambda$importingLoop(closure$importing_0, closure$processesRunning_0, closure$cancelingLoop_0, closure$whileActive_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$import$lambda$importingLoop(closure$importing_0, closure$processesRunning_0, closure$cancelingLoop_0, closure$whileActive_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$closure$importing = closure$importing_0;
    this.local$closure$processesRunning = closure$processesRunning_0;
    this.local$closure$cancelingLoop = closure$cancelingLoop_0;
    this.local$closure$whileActive = closure$whileActive_0;
  }
  Coroutine$import$lambda$importingLoop.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$import$lambda$importingLoop.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$import$lambda$importingLoop.prototype.constructor = Coroutine$import$lambda$importingLoop;
  Coroutine$import$lambda$importingLoop.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$importing.now = true;
            this.exceptionState_0 = 3;
            this.state_0 = 1;
            this.result_0 = this.local$closure$whileActive(import$lambda$importingLoop$lambda(this.local$closure$processesRunning, this.local$closure$cancelingLoop), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 5;
            this.finallyPath_0 = [2];
            this.state_0 = 4;
            continue;
          case 2:
            return;
          case 3:
            this.finallyPath_0 = [5];
            this.state_0 = 4;
            continue;
          case 4:
            this.local$closure$importing.now = false;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
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
  function import$lambda_2(closure$canceling_0, closure$close_0, closure$processesRunning_0, closure$channel_0, closure$pendingFiles_0, closure$addFilesToLoad_0, closure$importing_0, closure$startLoading_0, closure$startImporting_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$import$lambda(closure$canceling_0, closure$close_0, closure$processesRunning_0, closure$channel_0, closure$pendingFiles_0, closure$addFilesToLoad_0, closure$importing_0, closure$startLoading_0, closure$startImporting_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$import$lambda(closure$canceling_0, closure$close_0, closure$processesRunning_0, closure$channel_0, closure$pendingFiles_0, closure$addFilesToLoad_0, closure$importing_0, closure$startLoading_0, closure$startImporting_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 13;
    this.local$closure$canceling = closure$canceling_0;
    this.local$closure$close = closure$close_0;
    this.local$closure$processesRunning = closure$processesRunning_0;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$pendingFiles = closure$pendingFiles_0;
    this.local$closure$addFilesToLoad = closure$addFilesToLoad_0;
    this.local$closure$importing = closure$importing_0;
    this.local$closure$startLoading = closure$startLoading_0;
    this.local$closure$startImporting = closure$startImporting_0;
    this.local$tmp$ = void 0;
    this.local$doClose = void 0;
    this.local$loadingLoop = void 0;
    this.local$importingLoop = void 0;
  }
  Coroutine$import$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$import$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$import$lambda.prototype.constructor = Coroutine$import$lambda;
  Coroutine$import$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var exit = import$lambda$exit;
            this.local$doClose = import$lambda$doClose(this.local$closure$canceling, this.local$closure$close, exit);
            var whileActive = import$lambda$whileActive(this.local$closure$processesRunning, this.local$closure$channel, this.local$doClose);
            var cancelingLoop = import$lambda$cancelingLoop(this.local$closure$canceling, this.local$closure$processesRunning, whileActive, this.local$closure$pendingFiles);
            this.local$loadingLoop = import$lambda$loadingLoop(this.local$closure$addFilesToLoad, this.local$closure$processesRunning, cancelingLoop, whileActive);
            this.local$importingLoop = import$lambda$importingLoop(this.local$closure$importing, this.local$closure$processesRunning, cancelingLoop, whileActive);
            this.exceptionState_0 = 10;
            this.local$tmp$ = this.local$closure$channel.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            this.state_0 = 2;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            if (!this.result_0) {
              this.state_0 = 9;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var e_0 = this.result_0;
            if (Kotlin.isType(e_0, Event$Load)) {
              increase(this.local$closure$processesRunning);
              this.local$closure$addFilesToLoad(e_0.fileList);
              this.local$closure$startLoading();
              this.state_0 = 7;
              this.result_0 = this.local$loadingLoop(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (equals(e_0, Event$Import_getInstance())) {
                increase(this.local$closure$processesRunning);
                this.local$closure$startImporting();
                this.state_0 = 5;
                this.result_0 = this.local$importingLoop(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                if (equals(e_0, Event$Close_getInstance()))
                  this.local$doClose();
                this.state_0 = 6;
                continue;
              }
            }

          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 8;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 1;
            continue;
          case 9:
            this.exceptionState_0 = 13;
            this.state_0 = 12;
            continue;
          case 10:
            this.exceptionState_0 = 13;
            var e = this.exception_0;
            if (Kotlin.isType(e, import$lambda$Exit)) {
              return Unit;
            }
             else {
              throw e;
            }

          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            return Unit;
          case 13:
            throw this.exception_0;
          default:this.state_0 = 13;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 13) {
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
  function import$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_m1($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$processesRunning) {
    return function () {
      return closure$processesRunning.invoke() > 0 ? get_btnDanger(Cls.Companion) : get_btnSecondary(Cls.Companion);
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$post, closure$close) {
    return function (it) {
      closure$post(Event$Cancel_getInstance());
      closure$close();
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda(closure$processesRunning, closure$post, closure$close) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda$lambda);
      rxClass($receiver, import$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$processesRunning));
      clickEvent($receiver, import$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$post, closure$close));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda(closure$processesRunning, closure$post, closure$close) {
    return function ($receiver) {
      faButton($receiver, get_chevronLeft(Fa.Companion), import$lambda$lambda$lambda$lambda$lambda(closure$processesRunning, closure$post, closure$close));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.innerText = 'Import MP3s';
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    get_flexRow($receiver);
    get_alignItemsCenter($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    get_m2($receiver);
    get_badge($receiver);
    get_badgePill($receiver);
    get_badgeWarning($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$pendingFiles) {
    return function () {
      return closure$pendingFiles.invoke().toString();
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$pendingFiles) {
    return function () {
      return closure$pendingFiles.invoke() !== 0;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda_1(closure$pendingFiles) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda$lambda_2);
      rxText($receiver, import$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$pendingFiles));
      rxDisplayed($receiver, import$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$pendingFiles));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    get_m1($receiver);
    get_btnGroup($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_btnWarning($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$processesRunning) {
    return function () {
      return closure$processesRunning.invoke() > 0;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$canceling) {
    return function () {
      return !closure$canceling.invoke();
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$post) {
    return function (it) {
      closure$post(Event$Cancel_getInstance());
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$processesRunning, closure$canceling, closure$post) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      rxDisplayed($receiver, import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$processesRunning));
      rxEnabled($receiver, import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$canceling));
      clickEvent($receiver, import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$post));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    get_btnPrimary($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$processesRunning, closure$fileMapNotEmpty) {
    return function () {
      return closure$processesRunning.invoke() === 0 && closure$fileMapNotEmpty.invoke();
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$post) {
    return function (it) {
      closure$post(Event$Import_getInstance());
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$processesRunning, closure$fileMapNotEmpty, closure$post) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3);
      rxDisplayed($receiver, import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$processesRunning, closure$fileMapNotEmpty));
      clickEvent($receiver, import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$post));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda_2(closure$processesRunning, closure$canceling, closure$post, closure$fileMapNotEmpty) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda$lambda_5);
      faButton($receiver, get_ban(Fa.Companion), import$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$processesRunning, closure$canceling, closure$post));
      faButton($receiver, get_fileImport(Fa.Companion), import$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$processesRunning, closure$fileMapNotEmpty, closure$post));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda_1(closure$pendingFiles, closure$processesRunning, closure$canceling, closure$post, closure$fileMapNotEmpty) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda_0);
      invoke(get_div($receiver), import$lambda$lambda$lambda$lambda$lambda_1(closure$pendingFiles));
      invoke(get_div($receiver), import$lambda$lambda$lambda$lambda$lambda_2(closure$processesRunning, closure$canceling, closure$post, closure$fileMapNotEmpty));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda(closure$processesRunning, closure$post, closure$close, closure$pendingFiles, closure$canceling, closure$fileMapNotEmpty) {
    return function ($receiver) {
      $receiver.left.invoke_gk6m2q$(import$lambda$lambda$lambda$lambda(closure$processesRunning, closure$post, closure$close));
      $receiver.middleTitle_9f50g3$(import$lambda$lambda$lambda$lambda_0);
      $receiver.right.invoke_gk6m2q$(import$lambda$lambda$lambda$lambda_1(closure$pendingFiles, closure$processesRunning, closure$canceling, closure$post, closure$fileMapNotEmpty));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda_2($receiver) {
    get_dFlex($receiver);
    get_flexColumn($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda_3(closure$importing) {
    return function () {
      return !closure$importing.invoke();
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    flexFixedSize($receiver);
    flexCenter($receiver);
    get_borderBottom($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    get_dFlex($receiver);
    get_flexRow($receiver);
    get_alignItemsCenter($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    get_btnGroup($receiver);
    get_m1($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_btnPrimary($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$fileType) {
    return function (it) {
      closure$fileType.now = FileType$Folder_getInstance();
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$isFolder, closure$fileType) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      rxClass_0($receiver, get_active(Cls.Companion), closure$isFolder);
      clickEvent($receiver, import$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$fileType));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    get_btnPrimary($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$fileType) {
    return function (it) {
      closure$fileType.now = FileType$File_getInstance();
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$isFile, closure$fileType) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      rxClass_0($receiver, get_active(Cls.Companion), closure$isFile);
      clickEvent($receiver, import$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$fileType));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$isFolder, closure$fileType, closure$isFile) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6);
      faButton($receiver, get_folder(Fa.Companion), import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$isFolder, closure$fileType));
      faButton($receiver, get_file(Fa.Companion), import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$isFile, closure$fileType));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    get_m1($receiver);
    get_formControlFile($receiver);
    get_widthAuto($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10(this$) {
    return function (f) {
      this$.webkitdirectory = f;
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11(this$, closure$post) {
    return function (it) {
      var tmp$;
      if ((tmp$ = this$.files) != null) {
        closure$post(new Event$Load(toList(asList(tmp$))));
      }
      this$.value = '';
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$isFolder, closure$post) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9);
      $receiver.type = 'file';
      $receiver.multiple = true;
      $receiver.accept = '.mp3';
      closure$isFolder.forEach_qlkmfe$(import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10($receiver));
      changeEvent($receiver, import$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11($receiver, closure$post));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda_5(closure$isFolder, closure$fileType, closure$isFile, closure$post) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda$lambda_8);
      invoke(get_div($receiver), import$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$isFolder, closure$fileType, closure$isFile));
      invoke(get_input($receiver), import$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$isFolder, closure$post));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda_3(closure$importing, closure$isFolder, closure$fileType, closure$isFile, closure$post) {
    return function ($receiver) {
      rxDisplayed($receiver, import$lambda$lambda$lambda$lambda$lambda_3(closure$importing));
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda_4);
      invoke(get_div($receiver), import$lambda$lambda$lambda$lambda$lambda_5(closure$isFolder, closure$fileType, closure$isFile, closure$post));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    get_flexGrow1($receiver);
    get_scrollVertical($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    get_m1($receiver);
    get_listGroup($receiver);
    return Unit;
  }
  function import$lambda$lambda$lambda$lambda$lambda$lambda_12(this$) {
    return function (e) {
      this$.appendChild(e);
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda$lambda_7(closure$fileListItemEmitter) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda$lambda_11);
      closure$fileListItemEmitter.plusAssign_qlkmfe$(import$lambda$lambda$lambda$lambda$lambda$lambda_12($receiver));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda$lambda_4(closure$fileListItemEmitter) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda$lambda_6);
      invoke(get_div($receiver), import$lambda$lambda$lambda$lambda$lambda_7(closure$fileListItemEmitter));
      return Unit;
    };
  }
  function import$lambda$lambda$lambda_0(closure$importing, closure$isFolder, closure$fileType, closure$isFile, closure$post, closure$fileListItemEmitter) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(import$lambda$lambda$lambda$lambda_2);
      invoke(get_div($receiver), import$lambda$lambda$lambda$lambda_3(closure$importing, closure$isFolder, closure$fileType, closure$isFile, closure$post));
      invoke(get_div($receiver), import$lambda$lambda$lambda$lambda_4(closure$fileListItemEmitter));
      return Unit;
    };
  }
  function import$lambda$lambda(closure$processesRunning, closure$post, closure$close, closure$pendingFiles, closure$canceling, closure$fileMapNotEmpty, closure$importing, closure$isFolder, closure$fileType, closure$isFile, closure$fileListItemEmitter) {
    return function ($receiver) {
      $receiver.top_vesf63$(import$lambda$lambda$lambda(closure$processesRunning, closure$post, closure$close, closure$pendingFiles, closure$canceling, closure$fileMapNotEmpty));
      invoke($receiver.main, import$lambda$lambda$lambda_0(closure$importing, closure$isFolder, closure$fileType, closure$isFile, closure$post, closure$fileListItemEmitter));
      return Unit;
    };
  }
  function import$lambda_3(closure$killables, closure$processesRunning, closure$post, closure$close, closure$pendingFiles, closure$canceling, closure$fileMapNotEmpty, closure$importing, closure$isFolder, closure$fileType, closure$isFile, closure$fileListItemEmitter) {
    return function ($receiver) {
      screenLayout($receiver, closure$killables, import$lambda$lambda(closure$processesRunning, closure$post, closure$close, closure$pendingFiles, closure$canceling, closure$fileMapNotEmpty, closure$importing, closure$isFolder, closure$fileType, closure$isFile, closure$fileListItemEmitter));
      return Unit;
    };
  }
  function import_0($receiver, panel, killables, close) {
    var fileType = new Var(FileType$Folder_getInstance());
    var isFile = Rx_init(import$lambda(fileType));
    var isFolder = Rx_init(import$lambda_0(fileType));
    var pendingFiles = new Var(0);
    var canceling = new Var(false);
    var importing = new Var(false);
    var fileMap = new Var(emptyMap());
    var fileMapNotEmpty = Rx_init(import$lambda_1(fileMap));
    var fileListItemEmitter = new Emitter();
    var channel = Channel();
    var post = import$post(channel);
    var filesToLoad = {v: emptyList()};
    var addFilesToLoad = import$addFilesToLoad(pendingFiles, filesToLoad);
    var startLoading = import$startLoading(filesToLoad, $receiver, fileMap, killables, fileListItemEmitter, canceling, pendingFiles, post);
    var startImporting = import$startImporting(fileMap, pendingFiles, $receiver, canceling, post);
    var processesRunning = new Var(0);
    launch(coroutines.GlobalScope, void 0, void 0, import$lambda_2(canceling, close, processesRunning, channel, pendingFiles, addFilesToLoad, importing, startLoading, startImporting));
    panel.newRoot_iw61es$(import$lambda_3(killables, processesRunning, post, close, pendingFiles, canceling, fileMapNotEmpty, importing, isFolder, fileType, isFile, fileListItemEmitter));
  }
  function Mp3Store$lambda(it) {
    return it;
  }
  var Mp3Store_metadata = new PropertyMetadata('Mp3Store');
  var Mp3Store;
  function get_Mp3Store() {
    return Mp3Store.getValue_lrcp0p$(this, Mp3Store_metadata);
  }
  function DBSingletons$lambda(it) {
    return it;
  }
  var DBSingletons_metadata = new PropertyMetadata('DBSingletons');
  var DBSingletons;
  function get_DBSingletons() {
    return DBSingletons.getValue_lrcp0p$(this, DBSingletons_metadata);
  }
  function main$lambda$lambda$lambda(event) {
    var tmp$;
    Kotlin.isType(tmp$ = event, IDBVersionChangeEvent) ? tmp$ : throwCCE();
    var db = event.target.result;
    if (event.oldVersion < 1) {
      db.createObjectStore(get_Mp3Store());
    }
    if (event.oldVersion < 2) {
      db.createObjectStore(get_DBSingletons());
    }
    return Unit;
  }
  function main$lambda$ObjectLiteral(closure$idb, lib, title) {
    this.closure$idb = closure$idb;
    LoggingInCtx_init(lib, title, this);
  }
  main$lambda$ObjectLiteral.prototype.loggedIn_v1eir6$ = function (user) {
    var killables = new Killables();
    home(new MusicCtx(this.fbCtx, user, this.closure$idb), this.appCtx.root, killables);
    return killables;
  };
  main$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [LoggingInCtx]
  };
  function main$lambda($receiver, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$main$lambda($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = get_indexedDB(window).open('appsimake-music', L2);
            $receiver.addEventListener('upgradeneeded', main$lambda$lambda$lambda);
            this.state_0 = 2;
            this.result_0 = await_0($receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var idb = this.result_0;
            return (new main$lambda$ObjectLiteral(idb, musiclib.music, 'Music')).start(), Unit;
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
  function main(args) {
    launch(coroutines.GlobalScope, void 0, void 0, main$lambda);
  }
  function MusicCtx(fbCtx, user, idb) {
    LoggedInCtx.call(this, fbCtx, user);
    this.idb = idb;
    this.uid = user.uid;
    this.storageWrap = get_storage(fbCtx.lib.app);
    this.songsWrap = get_songs(fbCtx.lib.app);
    this.storageRef = collectionRef(this.storageWrap, this.db);
    var $receiver = new Var(emptySet());
    this.killables.plusAssign_wii6vi$(idDiffs(this.storageRef, MusicCtx$storedHashes$lambda$lambda($receiver)));
    this.storedHashes = $receiver;
    this.dbStatus = DBStatus_init(this.idb, this.killables);
    this.tagDB = new TagDB(this.db, this.killables);
    this.userSongsDB = new UserSongsDB(this.db, this.uid, this.killables);
    this.songStoreDB = new SongStorageDB(this.db, this.killables);
    this.playlist = new Playlist(this.idb, this.userSongsDB, this.killables);
  }
  function MusicCtx$storedHashes$lambda$lambda$lambda(closure$diff) {
    return function (s) {
      return plus_1(minus(s, closure$diff.removed), closure$diff.added);
    };
  }
  function MusicCtx$storedHashes$lambda$lambda(closure$rxs) {
    return function (diff) {
      closure$rxs.transform_ru8m0w$(MusicCtx$storedHashes$lambda$lambda$lambda(diff));
      return Unit;
    };
  }
  MusicCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MusicCtx',
    interfaces: [LoggedInCtx]
  };
  function hash($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$hash($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
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
            this.result_0 = await_1(window.crypto.subtle.digest('SHA-256', this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var hashBuffer = this.result_0;
            var uint8 = new Uint8Array(hashBuffer);
            return replace(window.btoa(String.fromCharCode.apply(null, uint8)), 47, 45);
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
  function Player(playlist, killables, idb) {
    this.playlist_0 = playlist;
    this.status = new Var(Player$Status$Stopped_getInstance());
    this.channel = Channel();
    this.audio = invoke(get_audio(document), Player$audio$lambda(this, idb));
    launch(coroutines.GlobalScope, void 0, void 0, Player_init$lambda(this));
    this.element = invoke(get_div(document), Player$element$lambda(this));
  }
  function Player$Status() {
  }
  function Player$Status$Stopped() {
    Player$Status$Stopped_instance = this;
    Player$Status.call(this);
  }
  Player$Status$Stopped.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Stopped',
    interfaces: [Player$Status]
  };
  var Player$Status$Stopped_instance = null;
  function Player$Status$Stopped_getInstance() {
    if (Player$Status$Stopped_instance === null) {
      new Player$Status$Stopped();
    }
    return Player$Status$Stopped_instance;
  }
  function Player$Status$Playing() {
    Player$Status$Playing_instance = this;
    Player$Status.call(this);
  }
  Player$Status$Playing.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Playing',
    interfaces: [Player$Status]
  };
  var Player$Status$Playing_instance = null;
  function Player$Status$Playing_getInstance() {
    if (Player$Status$Playing_instance === null) {
      new Player$Status$Playing();
    }
    return Player$Status$Playing_instance;
  }
  function Player$Status$Paused() {
    Player$Status$Paused_instance = this;
    Player$Status.call(this);
  }
  Player$Status$Paused.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Paused',
    interfaces: [Player$Status]
  };
  var Player$Status$Paused_instance = null;
  function Player$Status$Paused_getInstance() {
    if (Player$Status$Paused_instance === null) {
      new Player$Status$Paused();
    }
    return Player$Status$Paused_instance;
  }
  Player$Status.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Status',
    interfaces: []
  };
  function Player$Event() {
  }
  function Player$Event$Play() {
    Player$Event$Play_instance = this;
    Player$Event.call(this);
  }
  Player$Event$Play.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Play',
    interfaces: [Player$Event]
  };
  var Player$Event$Play_instance = null;
  function Player$Event$Play_getInstance() {
    if (Player$Event$Play_instance === null) {
      new Player$Event$Play();
    }
    return Player$Event$Play_instance;
  }
  function Player$Event$Pause() {
    Player$Event$Pause_instance = this;
    Player$Event.call(this);
  }
  Player$Event$Pause.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Pause',
    interfaces: [Player$Event]
  };
  var Player$Event$Pause_instance = null;
  function Player$Event$Pause_getInstance() {
    if (Player$Event$Pause_instance === null) {
      new Player$Event$Pause();
    }
    return Player$Event$Pause_instance;
  }
  function Player$Event$Stop() {
    Player$Event$Stop_instance = this;
    Player$Event.call(this);
  }
  Player$Event$Stop.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Stop',
    interfaces: [Player$Event]
  };
  var Player$Event$Stop_instance = null;
  function Player$Event$Stop_getInstance() {
    if (Player$Event$Stop_instance === null) {
      new Player$Event$Stop();
    }
    return Player$Event$Stop_instance;
  }
  function Player$Event$Next() {
    Player$Event$Next_instance = this;
    Player$Event.call(this);
  }
  Player$Event$Next.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Next',
    interfaces: [Player$Event]
  };
  var Player$Event$Next_instance = null;
  function Player$Event$Next_getInstance() {
    if (Player$Event$Next_instance === null) {
      new Player$Event$Next();
    }
    return Player$Event$Next_instance;
  }
  function Player$Event$Previous() {
    Player$Event$Previous_instance = this;
    Player$Event.call(this);
  }
  Player$Event$Previous.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Previous',
    interfaces: [Player$Event]
  };
  var Player$Event$Previous_instance = null;
  function Player$Event$Previous_getInstance() {
    if (Player$Event$Previous_instance === null) {
      new Player$Event$Previous();
    }
    return Player$Event$Previous_instance;
  }
  Player$Event.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Event',
    interfaces: []
  };
  function Player$post$lambda(this$Player_0, closure$e_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$Player$post$lambda(this$Player_0, closure$e_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Player$post$lambda(this$Player_0, closure$e_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Player = this$Player_0;
    this.local$closure$e = closure$e_0;
  }
  Coroutine$Player$post$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Player$post$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Player$post$lambda.prototype.constructor = Coroutine$Player$post$lambda;
  Coroutine$Player$post$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Player.channel.send_11rb$(this.local$closure$e, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  Player.prototype.post_n4t1my$ = function (e) {
    launch(coroutines.GlobalScope, void 0, void 0, Player$post$lambda(this, e));
  };
  function Player$audio$lambda$lambda(this$Player_0, closure$idb_0, this$_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$Player$audio$lambda$lambda(this$Player_0, closure$idb_0, this$_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Player$audio$lambda$lambda(this$Player_0, closure$idb_0, this$_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Player = this$Player_0;
    this.local$closure$idb = closure$idb_0;
    this.local$this$ = this$_0;
  }
  Coroutine$Player$audio$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Player$audio$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Player$audio$lambda$lambda.prototype.constructor = Coroutine$Player$audio$lambda$lambda;
  Coroutine$Player$audio$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Player.playlist_0.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var hash = this.result_0;
            if (hash != null) {
              this.state_0 = 3;
              this.result_0 = readMp3(this.local$closure$idb, hash, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 3:
            var mp3 = this.result_0;
            if (mp3 != null) {
              this.local$this$.src = URL.createObjectURL(mp3);
              return this.local$this$.load(), Unit;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return Unit;
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
  function Player$audio$lambda(this$Player, closure$idb) {
    return function ($receiver) {
      launch(coroutines.GlobalScope, void 0, void 0, Player$audio$lambda$lambda(this$Player, closure$idb, $receiver));
      return Unit;
    };
  }
  function Player_init$lambda$globals(e, fn_0, continuation_0, suspended) {
    var instance = new Coroutine$Player_init$lambda$globals(e, fn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Player_init$lambda$globals(e, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$fn = fn_0;
  }
  Coroutine$Player_init$lambda$globals.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Player_init$lambda$globals.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Player_init$lambda$globals.prototype.constructor = Coroutine$Player_init$lambda$globals;
  Coroutine$Player_init$lambda$globals.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$fn(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function Player_init$lambda$lambda(continuation_0, suspended) {
    var instance = new Coroutine$Player_init$lambda$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Player_init$lambda$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$Player_init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Player_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Player_init$lambda$lambda.prototype.constructor = Coroutine$Player_init$lambda$lambda;
  Coroutine$Player_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
          case 1:
            throw this.exception_0;
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
  function Player_init$lambda(this$Player_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$Player_init$lambda(this$Player_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Player_init$lambda(this$Player_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Player = this$Player_0;
    this.local$tmp$ = void 0;
    this.local$globals = void 0;
  }
  Coroutine$Player_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Player_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Player_init$lambda.prototype.constructor = Coroutine$Player_init$lambda;
  Coroutine$Player_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$globals = Player_init$lambda$globals;
            this.local$tmp$ = this.local$this$Player.channel.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 7;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var e_0 = this.result_0;
            this.state_0 = 6;
            this.result_0 = this.local$globals(e_0, Player_init$lambda$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 2;
            continue;
          case 7:
            return Unit;
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
  function Player$element$lambda$lambda($receiver) {
    flexCenter($receiver);
    return Unit;
  }
  function Player$element$lambda$lambda$lambda($receiver) {
    get_dFlex($receiver);
    get_flexColumn($receiver);
    return Unit;
  }
  function Player$element$lambda$lambda$lambda$lambda($receiver) {
    get_border($receiver);
    get_rounded($receiver);
    get_p1($receiver);
    get_m1($receiver);
    return Unit;
  }
  function Player$element$lambda$lambda$lambda_0($receiver) {
    get_cls($receiver).invoke_cr52h1$(Player$element$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function Player$element$lambda$lambda$lambda$lambda_0($receiver) {
    get_dFlex($receiver);
    get_flexRow($receiver);
    return Unit;
  }
  function Player$element$lambda$lambda$lambda$mediaBtn$lambda$lambda($receiver) {
    get_btnOutlinePrimary($receiver);
    return Unit;
  }
  function Player$element$lambda$lambda$lambda$mediaBtn$lambda(closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(Player$element$lambda$lambda$lambda$mediaBtn$lambda$lambda);
      closure$fn($receiver);
      return Unit;
    };
  }
  function Player$element$lambda$lambda$lambda$mediaBtn(this$) {
    return function (facls, fn) {
      faButton(this$, facls, Player$element$lambda$lambda$lambda$mediaBtn$lambda(fn));
    };
  }
  function Player$element$lambda$lambda$lambda$lambda$lambda(this$Player) {
    return function (it) {
      this$Player.post_n4t1my$(Player$Event$Previous_getInstance());
      return Unit;
    };
  }
  function Player$element$lambda$lambda$lambda$lambda_1(this$Player) {
    return function ($receiver) {
      clickEvent($receiver, Player$element$lambda$lambda$lambda$lambda$lambda(this$Player));
      return Unit;
    };
  }
  function Player$element$lambda$lambda$lambda$lambda$lambda_0(this$Player) {
    return function () {
      return !equals(this$Player.status.invoke(), Player$Status$Playing_getInstance());
    };
  }
  function Player$element$lambda$lambda$lambda$lambda$lambda_1(this$Player) {
    return function (it) {
      this$Player.post_n4t1my$(Player$Event$Play_getInstance());
      return Unit;
    };
  }
  function Player$element$lambda$lambda$lambda$lambda_2(this$Player) {
    return function ($receiver) {
      rxDisplayed($receiver, Player$element$lambda$lambda$lambda$lambda$lambda_0(this$Player));
      clickEvent($receiver, Player$element$lambda$lambda$lambda$lambda$lambda_1(this$Player));
      return Unit;
    };
  }
  function Player$element$lambda$lambda$lambda$lambda$lambda_2(this$Player) {
    return function () {
      return equals(this$Player.status.invoke(), Player$Status$Playing_getInstance());
    };
  }
  function Player$element$lambda$lambda$lambda$lambda$lambda_3(this$Player) {
    return function (it) {
      this$Player.post_n4t1my$(Player$Event$Pause_getInstance());
      return Unit;
    };
  }
  function Player$element$lambda$lambda$lambda$lambda_3(this$Player) {
    return function ($receiver) {
      rxDisplayed($receiver, Player$element$lambda$lambda$lambda$lambda$lambda_2(this$Player));
      clickEvent($receiver, Player$element$lambda$lambda$lambda$lambda$lambda_3(this$Player));
      return Unit;
    };
  }
  function Player$element$lambda$lambda$lambda$lambda$lambda_4(this$Player) {
    return function (it) {
      this$Player.post_n4t1my$(Player$Event$Stop_getInstance());
      return Unit;
    };
  }
  function Player$element$lambda$lambda$lambda$lambda$lambda_5(this$Player) {
    return function () {
      return !equals(this$Player.status.invoke(), Player$Status$Stopped_getInstance());
    };
  }
  function Player$element$lambda$lambda$lambda$lambda_4(this$Player) {
    return function ($receiver) {
      clickEvent($receiver, Player$element$lambda$lambda$lambda$lambda$lambda_4(this$Player));
      rxEnabled($receiver, Player$element$lambda$lambda$lambda$lambda$lambda_5(this$Player));
      return Unit;
    };
  }
  function Player$element$lambda$lambda$lambda$lambda$lambda_6(this$Player) {
    return function (it) {
      this$Player.post_n4t1my$(Player$Event$Next_getInstance());
      return Unit;
    };
  }
  function Player$element$lambda$lambda$lambda$lambda_5(this$Player) {
    return function ($receiver) {
      clickEvent($receiver, Player$element$lambda$lambda$lambda$lambda$lambda_6(this$Player));
      return Unit;
    };
  }
  function Player$element$lambda$lambda$lambda_1(this$Player) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(Player$element$lambda$lambda$lambda$lambda_0);
      var mediaBtn = Player$element$lambda$lambda$lambda$mediaBtn($receiver);
      mediaBtn(get_stepBackward(Fa.Companion), Player$element$lambda$lambda$lambda$lambda_1(this$Player));
      mediaBtn(get_play(Fa.Companion), Player$element$lambda$lambda$lambda$lambda_2(this$Player));
      mediaBtn(get_pause(Fa.Companion), Player$element$lambda$lambda$lambda$lambda_3(this$Player));
      mediaBtn(get_stop(Fa.Companion), Player$element$lambda$lambda$lambda$lambda_4(this$Player));
      mediaBtn(get_stepForward(Fa.Companion), Player$element$lambda$lambda$lambda$lambda_5(this$Player));
      return Unit;
    };
  }
  function Player$element$lambda$lambda_0(this$Player) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(Player$element$lambda$lambda$lambda);
      invoke(get_div($receiver), Player$element$lambda$lambda$lambda_0);
      invoke(get_div($receiver), Player$element$lambda$lambda$lambda_1(this$Player));
      return Unit;
    };
  }
  function Player$element$lambda(this$Player) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(Player$element$lambda$lambda);
      invoke(get_div($receiver), Player$element$lambda$lambda_0(this$Player));
      return Unit;
    };
  }
  Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: []
  };
  function playlists$lambda$lambda$lambda$lambda($receiver) {
    $receiver.innerText = 'Playlists';
    return Unit;
  }
  function playlists$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_m1($receiver);
    get_btnPrimary($receiver);
    return Unit;
  }
  function playlists$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(playlists$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function playlists$lambda$lambda$lambda$lambda_0($receiver) {
    faButton($receiver, get_plus(Fa.Companion), playlists$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function playlists$lambda$lambda$lambda(closure$close) {
    return function ($receiver) {
      $receiver.backButton_o14v8n$(closure$close);
      $receiver.middleTitle_9f50g3$(playlists$lambda$lambda$lambda$lambda);
      $receiver.right.invoke_gk6m2q$(playlists$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function playlists$lambda$lambda$lambda$lambda_1($receiver) {
    get_scrollVertical($receiver);
    return Unit;
  }
  function playlists$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    get_m1($receiver);
    get_listGroup($receiver);
    return Unit;
  }
  function playlists$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.innerText = 'All Local Songs';
    return Unit;
  }
  function playlists$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_btnOutlineSuccess($receiver);
    return Unit;
  }
  function playlists$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(playlists$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function playlists$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    faButton($receiver, get_play(Fa.Companion), playlists$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function playlists$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    invoke($receiver.text, playlists$lambda$lambda$lambda$lambda$lambda$lambda_0);
    invoke($receiver.buttons, playlists$lambda$lambda$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function playlists$lambda$lambda$lambda$lambda_2($receiver) {
    get_cls($receiver).invoke_cr52h1$(playlists$lambda$lambda$lambda$lambda$lambda_0);
    clickItemButtons($receiver, playlists$lambda$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function playlists$lambda$lambda$lambda_0($receiver) {
    get_cls($receiver).invoke_cr52h1$(playlists$lambda$lambda$lambda$lambda_1);
    invoke(get_div($receiver), playlists$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function playlists$lambda$lambda(closure$close) {
    return function ($receiver) {
      $receiver.top_vesf63$(playlists$lambda$lambda$lambda(closure$close));
      invoke($receiver.main, playlists$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function playlists$lambda(closure$killables, closure$close) {
    return function ($receiver) {
      screenLayout($receiver, closure$killables, playlists$lambda$lambda(closure$close));
      return Unit;
    };
  }
  function playlists(panel, killables, close) {
    panel.newRoot_iw61es$(playlists$lambda(killables, close));
  }
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function Playlist(idb, userSongsDB, killables) {
    this.idb_0 = idb;
    this.userSongsDB_0 = userSongsDB;
    this.dontLikes = LinkedHashSet_init();
    this.likes = LinkedHashSet_init();
    var uskills = LinkedHashMap_init();
    killables.plusAssign_wii6vi$(this.userSongsDB_0.queryCache.listen_bpy6tt$(Playlist_init$lambda(this, uskills, killables)));
  }
  function Playlist$like$lambda(this$Playlist_0, closure$id_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$Playlist$like$lambda(this$Playlist_0, closure$id_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Playlist$like$lambda(this$Playlist_0, closure$id_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Playlist = this$Playlist_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$Playlist$like$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Playlist$like$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Playlist$like$lambda.prototype.constructor = Coroutine$Playlist$like$lambda;
  Coroutine$Playlist$like$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Playlist.userSongsDB_0.get_v3d2j5$(this.local$closure$id, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0;
            $receiver.state.cv = UserSongState.Like;
            $receiver.props.save();
            return $receiver;
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
  Playlist.prototype.like_61zpoe$ = function (id) {
    this.dontLikes.remove_11rb$(id);
    this.likes.add_11rb$(id);
    launch(coroutines.GlobalScope, void 0, void 0, Playlist$like$lambda(this, id));
  };
  function Playlist$dontLike$lambda(this$Playlist_0, closure$id_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$Playlist$dontLike$lambda(this$Playlist_0, closure$id_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Playlist$dontLike$lambda(this$Playlist_0, closure$id_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Playlist = this$Playlist_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$Playlist$dontLike$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Playlist$dontLike$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Playlist$dontLike$lambda.prototype.constructor = Coroutine$Playlist$dontLike$lambda;
  Coroutine$Playlist$dontLike$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Playlist.userSongsDB_0.get_v3d2j5$(this.local$closure$id, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0;
            $receiver.state.cv = UserSongState.DontLike;
            $receiver.props.save();
            return $receiver;
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
  Playlist.prototype.dontLike_61zpoe$ = function (id) {
    this.dontLikes.add_11rb$(id);
    this.likes.remove_11rb$(id);
    launch(coroutines.GlobalScope, void 0, void 0, Playlist$dontLike$lambda(this, id));
  };
  function Playlist$next$lambda(closure$local, this$Playlist) {
    return function () {
      return minus(minus(closure$local, this$Playlist.likes), this$Playlist.dontLikes);
    };
  }
  function Playlist$next$lambda_0(closure$local, this$Playlist) {
    return function () {
      return minus(closure$local, this$Playlist.dontLikes);
    };
  }
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.collections.random_iscd7z$;
  Playlist.prototype.next = function (continuation_0, suspended) {
    var instance = new Coroutine$next(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$next($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$next.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$next.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$next.prototype.constructor = Coroutine$next;
  Coroutine$next.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = getAllKeys(this.$this.idb_0, get_Mp3Store(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var local = toSet(this.result_0);
            var lists = listOf([Playlist$next$lambda(local, this.$this), Playlist$next$lambda_0(local, this.$this)]);
            this.local$tmp$ = lists.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 5;
              continue;
            }

            var lfn = this.local$tmp$.next();
            var list = lfn();
            if (!list.isEmpty()) {
              return random(list, Random.Default);
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 3;
            continue;
          case 5:
            return null;
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
  function Playlist_init$lambda$lambda$lambda(this$Playlist, closure$id) {
    return function (s) {
      if (equals(s, common.None)) {
        var $receiver = this$Playlist.dontLikes;
        var element = closure$id;
        $receiver.remove_11rb$(element);
        var $receiver_0 = this$Playlist.likes;
        var element_0 = closure$id;
        $receiver_0.remove_11rb$(element_0);
      }
       else if (equals(s, new Some(UserSongState.Like))) {
        var $receiver_1 = this$Playlist.dontLikes;
        var element_1 = closure$id;
        $receiver_1.remove_11rb$(element_1);
        var $receiver_2 = this$Playlist.likes;
        var element_2 = closure$id;
        $receiver_2.add_11rb$(element_2);
      }
       else if (equals(s, new Some(UserSongState.DontLike))) {
        var $receiver_3 = this$Playlist.dontLikes;
        var element_3 = closure$id;
        $receiver_3.add_11rb$(element_3);
        var $receiver_4 = this$Playlist.likes;
        var element_4 = closure$id;
        $receiver_4.remove_11rb$(element_4);
      }
      return Unit;
    };
  }
  function Playlist_init$lambda(this$Playlist, closure$uskills, closure$killables) {
    return function (d) {
      var $receiver = d.removed;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$Playlist_0 = this$Playlist;
        var closure$uskills_0 = closure$uskills;
        var tmp$_0;
        var id = element.props.idOrFail;
        this$Playlist_0.dontLikes.remove_11rb$(id);
        (tmp$_0 = closure$uskills_0.remove_11rb$(id)) != null ? (tmp$_0.kill(), Unit) : null;
      }
      var $receiver_0 = d.added;
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        var closure$killables_0 = closure$killables;
        var closure$uskills_1 = closure$uskills;
        var this$Playlist_1 = this$Playlist;
        var id_0 = element_0.props.idOrFail;
        var ks = closure$killables_0.killables();
        closure$uskills_1.put_xwzc9p$(id_0, ks);
        ks.plusAssign_wii6vi$(element_0.state.initial.forEach_qlkmfe$(Playlist_init$lambda$lambda$lambda(this$Playlist_1, id_0)));
      }
      return Unit;
    };
  }
  Playlist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Playlist',
    interfaces: []
  };
  function SongStorageDB(db, killables) {
    this.queryCache = QueryCache.Companion.hasProps_1iowje$(db, get_storage(musiclib.music.app), SongStorageDB$queryCache$lambda, killables);
  }
  function SongStorageDB$queryCache$lambda() {
    return new StoreState();
  }
  SongStorageDB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SongStorageDB',
    interfaces: []
  };
  function defaultRecord() {
    var $receiver = {};
    $receiver.count = 0;
    $receiver.size = 0;
    $receiver.duration = 0.0;
    return $receiver;
  }
  function orDefault($receiver) {
    return $receiver != null ? $receiver : defaultRecord();
  }
  var MusicDBStatusKey;
  function DBStatus(idb, killables, record) {
    this.idb = idb;
    this.recordString_0 = new Var(JSON.stringify(record));
    this.recordObject_0 = Rx_init(DBStatus$recordObject$lambda(this));
    this.size = Rx_init(DBStatus$size$lambda(this));
    this.count = Rx_init(DBStatus$count$lambda(this));
    this.duration = Rx_init(DBStatus$duration$lambda(this));
    var storageListener = DBStatus_init$lambda(this);
    window.addEventListener('storage', storageListener);
    killables.plusAssign_o14v8n$(DBStatus_init$lambda_0(storageListener));
  }
  function DBStatus$update$then$lambda(closure$cd) {
    return function (it) {
      closure$cd.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  function DBStatus$update$then(closure$cd) {
    return function ($receiver, fn) {
      then($receiver, fn, DBStatus$update$then$lambda(closure$cd));
    };
  }
  function DBStatus$update$lambda$lambda(closure$cd) {
    return function (it) {
      closure$cd.complete_11rb$(Unit);
      return Unit;
    };
  }
  function DBStatus$update$lambda(closure$fn, this$DBStatus, closure$store, closure$cd, closure$then) {
    return function (r) {
      var $receiver = orDefault(r);
      closure$fn($receiver);
      var out = $receiver;
      var tmp$ = localStorage;
      var tmp$_0 = MusicDBStatusKey;
      var $receiver_0 = JSON.stringify(out);
      this$DBStatus.onRecordString_0($receiver_0);
      tmp$[tmp$_0] = $receiver_0;
      closure$then(closure$store.put(out, MusicDBStatusKey), DBStatus$update$lambda$lambda(closure$cd));
      return Unit;
    };
  }
  DBStatus.prototype.update_0 = function (fn_0, continuation_0, suspended) {
    var instance = new Coroutine$update_0(this, fn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$update_0($this, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fn = fn_0;
  }
  Coroutine$update_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$update_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$update_0.prototype.constructor = Coroutine$update_0;
  Coroutine$update_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tx = this.$this.idb.transaction(get_DBSingletons(), 'readwrite');
            var store = tx.objectStore(get_DBSingletons());
            var cd = CompletableDeferred();
            var then = DBStatus$update$then(cd);
            then(store.get(MusicDBStatusKey), DBStatus$update$lambda(this.local$fn, this.$this, store, cd, then));
            this.state_0 = 2;
            this.result_0 = cd.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function DBStatus$add$lambda(closure$size, closure$duration) {
    return function ($receiver) {
      $receiver.count = $receiver.count + 1 | 0;
      $receiver.size = $receiver.size + closure$size | 0;
      $receiver.duration = $receiver.duration + closure$duration;
      return Unit;
    };
  }
  DBStatus.prototype.add_5wr77w$ = function (size_0, duration_0, continuation_0, suspended) {
    var instance = new Coroutine$add_5wr77w$(this, size_0, duration_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$add_5wr77w$($this, size_0, duration_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$size = size_0;
    this.local$duration = duration_0;
  }
  Coroutine$add_5wr77w$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$add_5wr77w$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$add_5wr77w$.prototype.constructor = Coroutine$add_5wr77w$;
  Coroutine$add_5wr77w$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.update_0(DBStatus$add$lambda(this.local$size, this.local$duration), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function DBStatus$remove$lambda(closure$size, closure$duration) {
    return function ($receiver) {
      $receiver.count = $receiver.count - 1 | 0;
      $receiver.size = $receiver.size - closure$size | 0;
      $receiver.duration = $receiver.duration - closure$duration;
      return Unit;
    };
  }
  DBStatus.prototype.remove_5wr77w$ = function (size_0, duration_0, continuation_0, suspended) {
    var instance = new Coroutine$remove_5wr77w$(this, size_0, duration_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$remove_5wr77w$($this, size_0, duration_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$size = size_0;
    this.local$duration = duration_0;
  }
  Coroutine$remove_5wr77w$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$remove_5wr77w$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$remove_5wr77w$.prototype.constructor = Coroutine$remove_5wr77w$;
  Coroutine$remove_5wr77w$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.update_0(DBStatus$remove$lambda(this.local$size, this.local$duration), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function DBStatus$reset$lambda($receiver) {
    $receiver.count = 0;
    $receiver.size = 0;
    $receiver.duration = 0.0;
    return Unit;
  }
  DBStatus.prototype.reset = function (continuation_0, suspended) {
    var instance = new Coroutine$reset(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$reset($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$reset.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$reset.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$reset.prototype.constructor = Coroutine$reset;
  Coroutine$reset.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.update_0(DBStatus$reset$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  DBStatus.prototype.onRecordString_0 = function (s) {
    this.recordString_0.now = s;
  };
  function DBStatus$recordObject$lambda(this$DBStatus) {
    return function () {
      return JSON.parse(this$DBStatus.recordString_0.invoke());
    };
  }
  function DBStatus$size$lambda(this$DBStatus) {
    return function () {
      return this$DBStatus.recordObject_0.invoke().size;
    };
  }
  function DBStatus$count$lambda(this$DBStatus) {
    return function () {
      return this$DBStatus.recordObject_0.invoke().count;
    };
  }
  function DBStatus$duration$lambda(this$DBStatus) {
    return function () {
      return this$DBStatus.recordObject_0.invoke().duration;
    };
  }
  function DBStatus_init$lambda(this$DBStatus) {
    return function (it) {
      var tmp$;
      if ((tmp$ = localStorage[MusicDBStatusKey]) != null) {
        this$DBStatus.onRecordString_0(tmp$);
      }
      return Unit;
    };
  }
  function DBStatus_init$lambda_0(closure$storageListener) {
    return function () {
      window.removeEventListener('storage', closure$storageListener);
      return Unit;
    };
  }
  DBStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DBStatus',
    interfaces: []
  };
  function DBStatus_init(idb, killables, $this) {
    $this = $this || Object.create(DBStatus.prototype);
    var tmp$;
    DBStatus.call($this, idb, killables, orDefault((tmp$ = localStorage[MusicDBStatusKey]) != null ? JSON.parse(tmp$) : null));
    return $this;
  }
  function status$lambda$lambda($receiver) {
    get_m1($receiver);
    get_p1($receiver);
    get_border($receiver);
    get_rounded($receiver);
    return Unit;
  }
  function status$lambda$lambda_0($receiver) {
    $receiver.innerText = 'Local Database';
    return Unit;
  }
  function status$lambda$lambda$lambda($receiver) {
    $receiver.innerText = 'Size';
    return Unit;
  }
  function status$lambda$lambda$lambda$lambda(this$status) {
    return function () {
      return this$status.dbStatus.size.invoke().toString();
    };
  }
  function status$lambda$lambda$lambda_0(this$status, closure$killables) {
    return function ($receiver) {
      addedTo(rxText($receiver, status$lambda$lambda$lambda$lambda(this$status)), closure$killables);
      return Unit;
    };
  }
  function status$lambda$lambda$lambda_1($receiver) {
    $receiver.innerText = 'Songs';
    return Unit;
  }
  function status$lambda$lambda$lambda$lambda_0(this$status) {
    return function () {
      return this$status.dbStatus.count.invoke().toString();
    };
  }
  function status$lambda$lambda$lambda_2(this$status, closure$killables) {
    return function ($receiver) {
      addedTo(rxText($receiver, status$lambda$lambda$lambda$lambda_0(this$status)), closure$killables);
      return Unit;
    };
  }
  function status$lambda$lambda$lambda_3($receiver) {
    $receiver.innerText = 'Time';
    return Unit;
  }
  function status$lambda$lambda$lambda$lambda_1(this$status) {
    return function () {
      return this$status.dbStatus.duration.invoke().toString();
    };
  }
  function status$lambda$lambda$lambda_4(this$status, closure$killables) {
    return function ($receiver) {
      addedTo(rxText($receiver, status$lambda$lambda$lambda$lambda_1(this$status)), closure$killables);
      return Unit;
    };
  }
  function status$lambda$lambda_1(this$status, closure$killables) {
    return function ($receiver) {
      invoke(get_dt($receiver), status$lambda$lambda$lambda);
      invoke(get_dd($receiver), status$lambda$lambda$lambda_0(this$status, closure$killables));
      invoke(get_dt($receiver), status$lambda$lambda$lambda_1);
      invoke(get_dd($receiver), status$lambda$lambda$lambda_2(this$status, closure$killables));
      invoke(get_dt($receiver), status$lambda$lambda$lambda_3);
      invoke(get_dd($receiver), status$lambda$lambda$lambda_4(this$status, closure$killables));
      return Unit;
    };
  }
  function status$lambda(this$status, closure$killables) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(status$lambda$lambda);
      invoke(get_h5($receiver), status$lambda$lambda_0);
      invoke(get_dl($receiver), status$lambda$lambda_1(this$status, closure$killables));
      return Unit;
    };
  }
  function status($receiver, killables) {
    return invoke(get_div(document), status$lambda($receiver, killables));
  }
  function Mp3Tag(artist, title) {
    if (artist === void 0)
      artist = emptyList();
    if (title === void 0)
      title = emptyList();
    this.artist = artist;
    this.title = title;
  }
  Mp3Tag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mp3Tag',
    interfaces: []
  };
  Mp3Tag.prototype.component1 = function () {
    return this.artist;
  };
  Mp3Tag.prototype.component2 = function () {
    return this.title;
  };
  Mp3Tag.prototype.copy_2mkhiy$ = function (artist, title) {
    return new Mp3Tag(artist === void 0 ? this.artist : artist, title === void 0 ? this.title : title);
  };
  Mp3Tag.prototype.toString = function () {
    return 'Mp3Tag(artist=' + Kotlin.toString(this.artist) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  Mp3Tag.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.artist) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  Mp3Tag.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.artist, other.artist) && Kotlin.equals(this.title, other.title)))));
  };
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  function extractMp3Tag$list(closure$tag) {
    return function (frs) {
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = frs.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver = closure$tag.text;
        var key = element.name;
        var tmp$_0;
        var list = (tmp$_0 = $receiver.get_11rb$(key)) != null ? tmp$_0 : emptyList();
        addAll(destination, list);
      }
      return destination;
    };
  }
  function extractMp3Tag($receiver) {
    var tmp$;
    try {
      var tag = id3v2_3($receiver);
      var artists = listOf([Frames_getInstance().TPE1, Frames_getInstance().TPE2, Frames_getInstance().TPE3, Frames_getInstance().TPE4]);
      var titles = listOf([Frames_getInstance().TIT1, Frames_getInstance().TIT2, Frames_getInstance().TIT3]);
      var list = extractMp3Tag$list(tag);
      tmp$ = new Mp3Tag(list(artists), list(titles));
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        try {
          var tag_0 = id3v1($receiver);
          tmp$ = new Mp3Tag(listOf_0(tag_0.artist), listOf_0(tag_0.title));
        }
         catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$ = new Mp3Tag();
          }
           else
            throw e;
        }
      }
       else
        throw e;
    }
    return tmp$;
  }
  function TagDB(db, killables) {
    this.db_0 = db;
    this.songsWrap_0 = get_songs(musiclib.music.app);
    this.map_0 = LinkedHashMap_init();
    var list = new ListenableMutableList();
    list.addListener_ednqrc$(new ListenableList$Listener(TagDB_init$lambda(this), TagDB_init$lambda_0(this)));
    listen(query(this.songsWrap_0, this.db_0), killables, ListenConfig.Companion.hasProps_4r7uln$(list, this.songsWrap_0, TagDB_init$lambda_1));
  }
  function TagDB$get$lambda$lambda(closure$audioLoaded, this$) {
    return function (it) {
      return closure$audioLoaded.complete_11rb$(this$.duration);
    };
  }
  function TagDB$get$lambda(closure$audioSrc, closure$audioLoaded) {
    return function ($receiver) {
      $receiver.src = closure$audioSrc;
      $receiver.ondurationchange = TagDB$get$lambda$lambda(closure$audioLoaded, $receiver);
      $receiver.load();
      return Unit;
    };
  }
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function TagDB$get$join($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(trim(Kotlin.isCharSequence(tmp$_0 = item) ? tmp$_0 : throwCCE()).toString());
    }
    var destination_0 = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (!isBlank(element))
        destination_0.add_11rb$(element);
    }
    return joinToString(distinct(destination_0), '; ');
  }
  TagDB.prototype.get_46owy4$ = function (hash_0, file_0, continuation_0, suspended) {
    var instance = new Coroutine$get_46owy4$(this, hash_0, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$get_46owy4$($this, hash_0, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$def = void 0;
    this.local$f = void 0;
    this.local$tag = void 0;
    this.local$audioSrc = void 0;
    this.local$audioElement = void 0;
    this.local$hash = hash_0;
    this.local$file = file_0;
  }
  Coroutine$get_46owy4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_46owy4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_46owy4$.prototype.constructor = Coroutine$get_46owy4$;
  Coroutine$get_46owy4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var current = this.$this.map_0.get_11rb$(this.local$hash);
            if (current == null) {
              this.local$def = CompletableDeferred();
              this.$this.map_0.put_xwzc9p$(this.local$hash, this.local$def);
              this.state_0 = 2;
              this.result_0 = this.local$file(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$ = current;
              this.state_0 = 4;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var ff = this.result_0;
            this.local$f = ff.first;
            var buffer = ff.second;
            this.local$tag = extractMp3Tag(buffer);
            var audioLoaded = CompletableDeferred();
            this.local$audioSrc = URL.createObjectURL(this.local$f);
            this.local$audioElement = invoke(get_audio(document), TagDB$get$lambda(this.local$audioSrc, audioLoaded));
            this.state_0 = 3;
            this.result_0 = audioLoaded.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var duration = this.result_0;
            this.local$audioElement.src = '';
            URL.revokeObjectURL(this.local$audioSrc);
            var join = TagDB$get$join;
            var $receiver = new Mp3File();
            $receiver.artist.cv = join(this.local$tag.artist);
            $receiver.title.cv = join(this.local$tag.title);
            $receiver.bytes.cv = this.local$f.size;
            $receiver.secs.cv = duration;
            var mp3File = $receiver;
            docRef(this.$this.songsWrap_0.doc_61zpoe$(this.local$hash), this.$this.db_0).set(mp3File.props.write(), setOptionsMerge());
            this.local$tmp$ = this.local$def;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
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
  function TagDB_init$lambda(this$TagDB) {
    return function (f, t) {
      var $receiver = this$TagDB.map_0;
      var key = t.props.idOrFail;
      var tmp$;
      var value = $receiver.get_11rb$(key);
      if (value == null) {
        var answer = CompletableDeferred();
        $receiver.put_xwzc9p$(key, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      tmp$.complete_11rb$(t);
      return Unit;
    };
  }
  function TagDB_init$lambda_0(this$TagDB) {
    return function (f, t) {
      var $receiver = this$TagDB.map_0;
      var key = t.props.idOrFail;
      $receiver.remove_11rb$(key);
      return Unit;
    };
  }
  function TagDB_init$lambda_1() {
    return new Mp3File();
  }
  TagDB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDB',
    interfaces: []
  };
  function UserSongsDB(db, uid, killables) {
    this.db_0 = db;
    this.queryCache = QueryCache.Companion.hasProps_1iowje$(this.db_0, get_usersongs(get_private(musiclib.music.app).doc_61zpoe$(uid)), UserSongsDB$queryCache$lambda, killables);
  }
  function UserSongsDB$get$lambda($receiver) {
    return Unit;
  }
  function UserSongsDB$get$lambda_0(closure$fn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$UserSongsDB$get$lambda(closure$fn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$UserSongsDB$get$lambda(closure$fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
  }
  Coroutine$UserSongsDB$get$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$UserSongsDB$get$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$UserSongsDB$get$lambda.prototype.constructor = Coroutine$UserSongsDB$get$lambda;
  Coroutine$UserSongsDB$get$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new UserSong();
            this.local$closure$fn($receiver);
            return $receiver;
          case 1:
            throw this.exception_0;
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
  UserSongsDB.prototype.get_v3d2j5$ = function (hash, fn, continuation) {
    if (fn === void 0)
      fn = UserSongsDB$get$lambda;
    return this.queryCache.get_pfsz8f$(hash, UserSongsDB$get$lambda_0(fn), continuation);
  };
  function UserSongsDB$queryCache$lambda() {
    return new UserSong();
  }
  UserSongsDB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserSongsDB',
    interfaces: []
  };
  var package$music = _.music || (_.music = {});
  package$music.database_i1esx3$ = database;
  package$music.readMp3Store_ctev6c$ = readMp3Store;
  package$music.readMp3_d3rseq$ = readMp3;
  package$music.home_gx33sq$ = home;
  package$music.ID3v1 = ID3v1;
  package$music.id3v1_m26o6c$ = id3v1;
  Object.defineProperty(Id3Version, 'Companion', {
    get: Id3Version$Companion_getInstance
  });
  package$music.Id3Version = Id3Version;
  Object.defineProperty(Id3Flags, 'Companion', {
    get: Id3Flags$Companion_getInstance
  });
  package$music.Id3Flags = Id3Flags;
  Object.defineProperty(FrameFlags, 'Companion', {
    get: FrameFlags$Companion_getInstance
  });
  package$music.FrameFlags = FrameFlags;
  package$music.asList_lye5cv$ = asList_0;
  package$music.asUint16List_6g99x6$ = asUint16List;
  package$music.asSynchSafeInt_lye5cv$ = asSynchSafeInt;
  package$music.asInt_lye5cv$ = asInt;
  package$music.TagReader = TagReader;
  Object.defineProperty(Encoding, 'ISO_8859_1', {
    get: Encoding$ISO_8859_1_getInstance
  });
  Object.defineProperty(Encoding, 'UTF_16', {
    get: Encoding$UTF_16_getInstance
  });
  Object.defineProperty(Encoding, 'UTF_16BE', {
    get: Encoding$UTF_16BE_getInstance
  });
  Object.defineProperty(Encoding, 'UTF_8', {
    get: Encoding$UTF_8_getInstance
  });
  package$music.Encoding = Encoding;
  package$music.asString_fvdm8x$ = asString;
  package$music.asString_lye5cv$ = asString_0;
  package$music.readAsArrayBuffer_fu744r$ = readAsArrayBuffer;
  package$music.id3v2_3_m26o6c$ = id3v2_3;
  FramesData.CommentKey = FramesData$CommentKey;
  package$music.FramesData = FramesData;
  Frames.prototype.FrameInput = Frames$FrameInput;
  Frames.prototype.Frame = Frames$Frame;
  Frames.prototype.FrameProvider = Frames$FrameProvider;
  Object.defineProperty(package$music, 'Frames', {
    get: Frames_getInstance
  });
  package$music.import_i1esx3$ = import_0;
  Object.defineProperty(package$music, 'Mp3Store', {
    get: get_Mp3Store
  });
  Object.defineProperty(package$music, 'DBSingletons', {
    get: get_DBSingletons
  });
  package$music.main_kand9s$ = main;
  package$music.MusicCtx = MusicCtx;
  package$music.hash_qfdq9h$ = hash;
  Object.defineProperty(Player$Status, 'Stopped', {
    get: Player$Status$Stopped_getInstance
  });
  Object.defineProperty(Player$Status, 'Playing', {
    get: Player$Status$Playing_getInstance
  });
  Object.defineProperty(Player$Status, 'Paused', {
    get: Player$Status$Paused_getInstance
  });
  Player.Status = Player$Status;
  Object.defineProperty(Player$Event, 'Play', {
    get: Player$Event$Play_getInstance
  });
  Object.defineProperty(Player$Event, 'Pause', {
    get: Player$Event$Pause_getInstance
  });
  Object.defineProperty(Player$Event, 'Stop', {
    get: Player$Event$Stop_getInstance
  });
  Object.defineProperty(Player$Event, 'Next', {
    get: Player$Event$Next_getInstance
  });
  Object.defineProperty(Player$Event, 'Previous', {
    get: Player$Event$Previous_getInstance
  });
  Player.Event = Player$Event;
  package$music.Player = Player;
  package$music.playlists_xolv6d$ = playlists;
  package$music.Playlist = Playlist;
  package$music.SongStorageDB = SongStorageDB;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  $$importsForInline$$['appsimake-indexeddb'] = $module$appsimake_indexeddb;
  package$music.DBStatus_init_r8ocpa$ = DBStatus_init;
  package$music.DBStatus = DBStatus;
  package$music.status_l276dz$ = status;
  package$music.Mp3Tag = Mp3Tag;
  package$music.extractMp3Tag_qfdq9h$ = extractMp3Tag;
  package$music.TagDB = TagDB;
  package$music.UserSongsDB = UserSongsDB;
  Mp3Store = named(Mp3Store$lambda).provideDelegate_n5byny$(this, Mp3Store_metadata);
  DBSingletons = named(DBSingletons$lambda).provideDelegate_n5byny$(this, DBSingletons_metadata);
  MusicDBStatusKey = 'appsimake-music-dbstatus';
  main([]);
  Kotlin.defineModule('appsimake-music', _);
  return _;
}(typeof this['appsimake-music'] === 'undefined' ? {} : this['appsimake-music'], kotlin, this['appsimake-fontawesome'], this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-commonui'], this['kotlinx-coroutines-core'], this['appsimake-indexeddb'], this['appsimake-commonshr'], this['appsimake-firebase'], this['appsimake-common'], this['appsimake-commonfb'], this['appsimake-musiclib']);

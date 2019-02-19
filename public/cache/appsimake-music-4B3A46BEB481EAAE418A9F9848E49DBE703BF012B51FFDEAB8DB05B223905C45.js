if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-music'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-indexeddb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-indexeddb' was not found. Please, check whether 'appsimake-indexeddb' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-musiclib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-musiclib' was not found. Please, check whether 'appsimake-musiclib' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-commonlib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-commonlib' was not found. Please, check whether 'appsimake-commonlib' is loaded prior to 'appsimake-music'.");
}
if (typeof this['appsimake-firebaseshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-music'. Its dependency 'appsimake-firebaseshr' was not found. Please, check whether 'appsimake-firebaseshr' is loaded prior to 'appsimake-music'.");
}
this['appsimake-music'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_commonshr, $module$appsimake_commonfb, $module$kotlinx_coroutines_core, $module$appsimake_firebase, $module$appsimake_indexeddb, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_musiclib, $module$appsimake_fontawesome, $module$appsimake_common, $module$appsimake_commonlib, $module$appsimake_firebaseshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var BodyPath = $module$appsimake_commonui.commonui.widget.BodyPath;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Body = $module$appsimake_commonui.commonui.widget.Body;
  var ItemWithViewRx = $module$appsimake_commonui.commonui.widget.ItemWithViewRx;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var throwUPAE = Kotlin.throwUPAE;
  var switchToView = $module$appsimake_commonui.commonui.widget.switchToView_c5r5si$;
  var Var = $module$appsimake_commonshr.rx.Var;
  var ViewImpl_init = $module$appsimake_commonui.commonui.widget.ViewImpl_init_kgemh3$;
  var discardExecutor = $module$appsimake_commonshr.commonshr.discardExecutor_e9pf1l$;
  var get_withCounter = $module$appsimake_commonshr.commonshr.get_withCounter_sb3j39$;
  var UserState = $module$appsimake_commonfb.commonfb.UserState;
  var toUser = $module$appsimake_commonfb.commonfb.toUser_e06ocd$;
  var usericon = $module$appsimake_commonui.commonui.usericon;
  var HoleT = $module$appsimake_commonui.commonui.widget.HoleT;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var commonfb = $module$appsimake_commonfb.commonfb;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var runUserState = $module$appsimake_commonfb.commonfb.runUserState_4by09g$;
  var switchToView_0 = $module$appsimake_commonui.commonui.widget.switchToView_ogke4d$;
  var UserState$LoggedIn = $module$appsimake_commonfb.commonfb.UserState.LoggedIn;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var ViewImpl = $module$appsimake_commonui.commonui.widget.ViewImpl;
  var Factory = $module$appsimake_commonui.commonui.widget.Factory;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var FBApi = $module$appsimake_firebase.firebase.FBApi;
  var HasKillSetAndUIX = $module$appsimake_commonui.commonui.widget.HasKillSetAndUIX;
  var await_1 = $module$appsimake_indexeddb.indexeddb.await_cgxnqj$;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var then = $module$appsimake_indexeddb.indexeddb.then_crilku$;
  var JobKillsImpl_init = $module$appsimake_commonui.commonui.widget.JobKillsImpl_init_5zfklq$;
  var toMutableSet = Kotlin.kotlin.collections.toMutableSet_7wnvza$;
  var RxMutableSet = $module$appsimake_commonshr.rx.RxMutableSet;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var equals = Kotlin.equals;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var JobKillsImpl = $module$appsimake_commonui.commonui.widget.JobKillsImpl;
  var exists = $module$appsimake_indexeddb.indexeddb.exists_g8ohbq$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var get_border = $module$appsimake_bootstrap.bootstrap.get_border_kre7dp$;
  var get_rounded = $module$appsimake_bootstrap.bootstrap.get_rounded_kre7dp$;
  var get_dFlex = $module$appsimake_bootstrap.bootstrap.get_dFlex_kre7dp$;
  var get_flexColumn = $module$appsimake_bootstrap.bootstrap.get_flexColumn_kre7dp$;
  var get_dl = $module$appsimake_domx.domx.get_dl_asww5s$;
  var get_dt = $module$appsimake_domx.domx.get_dt_asww5s$;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var get_dd = $module$appsimake_domx.domx.get_dd_asww5s$;
  var fixedArtist = $module$appsimake_musiclib.musiclib.fixedArtist_78w6vj$;
  var fixedTitle = $module$appsimake_musiclib.musiclib.fixedTitle_78w6vj$;
  var get_groupThousands = $module$appsimake_commonshr.commonshr.get_groupThousands_s8ev3n$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var get_formatSecs = $module$appsimake_commonshr.commonshr.get_formatSecs_s8ev3n$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_flexRow = $module$appsimake_bootstrap.bootstrap.get_flexRow_kre7dp$;
  var get_justifyContentEnd = $module$appsimake_bootstrap.bootstrap.get_justifyContentEnd_kre7dp$;
  var get_widget = $module$appsimake_commonui.commonui.widget.get_widget_asww5s$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_im8gow$;
  var get_play = $module$appsimake_fontawesome.fontawesome.get_play_xml72e$;
  var get_thumbsUp = $module$appsimake_fontawesome.fontawesome.get_thumbsUp_xml72e$;
  var UserSongState = $module$appsimake_musiclib.musiclib.UserSongState;
  var Cls = $module$appsimake_domx.domx.Cls;
  var get_btnSuccess = $module$appsimake_bootstrap.bootstrap.get_btnSuccess_kre7dp$;
  var get_btnSecondary = $module$appsimake_bootstrap.bootstrap.get_btnSecondary_kre7dp$;
  var get_thumbsDown = $module$appsimake_fontawesome.fontawesome.get_thumbsDown_xml72e$;
  var toUid = $module$appsimake_commonfb.commonfb.toUid_i2s2hb$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var addedTo = $module$appsimake_commonshr.killable.addedTo_tjw9ba$;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_3k3t3o$;
  var JobScopeWithView = $module$appsimake_commonui.commonui.widget.JobScopeWithView;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var unboxChar = Kotlin.unboxChar;
  var toChar = Kotlin.toChar;
  var toByte = Kotlin.toByte;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var AbstractList = Kotlin.kotlin.collections.AbstractList;
  var getCallableRef = Kotlin.getCallableRef;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var toCharArray = Kotlin.kotlin.collections.toCharArray_rr68x$;
  var String_0 = Kotlin.kotlin.text.String_4hbowm$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var plus = Kotlin.kotlin.collections.plus_e8164j$;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var Mp3File = $module$appsimake_musiclib.musiclib.Mp3File;
  var musiclib = $module$appsimake_musiclib.musiclib;
  var get_songs = $module$appsimake_musiclib.musiclib.get_songs_lzzonv$;
  var listenToSnapshots = $module$appsimake_commonfb.commonfb.listenToSnapshots_5meen9$;
  var save = $module$appsimake_commonfb.commonfb.save_t7bci5$;
  var get_audio = $module$appsimake_domx.domx.get_audio_asww5s$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var CircularList = $module$appsimake_commonshr.common.CircularList;
  var RxCalc = $module$appsimake_commonshr.rx.RxCalc;
  var get_private = $module$appsimake_commonshr.commonlib.get_private_6l3wi3$;
  var get_usersongs = $module$appsimake_musiclib.musiclib.get_usersongs_13xn5r$;
  var UserSong = $module$appsimake_musiclib.musiclib.UserSong;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var get_indexedDB = $module$appsimake_indexeddb.indexeddb.get_indexedDB_xhrung$;
  var L2 = Kotlin.Long.fromInt(2);
  var throwCCE = Kotlin.throwCCE;
  var L0 = Kotlin.Long.ZERO;
  var process = $module$appsimake_commonshr.commonshr.process_t0ms3j$;
  var toMoves = $module$appsimake_commonshr.commonshr.toMoves_k2zy3$;
  var ForwardBase_init = $module$appsimake_commonui.commonui.widget.ForwardBase_init_kgemh3$;
  var Some = $module$appsimake_commonshr.common.Some;
  var ForwardBase = $module$appsimake_commonui.commonui.widget.ForwardBase;
  var widget = $module$appsimake_commonui.commonui.widget;
  var get_fileImport = $module$appsimake_fontawesome.fontawesome.get_fileImport_xml72e$;
  var get_syncAlt = $module$appsimake_fontawesome.fontawesome.get_syncAlt_xml72e$;
  var get_insert_0 = $module$appsimake_commonui.commonui.widget.get_insert_asww5s$;
  var column = $module$appsimake_bootstrap.bootstrap.column_kre7dp$;
  var get_h6 = $module$appsimake_domx.domx.get_h6_asww5s$;
  var get_groupThousands_0 = $module$appsimake_commonshr.commonshr.get_groupThousands_mts6qi$;
  var numberToInt = Kotlin.numberToInt;
  var row = $module$appsimake_bootstrap.bootstrap.row_kre7dp$;
  var get_list = $module$appsimake_fontawesome.fontawesome.get_list_xml72e$;
  var get_download = $module$appsimake_fontawesome.fontawesome.get_download_xml72e$;
  var get_upload = $module$appsimake_fontawesome.fontawesome.get_upload_xml72e$;
  var get_trashAlt = $module$appsimake_fontawesome.fontawesome.get_trashAlt_xml72e$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var hash = $module$appsimake_common.common.hash_qfdq9h$;
  var UIBase_init = $module$appsimake_commonui.commonui.widget.UIBase_init_kgemh3$;
  var ListenableMutableList = $module$appsimake_common.common.ListenableMutableList;
  var map = $module$appsimake_commonshr.common.map_x7fpzi$;
  var feedTo = $module$appsimake_commonshr.common.feedTo_cenaja$;
  var UIBase = $module$appsimake_commonui.commonui.widget.UIBase;
  var commonui = $module$appsimake_commonui.commonui;
  var get_input = $module$appsimake_domx.domx.get_input_asww5s$;
  var get_dNone = $module$appsimake_bootstrap.bootstrap.get_dNone_kre7dp$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var get_label = $module$appsimake_domx.domx.get_label_asww5s$;
  var get_ref = $module$appsimake_domx.domx.get_ref_ejp6nk$;
  var get_fa = $module$appsimake_fontawesome.fontawesome.get_fa_kre7dp$;
  var get_folderOpen = $module$appsimake_fontawesome.fontawesome.get_folderOpen_xml72e$;
  var faButtonSpan = $module$appsimake_commonui.commonui.faButtonSpan_hq6cqm$;
  var get_btn = $module$appsimake_bootstrap.bootstrap.get_btn_kre7dp$;
  var get_btnPrimary = $module$appsimake_bootstrap.bootstrap.get_btnPrimary_kre7dp$;
  var get_m0 = $module$appsimake_bootstrap.bootstrap.get_m0_kre7dp$;
  var get_file = $module$appsimake_fontawesome.fontawesome.get_file_xml72e$;
  var get_disabled = $module$appsimake_bootstrap.bootstrap.get_disabled_kre7dp$;
  var listenableList = $module$appsimake_domx.domx.listenableList_hqlnvw$;
  var get_ban = $module$appsimake_fontawesome.fontawesome.get_ban_xml72e$;
  var StoreState = $module$appsimake_musiclib.musiclib.StoreState;
  var get_storage = $module$appsimake_musiclib.musiclib.get_storage_lzzonv$;
  var docRef = $module$appsimake_firebase.firebase.firestore.docRef_bi4pki$;
  var query = $module$appsimake_firebase.firebase.firestore.query_vhmfed$;
  var toRxSetWithLookup = $module$appsimake_firebase.firebase.firestore.toRxSetWithLookup_zi47ij$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var commonlib = $module$appsimake_commonlib.commonlib.commonlib;
  var callable = $module$appsimake_commonfb.commonfb.callable_mnr2wa$;
  var collectionRef = $module$appsimake_firebase.firebase.firestore.collectionRef_nabv8k$;
  var report = $module$appsimake_commonshr.commonshr.report_s8jyv4$;
  var flushQueries = $module$appsimake_firebase.firebase.firestore.flushQueries_z82j6a$;
  var get_bars = $module$appsimake_fontawesome.fontawesome.get_bars_xml72e$;
  var get_database = $module$appsimake_fontawesome.fontawesome.get_database_xml72e$;
  var get_signOutAlt = $module$appsimake_fontawesome.fontawesome.get_signOutAlt_xml72e$;
  var userIcon = $module$appsimake_commonui.commonui.usericon.userIcon_vkyhhb$;
  var get_fw = $module$appsimake_fontawesome.fontawesome.get_fw_xml72e$;
  var get_spin = $module$appsimake_fontawesome.fontawesome.get_spin_xml72e$;
  var get_dropdown = $module$appsimake_bootstrap.bootstrap.get_dropdown_kre7dp$;
  var Fa = $module$appsimake_fontawesome.fontawesome.Fa;
  var get_chevronDown = $module$appsimake_fontawesome.fontawesome.get_chevronDown_xml72e$;
  var dataToggleDropdown = $module$appsimake_bootstrap.bootstrap.dataToggleDropdown_v3gdir$;
  var faButton = $module$appsimake_commonui.commonui.faButton_jous2b$;
  var get_dropdownMenu = $module$appsimake_bootstrap.bootstrap.get_dropdownMenu_kre7dp$;
  var get_dropdownMenuRight = $module$appsimake_bootstrap.bootstrap.get_dropdownMenuRight_kre7dp$;
  var plusAssign_0 = $module$appsimake_commonshr.commonshr.plusAssign_rmur43$;
  var clickEvent = $module$appsimake_domx.domx.clickEvent_pofl4w$;
  var dropdownItemAnchor = $module$appsimake_bootstrap.bootstrap.dropdownItemAnchor_fahyz6$;
  var reportd = $module$appsimake_commonshr.commonshr.reportd_za3rmp$;
  var Login = $module$appsimake_commonfb.commonfb.login.Login;
  var get_signInAlt = $module$appsimake_fontawesome.fontawesome.get_signInAlt_xml72e$;
  var ExecImpl_init = $module$appsimake_commonui.commonui.widget.ExecImpl_init_5zfklq$;
  var listen = $module$appsimake_common.common.listen_hgi4ad$;
  var ExecImpl = $module$appsimake_commonui.commonui.widget.ExecImpl;
  var onInterval = $module$appsimake_common.common.onInterval_a3jiyj$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var mediasession = $module$appsimake_commonui.mediasession;
  var get_borderTop = $module$appsimake_bootstrap.bootstrap.get_borderTop_kre7dp$;
  var get_bgLight = $module$appsimake_bootstrap.bootstrap.get_bgLight_kre7dp$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var get_btnOutlinePrimary = $module$appsimake_bootstrap.bootstrap.get_btnOutlinePrimary_kre7dp$;
  var get_button = $module$appsimake_domx.domx.get_button_asww5s$;
  var get_classes = $module$appsimake_domx.domx.get_classes_ejp6nk$;
  var get_x2 = $module$appsimake_fontawesome.fontawesome.get_x2_xml72e$;
  var get_justifyContentCenter = $module$appsimake_bootstrap.bootstrap.get_justifyContentCenter_kre7dp$;
  var get_px2 = $module$appsimake_bootstrap.bootstrap.get_px2_kre7dp$;
  var get_borderPrimary = $module$appsimake_bootstrap.bootstrap.get_borderPrimary_kre7dp$;
  var get_textPrimary = $module$appsimake_bootstrap.bootstrap.get_textPrimary_kre7dp$;
  var get_scrollVertical = $module$appsimake_domx.styles.get_scrollVertical_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_span = $module$appsimake_domx.domx.get_span_asww5s$;
  var rxText = $module$appsimake_bootstrap.bootstrap.rxText_jae58v$;
  var get_p2 = $module$appsimake_bootstrap.bootstrap.get_p2_kre7dp$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_kre7dp$;
  var get_pre = $module$appsimake_domx.domx.get_pre_asww5s$;
  var row_0 = $module$appsimake_bootstrap.bootstrap.row_gnmiz0$;
  var get_flexWrap = $module$appsimake_bootstrap.bootstrap.get_flexWrap_kre7dp$;
  var get_btnGroup = $module$appsimake_bootstrap.bootstrap.get_btnGroup_kre7dp$;
  var get_pause = $module$appsimake_fontawesome.fontawesome.get_pause_xml72e$;
  var get_stepBackward = $module$appsimake_fontawesome.fontawesome.get_stepBackward_xml72e$;
  var rxEnabled = $module$appsimake_domx.domx.rxEnabled_gjielg$;
  var get_backward = $module$appsimake_fontawesome.fontawesome.get_backward_xml72e$;
  var get_forward = $module$appsimake_fontawesome.fontawesome.get_forward_xml72e$;
  var get_stepForward = $module$appsimake_fontawesome.fontawesome.get_stepForward_xml72e$;
  var saveIfDirty = $module$appsimake_firebaseshr.firebaseshr.saveIfDirty_4zsub3$;
  var asExtracted = $module$appsimake_firebaseshr.firebaseshr.asExtracted_datb2l$;
  var waitExtracted = $module$appsimake_firebaseshr.firebaseshr.waitExtracted_datb2l$;
  var filtered = $module$appsimake_commonshr.common.filtered_tu02nm$;
  var CommonFbApi = $module$appsimake_commonfb.commonfb.CommonFbApi;
  var plus_0 = $module$appsimake_commonui.commonui.widget.plus_7510hi$;
  var get_fbapi = $module$appsimake_commonfb.commonfb.get_fbapi_qehkn7$;
  var get_pooStorm = $module$appsimake_fontawesome.fontawesome.get_pooStorm_xml72e$;
  var removeFromParent = $module$appsimake_common.common.removeFromParent_asww5s$;
  var toSetSource = $module$appsimake_firebase.firebase.firestore.toSetSource_muuc72$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var Throwable = Error;
  BootPath.prototype = Object.create(BodyPath.prototype);
  BootPath.prototype.constructor = BootPath;
  Boot.prototype = Object.create(ViewImpl.prototype);
  Boot.prototype.constructor = Boot;
  LocalSongs.prototype = Object.create(JobKillsImpl.prototype);
  LocalSongs.prototype.constructor = LocalSongs;
  UserUnknown.prototype = Object.create(ViewImpl.prototype);
  UserUnknown.prototype.constructor = UserUnknown;
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
  IncludeState$NoSongs.prototype = Object.create(IncludeState.prototype);
  IncludeState$NoSongs.prototype.constructor = IncludeState$NoSongs;
  IncludeState$WithSongs.prototype = Object.create(IncludeState.prototype);
  IncludeState$WithSongs.prototype.constructor = IncludeState$WithSongs;
  LoggedInPath.prototype = Object.create(BootPath.prototype);
  LoggedInPath.prototype.constructor = LoggedInPath;
  DatabasePath.prototype = Object.create(LoggedInPath.prototype);
  DatabasePath.prototype.constructor = DatabasePath;
  Database.prototype = Object.create(ForwardBase.prototype);
  Database.prototype.constructor = Database;
  ImportPath.prototype = Object.create(DatabasePath.prototype);
  ImportPath.prototype.constructor = ImportPath;
  Import.prototype = Object.create(UIBase.prototype);
  Import.prototype.constructor = Import;
  ImportFile.prototype = Object.create(UIBase.prototype);
  ImportFile.prototype.constructor = ImportFile;
  LoggedIn.prototype = Object.create(ForwardBase.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  NotLoggedIn.prototype = Object.create(ForwardBase.prototype);
  NotLoggedIn.prototype.constructor = NotLoggedIn;
  PlayState.prototype = Object.create(ExecImpl.prototype);
  PlayState.prototype.constructor = PlayState;
  Paused.prototype = Object.create(PlayState.prototype);
  Paused.prototype.constructor = Paused;
  VisiblePath.prototype = Object.create(BootPath.prototype);
  VisiblePath.prototype.constructor = VisiblePath;
  PlayerPath.prototype = Object.create(VisiblePath.prototype);
  PlayerPath.prototype.constructor = PlayerPath;
  Player.prototype = Object.create(ExecImpl.prototype);
  Player.prototype.constructor = Player;
  Playing.prototype = Object.create(PlayState.prototype);
  Playing.prototype.constructor = Playing;
  Visible.prototype = Object.create(UIBase.prototype);
  Visible.prototype.constructor = Visible;
  StatusPath.prototype = Object.create(DatabasePath.prototype);
  StatusPath.prototype.constructor = StatusPath;
  Status.prototype = Object.create(UIBase.prototype);
  Status.prototype.constructor = Status;
  function BootPath(boot) {
    BodyPath.call(this, boot.body);
    this.boot = boot;
  }
  BootPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BootPath',
    interfaces: [BodyPath]
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function Boot(parent, from, localSongs) {
    Boot$Companion_getInstance();
    ViewImpl_init(parent, this);
    this.localSongs = localSongs;
    this.body = from.body;
    this.path = new BootPath(this);
    this.tasks = get_withCounter(discardExecutor(this));
    this.userState = new Var(UserState.Unknown);
    this.user_0 = toUser(this.userState, this.kills);
    this.userIcon = this.rx_pn7ch0$(Boot$userIcon$lambda(this));
    this.slots = new Boot$Slots();
    this.rawView_z4hfm2$_0 = ui(this);
    this.contentHole = new HoleT(Boot$contentHole$lambda(this), Boot$contentHole$lambda_0(this));
    this.localSongInfoSource = localSongInfoSource();
    var initial = new UserUnknown(this);
    var fn = this.contentHole;
    this.content = this.views_3ys1gp$(initial, fn);
    this.userSongs = this.map_i8ud5a$(this.content, Boot$userSongs$lambda);
    this.songInfoSource = this.map_i8ud5a$(this.content, Boot$songInfoSource$lambda);
    this.songSource = songSource(this, songInclude(this, this.localSongs, this.map_i8ud5a$(this.userSongs, Boot$songSource$lambda)), this.localSongs);
    this.hasSongsToPlay = this.map_i8ud5a$(this.songSource, Boot$hasSongsToPlay$lambda);
    this.player = this.viewFromRx_ahf225$(this.viewsAny_lqv1tx$(this.slots.player), this.hasSongsToPlay, Boot$player$lambda(this));
    launch(coroutines.GlobalScope, void 0, void 0, Boot_init$lambda(this));
    this.songProcessMap_0 = LinkedHashMap_init();
  }
  function Boot$Companion() {
    Boot$Companion_instance = this;
  }
  function Coroutine$Boot$Companion$create$lambda(closure$body_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$body = closure$body_0;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Boot$Companion$create$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Boot$Companion$create$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Boot$Companion$create$lambda.prototype.constructor = Coroutine$Boot$Companion$create$lambda;
  Coroutine$Boot$Companion$create$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = localDatabase(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var idb = this.result_0;
            this.state_0 = 3;
            this.result_0 = LocalSongs$Companion_getInstance().invoke_u10xpl$(this.local$$receiver, idb, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var localSongs = this.result_0;
            this.local$$receiver_0 = new Boot(this.local$$receiver, new BodyPath(this.local$closure$body), localSongs);
            this.state_0 = 4;
            this.result_0 = this.local$closure$body.content.switchTo_11rb$(ItemWithViewRx.Companion.hasView_38vkk7$(this.local$$receiver, this.local$$receiver_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.local$$receiver_0;
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
  function Boot$Companion$create$lambda(closure$body_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Boot$Companion$create$lambda(closure$body_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Boot$Companion.prototype.create = function (continuation) {
    var body = new Body();
    return body.withChild_p3so7j$(Boot$Companion$create$lambda(body), continuation);
  };
  Boot$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Boot$Companion_instance = null;
  function Boot$Companion_getInstance() {
    if (Boot$Companion_instance === null) {
      new Boot$Companion();
    }
    return Boot$Companion_instance;
  }
  function Boot$Slots() {
    this.top_tg1h2x$_0 = this.top_tg1h2x$_0;
    this.main_ah3ean$_0 = this.main_ah3ean$_0;
    this.toasts_i5pklo$_0 = this.toasts_i5pklo$_0;
    this.player_t2759z$_0 = this.player_t2759z$_0;
  }
  Object.defineProperty(Boot$Slots.prototype, 'top', {
    get: function () {
      if (this.top_tg1h2x$_0 == null)
        return throwUPAE('top');
      return this.top_tg1h2x$_0;
    },
    set: function (top) {
      this.top_tg1h2x$_0 = top;
    }
  });
  Object.defineProperty(Boot$Slots.prototype, 'main', {
    get: function () {
      if (this.main_ah3ean$_0 == null)
        return throwUPAE('main');
      return this.main_ah3ean$_0;
    },
    set: function (main) {
      this.main_ah3ean$_0 = main;
    }
  });
  Object.defineProperty(Boot$Slots.prototype, 'toasts', {
    get: function () {
      if (this.toasts_i5pklo$_0 == null)
        return throwUPAE('toasts');
      return this.toasts_i5pklo$_0;
    },
    set: function (toasts) {
      this.toasts_i5pklo$_0 = toasts;
    }
  });
  Object.defineProperty(Boot$Slots.prototype, 'player', {
    get: function () {
      if (this.player_t2759z$_0 == null)
        return throwUPAE('player');
      return this.player_t2759z$_0;
    },
    set: function (player) {
      this.player_t2759z$_0 = player;
    }
  });
  Boot$Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: []
  };
  Object.defineProperty(Boot.prototype, 'rawView', {
    get: function () {
      return this.rawView_z4hfm2$_0;
    }
  });
  Boot.prototype.like_61zpoe$ = function (id) {
    var tmp$;
    if ((tmp$ = this.userSongs.now) != null) {
      tmp$.like_61zpoe$(id);
    }
  };
  Boot.prototype.dontLike_61zpoe$ = function (id) {
    var tmp$;
    if ((tmp$ = this.userSongs.now) != null) {
      tmp$.dontLike_61zpoe$(id);
    }
  };
  function Coroutine$Boot$play$lambda$lambda(this$Boot_0, closure$vis_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Boot = this$Boot_0;
    this.local$closure$vis = closure$vis_0;
  }
  Coroutine$Boot$play$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Boot$play$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Boot$play$lambda$lambda.prototype.constructor = Coroutine$Boot$play$lambda$lambda;
  Coroutine$Boot$play$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new Visible(this.local$this$Boot);
            this.local$closure$vis.v = $receiver;
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
  function Boot$play$lambda$lambda(this$Boot_0, closure$vis_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Boot$play$lambda$lambda(this$Boot_0, closure$vis_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Boot$play$lambda$lambda$lambda(this$_0, closure$playable_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$closure$playable = closure$playable_0;
  }
  Coroutine$Boot$play$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Boot$play$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Boot$play$lambda$lambda$lambda.prototype.constructor = Coroutine$Boot$play$lambda$lambda$lambda;
  Coroutine$Boot$play$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.player.switchTo_11rb$(new Player(this.local$this$, this.local$closure$playable, true), this);
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
  function Boot$play$lambda$lambda$lambda(this$_0, closure$playable_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Boot$play$lambda$lambda$lambda(this$_0, closure$playable_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Boot$play$lambda(this$Boot_0, closure$playable_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Boot = this$Boot_0;
    this.local$closure$playable = closure$playable_0;
    this.local$vis = void 0;
  }
  Coroutine$Boot$play$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Boot$play$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Boot$play$lambda.prototype.constructor = Coroutine$Boot$play$lambda;
  Coroutine$Boot$play$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$vis = {v: null};
            this.state_0 = 2;
            this.result_0 = switchToView(this.local$this$Boot.player, Boot$play$lambda$lambda(this.local$this$Boot, this.local$vis), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.local$vis.v == null ? throwUPAE('vis') : this.local$vis.v;
            var closure$playable = this.local$closure$playable;
            $receiver.exec(Boot$play$lambda$lambda$lambda($receiver, closure$playable));
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
  function Boot$play$lambda(this$Boot_0, closure$playable_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Boot$play$lambda(this$Boot_0, closure$playable_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Boot.prototype.play_izzmmv$ = function (playable) {
    this.exec(Boot$play$lambda(this, playable));
  };
  function Boot$SongProcess() {
    this.uploading = new Var(false);
    this.downloading = new Var(false);
    this.deletingFromLocal = new Var(false);
    this.deletingFromCloud = new Var(false);
  }
  Boot$SongProcess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SongProcess',
    interfaces: []
  };
  Boot.prototype.processOf_61zpoe$ = function (id) {
    var $receiver = this.songProcessMap_0;
    var tmp$;
    var value = $receiver.get_11rb$(id);
    if (value == null) {
      var answer = new Boot$SongProcess();
      $receiver.put_xwzc9p$(id, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  function Coroutine$Boot$task$lambda(closure$fn_0, closure$process_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$process = closure$process_0;
  }
  Coroutine$Boot$task$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Boot$task$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Boot$task$lambda.prototype.constructor = Coroutine$Boot$task$lambda;
  Coroutine$Boot$task$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = this.local$closure$fn(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            return;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            this.local$closure$process.now = false;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  function Boot$task$lambda(closure$fn_0, closure$process_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Boot$task$lambda(closure$fn_0, closure$process_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Boot.prototype.task_1lt98f$ = function (process, fn) {
    if (!process.now) {
      process.now = true;
      this.path.boot.tasks.exec(Boot$task$lambda(fn, process));
    }
  };
  function Boot$userIcon$lambda(this$Boot) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this$Boot.user_0.invoke()) != null ? tmp$.photoURL : null) != null ? tmp$_0 : usericon.UnknownUserSrc;
    };
  }
  function Boot$contentHole$lambda(this$Boot) {
    return function ($receiver) {
      var $receiver_0 = $receiver.topbar;
      this$Boot.slots.top.prepareOrNull($receiver_0);
      var $receiver_1 = $receiver.content;
      this$Boot.slots.main.prepareOrNull($receiver_1);
      return Unit;
    };
  }
  function Boot$contentHole$lambda_0(this$Boot) {
    return function (cv) {
      this$Boot.slots.top.remAssign_11rb$(cv != null ? cv.topbar : null);
      this$Boot.slots.main.remAssign_11rb$(cv != null ? cv.content : null);
      return Unit;
    };
  }
  function Boot$userSongs$lambda($receiver, it) {
    return it.item.userSongs;
  }
  function Boot$songInfoSource$lambda($receiver, it) {
    return it.item.songInfoSource;
  }
  function Boot$songSource$lambda($receiver, it) {
    return it != null ? it.get : null;
  }
  function Boot$hasSongsToPlay$lambda($receiver, it) {
    return it != null;
  }
  function Coroutine$Boot$player$lambda(this$Boot_0, v_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Boot = this$Boot_0;
    this.local$v = v_0;
  }
  Coroutine$Boot$player$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Boot$player$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Boot$player$lambda.prototype.constructor = Coroutine$Boot$player$lambda;
  Coroutine$Boot$player$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.local$v) {
              var $receiver = new Visible(this.local$this$Boot);
              $receiver.loadNextSong_6taknv$(false);
              tmp$ = $receiver;
            }
             else
              tmp$ = null;
            return tmp$;
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
  function Boot$player$lambda(this$Boot_0) {
    return function (v_0, continuation_0, suspended) {
      var instance = new Coroutine$Boot$player$lambda(this$Boot_0, v_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Boot_init$lambda$lambda$lambda$lambda(this$Boot_0, closure$st_0, closure$app_0, closure$db_0, closure$functions_0, closure$storage_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Boot = this$Boot_0;
    this.local$closure$st = closure$st_0;
    this.local$closure$app = closure$app_0;
    this.local$closure$db = closure$db_0;
    this.local$closure$functions = closure$functions_0;
    this.local$closure$storage = closure$storage_0;
    this.local$this$ = this$_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$Boot_init$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Boot_init$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Boot_init$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$Boot_init$lambda$lambda$lambda$lambda;
  Coroutine$Boot_init$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = this.local$closure$st.user;
            this.local$tmp$_0 = cloudSongInfoSource(this.local$this$, this.local$closure$db);
            this.state_0 = 2;
            this.result_0 = userSongs(this.local$this$.kills, this.local$closure$st.user.uid, this.local$closure$db, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = this.result_0;
            return new LoggedIn(this.local$this$Boot, this.local$tmp$, this.local$closure$app, this.local$closure$db, this.local$closure$functions, this.local$closure$storage, this.local$tmp$_0, tmp$);
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
  function Boot_init$lambda$lambda$lambda$lambda(this$Boot_0, closure$st_0, closure$app_0, closure$db_0, closure$functions_0, closure$storage_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Boot_init$lambda$lambda$lambda$lambda(this$Boot_0, closure$st_0, closure$app_0, closure$db_0, closure$functions_0, closure$storage_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Boot_init$lambda$lambda$lambda$lambda_0(this$Boot_0, closure$app_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Boot = this$Boot_0;
    this.local$closure$app = closure$app_0;
  }
  Coroutine$Boot_init$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Boot_init$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Boot_init$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$Boot_init$lambda$lambda$lambda$lambda_0;
  Coroutine$Boot_init$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new NotLoggedIn(this.local$this$Boot, this.local$closure$app);
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
  function Boot_init$lambda$lambda$lambda$lambda_0(this$Boot_0, closure$app_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Boot_init$lambda$lambda$lambda$lambda_0(this$Boot_0, closure$app_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Boot_init$lambda$lambda$lambda$lambda_1(this$Boot_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Boot = this$Boot_0;
  }
  Coroutine$Boot_init$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Boot_init$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Boot_init$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$Boot_init$lambda$lambda$lambda$lambda_1;
  Coroutine$Boot_init$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new UserUnknown(this.local$this$Boot);
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
  function Boot_init$lambda$lambda$lambda$lambda_1(this$Boot_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Boot_init$lambda$lambda$lambda$lambda_1(this$Boot_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Boot_init$lambda$lambda$lambda(closure$st_0, this$Boot_0, closure$app_0, closure$db_0, closure$functions_0, closure$storage_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$st = closure$st_0;
    this.local$this$Boot = this$Boot_0;
    this.local$closure$app = closure$app_0;
    this.local$closure$db = closure$db_0;
    this.local$closure$functions = closure$functions_0;
    this.local$closure$storage = closure$storage_0;
    this.local$this$ = this$_0;
  }
  Coroutine$Boot_init$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Boot_init$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Boot_init$lambda$lambda$lambda.prototype.constructor = Coroutine$Boot_init$lambda$lambda$lambda;
  Coroutine$Boot_init$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$this$Boot.userState.now = this.local$closure$st;
            tmp$ = this.local$closure$st;
            if (Kotlin.isType(tmp$, UserState$LoggedIn)) {
              this.state_0 = 5;
              this.result_0 = switchToView_0(this.local$this$Boot.content, Boot_init$lambda$lambda$lambda$lambda(this.local$this$Boot, this.local$closure$st, this.local$closure$app, this.local$closure$db, this.local$closure$functions, this.local$closure$storage, this.local$this$), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(tmp$, Object.getPrototypeOf(UserState.NotLoggedIn).constructor)) {
                this.state_0 = 3;
                this.result_0 = switchToView_0(this.local$this$Boot.content, Boot_init$lambda$lambda$lambda$lambda_0(this.local$this$Boot, this.local$closure$app), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.state_0 = 2;
                this.result_0 = switchToView_0(this.local$this$Boot.content, Boot_init$lambda$lambda$lambda$lambda_1(this.local$this$Boot), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            return Unit;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            return Unit;
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
  function Boot_init$lambda$lambda$lambda(closure$st_0, this$Boot_0, closure$app_0, closure$db_0, closure$functions_0, closure$storage_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Boot_init$lambda$lambda$lambda(closure$st_0, this$Boot_0, closure$app_0, closure$db_0, closure$functions_0, closure$storage_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Boot_init$lambda$lambda(this$Boot, closure$app, closure$db, closure$functions, closure$storage) {
    return function ($receiver, st) {
      this$Boot.exec(Boot_init$lambda$lambda$lambda(st, this$Boot, closure$app, closure$db, closure$functions, closure$storage, $receiver));
      return Unit;
    };
  }
  function Coroutine$Boot_init$lambda(this$Boot_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Boot = this$Boot_0;
    this.local$app = void 0;
    this.local$db = void 0;
    this.local$functions = void 0;
    this.local$storage = void 0;
  }
  Coroutine$Boot_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Boot_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Boot_init$lambda.prototype.constructor = Coroutine$Boot_init$lambda;
  Coroutine$Boot_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$app = commonfb.FB.app;
            this.local$db = commonfb.FB.db;
            this.state_0 = 2;
            this.result_0 = commonfb.FB.functions(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$functions = this.result_0;
            this.local$storage = commonfb.FB.storage;
            var $receiver = {};
            $receiver.experimentalTabSynchronization = true;
            this.state_0 = 3;
            this.result_0 = await_0(this.local$db.enablePersistence($receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = await_0(this.local$db.disableNetwork(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = runUserState(this.local$this$Boot, this.local$app, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            return this.local$this$Boot.forEach_5mel8p$(this.result_0, Boot_init$lambda$lambda(this.local$this$Boot, this.local$app, this.local$db, this.local$functions, this.local$storage)), Unit;
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
  function Boot_init$lambda(this$Boot_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Boot_init$lambda(this$Boot_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Boot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Boot',
    interfaces: [ViewImpl]
  };
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda(closure$tsts_0, closure$fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$tsts = closure$tsts_0;
    this.local$closure$fn = closure$fn_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$closure$tsts.toast;
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
  function ui$lambda$lambda$lambda$lambda$lambda(closure$tsts_0, closure$fn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda(closure$tsts_0, closure$fn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda(this$ui, closure$tsts) {
    return function (fn) {
      this$ui.exec(ui$lambda$lambda$lambda$lambda$lambda(closure$tsts, fn));
      return Unit;
    };
  }
  function ui($receiver) {
    var boot = $receiver.slots;
    var $receiver_0 = (new Factory()).screen;
    boot.top = $receiver_0.slots.top;
    boot.player = $receiver_0.slots.bottom;
    boot.main = $receiver_0.toastSlots.content;
    boot.toasts = ui$lambda$lambda$lambda$lambda($receiver, $receiver_0.toastSlots.toasts);
    return $receiver_0.node;
  }
  function MusicApi() {
  }
  MusicApi.prototype.tasksUi_tdhe4g$ = function ($receiver) {
    return tasksUi(this, $receiver, this.path.boot);
  };
  MusicApi.prototype.syncUi_e1rmy3$ = function ($receiver) {
    syncUi(this, $receiver, this.path.loggedIn);
  };
  MusicApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MusicApi',
    interfaces: [HasKillSetAndUIX, FBApi]
  };
  function get_added($receiver) {
    return 'added';
  }
  function get_removed($receiver) {
    return 'removed';
  }
  function LocalSongs(parent, idb, initial) {
    LocalSongs$Companion_getInstance();
    JobKillsImpl_init(parent, this);
    this.idb = idb;
    this.mutableSet_0 = new RxMutableSet(toMutableSet(initial));
    this.set = this.mutableSet_0;
    var $receiver = new BroadcastChannel('appsimake-music-localSongs');
    plusAssign(this.kills, LocalSongs$tabsChannel$lambda$lambda($receiver));
    this.tabsChannel_0 = $receiver;
    this.tabsChannel_0.onmessage = LocalSongs_init$lambda(this);
  }
  function LocalSongs$Companion() {
    LocalSongs$Companion_instance = this;
  }
  function Coroutine$invoke_u10xpl$($this, parent_0, idb_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$parent = parent_0;
    this.local$idb = idb_0;
  }
  Coroutine$invoke_u10xpl$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$invoke_u10xpl$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$invoke_u10xpl$.prototype.constructor = Coroutine$invoke_u10xpl$;
  Coroutine$invoke_u10xpl$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_1(readMp3Store(this.local$idb).getAllKeys(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new LocalSongs(this.local$parent, this.local$idb, toSet(this.result_0));
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
  LocalSongs$Companion.prototype.invoke_u10xpl$ = function (parent_0, idb_0, continuation_0, suspended) {
    var instance = new Coroutine$invoke_u10xpl$(this, parent_0, idb_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  LocalSongs$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LocalSongs$Companion_instance = null;
  function LocalSongs$Companion_getInstance() {
    if (LocalSongs$Companion_instance === null) {
      new LocalSongs$Companion();
    }
    return LocalSongs$Companion_instance;
  }
  LocalSongs.prototype.added_61zpoe$ = function (id) {
    var tmp$ = this.tabsChannel_0;
    var $receiver = {};
    $receiver.id = id;
    $receiver.type = 'added';
    tmp$.postMessage($receiver);
    this.mutableSet_0.add_11rb$(id);
  };
  LocalSongs.prototype.removed_61zpoe$ = function (id) {
    var tmp$ = this.tabsChannel_0;
    var $receiver = {};
    $receiver.id = id;
    $receiver.type = 'removed';
    tmp$.postMessage($receiver);
    this.mutableSet_0.remove_11rb$(id);
  };
  function Coroutine$load_61zpoe$($this, id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$id = id_0;
  }
  Coroutine$load_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$load_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$load_61zpoe$.prototype.constructor = Coroutine$load_61zpoe$;
  Coroutine$load_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readMp3(this.$this.idb, this.local$id, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var blob = this.result_0;
            if (blob == null) {
              this.$this.mutableSet_0.remove_11rb$(this.local$id);
            }

            return blob;
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
  LocalSongs.prototype.load_61zpoe$ = function (id_0, continuation_0, suspended) {
    var instance = new Coroutine$load_61zpoe$(this, id_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$addMp3_izzmmv$($this, playable_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$playable = playable_0;
  }
  Coroutine$addMp3_izzmmv$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$addMp3_izzmmv$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addMp3_izzmmv$.prototype.constructor = Coroutine$addMp3_izzmmv$;
  Coroutine$addMp3_izzmmv$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.addMp3_tdb4ml$(this.local$playable.id, this.local$playable.blob, this);
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
  LocalSongs.prototype.addMp3_izzmmv$ = function (playable_0, continuation_0, suspended) {
    var instance = new Coroutine$addMp3_izzmmv$(this, playable_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$addMp3_tdb4ml$($this, id_0, blob_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$id = id_0;
    this.local$blob = blob_0;
  }
  Coroutine$addMp3_tdb4ml$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$addMp3_tdb4ml$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addMp3_tdb4ml$.prototype.constructor = Coroutine$addMp3_tdb4ml$;
  Coroutine$addMp3_tdb4ml$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_1(writeMp3Store(this.$this.idb).put(this.local$blob, this.local$id), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.added_61zpoe$(this.local$id);
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
  LocalSongs.prototype.addMp3_tdb4ml$ = function (id_0, blob_0, continuation_0, suspended) {
    var instance = new Coroutine$addMp3_tdb4ml$(this, id_0, blob_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$removeMp3_61zpoe$($this, id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$id = id_0;
  }
  Coroutine$removeMp3_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$removeMp3_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$removeMp3_61zpoe$.prototype.constructor = Coroutine$removeMp3_61zpoe$;
  Coroutine$removeMp3_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_1(writeMp3Store(this.$this.idb).delete(this.local$id), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.removed_61zpoe$(this.local$id);
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
  LocalSongs.prototype.removeMp3_61zpoe$ = function (id_0, continuation_0, suspended) {
    var instance = new Coroutine$removeMp3_61zpoe$(this, id_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function LocalSongs$clearMp3s$lambda$lambda(closure$keys, this$LocalSongs, closure$cd) {
    return function (it) {
      var $receiver = closure$keys;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        this$LocalSongs.removed_61zpoe$(element);
      }
      closure$cd.complete_11rb$(Unit);
      return Unit;
    };
  }
  function LocalSongs$clearMp3s$lambda(closure$st, this$LocalSongs, closure$cd) {
    return function (keys) {
      then(closure$st.clear(), LocalSongs$clearMp3s$lambda$lambda(keys, this$LocalSongs, closure$cd));
      return Unit;
    };
  }
  function Coroutine$clearMp3s($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$clearMp3s.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$clearMp3s.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$clearMp3s.prototype.constructor = Coroutine$clearMp3s;
  Coroutine$clearMp3s.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var cd = CompletableDeferred();
            var st = writeMp3Store(this.$this.idb);
            then(st.getAllKeys(), LocalSongs$clearMp3s$lambda(st, this.$this, cd));
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
  LocalSongs.prototype.clearMp3s = function (continuation_0, suspended) {
    var instance = new Coroutine$clearMp3s(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function LocalSongs$tabsChannel$lambda$lambda(closure$it) {
    return function () {
      closure$it.close();
      return Unit;
    };
  }
  function LocalSongs_init$lambda(this$LocalSongs) {
    return function (e) {
      var tmp$;
      var data = e.data;
      tmp$ = data.type;
      if (equals(tmp$, 'added')) {
        var $receiver = this$LocalSongs.mutableSet_0;
        var element = data.id;
        $receiver.add_11rb$(element);
      }
       else {
        if (equals(tmp$, 'removed')) {
          var $receiver_0 = this$LocalSongs.mutableSet_0;
          var element_0 = data.id;
          $receiver_0.remove_11rb$(element_0);
        }
         else
          throw Error_init('Unknown LocalSongEventType: ' + data.type);
      }
      return Unit;
    };
  }
  LocalSongs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalSongs',
    interfaces: [JobKillsImpl]
  };
  function readMp3Store($receiver) {
    return $receiver.transaction(get_Mp3Store()).objectStore(get_Mp3Store());
  }
  function writeMp3Store($receiver) {
    return $receiver.transaction(get_Mp3Store(), 'readwrite').objectStore(get_Mp3Store());
  }
  function readMp3($receiver, hash, continuation) {
    return await_1(readMp3Store($receiver).get(hash), continuation);
  }
  function existsMp3($receiver, hash, continuation) {
    return exists($receiver, get_Mp3Store(), hash, continuation);
  }
  function Coroutine$songUi$lambda$lambda(closure$blob_0, this$songUi_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$blob = closure$blob_0;
    this.local$this$songUi = this$songUi_0;
  }
  Coroutine$songUi$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$songUi$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$songUi$lambda$lambda.prototype.constructor = Coroutine$songUi$lambda$lambda;
  Coroutine$songUi$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$closure$blob(this.local$this$songUi)) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
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
  function songUi$lambda$lambda(closure$blob_0, this$songUi_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$songUi$lambda$lambda(closure$blob_0, this$songUi_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function songUi$lambda$lambda$lambda(closure$tag) {
    return function () {
      return fixedArtist(closure$tag).getOrDefault_11rb$('<unknown>');
    };
  }
  function songUi$lambda$lambda$lambda_0(closure$tag) {
    return function () {
      return fixedTitle(closure$tag).getOrDefault_11rb$('<unknown>');
    };
  }
  function songUi$lambda$lambda$lambda$lambda(it) {
    return get_groupThousands(it);
  }
  function songUi$lambda$lambda$lambda_1(closure$tag) {
    return function () {
      return closure$tag.bytes.initial.invoke().map_2o04qz$(songUi$lambda$lambda$lambda$lambda).getOrDefault_11rb$('<unknown>');
    };
  }
  function songUi$lambda$lambda$lambda$lambda_0(it) {
    return get_formatSecs(roundToInt(it));
  }
  function songUi$lambda$lambda$lambda_2(closure$tag) {
    return function () {
      return closure$tag.secs.initial.invoke().map_2o04qz$(songUi$lambda$lambda$lambda$lambda_0).getOrDefault_11rb$('<unknown>');
    };
  }
  function songUi$lambda$lambda_0(closure$fileName, closure$tag, this$songUi) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      if (closure$fileName != null) {
        var fn = closure$fileName;
        remAssign(get_dt($receiver), 'Filename');
        remAssign(get_dd($receiver), fn);
      }
      remAssign(get_dt($receiver), 'Artist');
      this$songUi.remAssign_7fncnf$(get_dd($receiver), songUi$lambda$lambda$lambda(closure$tag));
      remAssign(get_dt($receiver), 'Title');
      this$songUi.remAssign_7fncnf$(get_dd($receiver), songUi$lambda$lambda$lambda_0(closure$tag));
      remAssign(get_dt($receiver), 'Size');
      this$songUi.remAssign_7fncnf$(get_dd($receiver), songUi$lambda$lambda$lambda_1(closure$tag));
      remAssign(get_dt($receiver), 'Duration');
      this$songUi.remAssign_7fncnf$(get_dd($receiver), songUi$lambda$lambda$lambda_2(closure$tag));
      return Unit;
    };
  }
  function songUi$lambda$lambda$lambda$lambda_1(closure$blob) {
    return function ($receiver) {
      return closure$blob($receiver);
    };
  }
  function songUi$lambda$lambda$lambda$lambda$lambda(closure$bl) {
    return function ($receiver) {
      return closure$bl.invoke() != null;
    };
  }
  function Coroutine$songUi$lambda$lambda$lambda$lambda$lambda(closure$bl_0, closure$boot_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$bl = closure$bl_0;
    this.local$closure$boot = closure$boot_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$songUi$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$songUi$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$songUi$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$songUi$lambda$lambda$lambda$lambda$lambda;
  Coroutine$songUi$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            if ((tmp$ = this.local$closure$bl.now) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            var tmp$_1;
            if ((tmp$_0 = this.result_0) != null) {
              this.local$closure$boot.play_izzmmv$(new Playable(this.local$closure$id, tmp$_0));
              tmp$_1 = Unit;
            }
             else
              tmp$_1 = null;
            return tmp$_1;
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
  function songUi$lambda$lambda$lambda$lambda$lambda_0(closure$bl_0, closure$boot_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$songUi$lambda$lambda$lambda$lambda$lambda(closure$bl_0, closure$boot_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function songUi$lambda$lambda$lambda$lambda$lambda_1(closure$loggedIn, closure$id) {
    return function ($receiver) {
      return closure$loggedIn.userSongs.get(closure$id).invoke() === UserSongState.Like ? get_btnSuccess(Cls.Companion) : get_btnSecondary(Cls.Companion);
    };
  }
  function Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_0(closure$boot_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$boot = closure$boot_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$boot.like_61zpoe$(this.local$closure$id), Unit;
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
  function songUi$lambda$lambda$lambda$lambda$lambda_2(closure$boot_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_0(closure$boot_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function songUi$lambda$lambda$lambda$lambda$lambda_3(closure$loggedIn, closure$id) {
    return function ($receiver) {
      return closure$loggedIn.userSongs.get(closure$id).invoke() === UserSongState.DontLike ? get_btnSuccess(Cls.Companion) : get_btnSecondary(Cls.Companion);
    };
  }
  function Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_1(closure$boot_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$boot = closure$boot_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_1;
  Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$boot.dontLike_61zpoe$(this.local$closure$id), Unit;
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
  function songUi$lambda$lambda$lambda$lambda$lambda_4(closure$boot_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$songUi$lambda$lambda$lambda$lambda$lambda_1(closure$boot_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function songUi$lambda$lambda_1(closure$blob, this$songUi, closure$boot, closure$id, closure$loggedIn, closure$bgfn) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_dFlex($receiver_0);
      get_flexRow($receiver_0);
      get_justifyContentEnd($receiver_0);
      var $receiver_1 = get_insert(get_widget($receiver)).buttonGroup;
      var closure$blob_0 = closure$blob;
      var this$songUi_0 = this$songUi;
      var closure$boot_0 = closure$boot;
      var closure$id_0 = closure$id;
      var closure$loggedIn_0 = closure$loggedIn;
      var closure$bgfn_0 = closure$bgfn;
      $receiver_1.m1;
      var bl = this$songUi_0.rx_pn7ch0$(songUi$lambda$lambda$lambda$lambda_1(closure$blob_0));
      var $receiver_2 = $receiver_1.button;
      $receiver_2.visible_metn8w$(this$songUi_0, songUi$lambda$lambda$lambda$lambda$lambda(bl));
      $receiver_2.p2;
      $receiver_2.secondary;
      get_play($receiver_2.fa);
      this$songUi_0.click_3xepc3$($receiver_2, songUi$lambda$lambda$lambda$lambda$lambda_0(bl, closure$boot_0, closure$id_0));
      var $receiver_3 = $receiver_1.button;
      $receiver_3.p2;
      get_thumbsUp($receiver_3.fa);
      this$songUi_0.rxClass_wqb4ha$($receiver_3.node, songUi$lambda$lambda$lambda$lambda$lambda_1(closure$loggedIn_0, closure$id_0));
      this$songUi_0.click_3xepc3$($receiver_3, songUi$lambda$lambda$lambda$lambda$lambda_2(closure$boot_0, closure$id_0));
      var $receiver_4 = $receiver_1.button;
      $receiver_4.p2;
      $receiver_4.secondary;
      get_thumbsDown($receiver_4.fa);
      this$songUi_0.rxClass_wqb4ha$($receiver_4.node, songUi$lambda$lambda$lambda$lambda$lambda_3(closure$loggedIn_0, closure$id_0));
      this$songUi_0.click_3xepc3$($receiver_4, songUi$lambda$lambda$lambda$lambda$lambda_4(closure$boot_0, closure$id_0));
      closure$bgfn_0($receiver_1);
      return Unit;
    };
  }
  function songUi$lambda(closure$loggedIn, closure$id, closure$blob, this$songUi, closure$fileName, closure$bgfn) {
    return function ($receiver) {
      var boot = closure$loggedIn.path.boot;
      var tag = closure$loggedIn.songInfoSource(closure$id, songUi$lambda$lambda(closure$blob, this$songUi));
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_p1($receiver_0);
      get_border($receiver_0);
      get_rounded($receiver_0);
      get_dFlex($receiver_0);
      get_flexColumn($receiver_0);
      invoke(get_dl($receiver), songUi$lambda$lambda_0(closure$fileName, tag, this$songUi));
      invoke(get_div($receiver), songUi$lambda$lambda_1(closure$blob, this$songUi, boot, closure$id, closure$loggedIn, closure$bgfn));
      return Unit;
    };
  }
  function songUi($receiver, id, fileName, blob, loggedIn, bgfn) {
    return invoke(get_div(document), songUi$lambda(loggedIn, id, blob, $receiver, fileName, bgfn));
  }
  function tasksUi$lambda$lambda(closure$boot) {
    return function ($receiver) {
      return closure$boot.tasks.pending.invoke() !== 0;
    };
  }
  function tasksUi$lambda$lambda_0(closure$boot) {
    return function () {
      return closure$boot.tasks.pending.invoke().toString();
    };
  }
  function tasksUi($receiver, factory, boot) {
    var $receiver_0 = factory.badge;
    $receiver_0.visible_metn8w$($receiver, tasksUi$lambda$lambda(boot));
    get_m1($receiver_0.cls);
    $receiver_0.pill;
    $receiver_0.warning;
    $receiver.remAssign_7fncnf$($receiver_0.node, tasksUi$lambda$lambda_0(boot));
    return $receiver_0;
  }
  function LatestUid(rxv, clear) {
    this.rxv = rxv;
    this.clear = clear;
  }
  LatestUid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LatestUid',
    interfaces: []
  };
  function toLatestUid$lambda(closure$ch) {
    return function () {
      closure$ch.close_dbl4no$();
      return Unit;
    };
  }
  function Coroutine$toLatestUid$lambda(closure$ch_0, closure$idb_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$ch = closure$ch_0;
    this.local$closure$idb = closure$idb_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$toLatestUid$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toLatestUid$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toLatestUid$lambda.prototype.constructor = Coroutine$toLatestUid$lambda;
  Coroutine$toLatestUid$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$ch.iterator();
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
            var id = this.result_0;
            this.state_0 = 6;
            this.result_0 = writeLastUserId(this.local$closure$idb, id, this);
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
  function toLatestUid$lambda_0(closure$ch_0, closure$idb_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$toLatestUid$lambda(closure$ch_0, closure$idb_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function toLatestUid$lambda_1(closure$ch, closure$latestUid) {
    return function ($receiver, id) {
      closure$ch.offer_11rb$(id);
      closure$latestUid.now = id;
      return Unit;
    };
  }
  function toLatestUid$lambda_2(closure$uid, closure$latestUid) {
    return function ($receiver) {
      var tmp$;
      return (tmp$ = closure$uid.invoke()) != null ? tmp$ : closure$latestUid.invoke();
    };
  }
  function toLatestUid$lambda_3(closure$ch) {
    return function () {
      closure$ch.offer_11rb$(null);
      return Unit;
    };
  }
  function Coroutine$toLatestUid($receiver_0, ks_0, idb_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$uid = void 0;
    this.local$$receiver = $receiver_0;
    this.local$ks = ks_0;
    this.local$idb = idb_0;
  }
  Coroutine$toLatestUid.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toLatestUid.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toLatestUid.prototype.constructor = Coroutine$toLatestUid;
  Coroutine$toLatestUid.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$uid = toUid(this.local$$receiver, this.local$ks);
            this.state_0 = 2;
            this.result_0 = readLastUserId(this.local$idb, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var latestUid = new Var(this.result_0);
            var ch = Channel();
            plusAssign(this.local$ks, toLatestUid$lambda(ch));
            addedTo(launch(coroutines.GlobalScope, void 0, void 0, toLatestUid$lambda_0(ch, this.local$idb)), this.local$ks);
            this.local$uid.forEach_yk5nc8$(this.local$ks, toLatestUid$lambda_1(ch, latestUid));
            return new LatestUid(Rx_init(this.local$ks, toLatestUid$lambda_2(this.local$uid, latestUid)), toLatestUid$lambda_3(ch));
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
  function toLatestUid($receiver_0, ks_0, idb_0, continuation_0, suspended) {
    var instance = new Coroutine$toLatestUid($receiver_0, ks_0, idb_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Content() {
  }
  Content.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Content',
    interfaces: [JobScopeWithView]
  };
  function UserUnknown(boot) {
    ViewImpl_init(boot, this);
    this.rawView_rbh9ba$_0 = TopAndContent.Companion.hourglass;
    this.userSongs_1d7tp0$_0 = null;
    this.songInfoSource_xbu0tt$_0 = boot.localSongInfoSource;
  }
  Object.defineProperty(UserUnknown.prototype, 'rawView', {
    get: function () {
      return this.rawView_rbh9ba$_0;
    }
  });
  Object.defineProperty(UserUnknown.prototype, 'userSongs', {
    get: function () {
      return this.userSongs_1d7tp0$_0;
    }
  });
  Object.defineProperty(UserUnknown.prototype, 'songInfoSource', {
    get: function () {
      return this.songInfoSource_xbu0tt$_0;
    }
  });
  UserUnknown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserUnknown',
    interfaces: [Content, ViewImpl]
  };
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
    return String_0(toCharArray($receiver));
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
        closure$frameData.v = fr.process_xr7ut2$(new Frames$FrameInput(frameSize, frameFlags, closure$tr, closure$frameData.v));
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
  FramesData.prototype.copy_ljoj2a$ = function (text, url, userText, comments) {
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
    this.TPE1_780ou3$_0 = this.text().provideDelegate_kvy403$(this, Frames$TPE1_metadata);
    this.TPE2_780ot8$_0 = this.text().provideDelegate_kvy403$(this, Frames$TPE2_metadata);
    this.TPE3_780osd$_0 = this.text().provideDelegate_kvy403$(this, Frames$TPE3_metadata);
    this.TPE4_780ori$_0 = this.text().provideDelegate_kvy403$(this, Frames$TPE4_metadata);
    this.TIT1_784umd$_0 = this.text().provideDelegate_kvy403$(this, Frames$TIT1_metadata);
    this.TIT2_784uli$_0 = this.text().provideDelegate_kvy403$(this, Frames$TIT2_metadata);
    this.TIT3_784ukn$_0 = this.text().provideDelegate_kvy403$(this, Frames$TIT3_metadata);
    this.TALB_78a41i$_0 = this.text().provideDelegate_kvy403$(this, Frames$TALB_metadata);
    this.TRCK_77zfq1$_0 = this.text().provideDelegate_kvy403$(this, Frames$TRCK_metadata);
    this.TYER_77ux5x$_0 = this.text().provideDelegate_kvy403$(this, Frames$TYER_metadata);
    this.TDRC_7882lw$_0 = this.text().provideDelegate_kvy403$(this, Frames$TDRC_metadata);
    this.TCON_788rk1$_0 = this.text().provideDelegate_kvy403$(this, Frames$TCON_metadata);
    this.TPOS_780glv$_0 = this.text().provideDelegate_kvy403$(this, Frames$TPOS_metadata);
    this.TPUB_780ckc$_0 = this.text().provideDelegate_kvy403$(this, Frames$TPUB_metadata);
    this.TCMP_788szp$_0 = this.text().provideDelegate_kvy403$(this, Frames$TCMP_metadata);
    this.TENC_787il5$_0 = this.text().provideDelegate_kvy403$(this, Frames$TENC_metadata);
    this.TKEY_783uta$_0 = this.text().provideDelegate_kvy403$(this, Frames$TKEY_metadata);
    this.TSOA_77yk2s$_0 = this.text().provideDelegate_kvy403$(this, Frames$TSOA_metadata);
    this.TSOP_77yjpv$_0 = this.text().provideDelegate_kvy403$(this, Frames$TSOP_metadata);
    this.TCOP_788rib$_0 = this.text().provideDelegate_kvy403$(this, Frames$TCOP_metadata);
    this.TSRC_77yhsz$_0 = this.text().provideDelegate_kvy403$(this, Frames$TSRC_metadata);
    this.TEXT_787ark$_0 = this.text().provideDelegate_kvy403$(this, Frames$TEXT_metadata);
    this.TRSN_77z3sc$_0 = this.text().provideDelegate_kvy403$(this, Frames$TRSN_metadata);
    this.TOPE_78136r$_0 = this.text().provideDelegate_kvy403$(this, Frames$TOPE_metadata);
    this.TOLY_7815ob$_0 = this.text().provideDelegate_kvy403$(this, Frames$TOLY_metadata);
    this.TLAN_783b20$_0 = this.text().provideDelegate_kvy403$(this, Frames$TLAN_metadata);
    this.TCOM_788rkw$_0 = this.text().provideDelegate_kvy403$(this, Frames$TCOM_metadata);
    this.TDAT_788et2$_0 = this.text().provideDelegate_kvy403$(this, Frames$TDAT_metadata);
    this.TSSE_77yh0k$_0 = this.text().provideDelegate_kvy403$(this, Frames$TSSE_metadata);
    this.WCOM_76ldst$_0 = this.url().provideDelegate_kvy403$(this, Frames$WCOM_metadata);
    this.APIC_7igopo$_0 = this.skip().provideDelegate_kvy403$(this, Frames$APIC_metadata);
    this.GEOB_7fctl0$_0 = this.skip().provideDelegate_kvy403$(this, Frames$GEOB_metadata);
    this.RVA2_790j1k$_0 = this.skip().provideDelegate_kvy403$(this, Frames$RVA2_metadata);
    this.PRIV_7a6hdu$_0 = this.skip().provideDelegate_kvy403$(this, Frames$PRIV_metadata);
    this.WXXX_767s50$_0 = this.skip().provideDelegate_kvy403$(this, Frames$WXXX_metadata);
    this.COMM_7hdnb3$_0 = this.frame_dh2h7n$(Frames$COMM$lambda).provideDelegate_kvy403$(this, Frames$COMM_metadata);
    this.TXXX_77v5x3$_0 = this.frame_dh2h7n$(Frames$TXXX$lambda).provideDelegate_kvy403$(this, Frames$TXXX_metadata);
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
      return this.TPE1_780ou3$_0.getValue_lrcp0p$(this, Frames$TPE1_metadata);
    }
  });
  var Frames$TPE2_metadata = new PropertyMetadata('TPE2');
  Object.defineProperty(Frames.prototype, 'TPE2', {
    get: function () {
      return this.TPE2_780ot8$_0.getValue_lrcp0p$(this, Frames$TPE2_metadata);
    }
  });
  var Frames$TPE3_metadata = new PropertyMetadata('TPE3');
  Object.defineProperty(Frames.prototype, 'TPE3', {
    get: function () {
      return this.TPE3_780osd$_0.getValue_lrcp0p$(this, Frames$TPE3_metadata);
    }
  });
  var Frames$TPE4_metadata = new PropertyMetadata('TPE4');
  Object.defineProperty(Frames.prototype, 'TPE4', {
    get: function () {
      return this.TPE4_780ori$_0.getValue_lrcp0p$(this, Frames$TPE4_metadata);
    }
  });
  var Frames$TIT1_metadata = new PropertyMetadata('TIT1');
  Object.defineProperty(Frames.prototype, 'TIT1', {
    get: function () {
      return this.TIT1_784umd$_0.getValue_lrcp0p$(this, Frames$TIT1_metadata);
    }
  });
  var Frames$TIT2_metadata = new PropertyMetadata('TIT2');
  Object.defineProperty(Frames.prototype, 'TIT2', {
    get: function () {
      return this.TIT2_784uli$_0.getValue_lrcp0p$(this, Frames$TIT2_metadata);
    }
  });
  var Frames$TIT3_metadata = new PropertyMetadata('TIT3');
  Object.defineProperty(Frames.prototype, 'TIT3', {
    get: function () {
      return this.TIT3_784ukn$_0.getValue_lrcp0p$(this, Frames$TIT3_metadata);
    }
  });
  var Frames$TALB_metadata = new PropertyMetadata('TALB');
  Object.defineProperty(Frames.prototype, 'TALB', {
    get: function () {
      return this.TALB_78a41i$_0.getValue_lrcp0p$(this, Frames$TALB_metadata);
    }
  });
  var Frames$TRCK_metadata = new PropertyMetadata('TRCK');
  Object.defineProperty(Frames.prototype, 'TRCK', {
    get: function () {
      return this.TRCK_77zfq1$_0.getValue_lrcp0p$(this, Frames$TRCK_metadata);
    }
  });
  var Frames$TYER_metadata = new PropertyMetadata('TYER');
  Object.defineProperty(Frames.prototype, 'TYER', {
    get: function () {
      return this.TYER_77ux5x$_0.getValue_lrcp0p$(this, Frames$TYER_metadata);
    }
  });
  var Frames$TDRC_metadata = new PropertyMetadata('TDRC');
  Object.defineProperty(Frames.prototype, 'TDRC', {
    get: function () {
      return this.TDRC_7882lw$_0.getValue_lrcp0p$(this, Frames$TDRC_metadata);
    }
  });
  var Frames$TCON_metadata = new PropertyMetadata('TCON');
  Object.defineProperty(Frames.prototype, 'TCON', {
    get: function () {
      return this.TCON_788rk1$_0.getValue_lrcp0p$(this, Frames$TCON_metadata);
    }
  });
  var Frames$TPOS_metadata = new PropertyMetadata('TPOS');
  Object.defineProperty(Frames.prototype, 'TPOS', {
    get: function () {
      return this.TPOS_780glv$_0.getValue_lrcp0p$(this, Frames$TPOS_metadata);
    }
  });
  var Frames$TPUB_metadata = new PropertyMetadata('TPUB');
  Object.defineProperty(Frames.prototype, 'TPUB', {
    get: function () {
      return this.TPUB_780ckc$_0.getValue_lrcp0p$(this, Frames$TPUB_metadata);
    }
  });
  var Frames$TCMP_metadata = new PropertyMetadata('TCMP');
  Object.defineProperty(Frames.prototype, 'TCMP', {
    get: function () {
      return this.TCMP_788szp$_0.getValue_lrcp0p$(this, Frames$TCMP_metadata);
    }
  });
  var Frames$TENC_metadata = new PropertyMetadata('TENC');
  Object.defineProperty(Frames.prototype, 'TENC', {
    get: function () {
      return this.TENC_787il5$_0.getValue_lrcp0p$(this, Frames$TENC_metadata);
    }
  });
  var Frames$TKEY_metadata = new PropertyMetadata('TKEY');
  Object.defineProperty(Frames.prototype, 'TKEY', {
    get: function () {
      return this.TKEY_783uta$_0.getValue_lrcp0p$(this, Frames$TKEY_metadata);
    }
  });
  var Frames$TSOA_metadata = new PropertyMetadata('TSOA');
  Object.defineProperty(Frames.prototype, 'TSOA', {
    get: function () {
      return this.TSOA_77yk2s$_0.getValue_lrcp0p$(this, Frames$TSOA_metadata);
    }
  });
  var Frames$TSOP_metadata = new PropertyMetadata('TSOP');
  Object.defineProperty(Frames.prototype, 'TSOP', {
    get: function () {
      return this.TSOP_77yjpv$_0.getValue_lrcp0p$(this, Frames$TSOP_metadata);
    }
  });
  var Frames$TCOP_metadata = new PropertyMetadata('TCOP');
  Object.defineProperty(Frames.prototype, 'TCOP', {
    get: function () {
      return this.TCOP_788rib$_0.getValue_lrcp0p$(this, Frames$TCOP_metadata);
    }
  });
  var Frames$TSRC_metadata = new PropertyMetadata('TSRC');
  Object.defineProperty(Frames.prototype, 'TSRC', {
    get: function () {
      return this.TSRC_77yhsz$_0.getValue_lrcp0p$(this, Frames$TSRC_metadata);
    }
  });
  var Frames$TEXT_metadata = new PropertyMetadata('TEXT');
  Object.defineProperty(Frames.prototype, 'TEXT', {
    get: function () {
      return this.TEXT_787ark$_0.getValue_lrcp0p$(this, Frames$TEXT_metadata);
    }
  });
  var Frames$TRSN_metadata = new PropertyMetadata('TRSN');
  Object.defineProperty(Frames.prototype, 'TRSN', {
    get: function () {
      return this.TRSN_77z3sc$_0.getValue_lrcp0p$(this, Frames$TRSN_metadata);
    }
  });
  var Frames$TOPE_metadata = new PropertyMetadata('TOPE');
  Object.defineProperty(Frames.prototype, 'TOPE', {
    get: function () {
      return this.TOPE_78136r$_0.getValue_lrcp0p$(this, Frames$TOPE_metadata);
    }
  });
  var Frames$TOLY_metadata = new PropertyMetadata('TOLY');
  Object.defineProperty(Frames.prototype, 'TOLY', {
    get: function () {
      return this.TOLY_7815ob$_0.getValue_lrcp0p$(this, Frames$TOLY_metadata);
    }
  });
  var Frames$TLAN_metadata = new PropertyMetadata('TLAN');
  Object.defineProperty(Frames.prototype, 'TLAN', {
    get: function () {
      return this.TLAN_783b20$_0.getValue_lrcp0p$(this, Frames$TLAN_metadata);
    }
  });
  var Frames$TCOM_metadata = new PropertyMetadata('TCOM');
  Object.defineProperty(Frames.prototype, 'TCOM', {
    get: function () {
      return this.TCOM_788rkw$_0.getValue_lrcp0p$(this, Frames$TCOM_metadata);
    }
  });
  var Frames$TDAT_metadata = new PropertyMetadata('TDAT');
  Object.defineProperty(Frames.prototype, 'TDAT', {
    get: function () {
      return this.TDAT_788et2$_0.getValue_lrcp0p$(this, Frames$TDAT_metadata);
    }
  });
  var Frames$TSSE_metadata = new PropertyMetadata('TSSE');
  Object.defineProperty(Frames.prototype, 'TSSE', {
    get: function () {
      return this.TSSE_77yh0k$_0.getValue_lrcp0p$(this, Frames$TSSE_metadata);
    }
  });
  var Frames$WCOM_metadata = new PropertyMetadata('WCOM');
  Object.defineProperty(Frames.prototype, 'WCOM', {
    get: function () {
      return this.WCOM_76ldst$_0.getValue_lrcp0p$(this, Frames$WCOM_metadata);
    }
  });
  var Frames$APIC_metadata = new PropertyMetadata('APIC');
  Object.defineProperty(Frames.prototype, 'APIC', {
    get: function () {
      return this.APIC_7igopo$_0.getValue_lrcp0p$(this, Frames$APIC_metadata);
    }
  });
  var Frames$GEOB_metadata = new PropertyMetadata('GEOB');
  Object.defineProperty(Frames.prototype, 'GEOB', {
    get: function () {
      return this.GEOB_7fctl0$_0.getValue_lrcp0p$(this, Frames$GEOB_metadata);
    }
  });
  var Frames$RVA2_metadata = new PropertyMetadata('RVA2');
  Object.defineProperty(Frames.prototype, 'RVA2', {
    get: function () {
      return this.RVA2_790j1k$_0.getValue_lrcp0p$(this, Frames$RVA2_metadata);
    }
  });
  var Frames$PRIV_metadata = new PropertyMetadata('PRIV');
  Object.defineProperty(Frames.prototype, 'PRIV', {
    get: function () {
      return this.PRIV_7a6hdu$_0.getValue_lrcp0p$(this, Frames$PRIV_metadata);
    }
  });
  var Frames$WXXX_metadata = new PropertyMetadata('WXXX');
  Object.defineProperty(Frames.prototype, 'WXXX', {
    get: function () {
      return this.WXXX_767s50$_0.getValue_lrcp0p$(this, Frames$WXXX_metadata);
    }
  });
  var Frames$COMM_metadata = new PropertyMetadata('COMM');
  Object.defineProperty(Frames.prototype, 'COMM', {
    get: function () {
      return this.COMM_7hdnb3$_0.getValue_lrcp0p$(this, Frames$COMM_metadata);
    }
  });
  var Frames$TXXX_metadata = new PropertyMetadata('TXXX');
  Object.defineProperty(Frames.prototype, 'TXXX', {
    get: function () {
      return this.TXXX_77v5x3$_0.getValue_lrcp0p$(this, Frames$TXXX_metadata);
    }
  });
  function Frames$Frame(name, fn) {
    this.name = name;
    this.fn = fn;
    Frames_getInstance().all = plus(Frames_getInstance().all, to(this.name, this));
  }
  Frames$Frame.prototype.process_xr7ut2$ = function (input) {
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
  Frames$FrameProvider.prototype.provideDelegate_kvy403$ = function (thisRef, prop) {
    var name = prop.callableName;
    var frame = new Frames$Frame(name, Frames$FrameProvider$provideDelegate$lambda(this, name));
    return new Frames$FrameProvider$provideDelegate$ObjectLiteral(frame);
  };
  Frames$FrameProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameProvider',
    interfaces: []
  };
  Frames.prototype.frame_dh2h7n$ = function (fn) {
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
    return d.copy_ljoj2a$(void 0, plus(d.url, to(name, input.tr.string_za3lpa$(input.size))));
  }
  Frames.prototype.url = function () {
    return this.frame_dh2h7n$(Frames$url$lambda);
  };
  function Frames$text$lambda(name, input) {
    var d = input.data;
    var $receiver = d.text;
    var tmp$;
    if (!!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(name)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return d.copy_ljoj2a$(plus(d.text, to(name, input.tr.strings_za3lpa$(input.size))));
  }
  Frames.prototype.text = function () {
    return this.frame_dh2h7n$(Frames$text$lambda);
  };
  function Frames$skip$lambda(f, input) {
    var tmp$;
    tmp$ = input.tr;
    tmp$.pos = tmp$.pos + input.size | 0;
    return input.data;
  }
  Frames.prototype.skip = function () {
    return this.frame_dh2h7n$(Frames$skip$lambda);
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
    return input.data.copy_ljoj2a$(void 0, void 0, void 0, plus(input.data.comments, to(key, text)));
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
    return input.data.copy_ljoj2a$(void 0, void 0, plus(input.data.userText, to(content, text)));
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
  function Coroutine$localSongInfoSource$lambda$lambda$lambda$lambda(closure$blob_0, this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$blob = closure$blob_0;
    this.local$this$ = this$_0;
    this.local$tmp$ = void 0;
    this.local$this$_0 = void 0;
  }
  Coroutine$localSongInfoSource$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$localSongInfoSource$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$localSongInfoSource$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$localSongInfoSource$lambda$lambda$lambda$lambda;
  Coroutine$localSongInfoSource$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$closure$blob(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.result_0) != null) {
              this.local$this$_0 = this.local$this$;
              this.state_0 = 3;
              this.result_0 = initFrom(this.local$this$_0, tmp$, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$ = null;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.local$this$_0.props.clearDirty();
            this.local$tmp$ = Unit;
            this.state_0 = 4;
            continue;
          case 4:
            return this.local$tmp$;
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
  function localSongInfoSource$lambda$lambda$lambda$lambda(closure$blob_0, this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$localSongInfoSource$lambda$lambda$lambda$lambda(closure$blob_0, this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function localSongInfoSource$lambda(closure$map) {
    return function (id, blob) {
      var $receiver = closure$map;
      var tmp$;
      var value = $receiver.get_11rb$(id);
      if (value == null) {
        var $receiver_0 = new Mp3File();
        launch(coroutines.GlobalScope, void 0, void 0, localSongInfoSource$lambda$lambda$lambda$lambda(blob, $receiver_0));
        var answer = $receiver_0;
        $receiver.put_xwzc9p$(id, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      return tmp$;
    };
  }
  function localSongInfoSource() {
    var map = LinkedHashMap_init();
    return localSongInfoSource$lambda(map);
  }
  function Coroutine$cloudSongInfoSource$lambda$lambda$lambda$lambda$lambda(closure$blob_0, this$_0, closure$db_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$blob = closure$blob_0;
    this.local$this$ = this$_0;
    this.local$closure$db = closure$db_0;
    this.local$tmp$ = void 0;
    this.local$this$_0 = void 0;
    this.local$closure$db_0 = void 0;
  }
  Coroutine$cloudSongInfoSource$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$cloudSongInfoSource$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$cloudSongInfoSource$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$cloudSongInfoSource$lambda$lambda$lambda$lambda$lambda;
  Coroutine$cloudSongInfoSource$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$closure$blob(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.result_0) != null) {
              this.local$this$_0 = this.local$this$;
              this.local$closure$db_0 = this.local$closure$db;
              this.state_0 = 3;
              this.result_0 = initFrom(this.local$this$_0, tmp$, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$ = null;
              this.state_0 = 4;
              continue;
            }

          case 3:
            save(this.local$this$_0, this.local$closure$db_0);
            this.local$this$_0.props.clearDirty();
            this.local$tmp$ = Unit;
            this.state_0 = 4;
            continue;
          case 4:
            return this.local$tmp$;
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
  function cloudSongInfoSource$lambda$lambda$lambda$lambda$lambda(closure$blob_0, this$_0, closure$db_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$cloudSongInfoSource$lambda$lambda$lambda$lambda$lambda(closure$blob_0, this$_0, closure$db_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function cloudSongInfoSource$lambda$lambda$lambda$lambda(closure$blob, this$, closure$db) {
    return function ($receiver, d) {
      if (d) {
        launch(coroutines.GlobalScope, void 0, void 0, cloudSongInfoSource$lambda$lambda$lambda$lambda$lambda(closure$blob, this$, closure$db));
      }
      return Unit;
    };
  }
  function cloudSongInfoSource$lambda(closure$map, this$cloudSongInfoSource, closure$db) {
    return function (id, blob) {
      var $receiver = closure$map;
      var tmp$;
      var value = $receiver.get_11rb$(id);
      if (value == null) {
        var this$cloudSongInfoSource_0 = this$cloudSongInfoSource;
        var closure$db_0 = closure$db;
        var $receiver_0 = new Mp3File();
        var ref = get_songs(musiclib.musicLib.app).doc_61zpoe$(id);
        $receiver_0.props.persisted_11rd$(ref);
        listenToSnapshots($receiver_0, this$cloudSongInfoSource_0.kills, closure$db_0);
        this$cloudSongInfoSource_0.forEach_5mel8p$($receiver_0.props.isDeleted, cloudSongInfoSource$lambda$lambda$lambda$lambda(blob, $receiver_0, closure$db_0));
        var answer = $receiver_0;
        $receiver.put_xwzc9p$(id, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      return tmp$;
    };
  }
  function cloudSongInfoSource($receiver, db) {
    if (db === void 0)
      db = commonfb.FB.db;
    var map = LinkedHashMap_init();
    return cloudSongInfoSource$lambda(map, $receiver, db);
  }
  function initFrom$lambda$lambda(closure$audioLoaded, this$) {
    return function (it) {
      return closure$audioLoaded.complete_11rb$(this$.duration);
    };
  }
  function initFrom$lambda(closure$audioSrc, closure$audioLoaded) {
    return function ($receiver) {
      $receiver.src = closure$audioSrc;
      $receiver.ondurationchange = initFrom$lambda$lambda(closure$audioLoaded, $receiver);
      $receiver.load();
      return Unit;
    };
  }
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function initFrom$join($receiver) {
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
  function Coroutine$initFrom($receiver_0, blob_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tag = void 0;
    this.local$audioSrc = void 0;
    this.local$audioElement = void 0;
    this.local$$receiver = $receiver_0;
    this.local$blob = blob_0;
  }
  Coroutine$initFrom.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$initFrom.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initFrom.prototype.constructor = Coroutine$initFrom;
  Coroutine$initFrom.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAsArrayBuffer(this.local$blob, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var buffer = this.result_0;
            this.local$tag = extractMp3Tag(buffer);
            var audioLoaded = CompletableDeferred();
            this.local$audioSrc = URL.createObjectURL(this.local$blob);
            this.local$audioElement = invoke(get_audio(document), initFrom$lambda(this.local$audioSrc, audioLoaded));
            this.state_0 = 3;
            this.result_0 = audioLoaded.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var duration = this.result_0;
            this.local$audioElement.src = '';
            URL.revokeObjectURL(this.local$audioSrc);
            var join = initFrom$join;
            this.local$$receiver.artist.cv = join(this.local$tag.artist);
            this.local$$receiver.title.cv = join(this.local$tag.title);
            this.local$$receiver.bytes.cv = this.local$blob.size;
            this.local$$receiver.secs.cv = duration;
            this.local$$receiver.props.markAsExtracted();
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
  function initFrom($receiver_0, blob_0, continuation_0, suspended) {
    var instance = new Coroutine$initFrom($receiver_0, blob_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function songSource$Wrap(set) {
    this.set = set;
  }
  songSource$Wrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Wrap',
    interfaces: []
  };
  function songSource$lambda$lambda$lambda(closure$incset, closure$id) {
    return function ($receiver, i) {
      if (i) {
        var $receiver_0 = closure$incset;
        var element = closure$id;
        $receiver_0.add_11rb$(element);
      }
       else {
        var $receiver_1 = closure$incset;
        var element_0 = closure$id;
        $receiver_1.remove_11rb$(element_0);
      }
      return Unit;
    };
  }
  function songSource$lambda$lambda$lambda_0(closure$incset, closure$id) {
    return function () {
      var $receiver = closure$incset;
      var element = closure$id;
      $receiver.remove_11rb$(element);
      return Unit;
    };
  }
  function songSource$lambda$lambda(closure$inc, closure$incset) {
    return function ($receiver, id) {
      $receiver.forEach_5mel8p$(closure$inc(id), songSource$lambda$lambda$lambda(closure$incset, id));
      plusAssign($receiver.kills, songSource$lambda$lambda$lambda_0(closure$incset, id));
      return Unit;
    };
  }
  function songSource$lambda(closure$localSongs, closure$included) {
    return function ($receiver, inc) {
      var incset = new RxMutableSet();
      $receiver.process_ttzep4$(closure$localSongs, songSource$lambda$lambda(inc, incset));
      closure$included.now = new songSource$Wrap(incset);
      return Unit;
    };
  }
  function songSource$lambda$lambda_0(closure$songRing, closure$id) {
    return function () {
      closure$songRing.remove_11rb$(closure$id);
      return Unit;
    };
  }
  function songSource$lambda_0(closure$songRing) {
    return function ($receiver, id) {
      closure$songRing.insertItem_h6hr7q$(id);
      plusAssign($receiver.kills, songSource$lambda$lambda_0(closure$songRing, id));
      return Unit;
    };
  }
  function Coroutine$songSource$next(closure$included_0, closure$songRing_0, closure$localSongsDB_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$included = closure$included_0;
    this.local$closure$songRing = closure$songRing_0;
    this.local$closure$localSongsDB = closure$localSongsDB_0;
    this.local$id = void 0;
  }
  Coroutine$songSource$next.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$songSource$next.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$songSource$next.prototype.constructor = Coroutine$songSource$next;
  Coroutine$songSource$next.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$closure$included.now.set.isEmpty()) {
              this.state_0 = 6;
              continue;
            }

            this.local$id = this.local$closure$songRing.next;
            if (this.local$closure$included.now.set.contains_11rb$(this.local$id)) {
              this.state_0 = 3;
              this.result_0 = this.local$closure$localSongsDB.load_61zpoe$(this.local$id, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 3:
            var blob = this.result_0;
            if (blob != null) {
              return new Playable(this.local$id, blob);
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 2;
            continue;
          case 6:
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
  function songSource$next(closure$included_0, closure$songRing_0, closure$localSongsDB_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$songSource$next(closure$included_0, closure$songRing_0, closure$localSongsDB_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$songSource$lambda(closure$next_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$next = closure$next_0;
  }
  Coroutine$songSource$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$songSource$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$songSource$lambda.prototype.constructor = Coroutine$songSource$lambda;
  Coroutine$songSource$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$next(this);
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
  function songSource$lambda_1(closure$next_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$songSource$lambda(closure$next_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function songSource$lambda_2(closure$included, closure$nextFn) {
    return function ($receiver) {
      if (closure$included.invoke().set.isEmptyRx.invoke()) {
        return null;
      }
       else {
        return closure$nextFn;
      }
    };
  }
  function songSource($receiver, includeSong, localSongsDB) {
    var songRing = new CircularList();
    var localSongs = localSongsDB.set;
    var included = new Var(new songSource$Wrap(new RxMutableSet()));
    $receiver.forEach_igkruk$(includeSong, RxCalc.Companion.KillLast, songSource$lambda(localSongs, included));
    $receiver.process_ttzep4$(localSongsDB.set, songSource$lambda_0(songRing));
    songRing.moveHead_gney3$();
    var next = songSource$next(included, songRing, localSongsDB);
    var nextFn = songSource$lambda_1(next);
    return $receiver.rx_pn7ch0$(songSource$lambda_2(included, nextFn));
  }
  function getInclude$lambda$lambda$lambda(closure$states, closure$id, closure$state) {
    return function ($receiver) {
      return closure$states(closure$id).invoke() === closure$state;
    };
  }
  function getInclude$lambda(closure$map, closure$states, closure$state, this$getInclude) {
    return function (id) {
      var $receiver = closure$map;
      var tmp$;
      var value = $receiver.get_11rb$(id);
      if (value == null) {
        var closure$states_0 = closure$states;
        var closure$state_0 = closure$state;
        var answer = this$getInclude.rx_pn7ch0$(getInclude$lambda$lambda$lambda(closure$states_0, id, closure$state_0));
        $receiver.put_xwzc9p$(id, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      return tmp$;
    };
  }
  function getInclude($receiver, states, state) {
    var map = LinkedHashMap_init();
    return getInclude$lambda(map, states, state, $receiver);
  }
  function IncludeState() {
  }
  function IncludeState$NoSongs() {
    IncludeState$NoSongs_instance = this;
    IncludeState.call(this);
  }
  IncludeState$NoSongs.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NoSongs',
    interfaces: [IncludeState]
  };
  var IncludeState$NoSongs_instance = null;
  function IncludeState$NoSongs_getInstance() {
    if (IncludeState$NoSongs_instance === null) {
      new IncludeState$NoSongs();
    }
    return IncludeState$NoSongs_instance;
  }
  function IncludeState$WithSongs(songState, new_0, like) {
    IncludeState.call(this);
    this.songState = songState;
    this.new = new_0;
    this.like = like;
  }
  IncludeState$WithSongs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WithSongs',
    interfaces: [IncludeState]
  };
  IncludeState$WithSongs.prototype.component1 = function () {
    return this.songState;
  };
  IncludeState$WithSongs.prototype.component2 = function () {
    return this.new;
  };
  IncludeState$WithSongs.prototype.component3 = function () {
    return this.like;
  };
  IncludeState$WithSongs.prototype.copy_esya4q$ = function (songState, new_0, like) {
    return new IncludeState$WithSongs(songState === void 0 ? this.songState : songState, new_0 === void 0 ? this.new : new_0, like === void 0 ? this.like : like);
  };
  IncludeState$WithSongs.prototype.toString = function () {
    return 'WithSongs(songState=' + Kotlin.toString(this.songState) + (', new=' + Kotlin.toString(this.new)) + (', like=' + Kotlin.toString(this.like)) + ')';
  };
  IncludeState$WithSongs.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.songState) | 0;
    result = result * 31 + Kotlin.hashCode(this.new) | 0;
    result = result * 31 + Kotlin.hashCode(this.like) | 0;
    return result;
  };
  IncludeState$WithSongs.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.songState, other.songState) && Kotlin.equals(this.new, other.new) && Kotlin.equals(this.like, other.like)))));
  };
  IncludeState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IncludeState',
    interfaces: []
  };
  function songInclude$lambda$getIncludeState(closure$songState, this$) {
    return function (state) {
      return getInclude(this$, closure$songState, state);
    };
  }
  function songInclude$lambda(closure$userSongs) {
    return function ($receiver) {
      var songState = closure$userSongs.invoke();
      if (songState == null) {
        return IncludeState$NoSongs_getInstance();
      }
       else {
        var getIncludeState = songInclude$lambda$getIncludeState(songState, $receiver);
        var new_0 = getIncludeState(UserSongState.New);
        var like = getIncludeState(UserSongState.Like);
        return new IncludeState$WithSongs(songState, new_0, like);
      }
    };
  }
  function songInclude$lambda$lambda(it) {
    return new Var(true);
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  function songInclude$lambda_0(closure$localSongs) {
    return function ($receiver, st) {
      if (equals(st, IncludeState$NoSongs_getInstance()))
        return songInclude$lambda$lambda;
      else if (Kotlin.isType(st, IncludeState$WithSongs)) {
        var $receiver_0 = closure$localSongs.set.iterableRx.invoke();
        var any$result;
        any$break: do {
          var tmp$;
          if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
            any$result = false;
            break any$break;
          }
          tmp$ = $receiver_0.iterator();
          while (tmp$.hasNext()) {
            var element = tmp$.next();
            if (st.songState(element).invoke() === UserSongState.New) {
              any$result = true;
              break any$break;
            }
          }
          any$result = false;
        }
         while (false);
        var hasNew = any$result;
        return hasNew ? st.new : st.like;
      }
       else
        return Kotlin.noWhenBranchMatched();
    };
  }
  function songInclude($receiver, localSongs, userSongs) {
    return $receiver.map_i8ud5a$($receiver.rx_pn7ch0$(songInclude$lambda(userSongs)), songInclude$lambda_0(localSongs));
  }
  function like($receiver, id) {
    $receiver(id, UserSongState.Like);
  }
  function dontLike($receiver, id) {
    $receiver(id, UserSongState.DontLike);
  }
  function UserSongs(get, set) {
    this.get = get;
    this.set = set;
  }
  UserSongs.prototype.like_61zpoe$ = function (id) {
    like(this.set, id);
  };
  UserSongs.prototype.dontLike_61zpoe$ = function (id) {
    dontLike(this.set, id);
  };
  UserSongs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserSongs',
    interfaces: []
  };
  function userSongs$item(closure$map, closure$cw, closure$uks, closure$db) {
    return function (id) {
      var $receiver = closure$map;
      var tmp$;
      var value = $receiver.get_11rb$(id);
      if (value == null) {
        var closure$cw_0 = closure$cw;
        var closure$uks_0 = closure$uks;
        var closure$db_0 = closure$db;
        var $receiver_0 = new UserSong();
        $receiver_0.props.persisted_11rd$(closure$cw_0.doc_61zpoe$(id));
        listenToSnapshots($receiver_0, closure$uks_0, closure$db_0);
        var answer = $receiver_0;
        $receiver.put_xwzc9p$(id, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      return tmp$;
    };
  }
  function userSongs$lambda$lambda($receiver, it) {
    return it.getOrDefault_11rb$(UserSongState.New);
  }
  function userSongs$lambda(closure$item, closure$uks) {
    return function (id) {
      return closure$item(id).state.initial.map_tx8wzh$(closure$uks, userSongs$lambda$lambda);
    };
  }
  function userSongs$lambda_0(closure$item, closure$db) {
    return function (id, state) {
      var $receiver = closure$item(id);
      var closure$db_0 = closure$db;
      $receiver.state.cv = state;
      save($receiver, closure$db_0);
      $receiver.props.clearDirty();
      return Unit;
    };
  }
  function userSongs(uks, uid, db, continuation) {
    if (db === void 0)
      db = commonfb.FB.db;
    var cw = get_usersongs(get_private(musiclib.musicLib.app).doc_61zpoe$(uid));
    var map = LinkedHashMap_init();
    var item = userSongs$item(map, cw, uks, db);
    return new UserSongs(userSongs$lambda(item, uks), userSongs$lambda_0(item, db));
  }
  function DatabaseManagement() {
    DatabaseManagement_instance = this;
  }
  DatabaseManagement.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DatabaseManagement',
    interfaces: []
  };
  var DatabaseManagement_instance = null;
  function DatabaseManagement_getInstance() {
    if (DatabaseManagement_instance === null) {
      new DatabaseManagement();
    }
    return DatabaseManagement_instance;
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
  function localDatabase$lambda$lambda(event) {
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
  function localDatabase(continuation) {
    var $receiver = get_indexedDB(window).open('appsimake-music', L2);
    $receiver.addEventListener('upgradeneeded', localDatabase$lambda$lambda);
    return await_1($receiver, continuation);
  }
  function readSingletons($receiver) {
    return $receiver.transaction(get_DBSingletons()).objectStore(get_DBSingletons());
  }
  function writeSingletons($receiver) {
    return $receiver.transaction(get_DBSingletons(), 'readwrite').objectStore(get_DBSingletons());
  }
  function Singletons() {
    Singletons_instance = this;
    this.LastUserID_5joman$_0 = named(Singletons$LastUserID$lambda).provideDelegate_n5byny$(this, Singletons$LastUserID_metadata);
  }
  var Singletons$LastUserID_metadata = new PropertyMetadata('LastUserID');
  Object.defineProperty(Singletons.prototype, 'LastUserID', {
    get: function () {
      return this.LastUserID_5joman$_0.getValue_lrcp0p$(this, Singletons$LastUserID_metadata);
    }
  });
  function Singletons$LastUserID$lambda(it) {
    return it;
  }
  Singletons.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Singletons',
    interfaces: []
  };
  var Singletons_instance = null;
  function Singletons_getInstance() {
    if (Singletons_instance === null) {
      new Singletons();
    }
    return Singletons_instance;
  }
  function readLastUserId($receiver, continuation) {
    return await_1(readSingletons($receiver).get(Singletons_getInstance().LastUserID), continuation);
  }
  function Coroutine$writeLastUserId($receiver_0, uid_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$uid = uid_0;
  }
  Coroutine$writeLastUserId.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeLastUserId.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeLastUserId.prototype.constructor = Coroutine$writeLastUserId;
  Coroutine$writeLastUserId.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$uid == null) {
              this.state_0 = 3;
              this.result_0 = await_1(writeSingletons(this.local$$receiver).delete(Singletons_getInstance().LastUserID), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = await_1(writeSingletons(this.local$$receiver).put(this.local$uid, Singletons_getInstance().LastUserID), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 4;
            continue;
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
  function writeLastUserId($receiver_0, uid_0, continuation_0, suspended) {
    var instance = new Coroutine$writeLastUserId($receiver_0, uid_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function DatabasePath(database) {
    LoggedInPath.call(this, database.from);
    this.database = database;
  }
  DatabasePath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DatabasePath',
    interfaces: [LoggedInPath]
  };
  function Database(from) {
    ForwardBase_init(from, this);
    this.from = from;
    this.path_t5tpd8$_0 = new DatabasePath(this);
    this.localSongIds = Database$Database$Status_init(this, this.path.boot.localSongs.set);
    this.toBeDownloaded = Database$Database$Status_init(this, this.filtered_49l5s4$(this.get_ids_wjz35z$(this.path.loggedIn.uploadedSet), Database$toBeDownloaded$lambda(this)));
    this.toBeUploaded = Database$Database$Status_init(this, this.filtered_49l5s4$(this.path.boot.localSongs.set, Database$toBeUploaded$lambda(this)));
    this.toBeDeleted = Database$Database$Status_init(this, this.filtered_49l5s4$(this.path.boot.localSongs.set, Database$toBeDeleted$lambda(this)));
    this.new = Database$Database$Status_init(this, this.filtered_49l5s4$(this.path.boot.localSongs.set, Database$new$lambda(this)));
    this.like = Database$Database$Status_init(this, this.get_ids_wjz35z$(this.filtered_49l5s4$(this.path.loggedIn.userSongSet.set, Database$like$lambda)));
    this.dontLike = Database$Database$Status_init(this, this.get_ids_wjz35z$(this.filtered_49l5s4$(this.path.loggedIn.userSongSet.set, Database$dontLike$lambda)));
    this.cloud = Database$Database$Status_init(this, this.get_ids_wjz35z$(this.filtered_49l5s4$(this.path.loggedIn.storageSet.set, Database$cloud$lambda)));
    this.newInCloud = Database$Database$Status_init(this, this.filtered_49l5s4$(this.get_ids_wjz35z$(this.filtered_49l5s4$(this.path.loggedIn.storageSet.set, Database$newInCloud$lambda)), Database$newInCloud$lambda_0(this)));
    this.uploading = Database$Database$Status_init(this, this.path.loggedIn.uploadingIds);
    this.rawView_vrycfe$_0 = ui_0(this);
  }
  Object.defineProperty(Database.prototype, 'path', {
    get: function () {
      return this.path_t5tpd8$_0;
    }
  });
  function Coroutine$import($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$import.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$import.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$import.prototype.constructor = Coroutine$import;
  Coroutine$import.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.forward.remAssign_11rb$(new Import(this.$this), this);
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
  Database.prototype.import = function (continuation_0, suspended) {
    var instance = new Coroutine$import(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Database$Status($outer, items) {
    this.$outer = $outer;
    this.items = items;
    this.set = this.$outer.toRxSet_jr4bl4$(this.items);
    this.count = new Var(0);
    this.size = new Var(L0);
    this.duration = new Var(0.0);
    process(this.items, this.$outer.kills, Database$Database$Status_init$lambda(this.$outer, this));
  }
  function Coroutine$Database$Database$Status_init$lambda$lambda(this$Database_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Database = this$Database_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$Database$Database$Status_init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Database$Database$Status_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Database$Database$Status_init$lambda$lambda.prototype.constructor = Coroutine$Database$Database$Status_init$lambda$lambda;
  Coroutine$Database$Database$Status_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Database.path.boot.localSongs.load_61zpoe$(this.local$closure$id, this);
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
  function Database$Database$Status_init$lambda$lambda(this$Database_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Database$Database$Status_init$lambda$lambda(this$Database_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Database$Database$Status_init$lambda$lambda_0(it) {
    return it + 1 | 0;
  }
  function Database$Database$Status_init$lambda$lambda$lambda(it) {
    return it - 1 | 0;
  }
  function Database$Database$Status_init$lambda$lambda_1(this$Status) {
    return function () {
      this$Status.count.transform_ru8m0w$(Database$Database$Status_init$lambda$lambda$lambda);
      return Unit;
    };
  }
  function Database$Database$Status_init$lambda$lambda_2($receiver, it) {
    return it.getOrDefault_11rb$(0);
  }
  function Database$Database$Status_init$lambda$lambda$lambda_0(closure$v) {
    return function (it) {
      return it.add(Kotlin.Long.fromInt(closure$v));
    };
  }
  function Database$Database$Status_init$lambda$lambda$lambda$lambda(closure$v) {
    return function (it) {
      return it.subtract(Kotlin.Long.fromInt(closure$v));
    };
  }
  function Database$Database$Status_init$lambda$lambda$lambda_1(this$Status, closure$v) {
    return function () {
      this$Status.size.transform_ru8m0w$(Database$Database$Status_init$lambda$lambda$lambda$lambda(closure$v));
      return Unit;
    };
  }
  function Database$Database$Status_init$lambda$lambda_3(this$Status) {
    return function ($receiver, v) {
      this$Status.size.transform_ru8m0w$(Database$Database$Status_init$lambda$lambda$lambda_0(v));
      plusAssign($receiver.kills, Database$Database$Status_init$lambda$lambda$lambda_1(this$Status, v));
      return Unit;
    };
  }
  function Database$Database$Status_init$lambda$lambda_4($receiver, it) {
    return it.getOrDefault_11rb$(0.0);
  }
  function Database$Database$Status_init$lambda$lambda$lambda_2(closure$v) {
    return function (it) {
      return it + closure$v;
    };
  }
  function Database$Database$Status_init$lambda$lambda$lambda$lambda_0(closure$v) {
    return function (it) {
      return it - closure$v;
    };
  }
  function Database$Database$Status_init$lambda$lambda$lambda_3(this$Status, closure$v) {
    return function () {
      this$Status.duration.transform_ru8m0w$(Database$Database$Status_init$lambda$lambda$lambda$lambda_0(closure$v));
      return Unit;
    };
  }
  function Database$Database$Status_init$lambda$lambda_5(this$Status) {
    return function ($receiver, v) {
      this$Status.duration.transform_ru8m0w$(Database$Database$Status_init$lambda$lambda$lambda_2(v));
      plusAssign($receiver.kills, Database$Database$Status_init$lambda$lambda$lambda_3(this$Status, v));
      return Unit;
    };
  }
  function Database$Database$Status_init$lambda(this$Database, this$Status) {
    return function ($receiver, id) {
      var tag = this$Database.path.loggedIn.songInfoSource(id, Database$Database$Status_init$lambda$lambda(this$Database, id));
      this$Status.count.transform_ru8m0w$(Database$Database$Status_init$lambda$lambda_0);
      plusAssign($receiver.kills, Database$Database$Status_init$lambda$lambda_1(this$Status));
      $receiver.forEach_5mel8p$($receiver.map_i8ud5a$(tag.bytes.initial, Database$Database$Status_init$lambda$lambda_2), Database$Database$Status_init$lambda$lambda_3(this$Status));
      $receiver.forEach_5mel8p$($receiver.map_i8ud5a$(tag.secs.initial, Database$Database$Status_init$lambda$lambda_4), Database$Database$Status_init$lambda$lambda_5(this$Status));
      return Unit;
    };
  }
  Database$Status.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Status',
    interfaces: []
  };
  function Database$Database$Status_init($outer, set, $this) {
    $this = $this || Object.create(Database$Status.prototype);
    Database$Status.call($this, $outer, toMoves(set.diffsAll));
    return $this;
  }
  Object.defineProperty(Database.prototype, 'rawView', {
    get: function () {
      return this.rawView_vrycfe$_0;
    }
  });
  function Coroutine$showStatus_3ohsj2$($this, st_0, title_0, bgfn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$st = st_0;
    this.local$title = title_0;
    this.local$bgfn = bgfn_0;
  }
  Coroutine$showStatus_3ohsj2$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$showStatus_3ohsj2$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$showStatus_3ohsj2$.prototype.constructor = Coroutine$showStatus_3ohsj2$;
  Coroutine$showStatus_3ohsj2$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.forward.remAssign_11rb$(new Status(this.$this, this.local$st, this.local$title, this.local$bgfn), this);
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
  Database.prototype.showStatus_3ohsj2$ = function (st_0, title_0, bgfn_0, continuation_0, suspended) {
    var instance = new Coroutine$showStatus_3ohsj2$(this, st_0, title_0, bgfn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Database$toBeDownloaded$lambda(this$Database) {
    return function ($receiver, id) {
      return this$Database.path.loggedIn.userSongs.get(id).invoke() === UserSongState.Like && !$receiver.containsRx_1w65cx$(this$Database.path.boot.localSongs.set, id).invoke();
    };
  }
  function Database$toBeUploaded$lambda(this$Database) {
    return function ($receiver, id) {
      return this$Database.path.loggedIn.userSongs.get(id).invoke() === UserSongState.Like && !$receiver.containsRx_1w65cx$(this$Database.path.loggedIn.storageIds, id).invoke();
    };
  }
  function Database$toBeDeleted$lambda(this$Database) {
    return function ($receiver, id) {
      return this$Database.path.loggedIn.userSongs.get(id).invoke() === UserSongState.DontLike;
    };
  }
  function Database$new$lambda(this$Database) {
    return function ($receiver, id) {
      return this$Database.path.loggedIn.userSongs.get(id).invoke() === UserSongState.New;
    };
  }
  function Database$like$lambda($receiver, us) {
    return equals(us.state.initial.invoke(), new Some(UserSongState.Like));
  }
  function Database$dontLike$lambda($receiver, us) {
    return equals(us.state.initial.invoke(), new Some(UserSongState.DontLike));
  }
  function Database$cloud$lambda($receiver, us) {
    return us.uploaded.initial.invoke().getOrDefault_11rb$(false);
  }
  function Database$newInCloud$lambda($receiver, us) {
    return us.uploaded.initial.invoke().getOrDefault_11rb$(false);
  }
  function Database$newInCloud$lambda_0(this$Database) {
    return function ($receiver, id) {
      return !$receiver.containsRx_1w65cx$(this$Database.path.boot.localSongs.set, id).invoke() && this$Database.path.loggedIn.userSongs.get(id).invoke() === UserSongState.New;
    };
  }
  Database.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Database',
    interfaces: [MusicApi, ForwardBase]
  };
  function Coroutine$ui$lambda$lambda$lambda(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.path.loggedIn.back();
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
  function ui$lambda$lambda$lambda(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ui.import(this);
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
  function ui$lambda$lambda$lambda$lambda$lambda_0(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.path.loggedIn.sync.sync(), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_1(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_1(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$statusPanel$lambda($receiver, it) {
    return Unit;
  }
  function ui$lambda$lambda$statusPanel$lambda$lambda(closure$title) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      remAssign($receiver, closure$title);
      return Unit;
    };
  }
  function ui$lambda$lambda$statusPanel$lambda$lambda$lambda(closure$st) {
    return function () {
      return get_groupThousands(closure$st.count.invoke());
    };
  }
  function ui$lambda$lambda$statusPanel$lambda$lambda$lambda_0(closure$st) {
    return function () {
      return get_groupThousands_0(closure$st.size.invoke());
    };
  }
  function ui$lambda$lambda$statusPanel$lambda$lambda$lambda_1(closure$st) {
    return function () {
      return get_formatSecs(numberToInt(closure$st.duration.invoke()));
    };
  }
  function ui$lambda$lambda$statusPanel$lambda$lambda_0(closure$st, this$ui) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      remAssign(get_dt($receiver), 'Songs');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$statusPanel$lambda$lambda$lambda(closure$st));
      remAssign(get_dt($receiver), 'Bytes');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$statusPanel$lambda$lambda$lambda_0(closure$st));
      remAssign(get_dt($receiver), 'Duration');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$statusPanel$lambda$lambda$lambda_1(closure$st));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$statusPanel$lambda$lambda$lambda$lambda$lambda(closure$st_0, closure$title_0, closure$bgfn_0, this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$st = closure$st_0;
    this.local$closure$title = closure$title_0;
    this.local$closure$bgfn = closure$bgfn_0;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$statusPanel$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$statusPanel$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$statusPanel$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$statusPanel$lambda$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$statusPanel$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ui.showStatus_3ohsj2$(this.local$closure$st, this.local$closure$title, this.local$closure$bgfn, this);
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
  function ui$lambda$lambda$statusPanel$lambda$lambda$lambda$lambda$lambda(closure$st_0, closure$title_0, closure$bgfn_0, this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$statusPanel$lambda$lambda$lambda$lambda$lambda(closure$st_0, closure$title_0, closure$bgfn_0, this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$statusPanel$lambda$lambda_1(closure$bgfn, this$ui, closure$st, closure$title) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      row($receiver_0);
      get_justifyContentEnd($receiver_0);
      var $receiver_1 = get_insert_0($receiver).buttonGroup;
      var closure$bgfn_0 = closure$bgfn;
      var this$ui_0 = this$ui;
      var closure$st_0 = closure$st;
      var closure$title_0 = closure$title;
      get_m1($receiver_1.cls);
      closure$bgfn_0(this$ui_0, $receiver_1);
      var $receiver_2 = $receiver_1.button;
      $receiver_2.p2;
      $receiver_2.secondary;
      get_list($receiver_2.fa);
      this$ui_0.click_3xepc3$($receiver_2, ui$lambda$lambda$statusPanel$lambda$lambda$lambda$lambda$lambda(closure$st_0, closure$title_0, closure$bgfn_0, this$ui_0));
      return Unit;
    };
  }
  function ui$lambda$lambda$statusPanel$lambda_0(closure$title, closure$st, this$ui, closure$bgfn) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_p1($receiver_0);
      get_border($receiver_0);
      get_rounded($receiver_0);
      column($receiver_0);
      invoke(get_h6($receiver), ui$lambda$lambda$statusPanel$lambda$lambda(closure$title));
      invoke(get_dl($receiver), ui$lambda$lambda$statusPanel$lambda$lambda_0(closure$st, this$ui));
      invoke(get_div($receiver), ui$lambda$lambda$statusPanel$lambda$lambda_1(closure$bgfn, this$ui, closure$st, closure$title));
      return Unit;
    };
  }
  function ui$lambda$lambda$statusPanel(this$, this$ui) {
    return function (st, title, bgfn) {
      if (bgfn === void 0)
        bgfn = ui$lambda$lambda$statusPanel$lambda;
      get_insert_0(this$).wraps.div_iw61es$(ui$lambda$lambda$statusPanel$lambda_0(title, st, this$ui, bgfn));
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_2(this$ui) {
    return function () {
      var $receiver = this$ui.toBeDownloaded.set.iterableRx.invoke();
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!this$ui.path.boot.processOf_61zpoe$(element).downloading.invoke()) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            tmp$ = this.local$this$ui.toBeDownloaded.set.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              download(this.local$this$ui.path.loggedIn, element);
            }

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
  function ui$lambda$lambda$lambda$lambda$lambda_3(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_2(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_0(this$ui) {
    return function ($receiver, bg) {
      var $receiver_0 = bg.button;
      var this$ui_0 = this$ui;
      $receiver_0.p2;
      $receiver_0.secondary;
      get_download($receiver_0.fa);
      this$ui_0.rxEnabled_y5ufnr$($receiver_0, ui$lambda$lambda$lambda$lambda$lambda_2(this$ui_0));
      $receiver.click_3xepc3$($receiver_0, ui$lambda$lambda$lambda$lambda$lambda_3(this$ui_0));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_4(this$ui) {
    return function () {
      var $receiver = this$ui.toBeUploaded.set.iterableRx.invoke();
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!this$ui.path.boot.processOf_61zpoe$(element).uploading.invoke()) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            tmp$ = this.local$this$ui.toBeUploaded.set.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              upload(this.local$this$ui.path.loggedIn, element);
            }

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
  function ui$lambda$lambda$lambda$lambda$lambda_5(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_3(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_1(this$ui) {
    return function ($receiver, bg) {
      var $receiver_0 = bg.button;
      var this$ui_0 = this$ui;
      $receiver_0.p2;
      $receiver_0.secondary;
      get_upload($receiver_0.fa);
      this$ui_0.rxEnabled_y5ufnr$($receiver_0, ui$lambda$lambda$lambda$lambda$lambda_4(this$ui_0));
      $receiver.click_3xepc3$($receiver_0, ui$lambda$lambda$lambda$lambda$lambda_5(this$ui_0));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_6(this$ui) {
    return function () {
      var $receiver = this$ui.toBeDeleted.set.iterableRx.invoke();
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!this$ui.path.boot.processOf_61zpoe$(element).deletingFromLocal.invoke()) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_4(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_4.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_4;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            tmp$ = this.local$this$ui.toBeDeleted.set.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              deleteFromLocal(this.local$this$ui.path.loggedIn, element);
            }

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
  function ui$lambda$lambda$lambda$lambda$lambda_7(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_4(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_2(this$ui) {
    return function ($receiver, bg) {
      var $receiver_0 = bg.button;
      var this$ui_0 = this$ui;
      $receiver_0.p2;
      $receiver_0.secondary;
      get_trashAlt($receiver_0.fa);
      this$ui_0.rxEnabled_y5ufnr$($receiver_0, ui$lambda$lambda$lambda$lambda$lambda_6(this$ui_0));
      $receiver.click_3xepc3$($receiver_0, ui$lambda$lambda$lambda$lambda$lambda_7(this$ui_0));
      return Unit;
    };
  }
  function ui$lambda$lambda(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      var statusPanel = ui$lambda$lambda$statusPanel($receiver, this$ui);
      statusPanel(this$ui.toBeDownloaded, 'To Be Downloaded', ui$lambda$lambda$lambda_0(this$ui));
      statusPanel(this$ui.toBeUploaded, 'To Be Uploaded', ui$lambda$lambda$lambda_1(this$ui));
      statusPanel(this$ui.toBeDeleted, 'To Be Deleted', ui$lambda$lambda$lambda_2(this$ui));
      statusPanel(this$ui.newInCloud, 'New in Cloud');
      statusPanel(this$ui.localSongIds, 'Local Songs');
      statusPanel(this$ui.new, 'New');
      statusPanel(this$ui.like, 'Like');
      statusPanel(this$ui.dontLike, "Don't Like");
      statusPanel(this$ui.cloud, 'Cloud');
      statusPanel(this$ui.uploading, 'Uploading');
      return Unit;
    };
  }
  function ui_0($receiver) {
    var $receiver_0 = widget.factory.topbar;
    var $receiver_1 = $receiver_0.left.button;
    $receiver_1.back;
    $receiver.click_3xepc3$($receiver_1, ui$lambda$lambda$lambda($receiver));
    remAssign($receiver_0.title, 'Database');
    $receiver.tasksUi_tdhe4g$($receiver_0.right);
    $receiver.syncUi_e1rmy3$($receiver_0.slots.right.slots);
    var $receiver_2 = $receiver_0.right.dropdown;
    $receiver_2.bars;
    $receiver_2.right;
    var $receiver_3 = $receiver_2.menu;
    var $receiver_4 = $receiver_3.item;
    get_fileImport($receiver_4.fa);
    $receiver_4.text.remAssign_61zpoe$('Import MP3s');
    $receiver.click_ka8ib0$($receiver_4, ui$lambda$lambda$lambda$lambda$lambda_0($receiver));
    var $receiver_5 = $receiver_3.item;
    get_syncAlt($receiver_5.fa);
    $receiver_5.text.remAssign_61zpoe$('Synchronize');
    $receiver.click_ka8ib0$($receiver_5, ui$lambda$lambda$lambda$lambda$lambda_1($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_6 = widget.factory.scrollPane;
    invoke($receiver_6.pane, ui$lambda$lambda($receiver));
    return new TopAndContent(tmp$, $receiver_6.node);
  }
  function ImportPath(import_0) {
    DatabasePath.call(this, import_0.from);
    this.import = import_0;
  }
  ImportPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImportPath',
    interfaces: [DatabasePath]
  };
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function Import(from) {
    UIBase_init(from, this);
    this.from = from;
    this.path_9hulyk$_0 = new ImportPath(this);
    this.loadable = new RxMutableSet();
    this.loadList = new ListenableMutableList();
    this.rawView_xbdjti$_0 = ui_1(this);
    var $receiver = LinkedHashSet_init();
    feedTo(map(this.loadList.emitter, Import$loadIds$lambda$lambda), $receiver);
    this.loadIds_0 = $receiver;
  }
  Object.defineProperty(Import.prototype, 'path', {
    get: function () {
      return this.path_9hulyk$_0;
    }
  });
  Object.defineProperty(Import.prototype, 'rawView', {
    get: function () {
      return this.rawView_xbdjti$_0;
    }
  });
  function Import$load$lambda$lambda$lambda$lambda(this$Import, this$) {
    return function () {
      var $receiver = this$Import.loadList;
      var element = this$;
      $receiver.remove_11rb$(element);
      return Unit;
    };
  }
  function Coroutine$Import$load$lambda$lambda(closure$file_0, this$Import_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$file = closure$file_0;
    this.local$this$Import = this$Import_0;
  }
  Coroutine$Import$load$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Import$load$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Import$load$lambda$lambda.prototype.constructor = Coroutine$Import$load$lambda$lambda;
  Coroutine$Import$load$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAsArrayBuffer(this.local$closure$file, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = hash(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var id = this.result_0;
            if (!this.local$this$Import.loadIds_0.contains_11rb$(id)) {
              var $receiver = new ImportFile(this.local$this$Import, this.local$closure$file, new Playable(id, this.local$closure$file));
              var this$Import = this.local$this$Import;
              this$Import.loadList.add_11rb$($receiver);
              plusAssign($receiver.kills, Import$load$lambda$lambda$lambda$lambda(this$Import, $receiver));
              return Unit;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
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
  function Import$load$lambda$lambda(closure$file_0, this$Import_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Import$load$lambda$lambda(closure$file_0, this$Import_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Import.prototype.load_c4p07t$ = function (list, continuation) {
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (endsWith(element.name, '.mp3'))
        destination.add_11rb$(element);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      this.path.boot.tasks.exec(Import$load$lambda$lambda(element_0, this));
    }
  };
  Import.prototype.startImporting = function () {
    var tmp$;
    tmp$ = this.loadList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.startImporting();
    }
  };
  Import.prototype.clear = function () {
    var tmp$;
    tmp$ = this.loadList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.coroutineContext.cancel();
    }
  };
  function Import$loadIds$lambda$lambda$lambda(v) {
    return v.playable.id;
  }
  function Import$loadIds$lambda$lambda(m) {
    return m.map_2o04qz$(Import$loadIds$lambda$lambda$lambda);
  }
  Import.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Import',
    interfaces: [MusicApi, UIBase]
  };
  function ImportFile(import_0, file, playable) {
    UIBase_init(import_0, this);
    this.import = import_0;
    this.file = file;
    this.playable = playable;
    this.path = this.import.path;
    var $receiver = new Var(false);
    this.forEach_5mel8p$($receiver, ImportFile$importing$lambda$lambda(this));
    this.importing = $receiver;
    var $receiver_0 = this.path.loggedIn.userSongs.get(this.playable.id);
    this.forEach_5mel8p$($receiver_0, ImportFile$state$lambda$lambda(this));
    this.state = $receiver_0;
    this.tag = this.path.loggedIn.songInfoSource(this.playable.id, ImportFile$tag$lambda(this));
    this.rawView_2r18my$_0 = ui_2(this);
    this.forEach_5mel8p$(this.containsRx_1w65cx$(this.path.boot.localSongs.set, this.playable.id), ImportFile_init$lambda(this));
  }
  Object.defineProperty(ImportFile.prototype, 'rawView', {
    get: function () {
      return this.rawView_2r18my$_0;
    }
  });
  ImportFile.prototype.startImporting = function () {
    this.importing.now = true;
  };
  function Coroutine$ImportFile$importing$lambda$lambda$lambda$lambda(this$ImportFile_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ImportFile = this$ImportFile_0;
  }
  Coroutine$ImportFile$importing$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ImportFile$importing$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ImportFile$importing$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ImportFile$importing$lambda$lambda$lambda$lambda;
  Coroutine$ImportFile$importing$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ImportFile.path.boot.localSongs.addMp3_izzmmv$(this.local$this$ImportFile.playable, this);
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
  function ImportFile$importing$lambda$lambda$lambda$lambda(this$ImportFile_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ImportFile$importing$lambda$lambda$lambda$lambda(this$ImportFile_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ImportFile$importing$lambda$lambda$lambda$lambda_0(this$ImportFile, this$) {
    return function () {
      this$.remove_11rb$(this$ImportFile);
      return Unit;
    };
  }
  function ImportFile$importing$lambda$lambda(this$ImportFile) {
    return function ($receiver, i) {
      var $receiver_0 = this$ImportFile.path.import.loadable;
      var this$ImportFile_0 = this$ImportFile;
      if (i) {
        $receiver_0.remove_11rb$(this$ImportFile_0);
        this$ImportFile_0.path.boot.tasks.exec(ImportFile$importing$lambda$lambda$lambda$lambda(this$ImportFile_0));
      }
       else {
        $receiver_0.add_11rb$(this$ImportFile_0);
        plusAssign($receiver.kills, ImportFile$importing$lambda$lambda$lambda$lambda_0(this$ImportFile_0, $receiver_0));
      }
      return Unit;
    };
  }
  function ImportFile$state$lambda$lambda(this$ImportFile) {
    return function ($receiver, s) {
      if (s === UserSongState.DontLike) {
        this$ImportFile.coroutineContext.cancel();
      }
      return Unit;
    };
  }
  function Coroutine$ImportFile$tag$lambda(this$ImportFile_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ImportFile = this$ImportFile_0;
  }
  Coroutine$ImportFile$tag$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ImportFile$tag$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ImportFile$tag$lambda.prototype.constructor = Coroutine$ImportFile$tag$lambda;
  Coroutine$ImportFile$tag$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ImportFile.playable.blob;
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
  function ImportFile$tag$lambda(this$ImportFile_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ImportFile$tag$lambda(this$ImportFile_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ImportFile_init$lambda(this$ImportFile) {
    return function ($receiver, c) {
      if (c)
        this$ImportFile.coroutineContext.cancel();
      return Unit;
    };
  }
  ImportFile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImportFile',
    interfaces: [UIBase]
  };
  function Coroutine$ui$lambda$lambda$lambda_0(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.from.back();
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
  function ui$lambda$lambda$lambda_3(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda_0(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda(closure$list_0, this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$list = closure$list_0;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ui.load_c4p07t$(this.local$closure$list, this);
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda(closure$list_0, this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda(closure$list_0, this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_0(this$, this$ui) {
    return function (it) {
      var tmp$;
      if ((tmp$ = this$.files) != null) {
        var this$ui_0 = this$ui;
        var list = toList(asList(tmp$));
        this$ui_0.uix(ui$lambda$lambda$lambda$lambda$lambda$lambda(list, this$ui_0));
      }
      this$.value = '';
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_4(this$ui) {
    return function ($receiver) {
      get_dNone(get_cls($receiver));
      $receiver.type = 'file';
      $receiver.webkitdirectory = true;
      $receiver.multiple = true;
      $receiver.accept = 'audio/mpeg';
      $receiver.onchange = ui$lambda$lambda$lambda$lambda_0($receiver, this$ui);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    get_folderOpen(get_fa(get_cls($receiver)));
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda_1(closure$inp) {
    return function ($receiver) {
      $receiver.htmlFor = get_ref(closure$inp);
      faButtonSpan($receiver, void 0, ui$lambda$lambda$lambda$lambda$lambda_8);
      var $receiver_0 = get_cls($receiver);
      get_btn($receiver_0);
      get_btnPrimary($receiver_0);
      get_m0($receiver_0);
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$list_0, this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$list = closure$list_0;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ui.load_c4p07t$(this.local$closure$list, this);
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$list_0, this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$list_0, this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_2(this$, this$ui) {
    return function (it) {
      var tmp$;
      if ((tmp$ = this$.files) != null) {
        var this$ui_0 = this$ui;
        var list = toList(asList(tmp$));
        this$ui_0.uix(ui$lambda$lambda$lambda$lambda$lambda$lambda_0(list, this$ui_0));
      }
      this$.value = '';
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_5(this$ui) {
    return function ($receiver) {
      get_dNone(get_cls($receiver));
      $receiver.type = 'file';
      $receiver.multiple = true;
      $receiver.accept = 'audio/mpeg';
      $receiver.onchange = ui$lambda$lambda$lambda$lambda_2($receiver, this$ui);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    get_file(get_fa(get_cls($receiver)));
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda_3(closure$inp) {
    return function ($receiver) {
      $receiver.htmlFor = get_ref(closure$inp);
      faButtonSpan($receiver, void 0, ui$lambda$lambda$lambda$lambda$lambda_9);
      var $receiver_0 = get_cls($receiver);
      get_btn($receiver_0);
      get_btnPrimary($receiver_0);
      get_m0($receiver_0);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_10(this$ui) {
    return function ($receiver) {
      return this$ui.loadable.isEmptyRx.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_5(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_5.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_5;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_5.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.startImporting(), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_11(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_5(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_12(this$ui) {
    return function ($receiver) {
      return this$ui.loadList.isEmptyRx.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_6(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_6.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_6;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_6.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.clear(), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_13(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_6(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda_0(i) {
    return i.rawView;
  }
  function ui_1($receiver) {
    var $receiver_0 = widget.factory.topbar;
    var $receiver_1 = $receiver_0.left.button;
    $receiver_1.back;
    $receiver.click_3xepc3$($receiver_1, ui$lambda$lambda$lambda_3($receiver));
    remAssign($receiver_0.title, 'Import MP3s');
    var inputContainer = $receiver_0.node;
    $receiver.tasksUi_tdhe4g$($receiver_0.right);
    var $receiver_2 = $receiver_0.right.buttonGroup;
    $receiver_2.m1;
    if (commonui.webkitdirectorySupported) {
      var $receiver_3 = invoke(get_input(inputContainer), ui$lambda$lambda$lambda_4($receiver));
      invoke(get_label($receiver_2.node), ui$lambda$lambda$lambda$lambda_1($receiver_3));
    }
    var $receiver_4 = invoke(get_input(inputContainer), ui$lambda$lambda$lambda_5($receiver));
    invoke(get_label($receiver_2.node), ui$lambda$lambda$lambda$lambda_3($receiver_4));
    var $receiver_5 = $receiver_0.right.dropdown;
    $receiver_5.bars;
    $receiver_5.right;
    var $receiver_6 = $receiver_5.menu;
    var $receiver_7 = $receiver_6.item;
    $receiver.rxClass_mjd6u9$($receiver_7.node, get_disabled(Cls.Companion), ui$lambda$lambda$lambda$lambda$lambda_10($receiver));
    get_fileImport($receiver_7.fa);
    $receiver_7.text.remAssign_61zpoe$('Start Importing');
    $receiver.click_ka8ib0$($receiver_7, ui$lambda$lambda$lambda$lambda$lambda_11($receiver));
    var $receiver_8 = $receiver_6.item;
    $receiver.rxClass_mjd6u9$($receiver_8.node, get_disabled(Cls.Companion), ui$lambda$lambda$lambda$lambda$lambda_12($receiver));
    get_trashAlt($receiver_8.fa);
    $receiver_8.text.remAssign_61zpoe$('Clear List');
    $receiver.click_ka8ib0$($receiver_8, ui$lambda$lambda$lambda$lambda$lambda_13($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_9 = widget.factory.scrollPane;
    var $receiver_10 = $receiver_9.cls;
    get_p1($receiver_10);
    get_flexColumn($receiver_10);
    listenableList($receiver_9.pane, $receiver.kills, $receiver.loadList, ui$lambda$lambda_0);
    return new TopAndContent(tmp$, $receiver_9.node);
  }
  function ui$lambda$lambda$lambda_6(this$ui) {
    return function () {
      return fixedArtist(this$ui.tag).getOrDefault_11rb$('<unknown>');
    };
  }
  function ui$lambda$lambda$lambda_7(this$ui) {
    return function () {
      return fixedTitle(this$ui.tag).getOrDefault_11rb$('<unknown>');
    };
  }
  function ui$lambda$lambda$lambda$lambda_4(it) {
    return get_formatSecs(roundToInt(it));
  }
  function ui$lambda$lambda$lambda_8(this$ui) {
    return function () {
      return this$ui.tag.secs.initial.invoke().map_2o04qz$(ui$lambda$lambda$lambda$lambda_4).getOrDefault_11rb$('<unknown>');
    };
  }
  function ui$lambda$lambda_1(this$ui) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      remAssign(get_dt($receiver), 'Filename');
      remAssign(get_dd($receiver), this$ui.file.name);
      remAssign(get_dt($receiver), 'Artist');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$lambda_6(this$ui));
      remAssign(get_dt($receiver), 'Title');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$lambda_7(this$ui));
      remAssign(get_dt($receiver), 'Size');
      remAssign(get_dd($receiver), get_groupThousands(this$ui.file.size) + ' bytes');
      remAssign(get_dt($receiver), 'Duration');
      this$ui.remAssign_7fncnf$(get_dd($receiver), ui$lambda$lambda$lambda_8(this$ui));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_7(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_7.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_7.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_7.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_7;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_7.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.path.boot.play_izzmmv$(this.local$this$ui.playable), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_14(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_7(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_15(this$ui) {
    return function ($receiver) {
      return this$ui.state.invoke() === UserSongState.Like ? get_btnPrimary(Cls.Companion) : get_btnSecondary(Cls.Companion);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_8(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_8.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_8.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_8.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_8;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_8.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.path.boot.like_61zpoe$(this.local$this$ui.playable.id), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_16(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_8(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_9(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_9.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_9.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_9.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_9;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_9.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.path.boot.dontLike_61zpoe$(this.local$this$ui.playable.id), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_17(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_9(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_18(this$ui) {
    return function () {
      return !this$ui.importing.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_10(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_10.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_10.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_10.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_10;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_10.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.startImporting(), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_19(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_10(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_11(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_11.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_11.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_11.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_11;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_11.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.coroutineContext.cancel(), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_20(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_11(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda_2(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_dFlex($receiver_0);
      get_flexRow($receiver_0);
      get_justifyContentEnd($receiver_0);
      var $receiver_1 = get_insert(get_widget($receiver)).buttonGroup;
      var this$ui_0 = this$ui;
      $receiver_1.m1;
      var $receiver_2 = $receiver_1.button;
      $receiver_2.p2;
      $receiver_2.secondary;
      get_play($receiver_2.fa);
      this$ui_0.click_3xepc3$($receiver_2, ui$lambda$lambda$lambda$lambda$lambda_14(this$ui_0));
      var $receiver_3 = $receiver_1.button;
      $receiver_3.p2;
      get_thumbsUp($receiver_3.fa);
      this$ui_0.rxClass_wqb4ha$($receiver_3.node, ui$lambda$lambda$lambda$lambda$lambda_15(this$ui_0));
      this$ui_0.click_3xepc3$($receiver_3, ui$lambda$lambda$lambda$lambda$lambda_16(this$ui_0));
      var $receiver_4 = $receiver_1.button;
      $receiver_4.p2;
      $receiver_4.secondary;
      get_thumbsDown($receiver_4.fa);
      this$ui_0.click_3xepc3$($receiver_4, ui$lambda$lambda$lambda$lambda$lambda_17(this$ui_0));
      var $receiver_5 = $receiver_1.button;
      $receiver_5.p2;
      $receiver_5.secondary;
      get_fileImport($receiver_5.fa);
      this$ui_0.rxEnabled_y5ufnr$($receiver_5, ui$lambda$lambda$lambda$lambda$lambda_18(this$ui_0));
      this$ui_0.click_3xepc3$($receiver_5, ui$lambda$lambda$lambda$lambda$lambda_19(this$ui_0));
      var $receiver_6 = $receiver_1.button;
      $receiver_6.p2;
      $receiver_6.secondary;
      get_ban($receiver_6.fa);
      this$ui_0.click_3xepc3$($receiver_6, ui$lambda$lambda$lambda$lambda$lambda_20(this$ui_0));
      return Unit;
    };
  }
  function ui$lambda(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_p1($receiver_0);
      get_border($receiver_0);
      get_rounded($receiver_0);
      get_dFlex($receiver_0);
      get_flexColumn($receiver_0);
      invoke(get_dl($receiver), ui$lambda$lambda_1(this$ui));
      invoke(get_div($receiver), ui$lambda$lambda_2(this$ui));
      return Unit;
    };
  }
  function ui_2($receiver) {
    return invoke(get_div(document), ui$lambda($receiver));
  }
  function Coroutine$upload$lambda$lambda(this$upload_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$upload = this$upload_0;
    this.local$closure$id = closure$id_0;
    this.local$store = void 0;
  }
  Coroutine$upload$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$upload$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$upload$lambda$lambda.prototype.constructor = Coroutine$upload$lambda$lambda;
  Coroutine$upload$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$upload.path.boot.localSongs.load_61zpoe$(this.local$closure$id, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var file = this.result_0;
            if (file != null) {
              var $receiver = new StoreState();
              var closure$id = this.local$closure$id;
              var this$upload = this.local$this$upload;
              $receiver.props.persisted_11rd$(get_storage(musiclib.musicLib.app).doc_61zpoe$(closure$id));
              $receiver.uploaded.cv = false;
              save($receiver, this$upload.path.loggedIn.db);
              $receiver.props.clearDirty();
              this.local$store = $receiver;
              var ref = this.local$this$upload.path.loggedIn.storageRef.child(this.local$closure$id);
              this.state_0 = 3;
              this.result_0 = await_0(ref.put(file), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            var this$upload_0 = this.local$this$upload;
            this.local$store.uploaded.cv = true;
            save(this.local$store, this$upload_0.path.loggedIn.db);
            this.local$store.props.clearDirty();
            return Unit;
          case 4:
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
  function upload$lambda$lambda(this$upload_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$upload$lambda$lambda(this$upload_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$upload$lambda(this$upload_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$upload = this$upload_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$upload$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$upload$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$upload$lambda.prototype.constructor = Coroutine$upload$lambda;
  Coroutine$upload$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$upload.path.loggedIn.privileged_lnyleu$(upload$lambda$lambda(this.local$this$upload, this.local$closure$id), this);
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
  function upload$lambda(this$upload_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$upload$lambda(this$upload_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function upload($receiver, id) {
    var process = $receiver.path.boot.processOf_61zpoe$(id).uploading;
    $receiver.path.boot.task_1lt98f$(process, upload$lambda($receiver, id));
  }
  function download$lambda$lambda$lambda$lambda(closure$res, this$) {
    return function (it) {
      return closure$res.complete_11rb$(this$.response);
    };
  }
  function Coroutine$download$lambda$lambda(this$download_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$download = this$download_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$download$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$download$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$download$lambda$lambda.prototype.constructor = Coroutine$download$lambda$lambda;
  Coroutine$download$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$download.storageRef.child(this.local$closure$id).getDownloadURL(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var url = this.result_0;
            var res = CompletableDeferred();
            var $receiver = new XMLHttpRequest();
            $receiver.responseType = 'blob';
            $receiver.onload = download$lambda$lambda$lambda$lambda(res, $receiver);
            $receiver.open('GET', url);
            $receiver.send();
            this.state_0 = 3;
            this.result_0 = res.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var file = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$this$download.path.boot.localSongs.addMp3_tdb4ml$(this.local$closure$id, file, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  function download$lambda$lambda(this$download_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$download$lambda$lambda(this$download_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$download$lambda(this$download_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$download = this$download_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$download$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$download$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$download$lambda.prototype.constructor = Coroutine$download$lambda;
  Coroutine$download$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$download.path.loggedIn.privileged_lnyleu$(download$lambda$lambda(this.local$this$download, this.local$closure$id), this);
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
  function download$lambda(this$download_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$download$lambda(this$download_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function download($receiver, id) {
    var process = $receiver.path.boot.processOf_61zpoe$(id).downloading;
    $receiver.path.boot.task_1lt98f$(process, download$lambda($receiver, id));
  }
  function Coroutine$deleteFromLocal$lambda(this$deleteFromLocal_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$deleteFromLocal = this$deleteFromLocal_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$deleteFromLocal$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deleteFromLocal$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deleteFromLocal$lambda.prototype.constructor = Coroutine$deleteFromLocal$lambda;
  Coroutine$deleteFromLocal$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$deleteFromLocal.path.boot.localSongs.removeMp3_61zpoe$(this.local$closure$id, this);
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
  function deleteFromLocal$lambda(this$deleteFromLocal_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$deleteFromLocal$lambda(this$deleteFromLocal_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function deleteFromLocal($receiver, id) {
    var process = $receiver.path.boot.processOf_61zpoe$(id).deletingFromLocal;
    $receiver.path.boot.task_1lt98f$(process, deleteFromLocal$lambda($receiver, id));
  }
  function Coroutine$deleteFromCloud$lambda$lambda(closure$id_0, this$deleteFromCloud_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$id = closure$id_0;
    this.local$this$deleteFromCloud = this$deleteFromCloud_0;
  }
  Coroutine$deleteFromCloud$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deleteFromCloud$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deleteFromCloud$lambda$lambda.prototype.constructor = Coroutine$deleteFromCloud$lambda$lambda;
  Coroutine$deleteFromCloud$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            docRef(get_storage(musiclib.musicLib.app).doc_61zpoe$(this.local$closure$id), this.local$this$deleteFromCloud.path.loggedIn.db).delete();
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$deleteFromCloud.storageRef.child(this.local$closure$id).delete(), this);
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
  function deleteFromCloud$lambda$lambda(closure$id_0, this$deleteFromCloud_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$deleteFromCloud$lambda$lambda(closure$id_0, this$deleteFromCloud_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$deleteFromCloud$lambda(this$deleteFromCloud_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$deleteFromCloud = this$deleteFromCloud_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$deleteFromCloud$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deleteFromCloud$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deleteFromCloud$lambda.prototype.constructor = Coroutine$deleteFromCloud$lambda;
  Coroutine$deleteFromCloud$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$deleteFromCloud.path.loggedIn.privileged_lnyleu$(deleteFromCloud$lambda$lambda(this.local$closure$id, this.local$this$deleteFromCloud), this);
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
  function deleteFromCloud$lambda(this$deleteFromCloud_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$deleteFromCloud$lambda(this$deleteFromCloud_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function deleteFromCloud($receiver, id) {
    var process = $receiver.path.boot.processOf_61zpoe$(id).deletingFromCloud;
    $receiver.path.boot.task_1lt98f$(process, deleteFromCloud$lambda($receiver, id));
  }
  function LoggedInPath(loggedIn) {
    BootPath.call(this, loggedIn.from);
    this.loggedIn = loggedIn;
  }
  LoggedInPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedInPath',
    interfaces: [BootPath]
  };
  function LoggedIn(from, user, app, db, functions, storage, songInfoSource, userSongs) {
    ForwardBase_init(from, this);
    this.from = from;
    this.user = user;
    this.app = app;
    this.db = db;
    this.storage = storage;
    this.songInfoSource_4fj69f$_0 = songInfoSource;
    this.userSongs_sxiaog$_0 = userSongs;
    this.path_zkur8$_0 = new LoggedInPath(this);
    this.storageRef = this.storage.ref('music/files');
    this.userSongSet_tex327$_0 = lazy(LoggedIn$userSongSet$lambda(this));
    this.storageSet_emt112$_0 = lazy(LoggedIn$storageSet$lambda(this));
    this.uploadedSet_99r6ld$_0 = lazy(LoggedIn$uploadedSet$lambda(this));
    this.storageIds = this.get_ids_wjz35z$(this.storageSet.set);
    this.uploadingIds = this.get_ids_wjz35z$(this.filtered_49l5s4$(this.storageSet.set, LoggedIn$uploadingIds$lambda));
    var signedIn = {v: false};
    this.signinWithCustomToken = LoggedIn$signinWithCustomToken$lambda$lambda(signedIn, functions, this);
    var log = LoggedIn_init$log;
    this.sync = new Sync(this);
    this.rawView_mrgtfa$_0 = ui_3(this);
  }
  Object.defineProperty(LoggedIn.prototype, 'songInfoSource', {
    get: function () {
      return this.songInfoSource_4fj69f$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'userSongs', {
    get: function () {
      return this.userSongs_sxiaog$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'path', {
    get: function () {
      return this.path_zkur8$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'userSongSet', {
    get: function () {
      return this.userSongSet_tex327$_0.value;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'storageSet', {
    get: function () {
      return this.storageSet_emt112$_0.value;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'uploadedSet', {
    get: function () {
      return this.uploadedSet_99r6ld$_0.value;
    }
  });
  function Coroutine$database($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$database.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$database.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$database.prototype.constructor = Coroutine$database;
  Coroutine$database.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.forward.remAssign_11rb$(new Database(this.$this), this);
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
  LoggedIn.prototype.database = function (continuation_0, suspended) {
    var instance = new Coroutine$database(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$privileged_lnyleu$($this, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fn = fn_0;
  }
  Coroutine$privileged_lnyleu$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$privileged_lnyleu$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$privileged_lnyleu$.prototype.constructor = Coroutine$privileged_lnyleu$;
  Coroutine$privileged_lnyleu$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.signinWithCustomToken(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$fn(this);
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
  LoggedIn.prototype.privileged_lnyleu$ = function (fn_0, continuation_0, suspended) {
    var instance = new Coroutine$privileged_lnyleu$(this, fn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  LoggedIn.prototype.signOut = function () {
    this.app.auth().signOut();
  };
  Object.defineProperty(LoggedIn.prototype, 'rawView', {
    get: function () {
      return this.rawView_mrgtfa$_0;
    }
  });
  function LoggedIn$userSongSet$lambda$lambda() {
    return new UserSong();
  }
  function LoggedIn$userSongSet$lambda(this$LoggedIn) {
    return function () {
      return toRxSetWithLookup(query(get_usersongs(get_private(musiclib.musicLib.app).doc_61zpoe$(this$LoggedIn.user.uid)), this$LoggedIn.db), this$LoggedIn.kills, LoggedIn$userSongSet$lambda$lambda);
    };
  }
  function LoggedIn$storageSet$lambda$lambda() {
    return new StoreState();
  }
  function LoggedIn$storageSet$lambda(this$LoggedIn) {
    return function () {
      return toRxSetWithLookup(query(get_storage(musiclib.musicLib.app), this$LoggedIn.db), this$LoggedIn.kills, LoggedIn$storageSet$lambda$lambda);
    };
  }
  function LoggedIn$uploadedSet$lambda$lambda($receiver, it) {
    return it.uploaded.initial.invoke().getOrDefault_11rb$(false);
  }
  function LoggedIn$uploadedSet$lambda(this$LoggedIn) {
    return function () {
      return this$LoggedIn.filtered_49l5s4$(this$LoggedIn.storageSet.set, LoggedIn$uploadedSet$lambda$lambda);
    };
  }
  function LoggedIn$uploadingIds$lambda($receiver, it) {
    return !it.uploaded.initial.invoke().getOrDefault_11rb$(true);
  }
  function Coroutine$LoggedIn$signinWithCustomToken$lambda$lambda(closure$signedIn_0, closure$functions_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$signedIn = closure$signedIn_0;
    this.local$closure$functions = closure$functions_0;
    this.local$this$ = this$_0;
  }
  Coroutine$LoggedIn$signinWithCustomToken$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$signinWithCustomToken$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$signinWithCustomToken$lambda$lambda.prototype.constructor = Coroutine$LoggedIn$signinWithCustomToken$lambda$lambda;
  Coroutine$LoggedIn$signinWithCustomToken$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (!this.local$closure$signedIn.v) {
              this.state_0 = 2;
              this.result_0 = callable(commonlib.customToken, this.local$closure$functions, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.call_11rb$(Unit, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if ((tmp$ = this.result_0) != null) {
              this.state_0 = 4;
              this.result_0 = await_0(this.local$this$.app.auth().signInWithCustomToken(tmp$), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return this.local$closure$signedIn.v = true, Unit;
          case 6:
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
  function LoggedIn$signinWithCustomToken$lambda$lambda(closure$signedIn_0, closure$functions_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$signinWithCustomToken$lambda$lambda(closure$signedIn_0, closure$functions_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function LoggedIn_init$log(o) {
    var tmp$;
    (tmp$ = console).log.apply(tmp$, o);
  }
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [MusicApi, Content, ForwardBase]
  };
  function Sync(loggedIn) {
    this.loggedIn = loggedIn;
    this.path = this.loggedIn.path;
    this.syncing = new Var(false);
    var $receiver = this.loggedIn;
    this.syncQueries_0 = [collectionRef(get_usersongs(get_private(musiclib.musicLib.app).doc_61zpoe$($receiver.user.uid)), $receiver.db), collectionRef(get_storage(musiclib.musicLib.app), $receiver.db), collectionRef(get_songs(musiclib.musicLib.app), $receiver.db)];
    this.pendingWrites = new RxMutableSet();
    var $receiver_0 = this.loggedIn;
    var $receiver_1 = this.syncQueries_0;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_1.length; ++tmp$) {
      var element = $receiver_1[tmp$];
      var tmp$_0 = $receiver_0.kills;
      var $receiver_2 = {};
      $receiver_2.includeMetadataChanges = true;
      plusAssign(tmp$_0, element.onSnapshot($receiver_2, Sync_init$lambda$lambda$lambda(this, element), Sync_init$lambda$lambda$lambda_0));
    }
    $receiver_0.forEach_5mel8p$(this.syncing, Sync_init$lambda$lambda($receiver_0, this));
  }
  Sync.prototype.sync = function () {
    this.syncing.now = true;
  };
  function Sync_init$lambda$lambda$lambda(this$Sync, closure$q) {
    return function (qs) {
      if (qs.metadata.hasPendingWrites) {
        var $receiver = this$Sync.pendingWrites;
        var element = closure$q;
        $receiver.add_11rb$(element);
      }
       else {
        var $receiver_0 = this$Sync.pendingWrites;
        var element_0 = closure$q;
        $receiver_0.remove_11rb$(element_0);
      }
      return Unit;
    };
  }
  function Sync_init$lambda$lambda$lambda_0(it) {
    report(it);
    return Unit;
  }
  function Coroutine$Sync_init$lambda$lambda$lambda$lambda(this$_1, this$Sync_0, this$_2, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.local$this$ = this$_1;
    this.local$this$Sync = this$Sync_0;
    this.local$this$_0 = this$_2;
  }
  Coroutine$Sync_init$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Sync_init$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Sync_init$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$Sync_init$lambda$lambda$lambda$lambda;
  Coroutine$Sync_init$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 1;
            this.result_0 = await_0(this.local$this$.db.enableNetwork(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 5;
            this.state_0 = 2;
            this.result_0 = flushQueries(this.local$this$_0, this.local$this$Sync.syncQueries_0.slice(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.exceptionState_0 = 8;
            this.finallyPath_0 = [3];
            this.state_0 = 6;
            this.$returnValue = this.result_0;
            continue;
          case 3:
            return this.$returnValue;
          case 4:
            return;
          case 5:
            this.finallyPath_0 = [8];
            this.state_0 = 6;
            continue;
          case 6:
            this.exceptionState_0 = 8;
            this.state_0 = 7;
            this.result_0 = await_0(this.local$this$.db.disableNetwork(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            throw this.exception_0;
          default:this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 8) {
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
  function Sync_init$lambda$lambda$lambda$lambda(this$_1, this$Sync_0, this$_2) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Sync_init$lambda$lambda$lambda$lambda(this$_1, this$Sync_0, this$_2, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Sync_init$lambda$lambda$lambda$lambda_0(closure$e) {
    return function ($receiver) {
      $receiver.danger_61zpoe$('Synchronizing failed: ' + closure$e.message.toString());
      return Unit;
    };
  }
  function Coroutine$Sync_init$lambda$lambda$lambda(this$_0, this$Sync_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 4;
    this.local$this$ = this$_0;
    this.local$this$Sync = this$Sync_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Sync_init$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Sync_init$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Sync_init$lambda$lambda$lambda.prototype.constructor = Coroutine$Sync_init$lambda$lambda$lambda;
  Coroutine$Sync_init$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$this$.privileged_lnyleu$(Sync_init$lambda$lambda$lambda$lambda(this.local$this$, this.local$this$Sync, this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            this.local$this$.path.boot.slots.toasts(Sync_init$lambda$lambda$lambda$lambda_0(e));
            this.state_0 = 3;
            continue;
          case 3:
            return this.local$this$Sync.syncing.now = false, Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
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
  function Sync_init$lambda$lambda$lambda_1(this$_0, this$Sync_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Sync_init$lambda$lambda$lambda(this$_0, this$Sync_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Sync_init$lambda$lambda(this$, this$Sync) {
    return function ($receiver, s) {
      if (s) {
        launch(this$, void 0, void 0, Sync_init$lambda$lambda$lambda_1(this$, this$Sync));
      }
      return Unit;
    };
  }
  Sync.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sync',
    interfaces: []
  };
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_12(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_12.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_12.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_12.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_12;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_12.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ui.database(this);
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
  function ui$lambda$lambda$lambda$lambda$lambda_21(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_12(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_13(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_13.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_13.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_13.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_13;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_13.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.signOut(), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_22(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_13(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_9(this$) {
    return function ($receiver) {
      get_m1(this$.cls);
      return Unit;
    };
  }
  function ui_3($receiver) {
    var $receiver_0 = (new Factory()).topbar;
    var $receiver_1 = $receiver_0.left.dropdown;
    var $receiver_2 = $receiver_1.button;
    $receiver_2.m1p2;
    $receiver_2.secondary;
    get_bars($receiver_2.fa);
    var $receiver_3 = $receiver_1.menu;
    var $receiver_4 = $receiver_3.item;
    get_database($receiver_4.fa);
    $receiver_4.text.remAssign_61zpoe$('Database');
    $receiver.click_ka8ib0$($receiver_4, ui$lambda$lambda$lambda$lambda$lambda_21($receiver));
    $receiver_3.divider;
    var $receiver_5 = $receiver_3.item;
    get_signOutAlt($receiver_5.fa);
    $receiver_5.text.remAssign_61zpoe$('Sign Out');
    $receiver.click_ka8ib0$($receiver_5, ui$lambda$lambda$lambda$lambda$lambda_22($receiver));
    remAssign($receiver_0.title, 'Music');
    $receiver.syncUi_e1rmy3$($receiver_0.slots.right.slots);
    var $receiver_6 = userIcon($receiver_0.right, $receiver.kills, $receiver.path.boot.userIcon);
    invoke($receiver_6.node, ui$lambda$lambda$lambda_9($receiver_6));
    return new TopAndContent($receiver_0.node, null);
  }
  function syncUi$lambda$lambda(closure$loggedIn) {
    return function ($receiver) {
      return closure$loggedIn.sync.syncing.invoke();
    };
  }
  function syncUi$lambda$lambda_0(closure$loggedIn) {
    return function ($receiver) {
      return !closure$loggedIn.sync.syncing.invoke() && closure$loggedIn.sync.pendingWrites.isNotEmptyRx.invoke();
    };
  }
  function Coroutine$syncUi$lambda$lambda(closure$loggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$loggedIn = closure$loggedIn_0;
  }
  Coroutine$syncUi$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$syncUi$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$syncUi$lambda$lambda.prototype.constructor = Coroutine$syncUi$lambda$lambda;
  Coroutine$syncUi$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$loggedIn.sync.sync(), Unit;
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
  function syncUi$lambda$lambda_1(closure$loggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$syncUi$lambda$lambda(closure$loggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function syncUi($receiver, holes, loggedIn) {
    var $receiver_0 = get_insert(holes.slot).wraps.span;
    $receiver_0.visible_metn8w$($receiver, syncUi$lambda$lambda(loggedIn));
    var $receiver_1 = $receiver_0.cls;
    get_m1($receiver_1);
    var $receiver_2 = get_fa($receiver_1);
    get_fw($receiver_2);
    get_syncAlt($receiver_2);
    get_spin($receiver_2);
    var $receiver_3 = get_insert(holes.slot).button;
    $receiver_3.visible_metn8w$($receiver, syncUi$lambda$lambda_0(loggedIn));
    $receiver_3.m1p2;
    get_syncAlt($receiver_3.fa);
    $receiver_3.warning;
    $receiver.click_3xepc3$($receiver_3, syncUi$lambda$lambda_1(loggedIn));
  }
  function Coroutine$main$lambda($receiver_0, controller, continuation_0) {
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
            this.state_0 = 2;
            this.result_0 = commonui.APP.registerServiceWorker(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = Boot$Companion_getInstance().create(this);
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
  function main$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main() {
    launch(coroutines.GlobalScope, void 0, void 0, main$lambda);
  }
  function ImportMP3s() {
    ImportMP3s_instance = this;
  }
  ImportMP3s.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ImportMP3s',
    interfaces: []
  };
  var ImportMP3s_instance = null;
  function ImportMP3s_getInstance() {
    if (ImportMP3s_instance === null) {
      new ImportMP3s();
    }
    return ImportMP3s_instance;
  }
  function mainDropMenu$lambda$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_btnSecondary($receiver_0);
    get_m1($receiver_0);
    dataToggleDropdown($receiver);
    return Unit;
  }
  function mainDropMenu$lambda$lambda$lambda$lambda($receiver) {
    var $receiver_0 = get_fa(get_cls($receiver));
    get_fw($receiver_0);
    get_database($receiver_0);
    return Unit;
  }
  function mainDropMenu$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.innerText = 'Manage Database';
    return Unit;
  }
  function mainDropMenu$lambda$lambda$lambda$lambda$lambda(closure$inbox) {
    return function (it) {
      plusAssign_0(closure$inbox, DatabaseManagement_getInstance());
      return Unit;
    };
  }
  function mainDropMenu$lambda$lambda$lambda$lambda_1(closure$inbox) {
    return function ($receiver) {
      clickEvent($receiver, mainDropMenu$lambda$lambda$lambda$lambda$lambda(closure$inbox));
      return Unit;
    };
  }
  function mainDropMenu$lambda$lambda$lambda(closure$inbox) {
    return function ($receiver) {
      invoke($receiver.icon, mainDropMenu$lambda$lambda$lambda$lambda);
      invoke($receiver.text, mainDropMenu$lambda$lambda$lambda$lambda_0);
      invoke($receiver.anchor, mainDropMenu$lambda$lambda$lambda$lambda_1(closure$inbox));
      return Unit;
    };
  }
  function mainDropMenu$lambda$lambda_0(closure$inbox) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_dropdownMenu($receiver_0);
      get_dropdownMenuRight($receiver_0);
      dropdownItemAnchor($receiver, mainDropMenu$lambda$lambda$lambda(closure$inbox));
      return Unit;
    };
  }
  function mainDropMenu$lambda(closure$inbox) {
    return function ($receiver) {
      get_dropdown(get_cls($receiver));
      faButton($receiver, get_chevronDown(Fa.Companion), mainDropMenu$lambda$lambda);
      invoke(get_div($receiver), mainDropMenu$lambda$lambda_0(closure$inbox));
      return Unit;
    };
  }
  function mainDropMenu($receiver, inbox) {
    return invoke(get_div($receiver), mainDropMenu$lambda(inbox));
  }
  function NotLoggedIn(boot, app) {
    ForwardBase_init(boot, this);
    this.boot = boot;
    this.app = app;
    this.path = this.boot.path;
    this.userSongs_wq6iw8$_0 = null;
    this.songInfoSource_bevpqj$_0 = this.boot.localSongInfoSource;
    this.rawView_sonhr6$_0 = ui_4(this);
  }
  Object.defineProperty(NotLoggedIn.prototype, 'userSongs', {
    get: function () {
      return this.userSongs_wq6iw8$_0;
    }
  });
  Object.defineProperty(NotLoggedIn.prototype, 'songInfoSource', {
    get: function () {
      return this.songInfoSource_bevpqj$_0;
    }
  });
  Object.defineProperty(NotLoggedIn.prototype, 'rawView', {
    get: function () {
      return this.rawView_sonhr6$_0;
    }
  });
  function Coroutine$NotLoggedIn$signIn$lambda$lambda(this$NotLoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$NotLoggedIn = this$NotLoggedIn_0;
  }
  Coroutine$NotLoggedIn$signIn$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NotLoggedIn$signIn$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NotLoggedIn$signIn$lambda$lambda.prototype.constructor = Coroutine$NotLoggedIn$signIn$lambda$lambda;
  Coroutine$NotLoggedIn$signIn$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$NotLoggedIn.path.boot.userState.now = UserState.Unknown, Unit;
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
  function NotLoggedIn$signIn$lambda$lambda(this$NotLoggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$NotLoggedIn$signIn$lambda$lambda(this$NotLoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function NotLoggedIn$signIn$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.danger_61zpoe$('Sign in failed: ' + closure$it.message.toString());
      return Unit;
    };
  }
  function Coroutine$NotLoggedIn$signIn$lambda$lambda_0(this$NotLoggedIn_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$NotLoggedIn = this$NotLoggedIn_0;
    this.local$it = it_0;
  }
  Coroutine$NotLoggedIn$signIn$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NotLoggedIn$signIn$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NotLoggedIn$signIn$lambda$lambda_0.prototype.constructor = Coroutine$NotLoggedIn$signIn$lambda$lambda_0;
  Coroutine$NotLoggedIn$signIn$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            reportd(this.local$it);
            this.local$this$NotLoggedIn.path.boot.slots.toasts(NotLoggedIn$signIn$lambda$lambda$lambda(this.local$it));
            return this.local$this$NotLoggedIn.path.boot.userState.now = UserState.NotLoggedIn, Unit;
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
  function NotLoggedIn$signIn$lambda$lambda_0(this$NotLoggedIn_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$NotLoggedIn$signIn$lambda$lambda_0(this$NotLoggedIn_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$NotLoggedIn$signIn$lambda(this$NotLoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$NotLoggedIn = this$NotLoggedIn_0;
  }
  Coroutine$NotLoggedIn$signIn$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NotLoggedIn$signIn$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NotLoggedIn$signIn$lambda.prototype.constructor = Coroutine$NotLoggedIn$signIn$lambda;
  Coroutine$NotLoggedIn$signIn$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new Login(this.local$this$NotLoggedIn, this.local$this$NotLoggedIn.app, this.local$this$NotLoggedIn.back, NotLoggedIn$signIn$lambda$lambda(this.local$this$NotLoggedIn), NotLoggedIn$signIn$lambda$lambda_0(this.local$this$NotLoggedIn));
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
  function NotLoggedIn$signIn$lambda(this$NotLoggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$NotLoggedIn$signIn$lambda(this$NotLoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$signIn($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$signIn.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$signIn.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$signIn.prototype.constructor = Coroutine$signIn;
  Coroutine$signIn.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.forward.switchTo_cbny1b$(NotLoggedIn$signIn$lambda(this.$this), this);
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
  NotLoggedIn.prototype.signIn = function (continuation_0, suspended) {
    var instance = new Coroutine$signIn(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NotLoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotLoggedIn',
    interfaces: [Content, ForwardBase]
  };
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_14(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_14.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_14.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_14.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_14;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_14.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ui.signIn(this);
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
  function ui$lambda$lambda$lambda$lambda$lambda_23(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_14(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_10(this$) {
    return function ($receiver) {
      get_m1(this$.cls);
      return Unit;
    };
  }
  function ui_4($receiver) {
    var $receiver_0 = widget.factory.topbar;
    var $receiver_1 = $receiver_0.left.dropdown;
    var $receiver_2 = $receiver_1.button;
    $receiver_2.m1p2;
    $receiver_2.secondary;
    get_bars($receiver_2.fa);
    var $receiver_3 = $receiver_1.menu.item;
    get_signInAlt($receiver_3.fa);
    $receiver_3.text.remAssign_61zpoe$('Sign In');
    $receiver.click_ka8ib0$($receiver_3, ui$lambda$lambda$lambda$lambda$lambda_23($receiver));
    remAssign($receiver_0.title, 'Music');
    var $receiver_4 = userIcon($receiver_0.right, $receiver.kills, $receiver.path.boot.userIcon);
    invoke($receiver_4.node, ui$lambda$lambda$lambda_10($receiver_4));
    return new TopAndContent($receiver_0.node, null);
  }
  function Paused(player) {
    PlayState.call(this, player, false);
  }
  Paused.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paused',
    interfaces: [PlayState]
  };
  function PlayerPath(player) {
    VisiblePath.call(this, player.visible);
    this.player = player;
  }
  PlayerPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerPath',
    interfaces: [VisiblePath]
  };
  function Player(visible, playable, startPlaying) {
    ExecImpl_init(visible, this);
    this.visible = visible;
    this.playable = playable;
    this.path = new PlayerPath(this);
    this.audio = invoke(get_audio(document), Player$audio$lambda(this));
    this.state = this.map_i8ud5a$(this.path.boot.userSongs, Player$state$lambda(this));
    this.playState = this.switch_3h03eo$(startPlaying ? new Playing(this) : new Paused(this));
  }
  Player.prototype.nextTrack = function (continuation) {
    this.next();
  };
  Player.prototype.next = function () {
    this.path.visible.loadNextSong_6taknv$(this.isPlaying);
  };
  Player.prototype.dontLike = function (continuation) {
    this.path.boot.dontLike_61zpoe$(this.playable.id);
    this.next();
  };
  Player.prototype.readCounterNow = function () {
    this.path.visible.currentPosition.now = numberToInt(this.audio.currentTime);
  };
  Player.prototype.forward = function (continuation) {
    var newPos = this.audio.currentTime + SeekSeconds;
    if (newPos >= this.audio.duration) {
      this.next();
    }
     else {
      this.audio.currentTime = newPos;
      this.readCounterNow();
    }
  };
  var Math_0 = Math;
  function Player$backward$lambda($receiver) {
    var b = $receiver.currentTime - SeekSeconds;
    $receiver.currentTime = Math_0.max(0.0, b);
    return Unit;
  }
  Player.prototype.backward = function () {
    invoke(this.audio, Player$backward$lambda);
    this.readCounterNow();
  };
  Player.prototype.previousTrack = function () {
    this.audio.currentTime = 0.0;
    this.readCounterNow();
  };
  Player.prototype.like = function () {
    var tmp$;
    if ((tmp$ = this.path.boot.userSongs.now) != null) {
      tmp$.like_61zpoe$(this.playable.id);
    }
  };
  function Coroutine$playOrPause($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$playOrPause.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playOrPause.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playOrPause.prototype.constructor = Coroutine$playOrPause;
  Coroutine$playOrPause.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.$this.isPlaying) {
              this.state_0 = 3;
              this.result_0 = this.$this.playState.switchTo_11rb$(new Paused(this.$this), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.$this.playState.switchTo_11rb$(new Playing(this.$this), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 4;
            continue;
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
  Player.prototype.playOrPause = function (continuation_0, suspended) {
    var instance = new Coroutine$playOrPause(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Player.prototype.play = function (continuation) {
    return this.playOrPause(continuation);
  };
  Player.prototype.pause = function (continuation) {
    return this.playOrPause(continuation);
  };
  Object.defineProperty(Player.prototype, 'isPlaying', {
    get: function () {
      return this.playState.now.isPlaying;
    }
  });
  function Player$audio$lambda$lambda(this$, this$Player) {
    return function (it) {
      this$Player.visible.totalDuration.now = numberToInt(this$.duration);
      return Unit;
    };
  }
  function Player$audio$lambda$lambda_0(this$) {
    return function () {
      URL.revokeObjectURL(this$.src);
      return Unit;
    };
  }
  function Player$audio$lambda(this$Player) {
    return function ($receiver) {
      plusAssign(this$Player.kills, listen($receiver, 'durationchange', Player$audio$lambda$lambda($receiver, this$Player)));
      this$Player.visible.currentPosition.now = 0;
      $receiver.src = URL.createObjectURL(this$Player.playable.blob);
      plusAssign(this$Player.kills, Player$audio$lambda$lambda_0($receiver));
      $receiver.load();
      return Unit;
    };
  }
  function Player$state$lambda(this$Player) {
    return function ($receiver, usi) {
      var tmp$;
      var tmp$_0;
      tmp$_0 = usi != null ? usi.get(this$Player.playable.id).invoke() : null;
      return (tmp$ = tmp$_0) != null ? tmp$ : UserSongState.New;
    };
  }
  Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: [ExecImpl]
  };
  function Playing(player) {
    PlayState.call(this, player, true);
    player.audio.play();
    plusAssign(this.kills, Playing_init$lambda(player));
    player.readCounterNow();
    plusAssign(this.kills, onInterval(window, 250, Playing_init$lambda_0(player)));
    plusAssign(this.kills, listen(player.audio, 'ended', Playing_init$lambda_1(this, player)));
  }
  function Playing_init$lambda(closure$player) {
    return function () {
      closure$player.audio.pause();
      return Unit;
    };
  }
  function Playing_init$lambda_0(closure$player) {
    return function () {
      closure$player.readCounterNow();
      return Unit;
    };
  }
  function Coroutine$Playing_init$lambda$lambda(closure$player_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$player = closure$player_0;
  }
  Coroutine$Playing_init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Playing_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Playing_init$lambda$lambda.prototype.constructor = Coroutine$Playing_init$lambda$lambda;
  Coroutine$Playing_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$player.next(), Unit;
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
  function Playing_init$lambda$lambda(closure$player_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Playing_init$lambda$lambda(closure$player_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Playing_init$lambda_1(this$Playing, closure$player) {
    return function (it) {
      this$Playing.exec(Playing_init$lambda$lambda(closure$player));
      return Unit;
    };
  }
  Playing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Playing',
    interfaces: [PlayState]
  };
  function PlayState(player, isPlaying) {
    ExecImpl_init(player, this);
    this.player = player;
    this.isPlaying = isPlaying;
  }
  PlayState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayState',
    interfaces: [ExecImpl]
  };
  function AritstTitle(artist, title) {
    this.artist = artist;
    this.title = title;
  }
  AritstTitle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AritstTitle',
    interfaces: []
  };
  AritstTitle.prototype.component1 = function () {
    return this.artist;
  };
  AritstTitle.prototype.component2 = function () {
    return this.title;
  };
  AritstTitle.prototype.copy_puj7f4$ = function (artist, title) {
    return new AritstTitle(artist === void 0 ? this.artist : artist, title === void 0 ? this.title : title);
  };
  AritstTitle.prototype.toString = function () {
    return 'AritstTitle(artist=' + Kotlin.toString(this.artist) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  AritstTitle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.artist) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  AritstTitle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.artist, other.artist) && Kotlin.equals(this.title, other.title)))));
  };
  function ui$lambda$lambda_3(this$ui) {
    return function ($receiver) {
      return get_formatSecs(this$ui.totalDuration.invoke());
    };
  }
  function ui$lambda$lambda_4(closure$totalDurationText) {
    return function ($receiver) {
      return closure$totalDurationText.invoke().length;
    };
  }
  function ui$lambda$lambda_5(this$ui, closure$totalDurationTextLength) {
    return function ($receiver) {
      return padStart(get_formatSecs(this$ui.currentPosition.invoke()), closure$totalDurationTextLength.invoke(), 32);
    };
  }
  function ui$lambda$lambda_6(this$ui) {
    return function ($receiver) {
      return this$ui.userSong.invoke() == null;
    };
  }
  function ui$lambda$lambda_7(this$ui) {
    return function ($receiver) {
      return new AritstTitle(fixedArtist(this$ui.tag.invoke()).getOrDefault_11rb$('<unkown artist>'), fixedTitle(this$ui.tag.invoke()).getOrDefault_11rb$('<unkown title>'));
    };
  }
  function ui$lambda$lambda_8(closure$artistTitle) {
    return function ($receiver) {
      return closure$artistTitle.invoke().artist;
    };
  }
  function ui$lambda$lambda_9(closure$artistTitle) {
    return function ($receiver) {
      return closure$artistTitle.invoke().title;
    };
  }
  function ui$lambda$lambda$lambda_11(this$) {
    return function ($receiver, at) {
      var tmp$ = this$;
      var $receiver_0 = {};
      $receiver_0.artist = at.artist;
      $receiver_0.title = at.title;
      tmp$.metadata = new MediaMetadata($receiver_0);
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$this$ui.p) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.play(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
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
  function ui$lambda$lambda$lambda$lambda_5(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_12(this$ui) {
    return function () {
      this$ui.uix(ui$lambda$lambda$lambda$lambda_5(this$ui));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_0(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$this$ui.p) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.pause(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
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
  function ui$lambda$lambda$lambda$lambda_6(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_0(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_13(this$ui) {
    return function () {
      this$ui.uix(ui$lambda$lambda$lambda$lambda_6(this$ui));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_1(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda_1;
  Coroutine$ui$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            return (tmp$ = this.local$this$ui.p) != null ? (tmp$.backward(), Unit) : null;
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
  function ui$lambda$lambda$lambda$lambda_7(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_1(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_14(this$ui) {
    return function () {
      this$ui.uix(ui$lambda$lambda$lambda$lambda_7(this$ui));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_2(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda_2.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda_2;
  Coroutine$ui$lambda$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$this$ui.p) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.forward(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
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
  function ui$lambda$lambda$lambda$lambda_8(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_2(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_15(this$ui) {
    return function () {
      this$ui.uix(ui$lambda$lambda$lambda$lambda_8(this$ui));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_3(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda_3.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda_3;
  Coroutine$ui$lambda$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            return (tmp$ = this.local$this$ui.p) != null ? (tmp$.previousTrack(), Unit) : null;
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
  function ui$lambda$lambda$lambda$lambda_9(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_3(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_16(this$ui) {
    return function () {
      this$ui.uix(ui$lambda$lambda$lambda$lambda_9(this$ui));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_4(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda_4.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda_4;
  Coroutine$ui$lambda$lambda$lambda$lambda_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$this$ui.p) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.nextTrack(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
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
  function ui$lambda$lambda$lambda$lambda_10(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_4(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_17(this$ui) {
    return function () {
      this$ui.uix(ui$lambda$lambda$lambda$lambda_10(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$mediaButton$lambda$lambda($receiver) {
    get_x2(get_fa(get_cls($receiver)));
    return Unit;
  }
  function ui$lambda$lambda$mediaButton$lambda(closure$btnClass, closure$faClass, closure$fn) {
    return function ($receiver) {
      get_btn(get_cls($receiver));
      if (closure$btnClass != null) {
        var it = closure$btnClass;
        get_classes($receiver).plusAssign_pdl1vj$(it);
      }
      faButtonSpan($receiver, closure$faClass, ui$lambda$lambda$mediaButton$lambda$lambda);
      closure$fn($receiver);
      return Unit;
    };
  }
  function ui$lambda$lambda$mediaButton($receiver, faClass, btnClass, fn) {
    if (btnClass === void 0)
      btnClass = get_btnOutlinePrimary(Cls.Companion);
    invoke(get_button($receiver), ui$lambda$lambda$mediaButton$lambda(btnClass, faClass, fn));
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$artist, closure$title) {
    return function ($receiver) {
      return closure$artist.invoke() + ' - ' + closure$title.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_24(this$ui, closure$artist, closure$title) {
    return function ($receiver) {
      rxText($receiver, this$ui.kills, ui$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$artist, closure$title));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_11(this$ui, closure$artist, closure$title) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_p1($receiver_0);
      get_px2($receiver_0);
      get_border($receiver_0);
      get_borderPrimary($receiver_0);
      get_rounded($receiver_0);
      get_textPrimary($receiver_0);
      get_scrollVertical($receiver_0);
      get_dFlex($receiver_0);
      get_alignItemsCenter($receiver_0);
      invoke(get_span($receiver), ui$lambda$lambda$lambda$lambda$lambda_24(this$ui, closure$artist, closure$title));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$currentPositionText, closure$totalDurationText) {
    return function ($receiver) {
      return closure$currentPositionText.invoke() + ' / ' + closure$totalDurationText.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_25(this$ui, closure$currentPositionText, closure$totalDurationText) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m0($receiver_0);
      get_textPrimary($receiver_0);
      rxText($receiver, this$ui.kills, ui$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$currentPositionText, closure$totalDurationText));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_12(this$ui, closure$currentPositionText, closure$totalDurationText) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_border($receiver_0);
      get_borderPrimary($receiver_0);
      get_rounded($receiver_0);
      get_m1($receiver_0);
      get_p2($receiver_0);
      flexCenter($receiver_0);
      invoke(get_pre($receiver), ui$lambda$lambda$lambda$lambda$lambda_25(this$ui, closure$currentPositionText, closure$totalDurationText));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_18(this$ui, closure$artist, closure$title, closure$currentPositionText, closure$totalDurationText) {
    return function ($receiver) {
      get_justifyContentCenter(get_cls($receiver));
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda_11(this$ui, closure$artist, closure$title));
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda_12(this$ui, closure$currentPositionText, closure$totalDurationText));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui) {
    return function ($receiver) {
      if (this$ui.playing.invoke()) {
        return get_pause(Fa.Companion);
      }
       else {
        return get_play(Fa.Companion);
      }
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_3(this$ui) {
    return function ($receiver) {
      get_x2(get_fa(get_cls($receiver)));
      this$ui.rxClass_wqb4ha$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$this$ui.p) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.playOrPause(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_4(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_26(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_btn($receiver_0);
      get_btnOutlinePrimary($receiver_0);
      faButtonSpan($receiver, void 0, ui$lambda$lambda$lambda$lambda$lambda$lambda_3(this$ui));
      this$ui.click_htd9kn$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_4(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_13(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_btnGroup($receiver_0);
      invoke(get_button($receiver), ui$lambda$lambda$lambda$lambda$lambda_26(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_5(this$ui) {
    return function () {
      return this$ui.currentPosition.invoke() !== 0 || this$ui.playing.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            return (tmp$ = this.local$this$ui.p) != null ? (tmp$.previousTrack(), Unit) : null;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_6(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_27(this$ui) {
    return function ($receiver) {
      rxEnabled($receiver, this$ui.kills, ui$lambda$lambda$lambda$lambda$lambda$lambda_5(this$ui));
      this$ui.click_htd9kn$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_6(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_7(this$ui) {
    return function () {
      return this$ui.currentPosition.invoke() !== 0 || this$ui.playing.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            return (tmp$ = this.local$this$ui.p) != null ? (tmp$.backward(), Unit) : null;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_8(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_3(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_28(this$ui) {
    return function ($receiver) {
      get_btnOutlinePrimary(get_cls($receiver));
      rxEnabled($receiver, this$ui.kills, ui$lambda$lambda$lambda$lambda$lambda$lambda_7(this$ui));
      this$ui.click_htd9kn$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_8(this$ui));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$this$ui.p) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.forward(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_9(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_4(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_29(this$ui) {
    return function ($receiver) {
      get_btnOutlinePrimary(get_cls($receiver));
      this$ui.click_htd9kn$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_9(this$ui));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_5(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_5;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_5.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$this$ui.p) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.nextTrack(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_10(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_5(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_30(this$ui) {
    return function ($receiver) {
      get_btnOutlinePrimary(get_cls($receiver));
      this$ui.click_htd9kn$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_10(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_14(this$ui, closure$mediaButton) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_btnGroup($receiver_0);
      closure$mediaButton($receiver, get_stepBackward(Fa.Companion), void 0, ui$lambda$lambda$lambda$lambda$lambda_27(this$ui));
      closure$mediaButton($receiver, get_backward(Fa.Companion), void 0, ui$lambda$lambda$lambda$lambda$lambda_28(this$ui));
      closure$mediaButton($receiver, get_forward(Fa.Companion), void 0, ui$lambda$lambda$lambda$lambda$lambda_29(this$ui));
      closure$mediaButton($receiver, get_stepForward(Fa.Companion), void 0, ui$lambda$lambda$lambda$lambda$lambda_30(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_11(this$) {
    return function ($receiver, it) {
      this$.disabled = it;
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_12(closure$state) {
    return function ($receiver) {
      return equals(closure$state.invoke(), UserSongState.Like) ? get_btnSuccess(Cls.Companion) : get_btnSecondary(Cls.Companion);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_13($receiver) {
    get_x2(get_fa(get_cls($receiver)));
    return Unit;
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_6(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_6;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_6.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            return (tmp$ = this.local$this$ui.p) != null ? (tmp$.like(), Unit) : null;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_14(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_6(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_31(closure$likeButtonsDisabled, this$ui, closure$state) {
    return function ($receiver) {
      get_btn(get_cls($receiver));
      this$ui.forEach_5mel8p$(closure$likeButtonsDisabled, ui$lambda$lambda$lambda$lambda$lambda$lambda_11($receiver));
      this$ui.rxClass_wqb4ha$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_12(closure$state));
      faButtonSpan($receiver, get_thumbsUp(Fa.Companion), ui$lambda$lambda$lambda$lambda$lambda$lambda_13);
      this$ui.click_htd9kn$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_14(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_15(this$) {
    return function ($receiver, it) {
      this$.disabled = it;
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_16(closure$state) {
    return function ($receiver) {
      return equals(closure$state.invoke(), UserSongState.DontLike) ? get_btnSuccess(Cls.Companion) : get_btnSecondary(Cls.Companion);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_17($receiver) {
    get_x2(get_fa(get_cls($receiver)));
    return Unit;
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_7(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_7.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_7.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_7.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_7;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_7.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$this$ui.p) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.dontLike(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_18(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_7(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_32(closure$likeButtonsDisabled, this$ui, closure$state) {
    return function ($receiver) {
      get_btn(get_cls($receiver));
      this$ui.forEach_5mel8p$(closure$likeButtonsDisabled, ui$lambda$lambda$lambda$lambda$lambda$lambda_15($receiver));
      this$ui.rxClass_wqb4ha$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_16(closure$state));
      faButtonSpan($receiver, get_thumbsDown(Fa.Companion), ui$lambda$lambda$lambda$lambda$lambda$lambda_17);
      this$ui.click_htd9kn$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_18(this$ui));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_15(closure$likeButtonsDisabled, this$ui, closure$state) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_btnGroup($receiver_0);
      invoke(get_button($receiver), ui$lambda$lambda$lambda$lambda$lambda_31(closure$likeButtonsDisabled, this$ui, closure$state));
      invoke(get_button($receiver), ui$lambda$lambda$lambda$lambda$lambda_32(closure$likeButtonsDisabled, this$ui, closure$state));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_19(this$ui, closure$mediaButton, closure$likeButtonsDisabled, closure$state) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_flexWrap($receiver_0);
      get_justifyContentCenter($receiver_0);
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda_13(this$ui));
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda_14(this$ui, closure$mediaButton));
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda_15(closure$likeButtonsDisabled, this$ui, closure$state));
      return Unit;
    };
  }
  function ui$lambda$lambda_10(this$ui, closure$artist, closure$title, closure$currentPositionText, closure$totalDurationText, closure$likeButtonsDisabled, closure$state) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_borderTop($receiver_0);
      get_bgLight($receiver_0);
      flexFixedSize($receiver_0);
      var mediaButton = ui$lambda$lambda$mediaButton;
      row_0($receiver, ui$lambda$lambda$lambda_18(this$ui, closure$artist, closure$title, closure$currentPositionText, closure$totalDurationText));
      row_0($receiver, ui$lambda$lambda$lambda_19(this$ui, mediaButton, closure$likeButtonsDisabled, closure$state));
      return Unit;
    };
  }
  function ui_5($receiver) {
    var $receiver_0 = new Factory();
    var totalDurationText = $receiver.rx_pn7ch0$(ui$lambda$lambda_3($receiver));
    var totalDurationTextLength = $receiver.rx_pn7ch0$(ui$lambda$lambda_4(totalDurationText));
    var currentPositionText = $receiver.rx_pn7ch0$(ui$lambda$lambda_5($receiver, totalDurationTextLength));
    var likeButtonsDisabled = $receiver.rx_pn7ch0$(ui$lambda$lambda_6($receiver));
    var state = $receiver.userSong;
    var artistTitle = $receiver.rx_pn7ch0$(ui$lambda$lambda_7($receiver));
    var artist = $receiver.rx_pn7ch0$(ui$lambda$lambda_8(artistTitle));
    var title = $receiver.rx_pn7ch0$(ui$lambda$lambda_9(artistTitle));
    if (mediasession.mediaSessionSupported) {
      var $receiver_1 = window.navigator.mediaSession;
      $receiver.forEach_5mel8p$(artistTitle, ui$lambda$lambda$lambda_11($receiver_1));
      $receiver_1.setActionHandler('play', ui$lambda$lambda$lambda_12($receiver));
      $receiver_1.setActionHandler('pause', ui$lambda$lambda$lambda_13($receiver));
      $receiver_1.setActionHandler('seekbackward', ui$lambda$lambda$lambda_14($receiver));
      $receiver_1.setActionHandler('seekforward', ui$lambda$lambda$lambda_15($receiver));
      $receiver_1.setActionHandler('previoustrack', ui$lambda$lambda$lambda_16($receiver));
      $receiver_1.setActionHandler('nexttrack', ui$lambda$lambda$lambda_17($receiver));
    }
    return $receiver_0.wraps.div_iw61es$(ui$lambda$lambda_10($receiver, artist, title, currentPositionText, totalDurationText, likeButtonsDisabled, state)).node;
  }
  var SeekSeconds;
  function VisiblePath(visible) {
    BootPath.call(this, visible.boot);
    this.visible = visible;
  }
  VisiblePath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VisiblePath',
    interfaces: [BootPath]
  };
  function Visible(boot) {
    UIBase_init(boot, this);
    this.boot = boot;
    this.path = new VisiblePath(this);
    this.player = this.switchOpt_mw7jja$();
    this.tag = this.mapAsync_m547eu$(this.rx_pn7ch0$(Visible$tag$lambda(this)), new Mp3File(), Visible$tag$lambda_0);
    this.totalDuration = new Var(0);
    this.currentPosition = new Var(0);
    this.playing = this.rx_pn7ch0$(Visible$playing$lambda(this));
    this.userSong = this.rx_pn7ch0$(Visible$userSong$lambda(this));
    this.rawView_13lnzh$_0 = ui_5(this);
  }
  function Coroutine$Visible$loadNextSong$lambda(this$Visible_0, closure$startPlaying_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Visible = this$Visible_0;
    this.local$closure$startPlaying = closure$startPlaying_0;
    this.local$tmp$_1 = void 0;
  }
  Coroutine$Visible$loadNextSong$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Visible$loadNextSong$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Visible$loadNextSong$lambda.prototype.constructor = Coroutine$Visible$loadNextSong$lambda;
  Coroutine$Visible$loadNextSong$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.local$tmp$_1 = this.local$this$Visible.player;
            if ((tmp$ = this.local$this$Visible.path.boot.songSource.now) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            var tmp$_1;
            tmp$_1 = (tmp$_0 = this.result_0) != null ? new Player(this.local$this$Visible, tmp$_0, this.local$closure$startPlaying) : null;
            this.state_0 = 4;
            this.result_0 = this.local$tmp$_1.switchTo_11rb$(tmp$_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  function Visible$loadNextSong$lambda(this$Visible_0, closure$startPlaying_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Visible$loadNextSong$lambda(this$Visible_0, closure$startPlaying_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Visible.prototype.loadNextSong_6taknv$ = function (startPlaying) {
    this.exec(Visible$loadNextSong$lambda(this, startPlaying));
  };
  Visible.prototype.saveState_zdfo78$ = function ($receiver, st) {
    $receiver.state.cv = st;
    saveIfDirty($receiver);
  };
  Visible.prototype.dontLike_lwhaap$ = function ($receiver) {
    this.saveState_zdfo78$($receiver, UserSongState.DontLike);
  };
  Object.defineProperty(Visible.prototype, 'p', {
    get: function () {
      return this.player.now;
    }
  });
  Object.defineProperty(Visible.prototype, 'rawView', {
    get: function () {
      return this.rawView_13lnzh$_0;
    }
  });
  function Coroutine$Visible$tag$lambda$lambda$lambda(closure$p_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$p = closure$p_0;
  }
  Coroutine$Visible$tag$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Visible$tag$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Visible$tag$lambda$lambda$lambda.prototype.constructor = Coroutine$Visible$tag$lambda$lambda$lambda;
  Coroutine$Visible$tag$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$p.playable.blob;
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
  function Visible$tag$lambda$lambda$lambda(closure$p_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Visible$tag$lambda$lambda$lambda(closure$p_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Visible$tag$lambda(this$Visible) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      var tmp$_1;
      tmp$_1 = (tmp$ = this$Visible.player.invoke()) != null ? this$Visible.path.boot.songInfoSource.invoke()(tmp$.playable.id, Visible$tag$lambda$lambda$lambda(tmp$)) : null;
      return (tmp$_0 = tmp$_1) != null ? tmp$_0 : asExtracted(new Mp3File());
    };
  }
  function Coroutine$Visible$tag$lambda($receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$Visible$tag$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Visible$tag$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Visible$tag$lambda.prototype.constructor = Coroutine$Visible$tag$lambda;
  Coroutine$Visible$tag$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = waitExtracted(this.local$it, this);
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
  function Visible$tag$lambda_0($receiver_0, it_0, continuation_0, suspended) {
    var instance = new Coroutine$Visible$tag$lambda($receiver_0, it_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Visible$playing$lambda(this$Visible) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this$Visible.player.invoke()) != null ? tmp$.playState.invoke().isPlaying : null) != null ? tmp$_0 : false;
    };
  }
  function Visible$userSong$lambda(this$Visible) {
    return function ($receiver) {
      var tmp$;
      return (tmp$ = this$Visible.player.invoke()) != null ? tmp$.state.invoke() : null;
    };
  }
  Visible.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Visible',
    interfaces: [UIBase]
  };
  function Playable(id, blob) {
    this.id = id;
    this.blob = blob;
  }
  Playable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Playable',
    interfaces: []
  };
  Playable.prototype.component1 = function () {
    return this.id;
  };
  Playable.prototype.component2 = function () {
    return this.blob;
  };
  Playable.prototype.copy_tdb4ml$ = function (id, blob) {
    return new Playable(id === void 0 ? this.id : id, blob === void 0 ? this.blob : blob);
  };
  Playable.prototype.toString = function () {
    return 'Playable(id=' + Kotlin.toString(this.id) + (', blob=' + Kotlin.toString(this.blob)) + ')';
  };
  Playable.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.blob) | 0;
    return result;
  };
  Playable.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.blob, other.blob)))));
  };
  function SongStorageDB(source, killables) {
    this.source = source;
    this.uploaded_putbmv$_0 = lazy(SongStorageDB$uploaded$lambda(this, killables));
  }
  function Coroutine$SongStorageDB$get$lambda(closure$fn_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$it = it_0;
  }
  Coroutine$SongStorageDB$get$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SongStorageDB$get$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SongStorageDB$get$lambda.prototype.constructor = Coroutine$SongStorageDB$get$lambda;
  Coroutine$SongStorageDB$get$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$fn(this.local$it);
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
  function SongStorageDB$get$lambda(closure$fn_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$SongStorageDB$get$lambda(closure$fn_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SongStorageDB.prototype.get_gzbajl$ = function (id, fn, continuation) {
    return this.source.getOrPut_jkvqe4$(id, SongStorageDB$get$lambda(fn), continuation);
  };
  Object.defineProperty(SongStorageDB.prototype, 'uploaded', {
    get: function () {
      return this.uploaded_putbmv$_0.value;
    }
  });
  function SongStorageDB$uploaded$lambda$lambda(it) {
    return equals(it.uploaded.initial.invoke(), new Some(true));
  }
  function SongStorageDB$uploaded$lambda(this$SongStorageDB, closure$killables) {
    return function () {
      return filtered(this$SongStorageDB.source, closure$killables, SongStorageDB$uploaded$lambda$lambda);
    };
  }
  SongStorageDB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SongStorageDB',
    interfaces: []
  };
  function StatusPath(status) {
    DatabasePath.call(this, status.from);
    this.status = status;
  }
  StatusPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StatusPath',
    interfaces: [DatabasePath]
  };
  function Status(from, status, title, bgfn) {
    UIBase_init(from, this);
    this.from = from;
    this.status = status;
    this.title = title;
    this.bgfn = bgfn;
    this.path_pdb9qk$_0 = new StatusPath(this);
    this.rawView_avgzzq$_0 = ui_6(this);
  }
  Object.defineProperty(Status.prototype, 'path', {
    get: function () {
      return this.path_pdb9qk$_0;
    }
  });
  Object.defineProperty(Status.prototype, 'rawView', {
    get: function () {
      return this.rawView_avgzzq$_0;
    }
  });
  Status.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Status',
    interfaces: [MusicApi, CommonFbApi, UIBase]
  };
  function Coroutine$ui$lambda$lambda$lambda_1(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda_1.prototype.constructor = Coroutine$ui$lambda$lambda$lambda_1;
  Coroutine$ui$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.path.database.back();
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
  function ui$lambda$lambda$lambda_20(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda_1(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ui.path.boot.localSongs.load_61zpoe$(this.local$closure$id, this);
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_19(this$ui, closure$id) {
    return function ($receiver) {
      if ($receiver.containsRx_1w65cx$(this$ui.path.boot.localSongs.set, closure$id).invoke()) {
        return ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui, closure$id);
      }
       else {
        return null;
      }
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui, closure$id) {
    return function ($receiver) {
      return !$receiver.containsRx_1w65cx$(this$ui.path.boot.localSongs.set, closure$id).invoke() && $receiver.containsRx_1w65cx$(this$ui.path.loggedIn.storageIds, closure$id).invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$) {
    return function ($receiver, it) {
      this$.node.disabled = it;
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return download(this.local$this$ui.path.loggedIn, this.local$closure$id), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ui, closure$id) {
    return function ($receiver) {
      return $receiver.containsRx_1w65cx$(this$ui.path.boot.localSongs.set, closure$id).invoke() && !$receiver.containsRx_1w65cx$(this$ui.path.loggedIn.storageIds, closure$id).invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(this$) {
    return function ($receiver, it) {
      this$.node.disabled = it;
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return upload(this.local$this$ui.path.loggedIn, this.local$closure$id), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this$ui_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$ui, closure$id) {
    return function ($receiver) {
      return $receiver.containsRx_1w65cx$(this$ui.path.boot.localSongs.set, closure$id).invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(this$) {
    return function ($receiver, it) {
      this$.node.disabled = it;
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return deleteFromLocal(this.local$this$ui.path.loggedIn, this.local$closure$id), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(this$ui_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(this$ui, closure$id) {
    return function ($receiver) {
      return $receiver.containsRx_1w65cx$(this$ui.path.loggedIn.storageIds, closure$id).invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9(this$) {
    return function ($receiver, it) {
      this$.node.disabled = it;
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ui_0, closure$id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return deleteFromCloud(this.local$this$ui.path.loggedIn, this.local$closure$id), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10(this$ui_0, closure$id_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ui_0, closure$id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_20(this$ui, closure$id, this$) {
    return function ($receiver) {
      var process = this$ui.path.boot.processOf_61zpoe$(closure$id);
      var $receiver_0 = $receiver.button;
      var this$ui_0 = this$ui;
      var closure$id_0 = closure$id;
      var this$_0 = this$;
      $receiver_0.p2;
      get_download($receiver_0.fa);
      $receiver_0.secondary;
      $receiver_0.visible_metn8w$(this$_0, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, closure$id_0));
      this$_0.forEach_5mel8p$(process.downloading, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver_0));
      this$ui_0.click_3xepc3$($receiver_0, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui_0, closure$id_0));
      var $receiver_1 = $receiver.button;
      var this$ui_1 = this$ui;
      var closure$id_1 = closure$id;
      var this$_1 = this$;
      $receiver_1.p2;
      get_upload($receiver_1.fa);
      $receiver_1.secondary;
      $receiver_1.visible_metn8w$(this$_1, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ui_1, closure$id_1));
      this$_1.forEach_5mel8p$(process.uploading, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver_1));
      this$ui_1.click_3xepc3$($receiver_1, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(this$ui_1, closure$id_1));
      var $receiver_2 = $receiver.button;
      var this$ui_2 = this$ui;
      var closure$id_2 = closure$id;
      var this$_2 = this$;
      $receiver_2.p2;
      get_trashAlt($receiver_2.fa);
      $receiver_2.danger;
      $receiver_2.visible_metn8w$(this$_2, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(this$ui_2, closure$id_2));
      this$_2.forEach_5mel8p$(process.deletingFromLocal, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver_2));
      this$ui_2.click_3xepc3$($receiver_2, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(this$ui_2, closure$id_2));
      var $receiver_3 = $receiver.button;
      var this$ui_3 = this$ui;
      var closure$id_3 = closure$id;
      var this$_3 = this$;
      $receiver_3.p2;
      get_pooStorm($receiver_3.fa);
      $receiver_3.danger;
      $receiver_3.visible_metn8w$(this$_3, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(this$ui_3, closure$id_3));
      this$_3.forEach_5mel8p$(process.deletingFromCloud, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9($receiver_3));
      this$ui_3.click_3xepc3$($receiver_3, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10(this$ui_3, closure$id_3));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_21(closure$node) {
    return function () {
      removeFromParent(closure$node);
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_15(this$ui_0, this$_1, closure$id_0, this$_2, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$this$ = this$_1;
    this.local$closure$id = closure$id_0;
    this.local$this$_0 = this$_2;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_15.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_15.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_15.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_15;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_15.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var api = get_fbapi(plus_0(this.local$this$ui, this.local$this$));
            var node = songUi(api, this.local$closure$id, null, ui$lambda$lambda$lambda$lambda$lambda$lambda_19(this.local$this$ui, this.local$closure$id), this.local$this$ui.path.loggedIn, ui$lambda$lambda$lambda$lambda$lambda$lambda_20(this.local$this$ui, this.local$closure$id, this.local$this$));
            this.local$this$_0.appendChild(node);
            return plusAssign(this.local$this$.kills, ui$lambda$lambda$lambda$lambda$lambda$lambda_21(node)), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda_33(this$ui_0, this$_1, closure$id_0, this$_2) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_15(this$ui_0, this$_1, closure$id_0, this$_2, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_16(this$ui, this$, this$_0) {
    return function ($receiver, id) {
      launch(this$_0, void 0, void 0, ui$lambda$lambda$lambda$lambda$lambda_33(this$ui, $receiver, id, this$));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda_2(this$ui_0, this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$this$ = this$_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ui$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda_2.prototype.constructor = Coroutine$ui$lambda$lambda$lambda_2;
  Coroutine$ui$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return process(this.local$this$ui.status.items, this.local$this$ui.kills, ui$lambda$lambda$lambda$lambda_16(this.local$this$ui, this.local$this$, this.local$$receiver)), Unit;
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
  function ui$lambda$lambda$lambda_21(this$ui_0, this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda_2(this$ui_0, this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda_11(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      launch(this$ui, void 0, void 0, ui$lambda$lambda$lambda_21(this$ui, $receiver));
      return Unit;
    };
  }
  function ui_6($receiver) {
    var $receiver_0 = widget.factory.topbar;
    var $receiver_1 = $receiver_0.left.button;
    $receiver_1.back;
    $receiver.click_3xepc3$($receiver_1, ui$lambda$lambda$lambda_20($receiver));
    $receiver.tasksUi_tdhe4g$($receiver_0.right);
    $receiver.syncUi_e1rmy3$($receiver_0.slots.right.slots);
    var $receiver_2 = $receiver_0.right.buttonGroup;
    $receiver_2.m1;
    $receiver.bgfn($receiver, $receiver_2);
    remAssign($receiver_0.title, $receiver.title);
    var tmp$ = $receiver_0.node;
    var $receiver_3 = widget.factory.scrollPane;
    invoke($receiver_3.pane, ui$lambda$lambda_11($receiver));
    return new TopAndContent(tmp$, $receiver_3.node);
  }
  function TagDB(source) {
    TagDB$Companion_getInstance();
    this.source = source;
  }
  function TagDB$Companion() {
    TagDB$Companion_instance = this;
  }
  function TagDB$Companion$of$lambda() {
    return new Mp3File();
  }
  function Coroutine$of_9jfmzd$($this, ks_0, db_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$ks = ks_0;
    this.local$db = db_0;
  }
  Coroutine$of_9jfmzd$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$of_9jfmzd$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$of_9jfmzd$.prototype.constructor = Coroutine$of_9jfmzd$;
  Coroutine$of_9jfmzd$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$db === void 0)
              this.local$db = commonfb.FB.db;
            this.state_0 = 2;
            this.result_0 = toSetSource(get_songs(musiclib.musicLib.app), this.local$ks, this.local$db, TagDB$Companion$of$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new TagDB(this.result_0);
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
  TagDB$Companion.prototype.of_9jfmzd$ = function (ks_0, db_0, continuation_0, suspended) {
    var instance = new Coroutine$of_9jfmzd$(this, ks_0, db_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  TagDB$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDB$Companion_instance = null;
  function TagDB$Companion_getInstance() {
    if (TagDB$Companion_instance === null) {
      new TagDB$Companion();
    }
    return TagDB$Companion_instance;
  }
  function Coroutine$TagDB$get$lambda(closure$file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$file = closure$file_0;
  }
  Coroutine$TagDB$get$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TagDB$get$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TagDB$get$lambda.prototype.constructor = Coroutine$TagDB$get$lambda;
  Coroutine$TagDB$get$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = readAsArrayBuffer(this.local$closure$file, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = this.result_0;
            return to(this.local$closure$file, tmp$);
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
  function TagDB$get$lambda(closure$file_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$TagDB$get$lambda(closure$file_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  TagDB.prototype.get_tdb4ml$ = function (hash, file, continuation) {
    return this.get_46owy4$(hash, TagDB$get$lambda(file), continuation);
  };
  function TagDB$get$lambda$lambda$lambda(closure$audioLoaded, this$) {
    return function (it) {
      return closure$audioLoaded.complete_11rb$(this$.duration);
    };
  }
  function TagDB$get$lambda$lambda(closure$audioSrc, closure$audioLoaded) {
    return function ($receiver) {
      $receiver.src = closure$audioSrc;
      $receiver.ondurationchange = TagDB$get$lambda$lambda$lambda(closure$audioLoaded, $receiver);
      $receiver.load();
      return Unit;
    };
  }
  function TagDB$get$lambda$join($receiver) {
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
  function Coroutine$TagDB$get$lambda_0(closure$file_0, t_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$file = closure$file_0;
    this.local$f = void 0;
    this.local$tag = void 0;
    this.local$audioSrc = void 0;
    this.local$audioElement = void 0;
    this.local$t = t_0;
  }
  Coroutine$TagDB$get$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TagDB$get$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TagDB$get$lambda_0.prototype.constructor = Coroutine$TagDB$get$lambda_0;
  Coroutine$TagDB$get$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$file(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var ff = this.result_0;
            this.local$f = ff.first;
            var buffer = ff.second;
            this.local$tag = extractMp3Tag(buffer);
            var audioLoaded = CompletableDeferred();
            this.local$audioSrc = URL.createObjectURL(this.local$f);
            this.local$audioElement = invoke(get_audio(document), TagDB$get$lambda$lambda(this.local$audioSrc, audioLoaded));
            this.state_0 = 3;
            this.result_0 = audioLoaded.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var duration = this.result_0;
            this.local$audioElement.src = '';
            URL.revokeObjectURL(this.local$audioSrc);
            var join = TagDB$get$lambda$join;
            this.local$t.artist.cv = join(this.local$tag.artist);
            this.local$t.title.cv = join(this.local$tag.title);
            this.local$t.bytes.cv = this.local$f.size;
            this.local$t.secs.cv = duration;
            return this.local$t;
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
  function TagDB$get$lambda_0(closure$file_0) {
    return function (t_0, continuation_0, suspended) {
      var instance = new Coroutine$TagDB$get$lambda_0(closure$file_0, t_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  TagDB.prototype.get_46owy4$ = function (hash, file, continuation) {
    return this.source.getOrPut_jkvqe4$(hash, TagDB$get$lambda_0(file), continuation);
  };
  TagDB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDB',
    interfaces: []
  };
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
  function Bind() {
    this.Back = new Bind$Back$ObjectLiteral();
  }
  function Bind$Back$ObjectLiteral() {
  }
  Bind$Back$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  Bind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bind',
    interfaces: []
  };
  var package$music = _.music || (_.music = {});
  var package$boot = package$music.boot || (package$music.boot = {});
  package$boot.BootPath = BootPath;
  Object.defineProperty(Boot, 'Companion', {
    get: Boot$Companion_getInstance
  });
  Boot.Slots = Boot$Slots;
  Boot.SongProcess = Boot$SongProcess;
  $$importsForInline$$['appsimake-commonui'] = $module$appsimake_commonui;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$boot.Boot = Boot;
  package$boot.ui_j1itvu$ = ui;
  var package$common = package$music.common || (package$music.common = {});
  package$common.MusicApi = MusicApi;
  Object.defineProperty(LocalSongs, 'Companion', {
    get: LocalSongs$Companion_getInstance
  });
  $$importsForInline$$['appsimake-music'] = _;
  package$common.LocalSongs = LocalSongs;
  package$common.readMp3Store_ctev6c$ = readMp3Store;
  $$importsForInline$$['appsimake-indexeddb'] = $module$appsimake_indexeddb;
  package$common.writeMp3Store_ctev6c$ = writeMp3Store;
  package$common.readMp3_d3rseq$ = readMp3;
  package$common.existsMp3_d3rseq$ = existsMp3;
  package$common.songUi_lmm0v$ = songUi;
  package$common.tasksUi_bgd0rr$ = tasksUi;
  package$common.LatestUid = LatestUid;
  package$common.toLatestUid_sc7ukm$ = toLatestUid;
  var package$content = package$music.content || (package$music.content = {});
  package$content.Content = Content;
  package$content.UserUnknown = UserUnknown;
  var package$data = package$music.data || (package$music.data = {});
  package$data.ID3v1 = ID3v1;
  package$data.id3v1_m26o6c$ = id3v1;
  Object.defineProperty(Id3Version, 'Companion', {
    get: Id3Version$Companion_getInstance
  });
  package$data.Id3Version = Id3Version;
  Object.defineProperty(Id3Flags, 'Companion', {
    get: Id3Flags$Companion_getInstance
  });
  package$data.Id3Flags = Id3Flags;
  Object.defineProperty(FrameFlags, 'Companion', {
    get: FrameFlags$Companion_getInstance
  });
  package$data.FrameFlags = FrameFlags;
  package$data.asList_lye5cv$ = asList_0;
  package$data.asUint16List_6g99x6$ = asUint16List;
  package$data.asSynchSafeInt_lye5cv$ = asSynchSafeInt;
  package$data.asInt_lye5cv$ = asInt;
  package$data.TagReader = TagReader;
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
  package$data.Encoding = Encoding;
  package$data.asString_fvdm8x$ = asString;
  package$data.asString_lye5cv$ = asString_0;
  package$data.readAsArrayBuffer_fs1wve$ = readAsArrayBuffer;
  package$data.id3v2_3_m26o6c$ = id3v2_3;
  FramesData.CommentKey = FramesData$CommentKey;
  package$data.FramesData = FramesData;
  Frames.prototype.FrameInput = Frames$FrameInput;
  Frames.prototype.Frame = Frames$Frame;
  Frames.prototype.FrameProvider = Frames$FrameProvider;
  Object.defineProperty(package$data, 'Frames', {
    get: Frames_getInstance
  });
  package$data.localSongInfoSource = localSongInfoSource;
  package$data.cloudSongInfoSource_wsqfm8$ = cloudSongInfoSource;
  package$data.initFrom_obpixi$ = initFrom;
  package$data.songSource_nqazpv$ = songSource;
  package$data.songInclude_q8wlm4$ = songInclude;
  package$music.like_5196gv$ = like;
  package$music.dontLike_5196gv$ = dontLike;
  package$music.UserSongs = UserSongs;
  package$music.userSongs_lbr39j$ = userSongs;
  Object.defineProperty(package$music, 'DatabaseManagement', {
    get: DatabaseManagement_getInstance
  });
  Object.defineProperty(package$music, 'Mp3Store', {
    get: get_Mp3Store
  });
  package$music.localDatabase = localDatabase;
  package$music.readSingletons_ctev6c$ = readSingletons;
  package$music.writeSingletons_ctev6c$ = writeSingletons;
  Object.defineProperty(package$music, 'Singletons', {
    get: Singletons_getInstance
  });
  package$music.readLastUserId_ctev6c$ = readLastUserId;
  package$music.writeLastUserId_jxqv4j$ = writeLastUserId;
  var package$database = package$music.database || (package$music.database = {});
  package$database.DatabasePath = DatabasePath;
  Database.Status_init_um4tjc$ = Database$Database$Status_init;
  Database.Status = Database$Status;
  package$database.Database = Database;
  package$database.ui_ihgqlm$ = ui_0;
  var package$import = package$music.import || (package$music.import = {});
  package$import.ImportPath = ImportPath;
  package$import.Import = Import;
  package$import.ImportFile = ImportFile;
  package$import.ui_1redzq$ = ui_1;
  package$import.ui_jya5ma$ = ui_2;
  var package$loggedin = package$music.loggedin || (package$music.loggedin = {});
  package$loggedin.upload_t0bl70$ = upload;
  package$loggedin.download_t0bl70$ = download;
  package$loggedin.deleteFromLocal_t0bl70$ = deleteFromLocal;
  package$loggedin.deleteFromCloud_t0bl70$ = deleteFromCloud;
  package$loggedin.LoggedInPath = LoggedInPath;
  package$loggedin.LoggedIn = LoggedIn;
  package$loggedin.Sync = Sync;
  package$loggedin.ui_yshx4m$ = ui_3;
  package$loggedin.syncUi_d22p0q$ = syncUi;
  package$music.main = main;
  Object.defineProperty(package$music, 'ImportMP3s', {
    get: ImportMP3s_getInstance
  });
  package$music.mainDropMenu_vyjmf9$ = mainDropMenu;
  var package$notloggedin = package$music.notloggedin || (package$music.notloggedin = {});
  package$notloggedin.NotLoggedIn = NotLoggedIn;
  package$notloggedin.ui_njwtce$ = ui_4;
  var package$player = package$music.player || (package$music.player = {});
  package$player.Paused = Paused;
  package$player.PlayerPath = PlayerPath;
  package$player.Player = Player;
  package$player.Playing = Playing;
  package$player.PlayState = PlayState;
  package$player.AritstTitle = AritstTitle;
  package$player.ui_962mkh$ = ui_5;
  Object.defineProperty(package$player, 'SeekSeconds', {
    get: function () {
      return SeekSeconds;
    }
  });
  package$player.VisiblePath = VisiblePath;
  package$player.Visible = Visible;
  package$music.Playable = Playable;
  package$music.SongStorageDB = SongStorageDB;
  var package$status = package$music.status || (package$music.status = {});
  package$status.StatusPath = StatusPath;
  package$status.Status = Status;
  package$status.ui_c4885m$ = ui_6;
  Object.defineProperty(TagDB, 'Companion', {
    get: TagDB$Companion_getInstance
  });
  package$music.TagDB = TagDB;
  package$music.Mp3Tag = Mp3Tag;
  package$music.extractMp3Tag_qfdq9h$ = extractMp3Tag;
  var package$template = package$music.template || (package$music.template = {});
  package$template.Bind = Bind;
  MusicApi.prototype.get_ids_wjz35z$ = FBApi.prototype.get_ids_wjz35z$;
  MusicApi.prototype.rx_pn7ch0$ = FBApi.prototype.rx_pn7ch0$;
  MusicApi.prototype.rx_rf89m5$ = FBApi.prototype.rx_rf89m5$;
  MusicApi.prototype.containsRx_1w65cx$ = FBApi.prototype.containsRx_1w65cx$;
  MusicApi.prototype.filtered_49l5s4$ = FBApi.prototype.filtered_49l5s4$;
  MusicApi.prototype.forEach_5mel8p$ = FBApi.prototype.forEach_5mel8p$;
  MusicApi.prototype.forEach_igkruk$ = FBApi.prototype.forEach_igkruk$;
  MusicApi.prototype.map_i8ud5a$ = FBApi.prototype.map_i8ud5a$;
  MusicApi.prototype.onChange_ocsf2x$ = FBApi.prototype.onChange_ocsf2x$;
  MusicApi.prototype.process_ttzep4$ = FBApi.prototype.process_ttzep4$;
  MusicApi.prototype.remAssign_7fncnf$ = FBApi.prototype.remAssign_7fncnf$;
  MusicApi.prototype.rxClass_wqb4ha$ = FBApi.prototype.rxClass_wqb4ha$;
  MusicApi.prototype.rxClass_mjd6u9$ = FBApi.prototype.rxClass_mjd6u9$;
  MusicApi.prototype.toRxSet_jr4bl4$ = FBApi.prototype.toRxSet_jr4bl4$;
  MusicApi.prototype.click_3xepc3$ = HasKillSetAndUIX.prototype.click_3xepc3$;
  MusicApi.prototype.click_ka8ib0$ = HasKillSetAndUIX.prototype.click_ka8ib0$;
  MusicApi.prototype.click_htd9kn$ = HasKillSetAndUIX.prototype.click_htd9kn$;
  Content.prototype.withChild_p3so7j$ = JobScopeWithView.prototype.withChild_p3so7j$;
  Content.prototype.switchToWrap_t6rg6d$ = JobScopeWithView.prototype.switchToWrap_t6rg6d$;
  Database.prototype.tasksUi_tdhe4g$ = MusicApi.prototype.tasksUi_tdhe4g$;
  Database.prototype.syncUi_e1rmy3$ = MusicApi.prototype.syncUi_e1rmy3$;
  Database.prototype.get_ids_wjz35z$ = MusicApi.prototype.get_ids_wjz35z$;
  Import.prototype.tasksUi_tdhe4g$ = MusicApi.prototype.tasksUi_tdhe4g$;
  Import.prototype.syncUi_e1rmy3$ = MusicApi.prototype.syncUi_e1rmy3$;
  Import.prototype.get_ids_wjz35z$ = MusicApi.prototype.get_ids_wjz35z$;
  LoggedIn.prototype.tasksUi_tdhe4g$ = MusicApi.prototype.tasksUi_tdhe4g$;
  LoggedIn.prototype.syncUi_e1rmy3$ = MusicApi.prototype.syncUi_e1rmy3$;
  LoggedIn.prototype.get_ids_wjz35z$ = MusicApi.prototype.get_ids_wjz35z$;
  Status.prototype.get_ids_wjz35z$ = CommonFbApi.prototype.get_ids_wjz35z$;
  Status.prototype.tasksUi_tdhe4g$ = MusicApi.prototype.tasksUi_tdhe4g$;
  Status.prototype.syncUi_e1rmy3$ = MusicApi.prototype.syncUi_e1rmy3$;
  Mp3Store = named(Mp3Store$lambda).provideDelegate_n5byny$(this, Mp3Store_metadata);
  DBSingletons = named(DBSingletons$lambda).provideDelegate_n5byny$(this, DBSingletons_metadata);
  SeekSeconds = 15.0;
  main();
  Kotlin.defineModule('appsimake-music', _);
  return _;
}(typeof this['appsimake-music'] === 'undefined' ? {} : this['appsimake-music'], kotlin, this['appsimake-commonui'], this['appsimake-commonshr'], this['appsimake-commonfb'], this['kotlinx-coroutines-core'], this['appsimake-firebase'], this['appsimake-indexeddb'], this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-musiclib'], this['appsimake-fontawesome'], this['appsimake-common'], this['appsimake-commonlib'], this['appsimake-firebaseshr']);

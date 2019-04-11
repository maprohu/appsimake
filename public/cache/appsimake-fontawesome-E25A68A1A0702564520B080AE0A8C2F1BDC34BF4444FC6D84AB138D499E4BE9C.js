if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-fontawesome'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-fontawesome'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-fontawesome'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-fontawesome'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-fontawesome'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-fontawesome'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-fontawesome'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-fontawesome'.");
}
this['appsimake-fontawesome'] = function (_, Kotlin, $module$appsimake_domx, $module$kotlinx_coroutines_core, $module$appsimake_commonshr) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var get_svg = $module$appsimake_domx.svgx.get_svg_asww5s$;
  var Unit = Kotlin.kotlin.Unit;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var get_ref = $module$appsimake_domx.domx.get_ref_ejp6nk$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var res = $module$appsimake_domx.common.res_61zpoe$;
  var reportd = $module$appsimake_commonshr.commonshr.reportd_za3rmp$;
  var report = $module$appsimake_commonshr.commonshr.report_s8jyv4$;
  var namedLazy = $module$appsimake_commonshr.common.namedLazy_cq6yhu$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var InvokeApply = $module$appsimake_commonshr.commonshr.InvokeApply;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var toCss = $module$appsimake_domx.domx.toCss_pdl1vz$;
  function svgDefs$lambda$lambda($receiver) {
    $receiver.style.display = 'none';
    return Unit;
  }
  function svgDefs$lambda() {
    return invoke(get_svg(ensureNotNull(document.body)), svgDefs$lambda$lambda);
  }
  var svgDefs;
  function get_svgDefs() {
    return svgDefs.value;
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function FaDoc(doc) {
    this.doc = doc;
    this.iconCache = LinkedHashMap_init();
  }
  FaDoc.prototype.icon_61zpoe$ = function (cssName) {
    var $receiver = this.iconCache;
    var tmp$;
    var value = $receiver.get_11rb$(cssName);
    if (value == null) {
      var n = document.importNode(ensureNotNull(this.doc.getElementById(cssName)), true);
      n.id = '';
      var id = get_ref(n);
      get_svgDefs().appendChild(n);
      var answer = id;
      $receiver.put_xwzc9p$(cssName, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  FaDoc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FaDoc',
    interfaces: []
  };
  function FaDocs() {
    FaDocs_instance = this;
    this.byNameInternal_0 = LinkedHashMap_init();
    this.byName = this.byNameInternal_0;
    this.brands_faw95c$_0 = this.loader_0().provideDelegate_n5byny$(this, FaDocs$brands_metadata);
    this.regular_c0n8v0$_0 = this.loader_0().provideDelegate_n5byny$(this, FaDocs$regular_metadata);
    this.solid_qurw2b$_0 = this.loader_0().provideDelegate_n5byny$(this, FaDocs$solid_metadata);
  }
  function FaDocs$load$lambda$lambda(closure$cd, this$) {
    return function (it) {
      try {
        return closure$cd.complete_11rb$(new FaDoc(ensureNotNull(this$.responseXML)));
      }
       catch (e) {
        reportd(e);
        return closure$cd.completeExceptionally_tcv7n7$(e);
      }
    };
  }
  function FaDocs$load$lambda$lambda_0(closure$cd) {
    return function (it) {
      report(it);
      return closure$cd.completeExceptionally_tcv7n7$(Kotlin.newThrowable(it.toString()));
    };
  }
  FaDocs.prototype.load_0 = function (sprites) {
    var cd = CompletableDeferred();
    var $receiver = new XMLHttpRequest();
    $receiver.overrideMimeType('image/svg+xml');
    $receiver.open('GET', res(sprites + '.svg'));
    $receiver.send();
    $receiver.onload = FaDocs$load$lambda$lambda(cd, $receiver);
    $receiver.onerror = FaDocs$load$lambda$lambda_0(cd);
    return cd;
  };
  function FaDocs$loader$lambda(this$FaDocs) {
    return function (name) {
      var $receiver = this$FaDocs.load_0(name);
      this$FaDocs.byNameInternal_0.put_xwzc9p$(name, $receiver);
      return $receiver;
    };
  }
  FaDocs.prototype.loader_0 = function () {
    return namedLazy(FaDocs$loader$lambda(this));
  };
  var FaDocs$brands_metadata = new PropertyMetadata('brands');
  Object.defineProperty(FaDocs.prototype, 'brands', {
    get: function () {
      return this.brands_faw95c$_0.getValue_lrcp0p$(this, FaDocs$brands_metadata);
    }
  });
  var FaDocs$regular_metadata = new PropertyMetadata('regular');
  Object.defineProperty(FaDocs.prototype, 'regular', {
    get: function () {
      return this.regular_c0n8v0$_0.getValue_lrcp0p$(this, FaDocs$regular_metadata);
    }
  });
  var FaDocs$solid_metadata = new PropertyMetadata('solid');
  Object.defineProperty(FaDocs.prototype, 'solid', {
    get: function () {
      return this.solid_qurw2b$_0.getValue_lrcp0p$(this, FaDocs$solid_metadata);
    }
  });
  FaDocs.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FaDocs',
    interfaces: []
  };
  var FaDocs_instance = null;
  function FaDocs_getInstance() {
    if (FaDocs_instance === null) {
      new FaDocs();
    }
    return FaDocs_instance;
  }
  function FaBase() {
  }
  FaBase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FaBase',
    interfaces: [InvokeApply]
  };
  function Fa() {
  }
  Fa.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Fa',
    interfaces: [FaBase]
  };
  function FaSolid() {
  }
  FaSolid.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FaSolid',
    interfaces: [Fa]
  };
  function FaRegular() {
  }
  FaRegular.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FaRegular',
    interfaces: [Fa]
  };
  function FaBrands() {
  }
  FaBrands.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FaBrands',
    interfaces: [FaBase]
  };
  function FaCssClass(name, cs) {
    if (cs === void 0)
      cs = coroutines.GlobalScope;
    this.name = name;
    this.cs = cs;
  }
  FaCssClass.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    thisRef.of_aoddxy$(this.name, this.cs);
    return this.name;
  };
  FaCssClass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FaCssClass',
    interfaces: [ReadOnlyProperty]
  };
  function FaCssClassProvider(cls) {
    if (cls === void 0)
      cls = null;
    this.cls_0 = cls;
  }
  FaCssClassProvider.prototype.provideDelegate_d6mtq7$ = function (thisRef, prop) {
    var tmp$;
    return new FaCssClass((tmp$ = this.cls_0) != null ? tmp$ : toCss(prop.callableName));
  };
  FaCssClassProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FaCssClassProvider',
    interfaces: []
  };
  function facss(cls) {
    if (cls === void 0)
      cls = null;
    return new FaCssClassProvider(cls);
  }
  var copy_metadata = new PropertyMetadata('copy');
  var copy;
  function get_copy($receiver) {
    return copy.getValue_lrcp0p$($receiver, copy_metadata);
  }
  var ban_metadata = new PropertyMetadata('ban');
  var ban;
  function get_ban($receiver) {
    return ban.getValue_lrcp0p$($receiver, ban_metadata);
  }
  var undo_metadata = new PropertyMetadata('undo');
  var undo;
  function get_undo($receiver) {
    return undo.getValue_lrcp0p$($receiver, undo_metadata);
  }
  var search_metadata = new PropertyMetadata('search');
  var search;
  function get_search($receiver) {
    return search.getValue_lrcp0p$($receiver, search_metadata);
  }
  var filter_metadata = new PropertyMetadata('filter');
  var filter;
  function get_filter($receiver) {
    return filter.getValue_lrcp0p$($receiver, filter_metadata);
  }
  var pen_metadata = new PropertyMetadata('pen');
  var pen;
  function get_pen($receiver) {
    return pen.getValue_lrcp0p$($receiver, pen_metadata);
  }
  var plus_metadata = new PropertyMetadata('plus');
  var plus;
  function get_plus($receiver) {
    return plus.getValue_lrcp0p$($receiver, plus_metadata);
  }
  var minus_metadata = new PropertyMetadata('minus');
  var minus;
  function get_minus($receiver) {
    return minus.getValue_lrcp0p$($receiver, minus_metadata);
  }
  var plusSquare_metadata = new PropertyMetadata('plusSquare');
  var plusSquare;
  function get_plusSquare($receiver) {
    return plusSquare.getValue_lrcp0p$($receiver, plusSquare_metadata);
  }
  var chevronLeft_metadata = new PropertyMetadata('chevronLeft');
  var chevronLeft;
  function get_chevronLeft($receiver) {
    return chevronLeft.getValue_lrcp0p$($receiver, chevronLeft_metadata);
  }
  var chevronRight_metadata = new PropertyMetadata('chevronRight');
  var chevronRight;
  function get_chevronRight($receiver) {
    return chevronRight.getValue_lrcp0p$($receiver, chevronRight_metadata);
  }
  var chevronDown_metadata = new PropertyMetadata('chevronDown');
  var chevronDown;
  function get_chevronDown($receiver) {
    return chevronDown.getValue_lrcp0p$($receiver, chevronDown_metadata);
  }
  var trashAlt_metadata = new PropertyMetadata('trashAlt');
  var trashAlt;
  function get_trashAlt($receiver) {
    return trashAlt.getValue_lrcp0p$($receiver, trashAlt_metadata);
  }
  var tasks_metadata = new PropertyMetadata('tasks');
  var tasks;
  function get_tasks($receiver) {
    return tasks.getValue_lrcp0p$($receiver, tasks_metadata);
  }
  var checkDouble_metadata = new PropertyMetadata('checkDouble');
  var checkDouble;
  function get_checkDouble($receiver) {
    return checkDouble.getValue_lrcp0p$($receiver, checkDouble_metadata);
  }
  var pooStorm_metadata = new PropertyMetadata('pooStorm');
  var pooStorm;
  function get_pooStorm($receiver) {
    return pooStorm.getValue_lrcp0p$($receiver, pooStorm_metadata);
  }
  var backspace_metadata = new PropertyMetadata('backspace');
  var backspace;
  function get_backspace($receiver) {
    return backspace.getValue_lrcp0p$($receiver, backspace_metadata);
  }
  var save_metadata = new PropertyMetadata('save');
  var save;
  function get_save($receiver) {
    return save.getValue_lrcp0p$($receiver, save_metadata);
  }
  var tags_metadata = new PropertyMetadata('tags');
  var tags;
  function get_tags($receiver) {
    return tags.getValue_lrcp0p$($receiver, tags_metadata);
  }
  var ellipsisH_metadata = new PropertyMetadata('ellipsisH');
  var ellipsisH;
  function get_ellipsisH($receiver) {
    return ellipsisH.getValue_lrcp0p$($receiver, ellipsisH_metadata);
  }
  var list_metadata = new PropertyMetadata('list');
  var list;
  function get_list($receiver) {
    return list.getValue_lrcp0p$($receiver, list_metadata);
  }
  var listOl_metadata = new PropertyMetadata('listOl');
  var listOl;
  function get_listOl($receiver) {
    return listOl.getValue_lrcp0p$($receiver, listOl_metadata);
  }
  var comments_metadata = new PropertyMetadata('comments');
  var comments;
  function get_comments($receiver) {
    return comments.getValue_lrcp0p$($receiver, comments_metadata);
  }
  var comment_metadata = new PropertyMetadata('comment');
  var comment;
  function get_comment($receiver) {
    return comment.getValue_lrcp0p$($receiver, comment_metadata);
  }
  var commentSlash_metadata = new PropertyMetadata('commentSlash');
  var commentSlash;
  function get_commentSlash($receiver) {
    return commentSlash.getValue_lrcp0p$($receiver, commentSlash_metadata);
  }
  var eraser_metadata = new PropertyMetadata('eraser');
  var eraser;
  function get_eraser($receiver) {
    return eraser.getValue_lrcp0p$($receiver, eraser_metadata);
  }
  var check_metadata = new PropertyMetadata('check');
  var check;
  function get_check($receiver) {
    return check.getValue_lrcp0p$($receiver, check_metadata);
  }
  var clipboardCheck_metadata = new PropertyMetadata('clipboardCheck');
  var clipboardCheck;
  function get_clipboardCheck($receiver) {
    return clipboardCheck.getValue_lrcp0p$($receiver, clipboardCheck_metadata);
  }
  var times_metadata = new PropertyMetadata('times');
  var times;
  function get_times($receiver) {
    return times.getValue_lrcp0p$($receiver, times_metadata);
  }
  var volumeUp_metadata = new PropertyMetadata('volumeUp');
  var volumeUp;
  function get_volumeUp($receiver) {
    return volumeUp.getValue_lrcp0p$($receiver, volumeUp_metadata);
  }
  var volumeMute_metadata = new PropertyMetadata('volumeMute');
  var volumeMute;
  function get_volumeMute($receiver) {
    return volumeMute.getValue_lrcp0p$($receiver, volumeMute_metadata);
  }
  var eyeSlash_metadata = new PropertyMetadata('eyeSlash');
  var eyeSlash;
  function get_eyeSlash($receiver) {
    return eyeSlash.getValue_lrcp0p$($receiver, eyeSlash_metadata);
  }
  var eye_metadata = new PropertyMetadata('eye');
  var eye;
  function get_eye($receiver) {
    return eye.getValue_lrcp0p$($receiver, eye_metadata);
  }
  var running_metadata = new PropertyMetadata('running');
  var running;
  function get_running($receiver) {
    return running.getValue_lrcp0p$($receiver, running_metadata);
  }
  var bars_metadata = new PropertyMetadata('bars');
  var bars;
  function get_bars($receiver) {
    return bars.getValue_lrcp0p$($receiver, bars_metadata);
  }
  var upload_metadata = new PropertyMetadata('upload');
  var upload;
  function get_upload($receiver) {
    return upload.getValue_lrcp0p$($receiver, upload_metadata);
  }
  var download_metadata = new PropertyMetadata('download');
  var download;
  function get_download($receiver) {
    return download.getValue_lrcp0p$($receiver, download_metadata);
  }
  var file_metadata = new PropertyMetadata('file');
  var file;
  function get_file($receiver) {
    return file.getValue_lrcp0p$($receiver, file_metadata);
  }
  var folder_metadata = new PropertyMetadata('folder');
  var folder;
  function get_folder($receiver) {
    return folder.getValue_lrcp0p$($receiver, folder_metadata);
  }
  var folderOpen_metadata = new PropertyMetadata('folderOpen');
  var folderOpen;
  function get_folderOpen($receiver) {
    return folderOpen.getValue_lrcp0p$($receiver, folderOpen_metadata);
  }
  var fileImport_metadata = new PropertyMetadata('fileImport');
  var fileImport;
  function get_fileImport($receiver) {
    return fileImport.getValue_lrcp0p$($receiver, fileImport_metadata);
  }
  var dumpster_metadata = new PropertyMetadata('dumpster');
  var dumpster;
  function get_dumpster($receiver) {
    return dumpster.getValue_lrcp0p$($receiver, dumpster_metadata);
  }
  var database_metadata = new PropertyMetadata('database');
  var database;
  function get_database($receiver) {
    return database.getValue_lrcp0p$($receiver, database_metadata);
  }
  var play_metadata = new PropertyMetadata('play');
  var play;
  function get_play($receiver) {
    return play.getValue_lrcp0p$($receiver, play_metadata);
  }
  var pause_metadata = new PropertyMetadata('pause');
  var pause;
  function get_pause($receiver) {
    return pause.getValue_lrcp0p$($receiver, pause_metadata);
  }
  var stop_metadata = new PropertyMetadata('stop');
  var stop;
  function get_stop($receiver) {
    return stop.getValue_lrcp0p$($receiver, stop_metadata);
  }
  var stepForward_metadata = new PropertyMetadata('stepForward');
  var stepForward;
  function get_stepForward($receiver) {
    return stepForward.getValue_lrcp0p$($receiver, stepForward_metadata);
  }
  var stepBackward_metadata = new PropertyMetadata('stepBackward');
  var stepBackward;
  function get_stepBackward($receiver) {
    return stepBackward.getValue_lrcp0p$($receiver, stepBackward_metadata);
  }
  var backward_metadata = new PropertyMetadata('backward');
  var backward;
  function get_backward($receiver) {
    return backward.getValue_lrcp0p$($receiver, backward_metadata);
  }
  var forward_metadata = new PropertyMetadata('forward');
  var forward;
  function get_forward($receiver) {
    return forward.getValue_lrcp0p$($receiver, forward_metadata);
  }
  var exchangeAlt_metadata = new PropertyMetadata('exchangeAlt');
  var exchangeAlt;
  function get_exchangeAlt($receiver) {
    return exchangeAlt.getValue_lrcp0p$($receiver, exchangeAlt_metadata);
  }
  var cloudDownloadAlt_metadata = new PropertyMetadata('cloudDownloadAlt');
  var cloudDownloadAlt;
  function get_cloudDownloadAlt($receiver) {
    return cloudDownloadAlt.getValue_lrcp0p$($receiver, cloudDownloadAlt_metadata);
  }
  var cloudUploadAlt_metadata = new PropertyMetadata('cloudUploadAlt');
  var cloudUploadAlt;
  function get_cloudUploadAlt($receiver) {
    return cloudUploadAlt.getValue_lrcp0p$($receiver, cloudUploadAlt_metadata);
  }
  var cloud_metadata = new PropertyMetadata('cloud');
  var cloud;
  function get_cloud($receiver) {
    return cloud.getValue_lrcp0p$($receiver, cloud_metadata);
  }
  var thumbsUp_metadata = new PropertyMetadata('thumbsUp');
  var thumbsUp;
  function get_thumbsUp($receiver) {
    return thumbsUp.getValue_lrcp0p$($receiver, thumbsUp_metadata);
  }
  var thumbsDown_metadata = new PropertyMetadata('thumbsDown');
  var thumbsDown;
  function get_thumbsDown($receiver) {
    return thumbsDown.getValue_lrcp0p$($receiver, thumbsDown_metadata);
  }
  var question_metadata = new PropertyMetadata('question');
  var question;
  function get_question($receiver) {
    return question.getValue_lrcp0p$($receiver, question_metadata);
  }
  var signOutAlt_metadata = new PropertyMetadata('signOutAlt');
  var signOutAlt;
  function get_signOutAlt($receiver) {
    return signOutAlt.getValue_lrcp0p$($receiver, signOutAlt_metadata);
  }
  var signInAlt_metadata = new PropertyMetadata('signInAlt');
  var signInAlt;
  function get_signInAlt($receiver) {
    return signInAlt.getValue_lrcp0p$($receiver, signInAlt_metadata);
  }
  var at_metadata = new PropertyMetadata('at');
  var at;
  function get_at($receiver) {
    return at.getValue_lrcp0p$($receiver, at_metadata);
  }
  var user_metadata = new PropertyMetadata('user');
  var user;
  function get_user($receiver) {
    return user.getValue_lrcp0p$($receiver, user_metadata);
  }
  var syncAlt_metadata = new PropertyMetadata('syncAlt');
  var syncAlt;
  function get_syncAlt($receiver) {
    return syncAlt.getValue_lrcp0p$($receiver, syncAlt_metadata);
  }
  var redoAlt_metadata = new PropertyMetadata('redoAlt');
  var redoAlt;
  function get_redoAlt($receiver) {
    return redoAlt.getValue_lrcp0p$($receiver, redoAlt_metadata);
  }
  var tachometerAlt_metadata = new PropertyMetadata('tachometerAlt');
  var tachometerAlt;
  function get_tachometerAlt($receiver) {
    return tachometerAlt.getValue_lrcp0p$($receiver, tachometerAlt_metadata);
  }
  var spinner_metadata = new PropertyMetadata('spinner');
  var spinner;
  function get_spinner($receiver) {
    return spinner.getValue_lrcp0p$($receiver, spinner_metadata);
  }
  var info_metadata = new PropertyMetadata('info');
  var info;
  function get_info($receiver) {
    return info.getValue_lrcp0p$($receiver, info_metadata);
  }
  var google_metadata = new PropertyMetadata('google');
  var google;
  function get_google($receiver) {
    return google.getValue_lrcp0p$($receiver, google_metadata);
  }
  var package$fontawesome = _.fontawesome || (_.fontawesome = {});
  package$fontawesome.FaDoc = FaDoc;
  Object.defineProperty(package$fontawesome, 'FaDocs', {
    get: FaDocs_getInstance
  });
  package$fontawesome.FaBase = FaBase;
  package$fontawesome.Fa = Fa;
  package$fontawesome.FaSolid = FaSolid;
  package$fontawesome.FaRegular = FaRegular;
  package$fontawesome.FaBrands = FaBrands;
  package$fontawesome.FaCssClass = FaCssClass;
  package$fontawesome.FaCssClassProvider = FaCssClassProvider;
  package$fontawesome.facss_pdl1vj$ = facss;
  package$fontawesome.get_copy_xml72e$ = get_copy;
  package$fontawesome.get_ban_xml72e$ = get_ban;
  package$fontawesome.get_undo_xml72e$ = get_undo;
  package$fontawesome.get_search_xml72e$ = get_search;
  package$fontawesome.get_filter_xml72e$ = get_filter;
  package$fontawesome.get_pen_xml72e$ = get_pen;
  package$fontawesome.get_plus_xml72e$ = get_plus;
  package$fontawesome.get_minus_xml72e$ = get_minus;
  package$fontawesome.get_plusSquare_xml72e$ = get_plusSquare;
  package$fontawesome.get_chevronLeft_xml72e$ = get_chevronLeft;
  package$fontawesome.get_chevronRight_xml72e$ = get_chevronRight;
  package$fontawesome.get_chevronDown_xml72e$ = get_chevronDown;
  package$fontawesome.get_trashAlt_xml72e$ = get_trashAlt;
  package$fontawesome.get_tasks_xml72e$ = get_tasks;
  package$fontawesome.get_checkDouble_xml72e$ = get_checkDouble;
  package$fontawesome.get_pooStorm_xml72e$ = get_pooStorm;
  package$fontawesome.get_backspace_xml72e$ = get_backspace;
  package$fontawesome.get_save_xml72e$ = get_save;
  package$fontawesome.get_tags_xml72e$ = get_tags;
  package$fontawesome.get_ellipsisH_xml72e$ = get_ellipsisH;
  package$fontawesome.get_list_xml72e$ = get_list;
  package$fontawesome.get_listOl_xml72e$ = get_listOl;
  package$fontawesome.get_comments_xml72e$ = get_comments;
  package$fontawesome.get_comment_xml72e$ = get_comment;
  package$fontawesome.get_commentSlash_xml72e$ = get_commentSlash;
  package$fontawesome.get_eraser_xml72e$ = get_eraser;
  package$fontawesome.get_check_xml72e$ = get_check;
  package$fontawesome.get_clipboardCheck_xml72e$ = get_clipboardCheck;
  package$fontawesome.get_times_xml72e$ = get_times;
  package$fontawesome.get_volumeUp_xml72e$ = get_volumeUp;
  package$fontawesome.get_volumeMute_xml72e$ = get_volumeMute;
  package$fontawesome.get_eyeSlash_xml72e$ = get_eyeSlash;
  package$fontawesome.get_eye_xml72e$ = get_eye;
  package$fontawesome.get_running_xml72e$ = get_running;
  package$fontawesome.get_bars_xml72e$ = get_bars;
  package$fontawesome.get_upload_xml72e$ = get_upload;
  package$fontawesome.get_download_xml72e$ = get_download;
  package$fontawesome.get_file_xml72e$ = get_file;
  package$fontawesome.get_folder_xml72e$ = get_folder;
  package$fontawesome.get_folderOpen_xml72e$ = get_folderOpen;
  package$fontawesome.get_fileImport_xml72e$ = get_fileImport;
  package$fontawesome.get_dumpster_xml72e$ = get_dumpster;
  package$fontawesome.get_database_xml72e$ = get_database;
  package$fontawesome.get_play_xml72e$ = get_play;
  package$fontawesome.get_pause_xml72e$ = get_pause;
  package$fontawesome.get_stop_xml72e$ = get_stop;
  package$fontawesome.get_stepForward_xml72e$ = get_stepForward;
  package$fontawesome.get_stepBackward_xml72e$ = get_stepBackward;
  package$fontawesome.get_backward_xml72e$ = get_backward;
  package$fontawesome.get_forward_xml72e$ = get_forward;
  package$fontawesome.get_exchangeAlt_xml72e$ = get_exchangeAlt;
  package$fontawesome.get_cloudDownloadAlt_xml72e$ = get_cloudDownloadAlt;
  package$fontawesome.get_cloudUploadAlt_xml72e$ = get_cloudUploadAlt;
  package$fontawesome.get_cloud_xml72e$ = get_cloud;
  package$fontawesome.get_thumbsUp_xml72e$ = get_thumbsUp;
  package$fontawesome.get_thumbsDown_xml72e$ = get_thumbsDown;
  package$fontawesome.get_question_xml72e$ = get_question;
  package$fontawesome.get_signOutAlt_xml72e$ = get_signOutAlt;
  package$fontawesome.get_signInAlt_xml72e$ = get_signInAlt;
  package$fontawesome.get_at_xml72e$ = get_at;
  package$fontawesome.get_user_xml72e$ = get_user;
  package$fontawesome.get_syncAlt_xml72e$ = get_syncAlt;
  package$fontawesome.get_redoAlt_xml72e$ = get_redoAlt;
  package$fontawesome.get_tachometerAlt_xml72e$ = get_tachometerAlt;
  package$fontawesome.get_spinner_xml72e$ = get_spinner;
  package$fontawesome.get_info_xml72e$ = get_info;
  package$fontawesome.get_google_8ab8he$ = get_google;
  svgDefs = lazy(svgDefs$lambda);
  copy = facss().provideDelegate_d6mtq7$(this, copy_metadata);
  ban = facss().provideDelegate_d6mtq7$(this, ban_metadata);
  undo = facss().provideDelegate_d6mtq7$(this, undo_metadata);
  search = facss().provideDelegate_d6mtq7$(this, search_metadata);
  filter = facss().provideDelegate_d6mtq7$(this, filter_metadata);
  pen = facss().provideDelegate_d6mtq7$(this, pen_metadata);
  plus = facss().provideDelegate_d6mtq7$(this, plus_metadata);
  minus = facss().provideDelegate_d6mtq7$(this, minus_metadata);
  plusSquare = facss().provideDelegate_d6mtq7$(this, plusSquare_metadata);
  chevronLeft = facss().provideDelegate_d6mtq7$(this, chevronLeft_metadata);
  chevronRight = facss().provideDelegate_d6mtq7$(this, chevronRight_metadata);
  chevronDown = facss().provideDelegate_d6mtq7$(this, chevronDown_metadata);
  trashAlt = facss().provideDelegate_d6mtq7$(this, trashAlt_metadata);
  tasks = facss().provideDelegate_d6mtq7$(this, tasks_metadata);
  checkDouble = facss().provideDelegate_d6mtq7$(this, checkDouble_metadata);
  pooStorm = facss().provideDelegate_d6mtq7$(this, pooStorm_metadata);
  backspace = facss().provideDelegate_d6mtq7$(this, backspace_metadata);
  save = facss().provideDelegate_d6mtq7$(this, save_metadata);
  tags = facss().provideDelegate_d6mtq7$(this, tags_metadata);
  ellipsisH = facss().provideDelegate_d6mtq7$(this, ellipsisH_metadata);
  list = facss().provideDelegate_d6mtq7$(this, list_metadata);
  listOl = facss().provideDelegate_d6mtq7$(this, listOl_metadata);
  comments = facss().provideDelegate_d6mtq7$(this, comments_metadata);
  comment = facss().provideDelegate_d6mtq7$(this, comment_metadata);
  commentSlash = facss().provideDelegate_d6mtq7$(this, commentSlash_metadata);
  eraser = facss().provideDelegate_d6mtq7$(this, eraser_metadata);
  check = facss().provideDelegate_d6mtq7$(this, check_metadata);
  clipboardCheck = facss().provideDelegate_d6mtq7$(this, clipboardCheck_metadata);
  times = facss().provideDelegate_d6mtq7$(this, times_metadata);
  volumeUp = facss().provideDelegate_d6mtq7$(this, volumeUp_metadata);
  volumeMute = facss().provideDelegate_d6mtq7$(this, volumeMute_metadata);
  eyeSlash = facss().provideDelegate_d6mtq7$(this, eyeSlash_metadata);
  eye = facss().provideDelegate_d6mtq7$(this, eye_metadata);
  running = facss().provideDelegate_d6mtq7$(this, running_metadata);
  bars = facss().provideDelegate_d6mtq7$(this, bars_metadata);
  upload = facss().provideDelegate_d6mtq7$(this, upload_metadata);
  download = facss().provideDelegate_d6mtq7$(this, download_metadata);
  file = facss().provideDelegate_d6mtq7$(this, file_metadata);
  folder = facss().provideDelegate_d6mtq7$(this, folder_metadata);
  folderOpen = facss().provideDelegate_d6mtq7$(this, folderOpen_metadata);
  fileImport = facss().provideDelegate_d6mtq7$(this, fileImport_metadata);
  dumpster = facss().provideDelegate_d6mtq7$(this, dumpster_metadata);
  database = facss().provideDelegate_d6mtq7$(this, database_metadata);
  play = facss().provideDelegate_d6mtq7$(this, play_metadata);
  pause = facss().provideDelegate_d6mtq7$(this, pause_metadata);
  stop = facss().provideDelegate_d6mtq7$(this, stop_metadata);
  stepForward = facss().provideDelegate_d6mtq7$(this, stepForward_metadata);
  stepBackward = facss().provideDelegate_d6mtq7$(this, stepBackward_metadata);
  backward = facss().provideDelegate_d6mtq7$(this, backward_metadata);
  forward = facss().provideDelegate_d6mtq7$(this, forward_metadata);
  exchangeAlt = facss().provideDelegate_d6mtq7$(this, exchangeAlt_metadata);
  cloudDownloadAlt = facss().provideDelegate_d6mtq7$(this, cloudDownloadAlt_metadata);
  cloudUploadAlt = facss().provideDelegate_d6mtq7$(this, cloudUploadAlt_metadata);
  cloud = facss().provideDelegate_d6mtq7$(this, cloud_metadata);
  thumbsUp = facss().provideDelegate_d6mtq7$(this, thumbsUp_metadata);
  thumbsDown = facss().provideDelegate_d6mtq7$(this, thumbsDown_metadata);
  question = facss().provideDelegate_d6mtq7$(this, question_metadata);
  signOutAlt = facss().provideDelegate_d6mtq7$(this, signOutAlt_metadata);
  signInAlt = facss().provideDelegate_d6mtq7$(this, signInAlt_metadata);
  at = facss().provideDelegate_d6mtq7$(this, at_metadata);
  user = facss().provideDelegate_d6mtq7$(this, user_metadata);
  syncAlt = facss().provideDelegate_d6mtq7$(this, syncAlt_metadata);
  redoAlt = facss().provideDelegate_d6mtq7$(this, redoAlt_metadata);
  tachometerAlt = facss().provideDelegate_d6mtq7$(this, tachometerAlt_metadata);
  spinner = facss().provideDelegate_d6mtq7$(this, spinner_metadata);
  info = facss().provideDelegate_d6mtq7$(this, info_metadata);
  google = facss().provideDelegate_d6mtq7$(this, google_metadata);
  Kotlin.defineModule('appsimake-fontawesome', _);
  return _;
}(typeof this['appsimake-fontawesome'] === 'undefined' ? {} : this['appsimake-fontawesome'], kotlin, this['appsimake-domx'], this['kotlinx-coroutines-core'], this['appsimake-commonshr']);

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-fontawesome'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-fontawesome'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-fontawesome'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-fontawesome'.");
}
this['appsimake-fontawesome'] = function (_, Kotlin, $module$appsimake_domx) {
  'use strict';
  var css = $module$appsimake_domx.domx.css;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Cls = $module$appsimake_domx.domx.Cls;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_classes = $module$appsimake_domx.domx.get_classes_ejp6nk$;
  var Unit = Kotlin.kotlin.Unit;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var toCss = $module$appsimake_domx.domx.toCss_pdl1vz$;
  Fa$Companion.prototype = Object.create(Fa.prototype);
  Fa$Companion.prototype.constructor = Fa$Companion;
  var fas_metadata = new PropertyMetadata('fas');
  var fas;
  function get_fas($receiver) {
    return fas.getValue_lrcp0p$($receiver, fas_metadata);
  }
  function Fa(cls) {
    Fa$Companion_getInstance();
    this.cls = cls;
    get_fas(this.cls);
  }
  function Fa$Companion() {
    Fa$Companion_instance = this;
    Fa.call(this, Cls.Companion);
  }
  Fa$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Fa]
  };
  var Fa$Companion_instance = null;
  function Fa$Companion_getInstance() {
    if (Fa$Companion_instance === null) {
      new Fa$Companion();
    }
    return Fa$Companion_instance;
  }
  Fa.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fa',
    interfaces: []
  };
  function get_fa($receiver) {
    return new Fa($receiver);
  }
  function invoke($receiver, fn) {
    fn($receiver);
    return $receiver;
  }
  function FaCssClass(name) {
    this.name = name;
  }
  function FaCssClass$getValue$lambda(this$FaCssClass) {
    return function ($receiver) {
      get_classes($receiver).plusAssign_pdl1vj$(this$FaCssClass.name);
      return Unit;
    };
  }
  FaCssClass.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    thisRef.cls.element(FaCssClass$getValue$lambda(this));
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
    return new FaCssClass('fa-' + ((tmp$ = this.cls_0) != null ? tmp$ : toCss(prop.callableName)));
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
  var fw_metadata = new PropertyMetadata('fw');
  var fw;
  function get_fw($receiver) {
    return fw.getValue_lrcp0p$($receiver, fw_metadata);
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
  var x2_metadata = new PropertyMetadata('x2');
  var x2;
  function get_x2($receiver) {
    return x2.getValue_lrcp0p$($receiver, x2_metadata);
  }
  var x3_metadata = new PropertyMetadata('x3');
  var x3;
  function get_x3($receiver) {
    return x3.getValue_lrcp0p$($receiver, x3_metadata);
  }
  var x4_metadata = new PropertyMetadata('x4');
  var x4;
  function get_x4($receiver) {
    return x4.getValue_lrcp0p$($receiver, x4_metadata);
  }
  var package$fontawesome = _.fontawesome || (_.fontawesome = {});
  package$fontawesome.get_fas_kre7dp$ = get_fas;
  Object.defineProperty(Fa, 'Companion', {
    get: Fa$Companion_getInstance
  });
  package$fontawesome.Fa = Fa;
  package$fontawesome.get_fa_kre7dp$ = get_fa;
  package$fontawesome.invoke_fv3gfs$ = invoke;
  package$fontawesome.FaCssClass = FaCssClass;
  package$fontawesome.FaCssClassProvider = FaCssClassProvider;
  package$fontawesome.facss_pdl1vj$ = facss;
  package$fontawesome.get_fw_xml72e$ = get_fw;
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
  package$fontawesome.get_backspace_xml72e$ = get_backspace;
  package$fontawesome.get_save_xml72e$ = get_save;
  package$fontawesome.get_tags_xml72e$ = get_tags;
  package$fontawesome.get_ellipsisH_xml72e$ = get_ellipsisH;
  package$fontawesome.get_list_xml72e$ = get_list;
  package$fontawesome.get_listOl_xml72e$ = get_listOl;
  package$fontawesome.get_comments_xml72e$ = get_comments;
  package$fontawesome.get_comment_xml72e$ = get_comment;
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
  package$fontawesome.get_file_xml72e$ = get_file;
  package$fontawesome.get_folder_xml72e$ = get_folder;
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
  package$fontawesome.get_x2_xml72e$ = get_x2;
  package$fontawesome.get_x3_xml72e$ = get_x3;
  package$fontawesome.get_x4_xml72e$ = get_x4;
  fas = css().provideDelegate_d6mtq7$(this, fas_metadata);
  fw = facss().provideDelegate_d6mtq7$(this, fw_metadata);
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
  backspace = facss().provideDelegate_d6mtq7$(this, backspace_metadata);
  save = facss().provideDelegate_d6mtq7$(this, save_metadata);
  tags = facss().provideDelegate_d6mtq7$(this, tags_metadata);
  ellipsisH = facss().provideDelegate_d6mtq7$(this, ellipsisH_metadata);
  list = facss().provideDelegate_d6mtq7$(this, list_metadata);
  listOl = facss().provideDelegate_d6mtq7$(this, listOl_metadata);
  comments = facss().provideDelegate_d6mtq7$(this, comments_metadata);
  comment = facss().provideDelegate_d6mtq7$(this, comment_metadata);
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
  file = facss().provideDelegate_d6mtq7$(this, file_metadata);
  folder = facss().provideDelegate_d6mtq7$(this, folder_metadata);
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
  x2 = facss('2x').provideDelegate_d6mtq7$(this, x2_metadata);
  x3 = facss('3x').provideDelegate_d6mtq7$(this, x3_metadata);
  x4 = facss('4x').provideDelegate_d6mtq7$(this, x4_metadata);
  Kotlin.defineModule('appsimake-fontawesome', _);
  return _;
}(typeof this['appsimake-fontawesome'] === 'undefined' ? {} : this['appsimake-fontawesome'], kotlin, this['appsimake-domx']);

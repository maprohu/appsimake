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
  function FaCssClassProvider() {
  }
  FaCssClassProvider.prototype.provideDelegate_d6mtq7$ = function (thisRef, prop) {
    return new FaCssClass('fa-' + toCss(prop.callableName));
  };
  FaCssClassProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FaCssClassProvider',
    interfaces: []
  };
  function facss() {
    return new FaCssClassProvider();
  }
  var fw_metadata = new PropertyMetadata('fw');
  var fw;
  function get_fw($receiver) {
    return fw.getValue_lrcp0p$($receiver, fw_metadata);
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
  package$fontawesome.facss = facss;
  package$fontawesome.get_fw_xml72e$ = get_fw;
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
  package$fontawesome.get_save_xml72e$ = get_save;
  package$fontawesome.get_tags_xml72e$ = get_tags;
  package$fontawesome.get_ellipsisH_xml72e$ = get_ellipsisH;
  package$fontawesome.get_list_xml72e$ = get_list;
  package$fontawesome.get_comments_xml72e$ = get_comments;
  package$fontawesome.get_comment_xml72e$ = get_comment;
  package$fontawesome.get_eraser_xml72e$ = get_eraser;
  package$fontawesome.get_check_xml72e$ = get_check;
  package$fontawesome.get_times_xml72e$ = get_times;
  package$fontawesome.get_volumeUp_xml72e$ = get_volumeUp;
  package$fontawesome.get_volumeMute_xml72e$ = get_volumeMute;
  fas = css().provideDelegate_d6mtq7$(this, fas_metadata);
  fw = facss().provideDelegate_d6mtq7$(this, fw_metadata);
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
  save = facss().provideDelegate_d6mtq7$(this, save_metadata);
  tags = facss().provideDelegate_d6mtq7$(this, tags_metadata);
  ellipsisH = facss().provideDelegate_d6mtq7$(this, ellipsisH_metadata);
  list = facss().provideDelegate_d6mtq7$(this, list_metadata);
  comments = facss().provideDelegate_d6mtq7$(this, comments_metadata);
  comment = facss().provideDelegate_d6mtq7$(this, comment_metadata);
  eraser = facss().provideDelegate_d6mtq7$(this, eraser_metadata);
  check = facss().provideDelegate_d6mtq7$(this, check_metadata);
  times = facss().provideDelegate_d6mtq7$(this, times_metadata);
  volumeUp = facss().provideDelegate_d6mtq7$(this, volumeUp_metadata);
  volumeMute = facss().provideDelegate_d6mtq7$(this, volumeMute_metadata);
  Kotlin.defineModule('appsimake-fontawesome', _);
  return _;
}(typeof this['appsimake-fontawesome'] === 'undefined' ? {} : this['appsimake-fontawesome'], kotlin, this['appsimake-domx']);

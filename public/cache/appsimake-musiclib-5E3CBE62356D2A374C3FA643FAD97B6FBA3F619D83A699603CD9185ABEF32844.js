if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-musiclib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-musiclib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-musiclib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-musiclib'.");
}
this['appsimake-musiclib'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Lib = $module$appsimake_commonshr.commonshr.Lib;
  var coll = $module$appsimake_commonshr.commonshr.coll_4okrys$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var RxBase = $module$appsimake_commonshr.commonshr.properties.RxBase;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  StoreState.prototype = Object.create(RxBase.prototype);
  StoreState.prototype.constructor = StoreState;
  UserSongState.prototype = Object.create(Enum.prototype);
  UserSongState.prototype.constructor = UserSongState;
  UserSong.prototype = Object.create(RxBase.prototype);
  UserSong.prototype.constructor = UserSong;
  Mp3File.prototype = Object.create(RxBase.prototype);
  Mp3File.prototype.constructor = Mp3File;
  var musicLib;
  function songs$lambda() {
    return new Mp3File();
  }
  var songs;
  var songs_metadata = new PropertyMetadata('songs');
  function get_songs($receiver) {
    return songs.getValue_lrcp0p$($receiver, songs_metadata);
  }
  function storage$lambda() {
    return new StoreState();
  }
  var storage;
  var storage_metadata = new PropertyMetadata('storage');
  function get_storage($receiver) {
    return storage.getValue_lrcp0p$($receiver, storage_metadata);
  }
  function usersongs$lambda() {
    return new UserSong();
  }
  var usersongs;
  var usersongs_metadata = new PropertyMetadata('usersongs');
  function get_usersongs($receiver) {
    return usersongs.getValue_lrcp0p$($receiver, usersongs_metadata);
  }
  function StoreState() {
    RxBase.call(this);
    this.uploaded_yl0bsa$_0 = this.o.boolean_6taknv$().provideDelegate_n5byny$(this, StoreState$uploaded_metadata);
    this.count_8lqj3v$_0 = this.o.int_za3lpa$().provideDelegate_n5byny$(this, StoreState$count_metadata);
  }
  var StoreState$uploaded_metadata = new PropertyMetadata('uploaded');
  Object.defineProperty(StoreState.prototype, 'uploaded', {
    get: function () {
      return this.uploaded_yl0bsa$_0.getValue_lrcp0p$(this, StoreState$uploaded_metadata);
    }
  });
  var StoreState$count_metadata = new PropertyMetadata('count');
  Object.defineProperty(StoreState.prototype, 'count', {
    get: function () {
      return this.count_8lqj3v$_0.getValue_lrcp0p$(this, StoreState$count_metadata);
    }
  });
  StoreState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StoreState',
    interfaces: [RxBase]
  };
  function UserSongState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UserSongState_initFields() {
    UserSongState_initFields = function () {
    };
    UserSongState$New_instance = new UserSongState('New', 0);
    UserSongState$Like_instance = new UserSongState('Like', 1);
    UserSongState$DontLike_instance = new UserSongState('DontLike', 2);
  }
  var UserSongState$New_instance;
  function UserSongState$New_getInstance() {
    UserSongState_initFields();
    return UserSongState$New_instance;
  }
  var UserSongState$Like_instance;
  function UserSongState$Like_getInstance() {
    UserSongState_initFields();
    return UserSongState$Like_instance;
  }
  var UserSongState$DontLike_instance;
  function UserSongState$DontLike_getInstance() {
    UserSongState_initFields();
    return UserSongState$DontLike_instance;
  }
  UserSongState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserSongState',
    interfaces: [Enum]
  };
  function UserSongState$values() {
    return [UserSongState$New_getInstance(), UserSongState$Like_getInstance(), UserSongState$DontLike_getInstance()];
  }
  UserSongState.values = UserSongState$values;
  function UserSongState$valueOf(name) {
    switch (name) {
      case 'New':
        return UserSongState$New_getInstance();
      case 'Like':
        return UserSongState$Like_getInstance();
      case 'DontLike':
        return UserSongState$DontLike_getInstance();
      default:throwISE('No enum constant musiclib.UserSongState.' + name);
    }
  }
  UserSongState.valueOf_61zpoe$ = UserSongState$valueOf;
  var killable = $module$appsimake_commonshr.killable;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var EnumProp_init = $module$appsimake_commonshr.commonshr.properties.EnumProp;
  var wrapFunction = Kotlin.wrapFunction;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var PropertyList$enum$lambda = wrapFunction(function () {
    var PropertyType_init = $module$appsimake_commonshr.commonshr.properties.PropertyType;
    function enumType$lambda(e, f) {
      return e.name;
    }
    function enumType$lambda_0(typeClosure$E, isE) {
      return function (d, f) {
        return typeClosure$E.valueOf_61zpoe$(d);
      };
    }
    var linked = $module$appsimake_commonshr.rx.linked_g2t76q$;
    function toName$lambda(it) {
      return it.name;
    }
    function toName$lambda_0(typeClosure$E, isE) {
      return function (it) {
        return typeClosure$E.valueOf_61zpoe$(it);
      };
    }
    return function (typeClosure$E, isE, closure$v, this$PropertyList) {
      return function (name) {
        var type = new PropertyType_init(void 0, void 0, enumType$lambda, enumType$lambda_0(typeClosure$E, isE));
        var rxv = this$PropertyList.addProperty_5wvcos$(name, closure$v, type);
        var tmp$ = type.writeDynamic;
        var E_0 = typeClosure$E;
        var isE_0 = isE;
        return new EnumProp_init(name, rxv, tmp$, linked(rxv, killable.HasNoKill, toName$lambda, toName$lambda_0(E_0, isE_0)), toList(typeClosure$E.values()));
      };
    };
  });
  function UserSong() {
    RxBase.call(this);
    var $this = this.o;
    this.state_bbx9l$_0 = named(PropertyList$enum$lambda(UserSongState, Kotlin.isInstanceOf(UserSongState), UserSongState$New_getInstance(), $this)).provideDelegate_n5byny$(this, UserSong$state_metadata);
  }
  var UserSong$state_metadata = new PropertyMetadata('state');
  Object.defineProperty(UserSong.prototype, 'state', {
    get: function () {
      return this.state_bbx9l$_0.getValue_lrcp0p$(this, UserSong$state_metadata);
    }
  });
  UserSong.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserSong',
    interfaces: [RxBase]
  };
  function Mp3File() {
    RxBase.call(this);
    this.artist_gnizx9$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, Mp3File$artist_metadata);
    this.title_oczcia$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, Mp3File$title_metadata);
    this.bytes_g2yq1r$_0 = this.o.int_za3lpa$().provideDelegate_n5byny$(this, Mp3File$bytes_metadata);
    this.secs_s9ic5k$_0 = this.o.double().provideDelegate_n5byny$(this, Mp3File$secs_metadata);
    this.artistfix_p2btfg$_0 = this.o.prop_z4bjo6$(null).provideDelegate_n5byny$(this, Mp3File$artistfix_metadata);
    this.titlefix_4417u5$_0 = this.o.prop_z4bjo6$(null).provideDelegate_n5byny$(this, Mp3File$titlefix_metadata);
  }
  var Mp3File$artist_metadata = new PropertyMetadata('artist');
  Object.defineProperty(Mp3File.prototype, 'artist', {
    get: function () {
      return this.artist_gnizx9$_0.getValue_lrcp0p$(this, Mp3File$artist_metadata);
    }
  });
  var Mp3File$title_metadata = new PropertyMetadata('title');
  Object.defineProperty(Mp3File.prototype, 'title', {
    get: function () {
      return this.title_oczcia$_0.getValue_lrcp0p$(this, Mp3File$title_metadata);
    }
  });
  var Mp3File$bytes_metadata = new PropertyMetadata('bytes');
  Object.defineProperty(Mp3File.prototype, 'bytes', {
    get: function () {
      return this.bytes_g2yq1r$_0.getValue_lrcp0p$(this, Mp3File$bytes_metadata);
    }
  });
  var Mp3File$secs_metadata = new PropertyMetadata('secs');
  Object.defineProperty(Mp3File.prototype, 'secs', {
    get: function () {
      return this.secs_s9ic5k$_0.getValue_lrcp0p$(this, Mp3File$secs_metadata);
    }
  });
  var Mp3File$artistfix_metadata = new PropertyMetadata('artistfix');
  Object.defineProperty(Mp3File.prototype, 'artistfix', {
    get: function () {
      return this.artistfix_p2btfg$_0.getValue_lrcp0p$(this, Mp3File$artistfix_metadata);
    }
  });
  var Mp3File$titlefix_metadata = new PropertyMetadata('titlefix');
  Object.defineProperty(Mp3File.prototype, 'titlefix', {
    get: function () {
      return this.titlefix_4417u5$_0.getValue_lrcp0p$(this, Mp3File$titlefix_metadata);
    }
  });
  Mp3File.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mp3File',
    interfaces: [RxBase]
  };
  function fixedArtist($receiver) {
    var tmp$;
    return (tmp$ = $receiver.artistfix.invoke()) != null ? tmp$ : $receiver.artist.invoke();
  }
  function fixedTitle($receiver) {
    var tmp$;
    return (tmp$ = $receiver.titlefix.invoke()) != null ? tmp$ : $receiver.title.invoke();
  }
  var package$musiclib = _.musiclib || (_.musiclib = {});
  Object.defineProperty(package$musiclib, 'musicLib', {
    get: function () {
      return musicLib;
    }
  });
  package$musiclib.get_songs_pe8gwr$ = get_songs;
  package$musiclib.get_storage_pe8gwr$ = get_storage;
  package$musiclib.get_usersongs_x4imip$ = get_usersongs;
  package$musiclib.StoreState = StoreState;
  Object.defineProperty(UserSongState, 'New', {
    get: UserSongState$New_getInstance
  });
  Object.defineProperty(UserSongState, 'Like', {
    get: UserSongState$Like_getInstance
  });
  Object.defineProperty(UserSongState, 'DontLike', {
    get: UserSongState$DontLike_getInstance
  });
  package$musiclib.UserSongState = UserSongState;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$musiclib.UserSong = UserSong;
  package$musiclib.Mp3File = Mp3File;
  package$musiclib.fixedArtist_78w6vj$ = fixedArtist;
  package$musiclib.fixedTitle_78w6vj$ = fixedTitle;
  musicLib = new Lib('music');
  songs = coll(songs$lambda);
  storage = coll(storage$lambda);
  usersongs = coll(usersongs$lambda);
  Kotlin.defineModule('appsimake-musiclib', _);
  return _;
}(typeof this['appsimake-musiclib'] === 'undefined' ? {} : this['appsimake-musiclib'], kotlin, this['appsimake-commonshr']);

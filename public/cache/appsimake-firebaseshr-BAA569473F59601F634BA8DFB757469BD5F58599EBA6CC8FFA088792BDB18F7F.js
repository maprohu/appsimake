if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebaseshr'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-firebaseshr'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-firebaseshr'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-firebaseshr'.");
}
this['appsimake-firebaseshr'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ensureNotNull = Kotlin.ensureNotNull;
  function decodeMessage(msg) {
    return decodeMessageData(msg.data);
  }
  function DecodedMessage(lib, data) {
    this.lib = lib;
    this.data = data;
  }
  DecodedMessage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecodedMessage',
    interfaces: []
  };
  function decodeMessageData(data) {
    return new DecodedMessage(ensureNotNull(data.appsimakeApp), JSON.parse(data.json));
  }
  function encodeMessageData(lib, data) {
    var $receiver = {};
    $receiver.appsimakeApp = lib.name;
    $receiver.json = JSON.stringify(data);
    return $receiver;
  }
  function createLibMessage(lib, data) {
    var $receiver = {};
    $receiver.appsimakeApp = lib.name;
    $receiver.data = data;
    return $receiver;
  }
  function postLibMessage($receiver, lib, data) {
    $receiver.postMessage(createLibMessage(lib, data));
  }
  var package$firebaseshr = _.firebaseshr || (_.firebaseshr = {});
  package$firebaseshr.decodeMessage_za3rmp$ = decodeMessage;
  package$firebaseshr.DecodedMessage = DecodedMessage;
  package$firebaseshr.decodeMessageData_i92b12$ = decodeMessageData;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$firebaseshr.encodeMessageData_yy61vh$ = encodeMessageData;
  package$firebaseshr.createLibMessage_ycvucz$ = createLibMessage;
  package$firebaseshr.postLibMessage_q9pn7$ = postLibMessage;
  Kotlin.defineModule('appsimake-firebaseshr', _);
  return _;
}(typeof this['appsimake-firebaseshr'] === 'undefined' ? {} : this['appsimake-firebaseshr'], kotlin, this['appsimake-commonshr']);

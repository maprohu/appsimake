(function(){
  
  function loadScript(src) {
      return new Promise(function (resolve, reject) {
          var s = document.createElement('script');
          s.src = src;
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
      });
  }
  function loadScripts(srcs) {
      if (srcs.length == 0) return;
      var src = srcs.shift();
      loadScript(src).then(function(){
          loadScripts(srcs);
      });
  }
  loadScripts([
    "cache/chat-main-5A30C30F4E20358C3168BBB502EC467B46E3BCF63371518C7E02DFE831641930.js"
  ]);
  
})();
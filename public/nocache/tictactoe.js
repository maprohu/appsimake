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
    "cache/tictactoe-main-F7F0E118F84CAA7008AE239045EEDBB1D7C55A7F5C87096FC7D5418836DBB7FF.js"
  ]);
  
})();
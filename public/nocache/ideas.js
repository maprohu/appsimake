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
    "cache/ideas-main-06C0E56B56817FB673B3A96C8F10C848CA437130ABDBECD1BFE02F6E6937EF96.js"
  ]);
  
})();
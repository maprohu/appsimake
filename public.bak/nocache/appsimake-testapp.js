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
    "../cache/appsimake-testapp-main-657AB98F743807311B224C262847EBE522E9DFB94AEE1CF572BF19E383EC66F4.js"
  ]);
  
})();
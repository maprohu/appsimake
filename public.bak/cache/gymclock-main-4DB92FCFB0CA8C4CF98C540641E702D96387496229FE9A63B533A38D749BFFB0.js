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
    "cache/kotlin-3BAEA41E6F19673D1A106F9D00A87D9AF128330FC06252CCA72868B8A512BEDE.js",
    "cache/kotlinx-html-js-950DD12AE60AF7FB075BE0984E3C4DDC8DFE26110DBA0808386C9086EAC2C887.js",
    "cache/common-019C78B57D3C3FAE938EF4C1EE7237F0397BFE5301D20BCAE4181E81F39A9158.js",
    "cache/jquery-3.3.1-D8AA24ECC6CECB1A60515BC093F1C9DA38A0392612D9AB8AE0F7F36E6EEE1FAD.js",
    "cache/bootstrap.bundle-3290AD3B8A579EF3BC11C67DAADDE34B8C60537E337AC6249885D85D13566363.js",
    "cache/bootstrap-388A292C2DFD1A169A14290873CA4889E838A05A6F3714031933ACB0707FBE19.js",
    "cache/gymclock.resmap-F5E4ED4E246F6E1ACF446BF72A3B4AF72E92DD6CDB1E455F83F9316418246B83.js",
    "cache/gymclock-A1BB56A706D226D9628BC0CDDB1E687474BE5569E61D2B2AABC9FA99F020A0D4.js"
  ]);
  
})();
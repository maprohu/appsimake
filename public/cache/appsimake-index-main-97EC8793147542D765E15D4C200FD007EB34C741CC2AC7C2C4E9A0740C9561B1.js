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
    "../cache/kotlin-084321D188A1CF1035183CBE393507A1AFECDA6189F95EE878509DB0B05C4350.js",
    "../cache/jquery-3.3.1-D8AA24ECC6CECB1A60515BC093F1C9DA38A0392612D9AB8AE0F7F36E6EEE1FAD.js",
    "../cache/bootstrap.bundle-610EAC51823855EF00510A480764E1F30E237E5F9D73A59002DC4CB3809642E0.js",
    "../cache/appsimake-commonshr-9F08D4958636A78513B5AD2D0F70D3BA272888F031C8E183FFCE171A25509FF0.js",
    "../cache/appsimake-buildenv-CF535A683DF449244B036788B526E4D0D04A2275C0E056C966EDCA55741EC906.js",
    "../cache/appsimake-common-8FF631F678F2B2D07448CE1579D60A6C3BAEF716C0D59BCDAD6A63DFC2BFDFA1.js",
    "../cache/appsimake-domx-81C73AB2933C0EA93138FC55B350A5F8BFF5252481A1E2963DF295DF9A623514.js",
    "../cache/appsimake-bootstrap-614978522669CBD393F89755BD9917E452A7D56D7B4C96FE27BA3F93ED8AEF1D.js",
    "../cache/appsimake-index-9AB2DD2C6C4C32EF88E252DD91263F50E3423DA23BB72F4DC1529D2C8145A169.js"
  ]);
  
})();
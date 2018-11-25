(function() {
    function addScript(src) {
        var s = document.createElement('script');
        s.src = src;
        document.body.appendChild(s);
    }

    addScript('cache/test-12345.js');

})();
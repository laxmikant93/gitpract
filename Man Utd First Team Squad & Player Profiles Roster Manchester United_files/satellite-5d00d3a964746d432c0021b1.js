_satellite.pushAsyncScript(function(event, target, $variables){
  (function () {
  window._uxa = window._uxa || [];
  try {
    if (typeof dataLayer !== 'undefined') {
    }  
  } catch (e){}
  if (typeof CS_CONF === 'undefined') {
    window._uxa.push(['setPath', window.location.pathname+window.location.hash.replace('#','?__')]);
    var mt = document.createElement("script"); mt.type = "text/javascript"; mt.async = true;
    mt.src = "//t.contentsquare.net/uxa/47014ce890284.js";
    document.getElementsByTagName("head")[0].appendChild(mt);
  }
  else {
    window._uxa.push(['trackPageview', window.location.pathname+window.location.hash.replace('#','?__')]);
  }
})();
});

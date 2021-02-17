_satellite.pushAsyncScript(function(event, target, $variables){
  var dcJS = document.createElement('SCRIPT');
var done = false;
  
dcJS.setAttribute('src', 'https://10979490.collect.igodigital.com/collect.js');
dcJS.setAttribute('type','text/javascript');
  
document.body.appendChild(dcJS);
dcJS.onload = dcJS.onreadystatechange = function () {
    if(!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
         done = true;
         callback();
  
          // Handle memory leak in IE
          dcJS.onload = dcJS.onreadystatechange = null;
          document.body.removeChild(dcJS);
    }
};
function callback(){
     if(done){  
     _etmc.push(["setOrgId", "10979490"]);
		 _etmc.push(["trackPageView"]);

     }
}
});

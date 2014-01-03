(function($) {
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
    
      function getBaseURL() {
        var url = location.href;  // entire url including querystring - also: window.location.href;
        var baseURL = url.substring(0, url.indexOf('/', 14));
 
 
        if (baseURL.indexOf('http://localhost') != -1) {
          // Base Url for localhost
          var url = location.href;  // window.location.href;
          var pathname = location.pathname;  // window.location.pathname;
          var index1 = url.indexOf(pathname);
          var index2 = url.indexOf("/", index1 + 1);
          var baseLocalUrl = url.substr(0, index2);
 
          return baseLocalUrl + "/";
        }
        else {
          // Root Url for domain name
          return baseURL + "/";
        }
      }
      
      var theURL = getBaseURL();
      
      function addSliderEvents() {
        var sliders = document.getElementsByClassName('hoursslider');
        for(var i=0; i<sliders.length; i++) { 
          console.log(sliders[i]);
          var cname = sliders[i].id;
          var idnum = parseInt(cname.substring(11));
          sliders[i].onchange = function(e) {
             document.getElementById('hourschosen' + idnum).innerHTML = this.value;
          }
        }
      }
      
      
      window.onload=addSliderEvents();
    }
  };
})(jQuery);
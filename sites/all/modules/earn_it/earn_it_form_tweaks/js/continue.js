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
      
      function goToWeekOne() {
      
        $.get( 
              theURL + "user_progress/"+ 1 + "/" + 2,
              function(data) {
                if (data.form_errors) {
                  alert("error");
                }
                else {
                  //alert("success");
                }
              }
            );
      }
      
      function handleClick() {
 
        if (window.event.srcElement.id == "week1") {
          goToWeekOne();

        }
      }

      
      document.onclick = handleClick;
    
      
      
      window.onload=document.getElementById("panels-ipe-paneid-10").innerHTML = "<button id='week1'>Continue</button>";
    }
  };
})(jQuery);
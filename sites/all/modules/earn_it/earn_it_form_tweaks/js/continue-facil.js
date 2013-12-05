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
      
      function progressFacil() {
        var newGameState = Drupal.settings.gamestate.key + 1;
        
        //FIXME: call to a check based on gamestate here
      
        $.get( 
              theURL + "facil_progress/" + Drupal.settings.gamenid.key + "/" + newGameState,
              function(data) {
                console.log(data);
                if (data.form_errors) {
                  alert("error");
                }
                else {
                  //alert("success");
                  document.getElementById("week1facil").onclick = function() {return true;};
                }
              }
            );
      }
      
      function handleClick() {
 
        if (window.event.srcElement.id == "week1facil") {
          progressFacil();

        }
      }

      
      document.onclick = handleClick;
    
      //alert("continuefacil called");
      
      window.onload=document.getElementById("facilbutton").innerHTML = "<button id='week1facil'>Continue</button>";
    }
  };
})(jQuery);
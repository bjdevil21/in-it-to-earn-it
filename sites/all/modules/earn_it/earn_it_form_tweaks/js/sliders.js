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
      
      function updateTotalHours(hdivs, stdiv, stclass, ststring, tdiv) {
        var hoursDivs = document.getElementsByClassName(hdivs);
        var subtotalHours = 0;
        for (var j=0; j<hoursDivs.length; j++) {
          subtotalHours += parseInt(hoursDivs[j].innerHTML);
        }
        document.getElementById(stdiv).innerHTML = ststring + subtotalHours;
        var subtotalDivs = document.getElementsByClassName(stclass);
        var totalHours = 0;
        totalHours += parseInt(subtotalDivs[0].innerHTML.substring(22));
        totalHours += parseInt(subtotalDivs[1].innerHTML.substring(29));
        totalHours += parseInt(subtotalDivs[2].innerHTML.substring(20));
        document.getElementById(tdiv).innerHTML = "Total Hours: " + totalHours;
        var pbarVal = totalHours * 2;
        document.getElementsByClassName("ui-progressbar-value")[0].style.width = pbarVal + "%";
      }
      
      function addSliderEvents() {
      
        $( "#progressbar" ).progressbar({
            value: 0
          });
      
        //alert("add slider events called");
        var sliders = document.getElementsByClassName('hoursslider');
        for(var i=0; i<sliders.length; i++) { 
          sliders[i].onchange = function(e) {
            document.getElementById('hourschosen' + parseInt(this.id.substring(11))).innerHTML = this.value;
            if(this.classList.contains("week1acaslider")) {
              updateTotalHours("week1acahours", "totalhoursacademic", "week1subtotal", "Total Academic Hours: ", "week1totalhours");
            }
            else if (this.classList.contains("week1extraslider")) {
              updateTotalHours("week1extrahours", "totalhoursextra", "week1subtotal", "Total Extracurricular Hours: ", "week1totalhours");
            }
            else if (this.classList.contains("week1socialslider")) {
              updateTotalHours("week1socialhours", "totalhourssocial", "week1subtotal", "Total Social Hours: ", "week1totalhours");
            }
            
            else if(this.classList.contains("week2acaslider")) {
              updateTotalHours("week2acahours", "totalhoursacademic", "week2subtotal", "Total Academic Hours: ", "week2totalhours");
            }
            else if (this.classList.contains("week2extraslider")) {
              updateTotalHours("week2extrahours", "totalhoursextra", "week2subtotal", "Total Extracurricular Hours: ", "week2totalhours");
            }
            else if (this.classList.contains("week2socialslider")) {
              updateTotalHours("week2socialhours", "totalhourssocial", "week2subtotal", "Total Social Hours: ", "week2totalhours");
            }
            
            else if(this.classList.contains("week3acaslider")) {
              updateTotalHours("week3acahours", "totalhoursacademic", "week3subtotal", "Total Academic Hours: ", "week3totalhours");
            }
            else if (this.classList.contains("week3extraslider")) {
              updateTotalHours("week3extrahours", "totalhoursextra", "week3subtotal", "Total Extracurricular Hours: ", "week3totalhours");
            }
            else if (this.classList.contains("week3socialslider")) {
              updateTotalHours("week3socialhours", "totalhourssocial", "week3subtotal", "Total Social Hours: ", "week3totalhours");
            }
            
          }
        }
      }
      
      
      window.onload=addSliderEvents();
    }
  };
})(jQuery);
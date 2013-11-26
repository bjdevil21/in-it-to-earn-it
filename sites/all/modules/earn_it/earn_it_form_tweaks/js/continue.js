(function($) {
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
    
      function goToWeekOne() {
        // FIXME: actually have this do something
        alert("continue clicked");
      }
      
      document.getElementById("panels-ipe-paneid-10").innerHTML = "<button onClick='goToWeekOne()'>Continue</button>"      
    }
  };
})(jQuery);
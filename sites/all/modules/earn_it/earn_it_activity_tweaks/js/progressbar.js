(function($) {
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      
      $.getScript("https://code.jquery.com/ui/1.10.4/jquery-ui.js", function(){

        $(function() {
          $( "#progressbar" ).progressbar({
            value: 37
          });
        });
      
      });
      
      
    }
  };
})(jQuery);
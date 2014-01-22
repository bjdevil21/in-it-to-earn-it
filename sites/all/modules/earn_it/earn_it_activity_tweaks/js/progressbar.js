(function($) {
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
    
      $(function() {
        $( "#progressbar" ).progressbar({
          value: 37
        });
      });
    }
  };
})(jQuery);
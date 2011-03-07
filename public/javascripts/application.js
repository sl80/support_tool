// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

(function($) {
      
  var app = $.sammy('#main', function() {
    
    this.use('Template');
    
    this.get('#/', function(context) {
      this.load('mailing_lists.json')
          .then(function(lists) {
            $.each(lists, function(i, list) {
              context.render('templates/list.template', {list: list})
                     .appendTo(context.$element());
            });
	        });
      });
      
      
	});

  $(function() {
    app.run('#/');
  });
      
})(jQuery);
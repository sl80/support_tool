App.Controllers.Main = Backbone.Controller.extend({
    routes: {
        "":                         "index",
    },
    
    index: function() {
        mailingLists.fetch({
          success:function(){
            new App.Views.Index();
          }
        });
         
    }
});


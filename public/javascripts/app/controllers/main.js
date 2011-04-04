App.Controllers.Main = Backbone.Controller.extend({
    routes: {
        "":                         "index",
    },
    
    index: function() {
        console.log(MailingLists.fetch);
        MailingLists.fetch({
          success:function(){
            new App.Views.Index();
          }
        });
         
    }
});


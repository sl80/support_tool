App.Controllers.Main = Backbone.Controller.extend({
    routes: {
        "":                 "index",
        "lists":            "lists",
        "pad":              "pad",
    },
    
    index: function() {
        mailingLists.fetch({
          success:function(){
            new App.Views.Lists();
          }
        });
    },
    lists: function(){
      console.log('set lists');
      main_tabs.set('lists');
    },
    pad: function(){
      console.log('set tabs');
      main_tabs.set('pad');
    }
});


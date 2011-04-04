App.Views.Index = Backbone.View.extend({
    initialize: function() {
        this.id = 'main';
        this.collection = MailingLists;
        this.template = new EJS({url: 'javascripts/app/templates/index.ejs'})
        
        this.collection.bind('add', this.addOne);
        this.collection.bind('refresh', this.addAll);
        this.collection.bind('all', this.render)
        
        this.render();
        this.addAll();
    },
    
    render: function() {
        console.log('rendering');
        // if(this.collection.length > 0) {
        //             var out = "<h3><a href='#new'>Create New</a></h3><ul>";
        //             this.collection.each(function(item) {
        //                 out += "<li><a href='#documents/" + item.id + "'>" + item.escape('name') + "</a></li>";
        //             });
        //             out += "</ul>";
        //         } else {
        //             out = "<h3>No documents! <a href='#new'>Create one</a></h3>";
        //         }
        $(this.el).html(this.template.render(this));
        $('#'+this.id).html(this.el);
    },
    
    addOne: function(list) {
          var view = new App.Views.List({model: list});
          this.$(".mailing-lists").append(view.render().el);
    },
    
    addAll: function() {
      var self = this;
      this.collection.each(function(list){ self.addOne(list); });
    }
    
});

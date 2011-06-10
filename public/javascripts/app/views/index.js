App.Views.Index = Backbone.View.extend({
    initialize: function() {
        this.id = 'main';
        this.collection = mailingLists;
        this.template = new EJS({url: 'javascripts/app/templates/index.ejs'})
        
        this.collection.bind('add', this.addOne);
        this.collection.bind('refresh', this.addAll);
        this.collection.bind('all', this.render)
        
        this.render();
        this.addAll();
    },
    
    events: {    
      "click .search" : "search"
    },
    
    render: function() {
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
    },
    resetAll: function(){
      this.$(".mailing-lists").html('');
      this.addAll();
    },
    
    search: function(){
      this.collection.search(this.$('.searchfield')[0].value);
      this.resetAll();
      return false;
    }
    
});

App.Views.Lists = Backbone.View.extend({
    initialize: function() {
        this.id="main";
        console.log('initialize');
        this.collection = mailingLists;
        this.template = new EJS({url: 'javascripts/app/templates/lists.ejs'})
        
        var self = this;
        
        //this.collection.bind('add', this.addOne);
        this.collection.bind('refresh',function(){ self.resetAll(); });
        //this.collection.bind('all', this.render)
        
        this.tabs = {};
        this.render();
        this.addAll();
        this.tabs.panels = new Tab(this.$(".lists"));
        this.$('.searchfield').keypress(function(e){
              console.log('huhu');
              if(e.which == 13){
                 console.log('haha');
                 self.search();
               }
        });
        
    },
    
    events: {    
      "click .search" : "search",
      "click .back"   : "back"
    },
    
    render: function() {
        $(this.el).html(this.template.render(this));
        $('#main .tab-lists').html(this.el);
    },
    
    addOne: function(list) {
          console.log('addOne');
          var view = new App.Views.List({model: list, tabs: this.tabs});
          this.$(".mailing-lists").append(view.render().el);
    },
    
    addAll: function() {
      console.log('addAll');
      var self = this;
      this.collection.each(function(list){ self.addOne(list); });
      console.log('addAll done');
    },
    resetAll: function(){
      console.log('resetAll');
      this.$(".mailing-lists").html('');
      this.addAll();
    },
    
    search: function(){
      console.log('search');
      this.collection.search(this.$('.searchfield')[0].value);
      //this.resetAll();
      console.log('search done');
      return false;
    },
    
    back: function(){
      this.tabs.panels.set('index');
    }
    
});

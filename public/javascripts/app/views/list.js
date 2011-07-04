App.Views.List = Backbone.View.extend({
    initialize: function(data) {
        this.id = 'main';
        this.template = new EJS({url: 'javascripts/app/templates/list.ejs'});
        this.model.bind('change', this.render);
        this.count = 0;
        this.tabs = data.tabs;
    },
    events: {    
      "click .note" : "note",
      "click .name" : "name",
      "click .close": "close"
    },
    
    note: function() {
      this.count++;
      this.$('.notice').html(this.count)
    },
    
    name: function() {
      this.tabs.panels.set(this.model.id);
    },
    
    close: function() {
      this.tabs.panels.close();
    },
    
    render: function() {
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
        return this
    }
});
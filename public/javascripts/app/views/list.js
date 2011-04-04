App.Views.List = Backbone.View.extend({
    initialize: function() {
        this.id = 'main';
        this.template = new EJS({url: 'javascripts/app/templates/list.ejs'})
        this.model.bind('change', this.render);
        this.count = 0;
    },
    events: {    
      "click .note" : "note"
    },
    
    note: function() {
      this.count++;
      this.$('.notice').html(this.count)
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
        return this
    }
});
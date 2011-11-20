var MailingList = Backbone.Model.extend({
  typeName: function(){
    return this.get('list_type').name
  }
});

// var MailingLists = Backbone.Collection.extend({
//   model: MailingList,
//   url: '/mailing_lists.json'
// });

var MailingLists = Backbone.Collection.extend({
  model: MailingList,
  url: '/mailing_lists.json',
  search: function(string){
    var url = this.url;
    this.url = this.url + '?search=' + string;
    this.fetch(); 
    this.url = url; 
  }
});

var mailingLists = new MailingLists;

// MailingLists.model = MailingList;
// MailingLists.url = '/mailing_lists.json';
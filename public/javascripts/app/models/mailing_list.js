var MailingList = Backbone.Model.extend({
});

// var MailingLists = Backbone.Collection.extend({
//   model: MailingList,
//   url: '/mailing_lists.json'
// });

var MailingLists = new Backbone.Collection;

MailingLists.model = MailingList;
MailingLists.url = '/mailing_lists.json';
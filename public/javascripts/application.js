// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var App = {
    Views: {},
    Controllers: {},
    init: function() {
        main_tabs = new Tab($('#main'));
        new App.Controllers.Main();
        Backbone.history.start();
        console.log('app init');
    }
};

$(function() {
        App.init();
});


var Tab = function(tabs){
  
  this.tabs = $(tabs);
  this.active_tab = this.tabs.find('.tab-active');
  //console.log('active tab is ',this.active_tab[0])  
    
  this.set = function(tab){
    //console.log('tab set '+tab);
    this.active_tab.removeClass('tab-active');
    this.active_tab = this.tabs.find('.tab-'+tab);
    this.active_tab.addClass('tab-active');
    //console.log('tab set '+tab+' done');
  };
  
  this.close = function(){
    this.active_tab.removeClass('tab-active');
    this.active_tab = this.tabs.find('.tab-active');
  }
};

var main_tabs;
NewsController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  },

  action: function() {
    this.render('News');
  }
});

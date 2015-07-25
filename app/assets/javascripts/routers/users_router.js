Farmer.Routers.Users = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "" : "landing"
  },

  landing: function () {
    var view = Air.Views.Landing({ collection: Farmer.users });
    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});

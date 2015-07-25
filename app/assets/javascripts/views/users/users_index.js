Farmer.Views.UsersIndex = Backbone.View.extend({

  template: JST['users/index'],

  events: {},

  initialize: function () {},

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }

});

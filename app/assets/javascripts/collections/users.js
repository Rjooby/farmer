Farmer.Collections.Users = Backbone.Collection.extend({

  url: "/api/locations",

  model: Farmer.Models.User,

  getOrFetch: function (id) {
    var use = Farmer.users.get(id);
    var uses = Farmer.users;
    if (!use) {
      use = new Farmer.Models.User({ id : id });
      use.fetch({
        success: function () {
          uses.add(use);
        }
      });
    } else {
      use.fetch();
    }
    return use;
  }

});

const bookshelf = require("../bookshelf");

const User = bookshelf.model("User", {
  tableName: "users",
  idea: function () {
    return this.hasMany("Idea");
  },
});

module.exports = User;

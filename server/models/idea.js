const bookshelf = require("../bookshelf");

const Idea = bookshelf.model("Idea", {
  tableName: "ideas",
  user: function () {
    return this.belongsTo("User");
  },
});

module.exports = Idea;

const knex = require("knex")(require("./knexfile").development);
const bookshelf = require("bookshelf")(knex);

module.exports = bookshelf;

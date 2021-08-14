exports.up = function (knex) {
  return knex.schema.createTable("ideas", function (table) {
    table.increments("id");
    table.string("idea").notNullable();
    table.integer("user_id").unsigned();
    table.string("description", 480).notNullable();
    table.timestamp("created_at");
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ideas").dropTable("users");
};

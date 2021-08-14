const userData = [
  {
    id: 1,
    user_name: "Katsu",
    password: "hello",
  },
  {
    id: 2,
    user_name: "Nathan",
    password: "hello",
  },
  {
    id: 3,
    user_name: "Stacy",
    password: "hello",
  },
];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("users").insert(userData);
    });
};

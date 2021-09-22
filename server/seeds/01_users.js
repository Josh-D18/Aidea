const bcrypt = require("bcryptjs");

const userData = [
  {
    id: 1,
    user_name: "Katsu",
    password: bcrypt.hash("hello", 8).then((hashPassword) => {
      return hashPassword.toString();
    }),
  },
  {
    id: 2,
    user_name: "Nathan",
    password: bcrypt.hash("hello", 8).then((hashPassword) => {
      return hashPassword.toString();
    }),
  },
  {
    id: 3,
    user_name: "Stacy",
    password: bcrypt.hash("hello", 8).then((hashPassword) => {
      return hashPassword.toString();
    }),
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

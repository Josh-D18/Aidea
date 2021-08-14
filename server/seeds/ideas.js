const ideasData = [
  {
    id: 1,
    idea: "bitcoin",
    description: "Lorem Ipusm adasdasdsdasdasdasdasdas",
    user_id: 1,
  },
  {
    id: 2,
    idea: "A social media for dogs",
    description: "Lorem ipsum dolor sit amet consectetur",
    user_id: 2,
  },
  {
    id: 3,
    idea: "A cookbook for lions",
    description: "Lorem ipsum dolor sit amet",
    user_id: 3,
  },
];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ideas")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("ideas").insert(ideasData);
    });
};

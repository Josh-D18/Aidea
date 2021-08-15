const express = require("express");
const path = require("path");

const ideasRouter = require("./routes/ideas");
const usersRouter = require("./routes/users");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
const PORT = 8080;

app.get("/", (req, res) => {
  res.redirect("/ideas");
});

app.use("/ideas", ideasRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log("Listening to", PORT);
});

const express = require("express");
const path = require("path");
const cors = require("cors");
const ideasRouter = require("./routes/ideas");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
const PORT = 8080;

app.get("/", (req, res) => {
  res.redirect("/ideas");
});

app.use(cors());

app.use("/ideas", ideasRouter);
app.use("/profile", usersRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

app.listen(PORT, () => {
  console.log("Listening to", PORT);
});

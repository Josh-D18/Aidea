const express = require("express");
const path = require("path");
const cors = require("cors");
const ideasRouter = require("./routes/ideas");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.set("PORT", process.env.PORT || 8080);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
}

if (process.env.NODE_ENV === "production") {
  // Handle React routing, return all requests to React app
  app.get("*", (request, response) => {
    response.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
app.get("/", (req, res) => {
  res.redirect("/ideas");
});

app.use(cors());

app.use("/ideas", ideasRouter);
app.use("/profile", usersRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

app.listen(app.get("PORT"), () => {
  console.log("Listening to" + app.get("PORT"));
});

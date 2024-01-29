require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection"); // Updated path to database connection
const session = require("express-session");
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); // make sure this directory exists

// Session middleware
const sessionStore = new SequelizeStore({
  db: sequelize,
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // true in production, false in development
      maxAge: 60 * 60 * 1000,
    },
    store: sessionStore,
  })
);

sessionStore.sync();

// Handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
const apiRoutes = require("./controllers/index");
const htmlRoutes = require("./controllers/htmlRoutes");

app.use("/", apiRoutes); // '/api' is the base URL for API routes
app.use("/", htmlRoutes); // '/' is the base URL for HTML routes

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

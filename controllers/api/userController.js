const router = require("express").Router();
const { User } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.loggedIn = true;
    req.session.save(() => {
      res.render("home");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    req.session.user_id = userData.id;
    req.session.logged_in = true;

    req.session
      .save()
      .then(() => {
        res.render("home", {
          logged_in: req.session.logged_in,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

// Update a user's information
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// Get all user
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

///////////////////////////////////////////////////////////////////////

// CREATE new user
//router.post('/', async (req, res) => {
//try {
//const dbUserData = await User.create({
//username: req.body.username,
//email: req.body.email,
//password: req.body.password,
//});

//req.session.save(() => {
// req.session.loggedIn = true;

//res.status(200).json(dbUserData);
//});
//} catch (err) {
//console.log(err);
//res.status(500).json(err);
//}
//});

// Login
//router.post('/login', async (req, res) => {
//try {
//const dbUserData = await User.findOne({
//where: {
//username: req.body.username,
//},
//});

//if (!dbUserData) {
//res
//.status(400)
//.json({ message: 'Incorrect username or password. Please try again!' });
//return;
// }

//const validPassword = await dbUserData.checkPassword(req.body.password);

//if (!validPassword) {
//res
//.status(400)
//.json({ message: 'Incorrect username or password. Please try again!' });
//return;
// }

//req.session.save(() => {
//req.session.loggedIn = true;
//console.log(
//'File: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
//req.session.cookie
//);

//res
//.status(200)
//.json({ user: dbUserData, message: 'You are now logged in!' });
//});
///} catch (err) {
//console.log(err);
//res.status(500).json(err);
// }
//});

// Logout
//router.post('/logout', (req, res) => {
//if (req.session.loggedIn) {
///req.session.destroy(() => {
// res.status(204).end();
//});
//} else {
//res.status(404).end();
// }
//});

//module.exports = router;

////////////////////////////////////////////////////////////////////////////

//const router = require("express").Router();
//const { User } = require("../../models");
//const bcrypt = require("bcrypt");

///fix login: function

// Create a new user
//router.post("/", async (req, res) => {
//try {
//const newUser = await User.create(req.body);
//res.status(201).json(newUser);
//} catch (error) {
//res.status(400).json(error);
//}
//});

// Authenticate a user
//login: async (req, res) => {
//  try {
//    const user = await User.findOne({
//      where: { username: req.body.username },
//    });
//    if (!user) {
//      return res.status(401).json({ message: "Login failed" });
//    }
//
//     const validPassword = await bcrypt.compare(
//      req.body.password,
//     user.password
//  );
//if (!validPassword) {
//return res.status(401).json({ message: "Login failed" });
//}

// If the password is valid, create a new session for the user
//req.session.user = {
//id: user.id,
// username: user.username,
//};

//res.json({ message: "Login successful", user: req.session.user });
//} catch (error) {
//res.status(500).json(error);
// }
//},

// Update a user's information
//router.put("/:id", async (req, res) => {
//try {
//const updatedUser = await User.update(req.body, {
//where: {
//id: req.params.id,
//},
//});
//res.json(updatedUser);
//} catch (error) {
//console.error(error);
//res.status(400).json(error);
//}
//});

// Delete a user
//router.delete("/:id", async (req, res) => {
//try {
//await User.destroy({
//where: {
//id: req.params.id,
//},
//});
//res.status(204).end();
//} catch (error) {
//console.error(error);
//res.status(400).json(error);
//}
//});

//module.exports = router;

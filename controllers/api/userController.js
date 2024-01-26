const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

///fix login: function

<<<<<<< HEAD
  // Get all user
  router.get("/", async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  });


  // Create a new user
  router.post("/", async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json(error);
    }
  });
=======
// Create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});
>>>>>>> 089ddf66a427cc2b3882c5ec9969ee64155c1cd6

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

// Delete a user
router.delete("/:id", async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router; //userController;
>>>>>>> 089ddf66a427cc2b3882c5ec9969ee64155c1cd6

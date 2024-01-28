const router = require("express").Router();
const { Userlist, List, Inventory } = require("../../models");

// Get all userlists
router.get("/", async (req, res) => {
  try {
    const userlists = await Userlist.findAll({ include: [List, Inventory] });
   res.json(userlists);
 } catch (error) {
   res.status(500).json(error);
 }
});

// Get a single userlist by its id
router.get("/:id", async (req, res) => {
  try {
    const userlist = await Userlist.findOne({
      where: { id: req.params.id },
      include: [List, Inventory],
    });
    if (!userlist) {
      return res.status(404).json({ message: "Userlist not found" });
    }
    res.json(userlist);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a new userlist
router.post("/", async (req, res) => {
  try {
    const newUserlist = await Userlist.create(req.body);
    res.status(201).json(newUserlist);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Update an existing userlist
router.put("/:id", async (req, res) => {
  try {
    const updatedUserlist = await Userlist.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(updatedUserlist);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete a userlist
router.delete("/:id", async (req, res) => {
  try {
    await Userlist.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router; 

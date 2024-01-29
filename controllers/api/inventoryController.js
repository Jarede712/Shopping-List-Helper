const router = require("express").Router();
const { Inventory, Categories } = require("../../models");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Get all items
router.get("/", isAuthenticated, async (req, res) => {
  try {
    const items = await Inventory.findAll({ include: Categories });
    res.json(items);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get a single item by its id
router.get("/:id", isAuthenticated, async (req, res) => {
  try {
    const item = await Inventory.findOne({
      where: { id: req.params.id },
      include: Categories,
    });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a new item
router.post("/", isAuthenticated, async (req, res) => {
  try {
    const newItem = await Inventory.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Update an existing item
router.put("/:id", isAuthenticated, async (req, res) => {
  try {
    const updatedItem = await Inventory.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete an item
router.delete("/:id", isAuthenticated, async (req, res) => {
  try {
    await Inventory.destroy({
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

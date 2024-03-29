const router = require("express").Router();
//const { User } = require('../../models');
const { Categories } = require("../../models");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Get all categories
router.get("/", isAuthenticated, async (req, res) => {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Get a single category by its id
router.get("/:id", isAuthenticated, async (req, res) => {
  try {
    const category = await Categories.findOne({
      where: { id: req.params.id },
    });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a new category
router.post("/", isAuthenticated, async (req, res) => {
  try {
    const newCategory = await Categories.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Update an existing category
router.put("/:id", isAuthenticated, async (req, res) => {
  try {
    const updatedCategory = await Categories.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete a category
router.delete("/:id", isAuthenticated, async (req, res) => {
  try {
    await Categories.destroy({
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

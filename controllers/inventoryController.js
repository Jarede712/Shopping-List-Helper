const { Inventory, Category } = require("../models");

const inventoryController = {
  // Get all items
  getAllItems: async (req, res) => {
    try {
      const items = await Inventory.findAll({ include: Category });
      res.json(items);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Get a single item by its id
  getItemById: async (req, res) => {
    try {
      const item = await Inventory.findOne({
        where: { id: req.params.id },
        include: Category,
      });
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Create a new item
  createItem: async (req, res) => {
    try {
      const newItem = await Inventory.create(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  // Update an existing item
  updateItem: async (req, res) => {
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
  },

  // Delete an item
  deleteItem: async (req, res) => {
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
  },
};

module.exports = inventoryController;

const { List, User } = require("../models");

const listController = {
  // Get all lists
  getAllLists: async (req, res) => {
    try {
      const lists = await List.findAll({ include: User });
      res.json(lists);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Get a single list by its id
  getListById: async (req, res) => {
    try {
      const list = await List.findOne({
        where: { list_id: req.params.id },
        include: User,
      });
      if (!list) {
        return res.status(404).json({ message: "List not found" });
      }
      res.json(list);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Create a new list
  createList: async (req, res) => {
    try {
      const newList = await List.create(req.body);
      res.status(201).json(newList);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  // Update an existing list
  updateList: async (req, res) => {
    try {
      const updatedList = await List.update(req.body, {
        where: {
          list_id: req.params.id,
        },
      });
      res.json(updatedList);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  // Delete a list
  deleteList: async (req, res) => {
    try {
      await List.destroy({
        where: {
          list_id: req.params.id,
        },
      });
      res.status(204).end();
    } catch (error) {
      res.status(400).json(error);
    }
  },
};

module.exports = listController;

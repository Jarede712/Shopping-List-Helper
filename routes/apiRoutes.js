const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const userlistController = require("../controllers/userlistController");
const categoriesController = require("../controllers/categoriesController");
const inventoryController = require("../controllers/inventoryController");
const listController = require("../controllers/listController");

// User routes
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

// Userlist routes
router.get("/userlists", userlistController.getAllUserlists);
router.get("/userlists/:id", userlistController.getUserlistById);
router.post("/userlists", userlistController.createUserlist);
router.put("/userlists/:id", userlistController.updateUserlist);
router.delete("/userlists/:id", userlistController.deleteUserlist);

// Categories routes
router.get("/categories", categoriesController.getAllCategories);
router.get("/categories/:id", categoriesController.getCategoryById);
router.post("/categories", categoriesController.createCategory);
router.put("/categories/:id", categoriesController.updateCategory);
router.delete("/categories/:id", categoriesController.deleteCategory);

// Inventory routes
router.get("/inventory", inventoryController.getAllInventory);
router.get("/inventory/:id", inventoryController.getInventoryById);
router.post("/inventory", inventoryController.createInventory);
router.put("/inventory/:id", inventoryController.updateInventory);
router.delete("/inventory/:id", inventoryController.deleteInventory);

// List routes
router.get("/lists", listController.getAllLists);
router.get("/lists/:id", listController.getListById);
router.post("/lists", listController.createList);
router.put("/lists/:id", listController.updateList);
router.delete("/lists/:id", listController.deleteList);

module.exports = router;

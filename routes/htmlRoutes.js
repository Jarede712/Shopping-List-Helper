const express = require("express");
const router = express.Router();

const viewController = require("../controllers/viewController");

// Home page route
router.get("/", viewController.getHomePage);

// User profile page route
router.get("/users/:id", viewController.getUserProfilePage);

// Userlist page route
router.get("/userlists/:id", viewController.getUserlistPage);

// Categories page route
router.get("/categories", viewController.getCategoriesPage);

// Inventory page route
router.get("/inventory", viewController.getInventoryPage);

// List page route
router.get("/lists/:id", viewController.getListPage);

module.exports = router;

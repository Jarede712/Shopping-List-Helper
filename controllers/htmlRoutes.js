const express = require("express");
const router = express.Router();

const viewController = require("../controllers/viewController");

// Home page route
router.get("/", viewController.getHomePage);
router.get("/home", viewController.getHomePage);

// User profile page route
//router.get("/users/:id", viewController.getUserProfilePage);
router.get("/login", viewController.getLoginPage);


// Userlist page route
//router.get("/userlists/:id", viewController.getUserlistPage);
router.get("/pantry", viewController.getPantryPage);

// Categories page route
//router.get("/categories", viewController.getCategoriesPage);
router.get("/profile", viewController.getProfilePage);


// Inventory page route
//router.get("/inventory", viewController.getInventoryPage);
router.get("/shoppingList", viewController.getShoppingListPage);



router.get("/categories", viewController.getCategoriesPage);

// List page route
//router.get("/lists/:id", viewController.getListPage);

module.exports = router;

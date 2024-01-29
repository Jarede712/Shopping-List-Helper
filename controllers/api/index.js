const router = require("express").Router();

const userController = require("./userController.js");
const userlistController = require("./userListController.js");
const categoriesController = require("./categoriesController.js");
const inventoryController = require("./inventoryController.js");
const listController = require("./listController.js");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.use("/users", userController);
router.use("/userlists", userlistController);
router.use("/categories", isAuthenticated, categoriesController);
router.use("/inventory", isAuthenticated, inventoryController);
router.use("/lists", isAuthenticated, listController);

module.exports = router;

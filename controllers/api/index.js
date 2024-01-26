const router = require('express').Router();
//const categoryRoutes = require('./category-routes');
//const inventoryRoutes = require('./product-routes');
//const listRoutes = require('./tag-routes');

const userController = require("./userController.js");
const userlistController = require("./userListController.js");
const categoriesController = require("./categoriesController.js");
const inventoryController = require("./inventoryController.js");
const listController = require("./listController.js");


router.use('/users', userController);
router.use('/userlists', userlistController);
router.use('/categories', categoriesController);
router.use('/inventory', inventoryController);
router.use('/lists', listController);


module.exports = router;
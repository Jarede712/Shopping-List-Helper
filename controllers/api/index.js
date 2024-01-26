const router = require('express').Router();
//const categoryRoutes = require('./category-routes');
//const inventoryRoutes = require('./product-routes');
//const listRoutes = require('./tag-routes');

const userlistController = require("../api/userListController");
const userController = require("../api/userController");
const categoriesController = require("../api/categoriesController");
const inventoryController = require("../api/inventoryController");
const listController = require("../api/listController");



router.use('/users', userController);
router.use('/userlists', userlistController);
router.use('/categories', categoriesController);
router.use('/inventory', inventoryController);
router.use('/lists', listController);




module.exports = router;
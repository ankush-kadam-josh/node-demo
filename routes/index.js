var express = require("express");
var router = express.Router();

//get different routes from in the app
var userRoutes = require("./Users");
var productRoutes = require("./Products");

//add different routes available in app
router.use("/users", userRoutes);
router.use("/products", productRoutes);

module.exports = router;

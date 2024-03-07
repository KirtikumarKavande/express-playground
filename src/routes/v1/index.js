const express = require("express");
let productRoute = require("./product/product");

const router = express.Router();

router.use("/v1", productRoute);

module.exports = router;

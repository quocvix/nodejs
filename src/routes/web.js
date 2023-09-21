const express = require("express");
const { getHomePage, demo } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/demo", demo);

module.exports = router;

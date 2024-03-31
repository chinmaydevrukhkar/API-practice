const express = require("express");
const { getAllPlants, getAllPlantsTesting } = require("../controllers/plants")
const router = express.Router();

router.route("/").get(getAllPlants);
router.route("/testing").get(getAllPlantsTesting); // for testing purposes only

module.exports = router;
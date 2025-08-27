const express = require("express");
const { getAllServices } = require("../controllers/admin-controller"); // only fetch logic

const router = express.Router();

// Public route to fetch all services
router.get("/service", getAllServices);

module.exports = router;

    
const router = require("express").Router();
const google = require("../../controllers/google");

// Matches with "/api/google"
router.route("/").get(google.findAll);

module.exports = router;


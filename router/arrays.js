const express = require("express");
const router = express.Router();

router.get("/", function (req, res) { 
    res.render("arrays.ejs")
 })

module.exports = router;
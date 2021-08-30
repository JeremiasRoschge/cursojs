const express = require("express");
const router = express.Router();

router.get("/", function (req, res) { 
    res.render("operadores.ejs")
 })

module.exports = router;
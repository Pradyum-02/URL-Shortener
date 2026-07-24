const express = require("express");

const router = express.Router();

const { shortenURL } = require("../controllers/url.controller");

router.post("/shorten", shortenURL);



module.exports = router;
const express = require("express");
const router =  express.Router();

const controller = require("../controller/post")



router.get("/", controller.postPage)


module.exports = router;
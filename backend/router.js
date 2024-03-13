const Router = require("express");
const router = new Router();
const controller = require("./controller");

router.post("/img", controller.getImg);

module.exports = router;

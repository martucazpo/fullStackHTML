const router = require("express").Router();
const controllers = require("../controllers");

router.route("/").post(controllers.createUser);
router.route("/locateuser/:_id").get(controllers.getUser);
router.route("/loginuser").post(controllers.loginUser)
router.route("/logoutuser").post(controllers.logoutUser)

module.exports = router;

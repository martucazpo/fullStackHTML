const router = require("express").Router()
const controllers = require("../controllers")

router.route("/")
.get(controllers.testList)
router.route("/test")
.post(controllers.testMakeTask)

module.exports = router
const router = require("express").Router()
const controllers = require("../controllers")

router.route("/")
.post(controllers.makeTask)
router.route("/retrieve/:_id")
.get(controllers.getList)

module.exports = router
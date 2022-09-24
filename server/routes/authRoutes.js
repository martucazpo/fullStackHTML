const router = require("express").Router()
const controllers = require("../controllers")

router.route("/test")
.get(controllers.testAuth)
.post(controllers.testCreateUser)


module.exports = router
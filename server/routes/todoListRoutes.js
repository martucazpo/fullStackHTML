const router = require("express").Router()
const controllers = require("../controllers")

router.route("/")
.post(controllers.makeTask)
router.route("/retrieve/:_id")
.get(controllers.getList)
router.route("/deletetask")
.post(controllers.deleteTask)
router.route("/updatetask")
.post(controllers.updateTask)

module.exports = router
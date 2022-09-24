const router = require("express").Router()
const authRoutes = require("./authRoutes")
const todoListRoutes = require("./todoListRoutes")

router.use("/auth", authRoutes)
router.use("/list", todoListRoutes)

module.exports = router
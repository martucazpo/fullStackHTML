const todoListControllers = require("./todoListControllers")
const authControllers = require("./authControllers")

module.exports = {
    getList : todoListControllers.findUserList,
    getUser : authControllers.authUser,
    createUser: authControllers.createUser,
    makeTask: todoListControllers.makeTask,
    deleteTask: todoListControllers.deleteTask,
    updateTask: todoListControllers.editTask,
    loginUser: authControllers.loginUser,
    logoutUser: authControllers.logoutUser
}
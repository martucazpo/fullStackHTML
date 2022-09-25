const todoListControllers = require("./todoListControllers")
const authControllers = require("./authControllers")

module.exports = {
    getList : todoListControllers.findUserList,
    testAuth : authControllers.sayHello,
    testCreateUser: authControllers.testCreateUser,
    makeTask: todoListControllers.makeTask,
}
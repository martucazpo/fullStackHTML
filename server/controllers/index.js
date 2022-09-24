const todoListControllers = require("./todoListControllers")
const authControllers = require("./authControllers")

module.exports = {
    testList : todoListControllers.sayHi,
    testAuth : authControllers.sayHello,
    testCreateUser: authControllers.testCreateUser,
    testMakeTask: todoListControllers.makeTestTask,
}
class Base {
  constructor(propsObj) {
    this.state = {};
    this.props = {};
    this.propsObj = propsObj;
    this.div = document.createElement("div");
  }
}
Base.prototype.setState = function (...args) {
  if (typeof args[0] === "object") {
    let newState = args[0];
    let prevState = this.state;
    return (this.state = Object.assign({}, prevState, newState));
  } else if (typeof args[0] === "function") {
    return (function (condition) {
      let newState = args[0](condition);
      return this.setState(newState);
    }).bind(this)(this.state);
  } else {
    console.error("State must be a type Object or a function");
    return this;
  }
};

export default Base;

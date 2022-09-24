class Base {
  constructor(propsObj) {
    this.state = {};
    this.props = {};
    this.propsObj = propsObj;
    this.div = document.createElement("div");
    this.setStateToProps();
  }
}
Base.prototype.consolidateProps = function (newProps = {}) {
  this.props = Object.assign(this.props, this.propsObj, newProps);
  return this.props;
};
Base.prototype.setStateToProps = function (state) {
  this.props = Object.assign(consolidateProps(state));
  return this.props;
};
Base.prototype.setState = function (...args) {
  if (typeof args[0] === "object") {
    let newState = args[0];
    let prevState = state;
    state = Object.assign({}, prevState, newState);
    this.setStateToProps({ state });
    return state;
  } else if (typeof args[0] === "function") {
    return (function (condition) {
      let newState = args[0](condition);
      return this.setState(newState);
    })(this.state);
  } else {
    console.error("State must be a type Object or a function");
    return this;
  }
};
Base.prototype.anchorToDOM = function (elem, root) {
  root.innerHTML = "";
  let div = document.createElement("div");
  div.appendChild(elem);
  root.append(div);
  return this;
};
Base.prototype.anchorToElement = function (elem, hostElem) {
  hostElem.append(elem);
  return this;
};

export default Base;

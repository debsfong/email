class Router {
  constructor(node) {
    this.node = node;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  render() {
    this.node.innerHTML = "";
    let route = this.activeRoute();
    let newNode = document.createElement("p");
    newNode.innerHTML = route;
    this.node.appendChild(newNode);
  }

  activeRoute() {
    return window.location.hash.slice(1);
  }

}

module.exports = Router;

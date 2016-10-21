const Router = require("./router.js");

document.addEventListener('DOMContentLoaded', function(readyEvent){
  let router = new Router(document.querySelector(".content"));
  router.start();

  $(".sidebar-nav").on('click', "li", function(clickEvent) {
    let target = clickEvent.target;
    window.location.hash = target.innerText.toLowerCase();
  });
});

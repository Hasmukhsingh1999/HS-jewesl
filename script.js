
var block = document.querySelector(".block");
var menu = document.querySelector("#menu");
menu.addEventListener("click", function (e) {
  e.preventDefault();
  block.style.display = "initial";
  block.style.gap = "4vw";
});

document.addEventListener("click", (event) => {
  if (!block.contains(event.target) && event.target !== menu) {
    block.style.display = "none";
  }
});



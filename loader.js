// window.onload = function () {
//   document.querySelector(".loader").style.display = "none";
//   document.querySelector(".main").style.display = "block";
// };

function navLinks() {
  var contact = document.querySelectorAll("#collection");
  var about = document.querySelectorAll("#about");
  var blog = document.querySelectorAll("#blog");

  contact.forEach(function (elem) {
    elem.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(".loader").style.display = "initial";
      setTimeout(() => {
        window.location.href = "/collections.html";
      }, 1000);
    });
  });

  about.forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(".loader").style.display = "initial";
      setTimeout(() => {
        window.location.href = "/about.html";
      }, 1000);
    });
  });
  blog.forEach(function (e) {
    e.addEventListener("click",function(resp){
        resp.preventDefault();
        document.querySelector(".loader").style.display = "initial";
        setTimeout(() => {
          window.location.href = "/blog.html";
        }, 1000);
    })
  });
}
navLinks();

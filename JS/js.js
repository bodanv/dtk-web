// Global variables

var navbar = document.getElementById("topnav");
var banner1 = document.getElementById("banner1");
var banner2 = document.getElementById("banner2");

// Responsive navigation bar

function responsiveTopnav() {
  if (navbar.classList.contains("responsive-nav")) {
    navbar.classList.remove("responsive-nav");
    navbar.classList.add("shrink");
  } else {
    navbar.classList.add("responsive-nav");
    navbar.classList.remove("shrink");
  }
}

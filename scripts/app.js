function mobileNav() {
  if (document.getElementById("mobile-navigation").style.display == "flex") {
    document.getElementById("mobile-navigation").style.display = "none";
  } else {
    document.getElementById("mobile-navigation").style.display = "flex";
  }
}

function mobileNavClose() {
  document.getElementById("mobile-navigation").style.display = "none";
}

document.getElementById("mobile-navigation-toggle").addEventListener("click", mobileNav);
document.getElementById("mobile-navigation-close").addEventListener("click", mobileNavClose);

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

function modalClose() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
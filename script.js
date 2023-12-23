function openMenu() {
  var nav = document.getElementById("nav");
  var openButton = document.getElementById("open");
  var closeButton = document.getElementById("close");

  // Display the navigation menu
  nav.style.transform = "translateX(0)";
  openButton.style.display = "none";
  closeButton.style.display = "block";
}

function closeMenu() {
  var nav = document.getElementById("nav");
  var openButton = document.getElementById("open");
  var closeButton = document.getElementById("close");

  // Hide the navigation menu
  nav.style.transform = "translateX(100%)";
  openButton.style.display = "block";
  closeButton.style.display = "none";
}

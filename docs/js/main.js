// This initialization requires that this script is loaded with `defer`
const navElement = document.querySelector('#navbar');

// Navigation element modification through scrolling
function scrollFunction() {
  if (document.documentElement.scrollTop > 0) {
    navElement.classList.add("nav-scroll");
  } else {
    navElement.classList.remove("nav-scroll");
  }
}

// Init call
function loadEvent() {
  document.addEventListener("scroll", scrollFunction);
}

// Attach the functions to each event they are interested in
window.addEventListener("load", loadEvent);
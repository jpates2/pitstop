const navMenuButton = document.querySelector(".nav-menu__button");
const navMenuContainer = document.querySelector(".burger__menu--container");
const navMenu = document.querySelector('.burger__menu');
const navMenuCloseButton = document.querySelector(".burger__menu--close");
const homeSection = document.querySelector("#home--section");
const navLogo = document.querySelector(".nav-logo");

navMenuButton.addEventListener("click", function() {
  console.log("test");
  navMenuContainer.classList.add("open");
})

navMenuCloseButton.addEventListener("click", function() {
  navMenuContainer.classList.remove("open");
})

// Navbar links
navMenu.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('burger__menu--item')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
  navMenuContainer.classList.remove("open");
});

navLogo.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("logo test");
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

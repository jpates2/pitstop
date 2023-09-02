const navMenuButton = document.querySelector(".nav-menu__button");
const navMenuContainer = document.querySelector(".burger__menu--container");
const navMenuCloseButton = document.querySelector(".burger__menu--close");

navMenuButton.addEventListener("click", function() {
  navMenuContainer.classList.add("open");
  // navMenuContainer.style.display = "block";
  // navMenuContainer.classList.remove("hidden");
})

navMenuCloseButton.addEventListener("click", function() {
  // navMenuContainer.style.display = "none";
  navMenuContainer.classList.remove("open");

  // navMenuContainer.classList.remove("hidden");
})

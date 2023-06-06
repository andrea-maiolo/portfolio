window.onload = function () {
  let h3Element = document.querySelector("#name");
  h3Element.addEventListener("click", function () {
    window.scrollTo({
      top: -100,
    });
  });
};

const mobileNav = document.querySelector(".mobile-nav");
const closeIcon = document.querySelector(".closeIcon");
const burgerIcon = document.querySelector(".burgerIcon");
burgerIcon.addEventListener("click", showMenu);

closeIcon.addEventListener("click", showMenu);

const linksInMobileNav = document.querySelectorAll(".linkForSection");
linksInMobileNav.forEach((link) => link.addEventListener("click", showMenu));

function showMenu() {
  mobileNav.classList.toggle("closed-menu");
  closeIcon.classList.toggle("closed-menu");
}

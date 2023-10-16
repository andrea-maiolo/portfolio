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

let textInEng = document.getElementsByClassName("textInEng");
let textInIta = document.getElementsByClassName("textInIta");
let buttonSwitch = document.querySelector("#langButton");

buttonSwitch.addEventListener("click", changeLang);

function changeLang(e) {
  [...textInEng].forEach(function (element) {
    element.classList.toggle("onDisplay");
    element.classList.toggle("hidden");
  });

  [...textInIta].forEach(function (ele) {
    ele.classList.toggle("hidden");
    ele.classList.toggle("onDisplay");
  });
}

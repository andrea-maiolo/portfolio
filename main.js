let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

//to make page go up on clikc of my name
window.onload = function () {
  // Find the <h3> element
  var h3Element = document.querySelector("h3");

  // Attach a click event listener to the <h3> element
  h3Element.addEventListener("click", function () {
    // Scroll the page to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optionally, you can make it scroll smoothly
    });
  });
};

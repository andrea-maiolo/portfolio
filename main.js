window.onload = function () {
  let h3Element = document.querySelector("#name");
  h3Element.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
    });
  });
};

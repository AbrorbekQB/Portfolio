(function() {
  let elHumburgerBtn = document.querySelector(".hamburger__btn");
  let elNavbarMenu = document.querySelector(".navbar__menu");

  function menuToggle(evt) {
    elNavbarMenu.classList.toggle("d-block");
  };
  elHumburgerBtn.addEventListener("click", menuToggle);

  document.addEventListener("click", (evt)=> {
    if(!evt.target.matches(".hamburger__btn") && elNavbarMenu.classList.contains("d-block")) {
      menuToggle();
    };
  })
}());
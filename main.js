let buttonShare = document.querySelector(".card__content__button");
let socialMediaIcons = document.querySelector(".card__content__social-icons");

buttonShare.addEventListener("click", () => {
  // console.log("Se hizo click");
  socialMediaIcons.classList.toggle("show");
  buttonShare.classList.toggle("animation");
});
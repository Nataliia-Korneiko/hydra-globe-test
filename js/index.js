"use strict";
const buttonBurger = document.querySelector(".navigation__button-burger");
const buttonClose = document.querySelector(".navigation__button-close");
const navigationList = document.querySelector(".navigation__list");
const linkCoats = document.querySelector(".header__link-coats");
const linkBrands = document.querySelector(".header__link-brands");

const handleShow = () => {
  navigationList.classList.add("navigation__list-show");
  buttonClose.classList.add("navigation__button-close-show");
  linkCoats.classList.add("header__link-coat-show");
  linkBrands.classList.add("header__link-brands-show");
};

const handleClose = () => {
  navigationList.classList.remove("navigation__list-show");
  buttonClose.classList.remove("navigation__button-close-show");
  linkCoats.classList.remove("header__link-coat-show");
  linkBrands.classList.remove("header__link-brands-show");
};

buttonBurger.addEventListener("click", handleShow);
buttonClose.addEventListener("click", handleClose);

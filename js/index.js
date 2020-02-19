"use strict";
const buttonBurger = document.querySelector(".navigation__button-burger");
const buttonClose = document.querySelector(".navigation__button-close");
const navigationList = document.querySelector(".navigation__list");

const handleShow = () => {
  navigationList.classList.add("navigation__list-show");
  buttonClose.classList.add("navigation__button-close-show");
};

const handleClose = () => {
  navigationList.classList.remove("navigation__list-show");
  buttonClose.classList.remove("navigation__button-close-show");
};

buttonBurger.addEventListener("click", handleShow);
buttonClose.addEventListener("click", handleClose);

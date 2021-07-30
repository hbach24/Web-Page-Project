"use strict";

const btnPlaces = document.querySelector(".btn-places");
const places = document.querySelector(".places");

const btnFood = document.querySelector(".btn-food");
const food = document.querySelector(".food");

const photos = document.querySelector(".photos");

const bucket = document.querySelector(".modal-box");
const blur = document.querySelector(".blur");
const btnAll = document.querySelectorAll(".btn");

const btnClose = document.querySelector(".btn-close");

let currentTab;

const view = function (e) {
  currentTab = e.target.dataset.id;
  if (currentTab === "places") {
    places.classList.remove("hide");
    food.classList.add("hide");
    photos.classList.add("hide");
    bucket.classList.add("hide");
  } else if (currentTab === "food") {
    food.classList.remove("hide");
    places.classList.add("hide");
    photos.classList.add("hide");
    bucket.classList.add("hide");
  } else if (currentTab === "photos") {
    photos.classList.remove("hide");
    places.classList.add("hide");
    food.classList.add("hide");
    bucket.classList.add("hide");
  } else if (currentTab === "bucket") {
    bucket.classList.remove("hide");
    photos.classList.add("hide");
    places.classList.add("hide");
    food.classList.add("hide");
  }
};

const viewModal = function (e) {
  console.log("click");

  bucket.classList.remove("hide");
  blur.classList.remove("hide");
};

function closeModal() {
  bucket.classList.add("hide");
  blur.classList.add("hide");
}

for (let i = 0; i < btnAll.length; i++) {
  btnAll[i].addEventListener("click", view);
}

btnAll[3].addEventListener("click", viewModal);

btnClose.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

blur.addEventListener("click", closeModal);
// console.log(btnAll);
// btnPlaces.addEventListener("click", view);
// btnFood.addEventListener("click", view);

"use strict";

const purpleFish = document.querySelector(".purple-fish");

document.addEventListener("DOMContentLoaded", () => {
  const vidensButton = document.querySelector(".videns-akvarie");

  vidensButton.addEventListener("click", () => {
    window.location.href = "index-akvarie.html";
  });

});

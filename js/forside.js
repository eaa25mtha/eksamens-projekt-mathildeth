"use strict";

const purpleFish = document.querySelector(".purple-fish");

document.addEventListener("DOMContentLoaded", () => {
  const vidensButton = document.querySelector(".videns-akvarie-btn");

  vidensButton.addEventListener("click", () => {
    window.location.href = "akvarie.html";
  });

});

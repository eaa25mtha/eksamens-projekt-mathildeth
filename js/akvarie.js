"use strict";

//DOM CONTENT LOAD 
document.addEventListener("DOMContentLoaded", () => {


 /*---------------------------------
 HENT FISKENE FRA HTML MED DOM
 -----------------------------------*/
  const klovnfisk = document.querySelector(".klovnfisk");
  const laks = document.querySelector(".laks");
  const pinkFisk = document.querySelector(".pink-fisk");
  const blueFisk = document.querySelector(".blue-fisk");
  const lillaFisk = document.querySelector(".lilla-fisk");
  const miniKlovnfisk = document.querySelector(".mini-klovnfisk");


 /*-------------------------
 AUDIO OBJEKTER TIL FISKENE
 ---------------------------*/
  const soundKlovnfisk = new Audio();
  soundKlovnfisk.src = "audio/klovnfisk.mp3";

  const soundLaks = new Audio();
  soundLaks.src = "audio/bobler.mp3";

  const soundPinkFisk = new Audio();
  soundPinkFisk.src = "audio/cykel.mp3";

  const soundBlueFisk = new Audio();
  soundBlueFisk.src = "audio/bobler.mp3";

  const soundLillaFisk = new Audio();
  soundLillaFisk.src = "audio/bobler.mp3";

  const soundMiniKlovnfisk = new Audio();
  soundMiniKlovnfisk.src = "audio/bobler.mp3";



 /*--------------------------------
 EVENTLISTENERS PÅ AUDIO OBJEKTERNE
 ----------------------------------*/
  if (klovnfisk) {
    klovnfisk.addEventListener("click", () => {
      soundKlovnfisk.play();
    });
  }


  if (laks) {
    laks.addEventListener("click", () => {
      soundLaks.play();
    });
  }


  if (pinkFisk) {
    pinkFisk.addEventListener("click", () => {
      soundPinkFisk.play();
    });
  }


  if (blueFisk) {
    blueFisk.addEventListener("click", () => {
      soundBlueFisk.play();
    });
  }


  if (lillaFisk) {
    lillaFisk.addEventListener("click", () => {
      soundLillaFisk.play();
    });
  }

 
  if (miniKlovnfisk) {
    miniKlovnfisk.addEventListener("click", () => {
      soundMiniKlovnfisk.play();
    });
  }


 /*--------------------
 TILBAGE KNAP EVENT
 ---------------------*/   
  const tilbageBtn = document.querySelector(".tilbagebtn");

  if(tilbageBtn) {
    tilbageBtn.addEventListener("click", () => {
        window.location.href = "index.html"
    });
  }


 /*-----------------------------------------------------
 CYKEL DRAG AND DROP + DRAGOVER EVENT PÅ SKRALDESPANDEN
 -------------------------------------------------------*/
 




}); //DOM content loaded, slut

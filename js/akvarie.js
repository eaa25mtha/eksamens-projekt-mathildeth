"use strict";

/*------------------------------------
DATA OBJEKT, ARRAY TIL FISKENE
--------------------------------------*/
const fiskInfo = [
  {className: "klovnfisk", farve: "orange", alder: 5 },

  {className: "mini-klovnfisk", farve: "orange", alder: 1 },

  {className: "laks", farve: "lyserød", alder: 2 },

  {className: "blue-fisk", farve: "blå", alder: 1 },

  {className: "lilla-fisk", farve: "lilla", alder: 7 },

  {className: "stribet-fisk", farve: "blå og lyserød", alder: "10"},
];


/*---------------------------------------
DOM CONTENT LOAD OG VIDENSBOKS VARIABEL
-----------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const vidensboks = document.getElementById("vidensboks");


/*-----------------------------
VIDENSBOKS FUNKTION
-------------------------------*/
  function showVidensboks(html) {
    if (vidensboks) {
      vidensboks.innerHTML = html; //indsætter teksten fra objekterne i html

      vidensboks.classList.add("is-visible"); //gør boksen synlig med css

      setTimeout(function () {
        vidensboks.classList.remove("is-visible"); //bestemmer hvor længe boksen skal være synlig
      }, 3000);
    }
  }

  
/*------------------
FOR EACH FUNKTION
--------------------*/
  /*
  fiskInfo.forEach((fisk) => {
    //tager fat i alt der har med fiskene at gøre i html'en og loop'er det
    document.querySelectorAll("." + fisk.className).forEach((elem) => {
      elem.addEventListener("click", () => {
        const fiskDetails = `
            <strong> ${fisk.className}</strong> <br>
            farve: ${fisk.farve}<br>
            alder: ${fisk.alder}<br>
            `;

        showVidensboks(fiskDetails); //funktionen showVidensboks bliver kaldt, med variablen fiskDetails (med html) i
      });
    });
  });
  */



 /*---------------------------------
 HENT FISKENE FRA HTML MED DOM
 -----------------------------------*/
  //henter alle fiskene der skal bruges fra html ved at kalde en const variabel
  const klovnfisk = document.querySelector(".klovnfisk");
  const laks = document.querySelector(".laks");
  const stribetFisk = document.querySelector(".stribet-fisk");
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

  const soundStribetFisk = new Audio();
  soundStribetFisk.src = "audio/cykel.mp3";

  const soundBlueFisk = new Audio();
  soundBlueFisk.src = "audio/bobler.mp3";

  const soundLillaFisk = new Audio();
  soundLillaFisk.src = "audio/bobler.mp3";

  const soundMiniKlovnfisk = new Audio();
  soundMiniKlovnfisk.src = "audio/bobler.mp3";



 /*--------------------------------
 EVENTLISTENERS PÅ AUDIO OBJEKTERNE
 ----------------------------------*/
  //klovnfisken
  if (klovnfisk) {
    klovnfisk.addEventListener("click", () => {
      soundKlovnfisk.play();
    });
  }

  //laksen
  if (laks) {
    laks.addEventListener("click", () => {
      soundLaks.play();
    });
  }

  //den stribede lilla stribede fisk
  if (stribetFisk) {
    stribetFisk.addEventListener("click", () => {
      soundStribetFisk.play();
    });
  }

  //den blå og gule fisk
  if (blueFisk) {
    blueFisk.addEventListener("click", () => {
      soundBlueFisk.play();
    });
  }

  //den lilla fisk
  if (lillaFisk) {
    lillaFisk.addEventListener("click", () => {
      soundLillaFisk.play();
    });
  }

  //mini klovnfisken
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


 /*-------------------
 CYKEL DRAG AND DROP
 ---------------------*/
 /*const cykel = document.querySelector(".cykel");
 
 cykel.addEventListener("dragstart", () => {
    draggedCykel = cykel;
  });
  
 cykel.draggable = true;*/






}); //DOM content loaded, slut


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


/*-----------------------------
VIDENSBOKS FUNKTION
-------------------------------*/
const vidensboks = document.getElementById("vidensboks");

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



  
/*-------------------
DRAG AND DROP CYKEL 
---------------------*/
let draggedCykel = null; 
 const cykel = document.querySelector(".cykel");
 const skraldespand = document.querySelector(".skraldespand");

 //event handlers til skraldespanden
  skraldespand.addEventListener("dragenter", onSkraldespandDragOver);
  skraldespand.addEventListener("dragover", onSkraldespandDragOver);
  skraldespand.addEventListener("dragleave", onSkraldespandDragLeave);
  skraldespand.addEventListener("dragend", onSkraldespandDragLeave);
 

 //det er sandt at cyklen kan dragges
 cykel.setAttribute("draggable", "true");


 //hvis elementet eksisterer, skal det animners og fjernes
 if(draggedCykel) removeCykelWithFade(draggedCykel);

 
 //når drag startes
 cykel.addEventListener("dragstart", event => {
    draggedCykel = cykel;
    cykel.classList.add("dragging");
 });


 //når drag sluttes 
 cykel.addEventListener("dragend", () => {
  cykel.classList.remove("dragging");
  draggedCykel = null;
 });


 //tillad drop på skraldespanden og tilføj visuel feedback
 function onSkraldespandDragOver(event) {
    event.preventDefault();                
    skraldespand.classList.add("over");
 }


 function onSkraldespandDragLeave() {
  skraldespand.classList.remove("over");
 }


 //når man dropper fjernes cyklen
 skraldespand.addEventListener("drop", event => {
  event.preventDefault();
  skraldespand.classList.remove("over");


 //ryd op i referencen som det sidste
 draggedCykel = null; 
 });




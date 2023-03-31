const  menuBtn = document.getElementById("menuBtn");
const aside = document.querySelector("aside"); //Las dos formas son iguales. diferente tipo. Una va a al selkector y la otra al atributo

menuBtn.addEventListener("click", function() {
    aside.classList.toggle("active");
})


const parallaxBackground = document.getElementById("panelGłówny");
var tekstIkon = document.querySelectorAll(".tekst-ikon");
//var ikona = document.querySelectorAll(".ikona");
var rozwinRegulamin = document.getElementById("rozwin");
var ostatniH1 = document.getElementById("ostatni-nagłówek-h1");

var regulaminWidoczny = false;
//parallax to nazwa efektu, w którym tło porusza się gdy scrollujemy

window.addEventListener("scroll", function(){
    let offsetY = window.pageYOffset;
    let offsetX = window.pageXOffset;
    //console.log("OffSet "+ offset);//log do testow by sprawdzic ile pixeli musze wpisac do funkcji powyzej
    //console.log("OffSet * 0.5 "+ offset * 0.7);//chemy uzyskac w ten sposob efekt takiego opuznionego parralaxowego scrollowania w dół. Osiągniemy wówczas takie fajne opóźnienie 

    parallaxBackground.style.backgroundPositionY = offsetY * 0.5 + "px";//ta linia tworzy nam efekt parallaxu

})

rozwinRegulamin.addEventListener("click", function zmienNapis(){
    
    if(regulaminWidoczny){
        regulaminWidoczny = false;
        rozwinRegulamin.innerHTML = "Kliknij by rozwinąć regulamin";
   
    }else{
        
        rozwinRegulamin.innerHTML = "Kliknij by schować regulamin";
        regulaminWidoczny = true;
    }
});

const TextOstatniegoH1 = "Masz pytania?";
const TextInfoH4 = "Nowoczesny klub, stworzony z myślą o najbardziej wymagających klientach, spragnionych rozrywki na wysokim poziomie";
const TextInfoH42 = "Znajdziesz nas w Wałbrzychu na ulicy Andersa 30".split();
function złoteLitery(){
    for(let i = 0; i < TextOstatniegoH1.length; i++){
        ostatniH1.innerHTML += `<span class = "złota-litera">${TextOstatniegoH1[i]}</span>`;
        
    }
    for(let i = 0; i < TextInfoH4.length; i++){
        document.getElementById("info-h4").innerHTML += `<span class = "złota-litera">${TextInfoH4[i]}</span>`
    }
    for(let i = 0; i < TextInfoH42.length; i++){
        document.getElementById("info-h4-2").innerHTML += `<span class = "złota-litera">${TextInfoH42[i]}</span>`;
    }
}
złoteLitery();


const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
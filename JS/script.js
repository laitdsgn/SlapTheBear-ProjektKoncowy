let dziury = document.querySelectorAll('.hole')
let misie = document.querySelectorAll('.bear')
let punkty = document.getElementById('points')
let punktywartosc = 0
let czashtml = document.getElementById('timeleft')
let czas = 15 // początkowy czas jaki gracz otrzymuje. (Za każde trafienie dostaje 2 sekundy a za pudło -4)
let czasanimacji = 600
let klikniecia = 0
let minuty = Math.floor(czas / 60);
let sekundy = czas % 60;
let hammer = document.getElementById("hammer")
let interval = 1200



document.addEventListener('mousemove', hammerposition)
document.addEventListener('mousedown', hammerrotate)
document.addEventListener('mouseup', hammerderotate)

function hammerposition(e) {

    let x = e.pageX
    let y = e.pageY
    hammer.style.top = y + -25 + "px";
    hammer.style.left = x + -30 + "px";
    
}


function hammerrotate() {
    hammer.style.animation = "uderzenie 0.1s 2 alternate"

}

function hammerderotate() {
    hammer.style.animation = "none"
}






function startgry() {

    document.getElementById("game").style.filter = "blur(0px)"
    document.getElementById("start_button").style.visibility = "hidden"



const misierandom = setInterval(() => {


    const x = Math.floor(Math.random() * (dziury.length));
    const losowymis = misie[x]
        // dodawanie animacji wyskakiwania 
    losowymis.classList.add('wyskakiwanie')

    // usuwanie animacji wyskakiwania
    setTimeout(() => {
        losowymis.classList.remove('wyskakiwanie'); 
    }, interval - 100);



}, interval);




const minutnik = setInterval(() => {

    czas--;

    let minuty = Math.floor(czas / 60);
    let sekundy = czas % 60;

    // dodajemy 0 jeżeli minuty są mniejsze od 10
    if (minuty < 10 && minuty >= 0) {
        minuty = "0" + minuty;
      }

    // dodajemy 0 jeżeli sekundy są mniejsze od 10
      if (sekundy < 10 && sekundy >= 0) {
        sekundy = "0" + sekundy;
      }

    czashtml.innerText = minuty + ":" + sekundy

    if (czas < 0) {
        clearInterval(minutnik)
        clearInterval(misierandom)
        document.getElementById("przegrana").innerHTML = `<h1 id="przegrana">Twój czas się skończył! <br> Twój wynik: ${punktywartosc} </h1>`;
        document.getElementById("endingscreen").style.display = "block"
        document.getElementById("game").style.display = "none"
        czashtml.innerText = "0"
        punkty.innerText = "0"
    }


}, 1000);


    misie.forEach(mis => mis.addEventListener('click', function() {
        punktywartosc += 20 // 10 punktów za trafienie (20 - 10 = 10)
        punkty.innerText = punktywartosc 
        czas += 6 

        klikniecia++; 

        if (klikniecia % 5 === 0) {  // co piate kliknięcie animation-duration zmniejszamy o 10 ms
            czasanimacji -= 10; 
            interval -= 10
            console.log(interval);
        }
    
        mis.style.animationDuration = czasanimacji + "ms"

    }));


    dziury.forEach(dziura => dziura.addEventListener('click', function() {
        punktywartosc -= 10  
        punkty.innerText = punktywartosc
        czas -= 3

        if (punktywartosc < 0) {
            clearInterval(minutnik)
            clearInterval(misierandom)
            document.getElementById("przegrana").innerHTML = `<h1 id="przegrana">Twoje punkty się skończyły! <br> Twój wynik: ${punktywartosc + 10}</h1>`
            document.getElementById("endingscreen").style.display = "block"
            document.getElementById("game").style.display = "none"
            punkty.innerText = "0"
            czashtml.innerText = "0"
        }

    }));


    

};





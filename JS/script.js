let dziury = document.querySelectorAll('.hole')
let misie = document.querySelectorAll('.bear')
let punkty = document.getElementById('points')
let punktywartosc = 0
let czashtml = document.getElementById('timeleft')
let czas = 30 // początkowy czas jaki gracz otrzymuje. (Za każde trafienie dostaje 2 sekundy a za pudło -3)


const startbutton = document.getElementById('start_button')



startbutton.addEventListener('click', function() {

    document.getElementById("game").style.filter = "blur(0px)"
    document.getElementById("start_button").style.visibility = "hidden"




const misierandom = setInterval(() => {

    // dodawanie animacji wyskakiwania 
    const x = Math.floor(Math.random() * (dziury.length));
    const losowymis = misie[x]
    losowymis.classList.add('wyskakiwanie')

    // usuwanie animacji wyskakiwania
    setTimeout(() => {
        losowymis.classList.remove('wyskakiwanie'); 
    }, 950);





}, 1000);



const minutnik = setInterval(() => {

    czas--;

    let minuty = Math.floor(czas / 60);
    let sekundy = czas % 60;

    // dodajemy 0 jeżeli minuty są mniejsze od 10
    if (minuty < 10) {
        minuty = "0" + minuty;
      }

    // dodajemy 0 jeżeli sekundy są mniejsze od 10
      if (sekundy < 10) {
        sekundy = "0" + sekundy;
      }

    czashtml.innerText = minuty + ":" + sekundy




}, 1000);




    misie.forEach(mis => mis.addEventListener('click', function() {
        punktywartosc += 20 // 10 punktów za trafienie (20 - 10 = 10)
        punkty.innerText = punktywartosc 
        czas += 6 
    }));

    dziury.forEach(dziura => dziura.addEventListener('click', function() {
        punktywartosc += -10  
        punkty.innerText = punktywartosc
        czas += -3
    }));

});









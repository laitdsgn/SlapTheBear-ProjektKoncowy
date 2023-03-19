let dziury = document.querySelectorAll('.hole')
let misie = document.querySelectorAll('.bear')
let punkty = document.getElementById('points')
let punktywartosc = 0

const startbutton = document.getElementById('start_button')



startbutton.addEventListener('click', function() {

    document.getElementById("game").style.filter = "blur(0px)"
    document.getElementById("start_button").style.visibility = "hidden"




setInterval(() => {

    // dodawanie animacji wyskakiwania 
    const x = Math.floor(Math.random() * (dziury.length));
    const losowymis = misie[x]
    losowymis.classList.add('wyskakiwanie')

    // usuwanie animacji wyskakiwania
    setTimeout(() => {
        losowymis.classList.remove('wyskakiwanie'); 
    }, 850);


}, 900);



    misie.forEach(mis => mis.addEventListener('click', function() {
        punktywartosc +=  10;
        punkty.innerText = punktywartosc;
    }));


});




  




























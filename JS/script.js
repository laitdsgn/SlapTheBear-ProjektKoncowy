let dziury = document.querySelectorAll('.hole')
let misie = document.querySelectorAll('.bear')
let punkty = 0

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
    }, 750);


}, 800);




});















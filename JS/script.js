let dziury = document.querySelectorAll('.hole')
let misie = document.querySelectorAll('.bear')
let punkty = 0

const startbutton = document.getElementById('start_button')



startbutton.addEventListener('click', function() {

    document.getElementById("game").style.filter = "blur(0px)"
    document.getElementById("start_button").style.visibility = "hidden"


    // losowanie dziury z której wyskoczy miś
//    const i = Math.floor(Math.random() * (dziury.length));
//    const losowadziura = dziury[i];

//TODO: wolne wyskakiwanie miskow po czasie (pewnie spowodowane tym że dane misie mają już class odpowiadającą za wyskakiwanie - w skrócie trzeba usunąć class po schowaniu sie misia)

setInterval(() => {

    const x = Math.floor(Math.random() * (dziury.length));
    const losowymis = misie[x]
 
    losowymis.classList.add('wyskakiwanie')

    
    setTimeout(() => {
        losowymis.classList.remove('wyskakiwanie'); 
    }, 750);


}, 800);




});















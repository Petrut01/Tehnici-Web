let iBG  = 0;
let bgTimer = setInterval(moveBG,2000);

function moveBG(){

    if(iBG % 2 == 0)
        document.getElementById('bg').style.backgroundPosition = 'top right';
    else
        document.getElementById('bg').style.backgroundPosition = 'top left';

    iBG++;

}
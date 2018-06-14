
function checkWinLoss (int) {
    var getBots = document.getElementsByClassName('bot');

    //updating the hp stats on the right
    var myHealth = document.getElementById('hp');
    console.log('myHealth: ' + myHealth.innerText);
    myHealth.innerText = 'HP: ' + hp + " / 1000";

    updateProgressBar();

    //checking if ded
    if(getBots.length == 0) {
        var text = document.getElementsByClassName('text')[0].childNodes[0];
        text.style.color = 'green';
        text.innerText = 'YOU WON!';
        clearInterval(int);
        clearInterval(botCheckInt);
    }

    if(hp <= 0) {
        var text = document.getElementsByClassName('text')[0].childNodes[0];
        text.style.color = 'red';
        text.innerText = 'YOU LOST!';

        //remove player
        var playerBox = player.parentNode;
        playerBox.removeChild(player);
        playerBox.classList.remove('playerBox');

        clearInterval(int);
    }
}

function updateProgressBar() {
    var elem = document.getElementById("myBar");   
    var width = (hp/1000)*100;

    elem.style.width = width + '%'; 
  }
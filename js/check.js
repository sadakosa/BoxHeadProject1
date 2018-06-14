
function checkWinLoss (int) {
    var getBots = document.getElementsByClassName('bot');

    if(getBots.length == 0) {
        alert('you won!');
        clearInterval(int);
        clearInterval(botCheckInt);
    }

    if(hp <= 0) {
        alert('you lost!');
        clearInterval(int);
    }
}

function checkStats () {
    
}
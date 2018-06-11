
function checkWinLoss () {
    var getBots = document.getElementsByClassName('bot');

    if(getBots.length == 0) {
        alert('you won!');
    }

    if(hp <= 0) {
        alert('you lost!');
    }
}
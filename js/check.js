
function checkWinLoss (int) {
    var getBots = document.getElementsByClassName('bot');

    if(getBots.length == 0) {
        alert('you won!');
        clearTimeout(int);
    }

    if(hp <= 0) {
        alert('you lost!');
        clearInterval(int);
    }
}
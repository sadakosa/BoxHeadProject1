var container = document.getElementsByClassName('container');
var name;
var num;
var player;

//move Up
function moveUp () {
    var playerBox = player.parentNode;
    var playerId = parseInt(playerBox.id);
    if(playerId > num) {
        playerBox.removeChild(player);
        playerBox.classList.remove('playerBox');

        //find box above
        var newBox = document.getElementById((playerId - num).toString())
        newBox.classList.add('playerBox');
        newBox.appendChild(player);
    }
}

//move Down
function moveDown () {
    var playerBox = player.parentNode;
    var playerId = parseInt(playerBox.id);
    if(playerId <= (num*num)-num) {
        playerBox.removeChild(player);
        playerBox.classList.remove('playerBox');

        //find box above
        var newBox = document.getElementById((playerId + num).toString())
        newBox.classList.add('playerBox');
        newBox.appendChild(player);
    }
}

//move Left
function moveLeft () {
    var playerBox = player.parentNode;
    var playerId = parseInt(playerBox.id);
    if((playerId-1)%num != 0) {
        playerBox.removeChild(player);
        playerBox.classList.remove('playerBox');

        //find box above
        var newBox = document.getElementById((playerId - 1).toString())
        newBox.classList.add('playerBox');
        newBox.appendChild(player);
    }
}

//move Right
function moveRight () {
    var playerBox = player.parentNode;
    var playerId = parseInt(playerBox.id);
    if(playerId%num != 0) {
        playerBox.removeChild(player);
        playerBox.classList.remove('playerBox');

        //find box above
        var newBox = document.getElementById((playerId + 1).toString())
        newBox.classList.add('playerBox');
        newBox.appendChild(player);
    }
}

//fire motion
function fire () {

}

//pause function
function pause () {

}

function move (event) {
    console.log( "current element", event.keyCode)
    if (event.keyCode == "38") {
        //up button
        moveUp();
    } else if (event.keyCode == "40") {
        //down button
        moveDown();
    } else if (event.keyCode == "37") {
        //left button
        moveLeft();
    } else if (event.keyCode == "39") {
        //right button
        moveRight();
    } else if (event.keyCode == "32") {
        //space bar 
        fire();
    } else  if (event.keyCode == "19" || event.keyCode == "80" || event.keyCode == "27") {
        //pause or p or esc button
        pause();
    }
}
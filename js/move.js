var container = document.getElementsByClassName('container');
var name;
var num = 36;
var player;
var playerWeapon = 'pistol';
var direction = 'left';
var hp = 1000;

//move Up
function moveUp () {
    var playerBox = player.parentNode;
    var playerId = parseInt(playerBox.id);
    var newBox = document.getElementById((playerId - num).toString())

    if(playerId > num && newBox.childNodes.length<1) {
        playerBox.removeChild(player);
        playerBox.classList.remove('playerBox');

        //find box above
        newBox.classList.add('playerBox');
        newBox.appendChild(player);

        //change direction
        direction = 'up';
    }
}

//move Down
function moveDown () {
    var playerBox = player.parentNode;
    var playerId = parseInt(playerBox.id);
    var newBox = document.getElementById((playerId + num).toString())

    if(playerId <= (num*num)-num && newBox.childNodes.length<1) {
        playerBox.removeChild(player);
        playerBox.classList.remove('playerBox');

        newBox.classList.add('playerBox');
        newBox.appendChild(player);

        //change direction
        direction = 'down';
    }
}

//move Left
function moveLeft () {
    var playerBox = player.parentNode;
    var playerId = parseInt(playerBox.id);
    var newBox = document.getElementById((playerId - 1).toString())

    if((playerId-1)%num != 0 && newBox.childNodes.length<1) {
        playerBox.removeChild(player);
        playerBox.classList.remove('playerBox');

        newBox.classList.add('playerBox');
        newBox.appendChild(player);

        //change direction
        direction = 'left';
    }
}

//move Right
function moveRight () {
    var playerBox = player.parentNode;
    var playerId = parseInt(playerBox.id);
    var newBox = document.getElementById((playerId + 1).toString())

    if(playerId%num != 0 && newBox.childNodes.length<1) {
        playerBox.removeChild(player);
        playerBox.classList.remove('playerBox');

        newBox.classList.add('playerBox');
        newBox.appendChild(player);

        direction = 'right';
    }
}

//pause function
function pause () {

}

function move (event) {
    // console.log( "current element", event.keyCode)
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
    } else if  (event.keyCode == "32") {
        //space bar 
        //in weapons
        fire();
    } else if  (event.keyCode == "49" ||
                event.keyCode == "50" ||
                event.keyCode == "51" ||
                event.keyCode == "52" ||
                event.keyCode == "53") {
        //keys 1,2,3,4,5
        changeWeapons(event.keyCode);

    } else if (event.keyCode == "19" || event.keyCode == "80" || event.keyCode == "27") {
        //pause or p or esc button
        pause();
    }
}
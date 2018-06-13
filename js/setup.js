function createWalls () {
    
}


function setup () {
    nameRecord();

    bigBox = document.createElement('div');
    bigBox.classList.add('bigBox');

    for (var i = 1; i <= num*num; i++) {
        var smallBox = document.createElement('div');
        smallBox.classList.add('smallBox');
        smallBox.id = i;
        var boxSize = (700-num*2) / num;
        console.log(boxSize)

        smallBox.style.width = boxSize +'px';
        smallBox.style.height = boxSize + 'px'; 
        smallBox.style.display = "inline-block"; 

        bigBox.appendChild(smallBox);
    }

    //deleting everything inside container at the start of the game
    var input = document.getElementById('name');
    var welcome = document.getElementById('welcome');
    var start = document.getElementsByClassName('button');
    input.parentNode.removeChild(input);
    welcome.parentNode.removeChild(welcome);
    start[0].parentNode.removeChild(start[0]);

    //building the text above bigBox
    // var text = document.createElement('h1');
    // text.innerText = "Player 1's turn!";
    // container[0].appendChild(text);
    container[0].appendChild(bigBox);

    //creating walls
    createWalls();

    //adding player to grid
    player = document.createElement('div');
    player.id = 'player';
    var playerBox = document.getElementById(num*num/2);
    playerBox.appendChild(player);
    playerBox.classList.add('playerBox');
    //rotating the player image
    playerBox.style.transform = "rotate(270deg)";

    //listen for keydown strokes
    document.addEventListener('keydown', move);

    //getting zombies
    levelOne();

    //checking for Win Loss Situation
    var int = setInterval(function () {checkWinLoss(int)}, 1000);
}

//record the name
function nameRecord () {
    name = document.getElementById('name').value;
    console.log(name);
}

function everything () {
    var start = document.getElementsByClassName('button');
    start[0].addEventListener('click', setup);
    console.log('start');
}

window.onload = everything();


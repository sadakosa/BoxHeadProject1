//record the name
function nameRecord () {
    name = document.getElementById('name').value;
    console.log(name);
}

function buildingGrid () {
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
    var insertName = document.getElementsByClassName('insertName');
    input.parentNode.removeChild(input);
    welcome.parentNode.removeChild(welcome);
    start[0].parentNode.removeChild(start[0]);
    insertName[0].parentNode.removeChild(insertName[0]);

    //building the text above bigBox
    var text = document.createElement('h1');
    text.innerText = " ";
    container[0].appendChild(text);
    container[0].appendChild(bigBox);
}


function createWalls () {
    
}



function addingPlayer () {
    player = document.createElement('div');
    player.id = 'player';
    var playerBox = document.getElementById(num*num/2);
    playerBox.appendChild(player);
    playerBox.classList.add('playerBox');
    //rotating the player image
    playerBox.style.transform = "rotate(270deg)";
}



function buildRight() {
    //build Name + Stats
    var nameBox = document.getElementsByClassName('name');
    var nameStats = document.createElement('h1');
    console.log(name);
    nameStats.innerText = name + "'s Stats";
    nameBox[0].appendChild(nameStats);

    //display HP
        //text for HP
        var myHealth = 
        
        //creating progress bar
        var myProgress =  document.createElement('div');
        var myBar = document.createElement('div');
        myProgress.id = 'myHealth';
        myBar.id = 'myBar';
        myProgress.appendChild(myBar);
        health[0].appendChild(myProgress);

    

    //build Weapons
    
    var pistolStats = document.createElement('div');
    

    //Bots Left
    var botsLeft = document.getElementsByClassName('botsLeft');
}




function setup () {
    nameRecord();

    //build the grid and remove the stuff inside
    buildingGrid();
    
    //adding the level to the bottom
    var level = document.getElementById('level');
    level.innerText = 'Level One';

    //creating walls
    createWalls();

    //adding player to grid 
    addingPlayer();

    //listen for keydown strokes
    document.addEventListener('keydown', move);

    //getting zombies
    levelOne();

    //checking for Win Loss Situation
    var int = setInterval(function () {checkWinLoss(int)}, 1000);

    //build right side DOM
    buildRight();
}


function everything () {
    var start = document.getElementsByClassName('button');
    start[0].addEventListener('click', setup);
    console.log('start');
}

window.onload = everything();


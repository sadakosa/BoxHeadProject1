var container = document.getElementsByClassName('container');
var name;
var num;
var player;

function setup () {
    nameRecord();
    num = 50;

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

    player = document.createElement('div');
    var playerBox = document.getElementById(num*num/2);
    playerBox.appendChild(player);
    playerBox.classList.add('playerBox');
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


var bots = {};
var botCheckInt;
var previousPlay;
var counter = 0;
var target;
var idInRadius = [];

function botMove(dir, nMove, bot) {
    if (bot.parentNode != null) {
        var botBox = bot.parentNode;
        var botPosition = parseInt(bot.parentNode.id);
        
        if(dir == 'add') {
            var newBox = document.getElementById((botPosition+nMove).toString());
            
            if(newBox.childNodes.length<1) {
                botBox.removeChild(bot);
                botBox.classList.remove('botBox');

                newBox.classList.add('botBox');
                newBox.appendChild(bot);
            // } else { //if it is blocked
            //     newBox = document.getElementById((botPosition+nMove).toString())

            //     botBox.removeChild(bot);
            //     botBox.classList.remove('botBox');

            //     newBox.classList.add('botBox');
            //     newBox.appendChild(bot);
            }
        } else if (dir == 'minus') {
            var newBox = document.getElementById((botPosition-nMove).toString());
            
            if(newBox.childNodes.length<1) {
                botBox.removeChild(bot);
                botBox.classList.remove('botBox');

                newBox.classList.add('botBox');
                newBox.appendChild(bot);
            // } else { //if it is blocked
                
            //     newBox = document.getElementById((botPosition+nMove).toString());

            //     botBox.removeChild(bot);
            //     botBox.classList.remove('botBox');

            //     newBox.classList.add('botBox');
            //     newBox.appendChild(bot);
            }
        }
    }
}


//returns the column number of the object
function checkEntityCol (entity) {
    if (entity%num == 0) {
        return num;
    } else {
        return entity%num;
    }
}

//returns 1 if not the num column
function checkNumCol (entity) {
    if(entity%num == 0) {
        return 0;
    } else {
        return 1;
    }
}

//check if the bot is beside the player
function checkBeside (play, bot) {
    if(play-bot == 1) {
        return true;
    } else if (bot-play == 1) {
        return true;
    } else if (bot-play == num) {
        return true;
    } else if (play-bot == num) {
        return true;
    } else {
        return false;
    }
}





function currentMove (direct, previous, current, up, down, left, right, newCurrent, defaultCurrent) {
    // console.log("initial current: " + current);
    // console.log("previous: " + previous);
    
    if (direct == "up") {
        current -= num;
    } else if (direct == 'down') {
        current += num;
    } else if (direct == 'left') {
        current --;
    } else if (direct == 'right') {
        current ++;
    }

    // console.log("new current: " + current);
    // debugger;
    determine(previous, current, up, down, left, right, newCurrent, defaultCurrent);
}

function determine (previous, current, up, down, left, right, newCurrent, defaultCurrent) {
    //console.log('ccc', counter)
    if(current > previous) {
        counter++;
        if (current <= (Math.floor(previous/num)+checkNumCol(previous))*num) {
            //same row, current is to the right of the previous
            right ++;
            console.log('moved right', right, current, previous);
            currentMove('left', previous, current, up, down, left, right, newCurrent, defaultCurrent);
        } else {
            down ++;
            console.log('moved down', down, current, previous);
            currentMove('up', previous, current, up, down, left, right, newCurrent, defaultCurrent);
        }
    } else if (current < previous)  {
        // console.log("current: " + current);
        // console.log("previous: " + previous);
        // console.log("Num: " + num);
        // console.log("first check: " + (Math.floor(current/num)));
        // console.log("column number = " + checkNumCol(current));
        if (previous <= (Math.floor(current/num)+checkNumCol(current))*num) {
            //same row, current is to the left of the previous
            left ++;
            console.log('moved left', left, current, previous);
            currentMove('right', previous, current, up, down, left, right, newCurrent, defaultCurrent);
        } else {
            up ++;
            console.log('moved up', up, current, previous);
            currentMove('down', previous, current, up, down, left, right, newCurrent, defaultCurrent);
        }
    } else if (current == previous) {
        for(var i=0; i<3; i++) {
            if(down != 0 || up != 0) {
                newCurrent = newCurrent + (down*num) - (up*num);
                down = 0;
                up = 0;
            } else if (right != 0) {
                if (newCurrent%num != 0) {
                    newCurrent = newCurrent + right;
                    right = 0;
                }
            } else if (left != 0) {
                if ((newCurrent-1)%num != 0) {
                    newCurrent = newCurrent + left;
                    left = 0;
                }
            }
        } 
        
        if (newCurrent < 0 || newCurrent > num*num) {
            target = defaultCurrent;
        } else {
            target = newCurrent;
        }
    }
}

//predict where the bot is going
function predictPlay (previous, current) {
    var up = 0;
    var down = 0;
    var right = 0;
    var left = 0;
    var newCurrent = current;
    var defaultCurrent = current;
    determine(previous, current, up, down,  left, right, newCurrent, defaultCurrent);
}




function moveRandom () {

}


function moveFollow (target, botPosition, getBots, i) {
    if(checkBeside(target, botPosition)) {
        //bot is directly beside the player, damages the player at each interval
        hp -= 40;
    } else if(target > botPosition) {

        if (target < Math.floor(botPosition/num)+checkNumCol(botPosition)) {
            //same row, player is to the right of the bot
            botMove('add', 1, getBots[i]);
        } else {
            //player is below bot
            if((target-botPosition)%num ==0) {
                //player is vertically below bot
                botMove('add', num, getBots[i]);
            } else if (checkEntityCol(target) > checkEntityCol(botPosition)) {
                //player is diagonally right below bot --> \ diagonally right
                botMove('add', num+1, getBots[i]);
            } else if (checkEntityCol(target) < checkEntityCol(botPosition)) {
                //player is diagonally left below bot --> \ diagonally left
                botMove('add', num-1, getBots[i]);
            }
        }

    } else if (target < botPosition) {

        if (botPosition < Math.floor(target/num)+checkNumCol(target)) {
            //same row, player is to the left of the bot
            botMove('minus', 1, getBots[i]);
        } else {
            //player is above bot
            if((botPosition-target)%num ==0) {
                //player is vertically above bot
                botMove('minus', num, getBots[i]);
            } else if (checkEntityCol(target) > checkEntityCol(botPosition)) {
                //player is diagonally left above bot --> / diagonally left
                botMove('minus', num-1, getBots[i]);
            } else if (checkEntityCol(target) < checkEntityCol(botPosition)) {
                //player is diagonally right above bot --> \ diagonally right
                botMove('minus',  num+1, getBots[i]);
            }
        }
    }
}





//check for bots within a certain radius from the player
function checkRadius (playPosition) {
    var rad = 2;
    idInRadius = [];

    if (playPosition == 1) {
        //when the player is in the top left corner of the bigBox
        for (var i=1; i<=rad; i++) {
            var diagKey = playPosition+((num+1)*i);

            for(var a=1; a<=i; a++) {
                idInRadius.push((diagKey+(num*a)).toString());
                idInRadius.push((diagKey-(1*a)).toString());
            }
            
            idInRadius.push(diagKey.toString());
        }
    } else if (playPosition == num) {
        //when the player is in the top right corner of the bigBox
        for(var i=1; i<=rad; i++) {
            var diagKey = playPosition + ((num-1)*i);

            for(var a=1; a<=i; a++) {
                idInRadius.push((diagKey-(num*a)).toString());
                idInRadius.push((diagKey+(1*a)).toString());
            }
            
            idInRadius.push(diagKey.toString());
        }
    } else if (playPosition == (num*num)-num+1) {
        //when the player is in the bottom left corner of the bigBox
        for(var i=1; i<=rad; i++) {
            var diagKey = playPosition - ((num-1)*i);

            for(var a=1; a<=rad; a++) {
                idInRadius.push((diagKey-(1*a)).toString());
                idInRadius.push((diagKey+(num*a)).toString());
            }
            
            idInRadius.push(diagKey.toString());
        }
    } else if (playPosition == num*num) {
        //when the player is in the bottom right corner of the bigBox
        for(var i=1; i<=rad; i++) {
            var diagKey = playPosition - ((num+1)*i);

            for(var a=1; a<=i; a++) {
                idInRadius.push((diagKey+(i*a)).toString());
                idInRadius.push((diagKey+(num*a)).toString());
            }

            idInRadius.push(diagKey.toString());
        }
    } else if (playPosition <= num) {
        //when the player is in the top row of the bigBox
        for(var i=1; i<=rad; i++) {
            var bl = playPosition+((num-1)*i);
            var br = playPosition+((num+1)*i);

            for (var a=1; a<=i; a++) {
                idInRadius.push((bl-(num*a)).toString());
                idInRadius.push((br-(num*a)).toString());
            }

            for(var a=1; a<=1+((i-1)*2); a++) {
                idInRadius.push((bl+(1*a)).toString());
            }

            idInRadius.push(bl.toString());
            idInRadius.push(br.toString());
        }
    } else if (playPosition > (num*num)-num) {
        //when the player is in the bottom row of the bigBox
        for(var i=1; i<=rad; i++) {
            var tl = playPosition-((num+1)*i);
            var tr = playPosition-((num-1)*i);

            for (var a=1; a<=i; a++) {
                idInRadius.push((tr+(num*a)).toString());
                idInRadius.push((tl+(num*a)).toString());
            }

            for(var a=1; a<=1+((i-1)*2); a++) {
                idInRadius.push((tl+(1*a)).toString());
            }

            idInRadius.push(tl.toString());
            idInRadius.push(tr.toString());
        }
    } else if (playPosition%num == 0) {
        //when the player is in the right row of the bigBox
        for(var i=1; i<=rad; i++) {
            var tl = playPosition-((num+1)*i);
            var bl = playPosition+((num-1)*i);

            for(var a=1; a<=i; a++) {
                idInRadius.push((tl+(1*a)).toString());
                idInRadius.push((bl+(1*a)).toString());
            }

            for(var a=1; a<=1+((i-1)*2); a++) {
                idInRadius.push((tl+(num*a)).toString());
            }

            idInRadius.push(tl.toString());
            idInRadius.push(bl.toString());
        }
    } else if ((playPosition - 1)%num == 0) {
        //when the player is in the left row of the bigBox
        for(var i=0; i<=rad; i++) {
            var tr = playPosition-((num-1)*i);
            var br = playPosition+((num+1)*i);

            for(var a=0; a<=rad; a++) {
                idInRadius.push((tr-(1*a)).toString());
                idInRadius.push((br-(1*a)).toString());
            }

            for(var a=1; a<=1+((i-1)*2); a++) {
                idInRadius.push((tr+(num*a)).toString());
            }

            idInRadius.push(tl.toString());
            idInRadius.push(bl.toString());
        }
    } else {
        //for when the player is not touching the walls
        for(var a=1; a<=rad; a++) {
            //finding the ids of the corners of the divs of distance a from the player
            var tr = playPosition - (num-1)*a;
            var tl = playPosition - (num+1)*a;
            var br = playPosition + (num+1)*a;
            var bl = playPosition + (num-1)*a;
    
            //adding the ids of the corners to the array
            idInRadius.push(tr.toString());
            idInRadius.push(tl.toString());
            idInRadius.push(br.toString());
            idInRadius.push(bl.toString());
    
            //finding the ids of everything in between the corners
            for (var b=1; b<= 1+(a-1)*2; b++) {
                idInRadius.push((tr + num*b).toString());
                idInRadius.push((tl + 1*b).toString());
                idInRadius.push((br - 1*b).toString());
                idInRadius.push((bl - num*b).toString());
            }
        }
    }
    

    console.log('radius: ' + idInRadius);
    debugger;
}






//check where the player is relative to the bot and call the botMove function with arguments
function botCheck () {
    // console.log('botCheck', counter);
    //get the player's position
    playPosition = parseInt(player.parentNode.id);

    //predict where the player will be based on how much the player has moved
    if (previousPlay != null) {
        console.log("bot check")
        predictPlay(previousPlay, playPosition);
        console.log('predicted id: ' + target)
    } else {
        target = playPosition;
    }

    //prepping for the next check
    previousPlay = playPosition;
    
    
    var getBots = document.getElementsByClassName('bot');

    for(var i=0; i<getBots.length; i++) {
        //get the bot position
        if(getBots[i].parentNode.id != null) {
            botPosition = parseInt(getBots[i].parentNode.id);

            if(bots[getBots[i].id] <= 0) {
                //check if hp is <= 0 and delete bot if so
                var botBox = getBots[i].parentNode;
                botBox.removeChild(getBots[i]);
                botBox.classList.remove('botBox');
            }

            checkRadius(playPosition);

            if (true) {
                moveFollow (target, botPosition, getBots, i);
            } else {
                moveRandom(botPosition, getBots, i);
            }
            
        }
    }

}

function createBot (i) {
    //creating the div for bot
    var bot = document.createElement('div');
    bot.classList.add('bot');
    bots['bot'+i.toString()] = 1000;
    bot.id = 'bot'+i.toString();

    //randomly placing the bot
    // var x = (Math.floor(Math.random() * num * num) + 1).toString()
    
    var x = (Math.floor(Math.random() * 3) + 1)
    console.log(x);
    var y;
    if(x  ==  1) {
        y = '541';
    } else if (x == 2) {
        y = '1278';
    } else if (x == 3) {
        y = '18';
    }
    console.log(y);  
    var botBox = document.getElementById(y);
    console.log(botBox);
    botBox.appendChild(bot);
    botBox.classList.add("botBox");

}

function levelOne () {
    var i = 1;
    var x = setInterval(function() {
        createBot(i);

        i += 1;

        if (i >= 8) {
            clearInterval(x);
        };
    },500);

    botCheckInt = setInterval(botCheck, 500);
    console.log(Object.keys(bots));
    console.log(Object.values(bots));
    
}



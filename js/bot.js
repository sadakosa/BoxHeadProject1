function botMove(dir, nMove, bot) {
    var botBox = bot.parentNode;
    var botPosition = parseInt(bot.parentNode.id);
    
    if(dir == 'add') {
        var newBox = document.getElementById((botPosition+nMove).toString());
        
        if(newBox.childNodes.length<1) {
            botBox.removeChild(bot);
            botBox.classList.remove('botBox');

            newBox.classList.add('botBox');
            newBox.appendChild(bot);
        }
    } else if (dir == 'minus') {
        var newBox = document.getElementById((botPosition-nMove).toString());
        
        if(newBox.childNodes.length<1) {
            botBox.removeChild(bot);
            botBox.classList.remove('botBox');

            newBox.classList.add('botBox');
            newBox.appendChild(bot);
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

//check where the player is relative to the bot and call the botMove function with arguments
function botCheck () {
    console.log('botCheck');
    //get the player's position
    playPosition = parseInt(player.parentNode.id);
    var getBots = document.getElementsByClassName('bot');

    for(var i=0; i<getBots.length; i++) {
        //get the bot position
        botPosition = parseInt(getBots[i].parentNode.id);
    
        if(playPosition > botPosition) {

           if (playPosition - botPosition < num) {
                //same row, player is to the right of the bot
                botMove('add', 1, getBots[i]);
            } else {
                //player is below bot
                if((playPosition-botPosition)%num ==0) {
                    //player is vertically below bot
                    botMove('add', num, getBots[i]);
                } else if (checkEntityCol(playPosition) > checkEntityCol(botPosition)) {
                    //player is diagonally right below bot --> \ diagonally right
                    botMove('add', num+1, getBots[i]);
                } else if (checkEntityCol(playPosition) < checkEntityCol(botPosition)) {
                    //player is diagonally left below bot --> \ diagonally left
                    botMove('add', num-1, getBots[i]);
                }
            }

        } else if (playPosition < botPosition) {

            if (botPosition - playPosition < num) {
                //same row, player is to the left of the bot
                botMove('minus', 1, getBots[i]);
            } else {
                //player is above bot
                if((botPosition-playPosition)%num ==0) {
                    //player is vertically above bot
                    botMove('minus', num, getBots[i]);
                } else if (checkEntityCol(playPosition) > checkEntityCol(botPosition)) {
                    //player is diagonally left above bot --> / diagonally left
                    botMove('minus', num-1, getBots[i]);
                } else if (checkEntityCol(playPosition) < checkEntityCol(botPosition)) {
                    //player is diagonally right above bot --> \ diagonally right
                    botMove('minus',  num+1, getBots[i]);
                }
            }
        }
    }

}



function levelOne () {
    var bot = document.createElement('div');
    bot.classList.add('bot');
    var x = (Math.floor(Math.random() * num * num) + 1).toString()
    var botBox = document.getElementById(x);
    botBox.appendChild(bot);
    botBox.classList.add("botBox");

    console.log('heyo');

    setInterval(botCheck, 500);
}


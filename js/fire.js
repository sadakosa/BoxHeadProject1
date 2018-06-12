//check identity of div
function checkIdentity (entity) {
    console.log(entity.classList);
    if (entity.id == 'player') {
        return 'player';
    }

    for(var i=0; i<entity.classList; i++) {
        if (entity.classList[i] == 'bot') {
            return 'bot';
        }
    }
}

//movement of a bullet
function bulletCheckMove (dir, bullet, int)  {
    var bulletBox = bullet.parentNode;
    console.log(bullet)
    console.log(bulletBox);
    if( bulletBox === null ){
        debugger;
    }
    var bulletId = parseInt(bulletBox.id);
    
    if (bulletBox.childNodes.length > 1) {
        //check for enemy or player or wall
        // for (var i=0; i<bulletBox.childNodes.length; i++) {
        //     console.log(bulletBox.childNodes[i], checkIdentity(bulletBox.childNodes[i]))
        //     if(checkIdentity(bulletBox.childNodes[i]) == 'player') {
        //         //damage to player
        //         hp -= weapons.pistol.damage;
        //         console.log('player lost ' + weapons.pistol.damage + ' hp');
        //         console.log('player hp: ' + hp);

        //         //remove from old box 
        //         bulletBox.removeChild(bullet);
        //         bulletBox.classList.remove('bulletBox');                
        //     } else if (checkIdentity(bulletBox.childNodes[i]) ==  'bot') {
        //         //damage to bot
        //         var botId = bulletBox.childNodes[i].id;
        //         bots.botId -= weapons.pistol.damage;
        //         console.log('bot lost ' + weapons.pistol.damage + ' hp');
        //         console.log('bot hp: ' + bots.botId);

        //         //remove from old box 
        //         bulletBox.removeChild(bullet);
        //         bulletBox.classList.remove('bulletBox');
        //     }
        // }

        var playerCheck = bulletBox.querySelector('#player');
        var botCheck = bulletBox.querySelector('.bot');

        if(playerCheck != null) {
            hp = hp - weapons.pistol.damage;

            //remove from old box 
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');
            clearInterval(int);
        } else if (botCheck != null) {
            //damage to bot
            var botId = botCheck.id;
            bots[botId] = bots[botId] - weapons.pistol.damage;

            //remove from old box 
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');
            clearInterval(int);
        }
    } else if (dir == 'left') {
        if((bulletId - 1)%num != 0) {
            //remove from old box 
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');

            //add to new box
            var newBox = document.getElementById((bulletId - 1).toString())
            newBox.appendChild(bullet);
            newBox.classList.add('bulletBox');
        } else {
            //remove from old box
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');
            clearInterval(int);
        }
    } else if (dir == 'right') {

    } else if (dir == 'up') {

    } else if (dir ==  'down') {

    }

}


//fire motion
function fire () {
    if(playerWeapon == 'pistol') {
        //fire pistol
        var bullet = document.createElement('div');
        bullet.classList.add('bullet');
        var playerBox = player.parentNode;
        var playerId = parseInt(playerBox.id);
        
        if (direction == 'left') {
            if((playerId - 1)%num != 0) {
                var bulletBox = document.getElementById((playerId - 1).toString())
                bulletBox.appendChild(bullet);
                bulletBox.classList.add('bulletBox');
                var int = setInterval(function () {bulletCheckMove('left', bullet, int)}, 20);
            }
        } else if (direction == 'right') {
            if(playerId%num != 0) {
                var bulletBox = document.getElementById((playerId+1).toString())
                bulletBox.appendChild(bullet);
                bulletBox.classList.add('bulletBox');
                setInterval(function () {bulletCheckMove('right', bullet)}, 20);
            }
        } else if (direction == 'up') {
            if(playerId > num) {
                var bulletBox = document.getElementById((playerId-num).toString())
                bulletBox.appendChild(bullet);
                bulletBox.classList.add('bulletBox');
                setInterval(function() {bulletCheckMove('up', bullet)}, 20);
            }
        } else if (direction == 'down') {
            if(playerId <= (num*num)-num) {
                var bulletBox = document.getElementById((playerId+num).toString())
                bulletBox.appendChild(bullet);
                bulletBox.classList.add('bulletBox');
                setInterval(function () {bulletCheckMove('down', bullet)}, 20);
            }
        }
        
                
    } else if (playerWeapon == 'shotgun') {

    } else if (playerWeapon == 'grenade') {

    } else if (playerWeapon == 'mine') {

    } else if (playerWeapon == 'barrel') {

    }
}
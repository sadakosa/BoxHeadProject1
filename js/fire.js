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

//subsequent movement of a bullet
function bulletCheckMove (dir, bullet, int)  {
    console.log('bulletCheckMove');
    var bulletBox = bullet.parentNode;
    if( bulletBox === null ){
        debugger;
    }
    var bulletId = parseInt(bulletBox.id);

    if (bulletBox.childNodes.length > 1) {
        //check for enemy or player or wall
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
            changeImageDir('bullet', 'left', bullet);
        } else {
            //remove from old box
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');
            clearInterval(int);
        }
    } else if (dir == 'right') {
        if(bulletId%num != 0) {
            //remove from old box 
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');

            //add to new box
            var newBox = document.getElementById((bulletId + 1).toString())
            newBox.appendChild(bullet);
            newBox.classList.add('bulletBox');
            changeImageDir('bullet', 'right', bullet);
        } else {
            //remove from old box
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');
            clearInterval(int);
        }
    } else if (dir == 'up') {
        if(bulletId > num) {
            //remove from old box 
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');

            //add to new box
            var newBox = document.getElementById((bulletId - num).toString())
            newBox.appendChild(bullet);
            newBox.classList.add('bulletBox');
            changeImageDir('bullet', 'up', bullet);
        } else {
            //remove from old box
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');
            clearInterval(int);
        }
    } else if (dir ==  'down') {
        if(bulletId <= (num*num)-num) {
            //remove from old box 
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');

            //add to new box
            var newBox = document.getElementById((bulletId + num).toString())
            newBox.appendChild(bullet);
            newBox.classList.add('bulletBox');
            changeImageDir('bullet', 'down', bullet);
        } else {
            //remove from old box
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');
            clearInterval(int);
        }
    } else if (dir == 'diaRUp') {
        if(bulletId > num && bulletId%num != 0) {
            //remove from old box 
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');

            //add to new box
            var newBox = document.getElementById((bulletId - (num-1)).toString());
            newBox.appendChild(bullet);
            newBox.classList.add('bulletBox');
            changeImageDir('bullet', 'diaR', bullet);
        } else {
            //remove from old box
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');
            clearInterval(int);
        }
    } else if (dir == 'diaRDown') {
        console.log('diaRDown');
        if(bulletId <= num*num-num && (bulletId-1)%num != 0) {
            console.log('diaRDown');
            //remove from old box 
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');

            //add to new box
            var newBox = document.getElementById((bulletId + (num-1)).toString())
            newBox.appendChild(bullet);
            newBox.classList.add('bulletBox');
            changeImageDir('bullet', 'diaR', bullet);
        } else {
            //remove from old box
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');
            clearInterval(int);
        }
    } else if (dir == 'diaLUp') {
        if(bulletId != num) {
            //remove from old box 
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');

            //add to new box
            var newBox = document.getElementById((bulletId - (num+1)).toString())
            newBox.appendChild(bullet);
            newBox.classList.add('bulletBox');
            changeImageDir('bullet', 'diaL', bullet);
        } else {
            //remove from old box
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');
            clearInterval(int);
        }
    } else if (dir == 'diaLDown') {
        if(bulletId != num*num-num+1) {
            //remove from old box 
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');

            //add to new box
            var newBox = document.getElementById((bulletId + (num+1)).toString())
            newBox.appendChild(bullet);
            newBox.classList.add('bulletBox');
            changeImageDir('bullet', 'diaL', bullet);
        } else {
            //remove from old box
            bulletBox.removeChild(bullet);
            bulletBox.classList.remove('bulletBox');
            clearInterval(int);
        }
    } else {
        //remove from old box
        bulletBox.removeChild(bullet);
        bulletBox.classList.remove('bulletBox');
        clearInterval(int);
    }

}



function firePistol () {
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
            changeImageDir('bullet', 'left', bullet);
            var int = setInterval(function () {bulletCheckMove('left', bullet, int)}, 20);
        }
    } else if (direction == 'right') {
        if(playerId%num != 0) {
            var bulletBox = document.getElementById((playerId+1).toString())
            bulletBox.appendChild(bullet);
            bulletBox.classList.add('bulletBox');
            changeImageDir('bullet', 'right', bullet);
            var int = setInterval(function () {bulletCheckMove('right', bullet, int)}, 20);
        }
    } else if (direction == 'up') {
        if(playerId > num) {
            var bulletBox = document.getElementById((playerId-num).toString())
            bulletBox.appendChild(bullet);
            bulletBox.classList.add('bulletBox');
            changeImageDir('bullet', 'up', bullet);
            var int = setInterval(function() {bulletCheckMove('up', bullet, int)}, 20);
        }
    } else if (direction == 'down') {
        if(playerId <= (num*num)-num) {
            var bulletBox = document.getElementById((playerId+num).toString())
            bulletBox.appendChild(bullet);
            bulletBox.classList.add('bulletBox');
            changeImageDir('bullet', 'up', bullet);
            var int = setInterval(function () {bulletCheckMove('down', bullet, int)}, 20);
        }
    }
}


var topDia = true; //on the left of middle bullet
var bottomDia = true; //on the right of middle bullet
//check if can shoot top or bottom diagonal
function checkCanShoot () {
var playerBox = player.parentNode;
var playerId = parseInt(playerBox.id);

    if (playerId == 1) { //player is in top left corner
        if (direction == 'left') {
            topDia = false;
            bottomDia = false;
        } else if (direction == 'right') {
            topDia = false;
            bottomDia = true;
        } else if (direction == 'up') {
            topDia = false;
            bottomDia = false;
        } else if (direction == 'down') {
            topDia = true;
            bottomDia = false;
        }
    } else if (playerId == num) { //player is in top right corner
        if (direction == 'left') {
            topDia = false;
            bottomDia = true;
        } else if (direction == 'right') {
            topDia = false;
            bottomDia = false;
        } else if (direction == 'up') {
            topDia = false;
            bottomDia = false;
        } else if (direction == 'down') {
            topDia = false;
            bottomDia = true;
        }
    } else if (playerId <= num)  { //player is in top row
        if (direction == 'left') {
            topDia = true;
            bottomDia = false;
        } else if (direction == 'right') {
            topDia = false;
            bottomDia = true;
        } else if (direction == 'up') {
            topDia = false;
            bottomDia = false;
        } else if (direction == 'down') {
            topDia = true;
            bottomDia = true;
        }
    } else if (playerId == num*num) { //player is in bottom right
        if (direction == 'left') {
            topDia = false;
            bottomDia = true;
        } else if (direction == 'right') {
            topDia = false;
            bottomDia = false;
        } else if (direction == 'up') {
            topDia = true;
            bottomDia = false;
        } else if (direction == 'down') {
            topDia = false;
            bottomDia = false;
        }
    } else if (playerId == num*num-num+1) { //player is in bottom left
        if (direction == 'left') {
            topDia = false;
            bottomDia = false;
        } else if (direction == 'right') {
            topDia = true;
            bottomDia = false;
        } else if (direction == 'up') {
            topDia = false;
            bottomDia = true;
        } else if (direction == 'down') {
            topDia = false;
            bottomDia = false;
        }
    } else if (playerId > num*num-num) { //player is in bottom row
        if (direction == 'left') {
            topDia = false;
            bottomDia = true;
        } else if (direction == 'right') {
            topDia = true;
            bottomDia = false;
        } else if (direction == 'up') {
            topDia = true;
            bottomDia = true;
        } else if (direction == 'down') {
            topDia = false;
            bottomDia = false;
        }
    } else if ((playerId-1)%num == 0) { //player is in left row
        if (direction == 'left') {
            topDia = false;
            bottomDia = false;
        } else if (direction == 'right') {
            topDia = true;
            bottomDia = true;
        } else if (direction == 'up') {
            topDia = false;
            bottomDia = true;
        } else if (direction == 'down') {
            topDia = true;
            bottomDia = false;
        }
    } else if (playerId%num == 0) { //player is in right row
        if (direction == 'left') {
            topDia = true;
            bottomDia = true;
        } else if (direction == 'right') {
            topDia = false;
            bottomDia = false;
        } else if (direction == 'up') {
            topDia = true;
            bottomDia = false;
        } else if (direction == 'down') {
            topDia = false;
            bottomDia = true;
        }
    }
}




function fireShotgun () {
    var playerBox = player.parentNode;
    var playerId = parseInt(playerBox.id);
    checkCanShoot ();

    //fire shotgun
    for(var i=0; i<3; i++) {
        
        if (i == 0) {
            //top diagonal
            console.log('top Diagonal')
            var bullet = document.createElement('div');
            bullet.classList.add('bullet');
            var playerBox = player.parentNode;
            var playerId = parseInt(playerBox.id);
            
            if (direction == 'left') {
                if(topDia) {
                    console.log('top Diagonal Left')
                    console.log((playerId + (num-1)).toString());
                    var bulletBox = document.getElementById((playerId + (num-1)).toString())
                    bulletBox.appendChild(bullet);
                    bulletBox.classList.add('bulletBox');
                    changeImageDir('bullet', 'diaR', bullet);
                    var int = setInterval(function () {bulletCheckMove('diaRDown', bullet, int)}, 20);
                }
            } else if (direction == 'right') {
                if(topDia) {
                    var bulletBox = document.getElementById((playerId - (num-1)).toString())
                    bulletBox.appendChild(bullet);
                    bulletBox.classList.add('bulletBox');
                    changeImageDir('bullet', 'diaR', bullet);
                    var int = setInterval(function () {bulletCheckMove('diaRUp', bullet, int)}, 20);
                }
            } else if (direction == 'up') {
                if(topDia) {
                    var bulletBox = document.getElementById((playerId - (num+1)).toString())
                    bulletBox.appendChild(bullet);
                    bulletBox.classList.add('bulletBox');
                    changeImageDir('bullet', 'diaL', bullet);
                    var int = setInterval(function() {bulletCheckMove('diaLUp', bullet, int)}, 20);
                }
            } else if (direction == 'down') {
                if(topDia) {
                    var bulletBox = document.getElementById((playerId + (num+1)).toString())
                    bulletBox.appendChild(bullet);
                    bulletBox.classList.add('bulletBox');
                    changeImageDir('bullet', 'diaL', bullet);
                    var int = setInterval(function () {bulletCheckMove('diaLDown', bullet, int)}, 20);
                }
            }

        } else if (i == 1) {
            // middle bullet
            // var bullet = document.createElement('div');
            // bullet.classList.add('bullet');
            
            // if (direction == 'left') {
            //     if((playerId - 1)%num != 0) {
            //         var bulletBox = document.getElementById((playerId - 1).toString())
            //         bulletBox.appendChild(bullet);
            //         bulletBox.classList.add('bulletBox');
            //         changeImageDir('bullet', 'left', bullet);
            //         var int = setInterval(function () {bulletCheckMove('left', bullet, int)}, 100);
            //     }
            // } else if (direction == 'right') {
            //     if(playerId%num != 0) {
            //         var bulletBox = document.getElementById((playerId+1).toString())
            //         bulletBox.appendChild(bullet);
            //         bulletBox.classList.add('bulletBox');
            //         changeImageDir('bullet', 'right', bullet);
            //         var int = setInterval(function () {bulletCheckMove('right', bullet, int)}, 20);
            //     }
            // } else if (direction == 'up') {
            //     if(playerId > num) {
            //         var bulletBox = document.getElementById((playerId-num).toString())
            //         bulletBox.appendChild(bullet);
            //         bulletBox.classList.add('bulletBox');
            //         changeImageDir('bullet', 'up', bullet);
            //         var int = setInterval(function() {bulletCheckMove('up', bullet, int)}, 20);
            //     }
            // } else if (direction == 'down') {
            //     if(playerId <= (num*num)-num) {
            //         var bulletBox = document.getElementById((playerId+num).toString())
            //         bulletBox.appendChild(bullet);
            //         bulletBox.classList.add('bulletBox');
            //         changeImageDir('bullet', 'up', bullet);
            //         var int = setInterval(function () {bulletCheckMove('down', bullet, int)}, 20);
            //     }
            // }
        } else if (i == 2) {
            //bottom diagonal

        }
    }
}




function fireGrenade () {
    //fire grenade

}





//fire motion
function fire () {
    if(playerWeapon == 'pistol') {
        //fire pistol
        firePistol();
    } else if (playerWeapon == 'shotgun') {
        //fire shotgun
        fireShotgun();
    } else if (playerWeapon == 'grenade') {
        //fire grenade
        fireGrenade();
    }
    // } else if (playerWeapon == 'mine') {
    //     //plant and fire mines

    // } else if (playerWeapon == 'barrel') {
    //     //plant barrels

    // }
}
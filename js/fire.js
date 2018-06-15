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





function fireShotgun () {
    //fire shotgun
    for(var i=0; i<3; i++) {
        if(i == 0) {
            //top diagonal
            // var bullet = document.createElement('div');
            // bullet.classList.add('bullet');
            // var playerBox = player.parentNode;
            // var playerId = parseInt(playerBox.id);
            
            // if (direction == 'left') {
            //     if((playerId - 1)%num != 0) {
            //         var bulletBox = document.getElementById((playerId - 1).toString())
            //         bulletBox.appendChild(bullet);
            //         bulletBox.classList.add('bulletBox');
            //         changeImageDir('bullet', 'left', bullet);
            //         var int = setInterval(function () {bulletCheckMove('left', bullet, int)}, 20);
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

        } else if (i == 1) {
            // middle bullet
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
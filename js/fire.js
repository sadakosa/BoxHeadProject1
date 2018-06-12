//movement of a bullet
function bulletCheckMove (dir, bullet)  {
    var bulletBox = bullet.parentNode;
    var bulletId = parseInt(bulletBox.id);
    
    if (bulletBox.childNodes.length > 1) {
        //check for enemy or player or wall
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
                setInterval(function () {bulletCheckMove('left', bullet)}, 20);
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
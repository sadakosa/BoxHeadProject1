
var noWeapons = [1,10,0];

var weapons = {
    'pistol': {
        'name': 'pistol',
        'damage': 200,
        //press 1 for pistol
        'keyCode': 49
    },

    'shotgun': {
        'name': 'shotgun',
        'damage': 400,
        //press 2 for shotgun
        'keyCode': 50
    }, 

    'grenade': {
        'name': 'grenade',
        'damage': 300,
        //press 3 for grenade
        'keyCode': 51
    }, 

    'mine': {
        'name': 'mine',
        'damage': 300,
        //press 4 for mine
        'keyCode': 52
    },

    'barrel': {
        'name': 'barrel',
        'damage': 400,
        //press 5 for barrel
        'keyCode': 53
    }
}

//to change the weapons.
function changeWeapons (key) {
    if (key == weapons.pistol.keyCode) {
        playerWeapon = 'pistol';
    } else if (key == weapons.shotgun.keyCode) {
        if(noWeapons[1] > 0) {
            playerWeapon = 'shotgun';
        }
    } else if (key == weapons.grenade.keyCode) {
        if (noWeapons[2] > 0) {
            playerWeapon = 'grenade';
        }
    } else if (key == weapons.mine.keyCode) {
        if (noWeapons[3] > 0) {
            playerWeapon = 'mine';
        }
    } else if (key == weapons.barrel.keyCode) {
        if (noWeapons[4] > 0) {
            playerWeapon = 'barrel';
        }
    }
}  
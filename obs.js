// 24x40 circles 

function init () {
    console.log("in init");
    cs = 25
    es = cs * 3
    canvas = document.getElementById("mycanvas")
    pen = canvas.getContext('2d')
    h = 600
    w = 1000   
    pen.fillStyle = "blue"
    pen.fillRect(cs*36,cs*10,es,es)

    enemy1 = {
        direction: "downwards",
        top: 0,
        bottom: cs * 3,
        left: cs*10,
        right : cs*13,
    },
    enemy2 = {
        direction: "upwards",
        top: cs*21,
        bottom: 600,
        left: cs*18,
        right : cs*21,
    },
    enemy3 = {
        direction: "downwards",
        top: 0,
        bottom: cs * 3,
        left: cs*26,
        right : cs*29,
    },

    player = {
        top: cs*10,
        bottom: cs * 13,
        left: cs,
        right : cs*4,
    }

    document.addEventListener("keydown",updatePlayer)
}

function draw() {
    pen.clearRect(0,0,800,600)
    drawenemy()
    drawplayer()

}
function update() {
    updateEnemies()
    updatePlayer()
}

function updateEnemies () {
    if(enemy1.direction == "downwards" && enemy1.bottom > 600)
        enemy1.direction = "upwards"
    else if(enemy1.direction == "upwards" && enemy1.top < 0)
        enemy1.direction = "downwards"

    if(enemy1.direction == "upwards") {
        enemy1.top -= 15;
        enemy1.bottom -= 15;
    } else {
        enemy1.top += 15;
        enemy1.bottom += 15;
    }


    if(enemy2.direction == "downwards" && enemy2.bottom > 600)
        enemy2.direction = "upwards"
    else if(enemy2.direction == "upwards" && enemy2.top < 0)
        enemy2.direction = "downwards"

    if(enemy2.direction == "upwards") {
        enemy2.top -= 30;
        enemy2.bottom -= 30;
    } else {
        enemy2.top += 30;
        enemy2.bottom += 30;
    }


    if(enemy3.direction == "downwards" && enemy3.bottom > 600)
        enemy3.direction = "upwards"
    else if(enemy3.direction == "upwards" && enemy3.top < 0)
        enemy3.direction = "downwards"

    if(enemy3.direction == "upwards") {
        enemy3.top -= 20;
        enemy3.bottom -= 20;
    } else {
        enemy3.top += 20;
        enemy3.bottom += 20;
    }
} 

function updatePlayer(e) {
    if(e.keyCode == 37) {
        player.left -= 30
        player.right -= 30
    }
    else if(e.keyCode == 38) {
        player.top -= 30
        player.bottom -= 30
    }
    else if(e.keyCode == 39) {
        player.left += 30
        player.right += 30
    }          
    else if(e.keyCode == 40) {
        player.top += 30
        player.bottom += 30
    }
       
}
    
function drawenemy() {
    pen.fillStyle = "red"
    pen.fillRect(enemy1.left,enemy1.top,es,es)
    pen.fillRect(enemy2.left,enemy2.top,es,es)
    pen.fillRect(enemy3.left,enemy3.top,es,es)
}

function drawplayer() {
    pen.fillStyle = "yellow"
    pen.fillRect(player.left,player.top,es,es)
}

function checkcollide () {
    if(player.right > enemy1.left && player.left < enemy1.right)
    checkcollide1()
    else if(player.right > enemy2.left && player.left < enemy2.right)
    checkcollide2()
    else if(player.right > enemy3.left && player.left < enemy3.right)
    checkcollide3()
}
function checkcollide1() {
    if((player.top > enemy1.top && player.top < enemy1.bottom) || (player.bottom > enemy1.top && player.top < enemy1.bottom)) {
    clearInterval(f)
    console.log("Dead by 1");
    }
    
}
function checkcollide2() {
    if((player.top > enemy2.top && player.top < enemy2.bottom) || (player.bottom > enemy2.top && player.top < enemy2.bottom)) {
        clearInterval(f)
        console.log("Dead by 2");
        }
}

function checkcollide3() {
    if((player.top > enemy3.top && player.top < enemy3.bottom) || (player.bottom > enemy3.top && player.top < enemy3.bottom)) {
        clearInterval(f)
        console.log("Dead by 3");
        }
}



function gameloop () {
    checkcollide()
    draw()
    update()
}


init()

var f = setInterval(gameloop, 40);
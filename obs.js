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
        direction: "right"
    }
}


function draw() {
    pen.clearRect(cs*10,0,600,1000)
    drawenemy()
    drawplayer()

}
    
    
    
function drawenemy() {
    pen.fillStyle = "red"
    pen.fillRect(enemy1.left,enemy1.top,es,es)
    pen.fillRect(enemy2.left,enemy2.top,es,es)
    pen.fillRect(enemy3.left,enemy3.top,es,es)
}

function drawplayer() {
    pen.fillStyle = "yellow"
    pen.fillRect(cs,cs*10,es,es)
}

function update() {
    if(enemy1.direction == "downwards" && enemy1.bottom > 600)
        enemy1.direction = "upwards"
    else if(enemy1.direction == "upwards" && enemy1.top < 0)
        enemy1.direction = "downwards"

    if(enemy1.direction == "upwards") {
        enemy1.top -= 2;
        enemy1.bottom -= 2;
    } else {
        enemy1.top += 2;
        enemy1.bottom += 2;
    }


    if(enemy2.direction == "downwards" && enemy2.bottom > 600)
        enemy2.direction = "upwards"
    else if(enemy1.direction == "upwards" && enemy2.top < 0)
        enemy2.direction = "downwards"

    if(enemy2.direction == "upwards") {
        enemy2.top -= 2;
        enemy2.bottom -= 2;
    } else {
        enemy2.top += 2;
        enemy2.bottom += 2;
    }


    if(enemy3.direction == "downwards" && enemy3.bottom > 600)
        enemy3.direction = "upwards"
    else if(enemy3.direction == "upwards" && enemy3.top < 0)
        enemy3.direction = "downwards"

    if(enemy3.direction == "upwards") {
        enemy3.top -= 2;
        enemy3.bottom -= 2;
    } else {
        enemy3.top += 2;
        enemy3.bottom += 2;
    }
} 

function gameloop () {
    draw()
    update()
}

init()
var f = setInterval(gameloop, 1);
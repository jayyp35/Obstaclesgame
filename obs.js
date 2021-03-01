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

    enemy = {
        direction: "downwards",
        top: 0,
        bottom: cs * 3,
        left: cs*10,
        right : cs*13,
    }

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
    pen.fillRect(enemy.left,enemy.top,es,es)
    // pen.fillRect(cs*16,cs*21,es,es)
    // pen.fillRect(cs*22,0,es,es)
    // pen.fillRect(cs*28,cs*21,es,es)
}

function drawplayer() {
    pen.fillStyle = "yellow"
    pen.fillRect(cs,cs*10,es,es)
}

function update() {
    if(enemy.direction == "downwards" && enemy.bottom > 600)
        enemy.direction = "upwards"
    else if(enemy.direction == "upwards" && enemy.top < 0)
        enemy.direction = "downwards"

    if(enemy.direction == "upwards") {
        enemy.top -= 2;
        enemy.bottom -= 2;
    } else {
        enemy.top += 2;
        enemy.bottom += 2;
    }
} 

function gameloop () {
    draw()
    update()
}

init()
var f = setInterval(gameloop, 10);
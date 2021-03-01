// 24x40 circles 

function init () {
    console.log("in init");
    cs = 25
    es = cs * 3
    canvas = document.getElementById("mycanvas")
    pen = canvas.getContext('2d')
    h = 600
    w = 1000
    pen.fillStyle = "red"
    pen.fillRect(cs*10,0,es,es)
    pen.fillRect(cs*16,cs*21,es,es)
    pen.fillRect(cs*22,0,es,es)
    pen.fillRect(cs*28,cs*21,es,es)
    pen.fillStyle = "yellow"
    pen.fillRect(cs,cs*10,es,es)
    pen.fillStyle = "blue"
    pen.fillRect(cs*36,cs*10,es,es)
}

function draw() {
    console.log("in draw");
    img = new Image();
    img.src = "./resources/enemysmall.png"
    pen.drawImage(img,40,40)
}

init();
draw();
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

var mouse = {
    x: canvas.width/2,
    y: canvas.height/2
}

document.addEventListener("mousedown",(e)=>{
    var border = canvas.getBoundingClientRect();
    mouse.x = e.x - border.left;
    mouse.y = e.y - border.top;
})

class MC {
    constructor(){
        this.x = mouse.x,
        this.y = mouse.y,
        this.size = 40
    }

    update(){
        var dx = this.x - mouse.x;
        var dy = this.y - mouse.y;

        if (mouse.x != this.x){
            this.x -= dx/30;
        }

        if (mouse.y != this.y){
            this.y -= dy/30;
        }
    }

    draw(){
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
}

const mc = new MC ();

function animate() {
    ctx.clearRect(0, 0, 800, 600);
    mc.update();
    mc.draw();
    requestAnimationFrame(animate);
}

animate();
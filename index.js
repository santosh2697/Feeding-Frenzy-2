const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

var mouse = {
    x: canvas.width/2,
    y: canvas.height/2
}

var border = canvas.getBoundingClientRect();

document.addEventListener("mousedown",(e)=>{
    mouse.x = e.x - border.left;
    mouse.y = e.y - border.top;
})

class NPC {
    constructor(){
        this.x = -25 - Math.random()*canvas.width
        this.y = Math.random()*canvas.height
        this.size = Math.random()*50 + 10
        this.speed = Math.random()*5
    }

    update(){
        if (this.x > canvas.width + this.size){
            this.reset();
        }
        else this.x += this.speed;

    }

    reset(){
        this.x = -25 - Math.random()*canvas.width
        this.y = Math.random()*canvas.height
        this.size = Math.random()*50 + 10
        this.speed = Math.random()*5
    }

    draw(){
        ctx.fillStyle = "green"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill()
    }
}

var listOfNpc = [];
for (let index = 0; index < 10; index++) {
    listOfNpc.push(new NPC ())    
}

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
            this.x -= dx/20;
        }

        if (mouse.y != this.y){
            this.y -= dy/20;
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
var score = 0;
var gameOver = false;

function animate() {
    ctx.clearRect(0, 0, 800, 600);
    
    ctx.font = "30px Arial";
    ctx.strokeText("Score:" + score, 10, 30);

    for (let index = 0; index < listOfNpc.length; index++) {
        listOfNpc[index].update();
        listOfNpc[index].draw();
    }

    mc.update();
    mc.draw();

    for (let index = 0; index < listOfNpc.length; index++) {
        var isChecked = false;
        var dx = Math.abs(mc.x - listOfNpc[index].x);
        var dy = Math.abs(mc.y - listOfNpc[index].y);
        var distance = Math.sqrt(dx*dx + dy*dy);
        if (distance <= mc.size/2 + listOfNpc[index].size/2){
            if (listOfNpc[index].size <= mc.size){
                if (!isChecked){
                    if (!gameOver) score++;
                }
                isChecked = true;

                listOfNpc[index].reset();
            }
            else {
                gameOver = true;
            }
        }
    }
    if (gameOver){
        ctx.font = "100px Arial";
        ctx.strokeText("Game Over", canvas.width/2, canvas.height/2);
    }
    requestAnimationFrame(animate);
}

animate();
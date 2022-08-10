const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

export default class NPC {
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
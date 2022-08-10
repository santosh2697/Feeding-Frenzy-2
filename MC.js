import {mouse} from "./index.js"

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

export default class MC {
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
"use strict";
var L10_FlowerMeadow;
(function (L10_FlowerMeadow) {
    class Flower {
        constructor(_position) {
            console.log("Bee constructor");
            let x = Math.floor(Math.random() * 800);
            let y = Math.floor(Math.random() * 0);
            this.position = new L10_FlowerMeadow.Vector(x, y);
        }
        drawSunflower() {
            console.log("Sunflower draw");
            L10_FlowerMeadow.crc2.save();
            L10_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L10_FlowerMeadow.crc2.strokeStyle = "#214f2d";
            L10_FlowerMeadow.crc2.lineWidth = 4;
            L10_FlowerMeadow.crc2.fillStyle = "#214f2d";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.moveTo(50, 450);
            L10_FlowerMeadow.crc2.lineTo(50, 600);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.stroke();
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.stroke();
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.ellipse(70, 580, 15, 30, 10, 30, 50);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.ellipse(30, 580, 15, 30, 15, 30, 50);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.fillStyle = "#ffe629";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.arc(50, 450, 30, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.fillStyle = "#593611";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.arc(50, 450, 15, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.restore();
        }
        drawBlueFlower() {
            console.log("Sunflower draw");
            L10_FlowerMeadow.crc2.save();
            L10_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L10_FlowerMeadow.crc2.strokeStyle = "#214f2d";
            L10_FlowerMeadow.crc2.lineWidth = 4;
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.moveTo(400, 550);
            L10_FlowerMeadow.crc2.lineTo(400, 600);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.stroke();
            L10_FlowerMeadow.crc2.fillStyle = "#46accf";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.moveTo(380, 550);
            L10_FlowerMeadow.crc2.lineTo(420, 550);
            L10_FlowerMeadow.crc2.lineTo(400, 510);
            L10_FlowerMeadow.crc2.lineTo(380, 550);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.fillStyle = "#46accf";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.moveTo(380, 520);
            L10_FlowerMeadow.crc2.lineTo(420, 520);
            L10_FlowerMeadow.crc2.lineTo(400, 560);
            L10_FlowerMeadow.crc2.lineTo(380, 520);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.restore();
        }
        drawPinkFlower() {
            console.log("Sunflower draw");
            L10_FlowerMeadow.crc2.save();
            L10_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L10_FlowerMeadow.crc2.strokeStyle = "#214f2d";
            L10_FlowerMeadow.crc2.lineWidth = 4;
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.moveTo(130, 500);
            L10_FlowerMeadow.crc2.lineTo(150, 600);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.stroke();
            L10_FlowerMeadow.crc2.strokeStyle = "#214f2d";
            L10_FlowerMeadow.crc2.lineWidth = 4;
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.moveTo(190, 500);
            L10_FlowerMeadow.crc2.lineTo(150, 600);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.stroke();
            //pink
            L10_FlowerMeadow.crc2.fillStyle = "#b0438a";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.arc(130, 500, 10, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.fillStyle = "#b0438a";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.arc(133, 520, 10, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.fillStyle = "#b0438a";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.arc(140, 510, 10, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.fillStyle = "#b0438a";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.arc(120, 510, 10, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            //violet
            L10_FlowerMeadow.crc2.fillStyle = "#39114d";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.arc(190, 500, 15, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.fillStyle = "#39114d";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.arc(193, 520, 15, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.fillStyle = "#39114d";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.arc(200, 510, 15, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.fillStyle = "#39114d";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.arc(180, 510, 15, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.restore();
        }
    }
    L10_FlowerMeadow.Flower = Flower;
})(L10_FlowerMeadow || (L10_FlowerMeadow = {}));
//# sourceMappingURL=flower.js.map
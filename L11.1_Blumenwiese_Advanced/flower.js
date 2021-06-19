"use strict";
var L11_FlowerMeadow_Advanced;
(function (L11_FlowerMeadow_Advanced) {
    class Flower {
        constructor(_position) {
            // console.log("Bee constructor");
            let x = Math.floor(Math.random() * 800);
            let y = Math.floor(Math.random() * 0);
            this.position = new L11_FlowerMeadow_Advanced.Vector(x, y);
        }
        nectarLvl() {
            // console.log("nectar level");
        }
        drawSunflower() {
            // console.log("Sunflower draw");
            L11_FlowerMeadow_Advanced.crc2.save();
            L11_FlowerMeadow_Advanced.crc2.translate(this.position.x, this.position.y);
            L11_FlowerMeadow_Advanced.crc2.strokeStyle = "#214f2d";
            L11_FlowerMeadow_Advanced.crc2.lineWidth = 4;
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#214f2d";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.moveTo(50, 450);
            L11_FlowerMeadow_Advanced.crc2.lineTo(50, 600);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.stroke();
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.stroke();
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.ellipse(70, 580, 15, 30, 10, 30, 50);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.ellipse(30, 580, 15, 30, 15, 30, 50);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#ffe629";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.arc(50, 450, 30, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#593611";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.arc(50, 450, 15, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.restore();
        }
        drawBlueFlower() {
            // console.log("Sunflower draw");
            L11_FlowerMeadow_Advanced.crc2.save();
            L11_FlowerMeadow_Advanced.crc2.translate(this.position.x, this.position.y);
            L11_FlowerMeadow_Advanced.crc2.strokeStyle = "#214f2d";
            L11_FlowerMeadow_Advanced.crc2.lineWidth = 4;
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.moveTo(400, 550);
            L11_FlowerMeadow_Advanced.crc2.lineTo(400, 600);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.stroke();
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#46accf";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.moveTo(380, 550);
            L11_FlowerMeadow_Advanced.crc2.lineTo(420, 550);
            L11_FlowerMeadow_Advanced.crc2.lineTo(400, 510);
            L11_FlowerMeadow_Advanced.crc2.lineTo(380, 550);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#46accf";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.moveTo(380, 520);
            L11_FlowerMeadow_Advanced.crc2.lineTo(420, 520);
            L11_FlowerMeadow_Advanced.crc2.lineTo(400, 560);
            L11_FlowerMeadow_Advanced.crc2.lineTo(380, 520);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.restore();
        }
        drawPinkFlower() {
            // console.log("Sunflower draw");
            L11_FlowerMeadow_Advanced.crc2.save();
            L11_FlowerMeadow_Advanced.crc2.translate(this.position.x, this.position.y);
            L11_FlowerMeadow_Advanced.crc2.strokeStyle = "#214f2d";
            L11_FlowerMeadow_Advanced.crc2.lineWidth = 4;
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.moveTo(130, 500);
            L11_FlowerMeadow_Advanced.crc2.lineTo(150, 600);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.stroke();
            L11_FlowerMeadow_Advanced.crc2.strokeStyle = "#214f2d";
            L11_FlowerMeadow_Advanced.crc2.lineWidth = 4;
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.moveTo(190, 500);
            L11_FlowerMeadow_Advanced.crc2.lineTo(150, 600);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.stroke();
            //pink
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#b0438a";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.arc(130, 500, 10, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#b0438a";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.arc(133, 520, 10, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#b0438a";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.arc(140, 510, 10, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#b0438a";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.arc(120, 510, 10, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            //violet
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#39114d";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.arc(190, 500, 15, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#39114d";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.arc(193, 520, 15, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#39114d";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.arc(200, 510, 15, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#39114d";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.arc(180, 510, 15, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.restore();
        }
    }
    L11_FlowerMeadow_Advanced.Flower = Flower;
})(L11_FlowerMeadow_Advanced || (L11_FlowerMeadow_Advanced = {}));
//# sourceMappingURL=flower.js.map
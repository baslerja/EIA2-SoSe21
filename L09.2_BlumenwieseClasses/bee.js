"use strict";
var L09_FlowerMeadow;
(function (L09_FlowerMeadow) {
    class Bee {
        constructor(_position) {
            console.log("Bee constructor");
            this.position = new L09_FlowerMeadow.Vector(650, 450);
            this.velocity = new L09_FlowerMeadow.Vector(650, 450);
            this.velocity.random(100, 200);
        }
        move(_timeslice) {
            console.log("Bee move");
            let offset = new L09_FlowerMeadow.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_FlowerMeadow.crc2.canvas.height;
            if (this.position.y < 0)
                this.position.y += L09_FlowerMeadow.crc2.canvas.height;
            if (this.position.x > L09_FlowerMeadow.crc2.canvas.width)
                this.position.x -= L09_FlowerMeadow.crc2.canvas.width;
            if (this.position.y > L09_FlowerMeadow.crc2.canvas.height)
                this.position.y -= L09_FlowerMeadow.crc2.canvas.height;
        }
        draw() {
            console.log("Bee draw");
            L09_FlowerMeadow.crc2.save();
            L09_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L09_FlowerMeadow.crc2.fillStyle = "lightblue";
            L09_FlowerMeadow.crc2.beginPath();
            L09_FlowerMeadow.crc2.arc(450, 360, 13, 0, 2 * Math.PI);
            L09_FlowerMeadow.crc2.closePath();
            L09_FlowerMeadow.crc2.fill();
            L09_FlowerMeadow.crc2.fillStyle = "lightblue";
            L09_FlowerMeadow.crc2.beginPath();
            L09_FlowerMeadow.crc2.arc(465, 360, 13, 0, 2 * Math.PI);
            L09_FlowerMeadow.crc2.closePath();
            L09_FlowerMeadow.crc2.fill();
            L09_FlowerMeadow.crc2.fillStyle = "#edd207";
            L09_FlowerMeadow.crc2.beginPath();
            L09_FlowerMeadow.crc2.ellipse(450, 380, 15, 25, Math.PI / 2, 30, 40);
            L09_FlowerMeadow.crc2.closePath();
            L09_FlowerMeadow.crc2.fill();
            L09_FlowerMeadow.crc2.restore();
        }
    }
    L09_FlowerMeadow.Bee = Bee;
})(L09_FlowerMeadow || (L09_FlowerMeadow = {}));
//# sourceMappingURL=bee.js.map
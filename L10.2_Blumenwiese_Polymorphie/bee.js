"use strict";
var L10_FlowerMeadow;
(function (L10_FlowerMeadow) {
    class Bee extends L10_FlowerMeadow.Moveable {
        constructor(_position) {
            console.log("Bee constructor");
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_FlowerMeadow.Vector(650, 450);
            this.velocity = new L10_FlowerMeadow.Vector(600, 0);
            this.velocity.random(150, 30);
        }
        draw() {
            console.log("Bee draw");
            L10_FlowerMeadow.crc2.save();
            L10_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L10_FlowerMeadow.crc2.fillStyle = "lightblue";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.arc(450, 360, 13, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.fillStyle = "lightblue";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.arc(465, 360, 13, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.fillStyle = "#edd207";
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.ellipse(450, 380, 15, 25, Math.PI / 2, 30, 40);
            L10_FlowerMeadow.crc2.closePath();
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.restore();
        }
    }
    L10_FlowerMeadow.Bee = Bee;
})(L10_FlowerMeadow || (L10_FlowerMeadow = {}));
//# sourceMappingURL=bee.js.map
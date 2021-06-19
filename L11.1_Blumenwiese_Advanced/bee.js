"use strict";
var L11_FlowerMeadow_Advanced;
(function (L11_FlowerMeadow_Advanced) {
    class Bee extends L11_FlowerMeadow_Advanced.Moveable {
        // position: Vector;
        // velocity: Vector;
        constructor(_position) {
            // console.log("Bee constructor");
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11_FlowerMeadow_Advanced.Vector(650, 450);
            this.velocity = new L11_FlowerMeadow_Advanced.Vector(600, 0);
            this.velocity.random(150, 30);
        }
        draw() {
            // console.log("Bee draw");
            L11_FlowerMeadow_Advanced.crc2.save();
            L11_FlowerMeadow_Advanced.crc2.translate(this.position.x, this.position.y);
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "lightblue";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.arc(450, 360, 13, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "lightblue";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.arc(465, 360, 13, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.fillStyle = "#edd207";
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.ellipse(450, 380, 15, 25, Math.PI / 2, 30, 40);
            L11_FlowerMeadow_Advanced.crc2.closePath();
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.restore();
        }
    }
    L11_FlowerMeadow_Advanced.Bee = Bee;
})(L11_FlowerMeadow_Advanced || (L11_FlowerMeadow_Advanced = {}));
//# sourceMappingURL=bee.js.map
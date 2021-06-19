"use strict";
var L11_FlowerMeadow_Advanced;
(function (L11_FlowerMeadow_Advanced) {
    class Cloud extends L11_FlowerMeadow_Advanced.Moveable {
        // position: Vector;
        // velocity: Vector;
        constructor(_position) {
            // console.log("Cloud constructor");
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11_FlowerMeadow_Advanced.Vector(0, 150);
            this.velocity = new L11_FlowerMeadow_Advanced.Vector(100, 0);
        }
        draw() {
            // console.log("Cloud draw");
            let gradientCloud = L11_FlowerMeadow_Advanced.crc2.createLinearGradient(0, 0, 0, 200);
            gradientCloud.addColorStop(0, "HSLA(0, 100%, 100%, 0.7)");
            gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L11_FlowerMeadow_Advanced.crc2.save();
            L11_FlowerMeadow_Advanced.crc2.translate(this.position.x, this.position.y);
            L11_FlowerMeadow_Advanced.crc2.beginPath();
            L11_FlowerMeadow_Advanced.crc2.arc(40, 40, 40, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.arc(110, 25, 50, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.arc(170, 40, 40, 0, 2 * Math.PI);
            L11_FlowerMeadow_Advanced.crc2.fillStyle = gradientCloud;
            L11_FlowerMeadow_Advanced.crc2.fill();
            L11_FlowerMeadow_Advanced.crc2.restore();
        }
    }
    L11_FlowerMeadow_Advanced.Cloud = Cloud;
})(L11_FlowerMeadow_Advanced || (L11_FlowerMeadow_Advanced = {}));
//# sourceMappingURL=cloud.js.map
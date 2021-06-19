"use strict";
var L11_FlowerMeadow_Advanced;
(function (L11_FlowerMeadow_Advanced) {
    class Moveable {
        constructor(_position) {
            // console.log("Moveable constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L11_FlowerMeadow_Advanced.Vector(650, 450);
            this.velocity = new L11_FlowerMeadow_Advanced.Vector(800, 0);
        }
        move(_timeslice) {
            // console.log("Moveable move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_FlowerMeadow_Advanced.crc2.canvas.height;
            if (this.position.y < 0)
                this.position.y += L11_FlowerMeadow_Advanced.crc2.canvas.height;
            if (this.position.x > L11_FlowerMeadow_Advanced.crc2.canvas.height)
                this.position.x -= L11_FlowerMeadow_Advanced.crc2.canvas.width;
            if (this.position.y > L11_FlowerMeadow_Advanced.crc2.canvas.height)
                this.position.y -= L11_FlowerMeadow_Advanced.crc2.canvas.height;
        }
        draw() {
            // console.log("Moveable draw");
        }
    }
    L11_FlowerMeadow_Advanced.Moveable = Moveable;
})(L11_FlowerMeadow_Advanced || (L11_FlowerMeadow_Advanced = {}));
//# sourceMappingURL=moveable.js.map
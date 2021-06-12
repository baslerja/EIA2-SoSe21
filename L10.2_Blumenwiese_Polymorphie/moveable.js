"use strict";
var L10_FlowerMeadow;
(function (L10_FlowerMeadow) {
    class Moveable {
        constructor(_position) {
            console.log("Moveable constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L10_FlowerMeadow.Vector(650, 450);
            this.velocity = new L10_FlowerMeadow.Vector(800, 0);
        }
        move(_timeslice) {
            console.log("Moveable move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_FlowerMeadow.crc2.canvas.height;
            if (this.position.y < 0)
                this.position.y += L10_FlowerMeadow.crc2.canvas.height;
            if (this.position.x > L10_FlowerMeadow.crc2.canvas.height)
                this.position.x -= L10_FlowerMeadow.crc2.canvas.width;
            if (this.position.y > L10_FlowerMeadow.crc2.canvas.height)
                this.position.y -= L10_FlowerMeadow.crc2.canvas.height;
        }
        draw() {
            console.log("Moveable draw");
        }
    }
    L10_FlowerMeadow.Moveable = Moveable;
})(L10_FlowerMeadow || (L10_FlowerMeadow = {}));
//# sourceMappingURL=moveable.js.map
"use strict";
var L10_FlowerMeadow;
(function (L10_FlowerMeadow) {
    class Cloud extends L10_FlowerMeadow.Moveable {
        constructor(_position) {
            console.log("Cloud constructor");
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_FlowerMeadow.Vector(0, 150);
            this.velocity = new L10_FlowerMeadow.Vector(100, 0);
        }
        // move(_timeslice: number): void {
        //     console.log("Cloud move");
        //     let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
        //     offset.scale(_timeslice);
        //     this.position.add(offset);
        //     if (this.position.x < 0)
        //         this.position.x += crc2.canvas.height;
        //     if (this.position.y < 0)
        //         this.position.y += crc2.canvas.height;
        //     if (this.position.x > crc2.canvas.width)
        //         this.position.x -= crc2.canvas.width;
        //     if (this.position.y > crc2.canvas.height)
        //         this.position.y -= crc2.canvas.height;
        // }
        draw() {
            console.log("Cloud draw");
            let gradientCloud = L10_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, 200);
            gradientCloud.addColorStop(0, "HSLA(0, 100%, 100%, 0.7)");
            gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L10_FlowerMeadow.crc2.save();
            L10_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L10_FlowerMeadow.crc2.beginPath();
            L10_FlowerMeadow.crc2.arc(40, 40, 40, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.arc(110, 25, 50, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.arc(170, 40, 40, 0, 2 * Math.PI);
            L10_FlowerMeadow.crc2.fillStyle = gradientCloud;
            L10_FlowerMeadow.crc2.fill();
            L10_FlowerMeadow.crc2.restore();
        }
    }
    L10_FlowerMeadow.Cloud = Cloud;
})(L10_FlowerMeadow || (L10_FlowerMeadow = {}));
//# sourceMappingURL=cloud.js.map
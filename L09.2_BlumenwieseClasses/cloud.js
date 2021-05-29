"use strict";
var L09_FlowerMeadow;
(function (L09_FlowerMeadow) {
    class Cloud {
        constructor(_position, _x, _y) {
            console.log("Cloud constructor");
            this.position = new L09_FlowerMeadow.Vector(_x, _y);
            this.velocity = new L09_FlowerMeadow.Vector(0, 100);
            this.velocity.random(80, 150);
        }
        move(_timeslice) {
            console.log("Cloud move");
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
            console.log("Cloud draw");
            let cloudParticles = 20;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradientCloud = L09_FlowerMeadow.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradientCloud.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09_FlowerMeadow.crc2.save();
            L09_FlowerMeadow.crc2.translate(this.position.x, this.position.y);
            L09_FlowerMeadow.crc2.fillStyle = gradientCloud;
            for (let drawn = 0; drawn < cloudParticles; drawn++) {
                L09_FlowerMeadow.crc2.save();
                let x = (Math.random() - 0.5) * 3;
                let y = -(Math.random() * 3);
                L09_FlowerMeadow.crc2.translate(x, y);
                L09_FlowerMeadow.crc2.fill(particle);
                L09_FlowerMeadow.crc2.restore();
            }
            L09_FlowerMeadow.crc2.restore();
        }
    }
    L09_FlowerMeadow.Cloud = Cloud;
})(L09_FlowerMeadow || (L09_FlowerMeadow = {}));
//# sourceMappingURL=cloud.js.map
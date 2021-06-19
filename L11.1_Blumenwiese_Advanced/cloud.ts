namespace L11_FlowerMeadow_Advanced {
    export class Cloud extends Moveable {
        // position: Vector;
        // velocity: Vector;

        constructor(_position: Vector) {
            // console.log("Cloud constructor");

            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 150);

            this.velocity = new Vector(100, 0);
        }

        public draw(): void {
            // console.log("Cloud draw");

            let gradientCloud: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 200);

            gradientCloud.addColorStop(0, "HSLA(0, 100%, 100%, 0.7)");
            gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();

            crc2.arc(40, 40, 40, 0, 2 * Math.PI);
            crc2.arc(110, 25, 50, 0, 2 * Math.PI);
            crc2.arc(170, 40, 40, 0, 2 * Math.PI);
        
            crc2.fillStyle = gradientCloud;
            crc2.fill();

            crc2.restore();
        }

    }
}
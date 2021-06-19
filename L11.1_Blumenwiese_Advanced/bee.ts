namespace L11_FlowerMeadow_Advanced {
    export class Bee extends Moveable {
        // position: Vector;
        // velocity: Vector;

        constructor(_position: Vector) {
            // console.log("Bee constructor");

            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(650, 450);

            this.velocity = new Vector(600, 0);
            this.velocity.random(150, 30);
        }

        public draw(): void {
            // console.log("Bee draw");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "lightblue";
            crc2.beginPath();
            crc2.arc(450, 360, 13, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "lightblue";
            crc2.beginPath();
            crc2.arc(465, 360, 13, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "#edd207";
            crc2.beginPath();
            crc2.ellipse(450, 380, 15, 25, Math.PI / 2, 30, 40);
            crc2.closePath();
            crc2.fill();

            crc2.restore();
        }
    }
}
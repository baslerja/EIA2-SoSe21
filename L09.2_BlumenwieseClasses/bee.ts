namespace L09_FlowerMeadow {
    export class Bee {
        position: Vector;
        velocity: Vector;

        constructor(_position?: Vector) {
            console.log("Bee constructor");
            this.position = new Vector(650, 450); 
            this.velocity = new Vector(650, 450); 
            this.velocity.random(100, 200);
        }

        move(_timeslice: number): void {
            console.log("Bee move");

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.height;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            console.log("Bee draw");

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
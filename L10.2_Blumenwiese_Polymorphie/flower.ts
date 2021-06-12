namespace L10_FlowerMeadow {
    export class Flower {
        position: Vector;
        velocity: Vector;

        constructor(_position?: Vector) {
            console.log("Bee constructor");
            let x: number = Math.floor(Math.random() * 800);
            let y: number = Math.floor(Math.random() * 0);
            this.position = new Vector(x, y);
        }

        drawSunflower(): void {
            console.log("Sunflower draw");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.strokeStyle = "#214f2d";
            crc2.lineWidth = 4;
            crc2.fillStyle = "#214f2d";
            crc2.beginPath();
            crc2.moveTo(50, 450);
            crc2.lineTo(50, 600);
            crc2.closePath();
            crc2.stroke();
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.ellipse(70, 580, 15, 30, 10, 30, 50);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.ellipse(30, 580, 15, 30, 15, 30, 50);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "#ffe629";
            crc2.beginPath();
            crc2.arc(50, 450, 30, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "#593611";
            crc2.beginPath();
            crc2.arc(50, 450, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.restore();

        }

        drawBlueFlower(): void {
            console.log("Sunflower draw");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.strokeStyle = "#214f2d";
            crc2.lineWidth = 4;
            crc2.beginPath();
            crc2.moveTo(400, 550);
            crc2.lineTo(400, 600);
            crc2.closePath();
            crc2.stroke();

            crc2.fillStyle = "#46accf";
            crc2.beginPath();
            crc2.moveTo(380, 550);
            crc2.lineTo(420, 550);
            crc2.lineTo(400, 510);
            crc2.lineTo(380, 550);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "#46accf";
            crc2.beginPath();
            crc2.moveTo(380, 520);
            crc2.lineTo(420, 520);
            crc2.lineTo(400, 560);
            crc2.lineTo(380, 520);
            crc2.closePath();
            crc2.fill();

            crc2.restore();

        }

        drawPinkFlower(): void {
            console.log("Sunflower draw");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.strokeStyle = "#214f2d";
            crc2.lineWidth = 4;
            crc2.beginPath();
            crc2.moveTo(130, 500);
            crc2.lineTo(150, 600);
            crc2.closePath();
            crc2.stroke();

            crc2.strokeStyle = "#214f2d";
            crc2.lineWidth = 4;
            crc2.beginPath();
            crc2.moveTo(190, 500);
            crc2.lineTo(150, 600);
            crc2.closePath();
            crc2.stroke();

            //pink
            crc2.fillStyle = "#b0438a";
            crc2.beginPath();
            crc2.arc(130, 500, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "#b0438a";
            crc2.beginPath();
            crc2.arc(133, 520, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "#b0438a";
            crc2.beginPath();
            crc2.arc(140, 510, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "#b0438a";
            crc2.beginPath();
            crc2.arc(120, 510, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //violet
            crc2.fillStyle = "#39114d";
            crc2.beginPath();
            crc2.arc(190, 500, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "#39114d";
            crc2.beginPath();
            crc2.arc(193, 520, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "#39114d";
            crc2.beginPath();
            crc2.arc(200, 510, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "#39114d";
            crc2.beginPath();
            crc2.arc(180, 510, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.restore();
        }
    }
}
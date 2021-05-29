namespace L09_FlowerMeadow {
    export class Cloud {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector, _x: number, _y: number) { 
            console.log("Cloud constructor");

            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 100);
            this.velocity.random(80, 150);
        }

        move(_timeslice: number): void {
            console.log("Cloud move");

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
            console.log("Cloud draw");

            let cloudParticles: number = 20;
            let radiusParticle: number = 50;
            let particle: Path2D = new Path2D();
            let gradientCloud: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradientCloud.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradientCloud;

            for (let drawn: number = 0; drawn < cloudParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * 3;
                let y: number = - (Math.random() * 3);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }

    }
}
namespace L10_FlowerMeadow {

    window.addEventListener("load", handleLoad);

    interface Vector {
        x: number;
        y: number;
    }

    let imageData: ImageData;

    export let crc2: CanvasRenderingContext2D;

    let moveables: Moveable[] = [];
    let flowers: Flower[] = [];

    let line: number = 0.7;


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * line;

        drawBackground();
        drawGras();

        createBees();
        createClouds();

        window.setInterval(update, 40);

        drawSun({ x: 250, y: 100 });
        drawMountains({ x: 0, y: horizon }, 80, 200, "darkgrey", "lightgrey");
        drawTree();
        drawBeeHive();

        createFlowers();

        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }

    function update(): void {
        console.log("update");

        crc2.putImageData(imageData, 0, 0);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }

    function createBees(): void {
        console.log("create bees");
        for (let i: number = 0; i < 15; i++) {
            let bee: Moveable = new Bee();
            moveables.push(bee);
        }
    }

    function createClouds(): void {
        console.log("create clouds");
        for (let i: number = 0; i < 2; i++) {

            let cloud: Moveable = new Cloud();
            moveables.push(cloud);
        }
    }

    function createFlowers(): void {
        console.log("create flowers");

        for (let i: number = 0; i < 5; i++) {
            let blueFlower: Flower = new Flower();
            blueFlower.drawBlueFlower();
            flowers.push(blueFlower);
        }

        for (let i: number = 0; i < 5; i++) {
            let pinkFlower: Flower = new Flower();
            pinkFlower.drawPinkFlower();
            flowers.push(pinkFlower);
        }

        for (let i: number = 0; i < 5; i++) {
            let sunflower: Flower = new Flower();
            sunflower.drawSunflower();
            flowers.push(sunflower);
        }
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(line, "white");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawGras(): void {
        console.log("Gras");

        crc2.save();

        crc2.fillStyle = "#3f8039";
        crc2.fillRect(0, 350, crc2.canvas.width, crc2.canvas.height);

        crc2.restore();
    }

    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let radius1: number = 15;
        let radius2: number = 100;
        let gradientSun: CanvasGradient = crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);

        gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradientSun.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradientSun;
        crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");

        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradientMountain: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradientMountain.addColorStop(0, _colorLow);
        gradientMountain.addColorStop(0.8, _colorHigh);

        crc2.fillStyle = gradientMountain;
        crc2.fill();
        crc2.restore();
    }

    function drawTree(): void {
        console.log("Tree");

        crc2.save();
        crc2.fillStyle = "#214f2d";

        crc2.beginPath();
        crc2.moveTo(150, 450);
        crc2.lineTo(250, 450);
        crc2.lineTo(200, 300);
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(155, 370);
        crc2.lineTo(245, 370);
        crc2.lineTo(200, 250);
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(260, 500);
        crc2.lineTo(360, 500);
        crc2.lineTo(310, 350);
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(265, 420);
        crc2.lineTo(355, 420);
        crc2.lineTo(310, 300);
        crc2.fill();

        crc2.restore();
    }

    function drawBeeHive(): void {
        console.log("BeeHive");

        crc2.save();
        crc2.fillStyle = "#b89018"; //crc2Pattern
        crc2.beginPath();
        crc2.moveTo(600, 550);
        crc2.lineTo(700, 550);
        crc2.lineTo(725, 500);
        crc2.lineTo(700, 400);
        crc2.lineTo(600, 400);
        crc2.lineTo(575, 500);
        crc2.lineTo(600, 550);
        crc2.closePath();
        crc2.fill();

        crc2.restore();
    }
}
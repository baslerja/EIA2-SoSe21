namespace L09_FlowerMeadow {

    window.addEventListener("load", handleLoad);

    interface Vector {
        x: number;
        y: number;
    }

    let imageData: ImageData;

    export let crc2: CanvasRenderingContext2D;

    let bees: Bee[] = [];
    let clouds: Cloud[] = [];
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
        drawSun({ x: 250, y: 100 });
        // drawCloud({ x: 550, y: 100 }, { x: 175, y: 75 });
        // drawCloud({ x: 650, y: 250 }, { x: 175, y: 75 });
        drawMountains({ x: 0, y: horizon }, 80, 200, "darkgrey", "lightgrey");
        drawTree();
        drawBeeHive();

        createBees();
        createFlowers();
        createClouds();

        imageData = crc2.getImageData(0, 0, 800, 600);

        window.setInterval(update, 20);
    }

    function createBees(): void {
        console.log("create bees");
        for (let i: number = 0; i < 15; i++) {
            let x: number = Math.floor(Math.random() * 800);
            let y: number = Math.floor(Math.random() * 600);
            let bee: Bee = new Bee();
            bee.move(1 / 50);
            bee.draw();
            bees.push(bee);
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
            flowers.push(pinkFlower);
        }

        for (let i: number = 0; i < 5; i++) {
            let sunflower: Flower = new Flower();
            flowers.push(sunflower);
        }
    }

    function createClouds(): void {
        console.log("create clouds");
        for (let i: number = 0; i < 2; i++) {

            let cloud: Cloud = new Cloud(); 
            cloud.move(1 / 50);
            cloud.draw();
            clouds.push(cloud);
        }
    }

    function update(): void {
        console.log("update");

        let horizon: number = crc2.canvas.height * line;

        drawBackground();
        drawGras();
        drawSun({ x: 250, y: 100 });
        // drawCloud({ x: 550, y: 100 }, { x: 175, y: 75 });
        // drawCloud({ x: 650, y: 250 }, { x: 175, y: 75 });
        drawMountains({ x: 0, y: horizon }, 80, 200, "darkgrey", "lightgrey");
        drawTree();
        drawBeeHive();
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

        /*let crc2Pattern: CanvasRenderingContext2D;
        let canvasPattern: HTMLCanvasElement = document.createElement("canvas");
        if (!canvasPattern)
            return;
        crc2Pattern = <CanvasRenderingContext2D>canvasPattern.getContext("2d");
 
        canvasPattern.width = 125;
        canvasPattern.height = 150;
 
        crc2Pattern.fillStyle = "yellow";
        crc2Pattern.fillRect(0, 0, canvasPattern.width, canvasPattern.height);
        crc2Pattern.moveTo(0, 2);
        crc2Pattern.lineTo(150, 2);
        crc2Pattern.stroke();
        crc2Pattern.strokeStyle = "brown";
        crc2Pattern.lineWidth = 4;
 
        let pattern: CanvasPattern = <CanvasPattern>crc2.createPattern(canvasPattern, "repeat");
        crc2.fillStyle = pattern;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);*/

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
"use strict";
var L09_FlowerMeadow;
(function (L09_FlowerMeadow) {
    window.addEventListener("load", handleLoad);
    let imageData;
    let bees = [];
    let clouds = [];
    let flowers = [];
    let line = 0.7;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_FlowerMeadow.crc2 = canvas.getContext("2d");
        let horizon = L09_FlowerMeadow.crc2.canvas.height * line;
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
        imageData = L09_FlowerMeadow.crc2.getImageData(0, 0, 800, 600);
        window.setInterval(update, 20);
    }
    function createBees() {
        console.log("create bees");
        for (let i = 0; i < 15; i++) {
            let x = Math.floor(Math.random() * 800);
            let y = Math.floor(Math.random() * 600);
            let bee = new L09_FlowerMeadow.Bee();
            bee.move(1 / 50);
            bee.draw();
            bees.push(bee);
        }
    }
    function createFlowers() {
        console.log("create flowers");
        for (let i = 0; i < 5; i++) {
            let blueFlower = new L09_FlowerMeadow.Flower();
            blueFlower.drawBlueFlower();
            flowers.push(blueFlower);
        }
        for (let i = 0; i < 5; i++) {
            let pinkFlower = new L09_FlowerMeadow.Flower();
            flowers.push(pinkFlower);
        }
        for (let i = 0; i < 5; i++) {
            let sunflower = new L09_FlowerMeadow.Flower();
            flowers.push(sunflower);
        }
    }
    function createClouds() {
        console.log("create clouds");
        for (let i = 0; i < 2; i++) {
            let cloud = new L09_FlowerMeadow.Cloud();
            cloud.move(1 / 50);
            cloud.draw();
            clouds.push(cloud);
        }
    }
    function update() {
        console.log("update");
        let horizon = L09_FlowerMeadow.crc2.canvas.height * line;
        drawBackground();
        drawGras();
        drawSun({ x: 250, y: 100 });
        // drawCloud({ x: 550, y: 100 }, { x: 175, y: 75 });
        // drawCloud({ x: 650, y: 250 }, { x: 175, y: 75 });
        drawMountains({ x: 0, y: horizon }, 80, 200, "darkgrey", "lightgrey");
        drawTree();
        drawBeeHive();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = L09_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, L09_FlowerMeadow.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(line, "white");
        L09_FlowerMeadow.crc2.fillStyle = gradient;
        L09_FlowerMeadow.crc2.fillRect(0, 0, L09_FlowerMeadow.crc2.canvas.width, L09_FlowerMeadow.crc2.canvas.height);
    }
    function drawGras() {
        console.log("Gras");
        L09_FlowerMeadow.crc2.save();
        L09_FlowerMeadow.crc2.fillStyle = "#3f8039";
        L09_FlowerMeadow.crc2.fillRect(0, 350, L09_FlowerMeadow.crc2.canvas.width, L09_FlowerMeadow.crc2.canvas.height);
        L09_FlowerMeadow.crc2.restore();
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let radius1 = 15;
        let radius2 = 100;
        let gradientSun = L09_FlowerMeadow.crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradientSun.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L09_FlowerMeadow.crc2.save();
        L09_FlowerMeadow.crc2.translate(_position.x, _position.y);
        L09_FlowerMeadow.crc2.fillStyle = gradientSun;
        L09_FlowerMeadow.crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        L09_FlowerMeadow.crc2.fill();
        L09_FlowerMeadow.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L09_FlowerMeadow.crc2.save();
        L09_FlowerMeadow.crc2.translate(_position.x, _position.y);
        L09_FlowerMeadow.crc2.beginPath();
        L09_FlowerMeadow.crc2.moveTo(0, 0);
        L09_FlowerMeadow.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_FlowerMeadow.crc2.lineTo(x, y);
        } while (x < L09_FlowerMeadow.crc2.canvas.width);
        L09_FlowerMeadow.crc2.lineTo(x, 0);
        L09_FlowerMeadow.crc2.closePath();
        let gradientMountain = L09_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, -_max);
        gradientMountain.addColorStop(0, _colorLow);
        gradientMountain.addColorStop(0.8, _colorHigh);
        L09_FlowerMeadow.crc2.fillStyle = gradientMountain;
        L09_FlowerMeadow.crc2.fill();
        L09_FlowerMeadow.crc2.restore();
    }
    function drawTree() {
        console.log("Tree");
        L09_FlowerMeadow.crc2.save();
        L09_FlowerMeadow.crc2.fillStyle = "#214f2d";
        L09_FlowerMeadow.crc2.beginPath();
        L09_FlowerMeadow.crc2.moveTo(150, 450);
        L09_FlowerMeadow.crc2.lineTo(250, 450);
        L09_FlowerMeadow.crc2.lineTo(200, 300);
        L09_FlowerMeadow.crc2.fill();
        L09_FlowerMeadow.crc2.beginPath();
        L09_FlowerMeadow.crc2.moveTo(155, 370);
        L09_FlowerMeadow.crc2.lineTo(245, 370);
        L09_FlowerMeadow.crc2.lineTo(200, 250);
        L09_FlowerMeadow.crc2.fill();
        L09_FlowerMeadow.crc2.beginPath();
        L09_FlowerMeadow.crc2.moveTo(260, 500);
        L09_FlowerMeadow.crc2.lineTo(360, 500);
        L09_FlowerMeadow.crc2.lineTo(310, 350);
        L09_FlowerMeadow.crc2.fill();
        L09_FlowerMeadow.crc2.beginPath();
        L09_FlowerMeadow.crc2.moveTo(265, 420);
        L09_FlowerMeadow.crc2.lineTo(355, 420);
        L09_FlowerMeadow.crc2.lineTo(310, 300);
        L09_FlowerMeadow.crc2.fill();
        L09_FlowerMeadow.crc2.restore();
    }
    function drawBeeHive() {
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
        L09_FlowerMeadow.crc2.save();
        L09_FlowerMeadow.crc2.fillStyle = "#b89018"; //crc2Pattern
        L09_FlowerMeadow.crc2.beginPath();
        L09_FlowerMeadow.crc2.moveTo(600, 550);
        L09_FlowerMeadow.crc2.lineTo(700, 550);
        L09_FlowerMeadow.crc2.lineTo(725, 500);
        L09_FlowerMeadow.crc2.lineTo(700, 400);
        L09_FlowerMeadow.crc2.lineTo(600, 400);
        L09_FlowerMeadow.crc2.lineTo(575, 500);
        L09_FlowerMeadow.crc2.lineTo(600, 550);
        L09_FlowerMeadow.crc2.closePath();
        L09_FlowerMeadow.crc2.fill();
        L09_FlowerMeadow.crc2.restore();
    }
})(L09_FlowerMeadow || (L09_FlowerMeadow = {}));
//# sourceMappingURL=script.js.map
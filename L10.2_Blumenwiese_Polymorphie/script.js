"use strict";
var L10_FlowerMeadow;
(function (L10_FlowerMeadow) {
    window.addEventListener("load", handleLoad);
    let imageData;
    let moveables = [];
    let flowers = [];
    let line = 0.7;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_FlowerMeadow.crc2 = canvas.getContext("2d");
        let horizon = L10_FlowerMeadow.crc2.canvas.height * line;
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
        imageData = L10_FlowerMeadow.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    function update() {
        console.log("update");
        L10_FlowerMeadow.crc2.putImageData(imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
    function createBees() {
        console.log("create bees");
        for (let i = 0; i < 15; i++) {
            let bee = new L10_FlowerMeadow.Bee();
            moveables.push(bee);
        }
    }
    function createClouds() {
        console.log("create clouds");
        for (let i = 0; i < 2; i++) {
            let cloud = new L10_FlowerMeadow.Cloud();
            moveables.push(cloud);
        }
    }
    function createFlowers() {
        console.log("create flowers");
        for (let i = 0; i < 5; i++) {
            let blueFlower = new L10_FlowerMeadow.Flower();
            blueFlower.drawBlueFlower();
            flowers.push(blueFlower);
        }
        for (let i = 0; i < 5; i++) {
            let pinkFlower = new L10_FlowerMeadow.Flower();
            pinkFlower.drawPinkFlower();
            flowers.push(pinkFlower);
        }
        for (let i = 0; i < 5; i++) {
            let sunflower = new L10_FlowerMeadow.Flower();
            sunflower.drawSunflower();
            flowers.push(sunflower);
        }
    }
    function drawBackground() {
        console.log("Background");
        let gradient = L10_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, L10_FlowerMeadow.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(line, "white");
        L10_FlowerMeadow.crc2.fillStyle = gradient;
        L10_FlowerMeadow.crc2.fillRect(0, 0, L10_FlowerMeadow.crc2.canvas.width, L10_FlowerMeadow.crc2.canvas.height);
    }
    function drawGras() {
        console.log("Gras");
        L10_FlowerMeadow.crc2.save();
        L10_FlowerMeadow.crc2.fillStyle = "#3f8039";
        L10_FlowerMeadow.crc2.fillRect(0, 350, L10_FlowerMeadow.crc2.canvas.width, L10_FlowerMeadow.crc2.canvas.height);
        L10_FlowerMeadow.crc2.restore();
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let radius1 = 15;
        let radius2 = 100;
        let gradientSun = L10_FlowerMeadow.crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradientSun.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L10_FlowerMeadow.crc2.save();
        L10_FlowerMeadow.crc2.translate(_position.x, _position.y);
        L10_FlowerMeadow.crc2.fillStyle = gradientSun;
        L10_FlowerMeadow.crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        L10_FlowerMeadow.crc2.fill();
        L10_FlowerMeadow.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L10_FlowerMeadow.crc2.save();
        L10_FlowerMeadow.crc2.translate(_position.x, _position.y);
        L10_FlowerMeadow.crc2.beginPath();
        L10_FlowerMeadow.crc2.moveTo(0, 0);
        L10_FlowerMeadow.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L10_FlowerMeadow.crc2.lineTo(x, y);
        } while (x < L10_FlowerMeadow.crc2.canvas.width);
        L10_FlowerMeadow.crc2.lineTo(x, 0);
        L10_FlowerMeadow.crc2.closePath();
        let gradientMountain = L10_FlowerMeadow.crc2.createLinearGradient(0, 0, 0, -_max);
        gradientMountain.addColorStop(0, _colorLow);
        gradientMountain.addColorStop(0.8, _colorHigh);
        L10_FlowerMeadow.crc2.fillStyle = gradientMountain;
        L10_FlowerMeadow.crc2.fill();
        L10_FlowerMeadow.crc2.restore();
    }
    function drawTree() {
        console.log("Tree");
        L10_FlowerMeadow.crc2.save();
        L10_FlowerMeadow.crc2.fillStyle = "#214f2d";
        L10_FlowerMeadow.crc2.beginPath();
        L10_FlowerMeadow.crc2.moveTo(150, 450);
        L10_FlowerMeadow.crc2.lineTo(250, 450);
        L10_FlowerMeadow.crc2.lineTo(200, 300);
        L10_FlowerMeadow.crc2.fill();
        L10_FlowerMeadow.crc2.beginPath();
        L10_FlowerMeadow.crc2.moveTo(155, 370);
        L10_FlowerMeadow.crc2.lineTo(245, 370);
        L10_FlowerMeadow.crc2.lineTo(200, 250);
        L10_FlowerMeadow.crc2.fill();
        L10_FlowerMeadow.crc2.beginPath();
        L10_FlowerMeadow.crc2.moveTo(260, 500);
        L10_FlowerMeadow.crc2.lineTo(360, 500);
        L10_FlowerMeadow.crc2.lineTo(310, 350);
        L10_FlowerMeadow.crc2.fill();
        L10_FlowerMeadow.crc2.beginPath();
        L10_FlowerMeadow.crc2.moveTo(265, 420);
        L10_FlowerMeadow.crc2.lineTo(355, 420);
        L10_FlowerMeadow.crc2.lineTo(310, 300);
        L10_FlowerMeadow.crc2.fill();
        L10_FlowerMeadow.crc2.restore();
    }
    function drawBeeHive() {
        console.log("BeeHive");
        L10_FlowerMeadow.crc2.save();
        L10_FlowerMeadow.crc2.fillStyle = "#b89018"; //crc2Pattern
        L10_FlowerMeadow.crc2.beginPath();
        L10_FlowerMeadow.crc2.moveTo(600, 550);
        L10_FlowerMeadow.crc2.lineTo(700, 550);
        L10_FlowerMeadow.crc2.lineTo(725, 500);
        L10_FlowerMeadow.crc2.lineTo(700, 400);
        L10_FlowerMeadow.crc2.lineTo(600, 400);
        L10_FlowerMeadow.crc2.lineTo(575, 500);
        L10_FlowerMeadow.crc2.lineTo(600, 550);
        L10_FlowerMeadow.crc2.closePath();
        L10_FlowerMeadow.crc2.fill();
        L10_FlowerMeadow.crc2.restore();
    }
})(L10_FlowerMeadow || (L10_FlowerMeadow = {}));
//# sourceMappingURL=script.js.map
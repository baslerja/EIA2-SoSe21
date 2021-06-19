"use strict";
var L11_FlowerMeadow_Advanced;
(function (L11_FlowerMeadow_Advanced) {
    window.addEventListener("load", handleLoad);
    let imageData;
    let moveables = [];
    let flowers = [];
    let line = 0.7;
    let i = 0;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_FlowerMeadow_Advanced.crc2 = canvas.getContext("2d");
        let horizon = L11_FlowerMeadow_Advanced.crc2.canvas.height * line;
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
        nectarLvlSunFlower();
        nectraLvlPinkFlower();
        nectraLvlBlueFlower();
        imageData = L11_FlowerMeadow_Advanced.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    function update() {
        // console.log("update");
        L11_FlowerMeadow_Advanced.crc2.putImageData(imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
    function createBees() {
        // console.log("create bees");
        for (let i = 0; i < 15; i++) {
            let bee = new L11_FlowerMeadow_Advanced.Bee();
            moveables.push(bee);
        }
    }
    function createClouds() {
        // console.log("create clouds");
        for (let i = 0; i < 2; i++) {
            let cloud = new L11_FlowerMeadow_Advanced.Cloud();
            moveables.push(cloud);
        }
    }
    function createFlowers() {
        // console.log("create flowers");
        for (let i = 0; i < 5; i++) {
            let blueFlower = new L11_FlowerMeadow_Advanced.Flower();
            blueFlower.drawBlueFlower();
            blueFlower.nectarLvl();
            flowers.push(blueFlower);
        }
        for (let i = 0; i < 5; i++) {
            let pinkFlower = new L11_FlowerMeadow_Advanced.Flower();
            pinkFlower.drawPinkFlower();
            pinkFlower.nectarLvl();
            flowers.push(pinkFlower);
        }
        for (let i = 0; i < 5; i++) {
            let sunflower = new L11_FlowerMeadow_Advanced.Flower();
            sunflower.drawSunflower();
            sunflower.nectarLvl();
            flowers.push(sunflower);
        }
    }
    function nectarLvlSunFlower() {
        // console.log("nectar");
        if (i == 0) {
            i = 1;
            let bar = document.getElementById("nectarSunflower");
            let width = 1;
            let id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                }
                else {
                    width++;
                    bar.style.width = width + "%";
                }
            }
        }
    }
    function nectraLvlPinkFlower() {
        // console.log("nectar");
        if (i == 0) {
            i = 1;
            let bar = document.getElementById("nectarPinkFlower");
            let width = 1;
            let id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                }
                else {
                    width++;
                    bar.style.width = width + "%";
                }
            }
        }
    }
    function nectraLvlBlueFlower() {
        // console.log("nectar");
        if (i == 0) {
            i = 1;
            let bar = document.getElementById("nectarBlueFlower");
            let width = 1;
            let id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                }
                else {
                    width++;
                    bar.style.width = width + "%";
                }
            }
        }
    }
    function drawBackground() {
        // console.log("Background");
        let gradient = L11_FlowerMeadow_Advanced.crc2.createLinearGradient(0, 0, 0, L11_FlowerMeadow_Advanced.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(line, "white");
        L11_FlowerMeadow_Advanced.crc2.fillStyle = gradient;
        L11_FlowerMeadow_Advanced.crc2.fillRect(0, 0, L11_FlowerMeadow_Advanced.crc2.canvas.width, L11_FlowerMeadow_Advanced.crc2.canvas.height);
    }
    function drawGras() {
        // console.log("Gras");
        L11_FlowerMeadow_Advanced.crc2.save();
        L11_FlowerMeadow_Advanced.crc2.fillStyle = "#3f8039";
        L11_FlowerMeadow_Advanced.crc2.fillRect(0, 350, L11_FlowerMeadow_Advanced.crc2.canvas.width, L11_FlowerMeadow_Advanced.crc2.canvas.height);
        L11_FlowerMeadow_Advanced.crc2.restore();
    }
    function drawSun(_position) {
        // console.log("Sun", _position);
        let radius1 = 15;
        let radius2 = 100;
        let gradientSun = L11_FlowerMeadow_Advanced.crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradientSun.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L11_FlowerMeadow_Advanced.crc2.save();
        L11_FlowerMeadow_Advanced.crc2.translate(_position.x, _position.y);
        L11_FlowerMeadow_Advanced.crc2.fillStyle = gradientSun;
        L11_FlowerMeadow_Advanced.crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        L11_FlowerMeadow_Advanced.crc2.fill();
        L11_FlowerMeadow_Advanced.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        // console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L11_FlowerMeadow_Advanced.crc2.save();
        L11_FlowerMeadow_Advanced.crc2.translate(_position.x, _position.y);
        L11_FlowerMeadow_Advanced.crc2.beginPath();
        L11_FlowerMeadow_Advanced.crc2.moveTo(0, 0);
        L11_FlowerMeadow_Advanced.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11_FlowerMeadow_Advanced.crc2.lineTo(x, y);
        } while (x < L11_FlowerMeadow_Advanced.crc2.canvas.width);
        L11_FlowerMeadow_Advanced.crc2.lineTo(x, 0);
        L11_FlowerMeadow_Advanced.crc2.closePath();
        let gradientMountain = L11_FlowerMeadow_Advanced.crc2.createLinearGradient(0, 0, 0, -_max);
        gradientMountain.addColorStop(0, _colorLow);
        gradientMountain.addColorStop(0.8, _colorHigh);
        L11_FlowerMeadow_Advanced.crc2.fillStyle = gradientMountain;
        L11_FlowerMeadow_Advanced.crc2.fill();
        L11_FlowerMeadow_Advanced.crc2.restore();
    }
    function drawTree() {
        // console.log("Tree");
        L11_FlowerMeadow_Advanced.crc2.save();
        L11_FlowerMeadow_Advanced.crc2.fillStyle = "#214f2d";
        L11_FlowerMeadow_Advanced.crc2.beginPath();
        L11_FlowerMeadow_Advanced.crc2.moveTo(150, 450);
        L11_FlowerMeadow_Advanced.crc2.lineTo(250, 450);
        L11_FlowerMeadow_Advanced.crc2.lineTo(200, 300);
        L11_FlowerMeadow_Advanced.crc2.fill();
        L11_FlowerMeadow_Advanced.crc2.beginPath();
        L11_FlowerMeadow_Advanced.crc2.moveTo(155, 370);
        L11_FlowerMeadow_Advanced.crc2.lineTo(245, 370);
        L11_FlowerMeadow_Advanced.crc2.lineTo(200, 250);
        L11_FlowerMeadow_Advanced.crc2.fill();
        L11_FlowerMeadow_Advanced.crc2.beginPath();
        L11_FlowerMeadow_Advanced.crc2.moveTo(260, 500);
        L11_FlowerMeadow_Advanced.crc2.lineTo(360, 500);
        L11_FlowerMeadow_Advanced.crc2.lineTo(310, 350);
        L11_FlowerMeadow_Advanced.crc2.fill();
        L11_FlowerMeadow_Advanced.crc2.beginPath();
        L11_FlowerMeadow_Advanced.crc2.moveTo(265, 420);
        L11_FlowerMeadow_Advanced.crc2.lineTo(355, 420);
        L11_FlowerMeadow_Advanced.crc2.lineTo(310, 300);
        L11_FlowerMeadow_Advanced.crc2.fill();
        L11_FlowerMeadow_Advanced.crc2.restore();
    }
    function drawBeeHive() {
        // console.log("BeeHive");
        L11_FlowerMeadow_Advanced.crc2.save();
        L11_FlowerMeadow_Advanced.crc2.fillStyle = "#b89018"; //crc2Pattern
        L11_FlowerMeadow_Advanced.crc2.beginPath();
        L11_FlowerMeadow_Advanced.crc2.moveTo(600, 550);
        L11_FlowerMeadow_Advanced.crc2.lineTo(700, 550);
        L11_FlowerMeadow_Advanced.crc2.lineTo(725, 500);
        L11_FlowerMeadow_Advanced.crc2.lineTo(700, 400);
        L11_FlowerMeadow_Advanced.crc2.lineTo(600, 400);
        L11_FlowerMeadow_Advanced.crc2.lineTo(575, 500);
        L11_FlowerMeadow_Advanced.crc2.lineTo(600, 550);
        L11_FlowerMeadow_Advanced.crc2.closePath();
        L11_FlowerMeadow_Advanced.crc2.fill();
        L11_FlowerMeadow_Advanced.crc2.restore();
    }
})(L11_FlowerMeadow_Advanced || (L11_FlowerMeadow_Advanced = {}));
//# sourceMappingURL=script.js.map
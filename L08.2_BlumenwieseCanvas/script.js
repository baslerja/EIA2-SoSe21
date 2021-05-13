"use strict";
var L08_2_Blumenwiese;
(function (L08_2_Blumenwiese) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let line = 0.7;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * line;
        drawBackground();
        drawGras();
        drawSun({ x: 250, y: 100 });
        drawCloud({ x: 550, y: 100 }, { x: 175, y: 75 });
        drawCloud({ x: 650, y: 250 }, { x: 175, y: 75 });
        drawMountains({ x: 0, y: horizon }, 80, 200, "darkgrey", "lightgrey");
        drawTree();
        drawBeeHive();
        drawSunFlower();
        drawPinkFlower();
        drawBlueFlower();
        drawBee();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(line, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawGras() {
        console.log("Gras");
        crc2.save();
        crc2.fillStyle = "#3f8039";
        crc2.fillRect(0, 350, crc2.canvas.width, crc2.canvas.height);
        crc2.restore();
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let radius1 = 15;
        let radius2 = 100;
        let gradientSun = crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradientSun.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradientSun;
        crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let cloudParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradientCloud = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientCloud.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradientCloud;
        for (let drawn = 0; drawn < cloudParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradientMountain = crc2.createLinearGradient(0, 0, 0, -_max);
        gradientMountain.addColorStop(0, _colorLow);
        gradientMountain.addColorStop(0.8, _colorHigh);
        crc2.fillStyle = gradientMountain;
        crc2.fill();
        crc2.restore();
    }
    function drawTree() {
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
    function drawSunFlower() {
        console.log("Sunflower");
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * 800;
            let y = Math.random() * 0;
            crc2.save();
            crc2.translate(x, y);
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
    }
    function drawPinkFlower() {
        console.log("Pink flower");
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * 800;
            let y = Math.random() * 0;
            crc2.save();
            crc2.translate(x, y);
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
    function drawBlueFlower() {
        console.log("Blue flower");
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * 800;
            let y = Math.random() * 0;
            crc2.save();
            crc2.translate(x, y);
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
    }
    function drawBee() {
        console.log("Bee");
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
})(L08_2_Blumenwiese || (L08_2_Blumenwiese = {}));
//# sourceMappingURL=script.js.map
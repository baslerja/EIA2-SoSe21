"use strict";
var L08_1_GenerativeArt;
(function (L08_1_GenerativeArt) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let crc2Pattern;
        let canvasPattern = document.createElement("canvas");
        if (!canvasPattern)
            return;
        crc2Pattern = canvasPattern.getContext("2d");
        canvasPattern.width = 100;
        canvasPattern.height = 100;
        let randomRadius = Math.random() * 2;
        crc2Pattern.fillStyle = "#cf6342";
        crc2Pattern.fillRect(0, 0, canvasPattern.width, canvasPattern.height);
        crc2Pattern.arc(50, 50, 50, 0, randomRadius * Math.PI);
        crc2Pattern.stroke();
        let pattern = crc2.createPattern(canvasPattern, "repeat");
        crc2.fillStyle = pattern;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        drawArc();
        drawTriangles();
        drawRectangle();
        let button = document.querySelector("#button");
        button.addEventListener("click", handleLoad);
    }
    function drawArc() {
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * 1000;
            let y = Math.random() * 500;
            let color = ["white", "grey", "black"];
            let randomColor = color[Math.floor(Math.random() * color.length)];
            crc2.save();
            crc2.translate(x, y);
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (600) + 1), Math.floor(Math.random() * (250) + 1), Math.floor(Math.random() * (80) + 1), 0, 2 * Math.PI);
            crc2.fillStyle = randomColor;
            crc2.fill();
            crc2.restore();
        }
    }
    function drawTriangles() {
        for (let i = 0; i < 40; i++) {
            let x = Math.random() * 1000;
            let y = Math.random() * 500;
            crc2.save();
            crc2.translate(x, y);
            crc2.beginPath();
            crc2.moveTo(50, 50);
            crc2.lineTo(100, 50);
            crc2.lineTo(75, 100);
            crc2.closePath();
            crc2.fillStyle = "#D6B745";
            crc2.fill();
            crc2.restore();
        }
    }
    function drawRectangle() {
        for (let i = 0; i < 30; i++) {
            let x = Math.random() * 1000;
            let y = Math.random() * 500;
            crc2.save();
            crc2.translate(x, y);
            crc2.beginPath();
            crc2.rect(10, 10, 50, 30);
            crc2.fillStyle = "#58acd6";
            crc2.fill();
            crc2.restore();
        }
    }
})(L08_1_GenerativeArt || (L08_1_GenerativeArt = {}));
//# sourceMappingURL=script.js.map
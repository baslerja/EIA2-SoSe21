namespace L08_1_GenerativeArt {
    
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let crc2Pattern: CanvasRenderingContext2D;
        let canvasPattern: HTMLCanvasElement = document.createElement("canvas");
        if (!canvasPattern)
            return;
        crc2Pattern = <CanvasRenderingContext2D>canvasPattern.getContext("2d");

        canvasPattern.width = 100;
        canvasPattern.height = 100;

        crc2Pattern.fillStyle = "#cf6342";
        crc2Pattern.fillRect(0, 0, canvasPattern.width, canvasPattern.height);
        crc2Pattern.arc(50, 50, 50, 0, 1.5 * Math.PI);
        crc2Pattern.stroke();

        let pattern: CanvasPattern = <CanvasPattern>crc2.createPattern(canvasPattern, "repeat");
        crc2.fillStyle = pattern;
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        drawArc();
        drawTriangles();
    }

    function drawArc(): void {
        for (let i: number = 0; i < 50; i++) {
            let x: number = Math.random() * 800;
            let y: number = Math.random() * 600;
            let color: string[] = ["white", "grey", "black"];
            let randomColor: string = color[Math.floor(Math.random() * color.length)];

            crc2.save();
            crc2.translate(x, y);

            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (600) + 1), Math.floor(Math.random() * (250) + 1), Math.floor(Math.random() * (80) + 1), 0, 2 * Math.PI);
            crc2.fillStyle = randomColor;
            crc2.fill();

            crc2.restore();
        }
    }

    function drawTriangles(): void {
        for (let i: number = 0; i < 40; i++) {
            let x: number = Math.random() * 800;
            let y: number = Math.random() * 600;

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
}
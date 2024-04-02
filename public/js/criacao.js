let corAtual = 'rgb(0, 0, 0)';

document.querySelectorAll('.color-button').forEach(button => {
    button.addEventListener('click', function () {
        let selectedColor = this.getAttribute('data-color');
        corAtual = selectedColor;
    });
});

let tamanhoAtual = 2;

document.querySelectorAll('.size-button').forEach(button => {
    button.addEventListener('click', function () {
        let selectedSize = parseInt(this.getAttribute('data-size'));
        tamanhoAtual = selectedSize;
    });
});

window.onload = function () {
    function init() {
        let canvasContainer = document.querySelector(".canvas-box");
        let canvas = document.querySelector(".canvas-box canvas");
        let ctx = canvas.getContext('2d');
        canvas.width = canvasContainer.offsetWidth;
        canvas.height = canvasContainer.offsetHeight;
        let pinta = false;
        let lastX, lastY;

        // Função para desenhar no canvas
        function desenha(e) {
            let pos = getPosMouse(canvas, e);
            let posx = pos.x;
            let posy = pos.y;
            if (pinta) {
                ctx.strokeStyle = corAtual;
                ctx.lineWidth = tamanhoAtual;
                ctx.lineJoin = 'round';
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(posx, posy);
                ctx.stroke();
            }
            lastX = posx;
            lastY = posy;
        }

        canvas.onmousemove = function (e) {
            desenha(e);
        };

        canvas.onmousedown = function () {
            pinta = true;

            let pos = getPosMouse(canvas, e);
            lastX = pos.x;
            lastY = pos.y;
        };

        canvas.onmouseup = function () {
            pinta = false;
        };

        function getPosMouse(canvas, evt) {
            let rect = canvas.getBoundingClientRect();
            let mouseX = evt.clientX - rect.left;
            let mouseY = evt.clientY - rect.top;

            let canvasX = mouseX * (canvas.width / rect.width);
            let canvasY = mouseY * (canvas.height / rect.height);

            return { x: canvasX, y: canvasY };
        };

        document.getElementById('downloadBtn').addEventListener('click', function () {
            var link = document.createElement('a');
            link.download = 'desenho.png';
            link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            link.click();
        });

    }
    init();
};
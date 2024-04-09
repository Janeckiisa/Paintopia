
let canvas = document.querySelector(".canvas-box canvas");

let currentSVG = 1;

document.getElementById('eraserBtn').addEventListener('click', function() {
    const svgToChange = document.getElementById('pencil-eraser');
    if (currentSVG === 1) {
        svgToChange.innerHTML =`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brush" viewBox="0 0 16 16">
        <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z"/>
        </svg>`;
        currentSVG = 2;
    } else {
        svgToChange.innerHTML = `
        <svg id='pencil-eraser' xmlns='http://www.w3.org/2000/svg' width="16" height="16" fill="currentColor" class="bi bi-eraser-fill" viewBox="0 0 16 16">
            <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
        </svg>`;
        currentSVG = 1;
    }
});


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
       
        let ctx = canvas.getContext('2d');
        canvas.width = canvasContainer.offsetWidth;
        canvas.height = canvasContainer.offsetHeight;
        let pinta = false;
        let lastX, lastY;
        let usandoBorracha = false; 


        // const arrayDesenho = [
        //     {x: 213, y: 123}
        // ]

        function desenha(e) {
            let pos = getPosMouse(canvas, e);
            let posx = pos.x;
            let posy = pos.y;
            //arrayDesenho.push({x: posx, y: posy})
            if (pinta) {
                if (usandoBorracha) {
                    ctx.clearRect(posx - tamanhoAtual / 2, posy - tamanhoAtual / 2, tamanhoAtual, tamanhoAtual);
                } else {
                    ctx.strokeStyle = corAtual;
                    ctx.lineWidth = tamanhoAtual;
                    ctx.lineJoin = 'round';
                    ctx.lineCap = 'round';
                    ctx.beginPath();
                    ctx.moveTo(lastX, lastY);
                    ctx.lineTo(posx, posy);
                    ctx.stroke();
                }
            }
            lastX = posx;
            lastY = posy;
        }

        canvas.onmousemove = function (e) {
            desenha(e);
        };

        canvas.onmousedown = function (e) {
            pinta = true;

            let pos = getPosMouse(canvas, e);
            lastX = pos.x;
            lastY = pos.y;
        };

        canvas.onmouseup = function () {
            pinta = false;
        };


        document.getElementById('eraserBtn').addEventListener('click', function () {
            usandoBorracha = !usandoBorracha; // Alterna entre usar a borracha ou não
        });


        function getPosMouse(canvas, evt) {
            let rect = canvas.getBoundingClientRect();
            let mouseX = evt.clientX - rect.left;
            let mouseY = evt.clientY - rect.top;

            let canvasX = mouseX * (canvas.width / rect.width);
            let canvasY = mouseY * (canvas.height / rect.height);

            return { x: canvasX, y: canvasY };
        }

        document.getElementById('downloadBtn').addEventListener('click', function () {
            var link = document.createElement('a');
            link.download = 'desenho.png';
            link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            link.click();
        });

    }
    init();

};

document.addEventListener("DOMContentLoaded", function(){
    const userOptions = document.getElementById('user-options');
    const userAvatar = document.getElementById('user-avatar');
    // const editUser = document.getElementById('edit-user');
    // const logout = document.getElementById('logout');

    userAvatar.addEventListener('click', function(event) {
        event.stopPropagation();
        userOptions.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        userOptions.classList.remove('show');
    });

    userOptions.addEventListener('click', function(event) {
        event.stopPropagation(); 
    });


});


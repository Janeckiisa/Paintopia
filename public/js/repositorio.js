const fabric = require("fabric").fabric;

var canvas = new fabric.Canvas('canvas');

var savedDrawing = localStorage.getItem('drawing');
        if (savedDrawing) {
            canvas.loadFromJSON(savedDrawing, canvas.renderAll.bind(canvas));
        }
        
document.getElementById('editButton').addEventListener('click', function() {
        canvas.isDrawingMode = false; // Sai do modo de desenho
        canvas.selection = true; // Habilita a seleção de objetos
    });
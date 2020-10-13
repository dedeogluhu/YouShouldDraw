const canvas = document.querySelector('#canvas');
const clearButton = document.querySelector('#clear-canvas');
const brushSize = document.querySelector('#brush-size');
const colorPicker = document.querySelector('#color-picker');
const context = canvas.getContext('2d');

let isDrawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
window.addEventListener('resize', resizeCanvas);
clearButton.addEventListener('click', clearCanvas);
canvas.addEventListener('contextmenu', disableRightClick);

resizeCanvas();

function startDrawing(e) {
    isDrawing = true;
    draw(e);
}

function draw({ offsetX: x, offsetY: y }) {
    if (!isDrawing) return;

    context.lineWidth = 3;//brushSize.value;
    context.lineCap = 'round';
    context.strokeStyle = '#171717';//colorPicker.value;

    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
}

function stopDrawing() {
    isDrawing = false;
    context.beginPath();
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function disableRightClick(e) {
    e.preventDefault();
    e.stopPropagation();
}
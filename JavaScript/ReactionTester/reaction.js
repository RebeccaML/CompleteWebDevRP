var start = new Date().getTime();
var shape = document.getElementById("shape");

function getRandomColor() {
    var letters = "0123456789ABCDEF".split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear() {
    var top = Math.random() * 600;
    var left = Math.random() * 1000;
    var size = (Math.random() * 300) + 100;
    if (Math.random() > 0.5) {
        shape.style.borderRadius = "50%";
    }
    else {
        shape.style.borderRadius = "0";
    }
    shape.style.background = getRandomColor();
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.width = size + "px";
    shape.style.height = size + "px";
    shape.style.display = "block";
    start = new Date().getTime();
}

function appearDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

appearDelay();

document.getElementById("shape").onclick = function () {
    shape.style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    appearDelay();

}
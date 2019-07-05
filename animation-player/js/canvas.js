let typeColor = document.querySelector('.typeColor');
let posX,
    posY;
let canvasBody = document.getElementById("mainCanvas"),
    canvas = canvasBody.getContext("2d"),
    opts = {
      color: "black",
      radius: 10,
    },
    painting = false;
typeColor.addEventListener('input', () => {
    opts.color = typeColor.value;
});
    
canvasBody.onmousedown = ()  => {
  painting = true;
};
canvasBody.onmouseup = () => {
  painting = false;
  canvas.beginPath();
};
canvas.lineWidth = 10 * 2;
canvasBody.addEventListener("mousemove", (e) => {
    posX = e.offsetX,
    posY = e.offsetY;
      if (painting) {
    canvas.lineTo(posX, posY);
    canvas.strokeStyle = opts.color;
    canvas.stroke();

    canvas.fillStyle = opts.color;
    canvas.beginPath()
    canvas.arc(posX, posY, opts.radius, 0, Math.PI * 2);
    canvas.fill();

    canvas.beginPath();
    canvas.moveTo(posX, posY);
    }
  }
);


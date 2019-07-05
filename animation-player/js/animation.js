const elem = document.querySelector('input[type="range"]');
let newValue = 1;
let animationImage = 0;
let imgAnimation;
let timer;
let animationCanvas = document.getElementById("animationCanvas");
let animationCanvasCtx = animationCanvas.getContext("2d");
startAnimation = ()  => {
       timer =  setInterval(()  => {
        if (animationImage < counterCanvas.length) {
        animationCanvasCtx.clearRect(0, 0, 450, 450);
        imgAnimation = counterCanvas[animationImage].getImageData(0, 0, canvasFrame.width, canvasFrame.height);
        animationCanvasCtx.putImageData(imgAnimation, 0, 0);
        animationImage++ }
        else {
            animationImage = 0
        }  
    }, 1000 / newValue);
}

let rangeValue = () => {
  newValue = elem.value;
  let target = document.querySelector('.value');
  target.innerHTML = newValue;
  clearInterval(timer);
  startAnimation();
}

toggleFullScreen = () => {
  animationCanvas.requestFullscreen;
  animationCanvas.requestFullscreen();
}

elem.addEventListener("input", rangeValue);
document.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
      toggleFullScreen();
    }
  }, false);



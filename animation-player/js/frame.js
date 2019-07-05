const add = document.querySelector(".add");
const del = document.querySelector(".del");
let inputFrame = document.querySelector('input.counter');
const frameBox = document.querySelector(".frameBox");
let frame = document.querySelector(".frame");
let counter = 1;
let frameCanvas = 1;
let imgData;
let canvasFrame = document.querySelector(".frameCanvas");
let ctxFrame =  canvasFrame.getContext("2d");
let counterCanvas = [ctxFrame];
let counterFrame = [];
let murkup = (counter) =>
`<div class="frame">
    <input  disabled type="button" class="counter" value=${counter} />
    <canvas class="frameCanvas frameCanvas${counter}" width="450" height="450"></canvas>
    <div class="tools">
        <button class="copy"><i class="fas fa-copy"></i></button>
        <button class="del"><i class="fas fa-trash-alt"></i></button>
    </div> 
</div>`;
copyCanvas = () => {
    canvas.clearRect(0, 0, 450, 450);
    canvasFrame = document.querySelector(".frameCanvas" + counter);
    ctxFrame =  canvasFrame.getContext("2d");
    counterCanvas.push(ctxFrame);
}
firstCopyCanvas = () => {
    if ( counter === 1) {
    imgData = canvas.getImageData(0, 0, canvasBody.width, canvasBody.height);
    ctxFrame.putImageData(imgData, 0, 0); 
    }
    else {
    imgData = canvas.getImageData(0, 0, canvasBody.width, canvasBody.height);
    ctxFrame.putImageData(imgData, 0, 0);
    }
}
clickFrame = () => {
    counterCanvas.push(ctxFrame);
    counter++;
    add.insertAdjacentHTML('beforebegin', murkup(counter));  
    clearInterval(timer);
 
}
deleteFrame = (event) => {
    let cxf = 1;
    if (!event.target.classList.contains('del')) {return;}
    else if (event.target.classList.contains('del')){
    let child = event.target.parentNode.parentNode.firstElementChild.value;
    counterCanvas.splice(child, 1);
    event.target.parentNode.parentNode.remove(); 
    inputFrame = document.querySelectorAll('input.counter');
    for (let item of inputFrame) {
       item.value = cxf;
       cxf++;
    }
      counter--;
      
    }
    return counterCanvas;
}
copyFrame = () => {
    if (!event.target.classList.contains('copy')) {return;}
    else if (event.target.classList.contains('copy')){
    counter++;
    add.insertAdjacentHTML('beforebegin', murkup(counter)); 
    canvasFrame = document.querySelector(".frameCanvas" + counter);
    ctxFrame =  canvasFrame.getContext("2d");
    }   
}
add.addEventListener("click", clickFrame);
add.addEventListener("click", copyCanvas);
add.addEventListener("click", startAnimation);
canvasBody.addEventListener("click", firstCopyCanvas);
frameBox.addEventListener("click", deleteFrame);
frameBox.addEventListener("click", copyFrame);




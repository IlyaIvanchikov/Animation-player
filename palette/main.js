var Tool;
var SelectTool = document.querySelector('.Pallete');
var proverka = window;
var CurrentColor = document.querySelector('.circle1');
var PrevColor = document.querySelector('.circle2');
var canvas = document.querySelector('.canvas');
var random;
var color;
var pipette;
SelectTool.addEventListener('click',  e => {
    if (e.target.classList.value === "Transform") {
        Tool = "transformTool";
        foreElement.style.cursor = 'url(./assets/cur3.cur), pointer';
        firstElement.style.cursor = 'url(./assets/cur3.cur), pointer';
    }
    else if (e.target.classList.value === "Paintbacket") {
        Tool = "PaintbacketTool";
        color = getComputedStyle(document.querySelector('.circle1')).backgroundColor;
        foreElement.style.cursor = 'url(./assets/cur.cur), pointer';
        firstElement.style.cursor = 'url(./assets/cur.cur), pointer';
    }
    else if (e.target.classList.value === "ChoseColor") {
        Tool = "ChoseColorTool";
        foreElement.style.cursor = 'url(./assets/cur1.cur), pointer';
        firstElement.style.cursor = 'url(./assets/cur1.cur), pointer';
    }
    else if (e.target.classList.value === "Move") {
      Tool = "MoveTool";
      foreElement.style.cursor = 'url(./assets/cur2.cur), pointer';
  }
});
var foreElement = document.querySelector('.canvas');
function squart (e) {
    if ( Tool === "transformTool" && e.target.style.borderRadius !=="50%") {
        e.target.style.borderRadius = "50%"}
        else if ( Tool === "transformTool" && e.target.style.borderRadius == "50%") {e.target.style.borderRadius = null}
        localStorage.setItem('bg', e.target.style.borderRadius);
}
foreElement.addEventListener('click', squart);

   /*----------------------- Paint Backet ------------------------------ */
function PaintbacketTool (p) {
    if ( Tool === "PaintbacketTool") {
        p.target.style.backgroundColor = color}
}
foreElement.addEventListener('click',  PaintbacketTool);
   /*----------------------- Chose Color ------------------------------ */
function  ChoseColorTool (r) {
    if ( Tool === "ChoseColorTool") {
        random = color;
        color = getComputedStyle(r.target).backgroundColor;
        PrevColor.style.backgroundColor = random;
        CurrentColor.style.backgroundColor = color;
        }
}
foreElement.addEventListener('click',  ChoseColorTool);
var firstElement = document.querySelector('.colors');
firstElement.addEventListener('click',  ChoseColorTool);
   /*----------------------- SWAP ------------------------------ */
   function Move (e) {
    if ( Tool === "MoveTool" ) {
        
          function handleDragStart(e) {
            this.style.opacity = '0.4';  
          }
          
          function handleDragOver(e) {
            if (e.preventDefault) {
              e.preventDefault(); 
            }
          
            e.dataTransfer.dropEffect = 'move';  
          
            return false;
          }
          
          function handleDragEnter(e) {
            this.classList.add('over');
          }
          
          function handleDragLeave(e) {
            this.classList.remove('over');  
          }
          function handleDrop(e) {
            if (e.stopPropagation) {
              e.stopPropagation(); 
            }
            return false;
          }
          function handleDragEnd(e) {
          
            [].forEach.call(cols, function (col) {
              col.classList.remove('over');
            });
          }
          var cols = document.querySelectorAll('.canvas .flex-item');
          [].forEach.call(cols, function(col) {
            col.addEventListener('dragstart', handleDragStart, false);
            col.addEventListener('dragenter', handleDragEnter, false);
            col.addEventListener('dragover', handleDragOver, false);
            col.addEventListener('dragleave', handleDragLeave, false);
            col.addEventListener('drop', handleDrop, false);
            col.addEventListener('dragend', handleDragEnd, false);
          });
        }
}

foreElement.addEventListener('click', Move);
   
  /*----------------------- Keyboard ------------------------------ */
  window.addEventListener('keydown', (event) => {
    const keyName = event.key;
  
    if (keyName === 'T') {
      Tool = "transformTool";
      foreElement.style.cursor = 'url(./assets/cur3.cur), pointer';
      firstElement.style.cursor = 'url(./assets/cur3.cur), pointer';
  }
    else if (keyName === 'P') {
        Tool = "PaintbacketTool";
        color = getComputedStyle(document.querySelector('.circle1')).backgroundColor;
        foreElement.style.cursor = 'url(./assets/cur.cur), pointer';
        firstElement.style.cursor = 'url(./assets/cur.cur), pointer';
  }
    else if (keyName === 'C') {
      Tool = "ChoseColorTool";
        foreElement.style.cursor = 'url(./assets/cur1.cur), pointer';
        firstElement.style.cursor = 'url(./assets/cur1.cur), pointer';
  }
  else if (keyName === 'V') {
    Tool = "MoveTool";
      foreElement.style.cursor = 'url(./assets/cur2.cur), pointer';
}
  })
 /*----------------------- localStorage ------------------------------ */

window.onload = function () {
  if (localStorage.getItem("bg") !==null) {
    var color = localStorage.getItem("bg");
    CurrentColor.target.style.borderRadius = color;
  }
}
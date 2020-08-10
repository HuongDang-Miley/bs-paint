/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to repeat, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}


/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)
const color1 = document.querySelector('.color-1')
const color2 = document.querySelector('.color-2')
const color3 = document.querySelector('.color-3')
const color4 = document.querySelector('.color-4')
const color5 = document.querySelector('.color-5')
const brush = document.querySelector('.current-brush').classList
const canvas = document.querySelectorAll('.square')

/****************************
 * EVENT LISTENER FUNCTIONS *
 ****************************/

const changeBrushToColor1 = function (event) {
  brush.replace(`${brush[1]}`, 'color-1')
}
const changeBrushToColor2 = function (event) {
  brush.replace(`${brush[1]}`, 'color-2')
}
const changeBrushToColor3 = function (event) {
  brush.replace(`${brush[1]}`, 'color-3')
}
const changeBrushToColor4 = function (event) {
  brush.replace(`${brush[1]}`, 'color-4')
}
const changeBrushToColor5 = function (event) {
  brush.replace(`${brush[1]}`, 'color-5')
}

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.


/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.

color1.addEventListener('click', changeBrushToColor1)
color2.addEventListener('click', changeBrushToColor2)
color3.addEventListener('click', changeBrushToColor3)
color4.addEventListener('click', changeBrushToColor4)
color5.addEventListener('click', changeBrushToColor5)

canvas.forEach(function (pixel) {
  pixel.addEventListener('click', function (event) {
    newPixel = pixel.classList
    newPixel.replace(`${newPixel[1]}`, `${brush[1]}`)
  })
})

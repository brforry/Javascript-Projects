
// Setup for d3 environment
var width  = 500;
var height = 500;

var svg = d3.select("body")
.append("svg")
.attr("width", window.innerWidth)
.attr("height", window.innerHeight);
// .attr("width", width)
// .attr("height", height);

var xstep = 0;
var ystep = 0;
var delay = 0;
var rectHeight = 60;
var rectWidth = 60;

function drawSquare(color) {
  svg.append('rect')
    .transition()
      .delay(delay*200)
      .attr('width', rectWidth)
      .attr('height', rectHeight)
      .attr('x', xstep)
      .attr('y', ystep)
      .attr('fill', color);
  xstep = xstep + rectWidth;
  delay = delay + 1;
  if (color === ' ') {ystep = ystep + rectHeight; xstep = 0;}
}



function drawSquares(aString) {
  let colorObject = {b : 'blue', c : 'cyan', r : 'red', g : 'green', w : 'white'}
  if (xstep > 0) { ystep = ystep + rectHeight; xstep = 0;}  
  for (let choice of aString) {
    drawSquare(colorObject[choice]);
  }
}

function pickRandom(argument) {
  if (typeof argument === 'number') {
    return Math.floor(Math.random() * Math.floor(argument)) + 1;
  }
  if (Array.isArray(argument)) {
    return argument[Math.floor(Math.random() * argument.length)];
  }
}

var answer = pickRandom ([ 
  'heads',
  'tails'
]);

alert(answer);
// console.log(answer);

if (answer === 'heads') {
  drawSquares('gwg');
  drawSquares('ggg');
  drawSquares('gwg');
  // drawSquares('green');
}

if (answer === 'tails') {
  drawSquares('bbb');
  drawSquares('wbw');
  drawSquares('wbw');
}
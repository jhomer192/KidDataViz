// Starting Point
var colors = ['pink', 'blue', 'purple', 'green', 'grey', 'yellow', 'orange']

var block = document.getElementById('block'),
  brick = document.getElementById('brick'),
  path = document.getElementById('path'),
  gameover = document.getElementById('gameover'),
  chart = document.getElementById('chart')
var blockRect = block.getBoundingClientRect(),
  brickRect = brick.getBoundingClientRect()
var startbtn = document.getElementById('start'),
  resetbtn = document.getElementById('reset'),
  databtn = document.getElementById('data')
var left = 140;
brick.style.left = "140px";
block.style.top = "5px";
block.style.left = Math.floor((Math.random() * 365) + 5) + "px";
block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

// Keys
document.onkeydown = function () {
  switch (window.event.keyCode) {
    case 37:
      moveleft(brick);
      break;
    case 39:
      moveright(brick);
      break;
  }
};

// Movement left and right keys
function moveright(elem) {

  function frame() {
    if (elem.getBoundingClientRect().right <= (path.getBoundingClientRect().x + 380)) {
      left = left + 20
      elem.style.left = left + 'px'
    }
    clearInterval(id)
  }
  var id = setInterval(frame, 0)
}

function moveleft(elem) {

  function frame() {
    if (elem.getBoundingClientRect().left >= (path.getBoundingClientRect().x + 20)) {
      left = left - 20
      elem.style.left = left + 'px'
    }
    clearInterval(id)
  }
  var id = setInterval(frame, 0)
}

// dictionary to keep track of colors caught
var dataMap = {}

startbtn.onclick = function movedown() {
  var top = 0
  function frame() {
    top++
    block.style.top = top + 'px'
    var blockRect = block.getBoundingClientRect(),
      brickRect = brick.getBoundingClientRect()
    if (block.style.top === '355px' && blockRect.right > brickRect.left && blockRect.left < brickRect.right) {
      clearInterval(id)
      // count number of each block caught
      if (dataMap[block.style.backgroundColor]) {
        dataMap[block.style.backgroundColor]++;
      }
      else {
        dataMap[block.style.backgroundColor] = 1;
      }
      updateScore()
      block.style.top = 10;
      block.style.left = Math.floor((Math.random() * 350) + 5) + 'px'
      block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      movedown()
    }
    if (top == 400) {
      clearInterval(id);
      document.getElementById("gameover").innerHTML = "GAME OVER";
    }
  }
  var id = setInterval(frame, 4)  // control speed of blocks falling
}

var score = 0
function updateScore() {
  score++
  document.getElementById("score").innerHTML = score;
}

resetbtn.onclick = function reset() {
  document.getElementById("gameover").innerHTML = "";
  score = 0
  document.getElementById("score").innerHTML = score;
  document.getElementById("chart").innerHTML = "";
  dataMap = {}
  block.style.top = "5px";
  block.style.left = Math.floor((Math.random() * 365) + 5) + "px";
  block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

databtn.onclick = function getData() {
  document.getElementById("gameover").innerHTML = "";
  anychart.onDocumentReady(function () {
    // set the data
    var data = [
      {
        x: "Pink", value: dataMap["pink"],
        normal: {
          fill: "pink",
          stroke: null,
          label: { enabled: false }
        },
      },
      {
        x: "Blue", value: dataMap["blue"],
        normal: {
          fill: "blue",
          stroke: null,
          label: { enabled: false }
        },
      },
      {
        x: "Purple", value: dataMap["purple"],
        normal: {
          fill: "purple",
          stroke: null,
          label: { enabled: false }
        },
      },
      {
        x: "Green", value: dataMap["green"],
        normal: {
          fill: "green",
          stroke: null,
          label: { enabled: false }
        },
      },
      {
        x: "Grey", value: dataMap["grey"],
        normal: {
          fill: "grey",
          stroke: null,
          label: { enabled: false }
        },
      },
      {
        x: "Yellow", value: dataMap["yellow"],
        normal: {
          fill: "yellow",
          stroke: null,
          label: { enabled: false }
        },
      },
      {
        x: "Orange", value: dataMap["orange"],
        normal: {
          fill: "orange",
          stroke: null,
          label: { enabled: false }
        },
      }
    ];
    // create the chart
    var chart = anychart.bar();
    var series = chart.bar(data);
    // add data
    chart.yScale().ticks().allowFractional(false);
    chart.yScale().minimum(0);
    // set the chart title and axis titles
    chart.title("The Number of Blocks Caught per Color");
    chart.xAxis().title("Color")
    chart.yAxis().title("Number of Blocks")
    // draw
    chart.container("chart");
    chart.draw();
  });
}

// Swipe Functionality
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;
  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      moveleft(brick)
    } else {
      moveright(brick)
    }
  }
  xDown = null;
  yDOwn = null;
}

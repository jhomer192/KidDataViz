//Starting Point
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

//Keys
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

//Movement
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
  var id = setInterval(frame, 2)
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
    var data = {
      header: ["Name", "Blocks caught"],
      rows: [
        ["Pink", dataMap["pink"]],
        ["Blue", dataMap["blue"]],
        ["Purple", dataMap["purple"]],
        ["Green", dataMap["green"]],
        ["Grey", dataMap["grey"]],
        ["Yellow", dataMap["yellow"]],
        ["Orange", dataMap["orange"]]
      ]
    };
    // create the chart
    var chart = anychart.bar();
    // add data
    chart.data(data);
    chart.yScale().ticks().allowFractional(false);
    chart.yScale().minimum(0);
    // set the chart title
    chart.title("The number of blocks caught per color");
    // draw
    chart.container("chart");
    chart.draw();
  });
}

//Swipe Functionality
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

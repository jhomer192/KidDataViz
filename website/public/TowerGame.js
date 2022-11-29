let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let instructions = document.getElementById("instructions");
let scrollCounter, cameraY, current, mode, xSpeed;
let ySpeed = 10;
let height = 50;
let boxes = [];
boxes[0] = {
  x: 375,
  y: 300,
  width: 50,
};

let round = 1;
let scores = [];
let color = "";

function newBox() {
  boxes[current] = {
    x: 0,
    y: (current + 10) * height,
    width: boxes[current - 1].width,
  };
}

function gameOver() {
  mode = "gameOver";
  scores.push(current - 1);
  if (round === 1) {
    context.fillText(`Round 1 over. Click to play Round 2.`, 125, 50);
  } else if (round === 2) {
    context.fillText(`Round 2 over. Click to play Round 3.`, 125, 50);
  } else if (round === 3) {
    context.fillText(`Game over. Click to view data visualization.`, 100, 50);
  }

  round++;
}

function animate() {
  if (mode !== "gameOver") {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText("Score: " + (current - 1).toString(), 25, 575);
    for (let n = 0; n < boxes.length; n++) {
      let box = boxes[n];
      context.fillStyle = color;
      context.fillRect(box.x, 600 - box.y + cameraY, box.width, height);
    }
    if (mode === "bounce") {
      boxes[current].x = boxes[current].x + xSpeed;
      if (xSpeed > 0 && boxes[current].x + boxes[current].width > canvas.width)
        xSpeed = -xSpeed;
      if (xSpeed < 0 && boxes[current].x < 0) xSpeed = -xSpeed;
    }
    if (mode === "fall") {
      boxes[current].y = boxes[current].y - ySpeed;
      if (boxes[current].y === boxes[current - 1].y + height) {
        mode = "bounce";
        let difference = boxes[current].x - boxes[current - 1].x;
        if (Math.abs(difference) >= boxes[current].width) {
          gameOver();
        }
        if (xSpeed > 0) xSpeed += round;
        else xSpeed -= round;
        current++;
        scrollCounter = height;
        newBox();
      }
    }
    if (scrollCounter) {
      cameraY++;
      scrollCounter--;
    }
  }
  window.requestAnimationFrame(animate);
}

function start() {
  mode = "gameOver";
  color = "black";
  context.font = "bold 30px Comic Sans MS";
  context.fillText(`Click to start!`, 300, 300);
}

function restart() {
  boxes.splice(1, boxes.length - 1);
  mode = "bounce";
  cameraY = 0;
  scrollCounter = 0;
  xSpeed = round * 2;
  if (round === 1) color = "green";
  else if (round === 2) color = "goldenrod";
  else color = "red";
  current = 1;
  newBox();
}

canvas.onpointerdown = function () {
  if (mode === "gameOver" && round !== 4) {
    restart();
  } else if (mode === "gameOver" && round === 4) {
    canvas.remove();
    instructions.remove();
    graph();
    //renderQuestion();
  } else {
    if (mode === "bounce") mode = "fall";
  }
};

// graph
//--------------------------------------------------------------------------------------------------------------------------------
function graph() {
  /*var xArray = ["Round 1", "Round 2", "Round 3"];
  var yArray = scores;

  var data = [
    {
      x: xArray,
      y: yArray,
      marker: {
        color: ["green", "goldenrod", "red"],
      },
      type: "bar",
    },
  ];
  var layout = { title: "Game Scores" };

  Plotly.newPlot("myPlot", data, layout);*/
  var data = [["Round 1", scores[0]], ["Round 2", scores[1]], ["Round 3", scores[2]]];
  chart = anychart.bar();
  var series = chart.bar(data);
  chart.container("myPlot");
  chart.draw();
}
//--------------------------------------------------------------------------------------------------------------------------------

// questions
//--------------------------------------------------------------------------------------------------------------------------------
const quizEl = document.getElementById("questions");
let questions;
let currentQuestion = 0;
let submitted = false;

const renderQuestion = () => {
  questions = [
    {
      name: "What round did you get the highest score?",
      answer: `Round_${scores.indexOf(Math.max(...scores)) + 1}`,
      options: ["Round_1", "Round_2", "Round_3", "There is a tie."],
    },
    {
      name: "What round did you get the lowest score?",
      answer: `Round_${scores.indexOf(Math.min(...scores)) + 1}`,
      options: ["Round_1", "Round_2", "Round_3", "There is a tie."],
    },
    {
      name: "What score did you get for Round 1?",
      answer: scores[0],
      options: [scores[2], scores[0], 1, scores[1]],
    },
    {
      name: "What score did you get for Round 2?",
      answer: scores[1],
      options: [scores[1], scores[0], 2, scores[2]],
    },
    {
      name: "What score did you get for Round 3?",
      answer: scores[2],
      options: [scores[0], 3, scores[1], scores[2]],
    },
  ];
  submitted = false;

  removeClickListener(quizEl.querySelector("#nextQuestion"), handleNext);
  removeClickListener(quizEl.querySelector("#submit"), handleSubmit);

  const question = questions[currentQuestion];
  const isLast = currentQuestion === questions.length - 1;

  quizEl.innerHTML = `
    <h1>${question.name}</h1>
    <form id="myForm">
        <input type="radio" id="0" name="option" value=${question.options[0]}>
        <label for="0">${question.options[0]}</label><br>

        <input type="radio" id="1" name="option" value=${question.options[1]}>
        <label for="1">${question.options[1]}</label><br>

        <input type="radio" id="2" name="option" value=${question.options[2]}>
        <label for="2">${question.options[2]}</label><br>

        <input type="radio" id="3" name="option" value=${question.options[3]}>
        <label for="3">${question.options[3]}</label><br>

        <p id="message"></p>

        <button id="submit">Submit</button>
        <button id="nextQuestion">${!isLast ? "Next" : "Finish"}</button>
    </form> 
  `;

  // Re-associate the listener
  addClickListener(quizEl.querySelector("#nextQuestion"), handleNext);
  addClickListener(quizEl.querySelector("#submit"), handleSubmit);
};

const addClickListener = (btn, listener) => {
  if (btn) btn.addEventListener("click", listener);
};

const removeClickListener = (btn, listener) => {
  if (btn) btn.removeEventListener("click", listener);
};

const handleNext = (e) => {
  e.preventDefault();

  const msg = document.getElementById("message");

  if (document.querySelector('input[name="option"]:checked') === null) {
    msg.innerHTML = "Select an answer to proceed.";
    return;
  }

  if (!submitted) {
    msg.innerHTML = "Please submit your answer before proceeding.";
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    alert("Good job! You answered the last question!");
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  const msg = document.getElementById("message");
  const ans = document.querySelector('input[name="option"]:checked');

  if (!ans) {
    msg.innerHTML = "Please select an answer.";
    return;
  }

  const question = questions[currentQuestion];
  const correctAns = question.answer;
  const userAns = ans.value;

  if (correctAns == userAns) {
    msg.innerHTML = `Correct!`;
  } else {
    msg.innerHTML = `Incorrect. The correct answer was ${correctAns}.`;
  }

  document.getElementById("0").disabled = true;
  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;

  submitted = true;
};
//--------------------------------------------------------------------------------------------------------------------------------

start();
animate();

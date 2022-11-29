let operators = ["+", "-"];
const startBtn = document.getElementById("start-btn");
const dataVizBtn = document.getElementById("dataviz-btn");
const question = document.getElementById("question");
const controls = document.querySelector(".controls-container");
const result = document.getElementById("result");
const num = document.getElementById("num");
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.getElementById("error-msg");
const qLeft = document.getElementById("qLeft");
let answerValue;

var yes = false;
var no = false;

var correct = 0;
var incorrect = 0;

dataVizBtn.classList.add("hide");
// let numQuestions = 5;

//Random Value Generator
const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

//random value for number of questions
let numQuestions = randomValue(10, 15);

const questionGenerator = () => {
  if(numQuestions == 1) {
    qLeft.innerHTML = "last question!!";
  }
  else {
    qLeft.innerHTML = numQuestions.toString() + " questions left.";
  }
  
  //Two random values between 1 and 19
  let [num1, num2] = [randomValue(1, 20), randomValue(1, 20)];

  //For getting random operator
  let randomOperator = operators[Math.floor(Math.random() * operators.length)];

  if (randomOperator == "-" && num2 > num1) {
    [num1, num2] = [num2, num1];
  }

  //Solve equation
  let solution = eval(`${num1}${randomOperator}${num2}`);

  //For placing the input at random position
  //(1 for num1, 2 for num2, anything else(3) for solution)
  let randomVar = randomValue(1, 4);

  if (randomVar == 1) {
    answerValue = num1;
    question.innerHTML = `<input type="number" id="inputValue" placeholder="?"\> ${randomOperator} ${num2} = ${solution}`;
  } else if (randomVar == 2) {
    answerValue = num2;
    question.innerHTML = `${num1} ${randomOperator}<input type="number" id="inputValue" placeholder="?"\> = ${solution}`;
  } else {
    answerValue = solution;
    question.innerHTML = `${num1} ${randomOperator} ${num2} = <input type="number" id="inputValue" placeholder="?"\>`;
  }

  //User Input Check
  submitBtn.addEventListener("click", () => {
    if (numQuestions > 0) {
      errorMessage.classList.add("hide");
      let userInput = document.getElementById("inputValue").value;
      //If user input is not empty
      if (userInput) {
        //If the user guessed correct answer
        if (userInput == answerValue) {
          // if(randomOperator == "+") {
          //   addcorrect++;
          //   console.log("added 1 to addcorrect");
          // }
          // else {
          //   subcorrect++;
          //   console.log("added 1 to subcorrect");
          // }
          yes = true;
          continueGame(`<span>Correct</span> Answer`);
        }
        //If user guessed wrong answer
        else {
          // if(randomOperator == "+") {
          //   addincorrect++;
          //   console.log("added 1 to addincorrect");
          // }
          // else {
          //   subincorrect++;
          //   console.log("added 1 to subincorrect");
          // }
          no = true;
          continueGame(`<span>Wrong</span> Answer`);
        }
      }
      //If user input is empty
      else {
        errorMessage.classList.remove("hide");
        errorMessage.innerHTML = "Input Cannot Be Empty";
      }
    }
    else {
      let userInput = document.getElementById("inputValue").value;
      //If user input is not empty
      if (userInput) {
        //If the user guessed correct answer
        if (userInput == answerValue) {
          yes = true;
          // stopGame(`<span>Correct</span> Answer`);
        }
        //If user guessed wrong answer
        else {
          no = true;
          // stopGame(`<span>Wrong</span> Answer`);
        }
      }
      continueGame(`<span>Game</span> Over!`);
    }
    
  });
};

//Start Game
startBtn.addEventListener("click", () => {
  qLeft.innerHTML = numQuestions + " questions left.";
  operatorQuestion = false;
  answerValue = "";
  errorMessage.innerHTML = "";
  errorMessage.classList.add("hide");
  //Controls and buttons visibility
  controls.classList.add("hide");
  startBtn.classList.add("hide");
  
  if(yes) {
    correct++;
    console.log("add 1 to correct");
    yes = false;
  }
  if(no) {
    incorrect++;
    console.log("add 1 to incorrect");
    no = false;
  }

  if(numQuestions > 0) {
    questionGenerator();
  }
  else {
    stopGame(`<span>Game</span> Over!`);
  }

  numQuestions--;
  // stopGame(`<span>Game</span> Over!`);
});

//Continue Game
const continueGame = (resultText) => {
  result.innerHTML = resultText;
  // if(resultText === '<span>Correct</span> Answer') {
  //   correct++;
  //   console.log("added 1 to correct");
  // }
  // else if(resultText === '<span>Wrong</span> Answer') {
  //   incorrect++;
  //   console.log("added 1 to incorrect");
  // }
  // qLeft.innerHTML = numQuestions + " questions left.";
  startBtn.innerText = "Continue";
  controls.classList.remove("hide");
  startBtn.classList.remove("hide");
  // numQuestions--;
};

//Stop Game
const stopGame = (resultText) => {
  result.innerHTML = resultText;
  // startBtn.innerText = "Show Data Viz";
  controls.classList.remove("hide");
  // startBtn.classList.remove("hide");
  dataVizBtn.classList.remove("hide");
  // startBtn.style.display = "none";
};

//Data Viz part
dataVizBtn.addEventListener("click", () => {
  // controls.classList.add("hide");
  result.classList.add("hide");
  dataVizBtn.classList.add("hide");
  
  anychart.onDocumentReady(function() {
 
    // set the data
    // var data = {
    //     header: ["Name", "Correct", "Incorrect"],
    //     rows: [
    //       // ["Addition Correct", addcorrect],
    //       // ["Addition Incorrect", addincorrect],
    //       // ["Subtraction Correct", subcorrect],
    //       // ["Subtraction Incorrect", subincorrect]
    //       ["Addition", addcorrect, addincorrect],
    //       ["Subtraction", subcorrect, subincorrect]
    // ]};

    // var data = {
    //   header: ["Name", "Correct", "Incorrect"],
    //   rows: [
    //     // ["Addition Correct", addcorrect],
    //     // ["Addition Incorrect", addincorrect],
    //     // ["Subtraction Correct", subcorrect],
    //     // ["Subtraction Incorrect", subincorrect]
    //     ["Answer Score", correct, incorrect]
    //   ]};

    var data = {
      header: ["Type", "Score"],
      rows: [
        // ["Addition Correct", addcorrect],
        // ["Addition Incorrect", addincorrect],
        // ["Subtraction Correct", subcorrect],
        // ["Subtraction Incorrect", subincorrect]
        ["Correct", correct],
        ["Incorrect", incorrect]
      ]};

    // create the chart
    var chart = anychart.bar();

    // add the data
    chart.data(data);

    // set the chart title
    chart.title("Data Viz");

    // set the titles of the axes
    var xAxis = chart.xAxis();
    xAxis.title("Score Type");
    var yAxis = chart.yAxis();
    yAxis.title("Score");

    // draw
    chart.container("container");
    chart.draw();
  });
});
let myQuestions = [
  {
      question: "How many continents are there in the world?",
      answer: 7
  },
  {
      question: "The major raw material of pottery is?",
      answer: "clay"
  },
  {
      question: "How many numbers between 1 and 60 begins or ends with 5?",
      answer: 15
  },
  {
      question: "The currency Nigeria used before changing to Naira is?",
      answer: "pound"
  },
  {
      question: "which continent is the largest on earth?",
      answer: "asia"
  },
  {
      question: "What is the capital of Nigeria?",
      answer: "abuja"
  },
  {
      question: "How many weeks makes a leap year?",
      answer: 52
  },
  {
      question: "The longest river in Nigeria is?",
      answer: "niger"
  },
  {
      question: "The general lockdown due to corona virus was in which year?",
      answer: 2020
  },
  {
      question: "Corona virus outbreak originated from which country?",
      answer: "china"
  }
];

let questions_home = document.getElementById("questions__home");
myQuestions.forEach((question, index) => {
    questions_home.innerHTML += `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Question ${index + 1}</h5>
          <p class="card-text">${myQuestions[index].question}</p>
          <form>
            <div class="form-group">
              <input type="text" class="form-control" id="questionid">
            </div>
          </form>          
        </div>
      </div>
    `;
});



let submitButton = document.getElementById("submit");
let scoreBoard = document.querySelector(".score__board");
submitButton.addEventListener("click", quizSubmit);


function quizSubmit() {
  let score = 0;
  let input = document.getElementById("questionid").value;
  if (input === myQuestions.answer){
    score++;
  }
  scoreBoard.innerHTML = `You got ${score / myQuestions.length * 100}% out of 100%`;
};
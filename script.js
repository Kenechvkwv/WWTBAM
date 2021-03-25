function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of possible answers
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
    );
  });

  // combine the output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  // gather answer containers from the questionnaire
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = "lightgreen";
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[questionNumber].style.color = "red";
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const myQuestions = [
  {
    question: "Where is Digital DreamsHQ Located?",
    answers: {
      a: "New Haven",
      b: "Independence Layout",
      c: "GRA Enugu"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is DD manager?",
    answers: {
      a: "Mr Clinton",
      b: "Mr Ben",
      c: "Mr Chux"
    },
    correctAnswer: "c"
  },
  {
    question: "Who is DD's best developer",
    answers: {
      a: "Victor",
      b: "Amos",
      c: "Kingsley",
      d: "Kc"
    },
    correctAnswer: "d"
  }
];

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);

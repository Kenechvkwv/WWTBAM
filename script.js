const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

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

function showResults() {}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);

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

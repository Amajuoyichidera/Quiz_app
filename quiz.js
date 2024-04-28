// Quiz questions and correct answers
const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Madrid"],
      correct: 0, // Correct answer index
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Venus", "Jupiter"],
      correct: 1,
    },
    {
      question: "What is the square root of 64?",
      answers: ["6", "7", "8", "9"],
      correct: 2,
    },
  ];

  const questionDiv = document.getElementById("questions");
  const nextBtn = document.getElementById("next");
  const resultDiv = document.getElementById("result");

  let currentQuestion = 0;
  let score = 0;

  function displayQuestions() {
    const question = questions[currentQuestion]
    const answerHtml = question.answers.map((answer, index) => 
    `<li><input type="radio" name="answer" value="${index}">${answer}</li>`
    )

    questionDiv.innerHTML = `
    <h1>${question.question}</h1>
    <ol>${answerHtml}</ol>`
  }

  function nextQuestion() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if(!selected) {
        alert('Choose An Answer');
        return;
    }

    const selectedAnswer = parseInt(selected, 10);
    if(selectedAnswer === questions[currentQuestion].correct) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        displayQuestions();
      } else {
        showResult();
      }
  }

  function showResult() {
    questionDiv.style.display = 'none';
    nextBtn.style.display = 'none';
    resultDiv.style.display = 'block';

    resultDiv.innerHTML = `
    <h1>You Scored ${score} / ${questions.length} </h1>`;
  }

  nextBtn.addEventListener("click", nextQuestion);

  displayQuestions()
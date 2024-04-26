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
  
  let currentQuestion = 0;
  let score = 0;

  const questionDiv = document.getElementById("questions");
  const nextBtn = document.getElementById("next");

  function name(params) {
    
  }
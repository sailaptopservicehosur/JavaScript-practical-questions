// Quiz data
const quizData = [
    {
      question: 'What is the capital of France?',
      correctAnswer: 'paris'
    },
    {
      question: 'Which programming language is this quiz written in?',
      correctAnswer: 'html'
    },
    {
      question: 'What is the result of 2 + 3?',
      correctAnswer: '5'
    }
  ];
  
  // Function to submit the quiz and calculate the score
  function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const feedbackContainer = document.getElementById('quiz-feedback');
    let score = 0;
  
    // Loop through each question in the quiz
    quizData.forEach((question, index) => {
      const userAnswer = form.elements[`q${index + 1}`].value;
  
      // Check if the user's answer is correct
      if (userAnswer === question.correctAnswer) {
        score++;
      }
    });
  
    // Display feedback and score
    const feedback = `Your Quiz result: Score: ${score}`;
    feedbackContainer.textContent = feedback;
    feedbackContainer.style.color = 'blue';
  }
  
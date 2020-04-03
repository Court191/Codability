$(document).ready(function() {
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const completeButton = document.getElementById('complete-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    completeButton.innerText = 'Complete'
    completeButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which is the correct CSS syntax?',
    answers: [
      { text: 'body {color: black;}', correct: true },
      { text: '{body;color:black;}', correct: false },
      { text: '{body:color=black;}', correct: false },
      { text: 'body:color=black;', correct: false }
    ]
  },
  {
    question: 'Which property is used to change the background color?',
    answers: [
      { text: 'bgcolor', correct: false },
      { text: 'color', correct: false },
      { text: 'background-color', correct: true }
    ]
  },
  {
    question: 'Which CSS property is used to change the text color of an element?',
    answers: [
      { text: 'text-color', correct: false },
      { text: 'color', correct: true },
      { text: 'font-color', correct: false }
    ]
  },
  {
   question: 'How do you add a background color for all <h1> elements?',
    answers: [
      { text: 'all.h1 {background-color:#FFFFFF;}', correct: false },
      { text: 'h1 {background-color:#FFFFFF;}', correct: true },
      { text: 'h1.all {background-color:#FFFFFF;}', correct: false }
    ]
  },
  {
    question: 'What is the correct CSS for a linear gradient',
    answers: [
      { text: 'linear-gradient(red, yellow);', correct: true },
      { text: 'gradient-linear(red, yellow);', correct: false },
      { text: 'gradient(red to yellow);', correct: false },
      { text: 'gradient: red, yellow;', correct: false }
    ]
  }
]
});
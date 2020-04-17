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
    question: 'What does CSS stand for?',
    answers: [
      { text: 'Cascading Style Sheets', correct: true },
      { text: 'Computer Style Sheets', correct: false },
      { text: 'Creative Style Sheets', correct: false },
      { text: 'Colorful Style Sheets', correct: false }
    ]
  },
  {
    question: 'Which HTML attribute is used to define inline styles?',
    answers: [
      { text: 'class', correct: false },
      { text: 'font', correct: false },
      { text: 'style', correct: true },
      { text: 'styles', correct: false }
    ]
  },
  {
    question: 'Which HTML tag is used to define an internal style sheet?',
    answers: [
      { text: '<style>', correct: true },
      { text: '<script>', correct: false },
      { text: '<css>', correct: false }
    ]
  },
  {
    question: 'How do you select elements with class name "test"?',
    answers: [
      { text: '#test', correct: false },
      { text: '.text', correct: true },
      { text: '$test', correct: false },
      { text: '*test', correct: false }
    ]
  },
  {
    question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
    answers: [
      { text: 'In the <body> section', correct: false },
      { text: 'At the end of the document', correct: false },
      { text: 'In the <head> section', correct: true }
    ]
  }
]
});
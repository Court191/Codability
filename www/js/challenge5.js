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
    question: 'How can you make a numbered list?',
    answers: [
      { text: '<dl>', correct: false },
      { text: '<list>', correct: false },
      { text: '<ol>', correct: true },
      { text: '<ul>', correct: false }
    ]
  },
  {
    question: 'How can you make a bulleted list?',
    answers: [
      { text: '<ol>', correct: false },
      { text: '<ul>', correct: true },
      { text: '<list>', correct: false },
      { text: '<dl>', correct: false }
    ]
  },
  {
    question: 'What is the correct HTML for making a drop-down list?',
    answers: [
      { text: '<input type="list">', correct: false },
      { text: '<list>', correct: false },
      { text: '<select>', correct: true },
      { text: '<input type="dropdown">', correct: false }
    ]
  },
  {
    question: 'Choose the correct HTML element to define emphasized text',
    answers: [
      { text: '<i>', correct: false },
      { text: '<em>', correct: true },
      { text: '<italic>', correct: false }
    ]
  },
  {
    question: 'What is the correct HTML element for inserting a line break?',
    answers: [
      { text: '<lb>', correct: false },
      { text: '<break>', correct: false },
      { text: '<br>', correct: true }
    ]
  }
]
});
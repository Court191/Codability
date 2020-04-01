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
    question: 'What is the correct HTML for making a text area?',
    answers: [
      { text: '<textarea>', correct: true },
      { text: '<input type="textbox">', correct: false },
      { text: '<input type="textarea">', correct: false }
    ]
  },
  {
    question: 'What is the correct HTML element for playing audio files?',
    answers: [
      { text: '<sound>', correct: false },
      { text: '<audio>', correct: true },
      { text: '<mp3>', correct: false }
    ]
  },
  {
    question: 'Which input type defines a slider control?',
    answers: [
      { text: 'controls', correct: false },
      { text: 'slider', correct: false },
      { text: 'search', correct: false },
      { text: 'range', correct: true }
    ]
  },
  {
    question: 'In HTML, which attribute is used to specify that an input field must be filled out?',
    answers: [
      { text: 'formvalidate', correct: false },
      { text: 'placeholder', correct: false },
      { text: 'validate', correct: false },
      { text: 'required', correct: true }
    ]
  },
  {
    question: 'What is the correct HTML for making a checkbox?',
    answers: [
      { text: '<checkbox>', correct: false },
      { text: '<input type="check">', correct: false },
      { text: '<input type="checkbox">', correct: true },
      { text: '<check>', correct: false }
    ]
  }
]
});
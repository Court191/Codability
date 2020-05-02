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
    question: 'What is the correct HTML for creating a hyperlink?',
    answers: [
      { text: '<a href="http://www.code.com">code</a>', correct: true },
      { text: '<a>http://www.code.com</a>', correct: false },
      { text: '<a url="http://www.code.com">code.com</a>', correct: false }
    ]
  },
  {
    question: 'What is the correct HTML for inserting an image?',
    answers: [
      { text: '<img href="image.gif" alt="MyImage">', correct: false },
      { text: '<image src="image.gif" alt="MyImage">', correct: false },
      { text: '<img src="image.gif" alt="MyImage">', correct: true },
      { text: '<img alt="MyImage">image.gif</img>', correct: false }
    ]
  },
  {
    question: 'How can you open a link in a new tab/browser window?',
    answers: [
      { text: '<a href="url" new>', correct: false },
      { text: '<a href="url" target="new">', correct: false },
      { text: '<a href="url" target="_blank">', correct: true }
    ]
  },
  {
    question: 'What is the correct HTML for inserting a background image?',
    answers: [
      { text: '<body bg="background.gif">', correct: false },
      { text: '<body style="background-image:url(background.gif)">', correct: true },
      { text: '<background img="background.gif">', correct: false }
    ]
  },
  {
    question: 'Graphics defined by SVG is in which format?',
    answers: [
      { text: 'HTML', correct: false },
      { text: 'CSS', correct: false },
      { text: 'XML', correct: true }
    ]
  }
]
});
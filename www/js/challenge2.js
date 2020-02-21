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
    question: 'What is the correct HTML element for playing video files?',
    answers: [
      { text: '<video>', correct: true },
      { text: '<media>', correct: false },
      { text: '<movie>', correct: false }
    ]
  },
  {
    question: 'Choose the correct HTML element to define important text',
    answers: [
      { text: '<b>', correct: false },
      { text: '<i>', correct: false },
      { text: '<strong>', correct: true },
      { text: '<important>', correct: false }
    ]
  },
  {
    question: 'Which HTML element defines navigation links?',
    answers: [
      { text: '<navigate>', correct: false },
      { text: '<navigation>', correct: false },
      { text: '<nav>', correct: true }
    ]
  },
  {
    question: 'Which HTML element is used to specify a header for a document or section?',
    answers: [
      { text: '<top>', correct: false },
      { text: '<header>', correct: true },
      { text: '<head>', correct: false },
      { text: '<section>', correct: false }
    ]
  },
  {
    question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
    answers: [
      { text: 'src', correct: false },
      { text: 'title', correct: false },
      { text: 'longdesc', correct: false },
      { text: 'alt', correct: true }
    ]
  }
]
});
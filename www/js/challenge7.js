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
    question: 'How do you make the text bold?',
    answers: [
      { text: 'font-weight:bold;', correct: true },
      { text: 'style:bold;', correct: false },
      { text: 'font:bold;', correct: false }
    ]
  },
  {
    question: 'Which property is used to change the font of an element?',
    answers: [
      { text: 'font-style', correct: false },
      { text: 'font-weight', correct: false },
      { text: 'font-family', correct: true }
    ]
  },
  {
    question: 'How do you make each word in a text start with a capital letter?',
    answers: [
      { text: 'transform:capitalize', correct: false },
      { text: 'You cannot do that with CSS', correct: false },
      { text: 'text-style:capitalize', correct: false },
      { text: 'text-transform:capitalize', correct: true }
    ]
  },
  {
   question: 'Which CSS property controls the text size?',
    answers: [
      { text: 'font-style', correct: false },
      { text: 'text-style', correct: false },
      { text: 'text-size', correct: false },
      { text: 'font-size', correct: true }
    ]
  },
  {
    question: 'How do you insert a comment in a CSS file?',
    answers: [
      { text: '// this is a comment //', correct: false },
      { text: '// this is a comment', correct: false },
      { text: '*this is a comment', correct: false },
      { text: '/* this is a comment */', correct: true }
    ]
  }
]
});
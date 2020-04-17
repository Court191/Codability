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
    question: 'What is the correct way to write a JavaScript array?',
    answers: [
      { text: 'var colors = (1:"red", 2:"green", 3:"blue")', correct: false },
      { text: 'var colors = ["red", "green", "blue"]', correct: true },
      { text: 'var colors = "red", "green", "blue"', correct: false }
    ]
  },
  {
    question: 'An array is a single variable that is used to store different elements',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
    ]
  },
  {
    question: 'var fruits = ["Banana", "Orange", "Apple", "Mango"]; How do you get the measure of the array?',
    answers: [
      { text: 'fruits.length;', correct: true },
      { text: 'fruits.measure;', correct: false },
      { text: 'fruits.range;', correct: false }
    ]
  },
  {
   question: 'What is the best loop for when using arrays?',
    answers: [
      { text: 'for loop', correct: false },
      { text: 'for in loop', correct: false },
      { text: 'for each loop', correct: true },
      { text: 'for loop', correct: false }
    ]
  },
  {
    question: 'Arrays are a special type of objects. Which operator in JavaScript returns "object" for arrays?',
    answers: [
      { text: 'typeof', correct: true },
      { text: 'number', correct: false },
      { text: 'type', correct: false },
      { text: 'instanceof', correct: false }
    ]
  }
]
});
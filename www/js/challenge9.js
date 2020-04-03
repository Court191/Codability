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
    question: 'What is the default value of the position property?',
    answers: [
      { text: 'static', correct: true },
      { text: 'fixed', correct: false },
      { text: 'relative', correct: false },
      { text: 'absolute', correct: false }
    ]
  },
  {
    question: 'What position property is relative to the browser window?',
    answers: [
      { text: 'relative', correct: false },
      { text: 'sticky', correct: false },
      { text: 'fixed', correct: true }, 
      { text: 'abolsute', correct: false },
    ]
  },
  {
    question: 'Which position property sets the property to its default value?',
    answers: [
      { text: 'static', correct: false },
      { text: 'initial', correct: true },
      { text: 'relative', correct: false },
      { text: 'inherit', correct: false }
    ]
  },
  {
   question: 'Which element is positioned relative to its normal position?',
    answers: [
      { text: 'absolute', correct: false },
      { text: 'relative', correct: true },
      { text: 'beside', correct: false },
      { text: 'inherit', correct: false }
    ]
  },
  {
    question: 'Which position propery is relative to its first positioned (not static) ancestor element?',
    answers: [
      { text: 'absolute', correct: true },
      { text: 'relative', correct: false },
      { text: 'inherit', correct: false },
      { text: 'sticky', correct: false }
    ]
  }
]
});
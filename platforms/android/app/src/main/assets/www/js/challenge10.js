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
    question: 'Which property is used to change the left margin of an element?',
    answers: [
      { text: 'padding-left', correct: false },
      { text: 'margin-left', correct: true },
      { text: 'indent', correct: false }
    ]
  },
  {
    question: 'How would you set all the padding values to 25px?',
    answers: [
      { text: 'padding: 25px;', correct: true },
      { text: 'all-padding: 25px;', correct: false },
      { text: 'paddingall: 25px;', correct: false }, 
      { text: 'allpadding(25);', correct: false }
    ]
  },
  {
    question: 'Which propery is used to change the bottom margin of an element?',
    answers: [
      { text: 'bottom-margin', correct: false },
      { text: 'margin-bottom', correct: true },
      { text: 'padding-bottom', correct: false },
      { text: 'bottom', correct: false }
    ]
  },
  {
   question: 'Which property is used so the browser calculates the margin',
    answers: [
      { text: 'inherit', correct: false },
      { text: 'calulate', correct: false },
      { text: 'auto', correct: true }
    ]
  },
  {
    question: 'Which property is used to adapt the margin from parent element?',
    answers: [
      { text: 'inherit', correct: true },
      { text: 'adopt', correct: false },
      { text: 'adjust', correct: false },
      { text: 'auto', correct: false }
    ]
  }
]
});
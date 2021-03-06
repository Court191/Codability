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
    question: 'How does a WHILE loop start?',
    answers: [
      { text: 'while i = 1 to 10', correct: false },
      { text: 'while (i <= 10)', correct: true },
      { text: 'while (i <= 10; i++)', correct: false }
    ]
  },
  {
    question: 'How does a FOR loop start?',
    answers: [
      { text: 'for (i = 0; i <= 5; i++)', correct: true },
      { text: 'for i = 1 to 5', correct: false },
      { text: 'for (i <= 5; i++)', correct: false },
      { text: 'for (i = 0; i <= 5)', correct: false }
    ]
  },
  {
    question: 'Which loop goes through a block of code once, and then repeats the loop while a specified condition is true?',
    answers: [
      { text: 'for loop', correct: false },
      { text: 'while loop', correct: true },
      { text: 'for each loop', correct: false },
      { text: 'do while loop', correct: false }
    ]
  },
  {
   question: 'Which loop goes through the properties of an object?',
    answers: [
      { text: 'for each loop', correct: false },
      { text: 'while loop', correct: false },
      { text: 'for in loop', correct: true },
      { text: 'do while loop', correct: false }
    ]
  },
  {
    question: 'JavaScript loops are used to repeatedly run a block of code, until a certain condition is met',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
    ]
  }
]
});
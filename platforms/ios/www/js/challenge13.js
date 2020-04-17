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
    question: 'How to write an IF statement in JavaScript?',
    answers: [
      { text: 'if i = 5', correct: false },
      { text: 'if (i == 5)', correct: true },
      { text: 'if i = 5 then', correct: false },
      { text: 'if i == 5 then', correct: false }
    ]
  },
  {
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answers: [
      { text: 'if (i != 5)', correct: true },
      { text: 'if i =! 5 then', correct: false },
      { text: 'if (i <> 5)', correct: false },
      { text: 'if i <> 5', correct: false }
    ]
  },
  {
    question: 'An else statement is an alternative statement that is executed if the result of a previous test condition evaluates to false',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
    ]
  },
  {
   question: 'An else if is used to specify a new condition to test, if the first condition is false',
    answers: [
      { text: 'False', correct: false },
      { text: 'True', correct: true }
    ]
  },
  {
    question: 'Which statement is used specify many alternative blocks of code to be executed',
    answers: [
      { text: 'switch', correct: true },
      { text: 'swap', correct: false },
      { text: 'alternate', correct: false },
      { text: 'after', correct: false }
    ]
  }
]
});
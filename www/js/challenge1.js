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
function completeprogress {
    if ()
}

const questions = [
  {
    question: 'What does HTML stand for?',
    answers: [
      { text: 'Hyperlinks and Text Markup Language', correct: true },
      { text: 'Hyper Text Markup Language', correct: false },
      { text: 'Home Tool Markup Language', correct: false }
    ]
  },
  {
    question: 'Which character is used to indicate an end tag?',
    answers: [
      { text: '<', correct: false },
      { text: '*', correct: false },
      { text: '/', correct: true },
      { text: ';', correct: false }
    ]
  },
  {
    question: 'Who is making the Web standards?',
    answers: [
      { text: 'Google', correct: false },
      { text: 'Mozilla', correct: false },
      { text: 'Microsoft', correct: false },
      { text: 'The World Wide Web Consortium', correct: true }
    ]
  },
  {
    question: 'What is the correct HTML for making a text input field?',
    answers: [
      { text: '<input type="textfield">', correct: false },
      { text: '<input type="text">', correct: true },
      { text: '<textfield>', correct: false },
      { text: '<textinput type="text">', correct: false }
    ]
  },
  {
    question: 'Choose the correct HTML element for the largest heading:',
    answers: [
      { text: '<head>', correct: false },
      { text: '<h6>', correct: false },
      { text: '<heading>', correct: false },
      { text: '<h1>', correct: true }
    ]
  }
]
});
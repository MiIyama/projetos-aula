const quizData = [
  {
    title: "Arte",
    question: "Qual artista pintou o teto da Capela Sistina, em Roma?",
    a: "Da Vinci",
    b: "Michelangelo",
    c: "Monet",
    d: "Van Gogh",
    correct: "b",
  },
  {
    title: "Conhecimento geral",
    question: "Qual é a flor nacional do Japão?",
    a: "Flor de Cerejeira",
    b: "Rosa",
    c: "Lirio",
    d: "Girassol",
    correct: "a",
  },
  {
    title: "Geografia do mundo",
    question: "Qual é o rio mais longo do mundo?",
    a: "Rio Yangtze",
    b: "Rio Amazonas",
    c: "Rio Nilo",
    d: "Rio Paraguai",
    correct: "c",
  },
];

const wrapper = document.querySelector("#wrapper");
const title = document.querySelector("#title");
const question = document.querySelector("#question");
const a = document.querySelector("#questionA");
const b = document.querySelector("#questionB");
const c = document.querySelector("#questionC");
const d = document.querySelector("#questionD");
const button = document.querySelector("#btn");
const answersEl = document.querySelectorAll(".labels__answers");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselect();
  const currentQuizData = quizData[currentQuiz];
  title.innerText = currentQuizData.title;
  question.innerText = currentQuizData.question;
  a.innerText = currentQuizData.a;
  b.innerText = currentQuizData.b;
  c.innerText = currentQuizData.c;
  d.innerText = currentQuizData.d;
}

function deselect() {
  answersEl.forEach((element) => {
    element.checked = false;
  });
}

function select() {
  let answer;
  answersEl.forEach((element) => {
    if (element.checked) {
      answer = element.id;
    }
  });

  return answer;
}

button.addEventListener("click", () => {
  const answer = select();

  console.log("teste");
  if (answer) {
    if (answer == quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      wrapper.innerHTML = `<div class="quiz"><h2>Questões certas</h2><h3>${score}/${quizData.length}</h3></div>`;
    }
  }
});

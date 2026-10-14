// 10개 질문 데이터베이스
const QUESTION_DATABASE = [
  {
    id: 1,
    question: "AI와 대화할 때 나의 개인정보(전화번호, 주소, 이름 등)를 어떻게 다루어야 할까요?",
    options: [
      "개인정보 유출 위험이 있으므로 절대 입력하지 않는다.",
      "친절하게 대답해 주는 AI에게는 알려주어도 된다.",
      "친구의 개인정보라면 입력해도 괜찮다.",
      "AI가 물어보면 제한 없이 모두 답변한다."
    ],
    answer: 0
  },
  {
    id: 2,
    question: "AI가 답변한 정보나 사실에 대해 올바른 확인 방법은 무엇일까요?",
    options: [
      "책이나 신뢰할 수 있는 검색을 통해 사실 여부를 직접 확인한다.",
      "AI의 대답은 항상 정확하므로 그대로 믿는다.",
      "확인 과정 없이 숙제에 그대로 제출한다.",
      "다른 사람들에게 즉시 사실이라고 전파한다."
    ],
    answer: 0
  },
  {
    id: 3,
    question: "AI를 참고하여 과제나 글을 작성할 때 올바른 태도는 무엇일까요?",
    options: [
      "AI는 참고 자료로 활용하고 나만의 생각으로 글을 작성한다.",
      "AI가 써준 내용을 그대로 복사해서 제출한다.",
      "스스로 생각하지 않고 AI에게 모든 작성을 맡긴다.",
      "틀린 정보가 있어도 수정 없이 사용한다."
    ],
    answer: 0
  },
  {
    id: 4,
    question: "AI와 대화하거나 질문할 때 지켜야 할 언어 습관은 무엇일까요?",
    options: [
      "예의 바르고 올바른 언어를 사용한다.",
      "사람이 아니므로 욕설이나 비하하는 표현을 사용한다.",
      "장난으로 거짓 정보를 계속 학습시킨다.",
      "반말과 반말로만 명령하듯 대화한다."
    ],
    answer: 0
  },
  {
    id: 5,
    question: "AI가 생성한 그림이나 글로 작품을 만들 때 지켜야 할 저작권 수칙은 무엇일까요?",
    options: [
      "AI로 생성한 작품임을 명확히 밝히고 출처를 표시한다.",
      "내가 직접 만든 것이라고 거짓으로 표기한다.",
      "타인의 작품을 AI로 변경한 후 내 것처럼 사용한다.",
      "출처를 표시하지 않고 임의로 사용한다."
    ],
    answer: 0
  },
  {
    id: 6,
    question: "AI 서비스나 디지털 기기 이용 시간 관리의 올바른 방법은 무엇일까요?",
    options: [
      "정해진 약속 시간에 맞추어 올바르게 이용한다.",
      "재미있다면 정해진 시간을 지나쳐 계속 사용한다.",
      "다른 활동 시간에도 몰래 AI를 이용한다.",
      "하루 종일 기기만 사용한다."
    ],
    answer: 0
  },
  {
    id: 7,
    question: "AI 대화 중 부적절하거나 이상한 답변이 나왔을 때의 대처법은 무엇일까요?",
    options: [
      "즉시 이용을 중단하고 보호자나 교사에게 알린다.",
      "해당 내용을 캡처하여 다른 곳에 공유한다.",
      "이상한 답변이 나와도 혼자 참고 계속 이용한다.",
      "더 부적절한 답변을 유도하는 질문을 한다."
    ],
    answer: 0
  },
  {
    id: 8,
    question: "AI 계정 및 비밀번호 관리 방법으로 올바른 것은 무엇일까요?",
    options: [
      "비밀번호는 타인에게 공유하지 않고 공용 기기에서는 로그아웃한다.",
      "친한 친구에게 비밀번호를 공유한다.",
      "쉬운 비밀번호로 설정하고 변경하지 않는다.",
      "공공 컴퓨터에 로그인한 상태로 자리를 비운다."
    ],
    answer: 0
  },
  {
    id: 9,
    question: "인터넷에 유포되는 AI 생성 가짜 뉴스나 이미지에 대한 올바른 자세는 무엇일까요?",
    options: [
      "출처와 생성 흔적을 면밀히 확인하고 검증한다.",
      "확인되지 않은 정보라도 타인에게 바로 전달한다.",
      "인터넷에 있는 정보는 모두 사실로 판단한다.",
      "출처 확인 없이 타인에게 퍼뜨린다."
    ],
    answer: 0
  },
  {
    id: 10,
    question: "AI 기술이 발전하더라도 유지해야 할 상호작용의 가치는 무엇일까요?",
    options: [
      "사람들과 직접 얼굴을 보며 대화하고 경청하는 태도",
      "사람과의 대화를 중단하고 AI하고만 소통하는 것",
      "텍스트로만 감정을 전달하는 것",
      "타인의 말을 듣지 않고 내 주장만 하는 것"
    ],
    answer: 0
  }
];

let selectedQuestions = [];
let currentStep = 0;
let userAnswers = [];
let selectedOptionIndex = null;

// 스크린 요소
const screens = {
  start: document.getElementById('screen-start'),
  already: document.getElementById('screen-already'),
  quiz: document.getElementById('screen-quiz'),
  result: document.getElementById('screen-result')
};

// UI 요소
const btnStart = document.getElementById('btn-start');
const btnNext = document.getElementById('btn-next');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress-fill');
const quizStep = document.getElementById('quiz-step');
const scoreText = document.getElementById('score-text');
const resultDesc = document.getElementById('result-desc');

document.addEventListener('DOMContentLoaded', () => {
  checkSubmission();
  setupEvents();
});

function checkSubmission() {
  const isSubmitted = localStorage.getItem('ai_quiz_submitted');
  if (isSubmitted === 'true') {
    const savedScore = parseInt(localStorage.getItem('ai_quiz_score') || '0', 10);
    showResultScreen(savedScore);

    // 4점 이상일 때 폭죽 발사
    if (savedScore >= 4) {
      launchFireworks();
    }
  }
}

function setupEvents() {
  btnStart.addEventListener('click', startQuiz);
  btnNext.addEventListener('click', handleNext);
  setupSecretReset();
}

function switchScreen(screenName) {
  Object.keys(screens).forEach(key => {
    screens[key].classList.remove('active');
  });
  screens[screenName].classList.add('active');
}

// 배열 셔플
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  const newArray = [...array];

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
  }
  return newArray;
}

// 퀴즈 시작 (5개 무작위 선택 및 옵션 섞기)
function startQuiz() {
  const shuffledDb = shuffle(QUESTION_DATABASE);
  const picked = shuffledDb.slice(0, 5);

  selectedQuestions = picked.map(q => {
    const originalAnswerText = q.options[q.answer];
    const shuffledOptions = shuffle(q.options);
    const newAnswerIndex = shuffledOptions.indexOf(originalAnswerText);

    return {
      ...q,
      options: shuffledOptions,
      answer: newAnswerIndex
    };
  });

  currentStep = 0;
  userAnswers = [];
  switchScreen('quiz');
  renderQuestion();
}

// 문제 렌더링
function renderQuestion() {
  selectedOptionIndex = null;
  btnNext.disabled = true;

  const q = selectedQuestions[currentStep];
  questionText.textContent = `${currentStep + 1}. ${q.question}`;
  optionsContainer.innerHTML = '';

  const progressPercent = (currentStep / 5) * 100;
  progressFill.style.width = `${progressPercent}%`;
  quizStep.textContent = `문제 ${currentStep + 1} / 5`;

  q.options.forEach((optText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `${index + 1}. ${optText}`;
    btn.addEventListener('click', () => selectOption(index, btn));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(index, element) {
  selectedOptionIndex = index;
  const allBtns = optionsContainer.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.classList.remove('selected'));
  element.classList.add('selected');
  btnNext.disabled = false;
}

function handleNext() {
  if (selectedOptionIndex === null) return;

  userAnswers.push(selectedOptionIndex);
  currentStep++;

  if (currentStep < 5) {
    renderQuestion();
  } else {
    finishQuiz();
  }
}

// 퀴즈 완료 시
function finishQuiz() {
  progressFill.style.width = '100%';

  let score = 0;
  selectedQuestions.forEach((q, idx) => {
    if (q.answer === userAnswers[idx]) {
      score++;
    }
  });

  localStorage.setItem('ai_quiz_submitted', 'true');
  localStorage.setItem('ai_quiz_score', score);

  showResultScreen(score);

  // ⭐ 4점 이상일 때만 폭죽 연출 실행
  if (score >= 4) {
    launchFireworks();
  }
}

// 결과 화면 출력
function showResultScreen(score) {
  scoreText.textContent = `${score} / 5`;
  
  if (score == 5) {
    resultDesc.textContent = "AI 올바른 사용법을 완벽하게 이해하고 있습니다!";
  } else if (score >= 3) {
    resultDesc.textContent = "AI 올바른 사용법을 잘 이해하고 있습니다.";
  } else {
    resultDesc.textContent = "AI 올바른 사용 수칙을 다시 한번 확인해 보세요.";
  }

  switchScreen('result');
}

/* ===================================================
   관리자 전용 비밀 초기화 (푸터 0.5초 이내 연속 7회 클릭)
=================================================== */
function setupSecretReset() {
  let footerClicks = 0;
  let clickResetTimer;
  const footerEl = document.querySelector('.app-footer');

  if (footerEl) {
    footerEl.addEventListener('click', () => {
      footerClicks++;

      clearTimeout(clickResetTimer);
      // 0.5초(500ms) 동안 추가 클릭이 없으면 클릭 횟수 초기화
      clickResetTimer = setTimeout(() => {
        footerClicks = 0;
      }, 500);

      // 0.5초 이내에 7회 이상 클릭 시 동작
      if (footerClicks >= 7) {
        footerClicks = 0;
        if (confirm("[관리자 기능] 현재 기기의 퀴즈 응시 기록을 초기화하시겠습니까?")) {
          localStorage.removeItem('ai_quiz_submitted');
          localStorage.removeItem('ai_quiz_score');
          alert("응시 기록이 초기화되었습니다.");
          location.reload();
        }
      }
    });
  }
}

/* ===================================================
   💥 Confetti 폭죽 연출 함수
=================================================== */
function launchFireworks() {
  if (typeof confetti !== 'function') return;

  const count = 200;
  const defaults = { origin: { y: 0.7 } };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

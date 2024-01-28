const quiz = document.querySelector(".quiz-display");
const input = document.querySelector(".quiz-input");
const btn = document.querySelector(".button");
var string = ""; 
var string2 = ""; //빈칸 뚫린 문제
var problem = []; //원본을 단어로 쪼개놓음
var random = []; //몇 번째 뚫을지
var answer = []; //정답
var wordPositions = {}; // 각 단어의 위치 저장

async function fetchData() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      const stringArray = data.strings;
      string = stringArray[Math.floor(Math.random() * stringArray.length)];
      make_problem();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

function show_answer() { //정답공개
    random.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < random.length; i++) {
        answer[i] = problem[random[i]];
    }
    console.log(answer);
}
function make_problem() {
    problem = string.split(' ');
    for (var i = 0; i < (problem.length) / 2; i++) {
        let newRandom;
        do {
            newRandom = parseInt(Math.random() * problem.length);
        } while (problem[newRandom].length <= 1 || random.includes(newRandom));

        random.push(newRandom);
    }
    show_answer();
     for (var i = 0; i < answer.length; i++) {
        wordPositions[answer[i]] = random[i];
    }

    string2 = string.split(' ').map(function(word) {
        return wordPositions[word] !== undefined ? "_______" : word;
    }).join(' ');

    quiz.textContent = string2;
}
function check_update() {
    if (answer.length > 0 && random.length > 0) {
        const correctAnswer = answer[0];
        const correctPosition = random[0];
    
        // 입력한 정답이 맞으면 해당 정답을 wordPositions에서 삭제
        if (input.value === correctAnswer) {
          delete wordPositions[correctAnswer];
          string2 = string;
          // 새로운 빈칸 문제 업데이트
          for (const word in wordPositions) {
            string2 = string2.replace(word, "_______");
          }
          
          quiz.textContent = string2;
          alert("정답");
          input.value = "";
          answer.shift();
          random.shift();
        } else {
          alert("오답입니다.");
          input.value = "";
        }

      }
    
      if (answer.length === 0) {
        quiz.textContent = string;
        alert("잘하셨습니다😊 다음 문장으로 넘어갈게요");
        location.reload();
      }
    }
function init() {
    string2 = "";
    fetchData();
    input.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            check_update();
        }
    });
}
btn.addEventListener('click', ()=>{
    location.reload();
});
init();
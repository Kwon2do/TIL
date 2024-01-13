const quiz = document.querySelector(".quiz-display");
const input = document.querySelector(".word-input");
var string = "특수교육이란 특수교육대상자의 교육적 요구를 충족시키기 위하여 특성에 적합한 교육과정 및 제 2호에 따른 특수교육 관련서비스 제공을 통하여 이루어지는 교육을 말한다.";
var string2 = ""; //빈칸 뚫린 문제
var problem = []; //원본을 단어로 쪼개놓음
var random = []; //몇 번째 뚫을지
var answer = []; //정답
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
        random[i] = parseInt(Math.random() * problem.length);
        for (var j = 0; j < i; j++) { //1글자 또는 중복 검사
            while (problem[random[i]].length <= 1 || random[i] === random[j]) {
                random[i] = parseInt(Math.random() * problem.length);
            }
        }
    }
    show_answer();
    for (var i = 0; i < answer.length; i++) {
        var tmp = string2;
        if (string2 === "") {
            tmp = string;
            string2 = tmp.replace(answer[i], "_______");
        }
        else {
            string2 = tmp.replace(answer[i], "_______");
        }
    }
    quiz.textContent = string2;
}
function update() {
    if(answer!=[]&&random!=[]){
        answer.shift();
        random.shift();
    }
    for (var i = 0; i < random.length; i++) {
        answer[i] = problem[random[i]];
    }
    var tmp = "";
    for (var j = 0; j < answer.length; j++) {
        if (tmp == "") {
            tmp = string;
            string2 = tmp.replace(answer[j], "_______");
        }
        else {
            string2 = string2.replace(answer[j], "_______");
        }
    }
    if(answer[0]==null) {
        quiz.textContent = string;
    }
    else{
        quiz.textContent = string2;
    }
}
function check() {
        if (input.value === answer[0]) {
            update();
            alert("정답");
            input.value = "";
        }
        else {
            alert("오답입니다.");
        }
    }
function init() {
    make_problem();
    input.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            check();
        }
    });
}
init();
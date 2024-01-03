let number;
let number_array = [];
let count = 1;
let isPlaying = false;
const LEN = 3;
const answer = document.querySelector('.input_text');
const hint = document.querySelector('.hint_text');
const start = document.querySelector('.button_start');
const end = document.querySelector('.button_end');
function run() { //게임 시작
    hint.value = "";
    answer.value = "";
    //같은 숫자 제거 & 세 자리수만 취급
    while(number<99||((number1===number10||number10===number100||number1===number100))){
        number = Math.floor(Math.random() * 999);
        var number100 = Math.floor(number / 100);
        var number10 = Math.floor((number % 100) / 10);
        var number1 = number % 10;
    }
    for(var i=0;i<LEN;i++){
        number_array[i] = number.toString().charAt(i);
    }
    answer.focus();
    isPlaying = true;
    start.disabled = true;
    start.value = "게임 진행 중";
    start.style.color = 'red';
    //console.log(number); 콘솔창에서 정답 확인 가능
}
answer.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if(answer.value.charAt(0)==answer.value.charAt(1)||answer.value.charAt(1)==answer.value.charAt(2)||answer.value.charAt(0)==answer.value.charAt(2)) {
            alert("각 자리에 중복된 수가 올 수 없습니다❗");
            answer.value = "";
        }
        else if(answer.value.length!=3) {
            alert("세 자릿 수만 입력할 수 있습니다❗");
            answer.value = "";
        }
        else{
            checkMatch();
        }
    }
});

function init() {
    count = 1;
    start.disabled = false;
    start.value = "게임시작";
    start.style.color = '#fff';
    hint.value = "";
}
function checkMatch() { //toString 활용
    if(answer.value===number.toString()){
        if(count==1) alert("대박!! 한 번에 정답을 맞추셨어요🥳");
        else alert("정답입니다😎 \n 총"+count+"번 시도로 성공하셨어요");
        answer.value = "";
        init();
    }
    else {
        display_result();
        count += 1;
    }
}

function display_result() {
    alert("아쉽게도 틀렸어요😅 힌트를 참고해보세요!");
    hint.value += count+". "+answer.value;
    var cnt = 0; //out 판단하기 위한 변수
    for (var i = 0; i < LEN; i++) { // strike 판단  
        if (answer.value.charAt(i)===number.toString().charAt(i)) {
            hint.value += '🟡';
        }
    }
    for (var i=0; i<LEN; i++) { // ball 판단
        for (var j=0; j<LEN; j++) {
            if (i!=j && answer.value.charAt(i)==number_array[j]) {
                hint.value += '🟢';
            }
        }
    }
    for (var i=0; i<LEN; i++) { //out 판단
        for (var j=0; j<LEN; j++) {
            if (answer.value.charAt(i) != number_array[j]) {
                cnt += 1;
            }
        }
    }
    if(cnt==9) hint.value += '🔴';
    hint.value += "\n";
    answer.value="";
}

end.addEventListener('click', () => {
    alert("아쉬워요😭 정답은 "+number+"이었습니다");
    init();
})
start.addEventListener('click', run);

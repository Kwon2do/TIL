let number;
let number_array;
let count = 1;
let isPlaying = false;
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
    number_array = {number100, number10, number1};
    answer.focus();
    isPlaying = true;
    start.disabled = true;
    start.value = "게임 진행 중";
    start.style.color = 'red';
    console.log(number);
}
answer.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkMatch();
    }
});

function init() {
    start.disabled = false;
    start.value = "게임시작";
    start.style.color = 'black';
    hint.value = "";
}
function checkMatch() { //toString 활용
    if(answer.value===number.toString()){
        alert("정답입니다😎 \n 총"+count+"번 시도로 성공하셨어요");
        answer.value = "";
        init();
    }
    else {
        //display_result();
        count += 1;
    }
}

/*function display_result() {
    for (var i = 0; i < 3; i++) { // strike 판단
        if (parseInt(answer.value.charAt(i)) === parseInt(number_array[i])) {
            hint.value += '🟡';
        }
    }

    for (var i = 0; i < 3; i++) { // ball 판단
        for (var j = 0; j < 3; j++) {
            if (i !== j && parseInt(answer.value.charAt(i)) === parseInt(number_array[j])) {
                hint.value += '🟢';
            }
        }
    }

    var isOut = Array.from(answer.value.toString()).every(function(digit) {
        return number_array.indexOf(parseInt(digit)) !== -1;
    });

    if (!isOut) {
        console.log('out');
    }
}*/
end.addEventListener('click', () => {
    alert("아쉬워요😭 정답은 "+number+"이었습니다");
    init();
})
start.addEventListener('click', run);
